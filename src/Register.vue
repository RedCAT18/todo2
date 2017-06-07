<template>
    <div class="col-md-4 col-md-offset-4 login-posit">
        <div class="login-title"><h3>Sign up</h3></div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="type" class="form-control" id="name" v-model="name" placeholder="Input your name">
            <p class="login-warning" v-if="!name"> Please input your name. </p>
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" v-model="email" id="email" placeholder="Input your email">
            <p class="login-warning" v-if="!email"> Please input your email. </p>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Input your assword">
            <p class="login-warning" v-if="!password"> Please input your password. </p>
        </div>
        <div class="btn-area">
            <button class="btn btn-custom btn-color">Sign Up</button>
            <button class="btn btn-custom pull-right" @click="goBack">Go back to Index</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            goBack(){
                this.$router.push('/');
            }
        }
    }
</script>
<style>

</style>