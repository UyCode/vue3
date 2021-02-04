<template>
	<h1>{{title}}</h1>
	<button @click="$emit('larger', 0.01)">Button</button>
</template>

<script>
	export default {
		name: "BlogPost",
		props: ['title'],
		emits: ['larger'],
		/*data(){
			return{
				title:''
			}
		}*/
		methods: {
			print() {
				console.log(this.title);
			}
		}
	}
</script>

<style scoped>

</style>