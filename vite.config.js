import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        // additionalData: `@import "${path.resolve(__dirname, 'src/assets/main.less')}";`,
        javascriptEnabled: true,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {},
  server: {
    proxy: {
      '/ship-management/v1/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
