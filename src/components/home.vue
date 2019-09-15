<template>
	<div>
		<hea-der></hea-der>
		<lunbo></lunbo>
		<redian></redian>
		<detailed></detailed>
	</div>
</template>

<script>
	import heaDer from "@/components/Home/header"
	import lunbo from "@/components/Home/lunbo"
	import redian from "@/components/Home/redian"
	import detailed from "@/components/Home/details"
	export default {
		name:"home",
		components:{
			heaDer,
			lunbo,
			redian,
			detailed
		}
	}
</script>

<style scoped>
	
</style>