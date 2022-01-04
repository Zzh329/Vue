<template>
  <div>
    {{ name }} 
  </div>
</template>

<script>
export default {
  props : {
    name: {
      type: String,  //传入的类型
      default : 'lison'  //默认值
    }
  },
  beforeRouteUpdate(to,from,next) { //路由发生变化 组件被调用的时候调用
  //  console.log(to.name,from.name)

  },
}
</script>
