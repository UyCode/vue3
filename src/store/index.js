import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList:[]
  },
  mutations: {

    setTodoList(state, data){
      state.todoList = data;
    }

  },
  actions: {
    commitTodoList:({commit}, todoList) =>commit('setTodoList', todoList)
  },
  modules: {
  }
})
