import Vue from 'vue'
import router from './router.js'
import App from './App.vue'
import store from './store.js'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
