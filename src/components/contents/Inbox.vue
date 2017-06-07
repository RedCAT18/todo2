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
                    <th>Delete</th>
                </thead>
                <tbody>
                    <app-todo-list-table  v-for="data in todoList" :key="data" :tableList="data"></app-todo-list-table>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import TodoListTable from './TodoListTable.vue';
    import { eventBus } from '../../main';

    var tempTodo = [
        {id:1, title: '테스트일정1', date: '2017-05-01', type: 'inbox'},
        {id:2, title: '테스트일정2', date: '2017-05-01', type: 'inbox'},
        {id:3, title: '테스트일정3', date: '2017-05-01', type: 'inbox'},
        {id:4, title: '테스트일정4', date: '2017-05-01', type: 'inbox'}
    ];

    export default {
        data: function(){
            return {
                todo: [
                    {
                        id: '',
                        title: '',
                        date: '',
                        type: ''
                    }
                ],
                todoList:[]
            }
        },
        components: {
            appTodoListTable : TodoListTable
        },
        watch: {
           todoList: function(){
               //todoList가 변경되었을 시 새로운 데이터를 갱신?

           }
        },
        methods: {
            //create
            addTodo(){
                if(!this.todo.id) {
                    this.todo.id = this.todoList.length + 1;
                    this.todoList.push(this.todo);
                }
            },
            //입력창 리셋
            resetValue(){
                this.todo = {};
            }
        },
        created(){
            this.todoList = tempTodo;
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
                var len = this.todoList.length;
                for (var i = 0; i < len; i++){
                    if(this.todoList[i].id == deleteData) {
    //                    console.log(i);
                        if(confirm("정말로 삭제하시겠습니까?")) {
                            this.todoList.splice(i,1);
                            break;
                        }
                    }
                }
            });
        },
    //    updated(){
    //        console.log(this.todoList);
    //    }
            //새로 생성한 항목을 수정하면, 값은 수정되는데 뷰에서는 바뀌지 않는다 why?
            //수정된 값이 TodoListTable.vue로 넘어가지 않기 때문???
            //가상돔 문제.
    }
</script>

<style scoped>
    thead th {
        padding: 10px;
    }
</style>
