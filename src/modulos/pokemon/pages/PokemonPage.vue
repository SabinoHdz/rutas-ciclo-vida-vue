<template>
    <h1>Pokemon Page</h1>
    <p>Pokemon: #{{ id }}</p>
</template>
<script>
export default{
    props:{
        id:{
            type:Number,
            required:true
        }
    },
    data(){
return{
 //   id:null,
}
    },
    created(){
        // console.log(this.$route);
        // const {id}=this.$route.params;
        //this.id=id;
    }
}
</script>