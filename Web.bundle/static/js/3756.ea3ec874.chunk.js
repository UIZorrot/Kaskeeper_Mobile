"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[3756],{

/***/ 89996:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMergedStatus = void 0;
exports.getStatusClassNames = getStatusClassNames;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var _type = __webpack_require__(19968);
var InputStatuses = (0, _type.tuple)('warning', 'error', '');
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-status-success"), status === 'success'), "".concat(prefixCls, "-status-warning"), status === 'warning'), "".concat(prefixCls, "-status-error"), status === 'error'), "".concat(prefixCls, "-status-validating"), status === 'validating'), "".concat(prefixCls, "-has-feedback"), hasFeedback));
}
var getMergedStatus = exports.getMergedStatus = function getMergedStatus(contextStatus, customStatus) {
  return customStatus || contextStatus;
};

/***/ }),

/***/ 91496:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(77108));
var _createClass2 = _interopRequireDefault(__webpack_require__(21964));
var _inherits2 = _interopRequireDefault(__webpack_require__(12144));
var _createSuper2 = _interopRequireDefault(__webpack_require__(3064));
var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(34420));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var React = _interopRequireWildcard(__webpack_require__(96651));
var _context = __webpack_require__(76573);
var _reactNode = __webpack_require__(51408);
var _statusUtils = __webpack_require__(89996);
var _type = __webpack_require__(19968);
var ClearableInputType = (0, _type.tuple)('text', 'input');
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
var ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ClearableLabeledInput, _React$Component);
  var _super = (0, _createSuper2["default"])(ClearableLabeledInput);
  function ClearableLabeledInput() {
    (0, _classCallCheck2["default"])(this, ClearableLabeledInput);
    return _super.apply(this, arguments);
  }
  (0, _createClass2["default"])(ClearableLabeledInput, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var _this$props = this.props,
        value = _this$props.value,
        disabled = _this$props.disabled,
        readOnly = _this$props.readOnly,
        handleReset = _this$props.handleReset,
        suffix = _this$props.suffix;
      var needClear = !disabled && !readOnly && value;
      var className = "".concat(prefixCls, "-clear-icon");
      return /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], {
        onClick: handleReset,
        // Do not trigger onBlur when clear input
        // https://github.com/ant-design/ant-design/issues/31200
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        },
        className: (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(className, "-hidden"), !needClear), "".concat(className, "-has-suffix"), !!suffix), className),
        role: "button"
      });
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element, statusContext) {
      var _this$props2 = this.props,
        value = _this$props2.value,
        allowClear = _this$props2.allowClear,
        className = _this$props2.className,
        focused = _this$props2.focused,
        style = _this$props2.style,
        direction = _this$props2.direction,
        bordered = _this$props2.bordered,
        hidden = _this$props2.hidden,
        customStatus = _this$props2.status;
      var contextStatus = statusContext.status,
        hasFeedback = statusContext.hasFeedback;
      if (!allowClear) {
        return (0, _reactNode.cloneElement)(element, {
          value: value
        });
      }
      var affixWrapperCls = (0, _classnames["default"])("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-affix-wrapper"), (0, _statusUtils.getMergedStatus)(contextStatus, customStatus), hasFeedback), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-affix-wrapper-focused"), focused), "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), "".concat(className), !hasAddon(this.props) && className));
      return /*#__PURE__*/React.createElement("span", {
        className: affixWrapperCls,
        style: style,
        hidden: hidden
      }, (0, _reactNode.cloneElement)(element, {
        style: null,
        value: value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      return /*#__PURE__*/React.createElement(_context.FormItemInputContext.Consumer, null, function (statusContext) {
        var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          inputType = _this$props3.inputType,
          element = _this$props3.element;
        if (inputType === ClearableInputType[0]) {
          return _this.renderTextAreaWithClearIcon(prefixCls, element, statusContext);
        }
      });
    }
  }]);
  return ClearableLabeledInput;
}(React.Component);
var _default = exports["default"] = ClearableLabeledInput;

/***/ }),

