<template>
	<view>
    <view class="yinh-cont">
			<block v-for="(item, index) in infoArr" :key='index'>
				<view class="yingh-item" :class="(index%2==0)?'':'yinh-other'" @click.stop="selBankHandle(item)">
					<view class="yingh-name"><text>{{item.bank_name}}</text></view>
					<view class="yingh-user"><text>{{item.bank_user}}</text></view>
					<view class="yingh-id"><text>{{item.bank_id}}</text></view>
				</view>
			</block>
    	
      <!-- <view class="yingh-item yinh-other">
      	<view class="yingh-name"><text>中国建设银行（建安支行）</text></view>
      	<view class="yingh-user"><text>章三</text></view>
      	<view class="yingh-id"><text>***** ******* ***** ***0910</text></view>
      </view> -->
    </view>
		<view class="bot-min-btn flex-cent-cent">
      <button class="conf-btn rads flex-cent-cent" type="primary" @click="goPage" data-path="/pages/my/tianJiaYHK/tianJiaYHK" data-page='1'>
        <view class="iconfont icon-jiahao"></view>
        添加银行卡
      </button>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoArr:[]
			};
		},
		onLoad(options) {
			this.options = options
		},
		onShow(){
			this.init()
		},
    methods: {
			init(){
				this.$request({
					// 我的银行卡列表
					url:'association/client/wallet/myBankList.do',
					data: {
					},
					success: (res) => {
						console.log('request success', res)
						let _data = res.data
						this.infoArr =  _data
					}
				})
			},
      selBankHandle(item){
				if(this.options.select){// 需要返回到上一页
					let pages = getCurrentPages();//当前页面
					let prevPage = pages[pages.length - 2];//上一页面
					
					prevPage.$vm.bankInfo.id = item.id 
					prevPage.$vm.bankInfo.bank_id = item.bank_id 
					prevPage.$vm.bankInfo.bank_name = item.bank_name 
					prevPage.$vm.$forceUpdate()
					uni.navigateBack({//返回
					})
				}
			},
      goPage(e) {
        let path = e.currentTarget.dataset.path
        let page = e.currentTarget.dataset.page||''
      	uni.navigateTo({
      		url: path+"?page="+ page
      	})
      }
    },
	}
</script>

<style lang="scss">
  .yinh-cont{
    min-height: calc( 100vh - 240upx );
    padding-top:36upx;
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
  .yinh-other{
    background-color: #ff5252;
    box-shadow: 0px 9upx 8upx 0px 
      rgba(255, 82, 82, 0.35);
  }
</style>
