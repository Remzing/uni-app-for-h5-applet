<template>
	<view>
		<view class="sous-inp flex-cent-bet">
			<input type="text" value="" placeholder="输入要搜索的关键词" placeholder-style="color:#bbb;"/>
      <view class="iconfont icon-sousuo"  @click="goPage" data-path="/pages/association/souSuoResult/souSuoResult"></view>
		</view>
    <view class="">
      <view class="sou-tips">搜索指定内容</view>
      <view class="sou-cont">
      	<view class="sou-cont-item">电子名片</view>
      	<view class="sou-cont-item">按照行业</view>
      	<view class="sou-cont-item">电子名片</view>
      	<view class="sou-cont-item">按照行业</view>
      	<view class="sou-cont-item">社群搜索</view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page:''
			};
		},
    onLoad(options) {
    	this.page=options.page
    },
    methods:{
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
      	uni.navigateTo({
      		url: path+'?page='+page
      	})
      }
    }
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
  .sou-tips{
    font-size: 24upx;
    text-align: center;
    margin: 80upx 0 40upx;
  }
  .sou-cont{
    display: flex;
    flex-wrap: wrap;
    .sou-cont-item{
      font-size: 30upx;
      line-height: 52upx;
      color: #5788ff;
      margin-left: 100upx;
      margin-bottom: 30upx;
    }
  }
  .sous-inp{
    width: 670upx;
    height: 88upx;
    margin: 40upx;
    padding: 0 20upx;
    background-color: #ffffff;
    box-shadow: 0px 3upx 2upx 0px 
      rgba(220, 220, 220, 0.5);
    border-radius: 5upx;
    input{
      font-size: 30upx;
      color: #bbbbbb;
    }
    .iconfont{
      font-size: 42upx;
      color: #dddddd;
    }
  }
</style>
