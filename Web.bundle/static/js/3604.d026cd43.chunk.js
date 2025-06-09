"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[3604,8804],{

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

/***/ 56016:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getDataOrAriaProps;
function getDataOrAriaProps(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if ((key.startsWith('data-') || key.startsWith('aria-') || key === 'role') && !key.startsWith('data-__')) {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/***/ }),

/***/ 88784:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.RadioOptionTypeContextProvider = exports.RadioOptionTypeContext = exports.RadioGroupContextProvider = void 0;
var React = _interopRequireWildcard(__webpack_require__(96651));
var RadioGroupContext = /*#__PURE__*/React.createContext(null);
var RadioGroupContextProvider = exports.RadioGroupContextProvider = RadioGroupContext.Provider;
var _default = exports["default"] = RadioGroupContext;
var RadioOptionTypeContext = exports.RadioOptionTypeContext = /*#__PURE__*/React.createContext(null);
var RadioOptionTypeContextProvider = exports.RadioOptionTypeContextProvider = RadioOptionTypeContext.Provider;

/***/ }),

/***/ 22720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(68184));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(67204));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var _useMergedState3 = _interopRequireDefault(__webpack_require__(32613));
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var _SizeContext = _interopRequireDefault(__webpack_require__(90712));
var _getDataOrAriaProps = _interopRequireDefault(__webpack_require__(56016));
var _context = __webpack_require__(88784);
var _radio = _interopRequireDefault(__webpack_require__(34820));
var RadioGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = React.useContext(_SizeContext["default"]);
  var _useMergedState = (0, _useMergedState3["default"])(props.defaultValue, {
      value: props.value
    }),
    _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var onRadioChange = function onRadioChange(ev) {
    var lastValue = value;
    var val = ev.target.value;
    if (!('value' in props)) {
      setValue(val);
    }
    var onChange = props.onChange;
    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  };
  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    options = props.options,
    _props$buttonStyle = props.buttonStyle,
    buttonStyle = _props$buttonStyle === void 0 ? 'outline' : _props$buttonStyle,
    disabled = props.disabled,
    children = props.children,
    customizeSize = props.size,
    style = props.style,
    id = props.id,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onFocus = props.onFocus,
    onBlur = props.onBlur;
  var prefixCls = getPrefixCls('radio', customizePrefixCls);
  var groupPrefixCls = "".concat(prefixCls, "-group");
  var childrenToRender = children;
  // 如果存在 options, 优先使用
  if (options && options.length > 0) {
    childrenToRender = options.map(function (option) {
      if (typeof option === 'string' || typeof option === 'number') {
        // 此处类型自动推导为 string
        return /*#__PURE__*/React.createElement(_radio["default"], {
          key: option.toString(),
          prefixCls: prefixCls,
          disabled: disabled,
          value: option,
          checked: value === option
        }, option);
      }
      // 此处类型自动推导为 { label: string value: string }
      return /*#__PURE__*/React.createElement(_radio["default"], {
        key: "radio-group-value-options-".concat(option.value),
        prefixCls: prefixCls,
        disabled: option.disabled || disabled,
        value: option.value,
        checked: value === option.value,
        style: option.style
      }, option.label);
    });
  }
  var mergedSize = customizeSize || size;
  var classString = (0, _classnames["default"])(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(groupPrefixCls, "-").concat(mergedSize), mergedSize), "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, (0, _getDataOrAriaProps["default"])(props), {
    className: classString,
    style: style,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onFocus: onFocus,
    onBlur: onBlur,
    id: id,
    ref: ref
  }), /*#__PURE__*/React.createElement(_context.RadioGroupContextProvider, {
    value: {
      onChange: onRadioChange,
      value: value,
      disabled: props.disabled,
      name: props.name,
      optionType: props.optionType
    }
  }, childrenToRender));
});
var _default = exports["default"] = /*#__PURE__*/React.memo(RadioGroup);

/***/ }),

/***/ 98736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = (__webpack_require__(11140)["default"]);
__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _radioButton["default"];
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _group["default"];
  }
});
exports.cp = void 0;
var _group = _interopRequireDefault(__webpack_require__(22720));
var _radio = _interopRequireDefault(__webpack_require__(34820));
var _radioButton = _interopRequireDefault(__webpack_require__(93160));
var Radio = _radio["default"];
Radio.Button = _radioButton["default"];
Radio.Group = _group["default"];
Radio.__ANT_RADIO = true;
var _default = exports.cp = Radio;

/***/ }),

