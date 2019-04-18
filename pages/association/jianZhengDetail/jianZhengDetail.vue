<template>
	<view>
		<view class="fabu-top"></view>
    <view class="selc-item flex-cent-bet">
      <view class="selc-item-left flex-cent">
       	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
       	<view class="selc-item-txt flex-cent">
           <view class="selc-item-name"> 胡仙溪</view>
           <view class="selc-item-job flex-cent">
             <view class="flex-cent"><view class="iconfont icon-yuechongzhi"></view>58</view>
             <view class="flex-cent"><view class="iconfont icon-liuyan"></view>33</view>
             <view class="flex-cent"><view class="iconfont icon-fenxiang"></view>21</view>
           </view>
         </view>
       </view>
       <view class="selc-item-type"></view>
    </view>
    <view class="heng"></view>
    <view class="setup-item flex-cent-bet"  @click="goPage" data-path="/pages/association/setupFee/setupFee" data-page='1'>
    	<view class="setup-item-left flex-cent">
        <view class="iconfont icon-huiyuan col-dddfe3" ></view><text  :style="{color:themeColor}"> 李伟如 </text>发布{{themeTitle}}
      </view>  
    	<view class="setup-item-right flex-cent">
        <view class="iconfont icon-youjiantou" ></view>
      </view>
    </view>
    <view class="fuwenb" id="fuwenbId"  :class="{ 'fuwenb-height': !contentShow }">
        	您掌管一家公司的业务，但是您要为销售烦心，因为要思考顾客从哪里来！
    本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系。  
    本着“付出者收获”的宗旨,弥合行业、地域、背景的差异，不同分会每两周在当地召开业务引荐精英会，每季度在不同城市举办CBIN区域大组会，通过多层面、多角度的活动设计，真实、真切的现场互动，深度、哲理的心智启迪，给予每位参与者从视觉到感官、从情感到修养、从思维到意境全身心的震撼、滋养与提升，从而使每位参与者充分得到自我的展现、资源的青睐、业绩的提升。本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。不同分会每两周在当地召开业务引荐精英会，每季度在不同城市举办CBIN区域大组会，通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系不同分会每两周在当地召开
    本着“付出者收获”的宗旨,弥合行业、地域、背景的差异，不同分会每两周在当地召开业务引荐精英会，每季度在不同城市举办CBIN区域大组会，通过多层面、多角度的活动设计，真实、真切的现场互动，深度、哲理的心智启迪，给予每位参与者从视觉到感官、从情感到修养、从思维到意境全身心的震撼、滋养与提升，从而使每位参与者充分得到自我的展现、资源的青睐、业绩的提升。本次为CBIN北京第一分会会员自发组织的人脉对接与业务引荐精英会，将为参与者的业务发展和交流提供了积极的、有组织性的支持平台。不同分会每两周在当地召开业务引荐精英会，每季度在不同城市举办CBIN区域大组会，通过精英会帮助你和许多优秀的商界人士建立起长期的友好互信关系不同分会每两周在当地召开
    业务引荐精英会，每季度在不同城市举办CBIN区域大组会，  
    </view>
    <view class="see-all-text" v-if="!contentShow">
      <view class="see-all-mask"></view>
      <view class="see-all-btn" @click="lookAll" :style="{color:themeColor}">阅读全文<view class="iconfont icon-xiala"></view></view>
    </view>
    <view class="dianzan">
    	<view class="dianzan-count flex-cent">
    		<view class="iconfont icon-xihuan"></view>
    		<view class="">2293 人点了赞</view>
    	</view>
    	<view class="dianzan-img" @click="goHudong">
    		<image src="../../../static/shuijiao.jpg" mode=""></image>
    		<image src="../../../static/shuijiao.jpg" mode=""></image>
    		<image src="../../../static/shuijiao.jpg" mode=""></image>
    	</view>
    </view>
    <view class="heng"></view>
    <view class="">
    	<view class="">还有TA们对 罗思龙 最近进行了见证（共21）</view>
      
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
    		<view class="likenum flex-cent">
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
    		<view class="likenum flex-cent">
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
        page:1,//1见证，2探访，3感恩，4引荐
        themeColor:'#5788ff',
        backImage:'linear-gradient(120deg, #bd7eff 0%, #6247f2 100%)',
        themeTitle:'见证',
			};
		},
    onReady(){
      const query = wx.createSelectorQuery()
      query.select('#fuwenbId').boundingClientRect()
      query.exec((res) => {
        console.log("ryy-onReady", res)
        this.curHeight = res[0].height// 获取到当前元素的高度  单位px
        console.log("ryy-curHeight", res[0].height)
        if(this.curHeight> res[0].height){
          this.contentShow=true;
        }else{
          this.contentShow=false;
        }
      })
    },
    onLoad(options) {
      this.page = options.page
      if(this.page==1){//见证
        this.themeColor = '#19c7ad'
        this.themeTitle = '见证',
        this.backImage='linear-gradient(450deg, #37dfc8 0%, #01b49a 100%)'
      }else if(this.page==2){//探访
        this.themeColor = '#5788ff'
        this.themeTitle = '探访'
        this.backImage='linear-gradient(120deg, #06c8d9 0%, #5d51ff 100%)'
      }else if(this.page==3){//感恩
        this.themeColor = '#f12154'
        this.themeTitle = '感恩'
        this.backImage='linear-gradient(120deg, #e79c25 0%, #f12054 100%)'
      }else if(this.page==4){//引荐
        this.themeColor = '#7f59f6'
        this.themeTitle = '引荐'
        this.backImage='linear-gradient(120deg, #bd7eff 0%, #6247f2 100%)'
      }
      let that = this
      uni.setNavigationBarTitle({
          title: (that.themeTitle||'')+'详情'
      });
      uni.setNavigationBarColor({
        frontColor:'#ffffff',
        backgroundColor: that.themeColor||'',
      }) 
    },
    methods: {
      lookAll() {
    		this.contentShow = true
    	}
    },
	}
</script>

<style lang="scss">
  
  .setup-item-left{
    font-size: 28upx; 
   }
  .fabu-top{
    width: 100%;
    height: 300upx;
    background-color: #19c7ad;
  }
  .selc-item{
    padding: 20upx 60upx 20upx 30upx;
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
     
    }
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
</style>
