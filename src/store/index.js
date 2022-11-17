import { createStore } from 'vuex'

export default createStore({
  state: {
    // 初始化的任务列表
    list: [
			{
				title: '吃饭',
				complete: false
			},
			{
				title: '睡觉',
				complete: false
			},
			{
				title: '敲代码',
				complete: true
			}
		]
  },
  mutations: {
    // 添加任务
    addTodo(state, payload) {
      state.list.push(payload)
    },
    // 删除任务
    delTodo(state, payload) {
      state.list.splice(payload, 1)  // splice(下标, 长度)
    },
    // 清除已完成
    clearTodo(state, payload) {
      // 把过滤之后的传进来覆盖原数据
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
