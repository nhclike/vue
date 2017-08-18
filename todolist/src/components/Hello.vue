<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--v-text和v-html的区别-->
    <h2 v-text="title"></h2>
    <h2 v-html="title"></h2>
    <!--v-model数据绑定-->
    <input type="text" v-model="newItem" v-on:keyup.enter="addNew">
    <!--列表项-->
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        title:'<span>this is a todolist</span>',
        newItem:'',//初始化对绑定数据的变量进行定义
        items:[
          {
              label:'coding',
            isFinished:false
          },
          {
              label:'walking',
            isFinished:true
          }
        ]
      }
    },
    methods:{
        addNew:function () {
          //使用this.拿到数据
          console.log(this.newItem);
          this.items.push({
            label:this.newItem,
            isFinished:false
          });
          console.log(this.items);
          this.newItem='';
        },
      toggleFinish:function (item) {
        console.log(item);
        item.isFinished=!item.isFinished;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .finished{
    text-decoration: underline;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    cursor: pointer;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
