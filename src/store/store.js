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
        setScreen(state, value) {state.selectedComponent = value},
        setLists(state, value) { state.lists = value; },
        setPlan(state, value) { state.lastPlan = value; },
        setTodolist(state, value) { state.todoList = value; },
        setTodoTitle(state, value){ state.todo.title = value; },
        setTodoDate(state, value){ state.todo.date = value; },
        setTodoType(state, value){ state.todo.type = value; },

        addTodo(state, value) {
            api.addTodo(state.todo).then(response => {
                let editId = state.todo.id;
                if(response.body.todo) {
                    if(response.body.todo.id !== editId) {
                        state.todoList.push(state.todo);
                        state.todo = [];
                    }
                }
            });
        },
        updateTodo(state, id) {
            let len = state.todoList.length;
            for (var i = 0; i < len; i++){
                if(state.todoList[i].id == id) {
                    state.todo = state.todoList[i];
                }
            }
        },
        deleteTodo(state, id){
            api.deleteTodo({id:id}).then(response => {
                if(response.success = 1){
                    let len = state.todoList.length;
                    for (var i = 0; i < len; i++){
                        if(state.todoList[i].id == id) {
                            state.todoList.splice(i,1);
                            break;
                        }
                    }
                }
            });
        },
        resetValue (state) {
            state.todo = [];
        }
    },
    actions: {
        setScreen({commit}, value) {commit('setScreen', value); },
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