<template>
  <h1 @click="updateMessage">
    {{ newMessage }}
  </h1>
</template>

<script>
export default {
  props: ['message'],
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
