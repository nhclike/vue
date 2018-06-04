<template>
	<div>
    <span>组件select-remote</span>
    <select-remote v-bind:states="states"></select-remote>
	</div>
</template>

<script>
  import SelectRemote from './../components/SelectRemote.vue'
  export default {
    data(){
      return{
        states: ["111","2222","112"]
      }
    },
    methods: {

    },
    components:{
      SelectRemote
    }
  }
</script>

<style>

</style>
