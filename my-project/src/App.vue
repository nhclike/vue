<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <head-com></head-com>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 200px">
      <div class="col-xs-2 col-xs-offset-2">
        <menu-com></menu-com>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--用于渲染匹配的组件-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import head from './components/Head.vue'
  import menu from './components/Menu.vue'
  export default {
    name: 'app',
    components:{
        headCom:head,
        menuCom:menu
    }

  }
</script>
