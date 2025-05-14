"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[1117],{

/***/ 61117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateAccountScreen)
/* harmony export */ });
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54431);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7669);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17508);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36904);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13108);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13907);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88658);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__, _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_5__, _MainRoute__WEBPACK_IMPORTED_MODULE_7__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__, _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_5__, _MainRoute__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */









function CreateAccountScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__/* .useTranslation */ .B)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_7__/* .useNavigate */ .Z)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_3__/* .useTools */ .D)();
  const setCurrentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useSetCurrentAccountCallback */ .FN)();
  const currentKeyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useCurrentKeyring */ .KZ)();
  const [alianName, setAlianName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [defaultName, setDefaultName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const handleOnClick = async () => {
    if (currentKeyring.type == "Simple Key Pair") {
      tools.toastError(t('Priavet Key Based Wallet is not Allowed to Create Account'));
    }
    const result = currentKeyring.accounts && currentKeyring.accounts.filter(item => {
      return item.alianName === alianName;
    });
    if (result.length) {
      return tools.toastError("The name already exists");
    }
    await wallet.deriveNewAccountFromMnemonic(currentKeyring, alianName || defaultName);
    tools.toastSuccess('Success');
    const currentAccount = await wallet.getCurrentAccount();
    setCurrentAccount(currentAccount);
    navigate('MainScreen');
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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    init();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .Y9, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('New account')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .VP, {
        style: {
          marginTop: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd_lib_input__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
          type: "text",
          maxLength: 16,
          showCount: true,
          autoFocus: true,
          bordered: true,
          allowClear: true,
          placeholder: defaultName,
          onChange: e => {
            setAlianName(e.target.value.replaceAll(" ", ''));
          },
          onKeyUp: e => handleOnKeyUp(e)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
          text: "Create an Account",
          preset: "primary",
          sx: {
            marginTop: "15px"
          },
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