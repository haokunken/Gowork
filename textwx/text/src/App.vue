<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div class="home">
      <div id="header" class="header">
        <div class="fix-head">
          <div class="page-head home">
            <div class="page-logo">这里是logo</div>
            <ul class="nav-list">
              <li>
                <p class="head-nav showcooperation"></p>
              </li>
              <li>
                <p class="head-nav corp">企业用户</p>
              </li>
              <li>
                <p class="head-nav activity">最新活动</p>
              </li>
              <li @click="about">
                <p class="head-nav aboutus" :class="activeindex == 2?'active':''">关于我们</p>
              </li>
              <li @click="index">
                <p class="head-nav homepage" :class="activeindex == 1?'active':''">首页</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curCatId: 0,
      active: "active",
      activeindex: 1
    };
  },
  methods: {
    index() {
      this.activeindex = 1;
      this.$router.push({
        name: "home"
      });
    },
    about() {
      this.activeindex = 2;
      this.$router.push({
        name: "about"
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
body,
ol,
ul,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
dl,
dd,
form,
fieldset,
legend,
input,
textarea,
select {
  margin: 0;
  padding: 0;
}
body {
  font: 12px "宋体", "Arial Narrow", HELVETICA;
  background: #fff;
  -webkit-text-size-adjust: 100%;
}
a {
  color: #2d374b;
  text-decoration: none;
}
a:hover {
  color: #cd0200;
  text-decoration: underline;
}
em {
  font-style: normal;
}
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p {
  word-wrap: break-word;
}

#header {
  height: 60px;
}
#header .fix-head {
  position: fixed;
  height: 60px;
  width: 100%;
  background: #fff;
  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
#header .fix-head .page-head {
  max-width: 1040px;
  height: 60px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
#header .fix-head .page-head .page-logo {
  width: 160px;
  height: 47px;
  margin-top: 6px;
  /* background-image:url(../images/logo.png); */
  background-size: 160px;
  background-repeat: no-repeat;
}
#header .fix-head .page-head .nav-list {
  position: absolute;
  right: 0;
  top: 15px;
  width: 50%;
  min-width: 230px;
  z-index: 999;
  background: #fff;
}
#header .fix-head .page-head .nav-list .head-nav {
  float: right;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  border-bottom: 2px solid #fff;
  margin-left: 32px;
  cursor: pointer;
}
#header .fix-head .page-head .nav-list .head-nav.active,
#header .fix-head .page-head .nav-list .head-nav:hover {
  font-weight: 600;
  color: #172991;
  border-bottom-color: #172991;
}
#footer,
#footer a {
  color: rgba(102, 102, 102, 0.6);
}
#header .fix-head .page-head .nav-list .showcooperation {
  width: 30px;
  height: 30px;
  display: block;
  /* background:url(../images/common/tel.gif) no-repeat */
}
#header .fix-head .page-head .nav-list .showcooperation.active,
#header .fix-head .page-head .nav-list .showcooperation:hover {
  border: none;
}
</style>
