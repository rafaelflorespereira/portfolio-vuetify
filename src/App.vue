<template>
  <v-app>
    <sidebar />

    <v-main>
      <my-header />
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
  }),
};
</script>

<style></style>
