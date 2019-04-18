<template>
	<view class="mar-cont">
    <view class="card-fixed-bot">
    	<view class="card-fixed">
    		<image src="../../../static/shuijiao.jpg" mode=""></image>
        <view class=""><text>您的好友在用<text>社宾头条</text>\n邀您一起体验</text></view>
    	</view>
      <view class="">
      	<button class="conf-btn" type="primary">免费生成我的名片</button>
      </view>
    </view>
		<view class="art-tit">
			{{news.title}}
		</view>
		<view class="art-comp">
			<view class="art-lit">{{news.source}}</view>
			<view class="art-count">
				<view class="iconfont icon-fenxiang"></view>
				<text class="art-lit">{{news.share_num}}</text>人分享该文章
				<view class="iconfont icon-yanjing"></view>
				{{news.read_num}}
			</view>
		</view>
		<view class="toutpl">
			<view class="toutpl-head">
				<view class=""></view>
				<view class="">头条评论</view>
				<view class=""></view>
			</view>
			<text :selectable="true" :decode="true" :space="'nbsp'">&nbsp;&nbsp;{{news.headline_comment}}</text>
			<view class="toutpl-user">{{news.headline_comment_author}}</view>
			<view class="toutpl-bot1"></view>
			<view class="toutpl-bot2"></view>
		</view>
		<view class="tjyd">
			<view class="tjyd-box"></view>
			<view class="tjyd-left">
				<view class="">
          <view class="">推荐</view>
          <view class="">阅读</view>
        </view>
				<view class=""><image src="../../../static/shuijiao.jpg" mode=""></image></view>
				<view class=""><button class="tjyd-btn" type="primary">在线咨询</button></view>
      </view>
			<view class="tjyd-right">
				<view class="">
          <view class="iconfont icon-dianhua"> </view>
          <view class="tjyd-righ-txt">13713876643</view>
          <view class=""><button class="conf-btn rads" type="primary">打电话</button></view>
        </view>
				<view class="">
          <view class="iconfont icon-weixin"> </view>
          <view class="tjyd-righ-txt">yibangyun</view>
          <view class=""><button class="conf-btn rads" type="primary">加微信</button></view>
        </view>
			</view>
		</view>
    <view class="fuwenb" id="fuwenbId" :class="{ 'fuwenb-height': !contentShow }">
      <u-parse :content="news.content"></u-parse>
    </view>
    <view class="see-all-text" v-if="!contentShow">
    	<view class="see-all-mask"></view>
      <view class="see-all-btn" @click="lookAll">阅读全文<view class="iconfont icon-xiala"></view></view>
    </view>
    <view @click="likeClick" class="diaz">
    	<view class="iconfont icon-xihuan" :class="is_dianzan ? 'liked':''"> </view>
      <view class="">{{news.dianzan_num}}</view>
    </view>
    <view class="art-other">
    	<view class="art-other-item" @click="toOtherNews(news)" v-for="(news,index) in otherNews" :key="index">
    		{{news.title}}
    	</view>
    </view>
    <view class="art-imgtxt">
      <view class="art-imgtxt-item">
      	<view class=""><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      	<view class="">腾讯天美工作室品牌全新升级</view>
      </view>
      <view class="art-imgtxt-item">
      	<view class=""><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      	<view class="">腾讯天美工作室品牌全新升级</view>
      </view>
      <view class="art-imgtxt-item">
      	<view class=""><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      	<view class="">腾讯天美工作室品牌全新升级</view>
      </view>
    </view>
    <view class="botcard">
    	<view class="botcard-cent">
    		<view class="top-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
    		<view class="botcard-text">
          我是<text class="col-5788ff">胡仙溪</text>来自<text class="col-ff6600">广东深圳</text>，目前从事<text class="col-5788ff">互联网软件设计服务</text>，担任<text class="col-5788ff">设计总监职务</text>，我可以提供软件设计服务，寻求有这方面的业务需要可以找我！
        </view>
    		<view class="link-type">
          <view class="link-item"><view class="iconfont icon-dianhua"></view></view>
          <view class="link-item"><view class="iconfont icon-weixin"></view></view>
          <view class="link-item"><view class="iconfont icon-erweima"></view></view>
        </view>
    	</view>
      <view class="txt-tip">本文为 <text class="col-5788ff">胡仙溪</text> 推荐分享 转载至 搜狐科技，不代表社宾头条立场\n若内容不规范或设计违规，可立即举报/报错</view>
    </view>
	</view>
