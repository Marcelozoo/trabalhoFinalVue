<template>
    <div>
        <p v-if="comboBox == false">{{nome}} {{valor}}</p>
        <p v-else> {{nome}} <CampoSelect :equipe="equipe" @profissionalSelecionado="alterarSelect"/></p>
  </div>    
  
</template>

<script>

import CampoSelect from './CampoSelect.vue'

export default {
    props: ['nome', 'valor', 'comboBox', 'equipe'],
    components: {CampoSelect},
    methods:{
        alterarSelect(selecionado){

            this.$emit('selecionadoProfissional', selecionado)
        }
    }
}
</script>

<style>

</style>