<template>
	<div>
		{{collectionName }}: {{readersNumber}}  {{book.title}}
	</div>
</template>

<script>
	import {toRef, ref, reactive, onMounted, onBeforeMount} from 'vue'
	export default {
		name: "MyBook",
		props:{
			collectionName: String
		},
		setup(props, context){
			const readersNumber = ref(0);

			const book = reactive({title: 'Vue3 Guide'});

			onBeforeMount(() =>{
				console.log("Before Mount!");
			});

			onMounted(() =>{
				console.log("Mounted!");
			});


			// utilize by ES6 destructuring
			const title = toRef(props, 'title')
			console.log(title.value)

			// Attributes (Non-reactive object)
			console.log(context.attrs)

			// Slots (Non-reactive object)
			console.log(context.slots)

			// Emit Events (Method)
			console.log(context.emit)

			// expose to template
			return {
				readersNumber,
				book
			}



		}
	}
</script>

<style scoped>

</style>