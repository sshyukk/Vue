<template>
  <!-- 라우츠에서 만든 페이지를 뷰에서 보이도록 함. -->
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink>
  <RouterLink
    :to="{ 
      name: 'docsId', 
      params: { id: '7777'}, 
      query: { name: 'Leon', age: 85, email: 'leon@abc.com' }
    }">
    Documents ID
  </RouterLink>
  <button @click="$router.push({ name: 'home' })">
    Home
  </button>
  <button @click="$router.push({ name: 'about'})">
    About
  </button>
  <RouterView />
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
      msg: 'Hello Vue!!!'
    }
  },
}
</script>

