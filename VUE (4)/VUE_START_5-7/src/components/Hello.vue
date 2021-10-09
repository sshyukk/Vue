<template>
  <h1 ref="hello">
    Hello
  </h1>
</template>

<script>
export default {
  // html 구조가 생성된 이후에 참조하는 것이기 때문에 당연히 created 라이프 사이클에서는 사용이 불가능하다.
  mounted() {
    const h1El = this.$refs.hello
    console.log(h1El)
  }
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
    color: $color;
}
</style>
