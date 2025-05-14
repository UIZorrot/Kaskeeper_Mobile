"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[7043],{

/***/ 56427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/support-pwd.920cc39f.svg";

/***/ }),

/***/ 77043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UnlockScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17508);
/* harmony import */ var _ui_state_global_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45825);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13108);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86990);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6757);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14073);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87164);
/* harmony import */ var _ui_images_wallet_support_pwd_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56427);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72635);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88658);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _MainRoute__WEBPACK_IMPORTED_MODULE_7__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _MainRoute__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function UnlockScreen() {
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .useWallet */ .vT)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_7__/* .useNavigate */ .Z)();
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const UIType = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .getUiType */ .dA)();
  const isInNotification = UIType.isNotification;
  const unlock = (0,_ui_state_global_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useUnlockCallback */ .H)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  const btnClick = async () => {
    if (password == "") {
      tools.toastError('Password Cannot Be Empty');
    }
    // run(password);
    try {
      await unlock(password);
      if (!isInNotification) {
        const hasVault = await wallet.hasVault();
        if (!hasVault) {
          navigate('WelcomeScreen');
          return;
        } else {
          navigate('MainScreen');
          return;
        }
      }
    } catch (e) {
      tools.toastError('Password Error');
    }
  };
  const handleOnKeyUp = e => {
    if (!disabled && 'Enter' == e.key) {
      btnClick();
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
      preset: "middle",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
        fullX: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
          className: "flex items-center justify-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
            src: _ui_images_wallet_support_pwd_svg__WEBPACK_IMPORTED_MODULE_5__,
            alt: ""
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
          color: "text.secondary",
          align: "center",
          children: (0,i18next__WEBPACK_IMPORTED_MODULE_6__.t)('Please verify you password')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
          gap: "xl",
          mt: "xxl",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
            type: "password",
            color: "info",
            placeholder: (0,i18next__WEBPACK_IMPORTED_MODULE_6__.t)('Password'),
            onChange: e => setPassword(e.target.value),
            onKeyUp: e => handleOnKeyUp(e),
            autoFocus: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            disabled: disabled,
            size: "large",
            className: "!rounded-lg !h-[44px]",
            variant: "contained",
            color: "primary",
            onClick: btnClick,
            style: disabled ? {
              opacity: 0.5,
              cursor: 'not-allowed',
              backgroundColor: '#a0aec0'
            } : {},
            children: (0,i18next__WEBPACK_IMPORTED_MODULE_6__.t)('Unlock')
          })]
        })]
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);