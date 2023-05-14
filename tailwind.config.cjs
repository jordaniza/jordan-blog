/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              background: "blanchedalmond",
              padding: "0.5px 3px",
              borderRadius: "0.3em",
              fontWeight: "normal",
            },
            "code::before": { content: "" },
            "code::after": { content: "" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
