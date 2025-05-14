"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[6754],{

/***/ 14304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 14977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Card_Card)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(25669);
// EXTERNAL MODULE: ./node_modules/@mui/material/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(64155);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/Card/cardClasses.js


function getCardUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiCard', slot);
}
const cardClasses = (0,generateUtilityClasses/* default */.A)('MuiCard', ['root']);
/* harmony default export */ const Card_cardClasses = ((/* unused pure expression or super */ null && (cardClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/Card/Card.js
'use client';











const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.A)(slots, getCardUtilityClass, classes);
};
const CardRoot = (0,styled/* default */.Ay)(Paper/* default */.A, {
  name: 'MuiCard',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  overflow: 'hidden'
});
const Card = /*#__PURE__*/react.forwardRef(function Card(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiCard'
  });
  const {
    className,
    raised = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    raised
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardRoot, {
    className: (0,clsx/* default */.A)(classes.root, className),
    elevation: raised ? 8 : undefined,
    ref: ref,
    ownerState: ownerState,
    ...other
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Card_Card = (Card);

/***/ }),

/***/ 17778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Empty)
/* harmony export */ });
/* harmony import */ var antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95662);
/* harmony import */ var antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45396);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13907);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51942);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);





function Empty(props) {
  const {
    text,
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .B)();
  const content = text || t('No Data Found');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: className,
    style: {
      alignSelf: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .f, {
      justifyCenter: true,
      style: {
        flex: 1,
        alignItems: 'center',
        height: '30vh'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        description: content,
        image: antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.PRESENTED_IMAGE_SIMPLE
      })
    })
  });
}

/***/ }),

/***/ 18304:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(6305)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(96540));
var _configProvider = __webpack_require__(76421);
var Simple = function Simple() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};
var _default = exports["default"] = Simple;

/***/ }),

/***/ 44675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40973);
/* harmony import */ var _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22765);
/* harmony import */ var _identifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58312);
'use client';





function useTheme() {
  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
  if (false) {}
  return theme[_identifier_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A] || theme;
}

/***/ }),

/***/ 45396:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireWildcard = (__webpack_require__(6305)["default"]);
var _interopRequireDefault = (__webpack_require__(24994)["default"]);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(43693));
var _extends2 = _interopRequireDefault(__webpack_require__(94634));
var _classnames = _interopRequireDefault(__webpack_require__(46942));
var React = _interopRequireWildcard(__webpack_require__(96540));
var _configProvider = __webpack_require__(76421);
var _LocaleReceiver = _interopRequireDefault(__webpack_require__(81930));
var _empty = _interopRequireDefault(__webpack_require__(98845));
var _simple = _interopRequireDefault(__webpack_require__(18304));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var defaultEmptyImg = /*#__PURE__*/React.createElement(_empty["default"], null);
var simpleEmptyImg = /*#__PURE__*/React.createElement(_simple["default"], null);
var Empty = function Empty(_a) {
  var className = _a.className,
    customizePrefixCls = _a.prefixCls,
    _a$image = _a.image,
    image = _a$image === void 0 ? defaultEmptyImg : _a$image,
    description = _a.description,
    children = _a.children,
    imageStyle = _a.imageStyle,
    restProps = __rest(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
    componentName: "Empty"
  }, function (contextLocale) {
    var prefixCls = getPrefixCls('empty', customizePrefixCls);
    var des = typeof description !== 'undefined' ? description : contextLocale.description;
    var alt = typeof des === 'string' ? des : 'empty';
    var imageNode = null;
    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/React.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
      className: (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className)
    }, restProps), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-image"),
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, des), children && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, children));
  });
};
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = exports.A = Empty;

/***/ }),

/***/ 45925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Token)
/* harmony export */ });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55809);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(96383);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28454);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17778);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24965);
/* harmony import */ var _ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40675);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21999);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43168);
/* harmony import */ var _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16039);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13108);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87164);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14073);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45989);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96540);
/* harmony import */ var _ui_components_TabPaper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53830);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_5__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_6__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_7__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_10__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_5__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_6__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_7__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















