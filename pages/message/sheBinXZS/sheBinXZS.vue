<template>
	<view>
		<view class="time-txt flex-cent-cent">
			<text class="">11:56</text>
		</view>
    <view class="dengjits-box">
      <view class="dengjits-bot flex-cent-bet cell-bot">
      	<view class="dengjits-bot-tit">会员等级提升</view>
      	<view class="dengjits-bot-num flex-cent-bet">
          <view class=""><button class="conf-btn rads" type="primary">立即参与</button></view>
        </view>
      </view>
      <view class="dengjits-top cell-bot flex-cent">
        <text>您的影响力上升到18973，等级提升为</text><view class="iconfont icon-v2"></view>
      </view>
    </view>
    <view class="time-txt flex-cent-cent">
    	<text class="">11:56</text>
    </view>
    <view class="chat-box flex-cent">
      <image src="../../../static/shuijiao.jpg" mode=""></image>
      <view class="chat-box-text arrow">
        <text >
        	胡国强更新了专栏《揭开商业模式》
        </text>
      </view>
    </view>
    <view class="chat-box chat-box-self flex-cent">
      <view class="chat-box-text arrow-right">
        <text >
        	好的，我已知晓
        </text>
      </view>
      <image src="../../../static/shuijiao.jpg" mode=""></image>
    </view>
    
    <view class="chat-box flex-cent">
      <image src="../../../static/shuijiao.jpg" mode=""></image>
      <view class="chat-box-text arrow">
        <text >
        	陈长春，知名创业导师胡国强邀请你来学习《揭开小米核心商业模式》，为你解读小米做产品、做品牌、做用户的核小米如何在心密码，只需99元，拼团9.9元，你就能看到诸强林立的手机战场实现破局，成就百亿美金市值。还等什么，快来学习吧！
戳：https://taou.cn/X6YUF
        </text>
      </view>
    </view>
    <view class="zhus-bot-fixed flex-cent">
    	<view class=" flex-cent-cent"><view class="iconfont icon-bianji"></view> </view>
    	<view class="flex-cent-cent">社宾学院</view>
    	<view class="flex-cent-cent">关于社宾</view>
    	<view class="flex-cent-cent">帮助中心</view>
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
  .arrow, .arrow-right {
		position: relative;
	}
  .arrow::after,.arrow-right::after  {
  	position: absolute;
  	top: 16upx;
  	left: -24upx;
  	
    content: '';
    border-width: 16upx 16upx 16upx 16upx;
    border-style: solid;
    border-color: transparent;
    border-right-color:  #fff;
  }
  .arrow-right::after {
  	top: 17upx;
  	left: unset;
  	right: -24upx;
    
    border-width: 16upx 16upx 16upx 16upx;
    border-style: solid;
    border-color: transparent;
    border-left-color:  #5788ff;
  }
  .chat-box{
    padding: 0 30upx 20upx;
    align-items: flex-start;
    image{
      width: 80upx;
      height: 80upx;
      border-radius: 80upx;
      background-color: #424347;
      margin-right: 20upx;
    }
    .chat-box-text{
      margin-top: 4upx;
      max-width: 510upx;
      background-color: #ffffff;
      padding: 10upx 26upx;
      border-radius: 50upx;
      box-shadow: 0px 3upx 3upx 0px 
        rgba(190, 192, 198, 0.5);
    }
  }
  .chat-box-self{
    justify-content: flex-end;
    image{
      margin-left: 20upx;
      margin-right: 0;
    }
    .chat-box-text{
      background-color: #5788ff;
      color: #fff;
    }
  }
  .zhus-bot-fixed{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 97upx;
    background-color: #f5f7fa;
    >view{
      flex: 1;
      height: 100%;
      font-size: 34upx;
      border-top: solid 1upx #dddddd;
      border-left: solid 1upx #dddddd;
    }
    view:nth-child(1){
      flex: 0.5;
      border-left: unset;
    }
    .icon-bianji{
      font-size:50upx;
    }
  }
  .dengjits-box{
    width: 670upx;
    background-color: #ffffff;
    box-shadow: 0px 3upx 3upx 0px 
      rgba(190, 192, 198, 0.5);
    border-radius: 10upx;
    margin: 0 auto 30upx;
    .dengjits-top{
      padding: 20upx 30upx;
      text{
        font-size: 24upx;
        color: #969aa6;
      }
    }
    .dengjits-bot{
      padding: 20upx 30upx 30upx;
      .dengjits-bot-tit{
        font-size: 34upx;
        font-weight: 700;
        line-height: 60upx;
        color: #353535;
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