/***/ 88320:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.fixControlledValue = fixControlledValue;
exports.resolveOnChange = resolveOnChange;
exports.triggerFocus = triggerFocus;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _extends2 = _interopRequireDefault(__webpack_require__(68184));
var _typeof2 = _interopRequireDefault(__webpack_require__(18931));
var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(34420));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var _rcInput = _interopRequireDefault(__webpack_require__(41048));
var _ref2 = __webpack_require__(26800);
var _react = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var _DisabledContext = _interopRequireDefault(__webpack_require__(73756));
var _SizeContext = _interopRequireDefault(__webpack_require__(90712));
var _context = __webpack_require__(76573);
var _Compact = __webpack_require__(72328);
var _statusUtils = __webpack_require__(89996);
var _warning = _interopRequireDefault(__webpack_require__(34224));
var _useRemovePasswordTimeout = _interopRequireDefault(__webpack_require__(59044));
var _utils = __webpack_require__(54264);
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  var event = e;
  if (e.type === 'click') {
    // Clone a new target for event.
    // Avoid the following usage, the setQuery method gets the original value.
    //
    // const [query, setQuery] = React.useState('');
    // <Input
    //   allowClear
    //   value={query}
    //   onChange={(e)=> {
    //     setQuery((prevStatus) => e.target.value);
    //   }}
    // />
    var currentTarget = target.cloneNode(true);
    // click clear icon
    event = Object.create(e, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = '';
    onChange(event);
    return;
  }
  // Trigger by composition event, this means we need force change the input value
  if (targetValue !== undefined) {
    event = Object.create(e, {
      target: {
        value: target
      },
      currentTarget: {
        value: target
      }
    });
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus(element, option) {
  if (!element) {
    return;
  }
  element.focus(option);
  // Selection content
  var _ref = option || {},
    cursor = _ref.cursor;
  if (cursor) {
    var len = element.value.length;
    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;
      case 'end':
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
        break;
    }
  }
}
var Input = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var customizePrefixCls = props.prefixCls,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    customStatus = props.status,
    customSize = props.size,
    customDisabled = props.disabled,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    suffix = props.suffix,
    allowClear = props.allowClear,
    addonAfter = props.addonAfter,
    addonBefore = props.addonBefore,
    className = props.className,
    onChange = props.onChange,
    rest = __rest(props, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "onChange"]);
  var _React$useContext = _react["default"].useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction,
    input = _React$useContext.input;
  var prefixCls = getPrefixCls('input', customizePrefixCls);
  var inputRef = (0, _react.useRef)(null);
  // ===================== Compact Item =====================
  var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
    compactSize = _useCompactItemContex.compactSize,
    compactItemClassnames = _useCompactItemContex.compactItemClassnames;
  // ===================== Size =====================
  var size = _react["default"].useContext(_SizeContext["default"]);
  var mergedSize = compactSize || customSize || size;
  // ===================== Disabled =====================
  var disabled = _react["default"].useContext(_DisabledContext["default"]);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  // ===================== Status =====================
  var _useContext = (0, _react.useContext)(_context.FormItemInputContext),
    contextStatus = _useContext.status,
    hasFeedback = _useContext.hasFeedback,
    feedbackIcon = _useContext.feedbackIcon;
  var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
  // ===================== Focus warning =====================
  var inputHasPrefixSuffix = (0, _utils.hasPrefixSuffix)(props) || !!hasFeedback;
  var prevHasPrefixSuffix = (0, _react.useRef)(inputHasPrefixSuffix);
  (0, _react.useEffect)(function () {
    var _a;
    if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) {
       false ? 0 : void 0;
    }
    prevHasPrefixSuffix.current = inputHasPrefixSuffix;
  }, [inputHasPrefixSuffix]);
  // ===================== Remove Password value =====================
  var removePasswordTimeout = (0, _useRemovePasswordTimeout["default"])(inputRef, true);
  var handleBlur = function handleBlur(e) {
    removePasswordTimeout();
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  var handleFocus = function handleFocus(e) {
    removePasswordTimeout();
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  var handleChange = function handleChange(e) {
    removePasswordTimeout();
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  var suffixNode = (hasFeedback || suffix) && ( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, suffix, hasFeedback && feedbackIcon));
  // Allow clear
  var mergedAllowClear;
  if ((0, _typeof2["default"])(allowClear) === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: /*#__PURE__*/_react["default"].createElement(_CloseCircleFilled["default"], null)
    };
  }
  return /*#__PURE__*/_react["default"].createElement(_rcInput["default"], (0, _extends2["default"])({
    ref: (0, _ref2.composeRef)(ref, inputRef),
    prefixCls: prefixCls,
    autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
  }, rest, {
    disabled: mergedDisabled || undefined,
    onBlur: handleBlur,
    onFocus: handleFocus,
    suffix: suffixNode,
    allowClear: mergedAllowClear,
    className: (0, _classnames["default"])(className, compactItemClassnames),
    onChange: handleChange,
    addonAfter: addonAfter && ( /*#__PURE__*/_react["default"].createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/_react["default"].createElement(_context.NoFormStyle, {
      override: true,
      status: true
    }, addonAfter))),
    addonBefore: addonBefore && ( /*#__PURE__*/_react["default"].createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/_react["default"].createElement(_context.NoFormStyle, {
      override: true,
      status: true
    }, addonBefore))),
    inputClassName: (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-sm"), mergedSize === 'small'), "".concat(prefixCls, "-lg"), mergedSize === 'large'), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-borderless"), !bordered), !inputHasPrefixSuffix && (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus)),
    affixWrapperClassName: (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-affix-wrapper-sm"), mergedSize === 'small'), "".concat(prefixCls, "-affix-wrapper-lg"), mergedSize === 'large'), "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-affix-wrapper"), mergedStatus, hasFeedback)),
    wrapperClassName: (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-group-rtl"), direction === 'rtl')),
    groupClassName: (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-group-wrapper-sm"), mergedSize === 'small'), "".concat(prefixCls, "-group-wrapper-lg"), mergedSize === 'large'), "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-group-wrapper"), mergedStatus, hasFeedback))
  }));
});
var _default = exports["default"] = Input;

/***/ }),

