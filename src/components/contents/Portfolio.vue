<template>
  <div id="portfolio">
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
              <v-spacer />
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
              <v-spacer />
              <v-col>
                project image

                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
              <v-spacer />
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
