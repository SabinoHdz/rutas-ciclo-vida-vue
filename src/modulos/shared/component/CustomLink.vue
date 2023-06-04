<template>


    <a  class="normal-link" target="_blank" v-if="isExternalLink" :href="link.to">{{ link.name }}</a>
    <router-link 
    v-else 
    :to="link.to"
    v-slot="{href,isActive}">
       <a  :class="isActive?'is-active':'normal-link'" :href="href">{{ link.name }}</a>
    </router-link>
</template>

<script>
export default {
    props:{
        link:{
            type:Object,
            required:true
        }
    },
    computed:{
        isExternalLink(){
            return this.link.to.startsWith('http');
        }
    }
}
</script>

<style scoped>
 .is-active{
    color: #42b983;
 }
 .normal-link{
    color:#c5c6c6
 }
</style>