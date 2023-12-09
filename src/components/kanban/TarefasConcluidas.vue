<template>
  <div class="container-tarefas">
    <HeaderContainerTarefas  
      class="card-titulo" 
      :tituloTarefa="'Tarefas Concluídas'" 
      :qtdTarefas="getQtdTarefas()"
    />
    
    <CardTarefa 
      class="card-tarefa" 
      :tipoTarefa="'tarefasConcluidas'"  
      :tarefas="tarefasConcluidas" 
      :comboBoxOn="comboBoxOn">
    </CardTarefa>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardTarefa from './CardTarefa.vue'
import HeaderContainerTarefas from './HeaderContainerTarefas.vue'

export default {
    components: {CardTarefa, HeaderContainerTarefas},

    computed: {
      ...mapGetters(['getTarefasConcluidas']),
    },

    data(){
        return{
            tarefasConcluidas: [],
            comboBoxOn: false
        }
    },
    methods:{
        getQtdTarefas(){
            return this.tarefasConcluidas.length
        }
    },
    created() {
        this.tarefasConcluidas = this.getTarefasConcluidas.tarefasConcluidas;
    },
    watch: {
        tarefasConcluidas: {
          handler(tarefasConcluidas) {
            localStorage.setItem('tarefasConcluidas', JSON.stringify(tarefasConcluidas));
          },
          deep: true, 
        },
    }
}
</script>

<style scoped>


    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,600;0,700;1,500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nova+Square&display=swap');

    .container-tarefas{ 
      min-width: 250px;
      border-left: none;
      border-top: none;
      border-bottom: none;
      padding: 5px;
      margin-right: 10px;
      background-color: #d0eaa3;
      border-radius: 10px;
    }

    .container-tarefas h2{
      margin-left: 10px;
    }

    .container-tarefas p{
      margin-left: 10px;
    }

    .card-tarefa{
      font-family: 'Noto Sans', sans-serif;
      font-size: 15px;
    }

    .card-titulo{
      font-family: 'Nova Square', sans-serif;
    }
</style>