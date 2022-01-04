<template>
  <input @input="handleInput" :value="value"/>
</template>
<script>
export default {
  name: 'AInput',
  props: {
    value: {  //属性 
      type:[String,Number], //属性类型
      default: ''    //默认值
    }
  },
  methods:{
  handleInput (event) {
    const value = event.target.value  //获取input的值
    this.$emit('input',value)   //通过emit 调出去
  }
  }
}
</script>