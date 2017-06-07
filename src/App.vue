<template>
    <div class="container">
    	<!--<app-header></app-header>-->
    	<!--<app-menu></app-menu>-->
    	<!--<app-contents></app-contents>-->
		<router-view></router-view>
    </div>
</template>

<script>
//	import Register from './Register.vue'
//	import Login from './Login.vue';

	export default {
	   data: function(){
		    return {
		      //data model
		    }
	    },

//		components : {
//	        appRegister: Register,
//	        appLogin: Login,
//	    }
	}
</script>

<style>
	* { font-family: 'Raleway', sans-serif; }
</style>
