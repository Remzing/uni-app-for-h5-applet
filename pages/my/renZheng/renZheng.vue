<template>
	<view>
		<view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/renZhengId/renZhengId" data-page='1'>
			<view class="myoper-item-left flex-cent">
		    <view class="">实名认证</view>
			</view>
		  <view class="myoper-item-right">
				<text v-if="infoData.state==1">已认证</text>
				<text v-if="infoData.state!=1">未认证</text>
		  	<view class="iconfont icon-youjiantou"></view>
		  </view>
		</view>
		<view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/jingLiRenZheng/jingLiRenZheng" data-page='1'>
			<view class="myoper-item-left flex-cent">
		    <view class="">职业经历认证</view>
			</view>
		  <view class="myoper-item-right">
		  	<view class="iconfont icon-youjiantou"></view>
		  </view>
		</view>
		<!-- <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/jingLiRenZheng/jingLiRenZheng" data-page='1'>
			<view class="myoper-item-left flex-cent">
		    <view class="">芝麻信用认证</view>
			</view>
		  <view class="myoper-item-right">
		  	<view class="iconfont icon-youjiantou"></view>
		  </view>
		</view> -->
		<view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/jingLiJiaoYu/jingLiJiaoYu" data-page='2'>
			<view class="myoper-item-left flex-cent">
		    <view class="">教育经历认证</view>
			</view>
		  <view class="myoper-item-right">
		  	<view class="iconfont icon-youjiantou"></view>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoData:{}
			};
		},
		onLoad() {
			this.init()
		},
    methods:{
			init(){
				this.$request({
					// 认证初始化
					url:'association/client/approve/allApproveInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data
						this.infoData = _data
					}
				})
			},
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
        let id = e.currentTarget.dataset.id||''
      	uni.navigateTo({
      		url: path+'?page='+page+'&id='+id
      	})
      }
    }
	}
</script>

<style lang="scss">
	page{
		background-color: #f1f3f7;
	}
	.cell-bot:after{
	  left: 0;
	  right: 0;
	}
	.myoper-item{
	  padding: 0 40upx;
	  height: 125upx;
		background: #fff;
	  .myoper-item-left{
	    .iconfont{
	      color: #5788ff;
	      font-size: 42upx;
	      margin-right: 14upx;
	    }
	    view{
	      font-size: 34upx;
	    }
	  }
	  .myoper-item-right{
			display: flex;
			align-items: center;
	    text{
	      font-size: 24upx;
	      line-height: 52upx;
	      color: #969aa6;
	    }
	    .iconfont{
	      color: #b6b7b7;
	      margin-left: 14upx;
	    }
	  }
	}
</style>
