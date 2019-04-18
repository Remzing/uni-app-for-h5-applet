<template>
	<view  class="cont">
		<scroll-view scroll-y @scrolltolower="loadDynamic" :style="{height:style.contentViewHeight+'px'}">
			<view class="home-bg1">
				<view class="uni-flex home-tip" v-if="tipShow">
					点击【···】添加到【我的小程序】,下次更快捷进入
					<view class="iconfont icon-guanbi" @click="closeTip"> </view>
				</view>
				<view class="home-bg1-child">
					<view class="uni-inline-item">
						<view v-if="user" class="user">
							<view class="user-name">{{user.real_name}}</view> 开始第<view class="user-day">{{head.readTimeDays+1}}</view>天的阅读吧!
						</view>
						<view class="non-login flex-cent-cent" @click="toLogin" v-else>未登录，点击<button class="conf-btn btn-login" type="primary">登录账户</button></view>
					</view>
					<view class="news-item" v-if="head.bigNews" @click="goNewsDetail(it)">
						<view class="news-img">
							<image :src="$domain + head.bigNews.cover_medium_url" mode="aspectFill"></image>
						</view>
						<view class="news-inf" @click.stop="goNewsDetail">
							<view class="">
								{{head.bigNews.title}}
							</view>
							<view class="">{{head.bigNews.read_num}}个朋友也阅读过</view>
						</view>
					</view>
					<view class="news-one" @click="goNewsDetail(it)" v-for="(it,index) in head.news" :key="index">
						<view class="iconfont icon-yuandianda"></view>
						<view class="">{{it.title}}</view>
					</view>
					<view class="seemore" @click="goNews" v-show="head.bigNews">查看更多头条</view>
				</view>
			</view>

			<dynamic :datas="dynamic.list" @closeGuanGao="closeGuanGao"></dynamic>

			<load-more :loading="dynamic.loading"></load-more>
		</scroll-view>

		<!-- <view class="card-item"> 
			<view class="card-tip mar-bot-20">
				第287个社群创建成功！
			</view> 
			<view class="fenhui mar-bot-30">
				 <view class="fenhui-tit">
				 	<image src="../../../static/shuijiao.jpg" mode=""></image>
					<view class="fenhui-txt">深圳创客分会</view>
				 </view>
				 <button class="conf-btn" type="primary">我要加入</button>
			</view>
			<view class="like-count">
				<view class=""><view class="iconfont icon-xihuan"></view><view class="like-num">2000</view></view>
				<view class=""><view class="iconfont icon-liuyan"></view><view class="like-num">20</view></view>
				<view class=""><view class="iconfont icon-fenxiang"></view><view class="like-num">分享</view></view>
			</view>
			<view class="card-comment">
				<view class="comment-item">
					<view class="">陈伟荣：</view>
					<view class="">世界是你们，也是我们的 </view>
				</view>
				<view class="comment-item">
					<view class="">陈伟荣：</view>
					<view class="">世界是你们，也是我们的 </view>
				</view> 
			</view>
		</view>
		<view class="heng"></view>
		<view class="card-item"> 
			<view class="card-toux">
				 <image src="../../../static/shuijiao.jpg" mode=""></image>
				 <view class="card-name">胡三级</view>
				 <view class="card-hangye">软件开发服务</view>
			</view> 
			<view class="fenhui-oneimg">
				 <image src="../../../static/shuijiao.jpg" mode=""></image>
			</view>
			<view class="like-count">
				<view class=""><view class="iconfont icon-xihuan col-ff665b "></view><view class="like-num">2000</view></view>
				<view class=""><view class="iconfont icon-liuyan"></view><view class="like-num">20</view></view>
				<view class=""><view class="iconfont icon-fenxiang"></view><view class="like-num">分享</view></view>
			</view>
			<view class="card-comment">
				<view class="comment-item">
					<view class="">陈伟荣：</view>
					<view class="">世界是你们，也是我们的 </view>
				</view>
				<view class="comment-item">
					<view class="">秦琪：</view>
					<view class="">恭喜晋级，希望能发表更多优秀的文章！ </view>
				</view> 
			</view>
		</view>
		<view class="card-item"> 
			<view class="card-toux">
				 <image src="../../../static/shuijiao.jpg" mode=""></image>
				 <view class="card-name">胡ADSASD</view>
				 <view class="card-hangye">软件开发服务</view>
			</view> 
			<view class="fenhui-oneimg">
				 <image src="../../../static/shuijiao.jpg" mode=""></image>
			</view>
			<view class="like-count">
				<view class=""><view class="iconfont icon-xihuan col-ff665b "></view><view class="like-num">2000</view></view>
				<view class=""><view class="iconfont icon-liuyan"></view><view class="like-num">20</view></view>
				<view class=""><view class="iconfont icon-fenxiang"></view><view class="like-num">分享</view></view>
			</view>
			<view class="card-comment">
				<view class="comment-item">
					<view class="">陈伟荣：</view>
					<view class="">世界是你们，也是我们的 </view>
				</view> 
			</view>
		</view> -->
	</view>
