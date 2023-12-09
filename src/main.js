import Vue from 'vue'
import App from './App.vue'
import store from './store/Store.js'
import {router} from './router.js';
import { formatarDataEHorario, formatarSomenteData, formatarSomenteHorario } from './utils/dataUtils.js';


Vue.config.productionTip = false
Vue.prototype.$store = store;

Vue.prototype.$formatarDataEHorario = formatarDataEHorario;
Vue.prototype.$formatarSomenteData = formatarSomenteData;
Vue.prototype.$formatarSomenteHorario = formatarSomenteHorario;

store.dispatch('iniciarMembrosEquipe');
store.dispatch('iniciarTarefasAtivas');
store.dispatch('iniciarTarefasAndamento');
store.dispatch('iniciarTarefasConcluidas');



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
