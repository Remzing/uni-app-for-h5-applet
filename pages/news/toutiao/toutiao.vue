<template>
	<view>
		<cmd-transition name="fade-down">
			<view class="tip-wen" v-if="tipShow">为您推荐 10 篇好文章</view>
		</cmd-transition>
		<view class="iconfont icon-shuaxin btn-shuaxin card" @click="refresh"></view>

		<scroll-view scroll-y @scrolltolower="loadNews" :style="{height:style.contentViewHeight+'px'}">
			<view class="tout-head">
				<text>上进的职场人\n平均每天花{{readTime}}分钟阅读行业头条</text>
				<view class="yued-txt">{{yueDuText}}已坚持<view class="">{{readTimeDays}} </view>天</view>
			</view>
			<view class="tout-item" v-for="(it,index) in news" :key="index" @click="goArticle(it)">
				<view class="tout-cont">
					<view class="tout-tit">{{it.title}}</view>
					<view class="tout-from">
						<view class="">{{it.headline_comment_author}} {{it.update_time_text}}</view>
						<!-- <view class="iconfont icon-guanbi" @click="closeArticle"> </view> -->
					</view>
				</view>
				<view class="tout-img" v-if="it.cover_medium_url"><image :src="$domain + it.cover_medium_url" mode=""></image></view>
			</view>
			<load-more :loading="loading"></load-more>
		</scroll-view>
	</view>
</template>

<script>
import CmdTransition from '../../../components/cmd-transition/cmd-transition'
import LoadMore from '../../../components/load-more'
export default {
	components: {
		LoadMore,
		CmdTransition
	},
	data() {
		return {
			// 坚持天数
			readTimeDays:0,
			// 已读状态
			isTodayRead: false,
			// 更新条数提示
			tipShow: false,
			readTime: 0,
			news: [],
			total: 0,
			page: 0,
			done: false,
			loading: true,
			options: {},
			style: {
				contentViewHeight: 0
			}
		};
	},
	onLoad(options){
		const res = uni.getSystemInfoSync();
		this.style.contentViewHeight = res.windowHeight
		this.readTimeDays = options.readTimeDays || 0
		this.init()
	},
	onShow(){
	},
	computed: {
		yueDuText(){
			if(!this.isTodayRead) {
				return '你今天尚未阅读，挑选文章开始阅读和分享吧，'
			}
			return ''
		}
	},
	methods: {
		init(){
			this.loading = false
			this.loadNews()
		},
		async loadNews(){
			if(this.loading || this.done) return
			this.page++
			this.loading = true
			// 文章列表
			try {
				let rep = await this.$asyncRequest(
					'association/client/homepage/selectNewsList.do',
					{page: this.page}
				)
				let _news = rep.data.headlineNews.records.map(it=>{
					it.update_time_text = this.timeago(it.update_time_stamp)
					return it
				})
				this.news.push(..._news)
				this.readTime = rep.data.read_time
				// is_today_read：0.未读，1.已读
				this.isTodayRead = rep.data.is_today_read != 0
				let	current = rep.data.headlineNews.current
				let pages = rep.data.headlineNews.pages
				this.page = current
				if(current >= pages) {
					this.done = true
				}
			} catch (err) {
				this.page--
			} finally {
				if(this.page == 1){
					this.tipShow = true
					setTimeout(()=>{
						this.tipShow = false
					}, 2000)
				}
				this.loading = false
			}
		},
		refresh(){
			this.loading = false
			this.done = false
			this.news = []
			this.total = 0
			this.page = 0
			this.loadNews()
		},
		goArticle(news) {
			uni.navigateTo({
				url: `/pages/news/articleDetail/articleDetail?id=${news.id}`
			})
		},
		timeago(dateTimeStamp){
			var minute = 1000 * 60
			var hour = minute * 60
			var day = hour * 24
			var week = day * 7
			var halfamonth = day * 15
			var month = day * 30
			let result = ''
			var now = new Date().getTime()
			var diffValue = now - dateTimeStamp

			if(diffValue < 0){
				return
			}
			var minC = diffValue/minute
			var hourC = diffValue/hour
			var dayC = diffValue/day
			var weekC = diffValue/week
			var monthC = diffValue/month
			if(monthC >= 1 && monthC <= 3){
				result = " " + parseInt(monthC) + "月前"
			}else if(weekC >= 1 && weekC <= 3){
				result = " " + parseInt(weekC) + "周前"
			}else if(dayC >= 1 && dayC <= 6){
				result = " " + parseInt(dayC) + "天前"
			}else if(hourC >= 1 && hourC <= 23){
				result = " " + parseInt(hourC) + "小时前"
			}else if(minC >= 1 && minC <= 59){
				result =" " + parseInt(minC) + "分钟前"
			}else if(diffValue >= 0 && diffValue <= minute){
				result = "刚刚"
			}else {
				var datetime = new Date();
				datetime.setTime(dateTimeStamp);
				var Nyear = datetime.getFullYear();
				var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
				var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
				var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
				var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
				var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
				result = Nyear + "-" + Nmonth + "-" + Ndate
			}
			return result;
		}
	}
}
</script>

<style lang="scss">
	.tip-wen{
		position: fixed;
		width: 340upx;
		height: 70upx;
		left: 0;
		right: 0;
		margin: 36upx auto;
		line-height: 70upx;
		z-index: 10;
		text-align: center;
		background-color: #ffffff;
		box-shadow: 0px 8px 12px 0px 
			rgba(151, 160, 202, 0.5);
		border-radius: 35upx;
	}
	.btn-shuaxin {
		position: fixed;
		height: 80upx;
		width: 80upx;
		right: 32upx;
		bottom: 32upx;
		z-index: 20;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		font-size: 50upx;
		color: #39abf8;
		border-radius: 50%;
	}
	.tout-head{
		width: 100%;
		height: 186upx;
		background-color: #5788ff;
		box-shadow: 0px 8px 12px 0px 
		rgba(151, 160, 202, 0.5);
		padding: 10upx 30upx;
		text{
			font-size: 34upx;
			line-height: 48upx;
			color: #ffffff;
			font-weight: 700;
		}
		.yued-txt{
			display: flex;
			align-items: baseline;
			font-size: 22upx;
			color: #ffffff;
			>view{
				font-size: 34upx;
				color: #ffff00;
				margin: 0 10upx;
			}
		}
	}
	.tout-item{
		padding: 30upx;
		border-bottom: #efeef3 solid 1upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.tout-img{
			height: 140upx;
			image{
				width: 200upx;
				height: 140upx;
				background-color: #bcbec5;
				border-radius: 10upx;
			}
		}
		.tout-cont{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.tout-tit{
				width: 100%;
				font-size: 34upx;
				font-weight: 700;
				line-height: 48upx;
				
				overflow:hidden;
				text-overflow:ellipsis;
				display: -webkit-box; 
				-webkit-line-clamp: 2; 
				-webkit-box-orient: vertical;
			}
			.tout-from{
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 24px;
				color: #999999;
				margin-top: 12upx;
			}
		}
		.icon-guanbi{
			color: #dddddd;
			font-size:22upx;
			padding:0 16upx;

		}
	}
	.laout2{
		width:100% !important;
		flex-direction: column;
		.tout-from{
			width: 100%;
			margin-top:20upx !important;
		}
		image{
			margin-left: 45upx;
			margin-top: 16upx;
		}
		image:first-child{
			margin-left: 0;
		}
	}
	
	
</style>
