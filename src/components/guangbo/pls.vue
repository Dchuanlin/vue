<template>
	<div class="pls">
		<div class="tops">
			<div class="img">
				<img :src="'../../../static/'+tk[1]"/>
			</div>
			<div class="mz">
				<h4>{{tk[2]}}</h4>
				<span>{{tk[3]}}人关注</span>
			</div>
			<div class="gz"><span class="gz1">关注</span></div>
		</div>
		<div class="cont">
			{{tk[4]}}
		</div>
		<div class="likes">
			<span class="left"></span>
			<span class="left1">{{tk[5]}}</span>
			<span class="right"></span>
			<span class="right1">{{tk[6]}}</span>
		</div>
	</div>
</template>

<script>
	
	export default {
		name:"pls",
		props:["tk"]
	}
</script>

<style scoped>
	.pls{
		width: 90%;
		height: 250px;
		background-color: white;
		margin-left: 5%;
		padding-top: 6%;
		overflow: hidden;
		margin-top: 0.8rem;
	}
	.tops{
		width: 100%;
		height: 60px;
		display: flex;
	}
	.img{
		width: 30%;
	}
	.img img{
		width: 80%;
	}
	.mz{
		width: 40%;
		text-align: left;
		padding-left: 2%;
	}
	.gz{
		width: 30%;
	}
	.gz1{
		display: inline-block;
		width: 80%;
		height: 30px;
		line-height: 30px;
		border-radius: 5px;
		color: white;
		background-color: rgb(65,191,84);
	}
	.cont{
		width: 84%;
		height: 200px;
		margin-left: 10%;
		padding-top: 6%;
		overflow: hidden;
		text-align: left;
	}
	.likes{
		width: 100%;
		height: 40px;
		line-height: 40px;
		position: relative;
	}
	h4{
		font-size: 1.2rem;
		margin-bottom: 5%;
	}
	.left{
		display: inline-block;
		width: 2rem;
		height: 2rem;
		background-image:url(../../../static/ic_fill_voted_large.png);
		background-size: cover;	
		position: absolute;
		top: -5rem;
		left: 2rem;
	}
	.left1{
		text-align: left;
		position: absolute;
		top: -5rem;
		left: 4.2rem;
	}
	.right{
		display: inline-block;
		width: 2rem;
		height: 2rem;
		background-image:url(../../../static/ic_group_comment_0.png);
		background-size: cover;	
		position: absolute;
		top: -4.9rem;
		left: 7rem;
	}
	.right1{
		text-align: left;
		position: absolute;
		top: -4.9rem;
		left: 9.2rem;
	}
</style>







