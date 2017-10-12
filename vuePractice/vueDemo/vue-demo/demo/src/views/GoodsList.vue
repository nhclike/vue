<template>
  <div>
    <div v-html="rawHtml"></div>
    <h1>{{msg}}</h1>
    <button v-bind:disabled="someDynamicCondition">Button属性绑定语法</button>
    <!--<span>动态拿到路由传的参数：{{$route.params.goodsId}}</span>
    <span>动态拿到路由传的参数：{{$route.params.uname}}</span>-->
    <Counter :num="parentMsg" v-on:incre="increment" v-on:decre="decrement"> </Counter>
    <!--二级路由to后面写绝对地址-->
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/image">显示商品图片</router-link>
    <!--<router-link to="/cart">跳转购物车页面</router-link>-->
    <!--<button @click="jump">跳转到购物车页面</button>-->
    <router-link v-bind:to="{name:'cart',params:{cartId:123}}">跳转到购物车页面</router-link>
    <div>
      <router-view></router-view>
    </div>

    <div>
      <p>
        <span>parentMsg:{{parentMsg}}</span>
      </p>
      <!--<h1>parentMsg</h1>
      <input type="text" v-model="parentMsg">-->
    </div>
  </div>
</template>
<style>

</style>
<script>
  import Counter from '@/components/Counter'
  export default{
    data(){
      return {
        msg:'这是双括号渲染',
        rawHtml:'<h1>这是v-html渲染</h1>',
        someDynamicCondition:true,
        parentMsg:100
      }
    },
    components:{
      Counter
    },
    methods:{
      increment(){
        this.parentMsg++;
      },
      decrement(){
        this.parentMsg--;
      },
      jump(){
        this.$router.push({path:'/cart?id=2'});
        /*this.$router.go(-2);*/
      }
    }
  }
</script>
