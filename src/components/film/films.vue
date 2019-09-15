<template>
	<ul class="films">
		<router-link tag="li" class="fl" @click.native="fn1(index)" :to="'/film/'+item.tourls" :class="{actives:item.bols}" v-for="(item,index) in msg1" :key="item.ms">{{item.y}}</router-link>
	</ul>
</template>

<script>
	export default {
		name:"films",
		data:function(){
			return {
				msg1:[
						{y:"电影",bols:true,tourls:"dianying"},
						{y:"读书",bols:false,tourls:"dushu"},
						{y:"电视",bols:false,tourls:"dianshi"},
						{y:"同城",bols:false,tourls:"tongcheng"},
						{y:"音乐",bols:false,tourls:"yingyue"}
					]
				
			}
		},
		methods:{
			fn1:function(index){
				for(var i=0;i<this.msg1.length;i++){
					this.msg1[i].bols=false;
				}
				this.msg1[index].bols=true;
				this.$router.push(this.msg1[index].tourls)
			}
		}
	}
</script>

<style scoped>
	.films{
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		display: flex;
	}
	li{
		width: 20%;
		list-style: none;
	}
	.actives{
		color: indianred;
		border-bottom: solid 2px red;
	}
</style>