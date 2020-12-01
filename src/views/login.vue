<template>
  <div class="login">
    <div class="logo">
      <img src="../../public/images/logo.png" alt="">
    </div>
    <div class="desc">
      <p>Sing in to myClub</p>
    </div>
    <div class="sinIn">
      <label for="uname">Usernmae</label><br>
      <input type="text" id="uname" placeholder="username" v-model="uname">
      <label for="Password">Password</label><br>
      <input type="text" id="pwd" placeholder="password" v-model="password">
      <input type="submit" id="sub" value="Sign in" @click="handleLogin">
    </div>
    <div class="new_account">
      New to club ? <a href="#" @click.prevent="handlePath">Create an account</a>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data() {
    return {
      uname:'',
      password:''
    }
  },
  methods:{
    handleLogin() {
      let data = {
        uname:this.uname,
        password:this.password
      }
      this.axios.post(this.baseUrl+'/login',this.qs.stringify(data)).then(data => {
        switch(data.data) {
          case 0 :
            alert('用户名不存在请注册');
            break;
          
          case 1 :
            alert('密码错误');
            break;
          
          case 2 :
            alert('登录成功');
            this.$store.state.uname = this.uname
            this.$router.push('/home')
            break;
        }
      })
    },
    handlePath() {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  width: 80%;
  height: 80%;
}
.desc {
  font-size: 24px;
  font-weight: 300;
}
.sinIn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 300px;
  height: 200px;
  background-color: #f6f8fa;
  border: 1px solid #eaecef;
}
.sinIn>label {
  margin-bottom: -10px;
  font-size: 15px;
}
.sinIn>input {
  margin-bottom: 10px;
  width: 80%;
  height: 30px;
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  background-color: #faffbd;
}
#sub {
  margin-top: 10px;
  width: 80%;
  height: 32px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  background-color: #2c974b;
}
.new_account {
  margin-top: 20px;
  width: 300px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  border-radius: 5px;
  border: 1px solid #d8dee2;
}
.new_account a {
  color: #037ee2;
  text-decoration: none;
}
.new_account a:hover {
  text-decoration: underline;
}
</style>