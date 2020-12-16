import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    dark: false,
    themes: {
      light: {
<<<<<<< HEAD
        primary: "#ff4646",
        secondary: "#ff8585",
        anchor: "#ffb396",
        background: "#fff5c0",
=======
        primary: "#ffb396",
        secondary: "#532e1c",
        anchor: "#e6e6e6",
        background: "#8e8e8e",
>>>>>>> 73e90dec465461635969a41c07a82a7b4525730d
      },
    },
  },
});
