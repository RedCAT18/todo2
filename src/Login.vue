<template>
    <div class="col-md-4 col-md-offset-4 login-posit">
        <div class="login-title"><h3>Login</h3></div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" v-model="email" placeholder="Input your email">
            <p class="login-warning" v-if="!email"> Please input your email. </p>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Input your assword">
            <p class="login-warning" v-if="!password">Please input your password. </p>
        </div>
        <div class="checkbox">
            <label>
                <input type="checkbox"> Remember me?
            </label>
        </div>
        <div class="btn-area">
            <button class="btn btn-custom btn-color" @click="doLogin">Login</button>
            <router-link to="/register" tag="button" class="btn btn-custom pull-right">Register</router-link>
            <p>If you are not a member, please sign up first.  </p>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {
                email: '',
                password: '',
                login_fail: false
            }
        },
        methods : {
            doLogin(){
                let param= {
                    email: this.email,
                    password: this.password
                };
                this.$http.post('http://localhost:8000/api/login', param)
                    .then(response => {
//                                console.log(response.body);
                        this.$auth.setToken(response.body.token);
                        this.$router.push('/inbox');
                    });
            }
        }
    }
</script>

<style>
    .btn-area { margin: 20px 0; }
    .btn-area p { margin: 20px 0; text-align: center; color: #a9a9a9; }
    .login-posit { margin-top: 200px; }
    .login-title { background-color: #e3e3e3;
        background: -webkit-linear-gradient(left, #e3e3e3, #fff); /* For Safari 5.1 to 6.0 */
        background: -o-linear-gradient(right, #e3e3e3, #fff); /* For Opera 11.1 to 12.0 */
        background: -moz-linear-gradient(right, #e3e3e3, #fff); /* For Firefox 3.6 to 15 */
        background: linear-gradient(to right, #e3e3e3, #fff); /* Standard syntax */
        margin: 10px 0; padding: 10px 20px; }
    h3 { margin: 0; padding: 0; }
    .btn-color{ background-color: #2ea5b7; color: #fff; }
    .btn-custom{ padding: 8px 15px; font-size: 11pt; }
    .login-warning { color: #dc143c; font-size: 9pt;  padding-left: 5px; padding-top: 3px; }
</style>