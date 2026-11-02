/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      // Theme colours come from CSS variables (see app/globals.css) so light/dark mode works.
      black: "rgb(var(--bg) / <alpha-value>)",
      white: "rgb(var(--fg) / <alpha-value>)",
      gray: "rgb(var(--line) / <alpha-value>)",
      panel: "rgb(var(--panel) / <alpha-value>)",
      accent: "rgb(var(--accent) / <alpha-value>)",
      orange: "#E80102",
      pink: "#FF86C0",
    },
    extend: {
      animation: {
        float: "float 14s ease-in-out infinite",
        "float-slow": "float 22s ease-in-out infinite reverse",
        gradient: "gradient 20s ease infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, -30px) scale(1.15)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: ["1rem", { letterSpacing: "-0.01em" }],
        lg: ["1.5rem", { letterSpacing: "-0.05em" }],
        xl: ["3.5rem", { letterSpacing: "-0.05em" }],
        "2xl": ["4rem", { letterSpacing: "-0.05em" }],
        "3xl": ["5rem", { letterSpacing: "-0.05em" }],
        "4xl": ["6rem", { letterSpacing: "-0.05em" }],
      },
    },
  },
  plugins: [],
};
