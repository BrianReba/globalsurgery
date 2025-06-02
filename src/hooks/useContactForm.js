import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const useContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: '',
  });

  const uploadToCloudinary = async (file) => {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
    
    if (!cloudName || !uploadPreset) {
      console.error('Cloudinary environment variables not configured');
      throw new Error('Cloudinary configuration not available');
    }
    
    const cloudinaryData = new FormData();
    cloudinaryData.append('file', file);
    cloudinaryData.append('upload_preset', uploadPreset);
    cloudinaryData.append('folder', 'global_surgery');
    
    try {
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
      const response = await fetch(cloudinaryUrl, {
        method: 'POST',
        body: cloudinaryData,
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Cloudinary error response:', errorData);
        throw new Error(`Error uploading to Cloudinary: ${response.statusText}`);
      }
      
      const cloudinaryResponse = await response.json();
      return {
        url: cloudinaryResponse.secure_url,
        publicId: cloudinaryResponse.public_id,
        format: cloudinaryResponse.format
      };
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw error;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: '' });

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setSubmitStatus({
        success: false,
        error: true,
        message: 'Error de configuración. Intente más tarde.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData(form.current);
      const pdfFile = formData.get('pdf_file');
      let pdfInfoHTML = '';

      if (pdfFile && pdfFile.size > 0) {
        try {
          const cloudinaryResult = await uploadToCloudinary(pdfFile);

          pdfInfoHTML = `
            <div style="margin-top: 20px; padding: 15px; border: 1px solid #e0e0e0; border-radius: 5px; background-color: #f9f9f9;">
              <p style="margin-bottom: 10px;"><strong>Archivo adjunto:</strong> ${pdfFile.name} (${(pdfFile.size/1024).toFixed(1)}KB)</p>
              <a href="${cloudinaryResult.url}" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #0078d4; color: white; text-decoration: none; border-radius: 4px; font-weight: bold; margin-top: 15px;">
                Ver documento PDF adjunto
              </a>
            </div>
          `;
        } catch (cloudinaryError) {
          console.error('Cloudinary upload failed:', cloudinaryError);
          pdfInfoHTML = `<p style="color: red; margin-top:15px;">Hubo un error al subir el archivo adjunto: ${pdfFile.name}. Por favor, contacte al remitente para solicitarlo.</p>`;
        }
      }
      
      const templateParams = {
        to_email: 'ventas@globalsurgery.com.ar',
        from_name: formData.get('from_name') || '',
        from_email: formData.get('from_email') || '',
        phone: formData.get('phone') || '',
        message: formData.get('message') || '',
        pdf_info_html: pdfInfoHTML
      };
      
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus({
        success: true,
        error: false,
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
      });
      form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        error: true,
        message: `Error al enviar el mensaje: ${error.text || 'Intente más tarde.'}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    submitStatus,
    sendEmail
  };
};

export default useContactForm;