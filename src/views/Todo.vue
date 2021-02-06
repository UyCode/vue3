<template>
    <div class="textAlign">
            <div>
                <el-input  v-model="newTodoText"
                          placeholder="E.g. feet the cat"
                           maxlength="30"
                           style="width: 300px;"
                           show-word-limit
                ></el-input>

                <el-button  :plain="true" @click="addNewTodo"
                           type="primary">Add
                </el-button>
            </div>
            <div>
                <el-table :data="todos"
                          style="width: 640px;">
                    <el-table-column
                            label="To-Do List"
                            prop="title"
                            width="180"
                            @remove="todos.splice(index, 1)"
                    >
                    </el-table-column>
                    <el-table-column label="操作">
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
                    ElMessage.success({
                        message:'添加成功!',
                        showClose: true
                    })

                } else {
                    ElMessage.error({
                        message:'无法添加空数据!',
                        showClose: true
                    })
				}
			},
			handleDelete(row) {
				let index = this.todos.findIndex(item => item.id === row.id)
				console.log(index);
				this.todos.splice(index, 1);
				ElMessage.warning({
                    message:'删除成功!',
                    showClose: true
				})

			},
            handleEdit(index) {
                this.currentTodo = this.todos[index];
                this.show = true;
                return index;
            },
            editTodo(){
                this.currentTodo.title = this.edit;
                this.todos[this.index] = this.currentTodo;
                this.show = false;
                ElMessage.success({
                    message:'修改成功!',
                    showClose: true
                })

            }
		}
	}
</script>

<style scoped>
 .textAlign{
     text-align: center;
 }
</style>