function Token() {
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_7__/* .useNavigate */ .Z)();
  const {
    activeToken
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_6__/* .useAccountContext */ .Um)();
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)();
  const currentAddressTxs = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useCurrentAddressTxs */ .Eh)();
  const currentTokenTxs = currentAddressTxs.filter(item => item.tick === activeToken.tick);
  const network = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useNetworkType */ .iP)(); // 获取网络类型，NetworkType枚举
  const account = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAccountAddress */ .PJ)();
  const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_16__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_16__.NetworkType.Testnet ? 'testnet-10' : '';
  const [fetchListData, setFetchListData] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useLayerType */ .pI)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAccountAddressL2 */ .N1)();
  const krc20list = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(async () => {
    setLoading(true);
    try {
      const list = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_1__/* .fetch_krc20_oplist */ .ip)(networkName, account, activeToken.mod === 'issue' ? activeToken.ca : activeToken.tick);
      setFetchListData(list.map(item => {
        let type = 'Recieved';
        if (item.op === 'burn') {
          type = 'Sent';
        }
        if (item.op === 'transfer') {
          type = item.to === account ? 'Recieved' : 'Sent';
        }
        return {
          ...item,
          type
        };
      }));
    } catch (error) {
      console.log('error', error);
    }
    setLoading(false);
  }, [account, network, activeToken]);
  const getERC20List = (0,react__WEBPACK_IMPORTED_MODULE_13__.useCallback)(async () => {
    if (!addressL2) return;
    setLoading(true);
    try {
      const res = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_1__/* .fetch_erc20 */ .kk)(network, addressL2, activeToken.contractAddress);
      console.log('getERC20List', res);
      setFetchListData(res.data.items.map(item => {
        const op = item.type === 'token_transfer' ? 'transfer' : 'mint';

        // let type = 'Recieved'
        // if (item.op === 'burn') {
        //   type = 'Sent'
        // }
        // if (item.op === 'transfer') {
        //   type = item.to === account ? 'Recieved' : 'Sent'
        // }
        // return {
        //   ...item,
        //   type
        // }
        return {
          hashRev: item.transaction_hash,
          op,
          tick: activeToken.symbol,
          amt: item.total.value,
          mtsMod: new Date(item.timestamp).getTime(),
          mtsAdd: new Date(item.timestamp).getTime(),
          from: item.from.hash,
          to: item.to.hash,
          txAccept: '1',
          opAccept: '1',
          dec: activeToken.dec,
          type: op === 'transfer' ? item.to.hash === addressL2 ? 'Recieved' : 'Sent' : 'Recieved'
        };
      }));
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
    }
  }, [account, network, activeToken, addressL2]);
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(() => {
    // L2 ERC20
    if (activeToken.contractAddress) {
      getERC20List();
    } else {
      // L1 KRC20
      krc20list(); // Call fetch function when address or network changes
    }
  }, [account, network, activeToken, addressL2]);

  // console.log(activeToken)
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .Y9, {
      title: "Token Details",
      onBack: () => navigate('MainScreen')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      className: "!h-[auto] !pt-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
          variant: "h5",
          align: "center",
          fontWeight: 700,
          children: [(0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .formatNumber */ .ZV)(activeToken === null || activeToken === void 0 ? void 0 : activeToken.balance, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec), activeToken.tick || activeToken.symbol]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
          className: "grid grid-cols-1 gap-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components_TabPaper__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
            tabs: [{
              key: 'receive',
              label: 'Receive'
            }, {
              key: 'send',
              label: 'Send'
            }],
            activeKey: 'receive',
            onChange: key => {
              if (key === 'receive') {
                navigate('ReceiveScreen');
              } else if (key === 'send') {
                navigate('TxCreateScreen');
              }
            },
            className: "my-custom-class"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
          spinning: loading,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
            variant: "h5",
            children: "Recent"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            children: !(0,lodash__WEBPACK_IMPORTED_MODULE_12__.isEmpty)(fetchListData) ? fetchListData.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
                item: item
              }, index);
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_3__/* .Empty */ .S, {
              className: "mt-4"
            })
          })]
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Paper_Paper)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(33139);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(44675);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(29077);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(25669);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = __webpack_require__(98783);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/Paper/paperClasses.js


function getPaperUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiPaper', slot);
}
const paperClasses = (0,generateUtilityClasses/* default */.A)('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);
/* harmony default export */ const Paper_paperClasses = ((/* unused pure expression or super */ null && (paperClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/Paper/Paper.js
'use client';














const useUtilityClasses = ownerState => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
  };
  return (0,composeClasses/* default */.A)(slots, getPaperUtilityClass, classes);
};
const PaperRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
  }
})((0,memoTheme/* default */.A)(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.primary,
  transition: theme.transitions.create('box-shadow'),
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.square,
    style: {
      borderRadius: theme.shape.borderRadius
    }
  }, {
    props: {
      variant: 'outlined'
    },
    style: {
      border: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      variant: 'elevation'
    },
    style: {
      boxShadow: 'var(--Paper-shadow)',
      backgroundImage: 'var(--Paper-overlay)'
    }
  }]
})));
const Paper = /*#__PURE__*/react.forwardRef(function Paper(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiPaper'
  });
  const theme = (0,useTheme/* default */.A)();
  const {
    className,
    component = 'div',
    elevation = 1,
    square = false,
    variant = 'elevation',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    elevation,
    square,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PaperRoot, {
    as: component,
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref,
    ...other,
    style: {
      ...(variant === 'elevation' && {
        '--Paper-shadow': (theme.vars || theme).shadows[elevation],
        ...(theme.vars && {
          '--Paper-overlay': theme.vars.overlays?.[elevation]
        }),
        ...(!theme.vars && theme.palette.mode === 'dark' && {
          '--Paper-overlay': `linear-gradient(${(0,colorManipulator/* alpha */.X4)('#fff', (0,getOverlayAlpha/* default */.A)(elevation))}, ${(0,colorManipulator/* alpha */.X4)('#fff', (0,getOverlayAlpha/* default */.A)(elevation))})`
        })
      }),
      ...other.style
    }
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Paper_Paper = (Paper);

/***/ }),

/***/ 95662:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(31263);
__webpack_require__(14304);

/***/ }),

/***/ 98845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(6305)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(96540));
var _configProvider = __webpack_require__(76421);
var Empty = function Empty() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
var _default = exports["default"] = Empty;

/***/ })

}]);