<template>
  <div>
    <!-- <a-input v-model="inputValue"/> -->
    <a-input :value="inputValue" @input="handleInout"/>
    <p>{{inputValue}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue' //引用组件
export default {
  name: 'store',
  data () {
    return{
      inputValue : ''
    }
  },
  components : { //注册组件
    AInput
  }
}
</script>