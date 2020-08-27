<template>
  <div class="app">
    <h3>引数なし</h3>
    <ol>
      <li>{{ count }}</li>
      <li>{{ max }}</li>
    </ol>
    <h3>引数付き</h3>
    <ol>
      <li>{{ itemA }}</li>
      <li>{{ itemB(1) }}</li>
      <li>{{ nameA }}</li>
      <li>{{ nameB(1) }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    // 引数なしゲッター
    count () { return this.$store.getters.count }, // 1
    max () { return this.$store.getters.max }, // 2
    // 引数付きゲッター
    itemA () { return this.$store.getters.item(1) }, // 1 👍 いいね
    itemB () { return this.$store.getters.item }, // 2 👎 よくないね
    nameA () { return this.$store.getters.name(1) }, // 3 👍 いいね
    nameB () { return this.$store.getters.name } // 4 👎 よくないね
  }
}
</script>
