import Vue from 'vue'
import App from './App.vue'
import intro from './components/intro'
import PrivacyBlock from './components/privacyBlock'
import vuetify from './plugins/vuetify' // path to vuetify export

// new Vue({
//   vuetify
// }).$mount('#app')

new Vue({
  el: '#app',
  render: h => h(App)
})