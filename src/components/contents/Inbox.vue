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

//    var tempTodo = [
//        {id:1, title: '테스트일정1', date: '2017-05-01', type: 'inbox'},
//        {id:2, title: '테스트일정2', date: '2017-05-01', type: 'inbox'},
//        {id:3, title: '테스트일정3', date: '2017-05-01', type: 'inbox'},
//        {id:4, title: '테스트일정4', date: '2017-05-01', type: 'inbox'}
//    ];

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
           todoList: function(newData) {
//               console.log(newData);
               //todoList가 변경되었을 시 새로운 데이터를 갱신?
               this.todoList = newData;
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
        beforeCreate(){
            let headers = { Authorization: 'Bearer' + this.$auth.getToken()};
             this.$http.post('http://localhost:8000/api/user', 'test', {headers: headers})
                .then(response => {
//                    console.log(response.data.todo);
                    this.todoList = response.data.todo;
                }, response => {
                    this.$router.push('/redirect');
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
    }
</script>

<style scoped>
    thead th {
        padding: 10px;
    }
</style>