/***/ 11452:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(18931));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _extends2 = _interopRequireDefault(__webpack_require__(68184));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(67204));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(63328));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var _rcTextarea = _interopRequireDefault(__webpack_require__(73184));
var _useMergedState3 = _interopRequireDefault(__webpack_require__(32613));
var _omit = _interopRequireDefault(__webpack_require__(79132));
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var _DisabledContext = _interopRequireDefault(__webpack_require__(73756));
var _SizeContext = _interopRequireDefault(__webpack_require__(90712));
var _context = __webpack_require__(76573);
var _statusUtils = __webpack_require__(89996);
var _ClearableLabeledInput = _interopRequireDefault(__webpack_require__(91496));
var _Input = __webpack_require__(88320);
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function fixEmojiLength(value, maxLength) {
  return (0, _toConsumableArray2["default"])(value || '').slice(0, maxLength).join('');
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  var newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    // 光标在尾部，直接截断
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if ((0, _toConsumableArray2["default"])(preValue || '').length < triggerValue.length && (0, _toConsumableArray2["default"])(triggerValue || '').length > maxLength) {
    // 光标在中间，如果最后的值超过最大值，则采用原先的值
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
var TextArea = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
    _a$bordered = _a.bordered,
    bordered = _a$bordered === void 0 ? true : _a$bordered,
    _a$showCount = _a.showCount,
    showCount = _a$showCount === void 0 ? false : _a$showCount,
    maxLength = _a.maxLength,
    className = _a.className,
    style = _a.style,
    customizeSize = _a.size,
    customDisabled = _a.disabled,
    onCompositionStart = _a.onCompositionStart,
    onCompositionEnd = _a.onCompositionEnd,
    onChange = _a.onChange,
    onFocus = _a.onFocus,
    onBlur = _a.onBlur,
    customStatus = _a.status,
    props = __rest(_a, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "disabled", "onCompositionStart", "onCompositionEnd", "onChange", "onFocus", "onBlur", "status"]);
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = React.useContext(_SizeContext["default"]);
  // ===================== Disabled =====================
  var disabled = React.useContext(_DisabledContext["default"]);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  var _React$useContext2 = React.useContext(_context.FormItemInputContext),
    contextStatus = _React$useContext2.status,
    hasFeedback = _React$useContext2.hasFeedback,
    isFormItemInput = _React$useContext2.isFormItemInput,
    feedbackIcon = _React$useContext2.feedbackIcon;
  var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
  var innerRef = React.useRef(null);
  var clearableInputRef = React.useRef(null);
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    compositing = _React$useState2[0],
    setCompositing = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    focused = _React$useState4[0],
    setFocused = _React$useState4[1];
  var oldCompositionValueRef = React.useRef();
  var oldSelectionStartRef = React.useRef(0);
  var _useMergedState = (0, _useMergedState3["default"])(props.defaultValue, {
      value: props.value
    }),
    _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var hidden = props.hidden;
  var handleSetValue = function handleSetValue(val, callback) {
    if (props.value === undefined) {
      setValue(val);
      callback === null || callback === void 0 ? void 0 : callback();
    }
  };
  // =========================== Value Update ===========================
  // Max length value
  var hasMaxLength = Number(maxLength) > 0;
  var onInternalCompositionStart = function onInternalCompositionStart(e) {
    setCompositing(true);
    // 拼音输入前保存一份旧值
    oldCompositionValueRef.current = value;
    // 保存旧的光标位置
    oldSelectionStartRef.current = e.currentTarget.selectionStart;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };
  var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
    var _a;
    setCompositing(false);
    var triggerValue = e.currentTarget.value;
    if (hasMaxLength) {
      var isCursorInEnd = oldSelectionStartRef.current >= maxLength + 1 || oldSelectionStartRef.current === ((_a = oldCompositionValueRef.current) === null || _a === void 0 ? void 0 : _a.length);
      triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.current, triggerValue, maxLength);
    }
    // Patch composition onChange when value changed
    if (triggerValue !== value) {
      handleSetValue(triggerValue);
      (0, _Input.resolveOnChange)(e.currentTarget, e, onChange, triggerValue);
    }
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  var handleChange = function handleChange(e) {
    var triggerValue = e.target.value;
    if (!compositing && hasMaxLength) {
      // 1. 复制粘贴超过maxlength的情况 2.未超过maxlength的情况
      var isCursorInEnd = e.target.selectionStart >= maxLength + 1 || e.target.selectionStart === triggerValue.length || !e.target.selectionStart;
      triggerValue = setTriggerValue(isCursorInEnd, value, triggerValue, maxLength);
    }
    handleSetValue(triggerValue);
    (0, _Input.resolveOnChange)(e.currentTarget, e, onChange, triggerValue);
  };
  var handleBlur = function handleBlur(e) {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  var handleFocus = function handleFocus(e) {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  React.useEffect(function () {
    setFocused(function (prev) {
      return !mergedDisabled && prev;
    });
  }, [mergedDisabled]);
  // ============================== Reset ===============================
  var handleReset = function handleReset(e) {
    var _a, _b, _c;
    handleSetValue('');
    (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    (0, _Input.resolveOnChange)((_c = (_b = innerRef.current) === null || _b === void 0 ? void 0 : _b.resizableTextArea) === null || _c === void 0 ? void 0 : _c.textArea, e, onChange);
  };
  var prefixCls = getPrefixCls('input', customizePrefixCls);
  React.useImperativeHandle(ref, function () {
    var _a;
    return {
      resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
      focus: function focus(option) {
        var _a, _b;
        (0, _Input.triggerFocus)((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
      },
      blur: function blur() {
        var _a;
        return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
  });
  var textArea = /*#__PURE__*/React.createElement(_rcTextarea["default"], (0, _extends2["default"])({}, (0, _omit["default"])(props, ['allowClear']), {
    disabled: mergedDisabled,
    className: (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-borderless"), !bordered), className, className && !showCount), "".concat(prefixCls, "-sm"), size === 'small' || customizeSize === 'small'), "".concat(prefixCls, "-lg"), size === 'large' || customizeSize === 'large'), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus)),
    style: showCount ? {
      resize: style === null || style === void 0 ? void 0 : style.resize
    } : style,
    prefixCls: prefixCls,
    onCompositionStart: onInternalCompositionStart,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onCompositionEnd: onInternalCompositionEnd,
    ref: innerRef
  }));
  var val = (0, _Input.fixControlledValue)(value);
  if (!compositing && hasMaxLength && (props.value === null || props.value === undefined)) {
    // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
    val = fixEmojiLength(val, maxLength);
  }
  // TextArea
  var textareaNode = /*#__PURE__*/React.createElement(_ClearableLabeledInput["default"], (0, _extends2["default"])({
    disabled: mergedDisabled,
    focused: focused
  }, props, {
    prefixCls: prefixCls,
    direction: direction,
    inputType: "text",
    value: val,
    element: textArea,
    handleReset: handleReset,
    ref: clearableInputRef,
    bordered: bordered,
    status: customStatus,
    style: showCount ? undefined : style
  }));
  // Only show text area wrapper when needed
  if (showCount || hasFeedback) {
    var valueLength = (0, _toConsumableArray2["default"])(val).length;
    var dataCount = '';
    if ((0, _typeof2["default"])(showCount) === 'object') {
      dataCount = showCount.formatter({
        value: val,
        count: valueLength,
        maxLength: maxLength
      });
    } else {
      dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
    }
    return /*#__PURE__*/React.createElement("div", {
      hidden: hidden,
      className: (0, _classnames["default"])("".concat(prefixCls, "-textarea"), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-textarea-rtl"), direction === 'rtl'), "".concat(prefixCls, "-textarea-show-count"), showCount), "".concat(prefixCls, "-textarea-in-form-item"), isFormItemInput), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-textarea"), mergedStatus, hasFeedback), className),
      style: style,
      "data-count": dataCount
    }, textareaNode, hasFeedback && /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-textarea-suffix")
    }, feedbackIcon));
  }
  return textareaNode;
});
var _default = exports["default"] = TextArea;

/***/ }),

