<template>
    <div>
        <div :style="{backgroundColor: corDoCard}"   class="card-tarefa" v-for="(tarefa, index) in tarefas" :key="index" >
                <InfoTarefas :tipoTarefa="tipoTarefa" @selecionadoProfissional="alterarSelect" :tarefa="tarefa" :equipe="equipe" :comboBoxOn="comboBoxOn"/>
                <slot></slot>
                <button v-if="tipoTarefa != 'tarefasConcluidas' " class="btn-card" @click="salvarAlteracao(tarefa)">{{nomeBotao}}</button>
            </div>
    </div>
</template>

<script>

import CampoSelect from './CampoSelect.vue'
import InfoTarefas from './InfoTarefas.vue'


export default {

    props: ['tarefas', 'equipe', 'comboBoxOn', 'tipoTarefa', 'nomeBotao'],
    data(){
        return{
            corDoCard: '#ffff'
        }
    },
    components: {CampoSelect, InfoTarefas},
    methods:{
        salvarAlteracao(tarefa){
            if(this.tipoTarefa === 'tarefasAtivas'){
                this.$emit('inserirProf', tarefa)
            }
            else if(this.tipoTarefa === 'tarefasAndamento'){
                this.$emit('acabarTarefa', tarefa)
            }
        },
        alterarSelect(selecionado){
            this.$emit("selecionarProfissional", selecionado)
        },
        alterarCor(){
            if (this.tipoTarefa == "tarefasAtivas"){
                this.corDoCard = 'bisque'
            }
            else if(this.tipoTarefa === 'tarefasAndamento'){
                this.corDoCard = 'rgb(238, 238, 252)'
            }
            else{
                this.corDoCard = 'rgb(34, 226, 34)'

            }
        }
    },
    created(){
        this.alterarCor()
    }
}
</script>

<style scoped>


    .card-tarefa{
        position: relative;
        border-radius: 8px; 
        padding: 7px;
        margin: 5px;
        margin-top: 10px;
        min-height: 270px;

    }


    .btn-card{
        /* position: absolute;
        top: 80%;
        right: 10%; */
        padding: 8px;
        background-color: rgb(105, 247, 105);
        border: rgb(105, 247, 105);
        border-radius: 5px;
        letter-spacing: 1px;
        font-weight: 700;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .btn-card:hover{
        cursor: pointer;
        background-color: green;
        color: white;
    }

</style>