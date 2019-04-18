<template>
	<view>
    <view class="asso-info flex-cent-bet">
      <view class="asso-img flex-cent">
        <!-- <view class="yijairu">已加入</view> -->
        <image src="../../../static/shuijiao.jpg" mode=""></image>
        <view class="asso-txt">
          <view class="">北京创客团</view>
          <view class="">
            <text>共7位新成员加入，等待你的审核！ </text>
           </view>
        </view>
      </view>
      <view class=""><button class="conf-btn allsel" type="primary">全选</button></view>
    </view>
    <view class="shen-head flex-cent-bet">
    	<view class="">2018.11.16</view>
      <text>2人 </text>
    </view>
    <view class=" selc-item flex-cent-bet">
      <view class="selc-item-left flex-cent">
        <view class="check-ico">
          <view class="iconfont icon-dui col-5788ff"></view>
        </view>
      	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      	<view class="selc-item-txt flex-cent">
          <view class="selc-item-name"> 无限次</view>
          <view class="selc-item-job flex-cent">
            <view class="flex-cent"><view class="iconfont icon-hangye"></view>软件开发</view>
            <view class="flex-cent"><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
          </view>
        </view>
      </view>
      <view class="selc-item-type flex-cent-cent"><view class="iconfont icon-dianhua" ></view></view>
    </view>
    <view class=" selc-item flex-cent-bet">
      <view class="selc-item-left flex-cent">
        <view class="check-ico">
          <view class="iconfont icon-kong col-bbb"></view>
        </view>
      	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      	<view class="selc-item-txt flex-cent">
          <view class="selc-item-name"> 无限次</view>
          <view class="selc-item-job flex-cent">
            <view class="flex-cent"><view class="iconfont icon-hangye"></view>软件开发</view>
            <view class="flex-cent"><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
          </view>
        </view>
      </view>
      <view class="selc-item-type flex-cent-cent"><view class="iconfont icon-dianhua" ></view></view>
    </view>
    <view class="shen-head flex-cent-bet">
    	<view class="">2018.11.17</view>
      <text>2人 </text>
    </view>
    <view class=" selc-item flex-cent-bet">
      <view class="selc-item-left flex-cent">
        <view class="check-ico">
          <view class="iconfont icon-kong col-bbb"></view>
        </view>
      	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      	<view class="selc-item-txt flex-cent">
          <view class="selc-item-name"> 无限次</view>
          <view class="selc-item-job flex-cent">
            <view class="flex-cent"><view class="iconfont icon-hangye"></view>软件开发</view>
            <view class="flex-cent"><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
          </view>
        </view>
      </view>
      <view class="selc-item-type flex-cent-cent"><view class="iconfont icon-dianhua" ></view></view>
    </view>
    <view class=" selc-item flex-cent-bet">
      <view class="selc-item-left flex-cent">
        <view class="check-ico">
          <view class="iconfont icon-dui col-5788ff"></view>
        </view>
      	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      	<view class="selc-item-txt flex-cent">
          <view class="selc-item-name"> 无限次</view>
          <view class="selc-item-job flex-cent">
            <view class="flex-cent"><view class="iconfont icon-hangye"></view>软件开发</view>
            <view class="flex-cent"><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
          </view>
        </view>
      </view>
      <view class="selc-item-type flex-cent-cent"><view class="iconfont icon-dianhua" ></view></view>
    </view>
    <view class="join-btn-two">
      <button class="join-btn-left" type="primary" @click="goAssoPay">
        <view class="btn-two-set">
        	<view class="">拒绝</view>
        </view>
      </button>
      <button class="join-btn-right" type="primary" @click="goAssoPay">
        <view class="btn-two-set">
        	<view class="">接受</view>
        </view>
      </button>
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
  .allsel{
    border-radius: 100upx;
    margin: 0
  }
  .btn-two-set{
    font-size: 34upx!important;
  }
  .join-btn-right{
    background-image: linear-gradient(120deg, 
		#39abf8 0%, 
		#7184fe 100%)!important;
  }
  .join-btn-left{
    background-image: linear-gradient(120deg, 
		#f86639 0%, 
		#f53a00 100%) !important;
  }
  .check-ico{
    .iconfont{
      font-size: 40upx;
      margin-right: 20upx;
    }
  }
  .shen-head{
    height: 53upx;
    background-color: #f1f3f7;
    padding: 30upx;
    view{
       font-size: 24upx;
       font-weight: 700;
    }
    text{
      font-size: 24upx;
      color: #5788ff; 
    }
  }
  .selc-item{
    padding: 20upx 30upx 20upx 30upx;
    border-bottom: #e5e7eb solid 1upx;
    .selc-item-left{
      .selc-item-img{
        width: 100upx;
        height: 100upx;
        margin-right: 20upx;
  
        image{
          width: 100upx;
          height: 100upx;
          border-radius: 100upx;
          background-color: #a1a5af;
        }
      }
      .selc-item-txt{
        flex-direction: column;
        align-items: flex-start;
      }
      .selc-item-name{
        font-size: 34upx;
        font-weight: 700;
      }
      .selc-item-job{
        font-size: 24upx;
        view{
          font-size: 24upx;
        }
        color: #969aa6;
        .iconfont{
          font-size: 26upx;
          margin-right: 10upx;
        }
        .icon-jiaruqunzu{
          margin-left: 20upx;
        }
      }
    }
    .selc-item-type{
      width: 46upx;
      height: 46upx;
      background-image: linear-gradient(120deg, 
        #39abf8 0%, 
        #7184fe 100%);
      box-shadow: 0px 3upx 3upx 0px 
        rgba(109, 135, 254, 0.5);
      border-radius: 23upx;
      font-size: 20upx;
      color: #fff;
    }
  }
  .asso-info{
    padding: 30upx;
    background-color: #f6f7fa;
    .yijairu{
      width: 30upx;
      height: 100upx;
      background-image: linear-gradient(120deg, 
        #39abf8 0%, 
        #7184fe 100%);
      font-size: 20upx;
      text-align: center;
      color: #fff;
    }
    image{
      width: 100upx;
      height: 100upx;
      background-color: #b6b7b7;
    }
    .asso-txt{
      margin-left: 28upx;
      >view:first-child{
        font-size: 34upx;
        line-height: 52upx;
        font-weight: 700;
      }
      >view:nth-child(2){
        font-size: 24upx;
        line-height: 52upx;
        color: #969aa6;
        text{
          margin-right: 18upx;
        }
      }
    }
  }
</style>
