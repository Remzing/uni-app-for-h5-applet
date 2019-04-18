<template>
	<view>
		<el-amap vid="amapDemo" :plugin="plugin" :center="mapCenter" :zoom="20" class="amap-demo">
			<el-amap-marker v-for="marker in markers" :position="marker" ></el-amap-marker>
		</el-amap>
		<!-- <uni-icon type=""></uni-icon> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				markers: [],
				mapCenter: [121.59996, 31.197646],
			};
		}
	}
</script>

<style lang="scss">

</style>
