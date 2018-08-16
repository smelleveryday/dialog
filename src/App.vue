<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.dialogbg{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0,0,0,.3);
}
.dialog{
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 15vh;
  min-height: 300px;
}
.dialog-title{
  font-size: 20px;
  padding: 15px 15px 0;
}
.dialog-fork{
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
}
.dialog-close{
  display: inline-block;
  width: 20px;
  height:2px;
  background: #999;
  line-height: 0;
  font-size:0;
  vertical-align: middle;
  transform: rotate(45deg);
}
.dialog-close:after{
  content:'/';
  display:block;
  width: 20px;
  height:2px;
  background: #999;
  transform: rotate(-90deg);
}
</style>
