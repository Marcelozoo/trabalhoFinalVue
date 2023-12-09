import Vue from 'vue'

import Router from 'vue-router'
import CadastroEquipe from './components/CadastroEquipe.vue'
import PainelKanban from './components/PainelKanban.vue'


Vue.use(Router)

export  const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            components: {default: CadastroEquipe},
            name: 'inicio'
        },
        {
            path: '/PainelKanban',
            components: {default: PainelKanban}, 
            name: 'painel',
        
        },
        {
            path: '*',
            redirect: '/'
        }
        
    ]

})


