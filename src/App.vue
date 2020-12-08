<template>
  <v-app>
    <sidebar/>
    <v-row
      fill-height
      text-right
    >
      <v-img
        src="../public/background-image.jpg"
      >
      </v-img>
      <v-col justify="end">
        <div>Rafael Flores</div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'App',

  components: {
    Sidebar
  }
  ,

  data: () => ({
    //
  }),
};
</script>
