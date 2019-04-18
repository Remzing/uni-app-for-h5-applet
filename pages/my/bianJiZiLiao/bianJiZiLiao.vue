<template>
	<view>
    
		<view class="mar-set">
      <view class="bianj-head flex-cent-bet">
      	<image :src="infoData.user_photo||'../../../static/shuijiao.jpg'" mode=""></image>
        <view class="bianj-head-name">{{infoData.real_name}}</view>
        <view class="bianj-head-sex flex-cent">
          <view class="flex-cent-cent" :class="infoData.sex==1?'':'nosel'" @click="sexChange(1)">
          	<view class="iconfont icon-nan"></view>
            <text>男</text>
          </view>
          <view class="flex-cent-cent " :class="infoData.sex==2?'':'nosel'" @click="sexChange(2)">
          	<view class="iconfont icon-nv"></view>
            <text>女</text>
          </view>
        </view>
      </view>
			<view class="myoper-item flex-cent-bet cell-bot" @click="showMiddlePopup">
				<view class="myoper-item-left flex-cent">
			    <view class="">名片身份</view>
				</view>
			  <view class="myoper-item-right">
			    <text>{{infoData.user_professional.company||''}}</text>
			  	<view class="iconfont icon-youjiantou"></view>
			  </view>
			</view>
      <!-- <view class="myoper-item flex-cent-bet"  @click="goPage" data-path="/pages/my/xuanZeHangYe/xuanZeHangYe" data-page='2' >
      	<view class="myoper-item-left flex-cent">
          <view class="">职位</view>
      	</view>
        <view class="myoper-item-right">
          <text>联合创始人</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view> -->
      <view class="heng"></view>
      <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/xuanZeHangYe/xuanZeHangYe" data-page='1' >
      	<view class="myoper-item-left flex-cent">
          <view class="">所在行业</view>
      	</view>
        <view class="myoper-item-right">
          <text>{{infoData.industry_name_two}}</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/xuanZeHangYe/xuanZeHangYe" data-page='2' >
      	<view class="myoper-item-left flex-cent">
          <view class="">职业方向</view>
      	</view>
        <view class="myoper-item-right">
          <text>{{infoData.career_direction_name}}</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/xuanZeHangYe/xuanZeHangYe" data-page='3' >
      	<view class="myoper-item-left flex-cent">
          <view class="">职业标签</view>
      	</view>
        <view class="myoper-item-right">
          <!-- <view class="">互联网</view> -->
					<block v-for="(item,index) in infoData.label_list" :key="index">
						<text class="biao-q">{{item.label_name}}</text>
					</block>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet cell-bot" @click="showMulLinkageTwoPicker" >
      	<view class="myoper-item-left flex-cent">
          <view class="">工作地区</view>
      	</view>
        <view class="myoper-item-right">
          <text class="">{{infoData.province_name||''}}{{infoData.city_name||''}}{{infoData.area_name||''}}</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet"  >
      	<view class="myoper-item-left flex-cent">
          <input style="width: 388upx;" type="text" @input="addressInput" v-model="infoData.address" placeholder="输入详细地址" />
      	</view>
        <view class="myoper-item-right"  @click="selAddr" data-path="/pages/my/myMap/myMap" data-page='1'>
        	<view class="iconfont icon-dingwei"></view>
        </view>
      </view>
      
      <view class="heng"></view>
      <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/editInfo/editInfo" data-page='1' :data-keyname="infoData.nick_name||''" >
      	<view class="myoper-item-left flex-cent">
          <view class="">昵称</view>
      	</view>
        <view class="myoper-item-right">
          <text class="">{{infoData.nick_name||''}}</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <picker mode="date" :value="infoData.birthday" @change="bindDateChange" >
				<view  class="myoper-item flex-cent-bet cell-bot">
					<view class="myoper-item-left flex-cent">
					  <view class="">生日</view>
					</view>
					<view class="myoper-item-right">
					  <text class="">{{infoData.birthday||''}}</text>
						<view class="iconfont icon-youjiantou"></view>
					</view>
				</view>
      	
      </picker>
      <!-- <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/editInfo/editInfo" data-page='2'  >
      	<view class="myoper-item-left flex-cent">
          <view class="">联系电话</view>
      	</view>
        <view class="myoper-item-right">
          <text class="">{{infoData.phone||''}}</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view> -->
      <view class="myoper-item flex-cent-bet cell-bot"  >
      	<view class="myoper-item-left flex-cent">
          <view class="">社宾号</view>
      	</view>
        <view class="myoper-item-right">
          <text class="">{{infoData.user_number||''}}</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet cell-bot"  @click="goPage" data-path="/pages/my/editInfo/editInfo" data-page='3' :data-keyname="infoData.email||''">
      	<view class="myoper-item-left flex-cent">
          <view class="">邮箱地址</view>
      	</view>
        <view class="myoper-item-right">
          <text class="">{{infoData.email||''}}</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet"  @click="goPage" data-path="/pages/my/editInfo/editInfo" data-page='4' :data-keyname="infoData.wx_number||''">
      	<view class="myoper-item-left flex-cent">
          <text class="">微信号</text>
      	</view>
        <view class="myoper-item-right">
          <text class="">{{infoData.wx_number||''}}</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="heng"></view>
      <!-- <view class="myoper-item flex-cent-bet cell-bot"  >
      	<view class="myoper-item-left flex-cent">
          <text class="">收货地址</text>
      	</view>
        <view class="myoper-item-right">
          <text class="">七星创意工场10号公社</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view>
      <view class="myoper-item flex-cent-bet cell-bot"  >
      	<view class="myoper-item-left flex-cent">
          <text class="">我的发票抬头</text>
      	</view>
        <view class="myoper-item-right">
          <text class="">易帮云</text>
        	<view class="iconfont icon-youjiantou"></view>
        </view>
      </view> -->
      
		</view>
    <view class="join-btn"><button class="conf-btn" type="primary" @click="conf"> 保存</button></view>
    
    <mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
     @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
    <mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
     @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
		 
		<!-- popup -->
		<uni-popup class="mypop" :show="showPopup" :type="popType" v-on:hidePopup="hidePopup">
			<view class="non-content flex-cent-cent" v-if="mingpArr.length == 0">
				<text>暂时没有名片，</text>
				<text class="to-bind" data-path="/pages/my/jingLiRenZheng/jingLiRenZheng" data-page='1' @click="goPage">创建名片</text>
			</view>

			<view class="" v-else>
				<view class="top-oper flex-cent-bet">
					<view class="" @click="hidePopup">取消</view>
					<view class="" @click="selMingpConf">确定</view>
				</view>
				<view class="" style="max-height: 450upx;overflow-y: auto;">
					<view class="selc-item flex-cent-bet cell-bot" v-for="(item,index) in mingpArr" :key="index">
						<view class="selc-item-left flex-cent-bet" @click="selMingp(item.id)">
						  <view class="check-ico">
						    <view v-if="selMingId==item.id" class="iconfont icon-dui col-5788ff"></view>
						  </view>
							<view class="selc-item-img"><image :src="item.credential_img" mode=""></image></view>
							<view class="selc-item-txt flex-cent">
						    <view class="selc-item-name"> {{item.company}}</view>
						    <view class="selc-item-job flex-cent">
						      <view class="">{{item.company}}</view>
						    </view>
						  </view>
						</view>
						<view class="selc-item-type flex-cent-cent"><view class="iconfont icon-bianji" ></view></view>
					</view>
				</view>
				
				<!-- <view class="join-btn pop-btn"><button class="conf-btn" type="primary" @click="selMingpConf()">保存</button></view> -->
			</view>
			 
		</uni-popup> 
	</view>
