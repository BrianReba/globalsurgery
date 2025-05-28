// src/utils/pdfGenerator.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const imageToBase64 = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
};

export const generateBudgetPDF = (budgetData, logoPath) => {
  imageToBase64(logoPath, (logoBase64) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 15; 
    let currentY = margin;

    const drawWatermark = () => {
      if (logoBase64) {
        const imgWatermarkProps = doc.getImageProperties(logoBase64);
        const watermarkWidth = pageWidth * 0.75; 
        const watermarkHeight = (imgWatermarkProps.height * watermarkWidth) / imgWatermarkProps.width;
        
        const watermarkX = (pageWidth - watermarkWidth) / 2;
        const watermarkY = (pageHeight - watermarkHeight) / 2 + (pageHeight * 0.30); 

        doc.saveGraphicsState();
        doc.setGState(new doc.GState({opacity: 0.03})); 

        doc.addImage(logoBase64, 'PNG', watermarkX, watermarkY, watermarkWidth, watermarkHeight);

        doc.restoreGraphicsState(); 
      }
    };
    drawWatermark();


    // --- Logo ---
    let logoEndY = currentY;
    if (logoBase64) {
      const imgProps = doc.getImageProperties(logoBase64);
      const imgWidth = 55;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
      doc.addImage(logoBase64, 'PNG', margin, currentY, imgWidth, imgHeight);
      logoEndY = currentY + imgHeight;
    }

    // --- Datos de la Empresa y Contacto ---
    const companyDataX = margin + 65;
    let companyDataY = margin + 5;
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text("Global Surgery S.A.", companyDataX, companyDataY);
    doc.setFont(undefined, 'normal');
    companyDataY += 5;
    doc.text("30-71794979-6", companyDataX, companyDataY);
    companyDataY += 5;
    doc.text("Av Rivadavia 2431, CABA. Argentina", companyDataX, companyDataY);
    companyDataY += 5;
    doc.text("+54 11 3564-6504", companyDataX, companyDataY);
    companyDataY += 5;
    doc.text("ventas@globalsurgery.com.ar", companyDataX, companyDataY);
    currentY = Math.max(logoEndY, companyDataY) + 10;

    // --- Título del Presupuesto ---
    doc.setFontSize(18);
    doc.setFont(undefined, 'bold');
    doc.text('PRESUPUESTO', pageWidth / 2, currentY, { align: 'center' });
    currentY += 10;
    doc.setFont(undefined, 'normal');

    // --- Datos del Presupuesto y Cliente ---
    doc.setFontSize(10);
    const issueDate = new Date(budgetData.issue_date).toLocaleDateString();
    doc.text(`Cliente: ${budgetData.client_name}`, margin, currentY);
    doc.text(`Fecha: ${issueDate}`, pageWidth - margin, currentY, { align: 'right' });
    currentY += 7;

    // --- Línea divisoria ---
    doc.setDrawColor(180);
    doc.setLineWidth(0.5);
    doc.line(margin, currentY - 3, pageWidth - margin, currentY - 3);
    currentY += 2;

    if (budgetData.notes && budgetData.notes.trim() !== "") {
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.text('Notas Adicionales:', margin, currentY);
      currentY += 5;
      doc.setFont(undefined, 'normal');
      const notesText = doc.splitTextToSize(budgetData.notes, pageWidth - (2 * margin));
      doc.text(notesText, margin, currentY);
      currentY += (notesText.length * 4.5) + 8;
    }

    const tableColumn = ["Descripción", "Cant.", "P. Unit.", "Subtotal"];
    const tableRows = [];
    budgetData.lines.forEach(line => {
      const lineData = [
        line.item_description,
        line.quantity,
        `$${parseFloat(line.unit_price).toFixed(2)}`,
        `$${parseFloat(line.line_total).toFixed(2)}`
      ];
      tableRows.push(lineData);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: currentY,
      theme: 'grid',
      headStyles: {
        fillColor: [0, 51, 102],
        textColor: [255, 255, 255],
        fontStyle: 'bold'
      },
      styles: {
        fontSize: 9,
        cellPadding: 2.5,
        valign: 'middle'
      },
      columnStyles: {
        0: { cellWidth: 'auto', fontStyle: 'normal' },
        1: { cellWidth: 18, halign: 'right' },
        2: { cellWidth: 28, halign: 'right' },
        3: { cellWidth: 28, halign: 'right' }
      },
      didDrawPage: function (data) {
        drawWatermark();

        doc.setFontSize(8);
        doc.setTextColor(100);
        doc.text('Página ' + doc.internal.getNumberOfPages(), data.settings.margin.left, pageHeight - 10);
      }
    });

    currentY = doc.lastAutoTable.finalY + 10;

    // --- Totales ---
    doc.setFontSize(10);
    const totalsX = pageWidth - margin;
    doc.text(`Subtotal: $${parseFloat(budgetData.subtotal_amount).toFixed(2)}`, totalsX, currentY, { align: 'right' });
    currentY += 6;
    const taxPercentage = parseFloat(budgetData.applied_tax_percentage);
    let taxLabel = "Impuesto";
    if (taxPercentage === 0) taxLabel = "Exento (0%)";
    else taxLabel = `IVA (${taxPercentage.toFixed(1)}%)`;
    doc.text(`${taxLabel}: $${parseFloat(budgetData.tax_amount).toFixed(2)}`, totalsX, currentY, { align: 'right' });
    currentY += 7;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text(`TOTAL: $${parseFloat(budgetData.total_amount).toFixed(2)}`, totalsX, currentY, { align: 'right' });
    doc.setFont(undefined, 'normal');
    currentY += 15;

    doc.save(`Presupuesto-${budgetData.client_name.replace(/\s+/g, '_')}-${budgetData.id.substring(0,8)}.pdf`);
  });
};