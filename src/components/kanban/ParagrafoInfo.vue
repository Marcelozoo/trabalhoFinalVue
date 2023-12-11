<template>
    <div>
        <p  :style="{backgroundColor: backgroundParagrafo}" class="paragrafo" v-if="comboBox == false">{{nome}} {{valor}}</p>
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
            backgroundParagrafo : null
        }
    },
    methods:{
        alterarSelect(selecionado){

            this.$emit('selecionadoProfissional', selecionado)
        },
        destacarAtrasoOuAdiatamento(){
            if(this.nome === "Tarefa adiantada:"){
                this.backgroundParagrafo = 'yellow'
            }
            else if (this.nome === 'Tarefa atrasada: '){
                this.backgroundParagrafo = 'red'
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