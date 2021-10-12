<template>
  <!-- 라우츠에서 만든 페이지를 뷰에서 보이도록 함. -->
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink>
  <button @click="$router.push('/')">
    Home
  </button>
  <button @click="$router.push('/about')">
    About
  </button>
  <RouterView />
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {
      msg: 'Hello Vue!!!'
    }
  },
}
</script>

