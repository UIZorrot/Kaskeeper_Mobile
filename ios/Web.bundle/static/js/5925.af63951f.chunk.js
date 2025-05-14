(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[5925],{

/***/ 2468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/Receive.57bc0722.svg";

/***/ }),

/***/ 10124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(9325);

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

/***/ 14304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 17778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

/***/ 24965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);


function Content(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: `h-full flex flex-col justify-between space-y-6 p-4 ${props.className ? props.className : ''}`,
    children: props.children
  });
}

/***/ }),

/***/ 28454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Db: () => (/* binding */ fetch_krc20_list),
/* harmony export */   Gm: () => (/* binding */ fetch_krc20),
/* harmony export */   c5: () => (/* binding */ fetch_tx),
/* harmony export */   v5: () => (/* binding */ fetch_Activity)
/* harmony export */ });
/* unused harmony export fetch_UTXO */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71083);


// [
//   {
//   address: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//   outpoint: {
//   transactionId: "61122b023061a8256de6d81ea6c73b82fe6d266eed990a3b083284978d86f609",
//   index: 0
//   },
//   utxoEntry: {
//   amount: "10488418979",
//   scriptPublicKey: {
//   scriptPublicKey: "20e08da324934af0d9eaecf051435a52752d66a8b686d8d7cc3f225887d0e957f3ac"
//   },
//   blockDaaScore: "82234251",
//   isCoinbase: true
//   }
//   }
// ]

async function fetch_UTXO(network, address) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log(`${rest_api_url(network)}addresses/${address}/utxos`);
  try {
    const res = await axios.get(`${rest_api_url(network)}addresses/${address}/utxos`, {
      headers,
      withCredentials: true // 如果需要处理跨域请求
    });
    return res.data; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}

// {
//   message: "successful",
//   prev: "825858630000",
//   next: "819459140000",
//   result: [
//     {
//       p: "KRC-20",
//       op: "mint",
//       tick: "MMSSDD",
//       amt: "100000000000",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825858630000",
//       hashRev: "31cf7059a9ef661781ae789f965cb85ce861a9b02bf9984fd310fde41613e681",
//       feeRev: "100001624",
//       txAccept: "1",
//       opAccept: "1",
//       opError: "",
//       checkpoint: "a983842832ec8accc7f10e49a3edfbaf3c5b96da9d312463f17be77faee61f8e",
//       mtsAdd: "1735151689594",
//       mtsMod: "1735151689594",
//     }, {
//       p: "KRC-20",
//       op: "deploy",
//       tick: "MMSSDQ",
//       max: "10000000000000000",
//       lim: "10000000000",
//       pre: "0",
//       dec: "8",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825850900000",
//       hashRev: "5352d61078f5e5419030edbc38ccfb1dce4e04652c33430d6df8783850ad2f0a",
//       feeRev: "100000003324",
//       txAccept: "1",
//       opAccept: "1",
//       opError: "",
//       checkpoint: "5ae77e4a0f37f7ff301e5485f549b3f0c62497dad56f34dcf723d4256404c9ba",
//       mtsAdd: "1735150949519",
//       mtsMod: "1735150949519",
//     }, {
//       p: "KRC-20",
//       op: "deploy",
//       tick: "JIENEQ",
//       max: "1000000000000",
//       lim: "100000",
//       pre: "0",
//       dec: "8",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825274750000",
//       hashRev: "81b972210810758ae112d0dc68fca3baa1b6d4cf77bb85a07f0a2fadabee35b9",
//       feeRev: "100000003324",
//       txAccept: "1",
//       opAccept: "-1",
//       opError: "tick existed",
//       checkpoint: "",
//       mtsAdd: "1735093622162",
//       mtsMod: "1735093622162",
//     }, {
//       p: "KRC-20",
//       op: "deploy",
//       tick: "MMSSDG",
//       max: "10000000000000000",
//       lim: "10000000000",
//       pre: "0",
//       dec: "8",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825259970000",
//       hashRev: "c92540c073421e474a5ed8e012e3a1382f04ab41183e80608fbc2de6d92ca70d",
//       feeRev: "100000003324",
//       txAccept: "1",
//       opAccept: "1",
//       opError: "",
//       checkpoint: "0de7aaa7cd29a5508e7ccfe108d7baae9fe5687eec3c56b9385f55ce279284a6",
//       mtsAdd: "1735092150303",
//       mtsMod: "1735092150303",
//     }
// }

