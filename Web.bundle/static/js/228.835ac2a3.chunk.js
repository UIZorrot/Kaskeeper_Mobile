"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[228],{

/***/ 95388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19408);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2488);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), 'Search'));

/***/ }),

/***/ 23492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ TokenAvatar)
/* harmony export */ });
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7886);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2488);


function TokenAvatar(_ref) {
  let {
    src = '',
    name = '',
    size = 32,
    borderRadius = '50%',
    fontSize = 12
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
    src: src,
    sx: {
      width: size,
      height: size,
      fontSize: fontSize,
      background: 'linear-gradient(to right, #29FAC4, #02DDA4)',
      borderRadius: borderRadius
    },
    children: name.slice(0, 2)
  });
}

/***/ }),

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

/***/ 81944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ TokenItem)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_Styled_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23492);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24808);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37656);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70884);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17534);
/* harmony import */ var _ui_images_common_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15728);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__]);
_ui_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function TokenItem(props) {
  const {
    token,
    selectToken = false,
    styleType = 'default',
    onClick,
    ...restProps
  } = props;
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useLayerType */ .wl)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c, {
    className: "flex justify-between py-3 px-3 !rounded-lg",
    style: {
      background: '#FFFFFF',
      boxShadow: '3px 3px 12px rgba(0, 0, 0, 0.1)',
      marginTop: 12
    },
    onClick: () => onClick(token),
    ...restProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
      className: "space-x-2 flex items-center",
      children: [token !== null && token !== void 0 && token.isToken ?
      /*#__PURE__*/
      // token.icon ? <img width={40} height={40} src={token.icon} alt="" style={{
      //   borderRadius: '50%'
      // }} /> :
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components_Styled_Avatar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
        src: (token === null || token === void 0 ? void 0 : token.avatar) || (token === null || token === void 0 ? void 0 : token.icon),
        name: token.tick || token.symbol,
        size: 40,
        fontSize: 14
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .GW, {
        icon: "kas",
        size: 40
      }), styleType === 'default' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          variant: "body1",
          fontWeight: 500,
          style: {
            fontSize: '15px',
            color: '#0A2463'
          },
          children: token !== null && token !== void 0 && token.isToken ? token === null || token === void 0 ? void 0 : token.tick : "".concat(currentLayer === 'L2' ? 'e' : '', "KAS")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          color: "text.secondary",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          },
          children: token !== null && token !== void 0 && token.isToken ? currentLayer === 'L2' ? 'ERC20' : "".concat(token.mod ? 'Issue ' : '', "KRC20") : currentLayer === 'L2' ? 'L2 Native/Token' : 'kaspa'
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
      className: "flex justify-end items-center space-x-3",
      children: [styleType === 'default' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          align: "right",
          style: {
            fontSize: '14px',
            color: '#0A2463'
          },
          children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .iy)(token.balance, token === null || token === void 0 ? void 0 : token.dec)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          align: "right",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          },
          children: token !== null && token !== void 0 && token.isToken ? '-' : "$".concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .iy)(token === null || token === void 0 ? void 0 : token.usdValue))
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          align: "right",
          style: {
            fontWeight: '500',
            fontSize: '14px',
            color: '#0A2463'
          },
          children: [token !== null && token !== void 0 && token.isToken ? token === null || token === void 0 ? void 0 : token.tick : 'KAS', "(", token !== null && token !== void 0 && token.isToken ? currentLayer === 'L2' ? 'ERC20' : "".concat(token.mod ? 'Issue ' : '', "KRC20") : 'kaspa', ")"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          align: "right",
          style: {
            fontSize: '13px',
            color: 'rgba(10, 36, 99, 0.65)'
          },
          children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .iy)(token.balance, token === null || token === void 0 ? void 0 : token.dec)
        })]
      }), selectToken ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
        src: _ui_images_common_right_svg__WEBPACK_IMPORTED_MODULE_4__,
        width: 18,
        height: 18,
        alt: ""
      }) : null]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40228:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChooseToke)
/* harmony export */ });
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37656);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87748);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77980);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23932);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24468);
/* harmony import */ var _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81944);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48818);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87136);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96651);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95388);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__, _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_5__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__, _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function ChooseToke() {
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .i)();
  const {
    krc20Tokens,
    setActiveToken,
    erc20Tokens
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__/* .useAccountContext */ .wB)();
  const accountBalance = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAccountBalance */ .Id)();
  const kasPrice = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useKasPrice */ .Af)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useLayerType */ .wl)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAccountAddressL2 */ .gt)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useNetworkType */ .qS)();
  const [safeBalance, setSafeBalance] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('0');
  const handleTokenClick = token => {
    if (token.isToken) {
      setActiveToken(token);
    } else {
      setActiveToken(null);
    }
    window.history.go(-1);
  };
  const fetchBalanceL2 = async () => {
    try {
      const {
        balance
      } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAccountEthBalance */ .YB)(addressL2, networkType);
      setSafeBalance(balance);
    } catch (error) {
      setSafeBalance('0');
    }
  };
  fetchBalanceL2();

  // TODO
  const nativeTokenItem = {
    tick: "".concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
    name: 'kaspa',
    balance: currentLayer === 'L2' ? safeBalance : accountBalance.amount,
    usdValue: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .times */ .g7)(currentLayer === 'L2' ? safeBalance : accountBalance.amount, kasPrice),
    isToken: false
  };
  const [keyword, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('');
  const tokens = [nativeTokenItem, ...(currentLayer === 'L2' ? erc20Tokens : krc20Tokens)];
  const filteredTokens = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    const lowerCaseKeyword = keyword.trim().toLowerCase();
    if (!lowerCaseKeyword) {
      return tokens;
    } else {
      return tokens.filter(item => {
        var _item$tick, _item$name, _item$symbol;
        return (item === null || item === void 0 ? void 0 : (_item$tick = item.tick) === null || _item$tick === void 0 ? void 0 : _item$tick.toLowerCase().includes(lowerCaseKeyword)) || (item === null || item === void 0 ? void 0 : (_item$name = item.name) === null || _item$name === void 0 ? void 0 : _item$name.toLowerCase().includes(lowerCaseKeyword)) || (item === null || item === void 0 ? void 0 : (_item$symbol = item.symbol) === null || _item$symbol === void 0 ? void 0 : _item$symbol.toLowerCase().includes(lowerCaseKeyword));
      });
    }
  }, [tokens, keyword]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .ek, {
      title: "Select Token",
      onBack: () => navigate('TxCreateScreen')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
          onChange: e => setKeyword(e.target.value),
          value: keyword,
          startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c, {
            color: "inherit",
            className: "mr-2"
          }),
          placeholder: "Search token",
          fullWidth: true
        }), filteredTokens.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .c, {
            token: item,
            onClick: handleTokenClick
          }, index);
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 15728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/right.db8fa8d4.svg";

/***/ })

}]);