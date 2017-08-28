<template id="head">
  <div class="header">
    <div class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand" href="#">
            <img src="../assets/icon/logo.png" alt="">
            <h3>人民检察院审讯指挥系统</h3>
          </div>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav_logo">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <!--小屏幕下拉显示-->
        <div class="collapse navbar-collapse navbar-right" id="nav_logo">
          <div class="navbar-left">
            <span>上午好</span>,
            <span>developer</span>
            <img src="../assets/icon/developer.png" alt="">
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span class="glyphicon glyphicon-question-sign"></span>
                帮助
              </a>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
                <span class="glyphicon glyphicon-cog"></span>
                系统
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="">用户</a></li>
                <li><a href="">角色</a></li>
                <li><a href="">菜单</a></li>
                <li><a href="">部门</a></li>
                <li><a href="">设备</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
                <span class="glyphicon glyphicon-user"></span>
                用户信息
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="">退出登录</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less">
  .header{
  @bg_color:#337AB7;
  @logo_color:#fff;
  @logo_font_size:30px;
  @text_color:#fff;
  @text_font_size:20px;
  @header_height:90px;
  @menu_width:160px;
  @li_active_bg_color:#e4393c;
  @li_active_text_color:#000;
  @a_color:#fff;

  a{
    color: @a_color;
    background-color:@bg_color;
  }

  .navbar{
    background: @bg_color;
    color:@a_color!important;
    margin: 0;
  .container-fluid{
    height:@header_height;
  .navbar-header{
    height: 100%;
  .navbar-brand{
    padding: 0;
    height: 100%;
    clear: both;
    vertical-align: middle;
  img{
    height: @header_height;
    float: left;
    padding:15px;
  }
  h3{
    color:@logo_color;
    float: left;
    font-size:@logo_font_size ;
    line-height:@header_height;
    margin: 0;
  }
  }
  }
  //小屏幕下拉显示内容
    .navbar-collapse{
      height: 100%;
  div{
    height: @header_height;
    line-height: @header_height;
  span{
    font-size: @text_font_size;
  }
  }
  /*小屏幕下拉显示内容*/
  ul{
    height:@header_height;
  //toplist
    li{
      width: @menu_width;
      height: 100%;
      text-align: center;
  a{
    display: block;
    height: 100%;
    color:@a_color;
    line-height: @header_height;
    padding: 0!important;
    font-size: @text_font_size;
  &:focus{
     color:@li_active_text_color;
     background: @li_active_bg_color;
   }
  }
  //dropdownlist
    ul.dropdown-menu{
      width: @menu_width;
      padding:0 !important;
      border:none !important;
  //dropdown item
    li{
      height: 100%;
  a{
    display: block;
    height: 100%;
    color:@a_color;
    line-height: @header_height;
    padding: 0;
    font-size: @text_font_size;
  &:focus{
     color:@li_active_text_color;
     background: @li_active_bg_color;
   }
  &:hover{
     color:@li_active_text_color;
     background: @li_active_bg_color;
   }
  }
  }
  }
  }
  }
  }
  }
  }
  }

</style>
