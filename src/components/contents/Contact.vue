<template>
  <div id="contact">
    <v-row>
      <v-col>
        <h1 class="viewport">Let's talk.</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col>
            <h3 class="mb-3">What can I do for you?</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              est interdum, pharetra magna ac, facilisis ante. Fusce eu finibus
              magna. Sest interdum, pharetra magna ac, facilisis ante. Fusce eu
              finibus magna
            </p>
            <h3 class="mb-3">Send me a message</h3>

            <v-text-field
              outlined
              solo-inverted
              dark
              placeholder="Name"
              color="black"
            ></v-text-field>
            <v-text-field
              outlined
              solo-inverted
              dark
              placeholder="Email"
              color="black"
            ></v-text-field>
            <v-text-field
              outlined
              solo-inverted
              dark
              placeholder="Subject"
              color="black"
            ></v-text-field>
            <v-btn dark large color="primary" type="submit">Submit</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="5">
        <v-row>
          <v-col>
            <h3>Social Contacts</h3>
          </v-col>
        </v-row>
        <SocialButtons />
        <v-row v-for="(contact, i) in socialContacts" :key="i">
          <v-col>
            <p>
              <span>
                <v-icon color="primary" dark x-large>
                  {{ contact.icon }}
                </v-icon>
              </span>
              {{ contact.content }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SocialButtons from "../SocialButtons";

export default {
  components: {
    SocialButtons,
  },
  data() {
    return {
      socialContacts: [
        {
          icon: "mdi mdi-map-marker",
          content: "Montes Claros, Brazil",
        },
        {
          icon: "mdi mdi-email",
          content: "rafaelfp84@gmail.com",
        },
        {
          icon: "mdi mdi-phone",
          content: "+55 (38) 99208-1253",
        },
      ],
    };
  },
};
</script>

<style></style>
