<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello>
    <template #default="{ hello }">
      <h2>
        Hello {{ hello }}
      </h2>
    </template>
  </Hello>
</template>

<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello
  },
  data() {
    return {
      msg: 'Hello Vue!'
      }
    }
  }
</script>

