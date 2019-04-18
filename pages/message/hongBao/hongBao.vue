<template>
	<view>
		<view class="hong-top">
      <view class="hong-top-box flex-cent-bet">
      	<view class="hong-top-tips">抱歉，你手慢了！</view>
        <view class="hong-top-logo flex-cent-cent">
          <image src="../../../static/shuijiao.jpg" mode=""></image>
        </view>
      </view>
      <view class="hong-top-back"></view>

    </view>
    <view class="hong-deti">
    	<text class="">
    		易帮云小程序SAAS给商务精
    	  英的现金红包
    	</text>
    </view>
    
    <view class="hong-txt">
    	已存入余额，可消费或提现
    </view>
    <view class=" flex-cent-cent">
    	<view class="hong-count">
    		已领取1/2879个
    	</view>
    </view>
    
    <view class="bot-ad-fix">
    	<view class="bot-ad-tip">广告</view>
      <view class="bot-ad-img flex-cent">
      	<image src="../../../static/shuijiao.jpg" mode=""></image>
      </view>
      <view class="bot-ad-text flex-cent-cent">
      	<text>活动已结束，期待下次</text>
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
  page{
    background-color: #f1f3f7;
  }
  .bot-ad-fix{
    position: absolute;
    bottom: 0;
    padding: 0 40upx;
    margin-top: 60upx;
    .bot-ad-tip{
      width: 60upx;
      height: 30upx;
      background-color: #e1e3ea;
      border-radius: 15upx;
      font-size: 20upx;
      text-align: center;
      color: #969aa6;
    }
    .bot-ad-img{
      image{
        width: 670upx;
        height: 400upx;
        background-color: #1e1a18;
        border-radius: 15upx;
        margin: 20upx 0 10upx;
      }
    }
    .bot-ad-text{
      font-size: 24upx;
      line-height: 52upx;
      color: #969aa6;
    }
  }
  .hong-deti{
    font-size: 34upx;
    line-height: 52upx;
    color: #353535;
    text-align: center;
  }
  .hong-txt{
    text-align: center;
    font-size: 24upx;
    line-height: 52upx;
    color: #5788ff;
    margin-top: 10upx;
  }
  .hong-count{
    font-size: 24upx;
    line-height: 52upx;
    color: #ffffff;
    background-color: #d7d9de;
    border-radius: 20upx;
    padding: 0 20upx;
    margin-top: 10upx;
  }
  .hong-top{
    margin:  0 0 30upx;
    position: relative;
    width:100%;
    height:412upx;
    .hong-top-box{
      height: 100%;
      flex-direction: column;
      z-index: 10;
      view{
        z-index: 10;
      }
    }
    .hong-top-tips{
      font-size: 60upx;
      color: #ffffff;
      margin-top:70upx;

    }
    .hong-top-logo{
      width: 194upx;
      height: 194upx;
      border-radius: 194upx;
      background-color: #fc5433;
      image{
        width: 180upx;
        height: 180upx;
        border-radius: 180upx;
        background-color: #fc5433;
      }
    }
  }
  .hong-top-back{
    position: absolute;
    width:1300upx;
    height:700upx;
    border-radius:50%;
    background-color:#fc5433;
    margin:0 auto;
    left:-275upx;
    top:-350upx;
  }
  
</style>
