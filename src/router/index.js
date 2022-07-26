import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import MyPage from '../components/mypage/MyPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/myPage',
  //   name: 'MyPage',
  //   component: MyPage
  // },
  
    // path: '/about',
    // name: 'about',

    // component: () => import('../views/AboutView.vue')
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
