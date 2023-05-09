import Vue from 'vue'
import App from './App.vue'
import RockNote from './components/rock-note.vue'

Vue.component('RockNote',RockNote)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
