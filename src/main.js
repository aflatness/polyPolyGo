import Vue from 'vue'
import App from './App.vue'
import intro from './components/intro'
import PrivacyBlock from './components/privacyBlock'
import vuetify from './plugins/vuetify' // path to vuetify export

// new Vue({

// }).$mount('#app')

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})