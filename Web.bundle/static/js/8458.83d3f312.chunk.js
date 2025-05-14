"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[8458],{

/***/ 9965:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApprovalScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47767);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13108);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97579);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__]);
_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */





function ApprovalScreen() {
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .vT)();
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useApproval */ .V9)();
  const [approval, setApproval] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useNavigate */ .Zp)();
  const init = async () => {
    const approval = await getApproval();
    if (!approval) {
      navigate('/');
      return null;
    }
    setApproval(approval);
    if (approval.origin || approval.params.origin) {
      document.title = approval.origin || approval.params.origin;
    }
    const account = await wallet.getCurrentAccount();
    if (!account) {
      rejectApproval();
      return;
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    init();
  }, []);
  if (!approval) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
  const {
    approvalComponent,
    params,
    origin,
    requestDefer
  } = approval;
  console.log('approval', approval);
  const CurrentApprovalComponent = _components__WEBPACK_IMPORTED_MODULE_2__[approvalComponent];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CurrentApprovalComponent, {
      params: params,
      origin: origin,
      requestDefer: requestDefer
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);