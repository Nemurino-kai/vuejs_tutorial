import Vue from 'vue'
import store from './store.js'
import App from './App.vue'
import router from './router.js'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store, // アプリケーションに登録
  router,
  render: h => h(App)
  // ...
})