/***/ 59044:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useRemovePasswordTimeout;
var _react = __webpack_require__(96651);
function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  var removePasswordTimeoutRef = (0, _react.useRef)([]);
  var removePasswordTimeout = function removePasswordTimeout() {
    removePasswordTimeoutRef.current.push(setTimeout(function () {
      var _a, _b, _c, _d;
      if (((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.input.getAttribute('type')) === 'password' && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.input.hasAttribute('value'))) {
        (_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.input.removeAttribute('value');
      }
    }));
  };
  (0, _react.useEffect)(function () {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return function () {
      return removePasswordTimeoutRef.current.forEach(function (timer) {
        if (timer) {
          clearTimeout(timer);
        }
      });
    };
  }, []);
  return removePasswordTimeout;
}

/***/ }),

/***/ 15516:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(89148);
__webpack_require__(72728);
__webpack_require__(67536);

/***/ }),

/***/ 54264:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasPrefixSuffix = hasPrefixSuffix;
// eslint-disable-next-line import/prefer-default-export
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}

/***/ }),

/***/ 72728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 41048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BaseInput: () => (/* reexport */ es_BaseInput),
  "default": () => (/* binding */ es)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(31760);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(33432);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(10124);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-input@0.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-input/es/utils/commonUtils.js
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }

  var event = e;

  if (e.type === 'click') {
    // Clone a new target for event.
    // Avoid the following usage, the setQuery method gets the original value.
    //
    // const [query, setQuery] = React.useState('');
    // <Input
    //   allowClear
    //   value={query}
    //   onChange={(e)=> {
    //     setQuery((prevStatus) => e.target.value);
    //   }}
    // />
    var currentTarget = target.cloneNode(true); // click clear icon

    event = Object.create(e, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = '';
    onChange(event);
    return;
  } // Trigger by composition event, this means we need force change the input value


  if (targetValue !== undefined) {
    event = Object.create(e, {
      target: {
        value: target
      },
      currentTarget: {
        value: target
      }
    });
    target.value = targetValue;
    onChange(event);
    return;
  }

  onChange(event);
}
function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option); // Selection content

  var _ref = option || {},
      cursor = _ref.cursor;

  if (cursor) {
    var len = element.value.length;

    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;

      case 'end':
        element.setSelectionRange(len, len);
        break;

      default:
        element.setSelectionRange(0, len);
    }
  }
}
function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return String(value);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-input@0.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-input/es/BaseInput.js






