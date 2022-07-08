module.exports = {
  purge: {
    enabled: false, // for prod enabled: true, dev - enabled: false
    content: ["./src/pages/**/**/*.pug", "./src/index.js", "./src/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      accent: "#D4C17F",
      dark: "#242B33",
      foot: "#2D343C",
      white: "#fff",
      input: "#ffffff33",
    },
    // outline: {
    //   accent: ['2px dotted accent', '3px']
    // },
    extend: {
      fontFamily: {
        text: ["Raleway, sans-serif"],
        header: ["PlayfairDisplay"],
      },
      gridTemplateRows: {
        stretch: "auto 1fr auto",
      },
      outline: {
        accent: ["1px solid #D4C17F", "2px"],
        white: ["1px solid #fff", "2px"],
      },
      backgroundImage: (theme) => ({
        first:
          "url('/src/pages/templates/includes/content-sections/img/1_promo/1_promo.png')",
        watch:
          "url('/src/pages/templates/includes/content-sections/img/4_description/watch-bg.png')",
      }),
      backgroundPosition: {
        "top-6": "center top -6rem",
      },
      minHeight: {
        "0vh": "0vh",
        "25vh": "25vh",
        "50vh": "50vh",
        "75vh": "75vh",
      },
      minWidth: {
        "0vw": "0vw",
        "25vw": "25vw",
        "50vw": "50vw",
        "75vw": "75vw",
        320: "18rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
