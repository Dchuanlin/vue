<template>
	<div class="ry">
		<div class="ry1">
			<slot name="hy"><h3>影院热映</h3></slot><h4>更多></h4>
		</div>
		<div class="ry2">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			    	<div class="swiper-slide"  v-for="items in img1" :key="items.io">
			    		<div>
			    			<img class="img3" :src="'../../../../static/'+items.img"/>
			    		</div>
			    		
			    		<span>{{items.titles}}</span>
			    		<span>{{items.pj}}</span>
			    		<span>{{items.pf}}</span>
			    		
			    	</div>
			    	
			    </div>
			</div>
		</div>
		<div class="ry3">
			<div class="img2">
				<slot name="nm"><img src="../../../../static/01.jpg" /></slot>
			</div>
			<div class="wenzi">
				<slot name="hu"><h3>对话戏剧大师    列夫朵金     邀你看直播</h3></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper"
	export default {
		name:"ry",
		data:function(){
			return {
				img1:[
				      {img:"media.jpg",titles:"加勒比海盗5",pj:"★★★☆☆",pf:7.5},
					  {img:"media.jpg",titles:"加勒比海盗5",pj:"★★★★☆",pf:8.5},
				      {img:"media.jpg",titles:"加勒比海盗5",pj:"★★★☆☆",pf:6.5},
				      {img:"media.jpg",titles:"加勒比海盗5",pj:"★★★★☆",pf:9.5},
				      {img:"media.jpg",titles:"加勒比海盗5",pj:"★★★★☆",pf:8.0},
				      {img:"media.jpg",titles:"加勒比海盗5",pj:"★★★☆☆",pf:7.5}]
				
			}
		},
		mounted:function(){
			 new Swiper('.swiper-container', {
			 	    autoplay:true,
					slidesPerView : 3,
					spaceBetween : 4,
				})
		}
	}
</script>

<style scoped>
	@import "swiper/dist/css/swiper";
	.ry{
		background-color: rgb(246,246,246);
		margin-top: 0.8rem;
		overflow: hidden;
	}
	.ry1{
		width: 100%;
		height: 45px;
		line-height: 45px;
		display: flex;
		background-color: white;
	}
	.ry1 h3{
		width: 50%;
		text-align: left;
		padding-left: 2%;
		color: rgb(74,74,74);
	}
	.ry1 h4{
		width: 50%;
		text-align: right;
		padding-right: 2%;
		color: rgb(66,192,85);
	}
	.ry2{
		width: 100%;
		height: 10.5rem;
		display: flex;
		padding: 0px 2%;
		background-color: white;
	}
	.img3{
		width: 100%;
	}
	.ry3{
		width: 100%;
		height: 150px;
		margin-top: 0.8rem;
		background-color: white;
	}
	.img2{
		width: 100%;
		padding-top: 0.4rem;
	}
	.img2 img{
		width: 96%;
	}
	.wenzi{
		width: 100%;
		text-align: center;
	}
	
</style>