<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
  <Hello />
</template>

<script>
import Hello from '~/components/Hello'
import sampleMixin from '~/mixins/sample'

export default {
  components: {
    Hello
  },
  mixins: [sampleMixin],
  data() {
    return {
      msg: 'Hello Vue!'
      }
  },
  created() {
    this.$fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => console.log(res))
  }
  
}
</script>

