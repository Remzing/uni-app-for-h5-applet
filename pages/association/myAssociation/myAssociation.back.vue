<template>
	<view >
    <view class="bottext-set">
    	<view class="head-city flex-cent">
    		<view class="flex-cent-cent" @click="toCitySelect">
    	    <view class="iconfont icon-dingwei"></view>
    			<view class="">城市: 深圳</view>
    		</view>
    	  <view class="iconfont icon-shuaxin"></view>
    	</view>
    	
    	<view class="top-tab">
    		<view v-for="(tab,index) in tabBars"
    	   :key="tab.id" :class="(tabIndex==index)?'tab-active':''" 
    	   @click="topTab(index)" >{{tab.name}}<view v-if="index!=tabBars.length" class=""></view></view>
    	</view>
			
    	<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
				<swiper-item class="swiper-box-item">
					<scroll-view>
						<view class="nocont">
						<view class="no-data-show">
							<view class="iconfont icon-meiyoushequn"></view>
							<view class="nodata-txt">抱歉，你还加入任何社群！</view>
						</view>
						<view class="more-asso">
							<view class="more-asso-txt">可选择您可能感兴趣的类型，查找社群：</view>
							<view class="more-asso-img" v-for="(it,index) in associationType" :key="index">
								<image :src="$domain + it.type_img" mode="" @click="goSelectAsso"></image>
							</view>
						</view>
					</view>
					</scroll-view>
				</swiper-item>
    		<swiper-item class="swiper-box-item">
    			<scroll-view class="list" scroll-y>
    				<view class="asso-type">
    					亲，你目前的身份是<text class="col-5788ff">【深圳】</text>城市发起人！
    				</view>
    	      <view class="asso-item">
    	      	<view class="asso-info flex-cent-bet" @click="goJoinAsso(1)">
    	      		<view class="asso-img flex-cent">
    	            <view class="yijairu">已加入</view>
    	      			<image src="../../../static/shuijiao.jpg" mode=""></image>
    	            <view class="asso-txt">
    	            	<view class="">深圳创客精英会</view>
    	            	<view class="">
    	                <text>精英会 </text>
    	                <text> 会员 20 </text>
    	                <text> 嘉宾 1220 </text>
    	               </view>
    	            </view>
    	      		</view>
    	          <view class="iconfont icon-youjiantou"></view>
    	      	</view>
    	        <view class="asso-line"></view>
    	        <view class="asso-jiaru flex-cent">
    	        	<view class="">最近加入</view>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	        </view> 
    	      </view>
    	      <view class="asso-item">
    	      	<view class="asso-info flex-cent-bet" @click="goJoinAsso(2)">
    	      		<view class="asso-img flex-cent">
    	            <!-- <view class="yijairu">已加入</view> -->
    	      			<image src="../../../static/shuijiao.jpg" mode=""></image>
    	            <view class="asso-txt">
    	            	<view class="">北京创客团</view>
    	            	<view class="">
    	                <text>创客帮 </text>
    	                <text> 会员 50 </text>
    	                <text> 嘉宾 1539 </text> 
    	               </view>
    	            </view>
    	      		</view>
    	          <view class="iconfont icon-youjiantou"></view>
    	      	</view>
    	        <view class="asso-line"></view>
    	        <view class="asso-jiaru flex-cent">
    	        	<view class="">最近加入</view>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	          <image src="../../../static/shuijiao.jpg" mode=""></image>
    	        </view> 
    	      </view>
    	      <view class="faqiren">
    	      	<view class="faqiren-txt">您还可以申请成为发起人!</view>
    	      	<view class="faqiren-act">创建属于自己的社群，衔接微信群用户，更好的管理！</view>
    	      	<view class=""><button class="conf-btn rads" type="primary">申请成为社群发起人</button></view>
    	      </view>
    			</scroll-view>
    		</swiper-item>
    	  <swiper-item class="swiper-box-item">
    	  	<scroll-view class="list" scroll-y>
    	  		<view class="no-data-show">
    	  			<view class="iconfont icon-meiyoushequn"></view>
    	        <view class="nodata-txt">您还未加入任何精英会社群！</view>
    	  		</view>
    	      <view class="more-asso">
    	      	<view class="more-asso-txt">你可点击下图查找合适社群获得更多人脉和资源商机！</view>
    	        <view class="more-asso-img"><image src="../../../static/shuijiao.jpg" mode="" @click="goSelectAsso"></image></view>
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
    	  	</scroll-view>
    	  </swiper-item>
    	</swiper>
    </view><view class="bot-help">客服热线：4008-633-002   <text class="col-5788ff">意见反馈</text></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex:0,
        tabBars: [{
        	name: '全部类型',
        	id: '0'
        }, {
        	name: '精英会',
        	id: '1'
        }, {
        	name: '创客邦',
        	id: '2'
        }, {
        	name: '书友会',
        	id: '3'
        }],
				page: 1,
				associationType: []
			};
		},
    onLoad(options) {
			this.page = options.page
		},
		onShow(){
			this.init()
		},
    methods: {
			init(){
				this.loadAssociationType()
			},
			// 加载社群类型列表
			async loadAssociationType(){
				let rep = await this.$asyncRequest(
          `association/client/association/associationTypeList.do`
        )
        this.associationType = rep.data
			},
    	async changeTab(e) {
        console.log("changeTab", e.detail.current)
    		let index = e.detail.current;
    		this.tabIndex = index;
    		
    	},
      topTab(index) { //点击tab-bar
      	this.tabIndex = index;
      },
      goSelectAsso(){
        uni.navigateTo({
        	url: '/pages/association/selectAsso/selectAsso'
        })
      },
      goJoinAsso(page){
        uni.navigateTo({
        	url: '/pages/association/joinAsso/joinAsso?page='+page
        })
			},
			toCitySelect(){
				uni.navigateTo({
        	url: '/pages/association/citySelect/citySelect'
        })
			}
    },
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
	.head-city {
		height: 80upx;
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
    background-color: #f1f3f7;
    min-height: calc(100vh - 212upx)
  }
  .nocont{
    background-color: #f1f3f7;
  }
  .asso-type{
    color: #969aa6;
    text-align: center;
    padding: 22upx 0;
    font-size: 24upx;
  }
</style>
