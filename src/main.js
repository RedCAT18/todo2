//es6
//es5 : require(path)
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Auth from './package/auth/auth';
import App from './App.vue';

import { routes } from './routes';

// import axios from 'axios';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Auth);

//global use
// Vue.prototype.$http = axios;

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
