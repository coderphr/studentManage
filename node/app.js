const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();


app.use(bodyParser.urlencoded({extended:false}))

//设置跨域请求
app.all("*",function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

//管理员数据
let adminUrl = './admin.json';
//学生数据
let studentsUrl = './students.json'
//课程数据
let courseUrl = './course.json'

//登录
app.post('/login',(req,res) => {
  fs.readFile(adminUrl,'utf8',(err,data) => {
    if(err) {
      return new Error('There is no such file in current directory')
    }else {
      let newData = req.body;
      let dataObj = JSON.parse(data);
      let result = dataObj.find(item => {
        return item.name == newData.uname
      });
      if(!result) {
        res.send('0') //用户不存在
      }else {
        if(result.password == newData.password) {
          
          res.send('2') //用户存在 并且登录成功
        }else {
          res.send('1') //用户存在 但是密码错误
        }
      }
    }
  })
})
//注册
app.post('/register',((req,res) => {
  fs.readFile(adminUrl,'utf8',(err,data) => {
    if(err) {
      return new Error('There is no such file in current directory')
    }else {
      let newData = req.body
      let dataObj = JSON.parse(data);
      let result = dataObj.find(item => {
        return item.name == newData.name
      })
      if(!result) {
        dataObj.push(newData);
        fs.writeFileSync(adminUrl,JSON.stringify(dataObj));
        res.send('0') //不存在可以创建
      }else {
        res.send('1') //存在不可以创建
      }
    }
  })
}))



//获取学生数据
app.get('/student',(req,res) => {
  fs.readFile(studentsUrl,(err,data) => {
    if(err) {
      return new Error('There is no such file in current directory')
    }else {
      let dataObj = JSON.parse(data);
      res.send(dataObj)
    }
  })
})

//添加学生数据
app.post('/student',(req,res) => {
  let newData = req.body;
  fs.readFile(studentsUrl,'utf8',(err,data) =>{
    if(err) {
      return new Error('There is no such file in current directory')
    }else {
      let originData = JSON.parse(data);
      originData.push(newData);
      fs.writeFileSync(studentsUrl,JSON.stringify(originData));
      res.send('1') //添加成功
    }
  })
})

//删除学生数据
app.post('/delete',(req,res) => {
  console.log()
  let newData = req.body.index
  fs.readFile(studentsUrl,'utf8',(err,data) => {
    if(err) {
      return new Error('There is no such file in current directory')
    }else {
      let originData = JSON.parse(data);
      originData.splice(newData,1)
      fs.writeFileSync(studentsUrl,JSON.stringify(originData));
      res.send('1') //添加成功
    }
  })
})


//获取要修改学生数据
app.get('/edit',(req,res) => {
  let index = req.query.index;
  let data = JSON.parse(fs.readFileSync(studentsUrl,'utf8'));
  res.send(data[index])
})

//提交修改的数据
app.post('/edit',(req,res) => {
  let newData = req.body;
  let index = newData.index;
  delete newData.index;
  fs.readFile(studentsUrl,'utf8',(err,data) => {
    if(err) {
      return new Error('There is no such file in current directory')
    }else {
      let originData = JSON.parse(data);
      originData[index] = newData;
      console.log(originData);
      fs.writeFileSync(studentsUrl,JSON.stringify(originData));
      res.send('1') //修改成功
    }
  })
})

//获取课程学生数据
app.get('/course',(req,res) => {
  fs.readFile(courseUrl,'utf8',(err,data) => {
    if(err) {
      return new Error('There is no such file in current directory')
    }else {
      res.send(JSON.parse(data))
    }
  })
})

app.listen('3000',() => {
  console.log('Serve is running at 3000 port')
})