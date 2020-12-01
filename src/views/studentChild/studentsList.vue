<template>
  <div class="studentsList">
     <a href="#" class="btn btn-success" @click.prevent="handlePath">添加学生</a>
          <input type="text" class="form-control search" placeholder="Search..." style="width:60%;margin:0 auto" v-model="searchVal">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>爱好</th>
                <th>Optinon</th>
              </tr>
            </thead>
            <tbody>
             <tr v-for="(item,index) in listsFilter" :key="index">
               <td>{{index + 1}}</td>
               <td>{{item.name}}</td>
               <td>{{item.gender | formatGender}}</td>
               <td>{{item.age}}</td>
               <td>{{item.hobbies}}</td>
              <td>
                <a href="#" class="btn btn-default" @click.prevent="handleEdit(index)">修改</a>
                <a href="#" class="btn btn-danger" @click.prevent="handleDel(index)">删除</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
import {getStudents} from '../../network/students';
export default {
  name:'stuList',
  data() {
    return {
      lists:[],
      searchVal:null
    }
  },
  computed:{
    listsFilter() {
      if(this.searchVal) {
          let result = this.lists.filter((item,index) => {
          return item.name.indexOf(this.searchVal) != -1
        })
        return result;
      }else {
        return this.lists;
      }
    }
  },
  mounted() {
    this.getStudents()
  },
  methods:{
    //获取所有学生数据
    getStudents() {
      getStudents().then(data => {
        this.lists = data
      })
    },
    handlePath() {
      this.$router.push('/home/stunew')
    },
    handleDel(index) {
      let data = {
        index
      }
      this.axios.post(this.baseUrl+'/delete',this.qs.stringify(data)).then(data => {
        if(data.data == 1) {
          this.getStudents()
        }
      })
    },
    handleEdit(index) {
      this.$router.push({
        path:'/home/edit',
        query:{
          index
        }
      })
    }
  },
  filters:{
    formatGender(val) {
      if(val == 0) {
        return '男'
      }else if(val == 1) {
        return '女'
      }
    }
  }
}
</script>

<style scoped>
</style>