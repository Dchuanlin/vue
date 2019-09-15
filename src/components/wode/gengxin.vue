<template>
	<div class="gx">
		<div class="gx1">
			<div class="gx11">
				<span class="gx111"></span>
				<span class="gx112">提醒</span>
			</div>
			<div class="gx12">
				<span class="gx121"></span>
			</div>
		</div>
		<div class="gx2">
			暂无新提醒
		</div>
	</div>
</template>

<script>
	export default {
		name:"gx"
	}
</script>

<style scoped>
	.gx{
		width: 100%;
		height: 120px;
		background-color: white;
		margin-top: 0.8rem;
	}
	.gx1{
		width: 100%;
		height: 50%;
		display: flex;
		align-items: center;
		border-bottom: solid 1px rgb(219,219,219);
	}
	.gx11{
		width: 40%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.gx111{
		display: inline-block;
		width: 2.2rem;
		height: 2.2rem;
		background-image: url(../../../static/ic_mine_notification.png);
		background-size: cover;
	}
	.gx112{
		font-size: 1.2rem;
	}
	.gx12{
		width: 60%;
		display: flex;
		justify-content: flex-end;
		padding-right: 4%;
	}
	.gx121{
		display: inline-block;
		width: 1.4rem;
		height: 1.4rem;
		background-image: url(../../../static/ic_group_topic_right_arrow.png);
		background-size: cover;
	}
	.gx2{
		width: 100%;
		height: 50%;
		color: rgb(219,219,219);
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>