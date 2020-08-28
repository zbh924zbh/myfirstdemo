import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//获取存储中的登陆信息
var userInfo = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : ''

function hasUrl(url) {
  return userInfo.menus_url.some(item => item == url)
}



const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => import('@/pages/login')
    },
    {
      path: '/index',
      component: () => import('@/pages/index'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/home')
        },
        {
          path: '/menu',
          component: () => import('@/views/menu/index.vue'),
          meta: {
            name: '菜单列表'
          },
          beforeEnter(to, from, next) {
            hasUrl('/menu') ? next() : next('/home')
          }
        },
        {
          path: '/role',
          component: () => import('@/views/role/index.vue'),
          meta: {
            name: '角色列表'
          },
          beforeEnter(to, from, next) {
            hasUrl('/role') ? next() : next('/home')
          }
        },
        {
          path: '/user',
          component: () => import('@/views/user/index.vue'),
          meta: {
            name: '管理员列表'
          },
          beforeEnter(to, from, next) {
            hasUrl('/user') ? next() : next('/home')
          }
        },
        {
          path: '/sort',
          component: () => import('@/views/sort/index.vue'),
          meta: {
            name: '商品分类列表'
          },
          beforeEnter(to, from, next) {
            hasUrl('/sort') ? next() : next('/home')
          }
        },
        {
          path: '/specs',
          component: () => import('@/views/specs/index.vue'),
          meta: {
            name: '商品规格列表'
          },
          beforeEnter(to, from, next) {
            hasUrl('/specs') ? next() : next('/home')
          }
        },
        {
          path: '/goods',
          component: () => import('@/views/goods/index.vue'),
          meta: {
            name: '商品管理'
          },
          beforeEnter(to, from, next) {
            hasUrl('/goods') ? next() : next('/home')
          }
        },
        {
          path: '/member',
          component: () => import('@/views/member/index.vue'),
          meta: {
            name: '会员管理'
          },
          beforeEnter(to, from, next) {
            hasUrl('/member') ? next() : next('/home')
          }
        },
        {
          path: '/banner',
          component: () => import('@/views/banner/index.vue'),
          meta: {
            name: '轮播图管理'
          },
          beforeEnter(to, from, next) {
            hasUrl('/banner') ? next() : next('/home')
          }
        },
        {
          path: '/seck',
          component: () => import('@/views/seck/index.vue'),
          meta: {
            name: '限时秒杀'
          },
          beforeEnter(to, from, next) {
            hasUrl('/seck') ? next() : next('/home')
          }
        },
        {
          path: '',
          redirect: '/home'
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})

//全局前置导航钩子函数
route.beforeEach((to, from, next) => {
  //你跳转的页面是不是登录 是就 next
  if (to.path == '/login') {
    next()
    return
  }
  //去的不是登录 ，就看是否登录，如果登录就next
  if (userInfo) {
    next()
    return
  }
  //以上都没有就跳转登录
  next('/login')
})

export default route