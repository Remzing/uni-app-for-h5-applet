(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/component/label/label"],{2699:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"label",checkboxItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],radioItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],hidden:!1}},methods:{checkboxChange:function(t){console.log(t);for(var e=t.target.value,a={},i=0;i<this.checkboxItems.length;i++)-1!==e.indexOf(this.checkboxItems[i].name)?a["checkboxItems["+i+"].checked"]=!0:a["checkboxItems["+i+"].checked"]=!1},radioChange:function(t){for(var e=t.target.value,a={},i=0;i<this.radioItems.length;i++)-1!==e.indexOf(this.radioItems[i].name)?a["radioItems["+i+"].checked"]=!0:a["radioItems["+i+"].checked"]=!1},tapEvent:function(t){console.log("按钮被点击")}}};e.default=i},"2a91":function(t,e,a){"use strict";a.r(e);var i=a("9beb"),s=a("6fdb");for(var c in s)"default"!==c&&function(t){a.d(e,t,function(){return s[t]})}(c);a("df56");var n=a("2877"),l=Object(n["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=l.exports},"6fdb":function(t,e,a){"use strict";a.r(e);var i=a("2699"),s=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);e["default"]=s.a},"9bd8":function(t,e,a){"use strict";a("0055");var i=c(a("2a91")),s=c(a("3a53"));function c(t){return t&&t.__esModule?t:{default:t}}i.default.mpType="page";var n=new s.default(i.default);n.$mount()},"9beb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{attrs:{_hid:0}},[a("page-head",{attrs:{title:t.title,_hid:1,_batrs:"title",_cid:0}}),a("view",{staticClass:"uni-common-mt",attrs:{_hid:1003}},[a("view",{staticClass:"uni-form-item uni-column",attrs:{_hid:1004}},[a("view",{staticClass:"title",attrs:{_hid:1005}},[]),a("checkbox-group",{staticClass:"uni-list",attrs:{_hid:1007},on:{change:t.checkboxChange}},t._l(t.checkboxItems,function(e,i,s){var c=void 0!==s?s:i;return a("label",{key:e.name,staticClass:"uni-list-cell uni-list-cell-pd",attrs:{_hid:1008,_fid:c,_fk:"name"}},[a("view",{attrs:{_hid:1009,_fid:c}},[a("checkbox",{attrs:{value:e.name,checked:e.checked,_hid:1010,_fid:c,_batrs:"value,checked"}})],1),a("view",{attrs:{_hid:1011,_fid:c}},[t._v(t._s(e.value),1012,c)])])},1008,t._self))],1),a("view",{staticClass:"uni-form-item uni-column",attrs:{_hid:1013}},[a("view",{staticClass:"title",attrs:{_hid:1014}},[]),a("radio-group",{staticClass:"uni-list",attrs:{_hid:1016},on:{change:t.radioChange}},t._l(t.radioItems,function(e,i,s){var c=void 0!==s?s:i;return a("label",{key:i,staticClass:"uni-list-cell uni-list-cell-pd",attrs:{_hid:1017,_fid:c,_fk:"index"}},[a("view",{attrs:{_hid:1018,_fid:c}},[a("radio",{attrs:{id:e.name,value:e.name,checked:e.checked,_hid:1019,_fid:c,_batrs:"id,value,checked"}})],1),a("view",{attrs:{_hid:1020,_fid:c}},[a("label",{staticClass:"label-2-text",attrs:{for:e.name,_hid:1021,_fid:c,_batrs:"for"}},[a("text",{attrs:{_hid:1022,_fid:c}},[t._v(t._s(e.value),1023,c)])])],1)])},1017,t._self))],1),a("view",{staticClass:"uni-form-item uni-column",attrs:{_hid:1024}},[a("view",{staticClass:"title",attrs:{_hid:1025}},[]),a("checkbox-group",{staticClass:"uni-list",attrs:{_hid:1027},on:{change:t.checkboxChange}},[a("label",{staticClass:"label-3",attrs:{_hid:1028}},[a("view",{staticClass:"uni-list-cell uni-list-cell-pd",attrs:{_hid:1029}},[a("checkbox",{staticClass:"checkbox-3",attrs:{_hid:1030}},[])],1),a("view",{staticClass:"uni-list-cell uni-list-cell-pd",attrs:{_hid:1032}},[a("checkbox",{staticClass:"checkbox-3",attrs:{_hid:1033}},[])],1),a("view",{staticClass:"uni-link uni-center",staticStyle:{"margin-top":"20rpx"},attrs:{_hid:1035}},[])])],1)],1)])],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},a04b:function(t,e,a){},df56:function(t,e,a){"use strict";var i=a("a04b"),s=a.n(i);s.a}},[["9bd8","common/runtime","common/vendor"]]]);