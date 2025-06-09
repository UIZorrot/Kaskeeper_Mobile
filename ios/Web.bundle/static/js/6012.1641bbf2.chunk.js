"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[6012],{

/***/ 86012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateAccountScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23848);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60440);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48818);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80864);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77980);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87136);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__, _MainRoute__WEBPACK_IMPORTED_MODULE_6__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__, _MainRoute__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */











function CreateAccountScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__/* .useTranslation */ .G)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_6__/* .useNavigate */ .i)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .e6)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .w)();
  const setCurrentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSetCurrentAccountCallback */ .uu)();
  const currentKeyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCurrentKeyring */ .Ib)();
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('New account')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .kP, {
      classname: "!px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
        gap: "xl",
        style: {
          marginTop: '16px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
          placeholder: defaultName,
          value: alianName,
          className: "w-full",
          onChange: e => {
            const str = e.target.value.replaceAll(" ", '');
            setAlianName(str.slice(0, 16));
          },
          onKeyUp: handleOnKeyUp
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .q, {
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