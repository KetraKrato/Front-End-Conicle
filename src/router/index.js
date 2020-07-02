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
    path: '/main',
    name: 'Main',
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
    path:'/course',
    name:'course',
    component : Course
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
    path:'/people',
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
