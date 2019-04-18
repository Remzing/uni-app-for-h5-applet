<template>
  <div class="dynamic-item">
    <view class="card-item"> 
			<view class="card-tip mar-bot-20">
				第287个社群创建成功！
			</view>
			<view class="fenhui mar-bot-30">
				 <view class="fenhui-tit">
				 	<image :src="$domain + obj.association_img" mode=""></image>
					<view class="fenhui-txt">{{obj.association_name}}</view>
				 </view>
				 <button class="conf-btn btn-join" type="primary" @click="joinTo">我要加入</button>
			</view>
			<society-bar :obj="obj"></society-bar>
		</view>
  </div>
</template>

<script>
import SocietyBar from './SocietyBar'
export default {
	components: {
		SocietyBar,
	},
  props: {
    obj: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  created(){
    console.log('社群创建动态：',this.obj)
  },
  methods: {
    joinTo() {
      console.log('加入社群：',this.obj.association_id)
    }
  },
}
</script>

<style lang="scss" scoped>
.dynamic-item {
  width: 100%;
  .card-tip{
		font-size: 24upx;
    color: #969aa6;
    margin-bottom: 20upx;
	}
	.fenhui{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f1f3f7;
		padding: 10upx;
		.fenhui-tit{
			display:flex;
			align-items: center;
			font-size: 34upx;
			font-weight:700;
		
			image{
				width: 120upx;
				height: 120upx;
				background-color: #d9d7e0;
				margin-right: 20upx;
			}

			.fenhui-txt{
				font-size: 36upx;
			}

		}
		.btn-join{
			border-radius: 100upx;
		}
	}
}
</style>