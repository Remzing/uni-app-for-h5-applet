<template>
  <view class="">
  	<view class="flex-cent" v-if="page==1">
  		<scroll-view class="sel-left" scroll-y>
				<block v-for="(item, index) in hangyeArr" :key="index" >
					<view class="sel-left-item flex-cent-cent" :class="hangyeInx==index?'act':''" @click="selHangYeHandle(index, item.id)">{{item.industry_name}}</view>

				</block>
  		</scroll-view>
  	  <scroll-view class="sel-right" scroll-y>
				<block v-for="(item, index) in hangyeArrSec" :key="index" >
					<view class="sel-left-item flex-cent-bet" @click="selHangYeSecHandle(index, item.id)">
					  <view class="">{{item.industry_name}}</view>
					  <view class="iconfont icon-xuanze"></view>
					</view>
				</block>
  	  </scroll-view>
  	  <view class="join-btn"><button class="conf-btn" type="primary" @click="conf"> 确认</button></view>
  	</view>
    
    <view class="zhiye"  v-if="page==2">
			<block v-for="(item, index) in zhiyeArr" :key="index" >
				<view class="zhiye-item flex-cent-bet" @click="selZhiYeHandle(index, item.id)">
				  <view class="">{{item.name}}</view>
				  <view v-if="zhiyeInx==index" class="iconfont icon-xuanze"></view>
				</view>
			</block>
    	
    	
      <view class="join-btn"><button class="conf-btn" type="primary" @click="confZhiye"> 确认</button></view>
    </view>
    <view class="biaoqian"  v-if="page==3">
    	<view class="ser-box flex-cent">
    		<view class="iconfont icon-sousuo"></view>
        <input type="text" value="" placeholder="搜素添加职业标签" />
    	</view>
      <view class="biaoq-box">
				<block v-for="(item, index) in biaoqianArr" :key="index" >
					<view class="biaoq-item" :class="item.check?'':'nosel'" @click="selBiaoq(index, item)">{{item.label_name}}</view>
				</block>
      </view>
      <view class="join-btn"><button class="conf-btn" type="primary" @click="confBiaoqian"> 确认</button></view>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				page:'', //1行业，2职业,3标签
				hangyeArr:[],
				hangyeInx:'',
				hangyeArrSec:[],
				hangyeSecInx:'',
				
				zhiyeArr:[],
				zhiyeInx:'',
				
				biaoqianArr:[
// 					{
// 						id:1,
// 						label_name:'1313qwe'
// 					},
// 					{
// 						id:2,
// 						label_name:'ddddd'
// 					},
				],
			};
		},
    onLoad(options) {
			this.options = options
			this.page = options.page||''
			this.init()
		},
		methods:{
			init(){
				let tit = ''
				if(this.page==1){
					tit='选择行业'
					this.$request({
						// 选择行业初始化
						url:'association/client/setting/editIndustryInit.do',
						data: {
							industry_id:0
						},
						success: (res) => {
							console.log('ryy-my-request success', res)
							let _data = res.data
							this.hangyeArr = _data||[]
						}
					})
				}else if(this.page==2){
					tit='选择职业'
					this.$request({
						// 选择职业方向初始化
						url:'association/client/setting/editProfessionDirectionInit.do',
						data: {
							industry_id: this.options.industry_id
						},
						success: (res) => {
							console.log('ryy-my-request success', res)
							let _data = res.data
							this.zhiyeArr = _data||[]
						}
					})
				}else if(this.page==3){
					tit='选择标签'
					this.$request({
						// 选择职业标签初始化
						url:'association/client/setting/editLabelInit.do',
						data: {
							industry_id: this.options.industry_id
						},
						success: (res) => {
							console.log('ryy-my-request success', res)
							let _data = res.data
							// this.biaoqianArr = _data||[]
						}
					})
				}
				uni.setNavigationBarTitle({
					title:tit
				})
			},
			selHangYeHandle(index,id){
				this.hangyeInx = index
				this.$request({
					// 选择行业初始化
					url:'association/client/setting/editIndustryInit.do',
					data: {
						industry_id:id
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data
						this.hangyeArrSec = _data||[]
					}
				})
			},
			selHangYeSecHandle(index){
				console.log('ryy-selHangYeSecHandle', index)
				this.hangyeSecInx = index
			},
			selZhiYeHandle(index){
				this.zhiyeInx = index
			},
			selBiaoq(index,item){
				console.log("ryy-index-item", index,item)
				item.check = !item.check
				console.log("ryy-index-item", this.biaoqianArr)
				this.$forceUpdate()
			},
			conf(){
				
				if (this.hangyeArr.length==0) {
					return
				}
				let tempIndustryId='', tempIndustryName=''
				let formData = {}
				let temp = this.hangyeArr[this.hangyeInx]||''
				let tempSec = this.hangyeArrSec[this.hangyeSecInx]||''
				if(this.hangyeArrSec.length>0&&temp&&tempSec){
					
					formData.industry_id = tempIndustryId = tempSec.id
					formData.industry_name_one = temp.industry_name
					formData.industry_name_two = tempIndustryName= tempSec.industry_name
					 
				}else if(this.hangyeArr.length>0&&temp){
					formData.industry_id = tempIndustryId = temp.id
					formData.industry_name_one = tempIndustryName= temp.industry_name
					formData.industry_name_two = temp.industry_name

				}
				if(this.options.back==1){
					// 跳转到上一页面
					let pages = getCurrentPages();//当前页面
					let prevPage = pages[pages.length - 2];//上一页面
					// console.log("ryy-prevPageTemp-SET", prevPage)
					
					prevPage.$vm.formData.industry_id = tempIndustryId
					prevPage.$vm.formData.industry_name = tempIndustryName
					prevPage.$vm.$forceUpdate()
					uni.navigateBack({//返回
					  delta: 1
					})
					return
				}
				this.$request({
					// 保存资料
					url:'association/client/setting/editUser.do',
					data: formData,
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						
						console.log("ryy-prevPageTemp-SET1", formData)
						uni.showToast({
							title: ''+res.errmsg,
							icon:'none'
						})
						setTimeout(()=>{
							uni.navigateBack({//返回
							  delta: 1
							})
						},1000)
						
					}
				})
				
			},
			confZhiye(){
				// 跳转到上一页面
// 				let pages = getCurrentPages();//当前页面
// 				let prevPage = pages[pages.length - 2];//上一页面
// 				console.log("ryy-prevPageTemp-SET", prevPage)
				if (this.zhiyeArr.length==0) {
					return
				} 
				let formData = {}
				let temp = this.hangyeArr[this.zhiyeInx]||''
				if(this.zhiyeArr.length>0&&temp){
					formData.career_direction_id = temp.id
					formData.career_direction_name = temp.name
					
				}
				this.$request({
					// 保存资料
					url:'association/client/setting/editUser.do',
					data: formData,
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						
						console.log("ryy-prevPageTemp-SET1", formData)
						uni.showToast({
							title: ''+res.errmsg,
							icon:'none'
						})
						setTimeout(()=>{
							uni.navigateBack({//返回
							  delta: 1
							})
						},1000)
						
					}
				})
			},
			confBiaoqian(){
				let selTemp =  []
				this.biaoqianArr.forEach((item)=>{
					if(item.check){
						selTemp.push(item)
					}
				})
				if(selTemp.length==0){
					uni.showToast({
						icon:'none',
						title:'请选择标签'
					})
					return
				}
				// 跳转到上一页面
// 				let pages = getCurrentPages();//当前页面
// 				let prevPage = pages[pages.length - 2];//上一页面
// 				console.log("ryy-prevPageTemp-SET", formData)
				let formData = {}
				formData.label_list = JSON.stringify(selTemp) 
				
				let tempIds = ''
				selTemp.forEach((item)=>{
					if(item.id){
						tempIds += item.id+','
					}
				})
				formData.profession_label_ids = tempIds.substr(0, tempIds.length - 1); 
				this.$request({
					// 保存资料
					url:'association/client/setting/editUser.do',
					data: formData,
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						
						console.log("ryy-prevPageTemp-SET1", formData)
						uni.showToast({
							title: ''+res.errmsg,
							icon:'none'
						})
						setTimeout(()=>{
							uni.navigateBack({//返回
							  delta: 1
							})
						},1000)
						
					}
				})
			}	
		}
	}
