<template>
  <slot name="abc">
  </slot>
  <h1>Hello</h1>
  <slot name="xyz">
  </slot>
</template>

<script>
export default {

  }
</script>

<style scoped lang="scss">
$color: red;
h1 {
    color: $color;
}
</style>
