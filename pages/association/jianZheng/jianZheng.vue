<template>
	<view>
		<view class="jianz-top flex-cent" :style="{backgroundColor:themeColor}">以下数据来自社群【深圳创客邦精英会】所有发布的数据</view>
    <view class="top-tab">
    	
      <view class="flex-cent sous" @click="topTab(0)" :class="(tabIndex==0)?'tab-active':''" :style="{color:tabIndex==0?themeColor:'#353535'}">
        <text>本月</text>
       	<view class="iconfont icon-xiala"></view>
        <view class=""></view>
      </view>
      <view class="flex-cent sous" @click="topTab(1)" :class="(tabIndex==1)?'tab-active':''" :style="{color:tabIndex==1?themeColor:'#353535'}">
        <text>{{themeTitle}}者</text>
       	<view class="iconfont icon-xiala"></view>
        <view class=""></view>
      </view>
      <view class="flex-cent sous" @click="topTab(2)" :class="(tabIndex==2)?'tab-active':''" :style="{color:tabIndex==2?themeColor:'#353535'}">
        <text>{{themeTitle}}对象</text>
       	<view class="iconfont icon-xiala"></view>
        <view class=""></view>
      </view>
      <view class="flex-cent sous" :class="(tabIndex==3)?'tab-active':''" @click="goPage" data-path="/pages/association/faBuJianZ/faBuJianZ">
        <text>发布{{themeTitle}}</text>
      </view>
    </view>
    
    <view class="card-item"> 
    	<view class="card-toux">
    		 <image src="../../../static/shuijiao.jpg" mode=""></image>
    		 <view class=""><text :style="{color:themeColor}">李如伟</text>对<text :style="{color:themeColor}">胡仙溪</text>进行了<text class="col-ff9600">{{themeTitle}}</text>！</view>
    	</view> 
    	<view class="onecard">
    		<view class="selc-item flex-cent-bet">
    		  <view class="selc-item-left flex-cent">
    		   	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
    		   	<view class="selc-item-txt flex-cent">
    		       <view class="selc-item-name"> 胡仙溪</view>
    		       <view class="selc-item-job flex-cent">
    		         <view class="">互联网公司 HR</view>
    		       </view>
    		     </view>
    		  </view>
    		  <view class="selc-item-type"><button @click="goPage" data-path="/pages/association/jianZhengDetail/jianZhengDetail" class="conf-btn rads" type="primary"  :style="{backgroundImage:backImage}">查看详情</button></view>
    		</view>
        <view class="onecard-txt">
         	这里显示见证的内容，北虏防御得那末周密,他们的军士们是那末守口如瓶。天祥们决无探访一切的可能。——郑振铎《桂公塘》
        </view>
    	</view>
    	<view class="like-count">
    		<view class="flex-cent"><view class="iconfont icon-xihuan col-ff665b "></view><view class="like-num">2000</view></view>
    		<view class="flex-cent"><view class="iconfont icon-liuyan"></view><view class="like-num">20</view></view>
    		<view class="flex-cent"><view class="iconfont icon-fenxiang"></view><view class="like-num">分享</view></view>
    	</view>
    	<view class="card-comment">
    		<view class="comment-item">
    			<view :style="{color:themeColor}">陈伟荣：</view>
    			<view class="">世界是你们，也是我们的 </view>
    		</view> 
    	</view>
    </view>
    <view class="heng"></view>
    <view class="card-item"> 
    	<view class="card-toux">
    		 <image src="../../../static/shuijiao.jpg" mode=""></image>
    		 <view class=""><text :style="{color:themeColor}">李如伟</text>对<text :style="{color:themeColor}">胡仙溪</text>进行了<text class="col-ff9600">{{themeTitle}}</text>！</view>
    	</view> 
    	<view class="onecard">
    		<view class="selc-item flex-cent-bet">
    		  <view class="selc-item-left flex-cent">
    		   	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
    		   	<view class="selc-item-txt flex-cent">
    		       <view class="selc-item-name"> 胡仙溪</view>
    		       <view class="selc-item-job flex-cent">
    		         <view class="">互联网公司 HR</view>
    		       </view>
    		     </view>
    		   </view>
    		   <view class="selc-item-type"><button @click="goPage" data-path="/pages/association/jianZhengDetail/jianZhengDetail" class="conf-btn rads" type="primary"  :style="{backgroundImage:backImage}">查看详情</button></view>
    		</view>
        <view class="onecard-txt">
         	这里显示见证的内容，北虏防御得那末周密,他们的军士们是那末守口如瓶。天祥们决无探访一切的可能。——郑振铎《桂公塘》
        </view>
    	</view>
    	<view class="like-count">
    		<view class="flex-cent"><view class="iconfont icon-xihuan col-ff665b "></view><view class="like-num">2000</view></view>
    		<view class="flex-cent"><view class="iconfont icon-liuyan"></view><view class="like-num">20</view></view>
    		<view class="flex-cent"><view class="iconfont icon-fenxiang"></view><view class="like-num">分享</view></view>
    	</view>
    	<view class="card-comment">
    		<view class="comment-item">
    			<view :style="{color:themeColor}">陈伟荣：</view>
    			<view class="">世界是你们，也是我们的 </view>
    		</view> 
    	</view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex:0,
        page:1,//1见证，2探访，3感恩，4引荐
        themeColor:'#5788ff',
        backImage:'linear-gradient(120deg, #bd7eff 0%, #6247f2 100%)',
        themeTitle:'见证',
			};
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
          title: that.themeTitle||''
      });
    	uni.setNavigationBarColor({
        frontColor:'#ffffff',
        backgroundColor: that.themeColor||'',
      })
    },
    methods: {
    	topTab(index) { //点击tab-bar
    		this.tabIndex = index;
    	},
      goPage(e) {
        let path = e.currentTarget.dataset.path
      	uni.navigateTo({
      		url: path+"?page="+ this.page
      	})
      }
    },
	}
