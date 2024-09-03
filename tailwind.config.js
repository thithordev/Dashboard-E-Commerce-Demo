/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
    theme: {
        asideScrollbars: {
            light: "light",
            gray: "gray",
          },
          extend: {
            zIndex: {
              "-1": "-1",
            },
            flexGrow: {
              5: "5",
            },
            maxHeight: {
              "screen-menu": "calc(100vh - 3.5rem)",
              modal: "calc(100vh - 160px)",
            },
            transitionProperty: {
              position: "right, left, top, bottom, margin, padding",
              textColor: "color",
            },
            keyframes: {
              "fade-out": {
                from: { opacity: 1 },
                to: { opacity: 0 },
              },
              "fade-in": {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            },
            animation: {
              "fade-out": "fade-out 250ms ease-in-out",
              "fade-in": "fade-in 250ms ease-in-out",
            },
          },
    },
    plugins: [
        require("@tailwindcss/forms"),       
    ]
}

