<template>
	<view>
		<view class="fangk-top flex-cent-bet" >
			<view class="asso-img flex-cent">
				<image src="../../../static/shuijiao.jpg" mode=""></image>
				<view class="asso-txt">
					<view class="">人脉影响力 109</view>
					<view class="">
						<text>今日108 访客</text>
					</view>
				</view>
			</view>
			<view class="iconfont icon-youjiantou"></view>
		</view>
		<view class="fang-tishen flex-cent-bet">
			<view class="fang-tishen-left flex-cent">
				<view class="iconfont icon-lipin"></view>
				<view class="">提升影响力，获得更多人脉资源！</view>
			</view>
			<view class=""><button class="conf-btn rads" type="primary">马上提升</button></view>
		</view>
		<view class="heng"></view>
		<view class="fang-adimg">
			<image src="../../../static/shuijiao.jpg" mode=""></image>
		</view>
		<view class=" selc-item flex-cent-bet">
		  <view class="selc-item-left flex-cent">
		    
		  	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
		  	<view class="selc-item-txt flex-cent">
		      <view class="selc-item-name"> 无限次</view>
		      <view class="selc-item-job flex-cent">
		        <view class="flex-cent"><view class="iconfont icon-hangye"></view>软件开发</view>
		        <view class="flex-cent"><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
		      </view>
		    </view>
		  </view>
			<view class="fang-rig">
				<view class="">12.26</view>
				<view class=""><button class="conf-btn rads" type="primary">查看名片</button></view>
			</view>
		</view>
		<view class="fixed-bot">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				influence:'',
				visitor_today:'',
				user_photo:'',
				visitor_banner_list:[],
			};
		},
		onLoad() {
			this.init()
		},
    methods:{
			init(){
				this.$request({
					// 访客初始化
					url:'association/client/visitor/visitorInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data
						this.influence = _data.influence||''
						this.visitor_today = _data.visitor_today||''
						this.user_photo = _data.user_photo||''
						this.visitor_banner_list = _data.visitor_banner_list||[]
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
	.fixed-bot{
		position: fixed;
		bottom: 0;
		width: 749upx;
		height: 252upx;
		background-image: linear-gradient(0deg, 
			#ffffff 0%, 
			#ffffff 100%);
	}
	.fang-rig{
		>view:nth-child(1){
			text-align: center;
			font-size: 24upx;
			line-height: 52upx;
		}
	}
	.selc-item{
	  padding: 20upx 30upx 20upx 30upx;
	  border-bottom: #e5e7eb solid 1upx;
	  .selc-item-left{
	    .selc-item-img{
	      width: 100upx;
	      height: 100upx;
	      margin-right: 20upx;
	
	      image{
	        width: 100upx;
	        height: 100upx;
	        border-radius: 100upx;
	        background-color: #a1a5af;
	      }
	    }
	    .selc-item-txt{
	      flex-direction: column;
	      align-items: flex-start;
	    }
	    .selc-item-name{
	      font-size: 34upx;
	      font-weight: 700;
	    }
	    .selc-item-job{
	      font-size: 24upx;
	      view{
	        font-size: 24upx;
	      }
	      color: #969aa6;
	      .iconfont{
	        font-size: 26upx;
	        margin-right: 10upx;
	      }
	      .icon-jiaruqunzu{
	        margin-left: 20upx;
	      }
	    }
	  }
	  .selc-item-type{
	    width: 46upx;
	    height: 46upx;
	    background-image: linear-gradient(120deg, 
	      #39abf8 0%, 
	      #7184fe 100%);
	    box-shadow: 0px 3upx 3upx 0px 
	      rgba(109, 135, 254, 0.5);
	    border-radius: 23upx;
	    font-size: 20upx;
	    color: #fff;
	  }
	}
	.fang-adimg{
		image{
			width: 750upx;
			height: 263upx;
		}
	}
	.fang-tishen{
		padding: 0 30upx;
		height: 126upx;
		.fang-tishen-left{
			.iconfont{
				color: #5788ff;
				font-size: 34upx;
				margin-right: 10upx;
			}
			>view:nth-child(2){
				font-size: 28upx;
				color: #353535;
			}
		}
	}
	.fangk-top{
		width: 100%;
		height: 195upx;
		background-color: #5788ff;
		padding: 0 30upx;
		image{
			width: 130upx;
			height: 130upx;
			border-radius: 130upx;
			background-color: #e2e4e9;
			margin-right: 20upx;
		}
		
		.asso-txt{
			view:nth-child(1){
				font-size: 34upx;
				line-height: 52upx;
				color: #ffffff;
			}
			view:nth-child(2){
				font-size: 24upx;
				line-height: 52upx;
				color: #ffffff;
			}
		}
		.iconfont{
			color: #fff;
		}
	}
</style>
