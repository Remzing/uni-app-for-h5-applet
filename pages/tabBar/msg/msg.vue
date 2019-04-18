<template>
	<view class="cont">
		<view class="msg-item flex-cent msg-item-gray">
        <image src="../../../static/shuijiao.jpg" mode=""></image>
        <view class="msg-item-info">
        	<view class="msg-item-top flex-cent-bet">
        	  <view class="msg-item-tit">王景涛·软件信息开发</view>
        	  <view class="msg-item-time">12:30</view>
        	</view>
          <view class="msg-item-bot">您好，我想咨询一下易帮云的位置在哪里？</view>
        </view>
		</view>
    <view class="msg-item flex-cent">
      <view class="po-re">
        <image src="../../../static/shuijiao.jpg" mode=""></image>
        <view class="flex-cent-cent msg-item-num">1</view>
      </view>
      <view class="msg-item-info">
        <view class="msg-item-top flex-cent-bet">
          <view class="msg-item-tit">王景涛·软件信息开发</view>
          <view class="msg-item-time">12:30</view>
        </view>
        <view class="msg-item-bot">您好，我想咨询一下易帮云的位置在哪里？</view>
      </view>
    </view>
    <view class="msg-item flex-cent">
      <image src="../../../static/shuijiao.jpg" mode=""></image>
      <view class="msg-item-info">
        <view class="msg-item-top flex-cent-bet">
          <view class="msg-item-tit flex-cent">王景涛·软件信息开发 <view class="iconfont icon-v2"></view> </view>
          <view class="msg-item-time">12:30</view>
        </view>
        <view class="msg-item-bot">您好，我想咨询一下易帮云的位置位置位置位置在哪里？</view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			let conn = this.$conn
			let WebIM = this.$WebIM
			console.log('conn', conn, this.$WebIM)
			
			var options = { 
				apiUrl: WebIM.config.apiURL,
				user: 'renyuanyong',
				pwd: '123456',
				appKey: WebIM.config.appkey
			};
			conn.open(options);

			var id = conn.getUniqueId();                 // 生成本地消息id
			var msg = new websdk.message('txt', id);      // 创建文本消息
// 			msg.set({
// 					msg: 'message content ryy2',                  // 消息内容
// 					to: 'wuyu',                        // 接收消息对象（用户id）
// 					roomType: false,                          
// 					success: function (id, serverMsgId) {
// 							console.log('send private text Success');  
// 							},                                       // 对成功的相关定义，sdk会将消息id登记到日志进行备份处理
// 					fail: function(e){
// 							console.log("Send private text error");  
// 					}                                        // 对失败的相关定义，sdk会将消息id登记到日志进行备份处理
// 			});
// 			conn.send(msg.body);
		},
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
  .po-re{
    position: relative;
  }
  .msg-item{
    background-color: #fff;
    padding: 0 40upx;
    border-top: #e5e7ed  solid 1upx;
    width: 100%;
    height: 160upx;
    image{
      

      width: 80upx;
      height: 80upx;
      border-radius: 80upx;
      background-color: #dcdcdc;
      margin-right: 20upx;
    }
    .msg-item-top{
      width:570upx;
      .msg-item-tit{
        font-size: 34upx;
        font-weight: 700;
        line-height: 52upx;
        color: #353535;
      }
      .msg-item-time{
        font-size: 24upx;
        line-height: 52upx;
        color: #bbc0cd;
      }
    }
    .msg-item-bot{
      font-size: 24upx;
      line-height: 52upx;
      color: #969aa6;
      
      width:500rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .msg-item-num{
      position: absolute;
      top: -8upx;
      right: 20upx;
      z-index: 2;
      width: 28upx;
      height: 28upx;
      border-radius: 30upx;
      background-color: #ed2700;
      font-size: 20upx;
      color: #ffffff;
    }
  }
  .msg-item-gray{
    background-color: rgba(241, 243, 247, 0.5);
  }
</style>
