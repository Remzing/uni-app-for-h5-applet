<template>
  <div class="container-box">
    <div class="content-box">
      <div class="nocont" v-if="done && association.length == 0">
        <div class="no-data-show">
          <div class="iconfont icon-meiyoushequn"></div>
          <div class="nodata-txt">抱歉，你还未加入任何{{obj.name}}社群！</div>
        </div>
        <div class="sou-suo-she-qun">
        </div>
      </div>

      <div class="associations" v-else-if="association.length >= 0">
        <div class="association" v-for="(it,index) in association" :key="index">
          <view class="asso-item">
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

      <div class="shenqing-faqiren" v-if="association.length > 0">
        <text class="tip1">您还可以申请成为发起人！</text>
        <text class="tip2">创建输入自己的精英会，衔接微信群用户，更好的管理！</text>
        <button class="conf-btn" type="primary" @click="sqfqrClick">申请成为社群发起人</button>
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
    obj: {
      type: Object,
      default: ()=> {
        return {}
      }
    }
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
            association_type_id: this.obj.id,
            city_id: 298
          }
        )

        this.association = rep.data
      } catch (err) {
        
      } finally {
        this.done = true
      }
    },
    sqfqrClick(){
      uni.navigateTo({
        url: '/pages/association/shenQingFaQiRen/shenQingFaQiRen'
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.container-box {
  height: 100%;
  overflow-y: scroll;
}

.nocont {
  padding: 32upx;
}

.no-data-show{
  margin: 0;
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

.shenqing-faqiren{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 46upx 0;
  .tip1 {
    color: #555555;
  }
  .tip2 {
    color: #969aa6;
  }
  .conf-btn{
    border-radius: 100upx;
    margin-top: 16upx;
  }
}
</style>