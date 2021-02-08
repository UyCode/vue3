<template>
	<div class="textAlign">
		<div>
			<el-input v-model="newTodoText"
			          placeholder="E.g. feet the cat"
			          maxlength="30"
			          style="width: 300px;"
			          show-word-limit
			></el-input>

			<el-button :plain="true" @click="addNewTodo"
			           type="primary">添加
			</el-button>
		</div>
		<div>
			<el-table :data="todos"
			          :row-class-name="addClass"
			          style="width: 730px; text-align: center">
				<el-table-column
						label="To-Do 列表"
						prop="title"
						width="460"
						@remove="todos.splice(index, 1)"
				>
				</el-table-column>
				<el-table-column label="操作" width="270">
					<template #default="scope">
						<el-button type="primary" icon="el-icon-edit"
						           size="mini"
						           @click="handleEdit(scope.$index, scope.row)">编辑
						</el-button>
						<el-button icon="el-icon-delete"
						           size="mini"
						           type="danger"
						           @click="handleDelete(scope.row)">删除
						</el-button>
						<el-button icon="el-icon-circle-check"
						           size="mini"
						           type="warning"
						           @click="complete(scope.row,scope.$index)">完成
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<el-dialog title="修改To-Do" v-model="show">
			<el-form @submit="edit">
				<el-form-item label="To-do Content" label-width="120px;">
					<el-input v-model="edit" autocomplete="on"></el-input>
				</el-form-item>
				<el-button @click="editTodo">确定</el-button>
			</el-form>
		</el-dialog>

		<!--<ul>
			<todo-item
					v-for="(todo, index) in todos"
					:key="todo.id"
					:title="todo.title"
					@remove="todos.splice(index, 1)"
			></todo-item>
		 </ul>-->

	</div>
</template>

<script>
	//import TodoItem from "./TodoItem";
	// eslint-disable
	//import store from '../store/index'
	import {ElMessage} from "element-plus";

	export default {
		name: "Todo",
		components: {
			// 'todo-item': TodoItem
		},
		data() {
			return {
				newTodoText: '',
				edit: '',
				show: false,
				todos: [
					{
						id: 1,
						title: 'xxxxxxx',
						isComplete: false
					}
				],
				currentTodo: {}
			}
		},

		methods: {
			addNewTodo() {

				if (this.newTodoText.trim() !== '') {
					let todoItem = {
						id: this.todos.length + 1,
						title: this.newTodoText
					};
					this.todos.push(todoItem);
					this.newTodoText = '';
					ElMessage.success({
						message: '添加成功!',
						showClose: true
					});

				} else {
					ElMessage.error({
						message: '无法添加空数据!',
						showClose: true
					})
				}
			},
			handleDelete(row) {
				let index = this.todos.findIndex(item => item.id === row.id)
				this.todos.splice(index, 1);
				ElMessage.warning({
					message: '删除成功!',
					showClose: true
				})

			},
			handleEdit(index) {
				this.currentTodo = this.todos[index];
				this.edit = this.currentTodo.title;
				this.show = true;
				return index;
			},
			editTodo() {
				this.currentTodo.title = this.edit;
				this.todos[this.index] = this.currentTodo;
				this.show = false;
				ElMessage.success({
					message: '修改成功!',
					showClose: true
				});
			},

			complete(row, rowIndex) {
				this.todos[rowIndex].isComplete = true;
				this.addClass({row, rowIndex});
				ElMessage.success({
					message: `${this.todos[rowIndex].title} 已完成!`,
					showClose: true
				});
			},
			addClass({row}) {
				if(row.isComplete){
					return 'complete';
				}
				return '';
			}

		}
	}
</script>

<style>
	.textAlign {
		text-align: center;
	}

	.el-table .complete {
		color: gray;
		font-weight: bolder;
		text-decoration: line-through
	}
</style>