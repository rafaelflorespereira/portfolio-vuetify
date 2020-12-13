<template>
  <v-container fluid class="header" style="padding: 2rem">
    <v-row>
      <v-col>
        <h1 class="viewport">Who I am.</h1>
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
        <h1 class="viewport">What I can do for you.</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-expansion-panels dark hover>
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

    <div class="class u-bottom-spacing"></div>
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
    <div class="class u-bottom-spacing"></div>

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
    <div class="class u-bottom-spacing"></div>

    <v-row>
      <v-col>
        <h1 class="viewport">What I've done.</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-carousel dark hide-delimiter-background :show-arrows="false">
          <v-carousel-item v-for="i in 5" :key="i">
            <v-row>
              <v-col align="center">
                <h3>Project Name</h3>
                <h4>What has done</h4>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-row>
                  <v-col>
                    <h3>Project Details</h3>
                    <p>
                      In ac felis quis tortor malesuada pretium. Phasellus
                      dolor. Fusce fermentum odio nec arcu. Integer tincidunt.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. In ac felis quis tortor
                      malesuada pretium. Phasellus dolor. Fusce fermentum odio
                      nec arcu. Integer tincidunt.
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    Project info
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <p>
                      <span><v-icon dark>mdi mdi-account</v-icon></span> Client
                      Name
                    </p>
                    <p>
                      <span><v-icon dark>mdi mdi-calendar</v-icon></span>
                      Project Date
                    </p>
                    <p>
                      <span><v-icon dark>mdi mdi-tag</v-icon></span> Project
                      Category
                    </p>
                  </v-col>
                  <v-col>
                    <p style="font-size: 80%">Client's name</p>
                    <p style="font-size: 80%">date</p>
                    <p style="font-size: 80%">Categories</p>
                  </v-col>
                </v-row>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                project image
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <div class="class u-bottom-spacing"></div>

    <v-row>
      <v-col>
        <h1 class="viewport">What my clients say.</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="i in 6" :key="i">
        <v-col>
          <v-icon large color="primary">
            mdi-message-text
          </v-icon>
          <p>
            Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin
            ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.
          </p>
        </v-col>
        <v-col>
          <v-row justify="end">
            <v-col align="end">
              <p><span class="highlight">Company's Name</span> Client's Name</p>
            </v-col>

            <v-avatar color="primary" size="56"></v-avatar>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
    <div class="class u-bottom-spacing"></div>

    <ReachMe />
  </v-container>
</template>

<script>
import ReachMe from "./ReachMe";

export default {
  components: {
    ReachMe,
  },
  data() {
    return {
      rating: 4,
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

<style>
.col h1 {
  font-size: 3rem;
}
.col h2 {
  font-size: 250%;
  padding-left: 2rem;
  font-weight: 400;
}
.col h3 {
  font-weight: 500;
  font-size: 1.6rem;
}
.highlight {
  text-transform: uppercase;
}
.u-bottom-spacing {
  content: "";
  display: block;
  height: 6rem;
}
</style>
