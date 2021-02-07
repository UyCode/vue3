<template>
	<div id="nav"></div>
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
		width: 100%;
		height: 80px;
		text-align: center;
		transform: translate3d(0, -50%, 0);
		font-weight: bolder;
		color: black;
		filter: blur(0.02em);
	}

	#nav, a {
		font-weight: bolder;
	}

	.router-link-exact-active {
		color: #ea0505;
		font-size: large;
	}

	.nav-space {
		margin-left: 15px;
	}

</style>
