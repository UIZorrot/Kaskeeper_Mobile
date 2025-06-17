(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[8981,8804],{

/***/ 7886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ Avatar_Avatar)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(6584);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(55160);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(92792);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(88344);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(5756);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/createSvgIcon.js + 2 modules
var createSvgIcon = __webpack_require__(19408);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/internal/svg-icons/Person.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const Person = ((0,createSvgIcon/* default */.c)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6616);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@6.2.0_@types+react@18.2.55_react@18.2.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(47080);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Avatar/avatarClasses.js


function getAvatarUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.cp)('MuiAvatar', slot);
}
const avatarClasses = (0,generateUtilityClasses/* default */.c)('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);
/* harmony default export */ const Avatar_avatarClasses = ((/* unused pure expression or super */ null && (avatarClasses)));
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/utils/useSlot.js
var useSlot = __webpack_require__(39500);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@mui+material@6.2.0_@emotion+react@11.14.0_@types+react@18.2.55_react@18.2.0__@emotion+_2baf7232eb08e8a43ff88af9225f18f8/node_modules/@mui/material/Avatar/Avatar.js
'use client';












const useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    colorDefault
  } = ownerState;
  const slots = {
    root: ['root', variant, colorDefault && 'colorDefault'],
    img: ['img'],
    fallback: ['fallback']
  };
  return (0,composeClasses/* default */.c)(slots, getAvatarUtilityClass, classes);
};
const AvatarRoot = (0,styled/* default */.cp)('div', {
  name: 'MuiAvatar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.colorDefault && styles.colorDefault];
  }
})((0,memoTheme/* default */.c)(({
  theme
}) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: '50%',
  overflow: 'hidden',
  userSelect: 'none',
  variants: [{
    props: {
      variant: 'rounded'
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius
    }
  }, {
    props: {
      variant: 'square'
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: true
    },
    style: {
      color: (theme.vars || theme).palette.background.default,
      ...(theme.vars ? {
        backgroundColor: theme.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: theme.palette.grey[400],
        ...theme.applyStyles('dark', {
          backgroundColor: theme.palette.grey[600]
        })
      })
    }
  }]
})));
const AvatarImg = (0,styled/* default */.cp)('img', {
  name: 'MuiAvatar',
  slot: 'Img',
  overridesResolver: (props, styles) => styles.img
})({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  // Handle non-square image.
  objectFit: 'cover',
  // Hide alt text.
  color: 'transparent',
  // Hide the image broken icon, only works on Chrome.
  textIndent: 10000
});
const AvatarFallback = (0,styled/* default */.cp)(Person, {
  name: 'MuiAvatar',
  slot: 'Fallback',
  overridesResolver: (props, styles) => styles.fallback
})({
  width: '75%',
  height: '75%'
});
function useLoaded({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet
}) {
  const [loaded, setLoaded] = react.useState(false);
  react.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }
    setLoaded(false);
    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded('error');
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }
    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);
  return loaded;
}
const Avatar = /*#__PURE__*/react.forwardRef(function Avatar(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.C)({
    props: inProps,
    name: 'MuiAvatar'
  });
  const {
    alt,
    children: childrenProp,
    className,
    component = 'div',
    slots = {},
    slotProps = {},
    imgProps,
    sizes,
    src,
    srcSet,
    variant = 'circular',
    ...other
  } = props;
  let children = null;
  const ownerState = {
    ...props,
    component,
    variant
  };

  // Use a hook instead of onError on the img element to support server-side rendering.
  const loaded = useLoaded({
    ...imgProps,
    ...(typeof slotProps.img === 'function' ? slotProps.img(ownerState) : slotProps.img),
    src,
    srcSet
  });
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== 'error';
  ownerState.colorDefault = !hasImgNotFailing;
  // This issue explains why this is required: https://github.com/mui/material-ui/issues/42184
  delete ownerState.ownerState;
  const classes = useUtilityClasses(ownerState);
  const [ImgSlot, imgSlotProps] = (0,useSlot/* default */.c)('img', {
    className: classes.img,
    elementType: AvatarImg,
    externalForwardedProps: {
      slots,
      slotProps: {
        img: {
          ...imgProps,
          ...slotProps.img
        }
      }
    },
    additionalProps: {
      alt,
      src,
      srcSet,
      sizes
    },
    ownerState
  });
  if (hasImgNotFailing) {
    children = /*#__PURE__*/(0,jsx_runtime.jsx)(ImgSlot, {
      ...imgSlotProps
    });
    // We only render valid children, non valid children are rendered with a fallback
    // We consider that invalid children are all falsy values, except 0, which is valid.
  } else if (!!childrenProp || childrenProp === 0) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/(0,jsx_runtime.jsx)(AvatarFallback, {
      ownerState: ownerState,
      className: classes.fallback
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AvatarRoot, {
    as: component,
    className: (0,clsx/* default */.c)(classes.root, className),
    ref: ref,
    ...other,
    ownerState: ownerState,
    children: children
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Avatar_Avatar = (Avatar);

/***/ }),

/***/ 67472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
__webpack_unused_export__ = ({
  value: true
});
exports.c = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(68184));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(67204));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var _debounce = _interopRequireDefault(__webpack_require__(72224));
var _omit = _interopRequireDefault(__webpack_require__(79132));
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var _reactNode = __webpack_require__(51408);
var _type = __webpack_require__(19968);
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var SpinSizes = (0, _type.tuple)('small', 'default', 'large');
// Render indicator
var defaultIndicator = null;
function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = "".concat(prefixCls, "-dot");
  // should not be render default indicator when indicator value is null
  if (indicator === null) {
    return null;
  }
  if ((0, _reactNode.isValidElement)(indicator)) {
    return (0, _reactNode.cloneElement)(indicator, {
      className: (0, _classnames["default"])(indicator.props.className, dotClassName)
    });
  }
  if ((0, _reactNode.isValidElement)(defaultIndicator)) {
    return (0, _reactNode.cloneElement)(defaultIndicator, {
      className: (0, _classnames["default"])(defaultIndicator.props.className, dotClassName)
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])(dotClassName, "".concat(prefixCls, "-dot-spin"))
  }, /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }), /*#__PURE__*/React.createElement("i", {
    className: "".concat(prefixCls, "-dot-item")
  }));
}
function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}
var Spin = function Spin(props) {
  var prefixCls = props.spinPrefixCls,
    _props$spinning = props.spinning,
    customSpinning = _props$spinning === void 0 ? true : _props$spinning,
    delay = props.delay,
    className = props.className,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size,
    tip = props.tip,
    wrapperClassName = props.wrapperClassName,
    style = props.style,
    children = props.children,
    restProps = __rest(props, ["spinPrefixCls", "spinning", "delay", "className", "size", "tip", "wrapperClassName", "style", "children"]);
  var _React$useState = React.useState(function () {
      return customSpinning && !shouldDelay(customSpinning, delay);
    }),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    spinning = _React$useState2[0],
    setSpinning = _React$useState2[1];
  React.useEffect(function () {
    var updateSpinning = (0, _debounce["default"])(function () {
      setSpinning(customSpinning);
    }, delay);
    updateSpinning();
    return function () {
      var _a;
      (_a = updateSpinning === null || updateSpinning === void 0 ? void 0 : updateSpinning.cancel) === null || _a === void 0 ? void 0 : _a.call(updateSpinning);
    };
  }, [delay, customSpinning]);
  var isNestedPattern = function isNestedPattern() {
    return typeof children !== 'undefined';
  };
  var renderSpin = function renderSpin(_ref) {
    var direction = _ref.direction;
    var spinClassName = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-sm"), size === 'small'), "".concat(prefixCls, "-lg"), size === 'large'), "".concat(prefixCls, "-spinning"), spinning), "".concat(prefixCls, "-show-text"), !!tip), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
    // fix https://fb.me/react-unknown-prop
    var divProps = (0, _omit["default"])(restProps, ['indicator', 'prefixCls']);
    var spinElement = /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
      style: style,
      className: spinClassName,
      "aria-live": "polite",
      "aria-busy": spinning
    }), renderIndicator(prefixCls, props), tip ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-text")
    }, tip) : null);
    if (isNestedPattern()) {
      var containerClassName = (0, _classnames["default"])("".concat(prefixCls, "-container"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-blur"), spinning));
      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
        className: (0, _classnames["default"])("".concat(prefixCls, "-nested-loading"), wrapperClassName)
      }), spinning && /*#__PURE__*/React.createElement("div", {
        key: "loading"
      }, spinElement), /*#__PURE__*/React.createElement("div", {
        className: containerClassName,
        key: "container"
      }, children));
    }
    return spinElement;
  };
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderSpin);
};
var SpinFC = function SpinFC(props) {
  var customizePrefixCls = props.prefixCls;
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var spinPrefixCls = getPrefixCls('spin', customizePrefixCls);
  var spinClassProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {
    spinPrefixCls: spinPrefixCls
  });
  return /*#__PURE__*/React.createElement(Spin, (0, _extends2["default"])({}, spinClassProps));
};
SpinFC.setDefaultIndicator = function (indicator) {
  defaultIndicator = indicator;
};
if (false) {}
var _default = exports.c = SpinFC;

