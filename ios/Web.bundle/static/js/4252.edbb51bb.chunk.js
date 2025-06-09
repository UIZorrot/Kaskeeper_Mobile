"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[4252],{

/***/ 14252:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditNetworkUrlScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33220);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46956);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83120);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17534);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48818);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80864);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23848);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_2__]);
_ui_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */










function EditNetworkUrlScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .G)();
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useLocation */ .IT)();
  const {
    item
  } = state;
  const currentRpcLinks = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useRpcLinks */ .Wq)();
  const currentNetworkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkType */ .qS)();
  const changeRpcLinks = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useChangeRpcLinksCallback */ .k$)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .useWallet */ .e6)();
  const [alianName, setAlianName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((item === null || item === void 0 ? void 0 : item.url) || '');
  const defaultUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const n = _shared_constant__WEBPACK_IMPORTED_MODULE_1__/* .NETWORK_TYPES */ .CY.find(n => n.value == item.value);
    return n === null || n === void 0 ? void 0 : n.url;
  }, []);
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_5__/* .useTools */ .w)();
  const handleOnClick = async (alianName, type) => {
    try {
      const a = !type && new URL(alianName);
      const newRpcLinks = currentRpcLinks.map(r => {
        if (r.value == item.value) {
          const newR = {
            ...r,
            url: type ? alianName || '' : alianName
          };
          return newR;
        } else {
          return r;
        }
      });
      await changeRpcLinks(newRpcLinks);
      if (currentNetworkType == item.value) {
        await wallet.setNetworkType(currentNetworkType);
      }
      window.history.go(-1);
    } catch (e) {
      tools.toastError(t('Please enter a valid URL'));
      console.log('handleOnClick', e);
    }
    // const newKeyring = await wallet.setKeyringAlianName(keyring, alianName || keyring.alianName);
    // dispatch(keyringsActions.updateKeyringName(newKeyring));
    // window.history.go(-1);
  };
  const handleOnKeyUp = e => {
    if ('Enter' == e.key) {
      handleOnClick(alianName);
    }
  };
  const isValidName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (alianName.length == 0) {
      return false;
    }
    try {
      new URL(alianName);
      return true;
    } catch (err) {
      return false;
    }
  }, [alianName]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      },
      title: item.label,
      parentName: "ChangePasswordScreen"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .kP, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .ou, {
        gap: "lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Input */ .EF, {
          placeholder: item.url ? item.url : 'Automatic',
          defaultValue: item.url,
          onChange: e => {
            setAlianName(e.target.value);
          },
          onKeyUp: e => handleOnKeyUp(e),
          autoFocus: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .q
        // disabled={!isValidName}
        , {
          text: t('Change Network URL'),
          preset: "primary",
          className: "!rounded-lg flex-1",
          variant: "contained",
          onClick: e => {
            if (!alianName) return tools.toastError('Please enter a valid URL');
            handleOnClick(alianName);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .q
        // disabled={item.url == defaultUrl}
        // text={t('Reset')}
        , {
          fullWidth: true,
          preset: "primary",
          className: "!rounded-lg flex-1",
          variant: "outlined",
          onClick: e => {
            handleOnClick(defaultUrl, 'reset');
          },
          children: t('Reset')
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);