/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", "dim"], // Enables dark and dim via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Text colors
        "text-color": "#ffffff",
        "text-color-dark": "#f1f1f1",      // New dark (less bright)
        "text-color-dim": "#ffffff",      // From previous dark

        // Dispute/contrast colors
        "dispute-color": "#000000",
        "dispute-color-dark": "#f5f5f5",   // New dark
        "dispute-color-dim": "#ffffff",   // From previous dark

        // Card backgrounds
        card: "#ffffff",
        "card-dark": "#0b0b0b",            // New dark: deep black
        "card-dim": "#020610",            // From previous dark

        // Sub-card backgrounds
        "sub-card": "#f8f9fa",
        "sub-card-dark": "#1a1a1a",        // New dark
        "sub-card-dim": "#0a1a2e",         // From previous dark

        // Border colors
        "custom-border": "#e9ecef",
        "custom-border-dark": "#2a2a2a",   // New dark
        "custom-border-dim": "#1a2e42",    // From previous dark

        // Pre/code backgrounds
        "pre-bg": "#fbfcfd",
        "pre-bg-dark": "#111111",          // New dark
        "pre-bg-dim": "#0a1528",           // From previous dark

        // Gradient colors (use dark grayscale now)
        "gradient-start": "#00d4aa",
        "gradient-end": "#00a693",
        "gradient-start-dark": "#333333",  // New dark
        "gradient-end-dark": "#1e1e1e",    // New dark
        "gradient-start-dim": "#00d4aa",   // From previous dark
        "gradient-end-dim": "#00a693",

        // Accent colors
        "accent": "#00d4aa",
        "accent-dark": "#999999",          // New dark neutral
        "accent-dim": "#00d4aa",           // From previous dark

        // Background colors
        "bg-primary": "#ffffff",
        "bg-primary-dark": "#000000",      // New dark
        "bg-primary-dim": "#020610",       // From previous dark

        "bg-secondary": "#f8f9fa",
        "bg-secondary-dark": "#121212",    // New dark
        "bg-secondary-dim": "#040812",     // From previous dark
      },

      backgroundImage: {
        'gradient-teal': 'linear-gradient(135deg, #00d4aa 0%, #00a693 100%)',
        'gradient-teal-hover': 'linear-gradient(135deg, #00e6bb 0%, #00b8a0 100%)',
        'gradient-green-dim': 'linear-gradient(135deg, #00d4aa 0%, #00a693 100%)', // used former dark colors
      },

      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.06)',
        'glow-hover': '0 0 30px rgba(255, 255, 255, 0.08)',
        'glow-green': '0 0 20px rgba(255, 255, 255, 0.05)', // re-neutralized
      }
    },
  },
  plugins: [],
};
