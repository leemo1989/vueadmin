<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'app',
}
</script>

<style>
ul,li{padding:0;margin:0;list-style: none;}
a{text-decoration: none}
html,body{
  margin:0;
  padding:0;
  font-size:12px;
  line-height: 1.5;
  color:#515a6e;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  height: 100%;
}
#app{
  height: 100%;
}
</style>
