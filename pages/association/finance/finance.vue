<template>
	<view>
		<view class="fi-head">
      <view class="fi-tips flex-cent">
      	<view class="iconfont icon-tishi" ></view>
        <text>以下数据仅限于【深圳精英会社群】提现权限需社群管理分配</text>
      </view>
      <view class="yue-txt">余额（元）</view>
      <view class="yue-num">100 <text>.00</text></view>
      <view class="yue-count">累计收入：￥1999.23 <text> | </text> 已提现：0.00</view>
    </view>
    <view class="recent-txt flex-cent-bet">
      <view class="">最近明细</view>
      <view class="">以下数据显示的是与本社群有关的数据</view>
    </view>
    <view class="top-tab">
    	<view v-for="(tab,index) in tabBars"
       :key="tab.id" :class="(tabIndex==index)?'tab-active':''" 
       @click="topTab(index)" >{{tab.name}}<view class=""></view></view>
      <view class="flex-cent sous" @click="topTab(3)" :class="(tabIndex==3)?'tab-active':''" >
        <text>筛选时间</text>
       	<view class="iconfont icon-xiala"></view>
      </view>
    </view>
    <view class="minx-item flex-cent-bet">
    	<view class="minx-item-left">
    		<view class="">李强的报名费<text></text></view>
    		<view class="">2018.06.20 09:00:00</view>
    	</view>
      <view class="minx-item-right">
      	<view class=""><text class="col-5788ff">+5,733.00</text></view>
        <view class="">收入</view>
      </view>
    </view>
    <view class="minx-item flex-cent-bet">
    	<view class="minx-item-left">
    		<view class="">李冬梅(财务主管)提现 <text class="col-dd0000">[审核中]</text></view>
    		<view class="">2018.06.20 09:00:00</view>
    	</view>
      <view class="minx-item-right">
      	<view class=""><text class="col-dd0000">-733.00</text></view>
        <view class="">支出</view>
      </view>
    </view>
    <view class="join-btn"><button class="conf-btn" type="primary" @click="showMiddlePopup">提现</button></view>
    
    <!-- popup 提现-->
    <uni-popup :show="showPopup" :type="popType">
    	<view class="" v-if="popState==1">
    		<view class="tixian-top flex-cent-bet">
    			<view class="tixian-fot">申请提现</view>
    			<view class="iconfont icon-guanbi" @click="hidePopup" ></view>
    		</view>
        <view class="tixian-tips flex-cent">
        	<view class="iconfont icon-tishi" ></view>
          <view class="">您 <text class="col-5788ff">李冬梅</text> 正在向平台发起申请<text class="col-5788ff">【深圳创客邦精英会】</text>的余额
提现，不是本人请谨慎操作！</view>
        </view>
        <view class="cash-inp">
          <view class="cash-inp-tit">提现金额</view>
          <view class="cash-inp-set flex-cent">
          	<view class="">￥</view>
            <input type="text" value="" placeholder-style="font-size: 36upx;color: #bbbbbb;" placeholder="请输入您要提现的金额" />
          </view>
          <view class="cash-inp-tip">额外扣除￥0.10手续费（费率0.1%）</view>
        </view>
        <view class="cash-inp-tit inp-top">银行卡信息</view>
        <view class="inp-item">
          <input type="text" value="" placeholder-style="font-size: 30upx;color: #bbbbbb;" placeholder="请输入持卡人姓名" />
        </view>
        <view class="inp-item">
          <input type="text" value="" placeholder-style="font-size: 30upx;color: #bbbbbb;" placeholder="请输入银行卡卡号" />
        </view>
        <view class="inp-item mar-bot">
          <input type="text" value="" placeholder-style="font-size: 30upx;color: #bbbbbb;" placeholder="请输入银行卡开户行名称，具体到分行支行" />
        </view>
        <view class="join-btn pop-btn"><button class="conf-btn" type="primary" @click="tixianHandle(1)">确定提交</button></view>
    	</view>
      <view class="" v-if="popState==2">
      	<view class="tixian-top flex-cent-bet">
      		<view class="tixian-fot">输入提现密码</view>
      		<view class="iconfont icon-guanbi" @click="hidePopup" ></view>
      	</view>
        <view class="tixian-tips flex-cent">
          <view class="iconfont icon-tishi" ></view>
          <view class="">如忘记提现密码，请联系社群管理员重置！</view>
        </view>
        <view class="">
        	<view id="payPwd">
            <input v-if="pwdInpShow"  type='number' class="hide-inp" auto-focus="true" maxlength="6" :value="msg" v-model="msg" @confirm="sendPwd"/>
           
            <view class="pwd-wrap" >
              <view :class="(msgLength==0||msgLength==6)?'active':''" ><view v-if="msgLength > 0" class="iconfont icon-yuandianda" ></view></view>
              <view :class="(msgLength==11||msgLength==6)?'active':''"><view v-if="msgLength > 1" class="iconfont icon-yuandianda"></view></view>
              <view :class="(msgLength==2||msgLength==6)?'active':''"><view v-if="msgLength > 2" class="iconfont icon-yuandianda"></view></view>
              <view :class="(msgLength==3||msgLength==6)?'active':''"><view v-if="msgLength > 3" class="iconfont icon-yuandianda"></view></view>
              <view :class="(msgLength==4||msgLength==6)?'active':''"><view v-if="msgLength > 4" class="iconfont icon-yuandianda"></view></view>
              <view :class="(msgLength==5||msgLength==6)?'active':''"><view v-if="msgLength > 5" class="iconfont icon-yuandianda"></view></view>
            </view>
          </view>
        </view>
        <view class="join-btn pop-btn"><button class="conf-btn" type="primary" @click="tixianHandle(2)">确认提现</button></view>
      </view>
      <view class="" v-if="popState==3">
      	<view class="tixian-top flex-cent-cent succ-box">
          <view class="succ-ico flex-cent-cent">
          	<view class="iconfont icon-xuanze" ></view>
          </view>
      		<view class="succ-txt">提现申请成功!</view>
      		<view class="succ-tips">我们将会在1-3个工作日，完成申请审批，审核通过后会以短信、微信消息的方式告知与你，或者你可以随时查看提现申请记录！!</view>
      	</view>
        <view class="join-btn pop-btn"><button class="conf-btn" type="primary" @click="tixianHandle(3)">好的</button></view>
      </view>
    </uni-popup>
	</view>
</template>

<script>
  import uniPopup from '../../../components/uni-popup.vue';

	export default {
    components: {
    	uniPopup
    },
		data() {
			return {
				tabIndex:0,
				tabBars: [{
					name: '本月',
					id: '0'
				}, {
					name: '本季度',
					id: '1'
				}, {
					name: '本年度',
					id: '2'
				}],
        showPopup: false,
        popType:'bottom',
        popState:0, //1,2,3
        msg:'',
        msgLength:0,
        pwdInpShow:true,
			};
		},
    watch:{
      msg(curVal,oldval){
        console.log("ryy-msg", curVal,oldval)
        
        if(/[^\d]/g.test(curVal)){
          this.msg = this.msg.replace(/[^\d]/g,'')+'';
        }else{
          this.msgLength = curVal.length;
        }
        console.log("ryy-msg2", this.msg)
      },
    },
    methods: {
      changeInp(e){
        console.log("e", e)
        return false
      },
      sendPwd(){
        console.log("sendPwd")
      },
    	topTab(index) { //点击tab-bar
    		this.tabIndex = index;
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
      font-weight: 700;
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