async function fetch_krc20_list(network, address) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log(`${rest_api_url_krc20(network)}krc20/address/${address}/tokenlist`);
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(`${rest_api_url_krc20(network)}krc20/address/${address}/tokenlist`, {
      headers,
      withCredentials: true // 如果需要处理跨域请求
    });
    return res.data.result; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}
async function fetch_krc20(network, address, tick) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log(`${rest_api_url_krc20(network)}krc20/oplist?address=${address}&tick=${tick}`);
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(`${rest_api_url_krc20(network)}krc20/oplist?address=${address}&tick=${tick}`, {
      headers
      // withCredentials: true, // 如果需要处理跨域请求
    });
    return res.data.result; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}

// export async function fetch_krc20_oplist(network: string, address: string, tick: string) {
//   const headers = {
//     // 'X-Client': 'KasWare Wallet',
//     // 'X-Version': VERSION,
//     // 'x-address': this.clientAddress,
//     // 'x-flag': this.addressFlag + '',
//     // 'x-channel': CHANNEL,
//     // 'x-udid': this.store.deviceId,
//   };
//   console.log(`${rest_api_url_krc20(network)}krc20/oplist?address=${address}`)
//   try {
//     const res = await axios.get(`${rest_api_url_krc20(network)}krc20/oplist?address=${address}`, {
//       headers,
//       withCredentials: true, // 如果需要处理跨域请求
//     });
//     return res.data; // 返回实际数据
//   } catch (e: any) {
//     throw new Error('Network error: ' + e.message);
//   }
// }

// [
// {
//   subnetwork_id: "0000000000000000000000000000000000000000",
//   transaction_id: "f0fe3807cdbc3df2b00137875b5461e6b748ecaa2d792345dbda77d088ca2016",
//   hash: "9cb87d328116073b65c6bde9695b0c8515a1a41740c8e3245cf01473198fb8bb",
//   mass: "98890",
//   block_hash: [
//   "13d2c1c701f8c9f026f8e3effc233af1b11ec0701b330a097cc2107a26f7fe99"
//   ],
//   block_time: 1735193690277,
//   is_accepted: true,
//   accepting_block_hash: "755bf8b4d99b4db724e2ca991481f80ef71a3e499cff0b76e8949d34a9a2dd24",
//   accepting_block_blue_score: 81532868,
//   inputs: [
//     {
//       transaction_id: "f0fe3807cdbc3df2b00137875b5461e6b748ecaa2d792345dbda77d088ca2016",
//       index: 0,
//       previous_outpoint_hash: "949aa138192e3dbed7aac4be2e587e58e9d24d7008425ee3db277b6c5b80ce32",
//       previous_outpoint_index: "0",
//       previous_outpoint_resolved: null,
//       previous_outpoint_address: null,
//       previous_outpoint_amount: null,
//       signature_script: "415dc645e77cd726412371717aa4c39807a8d7401e7ace0dcdb020dd25e864a747731f8d7842a08bd95ca32d50762d4aa4fe7f0d8792322f92a2620a43a08d9bf801",
//       sig_op_count: "1"
//       }
//   ],
//   outputs: [
//   {
//   transaction_id: "f0fe3807cdbc3df2b00137875b5461e6b748ecaa2d792345dbda77d088ca2016",
//   index: 0,
//   amount: 922530241358,
//   script_public_key: "20e08da324934af0d9eaecf051435a52752d66a8b686d8d7cc3f225887d0e957f3ac",
//   script_public_key_address: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//   script_public_key_type: "pubkey",
//   accepting_block_hash: null
//   }
//   ]
//   }
// ]

async function fetch_Activity(network, address, limit, offest) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log(`${rest_api_url(network)}addresses/${address}/full-transactions?limit=${limit}&offset=${offest}`);
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(`${rest_api_url(network)}addresses/${address}/full-transactions?limit=${limit}&offset=${offest}`, {
      // headers,
      // withCredentials: true, // 如果需要处理跨域请求
    });
    return res.data; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}
