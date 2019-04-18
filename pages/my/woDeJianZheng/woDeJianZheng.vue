<template>
	<view>
    <view class="wodeset-top flex-cent-cent"  :style="{backgroundColor:themeColor}">
    	<view class="wodeset-top-sel flex-cent">
    		<view class="flex-cent-cent actset"  :style="{color:themeColor}">我发布的{{themeTitle}}</view>
    		<view class="flex-cent-cent"  :style="{backgroundColor:themeColor}">我参与的{{themeTitle}}</view>
    	</view>
    </view>
    <!-- {{themeTitle}} -->
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
    		<view class=""><view class="iconfont icon-xihuan col-ff665b "></view><view class="like-num">2000</view></view>
    		<view class=""><view class="iconfont icon-liuyan"></view><view class="like-num">20</view></view>
    		<view class=""><view class="iconfont icon-fenxiang"></view><view class="like-num">分享</view></view>
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
    		<view class=""><view class="iconfont icon-xihuan col-ff665b "></view><view class="like-num">2000</view></view>
    		<view class=""><view class="iconfont icon-liuyan"></view><view class="like-num">20</view></view>
    		<view class=""><view class="iconfont icon-fenxiang"></view><view class="like-num">分享</view></view>
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
	.wodeset-top{
		width: 100%;
		height: 100upx;
		background-color: #5a71fa;
		.wodeset-top-sel{
			width: 460upx;
			height: 66upx;
			background-color: #5a71fa;
			border-radius: 33upx;
			border: solid 1upx #ffffff;
			overflow: hidden;
			>view{
				flex: 1;
				text-align: center;
				color: #fff;
				height: 100%;
			}
			.actset{
				background-color: #fff;
				color: #5a71fa;
			}
		}
	}
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
  
</style>
