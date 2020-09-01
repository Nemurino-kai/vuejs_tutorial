<template>
<div>
  <p> Loading</p>
  <transition name="loading">
    <div class="loading" v-if="loading">Loading</div>
  </transition>
</div>
</template>

<script>
export default {
  computed: {
    loading () {
      console.log(this.$store.state.view.loading)
      return this.$store.state.view.loading
    }
  }
}
</script>

<style>
.loading {
  position:fixed;
  }
.loading-enter-active {
  transition: all 0.25s;
}
.loading-leave-active {
  transition: all 0.5s ease 0.5s; /* ルータービューが終わった後に */
}
</style>
