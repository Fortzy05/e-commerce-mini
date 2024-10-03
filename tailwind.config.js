/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Merge both branches
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // From main branch
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1780px",
      },
      boxShadow: {
        "custom-shadow": "0px 1px 13px 0px #0000000D", // From feature/profile branch
      },
      colors: {
        primary: "#DB4444",
        "blue-gray": "#CBE4E8",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
  		colors: {
  			primary: '#DB4444',
  			'blue-gray': '#CBE4E8'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      fontFamily: {
        poppins:  '"Poppins" sans-serif',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
