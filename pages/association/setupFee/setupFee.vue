<template>
	<view>
    <!-- 设置费用 -->
		<view class="" v-if="page==1">
      <view class="setup-item flex-cent-bet">
      	<view class="setup-item-left">金额</view>
      	<view class="setup-item-right flex-cent">
          <input type="text" placeholder="0元为免费" value="" />
        </view>
      </view>
			<view class="join-btn"><button class="conf-btn" type="primary">完成</button></view>
		</view>
    <!-- 活动 -->
    <view class="" v-if="page==2">
      <view class="ping-top flex-cent">拼单</view>
      <view class="setup-item flex-cent-bet">
      	<view class="setup-item-left">开启后首次加入和续期时可选择邀请拼单</view>
      	<view class="setup-item-right flex-cent">
           <switch @change="switch2Change" color="#5788ff" />
        </view>
      </view>
      <view class="setup-item flex-cent-bet">
      	<view class="setup-item-left">拼单金额</view>
      	<view class="setup-item-right flex-cent">
          <input type="text" placeholder="不可设置高于单独付费金额" value="" />
        </view>
      </view>
      <view class="setup-item flex-cent-bet">
      	<view class="setup-item-left">拼单人数</view>
      	<view class="setup-item-right flex-cent">
          <input type="text" placeholder="不可设置少于2人的数字" value="" />
        </view>
      </view>
    	<view class="join-btn"><button class="conf-btn" type="primary">完成</button></view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page:'', //1设置费用, 2活动
			};
		},
    onLoad(options) {
    	this.page = options.page
    }
	}
</script>

<style lang="scss">
  page{
    background-color: #f1f3f7;
  }
  .ping-top{
    width: 100%;
    height: 60upx;
    background-color: #f1f3f7;
    padding: 0 30upx;
    font-size: 24upx;
  }
</style>
