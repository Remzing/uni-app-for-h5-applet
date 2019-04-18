<template>
	<view>
		
    <view class="recent-txt flex-cent-bet">
      <view class="">2019-10</view>
      <view class=""></view>
    </view>
    <view class="minx-item flex-cent-bet" v-for="(item, index) in infoData" :key="index">
    	<view class="minx-item-left">
    		<view class="">{{item.type}}<text></text></view>
    		<view class="">{{item.balance}}</view>
    	</view>
      <view class="minx-item-right">
      	<view class=""><text class="col-5788ff">{{item.money}}</text></view>
        <view class="">{{item.update_time}}</view>
      </view>
    </view>
    <!-- <view class="minx-item flex-cent-bet">
    	<view class="minx-item-left">
    		<view class="">微信充值</view>
    		<view class="">收入成功</view>
    	</view>
      <view class="minx-item-right">
      	<view class=""><text class="col-dd0000">-733.00</text></view>
        <view class="">2018.06.20 09:00:00</view>
      </view>
    </view> -->
	</view>
</template>

<script>

	export default {
    
		data() {
			return {
				infoData:[]
			};
		},
		onLoad() {
			this.$request({
				// 交易明细列表
				url:'association/client/wallet/dealList.do',
				data: {
				},
				success: (res) => {
					console.log('request success', res)
					let _data = res.data
					this.infoData =  _data.records
				}
			})
		},
    methods: {
      
    },
	}
</script>

<style lang="scss">
  .mar-bot{
    margin-bottom: 30upx !important;
  }
  .inp-top{
    padding: 20upx 50upx;
  }
  .inp-item{
    border-bottom: #e5e7eb solid 1upx;
    margin: 0 50upx;
    padding: 20upx 0;
    input{
      text-align: left;
      font-size: 30upx;
      // color: #bbbbbb;
    }
  }
  .cash-inp-tit{
    font-size: 24upx;
    font-weight: 700;
    text-align: left;
  }
  .cash-inp{
    height: 229upx;
    background-color: #f6f7fa;
    border-radius: 10upx;
    padding: 20upx 15upx 20upx 26upx;
    margin:0 30upx 30upx;
    
    .cash-inp-set{
      border-bottom: #e5e7eb solid 1upx;
      >view{
        font-size: 60upx;
        font-weight: 700;
        margin-right: 20upx;
      }
      input{
        text-align: left;
        font-size: 36upx;
        // color: #bbbbbb;
      }
    }
    .cash-inp-tip{
      font-size: 24upx;
      color: #969aa6;
      text-align: left;
      margin-top: 6upx;
    }
  }
  .pop-btn{
    position: unset;
    z-index: 300;
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
  .tixian-tips{
    padding: 0 30upx 30upx;
    align-items: flex-start;
    >view{
      text-align: left;
      font-size: 24upx;
    }
    .iconfont{
      color: #5788ff;
      font-size: 32upx;
      margin-right: 10upx;
    }
  }
  .succ-box{
    flex-direction: column;
    .succ-ico{
      width: 150upx;
      height: 150upx;
      border-radius: 150upx;
      background-image: linear-gradient(120deg, 
        #39abf8 0%, 
        #7184fe 100%);
      .iconfont{
        font-size: 78upx !important;
        color: #fff !important;
      }
      
    }
    .succ-txt{
      font-size: 34upx;
      font-weight: 700;
      margin: 30upx 0;
    }
    .succ-tips{
      font-size: 28upx;
      line-height: 48upx;
      color: #888888 !important;
    }
  }
  
  .minx-item{
    padding: 20upx 30upx;
    border-bottom: #e5e7eb solid 1upx;
    .minx-item-left{
      view:nth-child(1){
        font-size: 34upx;
        font-weight: 700;
        text{
          font-size: 24upx;
          margin-left: 10upx;
        }
      }
      view:nth-child(2){
        font-size: 24upx;
        color: #969aa6;
      }
    }
    .minx-item-right{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      view:nth-child(1){
        font-size: 34upx;
        
      }
      view:nth-child(2){
        font-size: 24upx;
        color: #888;
      }
    }
  }
  .sous{
    text{
      font-size: 28upx;
    }
    .iconfont{
      color: #bbbbbb;
      font-size: 24upx;
      margin-left: 6upx;
    }
  }
  .top-tab{
    width: 100%;
    height: 100upx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: #e5e7eb solid 1upx;
    background-color: #fff;
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
      color: #5788ff;
      border-bottom: #5788ff solid 6upx;
      .iconfont{
        color: #5788ff;
      }
    }
  }
  .recent-txt{
    width: 100%;
    height: 72upx;
    background-color: #f1f3f7;
    padding: 0 30upx;
    view:first-child{
      font-size: 24upx;
    }
    view:last-child{
      font-size: 24upx;
      color: #969aa6;
    }
  }
  .fi-head{
    width: 100%;
    height: 325upx;
    background-color: #5788ff;
    color: #fff;
    >view{
      padding: 0 30upx;
    }
    .fi-tips{
      width: 100%;
      height: 68upx;
      background-color: #6e98ff;
      .iconfont{
        font-size: 32upx;
        margin-right: 10upx;
      }
      text{
        font-size: 24upx;
      }
    }
    .yue-txt{
      font-size: 24upx;
      line-height: 52upx;
      color: #ffffff;
      margin-top: 28upx;
    }
    .yue-num{
      font-size: 72upx;
      font-weight: 700;
      text{
        font-size: 36px;
      }
    }
    .yue-count{
      font-size: 24upx;
      text{
        margin: 0 12upx;
      }
    }
    
    
  }
  
  #payPwd .pwd-wrap{
    width: 90%;
    height: 95upx;
    padding-bottom: 1px;
    margin: 0 auto;
    background: #fff;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom:30upx;
  }
  
  .pwd-wrap view{
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-flex: 1;
    border:1px solid #ddd;
    height:100%;
    width: 95upx;
  }
  // border: solid 1px #5788ff;
  .pwd-wrap .active{
    border: solid 1px #5788ff !important;
  }
  .hide-inp{
    width:200%;
    height: 210upx;
    position: absolute;
    opacity: 0;
    left: -100%;
    text-align: left;
  }
</style>
