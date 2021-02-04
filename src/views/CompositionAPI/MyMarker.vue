<template>
	<div> {{userLocation}} ->
		{{userGeolocation.longitude}},
		{{userGeolocation.latitude}}

		<div>
			<button @click="updateLocation"> Change Location</button>
			<button @click="changeLocation"> Change By this Component</button>
		</div>

	</div>

</template>

<script>
	import {inject} from 'vue';
	export default {
		name: "MyMarker",
		//method 1
		/*inject: ['location', 'geolocation']*/

		setup(){
			//method 2
			const userLocation = inject('location', );
			const userGeolocation = inject('geolocation');
			const updateLocation = inject('updateLocation');

			// try to change read-only props in there
			// this will fail and show the reason in console
			const changeLocation = () =>{
				userLocation.value = 'changed by injected component';
				console.log(userLocation.value);
			}


			return{
				userLocation,
				userGeolocation,
				updateLocation,
				changeLocation
			};
		}
	}
</script>

<style scoped>

</style>