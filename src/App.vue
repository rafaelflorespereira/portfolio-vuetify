<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <sidebar :headerPositions="buttonsPositions" />

    <v-main>
      <my-header />
      <v-switch
        top
        right
        absolute
        label="darkMode"
        v-model="$vuetify.theme.dark"
        >Dark Mode</v-switch
      >
      <whoiam />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import MyHeader from "./components/Header";
import Whoiam from "./components/Whoiam";

export default {
  name: "App",

  components: {
    Sidebar,
    MyHeader,
    Whoiam,
  },

  data: () => ({
    // THEME LIGHT V-APPlication change the my color.
    // See how it is done in the vuetify doc.
    buttonsPositions: [],
  }),

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },

  mounted() {
    let elem = document.querySelectorAll(".viewport");
    for (let index = 0; index < elem.length; index++) {
      let rect = elem[index].getBoundingClientRect();
      this.buttonsPositions.push(rect.top);
    }
  },
};
</script>

<style></style>
