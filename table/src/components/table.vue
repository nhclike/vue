<template>
  <div id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">用户管理</div>
      <table class="table table-bordered table-striped text-center">
        <thead>
        <tr>
          <th>序号</th>
          <th>用户名</th>
          <th>年龄</th>
          <th>毕业学校</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for ="(user,index) in users">
          <td>{{index+1}}</td>
          <td>{{user.name}}</td>
          <td>{{user.age}}</td>
          <td>{{user.school}}</td>
          <td><button v-on:click="remove(index)">remove</button></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="text"  id="name" v-model="user.name"/></td>
          <td><input type="text" id="age" v-model="user.age"/></td>
          <td><input type="text" id="school" v-model="user.school"/></td>
          <td><button @click="insert">insert</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script src="../../node_modules/axios/dist/axios.js"></script>
<script>
  export default {
    name: 'hello',
    data () {
      return {
        user: {'name': '', 'age': '', 'school': ''},
        users: []
      }
    },
    methods: {
      get:function () {
        axios.get('../data/test.json',
          {
            params:{
              userId:'999'
            },
            headers:{
              token:'jack'
            }
          }
        ).then(
          res=>{
            this.users=res.data;
          }
        ).catch(function (error) {
          //console.log('error:'+error);
        })
      },
      insert: function () {
        this.users.push(this.user)
      },
      remove: function (index) {
        this.users.splice(index, 1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
table{
  background: #fff;
  thead{
    tr{
      th{
        text-align: center;
        font-size: 22px;
      }
    }
  }
  button{
    width: 60px;
    height: 30px;
    border:1px solid #ddd;
    border-radius: 5px;
    background: #e4393c;
    color: #fff;
  }
}


</style>
