<template>
  <div v-if="!isEdit">
    {{ msg }} 
    <button @click="onEdit">
      Edit!
    </button>
  </div>
  <div v-else>
    <input
      ref="editor"
      v-model="msg"
      type="text"
      @keyup.enter="isEdit = false" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue!',
      isEdit: false,
      }
  },
  methods: {
    onEdit() {
      this.isEdit = true
      // 반응형 데이터가 바뀐다고 바로 렌더링이 적용되는 것이 아니다. 따라서 setTimeout으로 시간을 벌어주어야 한다.
      this.$nextTick(() => {
        this.refs.$editor.focus()
      }, 0)
    }
  }
}
</script>

