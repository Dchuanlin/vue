<template>
	<div class="gb1">
		<div class="gb2">
			<img src="../../assets/ic_status_anonymous_header.png"/>
		</div>
		<div class="gb3">
			<h3>发现有趣的人</h3>
			<p>关注他们，发现更大的世界</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"top"
	}
</script>

<style scoped>
	.gb1{
		width: 100%;
		height: 120px;
		display: flex;
		background-color: rgb(246,246,246);
	}
	.gb2{
		width: 45%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.gb2 img{
		width: 70%;
	}
	.gb3{
		width: 55%;
		text-align: left;
		padding-top: 8%;
		padding-right: 2%;
	}
	h3{
		margin-bottom: 4%;
	}
</style>