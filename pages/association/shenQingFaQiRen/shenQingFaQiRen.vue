<template>
	<view class="mar-cont">
    <view class="faqi-top flex-cent-cent">
    	<image :src="infoData.user_photo" mode=""></image>
			<view class="">{{infoData.real_name||infoData.nick_name}}</view>
			<view class="">你确认成为【{{options.city_name}}】城市下社群发起人！</view>
    </view>
		<view class="faqi-jie flex-cent-bet">
			<view class=""><text class="col-5788ff">【{{options.city_name}}】</text><text class="col-ffa200"> {{options.asso_name}} </text>社群发起人介绍</view>
			<view class="iconfont icon-youjiantou"></view>
		</view>
		<view class="pingd-txt">
			<view class="col-969aa6">请您提供以下信息！</view>
			
		</view>
    <view class="" v-if="isEdit">
    	<view class="inp-item">
    		<view class=""><input type="text" @input="realNameInput" v-model="formData.real_name" placeholder="填写真实姓名" placeholder-class="col-bbb" /></view>
    		<view class=""></view>
    	</view>
    	<view class="inp-item flex-cent" @click="selIndustry">
    		<view class="">{{formData.industry_name}}</view>
    		<view class="iconfont icon-youjiantou"></view>
    	</view>
    	<view class="inp-item">
    		<view class=""><input type="text" @input="telephoneInput" v-model="formData.telephone" placeholder="输入手机号码" placeholder-class="col-bbb" /></view>
    		<view class="">
					<button v-if="this.loopnum==60" class="conf-btn rads" type="primary" @click="sendHandle">获取验证码</button>
					<view v-if="this.loopnum!=60" class="code-btn" @click="sendHandle">{{loopnum}} 秒后重发</view>
				</view>
    	</view>
			<view class="inp-item">
				<view class=""><input type="text" @input="codeInput" v-model="formData.code" placeholder="填写验证码" placeholder-class="col-bbb" /></view>
				<view class=""></view>
			</view>
			<view class="inp-item">
				<view class=""><input type="text" @input="associationNameInput" v-model="formData.association_name" placeholder="填写社群名称(选填)" placeholder-class="col-bbb" /></view>
				<view class=""></view>
			</view>
    </view>
    <view class="" v-if="!isEdit">
    	<view class="inp-item">
    		<view class="">
    		  <text class="col-969aa6">姓名：</text>
    		  <text>{{formData.name}}</text>
    		</view>
    	</view>
    	<view class="inp-item">
    		<view class="">
    		  <text class="col-969aa6">行业：</text>
    		  <text>{{formData.job}}</text>
    		</view>
    	</view>
    	<view class="inp-item">
    		<view class="">
    		  <text class="col-969aa6">电话：</text>
    		  <text>{{formData.telephone}}</text>
    		</view>
    	</view>
    </view>
    
    <view class="join-btn"><button class="conf-btn" type="primary" @click="conf">确定提交</button></view>
  </view>
</template>

