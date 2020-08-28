import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/index',
      component:()=>import('../components/index'),
      children:[
        {
          path:'/home',
          component:()=>import('../components/home')
        },
        {
          path:'/cartr',
          component:()=>import('../components/cartr')
        },
        {
          path:'/mecon',
          component:()=>import('../components/mecon')
        },{
          path:'',
          redirect:"/home"
        }
      ]
    },
    {
      path:'/shoplist',
      component:()=>import('../components/shoplist')
    },
    {
      path:'/details',
      component:()=>import('../components/details')
    },
    {
      path:'/product',
      component:()=>import('../components/product')
    },
    {
      path:'/shopdetail',
      component:()=>import('../components/shopdetail')
    },
    {
      path:'/login',
      component:()=>import('../components/login')
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
