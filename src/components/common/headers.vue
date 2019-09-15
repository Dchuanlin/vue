<template>
	<div class="headers">
		<slot name="ha"><h4>书影音</h4></slot>
		<slot name="ba"><span class="search1"></span></slot>
		<slot name="ta"><span class="search2"></span></slot>
	</div>
</template>

<script>
	export default {
		name:"headers"
	}
</script>

<style scoped>
	.headers{
		width: 100%;
		height: 50px;
		background-color:rgb(247,247,247);
		border-bottom: solid 1px lightcoral;
		position: relative;
	}
	h4{
		padding-top: 4%;
	}
	.search1{
		display: inline-block;
		width: 1.6rem;
		height:1.6rem;
		background-image: url(../../assets/ic_search_gray.png);
		background-size: cover;
		position: absolute;
		top:25%;
		right:24%;
	}
	.search2{
		display: inline-block;
		width: 2rem;
		height:2rem;
		background-image:url(../../assets/ic_chat_green.png);
		background-size: cover;
		position: absolute;
		top:20%;
		right:7%;
	}
</style>