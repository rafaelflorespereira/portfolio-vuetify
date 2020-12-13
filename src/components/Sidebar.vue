<template>
  <v-navigation-drawer app permanent left>
    <h1 class="siglas">RF</h1>
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
      @click="scrollTo(button.height)"
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
          height: 1218,
        },
        {
          title: "Services",
          height: 2100,
        },
        {
          title: "Experience",
          height: "",
        },
        {
          title: "Skills & Education",
          height: "",
        },
        {
          title: "Portfolio",
          height: "",
        },
        {
          title: "Clients",
          height: "",
        },
        {
          title: "Contact",
          height: "",
        },
      ],
      socialButtons: ["mdi-facebook", "mdi-linkedin", "mdi-github"],
    };
  },
  methods: {
    scrollTo(height) {
      window.scrollTo({
        top: height,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    for (let i in this.headerPositions) {
      console.log(this.headerPositions[i]);
      this.headingButtons[i].height = this.headerPositions[i];
    }
  },
};
</script>

<style>
.siglas {
  color: var(--v-primary-base);
  font-size: 4rem;
  margin: 0 auto;
  margin-bottom: -1rem;
  padding: 0 15%;
  display: block;
  text-align: center;
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
