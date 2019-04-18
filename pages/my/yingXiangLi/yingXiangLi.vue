<template>
	<view>
		<block v-for="(item,index) in infoArr" :key="index">
			<view class=" selc-item flex-cent-bet">
			  <view class="selc-item-left flex-cent">
			  	<view class="selc-item-img flex-cent-cent">
						<text class="ico-bor">{{item.firstZ}}</text>
					</view>
			  	<view class="selc-item-txt flex-cent">
			      <view class="selc-item-name"> {{item.name}}</view>
			      <view class="selc-item-job flex-cent">
			        <view class="flex-cent">
								<text class="col-dd0000"></text>{{item.details}}  <text class="col-dd0000"> +{{item.influence}} </text>影响力
							</view>
			      </view>
			    </view>
			  </view>
				<view class="fang-rig">
					<view class=""  v-if="item.is_show&&item.is_finish">
						<text>已完成</text>
					</view>
					<view class=""  v-if="item.is_show&&!item.is_finish">
						<button class="conf-btn rads" type="primary">赚影响力</button>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoArr:[]
			};
		},
		onLoad() {
			this.init()
		},
    methods:{
			init(){
				this.$request({
					// 影响力任务列表
					url:'association/client/influence/influenceMissionList.do',
					data: {
					},
					success: (res) => {
						console.log('ryy-my-request success', res)
						let _data = res.data||[]
						_data.forEach((item)=>{
							item.firstZ = item.name.split('')[0]||''
						})
						this.infoArr = _data
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
	.fang-rig{
		text{
			display: block;
			width: 125upx;
			text-align: center;
			font-size: 24upx;
			color: #5788ff;
		}
	}
	.selc-item{
	  padding: 20upx 30upx 20upx 30upx;
	  border-bottom: #e5e7eb solid 1upx;
	  .selc-item-left{
	    .selc-item-img{
	      width: 70upx;
				height: 70upx;
				border-radius: 70upx;
				background-color: #ffffff;
				border: solid 1px #5788ff;
	      margin-right: 20upx;
				
	      .ico-bor{
	        font-size: 40upx;
					font-weight: 700;
					letter-spacing: 0px;
					color: #5787fe;
					height: 80upx;
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
	      .icon-jiaruqunzu{
	        margin-left: 20upx;
	      }
	    }
	  }
	  .selc-item-type{
	    width: 46upx;
	    height: 46upx;
	    background-image: linear-gradient(120deg, 
	      #39abf8 0%, 
	      #7184fe 100%);
	    box-shadow: 0px 3upx 3upx 0px 
	      rgba(109, 135, 254, 0.5);
	    border-radius: 23upx;
	    font-size: 20upx;
	    color: #fff;
	  }
	}
</style>
