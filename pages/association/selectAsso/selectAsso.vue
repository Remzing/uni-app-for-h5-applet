<template>
	<view>
    <view class="bottext-set">
      <view class="head-city">
      	<view class="flex-cent-cent">
          <view class="iconfont icon-dingwei"></view>
      		<view class="">城市: 深圳</view>
      	</view>
        <view class="iconfont icon-shuaxin"></view>
      </view>
      <view class="asso-item">
      	<view class="asso-info flex-cent-bet">
      		<view class="asso-img flex-cent">
      			<image src="../../../static/shuijiao.jpg" mode=""></image>
            <view class="asso-txt">
            	<view class="">北京创客团</view>
            	<view class="">
                <text>创客帮 </text>
                <text> 会员 50 </text>
                <text> 嘉宾 1539 </text> 
               </view>
            </view>
      		</view>
          <view class="iconfont icon-youjiantou"></view>
      	</view>
        <view class="asso-line"></view>
        <view class="asso-jiaru flex-cent">
        	<view class="">最近加入</view>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
        </view> 
      </view>
      <view class="asso-item">
      	<view class="asso-info flex-cent-bet">
      		<view class="asso-img flex-cent">
      			<image src="../../../static/shuijiao.jpg" mode=""></image>
            <view class="asso-txt">
            	<view class="">北京创客团</view>
            	<view class="">
                <text>创客帮 </text>
                <text> 会员 50 </text>
                <text> 嘉宾 1539 </text> 
               </view>
            </view>
      		</view>
          <view class="iconfont icon-youjiantou"></view>
      	</view>
        <view class="asso-line"></view>
        <view class="asso-jiaru flex-cent">
        	<view class="">最近加入</view>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
        </view> 
      </view>
      <view class="no-data-show">
      	<view class="iconfont icon-meiyouchengshifaqiren"></view>
        <view class="nodata-txt">抱歉，该城市还未开通！</view>
      </view>
      <view class="faqiren">
      	<view class="faqiren-txt">您还可以申请成为发起人!</view>
      	<view class="faqiren-act">创建属于自己的社群，衔接微信群用户，更好的管理！</view>
      	<view class=""><button class="conf-btn rads" type="primary">申请成为社群发起人</button></view>
      </view>
      <view class="near-asso">
      	<view class="near-asso-jies">
      		<text>附近城市社群</text>
      		<text>加入1次，享受全国人脉资源对接！</text>
      	</view>
        <view class="near-asso-box">
        	<view class="near-asso-item">
        		<image src="../../../static/shuijiao.jpg" mode=""></image>
        	  <view class="">深圳创客邦精英会</view>
        	</view>
          <view class="near-asso-item">
          	<image src="../../../static/shuijiao.jpg" mode=""></image>
            <view class="">深圳创客邦精英会</view>
          </view>
          <view class="near-asso-item">
          	<image src="../../../static/shuijiao.jpg" mode=""></image>
            <view class="">深圳创客邦精英会</view>
          </view>
          <view class="near-asso-item">
          	<image src="../../../static/shuijiao.jpg" mode=""></image>
            <view class="">深圳创客邦精英会</view>
          </view>
        </view>
      </view>
    </view><view class="bot-help">客服热线：4008-633-002   <text class="col-5788ff">意见反馈</text></view>
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
  .asso-item:last-child{
    margin-bottom: 0;
  }
  .near-asso{
    padding: 30upx 10upx;
    .near-asso-jies{
      margin-bottom: 20upx;
      text:nth-child(1){
        font-size: 36upx;
        font-weight: 700;
        line-height: 52upx;
        margin: 0 20upx 0 30upx;
        vertical-align: baseline;
      }
      text:nth-child(2){
        font-size: 24upx;
        line-height: 52upx;
        color: #969aa6;
        vertical-align: baseline;
      }
    }
    .near-asso-box{
      display: flex;
      flex-wrap: wrap;
      .near-asso-item{
        margin-left: 30upx;
        image{
          width: 203upx;
          height: 203upx;
          background-color: #ffffff;
          box-shadow: 0px 5upx 6upx 0px 
            rgba(122, 125, 134, 0.5);
          border-radius: 15upx;
        }
        view{
          text-align: center;
          font-size: 24upx;
          margin-bottom:20upx;
        }
      }
    }
  }
</style>
