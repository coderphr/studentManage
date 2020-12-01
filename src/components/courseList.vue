<template>
  <div class="course">
    <div class="title">
      <span>简介：</span><br>
      {{desc}}
    </div>
    <div class="user">
      <span>成员：</span>
      <ul>
        <li v-for="(item,index) in user" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'courselist',
  data() {
    return {
      desc:'',
      user:null
    }
  },
  mounted() {
    let name = this.$route.query.name;
    this.desc = this.$store.state[name].desc;
    this.user = this.$store.state[name].user
  }
}
</script>

<style scoped>
.course {
  margin: 0 auto;
  width: 70%;
}
.title,.user {
  margin: 20px auto;
  width: 60%;
}
.title span,.user span  {
  font-size: 20px;
  font-weight: bold;
}
.user ul li{
  margin: 0 10px;
  float: left;
}
</style>