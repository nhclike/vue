<template>
  <div>
    <h1>{{msg}}</h1>
    <span>页面切换通过？拼接传参：{{$route.query.id}}</span>
  </div>
</template>
<style>

</style>
<script>
  export default{
    data(){
      return {
        msg:'this is a Cart Component',
      }
    }
  }
</script>