</script>

<style lang="scss">
  .biaoqian{
    margin-bottom: 98upx;
    .ser-box{
      margin: 30upx 30upx;
      padding: 0 30upx;
      height: 80upx;
      border: #ddd solid 1upx;
      border-radius: 100upx;
      .iconfont{
        margin-right: 20upx;
        font-size: 40upx;
        color: #ddd;
      }
    }
    .biaoq-box{
      display: flex;
      flex-wrap: wrap;
      padding: 0 30upx;
      .biaoq-item{
        color: #fff;
        padding: 4upx 20upx;
        background-color: #5788ff;
        border-radius: 40upx;
        font-size: 30upx;
        margin: 26upx 20upx 0 0;;
      }
      .nosel{
        background-color: #ddd;
        color: #353535;
      }
    }
  }
  .zhiye{
    margin-bottom: 98upx;
    .zhiye-item{
      border-bottom: #e5e7ed solid 1upx;
      height: 100upx;
      color: #353535;
      padding: 0 40upx;
      .iconfont{
        color: #5788ff;
        font-size: 34upx;
      }
    }
  }
  .sel-left{
    width: 50%;
    height: calc(100vh - 98upx);
    border-right: #e5e7ed solid 1upx;
    .sel-left-item{
      border-bottom: #e5e7ed solid 1upx;
      height: 100upx;
      color: #353535;
    }
    .act{
      color: #5788ff;
      font-weight: 700;
    }
  }
  .sel-right{
    width: 50%;
    height: calc(100vh - 98upx);
    .sel-left-item{
      border-bottom: #e5e7ed solid 1upx;
      height: 80upx;
      color: #353535;
      padding: 0 20upx;
      .iconfont{
        color: #5788ff;
        font-size: 34upx;
      }
    }
  }
</style>
