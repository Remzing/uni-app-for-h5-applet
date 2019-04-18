<template>
	<view >
    <!-- popup -->
    <uni-popup :show="showPopup" :type="popType" v-on:hidePopup="hidePopup">
    	<view class="">
    		<view class="share-top flex-cent-cent">
          <view class="share-item">
          	<view class=""><view class="iconfont icon-weixin" ></view></view>
            <text class="">微信好友</text>
          </view>
          <view class="share-item " @click.stop="goPoster">
          	<view class="haibao"><view class="iconfont icon-weixin" ></view></view>
            <text class="">生成海报</text>
          </view>
        </view>
        <view class="canc flex-cent-cent" @click.stop="hidePopup">取消</view>
    	</view>
    </uni-popup>
    <view class="">
    	<view class="top-tab">
    		<view v-for="(tab,index) in tabBars"
    	   :key="tab.id" :class="(tabIndex==index)?'tab-active':''" 
    	   @click="topTab(index)" >{{tab.name}}<view class=""></view></view>
        <view class="flex-cent sous">
         	<view class="iconfont icon-sousuo"></view>
          <text>搜索</text>
        </view>
    	</view>
      <view class="heng"></view>
    	<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
    		<swiper-item class="swiper-box-item">
    			<scroll-view class="list" scroll-y>
            <!-- 工具 -->
            <view class="tool-box">
            	<view v-if="!toolShow" class="tool-hide" @click.stop="toolHand(true)"><image src="../../../static/img/gd.png" mode=""></image></view>
              <view v-if="toolShow" class="tool-show flex-cent" @click.stop="toolHand(false)">
              	<view class="iconfont icon-zuojt"></view>
                <view class="flex-cent" @click="showMiddlePopup">
                  <image src="../../../static/img/yq.png" mode=""></image>
                  <text>邀请</text>
                </view>
                <view class="flex-cent">
                	<image src="../../../static/img/jiab.png" mode=""></image>
                  <text>嘉宾</text>
                </view>
                <view class="flex-cent" @click="danmHandle(true)">
                	<image src="../../../static/img/danm.png" mode=""></image>
                  <text>弹幕</text>
                </view>
              </view>
            </view>
            <!-- 弹幕 -->
            <view class="rectangle" v-if="danmShow">
              <view class="iconfont icon-xiangxia rightan" @click.stop="danmHandle(false)"></view>
              <view class="danm-item flex-cent">
              	<image src="../../../static/shuijiao.jpg" mode=""></image>
                <view class="danm-txt">
                	<text>刚刚加入社群，付费成为会员</text>
                </view>
              </view>
              <view class="danm-item flex-cent">
              	<image src="../../../static/shuijiao.jpg" mode=""></image>
                <view class="danm-txt">
                	<text>刚刚加入社群，付费成为会员123131</text>
                </view>
              </view>
            </view>
            
            
    				<view class="mail-item flex-cent-bet" @click="goPoster">
    					<view class="mail-item-left flex-cent">
    						我的社群
    					</view>
              <view class="mail-item-right flex-cent">
                <view class="">深圳创客精英会</view>
              	<view class="iconfont icon-youjiantou"></view>
              </view>
    				</view>
            <view class="flex-cent app-box" v-if="openAppState">
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
               <view class="flex-cent app-box-item">
              	<image src="../../../static/img/jz.png" mode=""></image>
                <view class="">见证</view>
              </view>
               <view class="flex-cent app-box-item">
              	<image src="../../../static/img/yinj.png" mode=""></image>
                <view class="">引荐</view>
              </view>
               <view class="flex-cent app-box-item">
              	<image src="../../../static/img/ganen.png" mode=""></image>
                <view class="">感恩</view>
              </view>
               <view class="flex-cent app-box-item">
              	<image src="../../../static/img/syh.png" mode=""></image>
                <view class="">书友</view>
              </view>
               <view class="flex-cent app-box-item">
              	<image src="../../../static/img/sc.png" mode=""></image>
                <view class="">商场</view>
              </view>
               <view class="flex-cent app-box-item">
              	<image src="../../../static/img/ph.png" mode=""></image>
                <view class="">排行</view>
              </view>
               <view class="flex-cent app-box-item" @click="goMore">
              	<image src="../../../static/img/gd.png" mode=""></image>
                <view class="">更多</view>
              </view>
              
              
            </view>
            <view @click="openSet" class="open-app-set flex-cent">
              <text>{{openAppState?'关闭应用':'开启应用'}}</text>
              <view v-if="!openAppState" class="iconfont icon-xiala"></view>
              <view v-if="openAppState" class="iconfont icon-shangla"></view>
             </view>
    	      <view class="pageset">
              <view class="uni-list-cell-divider posi-tit">
              	{{letter||"AAA"}}
              </view>
    	      	<scroll-view class="scrollList" @scroll="scrollSeting" scroll-y :scroll-into-view="scrollViewId" :style="{height:winHeight + 'px'}">
                
    	      		<view class="uni-list">
    	      			<block v-for="(list, key) in lists" :key="key">
    	      				<block v-if="list.data.length">
    	      					<view class="uni-list-cell-divider" :id="list.letter">
    	      						{{list.letter}}
    	      					</view>
    	      					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list.data" :key="index"
    	      					 :class="list.data.length -1 == index ? 'uni-list-cell-last' : ''">
    	      						<view class="uni-list-cell-navigate selc-item flex-cent-bet">
                          <view class="selc-item-left flex-cent">
                          	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
                          	<view class="selc-item-txt flex-cent">
                              <view class="selc-item-name"> {{item}}</view>
                              <view class="selc-item-job flex-cent">
                                <view class=""><view class="iconfont icon-hangye"></view>软件开发</view>
                                <view class=""><view class="iconfont icon-jiaruqunzu"></view>李友为</view>
                              </view>
                            </view>
                          </view>
                          <view class="selc-item-type">发起人</view>
    	      						</view>
    	      					</view>
    	      				</block>
    	      			</block>
    	      		</view>
    	      	</scroll-view>
    	      	<scroll-view scroll-y class="uni-indexed-list-bar" :class="touchmove ? 'active' : ''" @touchstart="touchStart" @touchmove="touchMove"
    	      	 @touchend="touchEnd" @touchcancel="touchCancel" :style="{height:winHeight + 'px'}">
    	      		<view v-for="(list,key) in lists" :key="key" class="uni-indexed-list-text" :class="touchmoveIndex == key ? 'active' : ''"
    	      		 :style="{height:itemHeight + 'px',lineHeight:itemHeight + 'px'}">{{list.letter}}</view>
    	      	</scroll-view>
    	      	<view class="uni-indexed-list-alert" v-if="touchmove">
    	      		{{lists[touchmoveIndex].letter}}
    	      	</view>
    	      </view>
    			</scroll-view>
    		</swiper-item>
    	  <swiper-item class="swiper-box-item">
    	  	<scroll-view class="list" scroll-y>
    	  		创客邦
    	  	</scroll-view>
    	  </swiper-item>
    	  <swiper-item class="swiper-box-item">
    	  	<scroll-view class="list" scroll-y>
    	  		书友会
            <button class="conf-btn" @click="goPage" data-path="/pages/association/leader/leader" type="primary">领导</button>
    	  	</scroll-view>
    	  </swiper-item>
    	</swiper>
    </view>
	</view>
