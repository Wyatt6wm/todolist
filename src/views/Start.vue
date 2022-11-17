<template>
	<div>
		<button @click="onStart">开始任务</button>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
	name: 'start',
	setup() {
		// 创建router对象
		let router = useRouter()

		let onStart = () => {
			router.push({
				name: 'Home'
				// 或者path: '/home'
			})
		}
		
		return {
			onStart
		}
	},
})
</script>
