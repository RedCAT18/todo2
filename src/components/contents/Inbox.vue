<template>
    <div class="inbox">
    	<div class="sub-title">Today Todo List</div>
        <hr>
        <div id="inbox-form">
            <div class="form-group col-sm-3 col-md-3 col-lg-3">
                <input type="text" class="form-control input-sm" placeholder="일정입력" @blur="resetValue()" v-model="todo.title">
            </div>

            <div class="form-group col-sm-3 col-md-3 col-lg-3">
                <input type="date" class="form-control input-sm" v-model="todo.date">
            </div>

            <div class="form-group col-sm-3 col-md-3 col-lg-3">
                <input type="text" class="form-control input-sm" placeholder="타입" v-model="todo.type">
            </div>

            <div class="col-sm-3 col-md-3 col-lg-3">
                <button class="btn btn-info btn-sm" @click="addTodo()">일정추가</button>
            </div>
        </div>

        <div id="inbox-table">
            <table class="table table-striped">
                <caption>일정</caption>
                <tbody>
                    <app-todo-list-table  v-for="data in todoList" :tableList="data"></app-todo-list-table>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import TodoListTable from './TodoListTable.vue';
    import { eventBus } from '../../main';

    var tempTodo = [
        {id:1, title: '테스트일정1', date: '2017.05.01', type: 'inbox'},
        {id:2, title: '테스트일정2', date: '2017.05.01', type: 'inbox'},
        {id:3, title: '테스트일정3', date: '2017.05.01', type: 'inbox'},
        {id:4, title: '테스트일정4', date: '2017.05.01', type: 'inbox'}
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
    methods: {
        //create
        addTodo(){
            if(!this.todo.id) {
                this.todo.id = this.todoList.length + 1;
                this.todoList.push(this.todo);
            }
        },
        //입력창에서 포커스가 빠져나갔을 때, 바인딩 된 값을 초기화
        resetValue(){
            this.todo = {};
        }
    },
    created(){
        this.todoList = tempTodo;
    },
    mounted(){
        eventBus.$on('sendEditId', (editData) => {
//            console.log(data);
            this.todo = this.todoList[editData];
        });
        eventBus.$on('sendDeleteId', (deleteData) => {
//            console.log(data);
            this.todoList.splice(deleteData,1);
        });
    },
//    beforeUpdate() {
//
//    }
}
</script>

<style>

</style>
