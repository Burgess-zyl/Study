import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Table from './views/table'
import TableRender from './views/table/table-render.vue'
import TableSlot from './views/table/table-slot.vue'
import Tree from './views/tree.vue'
import User from './views/User.vue'
import Error from './views/404.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      // 动态路径参数
      path: '/user/:id',
      name: 'User',
      component: User
    },
    {
      path: '/table',
      component: Table,
      children: [
        {
          path: 'render',
          component: TableRender 
        },
        {
          path: 'slot',
          component: TableSlot
        }
      ]
    },
    {
      path: '*',
      component: Error
    },
  ]
})
