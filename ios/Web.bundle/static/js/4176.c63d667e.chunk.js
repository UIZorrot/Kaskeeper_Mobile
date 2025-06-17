"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[4176,8804],{

/***/ 25350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ IconButton_IconButton)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(6584);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(55160);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+st_ca8398801f232f1bcfe635abcfad4ec2/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(76440);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(92792);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(88344);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(99528);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(5756);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/ButtonBase/ButtonBase.js + 10 modules
var ButtonBase = __webpack_require__(11564);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28216);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6616);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(47080);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/IconButton/iconButtonClasses.js


function getIconButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.cp)('MuiIconButton', slot);
}
const iconButtonClasses = (0,generateUtilityClasses/* default */.c)('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
/* harmony default export */ const IconButton_iconButtonClasses = (iconButtonClasses);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/IconButton/IconButton.js
'use client';















const useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    color,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', color !== 'default' && `color${(0,capitalize/* default */.c)(color)}`, edge && `edge${(0,capitalize/* default */.c)(edge)}`, `size${(0,capitalize/* default */.c)(size)}`]
  };
  return (0,composeClasses/* default */.c)(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = (0,styled/* default */.cp)(ButtonBase/* default */.c, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'default' && styles[`color${(0,capitalize/* default */.c)(ownerState.color)}`], ownerState.edge && styles[`edge${(0,capitalize/* default */.c)(ownerState.edge)}`], styles[`size${(0,capitalize/* default */.c)(ownerState.size)}`]];
  }
})((0,memoTheme/* default */.c)(({
  theme
}) => ({
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: '50%',
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: props => !props.disableRipple,
    style: {
      '--IconButton-hoverBg': theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.W4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
      '&:hover': {
        backgroundColor: 'var(--IconButton-hoverBg)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  }, {
    props: {
      edge: 'start'
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: 'start',
      size: 'small'
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: 'end'
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: 'end',
      size: 'small'
    },
    style: {
      marginRight: -3
    }
  }]
})), (0,memoTheme/* default */.c)(({
  theme
}) => ({
  variants: [{
    props: {
      color: 'inherit'
    },
    style: {
      color: 'inherit'
    }
  }, ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.c)()) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.c)()) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      '--IconButton-hoverBg': theme.vars ? `rgba(${(theme.vars || theme).palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.W4)((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: 'small'
    },
    style: {
      padding: 5,
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      padding: 12,
      fontSize: theme.typography.pxToRem(28)
    }
  }],
  [`&.${IconButton_iconButtonClasses.disabled}`]: {
    backgroundColor: 'transparent',
    color: (theme.vars || theme).palette.action.disabled
  }
})));

/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */
const IconButton = /*#__PURE__*/react.forwardRef(function IconButton(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.C)({
    props: inProps,
    name: 'MuiIconButton'
  });
  const {
    edge = false,
    children,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium',
    ...other
  } = props;
  const ownerState = {
    ...props,
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(IconButtonRoot, {
    className: (0,clsx/* default */.c)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref,
    ...other,
    ownerState: ownerState,
    children: children
  });
});
 false ? 0 : void 0;
/* harmony default export */ const IconButton_IconButton = (IconButton);

/***/ }),

/***/ 6860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92469);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87136);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25350);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75776);
/* harmony import */ var _state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17534);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57360);
/* harmony import */ var _state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24468);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__]);
_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const KRC20TokenInput = _ref => {
  let {
    type,
    name,
    onChange,
    onBlur,
    error
  } = _ref;
  const [ticker, setTicker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [fetchedTicker, setFetchedTicker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const network = (0,_state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkType */ .qS)();
  const address = (0,_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAccountAddress */ .mA)();
  const checkTickerValid = async value => {
    if (!value || value.length < 4) {
      setFetchedTicker(null);
      onChange(null);
      return;
    }
    setLoading(true);
    try {
      const result = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_3__/* .get_krc20_issue_info */ .Oy)(network, value);
      console.log('result', result);
      if (!result || !result.mod || type === 'issue' && result.mod !== 'issue' || result.to !== address) {
        setFetchedTicker(null);
        onChange(null);
        return;
      }
      setFetchedTicker(result);
      return onChange(result);
    } catch (error) {
      onChange(null);
      setFetchedTicker(null);
      console.error('Error fetching ticker:', error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (!ticker || ticker.length < 4) {
  //     setFetchedTicker(null)
  //     onChange(null)
  //     return 
  //   }
  //   checkTickerValid();
  // }, [ticker]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c, {
    type: "text",
    value: ticker,
    name: name || 'ticker',
    placeholder: "Ticker",
    fullWidth: true,
    autoComplete: "off",
    size: "small",
    className: "!pr-0",
    endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
      className: "!text-sm !text-black",
      children: !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(fetchedTicker) && fetchedTicker.state !== "unused" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
        color: "primary"
      }) : loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
        color: "primary",
        size: 20
      }) : 'Unused'
    }),
    onBlur: onBlur,
    onChange: e => {
      const nonDigitOnlyRegex = /^\D*$/; // 匹配完全不含数字的字符串
      const digitsRegex = /\d+/g; // 匹配所有数字部分
      const value = e.target.value;
      // if (!nonDigitOnlyRegex.test(value)) {
      //   value = e.target.value.replace(digitsRegex, '')
      // }
      setTicker(value);
      checkTickerValid(value);
      // saveStateToLocalStorage();  // 保存ticker状态
    },
    error: error // {!ticker || ticker.length < 4 || isEmpty(fetchedTicker) || fetchedTicker.state === "unused"}
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KRC20TokenInput);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82724:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83120);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77980);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37656);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70884);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(75776);
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60172);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17534);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40256);
/* harmony import */ var _Wallet_EnterRecipientAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85404);
/* harmony import */ var _ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6860);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96651);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96522);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55043);
/* harmony import */ var _ui_context_RPCStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20084);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _MainRoute__WEBPACK_IMPORTED_MODULE_1__, _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_2__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__, _Wallet_EnterRecipientAddress__WEBPACK_IMPORTED_MODULE_6__, _ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_7__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _MainRoute__WEBPACK_IMPORTED_MODULE_1__, _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_2__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__, _Wallet_EnterRecipientAddress__WEBPACK_IMPORTED_MODULE_6__, _ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Chown = () => {
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_1__/* .useNavigate */ .i)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useUserPrivateKey */ .yK)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkType */ .qS)();
  const [drawerVisible, setDrawerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const [tickerInfo, setTickerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);
  const {
    rpcConnectStatus
  } = (0,_ui_context_RPCStatus__WEBPACK_IMPORTED_MODULE_10__/* .useRPCStatusContext */ .U)();
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_12__/* .useFormik */ .KO)({
    initialValues: {
      toAddress: '',
      tickerInfo: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_9__/* .object */ .kt().shape({
      toAddress: yup__WEBPACK_IMPORTED_MODULE_9__/* .string */ .Qb().required('Please enter valid Recipient').matches(/^(kaspa|kaspatest|kaspadev):[a-z0-9]{32,}$/i, 'Invalid address.'),
      tickerInfo: yup__WEBPACK_IMPORTED_MODULE_9__/* .object */ .kt().required('Please enter valid ticker')
    }),
    onSubmit: async values => {
      console.log('onSubmit values', values, loading);
      if (loading) return;
      setLoading(true);
      try {
        var _res;
        const networkName = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .U5.Mainnet ? 'mainnet' : networkType === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .U5.Testnet ? 'testnet-10' : 'devnet';
        let res;
        if (tickerInfo.mod === 'issue') {
          res = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_2__/* .krc20_chown_issue */ .k1)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.ca, values.toAddress, 0.02);
        } else {
          res = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_2__/* .krc20_chown */ .EN)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.tick, values.toAddress, 0.02);
        }
        if ((_res = res) !== null && _res !== void 0 && _res.status) {
          const rawtxinfo = {
            "to": values.toAddress,
            // "amountSompi": 10 ** 8,
            "tick": (tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.name) || (tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.tick)
          };
          navigate('TxSuccessScreen', {
            txid: "Multi-Transaction",
            rawtx: rawtxinfo,
            type: "Chown"
          });
        }
      } catch (error) {
        console.log('handleChown error', error);
      } finally {
        setLoading(false);
      }
    }
  });
  const handleAddrInput = address => {
    formik.setFieldValue('toAddress', address);
    setDrawerVisible(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .ek, {
      onBack: () => navigate('ToolScreen', null, true),
      title: 'Chown Krc20',
      parentName: "ToolScreen",
      RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .NodeStatus */ .s9, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .kP, {
      classname: "!px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c, {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
            children: "Ticker"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c, {
            name: "tickerInfo",
            onBlur: formik.handleBlur,
            onChange: value => {
              console.log('value', value);
              formik.setFieldValue('tickerInfo', value, true);
              setTickerInfo(value);
            },
            error: !rpcConnectStatus || Boolean(formik.errors.tickerInfo)
          }), rpcConnectStatus ? formik.errors.tickerInfo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
            color: "error.main",
            children: formik.errors.tickerInfo
          }) : null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
            color: "error",
            children: "RPC Disconnected"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
            children: "Recipient"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Wallet_EnterRecipientAddress__WEBPACK_IMPORTED_MODULE_6__.AddressInput, {
            name: "toAddress",
            placeholder: 'Recipient Address',
            value: formik.values.toAddress,
            error: formik.touched.toAddress && Boolean(formik.errors.toAddress),
            onChange: e => {
              formik.setFieldValue('toAddress', e.target.value);
              formik.validateField('toAddress');
            },
            onBlur: formik.handleBlur
          }), formik.touched.toAddress && formik.errors.toAddress ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
            color: "error.main",
            children: formik.errors.toAddress
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c, {
          className: "space-y-1 mt-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .q, {
            variant: "contained",
            color: "primary",
            disabled: loading || !rpcConnectStatus,
            className: "!rounded-lg !h-[42px] w-full",
            onClick: () => formik.handleSubmit(),
            children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .c, {
              size: 16,
              color: "inherit",
              className: "mr-1"
            }), "Chown"]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Wallet_EnterRecipientAddress__WEBPACK_IMPORTED_MODULE_6__.SelectAddressDrawer, {
      drawerVisible: drawerVisible,
      onClose: () => setDrawerVisible(false),
      handleAddrInput: handleAddrInput
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chown);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);