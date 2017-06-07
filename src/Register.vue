<template>
    <div class="col-md-4 col-md-offset-4 login-posit">
        <div class="login-title"><h3>Sign up</h3></div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="type" class="form-control" id="name" v-model="name" placeholder="Input your name">
            <p class="login-warning" v-if="!name"> 이름을 입력해 주십시오. </p>
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" v-model="email" id="email" placeholder="Input your email">
            <p class="login-warning" v-if="!email"> 이메일을 입력해 주십시오. </p>
            <p class="login-warning" v-if="submit_email_fail">중복된 이메일입니다.</p>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Input your assword">
            <p class="login-warning" v-if="!password"> 비밀번호를 입력해 주십시오. </p>
            <p class="login-warning" v-if="submit_pw_fail">비밀번호는 최소 6자리 이상이어야 됩니다.</p>

        </div>
        <div class="btn-area">
            <button class="btn btn-custom btn-color" @click="submit_reg">Sign Up</button>
            <button class="btn btn-custom pull-right" @click="goBack">Go back to Index</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name: '',
                email: '',
                password: '',
                submit_email_fail: false,
                submit_pw_fail: false
            }
        },
        methods: {
            //나중에 서버에서 처리할 부분 테스트
            //모의 validation
            submit_reg() {
                let login_data = this.$data;
                //이메일이 중복시 메세지 띄움.
                if(login_data.email === 'test@email.com') {
                    this.submit_email_fail = true;
                } else {
                    if (login_data.password.length < 6) {
                        this.submit_pw_fail = true;
                    } else {
                        alert ('가입이 완료되었습니다. 로그인 해 주세요.');
                        this.$router.push('/');

                    }
                }
            },
            goBack(){
                this.$router.push('/');
            }
        }
    }
</script>
<style>
    .login-posit { margin-top: 200px; }
</style>