/**
 * Created by RedCAT on 2017-06-11.
 */


export default function(Vue){
    //global
    Vue.auth = {
        getToken(){
            //자바스크립트 기본제공함수
            return localStorage.getItem('token');
        },
        setToken(token){
            localStorage.setItem('token', token);
        },
        destroyToken(){
            localStorage.removeItem('token');
        },
        isAuthenticated(){
            if (this.getToken()){
                return true;
            } else {
                return false;
            }
        }
    };

    //globally call
    Object.defineProperties(Vue.prototype, {
       $auth: {
           get: () => {
               return Vue.auth;
           }
           // set: () => {
           //
           // }
       }
    });
}