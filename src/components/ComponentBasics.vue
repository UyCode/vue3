<template>
	<!--<div>
		<blog-post title="I am Here"></blog-post>
		<blog-post title="Vue tutorials of Official"></blog-post>
	</div>-->

	<div :style="{fontSize: postFontSize + 'em'}">
		<blog-post @larger="enlarge"
			v-for="post of posts"
			:key="post.id"
			:title="post.title">
		</blog-post>
	</div>

	<div>
		<custom-input v-model="searchText">
		</custom-input>
	</div>

	<div>
		<strong>Error!</strong>
		<slot></slot>
	</div>
</template>

<script>
	import BlogPost from "./BlogPost";
	import CustomInput from "./CustomInput";

	export default {
		name: "ComponentBasics",
		components: {
			BlogPost,
			CustomInput
		},
		data() {
			return {
				posts: [
					{id: 1, title: 'Vue tutorials'},
					{id: 2, title: 'JavaScript tutorials'},
					{id: 3, title: 'Java tutorials'}
				],
				postFontSize: 1,
				searchText: 'Hello'
			}
		},

		methods: {
			enlarge(sizeBy) {
				this.postFontSize += sizeBy;
			}
		}
	}
</script>

<style scoped>

</style>