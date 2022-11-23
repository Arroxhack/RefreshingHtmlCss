/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Tailwind/*.html"],  /* le digo que compile todo lo que este en la carpeta Tailwind que sea un archivo.html */
  theme: {
    screens:{ /* we specify screen sizes */
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: { /* we specify custom colors, tailwind already gives us many other colors */
        brightRed: "hsl(12, 88%, 59%)", /* we can use hex values, rgbs, hsl, whatever we want */
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(223, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      } 
    },
  },
  plugins: [],
}
