<template>
	<div class="block">
		<span class="demonstration">日期</span>
		<el-date-picker
				v-model="value1"
				type="date"
				placeholder="选择日期">
		</el-date-picker>
	</div>
</template>

<script>
	export default {
		name: "Calendar",
		data() {
			return {
				days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				disabledDate(time) {
					return time.getTime() > Date.now()
				}
				,
				shortcuts: [
					{
						text: 'Today',
						value: new Date(),
					},
					{
						text: 'Yesterday',
						value: (() => {
							const date = new Date()
							date.setTime(date.getTime() - 3600 * 1000 * 24)
							return date
						})(),
					},
					{
						text: 'A week ago',
						value: (() => {
							const date = new Date()
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
							return date
						})(),
					}
				],
				value1: ''
			}
		}
	};
</script>

<style scoped>

</style>