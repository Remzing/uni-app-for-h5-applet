<template>
	
  <view>
    <view class="yinh-cont">
      <view class="now-yhk flex-cent" @click="goBankSel">
      	<view class="">到账银行卡</view>
      	<view class="">
					<view class="" v-if="!bankInfo.id">请选择银行卡</view>
          <view class="" v-if="bankInfo.id">{{bankInfo.bank_name}}（1779）</view>
          <text class="" v-if="bankInfo.id">提现审核后可到账</text>
        </view>
      	<view class="iconfont icon-youjiantou"></view>
      </view>
    	<view class="cash-inp">
    	  <view class="cash-inp-tit">提现金额</view>
    	  <view class="cash-inp-set flex-cent">
    	  	<view class="">￥</view>
					<input type="text"  placeholder-style="font-size: 36upx;color: #bbbbbb;" @input="codeInput" v-model="code" placeholder="请输入您要提现的金额" />
    	  </view>
    	  <view class="cash-inp-tip">额外扣除￥{{fee}}手续费（费率{{management_cost_ratio||0}}%）</view>
    	</view>
    </view>
  	<view class="bot-min-btn flex-cent-cent">
      <button class="conf-btn rads" type="primary" @click="confTi" >
        确认提现
      </button>
    </view>
  </view>
</template>

<script>
	import util from '@/common/utils/util.js';
	export default {
		data() {
			return {
				balance:'',
				management_cost_ratio:'',
				code:'',
				fee:0,
				bankInfo:{
					id:'',
					bank_id:'',
					bank_name:'',
				}
			};
		},
		onLoad(options) {
			this.options = options
			this.init()
		},
    methods:{
			init(){
				this.$request({
					// 零钱提现初始化
					url:'association/client/wallet/withdrawDepositInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data || {}
						this.balance = _data.balance
						this.management_cost_ratio = _data.management_cost_ratio
						
					}
				})
			},
			codeInput(e) {
				var value = e.target.value;
				this.code=value
				this.fee = Number(this.management_cost_ratio*this.code/100).toFixed(2)
			},
			confTi(){
				if(!this.code){
					util.showModal({content: '请输入金额'})
					return
				}
				this.$request({
					// 提交提现申请
					url:'association/client/wallet/submitWithdrawDeposit.do',
					data: {
						money: this.code,
						bank_id: this.bankInfo.id,
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data || {}
						util.showToast({
							title: res.errmsg+'',
						});
						setTimeout(()=>{
							uni.navigateBack()
						},1000)
					}
				})
			},
			goBankSel() {
				
				uni.navigateTo({
					url: '/pages/my/woDeYHK/woDeYHK'+'?select=1'
				})
			}
		}
	}
</script>

<style lang="scss">
  .yinh-cont{
    min-height: calc( 100vh - 220upx );
  }
  .now-yhk{
    width: 100%;
    height: 168upx;
    background-color: #f4f6fb;
    align-items: flex-start;
    justify-content: space-between;
    padding: 30upx 30upx 0;
    >view:nth-child(1){
      margin-top: 6upx;
    }
    >view:nth-child(2){
      margin-right:184upx;
      >view{
        font-size: 34upx;
      }
      >text{
        font-size: 28upx;
        color: #888888;
      }
    }
    .icon-youjiantou{
      color: #bbbbbb;
    }
  }
  .bot-min-btn{
    
    .conf-btn{
      background-image: unset;
      width: 670upx;
      height: 88upx;
      line-height: 88upx;
      background-color: #5788ff;
      border-radius: 10upx;
      margin: 0 40upx;
      font-size: 34upx;
      .iconfont{
        margin-right: 10upx;
        font-size: 34upx;
      }
    }
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
</style>
