import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router, // アプリケーションに登録
  render: h => h(App)
})
