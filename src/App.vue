<template>
	<div id="nav">

	</div>
	<div class="nav-content">
		<router-link class="nav-space nav-content"
			v-for="(list, index) in navList"
			:key="index"
			:to="list.to">
			{{ list.name}}
		</router-link>
	</div>
	<router-view/>
</template>


<script>
	export default {
		name: 'App',
		data() {
			return {
				navList: [
					{name: 'Home', to: '/'},
					{name: 'Todo', to: '/todo'},
					{name: 'Calendar', to: '/calendar'},
					{name: 'Markdown', to: '/markdown'},
					{name: 'Slider', to: '/slider'},
				]
			}
		}
	}
</script>


<style>

	#nav {
		padding: 30px;
		text-align: center;
		background: url("./assets/bgp.jpeg");
		filter: blur(50px);
		float: top;
	}

	.nav-content {
		position: static;
		width: 1910px;
		height: 80px;
		margin-left: 50%;
		text-align: center;
		transform: translate3d(-50%, -50%, 0);
		font-weight: bolder;
		color: black;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	.nav-space {
		margin-left: 15px;
	}
</style>
