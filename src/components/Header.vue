<template>
  <div>
    <v-img
      src="../../public/laptop-red-cup-coffee-notebook-pen-satchel-1.jpg"
      height="100vh"
    >
      <div class="header__text">
        Rafael Flores
        <span color="secondary" class="header__colored"
          >Front-end Developer</span
        >
      </div>
    </v-img>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  height: 100vh;
}
.header__text {
  color: var(--v-primary-base);
  position: absolute;
  bottom: 1vh;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  right: 0;
  margin: 0 1rem;
  font-size: 300%;
  font-weight: 300;
  padding-left: 75vw;
  text-align: right;
  line-height: 130%;
}
.header__colored {
  color: var(--v-secondary-base);
  font-size: 200%;
}
.u-bottom-positioned {
  align-items: flex-end;
}
</style>
