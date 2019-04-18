<template>
	<view>
		<view class="toup-head">
			<view class="toup-head-top">社宾功能投票（重在参与）</view>
			<view class="toup-head-bot">
        <text class="col-19c7ad">于</text>
        2017-04-20 10:30
        <text class="col-19c7ad">发布  李珊珊</text>
        <text class="col-5788ff">[深圳创客邦精英会]</text>
      </view>
		</view>
    <view class="toup-tips">
    	为了获得更多好的用户体验，特公布以下功能需要社宾的会员抽出宝贵的时间对以下功能进行投票，以便我们做好进一步规划和上线安排！<text class="">[单选]</text>
    </view>
    <view class="" v-if="page==1">
    	<view class="toup-item flex-cent-bet">
    		<view class="">书友会</view>
    		<view class=""><button class="conf-btn" type="primary"> 投票</button></view>
    	</view>
    	<view class="toup-item flex-cent-bet">
    		<view class="">精英会</view>
    		<view class=""><button class="conf-btn" type="primary"> 投票</button></view>
    	</view>
    	<view class="toup-item flex-cent-bet">
    		<view class="">社宾商城</view>
    		<view class=""><button class="conf-btn" type="primary"> 投票</button></view>
    	</view>
    </view>
    <view class="" v-if="page==2">
    	<view class="toup-item toup-do flex-cent-bet">
    		<view class="">书友会</view>
    		<view class="flex-cent">
          <view class="">210票</view>
          <view class="toup-do-count flex-cent">20%</view>
        </view>
    	</view>
    	
    </view>
    
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page:1,//
			};
		},
    onLoad(options) {
      this.page = options.page
    	uni.setNavigationBarColor({
    	  frontColor:'#ffffff',
    	  backgroundColor: '#ff665b',
    	})
    },
	}
</script>

<style lang="scss">
  .toup-item{
    width: 690upx;
    height: 80upx;
    background-color: #f1f3f7;
    border-radius: 8upx;
    margin: 0 30upx 20upx;
    padding-left: 23upx;
    .conf-btn{
      background-image: linear-gradient(120deg, 
      #fda57e 0%, 
      #e43c40 100%);
      box-shadow: 0px 3px 3px 0px 
		rgba(204, 44, 81, 0.5);
      border-radius: 100upx;
      font-size: 24upx;
    }
    
  }
  .toup-do{
    background-color: #ffffff;
    border-radius: 8upx;
    border: solid 1upx #ff665b;
    .toup-do-count{
      height: 78upx;
      width: 134upx;
      padding: 0 10upx;
      margin-left: 8upx;
      justify-content: flex-end;
      background-image: linear-gradient(120deg, 
        #fda57e 0%, 
        #e43c40 100%);
        color: #fff;
       font-size: 24upx;
     }
  }
  .toup-tips{
    padding: 30upx;
    text{
      color: #ff665b;
    }
  }
  .toup-head{
    height: 156upx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30upx;
    border-bottom: #e5e7ed solid 1upx;
    .toup-head-top{
      font-size: 34upx;
      font-weight: 700;
      color: #353535;
      line-height: 52upx;
    }
    .toup-head-bot{
      font-size: 24upx;
      color: #969aa6;
    }
  }
</style>