var BaseInput = function BaseInput(props) {
  var inputElement = props.inputElement,
      prefixCls = props.prefixCls,
      prefix = props.prefix,
      suffix = props.suffix,
      addonBefore = props.addonBefore,
      addonAfter = props.addonAfter,
      className = props.className,
      style = props.style,
      affixWrapperClassName = props.affixWrapperClassName,
      groupClassName = props.groupClassName,
      wrapperClassName = props.wrapperClassName,
      disabled = props.disabled,
      readOnly = props.readOnly,
      focused = props.focused,
      triggerFocus = props.triggerFocus,
      allowClear = props.allowClear,
      value = props.value,
      handleReset = props.handleReset,
      hidden = props.hidden;
  var containerRef = (0,react.useRef)(null);

  var onInputClick = function onInputClick(e) {
    var _containerRef$current;

    if ((_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e.target)) {
      triggerFocus === null || triggerFocus === void 0 ? void 0 : triggerFocus();
    }
  }; // ================== Clear Icon ================== //


  var getClearIcon = function getClearIcon() {
    var _classNames;

    if (!allowClear) {
      return null;
    }

    var needClear = !disabled && !readOnly && value;
    var clearIconCls = "".concat(prefixCls, "-clear-icon");
    var iconNode = (0,esm_typeof/* default */.c)(allowClear) === 'object' && allowClear !== null && allowClear !== void 0 && allowClear.clearIcon ? allowClear.clearIcon : '✖';
    return /*#__PURE__*/react.createElement("span", {
      onClick: handleReset // Do not trigger onBlur when clear input
      // https://github.com/ant-design/ant-design/issues/31200
      ,
      onMouseDown: function onMouseDown(e) {
        return e.preventDefault();
      },
      className: classnames_default()(clearIconCls, (_classNames = {}, (0,defineProperty/* default */.c)(_classNames, "".concat(clearIconCls, "-hidden"), !needClear), (0,defineProperty/* default */.c)(_classNames, "".concat(clearIconCls, "-has-suffix"), !!suffix), _classNames)),
      role: "button",
      tabIndex: -1
    }, iconNode);
  };

  var element = /*#__PURE__*/(0,react.cloneElement)(inputElement, {
    value: value,
    hidden: hidden
  }); // ================== Prefix & Suffix ================== //

  if (hasPrefixSuffix(props)) {
    var _classNames2;

    var affixWrapperPrefixCls = "".concat(prefixCls, "-affix-wrapper");
    var affixWrapperCls = classnames_default()(affixWrapperPrefixCls, (_classNames2 = {}, (0,defineProperty/* default */.c)(_classNames2, "".concat(affixWrapperPrefixCls, "-disabled"), disabled), (0,defineProperty/* default */.c)(_classNames2, "".concat(affixWrapperPrefixCls, "-focused"), focused), (0,defineProperty/* default */.c)(_classNames2, "".concat(affixWrapperPrefixCls, "-readonly"), readOnly), (0,defineProperty/* default */.c)(_classNames2, "".concat(affixWrapperPrefixCls, "-input-with-clear-btn"), suffix && allowClear && value), _classNames2), !hasAddon(props) && className, affixWrapperClassName);
    var suffixNode = (suffix || allowClear) && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-suffix")
    }, getClearIcon(), suffix);
    element = /*#__PURE__*/react.createElement("span", {
      className: affixWrapperCls,
      style: style,
      hidden: !hasAddon(props) && hidden,
      onClick: onInputClick,
      ref: containerRef
    }, prefix && /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-prefix")
    }, prefix), /*#__PURE__*/(0,react.cloneElement)(inputElement, {
      style: null,
      value: value,
      hidden: null
    }), suffixNode);
  } // ================== Addon ================== //


  if (hasAddon(props)) {
    var wrapperCls = "".concat(prefixCls, "-group");
    var addonCls = "".concat(wrapperCls, "-addon");
    var mergedWrapperClassName = classnames_default()("".concat(prefixCls, "-wrapper"), wrapperCls, wrapperClassName);
    var mergedGroupClassName = classnames_default()("".concat(prefixCls, "-group-wrapper"), className, groupClassName); // Need another wrapper for changing display:table to display:inline-block
    // and put style prop in wrapper

    return /*#__PURE__*/react.createElement("span", {
      className: mergedGroupClassName,
      style: style,
      hidden: hidden
    }, /*#__PURE__*/react.createElement("span", {
      className: mergedWrapperClassName
    }, addonBefore && /*#__PURE__*/react.createElement("span", {
      className: addonCls
    }, addonBefore), /*#__PURE__*/(0,react.cloneElement)(element, {
      style: null,
      hidden: null
    }), addonAfter && /*#__PURE__*/react.createElement("span", {
      className: addonCls
    }, addonAfter)));
  }

  return element;
};

/* harmony default export */ const es_BaseInput = (BaseInput);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(26464);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4731);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(95484);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(13608);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(22744);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(64240);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-input@0.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-input/es/Input.js






var _excluded = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "type", "inputClassName"];






