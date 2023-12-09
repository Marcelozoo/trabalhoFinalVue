<template>

    <div class="conteudo-principal">

        <div class="menu">
            <h2 class="titulo-kanban">Board Kanban</h2>
            <button class="btn-cadastro-tarefa" @click="abrirFormularioCadastro">Cadastrar Tarefa</button>
        </div>

        <span class="linha"></span>

        <span class="span-btn-fechar"><button class="btn-fechar" @click.prevent="abrirFormularioCadastro" >X</button></span>

        <FormularioTarefa @addTarefa="adicionarTarefa" v-show="formularioVisivel"/>

        <div class="container-grid">
            <TarefasAtivas/>
            <TarefasAndamento/>
            <TarefasConcluidas/>
        </div>
    </div>
  
</template>


<script>

import FormularioTarefa from './kanban/FormularioTarefa.vue'


import TarefasAtivas from './kanban/TarefasAtivas.vue'
import TarefasAndamento from './kanban/TarefasAndamento.vue'
import TarefasConcluidas from './kanban/TarefasConcluidas.vue'
import { mapMutations } from 'vuex';


export default {


    data(){
        return{
            formularioVisivel: false
        }
    },

    components: {FormularioTarefa, TarefasAtivas, TarefasAndamento, TarefasConcluidas},

    methods:{
        ...mapMutations(['inserirTarefa']),
        abrirFormularioCadastro(){
            this.formularioVisivel = !this.formularioVisivel
            const containerGrid = document.querySelector('.container-grid')

            if (containerGrid.classList.contains('aberto')) {
                containerGrid.classList.remove('aberto');
                const btnFechar = document.querySelector('.span-btn-fechar')
                btnFechar.style.display = 'none'
            } else {
                containerGrid.classList.add('aberto');
                const btnFechar = document.querySelector('.span-btn-fechar')
                btnFechar.style.display = 'inline'
            }

        },
        adicionarTarefa(tarefa){
            this.inserirTarefa(tarefa)
        },

    },

}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');

    

    .container-grid.aberto {
        filter: blur(5px); 
        opacity: 0.7; 
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
    .container-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr) repeat(2, 0);
        grid-template-rows: 1fr repeat(4, 0);
        grid-column-gap: 15px;
        margin: 20px;
        filter: blur(0); 
        opacity: 1; 
        transition: filter 0.3s ease-out, opacity 0.3s ease-out; 
    }
    .menu{
        margin-top: 30px;


    }
    .titulo-kanban{
        display: inline;
        margin: 28px;
        padding: 10px;
        font-family: 'Libre Baskerville', serif;
    }
    .btn-cadastro-tarefa{
        position: absolute;
        right: 90px;    
        padding: 10px;
        font-family: sans-serif;   
        font-size: 15px;
        border-radius: 10px;
        border: none;
        background-color: #fff18c;
        color: rebeccapurple;
        font-weight: 700;
    }

    .btn-cadastro-tarefa:hover{
        cursor: pointer;
        background-color: #f1e164;
    }

    .linha{
        margin-top: 30px;
        margin-left: 30px;
        display: block;
        height: 1%;
        border: 1px solid rgb(224, 216, 216);
        width: 92%;
    }

    .span-btn-fechar{
        display: none;
        position: absolute;
        left: 73%;
        top: 30%;
        margin: 2px;
        z-index: 6;
        

    }
    .btn-fechar{

        border: none;
        background-color: red;
        padding: 12px;
        color: white;
    }
    .btn-fechar:hover{
        cursor: pointer;
    }

    .titulo-form{
        display: inline;
    }



    

</style>

<style >
    body{
        background-color: rgb(143, 143, 235);
    }

</style>