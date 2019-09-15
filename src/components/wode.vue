<template>
	<div class="wode">
		<wode>
			<h4 slot="ha">我的</h4>
			<span slot="ba"></span>
			<span slot="ta" class="ya"></span>
		</wode>
		<ht></ht>
		<gx></gx>
		<fenlei></fenlei>
	</div>
</template>

<script>
	import wode from "@/components/common/headers"
	import ht from "@/components/wode/tuxiang"
	import gx from "@/components/wode/gengxin"
	import fenlei from "@/components/wode/fenlei"
	export default {
		name:"my",
		components:{
			wode,
			ht,
			gx,
			fenlei
		}
	}
</script>

<style scoped>
	.wode{
		background-color: rgb(246,246,246);
	}
	.ya{
		display: inline-block;
		width: 2rem;
		height:2rem;
		background-image:url(../assets/ic_settings.png);
		background-size: cover;
		position: absolute;
		top:20%;
		right:4%;
	}
</style>