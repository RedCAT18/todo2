<template>
    <div class="menu col-sm-3 col-md-4 col-lg-4">
    	<div class="top-menu">
    		<ul class="list-group">
			   <app-menu-item 
			   		v-for="menu in menus" 
			   		:item="menu">
			   	</app-menu-item>
			</ul>
    	</div>
    	<div class="tap-menu">
            <app-menu-tab></app-menu-tab>	
    	</div>
    </div>
</template>

<script>
	import MenuItem from './menu/MenuItem.vue';
	import MenuTab from './menu/MenuTab.vue';

    var dataMenu = [
    	{id: 1, title: "Inbox"},
    	{id: 2, title: "Today"},
    	{id: 3, title: "Next Week"}
    ];

    export default {
	    data: function(){
		    return {
		        menus : [],
		    }
	    },
	    components : {
	    	appMenuItem: MenuItem,
	    	appMenuTab: MenuTab	 
	    },
		methods: {

		},
	    created() {
	   		this.menus = dataMenu;
	    }
	}
</script>

<style>

</style>
