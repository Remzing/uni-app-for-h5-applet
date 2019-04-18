<template>
	<view>
		<view class="">
      <view class="setup-item flex-cent-bet">
      	<view class="setup-item-left">
          <input type="text" placeholder="点击输入内容" value="" />
        </view>
      	<view class="setup-item-right flex-cent">
        </view>
      </view>
      <view class="setup-upimg-img flex-cent-cent" @click="uoImgHandle">
      	<view v-if="!headImg" class="iconfont icon-shangchuantupian" ></view>
        <image v-if="headImg" :src="headImg" mode=""></image>
      </view>
			<view class="join-btn"><button class="conf-btn" type="primary" :style="{backgroundImage:backImage}"> 保存</button></view>
		</view>
    
	</view>
</template>

<script>
	export default {
		data() {
			return {
        page:1,//1见证，2探访，3感恩，4引荐
        themeColor:'#5788ff',
        backImage:'linear-gradient(120deg, #bd7eff 0%, #6247f2 100%)',
        themeTitle:'见证',
			};
		},
    onLoad(options) {
    	this.page = options.page
      this.page = options.page
      if(this.page==1){//见证
        this.themeColor = '#19c7ad'
        this.themeTitle = '见证',
        this.backImage='linear-gradient(450deg, #37dfc8 0%, #01b49a 100%)'
      }else if(this.page==2){//探访
        this.themeColor = '#5788ff'
        this.themeTitle = '探访'
        this.backImage='linear-gradient(120deg, #06c8d9 0%, #5d51ff 100%)'
      }else if(this.page==3){//感恩
        this.themeColor = '#f12154'
        this.themeTitle = '感恩'
        this.backImage='linear-gradient(120deg, #e79c25 0%, #f12054 100%)'
      }else if(this.page==4){//引荐
        this.themeColor = '#7f59f6'
        this.themeTitle = '引荐'
        this.backImage='linear-gradient(120deg, #bd7eff 0%, #6247f2 100%)'
      }
      let that = this
      uni.setNavigationBarTitle({
        title: (that.themeTitle||'')+'详细记录'
      });
      uni.setNavigationBarColor({
        frontColor:'#ffffff',
        backgroundColor: that.themeColor||'',
      })
    }
	}
</script>

<style lang="scss">
  page, .setup-item{
    background-color: #f1f3f7;
  }
  .setup-upimg-img{
    width: 180upx;
    height: 194upx;
    background-color: #f1f3f7;
    border: solid 1upx #e5e7ed;
    margin: 30upx;
    .iconfont{
      font-size: 80upx;
      color: #c1c3c8;
    }
    image{
      width: 100%;
      height: 100%;
    }
  }
  .ping-top{
    width: 100%;
    height: 60upx;
    background-color: #f1f3f7;
    padding: 0 30upx;
    font-size: 24upx;
  }
  .join-btn{
    .conf-btn{
      background-image: linear-gradient(450deg, 
		#37dfc8 0%, 
		#01b49a 100%);
    }
  }
</style>
