"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[2453],{

/***/ 64104:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = wrapperRaf;
var _raf = _interopRequireDefault(__webpack_require__(4048));
var id = 0;
var ids = {};
// Support call raf with delay specified frame
function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;
  function internalCallback() {
    restFrames -= 1;
    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0, _raf["default"])(internalCallback);
    }
  }
  ids[myId] = (0, _raf["default"])(internalCallback);
  return myId;
}
wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;
  _raf["default"].cancel(ids[pid]);
  delete ids[pid];
};
wrapperRaf.ids = ids; // export this for test usage

/***/ }),

/***/ 98539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(77108));
var _createClass2 = _interopRequireDefault(__webpack_require__(21964));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(82491));
var _inherits2 = _interopRequireDefault(__webpack_require__(12144));
var _createSuper2 = _interopRequireDefault(__webpack_require__(3064));
var _dynamicCSS = __webpack_require__(18296);
var _ref2 = __webpack_require__(26800);
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var _raf = _interopRequireDefault(__webpack_require__(64104));
var _reactNode = __webpack_require__(51408);
var styleForPseudo;
// Where el is the DOM element you'd like to test for visibility
function isHidden(element) {
  if (false) {}
  return !element || element.offsetParent === null || element.hidden;
}
function getValidateContainer(nodeRoot) {
  if (nodeRoot instanceof Document) {
    return nodeRoot.body;
  }
  return Array.from(nodeRoot.childNodes).find(function (ele) {
    return (ele === null || ele === void 0 ? void 0 : ele.nodeType) === Node.ELEMENT_NODE;
  });
}
function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
var Wave = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Wave, _React$Component);
  var _super = (0, _createSuper2["default"])(Wave);
  function Wave() {
    var _this;
    (0, _classCallCheck2["default"])(this, Wave);
    _this = _super.apply(this, arguments);
    _this.containerRef = /*#__PURE__*/React.createRef();
    _this.animationStart = false;
    _this.destroyed = false;
    _this.onClick = function (node, waveColor) {
      var _a, _b;
      var _this$props = _this.props,
        insertExtraNode = _this$props.insertExtraNode,
        disabled = _this$props.disabled;
      if (disabled || !node || isHidden(node) || node.className.includes('-leave')) {
        return;
      }
      _this.extraNode = document.createElement('div');
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
        extraNode = _assertThisInitialize.extraNode;
      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(''), "-click-animating-node");
      var attributeName = _this.getAttributeName();
      node.setAttribute(attributeName, 'true');
      // Not white or transparent or grey
      if (waveColor && waveColor !== '#fff' && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && waveColor !== 'rgba(255, 255, 255, 1)' && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) &&
      // any transparent rgba color
      waveColor !== 'transparent') {
        extraNode.style.borderColor = waveColor;
        var nodeRoot = ((_a = node.getRootNode) === null || _a === void 0 ? void 0 : _a.call(node)) || node.ownerDocument;
        var nodeBody = (_b = getValidateContainer(nodeRoot)) !== null && _b !== void 0 ? _b : nodeRoot;
        styleForPseudo = (0, _dynamicCSS.updateCSS)("\n      [".concat(getPrefixCls(''), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(''), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }"), 'antd-wave', {
          csp: _this.csp,
          attachTo: nodeBody
        });
      }
      if (insertExtraNode) {
        node.appendChild(extraNode);
      }
      ['transition', 'animation'].forEach(function (name) {
        node.addEventListener("".concat(name, "start"), _this.onTransitionStart);
        node.addEventListener("".concat(name, "end"), _this.onTransitionEnd);
      });
    };
    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }
      var node = _this.containerRef.current;
      if (!e || e.target !== node || _this.animationStart) {
        return;
      }
      _this.resetEffect(node);
    };
    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }
      _this.resetEffect(e.target);
    };
    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.includes('disabled')) {
        return;
      }
      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }
        _this.resetEffect(node);
        // Get wave color from target
        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') ||
        // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);
        _raf["default"].cancel(_this.animationStartId);
        _this.animationStart = true;
        // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.
        _this.animationStartId = (0, _raf["default"])(function () {
          _this.animationStart = false;
        }, 10);
      };
      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };
    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      if (! /*#__PURE__*/React.isValidElement(children)) return children;
      var ref = _this.containerRef;
      if ((0, _ref2.supportRef)(children)) {
        ref = (0, _ref2.composeRef)(children.ref, _this.containerRef);
      }
      return (0, _reactNode.cloneElement)(children, {
        ref: ref
      });
    };
    return _this;
  }
  (0, _createClass2["default"])(Wave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.destroyed = false;
      var node = this.containerRef.current;
      if (!node || node.nodeType !== 1) {
        return;
      }
      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }
      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }
      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(''), "-click-animating") : "".concat(getPrefixCls(''), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      var _this2 = this;
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }
      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466
      if (styleForPseudo) {
        styleForPseudo.innerHTML = '';
      }
      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }
      ['transition', 'animation'].forEach(function (name) {
        node.removeEventListener("".concat(name, "start"), _this2.onTransitionStart);
        node.removeEventListener("".concat(name, "end"), _this2.onTransitionEnd);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderWave);
    }
  }]);
  return Wave;
}(React.Component);
Wave.contextType = _configProvider.ConfigContext;
var _default = exports["default"] = Wave;

