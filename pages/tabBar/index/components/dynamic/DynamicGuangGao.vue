<template>
  <div class="dynamic-item">
    <view class="card-item" @click="toGuangGao"> 
			<view class="uni-flex ad-con">
				<view class="card-toux">
					 <image :src="$domain + obj.banner_photo" mode=""></image>
					 <view class="card-name">{{obj.banner_name}}</view>
					 <view class="card-adtxt">广告</view>
				</view>
				<view class="iconfont icon-guanbi" @click="close"> </view>
			</view>
			<view class="ad-textset">{{obj.title}}</view>
			<view class="fenhui-oneimg ad-imgset">
				 <image :src="$domain + obj.dynamic_img" mode=""></image>
				 <view class="tiaozhuan">跳转</view>
			</view>
		</view>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => {
        return {}
      }
    },
	},
  created(){
    console.log('广告：',this.obj)
	},
	methods: {
		close() {
			this.$emit('closeGuanGao')
		},
		toGuangGao(){
			console.log('跳转到广告页：',this.obj.banner_url)
		}
	},
}
</script>

<style lang="scss" scoped>
.dynamic-item {
  width: 100%;
  .card-toux{
		display: flex;
		align-items: center;
		margin-bottom: 20upx;
		image{
			width: 60upx;
			height: 60upx;
			border-radius: 50%;
			background-color: #f1f3f7;
			display: block;
			margin-right: 8upx;
		}
		.card-name{
			font-size: 34upx;
			font-weight: 700;
			color: #353535;
			margin-right: 8upx;
		}
		.card-hangye{
			color: #969aa6;
		}
		.card-adtxt{
// 			height: 30upx;
// 			line-height: 30upx;
			padding: 0 10upx;
			background-color: #f1f3f7;
			border-radius: 15upx;
			color: #969aa6;
			font-size: 24upx;
		}
	}
	.ad-con{
		justify-content: space-between;
		align-items: center;
		.icon-guanbi{
			color: #bbb;
		}
	}
	.ad-textset{
		font-size: 28upx;
		color: #353535;
		margin: 0 0 18upx 8upx;
	}
	.ad-imgset{
		position: relative;
		image{
			height: 400upx;
		}
		.tiaozhuan{
			position: absolute;
			bottom: 30upx;
			right: 26upx;
			font-size: 18upx;
			width: 50upx;
			height: 50upx;
			line-height: 50upx;
			border-radius: 50upx;
			background-color: rgba(0, 0, 0, 0.5);
			opacity: 0.5;
			color: #fff;
		}
  }	
  .fenhui-oneimg {
		text-align: center;
		image{
			width: 670upx;
			height: 250upx;
			background-color: #241817;
			border-radius: 15upx; 
		}
		
	}
}
</style>