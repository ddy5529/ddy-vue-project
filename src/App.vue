<template>
  <div id="app">

    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
  import MainFrame from './components/MainFrame.vue'

  export default {
    name: 'app',
    components: {
      MainFrame
    }
    // 先声明调用模板，然后通过div的ID值去查找div，然后往div里添加模板。
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
