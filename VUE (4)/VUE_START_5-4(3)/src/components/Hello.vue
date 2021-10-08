<template>
  <label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </label>
</template>

<script>
export default {
  
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update']
  }
</script>

<style scoped lang="scss">
$color: red;
h1 {
    color: $color;
}
</style>
