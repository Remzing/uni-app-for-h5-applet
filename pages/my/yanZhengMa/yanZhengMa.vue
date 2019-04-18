<template>
	<view>
    <view class="yinh-cont">
    	<view class="yinh-tips flex-cent">
    		已发送验证码到 <text class="col-5788ff">1331234231</text>手机号码啊
    	</view>
      <view class="form-bo">
      	
        <view class="form-bo-item flex-cent-bet">
          <view class="flex-cent">
          	<view class="">验证码</view>
          	<input type="text" value="" placeholder="输入验证码" />
          </view>
        	<view class="chonf">60s后重发</view>
        </view>
      </view>
    </view>
		<view class="bot-min-btn flex-cent-cent">
      <button class="conf-btn rads" type="primary" @click="goPage" data-path="/pages/my/bangDingYHK/bangDingYHK" >
        下一步
      </button>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
    methods: {
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
    background-color: #f4f6fb;
  }
  .form-bo{
    background-color: #fff;
    padding: 0 30upx;
    .form-bo-item{
      height: 110upx;
      >view>view:first-child{
        font-weight: 700;
        color: #555555;
        min-width: 120upx;
        margin-right: 20upx;
        text-align: left;
      }
      .form-bo-name{
        
      }
    }
  }
  .chonf{
    background: #ddd;
    border-radius: 50upx;
    font-size: 22upx;
    padding: 8upx 20upx;
    color: #fff;
  }
  .yinh-tips{
    color: #bbbbbb;
    height: 88upx;
    padding: 30upx;
  }
  .yinh-cont{
    min-height: calc( 100vh - 110upx );
  }
  .bot-min-btn{
    
    .conf-btn{
      background-image: unset;
      width: 670upx;
      height: 88upx;
      line-height: 88upx;
      background-color: #dbdee6;
      border-radius: 10upx;
      margin: 0 40upx;
      font-size: 34upx;
      box-shadow: unset;
      border: unset;
      .iconfont{
        margin-right: 10upx;
        font-size: 34upx;
      }
    }
  }
  .yingh-item{
    width: 690upx;
    height: 200upx;
    margin: 0 30upx 36upx;
    padding: 20upx 30upx 30upx;
    background-color: #526ff2;
    box-shadow: 0px 9upx 8upx 0px 
      rgba(82, 111, 242, 0.35);
    border-radius: 15upx;
    .yingh-name{
      font-size: 28upx;
      font-weight: 700;
      color: #ffffff;
    }
    .yingh-user{
      font-size: 24upx;
      color: #ffffff;
    }
    .yingh-id{
      font-size: 36upx;
      font-weight: 700;
      color: #ffffff;
      margin-top: 12upx;
    }
  }
  
</style>
