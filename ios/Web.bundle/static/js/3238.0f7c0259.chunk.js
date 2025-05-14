(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[3238],{

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

/***/ 73238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActivitiesScrren)
/* harmony export */ });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55809);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(96383);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(28454);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24965);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21999);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43168);
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16317);
/* harmony import */ var _mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(98818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(37636);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87164);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(45989);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96540);
/* harmony import */ var _ui_components_TabPaper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53830);
/* harmony import */ var _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79427);
/* harmony import */ var _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2468);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60346);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77093);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_4__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_4__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// import SendIcon from '@mui/icons-material/Send';











// 自定义按钮样式

const StyledButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n)(_ref => {
  let {
    theme
  } = _ref;
  return {
    borderRadius: '12px',
    textTransform: 'none',
    fontWeight: 600,
    padding: theme.spacing(1.5, 3),
    backgroundColor: '#2ecc71',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#27ae60'
    },
    '&:disabled': {
      backgroundColor: '#95d5b2'
    }
  };
});

// 自定义卡片样式
const StyledCard = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
    },
    borderRadius: '16px',
    background: '#ffffff',
    cursor: 'pointer',
    // 恢复为可点击光标
    border: '1px solid rgb(236, 236, 236)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  };
});

// LoadingState 和 EmptyState 保持不变
const LoadingState = () => /*#__PURE__*/_jsxs(Box, {
  sx: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 4,
    height: '50vh'
  },
  children: [/*#__PURE__*/_jsx(Icon, {
    children: /*#__PURE__*/_jsx(LoadingOutlined, {
      style: {
        fontSize: 36,
        color: '#666'
      }
    })
  }), /*#__PURE__*/_jsx(Typography, {
    variant: "body1",
    color: "text.secondary",
    sx: {
      mt: 2
    },
    children: "Loading Activities..."
  })]
});
const EmptyState = _ref3 => {
  let {
    refresh
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 4,
      borderRadius: '16px',
      border: '1px solid rgba(10,36,99,0.15)',
      maxWidth: '400px',
      mx: 'auto',
      mt: 0
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      sx: {
        fontSize: 48,
        color: '#C0C7D8',
        mb: 2
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
      sx: {
        fontWeight: 500,
        mb: 2,
        color: '#0A2463',
        fontSize: '20px'
      },
      children: "No Activity Found"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
      sx: {
        mb: 2,
        maxWidth: '300px',
        color: 'rgba(10,36,99,0.65)',
        fontSize: '14px'
      },
      children: "It looks like you don\u2019t have any transaction activity yet. Start by making a transaction!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n, {
      variant: "outlined",
      color: "primary",
      size: "small",
      onClick: () => refresh(),
      sx: {
        textTransform: 'none',
        borderRadius: '8px'
      },
      children: "Retry"
    })]
  });
};
function ActivitiesScrren() {
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_4__/* .useNavigate */ .Z)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useAccountAddress */ .PJ)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useAccountAddressL2 */ .N1)();
  const network = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useNetworkType */ .iP)();
  const [fetchListData, setFetchListData] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
  const [krc20List, setKrc20List] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
  const [krc20Loading, setKrc20Loading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
  const [l2TokenLoading, setL2TokenLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
  const [activeKey, setActiveKey] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('native');
  const {
    krc20Tokens
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__/* .useAccountContext */ .Um)();
  const [l2Tokens, setL2Tokens] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useLayerType */ .pI)();
  // const {krc20Tokens, krc20Loading, setActiveToken} = useAccountContext()

  const tabsItemOrigin = [{
    key: 'native',
    label: 'Native'
  }, {
    key: 'krc20',
    label: 'KRC20'
  }, {
    key: 'l2Token',
    label: 'L2TOKEN'
  }];
  const [tabsItem, setTabsItem] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(tabsItemOrigin);
  const fetchList = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(async () => {
    if (!address) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Testnet ? 'testnet-10' : '';
      if (!networkName) {
        console.error('Unknown network type');
        setFetchListData([]);
        return;
      }
      const data = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_20__/* .fetch_Activity */ .v5)(networkName, address, 7, 0);
      const enrichedData = await Promise.all(data.map(async item => {
        let totalAmount = 0;
        let dectotalAmount = 0;
        await Promise.all(item.inputs.map(async input => {
          var _input$signature_scri;
          if ((input === null || input === void 0 ? void 0 : (_input$signature_scri = input.signature_script) === null || _input$signature_scri === void 0 ? void 0 : _input$signature_scri.length) > 200) {
            console.log('Skipping special input:', input);
            return;
          }
          try {
            const txDetails = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_20__/* .fetch_tx */ .c5)(networkName, input.previous_outpoint_hash);
            let flag = 0;
            txDetails.outputs.forEach(output => {
              if (output.script_public_key_address === address && input.previous_outpoint_index == flag) {
                dectotalAmount += parseInt(output.amount);
              }
              flag = flag + 1;
            });
          } catch (error) {
            // error
          }
        }));
        item.outputs.forEach(output => {
          const outputAmount = parseInt(output.amount);
          if (output.script_public_key_address === address) {
            totalAmount += outputAmount;
          }
        });
        const amount = totalAmount - dectotalAmount;
        return {
          txdetail: item,
          type: 'TransferNative',
          txid: item.transaction_id || '',
          amount: amount,
          dec: 8,
          tick: 'KAS',
          time: item.block_time,
          status: item.is_accepted ? 'success' : 'pending'
        };
      }));
      console.log('enrichedData', enrichedData);
      setFetchListData(enrichedData);
    } catch (error) {
      console.error('Error fetching activities:', error);
      setFetchListData([]);
    } finally {
      setLoading(false);
    }
  }, [address, network]);
  const getKrc20List = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(async () => {
    // if (krc20Loading) return
    setKrc20Loading(true);
    try {
      if (!krc20Tokens.length) return;
      console.log('list', {
        krc20Tokens
      });
      const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Testnet ? 'testnet-10' : '';
      const krc20List = [];
      for (const index in krc20Tokens) {
        _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_20__/* .fetch_krc20_list */ .Db;
        const list = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_20__/* .fetch_krc20 */ .Gm)(networkName, address, krc20Tokens[index].tick);
        // console.log('list', list);
        krc20List.push(...list.filter(item => item.opAccept !== '-1')); // opAccept -1 hidden
      }
      setKrc20List(krc20List);
    } catch (error) {
      console.log('getKrc20List rror');
    } finally {
      setKrc20Loading(false);
    }
  }, [address, network, krc20Tokens]);
  const getL2TokenList = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(async () => {
    setL2TokenLoading(true);
    try {
      if (!addressL2) return;
      const baseUrl = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_12__/* .OPENAPI_URL_MAINNET_L2 */ .Zm : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Testnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_12__/* .OPENAPI_URL_TESTNET_L2 */ .YL : _shared_constant__WEBPACK_IMPORTED_MODULE_12__/* .OPENAPI_URL_DEVNET_L2 */ .B9;
      const response = await fetch(`${baseUrl}/api/v2/addresses/${addressL2}/transactions`);
      const data = await response.json();
      setL2Tokens((data === null || data === void 0 ? void 0 : data.items) || []);
    } catch (error) {
      console.log('getL2List rror');
    } finally {
      setL2TokenLoading(false);
    }
  }, [address, network, addressL2, currentLayer]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (!address) return;
    fetchList();
    // 获取krc20List
    getKrc20List();
    getL2TokenList();
    if (currentLayer !== 'L2') {
      setTabsItem(tabsItemOrigin.filter(item => item.key !== 'l2Token'));
    } else {
      setTabsItem(tabsItemOrigin.filter(item => item.key !== 'krc20'));
    }
  }, [address, network, fetchList, krc20Tokens, addressL2, currentLayer]);
  const handleClick = () => {
    if (!address || !addressL2) return;
    const baseUrl = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? `https://kas.fyi/addresses/${address}?page=1` : `https://explorer-tn10.kaspa.org/addresses/${address}?page=1`;
    const baseUrlL2 = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? `${_shared_constant__WEBPACK_IMPORTED_MODULE_12__/* .OPENAPI_URL_MAINNET_L2 */ .Zm}/address/${addressL2}` : `${_shared_constant__WEBPACK_IMPORTED_MODULE_12__/* .OPENAPI_URL_TESTNET_L2 */ .YL}/address/${addressL2}`;
    const url = activeKey === 'l2Token' ? baseUrlL2 : baseUrl;
    window.open(url, '_blank');
  };

  // 处理卡片点击，跳转到交易详情
  const handleCardClick = (type, txid) => {
    if (!txid) return;
    let url = '';
    if (type === 'l1') {
      url = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? `https://kas.fyi/transaction/${txid}` : `https://explorer-tn10.kaspa.org/txs/${txid}`;
    } else {
      url = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? `${_shared_constant__WEBPACK_IMPORTED_MODULE_12__/* .OPENAPI_URL_MAINNET_L2 */ .Zm}/tx/${txid}` : `${_shared_constant__WEBPACK_IMPORTED_MODULE_12__/* .OPENAPI_URL_TESTNET_L2 */ .YL}/tx/${txid}`;
    }
    window.open(url, '_blank');
  };

  // if (loading) {
  //   return (
  //     <Layout>
  //       <Header onBack={() => navigate('ToolScreen')} title="Activities" />
  //       <Content>
  //         <Box sx={{ padding: 1 }}>
  //           <StyledButton
  //             onClick={handleClick}
  //             fullWidth
  //             variant="contained"
  //             size="medium"
  //             endIcon={<OpenInNewIcon sx={{ color: '#222' }} />}
  //             sx={{ mb: 3 }}
  //           >
  //             More
  //           </StyledButton>
  //           <LoadingState />
  //         </Box>
  //       </Content>
  //     </Layout>
  //   );
  // }

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    console.log('activeKey', activeKey);
  }, [activeKey]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      onBack: () => navigate('MainScreen'),
      title: "Activities"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_components_TabPaper__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      tabs: tabsItem,
      activeKey: activeKey,
      onChange: key => setActiveKey(key),
      style: {
        margin: '0 16px'
      },
      className: "my-custom-activities"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      className: "flex-1 overflow-y-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
        sx: {
          padding: 1
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [activeKey === 'native' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
            spinning: loading,
            children: fetchListData.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay, {
              container: true,
              spacing: 2.5,
              children: fetchListData.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay, {
                item: true,
                xs: 12,
                style: {
                  paddingTop: '12px'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(StyledCard, {
                  onClick: () => handleCardClick('l1', item.txid),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
                    sx: {
                      padding: 2,
                      paddingBottom: 0,
                      paddingLeft: '10px'
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                        display: "flex",
                        alignItems: "center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
                          src: item.amount >= 0 ? _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_10__ : _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_9__,
                          width: 18,
                          height: 18,
                          alt: ""
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                          style: {
                            marginLeft: '12px'
                          },
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                            sx: {
                              fontSize: '14px',
                              fontWeight: 500,
                              color: '#0A2463'
                            },
                            children: item.amount >= 0 ? `Received +${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(item.amount / Math.pow(10, item.dec)).toFixed(4)} ${item.tick}` : `Sent -${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(Math.abs(item.amount) / Math.pow(10, item.dec)).toFixed(4)} ${item.tick}`
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                            sx: {
                              fontSize: '12px',
                              color: 'rgba(10, 36, 99, 0.65)',
                              mt: 0.5
                            },
                            children: new Date(item.time).toLocaleString()
                          })]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
                        textAlign: "right",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                          variant: "body2",
                          sx: {
                            fontSize: '0.9rem',
                            color: item.status === 'success' ? '#0BE4AB' : '#ff9800'
                          },
                          children: item.status === 'success' ? 'Confirmed' : 'Pending'
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                          variant: "body2",
                          sx: {
                            fontSize: '0.8rem',
                            color: 'rgba(10, 36, 99, 0.65)',
                            mt: 0.5
                          },
                          children: [item.txid.slice(0, 8), "..."]
                        })]
                      })]
                    })
                  })
                })
              }, index))
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
              sx: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              },
              style: {
                opacity: loading ? 0 : ''
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(EmptyState, {
                refresh: fetchList
              })
            })
          }), activeKey === 'krc20' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
            spinning: krc20Loading,
            children: krc20List.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay, {
              container: true,
              spacing: 2.5,
              children: krc20List.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay, {
                item: true,
                xs: 12,
                style: {
                  paddingTop: '12px'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(StyledCard, {
                  onClick: () => {
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
                        type: item.op === 'transfer' ? item.to === address ? 'Recieved' : 'Sent' : 'Recieved'
                      }]
                    };
                    // 传递格式化后的 txDetail 和 txId
                    navigate("TxDetailScreen", {
                      txDetail: formattedTxDetail,
                      txId: item.hashRev
                    });
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
                    sx: {
                      padding: 2,
                      paddingBottom: 0
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                      className: "flex justify-between items-center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                          sx: {
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: '#0A2463'
                          },
                          children: item.op
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                          sx: {
                            fontSize: '0.85rem',
                            color: 'rgba(10, 36, 99, 0.65)',
                            mt: 0.5
                          },
                          children: item.tick
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                          variant: "body2",
                          sx: {
                            fontSize: '0.9rem',
                            color: item.opAccept === '1' ? '#0BE4AB' : '#ff9800'
                          },
                          children: item.opAccept === '1' ? 'Confirmed' : 'No Confirmed'
                        })
                      })]
                    })
                  })
                })
              }, index))
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
              sx: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              },
              style: {
                opacity: krc20Loading ? 0 : ''
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(EmptyState, {
                refresh: getKrc20List
              })
            })
          }), activeKey === 'l2Token' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
            spinning: krc20Loading,
            children: l2Tokens.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay, {
              container: true,
              spacing: 2.5,
              children: l2Tokens.map((item, index) => {
                var _item$from, _item$from2;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay, {
                  item: true,
                  xs: 12,
                  style: {
                    paddingTop: '12px'
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(StyledCard, {
                    onClick: () => handleCardClick('l2', item.hash),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
                      sx: {
                        padding: 2,
                        paddingBottom: 0
                      },
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                            variant: "body1",
                            sx: {
                              fontSize: '0.9rem',
                              fontWeight: 500,
                              color: '#0A2463'
                            },
                            children: (item === null || item === void 0 ? void 0 : (_item$from = item.from) === null || _item$from === void 0 ? void 0 : _item$from.hash) === addressL2 ? `Sent -${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(Number(item.value) / 10 ** 18).toFixed(4)} eKas` : `Received +${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(Number(item.value) / 10 ** 18).toFixed(4)} eKas`
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                            variant: "body2",
                            sx: {
                              fontSize: '0.85rem',
                              color: 'rgba(10, 36, 99, 0.65)',
                              mt: 0.5
                            },
                            children: new Date(item === null || item === void 0 ? void 0 : item.timestamp).toLocaleString()
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                            variant: "body2",
                            sx: {
                              fontSize: '0.9rem',
                              color: item.result === 'success' ? '#0BE4AB' : '#ff9800'
                            },
                            children: item.result
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                            sx: {
                              fontSize: '0.8rem',
                              color: 'rgba(10, 36, 99, 0.65)',
                              mt: 0.5
                            },
                            children: [item === null || item === void 0 ? void 0 : (_item$from2 = item.from) === null || _item$from2 === void 0 ? void 0 : _item$from2.hash.slice(0, 8), "..."]
                          })]
                        })]
                      })
                    })
                  })
                }, index);
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
              sx: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              },
              style: {
                opacity: l2TokenLoading ? 0 : ''
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(EmptyState, {
                refresh: getL2TokenList
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(StyledButton, {
            onClick: handleClick,
            fullWidth: true,
            variant: "contained",
            size: "medium",
            endIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
              sx: {
                color: '#222'
              }
            }),
            sx: {
              mt: 3,
              mb: 3
            },
            children: "More"
          })]
        })
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/Send.f8d9c1b2.svg";

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

/***/ 98818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"
}), 'OpenInNew'));

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