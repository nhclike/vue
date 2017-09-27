<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--路由页面跳转-->
    <a >
      <router-link to="/todo">
        跳转到todo页面
      </router-link>
    </a>
    <a>
      <router-link to="/">
        跳转到hello页面
      </router-link>
    </a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
