<template>
	<div class="footerItem">
		<img v-show="!obj.bol" :src="'../../../static/'+obj.img"/>
		<img v-show="obj.bol" :src="'../../../static/'+obj.img1"/>
		<br/>
		<span :class="{active:obj.bol}">{{obj.name}}</span>
	</div>
</template>

<script>
	export default {
		name:"footerItem",
		props:["obj"]
	}
</script>

<style scoped>
	.footerItem{
		width: 20%;
	}
	.footerItem img{
		width: 50%;
	}
	.active{
		color: red;
	}
</style>