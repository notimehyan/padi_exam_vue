<template>
  <div>
    用户名<input type="text" v-model="userName" /> 
    密码<input type="password" v-model="userPassword"/>
    <button @click="login">登录</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userPassword: "",
    };
  },
  methods: {
    login() {
      console.log(this.userName, this.userPassword);
    },
    reset() {},
  },
};
</script>

<style>
</style>F