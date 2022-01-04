<template>
  <div class="home">
    <button @click="handelClick('back')">返回上一页</button>
    <button @click="handelClick('push')">跳转到parent</button>
    <button @click="handelClick('replace')">替换到replace</button>
    <b>{{food}}</b>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props : {
    food: {
      type: String,
      default : 'apple'
    }
  },
  //组件守卫   渲染组件 该路由在确认前被调用
beforeRouteEnter (to, from, next) { //to：当前路由对象 from :上一个路由对象
  //  console.log('to:'+to.name)
  //  console.log('from:'+from.name)
  //在当前无法获取this实例 如果想要获取 在next里 vm
   next(vm =>{
     console.log(vm)
   })
},
//钩子   即将离开页面调用的方法  如：用户编辑 离开前提 编辑内容没有保存是否要离开
// beforeRouteLeave (to, from, next) { //
//   const leave = confirm('您确定要离开吗？') //confirm 带有 确定和否定的选的框
//   if (leave) next()
//   else next(false)
// },
  //编程时导航用过js控制返回
  methods: {
    handelClick(type) {
     if(type === 'back')  this.$router.back();//go(-1)
     else if(type ==='push') {
      //  const name = "lison"
      //  this.$router.push({
      //  path : `/argu/${name}`
   
       this.$router.push({
         name: 'argu',
         params: {
           name :'lison'
         }
     })
     }
     else if(type === 'replace'){ 
       this.$router.replace({
        name : 'parent'
     })
     }
    }
    

  }
}
</script>
