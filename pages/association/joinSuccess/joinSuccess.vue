<template>
	<view class="mar-cont">
    <view class="tuan-info">
    	<image src="../../../static/shuijiao.jpg" mode=""></image>
      <view class="tuan-name">北京创客团</view>
      <view class="tuan-type">创客帮</view>
      <view class="tuan-count">共20人</view>
    </view>
    <view class="active-item" @click="goPage" data-path="/pages/news/toutiao/toutiao">
    	<view class="active-item-left">
    		<view class="">社群类型介绍</view>
    	</view>
    	<view class="active-item-right">
    		<view class="iconfont icon-youjiantou"></view>
    	</view>
    </view>
    <view class="pingd-txt">
    	<view class="col-969aa6">您的信息</view>
    	<!-- <view class="flex-cent">
        <view class="iconfont icon-bianji col-5788ff"></view>
        <view class="col-5788ff">重新编辑</view>
      </view> -->
    </view>
    <view class="inp-item">
    	<view class="">
        <text class="col-969aa6">姓名：</text>
        <text>黄细花</text>
      </view>
    </view>
    <view class="inp-item">
    	<view class="">
    	  <text class="col-969aa6">行业：</text>
    	  <text>软件服务行业</text>
    	</view>
    </view>
    <view class="inp-item">
    	<view class="">
    	  <text class="col-969aa6">电话：</text>
    	  <text>13535646659</text>
    	</view>
    </view>
    <view class="inp-item">
      <view class="">
        <text class="col-969aa6">推荐人：</text>
        <text>李科 138*****9774 </text>
      </view>
    </view>
    <view class="suc-txt">您已加入成功！</view>
    <view class="join-btn"><button class="conf-btn" type="primary">进入社群</button></view>
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
  page{
    background-color: #f1f3f7;
  }
  .suc-txt{
    text-align: center;
    margin: 40upx 0 100upx;
  }
  .inp-item{
    padding: 30upx;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: #e5e7eb solid 1upx;
  }
  .inp-item:first-child{
    border-top: unset;
  }
  .tuijr{
    view:first-child{
      font-size: 30upx;
      line-height: 52upx;
      color: #353535;
    }
    view:last-child{
      font-size: 24upx;
      line-height: 48upx;
      color: #969aa6;
    }
  }
  .inp-item:first-child{
    border-top: unset;
  }
  .asso-item:last-child{
    margin-bottom: 0;
  }
  .tuan-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 30upx 0;
    image{
      width: 150upx;
      height: 150upx;
      background-color: #b6b7b7;
    }
    .tuan-name{
      font-size: 48upx;
      font-weight:700;
    }
    .tuan-type{
      padding: 0 12upx;
      background-color: #ffffff;
      border-radius: 40upx;
      border: solid 1upx #5788ff;
      font-size: 24upx;
      color: #5788ff;
    }
    .tuan-count{
      font-size: 24upx;
      line-height: 52upx;
      color: #969aa6;
    }
  }
  .active-item{
    border-top: #efeef3 solid 1upx;
  	background-color: #fff;
  	height: 90upx;
  	padding: 0 30upx;
  	display: flex;
  	justify-content: space-between;
  	align-items: center;
  	border-bottom: #e5e7eb solid 1upx;
  	.active-item-left{
      view{
        font-size: 32upx;
      }
    }
  }
</style>
