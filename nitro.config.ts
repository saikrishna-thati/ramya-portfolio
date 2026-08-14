import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  serveStatic: true,
  compatibilityDate: "2024-01-01",
  routeRules: {
    "/**": {
      headers: {
        "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:; connect-src 'self';",
      },
    },
  },
});
