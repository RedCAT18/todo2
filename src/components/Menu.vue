<template>
    <div class="menu col-sm-3 col-md-4 col-lg-4">
    	<div class="top-menu">
    		<ul class="list-group">
				<app-menu-item
			   		v-for="menu in menus"
			   		:item="menu" :key="menu">
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

    export default {
	    components : {
	    	appMenuItem: MenuItem,
	    	appMenuTab: MenuTab	 
	    },
		computed: {
	      menus(){
              return this.$store.state.menus;
		  }
		},
	}
</script>

<style>

</style>