/***/ }),

/***/ 34344:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(89148);
__webpack_require__(33035);

/***/ }),

/***/ 5252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ FeeRateBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48818);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67196);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86836);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46476);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2488);
/* eslint-disable no-unused-vars */








var FeeRateType = /*#__PURE__*/function (FeeRateType) {
  FeeRateType[FeeRateType["NONE"] = 0] = "NONE";
  FeeRateType[FeeRateType["AVG"] = 1] = "AVG";
  FeeRateType[FeeRateType["FAST"] = 2] = "FAST";
  FeeRateType[FeeRateType["CUSTOM"] = 3] = "CUSTOM";
  return FeeRateType;
}(FeeRateType || {});
function FeeRateBar(_ref) {
  let {
    feeRate,
    onChange
  } = _ref;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .useWallet */ .e6)();
  const [feeOptions, setFeeOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    wallet.getFeeSummary().then(v => {
      setFeeOptions([...v.list, {
        title: 'Custom',
        feeRate: 0
      }]);
    });
  }, []);
  const [feeOptionIndex, setFeeOptionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(FeeRateType.NONE);
  const [feeRateInputVal, setFeeRateInputVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    switch (feeRate) {
      case null:
        if (feeOptionIndex !== FeeRateType.NONE) setFeeOptionIndex(FeeRateType.NONE);
        break;
      case 0:
        if (feeOptionIndex !== FeeRateType.NONE) setFeeOptionIndex(FeeRateType.NONE);
        break;
      case 10:
        if (feeOptionIndex !== FeeRateType.AVG) setFeeOptionIndex(FeeRateType.AVG);
        break;
      case 20:
        if (feeOptionIndex !== FeeRateType.FAST) setFeeOptionIndex(FeeRateType.FAST);
        break;
      default:
        if (feeOptionIndex !== FeeRateType.CUSTOM) setFeeOptionIndex(FeeRateType.CUSTOM);
        setFeeRateInputVal(feeRate.toString());
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const defaultOption = feeOptions[1];
    const defaultVal = defaultOption ? defaultOption.feeRate : 1;
    let val = defaultVal;
    if (feeOptionIndex === FeeRateType.CUSTOM) {
      val = parseInt(feeRateInputVal) || 0;
    } else if (feeOptions.length > 0) {
      val = feeOptions[feeOptionIndex].feeRate;
    }
    onChange(val);
  }, [feeOptions, feeOptionIndex, feeRateInputVal]);
  const adjustFeeRateInput = inputVal => {
    let val = parseInt(inputVal);
    if (!val) {
      setFeeRateInputVal('');
      return;
    }
    const defaultOption = feeOptions[0];
    const defaultVal = defaultOption ? defaultOption.feeRate : 1;
    if (val <= 0) {
      val = defaultVal;
    }
    setFeeRateInputVal(val.toString());
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .o, {
    mt: "lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_4__/* .Row */ .W, {
      justifyCenter: true,
      children: feeOptions.map((v, index) => {
        const selected = index === feeOptionIndex;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          onClick: () => {
            setFeeOptionIndex(index);
          },
          style: {
            borderWidth: 1,
            borderColor: 'rgba(10, 36, 99, 0.15)',
            // 更柔和的灰色
            height: 96,
            width: '25%',
            textAlign: 'center',
            padding: 4,
            borderRadius: 12,
            // 更大的圆角，更现代
            display: 'flex',
            flexDirection: 'column',
            justifyContent: v.title !== 'Custom' ? 'space-between' : 'space-around',
            alignItems: 'center',
            // 增加水平居中
            cursor: 'pointer',
            backgroundColor: selected ? '#E6FCF6' : 'white',
            // 默认白色背景
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            // 添加轻微阴影
            transition: 'all 0.2s ease-in-out',
            // 添加平滑过渡效果
            ...(selected && {
              borderColor: '#25F7C0',
              // 选中时边框跟随主色
              color: 'white' // 文字变白以匹配背景
            }),
            '&:hover': !selected && {
              backgroundColor: '#f5f5f5',
              // 未选中时悬停变浅灰
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' // 悬停时阴影加深
            }
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .a, {
            text: v.title,
            textCenter: true,
            style: {
              width: '100%',
              color: '#0A2463',
              borderRadius: 6,
              padding: '5px 0',
              fontSize: '12px',
              background: v.title !== 'Custom' ? 'linear-gradient( 315deg, #02DDA4 0%, #29FAC4 100%)' : 'transparent'
            }
          }), v.title !== 'Custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .a, {
            text: "".concat(v.feeRate),
            size: "xxs",
            textCenter: true,
            style: {
              fontSize: '15px',
              fontWeight: 500,
              color: '#0A2463'
            }
          }), v.title !== 'Custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .a, {
            text: "".concat(v.desc),
            size: "xxs",
            textCenter: true,
            style: {
              fontSize: '11px',
              color: '#0A2463',
              margin: '0 0 6px 0',
              minHeight: 26
            }
          })]
        }, v.title);
      })
    }), feeOptionIndex === FeeRateType.CUSTOM && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Column__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .o, {
      mt: "lg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .EF, {
        preset: "amount",
        placeholder: 'multiple of network fee',
        value: feeRateInputVal,
        onChange: e => {
          adjustFeeRateInput(e.target.value);
        }
        // onBlur={() => {
        //   const val = parseInt(feeRateInputVal) + '';
        //   setFeeRateInputVal(val);
        // }}
        ,
        autoFocus: true
      })
    })]
  });
}

