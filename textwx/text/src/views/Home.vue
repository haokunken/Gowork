<template>
  <div class="home">
    <div id="header" class="header">
        <div class="fix-head">
          <div class="page-head home">
            <div class="page-logo">这里是logo</div>
            <ul class="nav-list">
              <li>
                <p  class="head-nav showcooperation"></p>
              </li>
              <li>
                <p class="head-nav corp">企业用户</p>
              </li>
              <li>
                <p class="head-nav activity">最新活动</p>
              </li>
              <li>
                <p class="head-nav aboutus">关于我们</p>
              </li>
              <li>
                <p class="head-nav homepage active">首页</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script scoped>
/* eslint-disable */
import HelloWorld from '@/components/HelloWorld.vue'
import leftList from '@/components/leftList.vue'
import leftright from '@/components/leftright.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    leftList,
    leftright
  },
  data () {
        return {
            curCatId:0
        }
   },
  methods:{

  }
  
}
</script>
<style>
  #header {
    height:60px
  }
  #header .fix-head {
    position:fixed;
    height:60px;
    width:100%;
    background:#fff;
    -webkit-box-shadow:0 2px 8px rgba(0,0,0,.4);
    box-shadow:0 2px 8px rgba(0,0,0,.4);
    z-index:9999
  }
  #header .fix-head .page-head {
    max-width:1040px;
    height:60px;
    margin:0 auto;
    overflow:hidden;
    position:relative
  }
  #header .fix-head .page-head .page-logo {
    width:160px;
    height:47px;
    margin-top:6px;
    /* background-image:url(../images/logo.png); */
    background-size:160px;
    background-repeat:no-repeat
  }
  #header .fix-head .page-head .nav-list {
    position:absolute;
    right:0;
    top:15px;
    width:50%;
    min-width:230px;
    z-index:999;
    background:#fff
  }
  #header .fix-head .page-head .nav-list .head-nav {
    float:right;
    height:30px;
    line-height:30px;
    font-size:13px;
    border-bottom:2px solid #fff;
    margin-left:32px;
    cursor:pointer;
  }
  #header .fix-head .page-head .nav-list .head-nav.active,#header .fix-head .page-head .nav-list .head-nav:hover {
    font-weight:600;
    color:#172991;
    border-bottom-color:#172991
  }
  #footer,#footer a {
    color:rgba(102,102,102,.6)
  }
  #header .fix-head .page-head .nav-list .showcooperation {
    width:30px;
    height:30px;
    display:block;
    /* background:url(../images/common/tel.gif) no-repeat */
  }
  #header .fix-head .page-head .nav-list .showcooperation.active,#header .fix-head .page-head .nav-list .showcooperation:hover {
    border:none
  }
</style>
