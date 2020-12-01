import Vue from 'vue';
import vueRouter from 'vue-router';
import Login from '../views/login'
import Register from '../views/register'
import Home from '../views/students'
import stuNew from '../views/studentChild/stuNew'
import stuList from '../views/studentChild/studentsList'
import stuEdit from '../views/studentChild/stuEdit'
import Course from '../views/course'
import CourseList from '../components/courseList'


Vue.use(vueRouter);

const routes = [
  {
    path:'/',
    redirect:'login',
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },{
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'',
        redirect:'stuList'
      },
      {
        path:'stunew',
        component:stuNew
      },
      {
        path:'stuList',
        name:'stuList',
        component:stuList
      },
      {
        path:'edit',
        name:'edit',
        component:stuEdit
      },
      {
        path:'course',
        name:'course',
        component:Course,
      },
      {
        path:'php',
        component:CourseList
      },
      {
        path:'vue',
        component:CourseList
      },
      {
        path:'js',
        component:CourseList
      },
      {
        path:'react',
        component:CourseList
      }
    ]
  },
]



export default  new vueRouter({
  mode:'history',
  routes
})