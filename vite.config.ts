import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Dyniq MVP dev config.
// app.dyniq.io is allowed so OpenLiteSpeed reverse proxy can serve Vite dev mode.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    allowedHosts: ["app.dyniq.io", "localhost", "127.0.0.1", "15.204.90.222"],
  },
});
