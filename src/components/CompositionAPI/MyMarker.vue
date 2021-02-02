<template>
	<div> {{userLocation}} -> {{userGeolocation.longitude}}, {{userGeolocation.latitude}}</div>
</template>

<script>
	import {inject} from 'vue';
	export default {
		name: "MyMarker",
		/*inject: ['location', 'geolocation']*/

		setup(){
			const userLocation = inject('location', );
			const userGeolocation = inject('geolocation');

			return{
				userLocation,
				userGeolocation
			};
		}
	}
</script>

<style scoped>

</style>