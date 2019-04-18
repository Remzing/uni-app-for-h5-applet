<template>
	<view>
		<view class="renz-top">
			<view class="renz-top-tips flex-cent-cent">认证身份经历，获得以下特权</view>
			<view class="renz-top-box flex-cent-cent">
				<view class="renz-top-item">
					<view class="iconfont icon-renzheng"></view>
					<view class="">点亮V图标</view>
				</view>
				<view class="renz-top-item">
					<view class="iconfont icon-shuyou"></view>
					<view class="">共享借阅书籍</view>
				</view>
				<view class="renz-top-item">
					<view class="iconfont icon-huiyuan1"></view>
					<view class="">优质人脉推荐</view>
				</view>
			</view>
		</view>
		<view class="" v-if="setUp==1">
			<view class="quan-box flex-cent-cent">
				<view class="quan-box1 flex-cent-cent">
					<view class="quan-box2 flex-cent-cent">
						<view class="quan-box3 flex-cent-cent">
							<text>
								1234 5678 9876 54321
								XXXX
							</text>
						</view>
					</view>
				</view>
			</view>
			<view class="renzhen-tip">
				<text>
					请横向拍摄正页
					照片上不要有阴影和反光
				</text>
			</view>
			<view class="renz-btn flex-cent-cent">
				<button class="conf-btn" type="primary" @click="upIdImg">上传本人身份证照片（正面）</button>
			</view>
		</view>
		<view class="" v-if="setUp==2">
			<view class="sfz-img">
				<image :src="infoData.card_img_txt" mode=""></image>
			</view>
			<view class="sfz-item flex-cent-bet">
				<view class="">姓名</view>
				<view class=""><input type="text" @input="nameInput" v-model="infoData.name" placeholder="请输入" /></view>
			</view>
			<view class="sfz-item flex-cent-bet">
				<view class="">身份证号码</view>
				<view class=""><input type="text" @input="idInput" v-model="infoData.id_card" placeholder="请输入" /></view>
			</view>
			<view  class="set2-tips">
				<text>
					信息有误？请修改以上信息或 <text class="col-5788ff" @click="backSetUp(1)">重新上传照片</text>
				</text>
			</view>
			<view class="renz-btn flex-cent-cent">
				<button class="conf-btn" type="primary" @click="confIdInfo">提交，下一步</button>
			</view>
		</view>
		<view class="" v-if="setUp==3">
			<view class="quan-box flex-cent-cent">
				<view class="quan-box1 flex-cent-cent">
					<view class="quan-box2 flex-cent-cent">
						<text class="iconfont icon-shouchishenfenzheng">
							
						</text>
					</view>
				</view>
			</view>
			<view class="renzhen-tip">
				<text>
					请手持身份证正面
					确保露出双肩和身份证信息
				</text>
			</view>
			<view class="renz-btn flex-cent-cent">
				<button class="conf-btn" type="primary" @click="confHandle">上传手持身份证照片（正面）</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import util from '@/common/utils/util';
	export default {
		data() {
			return {
				setUp: 1,// 1上传图片，2提交身份证信息，3上传手持身份证
				infoData:{
					id_card:'',
					name:'',
					card_img:'',
					hand_img:'',
				},
			};
		},
		onLoad() {
			this.init()
		},
    methods:{
			init(){
				this.$request({
					// 实名认证初始化
					url:'association/client/approve/approveInit.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data
						this.infoData = _data
						if(this.infoData.hand_img){
							this.setUp==3
							return
						}
						if(this.infoData.id_card&&this.infoData.name){
							this.setUp==2
							
						}
					}
				})
			},
			upIdImg(){
				util.upImages(1,[],(res)=>{
				  let tempFilePaths = res.tempFilePaths
					util.uploadFile({
            filePath: tempFilePaths[0],
            success: (uploadFileRes) => {
							let _data = uploadFileRes
							console.log('ryy-upload-succ',uploadFileRes);
							let formData = {
								card_img:_data.url,
								card_medium_img:_data.medium_url,
								card_min_img:_data.min_url,
							}
							
							this.$request({
								// 实名认证-身份证上传
								url:'association/client/approve/uploadingIdCard.do',
								data: formData,
								success: (res) => {
									console.log('ryy-my-request success', res)
									this.infoData.id_card=res.id
									this.infoData.name=res.name
									this.infoData.card_img_txt=this.$domain + _data.url
									
									this.setUp=2

								}
							})
            }
					});
				})
			},
			idInput(e) {
				var value = e.target.value;
				this.infoData.id_card=value
			},
			nameInput(e) {
				var value = e.target.value;
				this.infoData.name=value
			},
			backSetUp(param){
				this.setUp=param
			},
			confIdInfo(){
				let formData = {
					name: this.infoData.name,
					id_card: this.infoData.id_card,
				}
				this.$request({
					// 实名认证-身份证真实性核实
					url:'association/client/approve/idCardProve.do',
					data: formData,
					success: (res) => {
						console.log('ryy-my-request success', res)
						
						this.setUp=3
					}
				})
			},
      
			confHandle(){
				util.upImages(1,[],(res)=>{
					let tempFilePaths = res.tempFilePaths
					util.uploadFile({
						filePath: tempFilePaths[0],
						success: (uploadFileRes) => {
							let _data = uploadFileRes
							console.log('ryy-upload-succ',uploadFileRes);
							let formData = {
								hand_img:_data.url,
								hand_medium_img:_data.medium_url,
								hand_min_img:_data.min_url,
							}
							
							this.$request({
								// 实名认证-手持身份证上传
								url:'association/client/approve/uploadingHandIdCard.do',
								data: formData,
								success: (res) => {
									console.log('ryy-my-request success', res)
									uni.redirectTo({
										url: '/pages/my/bangDingJieGuo/bangDingJieGuo?page=1'
									})
								}
							})
						}
					});
				})
				
			},
			goPage(e) {
			  let path = e.currentTarget.dataset.path
			  let page = e.currentTarget.dataset.page||''
				uni.navigateTo({
					url: path+'?page='+page
				})
			},
    }
	}
