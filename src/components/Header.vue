<template>
  <div>
    <v-img
      src="../../public/laptop-red-cup-coffee-notebook-pen-satchel-1.jpg"
      height="100vh"
    >
      <div class="header__text">
        Rafael Flores
        <span class="header__colored">Front-end Developer</span>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  height: 100vh;
}
.header__text {
  position: absolute;
  bottom: 1vh;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  right: 0;
  color: #e6e6e6;
  margin: 0 1rem;
  font-size: 300%;
  font-weight: 300;
  padding-left: 75vw;
  text-align: right;
  line-height: 130%;
}
.header__colored {
  color: #c5a880;
  font-size: 200%;
}
.u-bottom-positioned {
  align-items: flex-end;
}
</style>
