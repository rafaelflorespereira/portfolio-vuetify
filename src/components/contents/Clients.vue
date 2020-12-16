<template>
  <div id="clients">
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
            <v-col>
              <p><span class="highlight">Company's Name</span> Client's Name</p>
              <v-avatar color="primary" size="56">
                <img :src="'https://randomuser.me/api/portraits/men/'+ i +'.jpg'" alt="client´s avatar">
              </v-avatar>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
