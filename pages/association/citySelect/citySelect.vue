<template>
	<view >
    <view class="">
    	<view class="now-city flex-cent-bet">
        <view class="flex-cent-cent">
        	<view class="iconfont icon-dingwei"></view>
          <text>城市: 深圳</text>
        </view>
        <view class="shuaxin-box">
          <text class="shuaxin-text">重新获取</text>
          <view class="iconfont icon-shuaxin"></view>
        </view>
      </view>
      <view class="chengs-head">
      	<view class="chakan flex-cent-bet">
      		<view class="">加入1次，享受全国人脉资源对接！</view>
      		<view class=""><button class="conf-btn rads" type="primary">查看社群</button></view>
      	</view>
        <view class="zuij-jia flex-cent">
        	<view class="">最近加入</view>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
          <image src="../../../static/shuijiao.jpg" mode=""></image>
        </view>
      </view>
      <view class="heng"></view>
      <view class="remen-tip">热门城市</view>
      <view class="remen">
        <view class="remen-item" v-for="(it,index) in remenArr" :key="index" @click="selectedCity(it.city_id, it.city_name, it.province_id, it.province_name,)">
        	<image :src="$domain + it.cover_img" mode=""></image>
          <view class="remen-bot">{{it.city_name}}</view>
        </view>
      </view>
      
      <view class="pageset" :style="{height:style.windowHeight+'px'}">
        <view class="uni-list-cell-divider posi-tit">
          {{letter||"AAA"}}
        </view>
        <scroll-view class="scrollList" @scroll="scrollSeting" scroll-y :scroll-into-view="scrollViewId" :style="{height:style.windowHeight + 'px'}">
          <view class="uni-list">
            <block v-for="list in lists" :key="list.start_word">
              <block>
                <view class="uni-list-cell-divider" :id="list.start_word">
                  {{list.start_word}}
                </view>
                <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="item in list.city" :key="item.id"
                 >
                  <view class="uni-list-cell-navigate selc-item flex-cent-bet"  @click="selectedCity(item.id, item.region_name, item.parent_id, item.parent_region_name)">
                    <view class="selc-item-left flex-cent">
                      <view class="selc-item-name"> {{item.region_name}}</view>
                    </view>
                  </view>
                </view>
              </block>
            </block>
          </view>
        </scroll-view>
        <scroll-view scroll-y class="uni-indexed-list-bar" :class="touchmove ? 'active' : ''" @touchstart="touchStart" @touchmove="touchMove"
         @touchend="touchEnd" @touchcancel="touchCancel" :style="{height:style.windowHeight + 'px'}">
          <view v-for="(list,key) in lists" :key="key" class="uni-indexed-list-text" :class="touchmoveIndex == key ? 'active' : ''"
           :style="{height:itemHeight + 'px',lineHeight:itemHeight + 'px'}">{{list.start_word}}</view>
        </scroll-view>
        <view class="uni-indexed-list-alert" v-if="touchmove">
          {{lists[touchmoveIndex].start_word}}
        </view>
      </view>
 
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        lists: [],
        touchmove: false,
        touchmoveIndex: -1,
        itemHeight: 0,
        winHeight: 0,
        scrollViewId: "A",
        titleHeight: 0,
        letter:'A',
        letterArr:[],
        openAppState:true,
        remenArr: [],
        style: {
          windowHeight: 0
        }
			};
		},
    onLoad() {
      const res = uni.getSystemInfoSync();
      this.style.windowHeight = res.windowHeight
    },
    onShow(){
      this.init()
    },
    methods: {
      init() {
        this.loadReMen()
        this.loadCitys()
      },
      //  加载热门城市列表
      async loadReMen() {
        let rep = await this.$asyncRequest(
          `association/client/association/hotCity.do`
        )
        this.remenArr = rep.data.cities
      },
      // 加载所有城市列表
      async loadCitys(){
        let rep = await this.$asyncRequest(
          `association/client/association/getUserCity.do`
        )
        this.lists = rep.data
        this.$nextTick(()=> {

          this.measure()
        })
      },
      measure(){
        uni
          .createSelectorQuery()
          .select('.pageset')
          .boundingClientRect()
          .exec(
            els => {
              if ( !els||!els[0]) {
                return
              }
              this.titleHeight = els[0].top
            }
          )
          
        const winHeight = uni.getSystemInfoSync().windowHeight
        this.itemHeight = winHeight / this.lists.length
        this.winHeight = winHeight

        this.lists.forEach((item)=>{
          let query = uni.createSelectorQuery()
          query.select('#'+item.start_word).boundingClientRect()
          query.exec((res) => {
            if ( !res||!res[0]) {
              return
            }

            let temp ={
              id: item.start_word,
              top: res[0].top
            }
            this.letterArr.push(temp)
          })
        })
      },
			selectedCity(_id, _name, _pareId, _pareName){
				// 跳转到上一页面
				let pages = getCurrentPages();//当前页面
				let prevPage = pages[pages.length - 2];//上一页面
				console.log("ryy-prevPageTemp", prevPage)
				
				prevPage.$vm.nowCity.city_name=_name
				prevPage.$vm.nowCity.city_id=_id
				prevPage.$vm.nowCity.parent_id=_pareId
				prevPage.$vm.nowCity.parent_name=_pareName
				prevPage.$vm.$forceUpdate()
				// 加载城市下 当前对应的tab的社群
				prevPage.$vm.loadAssociation()
				uni.navigateBack({//返回
				  delta: 1
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
      },
      scrollSeting(e){
        let scrollTop = e.detail.scrollTop
        this.letterArr.reduce((prev, cur)=>{
          if((prev.top - this.titleHeight) <= scrollTop && scrollTop <= (cur.top-this.titleHeight)){
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
      		this.scrollViewId = item.start_word;
      		this.touchmoveIndex = index;
      	}
      },
      touchMove(e) {
      	let pageY = e.touches[0].pageY;
      	let index = Math.floor((pageY - this.titleHeight) / this.itemHeight);
      	let item = this.lists[index];
      	if (item) {
      		this.scrollViewId = item.start_word;
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
  .remen-tip{
    font-size: 24upx;
    line-height: 52upx;
    color: #353535;
    margin-bottom: 20upx;
    margin-top: 20upx;
    margin-left: 40upx;
    font-weight: 700;
  }
  .remen{
    display: flex;
    flex-wrap: wrap;
    padding: 0 10upx 0;
    
    .remen-item{
      position: relative;
      width: 203upx;
      height: 140upx;
      background-color: #5788ff;
      box-shadow: 0px 5upx 6upx 0px 
        rgba(122, 125, 134, 0.5);
      margin-left: 30upx;
      margin-bottom: 30upx;
      image{
        width: 100%;
        height: 100%;
      }
      .remen-bot{
        width: 100%;
        position: absolute;
        bottom: 0;
        color: #fff;
        font-size: 24upx;
        text-align: center;
      }
    }
  }
  .chengs-head{
    padding: 0 30upx;
    >view{
      padding: 20upx 0;
    }
    .chakan{
      border-bottom: #efeef3 solid 1upx;
    }
    .zuij-jia{
      >view{
        font-size: 24upx;
        color: #5788ff;
        margin-right: 14upx;
        
      }
      image{
        width: 40upx;
        height: 40upx;
        border-radius: 40upx;
        background-color: #b6b7b7;
        margin-left: 14upx;
      }
    }
  }
  
  .now-city{
    width: 100%;
    height: 80upx;
    padding: 0 30upx;
    color: #fff;
    font-size: 24upx;
    background-color: #5788ff;
    box-shadow: 0px 5px 5px 0px 
      rgba(151, 160, 202, 0.5);

    .icon-dingwei {
      margin-right: 4upx;
    }

    .shuaxin-box{
      display: flex;
      align-items: center;
      .shuaxin-text{
        margin-right: 8px;
        font-size: 26upx;
      }
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
    height: 112upx;
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
  .uni-list-cell-divider {
    background-color: #f1f3f7;
    height: 52upx;
    padding: 0 16upx;
    border: none;
    &::after, &::before {
      display: none;
    }
  }
  .uni-list::before {
    display: none;
  }
  .uni-list-cell::after{
    right: 60upx;
    background-color: #efeef3;
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