/***/ }),

/***/ 76664:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _LoadingOutlined = _interopRequireDefault(__webpack_require__(65940));
var _rcMotion = _interopRequireDefault(__webpack_require__(16692));
var _react = _interopRequireDefault(__webpack_require__(96651));
var getCollapsedWidth = function getCollapsedWidth() {
  return {
    width: 0,
    opacity: 0,
    transform: 'scale(0)'
  };
};
var getRealWidth = function getRealWidth(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: 'scale(1)'
  };
};
var LoadingIcon = function LoadingIcon(_ref) {
  var prefixCls = _ref.prefixCls,
    loading = _ref.loading,
    existIcon = _ref.existIcon;
  var visible = !!loading;
  if (existIcon) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(prefixCls, "-loading-icon")
    }, /*#__PURE__*/_react["default"].createElement(_LoadingOutlined["default"], null));
  }
  return /*#__PURE__*/_react["default"].createElement(_rcMotion["default"], {
    visible: visible,
    // We do not really use this motionName
    motionName: "".concat(prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, function (_ref2, ref) {
    var className = _ref2.className,
      style = _ref2.style;
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(prefixCls, "-loading-icon"),
      style: style,
      ref: ref
    }, /*#__PURE__*/_react["default"].createElement(_LoadingOutlined["default"], {
      className: className
    }));
  });
};
var _default = exports["default"] = LoadingIcon;

/***/ }),

/***/ 66352:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.GroupSizeContext = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(68184));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var _warning = _interopRequireDefault(__webpack_require__(34224));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var GroupSizeContext = exports.GroupSizeContext = /*#__PURE__*/React.createContext(undefined);
var ButtonGroup = function ButtonGroup(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls,
    size = props.size,
    className = props.className,
    others = __rest(props, ["prefixCls", "size", "className"]);
  var prefixCls = getPrefixCls('btn-group', customizePrefixCls);
  // large => lg
  // small => sm
  var sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    case 'middle':
    case undefined:
      break;
    default:
       false ? 0 : void 0;
  }
  var classes = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/React.createElement(GroupSizeContext.Provider, {
    value: size
  }, /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
    className: classes
  })));
};
var _default = exports["default"] = ButtonGroup;

/***/ }),

