<template>
  <div class="container">
    <view v-if="loading" class="iconfont icon-jiazai"></view>
    <view v-else class="non-content">没有更多数据</view>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 150upx;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-jiazai {
    display: inline-block;
    font-size: 60upx;
    color: #bcbec5;
    animation: loading 1.4s linear infinite;
  }
  .non-content{
    color: #bcbec5;
  }
}

@keyframes loading {
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>