</script>

<style lang="scss">
  .onecard{
    background-color: #f3f5f9;
    border-radius: 15upx;
    padding: 30upx;
    .onecard-txt{
      font-size: 28upx;
      line-height: 52upx;
      color: #353535;
      margin-top: 20upx;
    }
    .selc-item{
      padding-bottom: 20upx;
      border-bottom: #e5e7eb solid 1upx ;
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
        padding: 0 20upx;
        border-radius: 30upx;
        font-size: 20upx;
        color: #fff;
        .conf-btn{
          background-image: linear-gradient(450deg,#37dfc8 0%,#01b49a 100%);
          box-shadow: 0px 3upx 3upx 0px rgba(0, 159, 136, 0.5);
        }
      }
    }
  }
  
  .card-item{
    padding: 30upx;
  }
  .card-tip{
    font-size: 24upx;
    color: #969aa6;
  }
  .fenhui{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f3f7;
    .fenhui-tit{
      display:flex;
      align-items: center;
      font-size: 34upx;
      font-weight:700;
      
      image{
        width: 130upx;
        height: 130upx;
        background-color: #d9d7e0;
        margin-right: 20upx;
      }
    }
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
  .card-toux{
    display: flex;
    align-items: center;
    margin-bottom: 20upx;
    image{
      width: 60upx;
      height: 60upx;
      border-radius: 50%;
      background-color: #f1f3f7;
      display: block;
      margin-right: 8upx;
    }
    .card-name{
      font-size: 34upx;
      font-weight: 700;
      color: #353535;
      margin-right: 8upx;
    }
    .card-hangye{
      color: #969aa6;
    }
    .card-adtxt{
// 			height: 30upx;
// 			line-height: 30upx;
      padding: 0 10upx;
      background-color: #f1f3f7;
      border-radius: 15upx;
      color: #969aa6;
      font-size: 24upx;
    }
  }
  .jianz-top{
    width: 100%;
    height: 62upx;
    background-color: #19c7ad;
    color: #fff;
    font-size: 24upx;
    padding: 0 30upx;
  }
  .top-tab{
    width: 100%;
    height: 100upx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-bottom: #e5e7eb solid 1upx ;
    >view{
      height: 100upx;
      line-height: 100upx;
      font-size: 28upx;
      // border-bottom: #fff solid 6upx;
      position: relative;
      >view{
        position: absolute;
        width: 2upx;
        height: 40upx;
        right:-50upx;
        top:30upx;
        background-color: #e5e7eb;
      }
    }
    .tab-active{
      color: #19c7ad;
      .iconfont{
        color: #5788ff;
      }
    }
  }
</style>
