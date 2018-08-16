<template>
  <div class="hello">
   <p @click="btn" class="tankuang">点我啊</p>
   <p>dffdsf</p>
   <p @click="demo" class="tankuang">试试看</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
   <p>dffdsf</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    btn () {
      this.$edit.open('index', 'zaia', {}, {show: true, width: '40%'})
    },
    demo () {
      var obj = {
        name: 'zhangsan',
        age: 18
      }
      this.$edit.open('demo', '贼搞笑', {obj}, {show: true, width: '40%'})
    }
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
.hello{
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tankuang{
  cursor: pointer;
}
</style>
