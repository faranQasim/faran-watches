<template>
  <Home />
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
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
  margin-top: 60px;
}
</style>