</template>

<script>
  var airportDate = require("../../../common/airport.js");
  import uniPopup from '../../../components/uni-popup.vue';
	export default {
    components: {
    	uniPopup
    },
		data() {
			return {
				tabIndex:0,
        tabBars: [{
        	name: '精英会',
        	id: '0'
        }, {
        	name: '创客邦',
        	id: '1'
        }, {
        	name: '书友会',
        	id: '2'
        }],
        lists: airportDate.list,
        touchmove: false,
        touchmoveIndex: -1,
        itemHeight: 0,
        winHeight: 0,
        scrollViewId: "A",
        titleHeight: 110,
        letter:'A',
        letterArr:[],
        openAppState:true,
        toolShow:false,
        danmShow: true,
//         showPopup: true,
//         popType:'bottom'
			};
		},
    onReady(){
      let tempZ = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
      let onceTemp=false
      tempZ.forEach((item)=>{
        let query = uni.createSelectorQuery()
        query.select('#'+item).boundingClientRect()
        query.exec((res) => {
          if ( !res||!res[0]) {
          	return
          }
          
          if (!onceTemp) {
          	onceTemp = true
            this.titleHeight = res[0].top
            
            let winHeight = uni.getSystemInfoSync().windowHeight;
            this.itemHeight = (winHeight-this.titleHeight) / 26;
            this.winHeight = (winHeight-this.titleHeight);
          }
          let temp ={
            id: item,
            top: res[0].top
          }
          this.letterArr.push(temp)
          console.log("ryy-onReady-SET", item)
          console.log("ryy-curHeight-SET", res[0].top)
          
        })
      })
    },
    onLoad() {
      console.log("ryy-onLoad-SET", this.titleHeight)
    	
    },
    methods: {
    	async changeTab(e) {
        console.log("changeTab", e.detail.current)
    		let index = e.detail.current;
    		this.tabIndex = index;
    		
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
      },
      toolHand(param){
        this.toolShow = param;
      },
      danmHandle(param){
        this.danmShow = param
      },
      goPage(e) {
        let path = e.currentTarget.dataset.path
      	uni.navigateTo({
      		url: path+"?page="
      	})
      },
      goMore(){
        uni.navigateTo({
        	url: '/pages/association/moreApp/moreApp'
        })
      },
      goPoster(){
        uni.navigateTo({
        	url: '/pages/association/assoPoster/assoPoster'
        })
      },
      openSet(){
        this.openAppState= !this.openAppState
        if (this.openAppState) {
        	this.titleHeight = this.titleHeight+166

        } else{
        	this.titleHeight = this.titleHeight-166
        }

        let winHeight = uni.getSystemInfoSync().windowHeight;
        this.itemHeight = (winHeight-this.titleHeight) / 26;
        this.winHeight = (winHeight-this.titleHeight);
      },
      scrollSeting(e){
        // console.log("ryy-scrollTop",e.detail.scrollTop)
        let scrollTop = e.detail.scrollTop
        this.letterArr.reduce((prev, cur)=>{
          if((prev.top-this.titleHeight)<=scrollTop&&scrollTop<=(cur.top-this.titleHeight)){
            // console.log("ryy-reduce",(prev.top-this.titleHeight),scrollTop,(cur.top-this.titleHeight))
            this.letter = prev.id
          }
          return cur
        }) 
      },
      touchStart(e) {
      	this.touchmove = true;
      	let pageY = e.touches[0].pageY;
      	let index = Math.floor((pageY - this.titleHeight) / this.itemHeight);
      	let item = this.lists[index];
      	if (item) {
      		this.scrollViewId = item.letter;
      		this.touchmoveIndex = index;
      	}
      },
      touchMove(e) {
      	let pageY = e.touches[0].pageY;
      	let index = Math.floor((pageY - this.titleHeight) / this.itemHeight);
      	let item = this.lists[index];
      	if (item) {
      		this.scrollViewId = item.letter;
      		this.touchmoveIndex = index;
      	}
      },
      touchEnd() {
      	this.touchmove = false;
      	this.touchmoveIndex = -1;
      },
      touchCancel() {
      	this.touchmove = false;
      	this.touchmoveIndex = -1;
      }
    },
	}