/***/ 34820:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _extends2 = _interopRequireDefault(__webpack_require__(68184));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var _rcCheckbox = _interopRequireDefault(__webpack_require__(94524));
var _ref = __webpack_require__(26800);
var _react = _interopRequireWildcard(__webpack_require__(96651));
var React = _react;
var _configProvider = __webpack_require__(92252);
var _DisabledContext = _interopRequireDefault(__webpack_require__(73756));
var _context = __webpack_require__(76573);
var _warning = _interopRequireDefault(__webpack_require__(34224));
var _context2 = _interopRequireWildcard(__webpack_require__(88784));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var InternalRadio = function InternalRadio(props, ref) {
  var _a, _b;
  var groupContext = React.useContext(_context2["default"]);
  var radioOptionTypeContext = React.useContext(_context2.RadioOptionTypeContext);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var innerRef = React.useRef();
  var mergedRef = (0, _ref.composeRef)(ref, innerRef);
  var _useContext = (0, _react.useContext)(_context.FormItemInputContext),
    isFormItemInput = _useContext.isFormItemInput;
   false ? 0 : void 0;
  var onChange = function onChange(e) {
    var _a, _b;
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
    (_b = groupContext === null || groupContext === void 0 ? void 0 : groupContext.onChange) === null || _b === void 0 ? void 0 : _b.call(groupContext, e);
  };
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    children = props.children,
    style = props.style,
    restProps = __rest(props, ["prefixCls", "className", "children", "style"]);
  var radioPrefixCls = getPrefixCls('radio', customizePrefixCls);
  var prefixCls = ((groupContext === null || groupContext === void 0 ? void 0 : groupContext.optionType) || radioOptionTypeContext) === 'button' ? "".concat(radioPrefixCls, "-button") : radioPrefixCls;
  var radioProps = (0, _extends2["default"])({}, restProps);
  // ===================== Disabled =====================
  var disabled = React.useContext(_DisabledContext["default"]);
  if (groupContext) {
    radioProps.name = groupContext.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === groupContext.value;
    radioProps.disabled = (_a = radioProps.disabled) !== null && _a !== void 0 ? _a : groupContext.disabled;
  }
  radioProps.disabled = (_b = radioProps.disabled) !== null && _b !== void 0 ? _b : disabled;
  var wrapperClassString = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-wrapper-in-form-item"), isFormItemInput), className);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", {
      className: wrapperClassString,
      style: style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave
    }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], (0, _extends2["default"])({}, radioProps, {
      type: "radio",
      prefixCls: prefixCls,
      ref: mergedRef
    })), children !== undefined ? /*#__PURE__*/React.createElement("span", null, children) : null)
  );
};
var Radio = /*#__PURE__*/React.forwardRef(InternalRadio);
if (false) {}
var _default = exports["default"] = Radio;

/***/ }),

/***/ 93160:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(68184));
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var _context = __webpack_require__(88784);
var _radio = _interopRequireDefault(__webpack_require__(34820));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var RadioButton = function RadioButton(props, ref) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;
  var customizePrefixCls = props.prefixCls,
    radioProps = __rest(props, ["prefixCls"]);
  var prefixCls = getPrefixCls('radio', customizePrefixCls);
  return /*#__PURE__*/React.createElement(_context.RadioOptionTypeContextProvider, {
    value: "button"
  }, /*#__PURE__*/React.createElement(_radio["default"], (0, _extends2["default"])({
    prefixCls: prefixCls
  }, radioProps, {
    type: "radio",
    ref: ref
  })));
};
var _default = exports["default"] = /*#__PURE__*/React.forwardRef(RadioButton);

/***/ }),

/***/ 88056:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(89148);
__webpack_require__(52364);

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

