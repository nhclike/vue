<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p><span>child:{{num}}</span></p>
  </div>
</template>
<style>

</style>
<script>
  export default{
    props:['num'],//父组件向子组件传参
    data(){
      return {
        msg:'hello 子组件Counter',
        num:0
      }
    },
    methods:{
      increment(){
        this.num++;
        this.$emit('incre');
       },
      decrement(){
        this.num--;
        this.$emit('decre');
       },

    }
  }
</script>
                                