async function fetch_tx(network, tx) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log(`${rest_api_url(network)}transactions/${tx}`);
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(`${rest_api_url(network)}transactions/${tx}`, {
      headers,
      withCredentials: true // 如果需要处理跨域请求
    });
    return res.data; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}
function rest_api_url(network) {
  if (network == 'testnet' || network == 'testnet-10' || network == 'tn10' || network == 'tn-10') {
    return 'https://api-tn10.kaspa.org/';
  }
  return 'https://api.kaspa.org/';
}
function rest_api_url_krc20(network) {
  if (network == 'testnet' || network == 'testnet-10' || network == 'tn10' || network == 'tn-10') {
    return 'https://tn10api.kasplex.org/v1/';
  }
  return 'https://api.kasplex.org/v1/';
}

// const a = await fetch_Activity('testnet-10', 'kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr', 10, 0);
// console.log(a);

/***/ }),

/***/ 31800:
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

/***/ 32831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 38221:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(23805),
    now = __webpack_require__(10124),
    toNumber = __webpack_require__(99374);

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

/***/ 40675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ KRC20Item)
/* harmony export */ });
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21999);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88658);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13108);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87164);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72260);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14073);
/* harmony import */ var _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2468);
/* harmony import */ var _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79427);
/* harmony import */ var _ui_images_index_Minted_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91874);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74848);
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
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_0__/* .useAccountContext */ .Um)();
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_1__/* .useNavigate */ .Z)();
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
      accepting_block_hash: item.hashRev,
      // 区块哈希（可根据需求调整）
      inputs: [{
        previous_outpoint_hash: item.from,
        // 输入地址
        previous_outpoint_amount: item.amt,
        // 输入金额
        tick: item.tick
      }],
      outputs: [{
        script_public_key_address: item.to,
        // 输出地址
        amount: item.amt,
        // 输出金额
        tick: item.tick,
        type: item.type
      }]
    };

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
      return `${Math.floor(diffInSeconds)} seconds ago`; // 小于1分钟
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)} minutes ago`; // 小于1小时
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)} hours ago`; // 小于1天
    } else if (diffInSeconds < 2592000) {
      return `${Math.floor(diffInSeconds / 86400)} days ago`; // 小于30天
    } else if (diffInSeconds < 31536000) {
      return `${Math.floor(diffInSeconds / 2592000)} months ago`; // 小于1年
    } else {
      return `${Math.floor(diffInSeconds / 31536000)} years ago`; // 大于1年
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zp, {
    style: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      border: '1px solid rgba(10,36,99,0.15)',
      padding: 12,
      marginTop: 12,
      transition: 'all 0.3s',
      alignItems: 'start'
    },
    className: "hover flex",
    justifyBetween: true
    // className="p-2 rounded-lg flex items-center justify-between mt-5 first:mt-0"
    ,
    ...restProps,
    onClick: handleclick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      className: "space-y-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        className: "flex items-center gap-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          src: item.op === 'transfer' ? item.type === 'Sent' ? _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_5__ : _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_4__ : _ui_images_index_Minted_svg__WEBPACK_IMPORTED_MODULE_6__,
          alt: "",
          width: 14
        }), item.op === 'transfer' ? item.type : item.op]
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        children: ["Asset: ", item.tick]
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        variant: "body1",
        color: "text.secondary",
        children: [" ", calculateTimeAgo(item.mtsMod)]
      }), " "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      className: "space-y-1",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        align: "right",
        className: "h-[21px]",
        children: [amt ? (item.type === 'Recieved' ? '+' : '-') + (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .formatNumber */ .ZV)(amt_abs, activeToken.dec) : "Failed/Refund", " ", amt ? item.tick : ""]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        align: "right",
        className: "capitalize",
        children: ["Hash: ", (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .shortAddress */ .Dc)(item.hashRev), " "]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        className: "flex items-center gap-1"
      }), " "]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42154:
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

/***/ 42288:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = omit;
function omit(obj, fields) {
  var clone = Object.assign({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}

/***/ }),

