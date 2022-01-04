<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name : 'home'  }">Home</router-link> |
      <router-link :to="{ name : 'about' }">About</router-link>
    </div>
    <!-- 组件过渡 -->
    <!-- <transition-group name='router'> -->
    <transition-group :name="routerTransition">
    <router-view key="default"/>
    <!-- 命名视图 -->
    <router-view  key="email" name="email"/>
    <router-view  key="tel" name="tel"  />
    </transition-group>
  </div>
</template>


<script>
// 可以为某个指定页面制作动态效果
export default {
  data () {
   return {
     routerTransition: ''
   }
   },
  watch : { //监听路由对象的变化
    '$route'(to){ //to : 当前路由对象
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>

<style lang="less">
//进入页面的动画
.router-enter{ 
  opacity: 0; //透明度
}
.router-enter-active{ //从没有到有的过程
  transition: opacity 3s ease ;
}
.router-enter-to{
  opacity: 1;
}
//离开页面的动画
.router-leave{
   opacity: 1;
  }
.router-leave-active{
  transition: opactiy 3s ease;
  }
.router-leave-to{
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
