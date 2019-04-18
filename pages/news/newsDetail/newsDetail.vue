<template>
	<view class="cont">
		<view class="fix-btns">
			<view class="oper-btn">
				<image src="../../../static/nav/home.png" mode="aspectFill"></image>
			</view>
			<view class="oper-btn">
				<image src="../../../static/zd.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="bot-inp">
			<view class="pingl-inp">
				<input type="text" value="" />
				<view class="iconfont icon-bianji"></view>
			</view>
			<view class="iconfont icon-xihuan"></view>
			<view class="iconfont icon-fenxiang"></view>
		</view>
		<view class="renwu-bg">
			<view class="renwu">
				<view class="renwu-img">
					<image src="../../../static/shuijiao.jpg" mode=""></image>
				</view>
				<view class="renwu-txt">
					<view class="renwu-info">
						<view class="">胡仙溪</view>
						<view class="">软件工程师</view>
						<view class="iconfont icon-v2"></view>
					</view>
					<view class="renwu-time">
						2018.11.18  11:02
					</view>
				</view>
			</view>
			<view class="renwu-bg-child">
				<view class="card-head">
					<view class="">社宾功能投票（重在参与）</view>
					<button class="conf-btn rads" type="primary">立即投票</button>
				</view>
				<view class="toup-text">
					为了获得更多好的用户体验，特公布以下功能需要社宾的会员抽出宝贵的时间对以下功能进行投票，以便我们做好进一步规划和上线安排！
				</view>
			</view>
			
		</view>
		<view class="fuwenb" id="fuwenbId"  :class="{ 'fuwenb-height': !contentShow }">
			您掌管一家公司的业务，但是您要为销售烦心，因为要思考顾客从哪里来！
本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  
本着“付出者收获”的宗旨,弥合行业、地域、背景的差异，不同分会每两周在当地召开业务引荐精英会，每季度在不同城市举办CBIN区域大组会，通过多层面、多角度的活动设计，真实、真切的现场互动，深度、哲理的心智启迪，给予每位参与者从视觉到感官、从情感到修养、从思维到意境全身心的震撼、滋养与提升，从而使每位参与者充分得到自我的展现、资源的青睐、业绩的提升。本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  您掌管一家公司的业务，但是您要为销售烦心，因为要思考顾客从哪里来！
本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  
本着“付出者收获”的宗旨,弥合行业、地域、背景的差异，不同分会每两周在当地召开业务引荐精英会，每季度在不同城市举办CBIN区域大组会，通过多层面、多角度的活动设计，真实、真切的现场互动，深度、哲理的心智启迪，给予每位参与者从视觉到感官、从情感到修养、从思维到意境全身心的震撼、滋养与提升，从而使每位参与者充分得到自我的展现、资源的青睐、业绩的提升。本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  您掌管一家公司的业务，但是您要为销售烦心，因为要思考顾客从哪里来！
本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  
本着“付出者收获”的宗旨,弥合行业、地域、背景的差异，不同分会每两周在当地召开业务引荐精英会，每季度在不同城市举办CBIN区域大组会，通过多层面、多角度的活动设计，真实、真切的现场互动，深度、哲理的心智启迪，给予每位参与者从视觉到感官、从情感到修养、从思维到意境全身心的震撼、滋养与提升，从而使每位参与者充分得到自我的展现、资源的青睐、业绩的提升。本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  养与提升，从而使每位参与者充分得到自我的展现、资源的青睐、业绩的提升。本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  您掌管一家公司的业务，但是您要为销售烦心，因为要思考顾客从哪里来！
本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  
本着“付出者收获”的宗旨,弥合行业、地域、背景的差异，不同分会每两周在当地召开业务引荐精英会，每季度在不同城市举办CBIN区域大组会，通过多层面、多角度的活动设计，真实、真切的现场互动，深度、哲理的心智启迪，给予每位参与者从视觉到感官、从情感到修养、从思维到意境全身心的震撼、滋养与提升，从而使每位参与者充分得到自我的展现、资源的青睐、业绩的提升。本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。养与提升，从而使每位参与者充分得到自我的展现、资源的青睐、业绩的提升。本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  您掌管一家公司的业务，但是您要为销售烦心，因为要思考顾客从哪里来！
本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  
本着“付出者收获”的宗旨,弥合行业、地域、背景的差异，不同分会每两周在当地召开业务引荐精英会，每季度在不同城市举办CBIN区域大组会，通过多层面、多角度的活动设计，真实、真切的现场互动，深度、哲理的心智启迪，给予每位参与者从视觉到感官、从情感到修养、从思维到意境全身心的震撼、滋养与提升，从而使每位参与者充分得到自我的展现、资源的青睐、业绩的提升。本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。
		</view>
    <view class="see-all-text" v-if="!contentShow">
    	<view class="see-all-mask"></view>
      <view class="see-all-btn" @click="lookAll">阅读全文<view class="iconfont icon-xiala"></view></view>
    </view>
		<view class="dianzan">
			<view class="dianzan-count">
				<view class="iconfont icon-xihuan"></view>
				<view class="">2293 人点了赞</view>
			</view>
			<view class="dianzan-img" @click="goHudong">
				<image src="../../../static/shuijiao.jpg" mode=""></image>
				<image src="../../../static/shuijiao.jpg" mode=""></image>
				<image src="../../../static/shuijiao.jpg" mode=""></image>
			</view>
		</view>
		<view class="pinglun">
			<view class="pingl-num">
				全部 <view class="">2</view>条评论
			</view>
			<view class="pingl-item ">
				<view class="pingl-img">
					<image src="../../../static/shuijiao.jpg" mode=""></image>
					<view class="">李科奇·网络运营</view>
				</view>
				<view class="likenum">
					<view class="iconfont icon-xihuan"></view>
					<view class="">5</view>
				</view>
			</view>
			<view class="pingl-text">
				大家一起投票，我觉得社宾学院功能最好用！
			</view>
			<view class="pingl-item ">
				<view class="pingl-img">
					<image src="../../../static/shuijiao.jpg" mode=""></image>
					<view class="">黄有为·软件开发</view>
				</view>
				<view class="likenum">
					<view class="iconfont icon-xihuan"></view>
					<view class="">0</view>
				</view>
			</view>
			<view class="pingl-text">
				意见已反馈，希望社宾越做越好意见已反馈，希望社宾越做越好
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 阅读全文 高度以及是否全文显示
				curHeight:'800',
				contentShow: true,
				// 阅读全文 高度以及是否全文显示 -End
			};
		},
    onReady(){
      const query = wx.createSelectorQuery()
      query.select('#fuwenbId').boundingClientRect()
      query.exec((res) => {
        console.log("ryy-onReady", res)
        // this.curHeight = res[0].height
        console.log("ryy-curHeight", res[0].height)// 获取到当前元素的高度  单位px
        if(this.curHeight> res[0].height){
          this.contentShow=true;
        }else{
          this.contentShow=false;
        }
      })
    },
		methods: {
			goHudong() {
				uni.navigateTo({
					url: '/pages/news/hudong/hudong'
				})
			},
      lookAll() {
      	this.contentShow = true
      }
		},
	}
