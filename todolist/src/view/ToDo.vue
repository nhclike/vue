<template>
  <div class="todo">
    <h1 >{{msg}}</h1>
    <button v-on:click="counter+=1">点击一次加1</button>
    <p>这个按钮被点击了{{counter}}</p>
    <h1>表单输入绑定</h1>
    <input v-model="message1" placeholder="edit me">
    <p>Message is: {{ message1 }}</p>
    <br>
    <textarea v-model="message2" placeholder="add multiple lines"></textarea>
    <p style="white-space: pre-line">Multiline message is:{{ message2 }}</p>
    <h3>多选框</h3>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <h3>单选框</h3>
    <div id="example-4">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
  </div>
</template>

<script>
  export default{
      name:'todo',
      data(){
          return{
             msg:'this is a todo',
            counter:0,
            message1:'',
            message2:'',
            checkedNames:[],
            picked: ''
          }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
