import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    dark: false,
    themes: {
      light: {
        primary: "#ff4646",
        secondary: "#ff8585",
        anchor: "#ffb396",
        background: "#fff5c0",
      },
    },
  },
});
