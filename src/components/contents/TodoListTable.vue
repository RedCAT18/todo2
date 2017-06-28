<template>
    <tr @click="updateTodo(tableList.id)">
        <td><input type="checkbox" class="input-sm" :id="'tableList'+ tableList.id"></td>
        <td>{{tableList.title}}</td>
        <td>{{tableList.date}}</td>
        <td>{{tableList.type}}</td>
        <td>{{tableList.status}}</td>
        <td @click.stop="deleteTodo(tableList.id)">
            <span class="glyphicon glyphicon-remove" aria-hidden="true" ></span>
        </td>
    </tr>
</template>

<script>
    import api from '../../api';
    import { mapActions } from 'vuex';

    export default {
        props: ['tableList'],
        data(){
          return {  }
        },
        methods: {
            ...mapActions([
                'updateTodo',
                'deleteTodo'
            ])
//
//            updateTodo(id){
//                this.$store.dispatch('updateTodo', id);
//            },
//            deleteTodo(id){
////                console.log(id);
//                this.$store.dispatch('deleteTodo', id);
//            }
        }
    }

</script>

<style scoped>
    div tr td {
        cursor: pointer;
    }
</style>