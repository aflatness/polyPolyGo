import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

var srchBox = new Vue({
  el: '#searchBox',
  data: {
    content: ''
  }
})

Vue.component('privacy-block', {
  props: {
    device: Object
  },
  template: `
    <div>
      <div>{{ device.title }}</div>
      <div>{{ device.text }}</div>
    </div>`
})

new Vue({
  el: '#privacyBlock',
  data: {
    info: [
      {
        title: 'Privacy Browser Extension',
        text: 'Browse as usual, and we\'ll take care of the rest. Get bundled private search, tracker blocking, and site encryption, all in one download, for major browsers.'
      },
      {
        title: 'Privacy Search Engine',
        text: 'Search privately with our app or extension, add private web search to your favorite browser, or search directly at polypolygo.com'
      },
      {
        title: 'Privacy Browser App',
        text: 'Our private browser for mobile comes equipped with our search engine, tracker blocker, encryption enforce, and more. Available on iOS & Android.'
      }
    ]
  }
})