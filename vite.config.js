import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import pluginPurgeCss from "vite-plugin-purgecss"

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 80, // Adjust quality as needed
      }
    }),
    pluginPurgeCss()
  ],
});
