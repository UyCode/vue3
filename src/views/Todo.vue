<template>
        <el-container>
            <el-input style="width: 20%;" v-model="newTodoText"
                      placeholder="E.g. feet the cat"
            ></el-input>

            <el-button style="width: 5%; height: 3%" :plain="true" @click="addNewTodo"
                       type="primary">Add
            </el-button>
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

            <el-dialog title="修改To-Do" v-model="show">
                <el-form @submit="edit">
                    <el-form-item label="To-do Content" label-width="120px;">
                        <el-input v-model="edit" autocomplete="on"></el-input>
                    </el-form-item>
                    <el-button @click="editTodo">确定</el-button>
                </el-form>
            </el-dialog>
        </el-container>

        <!--<ul>
            <todo-item
                    v-for="(todo, index) in todos"
                    :key="todo.id"
                    :title="todo.title"
                    @remove="todos.splice(index, 1)"
            ></todo-item>
         </ul>-->
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
                edit: '',
                show: false,
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
                },

                currentTodo:{}

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

			},
            handleEdit(index) {
                this.currentTodo = this.todos[index];
                this.show = true;
                return index;
            },
            editTodo(){
                this.currentTodo.title = this.edit;
                this.todos[this.index] = this.currentTodo;
                ElMessage.success('修改成功！');
                this.show = false;
            }
		}
	}
</script>

<style scoped>

</style>