<template>
	<view>
		<view class="mar-set">
			<picker mode='selector' @change="bindPickerChange" :range="infoArr" range-key='name'>
				<view class="myoper-item flex-cent-bet cell-bot" >
					<view class="myoper-item-left flex-cent">
						<view class="">意见类型</view>
					</view>
					<view class="myoper-item-right">
						<text>{{name||""}}</text>
						<view class="iconfont icon-youjiantou"></view>
					</view>
				</view>
			</picker>
      <view class="fank-area">
      	<textarea maxlength="330" @input="contInput" v-model="cont" :placeholder="'在这里输入你的详细意见内容'" />
      </view>
			<view class="countnum flex-cent-bet">
				<view class="setup-upimg-img flex-cent-cent" @click="uoImgHandle">
					<view v-if="!infoData.img_txt" class="iconfont icon-shangchuantupian" ></view>
				  <image v-if="infoData.img_txt" :src="infoData.img_txt" mode=""></image>
				</view>
				<text>0/300</text>
			</view>

		</view>
		<view class="join-btn"><button class="conf-btn" type="primary" @click="conf"> 提交</button></view>
	</view>
</template>

<script>
	import util from '@/common/utils/util';
	export default {
		data() {
			return {
				infoArr:[],
				inx:-1,
				selId:'',
				name:'',
				cont:'',
				infoData:{},
			};
		},
		onLoad() {
			
		},
		onShow() {
			this.init()
		},
    methods:{
			init(){
				this.$request({
					// 意见反馈初始化
					url:'association/client/setting/feedbackInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data||[]
						this.infoArr = _data
					}
				})
			},
			contInput(e) {
				var value = e.target.value;
				this.cont=value
			},
			bindPickerChange(e) {
					console.log('picker发送选择改变，携带值为', e)
					this.inx = e.target.value
					this.name = this.infoArr[this.inx].name
					this.selId = this.infoArr[this.inx].id
			},
			uoImgHandle(){
			  util.upImages(1,[],(res)=>{
			  	let tempFilePaths = res.tempFilePaths
			  	util.uploadFile({
			  		filePath: tempFilePaths[0],
			  		success: (uploadFileRes) => {
			  			let _data = uploadFileRes
			  			console.log('ryy-upload-succ',uploadFileRes);
			  			this.infoData.img_txt = this.$domain + _data.url
			  			this.infoData.img = _data.url
			  			this.infoData.medium_img = _data.medium_url
			  			this.infoData.min_img = _data.min_url
			  			
			  			this.$forceUpdate()
			  		}
			  	});
			  })
			},
			conf(){
				if(!this.selId){
					util.showModal({content: '请选择类型'})
					return
				}
				if(!this.cont){
					util.showModal({content: '请输入内容'})
					return
				}
// 				if(!this.img){
// 					util.showModal({content: '请上传图片'})
// 					return
// 				}
				let formData = {
					feedback_type_id: this.selId||'',
					content: this.cont||'',
					img: this.infoData.img||'',
					medium_img: this.infoData.medium_img||'',
					min_img: this.infoData.min_img||'',
				}
				this.$request({
					// 意见反馈
					url:'association/client/setting/feedback.do',
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
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f1f3f7;
	}
	.setup-upimg-img{
	  width: 180upx;
	  height: 194upx;
	  background-color: #f1f3f7;
	  border: solid 1upx #e5e7ed;
	  margin-bottom: 18upx;
	  .iconfont{
	    font-size: 80upx;
	    color: #c1c3c8;
	  }
	  image{
	    width: 100%;
	    height: 100%;
	  }
	 
	}
	.countnum{
		background: #fff;
		padding: 20upx 30upx;
		align-items: flex-end;
	}
	.fank-area{
		background: #fff;
		padding: 20upx 30upx;
	}
	.cell-bot:after{
	  left: 0;
	  right: 0;
	}
	.mar-set{
	  margin-bottom: 100upx;
	}
	.myoper-item{
		background: #fff;
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
	    text{
	      font-size: 30upx;
	      line-height: 52upx;
	      color: #5788ff;
	    }
	    .iconfont{
	      color: #b6b7b7;
	      margin-left: 14upx;
	    }
	  }
	}
</style>
