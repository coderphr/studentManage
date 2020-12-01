<template>
  <div class="course">
    <div class="courses" @click="handlePath">
      <div class="course-item">
        <img src="../../public/images/php.jpg" data-course="php" alt="" title="详情"/>
        <ul>
          <li v-for="(item,index) in this.$store.state.php.user" :key="index">
            <img src="../../public/images/user.png" alt="" :title=item>
          </li>
        </ul>
      </div>
      <div class="course-item">
        <img src="../../public/images/react.jpg" data-course="react" alt="" title="详情"/>
        <ul>
          <li v-for="(item,index) in this.$store.state.react.user" :key="index">
            <img src="../../public/images/user.png" alt="" :title=item>
          </li>
        </ul>
      </div>
      <div class="course-item">
        <img src="../../public/images/vue.jpg" data-course="vue" alt="" title="详情"/>
        <ul>
          <li v-for="(item,index) in this.$store.state.vue.user" :key="index">
            <img src="../../public/images/user.png" alt="" :title=item>
          </li>
        </ul>
      </div>
      <div class="course-item">
        <img src="../../public/images/js.jpg" data-course="js" alt="" title="详情"/>
        <ul>
          <li v-for="(item,index) in this.$store.state.js.user" :key="index">
            <img src="../../public/images/user.png" alt="" :title=item>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getCourse} from '../network/course';
export default {
  name: "course",
  data() {
    return {
    }
  },
  mounted() {
    this.getCourse();
  },
  methods:{
    getCourse() {
      getCourse().then(data => {
        this.$store.state.js = data.js;
        this.$store.state.php = data.php;
        this.$store.state.vue = data.vue;
        this.$store.state.react = data.react;
      })
    },
    handlePath(e) {
      switch(e.target.dataset.course) {
        case 'php' : {
          this.$router.push({
            path:'/home/php',
            query:{
              name:e.target.dataset.course
            }
          })
          break;
        }
        case 'vue': {
          this.$router.push({
            path:'/home/vue',
            query:{
              name:e.target.dataset.course
            }
          })
          break;
        }
        case 'js': {
          this.$router.push({
            path:'/home/js',
            query:{
              name:e.target.dataset.course
            }
          })
          break;
        }
        case 'react': {
          this.$router.push({
            path:'/home/react',
            query:{
              name:e.target.dataset.course
            }
          })
          break;
        }
      }
    }
  }
};
</script>
<style scoped>
.courses {
  display:flex;
  justify-content: space-around;
  align-items:flex-start; 
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
}
.courses .course-item {
  width: 40%;
  height:280px;
}
.courses .course-item img {
  width: 100%;
  height: 80%;
  border-radius: 5px;
}
.courses .course-item li {
  
  width: 35px;
  height: 40px;
  float: left;
}
</style>