</script>

<style lang="scss">
  .uni-popup-bottom{
    height:368upx;
    .share-top{
      justify-content: space-around;
      height: 256upx;
      border-bottom: #d2d3d5 solid 1upx;

    }
    .share-item{
      text-align: center;
      view{
        width: 120upx;
        height: 120upx;
        border-radius: 120upx;
        background-color: #09bb07;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20upx;
      }
     
      .iconfont{
        font-size: 70upx;
        color: #fff;
      }
    }
    .haibao{
      background-color: #ffbd0c !important;
    }
    .canc{
      font-size: 34upx;
      height: 112upx;
      color: #5788ff;
    }
  }
  @-webkit-keyframes rightan{
    from{
      bottom: 20upx;
      opacity: .9;
    }
    to{
        bottom: 0%;
        opacity: 0.1;
    }
  }
  .rightan{
    -webkit-animation: rightan 1.5s infinite;
    -webkit-animation-fill-mode: both;
  }
  .rectangle {
    position: fixed;
    bottom: 0;
    width: 750upx;
    height: 331upx;
    // background: linear-gradient(to bottom,rgba(0, 0, 0, 0.7) 0%,#000000 100%);
    background:linear-gradient(0deg,rgba(0,0,0,0.7) 0%,#fff 331upx);
    opacity: 0.7;
    z-index: 100;
    padding: 30upx;
    .icon-xiangxia{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 20upx;
      margin: 0 auto;
      color: #fff;
      font-size: 40upx;
      width:36upx;
    }
    .danm-item{
      margin-bottom: 20upx;
      image{
        width: 60upx;
        height: 60upx;
        border-radius: 60upx;
        background-color: #424347;
        border: solid 1px #ffffff;
        margin-right: 20upx;
      }
      .danm-txt{
        font-size: 24upx;
        padding: 8upx 26upx;
        border-radius: 100upx;
        background-color: #ffffff;
      }
    }
  }
  .tool-box{
    position: fixed;
    bottom: 30upx;
    left: 30upx;
    z-index: 101;
    .tool-show{
      width: 487upx;
      height: 80upx;
      background-color: #ffffff;
      box-shadow: 0px 8upx 12upx 0px 
        rgba(151, 160, 202, 0.5);
      border-radius: 40upx;
      border: solid 1upx #efefef;
      image{
        width: 60upx;
        height: 60upx;
        margin: 0 10upx 0 20upx;
      }
      .iconfont{
        font-size:48upx;
        color: #bbbbbb;
      }
      text{
        font-size: 24upx;
      }
    }
    .tool-hide{
      width: 80upx;
      height: 80upx;
      border-radius: 80upx;
      display: flex;
      align-items: center;
      justify-content: center;
      image{
        width: 60upx;
        height: 60upx;
      }
      background-color: #ffffff;
      box-shadow: 0px 8upx 12upx 0px 
        rgba(151, 160, 202, 0.5);
      border: solid 1upx #efefef;
    }
  }
  .open-app-set{
    width: 100%;
    height: 60upx;
    background-color: #fcfcfc;
    font-size: 24upx;
    color: #969aa6;
    justify-content: center;
    .iconfont{
      margin-left: 10upx;
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
      padding: 0 20upx;
      background-color: #5788ff;
      border-radius: 30upx;
      border: solid 1upx #5788ff;
      font-size: 20upx;
      color: #fff;
    }
  }
  .pageset {
  	display: flex;
  	flex-direction: row;
    position: relative;
  }
  .scrollList {
  	flex: 1;
  	height: 100vh;
  }
  .posi-tit{
    position: absolute;
    left: 0;
    top: 0;
    z-index:10;
    width:100%;
    // width: calc(100% - 46upx);
  }
  .uni-indexed-list-bar {
  	width: 46upx;
  	height: 100vh;
  	// background-color: lightgrey;
  	display: flex;
  	flex-direction: column;
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    right: 0;
    z-index:11;
  }
  .uni-list-cell:after{
    right: 60upx;
  }
  .uni-indexed-list-bar.active {
  	// background-color: rgb(200, 200, 200);
  }
  .uni-list-cell {
    width: 750upx;
  }
  .uni-indexed-list-text {
  	color: #aaa;
  	font-size: 22upx;
  	text-align: center;
  }
  .uni-indexed-list-text{
    color: #5788ff;
  }
  .uni-indexed-list-bar.active .uni-indexed-list-text {
  	color: #333;
  }
  
  .uni-indexed-list-text.active,
  .uni-indexed-list-bar.active .uni-indexed-list-text.active {
  	color: #007AFF;
  }
  .uni-indexed-list-alert {
  	position: absolute;
  	z-index: 20;
  	width: 160upx;
  	height: 160upx;
  	left: 50%;
  	top: 50%;
  	margin-left: -80upx;
  	margin-top: -80upx;
  	border-radius: 80upx;
  	text-align: center;
  	line-height: 160upx;
  	font-size: 70upx;
  	color: #fff;
  	background-color: rgba(0, 0, 0, 0.5);
  }
  .mail-item{
    padding: 20upx 30upx;
    border-bottom: #efeef3 solid 1upx;
    .mail-item-left{
      font-size: 30upx;
    }
    .mail-item-right{
      font-size: 24upx;
      margin-left: 16upx;
      .iconfont{
        color: #bbb;
      }
    }
  }
  .sous{
    color: #5788ff;
    text{
      font-size: 24upx;
    }
    .iconfont{
      font-size: 40upx;
      margin-right: 6upx;
    }
  }
  .top-tab{
    width: 100%;
    height: 100upx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    >view{
      height: 100upx;
      line-height: 100upx;
      font-size: 28upx;
      border-bottom: #fff solid 6upx;
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
    }
  }
  .swiper-box{
    min-height: calc(100vh - 120upx)
  }
</style>
