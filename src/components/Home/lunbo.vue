<template>
	<div class="lunbo">
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="item in lunbo" :key="item">
		    	<img :src="'../../../static/'+item"/>
		    </div>
		    <div class="swiper-pagination"></div>
		  </div>
		</div>
	</div>
</template>

<script>
	import Swiper from "swiper"
	export default {
		name:"ba",
		data:function(){
			return {
				lunbo:["01.jpg","02.jpg","03.jpg"]
			}
		},
		mounted:function(){//挂载成功之后
			new Swiper('.swiper-container', {
				autoplay: true,//可选选项，自动滑动
				loop:true,
				pagination: {
				    el: '.swiper-pagination'
				 }
			})
		}
	}
</script>

<style scoped>
	@import "swiper/dist/css/swiper";
	.lunbo{
		width: 100%;
	}
	.swiper-slide{
		width: 100%;
	}
	.lunbo img{
		width: 100%;
	}
</style>