<template>
  <v-navigation-drawer app permanent left>
    <h1 class="siglas" @click="goTop">RF</h1>
    <h2 class="subheading">
      Rafael Flores
    </h2>
    <div class="subheading__sub">Front-end Developer</div>
    <v-btn
      v-for="(button, i) in headingButtons"
      :key="i"
      text
      small
      block
      style="margin: 1rem auto;"
      :href="button.height"
    >
      {{ button.title }}
    </v-btn>

    <social-buttons class="u-positioned-bottom" />
  </v-navigation-drawer>
</template>

<script>
import SocialButtons from "./SocialButtons.vue";
export default {
  components: { SocialButtons },
  props: ["headerPositions"],
  data() {
    return {
      headingButtons: [
        {
          title: "About Me",
          height: "#aboutme",
        },
        {
          title: "Services",
          height: "#services",
        },
        {
          title: "Experience",
          height: "#experience",
        },
        {
          title: "Skills & Education",
          height: "#skills-education",
        },
        {
          title: "Portfolio",
          height: "#portfolio",
        },
        {
          title: "Clients",
          height: "#clients",
        },
        {
          title: "Contact",
          height: "#contact",
        },
      ],
      socialButtons: ["mdi-facebook", "mdi-linkedin", "mdi-github"],
    };
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
.siglas {
  color: var(--v-primary-base);
  font-size: 4rem;
  margin: 0 0;
  margin-bottom: -1rem;
  padding: 0;
  display: block;
  text-align: center;
  transition: all 1s;
}
.siglas:hover {
  cursor: pointer;
  box-shadow: 0.2rem 0.2rem 1.5rem rgba(0, 0, 0, 0.85);
}
.subheading {
  color: var(--v-secondary-base);
  font-size: 1.6rem;
  font-weight: 400;
  margin: 1rem auto;
  padding: 0 15%;
  text-align: center;
}
.subheading__sub {
  text-align: center;
  margin: 1rem;
}
.u-positioned-bottom {
  position: absolute;
  bottom: 1vh;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
