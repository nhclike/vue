<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

     <p>parent:{{num}}</p>

    <Counter v-bind:num="num"></Counter>
  </div>
</template>

<script>
import Counter from './Counter'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello 父组件 hello World',
      num:10
    }
  },
  components:{
    Counter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
