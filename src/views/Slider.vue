<template>
	<div class="slider">
		<div v-if="currentSlider === 0" class="one"></div>
		<div v-if="currentSlider === 1" class="two"></div>
		<div v-if="currentSlider === 2" class="three"></div>
	</div>
</template>

<script>
	export default {
		name: "Slider",
		data() {
			return {
				currentSlider: 0,
				task:''
			}
		},
		mounted() {
			this.task = setInterval(() =>{
				console.log('current slider: ', this.currentSlider);
				if(this.currentSlider === 2){
					this.currentSlider = 0;
				}else{
					this.currentSlider++;
				}
			}, 1000);
		},

		beforeUnmount() {
			clearInterval(this.task);
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