<template>
  <h1>Hello.vue</h1>
  <div>{{ count }}</div>
  <button @click="increaseCount">
    +
  </button>
  <button @click="decreaseCount">
    -
  </button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count.count
    }
  },
  methods: {
    increaseCount() {
      this.$store.commit('count/increaseCount')
    },
    decreaseCount() {
      this.$store.commit('count/decreaseCount')
    }
  }
}

</script>
<style scoped lang="scss">
$color: red;
h1 {
    color: $color
}
</style>
