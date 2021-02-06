<template>
	<section class="section-part">

		<article class="left">
			<label>
				<textarea class="content-right"
				          v-model="content"></textarea>
			</label>
		</article>

		<article class="right">
			{{content}}
		</article>

	</section>

</template>

<script>
	export default {
		name: "Markdown",
		data(){
			return{
				content: ''
			}
		}
	}
</script>

<style scoped>
	.section-part{
		width: 100%;
		height: 100%;
	}

	article{
		float: left;
	}

	.content-right{
		height: 100%;
		width: 99%;
	}

	.left{
		width: 50%;
		background-color: #f0f0f0;
		height: 750px;
	}

	.right{
		width: 50%;
		background: gainsboro;
		height: 750px;

	}

</style>