(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/API/background-audio/background-audio"],{"01e6":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("view",{attrs:{_hid:0}},[i("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),i("view",{staticClass:"uni-padding-wrap",attrs:{_hid:1003}},[i("view",{staticClass:"uni-center",attrs:{_hid:1004}},[i("text",{staticClass:"time-big",attrs:{_hid:1005}},[t._v(t._s(t.formatedPlayTime),1006)])]),i("view",{staticClass:"uni-common-mt",attrs:{_hid:1007}},[i("slider",{staticClass:"slider",attrs:{min:"0",max:"21",step:"1",value:t.playTime,_hid:1008,_batrs:"value"},on:{change:t.seek}})]),t._m(0),i("view",{staticClass:"uni-hello-text",attrs:{_hid:1014}},[]),i("view",{staticClass:"page-body-buttons",attrs:{_hid:1016}},[t._ri(!!t.playing,1017)?i("block",{attrs:{_hid:1017}},[i("view",{staticClass:"page-body-button",attrs:{_hid:1018},on:{tap:t.stop}},[i("image",{attrs:{src:"../../../static/stop.png",_hid:1019}})]),i("view",{staticClass:"page-body-button",attrs:{_hid:1020},on:{tap:t.pause}},[i("image",{attrs:{src:"../../../static/pause.png",_hid:1021}})])]):t._e(),t._ri(!t.playing,1022)?i("block",{attrs:{_hid:1022}},[i("view",{staticClass:"page-body-button",attrs:{_hid:1023}}),i("view",{staticClass:"page-body-button",attrs:{_hid:1024},on:{tap:t.play}},[i("image",{attrs:{src:"../../../static/play.png",_hid:1025}})])]):t._e(),i("view",{staticClass:"page-body-button",attrs:{_hid:1026}})],1)])],1)},n=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("view",{staticClass:"play-time",attrs:{_hid:1009}},[i("text",{attrs:{_hid:1010}},[]),i("text",{attrs:{_hid:1012}},[])])}];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})},"10c6":function(t,a,i){},"2aa9":function(t,a,i){"use strict";i.r(a);var e=i("01e6"),n=i("47ed");for(var o in n)"default"!==o&&function(t){i.d(a,t,function(){return n[t]})}(o);i("a6c4");var s=i("2877"),r=Object(s["a"])(n["default"],e["a"],e["b"],!1,null,null,null);a["default"]=r.exports},"47ed":function(t,a,i){"use strict";i.r(a);var e=i("6099"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);a["default"]=n.a},6099:function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i("9b9a"),n={data:function(){return{title:"backgroundAudio",bgAudioMannager:null,dataUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",playing:!1,playTime:0,formatedPlayTime:"00:00:00"}},onLoad:function(){var a=this;this.playing=this.$backgroundAudioData.playing,this.playTime=this.$backgroundAudioData.playTime,this.formatedPlayTime=this.$backgroundAudioData.formatedPlayTime;var i=t.getBackgroundAudioManager();i.title||(i.title="致爱丽丝"),i.singer||(i.singer="暂无"),i.coverImgUrl||(i.coverImgUrl="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg"),i.onPlay(function(){console.log("开始播放"),a.$backgroundAudioData.playing=a.playing=!0}),i.onPause(function(){console.log("暂停播放"),a.$backgroundAudioData.playing=a.playing=!1}),i.onEnded(function(){a.playing=!1,a.$backgroundAudioData.playing=!1,a.$backgroundAudioData.playTime=a.playTime=0,a.$backgroundAudioData.formatedPlayTime=a.formatedPlayTime=e.formatTime(0)}),i.onTimeUpdate(function(t){Math.floor(i.currentTime)>Math.floor(a.playTime)&&(a.$backgroundAudioData.formatedPlayTime=a.formatedPlayTime=e.formatTime(Math.floor(i.currentTime))),a.$backgroundAudioData.playTime=a.playTime=i.currentTime}),this.bgAudioMannager=i},methods:{play:function(t){this.bgAudioMannager.src?(this.bgAudioMannager.seek(this.playTime),this.bgAudioMannager.play()):(this.bgAudioMannager.startTime=this.playTime,this.bgAudioMannager.src=this.dataUrl)},seek:function(t){this.bgAudioMannager.seek(t.target.value)},pause:function(){this.bgAudioMannager.pause()},stop:function(){this.bgAudioMannager.stop(),this.$backgroundAudioData.playing=this.playing=!1,this.$backgroundAudioData.playTime=this.playTime=0,this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=e.formatTime(0)}}};a.default=n}).call(this,i("c11b")["default"])},"657c":function(t,a,i){"use strict";i("0055");var e=o(i("2aa9")),n=o(i("3a53"));function o(t){return t&&t.__esModule?t:{default:t}}e.default.mpType="page";var s=new n.default(e.default);s.$mount()},a6c4:function(t,a,i){"use strict";var e=i("10c6"),n=i.n(e);n.a}},[["657c","common/runtime","common/vendor"]]]);