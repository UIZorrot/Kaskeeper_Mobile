"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[1456],{

/***/ 11456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TxFailScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83120);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98104);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48818);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96651);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80864);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__]);
_ui_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function TxFailScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .G)();
  const {
    error
  } = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useLocationState */ .l1)();
  const [isMassResaon, setIsMassResaon] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (error && error.includes('is larger than max allowed size of 100000')) {
      setIsMassResaon(true);
    }
  }, [error]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .kP, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
        justifyCenter: true,
        mt: "xxl",
        gap: "xl",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
          justifyCenter: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .GW, {
            icon: "delete",
            size: 50
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
          preset: "title",
          text: t('Payment Failed'),
          textCenter: true
        }), isMassResaon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
          text: t('You may increase transfer amount'),
          textCenter: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
          preset: "sub",
          style: {
            color: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .I.red,
            wordWrap: 'break-word'
          },
          text: error,
          textCenter: true
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);