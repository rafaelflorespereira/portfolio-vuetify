<template>
  <v-navigation-drawer
    fixed
    permanent
    left
    dark
  >
    <h1 class="siglas">RF</h1>
    <h2 class="subheading">Rafael Flores</h2>

    <v-btn
      v-for="button in headingButtons"
      :key="button"
      text
      dark
      small
      block
      style="margin: 10px auto;"
    >
      {{button}}
    </v-btn>

    <v-row
      justify="center"
    >
      <v-col 
        cols=6
      >
        <v-btn 
          v-for="button in socialButtons"
          :key="button"
          icon
        >
          <v-icon
            dark
          >
            mdi-facebook
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
        'About Me',
        'Services',
        'Experience',
        'Skills & Education',
        'Portfolio',
        'Clients',
        'Contact'
      ],
      socialButtons: [
        'fb',
        'lk',
        'gh'
      ]
    }
  }
}
</script>

<style>
.siglas {
  font-size: 6rem;
  color: #c5a880;
  margin: 0 auto;
  padding: 0 20%;
  display: block;
  text-align: center;
}
.subheading {
  color: #e6e6e6;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 auto;
  padding: 0 20%;
  text-align: center;
}
</style>