</template>

<script>
  // https://github.com/zhetengbiji/mpvue-picker
  import mpvuePicker from '../../../components/mpvue-picker/mpvuePicker.vue';
  // https://github.com/zhetengbiji/mpvue-citypicker
  import mpvueCityPicker from '../../../components/mpvue-citypicker/mpvueCityPicker.vue'
  import cityData from '../../../common/city.data.js';
	import uniPopup from '../../../components/uni-popup.vue';

	export default {
    components: {
    	mpvuePicker,
    	mpvueCityPicker,
			uniPopup

    },
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				date:currentDate,
				pickerSingleArray: [{
						label: '中国',
						value: 1
					},
					{
						label: '俄罗斯',
						value: 2
					},
					{
						label: '美国',
						value: 3
					},
					{
						label: '日本',
						value: 4
					}
				],
				mulLinkageTwoPicker: cityData,
        cityPickerValueDefault: [0, 0, 1],
        themeColor: '#007AFF',
        pickerText: '',
        mode: '',
        deepLength: 1,
        pickerValueDefault: [0],
        pickerValueArray:[],
				infoData:{},
				mingpArr:[],
				selMingId:'',
				showPopup: false,
				popType:'bottom',
			};
		},
		onLoad(options) {
			this.options = options
		},
		onShow() {
			this.init(this.options)
		},
    methods:{
			init(options){
				this.$request({
					// 编辑资料初始化
					url:'association/client/setting/editUserInit.do',
					data: {
					},
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						this.infoData = _data
						!this.infoData.user_professional&&(this.infoData.user_professional={})
						!this.infoData.label_list&&(this.infoData.label_list=[])
						this.selMingId = this.infoData.user_professional.id||''
					}
				})
				this.$request({
					// 选择名片身份初始化
					url:'association/client/setting/editProfessionalInit.do',
					data: {
					},
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						this.mingpArr=_data
					}
				})
			},
			addressInput(e) {
				var value = e.target.value;
				this.infoData.address = value
			},
			selAddr(){
				uni.chooseLocation({
					success: (res) => {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
							
						let formData = {}
						formData.lon = res.longitude
						formData.lat = res.latitude
						formData.address = res.address
						this.$request({
							// 保存资料
							url:'association/client/setting/editUser.do',
							data: formData,
							success: (res) => {
								console.log('request success', res)
								let _data = res.data
								
								this.infoData.address = res.address
								this.$forceUpdate()
							}
						})
					},
				})
			},
      goPage(e) {
				
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
        let keyname = e.currentTarget.dataset.keyname||''
				if(page!=1&&!this.infoData.industry_id){
					uni.showToast({
						title:'请先选择行业'
					})
					return
				}
      	uni.navigateTo({
      		url: path+'?page='+page+'&industry_id='+this.infoData.industry_id+'&keyname='+keyname
      	})
      },
			//展示 popup
			showMiddlePopup() {
				this.hidePopup();
				this.popType = 'bottom';
				this.showPopup = true;
			},
			//统一的关闭popup方法
			hidePopup() {
				this.showPopup = false;
			},
			tixianHandle(state){
			  this.popState = state+1
			  
			},
			onConfirm(e) {
				console.log('ryy-e', e.label.split('-'))
				// this.pickerText = JSON.stringify(e)
				this.infoData.province_name = e.label.split('-')[0]
				this.infoData.city_name = e.label.split('-')[1]
				this.infoData.province_id = e.value[0]
				this.infoData.city_id = e.value[1]
				this.$forceUpdate()
			},
			bindDateChange(e) {
				let formData = {}
				formData.birthday = e.target.value
				this.$request({
					// 保存资料
					url:'association/client/setting/editUser.do',
					data: formData,
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						
						this.infoData.birthday = e.target.value
						this.$forceUpdate()
					}
				})
				
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
						year = year - 60;
				} else if (type === 'end') {
						year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			selMingp(id){
				this.selMingId = id
			},
			selMingpConf(){
				if(!this.selMingId){
					uni.showToast({
						title:'请选择名片'
					})
					return
				}
				this.$request({
					// 保存名片身份
					url:'association/client/setting/editProfessional.do',
					data: {
						id: this.selMingId
					},
					success: (res) => {
						console.log('request success', res)
						this.init(this.options)
					}
				})
				this.hidePopup()
			},
			onCancel(e) {
				console.log(e)
			},
			sexChange(sex){
				this.infoData.sex = sex
			},
			conf(){
				this.$request({
					// 保存资料
					url:'association/client/setting/editUser.do',
					data: this.infoData,
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						
						uni.showToast({
							title: ''+res.errmsg,
							icon:'none'
						})
					}
				})
			},
			// 单列
			showSinglePicker() {
				this.pickerValueArray = this.pickerSingleArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePicker.show()
			},
			// 二级联动选择
			showMulLinkageTwoPicker() {
				this.pickerValueArray = this.mulLinkageTwoPicker
				this.mode = 'multiLinkageSelector'
				this.deepLength = 2
				this.pickerValueDefault = [0, 0]
				this.$refs.mpvuePicker.show()
			},
      onBackPress() {
        if (this.$refs.mpvuePicker.showPicker) {
          this.$refs.mpvuePicker.pickerCancel();
          return true;
        }
        if (this.$refs.mpvueCityPicker.showPicker) {
          this.$refs.mpvueCityPicker.pickerCancel();
          return true;
        }
      },
      onUnload() {
        if (this.$refs.mpvuePicker.showPicker) {
          this.$refs.mpvuePicker.pickerCancel()
        }
        if (this.$refs.mpvueCityPicker.showPicker) {
          this.$refs.mpvueCityPicker.pickerCancel()
        }
			}
    }
	}
