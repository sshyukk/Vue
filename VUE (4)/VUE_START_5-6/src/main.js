import { createApp } from 'vue'
import App from '~/App'
import Btn from '~/components/Btn'
import World from '~/components/World'

const app = createApp(App)
app.component('Btn', Btn)
app.component('World', World)
app.mount('#app')
