<template>
	<div class="fenlei">
		<div class="fenlei1" v-for="itemn in msgt" :key="itemn.lo">
			<img :src="'../../../static/'+itemn[1]"/>
			<br/>
			<span>{{itemn[2]}}</span>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name:"fenlei",
		data:function(){
			return {
				msgt:[]
			}
		},
		mounted:function(){
			var that=this
			axios.post("/gethots/doubanapp/fenlei.php")
			    .then(function(rel){
			    	that.msgt=rel.data
			    	console.log(rel.data)
			    })
			    .catch(function(err){
			    	console.log(err)
			    })
		}
	}
</script>

<style scoped>
	.fenlei{
		width: 100%;
		height: 300px;
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 22%;
		margin-top: 0.8rem;
		background-color: white;
		padding-top: 1rem;
	}
	.fenlei1{
		width:25%;
		height: 65px;
	}
	.fenlei1 img{
		width: 60%;
	}
</style>