<template>
    <div>
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active" @click="clickedTab('project')"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Project</a></li>
            <li role="presentation" @click="clickedTab('list')"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Last Plan</a></li>
        </ul>

         <!-- Tab panes -->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">
                <app-menu-tab-panel v-for="item in lists" :key="item" :panel="item"></app-menu-tab-panel>
            </div>
            <div role="tabpanel" class="tab-pane" id="profile">
                <app-menu-tab-panel v-for="item in lastPlan" :key="item2" :panel="item"></app-menu-tab-panel>
            </div>
        </div>
    </div>
</template>

<script>
    import MenuTabPanel from './MenuTabPanel.vue';

    var tabList = [
        {id: 1, title: "Project1"},
        {id: 2, title: "Project2"},
        {id: 3, title: "Project3"}
    ];

    var tabData = [
        {id: 1, title: "Last Plan1"},
        {id: 2, title: "Last Plan2"},
        {id: 3, title: "Past Plan3"}
    ];

    export default {
     	data: function(){
    	    	return {
    	            lists : [],
                    lastPlan : []
                }  	
    	    },
            methods: {
                clickedTab(title){
                    title == "project" ?
                        this.list = tabList : this.lastPlan = tabData;
                }
            },
            components : {
                appMenuTabPanel: MenuTabPanel
            },

            created() {
                this.lists = tabList
            }
        }
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 10px;
    }
    .tab-pane div{
        padding: 5px 10px;
    }
</style>
