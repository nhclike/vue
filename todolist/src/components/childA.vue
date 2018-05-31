<template>
	<div class="childA">
    <span>this is childA</span>
    <button @click="getMsg">接收father消息</button>
    <span>{{aGetFatherData}}</span>
    <button @click="telFather">触发父组件的事件</button>
	</div>
</template>

<script>
  export default {
    data(){
      return {
        aGetFatherData:'',
        msg:'this is child a'
      }
    },
    props:['fromFatherdata'],

    methods:{
      getMsg(){
        this.aGetFatherData=this.fromFatherdata;
        console.log(this.fromFatherdata)
      },
      telFather(){
        this.$emit('childTelFather',this.msg)
      }
    }
  }
</script>

<style>
.childA{
  background-color: red;
  height: 100px;
}
</style>
