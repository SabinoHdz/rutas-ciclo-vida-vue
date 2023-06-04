<template>
  <div>
    <!-- <router-link :to="{name:'home'}">Inicio</router-link>
    <router-link :to="{name:'pokemon',params:{id:1}}">POkemon</router-link>
    <router-link to="/about">About</router-link> -->
    <custom-link v-for="link in links" :key="link.to" :link="link">

    </custom-link>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import CustomLink from './CustomLink.vue'

export default {
  components:{
    CustomLink:defineAsyncComponent(()=>import('./CustomLink.vue'))
  },
  data(){
    return{
      links:[
        {to:'/',name:'home'},
        {to:'/pokemon/50',name:'por Id'},
        {to:'/about',name:'About'},
        {to:'https://google.com',name:'google'},
        
      ]
    }
  }
}
</script>

<style scoped>
/* div .router-link-exact-active{
  color: #42b983;
} */
</style>