<template id="home">
  <div>
    <h1>table</h1>
    <table-com></table-com>
  </div>
</template>

<script>
  import table from './table.vue'
  export default {
      name:'home',
    components:{
         tableCom:table
    }

  }
</script>
