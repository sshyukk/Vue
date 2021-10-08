<template>
  <h1
    :class="$attrs.class"
    :style="$attrs.style"
    @click="$attrs.onClick">
    Hello
  </h1>
  <h2 @click="$attrs.onClick">
    Haha?!
  </h2>
</template>

<style scoped lang="scss">
$color: red;
h1 {
    color: $color;
}
</style>
