<template>
  <HomePage />
</template>

<script>
import HomePage from './views/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: "MagicOwl";
    src: local("MagicOwl"),
    url("./assets/fonts/MagicOwlPersonalUse-WyO0O.otf");
  }
#app {
  font-family: "MagicOwl", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;
}
</style>
