"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[5532],{

/***/ 95272:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TxConfirmScreen)
/* harmony export */ });
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40256);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83120);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48818);
/* harmony import */ var _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37660);
/* harmony import */ var _Approval_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47500);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77980);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__, _Approval_components__WEBPACK_IMPORTED_MODULE_4__, _MainRoute__WEBPACK_IMPORTED_MODULE_5__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__, _Approval_components__WEBPACK_IMPORTED_MODULE_4__, _MainRoute__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function TxConfirmScreen() {
  const {
    rawTxInfo
  } = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useLocationState */ .l1)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .i)();
  const pushKaspaTx = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_3__/* .usePushKaspaTxCallback */ .cl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Approval_components__WEBPACK_IMPORTED_MODULE_4__.SignPsbt, {
    header: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .ek, {
      onBack: () => {
        // window.history.go(-1);
        navigate('TxCreateScreen', {
          rawTxInfo
        });
      }
    }),
    params: {
      data: {
        psbtHex: rawTxInfo.psbtHex,
        type: _shared_types__WEBPACK_IMPORTED_MODULE_0__/* .TxType */ .qA.SEND_KASPA,
        rawTxInfo
      }
    },
    handleCancel: () => {
      // window.history.go(-1);
      navigate('TxCreateScreen', {
        rawTxInfo
      });
    },
    handleConfirm: () => {
      pushKaspaTx(rawTxInfo.rawtx).then(_ref => {
        let {
          success,
          txid,
          error
        } = _ref;
        if (success) {
          navigate('TxSuccessScreen', {
            txid,
            rawtx: rawTxInfo.rawtx,
            type: ""
          });
        } else {
          navigate('TxFailScreen', {
            error
          });
        }
      });
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);