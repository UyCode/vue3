<template>
    <div>

        <el-container>
            <el-input v-model="newTodoText"
                      placeholder="E.g. feet the cat"
            ></el-input>
            <el-button :plain="true" @click="addNewTodo"
                       type="primary">Add
            </el-button>
            <br>
            <el-table :data="todos"
                      style="width: 100%">
                <el-table-column
                        label="To-Do List"
                        prop="title"
                        width="180"
                        @remove="todos.splice(index, 1)"
                >
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

        </el-container>
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
	import { ElMessage } from "element-plus";

	export default {
		name: "Todo",
		components: {
			// 'todo-item': TodoItem
		},
		data() {
			return {
				newTodoText: '',
				todos: [
					{
						id: 1,
						title: 'read'
					}, {
						id: 2,
						title: 'drink'
					}, {
						id: 3,
						title: 'sleep'
					},
				],
				nextTodoId: 4,
                cannot(){
					ElMessage({
						message: 'todo Item can\'t Empty',
                        showClose:true,
                        type: 'error'
					});
                }

			}
		},

		methods: {
			addNewTodo() {

				if (this.newTodoText.trim() !== '') {
					this.todos.push({
						id: this.nextTodoId++,
						title: this.newTodoText
					});
					this.newTodoText = '';
				} else {
					return this.cannot();
				}
			},
			handleDelete(row) {
				let index = this.todos.findIndex(item => item.id === row.id)
				console.log(index);
				this.todos.splice(index, 1);

			}
		}
	}
</script>

<style scoped>

</style>