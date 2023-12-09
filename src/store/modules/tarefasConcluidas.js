export default {
    state:{
        tarefasConcluidas: []
    },
    mutations:{
        adicionarTarefaConcluida(state, tarefa){
            state.tarefasConcluidas.push(tarefa)
        }
    },
    actions:{
        iniciarTarefasConcluidas({commit}){
            const tarefasConcluidasSalvas = localStorage.getItem('tarefasConcluidas');
            if (tarefasConcluidasSalvas) {
                const vetor = JSON.parse(tarefasConcluidasSalvas)
                vetor.forEach(element => {
                    commit('adicionarTarefaConcluida', element) ;

                });
            }
        }
    }
}