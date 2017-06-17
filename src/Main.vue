<template>
    <div>
        <app-header></app-header>
        <app-menu></app-menu>
        <app-contents></app-contents>
    </div>
</template>
<script>
    import Header from './components/Header.vue';
    import Menu from './components/Menu.vue';
    import Contents from './components/Contents.vue';

    export default {
        data(){
            return { }
        },
        components: {
            appHeader: Header,
            appMenu: Menu,
            appContents: Contents
        },
    }
</script>
<style>

</style>