module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:
      {
          starBanner: "url(../dist/img/xl-hero-desktop_2021.png)",
          bituinBanner: "url(../dist/img/hero-mobile_2021.webp)"
        },
      colors: {
       
        dark: '#2b2b2b2b',
        light: '#ffffff',
        berde: '#006341',
        sec1: '#988bcb',
        sec2: '#cbc2af',
        sec3: '#8dc982',
        sec4: '#e6796b',
        sec5: '#8fb1d6',
        sec6: '#958bc6',
        sec7: '#c9591d',
        sec8: '#002e1f',
        lberde: "#d4e9e2",
      }

    },
  },
  plugins: [],
}