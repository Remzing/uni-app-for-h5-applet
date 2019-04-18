<template>
	<view>
		<view class="jianz-top flex-cent" :style="{backgroundColor:themeColor}">以下数据仅限于【深圳创客邦精英会社群】成员发起的</view>
    <view class="top-tab">
      <view class="flex-cent sous" @click="topTab(0)" :class="(tabIndex==0)?'tab-active':''">
        <text>正在进行</text>
        <view class=""></view>
      </view>
      <view class="flex-cent sous" @click="topTab(1)" :class="(tabIndex==1)?'tab-active':''">
        <text>已结束</text>
      </view>
    </view>
    <swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
      <swiper-item class="swiper-box-item">
      	<scroll-view class="list" scroll-y>
      		<view class="setup-item flex-cent-bet"  @click="goPage" data-path="/pages/association/touPiaoOper/touPiaoOper"data-page='1'>
      			<view class="setup-item-left">社宾功能投票（重在参与）</view>
      			<view class="setup-item-right flex-cent">
      		    <text>105</text>
      		  </view> 
      		</view>
          <view class="heng"></view>
          <view class="setup-item flex-cent-bet" @click="goPage" data-path="/pages/association/touPiaoOper/touPiaoOper"data-page='1'>
          	<view class="setup-item-left">众选深圳创业社团主席投票</view>
          	<view class="setup-item-right flex-cent">
              <text>125</text>
            </view> 
          </view>
      	</scroll-view>
      </swiper-item>
      <swiper-item class="swiper-box-item">
      	<scroll-view class="list" scroll-y>
      		<view class="setup-item flex-cent-bet" @click="goPage" data-path="/pages/association/touPiaoOper/touPiaoOper" data-page='2'>
      			<view class="setup-item-left flex-cent"><view class="tp-wcj flex-cent">未参加</view>社宾功能投票（重在参与）</view>
      			<view class="setup-item-right flex-cent">
      		    <text>105</text>
      		  </view> 
      		</view>
      		<view class="heng"></view>
      		<view class="setup-item flex-cent-bet wcj-back" @click="goPage" data-path="/pages/association/touPiaoOper/touPiaoOper" data-page='2'>
      			<view class="setup-item-left flex-cent"><view class="tp-wcj tp-ycj flex-cent">已参加</view>众选深圳创业社团主席投票</view>
      			<view class="setup-item-right flex-cent">
      		    <text>125</text>
      		  </view> 
      		</view>
      	</scroll-view>
      </swiper-item>
    </swiper>
    <view class="join-btn">
      <button class="conf-btn" type="primary">
        <view class="flex-cent-cent">
          <view class="flex-cent-cent toup-jia">
          	<view class="iconfont icon-jiahao" ></view>
          </view>
          <view class="">创建投票</view>
        </view>
    </button>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex:0,
			};
		},
    onLoad() {
    	uni.setNavigationBarColor({
    	  frontColor:'#ffffff',
    	  backgroundColor: '#ff665b',
    	})
    },
    methods: {
      async changeTab(e) {
        console.log("changeTab", e.detail.current)
      	let index = e.detail.current;
      	this.topTab(index);
      	
      },
    	topTab(index) { //点击tab-bar
    		this.tabIndex = index;
    	},
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
      	uni.navigateTo({
      		url: path+"?page="+ page
      	})
      }
    },
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7; 
  }
  .wcj-back{
    background-color: #f6f7fa;
  }
  .tp-wcj{
    height: 44upx;
    font-size: 24upx;
    background-color: #ff665b;
    border-radius: 5upx;
    text-align: center;
    color: #fff;
    font-weight: normal;
    padding: 0 12upx;
    margin-right: 10upx;
  }
  .tp-ycj{
    background-color: #fda57e;

  }
  .join-btn{
    .conf-btn{
      background-color: #fff;
      background: #fff;
      
      color: #ff665b;
      >view{
        height: 100%;
      }
    }
  }
  .toup-jia{
    width: 50upx;
    height: 50upx;
    border-radius: 50upx;
    margin-right: 10upx;

    background-image: linear-gradient(120deg, 
      #fda57e 0%, 
      #e43c40 100%);
      color: #fff;
     .iconfont{
       font-size: 38upx;
     }
  }
  .jianz-top{
    width: 100%;
    height: 62upx;
    background-color: #ff665b;
    color: #fff;
    font-size: 24upx;
    padding: 0 30upx;
  }
  .top-tab{
    width: 100%;
    height: 100upx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-bottom: #e5e7eb solid 1upx ;
    box-sizing: border-box;
    >view{
      height: 100upx;
      line-height: 100upx;
      font-size: 28upx;
      box-sizing: border-box;
      position: relative;
      >view{
        position: absolute;
        width: 2upx;
        height: 40upx;
        right:-140upx;
        top:30upx;
        background-color: #e5e7eb;
      }
    }
    .tab-active{
      color: #ff665b;
      .iconfont{
        color: #5788ff;
      }
      border-bottom: #ff665b solid 6upx;
    }
  }
  .swiper-box{
    background-color: #f1f3f7;
    min-height: calc(100vh - 182upx)
  }
  .setup-item{
    height: 115upx;
  }
  .setup-item .setup-item-left {
    font-size:34rpx;
    font-weight: 700;
  }

  .setup-item .setup-item-right text {
    color: #ff665b;
  }

</style>