var Input = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var autoComplete = props.autoComplete,
      onChange = props.onChange,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onPressEnter = props.onPressEnter,
      onKeyDown = props.onKeyDown,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-input' : _props$prefixCls,
      disabled = props.disabled,
      htmlSize = props.htmlSize,
      className = props.className,
      maxLength = props.maxLength,
      suffix = props.suffix,
      showCount = props.showCount,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      inputClassName = props.inputClassName,
      rest = (0,objectWithoutProperties/* default */.c)(props, _excluded);

  var _useMergedState = (0,useMergedState/* default */.c)(props.defaultValue, {
    value: props.value
  }),
      _useMergedState2 = (0,slicedToArray/* default */.c)(_useMergedState, 2),
      value = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.c)(_useState, 2),
      focused = _useState2[0],
      setFocused = _useState2[1];

  var inputRef = (0,react.useRef)(null);

  var focus = function focus(option) {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
  };

  (0,react.useImperativeHandle)(ref, function () {
    return {
      focus: focus,
      blur: function blur() {
        var _inputRef$current;

        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.blur();
      },
      setSelectionRange: function setSelectionRange(start, end, direction) {
        var _inputRef$current2;

        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.setSelectionRange(start, end, direction);
      },
      select: function select() {
        var _inputRef$current3;

        (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.select();
      },
      input: inputRef.current
    };
  });
  (0,react.useEffect)(function () {
    setFocused(function (prev) {
      return prev && disabled ? false : prev;
    });
  }, [disabled]);

  var handleChange = function handleChange(e) {
    if (props.value === undefined) {
      setValue(e.target.value);
    }

    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (onPressEnter && e.key === 'Enter') {
      onPressEnter(e);
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  };

  var handleFocus = function handleFocus(e) {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };

  var handleBlur = function handleBlur(e) {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };

  var handleReset = function handleReset(e) {
    setValue('');
    focus();

    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };

  var getInputElement = function getInputElement() {
    // Fix https://fb.me/react-unknown-prop
    var otherProps = (0,omit/* default */.c)(props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', // Input elements must be either controlled or uncontrolled,
    // specify either the value prop, or the defaultValue prop, but not both.
    'defaultValue', 'showCount', 'affixWrapperClassName', 'groupClassName', 'inputClassName', 'wrapperClassName', 'htmlSize']);
    return /*#__PURE__*/react.createElement("input", (0,esm_extends/* default */.c)({
      autoComplete: autoComplete
    }, otherProps, {
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      className: classnames_default()(prefixCls, (0,defineProperty/* default */.c)({}, "".concat(prefixCls, "-disabled"), disabled), inputClassName, !hasAddon(props) && !hasPrefixSuffix(props) && className),
      ref: inputRef,
      size: htmlSize,
      type: type
    }));
  };

  var getSuffix = function getSuffix() {
    // Max length value
    var hasMaxLength = Number(maxLength) > 0;

    if (suffix || showCount) {
      var val = fixControlledValue(value);

      var valueLength = (0,toConsumableArray/* default */.c)(val).length;

      var dataCount = (0,esm_typeof/* default */.c)(showCount) === 'object' ? showCount.formatter({
        value: val,
        count: valueLength,
        maxLength: maxLength
      }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
      return /*#__PURE__*/react.createElement(react.Fragment, null, !!showCount && /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-show-count-suffix"), (0,defineProperty/* default */.c)({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix))
      }, dataCount), suffix);
    }

    return null;
  };

  return /*#__PURE__*/react.createElement(es_BaseInput, (0,esm_extends/* default */.c)({}, rest, {
    prefixCls: prefixCls,
    className: className,
    inputElement: getInputElement(),
    handleReset: handleReset,
    value: fixControlledValue(value),
    focused: focused,
    triggerFocus: focus,
    suffix: getSuffix(),
    disabled: disabled
  }));
});
/* harmony default export */ const es_Input = (Input);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-input@0.1.4_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-input/es/index.js



/* harmony default export */ const es = (es_Input);

/***/ }),

/***/ 54184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _rs: () => (/* reexport */ _rs),
  "default": () => (/* binding */ es)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4731);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(72288);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(75808);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(96392);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(33432);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(88852);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(80512);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/Collection.js

var CollectionContext = /*#__PURE__*/react.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = react.useRef(0);
  var resizeInfosRef = react.useRef([]);
  var onCollectionResize = react.useContext(CollectionContext);
  var onResize = react.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });

    // Continue bubbling if parent exist
    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/react.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/resize-observer-polyfill@1.5.1/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(67071);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/utils/observerUtil.js

// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
}

// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new ResizeObserver_es/* default */.c(onResize);

// Dev env only
var _el = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
var _rs =  false ? 0 : null; // eslint-disable-line

// ============================== Observe ==============================
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(74768);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(8612);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(38860);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__(5376);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js





