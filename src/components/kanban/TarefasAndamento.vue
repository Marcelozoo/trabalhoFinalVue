<template>
  <div class="container-tarefas">
    <HeaderContainerTarefas 
      class="card-titulo" 
      :tituloTarefa="'Tarefas Andamento'" 
      :qtdTarefas="getQtdTarefas()"
    />
    <CardTarefa 
      class="card-tarefa" 
      @acabarTarefa="finalizarTarefa" 
      :tipoTarefa="'tarefasAndamento'" 
      :tarefas="tarefasAndamento" 
      :comboBoxOn="comboBoxOn"
      :nomeBotao="'Finalizar Tarefa'"

    />
  </div>
</template>

<script>

import { mapGetters, mapMutations} from 'vuex';

import CardTarefa from './CardTarefa.vue'
import HeaderContainerTarefas from './HeaderContainerTarefas.vue'
import { parseISO } from 'date-fns';

export default {
    components: {CardTarefa, HeaderContainerTarefas},
    computed: {
      ...mapGetters(['getTarefasAndamento']),
    },
    data(){
      return{
        tarefasAndamento: [],
        comboBoxOn: false

      }
    },

    methods:{
      ...mapMutations(['adicionarTarefaConcluida']),
      getQtdTarefas(){
        return this.tarefasAndamento.length
      },
      finalizarTarefa(tarefa){
          let indiceDoObjeto = this.tarefasAndamento.findIndex(objeto => objeto === tarefa);

            if(indiceDoObjeto != -1){
              const saldo = this.calculaTempoSaldo(indiceDoObjeto)
              const diferencaEmHoras = Math.floor(saldo / (1000 * 60 * 60));

              const previsto = this.tarefasAndamento[indiceDoObjeto].tempoPrevisto

              this.tarefasAndamento[indiceDoObjeto].saldoTempoTarefa = parseInt(previsto) - diferencaEmHoras
              this.adicionarTarefaConcluida(this.tarefasAndamento[indiceDoObjeto])
              this.tarefasAndamento.splice(indiceDoObjeto, 1)
            }
      },
      calculaTempoSaldo(indiceDoObjeto){

        const dataDaTarefa = parseISO(this.tarefasAndamento[indiceDoObjeto].tempoQueElaEntraNoAndamento)
        
        const dataAtual = new Date()
        const diferencaEmMilissegundos = dataAtual.getTime() - dataDaTarefa.getTime();
        return diferencaEmMilissegundos
      },
    
    },
    created() {
        this.tarefasAndamento = this.getTarefasAndamento.tarefasAndamento;
    },
    watch: {
        tarefasAndamento: {
          handler(tarefasAndamento) {
            localStorage.setItem('tarefasAndamento', JSON.stringify(tarefasAndamento));
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
    border-radius: 8px;
    border-left: none;
    border-top: none;
    border-bottom: none;
    padding: 5px;
    margin-right: 10px;
    background-color: #ade4b5;
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