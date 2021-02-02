<template>
	<div id="app">
		<dynamic-component></dynamic-component>
	</div>
</template>

<script>
	import DynamicComponent from "./components/DynamicComponent";

	export default {
		components: {
			DynamicComponent
		},
		data() {
			return {
				message: "You loaded this page on" + new Date().toLocaleString(),
				count: 12,
				url: 'https://baidu.com',
				myText: '',
			};
		},

		created() {
			console.log(this.message);

		},

		methods: {
			doSomething() {
				alert("fucused")
			},
			starter() {
				console.log('🟢 Start Sending')
			},
			endSending() {
				console.log('⏱ sending Complete')
			},
			duration() {
				console.log('⏳ sending data...')
			}
		}
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.myclass {
		color: red;
	}
</style>
