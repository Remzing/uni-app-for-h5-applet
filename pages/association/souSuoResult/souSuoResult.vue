<template>
	<view>
    <view class="sous-top">
    	<view class="sous-inp flex-cent-bet">
    		<input type="text" value="" placeholder="输入要搜索的关键词" placeholder-style="color:#bbb;"/>
    	  <view class="iconfont icon-sousuo"></view>
    	</view>
      <view class="resu-num">3221条结果 </view>
      <view class="no-cont">
        <view class="iconfont icon-meiyouneirong" ></view>
      	<view class="resu-num">抱歉，未能在通讯录检索到你输入的关键词！ </view>
      </view>
    </view>
    <view class="heng"></view>
    <view class="tongx-num cell-bot">您是不是在查找TA</view>
		<view class="selc-item flex-cent-bet cell-bot">
		  <view class="selc-item-left flex-cent">
		  	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
		  	<view class="selc-item-txt flex-cent">
		      <view class="selc-item-name"> 是对的</view>
		      <view class="selc-item-job flex-cent">
		        <view class=""><view class="iconfont icon-hangye"></view>软件开发</view>
		        <view class=""><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
		      </view>
		    </view>
		  </view>
		  <view class="selc-item-type"><button class="conf-btn rads" type="primary">加入TA的社群</button></view>
		</view>
    <view class="selc-item flex-cent-bet">
      <view class="selc-item-left flex-cent">
      	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      	<view class="selc-item-txt flex-cent">
          <view class="selc-item-name"> 是对的</view>
          <view class="selc-item-job flex-cent">
            <view class=""><view class="iconfont icon-hangye"></view>软件开发</view>
            <view class=""><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
          </view>
        </view>
      </view>
      <!-- <view class="selc-item-type"><button class="conf-btn rads" type="primary">加入TA的社群</button></view> -->
    </view>
    <view class="heng"></view>
    <view class="tongx-num cell-bot">通讯录 23</view>
    <view class="selc-item flex-cent-bet cell-bot">
      <view class="selc-item-left flex-cent">
      	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      	<view class="selc-item-txt flex-cent">
          <view class="selc-item-name"> 是对的</view>
          <view class="selc-item-job flex-cent">
            <view class=""><view class="iconfont icon-hangye"></view>软件开发</view>
            <view class=""><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
          </view>
        </view>
      </view>
      <!-- <view class="selc-item-type"><button class="conf-btn rads" type="primary">加入TA的社群</button></view> -->
    </view>
    <view class="selc-item flex-cent-bet cell-bot">
      <view class="selc-item-left flex-cent">
      	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      	<view class="selc-item-txt flex-cent">
          <view class="selc-item-name"> 是对的</view>
          <view class="selc-item-job flex-cent">
            <view class=""><view class="iconfont icon-hangye"></view>软件开发</view>
            <view class=""><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
          </view>
        </view>
      </view>
      <!-- <view class="selc-item-type"><button class="conf-btn rads" type="primary">加入TA的社群</button></view> -->
    </view>
    <view class="setup-item flex-cent-bet" @click="goPage" data-path="/pages/association/touPiaoOper/touPiaoOper" data-page='1'>
    	<view class="setup-item-left flex-cent"><view class="iconfont icon-sousuo" ></view><view class="">更多通讯联系人</view></view>
    	<view class="setup-item-right flex-cent">
        <view class="iconfont icon-youjiantou" ></view>
      </view> 
    </view>
    <view class="heng"></view>
    <view class="tongx-num cell-bot">社宾学院老师 3</view>
    <view class="laoshi-box cell-bot">
    	<view class="laoshi-item">
        <view class="laoshi-item-img">
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <view class="">腾讯天美工作室腾讯天美工作室</view>
        </view>
        <view class="laoshi-item-name">
          <view class="iconfont icon-huiyuan" ></view>
          <text>陈伟霞</text>
        </view>
      </view>
      <view class="laoshi-item">
        <view class="laoshi-item-img">
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <view class="">腾讯天美工作室腾讯天美工作室</view>
        </view>
        <view class="laoshi-item-name">
          <view class="iconfont icon-huiyuan" ></view>
          <text>陈伟霞</text>
        </view>
      </view>
      <view class="laoshi-item">
        <view class="laoshi-item-img">
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <view class="">腾讯天美工作室腾讯天美工作室</view>
        </view>
        <view class="laoshi-item-name">
          <view class="iconfont icon-huiyuan" ></view>
          <text>陈伟霞</text>
        </view>
      </view>
    </view>
    <view class="setup-item flex-cent-bet" @click="goPage" data-path="/pages/association/touPiaoOper/touPiaoOper" data-page='1'>
    	<view class="setup-item-left flex-cent"><view class="iconfont icon-sousuo" ></view><view class="">更多社宾学院老师</view></view>
    	<view class="setup-item-right flex-cent">
        <view class="iconfont icon-youjiantou" ></view>
      </view> 
    </view>
    <view class="heng"></view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				page:''
			};
		},
    onLoad(options) {
    	this.page=options.page
    },
    methods:{
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
    background-color: #f1f3f7;
  }
  .no-cont{
    text-align: center;
    color: #fff;
    .iconfont{
      margin:-46upx 0;
      font-size: 110upx;
    }
  }
  .laoshi-box{
    padding: 30upx 10upx;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    .laoshi-item{
      width: 206upx;
      margin-left: 30upx;
      .laoshi-item-img{
        width: 100%;
        height: 280upx;
        position: relative;
        image{
          width: 100%;
          height: 100%;
          background-color: #5788ff;
          box-shadow: 0px 5upx 6upx 0px 
            rgba(122, 125, 134, 0.5);
        }
        >view{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 44upx;
          padding: 0 10upx;
          font-size: 24upx;
          line-height: 44upx;
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.5);
          box-shadow: 0px 5upx 6upx 0px 
            rgba(122, 125, 134, 0.25);
          
          text-overflow:ellipsis;
          overflow:hidden;
          white-space:nowrap;
            
        }
      }
      .laoshi-item-name{
        .iconfont{
          font-size: 28upx;
          color: #969aa6;
          margin-right: 10upx;
        }
        text{
          font-size: 24upx;
        }
      }
    }
  }
  .setup-item{
    height: 82upx;
    .setup-item-left{
      color: #5788ff;
      >view{
        font-size: 24upx;
      }
    }
    
  }
  .tongx-num{
    padding: 10upx 30upx;
    font-size: 24upx;
    line-height: 52upx;
    color: #969aa6;
    background: #fff;
  }
  .selc-item{
    padding: 20upx 30upx 20upx 30upx;
    background: #fff;
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
    }
  }
  .sous-top{
    background-color: #5788ff;
    padding-top: 30upx;
    .resu-num{
      font-size: 24upx;
      line-height: 52upx;
      padding: 8upx 0;
      color: #ffffff;
      text-align: center;
    }
  }
  .sous-inp{
    width: 670upx;
    height: 88upx;
    margin: 0 40upx 0upx;
    padding: 0 20upx;
    background-color: #ffffff;
    box-shadow: 0px 3upx 2upx 0px 
      rgba(220, 220, 220, 0.5);
    border-radius: 5upx;
    input{
      font-size: 30upx;
      color: #bbbbbb;
    }
    .iconfont{
      font-size: 42upx;
      color: #dddddd;
    }
  }
</style>
