<template>
  <div class="stuEdit">
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <input type="hidden" name="id" :value=($route.query.index)>
          <div class="form-group">
            <label for="">姓名：</label>
            <input type="text" class="form-control" name="name" v-model="name" id="exampleInputEmail1" placeholder="name" style="width: 60%">
          </div>
          <div class="form-group">
            <label for="">age：</label>
            <input type="number" class="form-control" name="age" v-model="age" id="" placeholder="age" style="width: 60%">
          </div>
          <div class="form-group">
            <label for="">gender：</label>
            <div>
              <label class="radio-inline">
                <input type="radio" name="gender" id="inlineRadio1" value="0" v-model="gender" style="width: 60%"> 男
              </label>
              <label class="radio-inline">
                <input type="radio" name="gender" id="inlineRadio2" value="1" v-model="gender" style="width: 60%"> 女
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="">爱好：</label>
            <input class="form-control" type="text" v-model="hobbies" name="hobbies" style="width: 60%">
          </div>
          <button  class="btn btn-default" @click="handlePost">Submit</button>
      </div>
  </div>
</template>

<script>
import {getStudent} from '../../network/students';
export default {
  name:'stuEdit',
  data() {
    return {
      name:null,
      age:null,
      gender:null,
      hobbies:null,
    }
  },
  mounted() {
    this.getStudent(this.$route.query.index);
  },
  methods:{
    getStudent(index) {
      getStudent(index).then(data => {
        this.name = data.name;
        this.age = data.age;
        this.gender = data.gender;
        this.hobbies = data.hobbies;
      })
    },
    handlePost() {
      let data = {
        index:this.$route.query.index,
        name:this.name,
        age:this.age,
        gender:this.gender,
        hobbies:this.hobbies
      }
      this.axios.post(this.baseUrl + '/edit',this.qs.stringify(data)).then(data => {
        if(data.data == 1) {
          this.$router.push('/home')
        }
      }).catch(err => {
        throw(err)
      })
    }
  }
}
</script>

<style scoped>
</style>