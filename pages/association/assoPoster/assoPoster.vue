<template>
	<view>
		<view class="poster-box flex-cent">
			<view class="poster-box-img"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      <view class="poster-box-name">北京创客团</view>
      <view class="poster-box-type">创客邦</view>
      <view class="poster-box-jies"><text>加入创客邦\n享受全国6度人脉资源！</text></view>
      <view class="poster-box-erma"><image src="../../../static/shuijiao.jpg" mode=""></image></view>
      <view class="poster-box-tip">长按识别小程序立即报名</view>
		</view>
    <view class="">
      <swiper class="swiper-block" previous-margin="250upx" next-margin="250upx" current="1" @change="swiperChange">
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item class="swiper-item">
            <image mode="aspectFill" :src="item" class="slide-image" :class="(swiperIndex==index) ? 'active' : ''"/>
          </swiper-item>
        </block>
      </swiper>
    </view>
    <view class="post-share"><button class="conf-btn" type="primary">保存海报分享到朋友圈</button></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgUrls: [
          '../../../static/shuijiao.jpg',
          '../../../static/shuijiao.jpg',
          '../../../static/shuijiao.jpg',
        ],

        indicatorDots: false,

        autoplay: false,

        interval: 5000,

        duration: 1000,
        swiperIndex:1
			};
		},
    methods: {
    	swiperChange(e) {
        this.swiperIndex = e.detail.current
      }
    },
	}
</script>

<style lang="scss">
  .post-share{
    position: fixed;
    bottom: 0;
    width: 100%;
    .conf-btn{
      font-size: 36upx;
      height: 98upx;
      line-height: 98upx;
      border-radius: unset;
      width: 100%;
      margin: 0;
    }
  }
  .poster-box{
    width: 670upx;
    height: 800upx;
    background-color: #206cff;
    box-shadow: 0px 8upx 12upx 0upx 
      rgba(213, 213, 213, 0.5);
    border-radius: 15upx;
    margin: 30upx 40upx;
    justify-content: space-around;
    flex-direction: column;
    .poster-box-img{
      width: 216upx;
      height: 216upx;
      image{
        width: 216upx;
        height: 216upx;
      }
    }
    .poster-box-type{
      font-size: 24upx;
      color: #ffffff;
      height: 34upx;
      line-height: 34upx;
      font-size: 24upx;
      padding: 0 18upx;
      border-radius: 34upx;
      border: solid 1upx #ffffff;
    }
    .poster-box-jies{
      font-size: 36upx;
      line-height: 48upx;
      text-align: center;
      color: #ffffff;
    }
    .poster-box-name{
      font-size: 48upx;
      line-height: 52upx;
      font-weight: 700;
      color: #fefefe;
    }
    .poster-box-erma{
      image{
        width: 140upx;
        height: 140upx;
        border-radius: 140upx;
        background-color: #ffffff;
        border: solid 1px #eeeeee;
      }
    }
    .poster-box-tip{
      font-size: 28upx;
      line-height: 30upx;
      color: #ffffff;
    }
  }

.swiper-block{
  height: 220upx;
  width: 100%;
}

.swiper-item{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:unset;
}
.slide-image{
  height:180upx;
  width: 180upx;
  background-color: rgba(0, 0, 0, 0.5);
	opacity: 0.5;
  z-index: 1;
}

.active{
  transform: scale(1.2);
  transition:all .2s ease-in 0s;
  z-index: 20;
  opacity: 1;
}
</style>
