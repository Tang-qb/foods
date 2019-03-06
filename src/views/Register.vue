<template>
  <div class="register">
    <div class="register_group">
      <div class="register_box">
        <h1>注册</h1>
        <div class="input_group" :class="{'is-invalid': errors.email}">
          <input type="text" placeholder="请输入邮箱" v-model="email" @blur="getEmail()">
          <i class="user"></i>
          <p class="error" v-if="errors.email">{{errors.email}}</p>
        </div>

        <div class="input_group" :class="{'is-invalid': errors.password}">
          <input type="password" placeholder="请输入密码" v-model="password">
          <i class="password"></i>
        </div>
        <div class="input_group" :class="{'is-invalid': errors.refPassword}">
          <input type="password" placeholder="确认密码" v-model="refPassword">
          <i class="password"></i>
        </div>
        <p class="go">已有账号?<router-link to="/login">去登录</router-link></p>
        <button :disabled="isClick" @click="register">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      refPassword: "",
      errors: {
        email: "",
        password: "",
        refPassword: ""
      }
    };
  },
  computed: {
    isClick(){
      if (!this.email || !this.password || !this.refPassword) return true
      else return false
    }
  },
  methods: {
    register(){
      if (this.password !== this.refPassword) {
        this.$message.error('两次密码不一致,请重新输入密码')
      }
    },
    getEmail(){
      if (this.email == ''){
        this.errors.email = '邮箱不能为空'
      }else if (!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(this.email)){
        this.errors.email = '格式错误，请重新输入'
      }else{
        this.errors.email = ''
      }
    }
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 100%;
  background: url("../assets/logo.jpg") 0 / cover fixed;
}
.register_group {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 600px;
  height: 400px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.register_box{
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
h1 {
  font-size: 24px;
  text-align: center;
  padding: 0 0 20px 0;
}
.input_group {
  position: relative;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto 20px;
}
.input_group i {
  position: absolute;
  left: 10px;
}
.input_group input {
  height: 100%;
  width: 60%;
  border: none;
  outline: none;
  margin-left: 20px;
}
.input_group p {
  position: absolute;
  top: 40px;
}
.user,
.password {
  width: 16px;
  height: 16px;
  background-image: url(../assets/user.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.password {
  background-image: url(../assets/Password.png);
}
.is-invalid {
  border: 1px solid red;
}
.error {
  color: red;
  font-size: 12px;
}
button {
  display: block;
  width: 63%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  letter-spacing: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 auto;
}
button[disabled] {
  background-color: #8bda81;
}
.go{
  font-size: 14px;
  text-align: right;
  margin-right: 110px;
  padding-bottom: 20px;
}
.go a{
  color: #48ca38;
}
</style>
