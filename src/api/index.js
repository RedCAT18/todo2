/**
 * Created by RedCAT on 2017-06-18.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Auth from '../package/auth/auth';

import { routes } from '../routes';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Auth);

Vue.http.interceptors.push((request, next)=>{
   request.headers = request.headers || { }

   if(Vue.auth.isAuthenticated()){
       request.headers.set('Authorization', 'Bearer ' + Vue.auth.getToken());
   }
   next ((response)=>{
        if(response.status === 401){
            Vue.auth.destroyToken();
            window.location.pathname = '/login';
        }
   });
});

export default({
    login: function(object, param){
        return Vue.http.post('login', param)
            .then(response => {
                // if(response.body.success){
                    if(response.body.token){
                    Vue.auth.setToken(response.body.token);
                    object.$router.push({name:'inbox'});
                }
            })
    },
    addTodo: function(data){
        return Vue.http.post('user', data);
    },
    getTodo: function(){
        return Vue.http.get('user');
    },
    deleteTodo: function(id){
        return Vue.http.post('user/delete', id);
    }
})