(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/storage/storage"],{"2ad3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("page-head",{attrs:{title:t.title,mpcomid:"f72c210e-0"}}),a("view",{staticClass:"uni-common-mt"},[a("view",{staticClass:"uni-list"},[a("view",{staticClass:"uni-list-cell"},[t._m(0),a("view",{staticClass:"uni-list-cell-db"},[a("input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入key",name:"key",value:t.key,eventid:"f72c210e-0"},on:{input:t.keyChange}})])]),a("view",{staticClass:"uni-list-cell"},[t._m(1),a("view",{staticClass:"uni-list-cell-db"},[a("input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入value",name:"data",value:t.data,eventid:"f72c210e-1"},on:{input:t.dataChange}})])])]),a("view",{staticClass:"uni-padding-wrap"},[a("view",{staticClass:"uni-btn-v"},[a("button",{staticClass:"btn-setstorage",attrs:{type:"primary",eventid:"f72c210e-2"},on:{tap:t.setStorage}},[t._v("存储数据")]),a("button",{attrs:{eventid:"f72c210e-3"},on:{tap:t.getStorage}},[t._v("读取数据")]),a("button",{attrs:{eventid:"f72c210e-4"},on:{tap:t.clearStorage}},[t._v("清理数据")])],1)])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"uni-list-cell-left"},[a("view",{staticClass:"uni-label"},[t._v("key")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"uni-list-cell-left"},[a("view",{staticClass:"uni-label"},[t._v("value")])])}];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"87cc":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"get/set/clearStorage",key:"",data:""}},methods:{keyChange:function(t){this.key=t.target.value},dataChange:function(t){this.data=t.target.value},getStorage:function(){var e=this.key;this.data;0===e.length?t.showModal({title:"读取数据失败",content:"key 不能为空",showCancel:!1}):t.getStorage({key:e,success:function(e){t.showModal({title:"读取数据成功",content:"data: '"+e.data+"'",showCancel:!1})},fail:function(){t.showModal({title:"读取数据失败",content:"找不到 key 对应的数据",showCancel:!1})}})},setStorage:function(){var e=this.key,a=this.data;0===e.length?t.showModal({title:"保存数据失败",content:"key 不能为空",showCancel:!1}):t.setStorage({key:e,data:a,success:function(e){t.showModal({title:"存储数据成功",content:" ",showCancel:!1})},fail:function(){t.showModal({title:"储存数据失败!",showCancel:!1})}})},clearStorage:function(){t.clearStorageSync(),this.key="",this.data="",t.showModal({title:"清除数据成功",content:" ",showCancel:!1})}}};e.default=a}).call(this,a("543d")["default"])},9288:function(t,e,a){"use strict";a.r(e);var n=a("2ad3"),i=a("d888");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("cde3");var l=a("2877"),c=Object(l["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},b693:function(t,e,a){},cde3:function(t,e,a){"use strict";var n=a("b693"),i=a.n(n);i.a},d888:function(t,e,a){"use strict";a.r(e);var n=a("87cc"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},eccd:function(t,e,a){"use strict";a("0055");var n=s(a("b0ce")),i=s(a("9288"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))}},[["eccd","common/runtime","common/vendor"]]]);