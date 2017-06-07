<template>
	<li class="list-group-item" @click="getMenu(item.id)">
		{{item.title}}
		<span class="badge">1</span>
	</li>
</template>

<script>

	import Inbox from '../contents/Inbox.vue';
	import Today from '../contents/Today.vue';
	import NextWeek from '../contents/NextWeek.vue';

	import { eventBus } from '../../main';

	var srcInbox = Inbox;
	var srcNextWeek = NextWeek;
	var srcToday = Today;

    export default {
    	props: ['item'],

    	data: function(){
	    	return {
	   		   	//data model
	 	   }
    	},
		methods: {
            getMenu(id){
//    	        var screen = null;
    	        switch(id){
					case 1:
                        this.$router.push('/inbox');
					    break;
					case 2:
                        this.$router.push('/today');
						break;
					case 3:
                        this.$router.push('/nextweek');
					    break;
				}
				eventBus.$emit('setScreen', screen);
			}
		}
	}
</script>

<style>
	.list-group-item:hover {
		cursor: pointer;
		background-color: #008cd5;
	}
</style>
