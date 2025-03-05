import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/shared/assets",
      "@models": "/src/shared/models",
      "@constantes": "/src/shared/constantes",
      "@components": "/src/shared/components",
    },
  },
});
