import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F5F0",
        ink: "#1A1A18",
        accent: "#1E4D35",
        "accent-light": "#2D6B4A",
        "ink-muted": "#5A5A56",
        "ink-faint": "#9A9A94",
        rule: "#D8D4CE",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "stat-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
      },
      spacing: {
        section: "clamp(5rem, 12vw, 10rem)",
      },
      letterSpacing: {
        "caps": "0.12em",
      },
      maxWidth: {
        "content": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
