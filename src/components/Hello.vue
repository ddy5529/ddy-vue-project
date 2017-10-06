<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <h2>精华 链接</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">核心文档</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">讨论</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">社区-聊天</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">推特</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">这个模版的文档</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'welcome',
    data () {
      return {
        msg: '欢迎来到叶星源的世界'
      }
    }
  }
</script>

<!--//接下来我将会和你一起遨游VUE的海洋-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
