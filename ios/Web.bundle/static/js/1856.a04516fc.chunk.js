"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[1856],{

/***/ 91856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditWalletNameScreen)
/* harmony export */ });
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15516);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53236);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58256);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31036);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96651);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33220);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83120);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3204);
/* harmony import */ var _ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91588);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60440);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48818);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80864);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_3__]);
_ui_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */










function EditWalletNameScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__/* .useTranslation */ .G)();
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__/* .useLocation */ .IT)();
  const {
    keyring
  } = state;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .useWallet */ .e6)();
  const [alianName, setAlianName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .A)();
  const keyrings = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useKeyrings */ .C)();
  const handleOnClick = async () => {
    const keyName = keyrings.filter(item => {
      return item.alianName === alianName;
    });
    if (!keyName.length) {
      const newKeyring = await wallet.setKeyringAlianName(keyring, alianName || keyring.alianName);
      dispatch(_ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_5__/* .keyringsActions */ .IH.updateKeyringName(newKeyring));
      antd_lib_message__WEBPACK_IMPORTED_MODULE_11__["default"].success({
        duration: 1,
        content: "success",
        className: "ant-custom-message",
        onClose: () => {
          window.history.go(-1);
        }
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_11__["default"].error({
        content: "name repeated",
        className: "ant-custom-message"
      });
    }
  };
  const handleOnKeyUp = e => {
    if ('Enter' == e.key) {
      handleOnClick();
    }
  };
  const isValidName = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (alianName.length == 0) {
      return false;
    }
    return true;
  }, [alianName]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      },
      title: keyring.alianName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .kP, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .ou, {
        gap: "lg",
        style: {
          marginTop: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd_lib_input__WEBPACK_IMPORTED_MODULE_12__["default"], {
          type: "text",
          placeholder: keyring.alianName,
          maxLength: 16,
          showCount: true,
          autoFocus: true,
          bordered: true,
          allowClear: true,
          className: "!py-[10px] !text-sm",
          onChange: e => {
            setAlianName(e.target.value.replaceAll(" ", ''));
          },
          onKeyUp: e => handleOnKeyUp(e)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .q, {
          disabled: !isValidName,
          className: "!rounded-lg !h-[42px]",
          text: t('Change Wallet Name'),
          preset: "primary",
          sx: {
            "&.Mui-disabled": {
              background: "#eaeaea",
              color: "#c0c0c0"
            },
            marginTop: "15px"
          },
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