</script>

<style lang="scss">
	.sfz-img{
		margin: 60upx auto 30upx;
		width: 502upx;
		height: 321upx;
		image{
			width: 502upx;
			height: 321upx;
			background: #e5e5e5;
		}
	}
	.icon-shouchishenfenzheng{
		font-size: 240upx;
		color: #5788ff;
	}
	.sfz-item{
		margin: 20upx 40upx 0;
		padding: 0 30upx;
		width: 670upx;
		height: 98upx;
		background-color: #ffffff;
		border: solid 1px #e5e5e5;
		input{
			color: #5788ff;
			text-align: right;
		}
	}
	.set2-tips{
		padding: 30upx 40upx;
	}
	.renz-btn{
		.conf-btn{
			width: 500upx;
			height: 98upx;
			line-height: 98upx;
			background-image: linear-gradient(120deg, 
				#39abf8 0%, 
				#7184fe 100%);
			box-shadow: 0px 8upx 12upx 0px 
				rgba(151, 160, 202, 0.5);
			border-radius: 49upx;
			font-size: 30upx;
		}
	}
	.renzhen-tip{
		text-align: center;
		font-size: 24upx;
		line-height: 40upx;
		color: #353535;
		margin-bottom: 50upx;
	}
	.quan-box{
		width: 500upx;
		height: 500upx;
		border-radius: 500upx;
		background-color: #ffffff;
		border: solid 1upx #5788ff;
		margin: 60upx auto 36upx;
		.quan-box1{
			width: 450upx;
			height: 450upx;
			border-radius: 450upx;
			background-color: #ffffff;
			border: dashed 1px #5788ff;
			.quan-box2{
				width: 400upx;
				height: 400upx;
				border-radius: 400upx;
				background-color: #ffffff;
				border: solid 3upx #5788ff;
				.quan-box3{
					width: 295upx;
					height: 199upx;
					background-color: #5788ff;
					box-shadow: 0px 8upx 12upx 0px 
						rgba(151, 160, 202, 0.5);
					border-radius: 15upx;
					color: #fff;
					font-size: 24upx;
					line-height: 52upx;
				}
			}
		}
	}
	.renz-top{
		padding: 40upx 0 20upx;
		.renz-top-tips{
			margin-bottom: 12upx;
			font-size: 34upx;
			line-height: 52upx;
			color: #353535;
			font-weight: 700;
		}
		.renz-top-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 0 30upx;
			.iconfont{
				font-size: 50upx;
				color: #5788ff;
			}
		}
	}
</style>
