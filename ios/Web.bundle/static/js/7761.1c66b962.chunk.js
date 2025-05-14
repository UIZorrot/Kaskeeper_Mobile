"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[7761],{

/***/ 80590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ NavTabBar)
/* harmony export */ });
/* unused harmony export TabButton */
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43658);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5005);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66916);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98505);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40083);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49349);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33652);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78602);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80212);
/* harmony import */ var _ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5579);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__]);
([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */









// 是否浏览器中打开

let isInTab = false;
const isWindowOpenTab = async () => {
  isInTab = await (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .extensionIsInTab */ .kn)();
};
isWindowOpenTab();
function NavTabBar(_ref) {
  let {
    tab
  } = _ref;
  // TODO: 预留给Marketplace, columns={4}
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .x, {
    columns: !isInTab ? 4 : 3,
    style: {
      width: '100%',
      height: '60px',
      backgroundColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.bg2,
      borderTop: '1px solid #f4f4f4',
      boxShadow: '0 -1px 6px 1px hsla(0, 0%, 42.4%, .1)'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabButton, {
      tabName: "home",
      icon: "wallet",
      isActive: tab === 'home'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabButton, {
      tabName: "mint",
      icon: "grid",
      isActive: tab === 'mint'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabButton, {
      tabName: "settings",
      icon: "settings",
      isActive: tab === 'settings'
    }), !isInTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabButton, {
      tabName: "expand",
      isActive: tab === 'expand'
    })]
  });
}
function TabButton(_ref2) {
  let {
    tabName,
    icon,
    isActive
  } = _ref2;
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__/* .useNavigate */ .Z)();
  const unreadApp = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useUnreadAppSummary */ .kg)();
  const readTab = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useReadTab */ .lx)();
  const isInTab = (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .useExtensionIsInTab */ .VI)();

  // Hooks
  const openExtensionInTab = (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .useOpenExtensionInTab */ .pI)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .V, {
    justifyCenter: true,
    itemsCenter: true,
    gap: 'zero',
    onClick: e => {
      if (tabName === 'home') {
        navigate('MainScreen');
      } else if (tabName === 'mint') {
        navigate('ToolScreen');
      } else if (tabName === 'app') {
        navigate('DiscoverTabScreen');
        readTab('app');
      } else if (tabName === 'settings') {
        navigate('SettingsTabScreen');
      } else if (tabName === 'expand') {
        openExtensionInTab();
      }
    },
    children: [tabName === 'home' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'mint' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'settings' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'expand' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BaseView__WEBPACK_IMPORTED_MODULE_3__/* .BaseView */ .P, {
      style: {
        position: 'relative'
      },
      children: tabName === 'app' && unreadApp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BaseView__WEBPACK_IMPORTED_MODULE_3__/* .BaseView */ .P, {
        style: {
          position: 'absolute',
          bottom: 20,
          left: 5,
          width: 5,
          height: 5,
          backgroundColor: 'red',
          borderRadius: '50%'
        }
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97761:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Deploy)
/* harmony export */ });
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71288);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17508);
/* harmony import */ var _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80590);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75049);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36904);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43168);
/* harmony import */ var _ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51195);
/* harmony import */ var _ui_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11846);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13108);
/* harmony import */ var _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(49211);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87164);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(86990);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(73357);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(6757);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(14073);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60346);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7425);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(45989);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96540);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(12664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__, _ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_3__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_4__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__, _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__]);
([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__, _ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_3__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_4__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__, _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























// 自定义按钮样式

const StyledButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_ref => {
  let {
    theme
  } = _ref;
  return {
    marginTop: theme.spacing(1),
    borderRadius: theme.spacing(1),
    textTransform: 'none',
    fontWeight: 600
  };
});
function Deploy() {
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  const currentNetworkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useNetworkType */ .iP)();
  const currentKeyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useCurrentKeyring */ .KZ)();
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useUserPrivateKey */ .N2)();
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_4__/* .useNavigate */ .Z)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .j)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useAccountAddress */ .PJ)();
  const {
    values,
    handleChange,
    handleBlur,
    errors
  } = (0,formik__WEBPACK_IMPORTED_MODULE_20__/* .useFormik */ .Wx)({
    initialValues: {
      ticker: '',
      maxSupply: 100000000,
      decimals: 8,
      perMint: 100,
      preMintAmount: 0,
      fee: ''
    },
    validationSchema,
    onSubmit: () => {
      console.log('values');
    }
  });
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const [sending, setSending] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const [tickerValid, setTickerValid] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const checkTickerValid = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(async () => {
    var _jsonData$result, _jsonData$result$;
    if (!values.ticker || errors !== null && errors !== void 0 && errors.ticker || values.ticker.length < 4 || values.ticker.length > 6) {
      return;
    }
    setLoading(true);
    let result;
    if (currentNetworkType == kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Mainnet) {
      result = await fetch(`https://api.kasplex.org/v1/krc20/token/${values.ticker}`);
    } else {
      result = await fetch(`https://tn10api.kasplex.org/v1/krc20/token/${values.ticker}`);
    }
    const jsonData = await result.json();
    setTickerValid((jsonData === null || jsonData === void 0 ? void 0 : (_jsonData$result = jsonData.result) === null || _jsonData$result === void 0 ? void 0 : (_jsonData$result$ = _jsonData$result[0]) === null || _jsonData$result$ === void 0 ? void 0 : _jsonData$result$.state) === 'unused');
    setLoading(false);
  }, [values.ticker, errors]);
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(() => {
    if (!values.ticker || errors !== null && errors !== void 0 && errors.ticker || values.ticker.length < 4 || values.ticker.length > 6) {
      return;
    }
    checkTickerValid();
  }, [values.ticker, errors]);
  const handleDeploy = async () => {
    setSending(true);
    const refactorSupply = new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A(values.maxSupply).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A(10).pow(values.decimals)).toString();
    const refactorPerMint = new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A(values.perMint).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A(10).pow(values.decimals)).toString();
    const refactorPremine = new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A(values.preMintAmount).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A(10).pow(values.decimals)).toString();
    // privateKey network, ticker , priorityFeeValue, max, lim

    const networkName = currentNetworkType === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Mainnet ? 'mainnet' : currentNetworkType === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Testnet ? 'testnet-10' : 'devnet';
    const result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__/* .krc20_deploy */ .xX)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, values.ticker, 2, refactorSupply, refactorPerMint, values.decimals, Number(refactorPremine));
    if (result !== null && result !== void 0 && result.status) {
      setSending(false);
      dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_9__/* .transactionsActions */ .$A.updateNativeTxs({
        from: address,
        info: {
          type: _ui_types__WEBPACK_IMPORTED_MODULE_10__/* .TXTypes */ .Y.Deploy,
          amount: '',
          max: refactorSupply,
          lim: refactorPerMint,
          pre: refactorPremine,
          dec: values.decimals,
          tick: values.ticker,
          from: address,
          to: '',
          hash: result === null || result === void 0 ? void 0 : result.hash,
          time: dayjs__WEBPACK_IMPORTED_MODULE_13___default()().valueOf(),
          status: 'success'
        }
      }));
      const rawtxinfo = {
        "to": address,
        "amountSompi": parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .parseUnits */ .XS)(refactorSupply, values.decimals)),
        "tick": values.ticker
      };
      navigate('TxSuccessScreen', {
        txid: result === null || result === void 0 ? void 0 : result.hash,
        rawtx: rawtxinfo,
        type: "Deploy"
      });
    } else {
      setSending(false);
      tools.toastError("Failed to deploy KRC20");
      dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_9__/* .transactionsActions */ .$A.updateNativeTxs({
        from: address,
        info: {
          type: _ui_types__WEBPACK_IMPORTED_MODULE_10__/* .TXTypes */ .Y.Deploy,
          amount: '',
          max: refactorSupply,
          lim: refactorPerMint,
          pre: refactorPremine,
          dec: values.decimals,
          tick: values.ticker,
          from: address,
          to: '',
          hash: result === null || result === void 0 ? void 0 : result.hash,
          time: dayjs__WEBPACK_IMPORTED_MODULE_13___default()().valueOf(),
          status: 'Failed'
        }
      }));
    }
  };
  const [btnText, disabled] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useMemo)(() => {
    const checkValues = Object.entries(values).filter(item => !['fee', 'preMintAmount'].includes(item[0])).some(item => !item[1]);
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(errors) && !checkValues) {
      return ['Deploy', false];
    } else if (sending) {
      return ['Deploy', true];
    } else if (!values.ticker && !tickerValid) {
      return ['Deploy', true];
    } else {
      return ['Deploy', false];
    }
  }, [values, errors, sending, tickerValid]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      onBack: () => navigate('ToolScreen'),
      RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .NodeStatus */ .zI, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
          variant: "h5",
          fontWeight: 700,
          children: "Deploy Krc20"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
          variant: "body2",
          color: "textSecondary",
          children: "It takes 1 KAS as commission and 1000 KAS as gasfee to deploy."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            children: "Ticker"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
            type: "text",
            name: "ticker",
            placeholder: "Ticker",
            fullWidth: true,
            value: values.ticker,
            onChange: handleChange,
            onBlur: handleBlur,
            endAdornment: tickerValid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
              color: "primary"
            }) : loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
              color: "primary",
              size: 20
            }) : 'Deployed',
            error: Boolean(values.ticker && !tickerValid || errors.ticker)
          }), errors.ticker ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            color: "error.main",
            className: "pl-4",
            children: errors.ticker
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            color: "text.secondary",
            children: "Max Supply: 100M"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
            type: "text",
            name: "maxSupply",
            placeholder: "maxSupply",
            fullWidth: true,
            value: values.maxSupply,
            onChange: handleChange,
            onBlur: handleBlur,
            endAdornment: values.decimals ? '' : '',
            error: Boolean(values.maxSupply && errors.maxSupply)
          }), errors.maxSupply ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            color: "error.main",
            className: "pl-4",
            children: errors.maxSupply
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            color: "text.secondary",
            children: "Decimals"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
            type: "text",
            name: "decimals",
            placeholder: "decimals",
            fullWidth: true,
            value: values.decimals,
            onChange: handleChange,
            onBlur: handleBlur,
            error: Boolean(values.decimals && errors.decimals)
          }), errors.decimals ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            color: "error.main",
            className: "pl-4",
            children: errors.decimals
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            color: "text.secondary",
            children: "Amount per mint: 1K"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
            type: "text",
            name: "perMint",
            placeholder: "perMint",
            fullWidth: true,
            value: values.perMint,
            onChange: handleChange,
            onBlur: handleBlur,
            error: Boolean(values.perMint && errors.perMint)
          }), errors.perMint ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            color: "error.main",
            className: "pl-4",
            children: errors.perMint
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            color: "text.secondary",
            children: "Pre-allocation amount  (Optional): "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
            type: "text",
            name: "preMintAmount",
            placeholder: "preMintAmount",
            fullWidth: true,
            value: values.preMintAmount,
            onChange: handleChange,
            onBlur: handleBlur
            //endAdornment="optional"
            ,
            error: Boolean(values.preMintAmount && errors.preMintAmount)
          }), errors.preMintAmount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            color: "error.main",
            className: "pl-4",
            children: errors.preMintAmount
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(StyledButton, {
        variant: "contained",
        color: "primary",
        size: "medium",
        disabled: disabled || sending,
        onClick: handleDeploy,
        endIcon: sending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
          size: 20,
          color: "inherit"
        }) : null,
        children: btnText
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .wi, {
      px: "zero",
      py: "zero",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_3__/* .NavTabBar */ .w, {
        tab: "mint"
      })
    })]
  });
}
const validationSchema = yup__WEBPACK_IMPORTED_MODULE_16__/* .object */ .Ik({
  ticker: yup__WEBPACK_IMPORTED_MODULE_16__/* .string */ .Yj().min(4, 'min 4').max(6, 'max 6').required('Need Ticker name'),
  maxSupply: yup__WEBPACK_IMPORTED_MODULE_16__/* .number */ .ai().required('Need max supply'),
  decimals: yup__WEBPACK_IMPORTED_MODULE_16__/* .number */ .ai().required('Need decimals'),
  perMint: yup__WEBPACK_IMPORTED_MODULE_16__/* .number */ .ai().required('Need Per mint amount'),
  preMintAmount: yup__WEBPACK_IMPORTED_MODULE_16__/* .number */ .ai()
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);