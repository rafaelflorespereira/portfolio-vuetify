<template>
  <v-row>
    <v-col cols="12">
      <v-btn large v-for="button in socialButtons" :key="button" icon>
        <v-icon dark>
          {{ button }}
        </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      socialButtons: ["mdi-facebook", "mdi-linkedin", "mdi-github"],
    };
  },
};
</script>

<style></style>
