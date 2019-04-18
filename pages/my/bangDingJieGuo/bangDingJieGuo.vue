<template>
	<view>
		<view class="">
			<view class=" flex-cent-cent succ-box">
		    <view class="succ-ico flex-cent-cent">
		    	<view class="iconfont icon-xuanze" ></view>
		    </view>
				<view class="succ-txt">绑定成功</view>
			</view>
		  <view class="flex-cent-cent"><button class="conf-btn rads" type="primary" @click="close()">关闭</button></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page:1, //1提交实名认证
			};
		},
		onLoad(options) {
			this.options = options
			this.init()
		},
		methods:{
			init(){
				
			},
			close(){
				uni.navigateBack()
			},
		}
	}
</script>

<style lang="scss">
  .succ-box{
    flex-direction: column;
    margin-top: 150upx;
    .succ-ico{
      width: 150upx;
      height: 150upx;
      border-radius: 150upx;
      background-image: linear-gradient(120deg, 
        #39abf8 0%, 
        #7184fe 100%);
      box-shadow: 0px 8upx 12upx 0px 
        rgba(151, 160, 202, 0.5);
      .iconfont{
        font-size: 78upx !important;
        color: #fff !important;
      }
      
    }
    .succ-txt{
      font-size: 34upx;
      font-weight: 700;
      margin: 16upx 0 0upx;
    }
    
  }
  .conf-btn{
    width: 400upx;
    height: 98upx;
    line-height: 98upx;
    background-image: linear-gradient(120deg, 
      #39abf8 0%, 
      #7184fe 100%);
    box-shadow: 0px 8upx 12upx 0px 
      rgba(151, 160, 202, 0.5);
    border-radius: 49upx;
    font-size: 36upx;
    margin-top: 50upx;
  }
</style>