</template>

<script>
import UParse from '../../../components/uParse/src/wxParse'
	export default {
    components: {
      UParse
    },
		data() {
			return {
				curHeight:'800',
        contentShow: true,
        options: {},
        news: {
          content: ''
        },
        otherNews:[],
        is_dianzan: false
			};
    },
    onLoad(options){
      this.options = options
    },
    onShow(){
      this.init()
    },
    methods: {
      measure(){
        const query = wx.createSelectorQuery()
        query.select('#fuwenbId').boundingClientRect()
        query.exec((res) => {
          this.curHeight = res[0].height// 获取到当前元素的高度  单位px
          if(this.curHeight <= 800){
            this.contentShow=true;
          }else{
            this.contentShow=false;
          }
        })
      },
      async init(){
        // 文章详情
        let rep = await this.$asyncRequest(
          'association/client/homepage/selectNewsById.do',
          {id: this.options.id}
        )
        this.news = rep.data.headlineNews
        this.news.is_dianzan = 0
        console.log('文章详情：',this.news)
        // 相关文章列表
        rep = await this.$asyncRequest(
          'association/client/homepage/selectHeadlineNewsListOther.do',
          {label: this.news.label}
        )
        this.otherNews = rep.data
        this.$nextTick(()=>{
          this.measure()
        })
        // 从页面展示完成开始监控
        this.monitorReadTime()
      },
      // 用户阅读时长监控
      async monitorReadTime(){
        while(true){
          // 半分钟记录一次
          await this.sleep(1000 * 30)
          this.$asyncRequest(
            'association/client/homepage/userReadTimeCount.do',
            {headline_news_id: this.news.id}
          )
        }
      },
      // 点赞操作
      async likeClick(){
        try {
          if(this.is_dianzan) throw Error('请不要重复点赞')
          await this.$asyncRequest(
            'association/client/homepage/updateHeadlineNewsShareNum.do',
            {
              id: this.news.id,
              type: 2
            }
          )
          this.is_dianzan = true
          this.news.dianzan_num++
        } catch (err) {
          uni.showModal({
            content: err.message || '发生错误',
            showCancel: false
          })
        }
      },
      lookAll() {
    		this.contentShow = true
      },
      toOtherNews(news){
        uni.navigateTo({
          url: `/pages/news/articleDetail/articleDetail?id=${news.id}`
        })
      },
      sleep(timerout = 1000){
        return new Promise(res=>{
          setTimeout(res,timerout)
        })
      }
    },
	}
</script>

