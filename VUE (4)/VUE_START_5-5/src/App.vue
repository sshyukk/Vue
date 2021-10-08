<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello>
    <h2>Hello Vue?</h2>
    <p>The brown fox!</p>
  </Hello>
  <Btn>Click me!</Btn>
  <Btn />
</template>

<script>
import Hello from '~/components/Hello'
import Btn from '~/components/Btn'

export default {
  components: {
    Hello,
    Btn
  },
  data() {
    return {
      msg: 'Hello Vue!'
      }
    }
  }
</script>

