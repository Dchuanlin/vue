<template>
	<div class="details">
		<detailss v-for="item in datase" :key="item.ha" :obj="item"></detailss>
	</div>
</template>

<script>
	import detailss from "./detail"
	import axios from "axios"
	export default {
		name:"details",
		components:{
			detailss
		},
		data:function(){
			return {
				datase:[]
			}
		},
		mounted:function(){//挂载成功之后
			var that=this
			axios.post("/gethots/doubanapp/douban.php")
				.then(function(rel){
//				console.log(rel.data)
					that.datase=rel.data
				})
				.catch(function(err){
					console.log(err)
				})
		}
	}
</script>

<style scoped>
	.details{
		margin-bottom: 27%;
	}
</style>