<template>
	<div>
		<gb>
			<h4 slot="ha">广播</h4>
			<span slot="ba" class="cv"></span>
		</gb>
		<gba></gba>
		<pl></pl>
	</div>
</template>

<script>
	import gb from "@/components/common/headers"
	import gba from "@/components/guangbo/guangbos"
	import pl from "@/components/guangbo/pinglun"
	export default {
		name:"guangbo",
		components:{
			gb,
			gba,
			pl
		}
	}
</script>

<style scoped>
	.cv{
		display: inline-block;
		width: 2rem;
		height:2rem;
		background-image:url(../assets/ic_status_search_user.png);
		background-size: cover;
		position: absolute;
		top:19%;
		right:25%;
	}
</style>