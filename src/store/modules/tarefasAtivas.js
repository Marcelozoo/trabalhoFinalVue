export default {
    state:{
        tarefasValidas: [],
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