/***/ }),

/***/ 30160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13976);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57360);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2488);




// import { Tag } from "@mui/icons-material"

const KnsDomain = _ref => {
  let {
    networkType,
    address
  } = _ref;
  const [domianInfo, setDomianInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const kaspaAddressPattern = /^(kaspa|kaspatest|kaspadev):[a-z0-9]{32,}$/i;
    if (!kaspaAddressPattern.test(address)) {
      return setDomianInfo(null);
    }
    (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_2__/* .get_kns_list */ .GW)(networkType, {
      owner: address,
      page: 1,
      pageSize: 1,
      type: 'domain'
    }).then(res => {
      var _res$data, _res$data$data, _res$data$data$assets, _res$data2, _res$data2$data, _res$data2$data$asset;
      console.log((_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : (_res$data$data$assets = _res$data$data.assets) === null || _res$data$data$assets === void 0 ? void 0 : _res$data$data$assets[0]);
      setDomianInfo((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : (_res$data2$data$asset = _res$data2$data.assets) === null || _res$data2$data$asset === void 0 ? void 0 : _res$data2$data$asset[0]);
    }).catch(err => {
      setDomianInfo(null);
      console.log('get_kns_list', err);
    });
  }, [address]);
  if (!domianInfo || !domianInfo.asset) return;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .W, {
    style: {
      color: "#0a2463",
      fontSize: 12,
      maxWidth: '100%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      marginTop: 2
    },
    children: ["Domain: ", domianInfo.asset]
  });

  // return <Row mt={'sm'} style={{
  //   color: "#0a2463",
  //   fontSize: 12,
  //   width: '100%',
  //   textOverflow: 'ellipsis',
  //   overflow: 'hidden',
  //   whiteSpace: 'nowrap',
  // }}>
  //   {domianInfo?.asset ? <Tag color="cyan">domain: { domianInfo?.asset }</Tag>}
  // </Row>
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnsDomain);

/***/ }),

/***/ 86256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ LayerSwapOut)
});

// EXTERNAL MODULE: ./src/ui/components/Row/index.tsx + 1 modules
var Row = __webpack_require__(13976);
// EXTERNAL MODULE: ./src/ui/components/Text/index.tsx + 1 modules
var Text = __webpack_require__(46476);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./src/ui/theme/colors.ts
var colors = __webpack_require__(98104);
// EXTERNAL MODULE: ./src/ui/components/ActionComponent/index.tsx + 6 modules
var ActionComponent = __webpack_require__(23848);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@11.18.6_i18next@21.10.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(80864);
// EXTERNAL MODULE: ./src/ui/state/settings/hooks.ts + 1 modules
var hooks = __webpack_require__(17534);
// EXTERNAL MODULE: ./src/shared/types.ts
var types = __webpack_require__(40256);
;// CONCATENATED MODULE: ./src/ui/images/common/retweetOutlined.svg
const retweetOutlined_namespaceObject = __webpack_require__.p + "static/media/retweetOutlined.07c4a066.svg";
// EXTERNAL MODULE: ./src/ui/utils/index.ts + 2 modules
var utils = __webpack_require__(48818);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/LayerSwapOut/index.tsx












function LayerSwapOut(props) {
  const {
    isShowText = true,
    textStyle,
    iconStyle,
    callback
  } = props;
  const tools = (0,ActionComponent/* useTools */.w)();
  const {
    t
  } = (0,useTranslation/* useTranslation */.G)();
  const changeLayerType = (0,hooks/* useChangeLayerTypeCallback */.kz)();
  const currentLayer = (0,hooks/* useLayerType */.wl)();
  const [type, setType] = (0,react.useState)(currentLayer || 'L1');
  const [fontColor, setfontColor] = (0,react.useState)('');
  const wallet = (0,utils/* useWallet */.e6)();
  const handleSwapOut = async () => {
    const newType = type === types/* LayerType */.Y1.L1 ? types/* LayerType */.Y1.L2 : types/* LayerType */.Y1.L1;
    await changeLayerType(newType);
    setType(newType);
    tools.toastSuccess(t("Network type ".concat(newType)));
    if (callback) {
      callback();
    }
    console.log('handleSwapOut');
    // preferenceService.setLayerType(newType);
    // wallet.setLayerType(newType);
  };
  const setColorValue = () => {
    setfontColor(type === types/* LayerType */.Y1.L2 ? colors/* colors */.I.aqua : colors/* colors */.I.dark);
  };
  (0,react.useEffect)(() => {
    setColorValue();
  }, [type]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.W, {
    justifyCenter: true,
    itemsCenter: true,
    style: {
      border: "1px solid ".concat(type === types/* LayerType */.Y1.L2 ? colors/* colors */.I.aqua : 'rgba(10, 36, 99, 0.15)'),
      padding: '4px 10px',
      borderRadius: '25px',
      boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)'
    },
    onClick: handleSwapOut,
    children: [isShowText && /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
      style: {
        color: fontColor,
        ...textStyle
      },
      text: type,
      size: "sm",
      disableTranslate: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: retweetOutlined_namespaceObject,
      width: 18,
      height: 18,
      alt: "",
      style: {
        ...iconStyle,
        color: fontColor
      }
    })]
  });
}

/***/ }),

