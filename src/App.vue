<template>
  <v-app>
    <sidebar />
    <my-header />
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import MyHeader from "./components/Header";

export default {
  name: "App",

  components: {
    Sidebar,
    MyHeader,
  },
  data: () => ({
    //
  }),
};
</script>