/***/ 45396:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Token)
/* harmony export */ });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55809);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(96383);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28454);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_Empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17778);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24965);
/* harmony import */ var _ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40675);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21999);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43168);
/* harmony import */ var _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16039);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13108);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87164);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14073);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45989);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96540);
/* harmony import */ var _ui_components_TabPaper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53830);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_4__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_5__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_6__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_7__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_4__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_5__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_6__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_7__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















function Token() {
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_6__/* .useNavigate */ .Z)();
  const {
    activeToken
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_5__/* .useAccountContext */ .Um)();
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)();
  const currentAddressTxs = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useCurrentAddressTxs */ .Eh)();
  const currentTokenTxs = currentAddressTxs.filter(item => item.tick === activeToken.tick);
  const network = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useNetworkType */ .iP)(); // 获取网络类型，NetworkType枚举
  const account = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAccountAddress */ .PJ)();
  const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_15__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_15__.NetworkType.Testnet ? 'testnet-10' : '';
  const [fetchListData, setFetchListData] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
  const krc20list = (0,react__WEBPACK_IMPORTED_MODULE_12__.useCallback)(async () => {
    setLoading(true);
    try {
      const list = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_16__/* .fetch_krc20 */ .Gm)(networkName, account, activeToken.tick);
      setFetchListData(list.map(item => {
        return {
          ...item,
          type: item.op === 'transfer' ? item.to === account ? 'Recieved' : 'Sent' : 'Recieved'
        };
      }));
    } catch (error) {
      console.log('error', error);
    }
    setLoading(false);
  }, [account, network, activeToken]);
  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(() => {
    krc20list(); // Call fetch function when address or network changes
  }, [account, network, activeToken]);

  // console.log(activeToken)
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      onBack: () => navigate('MainScreen')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      className: "!h-[auto] !pt-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
          variant: "h5",
          align: "center",
          fontWeight: 700,
          children: [(0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .formatNumber */ .ZV)(activeToken === null || activeToken === void 0 ? void 0 : activeToken.balance, activeToken === null || activeToken === void 0 ? void 0 : activeToken.dec), " ", activeToken.tick]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
          className: "grid grid-cols-1 gap-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components_TabPaper__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
          spinning: loading,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
            variant: "h5",
            children: "Recent"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            children: !(0,lodash__WEBPACK_IMPORTED_MODULE_11__.isEmpty)(fetchListData) ? fetchListData.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
                item: item
              }, index);
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_2__/* .Empty */ .S, {
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

/***/ 53830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64155);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14977);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);





const TabPaper = _ref => {
  let {
    tabs,
    activeKey,
    onChange,
    className = '',
    style = {}
  } = _ref;
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    className: `p-1 grid grid-cols-${tabs.length} cursor-pointer gap-4 ${className}`,
    style: style,
    children: tabs.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
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

/***/ 54128:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(31800);

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

/***/ 55809:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(31263);
__webpack_require__(32831);

/***/ }),

/***/ 70787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(6305)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneElement = cloneElement;
exports.isFragment = isFragment;
exports.isValidElement = void 0;
exports.replaceElement = replaceElement;
var React = _interopRequireWildcard(__webpack_require__(96540));
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

/***/ 79427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/Send.f8d9c1b2.svg";

/***/ }),

/***/ 91874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/Minted.0d9cb733.svg";

/***/ }),

/***/ 95662:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(31263);
__webpack_require__(14304);

/***/ }),

/***/ 96383:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireWildcard = (__webpack_require__(6305)["default"]);
var _interopRequireDefault = (__webpack_require__(24994)["default"]);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(94634));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(43693));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(85715));
var _classnames = _interopRequireDefault(__webpack_require__(46942));
var _debounce = _interopRequireDefault(__webpack_require__(38221));
var _omit = _interopRequireDefault(__webpack_require__(42288));
var React = _interopRequireWildcard(__webpack_require__(96540));
var _configProvider = __webpack_require__(76421);
var _reactNode = __webpack_require__(70787);
var _type = __webpack_require__(42154);
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
var _default = exports.A = SpinFC;

/***/ }),

/***/ 98845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


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

/***/ }),

/***/ 99374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(54128),
    isObject = __webpack_require__(23805),
    isSymbol = __webpack_require__(44394);

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


/***/ })

}]);