</script>

<style lang="scss">
	.fix-btns{
		position: fixed;
		right: 22upx;
		bottom: 160upx;
		.oper-btn{
			width: 80upx;
			height: 80upx;
			line-height: 106upx;
			text-align: center;
			border-radius: 80upx;
			background-color: #ffffff;
			box-shadow: 0px 8upx 12upx 0px 
				rgba(151, 160, 202, 0.5);
			border: solid 1upx #efefef;
			margin-top: 12upx;
			image{
				width: 50upx;
				height: 50upx;
			}
		}
	}
	.bot-inp{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 98upx;
		border-top: #f1f3f7 solid 1upx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		input{
			width: 570upx;
			height: 72upx;
			background-color: #f5f7fa;
			border-radius: 8px;
			border: solid 1px #dddddd;
			padding-left: 70upx;
			box-sizing: border-box;
		}
		.iconfont{
			color: #dddfe3;
			font-size: 42upx;
			margin-left: 16upx;
		}
		.pingl-inp{
			position: relative;
			color: #888;
			.iconfont{
				position: absolute;
				left: 16upx;
				top: -6upx;
				bottom: 0;
				font-size:46upx;
				margin: 0;
				color: #808183;
			}
			
		}
	}
	.renwu-bg{
		width: 100%;
		height: 326upx;
		background-color: #5788ff;
	}
	.renwu{
		display: flex;
		align-item:center;
		margin: 0 20upx;
		.renwu-img{
			image{
				width: 100upx;
				height: 100upx;
				background-color: #a1a5af;
				border-radius: 100upx;
				margin-right: 14upx;
			}
		}
		.renwu-txt{
			flex-direction: column;
		}
		.renwu-info{
			display: flex;
			align-items: baseline;
			color: #fff;
			>view:nth-child(1){
				font-size: 34upx;
			}
			>view:nth-child(2){
				font-size: 24upx;
				margin: 0 10upx;
			}
			>view:nth-child(3){
			}
		}
		.renwu-time{
			font-size: 24upx;
			color: #fff;
		}
	}
	
	.renwu-bg-child{
		width: 690upx;
		// height: 539upx;
		float: left;
		margin: 20upx 30upx;
		padding: 30upx;
		background-color: #ffffff;
		box-shadow: 0px 8upx 12upx 0px 
			rgba(151, 160, 202, 0.5);
		border-radius: 20upx;
	}
	.card-head{
		display: flex;
		justify-content: space-between;
	}
	.toup-text{
		font-size: 24upx;
		line-height: 40upx;
		color: #353535;
		border-top: #e5e7eb solid 1upx;
		padding-top: 20upx;
		margin-top: 20upx;
	}	
		
	
	.dianzan{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30upx ;
		.dianzan-count{
			display: flex;
			align-items: center;
			>view:nth-child(2){
				font-size: 24upx;
				color: #969aa6;
			}
			.iconfont{
				margin-right: 8upx;
			}
		}
		.dianzan-img{
			display: flex;
			image{
				width: 40upx;
				height: 40upx;
				border-radius: 40upx;
				background-color: #8b8d8d;
				border: solid 1upx #ffffff;
				margin-left: -14upx;
			}
		}
	}
	.pinglun{
		background-color: #f1f3f7;
	}
	.pingl-num{
		display: flex;
		color: #969aa6;
		padding: 30upx 30upx 20upx;
		view{
			color: #5788ff;
		}
	}
	.pingl-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:  30upx 30upx 14upx;
		border-top: #e5e7eb solid 1upx;
		.pingl-img{
			display: flex;
			align-items: center;
			image{
				width: 60upx;
				height: 60upx;
				border-radius: 60upx;
				background-color: #a1a5af;
				margin-right: 10upx;
			}
			view{
				font-size: 24upx;
				color: #969aa6;
			}
		}
		.likenum{
			display: flex;
			align-items: center;
			view:nth-child(2){
				font-size: 24upx;
				color: #969aa6;	
				margin-left: 10upx;
			}
		}
		
	}
	.pingl-text{
		padding: 0 30upx 30upx;
	}
	.cont{
		margin-bottom: 98upx;
	}
</style>
