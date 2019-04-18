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
    <view class="pingd-txt" v-if="pageState==2">
    	还能拼单付款，可直接参与 
    </view>
    <view class="pingd-box" v-if="pageState==2">
    	<view class="pingd-item">
    		<view class="pingd-item-img">
    			<image src="../../../static/shuijiao.jpg" mode=""></image>
          <view class="">胡仙溪</view>
    		</view>
        <view class="pingd-item-time">
        	<view class="pingd-item-num">
        		<view class="">还差<text class="col-dd0000">1人</text>拼成</view>
        		<view class="">剩余23:56:30</view>
        	</view>
          <view class="pingd-item-btn"><button type="primary">去拼单</button></view>
        </view>
    	</view>
      <view class="pingd-item">
      	<view class="pingd-item-img">
      		<image src="../../../static/shuijiao.jpg" mode=""></image>
          <view class="">胡仙溪</view>
      	</view>
        <view class="pingd-item-time">
        	<view class="pingd-item-num">
        		<view class="">还差<text class="col-dd0000">3人</text>拼成</view>
        		<view class="">剩余23:11:31</view>
        	</view>
          <view class="pingd-item-btn"><button type="primary">去拼单</button></view>
        </view>
      </view>
    </view>
    <view class="join-btn"  v-if="pageState==1"><button class="conf-btn" type="primary" @click="goAssoPay">加入该社群</button></view>
    <view class="join-btn-two" v-if="pageState==2">
      <button class="join-btn-left" type="primary" @click="goAssoPay">
        <view class="btn-two-set">
        	<view class="">￥899.99</view>
        	<view class="">单独支付</view>
        </view>
      </button>
      <button class="join-btn-right" type="primary" @click="goAssoPay">
        <view class="btn-two-set">
        	<view class="">￥599.99</view>
        	<view class="">发起邀请</view>
        </view>
      </button>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageState: 0
			};
		},
    onLoad(options) {
    	this.options = options
      this.pageState = options.page||0
    },
    methods: {
    	goAssoPay() {
    		uni.navigateTo({
    			url: '/pages/association/assoPay/assoPay'
    		})
    	}
    },
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
  
  .pingd-box{
    padding: 0 30upx;
    background-color: #fff;
    .pingd-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: #efeef3 solid 1upx;
      padding: 30upx 0;
      .pingd-item-img{
        display: flex;
        align-items: center;
        image{
          width: 100upx;
          height: 100upx;
          border-radius: 100upx;
          background-color: #a1a5af;
          margin-right: 20upx;
        }
        >view{
          font-size: 34upx;
          font-weight: 700;
        }
      }
      .pingd-item-time{
        display: flex;
        align-items: center;
        .pingd-item-num{
          display: flex;
          flex-direction: column;
          margin-right: 20upx;
          font-size: 24upx;
        }
        .pingd-item-btn{
          button{
            height: 60upx;
            line-height: 60upx;
            background-color: #dd0000;
            border-radius: 5upx;
            font-size: 26upx;
          }
        }
      }
      .pingd-item:first-child{
        border-top: unset;
      }
    }
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
