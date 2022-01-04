import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    alias: '/home_page', //别名
    name: 'home',
    component: Home,
    //函数模式 es6
    props : route =>({  // rout代表当前路由对象
      food : route.query.food
    }),
    beforeEnter : (to,from,next) =>{
      //如果在登录页进入主页
      // if(from.name === 'login') alert('这从登录页来的')
      // else alert('这不是从登录页过来的')
      next()
    }
  },
  {
    path: '/about',
    name : 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props : { //静态路由传参
      food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path : '/login',
    name : 'login',
    component: () => import('@/views/login.vue')
  },
  //动态路由匹配
  {
    path : '/argu/:name',
    name : 'argu',
    component: () =>import ('@/views/argu.vue') ,//懒加载 只有调用的时候才会加载
    props : true //动态路由传参
  },

  //嵌套路由
 {
   path : '/parent' ,
   name: 'parent',
   alias: '/parent_page',
   component: () =>import('@/views/parent.vue'),
   children: [
     {///
      path: 'child',
      component: () => import('@/views/child.vue')
     }
   ]
 },
 {
   path: '/named_view',
   components: {
       default: () =>import('@/views/child.vue'),
       email: () =>import('@/views/email.vue'),
       tel: () =>import('@/views/tel.vue')
     }
 },
 ////   store
 {
   path: '/store',
   component: () => import('@/views/store.vue')
 },
 //重定向路由
  {
    path : '/main',
    redirect: to => '/'
    },
    //当浏访问不存在的页面是 直接进入404页面
    {
      path : '*',
      component : () => import('@/views/error_404.vue')
    }
]

