/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      overflow: ["break-word"],
      typography: {
        DEFAULT: {
          css: {
            pre: {
              "overflow-wrap": "anywhere",
              wordWrap: "break-word",
              "overflow-x": "auto",
              "white-space": "pre",
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
