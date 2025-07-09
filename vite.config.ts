
import { defineConfig } from 'vite';
import polyfillNode from 'rollup-plugin-polyfill-node';

export default defineConfig({
  build: {
    outDir: 'dist', // ✅ This must match amplify.yml
    rollupOptions: {
      plugins: [polyfillNode()],
    },
  },
});