</template>

<script>
import LoadMore from '../../../components/load-more'
import Dynamic from './components/dynamic/index'
import websdk from "easemob-websdk"
export default {
	components: {
		LoadMore,
		Dynamic,
	},
	data() {
		return {
			tipShow: true,
			user: null,
			head:{
				readTimeDays: 0,
				bigNews: null,
				news: [],
			},
			dynamic: {
				list: [],
				page: 0,
				loading: true,
				done: false
			},
			ad: {
				list: [],
				page: 0,
				done: false
			},
			style: {
				contentViewHeight: 0
			}
		};
	},
	onLoad() {
		const res = uni.getSystemInfoSync();
		this.style.contentViewHeight = res.windowHeight
	},
	onShow() {
		this.init()
	},
	methods:{
		async	init(){
			this.loadHeadData()
			this.dynamic.loading = false
			this.loadDynamic()
		},
		closeGuanGao(it){
			this.dynamic.list = this.dynamic.list.filter(dynamic => {
				if(dynamic.dynamic_type_id != 2) {
					return true
				}else if(dynamic.id == it.id){
					return false
				}else{
					return true
				}
			})
		},
		async loadHeadData(){
			//  首页查询文章
			let rep = await this.$asyncRequest(
				'association/client/homepage/selectNews.do'
			)
			this.head.bigNews = rep.data.headlineNews.shift()
			this.head.news = rep.data.headlineNews
			this.head.readTimeDays = rep.data.read_time_days
			this.user = rep.data.user
		},
		//  加载动态
		async loadDynamic(){
			if(this.dynamic.loading || this.dynamic.done) return
			this.dynamic.page++
			this.dynamic.loading = true
			try {
				let rep = await this.$asyncRequest(
					'association/client/homepage/getDynamicList.do',
					{
						page: this.dynamic.page
					}
				)
				let dynamics = rep.data.records
				let ad = await this.getAD()
				if(ad) {
					ad.dynamic_type_id = 2
					dynamics.push(ad)
				}
				this.dynamic.list.push(...dynamics)
				if(rep.data.current >= rep.data.pages) this.dynamic.done = true
			} catch (err) {
				this.dynamic.page--
			} finally {
				this.dynamic.loading = false
			}
		},
		// 获取一条广告
		async getAD(){
			if(this.ad.list.length>0) return this.ad.list.pop()
			this.ad.page++
			try {
				let rep = await this.$asyncRequest(
					'association/client/homepage/getDynamicBannerList.do',
					{
						page: this.ad.page
					}
				)
				this.ad.list.push(...rep.data.records)
				if(rep.data.current >= rep.data.pages) this.ad.done = true
				return this.ad.list.pop()
			} catch (err) {
				this.ad.page--
				return null
			}
		},
		toLogin(){
			this.$request({url:'association/client/setting/mineInit.do'})
		},
		closeTip(){
			this.tipShow = false
		},
		goNews(){
			uni.navigateTo({
				url: `/pages/news/toutiao/toutiao?readTimeDays=${this.head.readTimeDays}`
			})
		},
		goNewsDetail(news){
			uni.navigateTo({
				url: '/pages/news/newsDetail/newsDetail'
			})
		}
	}
}
</script>

