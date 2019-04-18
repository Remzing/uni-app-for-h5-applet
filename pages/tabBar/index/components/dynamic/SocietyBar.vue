<template>
  <div>
    <view class="like-count">
      <view class @click="likeClick">
        <view class="iconfont icon-xihuan" :class="obj.is_dianzan == 1?'liked':''"></view>
        <view class="like-num">{{obj.dianzan_num}}</view>
      </view>
      <view class @click="inputAreaShow = !inputAreaShow">
        <view class="iconfont icon-liuyan"></view>
        <view class="like-num">{{obj.comment_num}}</view>
      </view>
      <view class>
        <view class="iconfont icon-fenxiang"></view>
        <view class="like-num">分享</view>
      </view>
    </view>
    <view class="card-comment">
      <view class="comment-item" v-for="(com,index) in obj.dynamicCommentList" :key="index">
        <view class>{{com.real_name}}：</view>
        <view class>{{com.content}}</view>
      </view>
    </view>
    <view v-if="inputAreaShow" class="inputArea">
      <input v-model="comContent" class="uni-input" focus placeholder="请输入评论内容">
      <button class="conf-btn" type="primary" @click="sendComment">发送</button>
    </view>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  data() {
    return {
      inputAreaShow: false,
      comContent: ''
    }
  },
  methods: {
    async sendComment() {
      try {
        if (!this.comContent) throw Error('请输入内容')
        let rep = await this.$asyncRequest(
          'association/client/homepage/insertDynamicComment.do',
          {
            dynamic_id: this.obj.id,
            content: this.comContent
          }
        )
        this.obj.dynamicCommentList.push({
          content: rep.data.content,
          real_name: rep.data.real_name
        })
        this.comContent = ''
      } catch (err) {
        uni.showModal({
          content: err.message || '发生错误',
          showCancel: false
        })
      }
    },
    async likeClick() {
      try {
        if(this.obj.is_dianzan == 1) throw Error('请不要重复点赞')
        await this.$asyncRequest(
          'association/client/homepage/updateDynamicDianZan.do',
          {
            dynamic_id: this.obj.id,
            type: 1
          }
        )
        this.obj.is_dianzan = 1
        this.obj.dianzan_num++
      } catch (err) {
        uni.showModal({
          content: err.message || '发生错误',
          showCancel: false
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.card-comment {
  font-size: 24upx;
  border-top: #efeef3 solid 1upx;
  padding: 20upx 0 0 0;
  .comment-item {
    display: flex;
    view:first-child {
      color: #5788ff;
    }
    view:nth-child(2) {
      color: #353535;
    }
  }
}

.inputArea {
  display: flex;
  margin-top: 8px;
  .uni-input {
    border: 1px solid #e0e8f8;
    border-radius: 2px;
  }
}

.like-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20upx;
  > view {
    display: flex;
    color: #969aa6;
    font-size: 24upx;
    .iconfont {
      font-size: 28upx;
      color: #dddfe3;
      margin-right: 6upx;
    }
    .liked{
      color: red;
    }
  }
}
</style>