(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/label/label"],{2699:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{title:"label",checkboxItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],radioItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],hidden:!1}},methods:{checkboxChange:function(e){console.log(e);for(var t=e.target.value,a={},i=0;i<this.checkboxItems.length;i++)-1!==t.indexOf(this.checkboxItems[i].name)?a["checkboxItems["+i+"].checked"]=!0:a["checkboxItems["+i+"].checked"]=!1},radioChange:function(e){for(var t=e.target.value,a={},i=0;i<this.radioItems.length;i++)-1!==t.indexOf(this.radioItems[i].name)?a["radioItems["+i+"].checked"]=!0:a["radioItems["+i+"].checked"]=!1},tapEvent:function(e){console.log("按钮被点击")}}};t.default=i},"2a91":function(e,t,a){"use strict";a.r(t);var i=a("9beb"),c=a("6fdb");for(var n in c)"default"!==n&&function(e){a.d(t,e,function(){return c[e]})}(n);a("df56");var l=a("2877"),s=Object(l["a"])(c["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},"6fdb":function(e,t,a){"use strict";a.r(t);var i=a("2699"),c=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);t["default"]=c.a},"9bd8":function(e,t,a){"use strict";a("0055");var i=n(a("b0ce")),c=n(a("2a91"));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(c.default))},"9beb":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("page-head",{attrs:{title:e.title,mpcomid:"50783224-0"}}),a("view",{staticClass:"uni-common-mt"},[a("view",{staticClass:"uni-form-item uni-column"},[a("view",{staticClass:"title"},[e._v("表单组件在label内")]),a("checkbox-group",{staticClass:"uni-list",attrs:{eventid:"50783224-0",mpcomid:"50783224-1"},on:{change:e.checkboxChange}},e._l(e.checkboxItems,function(t,i){return a("label",{key:t.name,staticClass:"uni-list-cell uni-list-cell-pd"},[a("view",[a("checkbox",{attrs:{value:t.name,checked:t.checked}})],1),a("view",[e._v(e._s(t.value))])])}))],1),a("view",{staticClass:"uni-form-item uni-column"},[a("view",{staticClass:"title"},[e._v("label用for标识表单组件")]),a("radio-group",{staticClass:"uni-list",attrs:{eventid:"50783224-1",mpcomid:"50783224-2"},on:{change:e.radioChange}},e._l(e.radioItems,function(t,i){return a("label",{key:i,staticClass:"uni-list-cell uni-list-cell-pd"},[a("view",[a("radio",{attrs:{id:t.name,value:t.name,checked:t.checked}})],1),a("view",[a("label",{staticClass:"label-2-text",attrs:{for:t.name}},[a("text",[e._v(e._s(t.value))])])],1)])}))],1),a("view",{staticClass:"uni-form-item uni-column"},[a("view",{staticClass:"title"},[e._v("label内有多个时选中第一个")]),a("checkbox-group",{staticClass:"uni-list",attrs:{eventid:"50783224-2",mpcomid:"50783224-3"},on:{change:e.checkboxChange}},[a("label",{staticClass:"label-3"},[a("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("checkbox",{staticClass:"checkbox-3"},[e._v("选项一")])],1),a("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("checkbox",{staticClass:"checkbox-3"},[e._v("选项二")])],1),a("view",{staticClass:"uni-link uni-center",staticStyle:{"margin-top":"20rpx"}},[e._v("点击该label下的文字默认选中第一个checkbox")])])],1)],1)])],1)},c=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return c})},a04b:function(e,t,a){},df56:function(e,t,a){"use strict";var i=a("a04b"),c=a.n(i);c.a}},[["9bd8","common/runtime","common/vendor"]]]);