<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <sidebar :headerPositions="buttonsPositions" />

    <v-main>
      <my-header />
      <v-switch label="darkMode" v-model="$vuetify.theme.dark"
        >Dark Mode</v-switch
      >

      <v-container fluid class="header" style="padding: 2rem">
        <Aboutme class="slideUpAnimation" />
        <div class="class u-bottom-spacing"></div>

        <Whatcanido class="slideUpAnimation" />

        <div class="class u-bottom-spacing"></div>

        <Whereibeen class="slideUpAnimation" />

        <div class="class u-bottom-spacing"></div>

        <Whatiknow class="slideUpAnimation" />

        <div class="class u-bottom-spacing"></div>

        <Whatidone class="slideUpAnimation" />

        <div class="class u-bottom-spacing"></div>

        <Whatclients class="slideUpAnimation" />

        <div class="class u-bottom-spacing"></div>

        <ReachMe />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import MyHeader from "./components/Header";
import Aboutme from "./components/contents/AboutMe";
import Whatiknow from "./components/contents/SkillsEducation";
import Whatcanido from "./components/contents/Services.vue";
import Whatidone from "./components/contents/Portfolio";
import Whereibeen from "./components/contents/Experience.vue";
import Whatclients from "./components/contents/Clients";
import ReachMe from "./components/contents/Contact";

export default {
  name: "App",

  components: {
    Sidebar,
    MyHeader,
    Aboutme,
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
};
</script>

<style>
.col h1 {
  font-size: 3rem;
  color: var(--v-primary-base);
}
.col h2 {
  color: var(--v-primary-base);
  font-size: 250%;
  padding-left: 2rem;
  font-weight: 400;
}
.col h3 {
  color: var(--v-secondary-base);
  font-weight: 500;
  font-size: 1.6rem;
}
.highlight {
  color: var(--v-primary-base);
  text-transform: uppercase;
}
.u-bottom-spacing {
  content: "";
  display: block;
  height: 6rem;
}
.slideUpAnimation {
  animation: moveInBottom 2s ease-in 0.5s;
  animation-fill-mode: backwards;
}
@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
.headersAnimations {
  display: inline-block;
  transition: all 0.2s;
}
.headersAnimations:hover {
  -webkit-transform: skewY(2deg) skewX(15deg) scale(1.1);
  transform: skewY(2deg) skewX(15deg) scale(1.1);
  text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.45);
}
</style>
