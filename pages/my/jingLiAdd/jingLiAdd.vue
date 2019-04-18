<template>
	<view>
		<view class="contmin">
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
			<view class="heng"></view>
			<view class="myoper-item flex-cent-bet cell-bot"  >
				<view class="myoper-item-left flex-cent">
			    <view class="">公司单位</view>
				</view>
			  <view class="myoper-item-right">
					<input type="text" @input="companyInput" :value="infoData.company" v-model="infoData.company" placeholder="请输入" />
			  </view>
			</view>
			<view class="myoper-item flex-cent-bet cell-bot"  >
				<view class="myoper-item-left flex-cent">
			    <view class="">职位名称</view>
				</view>
			  <view class="myoper-item-right">
			    <input type="text" @input="positionInput" :value="infoData.position" v-model="infoData.position" placeholder="请输入" />
			  </view>
			</view>
			<view class="myoper-item flex-cent-bet cell-bot"  >
				<view class="myoper-item-left flex-cent">
			    <view class="">时间范围</view>
				</view>
					<view class="myoper-item-right">
						<picker mode="date" :value="startDate" @change="startDateChange" fields="month" >
							<view class="flex-cent">
								<text class="">{{infoData.start_time||'开始时间'}}</text>
								<view class="iconfont icon-xiala"></view>
							</view>
						</picker>
						<view class="" style="margin: 0 12upx;">-</view>
						<picker mode="date" :value="endDate" @change="endDateChange" fields="month" >
							<view class="flex-cent">
								<text class="">{{infoData.end_time||'结束时间'}}</text>
								<view class="iconfont icon-xiala"></view>
							</view>
						</picker>
					</view>
			</view>
			<view class="shangc-img flex-cent-cent" @click="uploadImg" v-if="infoData.credential_img_txt">
				<image :src="infoData.credential_img_txt" mode=""></image>
			</view>
			<view @click="uploadImg" class="shangc flex-cent-cent" v-if="!infoData.credential_img_txt">
				<view class="iconfont icon-tianjia"></view>
				<view class="">上传证明材料</view>
			</view>
			<view class="renz-btn flex-cent-cent">
				<button class="conf-btn" type="primary" @click="confHandle">{{'确认认证'}}</button>
			</view>
		</view>
		<view class="add-txt flex-cent-cent" v-if="editId"  @click="delHandle" >
			<view class="iconfont icon-shanchu"></view>
			删除经历
		</view>
	</view>
</template>

<script>
	import util from '@/common/utils/util';
	export default {
		
		data() {
			const currentDate = this.getDate()
			return {
				startDate:currentDate,
				endDate:currentDate,
				editId:'',
				page:'',
				infoData:{
					id:'',
					company:'',
					position:'',
					start_time:'',
					end_time:'',
					credential_img:'',
					credential_medium_img:'',
					credential_min_img:'',
				},
			};
		},
		onLoad(options) {
			this.options = options
			this.editId = options.id
			this.init()
		},
    methods:{
			init(){
				if(this.options.id){
					this.$request({
						// 职业经历认证初始化
						url:'association/client/approve/editProfessionalInit.do',
						data: {
							id: this.options.id
						},
						success: (res) => {
							console.log('ryy-my-request success', res)
							let _data = res.data || {}
							this.infoData = _data
							this.infoData.start_time&&(this.startDate = this.infoData.start_time)
							this.infoData.end_time&&(this.endDate = this.infoData.end_time)
							this.infoData.credential_img&&(this.infoData.credential_img_txt = this.$domain + this.infoData.credential_img)
							
						}
					})
				}
				
			},
			uploadImg(){
				util.upImages(1,[],(res)=>{
					let tempFilePaths = res.tempFilePaths
					util.uploadFile({
						filePath: tempFilePaths[0],
						success: (uploadFileRes) => {
							let _data = uploadFileRes
							console.log('ryy-upload-succ',uploadFileRes);
							this.infoData.credential_img_txt = this.$domain + _data.url
							this.infoData.credential_img = _data.url
							this.infoData.credential_medium_img = _data.medium_url
							this.infoData.credential_min_img = _data.min_url
							
							this.$forceUpdate()
						}
					});
				})
			},
			companyInput(e) {
				var value = e.target.value;
				this.infoData.company=value
			},
			positionInput(e) {
				var value = e.target.value;
				this.infoData.position=value
			},
			startDateChange(e) {
				console.log('ryy-startDateChange', e)
				this.startDate = e.target.value
				this.infoData.start_time = e.target.value
				this.$forceUpdate()
				
			},
			endDateChange(e){
				console.log('ryy-endDateChange', e)
				this.endDate = e.target.value
				this.infoData.end_time = e.target.value
				this.$forceUpdate()
			},
			confHandle(){
				if(!this.infoData.company){
					util.showModal({content: '请输入公司名称'})
					return
				}
				if(!this.infoData.position){
					util.showModal({content: '请输入职位'})
					return
				}
				if(!this.infoData.start_time){
					util.showModal({content: '请选择开始时间'})
					return
				}
				if(!this.infoData.end_time){
					util.showModal({content: '请选择结束时间'})
					return
				}
				if(!this.infoData.credential_img){
					util.showModal({content: '请上传证明图片'})
					return
				}
				let formData = {
					id: this.infoData.id||'',
					company: this.infoData.company||'',
					position: this.infoData.position||'',
					start_time: this.infoData.start_time||'',
					end_time: this.infoData.end_time||'',
					credential_img: this.infoData.credential_img||'',
					credential_medium_img: this.infoData.credential_medium_img||'',
					credential_min_img: this.infoData.credential_min_img||'',
				}
				this.$request({
					// 新增/编辑职业经历
					url:'association/client/approve/editProfessional.do',
					data: formData,
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data
						uni.showToast({
							title:''+res.errmsg,
							icon:'none'
						})
						setTimeout(()=>{
							uni.navigateBack({})
						},1000)
					}
				})
			},
			getDate() {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				month = month > 9 ? month : '0' + month;;
				// day = day > 9 ? day : '0' + day;
				return `${year}-${month}` //-${day}`;
			},
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = this.options.page||''
				let id = e.currentTarget.dataset.id||''
      	uni.navigateTo({
      		url: path+'?page='+page+'&id='+id
      	})
      }
    }
	}
</script>

<style lang="scss">
	page{
		background-color: #f1f3f7;
	}
	.shangc-img{
		width: 560upx;
		margin: 20upx auto;
		height: 370upx;
		background-color: #ffffff;
		image{
			width: 560upx;
			height: 370upx;
		}
	}
	.shangc{
		width: 560upx;
		margin: 20upx auto;
		height: 370upx;
		background-color: #ffffff;
		border: dashed 1px #5788ff;
		flex-direction: column;
		.iconfont{
			color: #5788ff;
			font-size: 48upx;
		}
	}
	.add-txt{
		margin: 16upx 0;
		text-align: center;
		color: #969aa6;
		.iconfont{
			margin: 0 10upx;
		}
	}
	.contmin{
		min-height: calc(100vh - 200upx)
	}
	.cell-bot:after{
	  left: 0;
	  right: 0;
	}
	.myoper-item{
	  padding: 0 40upx;
	  height: 100upx;
		background: #fff;
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
			input{
				text-align: right;
			}
	  }
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
	.renz-top{
		background: #fff;
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
