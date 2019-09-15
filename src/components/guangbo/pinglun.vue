<template>
	<div class="pl">
		<pls v-for="items in msg3" :key="items.gr" :tk="items"></pls>
	</div>
</template>

<script>
	import pls from "./pls"
	import axios from "axios"
	export default {
		name:"pl",
		components:{pls},
		data:function(){
			return {
				msg3:[]
			}
		},
		mounted:function(){
			var that=this
			axios.post("/gethots/doubanapp/pinglun.php")
				.then(function(rel){
//					console.log(rel.data)
					that.msg3=rel.data
				})
				.catch(function(err){
					console.log(err)
				})
		}
	}
</script>

<style scoped>
	.pl{
		width: 100%;
		height: 1220px;
		background-color: rgb(246,246,246);
		overflow: hidden;
	}
</style>