<template>
	<view>
		<view class="tab-item">
			<view class="tab-one">
				<view class="active">赞过的人</view>
			</view>
			<view class="tab-one">
				<view class="">分享过的人</view>
			</view>
		</view>
		<view class="heng"></view>
		<view class="hud-item">
			<view class="hud-img">
				<image src="../../../static/shuijiao.jpg" mode=""></image>
				<view class="hud-info">
					<view class="hud-info-comp">
						<view class="">胡仙溪</view>
						<view class="">深圳市易帮云科技有限…</view>
						<view class="iconfont icon-v2"></view>
					</view>
					<view class="hud-info-job">
						<view class="">企业信息化</view>
						<view class=""> | </view>
						<view class=""> 软件开发</view>
					</view>
				</view>
			</view>
			<view class="">
				<button class="conf-btn rads" type="primary">查看名片</button>
			</view>
		</view>
		<view class="hud-item">
			<view class="hud-img">
				<image src="../../../static/shuijiao.jpg" mode=""></image>
				<view class="hud-info">
					<view class="hud-info-comp">
						<view class="">胡仙溪</view>
						<view class="">深圳市易帮云科技有限…</view>
						<view class="iconfont icon-v2"></view>
					</view>
					<view class="hud-info-job">
						<view class="">企业信息化</view>
						<view class=""> | </view>
						<view class=""> 软件开发</view>
					</view>
				</view>
			</view>
			<view class="">
				<button class="conf-btn rads" type="primary">查看名片</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.tab-item{
		width: 100%;
		height: 88upx;
		display: flex;
		>view{
			width: 50%;
			height: 100%;
			text-align: center;
			view{
				height: 100%;
				line-height: 88upx;
				display: inline-block;
				font-size: 28upx;
				color: #666666;
			}
			.active{
				color: #5788ff;
				border-bottom: #5788ff solid 4upx;
			}
		}
	}
	.hud-item{
		height: 180upx;
		padding: 30upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: #efeef3 solid 1upx;
		.rads{
			
		}
		.hud-img{
			display: flex;
			align-items: center;
			image{
				width: 100upx;
				height: 100upx;
				border-radius: 100upx;
				background-color: #a1a5af;
				margin-right: 10upx;
			}
			.hud-info{
				display: flex;
				flex-direction: column;
				.hud-info-comp{
					display: flex;
					align-items: center;
					view:nth-child(1){
						font-size: 34upx;
						font-weight: 700;
						margin-right: 8upx;
					}
					view:nth-child(2){
						width: 261upx;
						font-size: 24upx;
						text-overflow:ellipsis;
						overflow:hidden;
						white-space:nowrap;
						margin-right: 8upx;
					}
					view:nth-child(3){
						
					}
				}
				.hud-info-job{
					display: flex;
					align-items: center;
					color: #969aa6;
					font-size: 24upx;
					view:nth-child(1){
						
					}
					view:nth-child(2){
						margin: 0 8upx;
					}
					view:nth-child(3){
						
					}
				}
			}
		}
	}
</style>
