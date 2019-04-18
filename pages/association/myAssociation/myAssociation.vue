<template>
  <div class="container">
    <div class="header head-city flex-cent">
      <view class="flex-cent-cent" @click="toCitySelect">
        <view class="iconfont icon-dingwei"></view>
        <view class>城市: {{nowCity.city_name}}</view>
      </view>
      <view class="iconfont icon-shuaxin"></view>
    </div>

    <div class="tabbar">
      <view
        class="tab"
        v-for="(tab,index) in associationType"
        :key="index"
        :class="(currentPage==index)?'tab-active':''"
        @click="onTabClick(index)"
      >
        {{tab.name}}
        <view v-if="index!=tabBars.length" class></view>
      </view>
    </div>

    <div class="content">
      <swiper :current="currentPage" class="swiper-box" duration="300" @change="onPageChange">
        <swiper-item class="swiper-box-item" v-for="(item,index) in associationType" :key="index">
					<view class="" style="margin-top: 80upx;" v-if="!done">
						<view class="loaderAct"></view>
					</view>
					<div class="nocont" v-if="done && item.list.length == 0">
					  <div class="no-data-show">
					    <div class="iconfont icon-meiyoushequn"></div>
					    <div class="nodata-txt">抱歉，你还未加入任何{{item.name||''}}社群！</div>
					  </div>
					  <!-- <div class="more-asso">
					    <div class="more-asso-txt">可选择您可能感兴趣的类型，查找社群：</div>
					    <div class="more-asso-img" v-for="(it,index) in associationType" :key="index">
					      <image :src="$domain + it.type_img" mode @click="goSelectAsso"></image>
					      <div class="text">
					        <text class="title">{{it.name}}</text>
					        <text class="description">{{it.type_description}}</text>
					      </div>
					    </div>
					  </div> -->
					</div>
					<div class="association" v-if="done && item.list.length >0" v-for="(it,index) in item.list" :key="index">
					  <view class="asso-item" v-if="it.id != -1">
					    <view class="asso-info flex-cent-bet">
					      <view class="asso-img flex-cent">
					        <view class="yijairu" v-if="it.is_join == 1">已加入</view>
					        <image :src="$domain + it.association_logo" mode=""></image>
					        <view class="asso-txt">
					          <view class="">{{it.association_name}}</view>
					          <view class="">
					            <text>{{it.name}} </text>
					            <text> 会员 {{it.user_num}} </text>
					            <text> 嘉宾 {{it.guests_num}} </text>
					          </view>
					        </view>
					      </view>
					      <view class="iconfont icon-youjiantou"></view>
					    </view>
					    <view class="asso-line"></view>
					    <view class="asso-jiaru flex-cent">
					      <view class="">最近加入</view>
					      <image v-for="user in it.user_photos" :key="user.user_id" :src="$domain + user.user_photo" mode=""></image>
					    </view>
							
							
					  </view>
					</div>
					<view class="faqiren" v-if="done&&currentPage!=0">
						<view class="faqiren-txt">您还可以申请成为发起人!</view>
						<view class="faqiren-act">创建属于自己的社群，衔接微信群用户，更好的管理！</view>
						<view class=""><button class="conf-btn rads" type="primary" @click="goFaQiRen">申请成为社群发起人</button></view>
					</view>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
// import QuanBuLeiXin from './subpages/QuanBuLeiXin'
// import AssociationSwiperItem from './subpages/AssociationSwiperItem'
export default {
  components: {
//     AssociationSwiperItem,
//     QuanBuLeiXin,
  },
  data() {
    return {
      currentPage: 0,
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
			nowCity:{
				city_id:'',
				city_name:'',
				parent_id:'',
				parent_name:'',
			},
			association: [],
			done: false,
      associationType: [{
        id: '',
        name: '全部类型',
				list:[]
      }],
			/* associationType: [{
        id: -1,
        name: '全部类型'
      }] */
    }
  },
  onLoad(options) {
    this.page = options.page
    this.init()
  },
  onShow() {
  },
  methods: {
    init() {
      this.loadAssociationType()
			
    },
		tencentGeolocation(){
			return new Promise((resolve, reject)=>{
				var geolocation = new qq.maps.Geolocation('ADZBZ-NNWCD-JIP4C-HLWKW-HIDEF-QSB75','qqfirst')
				geolocation.getLocation(
					(showPosition)=>{
						console.log('ryy-geolocation', showPosition);
						resolve(showPosition)
					},
					(err)=>{
						console.log('ryy-geolocation-err')
						reject(err)
					},
					{timeout: 10000}
				)
			})
		},
    // 加载社群类型列表
    async loadAssociationType() {
			let tempCityInfo = await this.tencentGeolocation()
			this.nowCity.city_name  = tempCityInfo.city

      let rep = await this.$asyncRequest(
        `association/client/association/associationTypeList.do`
      )
      this.associationType.push(...rep.data)
			this.associationType.forEach((item)=>{
				item.list=[]
			})
			
			// 根据城市名称获取ID
			let cityData = await this.$asyncRequest(
			  `association/client/association/getCityIdByCityName.do`,
			  {
			    name: this.nowCity.city_name
			  }
			)
			this.nowCity.city_id = cityData.data.id
			this.nowCity.parent_id = cityData.data.parent_id
			this.nowCity.parent_name = cityData.data.parent_region_name
			console.log('ryy-cityData', cityData)
			
			// 加载城市下 当前对应的tab的社群
			this.loadAssociation()
    },
		// 加载城市社群
		async loadAssociation(){
		  try {
				console.log('ryy-cityData222', this.nowCity)
				this.done = false
		    let rep = await this.$asyncRequest(
		      `association/client/association/getJoinAssociation.do`,
		      {
						association_type_id: this.associationType[this.currentPage].id||'',
		        city_id: this.nowCity.city_id
		      }
		    )
		    this.associationType[this.currentPage].list = rep.data
				this.$forceUpdate()
		  } catch (err) {
		  } finally {
		    this.done = true
		  }
		},
    onTabClick(index) {
      this.currentPage = index
			// 加载城市下 当前对应的tab的社群
			this.loadAssociation()
    },
    onPageChange(e) {
      let index = e.detail.current
      this.currentPage = index
			// 加载城市下 当前对应的tab的社群
			this.loadAssociation()
    },
    toCitySelect() {
      uni.navigateTo({
        url: '/pages/association/citySelect/citySelect'
      })
    },
		goFaQiRen() {
		  uni.navigateTo({
		    url: `/pages/association/shenQingFaQiRen/shenQingFaQiRen?
					city_id=${this.nowCity.city_id}&city_name=${this.nowCity.city_name}&asso_id=${this.associationType[this.currentPage].id}&asso_name=${this.associationType[this.currentPage].name}&parent_name=${this.nowCity.parent_name}&parent_id=${this.nowCity.parent_id}`
		  })
		}
  },
}
</script>

<style lang="scss" scoped>
page {
  background-color: #f1f3f7;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  height: 80upx;
}

.tabbar {
  height: 100upx;
  width: 100%;
  background-color: #fff;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  .tab {
    display: inline-block;
    height: 100upx;
    padding: 0 32upx;
    line-height: 100upx;
    font-size: 28upx;
    border-bottom: #fff solid 6upx;
  }
  .tab-active {
    color: #5788ff;
    border-bottom: #5788ff solid 6upx;
  }
}

.content {
  flex: 1;
  .swiper-box {
    height: 100%;
  }
  .swiper-box-item {
    overflow-y: scroll;
  }
}
</style>