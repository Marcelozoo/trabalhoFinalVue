import Vue from 'vue'
import Vuex from 'vuex'


import equipe from './modules/equipe.js'
import tarefasValidas from './modules/tarefasAtivas.js'
import tarefasAndamento from './modules/tarefasAndamento.js'
import tarefasConcluidas from './modules/tarefasConcluidas.js'
import * as getters from './getters'


Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    modules: {equipe, tarefasValidas, tarefasAndamento, tarefasConcluidas},
})