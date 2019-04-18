<template>
	<view >
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
               :class="list.data.length -1 == index ? 'uni-list-cell-last' : ''" @click="selectHandle">
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
	</view>
</template>

<script>
  var airportDate = require("../../../common/airport.js");

	export default {
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
    	selectHandle(){
        // 跳转到上一页面
        let pages = getCurrentPages();//当前页面
        let prevPage = pages[pages.length - 2];//上一页面
        console.log("ryy-prevPageTemp-SET", prevPage)
        prevPage.$vm.leadArr[0].child.push({
          name: '狐仙+++',
          job:'软件开发22222++'
        })
        prevPage.$vm.leadArr[0].childShow=true
        
        uni.navigateBack({//返回
          delta: 1
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
