//es6
import Vue from 'vue'
import App from './App.vue'

//es5 : require(path)

export const eventBus = new Vue(); // 상수 

new Vue({
  el: '#app',
  render: h => h(App)
})
