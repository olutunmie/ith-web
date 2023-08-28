/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      u8: ["U8-Bold", "sans-serif"],
      general: ["General Sans", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        // primary: "#e1bcff",
        primary: "#cf95fe",
        secondary: "#4400fe",
        tertiary: "#1d123c",
      },
    },
  },
  plugins: [],
};