<style lang="scss">
	.cont{
		margin: 0;
	}
	.home-bg1{
		width: 100%;
		background: linear-gradient(#5788ff 70%, #fff 50%);
	}
	.home-bg1-child{
		width: 690upx;
		// height: 539upx;
		margin: 20upx 30upx;
		padding: 30upx;
		background-color: #ffffff;
		box-shadow: 0px 8upx 12upx 0px 
			rgba(151, 160, 202, 0.5);
		border-radius: 20upx;
	}
	.home-tip{
		width: 100%;
		height: 64upx;
		line-height: 64upx;
		background-color: #4e7ceb;
		color: #ffffff;
		font-size: 28upx;
		padding: 0 30upx;
		justify-content: space-between;
		align-items: center;
	}
	.uni-inline-item{
		justify-content: center;
		.user {
			display: flex;
			.user-name{
				color: #5788ff;
				margin-right: 6upx;
			}
			
			.user-day{
				height: 40upx;
				line-height: 40upx;
				padding: 0 8upx;
				margin:0 6upx;
				background-color: #ff665b;
				box-shadow: 0px 3upx 2upx 0px 
					rgba(255, 102, 91, 0.5);
				border-radius: 8upx;
				color: #fff;
			}
		}
		
		.non-login {
			color: #353535;
			.btn-login{
				height: 46upx;
				line-height: 46upx;
			}
		}
	}
	
	.news-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30upx 0;
		margin-top: 26upx;
		border-top: #e6e8f2 solid 1upx;
	}
	.news-img{
		width: 200upx;
		height: 140upx;
	}
	.news-img image{
		width: 200upx;
		height: 140upx;
		background-color: #bcbec5;
	}
	.news-inf{
		width: 400upx;
		display: flex;
		flex-direction: column;
	}
	.news-inf{
		view:first-child{
			font-size: 34upx;
			height:100upx;
			line-height:48upx;
			margin-bottom: 8upx;
			color: #353535;
			font-weight: 700;
			
			overflow:hidden;
			text-overflow:ellipsis;
			display: -webkit-box; 
			-webkit-line-clamp: 2; 
			-webkit-box-orient: vertical;
		}
		view:last-child{
			font-size: 24upx;
			color: #999;
			text-overflow:ellipsis;
			overflow:hidden;
			white-space:nowrap;
		}
	}
	.news-one{
		display: flex;
		align-items: center;
		view:first-child{
			font-size:22upx;
			margin-right: 10upx;
			color: #5788ff;
		}
		view:last-child{
			width: 570upx;
			text-overflow:ellipsis;
			overflow:hidden;
			white-space:nowrap;
		}
	}
	.seemore{
		text-decoration: underline;
		font-size: 28upx;
		color: #5788ff;
		text-align: center;
		margin-top: 10upx;
	}
	
	.card-item{
		padding: 30upx;
	}
	.card-comment{
		font-size: 24upx;
		border-top: #efeef3 solid 1upx;
		padding: 20upx 0 0 0;
		.comment-item{
			display: flex;
			view:first-child{
				color: #5788ff;
			}
			view:nth-child(2){
				color: #353535;
			}
		}
		
	}
	.like-count{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20upx; 
		>view{
			display: flex;
			color: #969aa6;
			font-size: 24upx;
			.iconfont{
				font-size: 28upx;
				color: #dddfe3;
				margin-right: 6upx;
			}
		}
	}	
	.fenhui-oneimg {
		text-align: center;
		image{
			width: 670upx;
			height: 200upx;
			background-color: #241817;
			border-radius: 15upx; 
		}
		
	}
</style>
