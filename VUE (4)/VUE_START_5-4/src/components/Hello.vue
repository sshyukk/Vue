<template>
  <h1 @click="$emit('please')">
    {{ message }}
  </h1>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
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
