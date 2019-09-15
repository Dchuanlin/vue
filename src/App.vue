<template>
  <div id="app">
    <foo-ters></foo-ters>
    <router-view/>
  </div>
</template>

<script>
	import fooTers from "@/components/foot/footer"
export default {
  name: 'App',
  components:{
  	fooTers
  },
  mounted:function(){		//只要刷新页面，就显示首页
  	this.$router.push("/home")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
	padding: 0px;
	margin: 0px;
}
</style>
