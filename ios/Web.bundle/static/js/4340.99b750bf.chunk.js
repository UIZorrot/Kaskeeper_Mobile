(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[4340],{

/***/ 51408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(128)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneElement = cloneElement;
exports.isFragment = isFragment;
exports.isValidElement = void 0;
exports.replaceElement = replaceElement;
var React = _interopRequireWildcard(__webpack_require__(96651));
var isValidElement = exports.isValidElement = React.isValidElement;
function isFragment(child) {
  return child && isValidElement(child) && child.type === React.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) {
    return replacement;
  }
  return /*#__PURE__*/React.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

/***/ }),

/***/ 19968:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tupleNum = exports.tuple = void 0;
// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = exports.tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
var tupleNum = exports.tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return args;
};

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

/***/ 51676:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ KRC20Item)
/* harmony export */ });
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23932);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77980);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48818);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37656);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83120);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70884);
/* harmony import */ var _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47460);
/* harmony import */ var _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51932);
/* harmony import */ var _ui_images_index_Minted_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44597);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_0__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_1__, _ui_components__WEBPACK_IMPORTED_MODULE_3__]);
([_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_0__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_1__, _ui_components__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function KRC20Item(props) {
  const {
    item,
    ...restProps
  } = props;
  const amt = item.amt ? item.amt : item.max;
  const amt_abs = amt < 0 ? amt * -1 : amt;
  const {
    activeToken
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_0__/* .useAccountContext */ .wB)();
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_1__/* .useNavigate */ .i)();
  const handleclick = () => {
    // 格式化 txDetail，确保符合 TxDetailScreen 需要的结构
    const formattedTxDetail = {
      transaction_id: item.hashRev,
      // 交易ID
      hash: item.hashRev,
      // 哈希
      is_accepted: item.txAccept === '1',
      // 是否接受
      mass: item.opScore,
      // 操作分数（或其他数据）
      block_time: new Date(parseInt(item.mtsAdd)).toLocaleString(),
      // 时间戳，转换为日期格式
      subnetwork_id: item.txId,
      // 子网络ID（根据需求调整）
      accepting_block_blue_score: item.feeRev,
      // 其他相关字段
      accepting_block_hash: item.hashRev // 区块哈希（可根据需求调整）
      // inputs: [{
      //   previous_outpoint_hash: item.from,           // 输入地址
      //   previous_outpoint_amount: item.amt,         // 输入金额
      //   tick: item.tick || item.name,
      //   dec: item.dec,
      // }]
      // outputs: [{
      //   script_public_key_address: item.to,             // 输出地址
      //   amount: item.opAccept === '-1' ? '' : item.amt,             // 输出金额
      //   tick: item.tick || item.name,
      //   type: item.type,
      //   dec: item.dec,
      // }]
    };
    if (item.op === 'burn') {
      formattedTxDetail.burn = [{
        script_public_key_address: item.from,
        // 输出地址
        amount: item.amt,
        // 输出金额
        tick: item.tick || item.name,
        type: item.type,
        dec: item.dec
      }];
    }
    if (item.to) {
      formattedTxDetail.inputs = [{
        previous_outpoint_hash: item.from,
        // 输入地址
        previous_outpoint_amount: item.amt,
        // 输入金额
        tick: item.tick || item.name,
        dec: item.dec
      }];
      formattedTxDetail.outputs = [{
        script_public_key_address: item.to,
        // 输出地址
        amount: item.opAccept === '-1' ? '' : item.amt,
        // 输出金额
        tick: item.tick || item.name,
        type: item.type,
        dec: item.dec,
        isFaild: item.opAccept === '-1'
      }];
    }

    // 传递格式化后的 txDetail 和 txId
    navigate("TxDetailScreen", {
      txDetail: formattedTxDetail,
      txId: item.hashRev
    });
  };

  // 计算时间差
  const calculateTimeAgo = timestamp => {
    const now = Date.now(); // 当前时间戳（毫秒）
    const diffInSeconds = (now - timestamp) / 1000; // 转换为秒

    if (diffInSeconds < 60) {
      return "".concat(Math.floor(diffInSeconds), " seconds ago"); // 小于1分钟
    } else if (diffInSeconds < 3600) {
      return "".concat(Math.floor(diffInSeconds / 60), " minutes ago"); // 小于1小时
    } else if (diffInSeconds < 86400) {
      return "".concat(Math.floor(diffInSeconds / 3600), " hours ago"); // 小于1天
    } else if (diffInSeconds < 2592000) {
      return "".concat(Math.floor(diffInSeconds / 86400), " days ago"); // 小于30天
    } else if (diffInSeconds < 31536000) {
      return "".concat(Math.floor(diffInSeconds / 2592000), " months ago"); // 小于1年
    } else {
      return "".concat(Math.floor(diffInSeconds / 31536000), " years ago"); // 大于1年
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .M1, {
    style: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      border: '1px solid rgba(10,36,99,0.15)',
      padding: 12,
      transition: 'all 0.3s',
      alignItems: 'start'
    },
    classname: "hover flex mt-3 first:!mt-0",
    justifyBetween: true
    // className="p-2 rounded-lg flex items-center justify-between mt-5 first:mt-0"
    ,
    ...restProps,
    onClick: handleclick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
      className: "space-y-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
        className: "flex items-center gap-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          src: item.op === 'transfer' ? item.type === 'Sent' ? _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_5__ : _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_4__ : _ui_images_index_Minted_svg__WEBPACK_IMPORTED_MODULE_6__,
          alt: "",
          width: 14
        }), item.op === 'transfer' ? item.type : item.op]
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
        children: ["Asset: ", item.tick || item.name]
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
        variant: "body1",
        color: "text.secondary",
        children: [" ", calculateTimeAgo(item.mtsMod)]
      }), " "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
      className: "space-y-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
        align: "right",
        className: "h-[21px]",
        children: [item.opAccept === '1' ? item.amt ? (item.type === 'Recieved' ? '+' : '-') + (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .iy)(amt_abs, (activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec) || 8) : '' : "Failed/Refund", " ", amt ? item.tick : ""]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
        align: "right",
        className: "capitalize",
        children: ["Hash: ", (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .shortAddress */ .SO)(item.hashRev), " "]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
        align: "right",
        className: "gap-1",
        children: item.opAccept === '1' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "!text-[#0BE4AB]",
          children: "success"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "!text-[#ff9800]",
          children: item.opError || 'Failed'
        })
      }), " "]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27828);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24808);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50535);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2488);





const TabPaper = _ref => {
  let {
    tabs,
    activeKey,
    onChange,
    className = '',
    style = {}
  } = _ref;
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
    className: "p-1 grid grid-cols-".concat(tabs.length, " cursor-pointer gap-4 ").concat(className),
    style: style,
    children: tabs.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c, {
      className: "text-center p-2",
      onClick: () => onChange(tab.key),
      sx: {
        background: activeKey === tab.key ? theme.palette.background.default : 'transparent',
        boxShadow: 'unset',
        color: activeKey === tab.key ? '#0A2463' : 'rgba(10,36,99,0.65)'
      },
      children: tab.label
    }, tab.key))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPaper);

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

/***/ 79132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(11140)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = omit;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(16840));
function omit(obj, fields) {
  var clone = (0, _objectSpread2.default)({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}

/***/ }),

/***/ 44597:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/Minted.0d9cb733.svg";

/***/ }),

/***/ 47460:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/Receive.57bc0722.svg";

/***/ }),

/***/ 51932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/Send.f8d9c1b2.svg";

/***/ })

}]);