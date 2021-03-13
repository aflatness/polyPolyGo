import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import intro from './components/intro'
import SignUp from './components/signup'
import PrivacyBlock from './components/privacyBlock'
import vuetify from './plugins/vuetify' // path to vuetify export

Vue.use(VueRouter)

const routes = [
  {path: '/', component: App},
  {path: '/signup', component: SignUp}
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(SignUp)
})