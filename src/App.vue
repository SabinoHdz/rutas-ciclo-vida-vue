<template>
  <Navbar></Navbar>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-view></router-view>
</template>

<script>
//import Navbar from './modulos/shared/component/Navbar.vue';
import { defineAsyncComponent } from 'vue';
export default {
  name: 'App',
  components: {
    Navbar:defineAsyncComponent(()=>import(/*webpackChunkName: "Navbar"*/'@/modulos/shared/component/Navbar.vue'))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
