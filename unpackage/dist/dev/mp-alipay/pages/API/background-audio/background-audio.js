(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/API/background-audio/background-audio"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/background-audio/background-audio.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var util = __webpack_require__(/*! ../../../common/util.js */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\common\\util.js");var _default =

{
  data: function data() {
    return {
      title: 'backgroundAudio',
      bgAudioMannager: null,
      dataUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',
      playing: false,
      playTime: 0,
      formatedPlayTime: '00:00:00' };

  },
  onLoad: function onLoad() {var _this = this;
    this.playing = this.$backgroundAudioData.playing;
    this.playTime = this.$backgroundAudioData.playTime;
    this.formatedPlayTime = this.$backgroundAudioData.formatedPlayTime;

    var bgAudioMannager = uni.getBackgroundAudioManager();
    if (!bgAudioMannager.title) {
      bgAudioMannager.title = '致爱丽丝';
    }
    if (!bgAudioMannager.singer) {
      bgAudioMannager.singer = '暂无';
    }
    if (!bgAudioMannager.coverImgUrl) {
      bgAudioMannager.coverImgUrl = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg';
    }

    bgAudioMannager.onPlay(function () {
      console.log("开始播放");
      _this.$backgroundAudioData.playing = _this.playing = true;
    });
    bgAudioMannager.onPause(function () {
      console.log("暂停播放");
      _this.$backgroundAudioData.playing = _this.playing = false;
    });
    bgAudioMannager.onEnded(function () {
      _this.playing = false;
      _this.$backgroundAudioData.playing = false;
      _this.$backgroundAudioData.playTime = _this.playTime = 0;
      _this.$backgroundAudioData.formatedPlayTime = _this.formatedPlayTime = util.formatTime(0);
    });

    bgAudioMannager.onTimeUpdate(function (e) {
      if (Math.floor(bgAudioMannager.currentTime) > Math.floor(_this.playTime)) {
        _this.$backgroundAudioData.formatedPlayTime = _this.formatedPlayTime = util.formatTime(Math.floor(bgAudioMannager.currentTime));
      }
      _this.$backgroundAudioData.playTime = _this.playTime = bgAudioMannager.currentTime;
    });

    this.bgAudioMannager = bgAudioMannager;
  },
  methods: {
    play: function play(res) {
      if (!this.bgAudioMannager.src) {
        this.bgAudioMannager.startTime = this.playTime;
        this.bgAudioMannager.src = this.dataUrl;
      } else {
        this.bgAudioMannager.seek(this.playTime);
        this.bgAudioMannager.play();
      }
    },
    seek: function seek(e) {
      this.bgAudioMannager.seek(e.target.value);
    },
    pause: function pause() {
      this.bgAudioMannager.pause();
    },
    stop: function stop() {
      this.bgAudioMannager.stop();
      this.$backgroundAudioData.playing = this.playing = false;
      this.$backgroundAudioData.playTime = this.playTime = 0;
      this.$backgroundAudioData.formatedPlayTime = this.formatedPlayTime = util.formatTime(0);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ "./node_modules/@dcloudio/uni-mp-alipay/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/background-audio/background-audio.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=template&id=7b52ce7e&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/background-audio/background-audio.vue?vue&type=template&id=7b52ce7e& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { attrs: { _hid: 0 } },
    [
      _c("page-head", {
        attrs: { title: _vm.title, _hid: 1, _batrs: "title", _cid: 0 }
      }),
      _c("view", { staticClass: "uni-padding-wrap", attrs: { _hid: 1003 } }, [
        _c("view", { staticClass: "uni-center", attrs: { _hid: 1004 } }, [
          _c("text", { staticClass: "time-big", attrs: { _hid: 1005 } }, [
            _vm._v(_vm._s(_vm.formatedPlayTime), 1006)
          ])
        ]),
        _c("view", { staticClass: "uni-common-mt", attrs: { _hid: 1007 } }, [
          _c("slider", {
            staticClass: "slider",
            attrs: {
              min: "0",
              max: "21",
              step: "1",
              value: _vm.playTime,
              _hid: 1008,
              _batrs: "value"
            },
            on: { change: _vm.seek }
          })
        ]),
        _vm._m(0),
        _c(
          "view",
          { staticClass: "uni-hello-text", attrs: { _hid: 1014 } },
          []
        ),
        _c(
          "view",
          { staticClass: "page-body-buttons", attrs: { _hid: 1016 } },
          [
            _vm._ri(!!_vm.playing, 1017)
              ? _c("block", { attrs: { _hid: 1017 } }, [
                  _c(
                    "view",
                    {
                      staticClass: "page-body-button",
                      attrs: { _hid: 1018 },
                      on: { tap: _vm.stop }
                    },
                    [
                      _c("image", {
                        attrs: { src: "../../../static/stop.png", _hid: 1019 }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: "page-body-button",
                      attrs: { _hid: 1020 },
                      on: { tap: _vm.pause }
                    },
                    [
                      _c("image", {
                        attrs: { src: "../../../static/pause.png", _hid: 1021 }
                      })
                    ]
                  )
                ])
              : _vm._e(),
            _vm._ri(!!!_vm.playing, 1022)
              ? _c("block", { attrs: { _hid: 1022 } }, [
                  _c("view", {
                    staticClass: "page-body-button",
                    attrs: { _hid: 1023 }
                  }),
                  _c(
                    "view",
                    {
                      staticClass: "page-body-button",
                      attrs: { _hid: 1024 },
                      on: { tap: _vm.play }
                    },
                    [
                      _c("image", {
                        attrs: { src: "../../../static/play.png", _hid: 1025 }
                      })
                    ]
                  )
                ])
              : _vm._e(),
            _c("view", {
              staticClass: "page-body-button",
              attrs: { _hid: 1026 }
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "play-time", attrs: { _hid: 1009 } }, [
      _c("text", { attrs: { _hid: 1010 } }, []),
      _c("text", { attrs: { _hid: 1012 } }, [])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\main.js?{\"page\":\"pages%2FAPI%2Fbackground-audio%2Fbackground-audio\"}":
/*!*********************************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/main.js?{"page":"pages%2FAPI%2Fbackground-audio%2Fbackground-audio"} ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages.json");
var _backgroundAudio = _interopRequireDefault(__webpack_require__(/*! ./pages/API/background-audio/background-audio.vue */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue"));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_backgroundAudio.default.mpType = 'page';
var app = new _vue.default(_backgroundAudio.default);
app.$mount();

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue":
/*!************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/background-audio/background-audio.vue ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background_audio_vue_vue_type_template_id_7b52ce7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-audio.vue?vue&type=template&id=7b52ce7e& */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=template&id=7b52ce7e&");
/* harmony import */ var _background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background-audio.vue?vue&type=script&lang=js& */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background-audio.vue?vue&type=style&index=0&lang=css& */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _background_audio_vue_vue_type_template_id_7b52ce7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _background_audio_vue_vue_type_template_id_7b52ce7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/background-audio/background-audio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/background-audio/background-audio.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./background-audio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/background-audio/background-audio.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./background-audio.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=template&id=7b52ce7e&":
/*!*******************************************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/background-audio/background-audio.vue?vue&type=template&id=7b52ce7e& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_template_id_7b52ce7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./background-audio.vue?vue&type=template&id=7b52ce7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\background-audio\\background-audio.vue?vue&type=template&id=7b52ce7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_template_id_7b52ce7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_audio_vue_vue_type_template_id_7b52ce7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\main.js?{\"page\":\"pages%2FAPI%2Fbackground-audio%2Fbackground-audio\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-alipay/pages/API/background-audio/background-audio.js.map