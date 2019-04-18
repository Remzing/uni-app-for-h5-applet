<template>
	<view>
		<view class="more-head">
			<view class="more-head-set flex-cent-bet">
				<view class="more-head-info flex-cent">
					<image src="../../../static/shuijiao.jpg" mode=""></image>
		      <view class="more-head-txt">
		      	<view class="">北京创客团</view>
		      	<view class=""><text>排名：23名</text><text>会员：181人</text> </view>
		      </view>
				</view>
		    <view class=""><button class="conf-btn" type="primary">切换社群</button></view>
			</view>
		</view>
    <view class="">
    	<view class="paim-item flex-cent-bet">
    		<view class="paim-item-info flex-cent">
          <view class="paim-num"></view>
    			<image src="../../../static/shuijiao.jpg" mode=""></image>
    	    <view class="paim-item-txt">
    	    	<view class="">胡仙溪</view>
    	    	<view class=""><text>第1名</text></view>
    	    </view>
    		</view>
    	  <view class="paim-item-right flex-cent">
          <view class="paim-count">1244</view>
          <view class="paim-licknum flex-cent">
            <view class="">2</view>
            <view class="iconfont icon-xihuan col-ff665b"></view>
          </view>
        </view>
    	</view>
      <view class="heng"></view>
      <view class="paim-item flex-cent-bet bo-bot">
      	<view class="paim-item-info flex-cent">
          <view class="paim-num">1</view>
      		<image src="../../../static/shuijiao.jpg" mode=""></image>
          <view class="paim-item-txt">
          	<view class="">胡仙溪</view>
          	<view class=""><text>第1名</text></view>
          </view>
      	</view>
        <view class="paim-item-right flex-cent">
          <view class="paim-count">1244</view>
          <view class="paim-licknum flex-cent">
            <view class="">2</view>
            <view class="iconfont icon-xihuan col-ff665b"></view>
          </view>
        </view>
      </view>
      <view class="heng"></view>
      <view class="paim-item flex-cent-bet bo-bot">
      	<view class="paim-item-info flex-cent">
          <view class="paim-num">2</view>
      		<image src="../../../static/shuijiao.jpg" mode=""></image>
          <view class="paim-item-txt">
          	<view class="">胡仙溪</view>
          	<view class=""><text>第2名</text></view>
          </view>
      	</view>
        <view class="paim-item-right flex-cent">
          <view class="paim-count">1244</view>
          <view class="paim-licknum flex-cent">
            <view class="">0</view>
            <view class="iconfont icon-xihuan"></view>
          </view>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
    onLoad(options) {
    	uni.setNavigationBarColor({
    	  frontColor:'#ffffff',
    	  backgroundColor: '#2acb64',
    	})
    },
	}
</script>

<style lang="scss">
  .paim-item{
    height: 140upx;
    margin: 0 30upx;
    image{
      width: 80upx;
      height: 80upx;
      border-radius: 80upx;
      background-color: #a1a5af;
      margin: 0 10upx;
    }
    .paim-num{
      min-width: 30upx;
      text-align: center;
    }
    .paim-item-txt{
      >view:first-child{
        font-size: 34upx;
        font-weight: 700;
        line-height: 52upx;
        color: #353535;
      }
      >view:last-child{
        font-size: 24upx;
        line-height: 52upx;
        color: #969aa6;
      }
    }
    .paim-item-right{
      .paim-count{
        font-size: 60upx;
        font-weight: 700;
        line-height: 52upx;
        color: #ffa800;
        margin-right: 20upx;
        margin-bottom:-16upx;
      }
      .paim-licknum{
        flex-direction: column;
        >view:first-child{
          font-size: 24upx;
          color: #969aa6;
        }
        .iconfont{
          font-size: 30upx;
          color: #dddfe3;
        }
      }
    }
  }
  .bo-bot{
    border-bottom: #e5e7ed solid 1upx;
  }
  .more-head{
    position: relative;
    // background-image: "../../../static/shuijiao.jpg"
    width: 100%;
    height: 300upx;
    background-color: #2acb64;
    .more-head-set{
      position: absolute;
      bottom: 10upx;
      left: 20upx;
      padding: 0 12upx;
      width: 710upx;
      height: 120upx;
      background-color: rgba(0, 0, 0, 0.5);
      image{
        width: 100upx;
        height: 100upx;
        margin-right: 16upx;
      }
      .conf-btn{
        height: 54upx;
        line-height: 54upx;
        border-radius: 8upx;
        background-image: linear-gradient(120deg, 
          #18d25b 0%, 
          #06a03d 100%);
        box-shadow: 0px 3upx 3upx 0px 
          rgba(57, 215, 114, 0.5);
      }
      .more-head-txt{
        view:first-child{
          font-size: 34upx;
          line-height: 52upx;
          color: #ffffff;
          font-weight: 700;
        }
        view:last-child{
          font-size: 24upx;
          line-height: 52upx;
          color: #ffffff;
        }
      }
    }
  }
</style>
