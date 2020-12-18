<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <sidebar :headerPositions="buttonsPositions" />

    <v-main>
      <my-header />
      <v-switch
        label="darkMode"
        style="display:inline-block"
        v-model="$vuetify.theme.dark"
        >Dark Mode</v-switch
      >

      <v-container fluid class="header" style="padding: 2rem">
        <Aboutme
          id="aboutme"
          v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions,
          }"
        />
        <div class="class u-bottom-spacing"></div>

        <Whatcanido
          id="services"
          v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions,
          }"
        />

        <div class="class u-bottom-spacing"></div>

        <Whereibeen
          id="experience"
          v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions,
          }"
        />

        <div class="class u-bottom-spacing"></div>

        <Whatiknow
          id="skills-education"
          v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions,
          }"
        />

        <div class="class u-bottom-spacing"></div>

        <Whatidone
          id="portfolio"
          v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions,
          }"
        />

        <div class="class u-bottom-spacing"></div>

        <Whatclients
          id="clients"
          v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions,
          }"
        />

        <div class="class u-bottom-spacing"></div>

        <ReachMe
          id="contact"
          v-waypoint="{
            active: true,
            callback: onWaypoint,
            options: intersectionOptions,
          }"
        />
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
    intersectionOptions: {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: [0, 1], // [0.25, 0.75] if you want a 25% offset!
    },
  }),

  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },

  methods: {
    onWaypoint({ el, going }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        switch (el.id) {
          case "aboutme":
            el.className = "slideUpAnimation";
            break;
          case "services":
            el.className = "slideUpAnimation";
            break;
          case "experience":
            el.className = "slideUpAnimation";
            break;
          case "skills-education":
            el.className = "slideUpAnimation";
            break;
          case "portfolio":
            el.className = "slideUpAnimation";
            break;
          case "clients":
            el.className = "slideUpAnimation";
            break;
          case "contact":
            el.className = "slideUpAnimation";
            break;
          default:
            break;
        }
        console.log("waypoint going in!");
      }
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
  animation: moveInBottom 1.2s ease-in 0.5s;
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
