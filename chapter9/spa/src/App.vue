<script>
import LoadingOverlay from './components/LoadingOverlay'

// 読み込んだ Name コンポーネントを
// 使えるようにする設定
export default {
  components: { LoadingOverlay }
}
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>
    <!-- ここにパスと一致したコンポーネントが埋め込まれる -->
    <transition name="view">
    <router-view />
    </transition>
    <!-- オーバーレイ用のコンポーネント -->
<LoadingOverlay />
  </div>
</template>

<style>
/* ナビゲーション */
nav {
    display: flex;
    align-items: center;
    background: #222;
}
nav a {
    display: block;
    padding: 0.5em;
    color: #eee;
    line-height: 1em;
    text-decoration: none;
}
/* アクティブなリンク */
.router-link-active {
    background: palevioletred;
}

.view-enter-active, .view-leave-active {
  transition: opacity 0.5s;
}
.view-leave-active {
  position: absolute;
}
.view-enter, .view-leave-to {
  opacity: 0;
}
</style>
