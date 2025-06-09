(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[2528],{

/***/ 35128:
/***/ ((__unused_webpack_module, exports) => {

exports.u = [{
  name: 'English',
  symbol: 'en',
  messages: {}
},
// { name: 'Español', symbol: 'es', messages: {} },
// { name: 'Francés', symbol: 'fr', messages: {} },
// { name: '日本語', symbol: 'ja', messages: {} },
// { name: '한국인', symbol: 'ko', messages: {} },
{
  name: '中文(简体)',
  symbol: 'zh_CN',
  messages: {}
}, {
  name: '中文(正體)',
  symbol: 'zh_TW',
  messages: {}
}];

/***/ }),

/***/ 30148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LanguageTypeScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23848);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17534);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80864);
/* harmony import */ var _build_languages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35128);
/* harmony import */ var _ui_images_common_checkCircleFilled_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9428);
/* harmony import */ var _ui_images_common_checkCircleFilledSelected_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56124);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */










function LanguageTypeScreen() {
  const changeLanguageType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useChangeLocaleCallback */ .et)();
  const locale = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLocale */ .y_)();
  const reloadAccounts = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useReloadAccounts */ .KM)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_1__/* .useTools */ .w)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__/* .useTranslation */ .G)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('Switch Language')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .kP, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
        full: true,
        children: _build_languages_js__WEBPACK_IMPORTED_MODULE_4__/* .Languages */ .u && _build_languages_js__WEBPACK_IMPORTED_MODULE_4__/* .Languages */ .u.length > 0 && _build_languages_js__WEBPACK_IMPORTED_MODULE_4__/* .Languages */ .u.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Card */ .M1, {
            classname: "card-select",
            mt: "zero",
            mb: "xs",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
              full: true,
              onClick: async () => {
                if (item.symbol == locale) {
                  return;
                }
                await changeLanguageType(item.symbol);
                reloadAccounts();
                // navigate('MainScreen');
                tools.toastSuccess(t('Language type changed'));
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
                style: {
                  width: 20
                },
                selfItemsCenter: true,
                children: item.symbol == locale ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .GW, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                    src: _ui_images_common_checkCircleFilledSelected_svg__WEBPACK_IMPORTED_MODULE_6__,
                    width: 18,
                    height: 18,
                    alt: ""
                  })
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .GW, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                    src: _ui_images_common_checkCircleFilled_svg__WEBPACK_IMPORTED_MODULE_5__,
                    width: 18,
                    height: 18,
                    alt: ""
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
                justifyCenter: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                  text: item.name,
                  preset: "regular-bold"
                })
              })]
            })
          }, index);
        })
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9428:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/checkCircleFilled.1d037b42.svg";

/***/ }),

/***/ 56124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/checkCircleFilledSelected.eab4ff10.svg";

/***/ })

}]);