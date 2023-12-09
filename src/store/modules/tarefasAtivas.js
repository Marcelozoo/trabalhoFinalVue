export default {
    state:{
        tarefasValidas: 
        [
            // {
            //     descricao: "tarefa1",
            //     dataCriacao: "08/12/2023",
            //     horarioCriacao: "2023-12-08T13:50:01",
            //     profissionalResponsavel: "Nenhum",
            //     tempoPrevisto: '2',
            //     tempoQueElaEntraNoAndamento: null,
            //     saldoTempoTarefa: null
            // },
            // {
            //     descricao: "tarefa2",
            //     dataCriacao: "08/12/2023",
            //     horarioCriacao: "13:52:01",
            //     profissionalResponsavel: "Nenhum",
            //     tempoPrevisto: '3',
            //     tempoQueElaEntraNoAndamento: null,
            //     saldoTempoTarefa: null
            // },
        ],
    },
    mutations:{
        inserirTarefa(state, tarefa){
            state.tarefasValidas.push(tarefa)
        },
    },
    actions:{
        iniciarTarefasAtivas({commit}){
            const vetorAtivas = localStorage.getItem('tarefasAtivas');
            if (vetorAtivas) {
                const vetor = JSON.parse(vetorAtivas)
                vetor.forEach(element => {
                    commit('inserirTarefa', element) ;
                });
            }
        }
    }
}