<template>
	<view>
		<view class="qianb-head">
      <view class="yu-box flex-cent-cent">
      	<view class="yu-num">{{infoData.yue||'0.00'}}</view>
      	<view class="yu-txt">余额（元）</view>
      </view>
			<view class="jiaomin" @click="goPage" data-path="/pages/my/jiaoYiMingXi/jiaoYiMingXi" >交易明细</view>
		</view>
    <view class="bao-box flex-cent">
    	<view class="bao-item flex-cent-cent" @click="showMiddlePopup()">
    		<view class="iconfont icon-yuechongzhi"></view>
        <view class="">余额充值</view>
    	</view>
      <view class="bao-item flex-cent-cent"  @click="goPage" data-path="/pages/my/tiXian/tiXian" data-page='1' >
      	<view class="iconfont icon-tixian"></view>
        <view class="">零钱提现</view>
      </view>
      <view class="bao-item flex-cent-cent" @click="goPage" data-path="/pages/my/woDeYHK/woDeYHK">
      	<view class="iconfont icon-yinhangqia"></view>
        <view class="">银行卡</view>
      </view>
    </view>
    <view class="heng"></view>
    <view class="bao-tip flex-cent">
    	社宾服务
    </view>
    <view class="bao-box flex-cent">
    	<view class="bao-item flex-cent-cent">
    		<view class="iconfont icon-huiyuan"></view>
        <view class="">社宾会员</view>
    	</view>
      <view class="bao-item flex-cent-cent">
      	<view class="iconfont icon-xueyuan"></view>
        <view class="">社宾学院</view>
      </view>
      <view class="bao-item flex-cent-cent">
      	<view class="iconfont icon-shuyou"></view>
        <view class="">书友会</view>
      </view>
    </view>
    
    <!-- popup 提现-->
    <uni-popup :show="showPopup" :type="popType"  v-on:hidePopup="hidePopup" >
      <view class="" v-if="popState==1">
        
        <view class="cash-inp">
          <view class="cash-inp-tit">充值余额</view>
          <view class="cash-inp-set flex-cent">
            <view class="">￥</view>
            <input type="text"  @input="payMoneyInput" v-model="payMoney" placeholder-style="font-size: 36upx;color: #bbbbbb;" placeholder="请输入您要充值的金额" />
          </view>
          <!-- <view class="cash-inp-tip">额外扣除￥0.10手续费（费率0.1%）</view> -->
        </view>
        <view class="join-btn pop-btn" style="margin-top: 30upx;">
          <button class="conf-btn" type="primary" @click="payNum()">微信支付</button>
          <!-- <view class=""></view>
          <view class=""></view> -->
        </view>
      </view>
      
      <!-- <view class="" v-if="popState==3">
        <view class="tixian-top flex-cent-cent succ-box">
          <view class="succ-ico flex-cent-cent">
            <view class="iconfont icon-xuanze" ></view>
          </view>
          <view class="succ-txt">提现申请成功!</view>
          <view class="succ-tips">我们将会在1-3个工作日，完成申请审批，审核通过后会以短信、微信消息的方式告知与你，或者你可以随时查看提现申请记录！!</view>
        </view>
        <view class="join-btn pop-btn"><button class="conf-btn" type="primary" @click="tixianHandle(3)">好的</button></view>
      </view> -->
    </uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup.vue';
	import util from '@/common/utils/util';
	export default {
	  components: {
	  	uniPopup
	  },
		data() {
			return {
				showPopup: false,
				popType:'bottom',
        popState:0, //1,2,3
				infoData:{
					yue:''
				},
				payMoney:'',
			};
		},
		onLoad() {
			this.init()
			
		},
    methods: {
			init(){
				// console.log('WeixinJSBridge', WeixinJSBridge)
				// this.payNum()
				this.$request({
					// 钱包初始化
					url:'/association/client/wallet/walletInit.do',
					data: {
					},
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						this.infoData.yue =  _data.toFixed(2)
					}
				})
			},
			payNum(){
				if(!this.payMoney){
					util.showModal({content: '请输入充值金额'})
					return
				}				
				this.$request({
					// 钱包初始化
					url:'/association/client/wallet/recharge.do',
					data: {
						pay_type: '1',
						app_id: 'wx3723bdf8e284b04c',
						money: this.payMoney||'0.01'
					},
					success: (res) => {
						console.log('request success', res)
						let data = res
						let that = this
						function onBridgeReady(){
							 WeixinJSBridge.invoke(
									'getBrandWCPayRequest', {
											"appId": data.appId, //公众号名称，由商户传入 ok
											"timeStamp": data.timeStamp, //时间戳，自1970年以来的秒数 ok    
											"nonceStr": data.nonceStr, //随机串     
											"package": data.package,
											"signType": data.signType, //微信签名方式    
											"paySign": data.paySign //微信签名 
										},
									function(res){
										console.log('onBridgeReady-back', res)
										if(res.err_msg == "get_brand_wcpay_request:ok" ){
										// 使用以上方式判断前端返回,微信团队郑重提示：
												//res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
										that.hidePopup()
										that.init()
										console.log('支付成功！')
									} 
							 }); 
						}
						if (typeof WeixinJSBridge == "undefined"){
							 if( document.addEventListener ){
									 document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
							 }else if (document.attachEvent){
									 document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
									 document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
							 }
						}else{
							console.log('onBridgeReady-run')
							 onBridgeReady();
						}
						
						
					}
				})
				
			},
			payMoneyInput(e) {
				var value = e.target.value;
				this.payMoney=value
			},
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
        uni.navigateTo({
          url: path+'?page='+page
        })
      },
    	//展示居中 popup
    	showMiddlePopup() {
    		this.hidePopup();
    		this.popType = 'bottom';
    		this.showPopup = true;
    	},
    	//统一的关闭popup方法
    	hidePopup() {
    		this.showPopup = false;
    	  this.popState=1
    	},
      tixianHandle(state){
        this.popState = state+1
        if (this.popState==4) {
        	this.hidePopup()
        }
      }
    },
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
  .uni-popup-bottom{
    height:auto;
    .tixian-top{
      padding: 30upx;
      .tixian-fot{
        font-size: 34upx;
        font-weight: 700;
      }
      .iconfont{
        font-size: 40upx;
        color: #bbbbbb;
      }
    }
  }
  .cash-inp-tit{
    font-size: 24upx;
    text-align: left;
  }
  .cash-inp{
    height: 229upx;
    border-radius: 10upx;
    padding: 20upx 15upx 20upx 26upx;
    margin:0 30upx 30upx;
    
    .cash-inp-set{
      border-bottom: #e5e7eb solid 1upx;
      >view{
        font-size: 50upx;
        margin-right: 20upx;
      }
      input{
        text-align: left;
        font-size: 36upx;
      }
    }
    .cash-inp-tip{
      font-size: 24upx;
      color: #969aa6;
      text-align: left;
      margin-top: 6upx;
    }
  }
  
  .bao-tip{
    height: 72upx;
    padding: 0 30upx;
    font-size: 24upx;
    font-weight: 700;
    border-bottom: #e5e7ed solid 1upx;
    background-color: #fff;
  }
  .bao-box{
    background-color: #fff;
    .bao-item{
      height: 175upx;
      flex-direction: column;
      border-right: #e5e7ed solid 1upx;
      flex: 1;
    }
    .iconfont{
      font-size: 42upx;
      color: #5788ff;
    }
  }
  .qianb-head{
    width: 100%;
    height: 270upx;
    background-color: #5788ff;
    position: relative;
    .yu-box{
      flex-direction: column;
      .yu-num{
        font-size: 100upx;
        color: #ffffff;
      }
      .yu-txt{
        font-size: 24upx;
        line-height: 52upx;
        color: #ffffff;
      }
    }
    .jiaomin{
      position: absolute;
      right: 30upx;
      top: 20upx;
      font-size: 24upx;
      color: #ffffff;
      text-underline-position: above;
    }
  }
</style>
