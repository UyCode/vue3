<template>
	<section class="section-part">
		<h1 style="text-align: center">Markdown App</h1>
		<article class="left">
			<label>
				<textarea class="content-right"
				          :value="content"
				          @input="update">

				</textarea>
			</label>
		</article>

		<article class="right" v-html="markedContent">
		</article>


	</section>

</template>

<script>
	import marked from 'marked';
	import debounce from "../utilities/mixins/debounce";

	export default {
		name: "Markdown",
		mixins: [debounce],
		data(){
			return{
				content: '',
			}
		},
		computed:{
			markedContent(){
				return marked(this.content)
			}
		},
		methods:{
			update(e){
				const task = () =>{this.content = e.target.value;}
				this.debounce(task, 500);
				},
		},
		beforeUnmount() {
			alert('你确定离开此页面?');
			/*this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});*/
		},
		unmounted() {
			this.debounce(() => this.$message({
				message: '你刚刚失去了一切...',
				type: 'warning'
			}), 500);
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