<template>
	<view>
		<view class="tips-one flex-cent">
			<view class="iconfont icon-tishi"></view>
      <view class="">仅限于【深圳创客邦精英社群】领导权限设置</view>
		</view>
    <view class="heng"></view>
    <view class="lead-item" v-for="(item,index) in leadArr" :key="index">
    	<view class="lead-tit flex-cent-bet " @click="openOper(index)">
    		<view class="">{{item.type}} <text>（仅仅限{{item.max}}人）</text></view>
        <view class="iconfont icon-zengjia" @click.stop="goSelect"></view>
    	</view>
      <view class="no-setdate" v-if="item.childShow&&!item.child.length">暂未添加人员</view>
      <view class="uni-list-cell-navigate selc-item flex-cent-bet" v-if="item.childShow" v-for="(itemChild,inx) in item.child" :key="inx">
        
        <view class="selc-item-left flex-cent">
        	<view class="selc-item-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
        	<view class="selc-item-txt flex-cent">
            <view class="selc-item-name"> {{itemChild.name}}</view>
            <view class="selc-item-job flex-cent">
              <view class=""><view class="iconfont icon-hangye"></view>{{itemChild.job}}</view>
            </view>
          </view>
        </view>
        <view class="selc-item-type">
          <view class="iconfont icon-shanchu" @click.stop="detHandle(index,inx)"></view>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leadArr:[
          {
            type:'主席',
            childShow:true,
            max:1,
            child:[
              {
                name: '狐仙小',
                job:'软件开发'
              },
              {
                name: '狐仙',
                job:'软件开发22222'
              }
            ]
          },
          {
            type:'副主席',
            childShow:true,
            max:3,
            child:[
              {
                name: '狐仙小233',
                job:'开发'
              }
            ]
          }
        ]
			};
		},
    methods: {
    	openOper(index) {
    		this.leadArr[index].childShow = !this.leadArr[index].childShow
        this.$forceUpdate()
    	},
      detHandle(index, inx){
        console.log("detHandle",index, inx)
        this.leadArr[index].child.splice(inx,1)
        this.$forceUpdate()
      },
      goSelect(){
        uni.navigateTo({
        	url: '/pages/association/selectMember/selectMember'
        })
      }
    },
	}
</script>

<style lang="scss">
  .no-setdate{
    text-align: center;
    color: #a1a5af;
    margin: 30upx;
  }
  .lead-item{
    .lead-tit{
      padding: 10upx 30upx;
      border-bottom: #e5e7ed solid 1upx;
      border-top: #e5e7ed solid 1upx;
      .iconfont{
        color: #5788ff;
        font-size: 40upx;
      }
      text{
        font-size: 24upx;
      }
      view{
        font-size: 30upx;
        line-height: 52upx;
      }
    }
  }
  .tips-one{
    padding: 10upx 30upx;
    .iconfont{
      margin-right: 10upx;
    }
  }
  .selc-item{
    padding: 20upx 30upx;
    .selc-item-left{
      .selc-item-img{
        width: 100upx;
        height: 100upx;
        margin-right: 20upx;
  
        image{
          width: 100upx;
          height: 100upx;
          border-radius: 100upx;
          background-color: #a1a5af;
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
          font-size: 30upx;
        }
      }
    }
    .selc-item-type{
      .iconfont{
        font-size: 40upx;
      }
      color: #f92f00;
    }
  }
</style>
