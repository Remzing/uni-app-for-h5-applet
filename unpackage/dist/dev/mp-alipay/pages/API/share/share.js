(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/API/share/share"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\share\\share.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/share/share.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
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
var _default =
{
  data: function data() {
    return {
      title: 'share',
      shareText: 'uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
      href: "https://uniapp.dcloud.io",
      image: '',
      shareType: 1,
      providerList: [] };

  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: this.shareText ? this.shareText : "欢迎体验uni-app",
      path: '/pages/tabBar/component/component',
      imageUrl: this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png' };

  },
  onUnload: function onUnload() {
    this.shareText = 'uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
    this.href = 'https://uniapp.dcloud.io',
    this.image = '';
  },
  onLoad: function onLoad() {var _this = this;
    uni.getProvider({
      service: 'share',
      success: function success(e) {
        console.log('success', e);
        var data = [];
        for (var i = 0; i < e.provider.length; i++) {
          switch (e.provider[i]) {
            case 'weixin':
              data.push({
                name: '分享到微信好友',
                id: 'weixin',
                sort: 0 });

              data.push({
                name: '分享到微信朋友圈',
                id: 'weixin',
                type: 'WXSenceTimeline',
                sort: 1 });

              break;
            case 'sinaweibo':
              data.push({
                name: '分享到新浪微博',
                id: 'sinaweibo',
                sort: 2 });

              break;
            case 'qq':
              data.push({
                name: '分享到QQ',
                id: 'qq',
                sort: 3 });

              break;
            default:
              break;}

        }
        _this.providerList = data.sort(function (x, y) {
          return x.sort - y.sort;
        });
      },
      fail: function fail(e) {
        console.log('获取登录通道失败', e);
        uni.showModal({
          content: '获取登录通道失败',
          showCancel: false });

      } });

  },
  methods: {
    share: function () {var _share = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {var shareOPtions;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                console.log('分享通道:' + e.id + '； 分享类型:' + this.shareType);if (!(

                !this.shareText && (this.shareType === 1 || this.shareType === 0))) {_context.next = 4;break;}
                uni.showModal({
                  content: '分享内容不能为空',
                  showCancel: false });return _context.abrupt("return");case 4:if (!(




                !this.image && (this.shareType === 2 || this.shareType === 0))) {_context.next = 7;break;}
                uni.showModal({
                  content: '分享图片不能为空',
                  showCancel: false });return _context.abrupt("return");case 7:




                shareOPtions = {
                  provider: e.id,
                  scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession', //WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏     
                  type: this.shareType,
                  success: function success(e) {
                    console.log('success', e);
                    uni.showModal({
                      content: '分享成功',
                      showCancel: false });

                  },
                  fail: function fail(e) {
                    console.log('fail', e);
                    uni.showModal({
                      content: e.errMsg,
                      showCancel: false });

                  },
                  complete: function complete() {
                    console.log('分享操作结束!');
                  } };_context.t0 =


                this.shareType;_context.next = _context.t0 ===
                0 ? 11 : _context.t0 ===





                1 ? 16 : _context.t0 ===


                2 ? 18 : _context.t0 ===


                5 ? 20 : 24;break;case 11:shareOPtions.summary = this.shareText;shareOPtions.imageUrl = this.image;shareOPtions.title = '欢迎体验uniapp';shareOPtions.href = 'http://uniapp.dcloud.io';return _context.abrupt("break", 25);case 16:shareOPtions.summary = this.shareText;return _context.abrupt("break", 25);case 18:shareOPtions.imageUrl = this.image;return _context.abrupt("break", 25);case 20:
                shareOPtions.imageUrl = this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png';
                shareOPtions.title = '欢迎体验uniapp';
                shareOPtions.miniProgram = {
                  id: 'gh_33446d7f7a26',
                  path: '/pages/tabBar/component/component',
                  webUrl: 'http://uniapp.dcloud.io',
                  type: 0 };return _context.abrupt("break", 25);case 24:return _context.abrupt("break", 25);case 25:if (!(






                shareOPtions.type === 0 && plus.os.name === 'iOS')) {_context.next = 29;break;}_context.next = 28;return (
                  this.compress());case 28:shareOPtions.imageUrl = _context.sent;case 29:

                if (shareOPtions.type === 1 && shareOPtions.provider === 'qq') {//如果是分享文字到qq，则必须加上href和title
                  shareOPtions.href = 'http://uniapp.dcloud.io';
                  shareOPtions.title = '欢迎体验uniapp';
                }
                uni.share(shareOPtions);case 31:case "end":return _context.stop();}}}, _callee, this);}));function share(_x) {return _share.apply(this, arguments);}return share;}(),

    radioChange: function radioChange(e) {
      console.log('type:' + e.detail.value);
      this.shareType = parseInt(e.detail.value);
    },
    chooseImage: function chooseImage() {var _this2 = this;
      uni.chooseImage({
        count: 1,
        sourceType: ['album', 'camera'],
        sizeType: ['compressed', 'original'],
        success: function success(res) {
          _this2.image = res.tempFilePaths[0];
        } });

    },
    compress: function compress() {//压缩图片 图文分享要求分享图片大小不能超过20Kb
      console.log('开始压缩');
      var img = this.image;
      return new Promise(function (res) {
        var localPath = plus.io.convertAbsoluteFileSystem(img.replace('file://', ''));
        console.log('after' + localPath);
        // 压缩size
        plus.io.resolveLocalFileSystemURL(localPath, function (entry) {
          entry.file(function (file) {// 可通过entry对象操作图片 
            console.log('getFile:' + JSON.stringify(file));
            if (file.size > 20480) {// 压缩后size 大于20Kb
              plus.zip.compressImage({
                src: img,
                dst: img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG'),
                width: '10%',
                height: '10%',
                quality: 1,
                overwrite: true },
              function (event) {
                console.log('success zip****' + event.size);
                var newImg = img.replace('.jpg', '2222.jpg').replace('.JPG', '2222.JPG');
                res(newImg);
              }, function (error) {
                uni.showModal({
                  content: '分享图片太大,需要请重新选择图片!',
                  showCancel: false });

              });
            }
          });
        }, function (e) {
          console.log('Resolve file URL failed: ' + e.message);
          uni.showModal({
            content: '分享图片太大,需要请重新选择图片!',
            showCancel: false });

        });
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ "./node_modules/@dcloudio/uni-mp-alipay/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\share\\share.vue?vue&type=template&id=32c5fc5e&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/share/share.vue?vue&type=template&id=32c5fc5e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        _c("view", { staticClass: "uni-title", attrs: { _hid: 1004 } }, []),
        _c("view", { staticClass: "uni-textarea", attrs: { _hid: 1006 } }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.shareText,
                expression: "shareText"
              }
            ],
            staticClass: "textarea",
            attrs: { _hid: 1007 },
            domProps: { value: _vm.shareText },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.shareText = $event.target.value
              }
            }
          })
        ]),
        _c("view", { staticClass: "uni-title", attrs: { _hid: 1008 } }, []),
        _c(
          "view",
          {
            staticClass: "uni-uploader",
            staticStyle: { padding: "15rpx", background: "#FFF" },
            attrs: { _hid: 1010 }
          },
          [
            _vm._ri(!!!_vm.image, 1011)
              ? _c("view", {
                  staticClass: "uni-uploader__input-box",
                  attrs: { _hid: 1011 },
                  on: { tap: _vm.chooseImage }
                })
              : _vm._e(),
            _vm._ri(!!_vm.image, 1012)
              ? _c("image", {
                  staticClass: "uni-uploader__img",
                  attrs: { src: _vm.image, _hid: 1012, _batrs: "src" }
                })
              : _vm._e()
          ]
        ),
        _c(
          "view",
          { staticClass: "uni-btn-v uni-common-mt", attrs: { _hid: 1013 } },
          [
            _c(
              "button",
              { attrs: { type: "primary", "open-type": "share", _hid: 1014 } },
              []
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\main.js?{\"page\":\"pages%2FAPI%2Fshare%2Fshare\"}":
/*!***********************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/main.js?{"page":"pages%2FAPI%2Fshare%2Fshare"} ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages.json");
var _share = _interopRequireDefault(__webpack_require__(/*! ./pages/API/share/share.vue */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\share\\share.vue"));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_share.default.mpType = 'page';
var app = new _vue.default(_share.default);
app.$mount();

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\share\\share.vue":
/*!**************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/share/share.vue ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _share_vue_vue_type_template_id_32c5fc5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share.vue?vue&type=template&id=32c5fc5e& */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\share\\share.vue?vue&type=template&id=32c5fc5e&");
/* harmony import */ var _share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share.vue?vue&type=script&lang=js& */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\share\\share.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _share_vue_vue_type_template_id_32c5fc5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _share_vue_vue_type_template_id_32c5fc5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/share/share.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\share\\share.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/share/share.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./share.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\share\\share.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\share\\share.vue?vue&type=template&id=32c5fc5e&":
/*!*********************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/API/share/share.vue?vue&type=template&id=32c5fc5e& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_template_id_32c5fc5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./share.vue?vue&type=template&id=32c5fc5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\API\\share\\share.vue?vue&type=template&id=32c5fc5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_template_id_32c5fc5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_share_vue_vue_type_template_id_32c5fc5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\main.js?{\"page\":\"pages%2FAPI%2Fshare%2Fshare\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-alipay/pages/API/share/share.js.map