/***/ 10016:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.convertLegacyProps = convertLegacyProps;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(68184));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(67204));
var _typeof2 = _interopRequireDefault(__webpack_require__(18931));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var _omit = _interopRequireDefault(__webpack_require__(79132));
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var _DisabledContext = _interopRequireDefault(__webpack_require__(73756));
var _SizeContext = _interopRequireDefault(__webpack_require__(90712));
var _Compact = __webpack_require__(72328);
var _reactNode = __webpack_require__(51408);
var _type = __webpack_require__(19968);
var _warning = _interopRequireDefault(__webpack_require__(34224));
var _wave = _interopRequireDefault(__webpack_require__(98539));
var _buttonGroup = _interopRequireWildcard(__webpack_require__(66352));
var _LoadingIcon = _interopRequireDefault(__webpack_require__(76664));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/button-has-type */

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}
function isUnBorderedButtonType(type) {
  return type === 'text' || type === 'link';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child === null || child === undefined) {
    return;
  }
  var SPACE = needInserted ? ' ' : '';
  // strictNullChecks oops.
  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0, _reactNode.cloneElement)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }
  if (typeof child === 'string') {
    return isTwoCNChar(child) ? /*#__PURE__*/React.createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/React.createElement("span", null, child);
  }
  if ((0, _reactNode.isFragment)(child)) {
    return /*#__PURE__*/React.createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  React.Children.forEach(children, function (child) {
    var type = (0, _typeof2["default"])(child);
    var isCurrentChildPure = type === 'string' || type === 'number';
    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  // Pass to React.Children.map to auto fill key
  return React.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}
var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'link', 'text');
var ButtonShapes = (0, _type.tuple)('default', 'circle', 'round');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');
function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type: type
  };
}
var InternalButton = function InternalButton(props, ref) {
  var _classNames;
  var _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    customizePrefixCls = props.prefixCls,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    danger = props.danger,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'default' : _props$shape,
    customizeSize = props.size,
    customDisabled = props.disabled,
    className = props.className,
    children = props.children,
    icon = props.icon,
    _props$ghost = props.ghost,
    ghost = _props$ghost === void 0 ? false : _props$ghost,
    _props$block = props.block,
    block = _props$block === void 0 ? false : _props$block,
    _props$htmlType = props.htmlType,
    htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
    rest = __rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "disabled", "className", "children", "icon", "ghost", "block", "htmlType"]);
  var size = React.useContext(_SizeContext["default"]);
  // ===================== Disabled =====================
  var disabled = React.useContext(_DisabledContext["default"]);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  var groupSize = React.useContext(_buttonGroup.GroupSizeContext);
  var _React$useState = React.useState(!!loading),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    innerLoading = _React$useState2[0],
    setLoading = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    hasTwoCNChar = _React$useState4[0],
    setHasTwoCNChar = _React$useState4[1];
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
    direction = _React$useContext.direction;
  var buttonRef = ref || /*#__PURE__*/React.createRef();
  var isNeedInserted = function isNeedInserted() {
    return React.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type);
  };
  var fixTwoCNChar = function fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }
    var buttonText = buttonRef.current.textContent;
    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  };
  // =============== Update Loading ===============
  var loadingOrDelay = typeof loading === 'boolean' ? loading : (loading === null || loading === void 0 ? void 0 : loading.delay) || true;
  React.useEffect(function () {
    var delayTimer = null;
    if (typeof loadingOrDelay === 'number') {
      delayTimer = window.setTimeout(function () {
        delayTimer = null;
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
    return function () {
      if (delayTimer) {
        // in order to not perform a React state update on an unmounted component
        // and clear timer after 'loadingOrDelay' updated.
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    };
  }, [loadingOrDelay]);
  React.useEffect(fixTwoCNChar, [buttonRef]);
  var handleClick = function handleClick(e) {
    var onClick = props.onClick;
    // https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
   false ? 0 : void 0;
   false ? 0 : void 0;
  var prefixCls = getPrefixCls('btn', customizePrefixCls);
  var autoInsertSpace = autoInsertSpaceInButton !== false;
  var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
    compactSize = _useCompactItemContex.compactSize,
    compactItemClassnames = _useCompactItemContex.compactItemClassnames;
  var sizeClassNameMap = {
    large: 'lg',
    small: 'sm',
    middle: undefined
  };
  var sizeFullname = compactSize || groupSize || customizeSize || size;
  var sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : '';
  var iconType = innerLoading ? 'loading' : icon;
  var linkButtonRestProps = (0, _omit["default"])(rest, ['navigate']);
  var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(shape), shape !== 'default' && shape), "".concat(prefixCls, "-").concat(type), type), "".concat(prefixCls, "-").concat(sizeCls), sizeCls), "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), "".concat(prefixCls, "-background-ghost"), ghost && !isUnBorderedButtonType(type)), "".concat(prefixCls, "-loading"), innerLoading), "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace && !innerLoading), "".concat(prefixCls, "-block"), block), "".concat(prefixCls, "-dangerous"), !!danger), "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), linkButtonRestProps.href !== undefined && mergedDisabled)), compactItemClassnames, className);
  var iconNode = icon && !innerLoading ? icon : ( /*#__PURE__*/React.createElement(_LoadingIcon["default"], {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  }));
  var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
  if (linkButtonRestProps.href !== undefined) {
    return /*#__PURE__*/React.createElement("a", (0, _extends2["default"])({}, linkButtonRestProps, {
      className: classes,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids);
  }
  var buttonNode = /*#__PURE__*/React.createElement("button", (0, _extends2["default"])({}, rest, {
    type: htmlType,
    className: classes,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef
  }), iconNode, kids);
  if (isUnBorderedButtonType(type)) {
    return buttonNode;
  }
  return /*#__PURE__*/React.createElement(_wave["default"], {
    disabled: !!innerLoading
  }, buttonNode);
};
var Button = /*#__PURE__*/React.forwardRef(InternalButton);
if (false) {}
Button.Group = _buttonGroup["default"];
Button.__ANT_BUTTON = true;
var _default = exports["default"] = Button;

/***/ }),

