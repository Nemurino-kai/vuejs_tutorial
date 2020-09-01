import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/store/product.js' // モジュールをストアルートに登録
import view from '@/store/view.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product, // モジュールをストアルートに登録
    view
  }
})
