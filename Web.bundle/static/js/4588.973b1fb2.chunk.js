(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[4588],{

/***/ 1343:
/***/ ((__unused_webpack_module, exports) => {

exports.A = [{
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

/***/ 34375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/checkCircleFilledSelected.eab4ff10.svg";

/***/ }),

/***/ 82084:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/checkCircleFilled.1d037b42.svg";

/***/ }),

/***/ 84588:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LanguageTypeScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17508);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43168);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13907);
/* harmony import */ var _build_languages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1343);
/* harmony import */ var _ui_images_common_checkCircleFilled_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82084);
/* harmony import */ var _ui_images_common_checkCircleFilledSelected_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34375);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */









function LanguageTypeScreen() {
  const changeLanguageType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useChangeLocaleCallback */ .FM)();
  const locale = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLocale */ .Ym)();
  const reloadAccounts = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useReloadAccounts */ .Fg)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_1__/* .useTools */ .D)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__/* .useTranslation */ .B)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .Y9, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('Switch Language')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .UC, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
        full: true,
        children: _build_languages_js__WEBPACK_IMPORTED_MODULE_4__/* .Languages */ .A && _build_languages_js__WEBPACK_IMPORTED_MODULE_4__/* .Languages */ .A.length > 0 && _build_languages_js__WEBPACK_IMPORTED_MODULE_4__/* .Languages */ .A.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Card */ .Zp, {
            classname: "card-select",
            mt: "zero",
            mb: "xs",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
                style: {
                  width: 20
                },
                selfItemsCenter: true,
                children: item.symbol == locale ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .In, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                    src: _ui_images_common_checkCircleFilledSelected_svg__WEBPACK_IMPORTED_MODULE_6__,
                    width: 18,
                    height: 18,
                    alt: ""
                  })
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .In, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                    src: _ui_images_common_checkCircleFilled_svg__WEBPACK_IMPORTED_MODULE_5__,
                    width: 18,
                    height: 18,
                    alt: ""
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
                justifyCenter: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
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

/***/ })

}]);