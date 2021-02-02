<template>
	<my-marker />
</template>

<script>
	import {provide} from 'vue';
	import MyMarker from "./MyMarker";
	export default {
		name: "MyMap",
		components:{
			MyMarker
		},

		/*provide:{
			location: 'North Pole',
			geolocation: {
				longitude: 90,
				latitude: 135
			}
		}*/

		setup() {
			provide('location', 'North Pole');
			provide('geolocation', {
				longitude: 90,
				latitude: 135
			});
		}
	}
</script>

<style scoped>

</style>