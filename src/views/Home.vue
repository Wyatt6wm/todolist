<template>
  <div>
    <!-- 使用子组件（应该有隐式的命名转换） -->
    <nav-header @add="onAdd"></nav-header>
    <nav-main :list="list" @del="onDel"></nav-main>
    <nav-footer :list="list" @clear="onClear"></nav-footer>
  </div>
</template>

<script>
// 导入子组件
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'

import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'home',
  // 声明用到的子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup(props, ctx) {
    // 创建store对象
    let store = useStore()

    // 添加任务
    let onAdd = (val) => {
      // 判断任务是否已存在
      let notExist = true
      list.value.map(item => {
        if (item.title === val) {
          notExist = false
          alert('任务已存在')
        }
      })
      if (notExist) {
        // 调用mutation函数
        store.commit('addTodo', {
          title: val,
          complete: false
        })
      }
    }

    // 获取任务列表
    let list = computed(() => {
      return store.state.list
    })

    // 删除任务
    let onDel = (val) => {
      // 调用mutation函数
      store.commit('delTodo', val)
    }

    // 清空已完成
    let onClear = (val) => {
      // 调用mutation函数
      store.commit('clearTodo', val)
    }

    return {
      onAdd,
      list,
      onDel,
      onClear
    }
  }
})
</script>

<style lang="scss" scoped>

</style>