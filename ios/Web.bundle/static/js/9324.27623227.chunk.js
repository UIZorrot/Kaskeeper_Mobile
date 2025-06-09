"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[9324],{

/***/ 87748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37656);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2488);


function Content(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
    className: "h-full flex flex-col justify-between space-y-6 p-4 ".concat(props.className ? props.className : ''),
    children: props.children
  });
}

/***/ }),

/***/ 39324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87748);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17534);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37656);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87136);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96651);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77980);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23932);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23848);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__, _MainRoute__WEBPACK_IMPORTED_MODULE_6__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_7__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__, _MainRoute__WEBPACK_IMPORTED_MODULE_6__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ImportERC20 = () => {
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkType */ .qS)();
  const [validAddress, setValidAddress] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .useWallet */ .e6)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_6__/* .useNavigate */ .i)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAccountAddressL2 */ .gt)();
  const {
    erc20Tokens
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_7__/* .useAccountContext */ .wB)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_8__/* .useTools */ .w)();
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    contractAddress: '',
    symbol: '',
    decimals: null
  });
  const handleAddressChange = async e => {
    setFormData({
      ...formData,
      contractAddress: e.target.value
    });
    if (!(0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .isValidEthereumAddress */ .I3)(e.target.value)) {
      setFormData(() => ({
        contractAddress: e.target.value,
        symbol: '',
        decimals: null
      }));
      return setValidAddress('Invalid address');
    }
    const list = await wallet.getERC20ListByAddress(addressL2);
    if (list.find(item => item.contractAddress === e.target.value)) return setValidAddress('Already added');
    try {
      const token = await (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .validateERC20Token */ .CA)(e.target.value, networkType);
      setFormData(() => ({
        contractAddress: e.target.value,
        symbol: token.symbol,
        decimals: Number(token.decimals)
      }));
      setValidAddress('');
      // 0xE7bD28D45B5Ac5BBEBe08fB2191BC3D18c5c7399
    } catch (error) {
      console.log('validateERC20Token error', error);
      setFormData(() => ({
        contractAddress: e.target.value,
        symbol: '',
        decimals: null
      }));
      setValidAddress('Invalid address');
    }
  };
  const handleImport = async () => {
    try {
      console.log('handleImport', erc20Tokens);
      if (erc20Tokens.length > 0 && erc20Tokens.find(item => item.contractAddress === formData.contractAddress)) {
        return tools.toastError('Token already exists');
      }
      await wallet.addERC20Token({
        ...formData,
        address: addressL2
      });
      navigate("MainScreen", {
        refreshToken: true
      }, true);
    } catch (error) {
      console.log('addERC20Token error', error);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      },
      title: "Import ERC20"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
      className: "pt-0 mt-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
            children: "Token Contract Address"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c, {
            value: formData.contractAddress,
            name: "contractAddress",
            size: "small",
            placeholder: "Token Contract Address",
            fullWidth: true,
            autoComplete: "off",
            onChange: handleAddressChange,
            error: !!validAddress
          }), validAddress ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
            color: "error",
            children: validAddress
          }) : '']
        }),
        /*#__PURE__*/
        // true || formData.contractAddress && !validAddress && formData.symbol &&
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
            children: "Token Symbol"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c, {
            value: formData.symbol,
            name: "symbol",
            size: "small",
            placeholder: "Token Symbol",
            fullWidth: true,
            autoComplete: "off",
            onChange: e => {
              setFormData({
                ...formData,
                symbol: e.target.value.length > 11 ? e.target.value.slice(0, 11) : e.target.value
              });
            }
          })]
        }),
        /*#__PURE__*/
        // true || formData.contractAddress && !validAddress && formData.decimals &&
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
            children: "Token Decimals"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c, {
            type: "number",
            value: formData.decimals,
            name: "decimals",
            size: "small",
            placeholder: "Token Decimals",
            fullWidth: true,
            autoComplete: "off",
            disabled: true
          })]
        }),
        /*#__PURE__*/
        // true || formData.contractAddress && !validAddress && formData.symbol && formData.decimals &&
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .q, {
          variant: "contained",
          color: "primary",
          className: "!rounded-lg !h-[42px] w-full",
          sx: {
            "&.Mui-disabled": {
              background: "#eaeaea",
              color: "#c0c0c0"
            }
          },
          disabled: !formData.symbol || !formData.contractAddress || !!validAddress || !formData.symbol || !formData.decimals,
          onClick: handleImport,
          children: "Import Erc20"
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportERC20);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);