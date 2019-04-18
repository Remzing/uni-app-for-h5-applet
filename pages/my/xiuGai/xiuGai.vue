<template>
	<view>
		<block v-if="page==1">
			<view class="yinh-cont">
				<view class="yinh-tips flex-cent">
					输入新手机号码并验证
				</view>
			  <view class="form-bo">
			  	
			    <view class="form-bo-item flex-cent-bet">
						<input type="text" @input="phoneInput" v-model="phone" placeholder="输入手机号" />
						<view v-if="this.loopnum!=60" class="code-btn" @click="sendHandle">{{loopnum}} 秒后重发</view>
						<view v-if="this.loopnum==60" class="code-btn col-back " @click="sendHandle">发送验证码</view>
			    </view>
					<view class="form-bo-item flex-cent">
						<input type="text" @input="codeInput" v-model="code" placeholder="输入短信验证码" />
					</view>
			  </view>
			</view>
			<!-- <view class="bot-min-btn flex-cent-cent">
			  <button class="conf-btn rads" type="primary" @click="confCode()" >
			    下一步
			  </button>
			</view> -->
			<view class="join-btn"><button class="conf-btn" type="primary" @click="confPhone"> 提交</button></view>
		</block>
		<block v-if="page==2">
			<view class="yinh-cont">
				<view class="yinh-tips flex-cent">
					获取短信验证码，并设置新的登录密码
				</view>
			  <view class="form-bo">
			    <view class="form-bo-item flex-cent-bet">
						<view class="">{{infoData.phone}}</view>
						<view v-if="this.loopnum!=60" class="code-btn" @click="sendPwdHandle">{{loopnum}} 秒后重发</view>
						<view v-if="this.loopnum==60" class="code-btn col-back " @click="sendHandle">发送验证码</view>
			    </view>
					<view class="form-bo-item flex-cent">
						<input type="text" @input="pwdCodeInput" v-model="pwdCode" placeholder="输入短信验证码" />
					</view>
					<view class="form-bo-item flex-cent">
						<input type="text" @input="pwdInput" v-model="pwd" placeholder="输入新密码" />
					</view>
			  </view>
			</view>
			<view class="join-btn"><button class="conf-btn" type="primary" @click="confPwd"> 提交</button></view>
		</block>
	</view>
</template>

<script>
	import util from '@/common/utils/util';
	export default {
		data() {
			return {
				page:'',
				phone:'',
				code:'',
				pwd:'',
				pwdCode:'',
				loopnum:60,
			};
		},
		onLoad(options){
			this.options = options
			
			this.init()
			console.log('uni.request',uni.request)
		},
		onShow(){
		},
    methods: {
      init(){
				this.page = this.options.page||''
				if(this.page==1){
					uni.setNavigationBarTitle({
						title:'修改手机号'
					})
				}else if(this.page==2){
					uni.setNavigationBarTitle({
						title:'修改密码'
					})
				}
				this.$request({
					// 我的页面初始化
					url:'association/client/setting/mineInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request mineInit', res)
						let _data = res.data
						this.infoData = _data
					}
				})
			},
			sendPwdHandle(){
				
			},
			sendHandle(callbcak){
				if(this.loopnum!=60){
					return
				}
				if(!this.phone){
					util.showModal({content: '请输入手机号'})
					return
				}
				this.$request({
					// 账号安全-修改手机号码(发送验证码)
					url:'association/client/setting/sendCode.do',
					data: {
						phone: this.phone
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
			phoneInput(e) {
				var value = e.target.value;
				this.phone=value
			},
			codeInput(e) {
				var value = e.target.value;
				this.code=value
			},
			pwdInput(e) {
				var value = e.target.value;
				this.pwd=value
			},
			pwdCodeInput(e) {
				var value = e.target.value;
				this.pwdCode=value
			},
			confPhone(){
				if(!this.code){
					util.showModal({content: '请输入验证码'})
					return
				}
				let formData = {
					phone: this.phone,
					code: this.code,
				}
				this.$request({
					// 账号安全-修改手机号码
					url:'association/client/setting/bandingPhone.do',
					data: formData,
					success: (res) => {
						console.log('ryy-my-request success', res)
						util.showToast({
							title: res.errmsg+'',
						});
						setTimeout(()=>{
							uni.navigateBack()
						},1000)
					}
				})
			},
			confPwd(){
				
			},
		}
	}
</script>

<style lang="scss">
	page{
	  background-color: #f4f6fb;
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
	.form-bo{
	  background-color: #fff;
	  padding: 0 30upx;
	  .form-bo-item{
	    height: 110upx;
	    >view:first-child{
	      font-weight: 700;
	      color: #555555;
	      min-width: 120upx;
	      margin-right: 20upx;
	      text-align: left;
	    }
	    .form-bo-name{
	      
	    }
	  }
	}
	.yinh-tips{
	  color: #bbbbbb;
	  height: 88upx;
	  padding: 30upx;
	}
	.yinh-cont{
	  min-height: calc( 100vh - 210upx );
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
	.yingh-item{
	  width: 690upx;
	  height: 200upx;
	  margin: 0 30upx 36upx;
	  padding: 20upx 30upx 30upx;
	  background-color: #526ff2;
	  box-shadow: 0px 9upx 8upx 0px 
	    rgba(82, 111, 242, 0.35);
	  border-radius: 15upx;
	  .yingh-name{
	    font-size: 28upx;
	    font-weight: 700;
	    color: #ffffff;
	  }
	  .yingh-user{
	    font-size: 24upx;
	    color: #ffffff;
	  }
	  .yingh-id{
	    font-size: 36upx;
	    font-weight: 700;
	    color: #ffffff;
	    margin-top: 12upx;
	  }
	}
</style>
