//es6
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
//es5 : require(path)
import axios from 'axios';

import { routes } from './routes';
Vue.use(VueRouter);

//global use
Vue.prototype.$http = axios;

const router = new VueRouter({
    routes,
    mode:'history'
});

export const eventBus = new Vue(); // 상수

new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
