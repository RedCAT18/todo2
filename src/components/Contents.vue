<template>
    <div class="contents col-sm-9 col-md-8 col-lg-8">
        <router-view></router-view>
    </div>
</template>

<script>
	import Inbox from './contents/Inbox.vue';
	import { eventBus } from '../main';

    export default {
        components : {
            appInbox : Inbox
        },
    }
</script>

<style>

</style>
