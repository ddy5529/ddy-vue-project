<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import LoginPaper from './components/Login.vue'

  export default {
    name: 'app',
    components: {
      LoginPaper
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;  /*抗锯齿*/
    -moz-osx-font-smoothing: grayscale; /*灰度*/
    color: #2c3e50;
  }
</style>
