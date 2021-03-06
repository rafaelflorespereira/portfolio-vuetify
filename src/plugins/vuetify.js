import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    dark: false,
    themes: {
      light: {
        primary: "#ffb396",
        secondary: "#e6e6e6",
        tertiary: "#F2F3D9",
        anchor: "#e6e6e6",
        background: "#8e8e8e",
      },
    },
  },
});
