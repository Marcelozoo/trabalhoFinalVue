<template>

    <div class="container-tarefas">
        <HeaderContainerTarefas 
            class="card-titulo" 
            :tituloTarefa="'Tarefas Ativas'" 
            :qtdTarefas="getQtdTarefas()"
        />
        <CardTarefa 
            class="card-tarefa" 
            :tipoTarefa="tipo"  
            @inserirProf="inserirProfissional" 
            @selecionarProfissional="alterarSelect" 
            :tarefas="tarefasValidas" 
            :equipe="equipe" 
            :comboBoxOn="comboBoxOn"
            :nomeBotao="'Salvar Alteração'"
        />
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

import CardTarefa from './CardTarefa.vue'
import HeaderContainerTarefas from './HeaderContainerTarefas.vue'

export default {

    components: {CardTarefa, HeaderContainerTarefas},
    computed: {
        ...mapGetters(['getTarefasValidas', 'getEquipe']),
    },

    data(){
        return{
            tarefasValidas: [],
            selecionado: '',
            equipe: [],
            comboBoxOn: true,
            tipo: 'tarefasAtivas'
        }
    },
    methods:{
        ...mapMutations(['adicionarTarefaAndamento']),
        getQtdTarefas(){
            return this.tarefasValidas.length
        },
        inserirProfissional(tarefa){
            let indiceDoObjeto = this.tarefasValidas.findIndex(objeto => objeto === tarefa);
            if(indiceDoObjeto != -1 && this.selecionado != 0){
                this.tarefasValidas[indiceDoObjeto].tempoQueElaEntraNoAndamento = new Date()
                this.tarefasValidas[indiceDoObjeto].profissionalResponsavel = this.equipe[this.selecionado - 1].nome
                this.adicionarTarefaAndamento(this.tarefasValidas[indiceDoObjeto])
                this.tarefasValidas.splice(indiceDoObjeto, 1)
            }
        },
        alterarSelect(selecionado){
            this.selecionado = selecionado
        }
    },
    created() {
        this.tarefasValidas = this.getTarefasValidas.tarefasValidas
        this.equipe = this.getEquipe.equipe
    },
    watch: {
        tarefasValidas: {
          handler(tarefasValidas) {
            localStorage.setItem('tarefasAtivas', JSON.stringify(tarefasValidas));
          },
          deep: true, 
        },
    },
}
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,600;0,700;1,500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');

    form{
        display: none;
    }


    .container-tarefas{ 
        min-width: 250px;
        border-left: none;
        border-top: none;
        border-bottom: none;
        margin-right: 5px;
        background-color: #71dbd2;
        border-radius: 8px;
    }

    .card-tarefa{
        font-family: 'Noto Sans', sans-serif;
        font-size: 15px;

    }

    .card-titulo{
        font-family: 'Nova Square', sans-serif;
    }


    @media screen and (max-width: 850px){
      .container-tarefas{
        grid-area: 1 / 1 / 2 / 2; 
        margin-left: 40px;

      }

    }
</style>