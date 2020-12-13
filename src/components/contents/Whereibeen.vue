<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="viewport">Where I've been.</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-timeline>
          <v-timeline-item
            v-for="(time, i) in timeline"
            :key="i"
            color="primary"
            dark
          >
            <span slot="opposite">Year</span>
            <v-card dark hover>
              <v-card-title class="highlight">
                Lorem Ipsum Dolor
              </v-card-title>
              <v-card-text>
                <p>
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                  scaevola imperdiet
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          title: "LOREM IPSUM DOLOR",
          content:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet",
          year: "2000",
        },
        {
          title: "LOREM IPSUM DOLOR",
          content:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet",
          year: "2000",
        },
        {
          title: "LOREM IPSUM DOLOR",
          content:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet",
          year: "2000",
        },
        {
          title: "LOREM IPSUM DOLOR",
          content:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet",
          year: "2000",
        },
      ],
    };
  },
};
</script>

<style></style>
