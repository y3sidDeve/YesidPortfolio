const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "green-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#091a14", // Fondo oscuro con un tono verde muy oscuro
            foreground: "#E0F7E0", // Texto claro con un tono verde muy suave
            primary: {
              50: "#1B5E20",
              100: "#2E7D32",
              200: "#388E3C",
              300: "#43A047",
              400: "#4CAF50",
              500: "#66BB6A",
              600: "#81C784",
              700: "#A5D6A7",
              800: "#C8E6C9",
              900: "#E8F5E9",
              DEFAULT: "#4CAF50", // Verde principal
              foreground: "#E0F7E0", // Texto claro para contraste con el fondo
            },
            focus: "#81C784", // Verde claro para el foco
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },

        "green-light": {
          extend: "light", // <- inherit default values from light theme
          colors: {
            background: "#E0F7E0", // Fondo claro con un tono verde muy suave
            foreground: "#0A1A0A", // Texto oscuro con un tono verde muy oscuro
            primary: {
              50: "#1B5E20",
              100: "#2E7D32",
              200: "#388E3C",
              300: "#43A047",
              400: "#4CAF50",
              500: "#66BB6A",
              600: "#81C784",
              700: "#A5D6A7",
              800: "#C8E6C9",
              900: "#E8F5E9",
              DEFAULT: "#4CAF50", // Verde principal
              foreground: "#0A1A0A", // Texto oscuro para contraste con el fondo
            },
            focus: "#81C784", // Verde claro para el foco
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
