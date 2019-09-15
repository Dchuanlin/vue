<template>
	<div>
		<headers></headers>
		<films></films>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import headers from "@/components/common/headers"
	import films from "@/components/film/films"
	export default {
		name:"film",
		components:{
			headers,
			films
		},
		mounted:function(){
			this.$router.push("/film/dianying")
		}
	}
</script>

<style scoped>

</style>