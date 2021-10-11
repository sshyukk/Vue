<template>
  <h1>Hello.vue</h1>
  <div>{{ msg }}</div>
  <div @click="increaseCount">
    {{ count }}
  </div>
</template>

<script>
import { state, mutations } from '~/store/index'
export default {
    data() {
        return state
    },
    methods: {
        increaseCount: mutations.increaseCount
    }
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
    color: $color
}
</style>
