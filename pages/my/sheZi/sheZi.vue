<template>
	<view>
    
		<view class="mar-set">
      
			<view class="myoper-item flex-cent-bet cell-bot"  >
				<view class="myoper-item-left flex-cent">
			    <view class="">邀请好友加入社宾</view>
				</view>
			  <view class="myoper-item-right">
			  	<view class="iconfont icon-youjiantou"></view>
			  </view>
			</view>
      <view class="myoper-item flex-cent-bet" >
      	<view class="myoper-item-left flex-cent">
          <view class="">开通社宾微信服务</view>
      	</view>
        <view class="myoper-item-right">
          <text>已绑定</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="heng"></view>
      <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/zhangHaoAnQuan/zhangHaoAnQuan" data-page='1' >
      	<view class="myoper-item-left flex-cent">
          <view class="">账号安全</view>
      	</view>
        <view class="myoper-item-right">
          <text v-if="infoData.phone">已绑定 </text>
          <text v-if="!infoData.phone">未绑定 </text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/guanYuWoMen/guanYuWoMen" >
      	<view class="myoper-item-left flex-cent">
          <view class="">关于社宾</view>
      	</view>
        <view class="myoper-item-right">
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/changJianWenTi/changJianWenTi" data-page='1' >
      	<view class="myoper-item-left flex-cent">
          <view class="">常见问题与帮助</view>
      	</view>
        <view class="myoper-item-right">
         	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet cell-bot" @click="goPage" data-path="/pages/my/yiJianFanKui/yiJianFanKui" >
      	<view class="myoper-item-left flex-cent">
          <view class="">意见反馈</view>
      	</view>
        <view class="myoper-item-right">
          <text class="">在这里向我们吐槽</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
     
      
      <view class="heng"></view>
      <view class="myoper-item flex-cent-bet cell-bot">
      	<view class="myoper-item-left flex-cent">
          <view class="">官方网站</view>
      	</view>
        <view class="myoper-item-right">
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet cell-bot" @click="goPage" data-path="/pages/my/xieYi/xieYi" data-page='2' >
      	<view class="myoper-item-left flex-cent">
          <view class="">服务协议</view>
      	</view>
        <view class="myoper-item-right">
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet cell-bot" @click="goPage" data-path="/pages/my/xieYi/xieYi" data-page='3' >
      	<view class="myoper-item-left flex-cent">
          <view class="">隐私策略</view>
      	</view>
        <view class="myoper-item-right">
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
       
		</view>

	</view>
</template>

<script>

	export default {
    components: {
    },
		data() {
			return {
				infoData:{}
				
			};
		},
		onLoad() {
			this.init()
		},
    methods:{
			init(){
				this.$request({
					// 设置页面初始化
					url:'/association/client/setting/settingInit.do',
					data: {
					},
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						this.infoData =  _data
					}
				})
			},
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
      	uni.navigateTo({
      		url: path+'?page='+page
      	})
      },
			
    }
	}
</script>

<style lang="scss">
	page{
		background-color: #f1f3f7;
	}
  .bianj-head{
    flex-direction: column;
    height:370rpx;
    padding: 40upx 0;
    image{
      width: 130upx;
      height: 130upx;
      border-radius: 130upx;
      background-color: #e2e4e9;
      border: solid 2upx #5788ff;
    }
    .bianj-head-name{
      font-size: 36upx;
      font-weight: 700;
      line-height: 52upx;
      color: #353535;
    }
    .bianj-head-sex{
      >view{
        color: #fff;
        width: 118upx;
        height: 57upx;
        background-color: #5788ff;
        border-radius: 28upx;
        font-size: 30upx;
        margin: 0 10upx;
        .iconfont{
          font-size: 34upx;
          margin-right: 8upx;
        }
      }
      .nosel{
        background-color: #ffffff;
        border: solid 1upx #dddddd;
        color: #bbbbbb;
        
      }
    }
  }
  .cell-bot:after{
    left: 0;
    right: 0;
  }
  .mar-set{
    margin-bottom: 100upx;
  }
  .myoper-item{
		background: #fff;
    padding: 0 40upx;
    height: 112upx;
    .myoper-item-left{
      
      view{
        font-size: 30upx;
      }
    }
    .myoper-item-right{
			display: flex;
			align-items: center;
      text{
        font-size: 30upx;
        line-height: 52upx;
        color: #5788ff;
      }
      .iconfont{
        color: #b6b7b7;
        margin-left: 14upx;
      }
    }
  }
</style>
