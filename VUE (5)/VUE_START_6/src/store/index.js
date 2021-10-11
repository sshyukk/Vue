// 프록시 인스턴스로 만들어 주는 과정.
import { reactive } from 'vue'

export const state = reactive({
    msg: 'Hello Vue?!',
    count: 1
})

export const mutations = {
    increaseCount() {
        state.count += 1
    }
}
