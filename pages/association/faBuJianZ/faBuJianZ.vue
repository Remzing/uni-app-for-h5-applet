<template>
	<view>
		<view class="shangc-top flex-cent-cent">
			<view class="iconfont icon-shangchuantupian"></view>
			<view class="">上传{{themeTitle}}纪念图</view>
		</view>
    <view class="setup-item flex-cent-bet"  @click="goPage" data-path="/pages/association/jianZhengJiLu/jianZhengJiLu">
    	<view class="setup-item-left">对象</view>
    	<view class="setup-item-right flex-cent">
        <view class="iconfont icon-youjiantou" ></view>
      </view>
    </view>
    <view class="set-area">
    	<textarea value="" :placeholder="themeTitle+'详细记录'" />
      <view class="countnum"><text>0/100</text></view>
    </view>
    <view class="heng"></view>
    <view class="setup-item flex-cent-bet" @click="goPage" data-path="/pages/association/jianzSet/jianzSet">
    	<view class="setup-item-left">设置 </view>
    	<view class="setup-item-right flex-cent">
        <view class="iconfont icon-youjiantou" ></view>
      </view>
    </view>
    <view class="join-btn"><button class="conf-btn" type="primary" :style="{backgroundImage:backImage}"> 发布</button></view>
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
          title: that.themeTitle||''
      });
    	uni.setNavigationBarColor({
        frontColor:'#ffffff',
        backgroundColor: that.themeColor||'',
      })
    },
    methods: {
      goPage(e) {
        let path = e.currentTarget.dataset.path
      	uni.navigateTo({
      		url: path+"?page="+ this.page
      	})
      }
    }
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
  .shangc-top{
    width: 100%;
    height: 300upx;
    background-color: #f1f3f7;
    flex-direction: column;
    color: #bbbbbb;
    view{
      font-size: 24upx;
    }
    .iconfont{
      font-size: 80upx;
    }
  }
</style>
