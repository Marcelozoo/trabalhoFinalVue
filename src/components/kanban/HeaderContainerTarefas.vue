<template>
    <span>
        <h2 class="titulo-tarefas">{{tituloTarefa}}</h2>
        <p class="paragrafo-qtd">Quantidade de Tarefas: {{qtdTarefas}}</p>
        <hr>
    </span>
</template>

<script>
export default {
    props: ['tituloTarefa', 'qtdTarefas']
}
</script>

<style>

    .titulo-tarefas {
        margin-left: 10px;
    }
    .paragrafo-qtd{
        margin-left: 10px;
    }

</style>