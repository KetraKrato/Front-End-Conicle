import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CreateGroup from '../views/CreateGroup.vue'
//import JoinGroup from '../views/JoinGroup.vue'
import Learning from '../views/Learning.vue'
import Main from '../views/Main.vue'
import Course from '../views/Coures.vue'
import Part from '../views/Part.vue'
import Welcome from '../views/Welcome.vue'
import People from '../views/People.vue'
import Subcourse from '../views/Subcourse.vue'
import Session from '../views/Session.vue'
import Attachment from '../views/Attachment.vue'
import Assignment from '../views/Assignment.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,

  },
  {
    path: '/:NameGroup/main',
    name: 'main',
    component: Main
  },
 /* {
    path:'/joingroup',
    name:'Join',
    component : JoinGroup
  },*/
  {
    path:'/creategroup',
    name:'Create',
    component : CreateGroup
  },
  {
    path:'/learning',
    name:'Learning',
    component : Learning
  },
  {
    path:'/:NameGroup/course',
    name:'course',
    component : Course,
    /*children:[
      {
        path:'subcourse',
        component: Subcourse
      },
    ]*/
  },
  {
    path:'/subcourse/:NameCourse',
    name:'subcourse',
    component : Subcourse
  },
  {
    path:'/session/:IdCourse/:IdSession',
    name:'session',
    component : Session,
    props: true
  },
  {
    path:'/part',
    name:'part',
    component : Part
  },
  {
    path:'/welcome',
    name:'welcome',
    component : Welcome
  },
  {
    path:'/:NameGroup/attachment',
    name:'attachment',
    component : Attachment
  },
  {
    path:'/:NameGroup/assignment',
    name:'assignment',
    component : Assignment
  },
  {
    path:'/:NameGroup/people',
    name:'people',
    component : People
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
