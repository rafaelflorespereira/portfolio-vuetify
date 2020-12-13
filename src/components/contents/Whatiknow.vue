<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="viewport">What I know.</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="3">
        <v-row
          ><v-col><h2>My Education</h2></v-col></v-row
        >
        <v-row
          v-for="i in 4"
          :key="i"
          style="border-left: 2px white solid; margin-bottom: 2rem;"
        >
          <v-col>
            <h4>State University</h4>
          </v-col>
          <v-col style="text-align: right;">
            <h4 class="highlight">Certificate of Completion</h4>
            <p>Computer Sciences</p>
            <p>2000-2010</p>
          </v-col>
        </v-row>
      </v-col>

      <v-spacer></v-spacer>
      <v-col cols="3">
        <v-row>
          <v-col>
            <h2>My Skills</h2>
          </v-col>
        </v-row>
        <div v-for="i in 2" :key="i">
          <v-row>
            <v-col>
              <h3>Graphics Media</h3>
            </v-col>
          </v-row>
          <v-row v-for="i in 4" :key="i">
            <v-col>
              Skill 1
            </v-col>
            <v-col>
              <v-rating
                v-model="rating"
                background-color="orange lighten-3"
                color="orange"
                readonly
              ></v-rating>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4,
    };
  },
};
</script>

<style></style>
