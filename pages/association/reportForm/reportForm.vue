<template>
  <view>
    <view class="">
      <view class="asso-item">
        <view class="asso-info flex-cent-bet" @click="goJoinAsso(1)">
          <view class="asso-img flex-cent">
            <image src="../../../static/shuijiao.jpg" mode=""></image>
            <view class="asso-txt">
              <view class="">北京创客团</view>
              <view class="">
                <text class="shet-txt">创客帮 </text>
                <text class="shet-time"> 创建于2017.10.20 </text>
              </view>
            </view>
          </view>
          <view class="flex-cent"><view class="sui-coun flex-cent-cent">0.8</view>岁</view>
        </view>
      </view>
    </view> 
    <view class="tongji-box">
    	<view class="tongji-tit">人数</view>
      <view class="tongji-info flex-cent-bet">
      	<view class="flex-cent">
      		<view class="tongji-info-num">100</view>
      		<view class="tongji-info-txt">累计会员</view>
      	</view>
        <view class="flex-cent">
        	<view class="tongji-info-num">99</view>
        	<view class="tongji-info-txt">累计嘉宾</view>
        </view>
        <view class="flex-cent">
        	<view class="tongji-info-num">5</view>
        	<view class="tongji-info-txt">管理</view>
        </view>
      </view>
      <view class="tongji-bot">您是第<text class="col-5788ff">982</text>位加入【北京创客团】，陪伴了<text class="col-dd0000">3876</text>个日日夜夜！</view>
    </view>
    <view class="heng"></view>
    <view class="tongji-box">
    	<view class="tongji-tit">活动</view>
      <view class="tongji-info flex-cent-bet">
      	<view class="flex-cent">
      		<view class="tongji-info-num">65</view>
      		<view class="tongji-info-txt">累计举办</view>
      	</view>
        <view class="flex-cent">
        	<view class="tongji-info-num">22</view>
        	<view class="tongji-info-txt">出席</view>
        </view>
        <view class="flex-cent">
        	<view class="tongji-info-num">3</view>
        	<view class="tongji-info-txt">缺席</view>
        </view>
      </view>
      <view class="tongji-bot"><view class="iconfont icon-xiaoxi2"></view> 最近活动“<text class="col-5788ff"> CBIN北京分会业务引荐精英… </text>”，赶紧报名吧！</view>
    </view>
    <view class="heng"></view>
    <view class="chr-tit">近1月加入趋势图</view>
    <view class="chr-unit">单位／时长</view>
    <view class="canvasView">
      <mpvue-echarts :echarts="echarts" :onInit="lineInit" canvasId="line" />
    </view>
    <view class="heng"></view>
    <view class="chr-tit">近1月财务趋势图</view>
    <view class="chr-unit">单位／时长</view>
    <view class="canvasView"> 
      <mpvue-echarts :echarts="echarts" :onInit="lineInit" canvasId="line2" />
    </view>
  </view>
</template>

<script>
  import * as echarts from '../../../components/echarts/echarts.simple.min.js';
  import mpvueEcharts from '../../../components/mpvue-echarts/src/echarts.vue'; 

  let lineOption = {
    animation: false,
    color: ['#f3f7ff'],
    grid: {
      x: 35,
      y: 30,
    },
    calculable: false,
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['07.10', '07.11', '07.12', '07.13', '07.15', '07.16', '07.17']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [3, 0, 0, 14, 30, 12, 6],
        type: 'line',
        color:['#5788ff'],
        areaStyle: {}
    }]
  };

  export default {
    components: {
      mpvueEcharts
    },
    data() {
      return {
        echarts: echarts,
      };
    },
    onLoad() {
      console.log("echarts", echarts)
    },
    methods: {
      lineInit(canvas, width, height) {
        let lineChart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(lineChart)

        lineChart.setOption(lineOption)
        return lineChart
      }
    },
  }
</script>

<style lang="scss">
  .shet-txt{
    display: inline-block;
    padding: 6upx 20upx;
    background-color: #5788ff;
    border-radius: 50upx;
    border: solid 1upx #ffffff;
    color: #fff;
    font-size: 24upx;
    line-height:26upx;
  }
  .shet-time{
    font-size: 24upx;
    color: #353535;
  }
  .chr-tit{
    padding: 30upx 30upx 0;
    font-size: 30upx;
    line-height: 52upx;
    color: #353535;
  }
  .chr-unit{
    padding: 10upx 30upx 30upx;
    font-size: 24upx;
    color: #5788ff;
  }
  .tongji-box{
    padding: 30upx;
    .tongji-tit{
      font-size: 30upx;
    }
    .tongji-info{
      justify-content: space-around;
      .flex-cent{
        flex-direction: column;
      }
      .tongji-info-num{
        font-size: 72upx;
        font-weight: 700;
      }
      .tongji-info-txt{
        font-size: 24upx;
      }
    }
    .tongji-bot{
      font-size: 24upx;
      color: #888888;
      margin-top: 30upx;
      .icon-xiaoxi2{
        color: #5788ff;
        margin-right: 10upx;
      }
    }
  }
  .sui-coun{
    width: 70upx;
    height: 70upx;
    border-radius: 70upx;;
    background-color: #f3f7ff;
    border: solid 1upx #5788ff;
    font-size: 24upx;
    color: #5788ff;
    margin-right: 10upx;
  }
  .canvasView{
    width: 750upx;
    height: 400upx;
  }
  .asso-item {
    background-color: #f9fbff;
    margin-bottom:0;
    .iconfont {
      color: #b6b7b7;
    }

    .asso-info {
      padding: 30upx;

      .yijairu {
        width: 30upx;
        height: 100upx;
        background-image: linear-gradient(120deg,
          #39abf8 0%,
          #7184fe 100%);
        font-size: 20upx;
        text-align: center;
        color: #fff;
      }

      image {
        width: 100upx;
        height: 100upx;
        background-color: #b6b7b7;
      }

      .asso-txt {
        margin-left: 28upx;

        >view:first-child {
          font-size: 34upx;
          line-height: 52upx;
          font-weight: 700;
        }

        >view:nth-child(2) {
          font-size: 24upx;
          line-height: 52upx;
          color: #969aa6;

          text {
            margin-right: 18upx;
          }
        }
      }
    }
  }
</style>
