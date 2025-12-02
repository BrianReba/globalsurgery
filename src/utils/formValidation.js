// Email validation (RFC 5322 simplified)
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Phone validation (flexible, acepta formatos internacionales)
export const validatePhone = (phone) => {
  // Acepta: +54 11 1234-5678, (011) 1234-5678, 11-1234-5678, etc.
  // eslint-disable-next-line no-useless-escape
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  // eslint-disable-next-line no-useless-escape
  return cleaned.length >= 8 && cleaned.length <= 15 && /^[\+]?[0-9]+$/.test(cleaned);
};

// Sanitize input (previene XSS básico)
export const sanitizeInput = (input) => {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Remueve < y >
    .substring(0, 1000); // Max 1000 chars
};
