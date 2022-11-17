<template>
	<div class="container">
		<div>已完成{{ isComplete }} / 全部{{ list.length }}</div>
		<div v-if="isComplete > 0" class="btn">
			<button @click="onClear">清除已完成</button>
		</div>
	</div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
	name: 'navFooter',
	props: {
		list: {
			type: Array,
			required: true
		}
	},
	setup(props, ctx) {
		let isComplete = computed(() => {
			// 过滤出来已完成的项
			let completeArr = props.list.filter(item => {
				return item.complete
			})
			return completeArr.length
		})

		let onClear = () => {
			// 过滤出来未完成的项
			let notCompleteArr = props.list.filter(item => {
				return item.complete == false
			})
			ctx.emit('clear', notCompleteArr)
		}
		return {
			isComplete,
			onClear
		}
	},
})
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	align-items: center;
	.btn {
		margin-left: 10px;
	}
}
</style>
