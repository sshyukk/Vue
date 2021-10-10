<template>
  <h1>
    {{ msg }}
  </h1>
  <Parent />
</template>

<script>
import Parent from '~/components/Parent'
export default {
  components: {
    Parent
  },
  provide() {
    return {
      msg: this.msg
    }
  },
  data() {
    return {
      msg: 'Hello Vue!'
    }
  }
  
}
</script>

