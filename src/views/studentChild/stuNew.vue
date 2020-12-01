<template>
  <div class="stuNew">
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <div class="form-group">
        <label for="">姓名：</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="exampleInputEmail1"
          placeholder="name"
          style="width: 60%"
          v-model="uname"
        />
      </div>
      <div class="form-group">
        <label for="">age：</label>
        <input
          type="number"
          class="form-control"
          name="age"
          id=""
          placeholder="age"
          style="width: 60%"
          v-model="uage"
        />
      </div>
      <div class="form-group">
        <label for="">gender：</label>
        <div>
          <label class="radio-inline">
            <input
              type="radio"
              name="gender"
              id="inlineRadio1"
              value="0"
              v-model="ugender"
            />
            男
          </label>
          <label class="radio-inline">
            <input
              type="radio"
              name="gender"
              id="inlineRadio2"
              value="1"
              v-model="ugender"
            />
            女
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="">爱好：</label>
        <input
          class="form-control"
          type="text"
          name="hobbies"
          style="width: 60%"
          v-model="uhobbies"
        />
      </div>
      <button class="btn btn-default" @click="handlePost">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "stuNew",
  data() {
    return {
      uname: null,
      uage: null,
      ugender: null,
      uhobbies: null,
    };
  },
  methods: {
    handlePost() {
      let data = {
        name: this.uname,
        age: this.uage,
        gender: this.ugender,
        hobbies:this.uhobbies,
      };
      this.axios.post(this.baseUrl + "/student", this.qs.stringify(data)).then(data => {
        if(data.data == 1) { //写入成功
          this.$router.push('/home')
        }
      })
    },
  },
};
</script>

<style>
</style>