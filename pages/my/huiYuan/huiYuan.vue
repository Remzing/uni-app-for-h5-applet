<template>
	<view>
		<view class="">
			<view class="hui-top flex-cent-bet">
				<image :src="user_photo||'../../../static/shuijiao.jpg'" mode=""></image>
				<view class="">
					Hi！了解等级制度，有助于快速提升，获得更多积分，从而提升影响力，获得更大的资源和人脉！
				</view>
			</view>
			
			<swiper class="swiper-block" :indicator-dots="true" previous-margin="110upx" next-margin="110upx" current="1" @change="swiperChange">
			  <block v-for="(item,index) in settingGradeList" :key="index">
			    <swiper-item class="swiper-item">
						<view class="hui-item-box" :class="(swiperIndex==index) ? 'active' : ''">
							<block>
								<view class="lev-top flex-cent-cent">
									<image class="zhuanshi" :src="$domain+item.grade_icon" mode=""></image>
									<view class="">{{item.grade_name}}</view>
								</view>
								<view class="lev-top-tip flex-cent-cent">
									<view class="">影响力：{{item.influence_min||0}}-{{item.influence_max||0}}</view>
								</view>
								<view class="bot-border"></view>
								<view class="lev-sheq flex-cent-cent">
									<view class="iconfont icon-shequn"></view>
									<view class="">
										{{item.association_num||0}}个
									</view>
								</view>
								<view class="lev-jies">
									<text>
										{{item.explain||''}}
									</text>
								</view>
							</block>
						</view>
			    </swiper-item>
			  </block>
			</swiper>
			<view class="hui-tips">
				<text>
					加入更多社群，查看更多对你感兴趣的人
					加入1个社群可获得20访客记录，获得人脉越多，
					机会也就越多
				</text>
			</view>
			<view class="tips-btn">
				<button class="conf-btn" type="primary">马上查找</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoData: {},
				settingGradeList: [],
				user_photo:'',
				imgUrls: [
				  '../../../static/shuijiao.jpg',
				  '../../../static/shuijiao.jpg',
				  '../../../static/shuijiao.jpg',
				],
				indicatorDots: false,
				
				autoplay: false,
				
				interval: 5000,
				
				duration: 1000,
				swiperIndex:1

			};
		},
		onLoad() {
			this.init()
		},
    methods:{
			init(){
				this.$request({
					// 我的页面初始化
					url:'association/client/memberCenter/memberCenterInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data
						this.settingGradeList = _data.settingGradeList
						this.user_photo = _data.user_photo
					}
				})
			},
			swiperChange(e) {
			  this.swiperIndex = e.detail.current
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
		background-color: #5788ff;

	}
	.bot-border{
		margin: 8upx 0;
	}
	.lev-top{
		.iconfont{
		}
		>view:nth-child(2){
			font-size: 34upx;
			font-weight: 700;
			line-height: 52upx;
			color: #353535;
		}
	}
	.lev-top-tip{
		font-size: 24upx;
		line-height: 52upx;
		color: #353535;
	}
	.lev-sheq{
		height: 60upx;
		.iconfont{
			color: #5788ff;
			font-size: 44upx;
			margin-right: 8upx;
		}
	}
	.lev-jies{
		font-size: 24upx;
		line-height: 44upx;
		color: #353535;
	}
	.tips-btn{
		display: flex;
		justify-content: center;
		margin-top: 10upx;
		.conf-btn{
			width: 350upx;
			height: 88upx;
			line-height: 88upx;
			background-color: #fff100;
			border-radius: 44upx;
			color: #353535;
			background-image:unset;
			font-size: 34upx;
		}
	}
	.hui-tips{
		width: 100%;
		font-size: 28upx;
		line-height: 44upx;
		color: #ffffff;
		text-align: center;
	}
	.hui-top{
		width: 100%;
		height: 180upx;;
		background-color: #5788ff;
		padding: 0 40upx;
		>view{
			font-size: 28upx;
			line-height: 44upx;
			color: #ffffff;
			width: 509upx;
		}
		image{
			width: 130upx;
			height: 130upx;
			border-radius: 130upx;
			background-color: #e2e4e9;
		}
	}
	.swiper-block{
	  width: 100%;
		height: 730upx;
		margin-top: -40upx;
	}
	
	.swiper-item{
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  overflow:unset;
		.hui-item-box{
			border-radius: 15upx;
			padding: 30upx;
			width:440upx;
			height: 490upx;
			background-color: #ffffff;
			box-shadow: 0px 8px 12px 0px 
		rgba(151, 160, 202, 0.5);
			z-index: 1;
		}
		
		
	}
	
	.active{
	  transform: scale(1.2);
	  transition:all .2s ease-in 0s;
	  z-index: 20;
	  opacity: 1;
	}
</style>
