<template>
  <Modal width="300">
    <template #activator>
      <button>On Modal!</button>
    </template>
    <h3>App.vue</h3>
  </Modal>
  <Hello />
</template>

<script>
import Hello from '~/components/Hello'
export default {
  components: {
    Hello
  },
  data() {
    return {
      
    }
  },
  
}
</script>

