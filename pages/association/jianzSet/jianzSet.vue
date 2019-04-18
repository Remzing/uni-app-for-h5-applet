<template>
	<view>
		<view class="">
      <view class="ping-top flex-cent">推送显示</view>
      <view class="setup-item flex-cent-bet">
      	<view class="setup-item-left">在首页动态中显示，所有用户都可看到</view>
      	<view class="setup-item-right flex-cent">
          <switch @change="switch2Change" :color="themeColor" />
        </view> 
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
//       uni.setNavigationBarTitle({
//         title: (that.themeTitle||'')
//       });
      uni.setNavigationBarColor({
        frontColor:'#ffffff',
        backgroundColor: that.themeColor||'',
      })
    }
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
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
