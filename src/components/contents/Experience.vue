<template>
  <div id="experience">
    <v-row>
      <v-col>
        <h1 class=" headersAnimations">
          Where I've been.
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-timeline>
          <v-timeline-item
            v-for="(time, i) in timeline"
            :key="i"
            color="primary"
          >
            <span slot="opposite">{{ time.year }}</span>
            <v-icon slot="icon">mdi mdi-map</v-icon>
            <v-card :color="i % 2 ? 'secondary' : 'tertiary'" hover>
              <v-card-title class="highlight">
                {{ time.title }}
              </v-card-title>
              <v-card-text>
                <p>
                  {{ time.content }}
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
          title: "LOREM IPSUM DdsfasdfasdfOLOR",
          content:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet",
          year: "2000",
        },
        {
          title: "LOREMasdfasdf IPSUM DOLOR",
          content:
            "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet",
          year: "2000",
        },
        {
          title: "LOREM IPSUM asfdasfdsda",
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
