<template>
	<div id="nav">
		<h1> Hello App</h1>
		<router-link to="/">HomePage</router-link>
		|
		<router-link to="/about">AboutPage</router-link>

		<!--<router-example />-->
	</div>
	<router-view/>
</template>

<script>
	export default {
		components: {},
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
				alert("focused")
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

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

</style>
