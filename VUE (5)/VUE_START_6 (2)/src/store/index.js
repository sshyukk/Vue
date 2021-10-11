import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
           msg: 'Hello Vue?!',
           count: 1 
        }
    },
    mutations: {
        increaseCount(state) {
            state.count += 1
        }
    }
})
