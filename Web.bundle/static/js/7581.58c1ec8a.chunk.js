"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[789,7581],{

/***/ 11641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ IconButton_IconButton)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(1668);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(33139);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(29077);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSimplePaletteValueFilter.js
var createSimplePaletteValueFilter = __webpack_require__(78660);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(25669);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 9 modules
var ButtonBase = __webpack_require__(57445);
// EXTERNAL MODULE: ./node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(73357);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(28466);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/IconButton/iconButtonClasses.js


function getIconButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiIconButton', slot);
}
const iconButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'loading', 'loadingIndicator', 'loadingWrapper']);
/* harmony default export */ const IconButton_iconButtonClasses = (iconButtonClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/IconButton/IconButton.js
'use client';

















const useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    color,
    edge,
    size,
    loading
  } = ownerState;
  const slots = {
    root: ['root', loading && 'loading', disabled && 'disabled', color !== 'default' && `color${(0,capitalize/* default */.A)(color)}`, edge && `edge${(0,capitalize/* default */.A)(edge)}`, `size${(0,capitalize/* default */.A)(size)}`],
    loadingIndicator: ['loadingIndicator'],
    loadingWrapper: ['loadingWrapper']
  };
  return (0,composeClasses/* default */.A)(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.loading && styles.loading, ownerState.color !== 'default' && styles[`color${(0,capitalize/* default */.A)(ownerState.color)}`], ownerState.edge && styles[`edge${(0,capitalize/* default */.A)(ownerState.edge)}`], styles[`size${(0,capitalize/* default */.A)(ownerState.size)}`]];
  }
})((0,memoTheme/* default */.A)(({
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
      '--IconButton-hoverBg': theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
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
})), (0,memoTheme/* default */.A)(({
  theme
}) => ({
  variants: [{
    props: {
      color: 'inherit'
    },
    style: {
      color: 'inherit'
    }
  }, ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette).filter((0,createSimplePaletteValueFilter/* default */.A)()) // check all the used fields in the style below
  .map(([color]) => ({
    props: {
      color
    },
    style: {
      '--IconButton-hoverBg': theme.vars ? `rgba(${(theme.vars || theme).palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)((theme.vars || theme).palette[color].main, theme.palette.action.hoverOpacity)
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
  },
  [`&.${IconButton_iconButtonClasses.loading}`]: {
    color: 'transparent'
  }
})));
const IconButtonLoadingIndicator = (0,styled/* default */.Ay)('span', {
  name: 'MuiIconButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => styles.loadingIndicator
})(({
  theme
}) => ({
  display: 'none',
  position: 'absolute',
  visibility: 'visible',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: (theme.vars || theme).palette.action.disabled,
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: 'flex'
    }
  }]
}));

/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */
const IconButton = /*#__PURE__*/react.forwardRef(function IconButton(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
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
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    ...other
  } = props;
  const loadingId = (0,useId/* default */.A)(idProp);
  const loadingIndicator = loadingIndicatorProp ?? /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.A, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    edge,
    color,
    disabled,
    disableFocusRipple,
    loading,
    loadingIndicator,
    size
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(IconButtonRoot, {
    id: loading ? loadingId : idProp,
    className: (0,clsx/* default */.A)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled || loading,
    ref: ref,
    ...other,
    ownerState: ownerState,
    children: [typeof loading === 'boolean' &&
    /*#__PURE__*/
    // use plain HTML span to minimize the runtime overhead
    (0,jsx_runtime.jsx)("span", {
      className: classes.loadingWrapper,
      style: {
        display: 'contents'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(IconButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState: ownerState,
        children: loading && loadingIndicator
      })
    }), children]
  });
});
 false ? 0 : void 0;
/* harmony default export */ const IconButton_IconButton = (IconButton);

/***/ }),

/***/ 27337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72260);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88658);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87164);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11641);
/* harmony import */ var _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80590);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(73357);
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71288);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43168);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59577);
/* harmony import */ var _Wallet_TxCreateScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36946);
/* harmony import */ var _ui_images_common_contacts_book_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95255);
/* harmony import */ var _ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49353);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96540);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7425);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _MainRoute__WEBPACK_IMPORTED_MODULE_1__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_2__, _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__, _Wallet_TxCreateScreen__WEBPACK_IMPORTED_MODULE_7__, _ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_9__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _MainRoute__WEBPACK_IMPORTED_MODULE_1__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_2__, _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__, _Wallet_TxCreateScreen__WEBPACK_IMPORTED_MODULE_7__, _ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Chown = () => {
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_1__/* .useNavigate */ .Z)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useUserPrivateKey */ .N2)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkType */ .iP)();
  const [drawerVisible, setDrawerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
  const [tickerInfo, setTickerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(null);
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_13__/* .useFormik */ .Wx)({
    initialValues: {
      toAddress: '',
      tickerInfo: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_11__/* .object */ .Ik().shape({
      toAddress: yup__WEBPACK_IMPORTED_MODULE_11__/* .string */ .Yj().required('Please enter valid Recipient').matches(/^(kaspa|kaspatest|kaspadev):[a-z0-9]{32,}$/i, 'Invalid address.'),
      tickerInfo: yup__WEBPACK_IMPORTED_MODULE_11__/* .object */ .Ik().required('Please enter valid ticker')
    }),
    onSubmit: async values => {
      console.log('onSubmit values', values, loading);
      if (loading) return;
      setLoading(true);
      try {
        var _res;
        const networkName = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .NetworkType */ .z1.Mainnet ? 'mainnet' : networkType === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .NetworkType */ .z1.Testnet ? 'testnet-10' : 'devnet';
        let res;
        if (tickerInfo.mod === 'issue') {
          res = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_3__/* .krc20_chown_issue */ .Vk)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.ca, values.toAddress, 0.02);
        } else {
          res = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_3__/* .krc20_chown */ .tq)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.tick, values.toAddress, 0.02);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .Y9, {
      onBack: () => navigate('ToolScreen'),
      title: 'Chown Krc20',
      RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .NodeStatus */ .zI, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .UC, {
      classname: "!px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
            children: "Ticker"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
            name: "tickerInfo",
            onBlur: formik.handleBlur,
            onChange: value => {
              console.log('value', value);
              formik.setFieldValue('tickerInfo', value, true);
              setTickerInfo(value);
            },
            error: Boolean(formik.errors.tickerInfo)
          }), formik.errors.tickerInfo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
            color: "error.main",
            children: formik.errors.tickerInfo
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
            children: "Recipient"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
            name: "toAddress",
            placeholder: "Recipient",
            value: formik.values.toAddress,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            error: formik.touched.toAddress && Boolean(formik.errors.toAddress),
            className: "w-full",
            endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
              onClick: () => setDrawerVisible(true),
              edge: "end",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
                src: _ui_images_common_contacts_book_svg__WEBPACK_IMPORTED_MODULE_8__,
                width: 18,
                height: 18,
                alt: ""
              })
            })
          }), formik.touched.toAddress && formik.errors.toAddress ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
            color: "error.main",
            children: formik.errors.toAddress
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
          className: "space-y-1 mt-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .$n, {
            variant: "contained",
            color: "primary",
            disabled: loading,
            className: "!rounded-lg !h-[42px] w-full",
            onClick: () => formik.handleSubmit(),
            children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
              size: 16,
              color: "inherit",
              className: "mr-1"
            }), "Chown"]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Footer */ .wi, {
      px: "zero",
      py: "zero",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_2__/* .NavTabBar */ .w, {
        tab: "burn"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Wallet_TxCreateScreen__WEBPACK_IMPORTED_MODULE_7__.SelectAddressDrawer, {
      drawerVisible: drawerVisible,
      onClose: () => setDrawerVisible(false),
      handleAddrInput: handleAddrInput
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chown);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 49353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49211);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73357);
/* harmony import */ var _state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43168);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28454);
/* harmony import */ var _state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43658);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);
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
  const network = (0,_state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkType */ .iP)();
  const address = (0,_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAccountAddress */ .PJ)();
  const checkTickerValid = async value => {
    if (!value || value.length < 4) {
      setFetchedTicker(null);
      onChange(null);
      return;
    }
    setLoading(true);
    try {
      const result = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_3__/* .get_krc20_issue_info */ .lW)(network, value);
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    type: "text",
    value: ticker,
    name: name || 'ticker',
    placeholder: "Ticker",
    fullWidth: true,
    autoComplete: "off",
    size: "small",
    className: "!pr-0",
    endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      className: "!text-sm !text-black",
      children: !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(fetchedTicker) && fetchedTicker.state !== "unused" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        color: "primary"
      }) : loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57287);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80212);
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
    columns: !isInTab ? 5 : 4,
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabButton, {
      tabName: "website",
      icon: "settings",
      isActive: tab === 'website'
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
      } else if (tabName === 'website') {
        navigate('WebsiteTabScreen');
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
    }), tabName === 'website' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'expand' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
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

/***/ })

}]);