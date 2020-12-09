<template>
  <v-container fluid class="header" style="padding: 2rem">
    <v-row>
      <v-col>
        <h1>Who I am.</h1>
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
    <div class="u-bottom-spacing"></div>

    <v-row>
      <v-col>
        <h1>What I can do for you.</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-expansion-panels>
          <v-expansion-panel v-for="(panel, i) in expansionPanels" :key="i">
            <v-expansion-panel-header>
              {{ panel.header }}
            </v-expansion-panel-header>
            <v-expasion-panel-content>
              {{ panel.content }}
            </v-expasion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
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

<style>
.header {
  background-color: #0f0f0f;
}
.col {
  color: #e6e6e6;
}
.col h1 {
  color: #c5a880;
  font-size: 3rem;
}
.col h2 {
  font-size: 250%;
  padding-left: 2rem;
  font-weight: 400;
}
.col h3 {
  color: #c5a880;
  font-weight: 500;
  font-size: 1.6rem;
}
.highlight {
  color: #c5a880;
  text-transform: uppercase;
}
.u-bottom-spacing {
  content: "";
  display: block;
  height: 10%;
}
</style>
