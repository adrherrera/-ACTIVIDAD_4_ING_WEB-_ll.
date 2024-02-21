import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  base: "https://github.com/adrherrera/ACTIVIDAD-4-ING-WEB-ll.git",
  plugins: [react(), eslint()],
});
