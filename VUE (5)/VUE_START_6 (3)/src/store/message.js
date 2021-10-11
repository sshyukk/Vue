export default {
    // 모듈로 사용하기 위해서는 이름 범위를 따로 설정해 주어야 한다.
    namespaced: true,
    state() {
        return {
            message: 'Hello Store Module~~'
        }
    },
    getters: {
        reversedMessage(state) {
            return state.message.split('').reverse().join('')
        }
    },
    mutations: {
        updateMessage(state, newMessage) {
            state.message = newMessage
        }
    },
    actions: {
        async fetchTodo({ commit }) {
            const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(res => res.json())
            commit('updateMessage', todo.title)
        }
    }
}