/***/ 23492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 40020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TxCreateScreen)
/* harmony export */ });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34344);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(67472);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1088);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(83080);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32496);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96651);
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60172);
/* harmony import */ var _background_krc20_l2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34780);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46956);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40256);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23848);
/* harmony import */ var _ui_components_FeeRateBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5252);
/* harmony import */ var _ui_components_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86836);
/* harmony import */ var _ui_components_LayerSwapOut__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(86256);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87748);
/* harmony import */ var _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(81944);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23932);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(77980);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3204);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(17534);
/* harmony import */ var _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(37660);
/* harmony import */ var _ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(96900);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(98104);
/* harmony import */ var _ui_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(95215);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(48818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(37656);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(70884);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(75776);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(87136);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5320);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(80864);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(33220);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(15164);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(63116);
/* harmony import */ var _ui_utils_mathUtils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(39280);
/* harmony import */ var _ui_components_KnsDomain__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(30160);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(59564);
/* harmony import */ var _ui_context_RPCStatus__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(20084);
/* harmony import */ var _EnterRecipientAddress__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(85404);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_4__, _background_krc20_l2__WEBPACK_IMPORTED_MODULE_5__, _ui_components__WEBPACK_IMPORTED_MODULE_8__, _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_14__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_15__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_16__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_20__, _EnterRecipientAddress__WEBPACK_IMPORTED_MODULE_30__]);
([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_4__, _background_krc20_l2__WEBPACK_IMPORTED_MODULE_5__, _ui_components__WEBPACK_IMPORTED_MODULE_8__, _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_14__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_15__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_16__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_20__, _EnterRecipientAddress__WEBPACK_IMPORTED_MODULE_30__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */








































function TxCreateScreen() {
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_32__/* .useLocation */ .IT)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_33__/* .useTranslation */ .G)();
  const {
    activeToken,
    refetchList,
    setActiveToken,
    refreshErc20Tokens
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_15__/* .useAccountContext */ .wB)();
  const accountBalance = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useAccountBalance */ .Id)();
  const safeBalanceOrigin = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_20__/* .useSafeBalance */ .Se)();
  const [safeBalance, setSafeBalance] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(safeBalanceOrigin);
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useUserPrivateKey */ .yK)();
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_16__/* .useNavigate */ .i)();
  const kaspaTx = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_20__/* .useKaspaTx */ .MJ)();
  const [tokenAmount, setTokenAmount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [inputAmount, setInputAmount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(kaspaTx.toSompi > 0 ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .sompiToAmount */ .ei)(kaspaTx.toSompi) : '');
  const [inputAmountUsd, setInputAmountUsd] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const [toInfo, setToInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    address: kaspaTx.toAddress || (state === null || state === void 0 ? void 0 : state.address),
    domain: kaspaTx.toDomain
  });
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useNetworkType */ .qS)();
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const kasPriceOriginal = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useKasPrice */ .Af)();
  const [kasPrice, setKasPrice] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(kasPriceOriginal);
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useAccountAddress */ .mA)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useAccountAddressL2 */ .gt)();
  const [autoAdjust, setAutoAdjust] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const fetchUtxos = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_20__/* .useFetchUtxosCallback */ .b3)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_9__/* .useTools */ .w)();
  const {
    rpcConnectStatus
  } = (0,_ui_context_RPCStatus__WEBPACK_IMPORTED_MODULE_29__/* .useRPCStatusContext */ .U)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setLoading(true);
    fetchUtxos().finally(() => {
      currentLayer !== 'L2' && setLoading(false);
    });
    console.log('activeToken', activeToken);
    return () => {
      console.log('clean up');
      // setActiveToken(null)
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setSafeBalance(safeBalanceOrigin);
  }, [safeBalanceOrigin]);
  const prepareSendKAS = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_20__/* .usePrepareSendKASCallback */ .Y5)();
  const pushKaspaTx = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_20__/* .usePushKaspaTxCallback */ .cl)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useLayerType */ .wl)();
  const [safeSompi, setsafeSompi] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('--');
  const [safeBalanceMax, setSafeBalanceMax] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('--');
  const [safeSompiL2, setsafeSompiL2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('0');
  const [safeBalanceL2, setSafeBalanceL2] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('0');
  const [gasPrices, setGasPrice] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (addressL2) {
      try {
        const getL2Info = async () => {
          const {
            balance
          } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useAccountEthBalance */ .YB)(addressL2, networkType);
          const gasPrice = await getGasPrice(Number(balance));
          setsafeSompiL2(balance);
          setSafeBalanceL2(balance);
          setGasPrice(gasPrice);
        };
        getL2Info();
      } catch (error) {
        console.log('getL2Info error', error);
      } finally {
        setLoading(false);
      }
    }
  }, [currentLayer, addressL2]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const fetchBalance = async () => {
      setKasPrice(kasPriceOriginal);
      setSafeBalance(safeBalanceOrigin);
      if (safeBalance !== '0') {
        setsafeSompi((Number(safeBalance) * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10).toString());
      } else {
        try {
          const temp_url = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_6__/* .OPENAPI_URL_MAINNET */ .AR + '/addresses/' + address + '/balance' : _shared_constant__WEBPACK_IMPORTED_MODULE_6__/* .OPENAPI_URL_TESTNET */ .CS + '/addresses/' + address + '/balance';
          const response = await fetch(temp_url);
          const data = await response.json();
          const balance = Number(data.balance).toString();
          setsafeSompi(balance); // 更新状态
        } catch (error) {
          console.error('Error fetching balance:', error);
          setsafeSompi('--'); // 出错时显示 '--'
        }
      }
    };
    const fetchBalanceL2 = async () => {
      try {
        // const { balance } = await useAccountEthBalance(addressL2);
        // const gasPrice = await getGasPrice(Number(balance))
        setsafeSompi(safeSompiL2);
        setSafeBalance(safeBalanceL2);
        setTxFee(gasPrices);
        setSafeBalanceMax((0,_ui_utils_mathUtils__WEBPACK_IMPORTED_MODULE_26__/* .minus */ .W4)(safeSompiL2, gasPrices));
      } catch (error) {
        setsafeSompi('--');
        setSafeBalance('0');
      }
    };
    if (currentLayer === 'L2' && addressL2) {
      fetchBalanceL2();
    } else if (currentLayer === 'L1') {
      fetchBalance();
    }
  }, [safeBalance, currentLayer, addressL2, safeSompiL2]);
  const toSompi = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => inputAmount ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .amountToSompi */ .s1)(inputAmount) : 0, [inputAmount]);
  const [inputAmountType, setInputAmountType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('kas');
  const dustAmount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .sompiToAmount */ .ei)(_shared_constant__WEBPACK_IMPORTED_MODULE_6__/* .COIN_DUST */ .c9), [_shared_constant__WEBPACK_IMPORTED_MODULE_6__/* .COIN_DUST */ .c9]);
  const [feeRate, setFeeRate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [rawTxInfo, setRawTxInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const [txFee, setTxFee] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [drawerVisible, setDrawerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [feeDrawerVisible, setFeeDrawerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_18__/* .useAppDispatch */ .A)();
  const [enableRBF, setEnableRBF] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [getGasLimit, setGetGasLimit] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);

  // 计算 Gas 价格
  const getGasPrice = async amount => {
    const _inputAmount = Number(amount || inputAmount);
    if (_inputAmount > 0) {
      try {
        const rpc = {
          [_shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Mainnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_6__/* .OPENAPI_RPC_MAINNET_L2 */ .Qj,
          [_shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Testnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_6__/* .OPENAPI_RPC_TESTNET_L2 */ .i8,
          [_shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Devnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_6__/* .OPENAPI_RPC_DEVNET_L2 */ .yb
        }[networkType] || '';
        const web3 = new web3__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .cp3(rpc);
        const valueInWei = ethers__WEBPACK_IMPORTED_MODULE_34__/* .parseEther */ .qy(_inputAmount.toString());
        console.log('valueInWei', toInfo.address, addressL2);
        const gasLimit = await web3.eth.estimateGas({
          to: toInfo.address || addressL2,
          value: valueInWei
        });
        const garFee = (await web3.eth.getFeeData()).gasPrice;
        const calculatedGasPrice = Number(gasLimit) * Number(garFee) / 10 ** 18;
        setGetGasLimit(calculatedGasPrice);
        return calculatedGasPrice;
      } catch (error) {
        console.error('err', error);
        return 0;
      } finally {
        setDisabled(true);
      }
    }
    return 0;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setError('');
    setDisabled(true);

    // L1需要验证rpc是否连接
    if (currentLayer === 'L1' && !rpcConnectStatus) return setError('RPC Disconnected');
    // 地址验证
    if (!toInfo.address || typeof toInfo.address !== 'string') {
      setError(t('Please enter recipient address'));
      return;
    }
    const address = toInfo.address.trim();
    const kaspaAddressPattern = /^(kaspa|kaspatest|kaspadev):[a-z0-9]{32,}$/i;
    const isTestnetAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_35__/* .isAddress */ .C2(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);
    const isMainnetAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_35__/* .isAddress */ .C2(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);
    const isDevAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_35__/* .isAddress */ .C2(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);

    // 检查地址格式是否完全无效
    if (!isTestnetAddress && !isMainnetAddress && !isDevAddress) {
      setError(t('Wrong address format'));
      return;
    }

    // 检查网络匹配
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Testnet && !isTestnetAddress) {
      setError(t('Wrong address format') + ' - ' + t('Testnet requires kaspatest: prefix'));
      return;
    }
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Mainnet && !isMainnetAddress) {
      setError(t('Wrong address format') + ' - ' + t('Mainnet requires kaspa: prefix'));
      return;
    }

    // 验证地址有效性
    if (!(0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .isValidAddress */ .Up)(address)) {
      setError(t('Invalid address'));
      return;
    }

    // 对于 KAS 转账的验证 TODO
    if (!(activeToken !== null && activeToken !== void 0 && activeToken.isToken) && currentLayer === 'L2') {
      const getTxFee = async () => {
        const _safeSompi = Number(safeSompi);
        const _inputAmount = Number(inputAmount);
        const _safeBalanceMax = Number(safeBalanceMax);
        const dustAmountL2 = 0.02;
        if (!toSompi) {
          setError(t('Please enter an amount'));
          return;
        }
        if (_inputAmount < dustAmountL2) {
          setError("Amount must be at least ".concat(dustAmountL2, " eKAS"));
          return;
        }
        if (_inputAmount > _safeSompi || _inputAmount > _safeBalanceMax) {
          setError(t('Amount exceeds your available balance'));
          return;
        }
        setTxFee(getGasLimit);
        setDisabled(false);
      };
      getTxFee();
    } else if (!(activeToken !== null && activeToken !== void 0 && activeToken.isToken)) {
      const _safeSompi = Number(safeSompi);
      if (!toSompi) {
        setError(t('Please enter an amount'));
        return;
      }
      if (toSompi < _shared_constant__WEBPACK_IMPORTED_MODULE_6__/* .COIN_DUST */ .c9) {
        setError("Amount must be at least ".concat(dustAmount, " KAS"));
        return;
      }
      if (toSompi > _safeSompi) {
        setError(t('Amount exceeds your available balance'));
        return;
      }
      if (toInfo.address === kaspaTx.toAddress && toSompi === kaspaTx.toSompi && feeRate === kaspaTx.feeRate) {
        setDisabled(false);
        return;
      }

      //TODO: RPC
      console.log('prepareSendKAS', toInfo, toSompi, feeRate, enableRBF);
      prepareSendKAS({
        toAddressInfo: toInfo,
        toAmount: toSompi,
        feeRate,
        enableRBF
      }).then(data => {
        setTxFee(data !== null && data !== void 0 && data.fee ? Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .sompiToAmount */ .ei)(data.fee)) + 0.001 : 0.001);
        setRawTxInfo(data);
        setDisabled(false);
      }).catch(e => {
        setError(e.message === 'Storage mass exceeds maximum' ? t('Amount is too small') : e.message);
      });
    } else {
      // 对于 KRC20 代币的验证
      if (!tokenAmount) {
        setError(t('Please enter an amount'));
        return;
      }
      console.log('tokenAmount', tokenAmount);
      if ((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .isGreaterThan */ .AL)(tokenAmount, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .parseTokenBalance */ .hH)(activeToken.balance, activeToken.decimals || 8))) {
        setError(t('Amount exceeds your token balance'));
        return;
      }
      setTxFee(Number(0.01));
      setDisabled(false);
    }
  }, [toInfo, inputAmount, tokenAmount, feeRate, enableRBF, activeToken, currentLayer, rpcConnectStatus]);
  const showSafeBalance = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => !new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c(accountBalance.amount).eq(new bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c(safeBalance)), [accountBalance.amount, safeBalance]);
  const dataFromForward = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .useLocationState */ .l1)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (dataFromForward) {
      console.log('dataFromForward', dataFromForward);
      if (dataFromForward.rawTxInfo) {
        const rawtxFromForward = dataFromForward.rawTxInfo.rawtx;
        const result = JSON.parse(rawtxFromForward);
        const toAddress = result.to;
        const inputAmount = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .sompiToAmount */ .ei)(result.amountSompi);
        setInputAmount(inputAmount);
        setInputAmountUsd((Number(inputAmount) * Number(kasPrice)).toLocaleString());
        setFeeRate(result.feeRate);
        setToInfo({
          address: toAddress,
          domain: ''
        });
      }
      if (dataFromForward.address) {
        setToInfo({
          address: dataFromForward.address,
          domain: ''
        });
      }
    }
  }, [dataFromForward]);
  const handleAddrInput = address => {
    setToInfo({
      address,
      domain: ''
    });
    setDrawerVisible(false);
    const input = document.getElementById('address-input');
    if (input) {
      var _Object$getOwnPropert;
      const nativeInputValueSetter = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set;
      nativeInputValueSetter === null || nativeInputValueSetter === void 0 ? void 0 : nativeInputValueSetter.call(input, address);
      const inputEvent = new Event('input', {
        bubbles: true
      });
      input.dispatchEvent(inputEvent);
    } else {
      console.log('address input undefine');
    }
  };
  const [sending, setSending] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const handleTransferKrc20 = async () => {
    var _result;
    console.log('send krc20', '------');
    //privateKeyArg, network, ticker, priorityFeeValue, dest, amount
    setSending(true);
    const networkName = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Mainnet ? 'mainnet' : networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Testnet ? 'testnet-10' : 'devnet';
    let result;
    if (activeToken.mod === 'issue') {
      // issue mode
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_4__/* .krc20_trans_issue */ .QT)(privateKey.hex, networkName, activeToken.ca, txFee * (feeRate <= 0 ? 1 : feeRate), toInfo.address, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .parseUnits */ ._s)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec));
      console.log('send krc20 result', result);
    } else {
      // 普通模式
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_4__/* .krc20_trans */ .G0)(privateKey.hex, networkName, activeToken.tick, txFee * (feeRate <= 0 ? 1 : feeRate), toInfo.address, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .parseUnits */ ._s)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec));
    }
    if ((_result = result) !== null && _result !== void 0 && _result.status) {
      var _result2, _result3;
      dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_21__/* .transactionsActions */ .C4.updateNativeTxs({
        from: address,
        info: {
          ...activeToken,
          type: _ui_types__WEBPACK_IMPORTED_MODULE_23__/* .TXTypes */ .S.TransferKrc20,
          amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .parseUnits */ ._s)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec),
          from: address,
          to: toInfo.address,
          hash: (_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.hash,
          time: dayjs__WEBPACK_IMPORTED_MODULE_25___default()().valueOf(),
          status: 'success'
        }
      }));
      setSending(false);
      const rawtxinfo = {
        to: toInfo.address,
        amountSompi: parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .parseUnits */ ._s)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec)),
        tick: activeToken.tick
      };
      navigate('TxSuccessScreen', {
        txid: (_result3 = result) === null || _result3 === void 0 ? void 0 : _result3.hash,
        rawtx: rawtxinfo,
        type: 'Send'
      });
      refetchList();
      // tools.toastSuccess(`Transfer ${tokenAmount} ${activeToken.tick} to ${toInfo.address}!`)
    } else {
      var _result4, _result5;
      dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_21__/* .transactionsActions */ .C4.updateNativeTxs({
        from: address,
        info: {
          ...activeToken,
          type: _ui_types__WEBPACK_IMPORTED_MODULE_23__/* .TXTypes */ .S.TransferKrc20,
          amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .parseUnits */ ._s)(tokenAmount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec),
          from: address,
          to: toInfo.address,
          hash: (_result4 = result) === null || _result4 === void 0 ? void 0 : _result4.hash,
          time: dayjs__WEBPACK_IMPORTED_MODULE_25___default()().valueOf(),
          status: 'Failed'
        }
      }));
      setSending(false);
      tools.toastError(((_result5 = result) === null || _result5 === void 0 ? void 0 : _result5.msg) || JSON.stringify(result));
    }
  };
  const handleTransferErc20 = async () => {
    // 查询账户余额是否够扣除fee
    if (Number(safeBalanceL2) < 0.01) return tools.toastError('Insufficient balance');
    let networkId = '';
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Mainnet) {
      networkId = 'mainnet';
    } else if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Testnet) {
      networkId = 'testnet-10';
    } else {
      networkId = 'devnet';
    }
    setSending(true);
    let hash = '';
    try {
      if (relayerType === 'L1') {
        const res = await (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_5__/* .send_erc20_with_evm_payload */ .YZ)(networkId, "0x".concat(privateKey.hex), address, txFee, toInfo.address, tokenAmount,
        // '' + Number(tokenAmount) * 10 ** activeToken.decimals,
        activeToken.contractAddress);
        console.log('send_erc20_with_evm_payload', res);
        hash = res.hash;
      } else {
        const res = await (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_5__/* .send_erc20_transaction */ .CT)(toInfo.address, tokenAmount, "0x".concat(privateKey.hex), activeToken.contractAddress);
        console.log('send_erc20_transaction', res);
        hash = res.transactionHash;
      }
      await refreshErc20Tokens();
      const rawTxInfo = {
        to: toInfo.address,
        amountSompi: Number(tokenAmount) * 10 ** 18,
        // ethers.parseUnits(tokenAmount, activeToken.dec),
        tick: activeToken.symbol,
        dec: activeToken.dec
      };
      navigate('TxSuccessScreen', {
        txid: hash,
        rawtx: rawTxInfo,
        type: 'Send'
      });
    } catch (error) {
      console.log('handleTransferErc20 error', error);
    } finally {
      setSending(false);
    }
  };
  const handleLayerSwapOut = () => {
    handleAddrInput('');
    setInputAmount('');
    setInputAmountUsd('');
    setAutoAdjust(false);
    setTxFee(Number(0.00));
    setActiveToken(null);
  };
  const [relayerType, setRelayerType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('L1');
  const handleRelayerSwitch = () => {
    setRelayerType(relayerType === 'L1' ? 'L2' : 'L1');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .c, {
    spinning: loading,
    tip: "Loading...",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Layout */ ._W, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Header */ .ek, {
        onBack: () => navigate('MainScreen'),
        title: "".concat(t('Send'), " ").concat(activeToken ? activeToken.tick : "".concat(currentLayer === 'L2' ? 'e' : '', "KAS")),
        RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .NodeStatus */ .s9, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c, {
        className: "!h-auto flex-1 !justify-start overflow-y-auto px-4 !pb-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .c, {
          className: "flex justify-items-end items-center space-x-3",
          children: [networkType !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_LayerSwapOut__WEBPACK_IMPORTED_MODULE_12__/* .LayerSwapOut */ .U, {
            callback: handleLayerSwapOut
          }), currentLayer === 'L2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Row */ .WA, {
            style: {
              border: "1px solid ".concat(relayerType === 'L2' ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_22__/* .colors */ .I.aqua : 'rgba(10, 36, 99, 0.15)'),
              color: relayerType === 'L2' ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_22__/* .colors */ .I.aqua : 'rgba(10, 36, 99, 0.4)',
              padding: '4px 10px',
              borderRadius: '25px',
              boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.1)'
            },
            onClick: handleRelayerSwitch,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
              text: t("Use Relayer")
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .c, {
          className: "space-y-2",
          style: {
            marginTop: 8
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
            token: activeToken ? activeToken : {
              balance: safeBalance,
              usdValue: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .times */ .g7)(safeBalance, kasPrice),
              isToken: false
            },
            selectToken: true,
            onClick: () => navigate('SelectToken')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
            text: t('Recipient'),
            preset: "regular",
            color: "text",
            style: {
              fontSize: '15px',
              marginTop: 24
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_EnterRecipientAddress__WEBPACK_IMPORTED_MODULE_30__.AddressInput, {
            value: toInfo.address,
            onChange: e => {
              var _e$target;
              return setToInfo({
                address: (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value,
                domain: ''
              });
            }
          }), currentLayer === 'L1' && !!toInfo.address && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_KnsDomain__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .c, {
            networkType: networkType,
            address: toInfo.address
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Column */ .ou, {
            mt: "lg",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .c, {
              className: "mt-0 flex justify-between items-center",
              style: {
                minHeight: 30
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                text: t('Balance'),
                color: "text_minor"
              }), activeToken ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .c, {
                style: {
                  color: '#0A2463'
                },
                children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .formatNumber */ .iy)(activeToken.balance, activeToken.dec)
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.Fragment, {
                children: showSafeBalance || currentLayer === 'L2' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                  text: "".concat(currentLayer === 'L2' ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .formatNumber */ .iy)(safeBalance, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec) : (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .formatNumber */ .iy)(accountBalance.amount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec), " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                  size: "sm",
                  color: "text"
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Row */ .WA, {
                  onClick: () => {
                    setAutoAdjust(true);
                    setInputAmount(accountBalance.amount);
                    setInputAmountUsd((Number(accountBalance.amount) * Number(kasPrice)).toLocaleString());
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                    text: "MAX",
                    style: {
                      color: autoAdjust ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_22__/* .colors */ .I.yellow_light : _ui_theme_colors__WEBPACK_IMPORTED_MODULE_22__/* .colors */ .I.white_muted
                    },
                    color: "text"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                    text: "".concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .formatNumber */ .iy)(accountBalance.amount, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec), " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                    size: "sm",
                    color: "text"
                  })]
                })
              })]
            }), !(activeToken !== null && activeToken !== void 0 && activeToken.isToken) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Row */ .WA, {
                justifyBetween: true,
                itemsCenter: true,
                style: {
                  minHeight: 30
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                  text: "".concat(t('Unconfirmed')).concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                  color: "text_minor"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                  text: "".concat(accountBalance.pending_kas_amount, " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                  size: "sm",
                  color: "text"
                })]
              }), showSafeBalance && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Row */ .WA, {
                justifyBetween: true,
                itemsCenter: true,
                style: {
                  minHeight: 30
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                  text: "".concat(t('Available'), "(").concat(t('safe to send'), ")"),
                  color: "text_minor"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Row */ .WA, {
                  onClick: () => {
                    setAutoAdjust(true);
                    setInputAmountType('kas');
                    setInputAmount((currentLayer === 'L2' ? safeBalanceMax : safeBalance).toString());
                    setInputAmountUsd((Number(currentLayer === 'L2' ? safeBalanceMax : safeBalance) * Number(kasPrice)).toLocaleString());
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                    text: 'MAX',
                    color: autoAdjust ? 'yellow' : 'text',
                    size: "sm"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                    text: "".concat(currentLayer === 'L2' ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .formatNumber */ .iy)(safeBalanceMax, activeToken === null || activeToken === void 0 ? void 0 : activeToken.desc) : (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .formatNumber */ .iy)(safeBalance, activeToken === null || activeToken === void 0 ? void 0 : activeToken.desc), " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
                    size: "sm",
                    color: "text"
                  })]
                })]
              })]
            }) : null, !(activeToken !== null && activeToken !== void 0 && activeToken.isToken) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .c, {
              className: "space-y-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_Input__WEBPACK_IMPORTED_MODULE_11__/* .KasAmountInput */ .U$, {
                preset: "amount",
                inputAmountType: inputAmountType,
                placeholder: t('Amount'),
                value: inputAmountType === 'kas' ? inputAmount : inputAmountUsd,
                onAmountInputChange: amount => {
                  // 控制最小精度
                  // const reg = new RegExp(`^\\d*(\\.\\d{0,${currentLayer === 'L1' ? 8 : 18}})?$`)
                  const reg = new RegExp("^\\d*(\\.\\d{0,4})?$");
                  if (!reg.test(amount)) return;
                  if (autoAdjust) {
                    setAutoAdjust(false);
                  }
                  if (inputAmountType === 'usd' && kasPrice > 0) {
                    setInputAmountUsd(amount);
                    setInputAmount((Number(amount) / kasPrice).toLocaleString());
                  } else {
                    setInputAmount(amount);
                    setInputAmountUsd((Number(amount) * kasPrice).toLocaleString());
                  }
                },
                onChange: e => {
                  // 控制最小精度
                  // const reg = new RegExp(`^\\d*(\\.\\d{0,${currentLayer === 'L1' ? 8 : 18}})?$`)
                  const reg = new RegExp("^\\d*(\\.\\d{0,4})?$");
                  if (!reg.test(e.target.value)) return;
                  if (autoAdjust) {
                    setAutoAdjust(false);
                  }
                  if (inputAmountType === 'usd' && kasPrice > 0) {
                    setInputAmountUsd(e.target.value);
                    setInputAmount((Number(e.target.value) / kasPrice).toLocaleString());
                  } else {
                    setInputAmount(e.target.value);
                    setInputAmountUsd((Number(e.target.value) * kasPrice).toLocaleString());
                  }
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .c, {
                style: {
                  margin: '10px 0 0 0'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(SubInputAmount, {
                  inputAmountType: inputAmountType,
                  setInputAmountType: setInputAmountType,
                  inputAmountUsd: inputAmountUsd,
                  kasPrice: kasPrice,
                  inputAmount: inputAmount
                })
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .c, {
              className: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .c, {
                value: tokenAmount,
                onChange: e => {
                  // const reg = new RegExp(`^\\d*(\\.\\d{0,${activeToken.decimals || 8}})?$`)
                  const reg = new RegExp("^\\d*(\\.\\d{0,4})?$");
                  if ((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .isNumeric */ .g5)(e.target.value) && reg.test(e.target.value)) {
                    setTokenAmount(e.target.value);
                  }
                },
                placeholder: "Amount",
                type: "text",
                fullWidth: true
              })
            })]
          }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
            text: error,
            color: "error"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Column */ .ou, {
            justifyCenter: true,
            mt: "xl",
            children: [txFee > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
              color: "textDim",
              text: "".concat(t('TX Fee:'), " ").concat(txFee, " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
              textCenter: true
            }), currentLayer !== 'L2' && txFee > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Column */ .ou, {
              mt: "lg",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                text: "".concat(t('Priority Fee Rate'), " ( ").concat(t('Optional'), " )"),
                color: "text",
                style: {
                  fontSize: '15px'
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_FeeRateBar__WEBPACK_IMPORTED_MODULE_10__/* .FeeRateBar */ .G, {
                feeRate: feeRate,
                onChange: val => {
                  setFeeRate(val);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
                mt: "lg",
                color: "textDim",
                text: "".concat(t('Priority Fee:'), " ").concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .sompiToAmount */ .ei)(feeRate * Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .amountToSompi */ .s1)(txFee.toString()))), " KAS"),
                textCenter: true
              })]
            })]
          })]
        })]
      }), activeToken ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .c, {
        px: '16px',
        my: '16px',
        align: "center",
        variant: "body2",
        color: "textSecondary",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .q, {
          disabled: disabled || sending,
          preset: "primary",
          text: t('Transfer'),
          className: "!rounded-lg !h-[42px]",
          onClick: () => {
            if (currentLayer === 'L1') return handleTransferKrc20();
            if (currentLayer === 'L2') return handleTransferErc20();
          },
          endIcon: sending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .c, {
            size: 20,
            color: "inherit"
          }) : null,
          fullWidth: true,
          style: disabled ? {
            opacity: 0.5,
            cursor: 'not-allowed',
            backgroundColor: '#a0aec0'
          } : {}
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .c, {
        px: '16px',
        my: '16px',
        align: "center",
        variant: "body2",
        color: "textSecondary",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .q, {
          disabled: disabled || sending,
          preset: "primary",
          text: t('Transfer'),
          className: "!rounded-lg !h-[42px]",
          endIcon: sending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_40__/* ["default"] */ .c, {
            size: 20,
            color: "inherit"
          }) : null,
          fullWidth: true,
          style: disabled ? {
            opacity: 0.5,
            cursor: 'not-allowed',
            backgroundColor: '#a0aec0'
          } : {},
          onClick: e => {
            if (currentLayer === 'L2') {
              setSending(true);
              let networkId = '';
              if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Mainnet) {
                networkId = 'mainnet';
              } else if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Testnet) {
                networkId = 'testnet-10';
              } else {
                networkId = 'devnet';
              }
              if (relayerType === 'L1') {
                (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_5__/* .send_kaspa_with_evm_payload */ .Ej)(networkId, "0x".concat(privateKey.hex), address, txFee, toInfo.address, inputAmount).then(res => {
                  console.log('L1', privateKey, inputAmount, toInfo);
                  console.log('L1 res', res);
                  const rawTxInfo = {
                    to: toInfo.address,
                    amountSompi: parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .parseUnits */ ._s)(inputAmount, 8)),
                    tick: 'eKAS',
                    relayer: 'L1'
                  };
                  navigate('TxSuccessScreen', {
                    txid: res.hash,
                    rawtx: rawTxInfo,
                    type: 'Send'
                  });
                }).finally(() => {
                  setSending(false);
                });
              } else {
                (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_5__/* .send_eth_transaction */ .EI)(toInfo.address, inputAmount, "0x".concat(privateKey.hex)).then(res => {
                  console.log('L2', privateKey, inputAmount, toInfo);
                  console.log('L2 res', res);
                  const rawTxInfo = {
                    to: toInfo.address,
                    amountSompi: parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .parseUnits */ ._s)(inputAmount, 8)),
                    tick: 'eKAS',
                    relayer: 'L2'
                  };
                  navigate('TxSuccessScreen', {
                    txid: res.transactionHash,
                    rawtx: rawTxInfo,
                    type: 'Send'
                  });
                }).catch(error => {
                  tools.toastError((error === null || error === void 0 ? void 0 : error.message) || "Failed to send transaction");
                }).finally(() => {
                  setSending(false);
                });
              }
            } else {
              if (Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .sompiToAmount */ .ei)(feeRate * Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .amountToSompi */ .s1)(txFee.toString())))) + Number(inputAmount) > Number(accountBalance.amount)) return tools.toastError('Insufficient balance');
              setSending(true);
              pushKaspaTx(rawTxInfo.rawtx).then(_ref => {
                let {
                  success,
                  txid,
                  error
                } = _ref;
                console.log('error', success, error, txid);
                if (success) {
                  dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_21__/* .transactionsActions */ .C4.updateNativeTxs({
                    from: address,
                    info: {
                      tick: 'KAS',
                      dec: 8,
                      type: _ui_types__WEBPACK_IMPORTED_MODULE_23__/* .TXTypes */ .S.TransferNative,
                      amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .parseUnits */ ._s)(inputAmount, 8),
                      from: address,
                      to: toInfo.address,
                      hash: txid,
                      time: dayjs__WEBPACK_IMPORTED_MODULE_25___default()().valueOf(),
                      status: 'success'
                    }
                  }));
                  navigate('TxSuccessScreen', {
                    txid,
                    rawtx: JSON.parse((rawTxInfo === null || rawTxInfo === void 0 ? void 0 : rawTxInfo.rawtx) || '{}'),
                    type: 'Send'
                  });
                } else {
                  dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_21__/* .transactionsActions */ .C4.updateNativeTxs({
                    from: address,
                    info: {
                      tick: 'KAS',
                      dec: 8,
                      type: _ui_types__WEBPACK_IMPORTED_MODULE_23__/* .TXTypes */ .S.TransferNative,
                      amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .parseUnits */ ._s)(inputAmount, 8),
                      from: address,
                      to: toInfo.address,
                      hash: txid,
                      time: dayjs__WEBPACK_IMPORTED_MODULE_25___default()().valueOf(),
                      status: 'Failed'
                    }
                  }));
                  tools.toastError(error.toString() || 'Send Failed');
                }
              }).finally(() => {
                setSending(false);
              });
            }
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .c, {
        placement: 'bottom',
        closable: false,
        onClose: () => setFeeDrawerVisible(false),
        open: feeDrawerVisible,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Column */ .ou, {
          mt: "lg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
            text: "".concat(t('Priority Fee Rate'), " ( ").concat(t('Optional'), " )"),
            color: "textDim"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components_FeeRateBar__WEBPACK_IMPORTED_MODULE_10__/* .FeeRateBar */ .G, {
            feeRate: feeRate,
            onChange: val => {
              setFeeRate(val);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
            mt: "xxl",
            color: "white",
            text: "".concat(t('Priority Fee:'), " ").concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .sompiToAmount */ .ei)(feeRate * Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .amountToSompi */ .s1)(txFee.toString()))), " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
            textCenter: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Row */ .WA, {
            mt: "xxl",
            full: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .q, {
            disabled: disabled,
            preset: "primary",
            text: t('Close'),
            onClick: () => setFeeDrawerVisible(false)
          })]
        })
      }, 'fee-drawer')]
    })
  });
}
function SubInputAmount(_ref2) {
  let {
    inputAmountType,
    setInputAmountType,
    inputAmountUsd,
    kasPrice,
    inputAmount
  } = _ref2;
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useLayerType */ .wl)();
  const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  if (kasPrice > 0 && (0,_ui_utils__WEBPACK_IMPORTED_MODULE_24__/* .isNumeric */ .g5)(inputAmount)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Row */ .WA, {
        itemsCenter: true,
        onClick: () => {
          inputAmountType == 'kas' ? setInputAmountType('usd') : setInputAmountType('kas');
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Icon */ .GW, {
          icon: "send",
          color: hover ? 'text' : 'white_minor',
          size: 12,
          style: {
            marginRight: '4px'
          }
        }), inputAmountType == 'kas' && kasPrice > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
          text: "$".concat((0,bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c)(Number(inputAmount) * Number(kasPrice)).toFixed(6)),
          color: hover ? 'text' : 'white_minor'
        }), inputAmountType == 'usd' && kasPrice > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
          text: "".concat((0,bignumber_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c)(Number(inputAmount)).toFixed(6), " ").concat(currentLayer === 'L2' ? 'e' : '', "KAS"),
          color: hover ? 'text' : 'white_minor'
        })]
      })
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.Fragment, {});
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ TXTypes)
/* harmony export */ });
let TXTypes = /*#__PURE__*/function (TXTypes) {
  TXTypes["Mint"] = "Mint";
  TXTypes["Deploy"] = "Deploy";
  TXTypes["TransferKrc20"] = "TransferKrc20";
  TXTypes["TransferNative"] = "TransferNative";
  return TXTypes;
}({});

/***/ }),

/***/ 40888:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(67672);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 67672:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 72224:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(16400),
    now = __webpack_require__(15672),
    toNumber = __webpack_require__(2331);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 15672:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(8893);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 2331:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(40888),
    isObject = __webpack_require__(16400),
    isSymbol = __webpack_require__(22992);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 33035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 15728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/right.db8fa8d4.svg";

/***/ })

}]);