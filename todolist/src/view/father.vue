<template>
	<div>
    <span>this is a father vue</span>
    <button @click="telChild" >{{msg}}</button>
    <span>childWord:{{childWord}}</span>

    <child-a v-bind:fromFatherdata="fatherdata" v-on:childTelFather="getChildMsg"></child-a>
    <child-b></child-b>
	</div>
</template>

<script>
  import ChildA from './../components/childA.vue';
  import ChildB from './../components/childB.vue';

  export default {
    data(){
      return {
        msg:'father call child',
        fatherdata:'',
        childWord:''
      }
    },
    components:{
      ChildA:ChildA,
      ChildB
    },
    methods:{
      telChild(){
        this.fatherdata='call child'
      },
      getChildMsg(msg){
        //msg是子组件传递过来的数据
        console.log(msg)
        this.childWord='child tell father msg：'+msg
      }
    }
  }
</script>

<style>

</style>
