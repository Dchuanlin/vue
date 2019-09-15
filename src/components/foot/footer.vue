<template>
	<div class="footer">
		<footer-item v-for="(item,index) in msg" :key="item.createTime" :obj="item" @click.native="fn1(index)"></footer-item>
	</div>
</template>

<script>
	import footerItem from "./footerItem"
	export default {
		name:"footer",
		components:{footerItem},
		data:function(){
			return {
				msg:[
						{name:"首页",img:"1.png",img1:"6.png",tourl:"/home",bol:true},
						{name:"书影音",img:"2.png",img1:"7.png",tourl:"/film",bol:false},
						{name:"广播",img:"3.png",img1:"8.png",tourl:"/guangbo",bol:false},
						{name:"小组",img:"4.png",img1:"9.png",tourl:"/group",bol:false},
						{name:"我的",img:"5.png",img1:"10.png",tourl:"/my",bol:false}
					]
			}
		},
		methods:{
			fn1:function(index){
				for(var i=0;i<this.msg.length;i++){
					this.msg[i].bol=false
				}
				this.msg[index].bol=true
				this.$router.push(this.msg[index].tourl)
			}
		}
		
	}
</script>

<style scoped>
	.footer{
		width: 100%;
		height: 65px;
		position: fixed;
		bottom: 0px;
		display: flex;
		border-top: solid 1px gainsboro;
		background-color: white;
		padding-top: 2%;
		z-index: 999;
	}
</style>