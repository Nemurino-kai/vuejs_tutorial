import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/store/product.js' // モジュールをストアルートに登録
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product // モジュールをストアルートに登録
  }
})
