<template>
	<div class="ht">
		<div class="ht1">
			<div class="ht11">
				<img src="../../../static/ic_award_tag.png" />
			</div>
		</div>
		<div class="ht2">
			<div class="ht21">
				<div class="ht211">
					<span class="ht2111">畅斯基</span>
					<span></span>
					<span>ID:566525652</span>
				</div>
				<div class="ht212">
					<span>个人主页 </span> <span class="ht213"></span>
				</div>
			</div>
			<div class="ht22">
				<span>关注  1</span>&emsp;<span>被关注  0</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"ht"
	}
</script>

<style scoped>
	.ht{
		width: 100%;
		height: 130px;
		background-color: rgb(247,158,74);
		display: flex;
		overflow: hidden;
		color: white;
	}
	.ht1{
		width: 34%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.ht1 .ht11{
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.ht11 img{
		width: 70%;
	}
	.ht2{
		width: 66%;
	}
	
	.ht2 .ht21{
		width: 100%;
		height: 55%;
		display: flex;
		align-items: flex-end;
	}
	.ht211{
		width: 40%;
		text-align: left;
	}
	.ht2111{
		font-size: 1.5rem;
		display: inline-block;
		padding-bottom: 0.2rem;
	}
	.ht212{
		width: 60%;
		font-size: 1.1rem;
		padding-right: 7%;
		position: relative;
	}
	.ht213{
		display: inline-block;
		width: 1.4rem;
		height: 1.4rem;
		background-image: url(../../../static/ic_group_topic_right_arrow.png);
		background-size: cover;
		position: absolute;
		top: 10%;
		right:10%;
		
	}
	.ht2 .ht22{
		width: 100%;
		height: 45%;
		text-align: left;
		display: flex;
		align-items: center;
	}
</style>