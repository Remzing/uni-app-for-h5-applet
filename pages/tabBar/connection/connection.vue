<template>
	<view class="cont">
		<view class="active-item" @click="goPage" data-path="/pages/association/myAssociation/myAssociation">
			<view class="active-item-left">
				<image src="../../../static/img/wdsq.png" mode=""></image>
				<view class="">我的社群</view>
			</view>
			<view class="active-item-right">
				<view class="">寻找组织，免费获得无限人脉</view>
				<view class="iconfont icon-youjiantou"></view>
			</view>
		</view>
		<view class="active-item" @click="goPage" data-path="/pages/association/mailList/mailList">
			<view class="active-item-left">
				<image src="../../../static/img/txl.png" mode=""></image>
				<view class="">通讯录</view>
			</view>
			<view class="active-item-right">
				<view class="dianzan-img">
					<image src="../../../static/shuijiao.jpg" mode=""></image>
					<image src="../../../static/shuijiao.jpg" mode=""></image>
					<image src="../../../static/shuijiao.jpg" mode=""></image>
					<view class="">10000+</view>
				</view>
				<view class="iconfont icon-youjiantou"></view>
			</view>
		</view>
		<view class="heng"></view>
		<view class="active-item" @click="goPage" data-path="/pages/news/toutiao/toutiao">
			<view class="active-item-left">
				<image src="../../../static/img/jszr.png" mode=""></image>
				<view class="">急速找人</view>
			</view>
			<view class="active-item-right">
				<view class="">找合作、找人才、找投资</view>
				<view class="iconfont icon-youjiantou"></view>
			</view>
		</view>
		<view class="active-item" @click="goPage" data-path="/pages/news/toutiao/toutiao">
			<view class="active-item-left">
				<image src="../../../static/img/sbxy.png" mode=""></image>
				<view class="">社宾学院</view>
			</view>
			<view class="active-item-right">
				<view class="">今日未打卡</view>
				<view class="iconfont icon-youjiantou"></view>
			</view>
		</view>
		<view class="active-item" @click="goPage" data-path="/pages/news/toutiao/toutiao">
			<view class="active-item-left">
				<image src="../../../static/img/hdpx.png" mode=""></image>
				<view class="">活动培训</view>
			</view>
			<view class="active-item-right">
				<view class="">线上找资源线下促成交</view>
				<view class="iconfont icon-youjiantou"></view>
			</view>
		</view>
		<view class="active-item" @click="goPage" data-path="/pages/news/toutiao/toutiao">
			<view class="active-item-left">
				<image src="../../../static/img/syh.png" mode=""></image>
				<view class="">书友会</view>
			</view>
			<view class="active-item-right">
				<view class="">金庸全集，共享借阅</view>
				<view class="iconfont icon-youjiantou"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tempNum:1
			};
		},
    methods: {
			goPage(e) {
        console.log("e", e.currentTarget.dataset.path)
        let path = e.currentTarget.dataset.path
        this.tempNum = this.tempNum==1?2:1
				uni.navigateTo({
					url: path+"?page=" + this.tempNum
				})
			}
		},
	}
</script>

<style lang="scss">
	page{
		background-color: #f1f3f7;
	}
	.active-item{
		background-color: #fff;
		height: 140upx;
		padding: 0 30upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: #e5e7eb solid 1upx;
		.active-item-left{
			display: flex;
			align-items: center;
			>view{
				font-size: 34upx;
			}
			image{
				width: 50upx;
				height: 50upx;
				margin-right: 20upx;
			}
		}
		.active-item-right{
			display: flex;
			align-items: center;
			color: #969aa6;
			>view{
				font-size: 24upx;
			}
			.icon-youjiantou{
				color: #b6b7b7;
				margin-left: 10upx;
			}
		} 
	}
	.dianzan-img{
		display: flex;
		image{
			width: 40upx;
			height: 40upx;
			border-radius: 40upx;
			background-color: #8b8d8d;
			border: solid 1upx #ffffff;
			margin-left: -14upx;
		}
		>view{
			font-size: 24upx; 
			color: #969aa6;
		}
	}
</style>
