/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["business"],
    // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
