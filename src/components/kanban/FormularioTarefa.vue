<template>
  <form class="formulario-tarefa">
            <h2 class="titulo-form">Cadastrar Tarefa do kanban</h2>
            <div class="container-campos">
                <label for="descricao">Descrição da Tarefa</label>
                <textarea class="text-area" id="descricao" name="descricao" rows="4" cols="50" v-model.lazy="tarefa.descricao" required></textarea>
            </div>

            <div class="container-campos">
                <label for="input-tempo-previsto">Tempo previsto para terminar a tarefa (horas)</label>
                <input :min='1' id="input-tempo-previsto" type="number" v-model="tarefa.tempoPrevisto" required> 
            </div>
            <button class="btn-enviar-cadastro" @click.prevent="preencherTarefa">Finalizar</button>
    </form>
</template>

<script>

import  {formatarSomenteData, formatarSomenteHorario} from '@/utils/dataUtils.js'

export default {
    data(){
        return{
            tarefa: {
                descricao: '',
                dataCriacao: '',
                horarioCriacao: '',
                profissionalResponsavel: 'Nenhum',
                tempoPrevisto: '',
                tempoQueElaEntraNoAndamento: null,
                saldoTempoTarefa: null,
                dataFormatadaAndamento: null
            }
        }
    },
    methods:{

        
        adicionarTarefa(tarefa){

            this.$emit('addTarefa', tarefa)
        },

        preencherTarefa(){
            if(this.tarefa.descricao != '' && this.tarefa.tempoPrevisto != ''){
                const data = new Date()
                const tarefa = {
                    descricao: this.tarefa.descricao,
                    dataCriacao: formatarSomenteData(data),
                    horarioCriacao: formatarSomenteHorario(data),
                    profissionalResponsavel: 'Nenhum',
                    tempoPrevisto: this.tarefa.tempoPrevisto,
                    tempoQueElaEntraNoAndamento: this.tarefa.tempoQueElaEntraNoAndamento,
                    saldoTempoTarefa: this.tarefa.saldoTempoTarefa
                }
                this.limparCampos()
                this.adicionarTarefa(tarefa)
                return
            }
            alert('Por favor, preencha todos os campos.');


        },
        limparCampos(){

            this.tarefa.descricao = ''
            this.tarefa.tempoPrevisto = ''

        }
    }
}
</script>

<style>
    .formulario-tarefa{

        display: block;
        background-color: aliceblue;
        padding: 10px;
        width: 50%;
        height: 280px;
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 5;
        transform: translate(-50%, -50%);
    }

    .container-campos{
        margin-top: 6px;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    label{
        margin-bottom: 5px;
    }

    input{
        padding: 3px;
        border-radius: 8px;
        border: none;
    }
    
    textarea{
        border-radius: 8px;
    }


    .btn-enviar-cadastro{
        padding: 5px;
        background-color: #98FB98;
        border: 1px solid #98FB98;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 1px;
        position: absolute;
        right: 0px;
        margin-right: 20px;
        margin-top: 5px;
    }

    .btn-enviar-cadastro:hover{
        background: #7cf07c;
        cursor: pointer;    
    }

    .titulo-form{
        margin-left: 10px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }


</style>