<script>
	import util from '@/common/utils/util';

	export default {
		data() {
			return {
				formData:{
          industry_id: "",
          real_name: "",
          industry_name: "",
					association_type_id:'',
          telephone: "",
					code:'',
					city_id:'',
					city_name:'',
					province_id:'',
					province_name:'',
					type:'2',//1:城市发起人 2:社群发起人
					association_name:'',
        },
        isEdit: true,
				infoData:{},
				options:{
					city_id:'',
					city_name:'',
					parent_id:'',
					parent_name:'',
					asso_name:'',
					asso_id:'',
				},
				loopnum:60,
			};
		},
		onLoad(options) {
			this.options = options
			this.formData.city_id = options.city_id||''
			this.formData.city_name = options.city_name||''
			this.formData.province_id = options.parent_id||''
			this.formData.province_name = options.parent_name||''
			// this.formData.association_type_name = options.asso_name||''
			this.formData.association_type_id = options.asso_id||''
			this.init()
		},
    methods: {
			init(){
				this.$request({
					// 我的页面初始化
					url:'association/client/setting/mineInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data
						this.infoData = _data
						this.infoData.grade_icon&&(this.infoData.grade_icon=this.$domain+this.infoData.grade_icon)
					}
				})
				
				this.fetchDataInit()
			},
			realNameInput(e){
				var value = e.target.value;
				this.formData.real_name = value
			},
			
			telephoneInput(e){
				var value = e.target.value;
				this.formData.telephone = value
			},
			codeInput(e){
				var value = e.target.value;
				this.formData.code = value
			},
			associationNameInput(e){
				var value = e.target.value;
				this.formData.association_name = value
			},
			selIndustry(){
				uni.navigateTo({
					url: '/pages/my/xuanZeHangYe/xuanZeHangYe?page=1&back=1'
				})
			},
			sendHandle(callbcak){
// 				this.loopnum=59
// 				return
				if(this.loopnum!=60){
					return
				}
				if(!this.formData.telephone){
					util.showModal({content: '请输入手机号'})
					return
				}
				this.$request({
					// 获取短信验证码
					url:'association/client/association/getSendCode.do',
					data: {
						telephone: this.formData.telephone
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data
						util.showToast({
							title: res.errmsg+'',
						});
						this.loopnumSet =setInterval(() => {
							this.loopnum--
							if(this.loopnum<1){
								clearInterval(this.loopnumSet)
								this.loopnum=60
							}
						}, 1000);
						callbcak&&callbcak()
					},
					fail:()=>{
					}
				})
			},
			async fetchDataInit(){
				// 城市发起人申请用户初始化
				let rep = await this.$asyncRequest(
				  `association/client/association/selectUserInfoInit.do`
				)
				let _data = rep.data
				this.formData.industry_id = _data.industry_id
				this.formData.real_name = _data.real_name
				this.formData.telephone = _data.telephone
				this.formData.industry_name = _data.industry_name
			},
    	payFee() {
    		
    	},
			conf(){
				
				if(!this.formData.real_name){
					util.showModal({content: '请填写真实姓名'})
					return
				}
				if(!this.formData.industry_id){
					util.showModal({content: '请选择行业'})
					return
				}
				if(!this.formData.telephone){
					util.showModal({content: '请输入手机号'})
					return
				}
// 				if(!this.formData.code){
// 					util.showModal({content: '请输入验证码'})
// 					return
// 				}
				
				this.$request({
					// 申请城市发起人
					url:'association/client/association/applyCitySponsor.do',
					data: this.formData,
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						
						uni.redirectTo({
							url: `/pages/association/joinSuccess/joinSuccess?real_name=${this.formData.real_name}&industry_name=${this.formData.industry_name}&telephone=${this.formData.telephone}&asso_name=${this.options.asso_name}&association_name=${this.formData.association_name}`
						})
					}
				})
			},
      editHandle(){
        this.isEdit = !this.isEdit
      }
    },
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
	.code-btn{
		padding: 0 10upx;
		background: #bbbbbb;
		color: #fff;
		border-radius: 200upx;
		margin-left: 60upx;
	}
	.col-back {
		background-image: linear-gradient(120deg, 
		#39abf8 0%, 
		#7184fe 100%);
	box-shadow: 0px 3upx 3upx 0px 
		rgba(109, 135, 254, 0.5);
	}
	.col-ffa200{
		color:#ffa200
	}
  .faqi-top{
		width: 750upx;
		height: 299upx;
		background-color: #5788ff;
		flex-direction: column;
		image{
			width: 130upx;
			height: 130upx;
			border-radius: 130upx;
			background-color: #e2e4e9;
			border: solid 2upx #ffffff;
			margin-bottom: 28upx;
		}
		view{
			font-size: 28upx;
			line-height: 48upx;
			color: #ffffff;
		}
	}
	.faqi-jie{
		background: #fff;
		height: 92upx;
		padding: 0 30upx;
	}
  .inp-item{
    padding: 30upx;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: #e5e7eb solid 1upx;
  }
  .inp-item:first-child{
    border-top: unset;
  }
  .tuijr{
    view:first-child{
      font-size: 30upx;
      line-height: 52upx;
      color: #353535;
    }
    view:last-child{
      font-size: 24upx;
      line-height: 48upx;
      color: #969aa6;
    }
  }
  .inp-item:first-child{
    border-top: unset;
  }
  .asso-item:last-child{
    margin-bottom: 0;
  }
  .set-pay{
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 30upx;
    .set-pay-ico{
      width: 80upx;
      height: 80upx;
      border-radius: 80upx;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #5788ff;
      margin-right: 20upx;
      .iconfont{
        font-size: 46upx;
        color: #fff;
      }
    }
    .set-pay-txt{
      view:first-child{
        font-size: 28upx;
        color: #555555;
      }
      view:last-child{
        font-size: 24upx;
        color: #969aa6;
      }
    }
  }
</style>
