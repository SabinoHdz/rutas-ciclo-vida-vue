import { createRouter, createWebHashHistory } from "vue-router";

import AboutPage from '@/modulos/pokemon/pages/AboutPage.vue'
import ListPage from '@/modulos/pokemon/pages/ListPage.vue'
import Pokemon from '@/modulos/pokemon/pages/PokemonPage.vue'

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',name:'home',component:ListPage},
        {path:'/:id',name:'pokemon',component:Pokemon},
        {path:'/about',name:'about',component:AboutPage}
    ]
});

export default router;