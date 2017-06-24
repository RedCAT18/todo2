<template>
    <div class="inbox">
    	<div class="sub-title">Today Todo List</div>
        <hr>
        <div id="inbox-form">
            <div class="form-group col-sm-3 col-md-3 col-lg-3">
                <input type="text" class="form-control input-sm" placeholder="일정입력" v-model="todo.title">
            </div>

            <div class="form-group col-sm-3 col-md-3 col-lg-3">
                <input type="date" class="form-control input-sm" v-model="todo.date">
            </div>

            <div class="form-group col-sm-3 col-md-3 col-lg-3">
                <input type="text" class="form-control input-sm" placeholder="타입" v-model="todo.type">
            </div>

            <div class="col-sm-3 col-md-3 col-lg-3">
                <button class="btn btn-info btn-sm" @click="addTodo()">일정추가</button>
                <button class="btn btn-default btn-sm" @click="resetValue()">Reset</button>
            </div>
        </div>

        <div id="inbox-table">
            <table class="table table-striped">
                <caption>일정</caption>
                <thead>
                    <th></th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    <app-todo-list-table  v-for="item in todoList" :key="item.id" :tableList="item"></app-todo-list-table>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import TodoListTable from './TodoListTable.vue';
    import { eventBus } from '../../main';
    import api from '../../api';

    export default {
        data: function(){
            return {
                todo: {
                        id: '',
                        title: '',
                        date: '',
                        type: ''
                    },
                todoList:[],
            }
        },
        components: {
            appTodoListTable : TodoListTable
        },
//        watch: {
//           todo: function(newData) {
//             this.initData();
//           }
//        },
        methods: {
            //create
            addTodo(){
                let editId = this.todo.id;
                this.initData();
                this.todo.id = editId;
                api.addTodo(this.todo).then(response => {
//                    console.log(response);
                    if(response.body.todo) {
                        if(response.body.todo.id !== editId){
                            this.todoList.push(this.todo);
                        }
                        this.todo = [];
                    }
                });
            },
            initData: function(){
                for (let key in this.todo) {
                    this.$set(this.todo, key, this.todo.key);
                    return this.todo;
                }
            },
            //입력창 리셋
            resetValue(){
                this.todo = [];
            }
        },
        created(){
            //promise로 리턴 처리 받기
            api.getTodo().then(response =>{
               if(this.$auth.getToken()){
                   this.todoList = response.data.todo;
               }
            });
        },
        beforeMount(){
            eventBus.$on('sendEditId', (editData) => {
                var len = this.todoList.length;
                for (var i = 0; i < len; i++){
                    if(this.todoList[i].id == editData) {
                        this.todo = this.todoList[i];
                    }
                }

            });
            eventBus.$on('sendDeleteId', (deleteData) => {
                this.todoList.splice(deleteData, 1);
                api.deleteTodo(deleteData).then(response => {
                    console.log(response);
                    if(response.success = 1){
                        console.log('success');
                    }
                });
//                var len = this.todoList.length;
//                for (var i = 0; i < len; i++){
//                    if(this.todoList[i].id == deleteData) {
//                        if(confirm("정말로 삭제하시겠습니까?")) {
//                            console.log(deleteData);
//                            this.todoList.splice(i,1);
//
//                        }
//                    }
//                }
            });
        },
    }
</script>

<style scoped>
    thead th {
        padding: 10px;
    }
</style>
