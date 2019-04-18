<template>
	<view>
		
    <view class="bao-box flex-cent">
    	<view class="bao-item flex-cent-cent" @click="showMiddlePopup()">
    		<view class="iconfont icon-yuechongzhi"></view>
        <view class="">我的实名动态</view>
    	</view>
      <view class="bao-item flex-cent-cent" @click="goPage"  data-path="/pages/my/woDeJianZheng/woDeJianZheng" data-page='4'  >
      	<view class="iconfont icon-tixian"></view>
        <view class="">我的引荐</view>
      </view>
      <view class="bao-item flex-cent-cent" @click="goPage"  data-path="/pages/my/woDeJianZheng/woDeJianZheng" data-page='2'>
      	<view class="iconfont icon-yinhangqia"></view>
        <view class="">我的探访</view>
      </view>
    </view>
		<view class="bao-box flex-cent" style="border-top: #e5e7ed solid 1upx;">
			<view class="bao-item flex-cent-cent" @click="goPage"  data-path="/pages/my/woDeJianZheng/woDeJianZheng" data-page='3'>
				<view class="iconfont icon-yuechongzhi"></view>
		    <view class="">我的感恩</view>
			</view>
		  <view class="bao-item flex-cent-cent"  @click="goPage"   data-path="/pages/my/woDeJianZheng/woDeJianZheng" data-page='1'>
		  	<view class="iconfont icon-tixian"></view>
		    <view class="">我的见证</view>
		  </view>
		  <view class="bao-item flex-cent-cent">
		  	<view class="iconfont icon-yinhangqia"></view>
		    <view class="">我的投票</view>
		  </view>
		</view>
    <view class="heng"></view>
    <!-- <view class="bao-tip flex-cent">
    	社宾服务
    </view> -->
    <view class="bao-box flex-cent">
    	<view class="bao-item flex-cent-cent">
    		<view class="iconfont icon-huiyuan"></view>
        <view class="">我的专栏</view>
    	</view>
      <view class="bao-item flex-cent-cent">
      	<view class="iconfont icon-xueyuan"></view>
        <view class="">我的活动</view>
      </view>
      <view class="bao-item flex-cent-cent">
      	<view class="iconfont icon-shuyou"></view>
        <view class="">我的书籍</view>
      </view>
    </view>
	</view>
</template>

<script>
	
	export default {
	  
		data() {
			return {
				showPopup: false,
				popType:'bottom',
        popState:0, //1,2,3
			};
		},
    methods: {
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
        uni.navigateTo({
          url: path+'?page='+page
        })
      },
    	//展示居中 popup
    	showMiddlePopup() {
    		this.hidePopup();
    		this.popType = 'bottom';
    		this.showPopup = true;
    	},
    	//统一的关闭popup方法
    	hidePopup() {
    		this.showPopup = false;
    	  this.popState=1
    	},
      tixianHandle(state){
        this.popState = state+1
        if (this.popState==4) {
        	this.hidePopup()
        }
      }
    },
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
  .uni-popup-bottom{
    height:auto;
    .tixian-top{
      padding: 30upx;
      .tixian-fot{
        font-size: 34upx;
        font-weight: 700;
      }
      .iconfont{
        font-size: 40upx;
        color: #bbbbbb;
      }
    }
  }
  .cash-inp-tit{
    font-size: 24upx;
    text-align: left;
  }
  .cash-inp{
    height: 229upx;
    border-radius: 10upx;
    padding: 20upx 15upx 20upx 26upx;
    margin:0 30upx 30upx;
    
    .cash-inp-set{
      border-bottom: #e5e7eb solid 1upx;
      >view{
        font-size: 50upx;
        margin-right: 20upx;
      }
      input{
        text-align: left;
        font-size: 36upx;
      }
    }
    .cash-inp-tip{
      font-size: 24upx;
      color: #969aa6;
      text-align: left;
      margin-top: 6upx;
    }
  }
  
  .bao-tip{
    height: 72upx;
    padding: 0 30upx;
    font-size: 24upx;
    font-weight: 700;
    border-bottom: #e5e7ed solid 1upx;
    background-color: #fff;
  }
  .bao-box{
    background-color: #fff;
    .bao-item{
      height: 175upx;
      flex-direction: column;
      border-right: #e5e7ed solid 1upx;
      flex: 1;
    }
    .iconfont{
      font-size: 42upx;
      color: #5788ff;
    }
  }
  .qianb-head{
    width: 100%;
    height: 270upx;
    background-color: #5788ff;
    position: relative;
    .yu-box{
      flex-direction: column;
      .yu-num{
        font-size: 100upx;
        color: #ffffff;
      }
      .yu-txt{
        font-size: 24upx;
        line-height: 52upx;
        color: #ffffff;
      }
    }
    .jiaomin{
      position: absolute;
      right: 30upx;
      top: 20upx;
      font-size: 24upx;
      color: #ffffff;
      text-underline-position: above;
    }
  }
</style>
