import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Class from "../views/Each_Class.vue";
import Step from "../views/Step.vue";
import Loginform from "../views/Loginform.vue";
import Text from "../views/Text.vue"
import Nofile from "../views/Nofile.vue"
import CreateStep from "../views/CreateStep.vue"
import CreatePost from "../views/CreatePost.vue"
import Createcourse from '../views/CreateCourse.vue'
import Course from "../views/Course.vue"
import Post from "../views/Post.vue"
import GroupManage from "../views/GroupManage.vue"
import StepProgress from "../components/StepProgress.vue"
import CreateGroup from "../views/CreateGroup.vue"
import Addmember from "../views/AddMembers.vue"
import Test from "../views/test.vue"
import AddCourse from "../views/AddCourse.vue"
import CourseManage from "../views/CourseManage.vue"
import CreateSession from "../views/CreateSession.vue"
import Assignmanage from "../views/AssignManage.vue"
import CreateAssign from "../views/CreateAssignment.vue"
import EditCourse from "../views/EditCourse.vue"
import EditGroup from "../views/EditGroup.vue"


import HomeMember from '../views/HomeMember.vue'
import Learning from '../views/Learning.vue'
import Main from '../views/Main.vue'
import CourseMember from '../views/CouresMember.vue'
import Part from '../views/Part.vue'
//import Welcome from '../views/Welcome.vue'
import People from '../views/People.vue'
import Subcourse from '../views/Subcourse.vue'
import Session from '../views/Session.vue'
import Attachment from '../views/Attachment.vue'
import Assignment from '../views/Assignment.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Loginform",
    component: Loginform,
  },
  {
    path: "/class",
    name: "Class",
    component: Class,
  },
  {
    path: "/step",
    name: "step",
    component: Step,
 
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/createstep",
    name: "Createstep",
    component: CreateStep,
  },
  {
    path: "/createpost",
    name: "Createpost",
    component: CreatePost,
  },
  {
    path: "/createcourse/",
    name: "Createcourse",
    component: Createcourse,
  },
  {
    path: "/creategroup",
    name: "Creategroup",
    component: CreateGroup,
  },
  {
    path: "/text",
    name: "Text",
    component: Text,
  },
  {
    path: "/nofile",
    name: "Nofile",
    component: Nofile,
  },
  {
    path: "/course",
    name: "Course",
    component: Course,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  {
    path: "/groupmanage",
    name: "Groupmanage",
    component: GroupManage,
    params:true
  },
  {
    path: "/stepprogress",
    name: "StepProgress",
    component: StepProgress,
  },
  {
    path: "/addmember",
    name: "Addmember",
    component: Addmember,

  },
  {
    path: "/test",
    name: "test",
    component: Test,
    
  },
  {
    path: "/addcourse",
    name: "Addcourse",
    component: AddCourse,
  },
  {
    path: "/coursemanage",
    name: "Coursemanage",
    component: CourseManage,
    params: true,
  },
  {
    path: "/createsession",
    name: "Creatession",
    component: CreateSession,
  },
  {
    path: "/assignmanage",
    name: "Assignmanage",
    component: Assignmanage,
    params: true
  },
  {
    path: "/createassign",
    name: "Createassign",
    component: CreateAssign,
  },
  {
    path: "/editcourse",
    name: "Editcourse",
    component: EditCourse,  
  },
  {
    path: "/editgroup",
    name: "Editgroup",
    component: EditGroup,
  },
  {
    path: '/:NameGroup/main',
    name: 'main',
    component: Main
  },
  {
    path:'/learning/:NameCourse/:NameSession/:NameStep',
    name:'learning',
    component : Learning
  },
  {
    path:'/:NameGroup/course',
    name:'course',
    component : CourseMember,
  },
  {
    path:'/subcourse/:NameCourse',
    name:'subcourse',
    component : Subcourse
  },
  {
    path:'/session/:NameCourse/:NameSession',
    name:'session',
    component : Session,
    props: true
  },
  {
    path:'/part',
    name:'part',
    component : Part
  },
  /*{
    path:'/welcome',
    name:'welcome',
    component : Welcome
  },*/
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
  {
    path: '/homemember',
    name: 'HomeMember',
    component: HomeMember,

  },
 



];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const isAuthenticated = firebase.auth().currentUser;
//   console.log("isauthenticated", isAuthenticated);
//   if (requiresAuth && !isAuthenticated) {
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
