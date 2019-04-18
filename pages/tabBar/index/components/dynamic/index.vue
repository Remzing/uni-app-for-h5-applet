<template>
  <div class="dynamics">
    <view class="item" v-for="(it,index) in datas" :key="index">
      <dynamic-she-qun-chuang-jian :obj="it" v-if="it.dynamic_type_id == 1"></dynamic-she-qun-chuang-jian>
      <dynamic-guang-gao @closeGuanGao="closeGuanGao(it)" :obj="it" v-if="it.dynamic_type_id == 2"></dynamic-guang-gao>
      <dynamic-deng-ji-jin-sheng :obj="it" v-if="it.dynamic_type_id == 3"></dynamic-deng-ji-jin-sheng>
      <dynamic-yi-jia-ru-she-qun :obj="it" v-if="it.dynamic_type_id == 10"></dynamic-yi-jia-ru-she-qun>
    </view>
  </div>
</template>

<script>
import DynamicDengJiJinsheng from './DynamicDengJiJinsheng'
import DynamicGuangGao from './DynamicGuangGao'
import DynamicSheQunChuangJian from './DynamicSheQunChuangJian'
import DynamicYiJiaRuSheQun from './DynamicYiJiaRuSheQun'
export default {
  components: {
    DynamicDengJiJinsheng,
    DynamicGuangGao,
    DynamicSheQunChuangJian,
    DynamicYiJiaRuSheQun,
  },
  props: {
    datas: {
      type: Array,
      default: []
    },
  },
  methods: {
    closeGuanGao(it) {
      this.$emit('closeGuanGao', it)
    }
  },
}
</script>

<style lang="scss" scoped>
.dynamics {
  background-color: #f1f3f7;
  .item {
    background-color: #fff;
    margin-bottom: 24upx;
    padding: 32upx;
  }
}
</style>