<template>
  <h1 @click="slotName = 'abc'">
    {{ msg }}
  </h1>
  <Hello>
    <template #default="{ hello }">
      <h2>
        Hello {{ hello }}
      </h2>
    </template>
    <template #[slotName]="{ hello }">
      <h2>
        ABC {{ hello }}
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
      msg: 'Hello Vue!',
      slotName: 'xyz'
      }
    }
  }
</script>

