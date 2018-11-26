import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import User from '@/components/user/user.vue'
Vue.use(Router)
// 做登陆页面
export default new Router({
  routes: [{
      name: 'login',
      path: '/login',
      component: List
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {name: 'user',
        path: '/user',
        component:User
      }
      ]
    },
  ]
})
