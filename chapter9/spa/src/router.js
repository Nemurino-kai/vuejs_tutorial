import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
import Home from '@/views/Home'
import Product from '@/views/Product'
import ProductList from '@/views/ProductList'

// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product',
      component: ProductList
    },
    {
      path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({id: Number(route.params.id)})
    }
  ]
})
// 生成したVueRouterインスタンスをエクスポート
export default router
