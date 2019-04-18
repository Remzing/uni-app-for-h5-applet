<template>
	<view>
		<view class="time-txt flex-cent-cent">
			<text class="">2018年3月19日</text>
		</view>
    <view class="mingpian-box">
      <view class="mingpian-top cell-bot flex-cent">
      	<image src="../../../static/shuijiao.jpg" mode=""></image>
        <text>我是李伟如，邀请你和我一起参与投票</text>
      </view>
      <view class="mingpian-bot">
      	<view class="mingpian-bot-tit">社宾功能投票（重在参与）</view>
      	<view class="mingpian-bot-num flex-cent-bet">
          <text class="">63人参与</text>
          <view class=""><button class="conf-btn rads" type="primary">立即参与</button></view>
        </view>
      </view>
    </view>
    <view class="time-txt flex-cent-cent">
    	<text class="">11:56</text>
    </view>
    <view class="mingpian-box">
      <view class="mingpian-top cell-bot flex-cent">
      	<image src="../../../static/shuijiao.jpg" mode=""></image>
        <text>我是李伟如，邀请你和我一起参与投票</text>
      </view>
      <view class="mingpian-bot">
      	<view class="mingpian-bot-tit">社宾功能投票（重在参与）</view>
      	<view class="mingpian-bot-num flex-cent-bet">
          <text class="">63人参与</text>
          <view class=""><button class="conf-btn rads" type="primary">立即参与</button></view>
        </view>
      </view>
    </view>
    <view class="bot-fixed flex-cent">
    	<view class="bot-fixed-left flex-cent-cent">提醒设置</view>
    	<view class="bot-fixed-right flex-cent-cent">提问题</view>
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
    padding-top: 30upx;
  }
  .bot-fixed{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 97upx;
    background-color: #f5f7fa;
    .bot-fixed-left{
      height: 100%;
      font-size: 34upx;
      border-top: solid 1upx #dddddd;
      flex: 1;
    }
    .bot-fixed-right{
      flex: 1;
      height: 100%;
      font-size: 34upx;
      border-top: solid 1upx #dddddd;
      border-left: solid 1upx #dddddd;
    }
  }
  .mingpian-box{
    width: 670upx;
    background-color: #ffffff;
    box-shadow: 0px 3upx 3upx 0px 
      rgba(190, 192, 198, 0.5);
    border-radius: 10upx;
    margin: 0 auto 30upx;
    .mingpian-top{
      padding: 20upx 30upx;
      image{
        width: 50px;
        height: 50px;
        border-radius: 100upx;
        margin-right: 20upx;
      }
      text{
        font-size: 24upx;
      }
    }
    .mingpian-bot{
      padding: 10upx 30upx 30upx;
      .mingpian-bot-tit{
        font-size: 34upx;
        font-weight: 700;
        line-height: 60upx;
        color: #353535;
        margin-top: 12upx;
      }
      .mingpian-bot-num{
        text{
          font-size: 24upx;
          line-height: 52upx;
          color: #969aa6;
        }
      }
    }
  }
  .time-txt{
    
    >text{
      height: 41upx;
      padding: 0 20upx;
      border-radius: 100upx;
      background-color: #d7d9de;
      margin-bottom: 30upx;
      font-size: 24upx;
      color: #ffffff;
      display: inline-block;
    }
    
  }
</style>
