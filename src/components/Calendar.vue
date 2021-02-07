<template>
	<div>

		<div class="main">
			<section class="">
				<p v-for="day in days" :key="day"> {{ day }} </p> <br>
				<p class="p-number" v-for="num in 30" :key="num"> {{ num}} </p>
			</section>

			<!--<span >
				<p class="p-number" v-for="num in 30" :key="num"> {{ num}} </p>
			</span>-->

		</div>
		<!--<span class="demonstration">日期</span>
		<el-date-picker
				v-model="value1"
				type="date"
				placeholder="选择日期">
		</el-date-picker>-->
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
	.main{
		width: 700px;
		height: 350px;
		-webkit-transform: translate(40%, 0);
		background: #fa376c;
	}

	p{
		display: inline;
		margin-left: 50px;
		text-align: center;
		word-wrap:break-word;
	}

	span{
		word-wrap:break-word;
	}

	.p-number{
		margin-left: 75px;
	}
</style>