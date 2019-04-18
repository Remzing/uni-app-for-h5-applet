<template>
	<view>
    <view class="more-head">
    	<view class="more-head-set flex-cent-bet">
    		<view class="more-head-info flex-cent">
    			<image src="../../../static/shuijiao.jpg" mode=""></image>
          <view class="more-head-txt">
          	<view class="">北京创客团</view>
          	<view class="">类型：精英会 | 发起人：李伟斌</view>
          </view>
    		</view>
        <view class=""><button class="conf-btn" type="primary">马上续费</button></view>
    	</view>
    </view>
    <view class="more-tit flex-cent mor-huiy">
      <view class="flex-cent">
        <view class="">会员到期：</view>
        <view class="mor-text">2019-10-10 剩余<text style="color: #ff3c00;">10</text>天，为免影响使用请尽快续期！</view>
      </view>
    </view>
    <view class="more-tit flex-cent-bet">
      <view class="">常用应用</view>
      <view class="">长按下面图标操作排序，前10个才会显示到通讯录顶部</view>
    </view>
		<view class="flex-cent app-box">
			<view class="flex-cent app-box-item">
				<image src="../../../static/img/cj.png" mode=""></image>
		    <view class="">抽奖</view>
			</view>
		  <view class="flex-cent app-box-item">
				<image src="../../../static/img/hd.png" mode=""></image>
		    <view class="">活动</view>
			</view>
		   <view class="flex-cent app-box-item">
		  	<image src="../../../static/img/sbxy.png" mode=""></image>
		    <view class="">学院</view>
		  </view>
		   <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/jianZheng/jianZheng" data-page='1'>
		  	<image src="../../../static/img/jz.png" mode=""></image>
		    <view class="">见证</view>
		  </view>
		   <view class="flex-cent app-box-item" @click="goPage"  data-path="/pages/association/jianZheng/jianZheng" data-page='4'>
		  	<image src="../../../static/img/yinj.png" mode=""></image>
		    <view class="">引荐</view>
		  </view>
		   <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/jianZheng/jianZheng" data-page='3'>
		  	<image src="../../../static/img/ganen.png" mode=""></image>
		    <view class="">感恩</view>
		  </view>
      <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/jianZheng/jianZheng" data-page='2'>
      	<image src="../../../static/img/ph.png" mode=""></image>
        <view class="">探访</view>
      </view>
      <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/jiaBin/jiaBin">
      	<image src="../../../static/img/ph.png" mode=""></image>
        <view class="">嘉宾</view>
      </view>
		  <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/touPiao/touPiao">
		  	<image src="../../../static/img/syh.png" mode=""></image>
		    <view class="">投票</view>
		  </view>
		   <view class="flex-cent app-box-item">
		  	<image src="../../../static/img/sc.png" mode=""></image>
		    <view class="">商场</view>
		  </view>
      <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/souSuo/souSuo" data-page='1'>
      	<image src="../../../static/img/syh.png" mode=""></image>
        <view class="">书友</view>
      </view>
		   <view class="flex-cent app-box-item">
		  	<image src="../../../static/img/ph.png" mode=""></image>
		    <view class="">名片</view>
		  </view>
      <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/paiHangBang/paiHangBang">
      	<image src="../../../static/img/ph.png" mode=""></image>
        <view class="">排行</view>
      </view>
      <view class="flex-cent app-box-item">
      	<image src="../../../static/img/ph.png" mode=""></image>
        <view class="">邀请</view>
      </view>
      
		</view>
    <view class="more-tit flex-cent-bet">
      <view class="">管理应用</view>
      <view class=""></view>
    </view>
    <view class="flex-cent app-box">
    	<view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/finance/finance">
    		<image src="../../../static/img/cj.png" mode=""></image>
        <view class="">财务</view>
    	</view>
      <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/reportForm/reportForm">
    		<image src="../../../static/img/hd.png" mode=""></image>
        <view class="">报表</view>
    	</view>
       <view class="flex-cent app-box-item">
      	<image src="../../../static/img/jz.png" mode=""></image>
        <view class="">管理</view>
      </view>
       <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/shenhe/shenhe">
      	<image src="../../../static/img/yinj.png" mode=""></image>
        <view class="">审核</view>
      </view>
       <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/setup/setup">
      	<image src="../../../static/img/ganen.png" mode=""></image>
        <view class="">设置</view>
      </view>
       <view class="flex-cent app-box-item" @click="goPage" data-path="/pages/association/groupSend/groupSend">
      	<image src="../../../static/img/ganen.png" mode=""></image>
        <view class="">群发 </view>
      </view>
      
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
    methods: {
    	goPage(e) {
    	  let path = e.currentTarget.dataset.path
    	  let page = e.currentTarget.dataset.page||''
    		uni.navigateTo({
    			url: path+'?page='+page
    		})
    	}
    },
	}
</script>

<style lang="scss">
  .mor-huiy{
    background-color: #fff !important;
  }
  .mor-text{
    font-size: 24upx;
    color: #353535;
    margin-left: 10upx;
    font-weight: normal;
  }
  .more-head{
    position: relative;
    // background-image: "../../../static/shuijiao.jpg"
    width: 100%;
    height: 300upx;
    background-color: #5788ff;
    .more-head-set{
      position: absolute;
      bottom: 10upx;
      left: 20upx;
      padding: 0 12upx;
      width: 710upx;
      height: 120upx;
      background-color: rgba(0, 0, 0, 0.5);
      image{
        width: 100upx;
        height: 100upx;
        margin-right: 16upx;
      }
      .conf-btn{
        height: 54upx;
        line-height: 54upx;
        background-color: #ff3c00;
        background-image: unset;
        box-shadow: unset;
        border-radius: 8upx;
      }
      .more-head-txt{
        view:first-child{
          font-size: 34upx;
          line-height: 52upx;
          color: #ffffff;
          font-weight: 700;
        }
        view:last-child{
          font-size: 24upx;
          line-height: 52upx;
          color: #ffffff;
        }
      }
    }
  }
  .more-tit{
    height: 70upx;
    padding: 0 30upx;
    background-color: #f1f3f7;
    view:first-child{
      font-size: 24upx;
      font-weight: 700;
      color: #353535;
    }
    view:last-child{
      font-size: 20upx;
      color: #888888;
    }
  }
 .app-box{
    flex-wrap: wrap;
    padding: 30upx 0 0;
    .app-box-item{
      flex-direction: column;
      margin-left: 66upx;
      margin-bottom: 30upx;
      image{
        width: 72upx;
        height: 72upx;
      }
      >view{
        font-size: 24upx;
        line-height: 52upx;
      }
    }
  }
</style>