/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.c)(DomWrapper, _React$Component);
  var _super = (0,createSuper/* default */.c)(DomWrapper);
  function DomWrapper() {
    (0,classCallCheck/* default */.c)(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.c)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(react.Component);

;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/SingleObserver/index.js








function SingleObserver(props, ref) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = react.useRef(null);
  var wrapperRef = react.useRef(null);
  var onCollectionResize = react.useContext(CollectionContext);

  // =========================== Children ===========================
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;

  // ============================= Size =============================
  var sizeRef = react.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });

  // ============================= Ref ==============================
  var canRef = !isRenderProps && /*#__PURE__*/react.isValidElement(mergedChildren) && (0,es_ref/* supportRef */.QD)(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = (0,es_ref/* useComposeRef */.BG)(originRef, elementRef);
  var getDom = function getDom() {
    var _elementRef$current;
    return (0,findDOMNode/* default */.c)(elementRef.current) || (
    // Support `nativeElement` format
    elementRef.current && (0,esm_typeof/* default */.c)(elementRef.current) === 'object' ? (0,findDOMNode/* default */.c)((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || (0,findDOMNode/* default */.c)(wrapperRef.current);
  };
  react.useImperativeHandle(ref, function () {
    return getDom();
  });

  // =========================== Observe ============================
  var propsRef = react.useRef(props);
  propsRef.current = props;

  // Handler
  var onInternalResize = react.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;

    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size;

      // IE is strange, right?
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = (0,objectSpread2/* default */.c)((0,objectSpread2/* default */.c)({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });

      // Let collection know what happened
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);

  // Dynamic observe
  react.useEffect(function () {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function () {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);

  // ============================ Render ============================
  return /*#__PURE__*/react.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/react.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/react.forwardRef(SingleObserver);
if (false) {}
/* harmony default export */ const es_SingleObserver = (RefSingleObserver);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/index.js






var INTERNAL_PREFIX_KEY = 'rc-observer-key';


function ResizeObserver(props, ref) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : (0,toArray/* default */.c)(children);
  if (false) {}
  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/react.createElement(es_SingleObserver, (0,esm_extends/* default */.c)({}, props, {
      key: key,
      ref: index === 0 ? ref : undefined
    }), child);
  });
}
var RefResizeObserver = /*#__PURE__*/react.forwardRef(ResizeObserver);
if (false) {}
RefResizeObserver.Collection = Collection;
/* harmony default export */ const es = (RefResizeObserver);

/***/ }),

/***/ 73184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ResizableTextArea: () => (/* reexport */ es_ResizableTextArea),
  "default": () => (/* binding */ rc_textarea_es)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4731);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(74768);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(8612);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(38860);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/createSuper.js + 1 modules
var createSuper = __webpack_require__(5376);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(31760);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(96392);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(33432);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(95484);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(13608);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(54184);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(28280);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(81472);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.38.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(64240);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(10124);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-textarea@0.4.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-textarea/es/calculateNodeHeight.js
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n";
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'font-variant', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing', 'word-break'];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var sizingStyle = SIZING_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(';');
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tab-index', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hiddenTextarea);
  }
  // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577
  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  }
  // Copy all CSS properties that have an impact on the height of the content in
  // the textbox
  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
    paddingSize = _calculateNodeStyling.paddingSize,
    borderSize = _calculateNodeStyling.borderSize,
    boxSizing = _calculateNodeStyling.boxSizing,
    sizingStyle = _calculateNodeStyling.sizingStyle;
  // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content
  hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
  var minHeight = undefined;
  var maxHeight = undefined;
  var overflowY;
  var height = hiddenTextarea.scrollHeight;
  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' ';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }
  var style = {
    height: height,
    overflowY: overflowY,
    resize: 'none'
  };
  if (minHeight) {
    style.minHeight = minHeight;
  }
  if (maxHeight) {
    style.maxHeight = maxHeight;
  }
  return style;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-textarea@0.4.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-textarea/es/ResizableTextArea.js






var _excluded = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"];







