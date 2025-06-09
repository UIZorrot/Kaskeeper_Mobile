"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[2612],{

/***/ 62612:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoostScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48818);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77980);
/* harmony import */ var _ui_components_AppLoading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95632);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MainRoute__WEBPACK_IMPORTED_MODULE_2__]);
_MainRoute__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function BoostScreen() {
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .i)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .e6)();
  const [getApproval,, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useApproval */ .kf)();
  const loadView = async () => {
    const UIType = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .getUiType */ .Ad)();
    const isInNotification = UIType.isNotification;
    const isInTab = UIType.isTab;
    let approval = await getApproval();
    if (isInNotification && !approval) {
      window.close();
      return;
    }
    if (!isInNotification) {
      await rejectApproval();
      approval = undefined;
    }
    const isBooted = await wallet.isBooted();
    const hasVault = await wallet.hasVault();
    const isUnlocked = await wallet.isUnlocked();
    if (!isBooted) {
      navigate('WelcomeScreen');
      return;
    }
    if (!isUnlocked) {
      navigate('UnlockScreen');
      return;
    }
    if (!hasVault) {
      navigate('WelcomeScreen');
      return;
    }
    if ((await wallet.getPreMnemonics()) && !isInNotification && !isInTab) {
      navigate('CreateHDWalletScreen', {
        isImport: false
      });
      return;
    }
    const currentAccount = await wallet.getCurrentAccount();
    if (!currentAccount) {
      navigate('WelcomeScreen');
      return;
    } else if (approval) {
      navigate('ApprovalScreen');
    } else {
      navigate('MainScreen');
      return;
    }
  };
  const init = async () => {
    const ready = await wallet.isReady();
    if (ready) {
      loadView();
    } else {
      setTimeout(() => {
        init();
      }, 1000);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    init();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components_AppLoading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {});
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);