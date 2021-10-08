<template>
  <h1>Hello</h1>
  <slot :hello="123"></slot>
  <slot name="abc"></slot>
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
