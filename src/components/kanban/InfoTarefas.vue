<template>
    <div>
        <div v-if="tipoTarefa=='tarefasAtivas'">
            <ParagrafoInfo :comboBox="combo" :nome="'Descricao:'" :valor="tarefa.descricao"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Data Criação:'" :valor="tarefa.dataCriacao"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Horário criação:'" :valor="tarefa.horarioCriacao"/>
            <ParagrafoInfo @selecionadoProfissional="alterarSelect" :equipe="equipe" :comboBox="comboBoxOn" :nome="'Profissional Responsável:'" :valor="tarefa.profissionalResponsavel"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Tempo Previsto:'" :valor="tarefa.tempoPrevisto + ' hora(s)'"/>
        </div>
        <div v-else-if="tipoTarefa=='tarefasAndamento'">
            <ParagrafoInfo :comboBox="combo" :nome="'Descricao:'" :valor="tarefa.descricao"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Data Criação:'" :valor="tarefa.dataCriacao"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Horário criação:'" :valor="tarefa.horarioCriacao"/>
            <ParagrafoInfo @selecionadoProfissional="alterarSelect" :equipe="equipe" :comboBox="combo" :nome="'Profissional Responsável:'" :valor="tarefa.profissionalResponsavel"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Tempo Previsto:'" :valor="tarefa.tempoPrevisto + ' hora(s)'"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Data de ínicio de andamento:'" :valor="formatarData(tarefa.tempoQueElaEntraNoAndamento)"/>

        </div>
        <div v-else>
            <ParagrafoInfo :comboBox="combo" :nome="'Descricao:'" :valor="tarefa.descricao"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Data Criação:'" :valor="tarefa.dataCriacao"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Horário criação:'" :valor="tarefa.horarioCriacao"/>
            <ParagrafoInfo @selecionadoProfissional="alterarSelect" :equipe="equipe" :comboBox="combo" :nome="'Profissional Responsável:'" :valor="tarefa.profissionalResponsavel"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Tempo Previsto:'" :valor="tarefa.tempoPrevisto + ' hora(s)'"/>
            <ParagrafoInfo :comboBox="combo" :nome="'Data de ínicio de andamento:'" :valor="formatarData(tarefa.tempoQueElaEntraNoAndamento)"/>
            <ParagrafoInfo  v-if='tarefa.saldoTempoTarefa > 0' :comboBox="combo" :nome="'Tarefa adiantada:'" :valor="tarefa.saldoTempoTarefa + ' hora(s)'"/>
            <ParagrafoInfo  v-else-if='tarefa.saldoTempoTarefa == 0' :comboBox="combo" :nome="'Tarefa terminada no prazo: '" :valor="tarefa.saldoTempoTarefa + ' hora(s)'"/>
            <ParagrafoInfo  v-else :comboBox="combo" :nome="'Tarefa atrasada: '" :valor="tarefa.saldoTempoTarefa + ' hora(s)'"/>

        </div>
    </div>
    
    
</template>

<script>

import ParagrafoInfo from './ParagrafoInfo.vue'
import CampoSelect from './CampoSelect.vue'
import { format } from 'date-fns';
import { parseISO } from 'date-fns';


export default {
    props: ['tarefa', 'comboBoxOn', 'equipe', 'tipoTarefa'],
    data(){
        return{
            combo: false
        }
    },
    components: {ParagrafoInfo, CampoSelect},
    methods:{
        alterarSelect(selecionado){

            this.$emit('selecionadoProfissional', selecionado)
        },
        formatarData(data){
            if(typeof data === 'string'){
                const objetoData = parseISO(data)
                return format(objetoData, 'dd/MM/yy HH:mm:ss')
            }
            return format(data, 'dd/MM/yy HH:mm:ss');
        }
    },

}
</script>

<style>

</style>