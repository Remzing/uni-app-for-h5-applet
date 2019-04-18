<template>
	<view class="mar-cont">
    <view class="set-pay">
    	<view class="set-pay-ico">
    		<view class="iconfont icon-qianbao"></view>
    	</view>
      <view class="set-pay-txt">
      	<view class="">您正在向申请的社群支付会员费用！</view>
      	<view class="">完成支付后，你的会员到期时间是：<text class="col-5788ff">2018-11-12</text></view>
      </view>
    </view>
    <view class="heng"></view>
    <view class="asso-item">
      <view class="asso-info flex-cent-bet">
        <view class="asso-img flex-cent">
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <view class="asso-txt">
            <view class="">北京创客团</view>
            <view class="">
              <text>创客帮 </text>
             </view>
          </view>
        </view>
        <view class="col-dd0000">￥258/年</view>
      </view>
    </view>
    <view class="pingd-txt">
    	<view class="col-969aa6">请您提供以下信息！</view>
    	<view class="flex-cent" @click="editHandle">
        <view class="iconfont icon-bianji col-5788ff" v-if="!isEdit"></view>
        <view class="col-5788ff">{{isEdit?'取消编辑':'重新编辑'}}</view>
      </view>
    </view>
    <view class="" v-if="isEdit">
    	<view class="inp-item">
    		<view class=""><input type="text" :value="formData.name" placeholder="填写真实姓名" placeholder-class="col-bbb" /></view>
    		<view class=""></view>
    	</view>
    	<view class="inp-item">
    		<view class=""><input type="text" :value="formData.job" placeholder="输入或选择目前所属行业" placeholder-class="col-bbb" /></view>
    		<view class="iconfont icon-youjiantou"></view>
    	</view>
    	<view class="inp-item">
    		<view class=""><input type="text" :value="formData.phone" placeholder="输入手机号码" placeholder-class="col-bbb" /></view>
    		<view class=""><button class="conf-btn rads" type="primary">获取验证码</button></view>
    	</view>
    </view>
    <view class="" v-if="!isEdit">
    	<view class="inp-item">
    		<view class="">
    		  <text class="col-969aa6">姓名：</text>
    		  <text>{{formData.name}}</text>
    		</view>
    	</view>
    	<view class="inp-item">
    		<view class="">
    		  <text class="col-969aa6">行业：</text>
    		  <text>{{formData.job}}</text>
    		</view>
    	</view>
    	<view class="inp-item">
    		<view class="">
    		  <text class="col-969aa6">电话：</text>
    		  <text>{{formData.phone}}</text>
    		</view>
    	</view>
    </view>
    <view class="inp-item">
      <view class="tuijr">
      	<view class="">推荐人：李科  1383339774</view>
      	<view class="">根据推荐人转发而自动获取，如需更换请联系新推荐人重新进入</view>
      </view>
    </view>
    <view class="join-btn"><button class="conf-btn" type="primary" @click="payFee">微信支付￥258</button></view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				formData:{ 
          name: "黄细花",
          job: "软件服务行业",
          phone: "3535646659",
        },
        isEdit: false
			};
		},
    methods: {
    	payFee() {
    		uni.navigateTo({
    			url: '/pages/association/joinSuccess/joinSuccess'
    		})
    	},
      editHandle(){
        this.isEdit = !this.isEdit
      }
    },
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
  
  .inp-item{
    padding: 30upx;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: #e5e7eb solid 1upx;
  }
  .inp-item:first-child{
    border-top: unset;
  }
  .tuijr{
    view:first-child{
      font-size: 30upx;
      line-height: 52upx;
      color: #353535;
    }
    view:last-child{
      font-size: 24upx;
      line-height: 48upx;
      color: #969aa6;
    }
  }
  .inp-item:first-child{
    border-top: unset;
  }
  .asso-item:last-child{
    margin-bottom: 0;
  }
  .set-pay{
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 30upx;
    .set-pay-ico{
      width: 80upx;
      height: 80upx;
      border-radius: 80upx;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #5788ff;
      margin-right: 20upx;
      .iconfont{
        font-size: 46upx;
        color: #fff;
      }
    }
    .set-pay-txt{
      view:first-child{
        font-size: 28upx;
        color: #555555;
      }
      view:last-child{
        font-size: 24upx;
        color: #969aa6;
      }
    }
  }
</style>
