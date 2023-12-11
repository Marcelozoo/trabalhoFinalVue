export default {
    state:{
        equipe: []
    },
    mutations:{
        adicionarMembro(state, usuario){
            state.equipe.push(usuario)
        }
    },
    actions:{
        iniciarMembrosEquipe({commit}){
            const vetorEquipe = localStorage.getItem('equipe');
            if (vetorEquipe) {
                const vetor = JSON.parse(vetorEquipe)
                vetor.forEach(element => {
                    commit('adicionarMembro', element) ;
                });
            }
        }
    }
}