<style lang="scss">
  .txt-tip{
    font-size: 20upx;
    text-align: center;
    color: #969aa6;
    margin: 30upx;
  }
  .botcard{
    background-color: #f1f3f7;
    padding: 120upx 30upx 30upx;
    .botcard-cent{
      width: 690upx;
      padding: 30upx;
      background-color: #ffffff;
      box-shadow: 0px 8upx 12upx 0px 
        rgba(151, 160, 202, 0.5);
      border-radius: 20upx;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      .top-img{
        width: 130upx;
        height: 130upx;
        margin-top:-90upx;
        image{
          width: 100%;
          height: 100%;
          border-radius: 130upx;
          background-color: #a1a5af;
          border: solid 1px #ffffff;
        }
      }
      .botcard-text{
        margin: 30upx 0;
      }
      .link-type{
        display: flex;
        width:100%;
        justify-content: space-around;
        align-items: center;
        .link-item{
          width: 72upx;
          height: 72upx;
          border-radius: 72upx;
          background-image: linear-gradient(120deg, 
            #39abf8 0%, 
            #7184fe 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          .iconfont{
            color: #fff;
            font-size: 40upx;
          }
        }
      }
    }
  }
  page{
    font-size: 24upx;
  }
  
  .card-fixed-bot{
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 100%;
    height: 98upx;
    background-color: #f5f7fa;
    padding: 0 30upx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card-fixed{
      display: flex;
      align-items: center;
      >view{
        line-height:34upx;
        margin-left: 20upx;
        text{
          font-size: 24upx;
          text{
            color: #5788ff;
          }
        }
      }
      image{
        width: 72upx;
        height: 72upx;
        border-radius: 72upx;
        background-color: #a1a5af;
      }
    }
    .conf-btn{
      height: 66upx;
      line-height: 66upx;
      border-radius: 33upx;
    }
  }
  .conf-btn{
    margin: 0;
  }
	.art-tit{
		font-size: 48upx;
		line-height: 66upx;
		font-weight: 700;
		padding: 20upx 30upx 0;
	}
	.art-comp{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 30upx;
		.art-lit{
			font-size: 24upx;
			color: #5788ff;
		}
		.art-count{
			
			display: flex;
			align-items: center;
			font-size: 24upx;
			color: #999999;
			.iconfont{
				color: #dddfe3;
				margin:0 10upx;
			}
		}
	}
	.toutpl{
		padding: 30upx;
		.toutpl-head{
			display: flex;
			align-items: center;
			justify-content: space-between;
			view:nth-child(2n-1){
				width: 260upx;
				height: 1upx;
				background-color: #353535;
			}
			view:nth-child(2){
				font-size: 24upx;
			}
		}
		text{
			font-size: 24upx;
			color: #5788ff;
		}
		.toutpl-user{
			font-size: 24upx;
			margin:8upx 0;
		}
		.toutpl-bot1{
			width: 100%;
			height: 1upx;
			background-color: #353535;
		}
		.toutpl-bot2{
			margin-top: 5upx;
			width: 100%;
			height: 5upx;
			background-color: #353535;
		}
	}
	.tjyd{
		position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30upx;
		.tjyd-box{
			position: absolute;
      width: 660upx;
      height: 153upx;
      background-color: #ffffff;
      border: dashed 1px #d1caca;
      z-index:-1;
      left: 60upx;
		}
		.tjyd-left{
      display: flex;
      align-items: center;
			>view:nth-child(1){
        font-size: 24upx;
        font-weight: 700;
        letter-spacing:6upx;
        view{
          line-height: 34upx;
        }
      }
      >view:nth-child(2){
        height: 100upx;
        image{
          width: 100upx;
          height: 100upx;
          border-radius: 100upx;
          background-color: #a1a5af;
          margin: 0 20upx;
        }
      }
      >view:nth-child(3){
        
      }
		}
		.tjyd-right{
			display: flex;
			align-items: flex-end;
      flex-direction: column;
      >view:nth-child(1){
        display: flex;
        align-items: center;
      }
      >view:nth-child(2){
        display: flex;
        align-items: center;
        margin-top: 12upx;
      }
      .iconfont{
        color: #5788ff;
        font-size:30upx;

      }
      .tjyd-righ-txt{
        font-size: 24upx;
        color: #999999;
        margin: 0 10upx 0 6upx;
      }
      .conf-btn{
        margin-right: 20upx;
        padding: 0 20upx;
      }
		}
	}
  .diaz{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30upx 0;
    .iconfont{
      font-size: 46upx;
      color: #dddfe3;
      line-height: 40upx;
    }
    .liked {
      color: red;
    }
    view{
      padding: 0 30upx;
    }
  }
  .art-other{
    width: 690upx;
    margin: 20upx 30upx;
    background-color: #f1f3f7;
    .art-other-item{
      padding: 16upx 30upx;
      border-top: #e5e7eb solid 1upx;
      font-size: 28upx;
      color: #353535;

      overflow:hidden;
      text-overflow:ellipsis;
      display: -webkit-box; 
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;
    }
    .art-other-item:first-child{
      border-top: none;
    }
  }
  .art-imgtxt{
    display: flex;
    margin: 50upx 30upx;
    .art-imgtxt-item{
      width: 206upx;
      margin-left: 36upx;
      >view:nth-child(1){
        width: 203upx;
        height: 280upx;
        background-color: #5788ff;
        box-shadow: 0px 5upx 6upx 0px 
          rgba(122, 125, 134, 0.5);
        image{
          width: 100%;
          height: 100%;
        }
      }
      >view:nth-child(2){
        font-size: 24upx;
        text-align: center;
        margin-top: 26upx;
        line-height: 36upx;
      }
    }
    .art-imgtxt-item:first-child{
      margin-left: unset;
    }
  }
</style>
