<template>
	<div class="slider">
		<div v-if="currentSlider === 0" class="one" style=""></div>
		<div v-else-if="currentSlider === 1" class="two"></div>
		<div v-else class="three"></div>
	</div>
</template>

<script>
	export default {
		name: "Slider",
		data() {
			return {
				currentSlider: 0,
				task:'',
				translateY: 0,
				taskRotate:''
			}
		},
		mounted() {
			this.task = setInterval(() =>{
				this.taskRotate = 0;
				if(this.currentSlider === 2){
					this.currentSlider = 0;
				}else{
					this.currentSlider++;
				}
			}, 1000);

			this.taskRotate = setInterval(() =>{
				this.translateY++;
			},1)
		},

		beforeUnmount() {
			clearInterval(this.task);
			clearInterval(this.taskRotate);
		}
	}
</script>

<style scoped>

	.one, .two, .three, .slider{
		width: 100%;
		height: 400px;
	}

	.one{
		background: #1b8f5a;
	}

	.two{
		background: red;
	}

	.three{
		background: fuchsia;
	}

</style>