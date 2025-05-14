"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[5580],{

/***/ 65580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WelcomeScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72260);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13108);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88658);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13907);
/* harmony import */ var _ui_images_wallet_support_wallet_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80469);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86990);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87164);
/* harmony import */ var _ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5579);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _MainRoute__WEBPACK_IMPORTED_MODULE_2__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _MainRoute__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable quotes */










function WelcomeScreen() {
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .Z)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .vT)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .B)();
  const isInTab = (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_4__/* .useExtensionIsInTab */ .VI)();
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    console.log('WelcomeScreen:', navigator.userAgent);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ .PE, {
    style: {
      height: '100vh',
      maxWidth: isInTab ? '500px' : 'inherit',
      margin: isInTab ? '0 auto' : 'inherit'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .UC, {
      preset: "large",
      style: {
        width: '100%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        paddingBottom: '10px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "text-[32px] text-center mb-[30px] font-bold",
          children: "KasKeeper"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
        fullX: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
          gap: "xl",
          mt: "xxl",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
            className: "flex justify-center mb-[40px]",
            height: 173,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              src: _ui_images_wallet_support_wallet_svg__WEBPACK_IMPORTED_MODULE_3__,
              alt: ""
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
            color: "inherit",
            variant: "outlined",
            size: "large",
            fullWidth: true,
            className: "!rounded-lg !h-[50px]",
            onClick: async () => {
              const isBooted = await wallet.isBooted();
              if (isBooted) {
                navigate('CreateHDWalletScreen', {
                  isImport: false
                });
              } else {
                navigate('CreatePasswordScreen', {
                  isNewAccount: true
                });
              }
            },
            children: t("Create new wallet")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
            color: "primary",
            variant: "contained",
            size: "large",
            className: "!rounded-lg !h-[50px]",
            fullWidth: true,
            onClick: async () => {
              const isBooted = await wallet.isBooted();
              if (isBooted) {
                navigate('CreateHDWalletScreen', {
                  isImport: true
                });
              } else {
                navigate('CreatePasswordScreen', {
                  isNewAccount: false
                });
              }
            },
            children: t("Import Wallet")
          })]
        })
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80469:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/support-wallet.0387f6ef.svg";

/***/ })

}]);