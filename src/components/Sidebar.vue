<template>
  <v-navigation-drawer app left dark>
    <h1 class="siglas">RF</h1>
    <h2 class="subheading">
      Rafael Flores
    </h2>
    <div class="subheading__sub">Front-end Developer</div>
    <v-btn
      v-for="button in headingButtons"
      :key="button"
      text
      dark
      small
      block
      style="margin: 1rem auto;"
    >
      {{ button }}
    </v-btn>

    <v-row class="u-positioned-bottom">
      <v-col cols="12">
        <v-btn v-for="button in socialButtons" :key="button" icon>
          <v-icon dark>
            {{ button }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      headingButtons: [
        "About Me",
        "Services",
        "Experience",
        "Skills & Education",
        "Portfolio",
        "Clients",
        "Contact",
      ],
      socialButtons: ["mdi-facebook", "mdi-linkedin", "mdi-github"],
    };
  },
};
</script>

<style>
.siglas {
  font-size: 4rem;
  color: #c5a880;
  margin: 0 auto;
  margin-bottom: -1rem;
  padding: 0 15%;
  display: block;
  text-align: center;
}
.subheading {
  color: #e6e6e6;
  font-size: 1.6rem;
  font-weight: 400;
  margin: 1rem auto;
  padding: 0 15%;
  text-align: center;
}
.subheading__sub {
  color: #e6e6e6;
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
