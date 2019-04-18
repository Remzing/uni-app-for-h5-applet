<template>
  <div class="container-box">
    <div class="content-box">
      <div class="nocont" v-if="done && association.length == 0">
        <div class="no-data-show">
          <div class="iconfont icon-meiyoushequn"></div>
          <div class="nodata-txt">抱歉，你还未加入任何社群！</div>
        </div>
        <div class="more-asso">
          <div class="more-asso-txt">可选择您可能感兴趣的类型，查找社群：</div>
          <div class="more-asso-img" v-for="(it,index) in associationType" :key="index">
            <image :src="$domain + it.type_img" mode @click="goSelectAsso"></image>
            <div class="text">
              <text class="title">{{it.name}}</text>
              <text class="description">{{it.type_description}}</text>
            </div>
          </div>
        </div>
      </div>

      <div class="associations">
        <div class="association" v-for="(it,index) in association" :key="index">
          <view class="asso-item" v-if="it.id != -1">
            <view class="asso-info flex-cent-bet">
              <view class="asso-img flex-cent">
                <view class="yijairu" v-if="it.is_join == 1">已加入</view>
                <image :src="$domain + it.association_logo" mode=""></image>
                <view class="asso-txt">
                  <view class="">{{it.association_name}}</view>
                  <view class="">
                    <text>{{it.name}} </text>
                    <text> 会员 {{it.user_num}} </text>
                    <text> 嘉宾 {{it.guests_num}} </text>
                  </view>
                </view>
              </view>
              <view class="iconfont icon-youjiantou"></view>
            </view>
            <view class="asso-line"></view>
            <view class="asso-jiaru flex-cent">
              <view class="">最近加入</view>
              <image v-for="user in it.user_photos" :key="user.user_id" :src="$domain + user.user_photo" mode=""></image>
            </view> 
          </view>
        </div>
      </div>

      <div class="fill"></div>
    </div>

    <div class="footer">
      <view class="bot-help">
        客服热线：4008-633-002
        <text class="col-5788ff">意见反馈</text>
      </view>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    associationType: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data() {
    return {
      association: [],
      done: false
    }
  },
  created(){
    this.loadAssociation()
  },
  methods: {
    // 加载城市社群
    async loadAssociation(){
      try {
        let rep = await this.$asyncRequest(
          `association/client/association/getJoinAssociation.do`,
          {
            city_id: 291
          }
        )
        this.association = rep.data
      } catch (err) {
      } finally {
        this.done = true
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.container-box {
  height: 100%;
}

.content-box {
  min-height: 100%;
}

.fill,.footer {
  height: 60upx;
}

.footer {
  margin-top: -60upx;
}

.more-asso-txt{
  color: #353535;
}
.more-asso-img{
  position: relative;
  .text {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #fff;
    padding-bottom: 20upx;
    .title {
      font-size: 66upx;
    }
    .description{
      font-size: 32upx;
    }
  }
}
</style>