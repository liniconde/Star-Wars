/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Habilita `expect` globalmente
    environment: "jsdom", // Simula un navegador para pruebas en React
    setupFiles: "./vitest.setup.ts", // Archivo de configuración previa
  },
});
