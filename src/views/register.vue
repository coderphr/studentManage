<template>
  <div class="register">
    <div class="title">Join Club</div>
    <div class="text">Create your account</div>
    <div class="form">
      <label for="uname">Username <span>*</span></label>
      <input type="text" id="uname" v-model="uname" required><span v-show="nameErrorShow">用户名不符合规范请使用4到16位（字母，数字，下划线，减号）</span>
      <label for="Email">Email <span>*</span></label>
      <input type="e-mail" id="Email" v-model="uemail" required><span v-show="emailErrorShow">邮箱不符合规范请输入正确的邮箱地址</span>
      <label for="pwd">Password <span>*</span></label>
      <input type="password" id="pwd" v-model="password" required>
      <input type="submit" id="btn" value="Create account" @click="handleRegister" :disabled="btnDisabled">
      <span class="span" v-show="btnDisabled">请完成必选内容!</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'register',
  data(){
    return {
      uname:'',
      uemail:'',
      password:'',
      nameErrorShow:false,
      emailErrorShow:false,
    }
  },
  computed:{
    btnDisabled() {
      return this.nameErrorShow || this.emailErrorShow || this.uname == '' || this.uemail == '' || this.password == ''
    }
  },
  methods:{
    handleRegister() {
      let userData = {
        name : this.uname,
        email : this.uemail,
        password : this.password,
      }
      this.axios.post(this.baseUrl+'/register',this.qs.stringify(userData)).then(data => {
        if(data.data == 0) {
          alert('注册成功')
          this.$router.push('/login')
        }
      })
    }
  },
  watch:{
    uname(newVal,oldVal) {
      let reg = /^[a-zA-Z0-9_-]{4,16}$/
      if(!reg.test(newVal)) {
        this.nameErrorShow = true
      }else {
        this.nameErrorShow = false
      }
      console.log()
    },
    uemail(newVal,oldVal) {
      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(!reg.test(newVal.trim())) {
        this.emailErrorShow = true
      }else {
        this.emailErrorShow = false
      }
    },
  }
}
</script>
<style scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 80px auto;
}
.title {
  margin-bottom: 20px;
  font-size: 13px;
  color: #6a73a7;
}
.text {
  font-size: 44px;
  font-weight: 500;
}
.form {
  margin-top: 40px;
  width: 50%;
  display: flex;
  flex-direction: column;
}
.form label {
  margin-top: 10px;
  margin-bottom: 10px;
}
.form label span {
  font-size: 15px;
  color: #cb2431;
}
.form input {
  height:30px;
  font-size: 20px;
  border:1px solid #e1e4e8; 
  border-radius: 5px;
}
.form span {
  margin-top: 5px;
  font-size: 10px;
  color:  #cb2431;
}
.form .span {
  font-size: 15px;
}
#btn {
  margin-top: 20px;
  height: 35px;
  color: #b2d3f8;
  background-color: #88baf3;
}
#btn:hover {
  color: #fff;
  background-color: #1a6bc7;
}
</style>