import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'

import store from './store'
// import VueAMap from 'vue-amap'
import { request, asyncRequest , fetchDomain} from './common/utils/request.js'
Vue.prototype.$request = request
Vue.prototype.$asyncRequest = asyncRequest

/**
 * 接受到domain之后再进行其他操作
 */
async function run() {
  console.log('ryy-domain success0000', domain)
  let domain = await fetchDomain()
  Vue.prototype.$domain = domain
  console.log('ryy-domain success1', domain)

  // 高德地图
//   Vue.use(VueAMap)
//   VueAMap.initAMapApiLoader({
//     key: 'ce7e2f85975f91a5a6def042472315e3',
//     // plugin: ['AMap.Scale', 'AMap.Geolocation', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
//     plugin: ['AMap.Geolocation','AMap.Geocoder'],
//     v: '1.4.4'
//   })
  // #ifdef H5
  // 环信插件添加  修改
  Window.Strophe = require('strophe.js').Strophe
  ;(Window.Strophe.Connection.prototype.setJid = function(jid) {
    console.log('ryy-Strophe-thisjid', this)
    this.jid = jid
    this.authzid = Window.Strophe.getBareJidFromJid(this.jid)
    this.authcid = Window.Strophe.getNodeFromJid(this.jid)
  }),
    (Window.Strophe.Connection.prototype.getJid = function() {
      console.log('ryy-Strophe-getJid-this', this)
      return this.jid
    }),
    console.log('ryy-Window.Strophe', Window.Strophe)
  let WebIM = require('./common/config/WebIM.js').default
  Vue.prototype.$WebIM = WebIM
  Vue.prototype.$conn = WebIM.conn
  console.log('ryy-WebIM', WebIM)

  // listern，添加回调函数
  WebIM.conn.listen({
    onOpened: function(message) {
      //连接成功回调，连接成功后才可以发送消息
      //如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
      // 手动上线指的是调用conn.setPresence(); 在本例中，conn初始化时已将isAutoLogin设置为true
      // 所以无需调用conn.setPresence();
      // presence to be online and receive message
      WebIM.conn.setPresence()
      console.log('%c [opened] 连接已成功建立', 'color: green')
    },
    onTextMessage: function(message) {
      // 在此接收和处理消息，根据message.type区分消息来源，私聊或群组或聊天室
      console.log(message.type)
      console.log('listen-Text', message)
    }, //收到文本消息

    onError: function(message) {
      console.log('Error')
      console.log(message)
      if (message && message.type == 1) {
        console.warn('连接建立失败！请确认您的登录账号是否和appKey匹配。')
      }
    }, //失败回调
    onBlacklistUpdate: function(list) {
      // 查询黑名单，将好友拉黑，将好友从黑名单移除都会回调这个函数，list则是黑名单现有的所有好友信息
      console.log(list)
    } // 黑名单变动
  })

  // #endif

  Vue.config.productionTip = false

  Vue.prototype.$store = store
  Vue.prototype.$backgroundAudioData = {
    playing: false,
    playTime: 0,
    formatedPlayTime: '00:00:00'
  }

  Vue.component('page-head', pageHead)
  Vue.component('page-foot', pageFoot)

  App.mpType = 'app'

  const app = new Vue({
    store,
    ...App
  })
  app.$mount()
}
run()
