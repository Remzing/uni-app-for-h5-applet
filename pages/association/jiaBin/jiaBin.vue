<template>
	<view>
		<view class="more-head">
			<view class="more-head-set flex-cent-bet">
				<view class="more-head-info flex-cent">
					<image src="../../../static/shuijiao.jpg" mode=""></image>
		      <view class="more-head-txt">
		      	<view class="">北京创客团</view>
		      	<view class="">类型：精英会</view>
		      </view>
				</view>
		    <view class=""><button class="conf-btn" type="primary">成为会员</button></view>
			</view>
		</view>
    <view class="jia-tp">尊敬的用户，抱歉您还不是该社群会员，按照该社群制度，您暂
    时只能查看嘉宾和相关嘉宾的名片资料！</view>
    <scroll-view class="scrollList" @scroll="scrollSeting" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px'}">
      
    	<view class="uni-list">
    		<block v-for=" (list, key) in lists" :key="key">
    			<block v-if="list.data.length">
    				<view class="uni-list-cell-divider" :id="list.letter">
    					{{list.letter}}
    				</view>
    				<view class="uni-list-cell" v-for="(item,index) in list.data" :key="index"
    				 :class="list.data.length -1 == index ? 'uni-list-cell-last' : ''">
    					<view class="uni-list-cell-navigate selc-item flex-cent-bet">
                <view class="selc-item-left flex-cent">
                	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
                	<view class="selc-item-txt flex-cent">
                    <view class="selc-item-name"> {{item}}</view>
                    <view class="selc-item-job flex-cent">
                      <view class="flex-cent"><view class="iconfont icon-hangye"></view>软件开发</view>
                      <view class="flex-cent"><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
                    </view>
                  </view>
                </view>
                <view class="selc-item-type"><button class="conf-btn rads" type="primary">电子名片</button></view>
    					</view>
    				</view>
    			</block>
    		</block>
    	</view>
    </scroll-view>>
	</view>
    
</template>

<script>
  var airportDate = require("../../../common/airport.js");
	export default {
		data() {
			return {
				lists: airportDate.list,
			};
		}
	}
</script>

<style lang="scss">
  .jia-tp{
    padding: 10upx 30upx;
    font-size: 24upx;
    line-height: 52upx;
    color: #353535;
  }
  .more-head{
    position: relative;
    // background-image: "../../../static/shuijiao.jpg"
    width: 100%;
    height: 300upx;
    background-color: #5788ff;
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
  .selc-item{
    padding: 20upx 30upx 20upx 30upx;
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
      padding: 0 20upx;
      border-radius: 30upx;
      font-size: 20upx;
      color: #fff;
    }
  }
  .pageset {
  	display: flex;
  	flex-direction: row;
    position: relative;
  }
  .scrollList {
  	flex: 1;
  	height: 100vh;
  }
  .posi-tit{
    position: absolute;
    left: 0;
    top: 0;
    z-index:10;
    width:100%;
    // width: calc(100% - 46upx);
  }
  .uni-indexed-list-bar {
  	width: 46upx;
  	height: 100vh;
  	// background-color: lightgrey;
  	display: flex;
  	flex-direction: column;
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    right: 0;
    z-index:11;
  }
  .uni-list-cell:after{
    right: 60upx;
  }
  .uni-indexed-list-bar.active {
  	// background-color: rgb(200, 200, 200);
  }
  .uni-list-cell {
    width: 750upx;
  }
  .uni-indexed-list-text {
  	color: #aaa;
  	font-size: 22upx;
  	text-align: center;
  }
  .uni-indexed-list-text{
    color: #5788ff;
  }
  .uni-indexed-list-bar.active .uni-indexed-list-text {
  	color: #333;
  }
  
  .uni-indexed-list-text.active,
  .uni-indexed-list-bar.active .uni-indexed-list-text.active {
  	color: #007AFF;
  }
  .uni-indexed-list-alert {
  	position: absolute;
  	z-index: 20;
  	width: 160upx;
  	height: 160upx;
  	left: 50%;
  	top: 50%;
  	margin-left: -80upx;
  	margin-top: -80upx;
  	border-radius: 80upx;
  	text-align: center;
  	line-height: 160upx;
  	font-size: 70upx;
  	color: #fff;
  	background-color: rgba(0, 0, 0, 0.5);
  }
</style>
