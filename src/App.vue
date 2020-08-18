<template>
  <div id="app">
    <router-view name="head"/>
    <router-view name="login"/>
    <router-view name="foot"/>
  </div>
</template>

<script>
import header from '@/components/header'
export default {
  name: 'App',
}
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
