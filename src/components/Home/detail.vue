<template>
	<div class="detailss">
		<div class="left">
			<h4>{{obj[1]}}</h4>
			<p style="color: lightgray;">影评：{{obj[3]}}</p>
			<p style="color: darkslategray;">作者：{{obj[4]}}</p>
		</div>
		<div class="right">
			<img :src="'../../../static/'+obj[2]"/>
		</div>
	</div>
</template>

<script>

	export default {
		name:"detailss",
		props:["obj"]
	}
</script>

<style scoped>
	.detailss{
		width: 100%;
		display: flex;
	}
	.detailss .left{
		width: 70%;
		padding:2% 0px 0px 2%;
		text-align: left;
	}
	.detailss .right{
		width: 30%;
		padding: 2%;
		text-align: left;
	}
	img{
		width: 100%;
	}
</style>