<template>
	<view>
		<view class="inp-edit flex-cent">
			<input  type="text" :placeholder="palceTxt" value="keyname" v-model="keyname"/>
		</view>
		<view class="join-btn"><button class="conf-btn" type="primary" @click="conf"> 确定修改</button></view>
	</view>
</template>

<script>
	import util from '@/common/utils/util.js';
	export default {
		data() {
			return {
				page:'',// 1.编辑昵称，2.编辑电话，3.邮箱地址，4.微信号
				palceTxt:'',
				keyname:''
			};
		},
		onLoad(options) {
			this.options = options
			this.init()
		},
    methods:{
			init(){
				// page: 1.编辑昵称，2.编辑电话，3.邮箱地址，4.微信号
				let title = ''
				if(this.options.page==1){
					title = '编辑昵称'
					this.palceTxt='请输入昵称'
				}else if(this.options.page==2){
					title = '编辑电话'
					this.palceTxt='请输入电话'
				}else if(this.options.page==3){
					title = '邮箱地址'
					this.palceTxt='请输入邮箱地址'
				}else if(this.options.page==4){
					title = '微信号'
					this.palceTxt='请输入微信号'
				}
				this.keyname = this.options.keyname
				uni.setNavigationBarTitle({
				    title
				});
			},
			conf(){
				let formData = {}
				// page: 1.编辑昵称，2.编辑电话，3.邮箱地址，4.微信号
				if(this.options.page==1){
					formData.nick_name = this.keyname
				}else if(this.options.page==2){
					formData.phone = this.keyname
				}else if(this.options.page==3){
					formData.email = this.keyname
				}else if(this.options.page==4){
					formData.wx_number = this.keyname
				}
				this.$request({
					// 保存资料
					url:'association/client/setting/editUser.do',
					data: formData,
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						util.showToast({
							title: res.errmsg+'',
						});
						setTimeout(()=>{
							uni.navigateBack()

						},1000)
					}
				})
			},
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
      	uni.navigateTo({
      		url: path+'?page='+page
      	})
      }
    }
	}
</script>

<style lang="scss">
	page{
		background-color: #f1f3f7;
	}
	.inp-edit{
		height: 113upx;
		width: 100%;
		background: #fff;
		padding: 0 30upx;
		input{
			font-size: 30upx;
			line-height: 52upx;
			color: #bbbbbb;
		}
	}
	.join-btn{
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  width: 100%;
	  z-index: 10;
	  .conf-btn{
	    height: 98upx;
	    line-height: 98upx;
	    background-image: linear-gradient(120deg, 
	      #39abf8 0%, 
	      #7184fe 100%);
	      margin:0;
	      border-radius: 0;
	      font-size: 36upx;
	  }
	}
</style>
