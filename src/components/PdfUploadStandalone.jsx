import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PdfUploadStandalone = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1mb

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (file.type !== 'application/pdf') {
      setSelectedFile(null);
      toast.error('Por favor seleccione un archivo PDF válido.');
      // Reset input
      e.target.value = '';
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setSelectedFile(null);
      toast.error(`El archivo excede el tamaño máximo de 1MB. Tu archivo: ${(file.size/1024/1024).toFixed(2)}MB`);
      // Reset input
      e.target.value = '';
      return;
    }

    setSelectedFile(file);
    toast.success(`PDF "${file.name}" cargado correctamente`);
  };

  return (
    <div className='mt-6 pt-6 border-t border-cyan-600'>
      <h3 className='text-lg font-medium text-cyan-50 mb-2'>
        Adjuntar Documento - Receta (opcional)
      </h3>
      <p className='text-sm text-cyan-100 mb-4'>
        Si lo desea, puede adjuntar un PDF con información adicional (máx. 1MB)
      </p>

      <div className='space-y-4'>
        <div className='flex items-center'>
          <label
            htmlFor='pdf-upload'
            className='cursor-pointer bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-md transition duration-150 ease-in-out flex-grow text-center'
          >
            {selectedFile ? selectedFile.name : 'Seleccionar PDF'}
          </label>
          <input
            id='pdf-upload'
            type='file'
            name='pdf_file'
            accept='application/pdf'
            onChange={handleFileChange}
            className='hidden'
          />
        </div>

        {selectedFile && (
          <div className='bg-green-100 border-l-4 border-green-500 text-green-700 p-3 rounded' role='alert'>
            <p>Archivo seleccionado: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)}KB)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfUploadStandalone;
