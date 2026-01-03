import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Φόρτωση αρχείου περιβάλλοντος με βάση το `mode` στον τρέχοντα κατάλογο εργασίας.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Επιτρέπει στο Gemini SDK να έχει πρόσβαση στο API_KEY μέσω του process.env.API_KEY
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: 'index.html',
          privacy: 'privacy.html',
          terms: 'terms.html',
          contact: 'contact.html',
        },
      },
    }
  };
});