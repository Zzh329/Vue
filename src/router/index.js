import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import {setTitle} from '@/lib/util'


Vue.use(VueRouter)
const router = new VueRouter({
  //  mode : 'history', //history模式 浏览器地址将不会有#号 无刷新页面的一些跳转
  routes
})
//定义一个登录状态 是否为登录
const  HAS_LOGINED = true
//全局首守卫 
  //1.全局前置守卫
router.beforeEach((to,from,next)=>{ //to：跳转到哪里 from:当前位置 next：函数 确定跳转将用到
  //  if(to.meta.title)
    to.meta && setTitle(to.meta.title) //路由源的使用
    if(to.name !== 'login'){ //即将访问的页面不是登录页面
      //判断是否登录 
      if(HAS_LOGINED) next()  //已经登录 不做处理
      else next({ name : 'login'})   // 没有登录 直接跳转到登录页面
    }else {  //进入login 登录页 
      if(HAS_LOGINED)next({ name : 'home'}) //判断用户已经登，跳转到主页
      else next() //没有登录，直接进入登录页
    }
})
 //2.全局守卫 
  //导航被确认之前 在所有组件和异步路由组件被解析之后被调用
  //导航确认之前：所有导航钩子结束
    // router.beforeRsolve((to, from, next) => {
    //   // to and from are both route objects. must call `next`.
    // })
 //3.后置钩子  不能对页面进行操作 只能够处理一些简单逻辑
  router.afterEach((to,from) =>{
    // logining = false 取消等待加载效果
  })

export default router

//---------------完整的导航解析流程：
//1.导航被触发  
//2.在失活的组件里（即将离开的组件）调用离开守卫 beforeRouteLeave
//3.调用全局的前置守卫： beforeEach
//4.在重用的组件里调用 beforeRouteUpdate  
//5.调用路由独享守卫 beforeEnter
//6.解析异步路由组件
//7.在被激活的组件里 （即将进入的页面) 里调用 beforeRouteEnter
//8.全局的解析守卫 beforeResolve(导航确认之前,异步路由组件解析之后被调用的)
//9.导航被确认
//10.调用全局的后置守卫 afterEach
//11.触发Dom更新
//12.用创建好的实例调用beforeRouteEnter守卫传输next回调函数
   
