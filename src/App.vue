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

      <v-container fluid class="header" style="padding: 2rem">
        <Whoiam />
        <div class="class u-bottom-spacing"></div>

        <Whatcanido />

        <div class="class u-bottom-spacing"></div>

        <Whereibeen />

        <div class="class u-bottom-spacing"></div>

        <Whatiknow />

        <div class="class u-bottom-spacing"></div>

        <Whatidone />

        <div class="class u-bottom-spacing"></div>

        <Whatclients />

        <div class="class u-bottom-spacing"></div>

        <ReachMe />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import MyHeader from "./components/Header";
import Whoiam from "./components/contents/Whoiam";
import Whatiknow from "./components/contents/Whatiknow";
import Whatcanido from "./components/contents/Whatcanido.vue";
import Whatidone from "./components/contents/Whatidone";
import Whereibeen from "./components/contents/Whereibeen.vue";
import Whatclients from "./components/contents/Whatclients.vue";
import ReachMe from "./components/contents/ReachMe";

export default {
  name: "App",

  components: {
    Sidebar,
    MyHeader,
    Whoiam,
    Whatcanido,
    Whereibeen,
    Whatiknow,
    Whatidone,
    ReachMe,
    Whatclients,
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
