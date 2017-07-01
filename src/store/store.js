/**
 * Created by RedCAT on 2017-06-25.
 */

import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        menus: [
            {id: 1, title: "Inbox"},
            {id: 2, title: "Today"},
            {id: 3, title: "Next Week"}
            ],
        selectedComponent: "appInbox",
        lists: [],
        lastPlan: [],
        todo: {
            id: '',
            title: '',
            date: '',
            type: ''
        },
        todoList: [],
    },
    getters: {
        getTitle: state => { return state.menus.title; },
        getLists: state => { return state.lists; },
        getPlan: state => { return state.lastPlan; },
        getTodo: state => { return state.todo; },
        getTodolist: state => { return state.todoList; },
    },
    mutations: {
        setLists(state, value) { state.lists = value; },
        setPlan(state, value) { state.lastPlan = value; },
        setTodolist(state, value) { state.todoList = value; },
        setTodoTitle(state, value){ state.todo.title = value; },
        setTodoDate(state, value){ state.todo.date = value; },
        setTodoType(state, value){ state.todo.type = value; },

        addTodo(state, value) {
            api.addTodo(state.todo).then(response => {
                let editId = state.todo.id;
                if(response.body.todo) { //원래는 리스폰스가 success로 돌아온다면 등으로 쓰여야 함 <<
                    if(response.body.todo.id !== editId) {
                        state.todoList.push(state.todo);
                        state.todo = [];
                    }
                }
            });
        },
        updateTodo(state, id) {
            let editTodo = state.todoList.find(x => x.id === id);
            state.todo = editTodo;
        },
        deleteTodo(state, id){
            api.deleteTodo({id:id}).then(response => {
                if(response.success = 1){
                    let delTodo = state.todoList.findIndex(x => x.id === id);
                    // console.log(delTodo);
                    state.todoList.splice(delTodo, 1);
                    // let len = state.todoList.length;
                    // for (var i = 0; i < len; i++){
                    //     if(state.todoList[i].id == id) {
                    //         state.todoList.splice(i,1);
                    //         break;
                    //     }
                    // }
                }
            });
        },
        resetValue (state) {
            state.todo = [];
        }
    },
    actions: {
        setLists({commit}, value) { commit('setLists', value); },
        setPlan({commit}, value){ commit('setPlan', value); },
        setTodolist({commit}, value){ commit('setTodolist', value) },
        setTodoTitle({commit}, value){ commit('setTodoTitle', value) },
        setTodoDate({commit}, value){ commit('setTodoDate', value) },
        setTodoType({commit}, value){ commit('setTodoType', value) },

        addTodo({commit}, value) {
            commit('addTodo', value);
        },
        updateTodo({commit}, id) {
            commit('updateTodo', id);
        },
        deleteTodo({commit}, id) {
            commit('deleteTodo', id)
        },
        resetValue : ({commit}) => { commit('resetValue')},
    }
});