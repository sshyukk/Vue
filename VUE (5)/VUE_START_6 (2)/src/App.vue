<template>
  <h1>{{ msg }}</h1>
  <Hello />
  <button @click="increaseCount">
    Increase!
  </button>
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello
  },
  data() {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
    increaseCount() {
      this.$store.commit('increaseCount')
    }
  }
  
}
</script>

