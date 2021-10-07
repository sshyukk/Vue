<template>
  <button @click="log">
    CLick Me!
  </button>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        log() {
            console.log('Click!')
        }
    }
}
</script>
