import { createRouter, createWebHashHistory } from "vue-router";
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',name:'home',component:()=>import(/*webpackChunkName: "HomeView"*/'@/modulos/pokemon/pages/ListPage.vue')},
        {path:'/id',name:'pokemon',component:()=>import(/*webpackChunkName: "PokemonView"*/'@/modulos/pokemon/pages/PokemonPage.vue')},
        {path:'/about',name:'about',component:()=>import(/*webpackChunkName: "AboutView"*/'@/modulos/pokemon/pages/AboutPage.vue')},
        {path:'/:patchMach(.*)*',component:()=>import(/*webpackChunkName: "notfound"*/'@/modulos/shared/pages/NotPageFound.vue')}
    ]
});

export default router;