export default {
    state:{
        tarefasAndamento: [ {
                descricao: "tarefa1",
                dataCriacao: "08/12/2023",
                horarioCriacao: "2023-12-08T13:50:01",
                profissionalResponsavel: "Nenhum",
                tempoPrevisto: '4',
                tempoQueElaEntraNoAndamento: "2023-12-08T13:50:01",
                saldoTempoTarefa: null
            },]
    },
    mutations:{
        adicionarTarefaAndamento(state, tarefa){
            state.tarefasAndamento.push(tarefa)
        }
    },
    actions:{
        iniciarTarefasAndamento({commit}){
            const vetorAndamento = localStorage.getItem('tarefasAndamento');
            if (vetorAndamento) {
                const vetor = JSON.parse(vetorAndamento)
                vetor.forEach(element => {
                    commit('adicionarTarefaAndamento', element) ;
                });
            }
        }
    }
}