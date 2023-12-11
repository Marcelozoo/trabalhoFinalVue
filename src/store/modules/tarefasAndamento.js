export default {
    state:{
        tarefasAndamento: []
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