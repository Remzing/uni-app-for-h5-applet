(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/template/crop/crop"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/template/crop/crop.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//

var sysInfo = uni.getSystemInfoSync();
var SCREEN_WIDTH = sysInfo.screenWidth;
var PAGE_X, // 手按下的x位置
PAGE_Y, // 手按下y的位置 
PR = sysInfo.pixelRatio, // dpi
T_PAGE_X, // 手移动的时候x的位置
T_PAGE_Y, // 手移动的时候Y的位置
CUT_L, // 初始化拖拽元素的left值
CUT_T, // 初始化拖拽元素的top值
CUT_R, // 初始化拖拽元素的
CUT_B, // 初始化拖拽元素的
CUT_W, // 初始化拖拽元素的宽度
CUT_H, //  初始化拖拽元素的高度
IMG_RATIO, // 图片比例
IMG_REAL_W, // 图片实际的宽度
IMG_REAL_H, // 图片实际的高度
DRAFG_MOVE_RATIO = 1, //移动时候的比例,
INIT_DRAG_POSITION = 100, // 初始化屏幕宽度和裁剪区域的宽度之差，用于设置初始化裁剪的宽度
DRAW_IMAGE_W = sysInfo.screenWidth; // 设置生成的图片宽度
var _default =
{
  /**
   * 页面的初始数据
   */
  data: function data() {
    return {
      name: '杨大宝',
      imageSrc: 'https://img-cdn-qiniu.dcloud.net.cn/demo_crop.jpg',
      isShowImg: false,
      // 初始化的宽高
      cropperInitW: SCREEN_WIDTH,
      cropperInitH: SCREEN_WIDTH,
      // 动态的宽高
      cropperW: SCREEN_WIDTH,
      cropperH: SCREEN_WIDTH,
      // 动态的left top值
      cropperL: 0,
      cropperT: 0,

      transL: 0,
      transT: 0,

      // 图片缩放值
      scaleP: 0,
      imageW: 0,
      imageH: 0,

      // 裁剪框 宽高
      cutL: 0,
      cutT: 0,
      cutB: SCREEN_WIDTH,
      cutR: '100%',
      qualityWidth: DRAW_IMAGE_W,
      innerAspectRadio: DRAFG_MOVE_RATIO };

  },
  /**
      * 生命周期函数--监听页面加载
      */
  onLoad: function onLoad(options) {},

  /**
                                        * 生命周期函数--监听页面初次渲染完成
                                        */
  mounted: function mounted() {

    this.loadImage();

  },
  methods: {
    setData: function setData(obj) {
      var that = this;
      Object.keys(obj).forEach(function (key) {
        that.$set(that.$data, key, obj[key]);

      });
    },
    getImage: function getImage() {
      var _this = this;
      uni.chooseImage({
        success: function success(res) {
          _this.setData({
            imageSrc: res.tempFilePaths[0] });

          _this.loadImage();
        } });

    },
    loadImage: function loadImage() {
      var _this = this;
      uni.showLoading({
        title: '图片加载中...' });


      uni.getImageInfo({
        src: _this.imageSrc,
        success: function success(res) {
          IMG_RATIO = res.width / res.height;
          if (IMG_RATIO >= 1) {
            IMG_REAL_W = SCREEN_WIDTH;
            IMG_REAL_H = SCREEN_WIDTH / IMG_RATIO;
          } else {
            IMG_REAL_W = SCREEN_WIDTH * IMG_RATIO;
            IMG_REAL_H = SCREEN_WIDTH;
          }
          var minRange = IMG_REAL_W > IMG_REAL_H ? IMG_REAL_W : IMG_REAL_H;
          INIT_DRAG_POSITION = minRange > INIT_DRAG_POSITION ? INIT_DRAG_POSITION : minRange;
          // 根据图片的宽高显示不同的效果   保证图片可以正常显示
          if (IMG_RATIO >= 1) {
            var cutT = Math.ceil((SCREEN_WIDTH / IMG_RATIO - (SCREEN_WIDTH / IMG_RATIO - INIT_DRAG_POSITION)) / 2);
            var cutB = cutT;
            var cutL = Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH + INIT_DRAG_POSITION) / 2);
            var cutR = cutL;
            _this.setData({
              cropperW: SCREEN_WIDTH,
              cropperH: SCREEN_WIDTH / IMG_RATIO,
              // 初始化left right
              cropperL: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH) / 2),
              cropperT: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH / IMG_RATIO) / 2),
              cutL: cutL,
              cutT: cutT,
              cutR: cutR,
              cutB: cutB,
              // 图片缩放值
              imageW: IMG_REAL_W,
              imageH: IMG_REAL_H,
              scaleP: IMG_REAL_W / SCREEN_WIDTH,
              qualityWidth: DRAW_IMAGE_W,
              innerAspectRadio: IMG_RATIO });

          } else {
            var _cutL = Math.ceil((SCREEN_WIDTH * IMG_RATIO - SCREEN_WIDTH * IMG_RATIO) / 2);
            var _cutR = _cutL;
            var _cutT = Math.ceil((SCREEN_WIDTH - INIT_DRAG_POSITION) / 2);
            var _cutB = _cutT;
            _this.setData({
              cropperW: SCREEN_WIDTH * IMG_RATIO,
              cropperH: SCREEN_WIDTH,
              // 初始化left right
              cropperL: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH * IMG_RATIO) / 2),
              cropperT: Math.ceil((SCREEN_WIDTH - SCREEN_WIDTH) / 2),

              cutL: _cutL,
              cutT: _cutT,
              cutR: _cutR,
              cutB: _cutB,
              // 图片缩放值
              imageW: IMG_REAL_W,
              imageH: IMG_REAL_H,
              scaleP: IMG_REAL_W / SCREEN_WIDTH,
              qualityWidth: DRAW_IMAGE_W,
              innerAspectRadio: IMG_RATIO });

          }
          _this.setData({
            isShowImg: true });

          uni.hideLoading();
        } });

    },
    // 拖动时候触发的touchStart事件
    contentStartMove: function contentStartMove(e) {
      PAGE_X = e.touches[0].pageX;
      PAGE_Y = e.touches[0].pageY;
    },

    // 拖动时候触发的touchMove事件
    contentMoveing: function contentMoveing(e) {
      var _this = this;
      var dragLengthX = (PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
      var dragLengthY = (PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
      // 左移
      if (dragLengthX > 0) {
        if (this.cutL - dragLengthX < 0) dragLengthX = this.cutL;
      } else {
        if (this.cutR + dragLengthX < 0) dragLengthX = -this.cutR;
      }

      if (dragLengthY > 0) {
        if (this.cutT - dragLengthY < 0) dragLengthY = this.cutT;
      } else {
        if (this.cutB + dragLengthY < 0) dragLengthY = -this.cutB;
      }
      this.setData({
        cutL: this.cutL - dragLengthX,
        cutT: this.cutT - dragLengthY,
        cutR: this.cutR + dragLengthX,
        cutB: this.cutB + dragLengthY });


      PAGE_X = e.touches[0].pageX;
      PAGE_Y = e.touches[0].pageY;
    },

    contentTouchEnd: function contentTouchEnd() {

    },

    // 获取图片
    getImageInfo: function getImageInfo() {
      var _this = this;
      uni.showLoading({
        title: '图片生成中...' });

      // 将图片写入画布
      var ctx = uni.createCanvasContext('myCanvas');
      ctx.drawImage(_this.imageSrc, 0, 0, IMG_REAL_W, IMG_REAL_H);
      ctx.draw(true, function () {
        // 获取画布要裁剪的位置和宽度   均为百分比 * 画布中图片的宽度    保证了在微信小程序中裁剪的图片模糊  位置不对的问题 canvasT = (_this.cutT / _this.cropperH) * (_this.imageH / pixelRatio)
        var canvasW = (_this.cropperW - _this.cutL - _this.cutR) / _this.cropperW * IMG_REAL_W;
        var canvasH = (_this.cropperH - _this.cutT - _this.cutB) / _this.cropperH * IMG_REAL_H;
        var canvasL = _this.cutL / _this.cropperW * IMG_REAL_W;
        var canvasT = _this.cutT / _this.cropperH * IMG_REAL_H;
        uni.canvasToTempFilePath({
          x: canvasL,
          y: canvasT,
          width: canvasW,
          height: canvasH,
          destWidth: canvasW,
          destHeight: canvasH,
          quality: 0.5,
          canvasId: 'myCanvas',
          success: function success(res) {
            uni.hideLoading();
            // 成功获得地址的地方
            uni.previewImage({
              current: '', // 当前显示图片的http链接
              urls: [res.tempFilePath] // 需要预览的图片http链接列表
            });
          } });

      });
    },

    // 设置大小的时候触发的touchStart事件
    dragStart: function dragStart(e) {
      T_PAGE_X = e.touches[0].pageX;
      T_PAGE_Y = e.touches[0].pageY;
      CUT_L = this.cutL;
      CUT_R = this.cutR;
      CUT_B = this.cutB;
      CUT_T = this.cutT;
    },

    // 设置大小的时候触发的touchMove事件
    dragMove: function dragMove(e) {
      var _this = this;
      var dragType = e.target.dataset.drag;
      switch (dragType) {
        case 'right':
          var dragLength = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          if (CUT_R + dragLength < 0) dragLength = -CUT_R;
          this.setData({
            cutR: CUT_R + dragLength });

          break;
        case 'left':
          var dragLength = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          if (CUT_L - dragLength < 0) dragLength = CUT_L;
          if (CUT_L - dragLength > this.cropperW - this.cutR) dragLength = CUT_L - (this.cropperW - this.cutR);
          this.setData({
            cutL: CUT_L - dragLength });

          break;
        case 'top':
          var dragLength = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          if (CUT_T - dragLength < 0) dragLength = CUT_T;
          if (CUT_T - dragLength > this.cropperH - this.cutB) dragLength = CUT_T - (this.cropperH - this.cutB);
          this.setData({
            cutT: CUT_T - dragLength });

          break;
        case 'bottom':
          var dragLength = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;
          if (CUT_B + dragLength < 0) dragLength = -CUT_B;
          this.setData({
            cutB: CUT_B + dragLength });

          break;
        case 'rightBottom':
          var dragLengthX = (T_PAGE_X - e.touches[0].pageX) * DRAFG_MOVE_RATIO;
          var dragLengthY = (T_PAGE_Y - e.touches[0].pageY) * DRAFG_MOVE_RATIO;

          if (CUT_B + dragLengthY < 0) dragLengthY = -CUT_B;
          if (CUT_R + dragLengthX < 0) dragLengthX = -CUT_R;
          var cutB = CUT_B + dragLengthY;
          var cutR = CUT_R + dragLengthX;

          this.setData({
            cutB: cutB,
            cutR: cutR });

          break;
        default:
          break;}

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ "./node_modules/@dcloudio/uni-mp-alipay/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/template/crop/crop.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=template&id=52f3bfc6&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/template/crop/crop.vue?vue&type=template&id=52f3bfc6& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container", attrs: { _hid: 0 } },
    [
      _c(
        "view",
        { staticClass: "page-body uni-content-info", attrs: { _hid: 1 } },
        [
          _c("view", { staticClass: "cropper-content", attrs: { _hid: 2 } }, [
            _vm._ri(!!_vm.isShowImg, 3)
              ? _c(
                  "view",
                  {
                    staticClass: "uni-corpper",
                    style:
                      "width:" +
                      _vm.cropperInitW +
                      "px;height:" +
                      _vm.cropperInitH +
                      "px;background:#000",
                    attrs: { _hid: 3 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: "uni-corpper-content",
                        style:
                          "width:" +
                          _vm.cropperW +
                          "px;height:" +
                          _vm.cropperH +
                          "px;left:" +
                          _vm.cropperL +
                          "px;top:" +
                          _vm.cropperT +
                          "px",
                        attrs: { _hid: 4 }
                      },
                      [
                        _c("image", {
                          style:
                            "width:" +
                            _vm.cropperW +
                            "px;height:" +
                            _vm.cropperH +
                            "px",
                          attrs: { src: _vm.imageSrc, _hid: 5, _batrs: "src" }
                        }),
                        _c(
                          "view",
                          {
                            staticClass: "uni-corpper-crop-box",
                            style:
                              "left:" +
                              _vm.cutL +
                              "px;top:" +
                              _vm.cutT +
                              "px;right:" +
                              _vm.cutR +
                              "px;bottom:" +
                              _vm.cutB +
                              "px",
                            attrs: { _hid: 6 },
                            on: {
                              touchstart: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "stop",
                                    undefined,
                                    $event.key,
                                    undefined
                                  )
                                ) {
                                  return null
                                }
                                return _vm.contentStartMove($event)
                              },
                              touchmove: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "stop",
                                    undefined,
                                    $event.key,
                                    undefined
                                  )
                                ) {
                                  return null
                                }
                                return _vm.contentMoveing($event)
                              },
                              touchend: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "stop",
                                    undefined,
                                    $event.key,
                                    undefined
                                  )
                                ) {
                                  return null
                                }
                                return _vm.contentTouchEnd($event)
                              }
                            }
                          },
                          [
                            _c(
                              "view",
                              {
                                staticClass: "uni-cropper-view-box",
                                attrs: { _hid: 7 }
                              },
                              [
                                _c("view", {
                                  staticClass: "uni-cropper-dashed-h",
                                  attrs: { _hid: 8 }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-dashed-v",
                                  attrs: { _hid: 9 }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-line-t",
                                  attrs: { "data-drag": "top", _hid: 10 },
                                  on: {
                                    touchstart: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragStart($event)
                                    },
                                    touchmove: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragMove($event)
                                    }
                                  }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-line-r",
                                  attrs: { "data-drag": "right", _hid: 11 },
                                  on: {
                                    touchstart: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragStart($event)
                                    },
                                    touchmove: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragMove($event)
                                    }
                                  }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-line-b",
                                  attrs: { "data-drag": "bottom", _hid: 12 },
                                  on: {
                                    touchstart: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragStart($event)
                                    },
                                    touchmove: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragMove($event)
                                    }
                                  }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-line-l",
                                  attrs: { "data-drag": "left", _hid: 13 },
                                  on: {
                                    touchstart: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragStart($event)
                                    },
                                    touchmove: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragMove($event)
                                    }
                                  }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-point point-t",
                                  attrs: { "data-drag": "top", _hid: 14 },
                                  on: {
                                    touchstart: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragStart($event)
                                    },
                                    touchmove: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragMove($event)
                                    }
                                  }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-point point-tr",
                                  attrs: { "data-drag": "topTight", _hid: 15 }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-point point-r",
                                  attrs: { "data-drag": "right", _hid: 16 },
                                  on: {
                                    touchstart: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragStart($event)
                                    },
                                    touchmove: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragMove($event)
                                    }
                                  }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-point point-rb",
                                  attrs: {
                                    "data-drag": "rightBottom",
                                    _hid: 17
                                  },
                                  on: {
                                    touchstart: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragStart($event)
                                    },
                                    touchmove: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragMove($event)
                                    }
                                  }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-point point-b",
                                  attrs: { "data-drag": "bottom", _hid: 18 },
                                  on: {
                                    touchstart: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragStart($event)
                                    },
                                    touchmove: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragMove($event)
                                    },
                                    touchend: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragEnd($event)
                                    }
                                  }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-point point-bl",
                                  attrs: { "data-drag": "bottomLeft", _hid: 19 }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-point point-l",
                                  attrs: { "data-drag": "left", _hid: 20 },
                                  on: {
                                    touchstart: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragStart($event)
                                    },
                                    touchmove: function($event) {
                                      if (
                                        !("button" in $event) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "stop",
                                          undefined,
                                          $event.key,
                                          undefined
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.dragMove($event)
                                    }
                                  }
                                }),
                                _c("view", {
                                  staticClass: "uni-cropper-point point-lt",
                                  attrs: { "data-drag": "leftTop", _hid: 21 }
                                })
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              : _vm._e()
          ]),
          _c(
            "view",
            { staticClass: "cropper-config", attrs: { _hid: 22 } },
            [
              _c(
                "button",
                {
                  staticStyle: { "margin-top": "30rpx" },
                  attrs: { type: "primary reverse", _hid: 23 },
                  on: { click: _vm.getImage }
                },
                []
              ),
              _c(
                "button",
                {
                  staticStyle: { "margin-top": "30rpx" },
                  attrs: { type: "warn", _hid: 25 },
                  on: { click: _vm.getImageInfo }
                },
                []
              )
            ],
            1
          ),
          _c("canvas", {
            style:
              "position:absolute;border: 1px solid red; width:" +
              _vm.imageW +
              "px;height:" +
              _vm.imageH +
              "px;top:-9999px;left:-9999px;",
            attrs: { "canvas-id": "myCanvas", _hid: 27 }
          })
        ]
      ),
      _c("page-foot", {
        attrs: { name: _vm.name, _hid: 28, _batrs: "name", _cid: 0 }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\main.js?{\"page\":\"pages%2Ftemplate%2Fcrop%2Fcrop\"}":
/*!**************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/main.js?{"page":"pages%2Ftemplate%2Fcrop%2Fcrop"} ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages.json");
var _crop = _interopRequireDefault(__webpack_require__(/*! ./pages/template/crop/crop.vue */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue"));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/megalo/dist/megalo.mp.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_crop.default.mpType = 'page';
var app = new _vue.default(_crop.default);
app.$mount();

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue":
/*!*****************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/template/crop/crop.vue ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _crop_vue_vue_type_template_id_52f3bfc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop.vue?vue&type=template&id=52f3bfc6& */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=template&id=52f3bfc6&");
/* harmony import */ var _crop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crop.vue?vue&type=script&lang=js& */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _crop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _crop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _crop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crop.vue?vue&type=style&index=0&lang=css& */ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _crop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _crop_vue_vue_type_template_id_52f3bfc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _crop_vue_vue_type_template_id_52f3bfc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/template/crop/crop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/template/crop/crop.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./crop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/template/crop/crop.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./crop.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=template&id=52f3bfc6&":
/*!************************************************************************************************************************************************!*\
  !*** E:/renyy/A_new_workPro/web/yby/cbinv2.0/association_xcx/trunk/associationApp/pages/template/crop/crop.vue?vue&type=template&id=52f3bfc6& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_template_id_52f3bfc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./crop.vue?vue&type=template&id=52f3bfc6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\pages\\template\\crop\\crop.vue?vue&type=template&id=52f3bfc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_template_id_52f3bfc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HbuilderX_HBuilderX_1_5_4_20190127_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_crop_vue_vue_type_template_id_52f3bfc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["E:\\renyy\\A_new_workPro\\web\\yby\\cbinv2.0\\association_xcx\\trunk\\associationApp\\main.js?{\"page\":\"pages%2Ftemplate%2Fcrop%2Fcrop\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-alipay/pages/template/crop/crop.js.map