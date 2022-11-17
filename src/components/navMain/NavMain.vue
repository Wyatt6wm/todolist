<template>
	<div>
		<div v-if="list.length > 0">
			<div v-for="(item, index) in list" :key="index">
				<div class="item">
					<input type="checkbox" v-model="item.complete">
					{{ item.title }}
					<button @click="onDel(item, index)">删除</button>
				</div>
			</div>
		</div>
		<div v-else>
			暂无任务
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'navMain',
	props: {
		list: {
			type: Array,	// 用来做类型校验
			required: true	// 是否要求必须输入
		}
	},
	emits: ['del'],
	setup(props, ctx) {
		// 删除任务
		let onDel = (item, index) => {
			ctx.emit('del', index)
		}

		return {
			onDel
		}
	},
})
</script>

<style lang="scss" scoped>
.item {
	width: 160px;
	height: 35px;
	line-height: 35px;
	position: relative;
	cursor: pointer;

	button {
		position: absolute;
		right: 20px;
		top: 6px;
		display: none;	// 隐藏按钮
	}

	&:hover {
		background: #ddd;

		button {
			display: block	// 显示按钮
		}
	}
}
</style>
