<template>
  
    <section class="container-form">

        <div class="container-direita">

            <form  class="formulario-cadastro">
                <h2>Cadastre os membros de sua equipe</h2>

                <div class="input-cadastro">
                    <label for="nome">Nome Completo</label>
                    <input id="nome" name="nome" type="text" class="campo-input" v-model="nome" required>

                </div>

                <div class="input-cadastro">
                    <label for="comboBox">Profissão</label>
                    <select name="comboBox" id="comboBox" v-model="profissao" required >
                        
                        <option value="Engenheiro de Software" >Engenheiro de Software</option>
                        <option value="Programador Júnior" >Programador Júnior</option>
                        <option value="Programador Sênior">Programador Senior</option>
                    </select>
                </div>


                <div>
                    <button class="btn-enviar" @click.prevent="inserirMembro">Cadastrar</button>
                </div>

                <div>
                    <button class="btn-kanban"  :disabled="btnHabilitado" @click.prevent="irParaPainel">Ir para o kanban</button>
                </div>
            
            </form>
            
        </div>



        <div class="container-esquerda">
            <img src="../assets/img-cadastro.png" alt="Imagem sobre o kanban">
        </div>

    </section>



</template>

<script>

import {  mapGetters, mapMutations } from 'vuex';

export default {

   
    computed: {
      ...mapGetters(['getEquipe']),
    },
    data(){
        return{
            nome: '',
            profissao: '',
            btnHabilitado: true,
            equipe: []
        }
    },

    methods:{
        ...mapMutations(['adicionarMembro']),
        inserirMembro(){
            if(!this.nome == '' && !this.profissao == ''){
                const usuario = {
                    nome:  this.nome,
                    profissao: this.profissao
                } 
                this.adicionarMembro(usuario)
                this.btnHabilitado = false
                this.nome = ''
                this.profissao = ''
                return
            }
            alert('Por favor, preencha todos os campos.');
        },
        irParaPainel(){
            this.$router.push({ name: 'painel' });
        },
        equipePossuiPeloMenosUmMembro(){
            this.btnHabilitado = this.equipe.length > 0 ? false : true
        }
    },
    created() {
        this.equipe = this.getEquipe.equipe;
        this.equipePossuiPeloMenosUmMembro()
    },
    watch: {
        equipe: {
          handler(equipe) {
            localStorage.setItem('equipe', JSON.stringify(equipe));
          },
          deep: true, 
        },
    },
}
</script>

<style scoped>


    h2{
        margin-left: 10px;

    }
    .container-form{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        width: 800px;
        height: 240px !important;
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0px 5px 30px rgb(0, 0, 0, 0.2);
    }

    .container-esquerda{
        position: relative;
        width: 50%;
        height: 100%;

    }

    .container-direita{
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;

    }

    .formulario-cadastro{
        width: 100%;
        height: 100%;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 15px;
        padding: 5px;
    }

    .input-cadastro{
        position: relative;
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        margin-left: 10px;
        margin-top: 8px;

    }

    label{
        display: flex;
        margin-bottom: 3px;
    }
    input{
        border: 1px solid rgb(161, 167, 240);
        border-radius: 8px;
        outline: none;
        padding: 4px;

    }
    select{
        border-radius: 8px;
        border: 1px solid rgb(161, 167, 240);
        padding: 4px;

    }

    select:hover{
        cursor: pointer;
    }
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .btn-kanban{
        position: absolute;
        left: 10px;
        bottom: 19px;
        padding: 10px;
        border-radius: 10px;
        border: none;
        background: rgb(84, 84, 235);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 15px;
        margin-left: 6px;

    }

    .btn-enviar{
        position: absolute;
        right: 20px;
        bottom: 19px;
        padding: 10px;
        border-radius: 10px;
        border: none;
        background: rgb(84, 84, 235);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 15px;
        margin-right: -4px;
    }

    button:hover{
        cursor: pointer;
        background: rgb(39, 39, 182);
    }

</style>