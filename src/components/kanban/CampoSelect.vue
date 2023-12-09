<template>
  <select name="comboOpcoes"  v-model="selecionado"   @change="emitirEvento" required>
        <option value="selecione" disabled>Selecione</option>
        <option v-for="(profissional, index) in equipe" :key="index" :value="index+1">{{ profissional.nome }}</option>
    </select>
</template>

<script>
export default {
    props: ["equipe"],
    data(){
        return{
            selecionado: null
        }
    },
    methods:{
        emitirEvento(){

            this.$emit('profissionalSelecionado', this.selecionado)
        }
    }


}
</script>

<style>

</style>