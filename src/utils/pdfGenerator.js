// src/utils/pdfGenerator.js
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Función para cargar imagen y convertirla a base64 (necesario para jsPDF)
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
    const margin = 15; // Margen general
    let currentY = margin; // Empezamos con el margen superior

    // --- Logo ---
    let logoEndY = currentY;
    if (logoBase64) {
      const imgProps = doc.getImageProperties(logoBase64);
      const imgWidth = 55; // Aumentamos un poco el ancho del logo
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
      doc.addImage(logoBase64, 'PNG', margin, currentY, imgWidth, imgHeight);
      logoEndY = currentY + imgHeight; // Guardamos dónde termina el logo
    }

    // --- Datos de la Empresa y Contacto (A la derecha del logo o debajo si es muy alto) ---
    const companyDataX = margin + 65; // X para los datos de la empresa, dejando espacio para el logo
    let companyDataY = margin + 5; // Y inicial para los datos de la empresa

    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text("Global Surgery S.A.", companyDataX, companyDataY);
    doc.setFont(undefined, 'normal');
    companyDataY += 5;
    doc.text("XX-XXXXX-X", companyDataX, companyDataY); 
    companyDataY += 5;
    doc.text("Calle falsa 123", companyDataX, companyDataY);
    companyDataY += 5;
    doc.text("+54 11 3564-6504", companyDataX, companyDataY);
    companyDataY += 5;
    doc.text("ventas@globalsurgery.com.ar", companyDataX, companyDataY);
    
    // Aseguramos que currentY esté debajo tanto del logo como de los datos de la empresa
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


    // --- Notas (si existen) ---
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


    // --- Tabla de Líneas del Presupuesto ---
    const tableColumn = ["Descripción", "Cant.", "P. Unit.", "Subtotal"]; // Acortar "Cantidad"
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
      theme: 'grid', // o 'striped'
      headStyles: { 
        fillColor: [0, 51, 102], // Azul oscuro corporativo (ejemplo)
        textColor: [255, 255, 255], // Texto blanco para contraste
        fontStyle: 'bold'
      },
      styles: { 
        fontSize: 9, 
        cellPadding: 2.5, // Un poco más de padding
        valign: 'middle' 
      },
      columnStyles: {
        0: { cellWidth: 'auto', fontStyle: 'normal' }, // Descripción
        1: { cellWidth: 18, halign: 'right' },  // Cant.
        2: { cellWidth: 28, halign: 'right' },  // P. Unit.
        3: { cellWidth: 28, halign: 'right' }   // Subtotal
      },
      didDrawPage: function (data) { 
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