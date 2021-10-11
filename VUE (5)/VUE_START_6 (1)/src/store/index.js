// 프록시 인스턴스로 만들어 주는 과정.
import { reactive } from 'vue'

// 데이터를 관리하는 매체
export const state = reactive({
    msg: 'Hello Vue?!',
    count: 1
})

// 계산된 데이터 설정.
export const getters = {
    reversedMsg() {
        return state.msg.split('').reverse().join('')
    }
}

// 데이터를 수정하는 용도로만 사용.
export const mutations = {
    increaseCount() {
        state.count += 1
    },
    decreaseCount() {
        state.count -= 1
    },
    updateMsg(newMsg) {
        state.msg = newMsg
    }
}

// 데이터를 수정하는 것 외에 로직을 설정.
export const actions = {
    async fetchTodo() {
        const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
        console.log(todo)
        mutations.updateMsg(todo.title)
    }
}
