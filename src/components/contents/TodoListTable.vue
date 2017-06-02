<template>

        <tr @click="editTodo(tableList.id)">
            <td><input type="checkbox" class="input-sm" :id="'tableList'+ tableList.id"></td>
            <td>{{tableList.title}}</td>
            <td>{{tableList.date}}</td>
            <td>{{tableList.type}}</td>
            <td>
                <span class="glyphicon glyphicon-remove" aria-hidden="true" @click.stop="deleteTodo(tableList.id)"></span>
            </td>
        </tr>

</template>

<script>
    import { eventBus } from '../../main';

    export default {
        props: ['tableList'],

        data: function () {
            return {
                //model...
            }
        },
        methods: {
            editTodo(id){
                eventBus.$emit('sendEditId', id-1);
            },
            deleteTodo(id){
//                console.log(id);
                eventBus.$emit('sendDeleteId', id-1);
            }
        }
    }

</script>

<style scoped>
    div tr td {
        cursor: pointer;
    }
</style>