/***/ 80876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88056);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(98736);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83120);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77980);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37656);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(70884);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87136);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25350);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96651);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(75776);
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60172);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17534);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40256);
/* harmony import */ var _Wallet_TxCreateScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40020);
/* harmony import */ var _ui_images_common_contacts_book_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93468);
/* harmony import */ var _ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6860);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96522);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55043);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _MainRoute__WEBPACK_IMPORTED_MODULE_2__, _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_4__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__, _Wallet_TxCreateScreen__WEBPACK_IMPORTED_MODULE_8__, _ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_10__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _MainRoute__WEBPACK_IMPORTED_MODULE_2__, _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_4__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__, _Wallet_TxCreateScreen__WEBPACK_IMPORTED_MODULE_8__, _ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const BlacklistIssue = () => {
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .i)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useUserPrivateKey */ .yK)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useNetworkType */ .qS)();
  const [drawerVisible, setDrawerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [tickerInfo, setTickerInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [mod, setMod] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('add');
  const formik = (0,formik__WEBPACK_IMPORTED_MODULE_13__/* .useFormik */ .KO)({
    initialValues: {
      toAddress: '',
      tickerInfo: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_11__/* .object */ .kt().shape({
      toAddress: yup__WEBPACK_IMPORTED_MODULE_11__/* .string */ .Qb().required('Please enter valid Recipient').matches(/^(kaspa|kaspatest|kaspadev):[a-z0-9]{32,}$/i, 'Invalid address.'),
      tickerInfo: yup__WEBPACK_IMPORTED_MODULE_11__/* .object */ .kt().required('Please enter valid ticker')
    }),
    onSubmit: async values => {
      console.log('onSubmit values', values, loading);
      if (loading) return;
      setLoading(true);
      try {
        const networkName = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Mainnet ? 'mainnet' : networkType === _shared_types__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType */ .U5.Testnet ? 'testnet-10' : 'devnet';
        console.log('mod', mod);
        const res = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_4__/* .krc20_blacklist_issue */ .Qj)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.ca, mod, values.toAddress, 0.02);
        if (res !== null && res !== void 0 && res.status) {
          const rawtxinfo = {
            "to": values.toAddress,
            "tick": tickerInfo === null || tickerInfo === void 0 ? void 0 : tickerInfo.name
          };
          navigate('TxSuccessScreen', {
            txid: "Multi-Transaction",
            rawtx: rawtxinfo,
            type: "BlackList"
          });
        }
      } catch (error) {
        console.log('handle blakList Issue error', error);
      } finally {
        setLoading(false);
      }
    }
  });
  const handleAddrInput = address => {
    formik.setFieldValue('toAddress', address);
    setDrawerVisible(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .ek, {
      onBack: () => navigate('ToolScreen', null, true),
      parentName: "ToolScreen",
      title: 'Blacklist Krc20',
      RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .NodeStatus */ .s9, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .kP, {
      classname: "!px-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .c, {
            children: "Ticker"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_KRC20TokenInput__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
            name: "tickerInfo",
            type: "issue",
            onBlur: formik.handleBlur,
            onChange: value => {
              console.log('value', value);
              formik.setFieldValue('tickerInfo', value);
              setTickerInfo(value);
            },
            error: Boolean(formik.errors.tickerInfo)
          }), formik.errors.tickerInfo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .c, {
            color: "error.main",
            children: formik.errors.tickerInfo
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .c, {
            children: "Recipient"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .c, {
            name: "toAddress",
            value: formik.values.toAddress,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            placeholder: "Recipient",
            error: formik.touched.toAddress && Boolean(formik.errors.toAddress),
            className: "w-full",
            endAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .c, {
              onClick: () => setDrawerVisible(true),
              edge: "end",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
                src: _ui_images_common_contacts_book_svg__WEBPACK_IMPORTED_MODULE_9__,
                width: 18,
                height: 18,
                alt: ""
              })
            })
          }), formik.touched.toAddress && formik.errors.toAddress ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .c, {
            color: "error.main",
            children: formik.errors.toAddress
          }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(antd_lib_radio__WEBPACK_IMPORTED_MODULE_18__/* ["default"].Group */ .cp.Group, {
            style: {
              margin: '15px 0 0 0'
            },
            name: "radiogroup",
            defaultValue: mod,
            options: [{
              value: 'add',
              label: 'add'
            }, {
              value: 'remove',
              label: 'remove'
            }],
            onChange: e => {
              try {
                setMod(e.target.value);
              } catch (error) {
                console.log('error', error);
              }
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
          className: "space-y-1 mt-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .q, {
            variant: "contained",
            color: "primary",
            disabled: loading,
            className: "!rounded-lg !h-[42px] w-full",
            onClick: () => formik.handleSubmit(),
            children: [loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .c, {
              size: 16,
              color: "inherit",
              className: "mr-1"
            }), "Blacklist Issue"]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Wallet_TxCreateScreen__WEBPACK_IMPORTED_MODULE_8__.SelectAddressDrawer, {
      drawerVisible: drawerVisible,
      onClose: () => setDrawerVisible(false),
      handleAddrInput: handleAddrInput
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlacklistIssue);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 94524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4731);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96392);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31760);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95484);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13608);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10124);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64240);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96651);





var _excluded = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "onChange"];




