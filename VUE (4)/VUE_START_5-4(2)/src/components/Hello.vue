<template>
  <div>
    <h1 @click="$emit('please', 7)">
      Please
    </h1>
    <h1 @click="$emit('click')">
      Click
    </h1>
  </div>
</template>

<script>
export default {
  emits: {
    click: null,
    please: (number) => {
      if (number > 10) {
        return true
      } else {
        console.error('number is not greater than 10!')
        return false
      }
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
