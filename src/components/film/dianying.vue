<template>
	<div class="trs">
		<reyin></reyin>
		<reyin>
			<h3 slot="hy">院线即将上映</h3>
			<img slot="nm" src="../../../static/03.jpg" />
			<h3 slot="hu">话题      找人借钱     人际关系的试金石</h3>
		</reyin>
	</div>
</template>

<script>
	import reyin from "./dianyings/reyin"
	export default {
		name:"dianying",
		components:{
			reyin
		}
	}
</script>

<style scoped>
	.trs{
		background-color:  rgb(246,246,246);
		height: 860px;
		overflow: hidden;
	}
</style>