<template>
  <h1 @click="updateMessage">
    {{ newMessage }}
  </h1>
  <h2>{{ name }}</h2>
</template>

<script>
export default {
  props: {
    message: String,
    name: [String, Number]
  },
  data() {
    return {
      newMessage: this.message
    }
  },
  methods: {
    updateMessage() {
      this.newMessage = 'Good~'
    }
  }
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
    color: $color;
}
</style>
