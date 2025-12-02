import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { validateEmail, validatePhone, sanitizeInput } from '../utils/formValidation';

const useContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: '',
  });
  const [formLoadTime] = useState(Date.now());

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

  // Rate Limiting Helpers (localStorage)
  const getSubmitCount = () => {
    const data = localStorage.getItem('contactFormSubmits');
    if (!data) return 0;

    const { count, timestamp } = JSON.parse(data);
    const hourAgo = Date.now() - 3600000; // 1 hora

    if (timestamp < hourAgo) {
      localStorage.removeItem('contactFormSubmits');
      return 0;
    }

    return count;
  };

  const incrementSubmitCount = () => {
    const current = getSubmitCount();
    localStorage.setItem('contactFormSubmits', JSON.stringify({
      count: current + 1,
      timestamp: Date.now()
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    // 1. Rate Limiting Check
    const submitCount = getSubmitCount();
    if (submitCount >= 3) {
      toast.error('Has alcanzado el límite de envíos. Intenta en 1 hora.');
      return;
    }

    // 2. Time-based validation (min 3 segundos desde carga)
    const timeSinceLoad = Date.now() - formLoadTime;
    if (timeSinceLoad < 3000) {
      toast.error('Por favor completa el formulario correctamente.');
      return;
    }

    // 3. Honeypot check
    const honeypot = formData.get('website');
    if (honeypot) {
      console.log('Bot detected');
      return; // Silent fail para bots
    }

    // 4. Field validations
    const name = sanitizeInput(formData.get('from_name'));
    const email = formData.get('from_email');
    const phone = formData.get('phone');
    const message = sanitizeInput(formData.get('message'));

    if (!validateEmail(email)) {
      toast.error('Email inválido');
      return;
    }

    if (phone && !validatePhone(phone)) {
      toast.error('Teléfono inválido. Usa formato: +54 11 1234-5678');
      return;
    }

    if (message.length < 10 || message.length > 1000) {
      toast.error('El mensaje debe tener entre 10 y 1000 caracteres');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: false, message: '' });

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error('Error de configuración. Intente más tarde.');
      setIsSubmitting(false);
      return;
    }

    try {
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
        from_name: name,
        from_email: email,
        phone: phone || '',
        message: message,
        pdf_info_html: pdfInfoHTML
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Éxito
      toast.success('¡Mensaje enviado con éxito! Nos contactaremos pronto.', {
        position: 'top-center',
        autoClose: 5000,
      });
      incrementSubmitCount();
      form.current.reset();

      setSubmitStatus({
        success: true,
        error: false,
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
      });
    } catch (error) {
      console.error('Error sending email:', error);

      // Error
      toast.error(`Error: ${error.text || 'Intenta más tarde'}`, {
        position: 'top-center',
        autoClose: 7000,
      });

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
