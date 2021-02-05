<template>
	<div class="m-auto">
			<h1 class="text-2xl mx-20 my-10">Vue Calendar</h1>
			<section class="flex">
				<p class="text-center" style="width: 5.5%"
				   v-for="day in days" :key="day"> {{ day }} </p>
			</section>

		<section class="flex flex-wrap">
			<p class="text-center" style="width: 14.28%"
			   v-for="num in 30" :key="num"> {{ num }}</p>
		</section>
	</div>
</template>

<script>
	export default {
		name: "Calendar",
		data(){
			return{
				days:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
			}
		}
	}
</script>

<style scoped>

</style>