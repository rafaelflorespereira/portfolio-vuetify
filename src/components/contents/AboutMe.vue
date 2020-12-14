<template>
  <div id="aboutme">
    <v-row>
      <v-col>
        <h1 class="viewport">Who I am.</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        I am a front-end developer that especializes in Vue and Vuetify
        development.
      </v-col>
      <v-col cols="4">
        <v-row>
          <v-col class="highlight">
            <div>location</div>
            <div>email</div>
            <div>Phone</div>
            <div>discord</div>
          </v-col>
          <v-col align="end">
            <div>Brazil</div>
            <div>rafaelfp84@gmail.com</div>
            <div>+55 38 99208-1253</div>
            <div>@rafael</div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" align="end"
        ><h2>Front-end Developer</h2>
        <h3>Rafael Flores Pereira</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
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
</style>
