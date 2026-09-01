/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    // Allow any integer opacity (e.g. text-ink/12, bg-paper/85) via the slash modifier.
    opacity: Object.fromEntries(
      Array.from({ length: 101 }, (_, i) => [i, (i / 100).toString()]),
    ),
    extend: {
      colors: {
        ink: "#12130f",
        paper: "#f7f4ec",
        "paper-dim": "#efe9dc",
        forest: "#1c3d30",
        "forest-bright": "#2c5c47",
        gold: "#c88a2e",
        "gold-soft": "#e3b872",
        clay: "#a6482f",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"DM Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
