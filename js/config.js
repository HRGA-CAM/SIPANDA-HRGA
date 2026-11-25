/**
 * Konfigurasi frontend — satu-satunya berkas yang perlu Anda ubah setelah deploy backend.
 * JANGAN menaruh token/API key/sandi di sini (berkas ini publik). Semua rahasia ada di
 * Script Properties pada backend.
 */
window.APP_CONFIG = {
  // Tempel URL Web App Google Apps Script (berakhiran /exec)
  GAS_URL: 'https://script.google.com/macros/s/AKfycbwIH0GX0XUfQyU3yIh5fKeRGqzsxyILTkLETgctczdqnyCI6Z1EJ9LgRjz8HCh9jMTVGQ/exec',
  // Opsional: Google OAuth Client ID (publik). Jika kosong, diambil dari server (Script Properties).
  GOOGLE_CLIENT_ID: '',
  APP_NAME: 'SIPANDA HRGA'
};
