<template>
	<div class="header">
		<div class="header-left">
			<span class="header-left1"></span>
			<input type="text" placeholder="影视、图书、唱片、小组等"/>
			<span class="header-left2"></span>
		</div>
		<div class="header-right"><span class="header-right1"></span></div>
	</div>
</template>

<script>
	export default {
		name:"header"
	}
</script>

<style scoped>
	.header{
		width: 100%;
		height: 50px;
		background-color: rgb(66,192,85);
		display: flex;
	}
	.header-left{
		width: 80%;
		position: relative;
		padding-left:4%;
	}
	.header-right{
		width:20%;
		position: relative;
	}
	input{
		width: 100%;
		height: 30px;
		margin-top: 4%;
		padding-left:3%;
		text-indent: 13%;
		border-radius: 8px;
		outline: none;
		border: none;
	}
	.header-left1{
		display: inline-block;
		width: 1.5rem;
		height:1.5rem;
		background-image: url(../../assets/ic_search_gray.png);
		background-size: cover;
		position: absolute;
		top:25%;
		left:8%;
	}
	.header-left2{
		display: inline-block;
		width: 1.5rem;
		height:1.5rem;
		background-image:url(../../assets/ic_scan_gray.png);
		background-size: cover;
		position: absolute;
		top:25%;
		right:1%;
	}
	.header-right1{
		display: inline-block;
		width: 2rem;
		height:2rem;
		background-image:url(../../assets/ic_chat_white.png);
		background-size: cover;
		position: absolute;
		top:18%;
		right:20%;
	}
</style>