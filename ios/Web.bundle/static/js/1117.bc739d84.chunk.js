"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[1117],{

/***/ 61117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateAccountScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17508);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36904);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13108);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13907);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6757);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__, _MainRoute__WEBPACK_IMPORTED_MODULE_6__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__, _MainRoute__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */










function CreateAccountScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__/* .useTranslation */ .B)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_6__/* .useNavigate */ .Z)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  const setCurrentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSetCurrentAccountCallback */ .FN)();
  const currentKeyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentKeyring */ .KZ)();
  const [alianName, setAlianName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [defaultName, setDefaultName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleOnClick = async () => {
    if (currentKeyring.type == "Simple Key Pair") return tools.toastError(t('Priavet Key Based Wallet is not Allowed to Create Account'));
    setLoading(true);
    try {
      const result = (currentKeyring.accounts || []).filter(item => {
        return item.alianName === alianName;
      });
      if (result.length) return tools.toastError("The name already exists");
      await wallet.deriveNewAccountFromMnemonic(currentKeyring, alianName || defaultName);
      tools.toastSuccess('Success');
      const currentAccount = await wallet.getCurrentAccount();
      setCurrentAccount(currentAccount);
      navigate('MainScreen');
    } catch (error) {
      console.log('creat account', error);
    } finally {
      setLoading(false);
    }
  };
  const handleOnKeyUp = e => {
    if ('Enter' == e.key) {
      handleOnClick();
    }
  };
  const init = async () => {
    const accountName = await wallet.getNextAlianName(currentKeyring);
    setDefaultName(accountName);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    init();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('New account')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
      classname: "!px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
        gap: "xl",
        style: {
          marginTop: '16px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
          placeholder: defaultName,
          value: alianName,
          className: "w-full",
          onChange: e => {
            const str = e.target.value.replaceAll(" ", '');
            setAlianName(str.slice(0, 16));
          },
          onKeyUp: handleOnKeyUp
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n, {
          text: "Create an Account",
          preset: "primary",
          sx: {
            marginTop: "15px"
          },
          disabled: loading,
          className: "!rounded-lg !h-[42px]",
          onClick: e => {
            handleOnClick();
          }
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);