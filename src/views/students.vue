<template>
  <div class="students">
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Hello {{this.$store.state.uname}}</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click.prevent="handleStu">学生管理</a></li>
          <li><a href="#" @click.prevent="handleCourse">课程管理</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
//导入组件
export default {
  name:'Home',
  components:{
  },
  methods:{
    handleStu() {
      this.$router.push('/home')
    },
    handleCourse() {
      this.$router.push('/home/course')
    }
  }
}
</script>

<style>

</style>