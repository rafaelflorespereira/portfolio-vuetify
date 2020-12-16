<template>
  <div id="services">
    <v-row>
      <v-col>
        <h1 class="headersAnimations">
          What I can do for you.
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-expansion-panels hover>
          <v-expansion-panel v-for="(panel, i) in expansionPanels" :key="i">
            <v-expansion-panel-header>
              {{ panel.header }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ panel.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expansionPanels: [
        {
          header: "Web Development",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor. Lorem ipsum dolor sit amet consectetur adipisicing elit, eiusmod tempor. Proin luctus nulla elit, vitae varius massa.Etiam massa sapien, ultricies quis enim at, tempor fringilla metus. Nulla rhoncus enim sed consectetur. Mauris et eros feugiat, tincidunt eget, dictum neque. Maecenas dapibus sodales magna, eget lectus vehicula non",
        },
        {
          header: "Design",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor. Lorem ipsum dolor sit amet consectetur adipisicing elit, eiusmod tempor. Proin luctus nulla elit, vitae varius massa.Etiam massa sapien, ultricies quis enim at, tempor fringilla metus. Nulla rhoncus enim sed consectetur. Mauris et eros feugiat, tincidunt eget, dictum neque. Maecenas dapibus sodales magna, eget lectus vehicula non",
        },
        {
          header: "Marketing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor. Lorem ipsum dolor sit amet consectetur adipisicing elit, eiusmod tempor. Proin luctus nulla elit, vitae varius massa.Etiam massa sapien, ultricies quis enim at, tempor fringilla metus. Nulla rhoncus enim sed consectetur. Mauris et eros feugiat, tincidunt eget, dictum neque. Maecenas dapibus sodales magna, eget lectus vehicula non",
        },
        {
          header: "Support",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor. Lorem ipsum dolor sit amet consectetur adipisicing elit, eiusmod tempor. Proin luctus nulla elit, vitae varius massa.Etiam massa sapien, ultricies quis enim at, tempor fringilla metus. Nulla rhoncus enim sed consectetur. Mauris et eros feugiat, tincidunt eget, dictum neque. Maecenas dapibus sodales magna, eget lectus vehicula non",
        },
      ],
    };
  },
};
</script>

<style></style>
