<template>
	<view>
		<view class="setup-top flex-cent">
			当前社群：深圳创客精英会
		</view>
    <view class="setup-upimg flex-cent-cent">
    	<view class="setup-upimg-img flex-cent-cent" @click="uoImgHandle">
    		<view v-if="!headImg" class="iconfont icon-shangchuantupian" ></view>
        <image v-if="headImg" :src="headImg" mode=""></image>
    	</view>
      <text>上传更换</text>
    </view>
    <view class="heng"></view>
    <view class="setup-item flex-cent-bet"  @click="goPage" data-path="/pages/association/setupFee/setupFee" data-page='1'>
    	<view class="setup-item-left">费用</view>
    	<view class="setup-item-right flex-cent">
         <text>请设置</text>
         <view class="iconfont icon-youjiantou" ></view>
      </view>
    </view>
    <view class="setup-item flex-cent-bet">
    	<view class="setup-item-left">审核</view>
    	<view class="setup-item-right flex-cent">
         <switch @change="switch2Change" color="#5788ff" />
      </view>
    </view>
    <view class="setup-item flex-cent-bet"  @click="goPage" data-path="/pages/association/setupFee/setupFee" data-page='2'>
    	<view class="setup-item-left">活动</view>
    	<view class="setup-item-right flex-cent">
         <text>请设置</text>
         <view class="iconfont icon-youjiantou" ></view>
      </view>
    </view>
    <view class="set-area">
      <view class="">介绍</view>
    	<textarea value="" placeholder="请描述社群作用以及具体给会员带来的价值值" />
      <view class="countnum"><text>0/100</text></view>
    </view>
    <view class="join-btn"><button class="conf-btn" type="primary">保存</button></view>
	</view>
</template>

<script>
	import util from '@/common/utils/util';
	export default {
		data() {
			return {
				headImg:''
			};
		},
    methods: {
      uoImgHandle(){
        util.upImages(1,[],(res)=>{
          this.headImg = res.tempFilePaths
        })
      },
      switch2Change(e) {
        console.log('switch2 发生 change 事件，携带值为', e.target.value)
      },
      goPage(e){
        console.log('goPage',e)
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
        uni.navigateTo({
        	url: path+'?page='+page
        })
      }
    },
    
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
  .setup-upimg{
    background-color: #fff;
    height: 318upx;
    flex-direction: column;
    .setup-upimg-img{
      width: 180upx;
      height: 194upx;
      background-color: #f1f3f7;
      border: solid 1upx #e5e7ed;
      margin-bottom: 18upx;
      .iconfont{
        font-size: 80upx;
        color: #c1c3c8;
      }
      image{
        width: 100%;
        height: 100%;
      }
     
    }
    text{
      font-size: 24upx;
      color: #969aa6;
    }
  }
  .setup-top{
    width: 100%;
    height: 68upx;
    background-color: #5788ff;
    padding: 0 30upx;
    font-size: 24upx;
    color: #ffffff;
  }
</style>
