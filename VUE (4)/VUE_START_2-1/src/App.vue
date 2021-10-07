<template>
    <h1>{{ msg }}</h1>
    <Hello />
</template>
<script>
// 절대 경로를 사용
import Hello from '~/components/Hello'

export default {
    components: {
        Hello
    },
    data() {
        return {
            msg: 'Hello Webpack?..'
        }
    }
}
</script>

