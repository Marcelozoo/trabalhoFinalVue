<template>
    <div>
        <p  :style="{color: cor, 'font-size': tamanho, 'font-weight': fontWeight}" class="paragrafo" v-if="comboBox == false">{{nome}} {{valor}}</p>
        <p v-else> {{nome}} <CampoSelect :equipe="equipe" @profissionalSelecionado="alterarSelect"/></p>
  </div>    
  
</template>

<script>

import CampoSelect from './CampoSelect.vue'

export default {
    props: ['nome', 'valor', 'comboBox', 'equipe'],
    components: {CampoSelect},
    data(){
        return{
            tamanho : null,
            cor: null,
            fontWeight: null,
            family: null
        }
    },
    methods:{
        alterarSelect(selecionado){

            this.$emit('selecionadoProfissional', selecionado)
        },
        destacarAtrasoOuAdiatamento(){
            if(this.nome === "Tarefa adiantada:"){
                this.cor = 'yellow'
                this.tamanho = '20px'
                this.fontWeight = '700'                
            }
            else if (this.nome === 'Tarefa atrasada: '){
                this.backgroundParagrafo = 'red'
                this.tamanho = '20px'
                this.fontWeight = '700'
            }
            else{
                this.backgroundParagrafo = null
            }
            
        }
    },
    created(){
        this.destacarAtrasoOuAdiatamento()
    }

}
</script>

<style scoped>
 
    
</style>