</script>

<style lang="scss">
	.mypop{
		background: gray;
		.non-content{
			color: gray;
			height: 200upx;
			.to-bind {
				color: #5788ff;
			}
		}
		.uni-popup{
			position: fixed;
		}
		.uni-popup-bottom{
		  height:auto !important;
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
	}
	.biao-q{
		color: #5788ff;
		border: #5788ff solid 1upx;
		border-radius: 100upx;
		padding: 0 10upx;
		margin-left: 10upx;
	}
	
	.pop-btn{
	  position: unset;
	  z-index: 300;
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
  .bianj-head{
    flex-direction: column;
    height:370rpx;
    padding: 40upx 0;
    image{
      width: 130upx;
      height: 130upx;
      border-radius: 130upx;
      background-color: #e2e4e9;
      border: solid 2upx #5788ff;
    }
    .bianj-head-name{
      font-size: 36upx;
      font-weight: 700;
      line-height: 52upx;
      color: #353535;
    }
    .bianj-head-sex{
      >view{
        color: #fff;
        width: 118upx;
        height: 57upx;
        background-color: #5788ff;
        border-radius: 28upx;
        font-size: 30upx;
        margin: 0 10upx;
        .iconfont{
          font-size: 34upx;
          margin-right: 8upx;
        }
      }
      .nosel{
        background-color: #ffffff;
        border: solid 1upx #dddddd;
        color: #bbbbbb;
        
      }
    }
  }
  .cell-bot:after{
    left: 0;
    right: 0;
  }
  .mar-set{
    margin-bottom: 100upx;
  }
  .myoper-item{
    padding: 0 40upx;
    height: 112upx;
    .myoper-item-left{
      
      view{
        font-size: 30upx;
      }
    }
    .myoper-item-right{
			display: flex;
			align-items: center;
			justify-content: space-between;
      text{
        font-size: 30upx;
        line-height: 40upx;
        color: #5788ff;
      }
      .iconfont{
        color: #b6b7b7;
        margin-left: 14upx;
      }
    }
  }
	.top-oper{
		padding: 20upx 30upx 10upx;
		>view:nth-child(1){
			color: #bbb;
		}
		>view:nth-child(2){
			color: #5788ff;
		}
	}
	.check-ico{
		min-width: 50upx;
	  .iconfont{
	    font-size: 40upx;
	    margin-right: 20upx;
	  }
	}
	.selc-item{
	  padding: 20upx 30upx 20upx 30upx;
	  border-bottom: #e5e7eb solid 1upx;
	  .selc-item-left{
			.icon-dui{
				margin-right: 10upx;
				font-size: 40upx;
			}
	    .selc-item-img{
	      width: 100upx;
	      height: 100upx;
	      margin-right: 20upx;
				background-color: #a1a5af;
	      image{
	        width: 100upx;
	        height: 100upx;
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
				
	      
	    }
	  }
	  .selc-item-type{
			.iconfont{
				font-size: 40upx;
			}
	    color: #bbb;
	  }
	}
</style>
