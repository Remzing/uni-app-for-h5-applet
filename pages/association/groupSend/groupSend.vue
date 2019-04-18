<template>
	<view>
		<view class="setup-upimg flex-cent-cent">
			<view class="setup-upimg-img flex-cent-cent" @click="uoImgHandle">
		    <image src="../../../static/shuijiao.jpg" mode=""></image>
			</view>
		  <text>北京创客团</text>
		</view>
    <view class="heng"></view>
    <view class="setup-item flex-cent-bet">
    	<view class="setup-item-left">服务通知</view>
    	<view class="setup-item-right flex-cent">
         <switch @change="switchChange" color="#5788ff" />
      </view>
    </view>
    <view class="setup-item flex-cent-bet duanx-set">
    	<view class="setup-item-left">短信</view>
    	<view class="setup-item-right flex-cent">
         <switch @change="switch2Change" color="#5788ff" />
      </view>
    </view>
    <view class="duanx-tip flex-cent">
      <text>当前社群可接收会员有<text class="col-5788ff">30</text>位，可用短信<text class="col-5788ff">87</text>条  <text class="col-5788ff duanx-cz">马上充值></text></text>
    </view>
    <view class="heng"></view>
    <view class="set-area">
      <view class="">消息</view>
    	<textarea value="" placeholder="请描述社群作用以及具体给会员带来的价值值" />
      <view class="countnum"><text>0/58 </text></view>
    </view>
    <view class="comm-tips flex-cent">
      <view class="iconfont icon-tishi"></view>
      <text>抱歉群发功能暂不支持单独发送某个会员</text>
    </view>
    <view class="join-btn"><button class="conf-btn" type="primary">预览</button></view>
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
  .duanx-set{
    border: none;
  }
  .duanx-tip{
    padding: 0 30upx 20upx;
    background-color: #fff;
    font-size: 24upx;
    color: #969aa6;
  }
  .duanx-cz{
    margin-left: 20upx;
    text-decoration: underline
    
  }
  .setup-upimg{
    background-color: #fff;
    height: 318upx;
    flex-direction: column;
    .setup-upimg-img{
      width: 180upx;
      height: 194upx;
      background-color: #f1f3f7;
      border: solid 1upx #e5e7ed;
      margin-bottom: 18upx;
      .iconfont{
        font-size: 80upx;
        color: #c1c3c8;
      }
      image{
        width: 100%;
        height: 100%;
      }
     
    }
    text{
      font-size: 28upx;
      font-weight: 700;
      color: #353535;
    }
  }
</style>
