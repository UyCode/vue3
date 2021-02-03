<template>
	<my-marker />
</template>

<script>
	import {provide, reactive, ref, readonly} from 'vue';
	import MyMarker from "./MyMarker";
	export default {
		name: "MyMap",
		components:{
			MyMarker
		},
		// method 1
		/*provide:{
			location: 'North Pole',
			geolocation: {
				longitude: 90,
				latitude: 135
			}
		}*/

		setup() {
			// method 2
			/*provide('location', 'North Pole');
			provide('geolocation', {
				longitude: 90,
				latitude: 135
			});*/

			//method 3, Reactivity
			const location = ref('North Pole');

			const geolocation = reactive({
				longitude: 90,
				latitude: 135
			});

			// this is equal to same name method in methods options
			const updateLocation = () =>{
				location.value = 'South Pole';
			}

			// can provide read-only, injected component not able to change the props value
			provide('location', readonly(location));
			provide('geolocation', readonly(geolocation));
			provide('updateLocation', updateLocation);

			return {
				location
			}
		},

		methods:{
			// mutating reactivity properties
			/*updateLocation(){
				this.location = 'South Pole';
			}*/
		}
	}
</script>

<style scoped>

</style>