<template>
	<view class="cont">
		<view class="">
			<view class="my-top">
        <view class="my-top-box">
        	<view class="my-top-user flex-cent-bet">
        		<view class="my-top-info flex-cent">
        			<image :src="infoData.user_photo||'../../../static/shuijiao.jpg'" mode=""></image>
              <view class="my-top-name">
              	<view class="flex-cent"><text>{{infoData.real_name||infoData.nick_name}}</text> <text>{{infoData.industry_name}}</text>
									
										<image class="zhuanshi" :src="infoData.grade_icon" mode=""></image>
									
								</view>
              	<view class="">影响力<text class="col-ffc000">{{infoData.influence||0}}</text>
								<text v-if="infoData.influence">
									，高于同行<text class="col-ffc000">{{infoData.precent}}</text>
								</text>
								</view>
              </view>
        		</view>
            <view class="iconfont icon-youjiantou"></view>
        	</view>
          <view class="oper-box flex-cent-bet">
          	<view class="oper-item flex-cent" @click="goPage" data-path="/pages/my/bianJiZiLiao/bianJiZiLiao">
          		<view class="oper-ico flex-cent-cent">
          			<view class="iconfont icon-bianji"></view>
          		</view>
              <view class="oper-txt">编辑资料</view>
          	</view>
            <view class="oper-item flex-cent">
            	<view class="oper-ico flex-cent-cent jiaru">
            		<view class="iconfont icon-jiaruqunzu"></view>
            	</view>
              <view class="oper-txt">加入<text class="col-5788ff">{{infoData.association_num}}</text>社群名额</view>
            </view>
            <view class="oper-item flex-cent">
            	<view class="oper-ico flex-cent-cent .saoyisao">
            		<view class="iconfont icon-saoyisao"></view>
            	</view>
              <view class="oper-txt">扫一扫</view>
            </view>
          </view>
        </view>
				<view class="my-top-back"></view>
			</view>
      <view class="">
      	<view class="myoper-item flex-cent-bet cell-bot" @click="goPage" data-path="/pages/my/huiYuan/huiYuan" data-page='1'>
      		<view class="myoper-item-left flex-cent">
      			<view class="iconfont icon-huiyuanzhongxin"></view>
            <view class="">会员中心</view>
      		</view>
          <view class="myoper-item-right">
            <text>{{infoData.grade_name}}</text>
          	<view class="iconfont icon-youjiantou"></view>
          </view>
      	</view>
        <view class="myoper-item flex-cent-bet cell-bot" @click="goPage" data-path="/pages/my/fangKe/fangKe" data-page='1'>
        	<view class="myoper-item-left flex-cent">
        		<view class="iconfont icon-fangwen1"></view>
            <view class="">访客</view>
        	</view>
          <view class="myoper-item-right">
            <text>已有{{infoData.caller_num||0}}人访问您</text>
          	<view class="iconfont icon-youjiantou"></view>
          </view>
        </view>
        <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/yingXiangLi/yingXiangLi" data-page='1'>
        	<view class="myoper-item-left flex-cent">
        		<view class="iconfont icon-renzheng"></view>
            <view class="">影响力</view>
        	</view>
          <view class="myoper-item-right">
            <text>最高{{infoData.influence||0}}点</text>
          	<view class="iconfont icon-youjiantou"></view>
          </view>
        </view>
        <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/qianBao/qianBao" data-page='1'>
        	<view class="myoper-item-left flex-cent">
        		<view class="iconfont icon-qianbao"></view>
            <view class="">我的钱包</view>
        	</view>
          <view class="myoper-item-right">
            <text>{{infoData.balance||0}}</text>
          	<view class="iconfont icon-youjiantou"></view>
          </view>
        </view>
        <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/woDeDongTai/woDeDongTai" data-page='1'>
        	<view class="myoper-item-left flex-cent">
        		<view class="iconfont icon-dongtai"></view>
            <view class="">我的动态</view>
        	</view>
          <view class="myoper-item-right">
            <text>发布/参与</text>
          	<view class="iconfont icon-youjiantou"></view>
          </view>
        </view>
        <view class="myoper-item flex-cent-bet "  @click="goPage" data-path="/pages/my/bianJiZiLiao/bianJiZiLiaor" data-page='1'>
        	<view class="myoper-item-left flex-cent">
        		<view class="iconfont icon-tuijianjin"></view>
            <view class="">人脉推荐金</view>
        	</view>
          <view class="myoper-item-right">
            <text>人均可得12636元，快领</text>
          	<view class="iconfont icon-youjiantou"></view>
          </view>
        </view>
        <view class="heng"></view>
        <view class="myoper-item flex-cent-bet"  @click="goPage" data-path="/pages/my/renZheng/renZheng" data-page='1'>
        	<view class="myoper-item-left flex-cent">
        		<view class="iconfont icon-renzheng"></view>
            <view class="">成为认证用户</view>
        	</view>
          <view class="myoper-item-right">
            <text>立即认证</text>
          	<view class="iconfont icon-youjiantou"></view>
          </view>
        </view>
        <view class="heng"></view>
        <view class="myoper-item flex-cent-bet"  @click="goPage" data-path="/pages/my/sheZi/sheZi" data-page='1'>
        	<view class="myoper-item-left flex-cent">
        		<view class="iconfont icon-renzheng"></view>
            <view class="">设置</view>
        	</view>
          <view class="myoper-item-right">
          	<view class="iconfont icon-youjiantou"></view>
          </view>
        </view>
        <view class="heng"></view>
      </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoData:{}
			};
		},
		onLoad() {
			
		},
		onShow() {
			this.init()
		},
    methods:{
			init(){
				this.$request({
					// 我的页面初始化
					url:'association/client/setting/mineInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data
						this.infoData = _data
						this.infoData.grade_icon&&(this.infoData.grade_icon=this.$domain+this.infoData.grade_icon)
					}
				})
			},
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
	
  .cell-bot:after{
    left: 0;
    right: 0;
  }
  .myoper-item{
		background-color: #fff;
    padding: 0 40upx;
    height: 125upx;
    .myoper-item-left{
      .iconfont{
        color: #5788ff;
        font-size: 42upx;
        margin-right: 14upx;
      }
      view{
        font-size: 34upx;
      }
    }
    .myoper-item-right{
			display: flex;
			align-items: center;
      text{
        font-size: 24upx;
        line-height: 52upx;
        color: #969aa6;
      }
      .iconfont{
        color: #b6b7b7;
        margin-left: 14upx;
      }
    }
  }
  .my-top{
    position: relative;
    height: 375upx;
    background-color: #fff;

    .my-top-back{
      width: 100%;
      height: 160upx;
      background-color: #5788ff;
    }
    .my-top-box{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: 690upx;
      height: 350upx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 30upx;
      padding: 30upx;
      background-color: #ffffff;
      box-shadow: 0px 8upx 12upx 0px 
        rgba(151, 160, 202, 0.5);
      border-radius: 20upx;
      .my-top-user{
        .my-top-info{
          >image{
            width: 130upx;
            height: 130upx;
            border-radius: 130upx;
            margin-right: 20upx;
          }
        }
        .my-top-name{
          >view:nth-child(1){
            text:nth-child(1){
              font-size: 34upx;
              font-weight: 700;
              margin-right: 12upx;
            }
          }
          >view:nth-child(2){
            font-size: 24upx;
            line-height: 52upx;
          }
          
        }
      }
      .oper-box{
        padding: 0 30upx;
        .oper-item{
          flex-direction: column;
          .oper-ico{
            width: 70upx;
            height: 70upx;
            border-radius: 70upx;
            background-color: #fc735f;
            .iconfont{
              color: #fff;
              font-size: 40upx;
            }
          }
          .oper-txt{
            font-size: 24upx;
            line-height: 52upx;
          }
        }
        
      }
    }
  }
  .icon-youjiantou{
    color: #bbbbbb;
  }
  .saoyisao{
    background-color: #5cc6a0 !important;
  
  }
  .jiaru{
    background-color: #5788ff !important;
  }
</style>