var Checkbox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function (props, ref) {
  var _classNames;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-checkbox' : _props$prefixCls,
    className = props.className,
    style = props.style,
    checked = props.checked,
    disabled = props.disabled,
    _props$defaultChecked = props.defaultChecked,
    defaultChecked = _props$defaultChecked === void 0 ? false : _props$defaultChecked,
    _props$type = props.type,
    type = _props$type === void 0 ? 'checkbox' : _props$type,
    onChange = props.onChange,
    inputProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c)(props, _excluded);
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var _useMergedState = (0,rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .c)(defaultChecked, {
      value: checked
    }),
    _useMergedState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c)(_useMergedState, 2),
    rawValue = _useMergedState2[0],
    setRawValue = _useMergedState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      },
      blur: function blur() {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
      },
      input: inputRef.current
    };
  });
  var classString = classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls, className, (_classNames = {}, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .c)(_classNames, "".concat(prefixCls, "-checked"), rawValue), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .c)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
  var handleChange = function handleChange(e) {
    if (disabled) {
      return;
    }
    if (!('checked' in props)) {
      setRawValue(e.target.checked);
    }
    onChange === null || onChange === void 0 ? void 0 : onChange({
      target: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .c)({}, props), {}, {
        type: type,
        checked: e.target.checked
      }),
      stopPropagation: function stopPropagation() {
        e.stopPropagation();
      },
      preventDefault: function preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classString,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .c)({}, inputProps, {
    className: "".concat(prefixCls, "-input"),
    ref: inputRef,
    onChange: handleChange,
    disabled: disabled,
    checked: !!rawValue,
    type: type
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: "".concat(prefixCls, "-inner")
  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);

/***/ }),

/***/ 54408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useEvent;
var React = _interopRequireWildcard(__webpack_require__(96651));
function useEvent(callback) {
  var fnRef = React.useRef();
  fnRef.current = callback;
  var memoFn = React.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

/***/ }),

/***/ 36400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(11140)["default"]);
var _interopRequireWildcard = (__webpack_require__(128)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useLayoutUpdateEffect = exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(96651));
var _canUseDom = _interopRequireDefault(__webpack_require__(47748));
/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useInternalLayoutEffect =  true && (0, _canUseDom.default)() ? React.useLayoutEffect : React.useEffect;
var useLayoutEffect = function useLayoutEffect(callback, deps) {
  var firstMountRef = React.useRef(true);
  useInternalLayoutEffect(function () {
    return callback(firstMountRef.current);
  }, deps);

  // We tell react that first mount has passed
  useInternalLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = exports.useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  useLayoutEffect(function (firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
var _default = exports["default"] = useLayoutEffect;

/***/ }),

/***/ 32613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useMergedState;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(67204));
var _useEvent = _interopRequireDefault(__webpack_require__(54408));
var _useLayoutEffect = __webpack_require__(36400);
var _useState5 = _interopRequireDefault(__webpack_require__(64128));
/** We only think `undefined` is empty */
function hasValue(value) {
  return value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = (0, _useState5.default)(function () {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      }
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== undefined ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  var onChangeFn = (0, _useEvent.default)(onChange);
  var _useState3 = (0, _useState5.default)([mergedValue]),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  (0, _useLayoutEffect.useLayoutUpdateEffect)(function () {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to `undefined` when it from control to un-control
  (0, _useLayoutEffect.useLayoutUpdateEffect)(function () {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  var triggerChange = (0, _useEvent.default)(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}

/***/ }),

/***/ 64128:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useSafeState;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(67204));
var React = _interopRequireWildcard(__webpack_require__(96651));
/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
function useSafeState(defaultValue) {
  var destroyRef = React.useRef(false);
  var _React$useState = React.useState(defaultValue),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  React.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}

/***/ }),

/***/ 26800:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.composeRef = composeRef;
exports.fillRef = fillRef;
exports.supportNodeRef = supportNodeRef;
exports.supportRef = supportRef;
exports.useComposeRef = useComposeRef;
var _typeof2 = _interopRequireDefault(__webpack_require__(18931));
var _react = __webpack_require__(96651);
var _reactIs = __webpack_require__(79896);
var _useMemo = _interopRequireDefault(__webpack_require__(2428));
/* eslint-disable no-param-reassign */

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if ((0, _typeof2.default)(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}

/**
 * Merge refs into one ref function to support ref passing.
 */
function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(function (ref) {
    return ref;
  });
  if (refList.length <= 1) {
    return refList[0];
  }
  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return (0, _useMemo.default)(function () {
    return composeRef.apply(void 0, refs);
  }, refs, function (prev, next) {
    return prev.length !== next.length || prev.every(function (ref, i) {
      return ref !== next[i];
    });
  });
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type = (0, _reactIs.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render)) {
    return false;
  }

  // Class component
  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render)) {
    return false;
  }
  return true;
}
function supportNodeRef(node) {
  if (! /*#__PURE__*/(0, _react.isValidElement)(node)) {
    return false;
  }
  if ((0, _reactIs.isFragment)(node)) {
    return false;
  }
  return supportRef(node);
}
/* eslint-enable */

/***/ })

}]);