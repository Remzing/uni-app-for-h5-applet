<template>
	<view>
		<view class="contmin">
			<block  v-if="infoArr.length>0">
				<view class="heng"></view>
				<view class="jingli-tlt cell-bot">
					<text>当前职业</text>
				</view>
				<block v-for="(item, index) in infoArr" :key='index' v-if="item.is_show">
					<view class="jingli-box flex-cent-bet" >
						<view class="jingli-box-left">
							<view class="">{{item.company}}</view>
							<view class=""><text v-if="item.start_time">{{item.start_time}}-{{item.end_time||''}}，</text>{{item.position}}</view>
						</view>
						<view class="jingli-box-right">
							<view v-if="item.is_pass" class="">已认证</view>
							<view class="j-btn flex-cent-cent" @click="goPage" data-path="/pages/my/jingLiAdd/jingLiAdd" :data-id='item.id'>更新材料</view>
						</view>
					</view>
					<view class="jingli-img">
						<image src="../../../static/shuijiao.jpg" mode=""></image>
					</view>
				</block>
			</block>
			
			<block  v-if="infoArr.length>1">
				<view class="heng"></view>
				<view class="jingli-tlt cell-bot">
					<text>工作经历</text>
				</view>
				<block v-for="(item, index) in infoArr" :key='index'>
					<view class="jingli-box flex-cent-bet cell-bot" v-if="!item.is_show">
						<view class="jingli-box-left">
							<view class="">{{item.company}}</view>
							<view class=""><text v-if="item.start_time">{{item.start_time}}-{{item.end_time||''}}，</text>{{item.position}}</view>
						</view>
						<view class="jingli-box-right">
							<view v-if="item.is_pass" class="">已认证</view>
							<view v-if="!item.is_pass" class="j-btn flex-cent-cent"  @click="goPage" data-path="/pages/my/jingLiAdd/jingLiAdd" :data-id='item.id'>去认证</view>
						</view>
					</view>
				</block>
			</block>
			<!-- <view class="jingli-box flex-cent-bet">
				<view class="jingli-box-left">
					<view class="">深圳市易帮云科技有限公司</view>
					<view class="">2018-至今，运营总监</view>
				</view>
				<view class="jingli-box-right">
					<view class="j-btn flex-cent-cent">去认证</view>
				</view>
			</view> -->
		</view>
		<view class="add-txt flex-cent-cent"  @click="goPage" data-path="/pages/my/jingLiAdd/jingLiAdd">
			<view class="iconfont icon-tianjia1"></view>
			添加经历
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoData:{},
				infoArr:{},
			};
		},
		onLoad(options) {
			this.options = options
		},
		onShow() {
			this.init()

		},
    methods:{
			init(){
				this.$request({
					// 职业经历认证初始化
					url:'association/client/approve/professionalInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data || []
						this.infoArr = _data
					}
				})
			},
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = this.options.page||''
				let id = e.currentTarget.dataset.id||''
      	uni.navigateTo({
      		url: path+'?page='+page+'&id='+id
      	})
      }
    }
	}
</script>

<style lang="scss">
	page{
		background-color: #f1f3f7;
	}
	.add-txt{
		margin: 16upx 0;
		text-align: center;
		color: #969aa6;
		.iconfont{
			margin: 0 10upx;
		}
	}
	.contmin{
		min-height: calc(100vh - 200upx)
	}
	.jingli-img{
		background: #fff;
		padding: 0 30upx 20upx;
		image{
			width: 80upx;
			height: 115upx;
			background-color: #ffffff;
			border: solid 1upx #dddddd;
		}
	}
	.jingli-box{
		background: #fff;
		padding: 30upx 30upx;
		.jingli-box-left{
			>view:nth-child(1){
				font-size: 34upx;
				line-height: 52upx;
				color: #353535;
			}
			>view:nth-child(2){
				font-size: 24upx;
				line-height: 52upx;
				color: #969aa6;
			}
		}
		.jingli-box-right{
			>view:nth-child(1){
				font-size: 24upx;
				line-height: 52upx;
				color: #5788ff;
				text-align: center;
			}
			.j-btn{
				width: 136upx;
				height: 50upx;
				background-color: #ffffff;
				border-radius: 25upx;
				border: solid 1upx #5788ff;
				font-size: 24upx;
				line-height: 52upx;
				color: #5788ff;
				text-align: center;
			}
		}
	}
	.jingli-tlt{
		background: #fff;
		padding: 18upx 30upx 8upx;
	}
</style>
