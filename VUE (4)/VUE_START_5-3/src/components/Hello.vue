<template>
  <h1>
    Hello
  </h1>
</template>

<script>
export default {
  inheritAttrs: false,
  mounted() {
    console.log(this.$attrs)
  }
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
    color: $color;
}
</style>