var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-textarea' : _props$prefixCls,
    onPressEnter = props.onPressEnter,
    defaultValue = props.defaultValue,
    value = props.value,
    autoSize = props.autoSize,
    onResize = props.onResize,
    className = props.className,
    style = props.style,
    disabled = props.disabled,
    onChange = props.onChange,
    onInternalAutoSize = props.onInternalAutoSize,
    restProps = (0,objectWithoutProperties/* default */.c)(props, _excluded);
  // =============================== Value ================================
  var _useMergedState = (0,useMergedState/* default */.c)(defaultValue, {
      value: value,
      postState: function postState(val) {
        return val !== null && val !== void 0 ? val : '';
      }
    }),
    _useMergedState2 = (0,slicedToArray/* default */.c)(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setMergedValue = _useMergedState2[1];
  var onInternalChange = function onInternalChange(event) {
    setMergedValue(event.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  };
  // ================================ Ref =================================
  var textareaRef = react.useRef();
  react.useImperativeHandle(ref, function () {
    return {
      textArea: textareaRef.current
    };
  });
  // ============================== AutoSize ==============================
  var _React$useMemo = react.useMemo(function () {
      if (autoSize && (0,esm_typeof/* default */.c)(autoSize) === 'object') {
        return [autoSize.minRows, autoSize.maxRows];
      }
      return [];
    }, [autoSize]),
    _React$useMemo2 = (0,slicedToArray/* default */.c)(_React$useMemo, 2),
    minRows = _React$useMemo2[0],
    maxRows = _React$useMemo2[1];
  var needAutoSize = !!autoSize;
  // =============================== Scroll ===============================
  // https://github.com/ant-design/ant-design/issues/21870
  var fixFirefoxAutoScroll = function fixFirefoxAutoScroll() {
    try {
      // FF has bug with jump of scroll to top. We force back here.
      if (document.activeElement === textareaRef.current) {
        var _textareaRef$current = textareaRef.current,
          selectionStart = _textareaRef$current.selectionStart,
          selectionEnd = _textareaRef$current.selectionEnd,
          scrollTop = _textareaRef$current.scrollTop;
        // Fix Safari bug which not rollback when break line
        // This makes Chinese IME can't input. Do not fix this
        // const { value: tmpValue } = textareaRef.current;
        // textareaRef.current.value = '';
        // textareaRef.current.value = tmpValue;
        textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
        textareaRef.current.scrollTop = scrollTop;
      }
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  };
  // =============================== Resize ===============================
  var _React$useState = react.useState(RESIZE_STABLE),
    _React$useState2 = (0,slicedToArray/* default */.c)(_React$useState, 2),
    resizeState = _React$useState2[0],
    setResizeState = _React$useState2[1];
  var _React$useState3 = react.useState(),
    _React$useState4 = (0,slicedToArray/* default */.c)(_React$useState3, 2),
    autoSizeStyle = _React$useState4[0],
    setAutoSizeStyle = _React$useState4[1];
  var startResize = function startResize() {
    setResizeState(RESIZE_START);
    if (false) {}
  };
  // Change to trigger resize measure
  (0,useLayoutEffect/* default */.c)(function () {
    if (needAutoSize) {
      startResize();
    }
  }, [value, minRows, maxRows, needAutoSize]);
  (0,useLayoutEffect/* default */.c)(function () {
    if (resizeState === RESIZE_START) {
      setResizeState(RESIZE_MEASURING);
    } else if (resizeState === RESIZE_MEASURING) {
      var textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);
      // Safari has bug that text will keep break line on text cut when it's prev is break line.
      // ZombieJ: This not often happen. So we just skip it.
      // const { selectionStart, selectionEnd, scrollTop } = textareaRef.current;
      // const { value: tmpValue } = textareaRef.current;
      // textareaRef.current.value = '';
      // textareaRef.current.value = tmpValue;
      // if (document.activeElement === textareaRef.current) {
      //   textareaRef.current.scrollTop = scrollTop;
      //   textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
      // }
      setResizeState(RESIZE_STABLE);
      setAutoSizeStyle(textareaStyles);
    } else {
      fixFirefoxAutoScroll();
    }
  }, [resizeState]);
  // We lock resize trigger by raf to avoid Safari warning
  var resizeRafRef = react.useRef();
  var cleanRaf = function cleanRaf() {
    raf/* default */.c.cancel(resizeRafRef.current);
  };
  var onInternalResize = function onInternalResize(size) {
    if (resizeState === RESIZE_STABLE) {
      onResize === null || onResize === void 0 ? void 0 : onResize(size);
      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = (0,raf/* default */.c)(function () {
          startResize();
        });
      }
    }
  };
  react.useEffect(function () {
    return cleanRaf;
  }, []);
  // =============================== Render ===============================
  var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
  var mergedStyle = (0,objectSpread2/* default */.c)((0,objectSpread2/* default */.c)({}, style), mergedAutoSizeStyle);
  if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
    mergedStyle.overflowY = 'hidden';
    mergedStyle.overflowX = 'hidden';
  }
  return /*#__PURE__*/react.createElement(es["default"], {
    onResize: onInternalResize,
    disabled: !(autoSize || onResize)
  }, /*#__PURE__*/react.createElement("textarea", (0,esm_extends/* default */.c)({}, restProps, {
    ref: textareaRef,
    style: mergedStyle,
    className: classnames_default()(prefixCls, className, (0,defineProperty/* default */.c)({}, "".concat(prefixCls, "-disabled"), disabled)),
    disabled: disabled,
    value: mergedValue,
    onChange: onInternalChange
  })));
});
/* harmony default export */ const es_ResizableTextArea = (ResizableTextArea);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-textarea@0.4.7_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/rc-textarea/es/index.js







var TextArea = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.c)(TextArea, _React$Component);
  var _super = (0,createSuper/* default */.c)(TextArea);
  function TextArea(props) {
    var _this;
    (0,classCallCheck/* default */.c)(this, TextArea);
    _this = _super.call(this, props);
    _this.resizableTextArea = void 0;
    _this.focus = function () {
      _this.resizableTextArea.textArea.focus();
    };
    _this.saveTextArea = function (resizableTextArea) {
      _this.resizableTextArea = resizableTextArea;
    };
    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;
      _this.setValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };
    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
        onPressEnter = _this$props.onPressEnter,
        onKeyDown = _this$props.onKeyDown;
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };
    var value = typeof props.value === 'undefined' || props.value === null ? props.defaultValue : props.value;
    _this.state = {
      value: value
    };
    return _this;
  }
  (0,createClass/* default */.c)(TextArea, [{
    key: "setValue",
    value: function setValue(value, callback) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        }, callback);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.resizableTextArea.textArea.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(es_ResizableTextArea, (0,esm_extends/* default */.c)({}, this.props, {
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        ref: this.saveTextArea
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }
      return null;
    }
  }]);
  return TextArea;
}(react.Component);

/* harmony default export */ const rc_textarea_es = (TextArea);

/***/ }),

/***/ 22744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ omit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96392);

function omit(obj, fields) {
  var clone = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .c)({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}

/***/ })

}]);