/***/ 6248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _button = _interopRequireDefault(__webpack_require__(10016));
var _default = exports["default"] = _button["default"];

/***/ }),

/***/ 67536:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(89148);
__webpack_require__(50043);

/***/ }),

/***/ 72328:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = (__webpack_require__(128)["default"]);
var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useCompactItemContext = exports["default"] = exports.SpaceCompactItemContext = exports.NoCompactStyle = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(68184));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(78288));
var _classnames = _interopRequireDefault(__webpack_require__(10124));
var _toArray = _interopRequireDefault(__webpack_require__(13364));
var React = _interopRequireWildcard(__webpack_require__(96651));
var _configProvider = __webpack_require__(92252);
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var SpaceCompactItemContext = exports.SpaceCompactItemContext = /*#__PURE__*/React.createContext(null);
var useCompactItemContext = exports.useCompactItemContext = function useCompactItemContext(prefixCls, direction) {
  var compactItemContext = React.useContext(SpaceCompactItemContext);
  var compactItemClassnames = React.useMemo(function () {
    if (!compactItemContext) return '';
    var compactDirection = compactItemContext.compactDirection,
      isFirstItem = compactItemContext.isFirstItem,
      isLastItem = compactItemContext.isLastItem;
    var separator = compactDirection === 'vertical' ? '-vertical-' : '-';
    return (0, _classnames["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-compact").concat(separator, "item"), true), "".concat(prefixCls, "-compact").concat(separator, "first-item"), isFirstItem), "".concat(prefixCls, "-compact").concat(separator, "last-item"), isLastItem), "".concat(prefixCls, "-compact").concat(separator, "item-rtl"), direction === 'rtl'));
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames: compactItemClassnames
  };
};
var NoCompactStyle = exports.NoCompactStyle = function NoCompactStyle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
var CompactItem = function CompactItem(_a) {
  var children = _a.children,
    otherProps = __rest(_a, ["children"]);
  return /*#__PURE__*/React.createElement(SpaceCompactItemContext.Provider, {
    value: otherProps
  }, children);
};
var Compact = function Compact(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    directionConfig = _React$useContext.direction;
  var _props$size = props.size,
    size = _props$size === void 0 ? 'middle' : _props$size,
    direction = props.direction,
    block = props.block,
    customizePrefixCls = props.prefixCls,
    className = props.className,
    children = props.children,
    restProps = __rest(props, ["size", "direction", "block", "prefixCls", "className", "children"]);
  var prefixCls = getPrefixCls('space-compact', customizePrefixCls);
  var clx = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), directionConfig === 'rtl'), "".concat(prefixCls, "-block"), block), "".concat(prefixCls, "-vertical"), direction === 'vertical'), className);
  var compactItemContext = React.useContext(SpaceCompactItemContext);
  var childNodes = (0, _toArray["default"])(children);
  var nodes = React.useMemo(function () {
    return childNodes.map(function (child, i) {
      var key = child && child.key || "".concat(prefixCls, "-item-").concat(i);
      return /*#__PURE__*/React.createElement(CompactItem, {
        key: key,
        compactSize: size,
        compactDirection: direction,
        isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
        isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
      }, child);
    });
  }, [size, childNodes, compactItemContext]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: clx
  }, restProps), nodes);
};
var _default = exports["default"] = Compact;

/***/ }),

/***/ 50043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 13364:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = toArray;
var _react = _interopRequireDefault(__webpack_require__(96651));
var _reactIs = __webpack_require__(79896);
function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  _react.default.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0, _reactIs.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

/***/ }),

/***/ 4048:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf(num) {
  return clearTimeout(num);
};
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id);

      // Trigger
      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      });

      // Bind real raf id
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(id);
  return caf(realId);
};
if (false) {}
var _default = exports["default"] = wrapperRaf;

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