(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[221],{

/***/ 969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var BN = __webpack_require__(62731);
var Point = __webpack_require__(49845);
var Hash = __webpack_require__(44499);
var JSUtil = __webpack_require__(44371);
var Network = __webpack_require__(33158);
var _ = __webpack_require__(2543);
var $ = __webpack_require__(6213);
const TaggedHash = __webpack_require__(56743);

/**
 * Instantiate a PublicKey from a {@link PrivateKey}, {@link Point}, `string`, or `Buffer`.
 *
 * There are two internal properties, `network` and `compressed`, that deal with importing
 * a PublicKey from a PrivateKey in WIF format. More details described on {@link PrivateKey}
 *
 * @example
 * ```javascript
 * // instantiate from a private key
 * var key = PublicKey(privateKey, true);
 *
 * // export to as a DER hex encoded string
 * var exported = key.toString();
 *
 * // import the public key
 * var imported = PublicKey.fromString(exported);
 * ```
 *
 * @param {string} data - The encoded data in various formats
 * @param {Object} extra - additional options
 * @param {Network=} extra.network - Which network should the address for this public key be for
 * @param {String=} extra.compressed - If the public key is compressed
 * @returns {PublicKey} A new valid instance of an PublicKey
 * @constructor
 */
function PublicKey(data, extra) {

  if (!(this instanceof PublicKey)) {
    return new PublicKey(data, extra);
  }

  $.checkArgument(data, 'First argument is required, please include public key data.');

  if (data instanceof PublicKey) {
    // Return copy, but as it's an immutable object, return same argument
    return data;
  }
  extra = extra || {};

  var info = this._classifyArgs(data, extra);

  // validation
  info.point.validate();

  JSUtil.defineImmutable(this, {
    point: info.point,
    compressed: info.compressed,
    network: info.network || Network.defaultNetwork
  });

  return this;
};

/**
 * Internal function to differentiate between arguments passed to the constructor
 * @param {*} data
 * @param {Object} extra
 */
PublicKey.prototype._classifyArgs = function(data, extra) {
  /* jshint maxcomplexity: 10 */
  var info = {
    compressed: _.isUndefined(extra.compressed) || extra.compressed
  };

  // detect type of data
  if (data instanceof Point) {
    info.point = data;
  } else if (data.x && data.y) {
    info = PublicKey._transformObject(data);
  } else if (typeof(data) === 'string') {
    info = PublicKey._transformDER(Buffer.from(data, 'hex'));
  } else if (PublicKey._isBuffer(data)) {
    info = PublicKey._transformDER(data);
  } else if (PublicKey._isPrivateKey(data)) {
    info = PublicKey._transformPrivateKey(data);
  } else {
    throw new TypeError('First argument is an unrecognized data format.');
  }
  if (!info.network) {
    info.network = _.isUndefined(extra.network) ? undefined : Network.get(extra.network);
  }
  return info;
};

/**
 * Internal function to detect if an object is a {@link PrivateKey}
 *
 * @param {*} param - object to test
 * @returns {boolean}
 * @private
 */
PublicKey._isPrivateKey = function(param) {
  var PrivateKey = __webpack_require__(10555);
  return param instanceof PrivateKey;
};

/**
 * Internal function to detect if an object is a Buffer
 *
 * @param {*} param - object to test
 * @returns {boolean}
 * @private
 */
PublicKey._isBuffer = function(param) {
  return (param instanceof Buffer) || (param instanceof Uint8Array);
};

/**
 * Internal function to transform a private key into a public key point
 *
 * @param {PrivateKey} privkey - An instance of PrivateKey
 * @returns {Object} An object with keys: point and compressed
 * @private
 */
PublicKey._transformPrivateKey = function(privkey) {
  $.checkArgument(PublicKey._isPrivateKey(privkey), 'Must be an instance of PrivateKey');
  var info = {};
  info.point = Point.getG().mul(privkey.bn);
  info.compressed = privkey.compressed;
  info.network = privkey.network;
  return info;
};

/**
 * Internal function to transform DER into a public key point
 *
 * @param {Buffer} buf - An hex encoded buffer
 * @param {bool=} strict - if set to false, will loosen some conditions
 * @returns {Object} An object with keys: point and compressed
 * @private
 */
PublicKey._transformDER = function(buf, strict) {
  /* jshint maxstatements: 30 */
  /* jshint maxcomplexity: 12 */
  $.checkArgument(PublicKey._isBuffer(buf), 'Must be a hex buffer of DER encoded public key');
  var info = {};

  strict = _.isUndefined(strict) ? true : strict;

  var x;
  var y;
  var xbuf;
  var ybuf;

  if (buf[0] === 0x04 || (!strict && (buf[0] === 0x06 || buf[0] === 0x07))) {
    xbuf = buf.slice(1, 33);
    ybuf = buf.slice(33, 65);
    if (xbuf.length !== 32 || ybuf.length !== 32 || buf.length !== 65) {
      throw new TypeError('Length of x and y must be 32 bytes');
    }
    x = new BN(xbuf);
    y = new BN(ybuf);
    info.point = new Point(x, y);
    info.compressed = false;
  } else if (buf[0] === 0x03) {
    xbuf = buf.slice(1);
    x = new BN(xbuf);
    info = PublicKey._transformX(true, x);
    info.compressed = true;
  } else if (buf[0] === 0x02) {
    xbuf = buf.slice(1);
    x = new BN(xbuf);
    info = PublicKey._transformX(false, x);
    info.compressed = true;
  } else {
    throw new TypeError('Invalid DER format public key');
  }
  return info;
};

/**
 * Internal function to transform X into a public key point
 *
 * @param {Boolean} odd - If the point is above or below the x axis
 * @param {Point} x - The x point
 * @returns {Object} An object with keys: point and compressed
 * @private
 */
PublicKey._transformX = function(odd, x) {
  $.checkArgument(typeof odd === 'boolean', 'Must specify whether y is odd or not (true or false)');
  var info = {};
  info.point = Point.fromX(odd, x);
  return info;
};

/**
 * Internal function to transform a JSON into a public key point
 *
 * @param {String|Object} json - a JSON string or plain object
 * @returns {Object} An object with keys: point and compressed
 * @private
 */
PublicKey._transformObject = function(json) {
  var x = new BN(json.x, 'hex');
  var y = new BN(json.y, 'hex');
  var point = new Point(x, y);
  return new PublicKey(point, {
    compressed: json.compressed
  });
};

/**
 * Instantiate a PublicKey from a PrivateKey
 *
 * @param {PrivateKey} privkey - An instance of PrivateKey
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromPrivateKey = function(privkey) {
  $.checkArgument(PublicKey._isPrivateKey(privkey), 'Must be an instance of PrivateKey');
  var info = PublicKey._transformPrivateKey(privkey);
  return new PublicKey(info.point, {
    compressed: info.compressed,
    network: info.network
  });
};

/**
 * Instantiate a PublicKey from a Buffer
 * @param {Buffer} buf A DER buffer (33+ bytes) or a 32 byte X-only coordinate (taproot only)
 * @param {Boolean} strict (optional; Only applies to DER format) If set to false, will loosen some conditions
 * @returns {PublicKey}
 */
PublicKey.fromBuffer = function(buf, strict) {
  $.checkArgument(PublicKey._isBuffer(buf), 'Must be a hex buffer of DER encoded public key or 32 byte X coordinate (taproot)');
  if (buf.length === 32) {
    return PublicKey.fromX(false, buf);
  }
  return PublicKey.fromDER(buf, strict);
}

/**
 * Instantiate a PublicKey from a DER buffer
 * @param {Buffer} buf - A DER hex buffer
 * @param {bool=} strict - if set to false, will loosen some conditions
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromDER = function(buf, strict) {
  $.checkArgument(PublicKey._isBuffer(buf), 'Must be a hex buffer of DER encoded public key');
  var info = PublicKey._transformDER(buf, strict);
  return new PublicKey(info.point, {
    compressed: info.compressed
  });
};

/**
 * Instantiate a PublicKey from a Point
 *
 * @param {Point} point - A Point instance
 * @param {boolean=} compressed - whether to store this public key as compressed format
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromPoint = function(point, compressed) {
  $.checkArgument(point instanceof Point, 'First argument must be an instance of Point.');
  return new PublicKey(point, {
    compressed: compressed
  });
};

/**
 * Instantiate a PublicKey from a DER hex encoded string
 *
 * @param {string} str - A DER hex string
 * @param {String=} encoding - The type of string encoding
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromString = function(str, encoding) {
  var buf = Buffer.from(str, encoding || 'hex');
  var info = PublicKey._transformDER(buf);
  return new PublicKey(info.point, {
    compressed: info.compressed
  });
};

/**
 * Instantiate a PublicKey from an X Point
 *
 * @param {Boolean} odd - If the point is above or below the x axis
 * @param {Point} x - The x point
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromX = function(odd, x) {
  var info = PublicKey._transformX(odd, x);
  return new PublicKey(info.point, {
    compressed: info.compressed
  });
};

/**
 * PublicKey instance from a Taproot (32-byte) public key
 * @param {String|Buffer} hexBuf 
 * @returns {PublicKey}
 */
PublicKey.fromTaproot = function(hexBuf) {
  if (typeof hexBuf === 'string' && JSUtil.isHexaString(hexBuf)) {
    hexBuf = Buffer.from(hexBuf, 'hex');
  }
  $.checkArgument(Buffer.isBuffer(hexBuf), 'hexBuf must be a hex string or buffer');
  $.checkArgument(hexBuf.length === 32, 'Taproot public keys must be 32 bytes');
  return new PublicKey.fromX(false, hexBuf);
}

/**
 * Verifies if the input is a valid Taproot public key
 * @param {String|Buffer} hexBuf 
 * @returns {Boolean}
 */
PublicKey.isValidTaproot = function(hexBuf) {
  try {
    return !!PublicKey.fromTaproot(hexBuf);
  } catch (e) {
    return false;
  }
};


/**
 * Get the TapTweak tagged hash of this pub key and the merkleRoot
 * @param {Buffer} merkleRoot (optional)
 * @returns {Buffer}
 */
PublicKey.prototype.computeTapTweakHash = function(merkleRoot) {
  const taggedWriter = new TaggedHash('TapTweak');
  taggedWriter.write(this.point.x.toBuffer({ size: 32 }));

  //  If !merkleRoot, then we have no scripts. The actual tweak does not matter, but 
  //  follow BIP341 here to allow for reproducible tweaking.

  if (merkleRoot) {
    $.checkArgument(Buffer.isBuffer(merkleRoot) && merkleRoot.length === 32, 'merkleRoot must be 32 byte buffer');
    taggedWriter.write(merkleRoot);
  }
  const tweakHash = taggedWriter.finalize();
  
  const order = Point.getN();
  $.checkState(BN.fromBuffer(tweakHash).lt(order), 'TapTweak hash failed secp256k1 order check');
  return tweakHash;
};


/**
 * Verify a tweaked public key against this key
 * @param {PublicKey|Buffer} p Tweaked pub key
 * @param {Buffer} merkleRoot (optional)
 * @param {Buffer} control 
 * @returns {Boolean}
 */
PublicKey.prototype.checkTapTweak = function(p, merkleRoot, control) {
  if (Buffer.isBuffer(p)) {
    p = PublicKey.fromTaproot(p);
  }
  const tweak = p.computeTapTweakHash(merkleRoot);

  const P = p.point.liftX();
  const Q = P.add(this.point.curve.g.mul(BN.fromBuffer(tweak)));
  
  return this.point.x.eq(Q.x) && Q.y.mod(new BN(2)).eq(new BN(control[0] & 1));
};


/**
 * Create a tweaked version of this pub key
 * @param {Buffer} merkleRoot (optional)
 * @returns {{ parity: Number, tweakedPubKey: Buffer }}
 */
PublicKey.prototype.createTapTweak = function(merkleRoot) {
  $.checkArgument(merkleRoot == null || (Buffer.isBuffer(merkleRoot) && merkleRoot.length === 32), 'merkleRoot must be a 32 byte buffer');

  let t = this.computeTapTweakHash(merkleRoot);
  t = new BN(t);
  const Q = this.point.liftX().add(Point.getG().mul(t));
  const parity = Q.y.isEven() ? 0 : 1;
  return {
    parity,
    tweakedPubKey: Q.x.toBuffer()
  };
};

/**
 * Check if there would be any errors when initializing a PublicKey
 *
 * @param {string} data - The encoded data in various formats
 * @returns {null|Error} An error if exists
 */
PublicKey.getValidationError = function(data) {
  var error;
  try {
    /* jshint nonew: false */
    new PublicKey(data);
  } catch (e) {
    error = e;
  }
  return error;
};

/**
 * Check if the parameters are valid
 *
 * @param {string} data - The encoded data in various formats
 * @returns {Boolean} If the public key would be valid
 */
PublicKey.isValid = function(data) {
  return !PublicKey.getValidationError(data);
};

/**
 * @returns {Object} A plain object of the PublicKey
 */
PublicKey.prototype.toObject = PublicKey.prototype.toJSON = function toObject() {
  return {
    x: this.point.getX().toString('hex', 2),
    y: this.point.getY().toString('hex', 2),
    compressed: this.compressed
  };
};

/**
 * Will output the PublicKey to a DER Buffer
 *
 * @returns {Buffer} A DER hex encoded buffer
 */
PublicKey.prototype.toBuffer = PublicKey.prototype.toDER = function() {
  var x = this.point.getX();
  var y = this.point.getY();

  var xbuf = x.toBuffer({
    size: 32
  });
  var ybuf = y.toBuffer({
    size: 32
  });

  var prefix;
  if (!this.compressed) {
    prefix = Buffer.from([0x04]);
    return Buffer.concat([prefix, xbuf, ybuf]);
  } else {
    var odd = ybuf[ybuf.length - 1] % 2;
    if (odd) {
      prefix = Buffer.from([0x03]);
    } else {
      prefix = Buffer.from([0x02]);
    }
    return Buffer.concat([prefix, xbuf]);
  }
};

/**
 * Will return a sha256 + ripemd160 hash of the serialized public key
 * @see https://github.com/bitcoin/bitcoin/blob/master/src/pubkey.h#L141
 * @returns {Buffer}
 */
PublicKey.prototype._getID = function _getID() {
  return Hash.sha256ripemd160(this.toBuffer());
};

/**
 * Will return an address for the public key
 *
 * @param {String|Network=} network - Which network should the address be for
 * @param {string} type - Either 'pubkeyhash', 'witnesspubkeyhash', or 'scripthash'
 * @returns {Address} An address generated from the public key
 */
PublicKey.prototype.toAddress = function(network, type) {
  var Address = __webpack_require__(87089);
  return Address.fromPublicKey(this, network || this.network, type);
};

/**
 * Will output the PublicKey to a DER encoded hex string
 *
 * @returns {string} A DER hex encoded string
 */
PublicKey.prototype.toString = function() {
  return this.toDER().toString('hex');
};

/**
 * Will return a string formatted for the console
 *
 * @returns {string} Public key
 */
PublicKey.prototype.inspect = function() {
  return '<PublicKey: ' + this.toString() +
    (this.compressed ? '' : ', uncompressed') + '>';
};


module.exports = PublicKey;


/***/ }),

/***/ 2832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var bech32 = __webpack_require__(22343);

/**
 * Decode bech32/bech32m string
 * @param {String} str String to decode
 * @returns {Object} Decoded string info
 */
var decode = function(str) {
  if (typeof str !== 'string') {
    throw new Error('Input should be a string');
  }

  var decoded;
  let fromWords = bech32.bech32.fromWords;
  let encoding = encodings.BECH32;
  try {
    decoded = bech32.bech32.decode(str);
  } catch (e) {
    if (e.message.indexOf('Invalid checksum') > -1) {
      decoded = bech32.bech32m.decode(str);
      encoding = encodings.BECH32M;
      fromWords = bech32.bech32m.fromWords;
    } else {
      throw e;
    }
  }

  const version = decoded.words[0];
  if (version >= 1 && encoding !== encodings.BECH32M) {
    throw new Error('Version 1+ witness address must use Bech32m checksum');
  }

  return {
    prefix: decoded.prefix,
    data: Buffer.from(fromWords(decoded.words.slice(1))),
    version
  };
};

/**
 * Encode using BECH32 encoding
 * @param {String} prefix bech32 prefix
 * @param {Number} version
 * @param {String|Buffer} data 
 * @param {String|Number} encoding (optional, default=bech32) Valid encodings are 'bech32', 'bech32m', 0, and 1.
 * @returns {String} encoded string
 */
var encode = function(prefix, version, data, encoding) {
	if (typeof prefix !== 'string') {
		throw new Error('Prefix should be a string');
	}
	if (typeof version !== 'number') {
		throw new Error('version should be a number');
	}
  // convert string to number
  if (encoding && typeof encoding == 'string') {
    encoding = encodings[encoding.toUpperCase()] || -1; // fallback to -1 so it throws invalid encoding below
  }
  if (encoding && !(encoding == encodings.BECH32 || encoding == encodings.BECH32M)) {
    throw new Error('Invalid encoding specified');
  }
  
  let b32Variety = encoding == encodings.BECH32M ? bech32.bech32m : bech32.bech32;
  let words = b32Variety.toWords(data);

  words.unshift(version);
	return b32Variety.encode(prefix, words);
}

const encodings = {
  BECH32: 1,
  BECH32M: 2
}

module.exports = { decode: decode, encode: encode, encodings };


/***/ }),

/***/ 3272:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(65606);
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


function Random() {
}

/* secure random bytes that sometimes throws an error due to lack of entropy */
Random.getRandomBuffer = function(size) {
  if (process.browser)
    return Random.getRandomBufferBrowser(size);
  else
    return Random.getRandomBufferNode(size);
};

Random.getRandomBufferNode = function(size) {
  var crypto = __webpack_require__(91565);
  return crypto.randomBytes(size);
};

Random.getRandomBufferBrowser = function(size) {
  if (!window.crypto && !window.msCrypto)
    throw new Error('window.crypto not available');

  if (window.crypto && window.crypto.getRandomValues)
    var crypto = window.crypto;
  else if (window.msCrypto && window.msCrypto.getRandomValues) //internet explorer
    var crypto = window.msCrypto;
  else
    throw new Error('window.crypto.getRandomValues not available');

  var bbuf = new Uint8Array(size);
  crypto.getRandomValues(bbuf);
  var buf = Buffer.from(bbuf);

  return buf;
};

/* insecure random bytes, but it never fails */
Random.getPseudoRandomBuffer = function(size) {
  var b32 = 0x100000000;
  var b = Buffer.alloc(size);
  var r;

  for (var i = 0; i <= size; i++) {
    var j = Math.floor(i / 4);
    var k = i - j * 4;
    if (k === 0) {
      r = Math.random() * b32;
      b[i] = r & 0xff;
    } else {
      b[i] = (r = r >>> 8) & 0xff;
    }
  }

  return b;
};

module.exports = Random;


/***/ }),

/***/ 3544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var $ = __webpack_require__(6213);
var inherits = __webpack_require__(28322);
var BufferUtil = __webpack_require__(56142);
var JSUtil = __webpack_require__(44371);

var PublicKey = __webpack_require__(969);
var errors = __webpack_require__(66617);
var Signature = __webpack_require__(23825);

/**
 * @desc
 * Wrapper around Signature with fields related to signing a transaction specifically
 *
 * @param {Object|string|TransactionSignature} arg
 * @constructor
 */
function TransactionSignature(arg) {
  if (!(this instanceof TransactionSignature)) {
    return new TransactionSignature(arg);
  }
  if (arg instanceof TransactionSignature) {
    return arg;
  }
  if (arg && typeof arg === 'object') {
    return this._fromObject(arg);
  }
  throw new errors.InvalidArgument('TransactionSignatures must be instantiated from an object');
}
inherits(TransactionSignature, Signature);

TransactionSignature.prototype._fromObject = function(arg) {
  this._checkObjectArgs(arg);
  this.publicKey = new PublicKey(arg.publicKey);
  this.prevTxId = BufferUtil.isBuffer(arg.prevTxId) ? arg.prevTxId : Buffer.from(arg.prevTxId, 'hex');
  this.outputIndex = arg.outputIndex;
  this.inputIndex = arg.inputIndex;
  this.signature = (arg.signature instanceof Signature) ? arg.signature :
                     BufferUtil.isBuffer(arg.signature) ? Signature.fromBuffer(arg.signature) :
                     Signature.fromString(arg.signature);
  this.sigtype = arg.sigtype;
  return this;
};

TransactionSignature.prototype._checkObjectArgs = function(arg) {
  $.checkArgument(PublicKey(arg.publicKey), 'invalid publicKey');
  $.checkArgument(arg.inputIndex != null, 'missing inputIndex');
  $.checkArgument(arg.outputIndex != null, 'missing outputIndex');
  $.checkState(!isNaN(arg.inputIndex), 'inputIndex must be a number');
  $.checkState(!isNaN(arg.outputIndex), 'outputIndex must be a number');
  $.checkArgument(arg.signature, 'missing signature');
  $.checkArgument(arg.prevTxId, 'missing prevTxId');
  $.checkState(arg.signature instanceof Signature ||
               BufferUtil.isBuffer(arg.signature) ||
               JSUtil.isHexa(arg.signature), 'signature must be a buffer or hexa value');
  $.checkState(BufferUtil.isBuffer(arg.prevTxId) ||
               JSUtil.isHexa(arg.prevTxId), 'prevTxId must be a buffer or hexa value');
  $.checkArgument(arg.sigtype != null, 'missing sigtype');
  $.checkState(!isNaN(arg.sigtype), 'sigtype must be a number');
};

/**
 * Serializes a transaction to a plain JS object
 * @return {Object}
 */
TransactionSignature.prototype.toObject = TransactionSignature.prototype.toJSON = function toObject() {
  return {
    publicKey: this.publicKey.toString(),
    prevTxId: this.prevTxId.toString('hex'),
    outputIndex: this.outputIndex,
    inputIndex: this.inputIndex,
    signature: this.signature.toString(),
    sigtype: this.sigtype
  };
};

/**
 * Builds a TransactionSignature from an object
 * @param {Object} object
 * @return {TransactionSignature}
 */
TransactionSignature.fromObject = function(object) {
  $.checkArgument(object);
  return new TransactionSignature(object);
};

module.exports = TransactionSignature;


/***/ }),

/***/ 6213:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var errors = __webpack_require__(66617);
var _ = __webpack_require__(2543);

module.exports = {
  checkState: function(condition, message) {
    if (!condition) {
      throw new errors.InvalidState(message);
    }
  },
  checkArgument: function(condition, argumentName, message, docsPath) {
    if (!condition) {
      throw new errors.InvalidArgument(argumentName, message, docsPath);
    }
  },
  checkArgumentType: function(argument, type, argumentName) {
    argumentName = argumentName || '(unknown name)';
    if (_.isString(type)) {
      if (type === 'Buffer') {
        var buffer = __webpack_require__(48287); // './buffer' fails on cordova & RN
        if (!buffer.Buffer.isBuffer(argument)) {
          throw new errors.InvalidArgumentType(argument, type, argumentName);
        }
      } else if (typeof argument !== type && (argument && argument.constructor && argument.constructor.name !== type)) {
        // Note that the constructor check is more reliable than the `instanceof` check below.
        throw new errors.InvalidArgumentType(argument, type, argumentName);
      }
    } else {
      if (!(argument instanceof type)) {
        throw new errors.InvalidArgumentType(argument, type.name, argumentName);
      }
    }
  },
  isType: function(argument, type, argumentName) {
    try {
      this.checkArgumentType(argument, type, argumentName);
      return true;
    } catch {
      return false;
    }
  }
};


/***/ }),

/***/ 10555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var Address = __webpack_require__(87089);
var Base58Check = __webpack_require__(26303);
var BN = __webpack_require__(62731);
var JSUtil = __webpack_require__(44371);
var Networks = __webpack_require__(33158);
var Point = __webpack_require__(49845);
var PublicKey = __webpack_require__(969);
var Random = __webpack_require__(3272);
var $ = __webpack_require__(6213);
const TaggedHash = __webpack_require__(56743);

/**
 * Instantiate a PrivateKey from a BN, Buffer and WIF.
 *
 * @example
 * ```javascript
 * // generate a new random key
 * var key = PrivateKey();
 *
 * // get the associated address
 * var address = key.toAddress();
 *
 * // encode into wallet export format
 * var exported = key.toWIF();
 *
 * // instantiate from the exported (and saved) private key
 * var imported = PrivateKey.fromWIF(exported);
 * ```
 *
 * @param {string} data - The encoded data in various formats
 * @param {Network|string=} network - a {@link Network} object, or a string with the network name
 * @returns {PrivateKey} A new valid instance of an PrivateKey
 * @constructor
 */
function PrivateKey(data, network) {
  /* jshint maxstatements: 20 */
  /* jshint maxcomplexity: 8 */

  if (!(this instanceof PrivateKey)) {
    return new PrivateKey(data, network);
  }
  if (data instanceof PrivateKey) {
    return data;
  }

  var info = this._classifyArguments(data, network);

  // validation
  if (!info.bn || info.bn.cmp(new BN(0)) === 0){
    throw new TypeError('Number can not be equal to zero, undefined, null or false');
  }
  if (!info.bn.lt(Point.getN())) {
    throw new TypeError('Number must be less than N');
  }
  if (typeof(info.network) === 'undefined') {
    throw new TypeError('Must specify the network ("livenet" or "testnet")');
  }

  JSUtil.defineImmutable(this, {
    bn: info.bn,
    compressed: info.compressed,
    network: info.network
  });

  Object.defineProperty(this, 'publicKey', {
    configurable: false,
    enumerable: true,
    get: this.toPublicKey.bind(this)
  });

  return this;

};

/**
 * Internal helper to instantiate PrivateKey internal `info` object from
 * different kinds of arguments passed to the constructor.
 *
 * @param {*} data
 * @param {Network|string=} network - a {@link Network} object, or a string with the network name
 * @return {Object}
 */
PrivateKey.prototype._classifyArguments = function(data, network) {
  /* jshint maxcomplexity: 10 */
  var info = {
    compressed: true,
    network: network ? Networks.get(network) : Networks.defaultNetwork
  };

  // detect type of data
  if (_.isUndefined(data) || _.isNull(data)){
    info.bn = PrivateKey._getRandomBN();
  } else if (data instanceof BN) {
    info.bn = data;
  } else if (data instanceof Buffer || data instanceof Uint8Array) {
    info = PrivateKey._transformBuffer(data, network);
  } else if (data.bn && data.network){
    info = PrivateKey._transformObject(data);
  } else if (!network && Networks.get(data)) {
    info.bn = PrivateKey._getRandomBN();
    info.network = Networks.get(data);
  } else if (typeof(data) === 'string'){
    if (JSUtil.isHexa(data)) {
      info.bn = new BN(data, 'hex');
    } else {
      info = PrivateKey._transformWIF(data, network);
    }
  } else {
    throw new TypeError('First argument is an unrecognized data type.');
  }
  return info;
};

/**
 * Internal function to get a random Big Number (BN)
 *
 * @returns {BN} A new randomly generated BN
 * @private
 */
PrivateKey._getRandomBN = function(){
  var condition;
  var bn;
  do {
    var privbuf = Random.getRandomBuffer(32);
    bn = BN.fromBuffer(privbuf);
    condition = bn.lt(Point.getN());
  } while (!condition);
  return bn;
};

/**
 * Internal function to transform a WIF Buffer into a private key
 *
 * @param {Buffer} buf - An WIF string
 * @param {Network|string=} network - a {@link Network} object, or a string with the network name
 * @returns {Object} An object with keys: bn, network and compressed
 * @private
 */
PrivateKey._transformBuffer = function(buf, network) {

  var info = {};

  if (buf.length === 32) {
    return PrivateKey._transformBNBuffer(buf, network);
  }

  info.network = Networks.get(buf[0], 'privatekey');

  if (!info.network) {
    throw new Error('Invalid network');
  }

  if (network && info.network !== Networks.get(network)) {
    throw new TypeError('Private key network mismatch');
  }

  if (buf.length === 1 + 32 + 1 && buf[1 + 32 + 1 - 1] === 1) {
    info.compressed = true;
  } else if (buf.length === 1 + 32) {
    info.compressed = false;
  } else {
    throw new Error('Length of buffer must be 33 (uncompressed) or 34 (compressed)');
  }

  info.bn = BN.fromBuffer(buf.slice(1, 32 + 1));

  return info;
};

/**
 * Internal function to transform a BN buffer into a private key
 *
 * @param {Buffer} buf
 * @param {Network|string=} network - a {@link Network} object, or a string with the network name
 * @returns {object} an Object with keys: bn, network, and compressed
 * @private
 */
PrivateKey._transformBNBuffer = function(buf, network) {
  var info = {};
  info.network = Networks.get(network) || Networks.defaultNetwork;
  info.bn = BN.fromBuffer(buf);
  info.compressed = false;
  return info;
};

/**
 * Internal function to transform a WIF string into a private key
 *
 * @param {string} buf - An WIF string
 * @returns {Object} An object with keys: bn, network and compressed
 * @private
 */
PrivateKey._transformWIF = function(str, network) {
  return PrivateKey._transformBuffer(Base58Check.decode(str), network);
};

/**
 * Instantiate a PrivateKey from a Buffer with the DER or WIF representation
 *
 * @param {Buffer} arg
 * @param {Network} network
 * @return {PrivateKey}
 */
PrivateKey.fromBuffer = function(arg, network) {
  return new PrivateKey(arg, network);
};

/**
 * Internal function to transform a JSON string on plain object into a private key
 * return this.
 *
 * @param {string} json - A JSON string or plain object
 * @returns {Object} An object with keys: bn, network and compressed
 * @private
 */
PrivateKey._transformObject = function(json) {
  var bn = new BN(json.bn, 'hex');
  var network = Networks.get(json.network);
  return {
    bn: bn,
    network: network,
    compressed: json.compressed
  };
};

/**
 * Instantiate a PrivateKey from a WIF string
 *
 * @param {string} str - The WIF encoded private key string
 * @returns {PrivateKey} A new valid instance of PrivateKey
 */
PrivateKey.fromString = PrivateKey.fromWIF = function(str) {
  $.checkArgument(_.isString(str), 'First argument is expected to be a string.');
  return new PrivateKey(str);
};

/**
 * Instantiate a PrivateKey from a plain JavaScript object
 *
 * @param {Object} obj - The output from privateKey.toObject()
 */
PrivateKey.fromObject = function(obj) {
  $.checkArgument(_.isObject(obj), 'First argument is expected to be an object.');
  return new PrivateKey(obj);
};

/**
 * Instantiate a PrivateKey from random bytes
 *
 * @param {string=} network - Either "livenet" or "testnet"
 * @returns {PrivateKey} A new valid instance of PrivateKey
 */
PrivateKey.fromRandom = function(network) {
  var bn = PrivateKey._getRandomBN();
  return new PrivateKey(bn, network);
};

/**
 * Check if there would be any errors when initializing a PrivateKey
 *
 * @param {string} data - The encoded data in various formats
 * @param {string=} network - Either "livenet" or "testnet"
 * @returns {null|Error} An error if exists
 */
PrivateKey.getValidationError = function(data, network) {
  var error;
  try {
    /* jshint nonew: false */
    new PrivateKey(data, network);
  } catch (e) {
    error = e;
  }
  return error;
};

/**
 * Check if the parameters are valid
 *
 * @param {string} data - The encoded data in various formats
 * @param {string=} network - Either "livenet" or "testnet"
 * @returns {Boolean} If the private key is would be valid
 */
PrivateKey.isValid = function(data, network){
  if (!data) {
    return false;
  }
  return !PrivateKey.getValidationError(data, network);
};

/**
 * Will output the PrivateKey encoded as hex string
 *
 * @returns {string}
 */
PrivateKey.prototype.toString = function() {
  return this.toBuffer().toString('hex');
};

/**
 * Will output the PrivateKey to a WIF string
 *
 * @returns {string} A WIP representation of the private key
 */
PrivateKey.prototype.toWIF = function() {
  var network = this.network;
  var compressed = this.compressed;

  var buf;
  if (compressed) {
    buf = Buffer.concat([Buffer.from([network.privatekey]),
                         this.bn.toBuffer({size: 32}),
                         Buffer.from([0x01])]);
  } else {
    buf = Buffer.concat([Buffer.from([network.privatekey]),
                         this.bn.toBuffer({size: 32})]);
  }

  return Base58Check.encode(buf);
};

/**
 * Will return the private key as a BN instance
 *
 * @returns {BN} A BN instance of the private key
 */
PrivateKey.prototype.toBigNumber = function(){
  return this.bn;
};

/**
 * Will return the private key as a BN buffer
 *
 * @returns {Buffer} A buffer of the private key
 */
PrivateKey.prototype.toBuffer = function(){
  return this.bn.toBuffer({size: 32});
};

/**
 * WARNING: This method will not be officially supported until v1.0.0.
 *
 *
 * Will return the private key as a BN buffer without leading zero padding
 *
 * @returns {Buffer} A buffer of the private key
 */
PrivateKey.prototype.toBufferNoPadding = function() {
  return this.bn.toBuffer();
};

/**
 * Will return the corresponding public key
 *
 * @returns {PublicKey} A public key generated from the private key
 */
PrivateKey.prototype.toPublicKey = function(){
  if (!this._pubkey) {
    this._pubkey = PublicKey.fromPrivateKey(this);
  }
  return this._pubkey;
};

/**
 * Will return an address for the private key
 * @param {Network=} network - optional parameter specifying
 * @param {string} type - Either 'pubkeyhash', 'witnesspubkeyhash', or 'scripthash'
 * the desired network for the address
 *
 * @returns {Address} An address generated from the private key
 */
PrivateKey.prototype.toAddress = function(network, type) {
  var pubkey = this.toPublicKey();
  return Address.fromPublicKey(pubkey, network || this.network, type);
};

/**
 * @returns {Object} A plain object representation
 */
PrivateKey.prototype.toObject = PrivateKey.prototype.toJSON = function toObject() {
  return {
    bn: this.bn.toString('hex'),
    compressed: this.compressed,
    network: this.network.toString()
  };
};

/**
 * Create a tweaked version of this private key
 * @param {Buffer} merkleRoot (optional)
 * @returns {{ tweakedPrivKey: Buffer }}
 */
PrivateKey.prototype.createTapTweak = function(merkleRoot) {
  const order = Point.getN();
  const P = Point.getG().mul(this.bn);
  const secKey = P.y.isEven() ? this.bn : order.sub(this.bn);
  const taggedWriter = new TaggedHash('TapTweak');
  taggedWriter.write(P.x.toBuffer({ size: 32 }));

  if (merkleRoot) {
    $.checkArgument(Buffer.isBuffer(merkleRoot) && merkleRoot.length === 32, 'merkleRoot must be 32 byte buffer');
    taggedWriter.write(merkleRoot);
  }
  const tweakHash = taggedWriter.finalize();

  $.checkState(BN.fromBuffer(tweakHash).lt(order), 'TapTweak hash failed secp256k1 order check');
  return {
    tweakedPrivKey: secKey.add(new BN(tweakHash)).mod(order).toBuffer({ size: 32 })
  };
};

/**
 * Will return a string formatted for the console
 *
 * @returns {string} Private key
 */
PrivateKey.prototype.inspect = function() {
  var uncompressed = !this.compressed ? ', uncompressed' : '';
  return '<PrivateKey: ' + this.toString() + ', network: ' + this.network + uncompressed + '>';
};

module.exports = PrivateKey;


/***/ }),

/***/ 13981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var inherits = __webpack_require__(28322);

var $ = __webpack_require__(6213);
var BufferUtil = __webpack_require__(56142);

var Address = __webpack_require__(87089);
var Hash = __webpack_require__(44499);
var Input = __webpack_require__(68237);
var Output = __webpack_require__(42109);
var Sighash = __webpack_require__(99039);
var SighashWitness = __webpack_require__(39368);
var BufferWriter = __webpack_require__(54878);
var BufferUtil = __webpack_require__(56142);
var Script = __webpack_require__(91093);
var Signature = __webpack_require__(23825);
var TransactionSignature = __webpack_require__(3544);

/**
 * Represents a special kind of input of PayToPublicKeyHash kind.
 * @constructor
 */
function PublicKeyHashInput() {
  Input.apply(this, arguments);
}
inherits(PublicKeyHashInput, Input);

PublicKeyHashInput.prototype.getRedeemScript = function(publicKey) {
  if (!this.redeemScript) {
    var redeemScript = Script.buildWitnessV0Out(publicKey);
    if (Script.buildScriptHashOut(redeemScript).equals(this.output.script)) {
      var scriptSig = new Script();
      scriptSig.add(redeemScript.toBuffer());
      this.setScript(scriptSig);
      this.redeemScript = redeemScript;
    }
  }
  return this.redeemScript;
};

PublicKeyHashInput.prototype.getScriptCode = function(publicKey) {
  var writer = new BufferWriter();
  var script;
  if (this.output.script.isScriptHashOut()) {
    script = this.getRedeemScript(publicKey);
  } else {
    script = this.output.script;
  }
  var scriptBuffer = Script.buildPublicKeyHashOut(script.toAddress()).toBuffer();
  writer.writeVarintNum(scriptBuffer.length);
  writer.write(scriptBuffer);
  return writer.toBuffer();
};

PublicKeyHashInput.prototype.getSighash = function(transaction, privateKey, index, sigtype) {
  var scriptCode = this.getScriptCode(privateKey);
  var satoshisBuffer = this.getSatoshisBuffer();
  return SighashWitness.sighash(transaction, sigtype, index, scriptCode, satoshisBuffer);
};

/**
 * @param {Transaction} transaction - the transaction to be signed
 * @param {PrivateKey} privateKey - the private key with which to sign the transaction
 * @param {number} index - the index of the input in the transaction input vector
 * @param {number} sigtype - the type of signature, defaults to Signature.SIGHASH_ALL
 * @param {Buffer} hashData - the precalculated hash of the public key associated with the privateKey provided
 * @param {String} signingMethod - method used to sign - 'ecdsa' or 'schnorr'
 * @param {Buffer} merkleRoot - unused for this input type
 * @return {Array<TransactionSignature>}
 */
PublicKeyHashInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype, hashData, signingMethod, merkleRoot) {
  $.checkState(this.output instanceof Output);
  hashData = hashData || Hash.sha256ripemd160(privateKey.publicKey.toBuffer());
  sigtype = sigtype || Signature.SIGHASH_ALL;
  signingMethod = signingMethod || 'ecdsa'; // unused. Keeping for consistency with other libs

  var script;
  if (this.output.script.isScriptHashOut()) {
    script = this.getRedeemScript(privateKey.publicKey);
  } else {
    script = this.output.script;
  }

  if (script && BufferUtil.equals(hashData, script.getPublicKeyHash())) {
    var signature;
    if (script.isWitnessPublicKeyHashOut()) {
      var satoshisBuffer = this.getSatoshisBuffer();
      var scriptCode = this.getScriptCode(privateKey.publicKey);
      signature = SighashWitness.sign(transaction, privateKey, sigtype, index, scriptCode, satoshisBuffer);
    } else {
      signature = Sighash.sign(transaction, privateKey, sigtype, index, this.output.script);
    }

    return [new TransactionSignature({
      publicKey: privateKey.publicKey,
      prevTxId: this.prevTxId,
      outputIndex: this.outputIndex,
      inputIndex: index,
      signature: signature,
      sigtype: sigtype
    })];
  }
  return [];
};
/* jshint maxparams: 3 */

/**
 * Add the provided signature
 *
 * @param {Transaction} transaction
 * @param {Object} signature
 * @param {PublicKey} signature.publicKey
 * @param {Signature} signature.signature
 * @param {number=} signature.sigtype
 * @param {String} signingMethod - method used to sign - 'ecdsa' or 'schnorr' (future signing method)
 * @return {PublicKeyHashInput} this, for chaining
 */
PublicKeyHashInput.prototype.addSignature = function(transaction, signature, signingMethod) {
  $.checkState(this.isValidSignature(transaction, signature, signingMethod), 'Signature is invalid');

  if (this.output.script.isWitnessPublicKeyHashOut() || this.output.script.isScriptHashOut()) {
    this.setWitnesses([
      BufferUtil.concat([
        signature.signature.toDER(),
        BufferUtil.integerAsSingleByteBuffer(signature.sigtype)
      ]),
      signature.publicKey.toBuffer()
    ]);
  } else {
    this.setScript(Script.buildPublicKeyHashIn(
      signature.publicKey,
      signature.signature.toDER(),
      signature.sigtype
    ));
  }
  return this;
};

/**
 * Clear the input's signature
 * @return {PublicKeyHashInput} this, for chaining
 */
PublicKeyHashInput.prototype.clearSignatures = function() {
  this.setScript(Script.empty());
  this.setWitnesses([]);
  return this;
};

/**
 * Query whether the input is signed
 * @return {boolean}
 */
PublicKeyHashInput.prototype.isFullySigned = function() {
  return this.script.isPublicKeyHashIn() || this.hasWitnesses();
};

PublicKeyHashInput.prototype.isValidSignature = function(transaction, signature, signingMethod) {
  signingMethod = signingMethod || 'ecdsa'; // unused. Keeping for consistency with other libs
  // FIXME: Refactor signature so this is not necessary
  signature.signature.nhashtype = signature.sigtype;
  if (this.output.script.isWitnessPublicKeyHashOut() || this.output.script.isScriptHashOut()) {
    var scriptCode = this.getScriptCode();
    var satoshisBuffer = this.getSatoshisBuffer();
    return SighashWitness.verify(
      transaction,
      signature.signature,
      signature.publicKey,
      signature.inputIndex,
      scriptCode,
      satoshisBuffer
    );
  } else {
    return Sighash.verify(
      transaction,
      signature.signature,
      signature.publicKey,
      signature.inputIndex,
      this.output.script
    );
  }
};


PublicKeyHashInput.SCRIPT_MAX_SIZE = 73 + 34; // sigsize (1 + 72) + pubkey (1 + 33)
PublicKeyHashInput.REDEEM_SCRIPT_SIZE = 1 + 22; // len (1) OP_0 (1) pubkeyhash (1 + 20)

PublicKeyHashInput.prototype._estimateSize = function() {
  let result = this._getBaseSize();
  result += 1; // script size
  const WITNESS_DISCOUNT = 4;
  const witnessSize = PublicKeyHashInput.SCRIPT_MAX_SIZE / WITNESS_DISCOUNT;
  if (this.output.script.isWitnessPublicKeyHashOut()) {
    result += witnessSize;
  } else if (this.output.script.isScriptHashOut()) {
    result += witnessSize + PublicKeyHashInput.REDEEM_SCRIPT_SIZE;
  } else {
    result += PublicKeyHashInput.SCRIPT_MAX_SIZE;
  }
  return result;
};

module.exports = PublicKeyHashInput;


/***/ }),

/***/ 14093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var BufferWriter = __webpack_require__(54878);
var BufferReader = __webpack_require__(69118);
var BN = __webpack_require__(62731);

var Varint = function Varint(buf) {
  if (!(this instanceof Varint))
    return new Varint(buf);
  if (Buffer.isBuffer(buf)) {
    this.buf = buf;
  } else if (typeof buf === 'number') {
    var num = buf;
    this.fromNumber(num);
  } else if (buf instanceof BN) {
    var bn = buf;
    this.fromBN(bn);
  } else if (buf) {
    var obj = buf;
    this.set(obj);
  }
};

Varint.prototype.set = function(obj) {
  this.buf = obj.buf || this.buf;
  return this;
};

Varint.prototype.fromString = function(str) {
  this.set({
    buf: Buffer.from(str, 'hex')
  });
  return this;
};

Varint.prototype.toString = function() {
  return this.buf.toString('hex');
};

Varint.prototype.fromBuffer = function(buf) {
  this.buf = buf;
  return this;
};

Varint.prototype.fromBufferReader = function(br) {
  this.buf = br.readVarintBuf();
  return this;
};

Varint.prototype.fromBN = function(bn) {
  this.buf = BufferWriter().writeVarintBN(bn).concat();
  return this;
};

Varint.prototype.fromNumber = function(num) {
  this.buf = BufferWriter().writeVarintNum(num).concat();
  return this;
};

Varint.prototype.toBuffer = function() {
  return this.buf;
};

Varint.prototype.toBN = function() {
  return BufferReader(this.buf).readVarintBN();
};

Varint.prototype.toNumber = function() {
  return BufferReader(this.buf).readVarintNum();
};

module.exports = Varint;


/***/ }),

/***/ 15092:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    Buffer = (__webpack_require__(22946).Buffer);
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
    }

    if (base === 16) {
      this._parseHex(number, start);
    } else {
      this._parseBase(number, base, start);
    }

    if (number[0] === '-') {
      this.negative = 1;
    }

    this.strip();

    if (endian !== 'le') return;

    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [ number & 0x3ffffff ];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [ 0 ];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this.strip();
  };

  function parseHex (str, start, end) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r <<= 4;

      // 'a' - 'f'
      if (c >= 49 && c <= 54) {
        r |= c - 49 + 0xa;

      // 'A' - 'F'
      } else if (c >= 17 && c <= 22) {
        r |= c - 17 + 0xa;

      // '0' - '9'
      } else {
        r |= c & 0xf;
      }
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    // Scan 24-bit chunks and add them to the number
    var off = 0;
    for (i = number.length - 6, j = 0; i >= start; i -= 6) {
      w = parseHex(number, i, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
      off += 24;
      if (off >= 26) {
        off -= 26;
        j++;
      }
    }
    if (i + 6 !== start) {
      w = parseHex(number, start, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
    }
    this.strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        r += c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        r += c - 17 + 0xa;

      // '0' - '9'
      } else {
        r += c;
      }
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [ 0 ];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype.strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  BN.prototype.inspect = function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  };

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16);
  };

  BN.prototype.toBuffer = function toBuffer (endian, length) {
    assert(typeof Buffer !== 'undefined');
    return this.toArrayLike(Buffer, endian, length);
  };

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    this.strip();
    var littleEndian = endian === 'le';
    var res = new ArrayType(reqLength);

    var b, i;
    var q = this.clone();
    if (!littleEndian) {
      // Assume big-endian
      for (i = 0; i < reqLength - byteLength; i++) {
        res[i] = 0;
      }

      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[reqLength - i - 1] = b;
      }
    } else {
      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[i] = b;
      }

      for (; i < reqLength; i++) {
        res[i] = 0;
      }
    }

    return res;
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this.strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this.strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this.strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this.strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this.strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this.strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out.strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out.strip();
  }

  function jumboMulTo (self, num, out) {
    var fftm = new FFTM();
    return fftm.mulp(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out.strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this.strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this.strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this.strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) < num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this.strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this.strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this.strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q.strip();
    }
    a.strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modn = function modn (num) {
    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return acc;
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    return this.strip();
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this.strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      r.strip();
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
    return a.umod(this.m)._forceRed(this);
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})( false || module, this);


/***/ }),

/***/ 15558:
/***/ ((module) => {

"use strict";


var docsURL = 'http://bitcore.io/';

module.exports = [{
  name: 'InvalidB58Char',
  message: 'Invalid Base58 character: {0} in {1}'
}, {
  name: 'InvalidB58Checksum',
  message: 'Invalid Base58 checksum for {0}'
}, {
  name: 'InvalidNetwork',
  message: 'Invalid version for network: got {0}'
}, {
  name: 'InvalidState',
  message: 'Invalid state: {0}'
}, {
  name: 'NotImplemented',
  message: 'Function {0} was not implemented yet'
}, {
  name: 'InvalidNetworkArgument',
  message: 'Invalid network: must be "livenet" or "testnet", got {0}'
}, {
  name: 'InvalidArgument',
  message: function() {
    return 'Invalid Argument' + (arguments[0] ? (': ' + arguments[0]) : '') +
      (arguments[1] ? (' Documentation: ' + docsURL + arguments[1]) : '');
  }
}, {
  name: 'AbstractMethodInvoked',
  message: 'Abstract Method Invocation: {0}'
}, {
  name: 'InvalidArgumentType',
  message: function() {
    return 'Invalid Argument for ' + arguments[2] + ', expected ' + arguments[1] + ' but got ' + typeof arguments[0];
  }
}, {
  name: 'Unit',
  message: 'Internal Error on Unit {0}',
  errors: [{
    'name': 'UnknownCode',
    'message': 'Unrecognized unit code: {0}'
  }, {
    'name': 'InvalidRate',
    'message': 'Invalid exchange rate: {0}'
  }]
}, {
  name: 'MerkleBlock',
  message: 'Internal Error on MerkleBlock {0}',
  errors: [{
    'name': 'InvalidMerkleTree',
    'message': 'This MerkleBlock contain an invalid Merkle Tree'
  }]
}, {
  name: 'Transaction',
  message: 'Internal Error on Transaction {0}',
  errors: [{
    name: 'Input',
    message: 'Internal Error on Input {0}',
    errors: [{
      name: 'MissingScript',
      message: 'Need a script to create an input'
    }, {
      name: 'UnsupportedScript',
      message: 'Unsupported input script type: {0}'
    }, {
      name: 'MissingPreviousOutput',
      message: 'No previous output information.'
    }, {
      name: 'BlockHeightOutOfRange',
      message: 'Block Height can only be between 0 and 65535'
    } , {
      name: 'LockTimeRange',
      message: 'Seconds needs to be more that 0 and less that 33553920'
    }
    ]
  }, {
    name: 'NeedMoreInfo',
    message: '{0}'
  }, {
    name: 'InvalidSorting',
    message: 'The sorting function provided did not return the change output as one of the array elements'
  }, {
    name: 'InvalidOutputAmountSum',
    message: '{0}'
  }, {
    name: 'MissingSignatures',
    message: 'Some inputs have not been fully signed'
  }, {
    name: 'InvalidIndex',
    message: 'Invalid index: {0} is not between 0, {1}'
  }, {
    name: 'UnableToVerifySignature',
    message: 'Unable to verify signature: {0}'
  }, {
    name: 'DustOutputs',
    message: 'Dust amount detected in one output'
  }, {
    name: 'InvalidSatoshis',
    message: 'Output satoshis are invalid',
  }, {
    name: 'FeeError',
    message: 'Internal Error on Fee {0}',
    errors: [{
      name: 'TooSmall',
      message: 'Fee is too small: {0}',
    }, {
      name: 'TooLarge',
      message: 'Fee is too large: {0}',
    }, {
      name: 'Different',
      message: 'Unspent value is different from specified fee: {0}',
    }]
  }, {
    name: 'ChangeAddressMissing',
    message: 'Change address is missing'
  }, {
    name: 'BlockHeightTooHigh',
    message: 'Block Height can be at most 2^32 -1'
  }, {
    name: 'NLockTimeOutOfRange',
    message: 'Block Height can only be between 0 and 499 999 999'
  }, {
    name: 'LockTimeTooEarly',
    message: 'Lock Time can\'t be earlier than UNIX date 500 000 000'
  }]
}, {
  name: 'Script',
  message: 'Internal Error on Script {0}',
  errors: [{
    name: 'UnrecognizedAddress',
    message: 'Expected argument {0} to be an address'
  }, {
    name: 'CantDeriveAddress',
    message: 'Can\'t derive address associated with script {0}, needs to be p2pkh in, p2pkh out, p2sh in, or p2sh out.'
  }, {
    name: 'InvalidBuffer',
    message: 'Invalid script buffer: can\'t parse valid script from given buffer {0}'
  }]
}, {
  name: 'HDPrivateKey',
  message: 'Internal Error on HDPrivateKey {0}',
  errors: [{
    name: 'InvalidDerivationArgument',
    message: 'Invalid derivation argument {0}, expected string, or number and boolean'
  }, {
    name: 'InvalidEntropyArgument',
    message: 'Invalid entropy: must be an hexa string or binary buffer, got {0}',
    errors: [{
      name: 'TooMuchEntropy',
      message: 'Invalid entropy: more than 512 bits is non standard, got "{0}"'
    }, {
      name: 'NotEnoughEntropy',
      message: 'Invalid entropy: at least 128 bits needed, got "{0}"'
    }]
  }, {
    name: 'InvalidLength',
    message: 'Invalid length for xprivkey string in {0}'
  }, {
    name: 'InvalidPath',
    message: 'Invalid derivation path: {0}'
  }, {
    name: 'UnrecognizedArgument',
    message: 'Invalid argument: creating a HDPrivateKey requires a string, buffer, json or object, got "{0}"'
  }]
}, {
  name: 'HDPublicKey',
  message: 'Internal Error on HDPublicKey {0}',
  errors: [{
    name: 'ArgumentIsPrivateExtended',
    message: 'Argument is an extended private key: {0}'
  }, {
    name: 'InvalidDerivationArgument',
    message: 'Invalid derivation argument: got {0}'
  }, {
    name: 'InvalidLength',
    message: 'Invalid length for xpubkey: got "{0}"'
  }, {
    name: 'InvalidPath',
    message: 'Invalid derivation path, it should look like: "m/1/100", got "{0}"'
  }, {
    name: 'InvalidIndexCantDeriveHardened',
    message: 'Invalid argument: creating a hardened path requires an HDPrivateKey'
  }, {
    name: 'MustSupplyArgument',
    message: 'Must supply an argument to create a HDPublicKey'
  }, {
    name: 'UnrecognizedArgument',
    message: 'Invalid argument for creation, must be string, json, buffer, or object'
  }]
}];


/***/ }),

/***/ 23825:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var BN = __webpack_require__(62731);
var _ = __webpack_require__(2543);
var $ = __webpack_require__(6213);
var BufferUtil = __webpack_require__(56142);
var JSUtil = __webpack_require__(44371);

var Signature = function Signature(r, s, isSchnorr) {
  if (!(this instanceof Signature)) {
    return new Signature(r, s, isSchnorr);
  }
  if (r instanceof BN) {
    this.set({
      r: r,
      s: s,
      isSchnorr: isSchnorr
    });
  } else if (r) {
    var obj = r;
    this.set(obj);
  }
};

/* jshint maxcomplexity: 7 */
Signature.prototype.set = function(obj) {
  this.r = obj.r || this.r || undefined;
  this.s = obj.s || this.s || undefined;

  // public key recovery parameter in range [0, 3]
  this.i = typeof obj.i === 'undefined' ? this.i : obj.i;
  // whether the recovered pubkey is compressed
  this.compressed = typeof obj.compressed === 'undefined' ? this.compressed : obj.compressed;
  this.isSchnorr = typeof obj.isSchnorr === 'undefined' ? this.isSchnorr : obj.isSchnorr;
  this.nhashtype = obj.nhashtype || this.nhashtype || undefined;
  return this;
};

Signature.fromCompact = function(buf) {
  $.checkArgument(BufferUtil.isBuffer(buf), 'Argument is expected to be a Buffer');

  var sig = new Signature();

  var compressed = true;
  var i = buf.slice(0, 1)[0] - 27 - 4;
  if (i < 0) {
    compressed = false;
    i = i + 4;
  }

  var b2 = buf.slice(1, 33);
  var b3 = buf.slice(33, 65);

  $.checkArgument(i === 0 || i === 1 || i === 2 || i === 3, new Error('i must be 0, 1, 2, or 3'));
  $.checkArgument(b2.length === 32, new Error('r must be 32 bytes'));
  $.checkArgument(b3.length === 32, new Error('s must be 32 bytes'));

  sig.compressed = compressed;
  sig.i = i;
  sig.r = BN.fromBuffer(b2);
  sig.s = BN.fromBuffer(b3);

  return sig;
};

Signature.fromDER = Signature.fromBuffer = function(buf, strict) {
  var sig = new Signature();

  // Schnorr Signatures use 65 byte for in tx r [len] 32 , s [len] 32, nhashtype
  // NOTE: this check is not very reliable. You should use .fromSchnorr directly if you know it's a schnorr sig.
  if((buf.length === 64 || buf.length === 65) && buf[0] != 0x30) {
    return Signature.fromSchnorr(buf);
  }
  
  $.checkArgument(!(buf.length === 64 && buf[0] === 0x30), new Error('64 DER (ecdsa) signatures not allowed'));
  
  var obj = Signature.parseDER(buf, strict);

  sig.r = obj.r;
  sig.s = obj.s;

  return sig;
};

// The format used in a tx
Signature.fromTxFormat = function(buf) {
  var nhashtype = buf.readUInt8(buf.length - 1);
  var derbuf = buf.slice(0, buf.length - 1);
  var sig = new Signature.fromDER(derbuf, false);
  sig.nhashtype = nhashtype;
  return sig;
};

Signature.fromString = function(str) {
  var buf = Buffer.from(str, 'hex');
  return Signature.fromDER(buf);
};


/**
 * In order to mimic the non-strict DER encoding of OpenSSL, set strict = false.
 */
Signature.parseDER = function(buf, strict) {
  $.checkArgument(BufferUtil.isBuffer(buf), new Error('DER formatted signature should be a buffer'));
  if (_.isUndefined(strict)) {
    strict = true;
  }

  var header = buf[0];
  $.checkArgument(header === 0x30, new Error('Header byte should be 0x30'));

  var length = buf[1];
  var buflength = buf.slice(2).length;
  $.checkArgument(!strict || length === buflength, new Error('Length byte should length of what follows'));

  length = length < buflength ? length : buflength;

  var rheader = buf[2 + 0];
  $.checkArgument(rheader === 0x02, new Error('Integer byte for r should be 0x02'));

  var rlength = buf[2 + 1];
  var rbuf = buf.slice(2 + 2, 2 + 2 + rlength);
  var r = BN.fromBuffer(rbuf);
  var rneg = buf[2 + 1 + 1] === 0x00 ? true : false;
  $.checkArgument(rlength === rbuf.length, new Error('Length of r incorrect'));

  var sheader = buf[2 + 2 + rlength + 0];
  $.checkArgument(sheader === 0x02, new Error('Integer byte for s should be 0x02'));

  var slength = buf[2 + 2 + rlength + 1];
  var sbuf = buf.slice(2 + 2 + rlength + 2, 2 + 2 + rlength + 2 + slength);
  var s = BN.fromBuffer(sbuf);
  var sneg = buf[2 + 2 + rlength + 2 + 2] === 0x00 ? true : false;
  $.checkArgument(slength === sbuf.length, new Error('Length of s incorrect'));

  var sumlength = 2 + 2 + rlength + 2 + slength;
  $.checkArgument(length === sumlength - 2, new Error('Length of signature incorrect'));

  var obj = {
    header: header,
    length: length,
    rheader: rheader,
    rlength: rlength,
    rneg: rneg,
    rbuf: rbuf,
    r: r,
    sheader: sheader,
    slength: slength,
    sneg: sneg,
    sbuf: sbuf,
    s: s
  };

  return obj;
};


Signature.prototype.toCompact = function(i, compressed) {
  i = typeof i === 'number' ? i : this.i;
  compressed = typeof compressed === 'boolean' ? compressed : this.compressed;

  if (!(i === 0 || i === 1 || i === 2 || i === 3)) {
    throw new Error('i must be equal to 0, 1, 2, or 3');
  }

  var val = i + 27 + 4;
  if (compressed === false) {
    val = val - 4;
  }
  var b1 = Buffer.from([val]);
  var b2 = this.r.toBuffer({
    size: 32
  });
  var b3 = this.s.toBuffer({
    size: 32
  });
  return Buffer.concat([b1, b2, b3]);
};

/**
 * Returns either a DER encoded buffer or a Schnorr encoded buffer if isSchnor == true
 */
Signature.prototype.toBuffer = Signature.prototype.toDER = function() {
  if(this.isSchnorr) {
    const hashTypeBuf = !this.nhashtype || this.nhashtype === Signature.SIGHASH_DEFAULT ? Buffer.alloc(0) : Buffer.from([this.nhashtype]);
    return Buffer.concat([this.r.toBuffer({ size: 32 }), this.s.toBuffer({ size: 32 }), hashTypeBuf]);
  }

  var rnbuf = this.r.toBuffer();
  var snbuf = this.s.toBuffer();

  var rneg = rnbuf[0] & 0x80 ? true : false;
  var sneg = snbuf[0] & 0x80 ? true : false;

  var rbuf = rneg ? Buffer.concat([Buffer.from([0x00]), rnbuf]) : rnbuf;
  var sbuf = sneg ? Buffer.concat([Buffer.from([0x00]), snbuf]) : snbuf;

  var rlength = rbuf.length;
  var slength = sbuf.length;
  var length = 2 + rlength + 2 + slength;
  var rheader = 0x02;
  var sheader = 0x02;
  var header = 0x30;

  var der = Buffer.concat([Buffer.from([header, length, rheader, rlength]), rbuf, Buffer.from([sheader, slength]), sbuf]);
  return der;
};

Signature.prototype.toString = function() {
  var buf = this.toDER();
  return buf.toString('hex');
};

/**
 * This function is translated from bitcoind's IsDERSignature and is used in
 * the script interpreter.  This "DER" format actually includes an extra byte,
 * the nhashtype, at the end. It is really the tx format, not DER format.
 *
 * A canonical signature exists of: [30] [total len] [02] [len R] [R] [02] [len S] [S] [hashtype]
 * Where R and S are not negative (their first byte has its highest bit not set), and not
 * excessively padded (do not start with a 0 byte, unless an otherwise negative number follows,
 * in which case a single 0 byte is necessary and even required).
 *
 * See https://bitcointalk.org/index.php?topic=8392.msg127623#msg127623
 */
Signature.isTxDER = function(buf) {
  if (buf.length < 9) {
    //  Non-canonical signature: too short
    return false;
  }
  if (buf.length > 73) {
    // Non-canonical signature: too long
    return false;
  }
  if (buf[0] !== 0x30) {
    //  Non-canonical signature: wrong type
    return false;
  }
  if (buf[1] !== buf.length - 3) {
    //  Non-canonical signature: wrong length marker
    return false;
  }
  var nLenR = buf[3];
  if (5 + nLenR >= buf.length) {
    //  Non-canonical signature: S length misplaced
    return false;
  }
  var nLenS = buf[5 + nLenR];
  if ((nLenR + nLenS + 7) !== buf.length) {
    //  Non-canonical signature: R+S length mismatch
    return false;
  }

  var R = buf.slice(4);
  if (buf[4 - 2] !== 0x02) {
    //  Non-canonical signature: R value type mismatch
    return false;
  }
  if (nLenR === 0) {
    //  Non-canonical signature: R length is zero
    return false;
  }
  if (R[0] & 0x80) {
    //  Non-canonical signature: R value negative
    return false;
  }
  if (nLenR > 1 && (R[0] === 0x00) && !(R[1] & 0x80)) {
    //  Non-canonical signature: R value excessively padded
    return false;
  }

  var S = buf.slice(6 + nLenR);
  if (buf[6 + nLenR - 2] !== 0x02) {
    //  Non-canonical signature: S value type mismatch
    return false;
  }
  if (nLenS === 0) {
    //  Non-canonical signature: S length is zero
    return false;
  }
  if (S[0] & 0x80) {
    //  Non-canonical signature: S value negative
    return false;
  }
  if (nLenS > 1 && (S[0] === 0x00) && !(S[1] & 0x80)) {
    //  Non-canonical signature: S value excessively padded
    return false;
  }
  return true;
};

/**
 * Compares to bitcoind's IsLowDERSignature
 * See also ECDSA signature algorithm which enforces this.
 * See also BIP 62, "low S values in signatures"
 */
Signature.prototype.hasLowS = function() {
  if (this.s.lt(new BN(1)) ||
    this.s.gt(new BN('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0', 'hex'))) {
    return false;
  }
  return true;
};

/**
 * @returns true if the nhashtype is exactly equal to one of the standard options or combinations thereof.
 * Translated from bitcoind's IsDefinedHashtypeSignature
 */
Signature.prototype.hasDefinedHashtype = function() {
  if (!JSUtil.isNaturalNumber(this.nhashtype)) {
    return false;
  }
  // accept with or without Signature.SIGHASH_ANYONECANPAY by ignoring the bit
  var temp = this.nhashtype & ~Signature.SIGHASH_ANYONECANPAY;
  if (temp < Signature.SIGHASH_ALL || temp > Signature.SIGHASH_SINGLE) {
    return false;
  }
  return true;
};

Signature.prototype.toTxFormat = function() {
  var derbuf = this.toDER();
  var buf = Buffer.alloc(1);
  buf.writeUInt8(this.nhashtype, 0);
  return Buffer.concat([derbuf, buf]);
};

/**
 * Creates a Signature instance from a Schnorr sig
 * @param {Buffer} buf Schnorr signature buffer
 * @returns {Signature}
 */
Signature.fromSchnorr = function(buf) {
  $.checkArgument(Buffer.isBuffer(buf), 'Schnorr signature argument must be a buffer');
  $.checkArgument(buf.length === 64 || buf.length === 65, 'Schnorr signatures must be 64 or 65 bytes');

  const sig = new Signature();
  let r = buf.slice(0,32);
  let s = buf.slice(32, 64);
  if (buf.length === 65) {
    sig.nhashtype = buf[buf.length - 1];
    $.checkState(sig.nhashtype !== Signature.SIGHASH_DEFAULT, new Error('invalid hashtype'));
  } else {
    sig.nhashtype = Signature.SIGHASH_DEFAULT;
  }
  sig.r = BN.fromBuffer(r);
  sig.s = BN.fromBuffer(s);
  sig.isSchnorr = true;
  return sig;
};

Signature.SIGHASH_DEFAULT       = 0x00; //!< Taproot only; implied when sighash byte is missing, and equivalent to SIGHASH_ALL
Signature.SIGHASH_ALL           = 0x01;
Signature.SIGHASH_NONE          = 0x02;
Signature.SIGHASH_SINGLE        = 0x03;
Signature.SIGHASH_ANYONECANPAY  = 0x80;

Signature.SIGHASH_OUTPUT_MASK = 3;
Signature.SIGHASH_INPUT_MASK  = 128; // 0x80,

Signature.Version = {};
Signature.Version.BASE       = 0;
Signature.Version.WITNESS_V0 = 1;
Signature.Version.TAPROOT    = 2;
Signature.Version.TAPSCRIPT  = 3;

module.exports = Signature;


/***/ }),

/***/ 24192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const inherits = __webpack_require__(28322);
const $ = __webpack_require__(6213);
const PubKeyHashInput = __webpack_require__(13981);
const SighashSchnorr = __webpack_require__(86850);
const Signature = __webpack_require__(23825);
const TransactionSignature = __webpack_require__(3544);
const Output = __webpack_require__(42109);
const PrivateKey = __webpack_require__(10555);

function TaprootInput() {
  PubKeyHashInput.apply(this, arguments);
}
inherits(TaprootInput, PubKeyHashInput);

/**
 * Get signatures for this input
 * @param {Transaction} transaction - the transaction to be signed
 * @param {PrivateKey} privateKey - the private key with which to sign the transaction
 * @param {number} index - the index of the input in the transaction input vector
 * @param {number} sigtype - the type of signature, defaults to Signature.SIGHASH_ALL
 * @param {Buffer} hashData - unused for this input type
 * @param {String} signingMethod - always schnorr for taproot
 * @param {Buffer} merkleRoot - the merkle root of the taproot tree
 * @return {Array<TransactionSignature>}
 */
TaprootInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype, hashData, signingMethod, merkleRoot) {
  $.checkState(this.output instanceof Output);
  sigtype = sigtype || Signature.SIGHASH_DEFAULT;
  
  const inputIndex = transaction.inputs.indexOf(this);
  const tweakedPk = privateKey.createTapTweak(merkleRoot).tweakedPrivKey;
  const signature = SighashSchnorr.sign(
    transaction,
    tweakedPk,
    sigtype,
    inputIndex,
    Signature.Version.TAPROOT,
    null
  );
  if (!signature) {
    return [];
  }
  const txSig = new TransactionSignature({
    publicKey: privateKey.publicKey,
    prevTxId: this.prevTxId,
    outputIndex: this.outputIndex,
    inputIndex,
    signature: Signature.fromSchnorr(signature),
    sigtype: sigtype
  });
  return this.isValidSignature(transaction, txSig) ? [txSig] : [];
};


TaprootInput.prototype.isValidSignature = function(transaction, signature) {
  $.checkState(transaction.inputs.indexOf(this) >= 0, 'Signature has no matching input');
  $.checkState(this.output instanceof Output, 'output is not instance of Output');
  
  if (!this.output.script.isTaproot()) {
    return false;
  }

  return SighashSchnorr.verify(
    transaction,
    signature.signature,
    this.output.script.chunks[1].buf,
    Signature.Version.TAPROOT,
    transaction.inputs.indexOf(this),
    null
  );
};

/**
 * Query whether the input is signed
 * @return {boolean}
 */
TaprootInput.prototype.isFullySigned = function() {
  return this.output.script.isTaproot() && this.hasWitnesses();
};

/**
 * Add the provided signature
 *
 * @param {Transaction} transaction
 * @param {Object} signature
 * @param {PublicKey} signature.publicKey
 * @param {Signature} signature.signature
 * @param {number} signature.sigtype
 * @return {TaprootInput} this, for chaining
 */
TaprootInput.prototype.addSignature = function(transaction, signature) {
  if (this.isValidSignature(transaction, signature)) {
    this.setWitnesses([
      signature.signature.toBuffer(),
    ]);
  }
  // else... do nothing?
  // When tx.sign(keys) is called, the given keys are used to try to sign all
  // inputs. Invalid sigs may be created, in which case we should not add them here.
  // The flow is kind of weird since this fn name is saying to add the signature.
  // Maybe the validation check should be upstream to keep the code lexically obedient?

  return this;
};


// TODO verify that this is the correct MAX size.
TaprootInput.SCRIPT_MAX_SIZE = 66; // numwitnesses (1) + sigsize (1 + 64)

TaprootInput.prototype._estimateSize = function() {
  let result = this._getBaseSize();
  result += 1; // script size
  const WITNESS_DISCOUNT = 4;
  const witnessSize = TaprootInput.SCRIPT_MAX_SIZE / WITNESS_DISCOUNT;
  result += witnessSize;
  return result;
};


module.exports = TaprootInput;


/***/ }),

/***/ 26303:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var Base58 = __webpack_require__(49559);
var buffer = __webpack_require__(48287);
var sha256sha256 = (__webpack_require__(44499).sha256sha256);

var Base58Check = function Base58Check(obj) {
  if (!(this instanceof Base58Check))
    return new Base58Check(obj);
  if (Buffer.isBuffer(obj)) {
    var buf = obj;
    this.fromBuffer(buf);
  } else if (typeof obj === 'string') {
    var str = obj;
    this.fromString(str);
  } else if (obj) {
    this.set(obj);
  }
};

Base58Check.prototype.set = function(obj) {
  this.buf = obj.buf || this.buf || undefined;
  return this;
};

Base58Check.validChecksum = function validChecksum(data, checksum) {
  if (_.isString(data)) {
    data = Buffer.from(Base58.decode(data));
  }
  if (_.isString(checksum)) {
    checksum =  Buffer.from(Base58.decode(checksum));
  }
  if (!checksum) {
    checksum = data.slice(-4);
    data = data.slice(0, -4);
  }
  return Base58Check.checksum(data).toString('hex') === checksum.toString('hex');
};

Base58Check.decode = function(s) {
  if (typeof s !== 'string')
    throw new Error('Input must be a string');

  var buf = Buffer.from(Base58.decode(s));

  if (buf.length < 4)
    throw new Error("Input string too short");

  var data = buf.slice(0, -4);
  var csum = buf.slice(-4);

  var hash = sha256sha256(data);
  var hash4 = hash.slice(0, 4);

  if (csum.toString('hex') !== hash4.toString('hex'))
    throw new Error("Checksum mismatch");

  return data;
};

Base58Check.checksum = function(buffer) {
  return sha256sha256(buffer).slice(0, 4);
};

Base58Check.encode = function(buf) {
  if (!Buffer.isBuffer(buf))
    throw new Error('Input must be a buffer');
  var checkedBuf = Buffer.alloc(buf.length + 4);
  var hash = Base58Check.checksum(buf);
  buf.copy(checkedBuf);
  hash.copy(checkedBuf, buf.length);
  return Base58.encode(checkedBuf);
};

Base58Check.prototype.fromBuffer = function(buf) {
  this.buf = buf;
  return this;
};

Base58Check.prototype.fromString = function(str) {
  var buf = Base58Check.decode(str);
  this.buf = buf;
  return this;
};

Base58Check.prototype.toBuffer = function() {
  return this.buf;
};

Base58Check.prototype.toString = function() {
  return Base58Check.encode(this.buf);
};

module.exports = Base58Check;


/***/ }),

/***/ 28322:
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ 29521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];
const crypto = __webpack_require__(91565);
const $ = __webpack_require__(6213);
const JS = __webpack_require__(44371);
const BN = __webpack_require__(62731);
const Point = __webpack_require__(49845);
const TaggedHash = __webpack_require__(56743);

const Schnorr = function Schnorr() {
  if (!(this instanceof Schnorr)) {
    return new Schnorr();
  }
  return this;
};

Schnorr.prototype.set = function() {};

/**
 * Create a schnorr signature
 * @param {PrivateKey|Buffer|BN} privateKey
 * @param {String|Buffer} message Hex string or buffer
 * @param {String|Buffer} aux Hex string or buffer
 * @returns {Buffer}
 * @link https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki#Default_Signing
 */
Schnorr.sign = function(privateKey, message, aux) {
  privateKey = Buffer.isBuffer(privateKey) ? privateKey : privateKey.toBuffer();
  if (privateKey.length !== 32) {
    throw new Error('Private key should be 32 bytes for schnorr signatures');
  }

  if (typeof message === 'string') {
    $.checkArgument(JS.isHexaString(message), 'Schnorr message string is not hex');
    message = Buffer.from(message, 'hex')
  }
  $.checkArgument($.isType(message, 'Buffer'), 'Schnorr message must be a hex string or buffer');

  if (!aux) {
    aux = crypto.randomBytes(32);
  }
  if (typeof aux === 'string') {
    $.checkArgument(JS.isHexaString(aux), 'Schnorr aux string is not hex');
    aux = Buffer.from(aux, 'hex')
  }
  $.checkArgument($.isType(aux, 'Buffer'), 'Schnorr aux must be a hex string or buffer');

  const G = Point.getG();
  const n = Point.getN();

  const dPrime = new BN(privateKey);
  if (dPrime.eqn(0) || dPrime.gte(n)) {
    throw new Error('Invalid private key for schnorr signing');
  }
  const P = G.mul(dPrime);
  const Pbuf = Buffer.from(P.encodeCompressed().slice(1)); // slice(1) removes the encoding prefix byte
  const d = P.y.isEven() ? dPrime : n.sub(dPrime);
  const t = d.xor(new BN(new TaggedHash('BIP0340/aux', aux).finalize()));
  const rand = new TaggedHash('BIP0340/nonce', Buffer.concat([t.toBuffer(), Pbuf, message])).finalize();
  const kPrime = new BN(rand).mod(n);
  if (kPrime.eqn(0)) {
    throw new Error('Error creating schnorr signature');
  }
  const R = G.mul(kPrime);
  const Rbuf = Buffer.from(R.encodeCompressed().slice(1)); // slice(1) removes the encoding prefix byte
  const k = R.y.isEven() ? kPrime : n.sub(kPrime);
  const e = new BN(new TaggedHash('BIP0340/challenge', Buffer.concat([Rbuf, Pbuf, message])).finalize()).mod(n);
  const sig = Buffer.concat([Rbuf, k.add(e.mul(d)).mod(n).toBuffer({ size: 32 })]);

  if (!Schnorr.verify(Pbuf, message, sig)) {
    throw new Error('Error creating schnorr signature. Verification failed');
  }
  return sig;
};


/**
 * Verify a schnorr signature
 * @param {PublicKey|Buffer} publicKey
 * @param {String|Buffer} message Hex string or buffer
 * @param {String|Signature|Buffer} signature Hex string, Signature instance, or buffer
 * @returns {Boolean}
 * @link https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki#Verification
 */
Schnorr.verify = function(publicKey, message, signature) {
  if ($.isType(publicKey, 'PublicKey')) {
    publicKey = publicKey.point.x.toBuffer();
  }
  if (publicKey.length !== 32) {
    throw new Error('Public key should be 32 bytes for schnorr signatures');
  }

  if (typeof message === 'string') {
    $.checkArgument(JS.isHexaString(message), 'Schnorr message string is not hex');
    message = Buffer.from(message, 'hex');
  }
  if (message.length !== 32) {
    throw new Error('Message should be a 32 byte buffer');
  }

  if (typeof signature === 'string') {
    $.checkArgument(JS.isHexaString(signature), 'Schnorr signature string is not hex');
    signature = Buffer.from(signature, 'hex');
  }
  if (typeof signature.toBuffer === 'function') {
    signature = signature.toBuffer();
    if (signature.length === 65) {
      signature = signature.slice(0, 64); // remove the sighashType byte
    }
  }
  if (signature.length !== 64) {
    throw new Error('Signature should be a 64 byte buffer. Got ' + signature.length + ' bytes');
  }

  try {
    const p = Point.getP();
    const n = Point.getN();

    const P = Point.fromX(false, publicKey).liftX();
    const r = new BN(signature.slice(0, 32));
    const s = new BN(signature.slice(32, 64));
    if (r.gte(p) || s.gte(n)) {
      return false;
    }
    const e = getE(r, P, message);
    const G = Point.getG();
    const R = G.mul(s).add(P.mul(e).neg());
    if (R.inf || !R.y.isEven() || !R.x.eq(r)) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};

/* Utility function used in Verify() */
const getE = function(r, P, message) {
  const n = Point.getN();
  const hash = new TaggedHash('BIP0340/challenge', Buffer.concat([r.toBuffer({ size: 32 }), P.x.toBuffer({ size: 32 }), message])).finalize();
  return new BN(hash).mod(n);
};

module.exports = Schnorr;


/***/ }),

/***/ 33158:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var BufferUtil = __webpack_require__(56142);
var JSUtil = __webpack_require__(44371);
var networks = [];
var networkMaps = {};

/**
 * A network is merely a map containing values that correspond to version
 * numbers for each bitcoin network. Currently only supporting "livenet"
 * (a.k.a. "mainnet") and "testnet".
 * @constructor
 */
function Network() {}

Network.prototype.toString = function toString() {
  return this.name;
};

/**
 * @function
 * @member Networks#get
 * Retrieves the network associated with a magic number or string.
 * @param {string|number|Network} arg
 * @param {string|Array} keys - if set, only check if the magic number associated with this name matches
 * @return Network
 */
function get(arg, keys) {
  if (~networks.indexOf(arg)) {
    return arg;
  }
  if (keys) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    for (const index in networks) {
      if (keys.some(key => networks[index][key] === arg)) {
        return networks[index];
      }
    }
    return undefined;
  }
  if (networkMaps[arg] && networkMaps[arg].length >= 1) {
    return networkMaps[arg][0];
  } else {
    return networkMaps[arg];
  }
}

/**
 * @function
 * @member Networks#is
 * Returns true if the string is the network name or alias
 * @param {string} str - A string to check
 * @return boolean
 */
function is(str) {
  return this.name == str || this.alias == str;
}

/**
 * @function
 * @member Networks#add
 * Will add a custom Network
 * @param {Object} data
 * @param {string} data.name - The name of the network
 * @param {string} data.alias - The aliased name of the network
 * @param {Number} data.pubkeyhash - The publickey hash prefix
 * @param {Number} data.privatekey - The privatekey prefix
 * @param {Number} data.scripthash - The scripthash prefix
 * @param {string} data.bech32prefix - The native segwit prefix
 * @param {Number} data.xpubkey - The extended public key magic
 * @param {Number} data.xprivkey - The extended private key magic
 * @param {Array}  data.variants - An array of variants
 * @param {string} data.variants.name - The name of the variant
 * @param {Number} data.variants.networkMagic - The network magic number
 * @param {Number} data.variants.port - The network port
 * @param {Array}  data.variants.dnsSeeds - An array of dns seeds
 * @return Network
 */
function addNetwork(data) {
  var network = new Network();

  JSUtil.defineImmutable(network, {
    name: data.name,
    alias: data.alias,
    is: data.is,
    pubkeyhash: data.pubkeyhash,
    privatekey: data.privatekey,
    scripthash: data.scripthash,
    bech32prefix: data.bech32prefix,
    xpubkey: data.xpubkey,
    xprivkey: data.xprivkey
  });

  if (data.networkMagic) {
    JSUtil.defineImmutable(network, {
      networkMagic: BufferUtil.integerAsBuffer(data.networkMagic)
    });
  }

  if (data.port) {
    JSUtil.defineImmutable(network, {
      port: data.port
    });
  }

  if (data.dnsSeeds) {
    JSUtil.defineImmutable(network, {
      dnsSeeds: data.dnsSeeds
    });
  }

  for (const value of Object.values(network)) {
    if (value != null && typeof value !== 'object') {
      if (!networkMaps[value]) {
        networkMaps[value] = [];
      }
      networkMaps[value].push(network);
    }
  };

  networks.push(network);

  for (const variant of data.variants || []) {
    addNetwork({
      ...data,
      variants: undefined,
      ...variant,
    });
  }

  return network;
}

/**
 * @function
 * @member Networks#remove
 * Will remove a custom network
 * @param {Network} network
 */
function removeNetwork(network) {
  if (typeof network !== 'object') {
    network = get(network);
  }
  for (var i = 0; i < networks.length; i++) {
    if (networks[i] === network) {
      networks.splice(i, 1);
    }
  }
  for (var key in networkMaps) {
    if (networkMaps[key].length) {
      const index = networkMaps[key].indexOf(network);
      if (index >= 0) {
        networkMaps[key].splice(index, 1);
      }
      if (networkMaps[key].length === 0) {
        delete networkMaps[key];
      }
    } else if (networkMaps[key] === network) {
      delete networkMaps[key];
    }
  }
}

addNetwork({
  name: 'livenet',
  alias: 'mainnet',
  is,
  pubkeyhash: 0x00,
  privatekey: 0x80,
  scripthash: 0x05,
  bech32prefix: 'bc',
  xpubkey: 0x0488b21e,
  xprivkey: 0x0488ade4,
  networkMagic: 0xf9beb4d9,
  port: 8333,
  dnsSeeds: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'dnsseed.bitcoin.dashjr.org',
    'seed.bitcoinstats.com',
    'seed.bitnodes.io',
    'bitseed.xf2.org'
  ]
});

/**
 * @instance
 * @member Networks#livenet
 */
var livenet = get('livenet');

addNetwork({
  name: 'testnet',
  alias: 'testnet',
  is,
  pubkeyhash: 0x6f,
  privatekey: 0xef,
  scripthash: 0xc4,
  bech32prefix: 'tb',
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  variants: [{
    name: 'testnet3',
    networkMagic: 0x0b110907,
    port: 18333,
    dnsSeeds: [
      'testnet-seed.bitcoin.petertodd.org',
      'testnet-seed.bluematt.me',
      'testnet-seed.alexykot.me',
      'testnet-seed.bitcoin.schildbach.de'
    ]
  }, {
    name: 'signet',
    networkMagic: 0x0a03cf40,
    port: 38333,
    dnsSeeds: [
      '178.128.221.177',
      '103.16.128.63',
      '153.126.143.201',
      '192.241.163.142'
    ]
  }, {
    name: 'testnet4',
    networkMagic: 0x1c163f28,
    port: 48333,
    dnsSeeds: [
      '18.189.156.102',
      '18.201.207.55',
      '51.158.248.8',
      '57.128.176.163',
      '82.67.102.15',
      '88.99.248.50',
      '95.217.73.162',
      '103.99.171.212',
      '103.165.192.210',
    ]
  }]
});

/**
 * @instance
 * @member Networks#testnet
 */
var testnet = get('testnet');
var testnet3 = get('testnet3');
var signet = get('signet');

addNetwork({
  name: 'regtest',
  alias: 'dev',
  is,
  pubkeyhash: 0x6f,
  privatekey: 0xef,
  scripthash: 0xc4,
  bech32prefix: 'bcrt',
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  networkMagic: 0xfabfb5da,
  port: 18444,
  dnsSeeds: []
});

/**
 * @instance
 * @member Networks#regtest
 */
var regtest = get('regtest');

/**
 * @function
 * @deprecated
 * @member Networks#enableRegtest
 * Will enable regtest features for testnet
 */
function enableRegtest() {
  testnet.regtestEnabled = true;
}

/**
 * @function
 * @deprecated
 * @member Networks#disableRegtest
 * Will disable regtest features for testnet
 */
function disableRegtest() {
  testnet.regtestEnabled = false;
}

/**
 * @namespace Networks
 */
module.exports = {
  add: addNetwork,
  remove: removeNetwork,
  defaultNetwork: livenet,
  livenet: livenet,
  mainnet: livenet,
  testnet: testnet,
  testnet3: testnet3,
  signet: signet,
  regtest: regtest,
  get: get,
  enableRegtest: enableRegtest,
  disableRegtest: disableRegtest
};


/***/ }),

/***/ 36135:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var BN = __webpack_require__(62731);
var BufferUtil = __webpack_require__(56142);
var BufferReader = __webpack_require__(69118);
var BufferWriter = __webpack_require__(54878);
var Hash = __webpack_require__(44499);
var JSUtil = __webpack_require__(44371);
var $ = __webpack_require__(6213);

var GENESIS_BITS = 0x1d00ffff;

/**
 * Instantiate a BlockHeader from a Buffer, JSON object, or Object with
 * the properties of the BlockHeader
 *
 * @param {*} - A Buffer, JSON string, or Object
 * @returns {BlockHeader} - An instance of block header
 * @constructor
 */
var BlockHeader = function BlockHeader(arg) {
  if (!(this instanceof BlockHeader)) {
    return new BlockHeader(arg);
  }
  var info = BlockHeader._from(arg);
  this.version = info.version;
  this.prevHash = info.prevHash;
  this.merkleRoot = info.merkleRoot;
  this.time = info.time;
  this.timestamp = info.time;
  this.bits = info.bits;
  this.nonce = info.nonce;

  if (info.hash) {
    $.checkState(
      this.hash === info.hash,
      'Argument object hash property does not match block hash.'
    );
  }

  return this;
};

/**
 * @param {*} - A Buffer, JSON string or Object
 * @returns {Object} - An object representing block header data
 * @throws {TypeError} - If the argument was not recognized
 * @private
 */
BlockHeader._from = function _from(arg) {
  var info = {};
  if (BufferUtil.isBuffer(arg)) {
    info = BlockHeader._fromBufferReader(BufferReader(arg));
  } else if (_.isObject(arg)) {
    info = BlockHeader._fromObject(arg);
  } else {
    throw new TypeError('Unrecognized argument for BlockHeader');
  }
  return info;
};

/**
 * @param {Object} - A JSON string
 * @returns {Object} - An object representing block header data
 * @private
 */
BlockHeader._fromObject = function _fromObject(data) {
  $.checkArgument(data, 'data is required');
  var prevHash = data.prevHash;
  var merkleRoot = data.merkleRoot;
  if (_.isString(data.prevHash)) {
    prevHash = BufferUtil.reverse(Buffer.from(data.prevHash, 'hex'));
  }
  if (_.isString(data.merkleRoot)) {
    merkleRoot = BufferUtil.reverse(Buffer.from(data.merkleRoot, 'hex'));
  }
  var info = {
    hash: data.hash,
    version: data.version,
    prevHash: prevHash,
    merkleRoot: merkleRoot,
    time: data.time,
    timestamp: data.time,
    bits: data.bits,
    nonce: data.nonce
  };
  return info;
};

/**
 * @param {Object} - A plain JavaScript object
 * @returns {BlockHeader} - An instance of block header
 */
BlockHeader.fromObject = function fromObject(obj) {
  var info = BlockHeader._fromObject(obj);
  return new BlockHeader(info);
};

/**
 * @param {Binary} - Raw block binary data or buffer
 * @returns {BlockHeader} - An instance of block header
 */
BlockHeader.fromRawBlock = function fromRawBlock(data) {
  if (!BufferUtil.isBuffer(data)) {
    data = Buffer.from(data, 'binary');
  }
  var br = BufferReader(data);
  br.pos = BlockHeader.Constants.START_OF_HEADER;
  var info = BlockHeader._fromBufferReader(br);
  return new BlockHeader(info);
};

/**
 * @param {Buffer} - A buffer of the block header
 * @returns {BlockHeader} - An instance of block header
 */
BlockHeader.fromBuffer = function fromBuffer(buf) {
  var info = BlockHeader._fromBufferReader(BufferReader(buf));
  return new BlockHeader(info);
};

/**
 * @param {string} - A hex encoded buffer of the block header
 * @returns {BlockHeader} - An instance of block header
 */
BlockHeader.fromString = function fromString(str) {
  var buf = Buffer.from(str, 'hex');
  return BlockHeader.fromBuffer(buf);
};

/**
 * @param {BufferReader} - A BufferReader of the block header
 * @returns {Object} - An object representing block header data
 * @private
 */
BlockHeader._fromBufferReader = function _fromBufferReader(br) {
  var info = {};
  info.version = br.readInt32LE();
  info.prevHash = br.read(32);
  info.merkleRoot = br.read(32);
  info.time = br.readUInt32LE();
  info.bits = br.readUInt32LE();
  info.nonce = br.readUInt32LE();
  return info;
};

/**
 * @param {BufferReader} - A BufferReader of the block header
 * @returns {BlockHeader} - An instance of block header
 */
BlockHeader.fromBufferReader = function fromBufferReader(br) {
  var info = BlockHeader._fromBufferReader(br);
  return new BlockHeader(info);
};

/**
 * @returns {Object} - A plain object of the BlockHeader
 */
BlockHeader.prototype.toObject = BlockHeader.prototype.toJSON = function toObject() {
  return {
    hash: this.hash,
    version: this.version,
    prevHash: BufferUtil.reverse(this.prevHash).toString('hex'),
    merkleRoot: BufferUtil.reverse(this.merkleRoot).toString('hex'),
    time: this.time,
    bits: this.bits,
    nonce: this.nonce
  };
};

/**
 * @returns {Buffer} - A Buffer of the BlockHeader
 */
BlockHeader.prototype.toBuffer = function toBuffer() {
  return this.toBufferWriter().concat();
};

/**
 * @returns {string} - A hex encoded string of the BlockHeader
 */
BlockHeader.prototype.toString = function toString() {
  return this.toBuffer().toString('hex');
};

/**
 * @param {BufferWriter} - An existing instance BufferWriter
 * @returns {BufferWriter} - An instance of BufferWriter representation of the BlockHeader
 */
BlockHeader.prototype.toBufferWriter = function toBufferWriter(bw) {
  if (!bw) {
    bw = new BufferWriter();
  }
  bw.writeInt32LE(this.version);
  bw.write(this.prevHash);
  bw.write(this.merkleRoot);
  bw.writeUInt32LE(this.time);
  bw.writeUInt32LE(this.bits);
  bw.writeUInt32LE(this.nonce);
  return bw;
};

/**
 * Returns the target difficulty for this block
 * @param {Number} bits
 * @returns {BN} An instance of BN with the decoded difficulty bits
 */
BlockHeader.prototype.getTargetDifficulty = function getTargetDifficulty(bits) {
  bits = bits || this.bits;

  var target = new BN(bits & 0xffffff);
  var mov = 8 * ((bits >>> 24) - 3);
  while (mov-- > 0) {
    target = target.mul(new BN(2));
  }
  return target;
};

/**
 * @link https://en.bitcoin.it/wiki/Difficulty
 * @return {Number}
 */
BlockHeader.prototype.getDifficulty = function getDifficulty() {
  var difficulty1TargetBN = this.getTargetDifficulty(GENESIS_BITS).mul(new BN(Math.pow(10, 8)));
  var currentTargetBN = this.getTargetDifficulty();

  var difficultyString = difficulty1TargetBN.div(currentTargetBN).toString(10);
  var decimalPos = difficultyString.length - 8;
  difficultyString = difficultyString.slice(0, decimalPos) + '.' + difficultyString.slice(decimalPos);

  return parseFloat(difficultyString);
};

/**
 * @returns {Buffer} - The little endian hash buffer of the header
 */
BlockHeader.prototype._getHash = function hash() {
  var buf = this.toBuffer();
  return Hash.sha256sha256(buf);
};

var idProperty = {
  configurable: false,
  enumerable: true,
  /**
   * @returns {string} - The big endian hash buffer of the header
   */
  get: function() {
    if (!this._id) {
      this._id = BufferReader(this._getHash()).readReverse().toString('hex');
    }
    return this._id;
  },
  set: _.noop
};
Object.defineProperty(BlockHeader.prototype, 'id', idProperty);
Object.defineProperty(BlockHeader.prototype, 'hash', idProperty);

/**
 * @returns {Boolean} - If timestamp is not too far in the future
 */
BlockHeader.prototype.validTimestamp = function validTimestamp() {
  var currentTime = Math.round(new Date().getTime() / 1000);
  if (this.time > currentTime + BlockHeader.Constants.MAX_TIME_OFFSET) {
    return false;
  }
  return true;
};

/**
 * @returns {Boolean} - If the proof-of-work hash satisfies the target difficulty
 */
BlockHeader.prototype.validProofOfWork = function validProofOfWork() {
  var pow = new BN(this.id, 'hex');
  var target = this.getTargetDifficulty();

  if (pow.cmp(target) > 0) {
    return false;
  }
  return true;
};

/**
 * @returns {string} - A string formatted for the console
 */
BlockHeader.prototype.inspect = function inspect() {
  return '<BlockHeader ' + this.id + '>';
};

BlockHeader.Constants = {
  START_OF_HEADER: 8, // Start buffer position in raw block data
  MAX_TIME_OFFSET: 2 * 60 * 60, // The max a timestamp can be in the future
  LARGEST_HASH: new BN('10000000000000000000000000000000000000000000000000000000000000000', 'hex')
};

module.exports = BlockHeader;


/***/ }),

/***/ 38072:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


/* jshint maxparams:5 */

var _ = __webpack_require__(2543);
var inherits = __webpack_require__(28322);
var Input = __webpack_require__(68237);
var Output = __webpack_require__(42109);
var $ = __webpack_require__(6213);

var Address = __webpack_require__(87089);
var Script = __webpack_require__(91093);
var Signature = __webpack_require__(23825);
var Sighash = __webpack_require__(99039);
var SighashWitness = __webpack_require__(39368);
var BufferWriter = __webpack_require__(54878);
var BufferUtil = __webpack_require__(56142);
var TransactionSignature = __webpack_require__(3544);

/**
 * @constructor
 */
function MultiSigScriptHashInput(input, pubkeys, threshold, signatures, opts) {
  /* jshint maxstatements:20 */
  opts = opts || {};
  Input.apply(this, arguments);
  pubkeys = pubkeys || input.publicKeys;
  threshold = threshold || input.threshold;
  signatures = signatures || input.signatures;
  if (opts.noSorting) {
    this.publicKeys = pubkeys;
  } else  {
    this.publicKeys = _.sortBy(pubkeys, function(publicKey) { return publicKey.toString('hex'); });
  }
  this.redeemScript = Script.buildMultisigOut(this.publicKeys, threshold, opts);
  var nested = Script.buildWitnessMultisigOutFromScript(this.redeemScript);
  if (nested.equals(this.output.script)) {
    this.nestedWitness = false;
    this.type = Address.PayToWitnessScriptHash;
  } else if (Script.buildScriptHashOut(nested).equals(this.output.script)) {
    this.nestedWitness = true;
    this.type = Address.PayToScriptHash;
  } else if (Script.buildScriptHashOut(this.redeemScript).equals(this.output.script)) {
    this.nestedWitness = false;
    this.type = Address.PayToScriptHash;
  } else {
    throw new Error('Provided public keys don\'t hash to the provided output');
  }

  if (this.nestedWitness) {
    var scriptSig = new Script();
    scriptSig.add(nested.toBuffer());
    this.setScript(scriptSig);
  }

  this.publicKeyIndex = {};
  for (let index = 0; index < this.publicKeys.length; index++) {
    const publicKey = this.publicKeys[index];
    this.publicKeyIndex[publicKey.toString()] = index;
  }
  this.threshold = threshold;
  // Empty array of signatures
  this.signatures = signatures ? this._deserializeSignatures(signatures) : new Array(this.publicKeys.length);
}
inherits(MultiSigScriptHashInput, Input);

MultiSigScriptHashInput.prototype.toObject = function() {
  var obj = Input.prototype.toObject.apply(this, arguments);
  obj.threshold = this.threshold;
  obj.publicKeys = this.publicKeys.map(function(publicKey) { return publicKey.toString(); });
  obj.signatures = this._serializeSignatures();
  return obj;
};

MultiSigScriptHashInput.prototype._deserializeSignatures = function(signatures) {
  return signatures.map(function(signature) {
    if (!signature) {
      return undefined;
    }
    return new TransactionSignature(signature);
  });
};

MultiSigScriptHashInput.prototype._serializeSignatures = function() {
  return this.signatures.map(function(signature) {
    if (!signature) {
      return undefined;
    }
    return signature.toObject();
  });
};

MultiSigScriptHashInput.prototype.getScriptCode = function() {
  var writer = new BufferWriter();
  if (!this.redeemScript.hasCodeseparators()) {
    var redeemScriptBuffer = this.redeemScript.toBuffer();
    writer.writeVarintNum(redeemScriptBuffer.length);
    writer.write(redeemScriptBuffer);
  } else {
    throw new Error('@TODO');
  }
  return writer.toBuffer();
};

MultiSigScriptHashInput.prototype.getSighash = function(transaction, privateKey, index, sigtype) {
  var hash;
  if (this.nestedWitness || this.type === Address.PayToWitnessScriptHash) {
    var scriptCode = this.getScriptCode();
    var satoshisBuffer = this.getSatoshisBuffer();
    hash = SighashWitness.sighash(transaction, sigtype, index, scriptCode, satoshisBuffer);
  } else  {
    hash = Sighash.sighash(transaction, sigtype, index, this.redeemScript);
  }
  return hash;
};

/**
 * Get signatures for this input
 * @param {Transaction} transaction - the transaction to be signed
 * @param {PrivateKey} privateKey - the private key with which to sign the transaction
 * @param {number} index - the index of the input in the transaction input vector
 * @param {number} sigtype - the type of signature, defaults to Signature.SIGHASH_ALL
 * @param {Buffer} hashData - unused for this input type
 * @param {String} signingMethod DEPRECATED - method used to sign - 'ecdsa' or 'schnorr'
 * @param {Buffer} merkleRoot - unused for this input type
 * @return {Array<TransactionSignature>}
 */
MultiSigScriptHashInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype, hashData, signingMethod, merkleRoot) {
  $.checkState(this.output instanceof Output);
  sigtype = sigtype || Signature.SIGHASH_ALL;
  signingMethod = signingMethod || 'ecdsa'; // unused. Keeping for consistency with other libs

  const results = [];
  for (const publicKey of this.publicKeys) {
    if (publicKey.toString() === privateKey.publicKey.toString()) {
      var signature;
      if (this.nestedWitness || this.type === Address.PayToWitnessScriptHash) {
        var scriptCode = this.getScriptCode();
        var satoshisBuffer = this.getSatoshisBuffer();
        signature = SighashWitness.sign(transaction, privateKey, sigtype, index, scriptCode, satoshisBuffer);
      } else  {
        signature = Sighash.sign(transaction, privateKey, sigtype, index, this.redeemScript);
      }
      results.push(new TransactionSignature({
        publicKey: privateKey.publicKey,
        prevTxId: this.prevTxId,
        outputIndex: this.outputIndex,
        inputIndex: index,
        signature: signature,
        sigtype: sigtype
      }));
    }
  }
  return results;
};

MultiSigScriptHashInput.prototype.addSignature = function(transaction, signature, signingMethod) {
  $.checkState(!this.isFullySigned(), 'All needed signatures have already been added');
  $.checkArgument(this.publicKeyIndex[signature.publicKey.toString()] != null,
                  'Signature has no matching public key');
  $.checkState(this.isValidSignature(transaction, signature, signingMethod), 'Invalid Signature!');
  this.signatures[this.publicKeyIndex[signature.publicKey.toString()]] = signature;
  this._updateScript();
  return this;
};

MultiSigScriptHashInput.prototype._updateScript = function() {
  if (this.nestedWitness || this.type === Address.PayToWitnessScriptHash) {
    var stack = [
      Buffer.alloc(0),
    ];
    var signatures = this._createSignatures();
    for (var i = 0; i < signatures.length; i++) {
      stack.push(signatures[i]);
    }
    stack.push(this.redeemScript.toBuffer());
    this.setWitnesses(stack);
  } else {
    var scriptSig = Script.buildP2SHMultisigIn(
      this.publicKeys,
      this.threshold,
      this._createSignatures(),
      { cachedMultisig: this.redeemScript }
    );
    this.setScript(scriptSig);
  }
  return this;
};

MultiSigScriptHashInput.prototype._createSignatures = function() {
  return this.signatures
    .filter(function(signature) { return signature != null; })
    .map(function(signature) {
      return BufferUtil.concat([
        signature.signature.toDER(),
        BufferUtil.integerAsSingleByteBuffer(signature.sigtype)
      ]);
    });
};

MultiSigScriptHashInput.prototype.clearSignatures = function() {
  this.signatures = new Array(this.publicKeys.length);
  this._updateScript();
};

MultiSigScriptHashInput.prototype.isFullySigned = function() {
  return this.countSignatures() === this.threshold;
};

MultiSigScriptHashInput.prototype.countMissingSignatures = function() {
  return this.threshold - this.countSignatures();
};

MultiSigScriptHashInput.prototype.countSignatures = function() {
  return this.signatures.reduce(function(sum, signature) {
    return sum + (!!signature);
  }, 0);
};

MultiSigScriptHashInput.prototype.publicKeysWithoutSignature = function() {
  return this.publicKeys.filter((publicKey) => {
    return !(this.signatures[this.publicKeyIndex[publicKey.toString()]]);
  });
};

MultiSigScriptHashInput.prototype.isValidSignature = function(transaction, signature, signingMethod) {
  signingMethod = signingMethod || 'ecdsa'; // unused. Keeping for consistency with other libs
  if (this.nestedWitness || this.type === Address.PayToWitnessScriptHash) {
    signature.signature.nhashtype = signature.sigtype;
    var scriptCode = this.getScriptCode();
    var satoshisBuffer = this.getSatoshisBuffer();
    return SighashWitness.verify(
      transaction,
      signature.signature,
      signature.publicKey,
      signature.inputIndex,
      scriptCode,
      satoshisBuffer
    );
  } else {
    // FIXME: Refactor signature so this is not necessary
    signature.signature.nhashtype = signature.sigtype;
    return Sighash.verify(
      transaction,
      signature.signature,
      signature.publicKey,
      signature.inputIndex,
      this.redeemScript
    );
  }
};

MultiSigScriptHashInput.MAX_OPCODES_SIZE = 8; // serialized size (<=3) + 0 .. OP_PUSHDATAx N .. M OP_CHECKMULTISIG
MultiSigScriptHashInput.MAX_SIGNATURE_SIZE = 74; // size (1) + DER (<=72) + sighash (1)
MultiSigScriptHashInput.MAX_PUBKEY_SIZE = 34; // size (1) + DER (<=33)
MultiSigScriptHashInput.REDEEM_SCRIPT_SIZE = 34; // OP_0 (1) + scriptHash (1 + 32)

MultiSigScriptHashInput.prototype._estimateSize = function() {
  let result = this._getBaseSize();
  const WITNESS_DISCOUNT = 4;
  const witnessSize = MultiSigScriptHashInput.MAX_OPCODES_SIZE +
    this.threshold * MultiSigScriptHashInput.MAX_SIGNATURE_SIZE +
    this.publicKeys.length * MultiSigScriptHashInput.MAX_PUBKEY_SIZE;
  if (this.type === Address.PayToWitnessScriptHash) {
    result += witnessSize / WITNESS_DISCOUNT;
  } else if (this.nestedWitness) {
    result += witnessSize / WITNESS_DISCOUNT + MultiSigScriptHashInput.REDEEM_SCRIPT_SIZE;
  } else {
    result += witnessSize;
  }
  return result;
};

module.exports = MultiSigScriptHashInput;


/***/ }),

/***/ 39368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


/* jshint maxparams:5 */

var Signature = __webpack_require__(23825);
var Script = __webpack_require__(91093);
var BufferReader = __webpack_require__(69118);
var BufferWriter = __webpack_require__(54878);
var Hash = __webpack_require__(44499);
var ECDSA = __webpack_require__(65115);
var $ = __webpack_require__(6213);
var _ = __webpack_require__(2543);

/**
 * Returns a buffer of length 32 bytes with the hash that needs to be signed
 * for witness programs as defined by:
 * https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki
 *
 * @name Signing.sighash
 * @param {Transaction} transaction the transaction to sign
 * @param {number} sighashType the type of the hash
 * @param {number} inputNumber the input index for the signature
 * @param {Buffer} scriptCode
 * @param {Buffer} satoshisBuffer
 */
var sighash = function sighash(transaction, sighashType, inputNumber, scriptCode, satoshisBuffer) {
  /* jshint maxstatements: 50 */

  var hashPrevouts = Buffer.alloc(32);
  var hashSequence = Buffer.alloc(32);
  var hashOutputs = Buffer.alloc(32);

  if (!(sighashType & Signature.SIGHASH_ANYONECANPAY)) {
    var buffers = [];
    for (var n = 0; n < transaction.inputs.length; n++) {
      var input = transaction.inputs[n];
      var prevTxIdBuffer = new BufferReader(input.prevTxId).readReverse();
      buffers.push(prevTxIdBuffer);
      var outputIndexBuffer = Buffer.alloc(4);
      outputIndexBuffer.writeUInt32LE(input.outputIndex, 0);
      buffers.push(outputIndexBuffer);
    }
    hashPrevouts = Hash.sha256sha256(Buffer.concat(buffers));
  }

  if (!(sighashType & Signature.SIGHASH_ANYONECANPAY) &&
      (sighashType & 0x1f) !== Signature.SIGHASH_SINGLE && (sighashType & 0x1f) !== Signature.SIGHASH_NONE) {

    var sequenceBuffers = [];
    for (var m = 0; m < transaction.inputs.length; m++) {
      var sequenceBuffer = Buffer.alloc(4);
      sequenceBuffer.writeUInt32LE(transaction.inputs[m].sequenceNumber, 0);
      sequenceBuffers.push(sequenceBuffer);
    }
    hashSequence = Hash.sha256sha256(Buffer.concat(sequenceBuffers));
  }

  var outputWriter = new BufferWriter();
  if ((sighashType & 0x1f) !== Signature.SIGHASH_SINGLE && (sighashType & 0x1f) !== Signature.SIGHASH_NONE) {
    for (var p = 0; p < transaction.outputs.length; p++) {
      transaction.outputs[p].toBufferWriter(outputWriter);
    }
    hashOutputs = Hash.sha256sha256(outputWriter.toBuffer());
  } else if ((sighashType & 0x1f) === Signature.SIGHASH_SINGLE && inputNumber < transaction.outputs.length) {
    transaction.outputs[inputNumber].toBufferWriter(outputWriter);
    hashOutputs = Hash.sha256sha256(outputWriter.toBuffer());
  }

  // Version
  var writer = new BufferWriter();
  writer.writeUInt32LE(transaction.version);

  // Input prevouts/nSequence (none/all, depending on flags)
  writer.write(hashPrevouts);
  writer.write(hashSequence);

  // The input being signed (replacing the scriptSig with scriptCode + amount)
  // The prevout may already be contained in hashPrevout, and the nSequence
  // may already be contain in hashSequence.
  var outpointId = new BufferReader(transaction.inputs[inputNumber].prevTxId).readReverse();
  writer.write(outpointId);
  writer.writeUInt32LE(transaction.inputs[inputNumber].outputIndex);

  writer.write(scriptCode);

  writer.write(satoshisBuffer);

  writer.writeUInt32LE(transaction.inputs[inputNumber].sequenceNumber);

  // Outputs (none/one/all, depending on flags)
  writer.write(hashOutputs);

  // Locktime
  writer.writeUInt32LE(transaction.nLockTime);

  // Sighash type
  writer.writeInt32LE(sighashType);

  return Hash.sha256sha256(writer.toBuffer());

};

/**
 * Create a signature
 *
 * @name Signing.sign
 * @param {Transaction} transaction
 * @param {PrivateKey} privateKey
 * @param {number} sighash
 * @param {number} inputIndex
 * @param {Script} subscript
 * @return {Signature}
 */
function sign(transaction, privateKey, sighashType, inputIndex, scriptCode, satoshisBuffer) {
  let hashbuf = sighash(transaction, sighashType, inputIndex, scriptCode, satoshisBuffer);
  return ECDSA.sign(hashbuf, privateKey).set({ nhashtype: sighashType });
}

/**
 * Verify a signature
 *
 * @name Signing.verify
 * @param {Transaction} transaction
 * @param {Signature} signature
 * @param {PublicKey} publicKey
 * @param {number} inputIndex
 * @param {Script} subscript
 * @return {boolean}
 */
function verify(transaction, signature, publicKey, inputIndex, scriptCode, satoshisBuffer) {
  $.checkArgument(!_.isUndefined(transaction), "Transaction Undefined");
  $.checkArgument(!_.isUndefined(signature) && !_.isUndefined(signature.nhashtype), "Signature Undefined");

  let hashbuf = sighash(transaction, signature.nhashtype, inputIndex, scriptCode, satoshisBuffer);
  return ECDSA.verify(hashbuf, signature, publicKey);
}

/**
 * @namespace Signing
 */
module.exports = {
  sighash: sighash,
  sign: sign,
  verify: verify
};


/***/ }),

/***/ 42109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var BN = __webpack_require__(62731);
var bufferUtil = __webpack_require__(56142);
var JSUtil = __webpack_require__(44371);
var BufferWriter = __webpack_require__(54878);
var Script = __webpack_require__(91093);
var $ = __webpack_require__(6213);
var errors = __webpack_require__(66617);
const Interpreter = __webpack_require__(69807);
const TaggedHash = __webpack_require__(56743);

var MAX_SAFE_INTEGER = 0x1fffffffffffff;

function Output(args) {
  if (!(this instanceof Output)) {
    return new Output(args);
  }
  if (_.isObject(args)) {
    this.satoshis = args.satoshis;
    if (bufferUtil.isBuffer(args.script)) {
      this.setScriptFromBuffer(args.script);
    } else {
      var script;
      if (_.isString(args.script) && JSUtil.isHexa(args.script)) {
        script = Buffer.from(args.script, 'hex');
      } else {
        script = args.script;
      }
      this.setScript(script);
    }

    if (args.type === 'taproot') {
      this.branch = [];
      Object.defineProperty(this, 'isValid', {
        configurable: false,
        enumerable: false,
        get: function() {
          this._isValid || this._branch.length === 0;
        },
        set: function(isValid) {
          this._isValid = isValid;
        }
      });
      Object.defineProperty(this, 'isComplete', {
        configurable: false,
        enumerable: false,
        get: function() {
          return this.isValid && (this._branch.length === 0 || (this._branch.length === 1 && !!this._branch[0]));
        }
      });
    }
  } else {
    throw new TypeError('Unrecognized argument for Output');
  }
}

Object.defineProperty(Output.prototype, 'script', {
  configurable: false,
  enumerable: true,
  get: function() {
    if (this._script) {
      return this._script;
    } else {
      this.setScriptFromBuffer(this._scriptBuffer);
      return this._script;
    }

  }
});

Object.defineProperty(Output.prototype, 'satoshis', {
  configurable: false,
  enumerable: true,
  get: function() {
    return this._satoshis;
  },
  set: function(num) {
    if (num instanceof BN) {
      this._satoshisBN = num;
      this._satoshis = num.toNumber();
    } else if (_.isString(num)) {
      this._satoshis = parseInt(num);
      this._satoshisBN = BN.fromNumber(this._satoshis);
    } else {
      $.checkArgument(
        JSUtil.isNaturalNumber(num),
        'Output satoshis is not a natural number'
      );
      this._satoshisBN = BN.fromNumber(num);
      this._satoshis = num;
    }
    $.checkState(
      JSUtil.isNaturalNumber(this._satoshis),
      'Output satoshis is not a natural number'
    );
  }
});

Output.prototype.invalidSatoshis = function() {
  if (this._satoshis > MAX_SAFE_INTEGER) {
    return 'transaction txout satoshis greater than max safe integer';
  }
  if (this._satoshis !== this._satoshisBN.toNumber()) {
    return 'transaction txout satoshis has corrupted value';
  }
  if (this._satoshis < 0) {
    return 'transaction txout negative';
  }
  return false;
};

Output.prototype.toObject = Output.prototype.toJSON = function toObject() {
  var obj = {
    satoshis: this.satoshis
  };
  obj.script = this._scriptBuffer.toString('hex');
  return obj;
};

Output.fromObject = function(data) {
  return new Output(data);
};

Output.prototype.setScriptFromBuffer = function(buffer) {
  this._scriptBuffer = buffer;
  try {
    this._script = Script.fromBuffer(this._scriptBuffer);
    this._script._isOutput = true;
  } catch(e) {
    if (e instanceof errors.Script.InvalidBuffer) {
      this._script = null;
    } else {
      throw e;
    }
  }
};

Output.prototype.setScript = function(script) {
  if (script instanceof Script) {
    this._scriptBuffer = script.toBuffer();
    this._script = script;
    this._script._isOutput = true;
  } else if (_.isString(script)) {
    this._script = Script.fromString(script);
    this._scriptBuffer = this._script.toBuffer();
    this._script._isOutput = true;
  } else if (bufferUtil.isBuffer(script)) {
    this.setScriptFromBuffer(script);
  } else {
    throw new TypeError('Invalid argument type: script');
  }
  return this;
};

Output.prototype.inspect = function() {
  var scriptStr;
  if (this.script) {
    scriptStr = this.script.inspect();
  } else {
    scriptStr = this._scriptBuffer.toString('hex');
  }
  return '<Output (' + this.satoshis + ' sats) ' + scriptStr + '>';
};

Output.fromBufferReader = function(br) {
  var obj = {};
  obj.satoshis = br.readUInt64LEBN();
  var size = br.readVarintNum();
  if (size !== 0) {
    obj.script = br.read(size);
  } else {
    obj.script = Buffer.from([]);
  }
  return new Output(obj);
};

Output.prototype.toBufferWriter = function(writer) {
  if (!writer) {
    writer = new BufferWriter();
  }
  writer.writeUInt64LEBN(this._satoshisBN);
  var script = this._scriptBuffer;
  writer.writeVarintNum(script.length);
  writer.write(script);
  return writer;
};

Output.prototype.calculateSize = function() {
  let result = 8; // satoshis
  result += BufferWriter.varintBufNum(this._scriptBuffer.length).length;
  result += this._scriptBuffer.length;
  return result;
};

/**
 * Taproot only
 * Add a new script at a certain depth in the tree. Add() operations must be called
 *  in depth-first traversal order of binary tree. If track is true, it will be included in
 *  the GetSpendData() output.
 * @param {Number} depth Tree depth at which to insert the node (depth is 0-based)
 * @param {Script} script 
 * @param {Number} leafVersion 
 * @param {Boolean} track If true, the leaf will be included in GetSpendData() output
 */
Output.prototype.add = function(depth, script, leafVersion, track = true) {
  $.checkArgument((leafVersion & ~Interpreter.TAPROOT_LEAF_MASK) === 0, 'invalid leafVersion');
  if (!this.isValid) {
    return;
  }

  const node = {
    hash: TaggedHash.TAPLEAF.writeUInt8(leafVersion).write(script.toBuffer()).finalize(),
    leaves: []
  };
  if (track) {
    const leafInfo = {
      script,
      leafVersion,
      merkleBranch: []
    };
    node.leaves.push(leafInfo);
  }
  this._insertNode(node, depth);
  return this;
};


Output.prototype._insertNode = function(node, depth) {
  $.checkArgument(depth >= 0 && depth <= Interpreter.TAPROOT_CONTROL_MAX_NODE_COUNT, 'invalid depth');
  /* We cannot insert a leaf at a lower depth while a deeper branch is unfinished. Doing
   * so would mean the Add() invocations do not correspond to a DFS traversal of a
   * binary tree. */
  if (depth + 1 < this._branch.length) {
    this.isValid = false;
    return;
  }
  /* As long as an entry in the branch exists at the specified depth, combine it and propagate up.
   * The 'node' variable is overwritten here with the newly combined node. */
  while (this.isValid && this._branch.length > depth && this._branch[depth]) {
    node = this._combineNodes(node, this._branch[depth]);
    this._branch = this._branch.slice(0, this._branch.length - 2);
    if (depth == 0) {
      this.isValid = false; /* Can't propagate further up than the root */
    }
    depth--;
  }
  if (this.isValid) {
    /* Make sure the branch is big enough to place the new node. */
    if (this._branch.length <= depth) {
      this._branch = this._branch.slice(0, depth + 1);
    }
    $.checkState(!this._nodes[depth]);
    m_branch[depth] = node;
  }
};

Output.prototype._combineNodes = function(a, b) {
  const ret = {
    hash: null,
    leaves: []
  };
  /* Iterate over all tracked leaves in a, add b's hash to their Merkle branch, and move them to ret. */
  for (let leaf of a.leaves) {
    leaf.merkleBranch.push(b.hash);
    ret.leaves.push(leaf);
  }
  /* Iterate over all tracked leaves in b, add a's hash to their Merkle branch, and move them to ret. */
  for (let leaf of b.leaves) {
    leaf.merkleBranch.push(a.hash);
    ret.leaves.push(leaf);
  }
  /* Lexicographically sort a and b's hash, and compute parent hash. */
  if (a.hash.compare(b.hash) === -1) {
    ret.hash = TaggedHash.TAPBRANCH.write(a.hash).write(b.hash).finalize();
  } else {
    ret.hash = TaggedHash.TAPBRANCH.write(b.hash).write(a.hash).finalize();
  }
  return ret;
};


/**
 * Finalize the construction. Can only be called when IsComplete() is true.
 *  internal_key.IsFullyValid() must be true.
 * @param {PublicKey} pubKey 
 */
Output.prototype.finalize = function(pubKey) {
  $.checkState(this.isComplete === true, 'finalize can only be called when isComplete is true');
  const ret = pubKey.createTapTweak(this._branch.length === 0 ? null : this._branch[0].hash);

};

module.exports = Output;


/***/ }),

/***/ 44371:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2543);

/**
 * Determines whether a string contains only hexadecimal values
 *
 * @name JSUtil.isHexa
 * @param {string} value
 * @return {boolean} true if the string is the hexa representation of a number
 */
var isHexa = function isHexa(value) {
  if (!_.isString(value)) {
    return false;
  }
  return /^[0-9a-fA-F]+$/.test(value);
};

/**
 * @namespace JSUtil
 */
module.exports = {
  /**
   * Test if an argument is a valid JSON object. If it is, returns a truthy
   * value (the json object decoded), so no double JSON.parse call is necessary
   *
   * @param {string} arg
   * @return {Object|boolean} false if the argument is not a JSON string.
   */
  isValidJSON: function isValidJSON(arg) {
    var parsed;
    if (!_.isString(arg)) {
      return false;
    }
    try {
      parsed = JSON.parse(arg);
    } catch (e) {
      return false;
    }
    if (typeof(parsed) === 'object') {
      return true;
    }
    return false;
  },
  isHexa: isHexa,
  isHexaString: isHexa,

  /**
   * Clone an array
   */
  cloneArray: function(array) {
    return [].concat(array);
  },

  /**
   * Define immutable properties on a target object
   *
   * @param {Object} target - An object to be extended
   * @param {Object} values - An object of properties
   * @return {Object} The target object
   */
  defineImmutable: function defineImmutable(target, values) {
    Object.keys(values).forEach(function(key){
      Object.defineProperty(target, key, {
        configurable: false,
        enumerable: true,
        value: values[key]
      });
    });
    return target;
  },
  /**
   * Checks that a value is a natural number, a positive integer or zero.
   *
   * @param {*} value
   * @return {Boolean}
   */
  isNaturalNumber: function isNaturalNumber(value) {
    return typeof value === 'number' &&
      isFinite(value) &&
      Math.floor(value) === value &&
      value >= 0;
  }
};


/***/ }),

/***/ 44499:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var crypto = __webpack_require__(91565);
var BufferUtil = __webpack_require__(56142);
var $ = __webpack_require__(6213);

var Hash = module.exports;

Hash.sha1 = function(buf) {
  $.checkArgument(BufferUtil.isBuffer(buf));
  return crypto.createHash('sha1').update(buf).digest();
};

Hash.sha1.blocksize = 512;

Hash.sha256 = function(buf) {
  $.checkArgument(BufferUtil.isBuffer(buf));
  return crypto.createHash('sha256').update(buf).digest();
};

Hash.sha256.blocksize = 512;

Hash.sha256sha256 = function(buf) {
  $.checkArgument(BufferUtil.isBuffer(buf));
  return Hash.sha256(Hash.sha256(buf));
};

Hash.ripemd160 = function(buf) {
  $.checkArgument(BufferUtil.isBuffer(buf));
  return crypto.createHash('ripemd160').update(buf).digest();
};

Hash.sha256ripemd160 = function(buf) {
  $.checkArgument(BufferUtil.isBuffer(buf));
  return Hash.ripemd160(Hash.sha256(buf));
};

Hash.sha512 = function(buf) {
  $.checkArgument(BufferUtil.isBuffer(buf));
  return crypto.createHash('sha512').update(buf).digest();
};

Hash.sha512.blocksize = 1024;

Hash.hmac = function(hashf, data, key) {
  //http://en.wikipedia.org/wiki/Hash-based_message_authentication_code
  //http://tools.ietf.org/html/rfc4868#section-2
  $.checkArgument(BufferUtil.isBuffer(data));
  $.checkArgument(BufferUtil.isBuffer(key));
  $.checkArgument(hashf.blocksize);

  var blocksize = hashf.blocksize / 8;

  if (key.length > blocksize) {
    key = hashf(key);
  } else if (key < blocksize) {
    var fill = Buffer.alloc(blocksize);
    fill.fill(0);
    key.copy(fill);
    key = fill;
  }

  var o_key = Buffer.alloc(blocksize);
  o_key.fill(0x5c);

  var i_key = Buffer.alloc(blocksize);
  i_key.fill(0x36);

  var o_key_pad = Buffer.alloc(blocksize);
  var i_key_pad = Buffer.alloc(blocksize);
  for (var i = 0; i < blocksize; i++) {
    o_key_pad[i] = o_key[i] ^ key[i];
    i_key_pad[i] = i_key[i] ^ key[i];
  }

  return hashf(Buffer.concat([o_key_pad, hashf(Buffer.concat([i_key_pad, data]))]));
};

Hash.sha256hmac = function(data, key) {
  return Hash.hmac(Hash.sha256, data, key);
};

Hash.sha512hmac = function(data, key) {
  return Hash.hmac(Hash.sha512, data, key);
};


/***/ }),

/***/ 48758:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(92202);

module.exports.Input = __webpack_require__(96509);
module.exports.Output = __webpack_require__(42109);
module.exports.UnspentOutput = __webpack_require__(91182);
module.exports.Signature = __webpack_require__(3544);
module.exports.Sighash = __webpack_require__(99039);
module.exports.SighashWitness = __webpack_require__(39368);


/***/ }),

/***/ 49559:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var bs58 = __webpack_require__(16763);
var buffer = __webpack_require__(48287);

var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'.split('');

var Base58 = function Base58(obj) {
  /* jshint maxcomplexity: 8 */
  if (!(this instanceof Base58)) {
    return new Base58(obj);
  }
  if (Buffer.isBuffer(obj)) {
    var buf = obj;
    this.fromBuffer(buf);
  } else if (typeof obj === 'string') {
    var str = obj;
    this.fromString(str);
  } else if (obj) {
    this.set(obj);
  }
};

Base58.validCharacters = function validCharacters(chars) {
  if (buffer.Buffer.isBuffer(chars)) {
    chars = chars.toString();
  }
  return _.every(_.map(chars, function(char) { return _.includes(ALPHABET, char); }));
};

Base58.prototype.set = function(obj) {
  this.buf = obj.buf || this.buf || undefined;
  return this;
};

Base58.encode = function(buf) {
  if (!buffer.Buffer.isBuffer(buf)) {
    throw new Error('Input should be a buffer');
  }
  return bs58.encode(buf);
};

Base58.decode = function(str) {
  if (typeof str !== 'string') {
    throw new Error('Input should be a string');
  }
  return Buffer.from(bs58.decode(str));
};

Base58.prototype.fromBuffer = function(buf) {
  this.buf = buf;
  return this;
};

Base58.prototype.fromString = function(str) {
  var buf = Base58.decode(str);
  this.buf = buf;
  return this;
};

Base58.prototype.toBuffer = function() {
  return this.buf;
};

Base58.prototype.toString = function() {
  return Base58.encode(this.buf);
};

module.exports = Base58;


/***/ }),

/***/ 49845:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var BN = __webpack_require__(62731);
var BufferUtil = __webpack_require__(56142);

var EC = (__webpack_require__(86729).ec);
var ec = new EC('secp256k1');
var ecPoint = ec.curve.point.bind(ec.curve);
var ecPointFromX = ec.curve.pointFromX.bind(ec.curve);

/**
 *
 * Instantiate a valid secp256k1 Point from the X and Y coordinates.
 *
 * @param {BN|String} x - The X coordinate
 * @param {BN|String} y - The Y coordinate
 * @link https://github.com/indutny/elliptic
 * @augments elliptic.curve.point
 * @throws {Error} A validation error if exists
 * @returns {Point} An instance of Point
 * @constructor
 */
var Point = function Point(x, y, isRed) {
  try {
    var point = ecPoint(x, y, isRed);
  } catch (e) {
    throw new Error('Invalid Point');
  }
  point.validate();
  return point;
};

Point.prototype = Object.getPrototypeOf(ec.curve.point());

/**
 *
 * Instantiate a valid secp256k1 Point from only the X coordinate
 *
 * @param {boolean} odd - If the Y coordinate is odd
 * @param {BN|String} x - The X coordinate
 * @throws {Error} A validation error if exists
 * @returns {Point} An instance of Point
 */
Point.fromX = function fromX(odd, x){
  try {
    var point = ecPointFromX(x, odd);
  } catch (e) {
    throw new Error('Invalid X');
  }
  point.validate();
  return point;
};

/**
 *
 * Will return a secp256k1 ECDSA base point.
 *
 * @link https://en.bitcoin.it/wiki/Secp256k1
 * @returns {Point} An instance of the base point.
 */
Point.getG = function getG() {
  return ec.curve.g;
};

/**
 *
 * Will return the max of range of valid private keys as governed by the secp256k1 ECDSA standard.
 * (A.K.A curve order)
 * @link https://en.bitcoin.it/wiki/Private_key#Range_of_valid_ECDSA_private_keys
 * @returns {BN} A BN instance of the number of points on the curve
 */
Point.getN = function getN() {
  return new BN(ec.curve.n.toArray());
};

/**
 * Secp256k1 field size
 * @returns {BN} A BN instance of the field size
 */
Point.getP = function() {
  return ec.curve.p.clone();
};

Point.prototype._getX = Point.prototype.getX;

/**
 *
 * Will return the X coordinate of the Point
 *
 * @returns {BN} A BN instance of the X coordinate
 */
Point.prototype.getX = function getX() {
  return new BN(this._getX().toArray());
};

Point.prototype._getY = Point.prototype.getY;

/**
 *
 * Will return the Y coordinate of the Point
 *
 * @returns {BN} A BN instance of the Y coordinate
 */
Point.prototype.getY = function getY() {
  return new BN(this._getY().toArray());
};

/**
 *
 * Will determine if the point is valid
 *
 * @link https://www.iacr.org/archive/pkc2003/25670211/25670211.pdf
 * @param {Point} An instance of Point
 * @throws {Error} A validation error if exists
 * @returns {Point} An instance of the same Point
 */
Point.prototype.validate = function validate() {

  if (this.isInfinity()){
    throw new Error('Point cannot be equal to Infinity');
  }

  var p2;
  try {
    p2 = ecPointFromX(this.getX(), this.getY().isOdd());
  } catch (e) {
    throw new Error('Point does not lie on the curve');
  }

  if (p2.y.cmp(this.y) !== 0) {
    throw new Error('Invalid y value for curve.');
  }


  //todo: needs test case
  if (!(this.mul(Point.getN()).isInfinity())) {
    throw new Error('Point times N must be infinity');
  }

  return this;

};

Point.pointToCompressed = function pointToCompressed(point) {
  var xbuf = point.getX().toBuffer({size: 32});
  var ybuf = point.getY().toBuffer({size: 32});

  var prefix;
  var odd = ybuf[ybuf.length - 1] % 2;
  if (odd) {
    prefix = Buffer.from([0x03]);
  } else {
    prefix = Buffer.from([0x02]);
  }
  return BufferUtil.concat([prefix, xbuf]);
};


Point.prototype.liftX = function() {
  const fieldSize = Point.getP();
  const zero = new BN(0);
  const one = new BN(1);
  const two = new BN(2);
  const three = new BN(3);
  const four = new BN(4);
  const seven = new BN(7);
  const red = BN.red('k256');

  const c = this.x.pow(three).add(seven).mod(fieldSize);
  const y = c.toRed(red).redPow(fieldSize.add(one).div(four)).mod(fieldSize);
  
  if (!c.eq(y.pow(two).mod(fieldSize))) {
    throw new Error('liftX failed');
  }
  
  const pointX = this.x.red ? this.x.fromRed() : this.x;
  const pointY = y.mod(two).eq(zero) ? y.fromRed() : fieldSize.sub(y)
  return new Point(pointX, pointY, true);
};

module.exports = Point;


/***/ }),

/***/ 51990:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var BlockHeader = __webpack_require__(36135);
var BN = __webpack_require__(62731);
var BufferUtil = __webpack_require__(56142);
var BufferReader = __webpack_require__(69118);
var BufferWriter = __webpack_require__(54878);
var Hash = __webpack_require__(44499);
var Transaction = __webpack_require__(48758);
var $ = __webpack_require__(6213);

/**
 * Instantiate a Block from a Buffer, JSON object, or Object with
 * the properties of the Block
 *
 * @param {*} - A Buffer, JSON string, or Object
 * @returns {Block}
 * @constructor
 */
function Block(arg) {
  if (!(this instanceof Block)) {
    return new Block(arg);
  }
  _.extend(this, Block._from(arg));
  return this;
}

// https://github.com/bitcoin/bitcoin/blob/b5fa132329f0377d787a4a21c1686609c2bfaece/src/primitives/block.h#L14
Block.MAX_BLOCK_SIZE = 1000000;

/**
 * @param {*} - A Buffer, JSON string or Object
 * @returns {Object} - An object representing block data
 * @throws {TypeError} - If the argument was not recognized
 * @private
 */
Block._from = function _from(arg) {
  var info = {};
  if (BufferUtil.isBuffer(arg)) {
    info = Block._fromBufferReader(BufferReader(arg));
  } else if (_.isObject(arg)) {
    info = Block._fromObject(arg);
  } else {
    throw new TypeError('Unrecognized argument for Block');
  }
  return info;
};

/**
 * @param {Object} - A plain JavaScript object
 * @returns {Object} - An object representing block data
 * @private
 */
Block._fromObject = function _fromObject(data) {
  var transactions = [];
  data.transactions.forEach(function(tx) {
    if (tx instanceof Transaction) {
      transactions.push(tx);
    } else {
      transactions.push(Transaction().fromObject(tx));
    }
  });
  var info = {
    header: BlockHeader.fromObject(data.header),
    transactions: transactions
  };
  return info;
};

/**
 * @param {Object} - A plain JavaScript object
 * @returns {Block} - An instance of block
 */
Block.fromObject = function fromObject(obj) {
  var info = Block._fromObject(obj);
  return new Block(info);
};

/**
 * @param {BufferReader} - Block data
 * @returns {Object} - An object representing the block data
 * @private
 */
Block._fromBufferReader = function _fromBufferReader(br) {
  var info = {};
  $.checkState(!br.finished(), 'No block data received');
  info.header = BlockHeader.fromBufferReader(br);
  var transactions = br.readVarintNum();
  info.transactions = [];
  for (var i = 0; i < transactions; i++) {
    info.transactions.push(Transaction().fromBufferReader(br));
  }
  return info;
};

/**
 * @param {BufferReader} - A buffer reader of the block
 * @returns {Block} - An instance of block
 */
Block.fromBufferReader = function fromBufferReader(br) {
  $.checkArgument(br, 'br is required');
  var info = Block._fromBufferReader(br);
  return new Block(info);
};

/**
 * @param {Buffer} - A buffer of the block
 * @returns {Block} - An instance of block
 */
Block.fromBuffer = function fromBuffer(buf) {
  return Block.fromBufferReader(new BufferReader(buf));
};

/**
 * @param {string} - str - A hex encoded string of the block
 * @returns {Block} - A hex encoded string of the block
 */
Block.fromString = function fromString(str) {
  var buf = Buffer.from(str, 'hex');
  return Block.fromBuffer(buf);
};

/**
 * @param {Binary} - Raw block binary data or buffer
 * @returns {Block} - An instance of block
 */
Block.fromRawBlock = function fromRawBlock(data) {
  if (!BufferUtil.isBuffer(data)) {
    data = Buffer.from(data, 'binary');
  }
  var br = BufferReader(data);
  br.pos = Block.Values.START_OF_BLOCK;
  var info = Block._fromBufferReader(br);
  return new Block(info);
};

/**
 * @returns {Object} - A plain object with the block properties
 */
Block.prototype.toObject = Block.prototype.toJSON = function toObject() {
  var transactions = [];
  this.transactions.forEach(function(tx) {
    transactions.push(tx.toObject());
  });
  return {
    header: this.header.toObject(),
    transactions: transactions
  };
};

/**
 * @returns {Buffer} - A buffer of the block
 */
Block.prototype.toBuffer = function toBuffer() {
  return this.toBufferWriter().concat();
};

/**
 * @returns {string} - A hex encoded string of the block
 */
Block.prototype.toString = function toString() {
  return this.toBuffer().toString('hex');
};

/**
 * @param {BufferWriter} - An existing instance of BufferWriter
 * @returns {BufferWriter} - An instance of BufferWriter representation of the Block
 */
Block.prototype.toBufferWriter = function toBufferWriter(bw) {
  if (!bw) {
    bw = new BufferWriter();
  }
  bw.write(this.header.toBuffer());
  bw.writeVarintNum(this.transactions.length);
  for (var i = 0; i < this.transactions.length; i++) {
    this.transactions[i].toBufferWriter(bw);
  }
  return bw;
};

/**
 * Will iterate through each transaction and return an array of hashes
 * @returns {Array} - An array with transaction hashes
 */
Block.prototype.getTransactionHashes = function getTransactionHashes() {
  var hashes = [];
  if (this.transactions.length === 0) {
    return [Block.Values.NULL_HASH];
  }
  for (var t = 0; t < this.transactions.length; t++) {
    hashes.push(this.transactions[t]._getHash());
  }
  return hashes;
};

/**
 * Will build a merkle tree of all the transactions, ultimately arriving at
 * a single point, the merkle root.
 * @link https://en.bitcoin.it/wiki/Protocol_specification#Merkle_Trees
 * @returns {Array} - An array with each level of the tree after the other.
 */
Block.prototype.getMerkleTree = function getMerkleTree() {

  var tree = this.getTransactionHashes();

  var j = 0;
  for (var size = this.transactions.length; size > 1; size = Math.floor((size + 1) / 2)) {
    for (var i = 0; i < size; i += 2) {
      var i2 = Math.min(i + 1, size - 1);
      var buf = Buffer.concat([tree[j + i], tree[j + i2]]);
      tree.push(Hash.sha256sha256(buf));
    }
    j += size;
  }

  return tree;
};

/**
 * Calculates the merkleRoot from the transactions.
 * @returns {Buffer} - A buffer of the merkle root hash
 */
Block.prototype.getMerkleRoot = function getMerkleRoot() {
  var tree = this.getMerkleTree();
  return tree[tree.length - 1];
};

/**
 * Verifies that the transactions in the block match the header merkle root
 * @returns {Boolean} - If the merkle roots match
 */
Block.prototype.validMerkleRoot = function validMerkleRoot() {

  var h = new BN(this.header.merkleRoot.toString('hex'), 'hex');
  var c = new BN(this.getMerkleRoot().toString('hex'), 'hex');

  if (h.cmp(c) !== 0) {
    return false;
  }

  return true;
};

/**
 * @returns {Buffer} - The little endian hash buffer of the header
 */
Block.prototype._getHash = function() {
  return this.header._getHash();
};

var idProperty = {
  configurable: false,
  enumerable: true,
  /**
   * @returns {string} - The big endian hash buffer of the header
   */
  get: function() {
    if (!this._id) {
      this._id = this.header.id;
    }
    return this._id;
  },
  set: _.noop
};
Object.defineProperty(Block.prototype, 'id', idProperty);
Object.defineProperty(Block.prototype, 'hash', idProperty);

/**
 * @returns {string} - A string formatted for the console
 */
Block.prototype.inspect = function inspect() {
  return '<Block ' + this.id + '>';
};

Block.Values = {
  START_OF_BLOCK: 8, // Start of block in raw block data
  NULL_HASH: Buffer.from('0000000000000000000000000000000000000000000000000000000000000000', 'hex')
};

module.exports = Block;


/***/ }),

/***/ 52978:
/***/ ((module) => {

"use strict";
module.exports = {"rE":"10.8.9"};

/***/ }),

/***/ 54878:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var bufferUtil = __webpack_require__(56142);
var assert = __webpack_require__(94148);

var BufferWriter = function BufferWriter(obj) {
  if (!(this instanceof BufferWriter))
    return new BufferWriter(obj);
  this.bufLen = 0;
  if (obj)
    this.set(obj);
  else
    this.bufs = [];
};

BufferWriter.prototype.set = function(obj) {
  this.bufs = obj.bufs || this.bufs || [];
  this.bufLen = this.bufs.reduce(function(prev, buf){ return prev + buf.length; }, 0);
  return this;
};

BufferWriter.prototype.toBuffer = function() {
  return this.concat();
};

BufferWriter.prototype.concat = function() {
  return Buffer.concat(this.bufs, this.bufLen);
};

BufferWriter.prototype.write = function(buf) {
  assert(bufferUtil.isBuffer(buf));
  this.bufs.push(buf);
  this.bufLen += buf.length;
  return this;
};

BufferWriter.prototype.writeReverse = function(buf) {
  assert(bufferUtil.isBuffer(buf));
  this.bufs.push(bufferUtil.reverse(buf));
  this.bufLen += buf.length;
  return this;
};

BufferWriter.prototype.writeUInt8 = function(n) {
  if (n < 0) {
    n = n >>> 0; // Convert signed int to unsigned int
  }
  var buf = Buffer.alloc(1);
  buf.writeUInt8(n, 0);
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeUInt16BE = function(n) {
  if (n < 0) {
    n = n >>> 0; // Convert signed int to unsigned int
  }
  var buf = Buffer.alloc(2);
  buf.writeUInt16BE(n, 0);
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeUInt16LE = function(n) {
  if (n < 0) {
    n = n >>> 0; // Convert signed int to unsigned int
  }
  var buf = Buffer.alloc(2);
  buf.writeUInt16LE(n, 0);
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeUInt32BE = function(n) {
  if (n < 0) {
    n = n >>> 0; // Convert signed int to unsigned int
  }
  var buf = Buffer.alloc(4);
  buf.writeUInt32BE(n, 0);
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeInt32LE = function(n) {
  var buf = Buffer.alloc(4);
  buf.writeInt32LE(n, 0);
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeUInt32LE = function(n) {
  if (n < 0) {
    n = n >>> 0; // Convert signed int to unsigned int
  }
  var buf = Buffer.alloc(4);
  buf.writeUInt32LE(n, 0);
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeUInt64BEBN = function(bn) {
  var buf = bn.toBuffer({size: 8});
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeUInt64LEBN = function(bn) {
  var buf = bn.toBuffer({size: 8});
  this.writeReverse(buf);
  return this;
};

BufferWriter.prototype.writeVarintNum = function(n) {
  var buf = BufferWriter.varintBufNum(n);
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeVarintBN = function(bn) {
  var buf = BufferWriter.varintBufBN(bn);
  this.write(buf);
  return this;
};

BufferWriter.varintBufNum = function(n) {
  var buf = undefined;
  if (n < 253) {
    buf = Buffer.alloc(1);
    buf.writeUInt8(n, 0);
  } else if (n < 0x10000) {
    buf = Buffer.alloc(1 + 2);
    buf.writeUInt8(253, 0);
    buf.writeUInt16LE(n, 1);
  } else if (n < 0x100000000) {
    buf = Buffer.alloc(1 + 4);
    buf.writeUInt8(254, 0);
    buf.writeUInt32LE(n, 1);
  } else {
    buf = Buffer.alloc(1 + 8);
    buf.writeUInt8(255, 0);
    buf.writeInt32LE(n & -1, 1);
    buf.writeUInt32LE(Math.floor(n / 0x100000000), 5);
  }
  return buf;
};

BufferWriter.varintBufBN = function(bn) {
  var buf = undefined;
  var n = bn.toNumber();
  if (n < 253) {
    buf = Buffer.alloc(1);
    buf.writeUInt8(n, 0);
  } else if (n < 0x10000) {
    buf = Buffer.alloc(1 + 2);
    buf.writeUInt8(253, 0);
    buf.writeUInt16LE(n, 1);
  } else if (n < 0x100000000) {
    buf = Buffer.alloc(1 + 4);
    buf.writeUInt8(254, 0);
    buf.writeUInt32LE(n, 1);
  } else {
    var bw = new BufferWriter();
    bw.writeUInt8(255);
    bw.writeUInt64LEBN(bn);
    var buf = bw.concat();
  }
  return buf;
};

module.exports = BufferWriter;


/***/ }),

/***/ 56142:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var buffer = __webpack_require__(48287);
var assert = __webpack_require__(94148);

var js = __webpack_require__(44371);
var $ = __webpack_require__(6213);

function equals(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  var length = a.length;
  for (var i = 0; i < length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  /**
   * Fill a buffer with a value.
   *
   * @param {Buffer} buffer
   * @param {number} value
   * @return {Buffer}
   */
  fill: function fill(buffer, value) {
    $.checkArgumentType(buffer, 'Buffer', 'buffer');
    $.checkArgumentType(value, 'number', 'value');
    var length = buffer.length;
    for (var i = 0; i < length; i++) {
      buffer[i] = value;
    }
    return buffer;
  },

  /**
   * Return a copy of a buffer
   *
   * @param {Buffer} original
   * @return {Buffer}
   */
  copy: function(original) {
    var buffer = Buffer.alloc(original.length);
    original.copy(buffer);
    return buffer;
  },

  /**
   * Returns true if the given argument is an instance of a buffer. Tests for
   * both node's Buffer and Uint8Array
   *
   * @param {*} arg
   * @return {boolean}
   */
  isBuffer: function isBuffer(arg) {
    return buffer.Buffer.isBuffer(arg) || arg instanceof Uint8Array;
  },

  /**
   * Returns a zero-filled byte array
   *
   * @param {number} bytes
   * @return {Buffer}
   */
  emptyBuffer: function emptyBuffer(bytes) {
    $.checkArgumentType(bytes, 'number', 'bytes');
    var result = Buffer.alloc(bytes);
    for (var i = 0; i < bytes; i++) {
      result.write('\0', i);
    }
    return result;
  },

  /**
   * Concatenates a buffer
   *
   * Shortcut for <tt>buffer.Buffer.concat</tt>
   */
  concat: buffer.Buffer.concat,

  equals: equals,
  equal: equals,

  /**
   * Transforms a number from 0 to 255 into a Buffer of size 1 with that value
   *
   * @param {number} integer
   * @return {Buffer}
   */
  integerAsSingleByteBuffer: function integerAsSingleByteBuffer(integer) {
    $.checkArgumentType(integer, 'number', 'integer');
    return Buffer.from([integer & 0xff]);
  },

  /**
   * Transform a 4-byte integer into a Buffer of length 4.
   *
   * @param {number} integer
   * @return {Buffer}
   */
  integerAsBuffer: function integerAsBuffer(integer) {
    $.checkArgumentType(integer, 'number', 'integer');
    var bytes = [];
    bytes.push((integer >> 24) & 0xff);
    bytes.push((integer >> 16) & 0xff);
    bytes.push((integer >> 8) & 0xff);
    bytes.push(integer & 0xff);
    return Buffer.from(bytes);
  },

  /**
   * Transform the first 4 values of a Buffer into a number, in little endian encoding
   *
   * @param {Buffer} buffer
   * @return {number}
   */
  integerFromBuffer: function integerFromBuffer(buffer) {
    $.checkArgumentType(buffer, 'Buffer', 'buffer');
    return buffer[0] << 24 | buffer[1] << 16 | buffer[2] << 8 | buffer[3];
  },

  /**
   * Transforms the first byte of an array into a number ranging from -128 to 127
   * @param {Buffer} buffer
   * @return {number}
   */
  integerFromSingleByteBuffer: function integerFromBuffer(buffer) {
    $.checkArgumentType(buffer, 'Buffer', 'buffer');
    return buffer[0];
  },

  /**
   * Transforms a buffer into a string with a number in hexa representation
   *
   * Shorthand for <tt>buffer.toString('hex')</tt>
   *
   * @param {Buffer} buffer
   * @return {string}
   */
  bufferToHex: function bufferToHex(buffer) {
    $.checkArgumentType(buffer, 'Buffer', 'buffer');
    return buffer.toString('hex');
  },

  /**
   * Reverse a buffer
   * @param {Buffer} param
   * @return {Buffer}
   */
  reverse: function reverse(param) {
    return (Buffer.from(param)).reverse();
  },
};

module.exports.NULL_HASH = module.exports.fill(Buffer.alloc(32), 0);
module.exports.EMPTY_BUFFER = Buffer.alloc(0);


/***/ }),

/***/ 56743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];
const Hash = __webpack_require__(44499);
const BufferWriter = __webpack_require__(54878);
const inherits = __webpack_require__(28322);

/**
 * Creates a tag hash to ensure uniqueness of a message between purposes.
 * For example, if there's a potential for a collision of messages between
 *   multiple purposes, a tag can be added to guard against such collisions.
 * @link https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki#Design (see 'Tagged Hashes')
 * @param {String} tag The tag to prevent message collisions. Should uniquely reflect the purpose of the message.
 * @param {Buffer|String} message (optional)
 * @param {String} messageEncoding (default: 'hex') If `message` is a string, provide the encoding
 * @returns {TaggedHash} Instance of a BufferWriter with the written tag and `finalize` method
 */
function TaggedHash(tag, message, messageEncoding = 'hex') {
  if (!(this instanceof TaggedHash)) {
    return new TaggedHash(tag, message, messageEncoding);
  }
  BufferWriter.apply(this);
  tag = Buffer.from(tag);

  const taghash = Hash.sha256(tag);
  this.write(taghash);
  this.write(taghash);
  if (message) {
    message = Buffer.isBuffer(message) ? message : Buffer.from(message, messageEncoding);
    this.write(message);
  }
  return this;
};

inherits(TaggedHash, BufferWriter);

/**
 * Returns a 32-byte SHA256 hash of the double tagged hashes concat'd with the message
 * as defined by BIP-340: SHA256(SHA256(tag), SHA256(tag), message)
 * @returns {Buffer}
 */
TaggedHash.prototype.finalize = function() {
  return Buffer.from(Hash.sha256(this.toBuffer()));
};

/**
 * Commonly used tags
 */
Object.defineProperties(TaggedHash, {
  TAPSIGHASH: { get: () => new TaggedHash('TapSighash') },
  TAPLEAF:    { get: () => new TaggedHash('TapLeaf') },
  TAPBRANCH:  { get: () => new TaggedHash('TapBranch') }
});

module.exports = TaggedHash;

/***/ }),

/***/ 61889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var inherits = __webpack_require__(28322);

var $ = __webpack_require__(6213);
var BufferUtil = __webpack_require__(56142);

var Input = __webpack_require__(68237);
var Output = __webpack_require__(42109);
var Sighash = __webpack_require__(99039);
var Script = __webpack_require__(91093);
var Signature = __webpack_require__(23825);
var TransactionSignature = __webpack_require__(3544);

/**
 * Represents a special kind of input of PayToPublicKey kind.
 * @constructor
 */
function PublicKeyInput() {
  Input.apply(this, arguments);
}
inherits(PublicKeyInput, Input);

/**
 * @param {Transaction} transaction - the transaction to be signed
 * @param {PrivateKey} privateKey - the private key with which to sign the transaction
 * @param {number} index - the index of the input in the transaction input vector
 * @param {number} sigtype - the type of signature, defaults to Signature.SIGHASH_ALL
 * @param {Buffer} hashData - unused for this input type 
 * @param {String} signingMethod DEPRECATED - method used to sign input - 'ecdsa' or 'schnorr'
 * @return {Array} of objects that can be
 */
PublicKeyInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype, hashData, signingMethod) {
  $.checkState(this.output instanceof Output);
  sigtype = sigtype || Signature.SIGHASH_ALL;
  signingMethod = signingMethod || 'ecdsa'; // unused. Keeping for consistency with other libs
  var publicKey = privateKey.toPublicKey();
  if (publicKey.toString() === this.output.script.getPublicKey().toString('hex')) {
    return [new TransactionSignature({
      publicKey: publicKey,
      prevTxId: this.prevTxId,
      outputIndex: this.outputIndex,
      inputIndex: index,
      signature: Sighash.sign(transaction, privateKey, sigtype, index, this.output.script),
      sigtype: sigtype
    })];
  }
  return [];
};

/**
 * Add the provided signature
 *
 * @param {Object} signature
 * @param {PublicKey} signature.publicKey
 * @param {Signature} signature.signature
 * @param {number=} signature.sigtype
 * @param {String} signingMethod - method used to sign - 'ecdsa' or 'schnorr' (future signing method)
 * @return {PublicKeyInput} this, for chaining
 */
PublicKeyInput.prototype.addSignature = function(transaction, signature, signingMethod) {
  $.checkState(this.isValidSignature(transaction, signature, signingMethod), 'Signature is invalid');
  this.setScript(Script.buildPublicKeyIn(
    signature.signature.toDER(),
    signature.sigtype
  ));
  return this;
};

/**
 * Clear the input's signature
 * @return {PublicKeyHashInput} this, for chaining
 */
PublicKeyInput.prototype.clearSignatures = function() {
  this.setScript(Script.empty());
  return this;
};

/**
 * Query whether the input is signed
 * @return {boolean}
 */
PublicKeyInput.prototype.isFullySigned = function() {
  return this.script.isPublicKeyIn();
};

PublicKeyInput.SCRIPT_MAX_SIZE = 73; // sigsize (1 + 72)

PublicKeyInput.prototype._estimateSize = function() {
  return this._getBaseSize() + PublicKeyInput.SCRIPT_MAX_SIZE;
};

module.exports = PublicKeyInput;


/***/ }),

/***/ 62731:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var BN = __webpack_require__(15092);
var $ = __webpack_require__(6213);
var _ = __webpack_require__(2543);
const BufferUtil = __webpack_require__(56142);

var reversebuf = function(buf) {
  var buf2 = Buffer.alloc(buf.length);
  for (var i = 0; i < buf.length; i++) {
    buf2[i] = buf[buf.length - 1 - i];
  }
  return buf2;
};

BN.Zero = new BN(0);
BN.One = new BN(1);
BN.Minus1 = new BN(-1);

BN.fromNumber = function(n) {
  $.checkArgument(_.isNumber(n));
  return new BN(n);
};

BN.fromString = function(str, base) {
  $.checkArgument(_.isString(str));
  return new BN(str, base);
};

BN.fromBuffer = function(buf, opts) {
  $.checkArgument(BufferUtil.isBuffer(buf), 'first argument should be a buffer');
  buf = Buffer.from(buf); // ensure Uint8Array is converted to Buffer
  if (typeof opts !== 'undefined' && opts.endian === 'little') {
    buf = reversebuf(buf);
  }
  var hex = buf.toString('hex');
  var bn = new BN(hex, 16);
  return bn;
};

/**
 * Instantiate a BigNumber from a "signed magnitude buffer"
 * (a buffer where the most significant bit represents the sign (0 = positive, -1 = negative))
 */
BN.fromSM = function(buf, opts) {
  var ret;
  if (buf.length === 0) {
    return BN.fromBuffer(Buffer.from([0]));
  }

  var endian = 'big';
  if (opts) {
    endian = opts.endian;
  }
  if (endian === 'little') {
    buf = reversebuf(buf);
  }

  if (buf[0] & 0x80) {
    buf[0] = buf[0] & 0x7f;
    ret = BN.fromBuffer(buf);
    ret.neg().copy(ret);
  } else {
    ret = BN.fromBuffer(buf);
  }
  return ret;
};


BN.prototype.toNumber = function() {
  return parseInt(this.toString(10), 10);
};

BN.prototype.toBuffer = function(opts) {
  var buf, hex;
  if (opts && opts.size) {
    hex = this.toString(16, 2);
    var natlen = hex.length / 2;
    buf = Buffer.from(hex, 'hex');

    if (natlen === opts.size) {
      buf = buf;
    } else if (natlen > opts.size) {
      buf = BN.trim(buf, natlen);
    } else if (natlen < opts.size) {
      buf = BN.pad(buf, natlen, opts.size);
    }
  } else {
    hex = this.toString(16, 2);
    buf = Buffer.from(hex, 'hex');
  }

  if (typeof opts !== 'undefined' && opts.endian === 'little') {
    buf = reversebuf(buf);
  }

  return buf;
};

BN.prototype.toSMBigEndian = function() {
  var buf;
  if (this.cmp(BN.Zero) === -1) {
    buf = this.neg().toBuffer();
    if (buf[0] & 0x80) {
      buf = Buffer.concat([Buffer.from([0x80]), buf]);
    } else {
      buf[0] = buf[0] | 0x80;
    }
  } else {
    buf = this.toBuffer();
    if (buf[0] & 0x80) {
      buf = Buffer.concat([Buffer.from([0x00]), buf]);
    }
  }

  if (buf.length === 1 & buf[0] === 0) {
    buf = Buffer.from([]);
  }
  return buf;
};

BN.prototype.toSM = function(opts) {
  var endian = opts ? opts.endian : 'big';
  var buf = this.toSMBigEndian();

  if (endian === 'little') {
    buf = reversebuf(buf);
  }
  return buf;
};

/**
 * Create a BN from a "ScriptNum":
 * This is analogous to the constructor for CScriptNum in bitcoind. Many ops in
 * bitcoind's script interpreter use CScriptNum, which is not really a proper
 * bignum. Instead, an error is thrown if trying to input a number bigger than
 * 4 bytes. We copy that behavior here. A third argument, `size`, is provided to
 * extend the hard limit of 4 bytes, as some usages require more than 4 bytes.
 */
BN.fromScriptNumBuffer = function(buf, fRequireMinimal, size) {
  var nMaxNumSize = size || 4;
  $.checkArgument(buf.length <= nMaxNumSize, new Error('script number overflow'));
  if (fRequireMinimal && buf.length > 0) {
    // Check that the number is encoded with the minimum possible
    // number of bytes.
    //
    // If the most-significant-byte - excluding the sign bit - is zero
    // then we're not minimal. Note how this test also rejects the
    // negative-zero encoding, 0x80.
    if ((buf[buf.length - 1] & 0x7f) === 0) {
      // One exception: if there's more than one byte and the most
      // significant bit of the second-most-significant-byte is set
      // it would conflict with the sign bit. An example of this case
      // is +-255, which encode to 0xff00 and 0xff80 respectively.
      // (big-endian).
      if (buf.length <= 1 || (buf[buf.length - 2] & 0x80) === 0) {
        throw new Error('non-minimally encoded script number');
      }
    }
  }
  return BN.fromSM(buf, {
    endian: 'little'
  });
};

/**
 * The corollary to the above, with the notable exception that we do not throw
 * an error if the output is larger than four bytes. (Which can happen if
 * performing a numerical operation that results in an overflow to more than 4
 * bytes).
 */
BN.prototype.toScriptNumBuffer = function() {
  return this.toSM({
    endian: 'little'
  });
};

BN.trim = function(buf, natlen) {
  return buf.slice(natlen - buf.length, buf.length);
};

BN.pad = function(buf, natlen, size) {
  var rbuf = Buffer.alloc(size);
  for (var i = 0; i < buf.length; i++) {
    rbuf[rbuf.length - 1 - i] = buf[buf.length - 1 - i];
  }
  for (i = 0; i < size - natlen; i++) {
    rbuf[i] = 0;
  }
  return rbuf;
};

module.exports = BN;


/***/ }),

/***/ 64111:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(51990);

module.exports.BlockHeader = __webpack_require__(36135);
module.exports.MerkleBlock = __webpack_require__(69912);


/***/ }),

/***/ 65115:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


const BN = __webpack_require__(62731);
const Point = __webpack_require__(49845);
const Signature = __webpack_require__(23825);
const PublicKey = __webpack_require__(969);
const Random = __webpack_require__(3272);
const Hash = __webpack_require__(44499);
const BufferUtil = __webpack_require__(56142);
const $ = __webpack_require__(6213);


/**
 * Attach the recovery factor i to an ECDSA signature.
 * @param {Buffer} hashbuf
 * @param {Signature} sig
 * @param {PulicKey} pubkey
 * @returns {Signature}
 */
const calci = function(hashbuf, sig, pubkey) {
  for (var i = 0; i < 4; i++) {
    var Qprime;
    try {
      Qprime = getPublicKey(hashbuf, sig, i);
    } catch (e) {
      console.error(e);
      continue;
    }

    if (Qprime.point.eq(pubkey.point)) {
      sig.i = i;
      sig.compressed = pubkey.compressed;
      return sig;
    }
  }

  throw new Error('Unable to find valid recovery factor');
};

/**
 * Information about public key recovery:
 * https://bitcointalk.org/index.php?topic=6430.0
 * http://stackoverflow.com/questions/19665491/how-do-i-get-an-ecdsa-public-key-from-just-a-bitcoin-signature-sec1-4-1-6-k 
 * @param {Buffer} hashbuf
 * @param {Signature} sig
 * @param {Number} i
 * @returns {PublicKey}
 */
const getPublicKey = function(hashbuf, sig, i) {
  /* jshint maxstatements: 25 */
  $.checkArgument(i === 0 || i === 1 || i === 2 || i === 3, new Error('i must be equal to 0, 1, 2, or 3'));

  var e = BN.fromBuffer(hashbuf);
  var r = sig.r;
  var s = sig.s;

  // A set LSB signifies that the y-coordinate is odd
  var isYOdd = i & 1;

  // The more significant bit specifies whether we should use the
  // first or second candidate key.
  var isSecondKey = i >> 1;

  var n = Point.getN();
  var G = Point.getG();

  // 1.1 Let x = r + jn
  var x = isSecondKey ? r.add(n) : r;
  var R = Point.fromX(isYOdd, x);

  // 1.4 Check that nR is at infinity
  var nR = R.mul(n);

  if (!nR.isInfinity()) {
    throw new Error('nR is not a valid curve point');
  }

  // Compute -e from e
  var eNeg = e.neg().umod(n);

  // 1.6.1 Compute Q = r^-1 (sR - eG)
  // Q = r^-1 (sR + -eG)
  var rInv = r.invm(n);

  //var Q = R.multiplyTwo(s, G, eNeg).mul(rInv);
  var Q = R.mul(s).add(G.mul(eNeg)).mul(rInv);

  var pubkey = PublicKey.fromPoint(Q, sig.compressed);

  return pubkey;
};


/**
 * Recover a public key from a signature.
 * @param {Buffer} hashbuf
 * @param {Signature} sig Signature with the recovery factor i.
 * @returns {PublicKey}
 */
const recoverPublicKey = function(hashbuf, sig) {
  return getPublicKey(hashbuf, sig, sig.i);
};


/**
 * Generate a random k
 * @returns {BN}
 */
const getRandomK = function() {
  var N = Point.getN();
  var k;
  do {
    k = BN.fromBuffer(Random.getRandomBuffer(32));
  } while (!(k.lt(N) && k.gt(BN.Zero)));
  return k;
};


/**
 * Generate a deterministic k
 * REF: https://tools.ietf.org/html/rfc6979#section-3.2
 * @param {Buffer} hashbuf
 * @param {PrivateKey} privkey
 * @param {Number} badrs Increment until a valid k is found
 * @returns {BN}
 */
const getDeterministicK = function(hashbuf, privkey, badrs) {
  /* jshint maxstatements: 25 */
  // if r or s were invalid when this function was used in signing,
  // we do not want to actually compute r, s here for efficiency, so,
  // we can increment badrs. explained at end of RFC 6979 section 3.2
  if (!badrs) {
    badrs = 0;
  }
  var v = Buffer.alloc(32);
  v.fill(0x01);
  var k = Buffer.alloc(32);
  k.fill(0x00);
  var x = privkey.bn.toBuffer({
    size: 32
  });
  k = Hash.sha256hmac(Buffer.concat([v, Buffer.from([0x00]), x, hashbuf]), k);
  v = Hash.sha256hmac(v, k);
  k = Hash.sha256hmac(Buffer.concat([v, Buffer.from([0x01]), x, hashbuf]), k);
  // double hash v
  v = Hash.sha256hmac(v, k);
  v = Hash.sha256hmac(v, k);
  var T = BN.fromBuffer(v);
  var N = Point.getN();

  // also explained in 3.2, we must ensure T is in the proper range (0, N)
  for (var i = 0; i < badrs || !(T.lt(N) && T.gt(BN.Zero)); i++) {
    k = Hash.sha256hmac(Buffer.concat([v, Buffer.from([0x00])]), k);
    // double hash v
    v = Hash.sha256hmac(v, k);
    v = Hash.sha256hmac(v, k);
    T = BN.fromBuffer(v);
  }

  return T;
};


/**
 * Convert s to a low s
 * see BIP 62, "low S values in signatures"
 * @param {BN} s
 * @returns {BN}
 */
const toLowS = function(s) {
  if (s.gt(new BN('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0', 'hex'))) {
    s = Point.getN().sub(s);
  }
  return s;
};


/**
 * Sign a hash with a private key.
 * @param {Buffer|Uint8Array} hashbuf
 * @param {PrivateKey} privkey
 * @param {Object|undefined} opts An object of optional parameters
 * @param {String} opts.endian 'big' or 'little' (default: big)
 * @param {Boolean} opts.randomK Use a random value for k - produces a non-deterministic signature (default: false)
 * @returns {Signature}
 */
const sign = function(hashbuf, privkey, opts) {
  const { endian = 'big', randomK = false } = opts || {};
  $.checkState(BufferUtil.isBuffer(hashbuf) && hashbuf.length === 32, 'hashbuf must be a 32 byte buffer');
  $.checkState(privkey && privkey.bn, 'privkey must be a PrivateKey');
  
  var d = privkey.bn;
  hashbuf = Buffer.from(hashbuf);
  if (endian === 'little') {
    hashbuf.reverse();
  }

  var e = BN.fromBuffer(hashbuf);
  var N = Point.getN();
  var G = Point.getG();
  // try different values of k until r, s are valid
  var badrs = 0;
  var k, Q, r, s;
  do {
    k = randomK ? getRandomK() : getDeterministicK(hashbuf, privkey, badrs);
    badrs++;
    Q = G.mul(k);
    r = Q.x.umod(N);
    s = k.invm(N).mul(e.add(d.mul(r))).umod(N);
  } while (r.cmp(BN.Zero) <= 0 || s.cmp(BN.Zero) <= 0);

  s = toLowS(s);

  return new Signature({
    s: BN.fromBuffer(s.toBuffer()),
    r: BN.fromBuffer(r.toBuffer()),
    compressed: privkey.publicKey.compressed
  });
};


/**
 * Get signature verification error string
 * @param {Buffer} hashbuf
 * @param {Signature} sig
 * @param {PublicKey} pubkey
 * @param {Object|undefined} opts An object of optional parameters
 * @param {String} opts.endian 'big' or 'little' (default: big)
 * @returns {String|undefined} Returns an error string, or undefined if there is no error
 */
const verificationError = function(hashbuf, sig, pubkey, opts) {
  const { endian = 'big' } = opts || {};

  if (!BufferUtil.isBuffer(hashbuf) || hashbuf.length !== 32) {
    return 'hashbuf must be a 32 byte buffer';
  }

  var r = sig.r;
  var s = sig.s;
  if (!(r.gt(BN.Zero) && r.lt(Point.getN())) || !(s.gt(BN.Zero) && s.lt(Point.getN()))) {
    return 'r and s not in range';
  }

  var e = BN.fromBuffer(hashbuf, { endian });
  var n = Point.getN();
  var sinv = s.invm(n);
  var u1 = sinv.mul(e).umod(n);
  var u2 = sinv.mul(r).umod(n);

  var p = Point.getG().mulAdd(u1, pubkey.point, u2);
  if (p.isInfinity()) {
    return 'p is infinity';
  }

  if (p.getX().umod(n).cmp(r) !== 0) {
    return 'Invalid signature';
  }

  return; // no error
};


/**
 * Verify a signature
 * @param {Buffer} hashbuf
 * @param {Signature} sig
 * @param {PublicKey} pubkey
 * @param {Object|undefined} opts An object of optional parameters
 * @param {String} opts.endian 'big' or 'little' (default: big)
 * @returns {Boolean}
 */
const verify = function(hashbuf, sig, pubkey, opts) {
  if (!pubkey) {
    throw new Error('pubkey required for signature verification');
  }
  pubkey = new PublicKey(pubkey);
  
  if (!sig) {
    throw new Error('signature required for verification');
  }
  sig = new Signature(sig);

  return !verificationError(hashbuf, sig, pubkey, opts);
};

module.exports = {
  sign,
  verify,
  verificationError,
 
  // pubkey recovery methods
  calci,
  recoverPublicKey,
};

module.exports.__testing__ = {
  getDeterministicK,
  getPublicKey,
  getRandomK,
  toLowS,
};



/***/ }),

/***/ 66617:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2543);

function format(message, args) {
  return message
    .replace('{0}', args[0])
    .replace('{1}', args[1])
    .replace('{2}', args[2]);
}
var traverseNode = function(parent, errorDefinition) {
  var NodeError = function() {
    if (_.isString(errorDefinition.message)) {
      this.message = format(errorDefinition.message, arguments);
    } else if (_.isFunction(errorDefinition.message)) {
      this.message = errorDefinition.message.apply(null, arguments);
    } else {
      throw new Error('Invalid error definition for ' + errorDefinition.name);
    }
    this.stack = this.message + '\n' + (new Error()).stack;
  };
  NodeError.prototype = Object.create(parent.prototype);
  NodeError.prototype.name = parent.prototype.name + errorDefinition.name;
  parent[errorDefinition.name] = NodeError;
  if (errorDefinition.errors) {
    childDefinitions(NodeError, errorDefinition.errors);
  }
  return NodeError;
};

/* jshint latedef: false */
var childDefinitions = function(parent, childDefinitions) {
  _.each(childDefinitions, function(childDefinition) {
    traverseNode(parent, childDefinition);
  });
};
/* jshint latedef: true */

var traverseRoot = function(parent, errorsDefinition) {
  childDefinitions(parent, errorsDefinition);
  return parent;
};


var bitcore = {};
bitcore.Error = function() {
  this.message = 'Internal error';
  this.stack = this.message + '\n' + (new Error()).stack;
};
bitcore.Error.prototype = Object.create(Error.prototype);
bitcore.Error.prototype.name = 'bitcore.Error';


var data = __webpack_require__(15558);
traverseRoot(bitcore.Error, data);

module.exports = bitcore.Error;

module.exports.extend = function(spec) {
  return traverseNode(bitcore.Error, spec);
};


/***/ }),

/***/ 68237:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var $ = __webpack_require__(6213);
const errors = __webpack_require__(66617);
var BufferWriter = __webpack_require__(54878);
var buffer = __webpack_require__(48287);
var BufferUtil = __webpack_require__(56142);
var JSUtil = __webpack_require__(44371);
var Script = __webpack_require__(91093);
var Sighash = __webpack_require__(99039);
var Output = __webpack_require__(42109);

var MAXINT = 0xffffffff; // Math.pow(2, 32) - 1;
var DEFAULT_SEQNUMBER = MAXINT;
var DEFAULT_LOCKTIME_SEQNUMBER = MAXINT - 1;
var DEFAULT_RBF_SEQNUMBER = MAXINT - 2;
const SEQUENCE_LOCKTIME_DISABLE_FLAG =  Math.pow(2,31); // (1 << 31);
const SEQUENCE_LOCKTIME_TYPE_FLAG = Math.pow(2,22); // (1 << 22);
const SEQUENCE_LOCKTIME_MASK = 0xffff;
const SEQUENCE_LOCKTIME_GRANULARITY = 512; // 512 seconds
const SEQUENCE_BLOCKDIFF_LIMIT = Math.pow(2,16)-1; // 16 bits 


function Input(params) {
  if (!(this instanceof Input)) {
    return new Input(params);
  }
  if (params) {
    return this._fromObject(params);
  }
}

Input.MAXINT = MAXINT;
Input.DEFAULT_SEQNUMBER = DEFAULT_SEQNUMBER;
Input.DEFAULT_LOCKTIME_SEQNUMBER = DEFAULT_LOCKTIME_SEQNUMBER;
Input.DEFAULT_RBF_SEQNUMBER = DEFAULT_RBF_SEQNUMBER;
Input.SEQUENCE_LOCKTIME_TYPE_FLAG = SEQUENCE_LOCKTIME_TYPE_FLAG;

Object.defineProperty(Input.prototype, 'script', {
  configurable: false,
  enumerable: true,
  get: function() {
    if (this.isNull()) {
      return null;
    }
    if (!this._script) {
      this._script = new Script(this._scriptBuffer);
      this._script._isInput = true;
    }
    return this._script;
  }
});

Input.fromObject = function(obj) {
  $.checkArgument(_.isObject(obj));
  var input = new Input();
  return input._fromObject(obj);
};

Input.prototype._fromObject = function(params) {
  var prevTxId;
  if (typeof params.prevTxId === 'string' && JSUtil.isHexa(params.prevTxId)) {
    prevTxId = Buffer.from(params.prevTxId, 'hex');
  } else {
    prevTxId = params.prevTxId;
  }
  this.witnesses = [];
  this.output = params.output ?
    (params.output instanceof Output ? params.output : new Output(params.output)) : undefined;
  this.prevTxId = prevTxId || params.txidbuf;
  this.outputIndex = params.outputIndex == null ? params.txoutnum : params.outputIndex;
  this.sequenceNumber = params.sequenceNumber == null ?
    (params.seqnum == null ? DEFAULT_SEQNUMBER : params.seqnum) : params.sequenceNumber;
  // null script is allowed in setScript()
  if (params.script === undefined && params.scriptBuffer === undefined) {
    throw new errors.Transaction.Input.MissingScript();
  }
  this.setScript(params.scriptBuffer || params.script);
  return this;
};

Input.prototype.toObject = Input.prototype.toJSON = function toObject() {
  var obj = {
    prevTxId: this.prevTxId.toString('hex'),
    outputIndex: this.outputIndex,
    sequenceNumber: this.sequenceNumber,
    script: this._scriptBuffer.toString('hex'),
  };
  // add human readable form if input contains valid script
  if (this.script) {
    obj.scriptString = this.script.toString();
  }
  if (this.output) {
    obj.output = this.output.toObject();
  }
  return obj;
};

Input.fromBufferReader = function(br) {
  var input = new Input();
  input.prevTxId = br.readReverse(32);
  input.outputIndex = br.readUInt32LE();
  input._scriptBuffer = br.readVarLengthBuffer();
  input.sequenceNumber = br.readUInt32LE();
  // TODO: return different classes according to which input it is
  // e.g: CoinbaseInput, PublicKeyHashInput, MultiSigScriptHashInput, etc.
  return input;
};

Input.prototype.toBufferWriter = function(writer) {
  if (!writer) {
    writer = new BufferWriter();
  }
  writer.writeReverse(this.prevTxId);
  writer.writeUInt32LE(this.outputIndex);
  var script = this._scriptBuffer;
  writer.writeVarintNum(script.length);
  writer.write(script);
  writer.writeUInt32LE(this.sequenceNumber);
  return writer;
};

Input.prototype.setScript = function(script) {
  this._script = null;
  if (script instanceof Script) {
    this._script = script;
    this._script._isInput = true;
    this._scriptBuffer = script.toBuffer();
  } else if (JSUtil.isHexa(script)) {
    // hex string script
    this._scriptBuffer = Buffer.from(script, 'hex');
  } else if (_.isString(script)) {
    // human readable string script
    this._script = new Script(script);
    this._script._isInput = true;
    this._scriptBuffer = this._script.toBuffer();
  } else if (BufferUtil.isBuffer(script)) {
    // buffer script
    this._scriptBuffer = Buffer.from(script);
  } else {
    throw new TypeError('Invalid argument type: script');
  }
  return this;
};

/**
 * Retrieve signatures for the provided PrivateKey.
 *
 * @param {Transaction} transaction - the transaction to be signed
 * @param {PrivateKey} privateKey - the private key to use when signing
 * @param {number} inputIndex - the index of this input in the provided transaction
 * @param {number} sigType - defaults to Signature.SIGHASH_ALL
 * @param {Buffer} addressHash - if provided, don't calculate the hash of the
 *     public key associated with the private key provided
 * @abstract
 */
Input.prototype.getSignatures = function() {
  throw new errors.AbstractMethodInvoked(
    'Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported)' +
    ' for input: ' + JSON.stringify(this)
  );
};

Input.prototype.getSatoshisBuffer = function() {
  $.checkState(this.output instanceof Output);
  $.checkState(this.output._satoshisBN);
  return new BufferWriter().writeUInt64LEBN(this.output._satoshisBN).toBuffer();
};


Input.prototype.isFullySigned = function() {
  throw new errors.AbstractMethodInvoked('Input#isFullySigned');
};

Input.prototype.isFinal = function() {
  return this.sequenceNumber !== Input.MAXINT;
};

Input.prototype.addSignature = function() {
  throw new errors.AbstractMethodInvoked('Input#addSignature');
};

Input.prototype.clearSignatures = function() {
  throw new errors.AbstractMethodInvoked('Input#clearSignatures');
};

Input.prototype.hasWitnesses = function() {
  if (this.witnesses && this.witnesses.length > 0) {
    return true;
  }
  return false;
};

Input.prototype.getWitnesses = function() {
  return this.witnesses;
};

Input.prototype.setWitnesses = function(witnesses) {
  this.witnesses = witnesses;
};

Input.prototype.isValidSignature = function(transaction, signature, signingMethod) {
  signingMethod = signingMethod || 'ecdsa'; // unused. Keeping for consistency with other libs
  // FIXME: Refactor signature so this is not necessary
  signature.signature.nhashtype = signature.sigtype;
  return Sighash.verify(
    transaction,
    signature.signature,
    signature.publicKey,
    signature.inputIndex,
    this.output.script
  );
};

/**
 * @returns true if this is a coinbase input (represents no input)
 */
Input.prototype.isNull = function() {
  return this.prevTxId.toString('hex') === '0000000000000000000000000000000000000000000000000000000000000000' &&
    this.outputIndex === 0xffffffff;
};

Input.prototype._estimateSize = function() {
  return this.toBufferWriter().toBuffer().length;
};

Input.prototype._getBaseSize = function() {
  return 32 + 4 + 4; // outpoint (32 + 4) + sequence (4)
};


/**
 * Sets sequence number so that transaction is not valid until the desired seconds
 *  since the transaction is mined
 *
 * @param {Number} time in seconds
 * @return {Transaction} this
 */
Input.prototype.lockForSeconds = function(seconds) {
  $.checkArgument(_.isNumber(seconds));
  if (seconds < 0 ||  seconds >= SEQUENCE_LOCKTIME_GRANULARITY * SEQUENCE_LOCKTIME_MASK) {
    throw new errors.Transaction.Input.LockTimeRange();
  }
  seconds = parseInt(Math.floor(seconds / SEQUENCE_LOCKTIME_GRANULARITY));

  // SEQUENCE_LOCKTIME_DISABLE_FLAG = 1 
  this.sequenceNumber = seconds | SEQUENCE_LOCKTIME_TYPE_FLAG ;
  return this;
};

/**
 * Sets sequence number so that transaction is not valid until the desired block height differnece since the tx is mined
 *
 * @param {Number} height
 * @return {Transaction} this
 */
Input.prototype.lockUntilBlockHeight = function(heightDiff) {
  $.checkArgument(_.isNumber(heightDiff));
  if (heightDiff < 0 || heightDiff >= SEQUENCE_BLOCKDIFF_LIMIT) {
    throw new errors.Transaction.Input.BlockHeightOutOfRange();
  }
  // SEQUENCE_LOCKTIME_TYPE_FLAG = 0
  // SEQUENCE_LOCKTIME_DISABLE_FLAG = 0
  this.sequenceNumber = heightDiff ;
  return this;
};


/**
 *  Returns a semantic version of the input's sequence nLockTime.
 *  @return {Number|Date}
 *  If sequence lock is disabled  it returns null,
 *  if is set to block height lock, returns a block height (number)
 *  else it returns a Date object.
 */
Input.prototype.getLockTime = function() {
  if (this.sequenceNumber & SEQUENCE_LOCKTIME_DISABLE_FLAG) {
    return null;
  }

  if (this.sequenceNumber & SEQUENCE_LOCKTIME_TYPE_FLAG) {
    var seconds = SEQUENCE_LOCKTIME_GRANULARITY * (this.sequenceNumber & SEQUENCE_LOCKTIME_MASK);
    return seconds;
  } else {
    var blockHeight = this.sequenceNumber & SEQUENCE_LOCKTIME_MASK;
    return blockHeight;
  }
};




module.exports = Input;


/***/ }),

/***/ 69118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var $ = __webpack_require__(6213);
var BufferUtil = __webpack_require__(56142);
var BN = __webpack_require__(62731);

var BufferReader = function BufferReader(buf) {
  if (!(this instanceof BufferReader)) {
    return new BufferReader(buf);
  }
  if (_.isUndefined(buf)) {
    return;
  }
  if (Buffer.isBuffer(buf)) {
    this.set({
      buf: buf
    });
  } else if (_.isString(buf)) {
    this.set({
      buf: Buffer.from(buf, 'hex'),
    });
  } else if (_.isObject(buf)) {
    var obj = buf;
    this.set(obj);
  } else {
    throw new TypeError('Unrecognized argument for BufferReader');
  }
};

BufferReader.prototype.set = function(obj) {
  this.buf = obj.buf || this.buf || undefined;
  this.pos = obj.pos || this.pos || 0;
  return this;
};

BufferReader.prototype.eof = function() {
  if(this.buf) {
    return this.pos >= this.buf.length;
  } else {
    return true;
  }
};

BufferReader.prototype.finished = BufferReader.prototype.eof;

BufferReader.prototype.read = function(len) {
  $.checkArgument(!_.isUndefined(len), 'Must specify a length');
  var buf = this.buf.slice(this.pos, this.pos + len);
  this.pos = this.pos + len;
  return buf;
};

BufferReader.prototype.readAll = function() {
  var buf = this.buf.slice(this.pos, this.buf.length);
  this.pos = this.buf.length;
  return buf;
};

BufferReader.prototype.readUInt8 = function() {
  var val = this.buf.readUInt8(this.pos);
  this.pos = this.pos + 1;
  return val;
};

BufferReader.prototype.readUInt16BE = function() {
  var val = this.buf.readUInt16BE(this.pos);
  this.pos = this.pos + 2;
  return val;
};

BufferReader.prototype.readUInt16LE = function() {
  var val = this.buf.readUInt16LE(this.pos);
  this.pos = this.pos + 2;
  return val;
};

BufferReader.prototype.readUInt32BE = function() {
  var val = this.buf.readUInt32BE(this.pos);
  this.pos = this.pos + 4;
  return val;
};

BufferReader.prototype.readUInt32LE = function() {
  var val = this.buf.readUInt32LE(this.pos);
  this.pos = this.pos + 4;
  return val;
};

BufferReader.prototype.readInt32LE = function() {
  var val = this.buf.readInt32LE(this.pos);
  this.pos = this.pos + 4;
  return val;
};

BufferReader.prototype.readUInt64BEBN = function() {
  var buf = this.buf.slice(this.pos, this.pos + 8);
  var bn = BN.fromBuffer(buf);
  this.pos = this.pos + 8;
  return bn;
};

BufferReader.prototype.readUInt64LEBN = function() {
  var second = this.buf.readUInt32LE(this.pos);
  var first = this.buf.readUInt32LE(this.pos + 4);
  var combined = (first * 0x100000000) + second;
  // Instantiating an instance of BN with a number is faster than with an
  // array or string. However, the maximum safe number for a double precision
  // floating point is 2 ^ 52 - 1 (0x1fffffffffffff), thus we can safely use
  // non-floating point numbers less than this amount (52 bits). And in the case
  // that the number is larger, we can instatiate an instance of BN by passing
  // an array from the buffer (slower) and specifying the endianness.
  var bn;
  if (combined <= 0x1fffffffffffff) {
    bn = new BN(combined);
  } else {
    var data = Array.prototype.slice.call(this.buf, this.pos, this.pos + 8);
    bn = new BN(data, 10, 'le');
  }
  this.pos = this.pos + 8;
  return bn;
};

BufferReader.prototype.readVarintNum = function() {
  var first = this.readUInt8();
  switch (first) {
    case 0xFD:
      return this.readUInt16LE();
    case 0xFE:
      return this.readUInt32LE();
    case 0xFF:
      var bn = this.readUInt64LEBN();
      var n = bn.toNumber();
      if (n <= Math.pow(2, 53)) {
        return n;
      } else {
        throw new Error('number too large to retain precision - use readVarintBN');
      }
      break;
    default:
      return first;
  }
};

/**
 * reads a length prepended buffer
 */
BufferReader.prototype.readVarLengthBuffer = function() {
  var len = this.readVarintNum();
  var buf = this.read(len);
  $.checkState(buf.length === len, 'Invalid length while reading varlength buffer. ' +
    'Expected to read: ' + len + ' and read ' + buf.length);
  return buf;
};

BufferReader.prototype.readVarintBuf = function() {
  var first = this.buf.readUInt8(this.pos);
  switch (first) {
    case 0xFD:
      return this.read(1 + 2);
    case 0xFE:
      return this.read(1 + 4);
    case 0xFF:
      return this.read(1 + 8);
    default:
      return this.read(1);
  }
};

BufferReader.prototype.readVarintBN = function() {
  var first = this.readUInt8();
  switch (first) {
    case 0xFD:
      return new BN(this.readUInt16LE());
    case 0xFE:
      return new BN(this.readUInt32LE());
    case 0xFF:
      return this.readUInt64LEBN();
    default:
      return new BN(first);
  }
};

BufferReader.prototype.reverse = function() {
  var buf = Buffer.alloc(this.buf.length);
  for (var i = 0; i < buf.length; i++) {
    buf[i] = this.buf[this.buf.length - 1 - i];
  }
  this.buf = buf;
  return this;
};

BufferReader.prototype.readReverse = function(len) {
  if (_.isUndefined(len)) {
    len = this.buf.length;
  }
  var buf = this.buf.slice(this.pos, this.pos + len);
  this.pos = this.pos + len;
  return BufferUtil.reverse(buf);
};

module.exports = BufferReader;


/***/ }),

/***/ 69807:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


const _ = __webpack_require__(2543);

const Script = __webpack_require__(70566);
const Opcode = __webpack_require__(93519);
const BN = __webpack_require__(62731);
const Hash = __webpack_require__(44499);
const Signature = __webpack_require__(23825);
const PublicKey = __webpack_require__(969);
const $ = __webpack_require__(6213);
const SighashWitness = __webpack_require__(39368);
const SighashSchnorr = __webpack_require__(86850);
const BufferWriter = __webpack_require__(54878);
const TaggedHash = __webpack_require__(56743);

/**
 * Bitcoin transactions contain scripts. Each input has a script called the
 * scriptSig, and each output has a script called the scriptPubkey. To validate
 * an input, the input's script is concatenated with the referenced output script,
 * and the result is executed. If at the end of execution the stack contains a
 * "true" value, then the transaction is valid.
 *
 * The primary way to use this class is via the verify function.
 * e.g., Interpreter().verify( ... );
 */
var Interpreter = function Interpreter(obj) {
  if (!(this instanceof Interpreter)) {
    return new Interpreter(obj);
  }
  if (obj) {
    this.initialize();
    this.set(obj);
  } else {
    this.initialize();
  }
};


Interpreter.prototype.verifyWitnessProgram = function(version, program, witness, satoshis, flags, isP2SH) {

  var scriptPubKey = new Script();
  var stack = [];

  if (version === 0) {
    if (program.length === Interpreter.WITNESS_V0_SCRIPTHASH_SIZE) {
      if (witness.length === 0) {
        this.errstr = 'SCRIPT_ERR_WITNESS_PROGRAM_WITNESS_EMPTY';
        return false;
      }

      var scriptPubKeyBuffer = witness[witness.length - 1];
      scriptPubKey = new Script(scriptPubKeyBuffer);
      var hash = Hash.sha256(scriptPubKeyBuffer);
      if (hash.toString('hex') !== program.toString('hex')) {
        this.errstr = 'SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH';
        return false;
      }

      stack = witness.slice(0, -1);
      return this.executeWitnessScript(scriptPubKey, stack, Signature.Version.WITNESS_V0, satoshis, flags);
    } else if (program.length === Interpreter.WITNESS_V0_KEYHASH_SIZE) {
      if (witness.length !== 2) {
        this.errstr = 'SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH';
        return false;
      }

      scriptPubKey.add(Opcode.OP_DUP);
      scriptPubKey.add(Opcode.OP_HASH160);
      scriptPubKey.add(program);
      scriptPubKey.add(Opcode.OP_EQUALVERIFY);
      scriptPubKey.add(Opcode.OP_CHECKSIG);

      stack = witness;
      return this.executeWitnessScript(scriptPubKey, stack, Signature.Version.WITNESS_V0, satoshis, flags);
    } else {
      this.errstr = 'SCRIPT_ERR_WITNESS_PROGRAM_WRONG_LENGTH';
      return false;
    }
  } else if (version === 1 && program.length == Interpreter.WITNESS_V1_TAPROOT_SIZE && !isP2SH) {
    const execdata = { annexPresent: false };
    // BIP341 Taproot: 32-byte non-P2SH witness v1 program (which encodes a P2C-tweaked pubkey)
    if (!(flags & Interpreter.SCRIPT_VERIFY_TAPROOT)) {
      return true;
    }
    stack = Array.from(witness);
    if (stack.length == 0) {
      this.errstr = 'SCRIPT_ERR_WITNESS_PROGRAM_WITNESS_EMPTY';
      return false;
    }
    if (stack.length >= 2 && stack[stack.length - 1].length && stack[stack.length - 1][0] === Script.ANNEX_TAG) {
      // Drop annex (this is non-standard; see IsWitnessStandard)
      const annex = stack.pop();
      const annexWriter = new BufferWriter();
      annexWriter.writeVarintNum(annex.length);
      annexWriter.write(annex);
      execdata.annexHash = Hash.sha256(annexWriter.toBuffer());
      execdata.annexPresent = true;
    }
    execdata.annexInit = true;
    if (stack.length === 1) {
      // Key path spending (stack size is 1 after removing optional annex)
      return this.checkSchnorrSignature(stack[0], program, Signature.Version.TAPROOT, execdata);
    } else {
      // Script path spending (stack size is >1 after removing optional annex)
      const control = stack.pop();
      const scriptPubKeyBuf = stack.pop();

      if (
        control.length < Interpreter.TAPROOT_CONTROL_BASE_SIZE  ||
        control.length > Interpreter.TAPROOT_CONTROL_MAX_SIZE   ||
        ((control.length - Interpreter.TAPROOT_CONTROL_BASE_SIZE) % Interpreter.TAPROOT_CONTROL_NODE_SIZE) != 0
      ) {
        this.errstr = 'SCRIPT_ERR_TAPROOT_WRONG_CONTROL_SIZE';
        return false;
      }
      execdata.tapleafHash = Interpreter.computeTapleafHash(control[0] & Interpreter.TAPROOT_LEAF_MASK, scriptPubKeyBuf);
      if (!Interpreter.verifyTaprootCommitment(control, program, execdata.tapleafHash)) {
        this.errstr = 'SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH';
        return false;
      }
      execdata.tapleafHashInit = true;
      if ((control[0] & Interpreter.TAPROOT_LEAF_MASK) === Interpreter.TAPROOT_LEAF_TAPSCRIPT) {
        // Tapscript (leaf version 0xc0)
        let witnessSize;
        {
          const bw = new BufferWriter();
          bw.writeVarintNum(witness.length);
          for (let element of witness) {
            bw.writeVarintNum(element.length);
            bw.write(element);
          }
          witnessSize = bw.toBuffer().length;
        }

        try {
          scriptPubKey = new Script(scriptPubKeyBuf);
        } catch (err) {
          // Note how this condition would not be reached if an unknown OP_SUCCESSx was found
          this.errstr = 'SCRIPT_ERR_BAD_OPCODE';
          return false;
        }

        execdata.validationWeightLeft = witnessSize + Script.VALIDATION_WEIGHT_OFFSET;
        execdata.validationWeightLeftInit = true;
        return this.executeWitnessScript(scriptPubKey, stack, Signature.Version.TAPSCRIPT, satoshis, flags, execdata);
      }
      // If none of the above conditions are met then this must be an upgraded taproot version.
      if (flags & Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_TAPROOT_VERSION) {
        this.errstr = 'SCRIPT_ERR_DISCOURAGE_UPGRADABLE_TAPROOT_VERSION';
        return false;
      }
      // Future softfork compatibility
      return true;
    }
  } else if ((flags & Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM)) {
    this.errstr = 'SCRIPT_ERR_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM';
    return false;
  }
  // Other version/size/p2sh combinations return true for future softfork compatibility
  return true;
};


Interpreter.prototype.executeWitnessScript = function(scriptPubKey, stack, sigversion, satoshis, flags, execdata) {
  if (sigversion === Signature.Version.TAPSCRIPT) {
    for (let chunk of scriptPubKey.chunks) {
      // New opcodes will be listed here. May use a different sigversion to modify existing opcodes.
      if (Opcode.isOpSuccess(chunk.opcodenum)) {
        if (flags & Interpreter.SCRIPT_VERIFY_DISCOURAGE_OP_SUCCESS) {
          this.errstr = 'SCRIPT_ERR_DISCOURAGE_OP_SUCCESS';
          return false;
        }
        return true;
      }
    }

    // Tapscript enforces initial stack size limits (altstack is empty here)
    if (stack.length > Interpreter.MAX_STACK_SIZE) {
      this.errstr = 'SCRIPT_ERR_STACK_SIZE';
      return false;
    }
  }

  // Disallow stack item size > MAX_SCRIPT_ELEMENT_SIZE in witness stack
  if (stack.length && stack.some(elem => elem.length > Interpreter.MAX_SCRIPT_ELEMENT_SIZE)) {
    this.errstr = 'SCRIPT_ERR_PUSH_SIZE';
    return false;
  }

  this.initialize();

  this.set({
    script: scriptPubKey,
    stack: stack,
    sigversion: sigversion,
    satoshis: satoshis,
    flags: flags,
    execdata: execdata
  });

  if (!this.evaluate()) {
    return false;
  }

  if (this.stack.length !== 1) {
    this.errstr = 'SCRIPT_ERR_EVAL_FALSE';
    return false;
  }

  var buf = this.stack[this.stack.length - 1];
  if (!Interpreter.castToBool(buf)) {
    this.errstr = 'SCRIPT_ERR_EVAL_FALSE_IN_STACK';
    return false;
  }

  return true;
};



/**
 * Verifies a Script by executing it and returns true if it is valid.
 * This function needs to be provided with the scriptSig and the scriptPubkey
 * separately.
 * @param {Script} scriptSig - the script's first part (corresponding to the tx input)
 * @param {Script} scriptPubkey - the script's last part (corresponding to the tx output)
 * @param {Transaction=} tx - the Transaction containing the scriptSig in one input (used
 *    to check signature validity for some opcodes like OP_CHECKSIG)
 * @param {number} nin - index of the transaction input containing the scriptSig verified.
 * @param {number} flags - evaluation flags. See Interpreter.SCRIPT_* constants
 * @param {number} witness - array of witness data
 * @param {number} satoshis - number of satoshis created by this output
 *
 * Translated from bitcoind's VerifyScript
 */
Interpreter.prototype.verify = function(scriptSig, scriptPubkey, tx, nin, flags, witness, satoshis) {

  var Transaction = __webpack_require__(48758);
  if (_.isUndefined(tx)) {
    tx = new Transaction();
  }
  if (_.isUndefined(nin)) {
    nin = 0;
  }
  if (_.isUndefined(flags)) {
    flags = 0;
  }
  if (_.isUndefined(witness)) {
    witness = null;
  }
  if (_.isUndefined(satoshis)) {
    satoshis = 0;
  }

  this.set({
    script: scriptSig,
    tx: tx,
    nin: nin,
    sigversion: Signature.Version.BASE,
    satoshis: 0,
    flags: flags
  });
  var stackCopy;

  if ((flags & Interpreter.SCRIPT_VERIFY_SIGPUSHONLY) !== 0 && !scriptSig.isPushOnly()) {
    this.errstr = 'SCRIPT_ERR_SIG_PUSHONLY';
    return false;
  }

  // evaluate scriptSig
  if (!this.evaluate()) {
    return false;
  }

  if (flags & Interpreter.SCRIPT_VERIFY_P2SH) {
    stackCopy = this.stack.slice();
  }

  var stack = this.stack;
  this.initialize();
  this.set({
    script: scriptPubkey,
    stack: stack,
    tx: tx,
    nin: nin,
    flags: flags
  });

  // evaluate scriptPubkey
  if (!this.evaluate()) {
    return false;
  }

  if (this.stack.length === 0) {
    this.errstr = 'SCRIPT_ERR_EVAL_FALSE_NO_RESULT';
    return false;
  }

  var buf = this.stack[this.stack.length - 1];
  if (!Interpreter.castToBool(buf)) {
    this.errstr = 'SCRIPT_ERR_EVAL_FALSE_IN_STACK';
    return false;
  }

  var hadWitness = false;
  if ((flags & Interpreter.SCRIPT_VERIFY_WITNESS)) {
    var witnessValues = {};
    if (scriptPubkey.isWitnessProgram(witnessValues)) {
      hadWitness = true;
      if (scriptSig.toBuffer().length !== 0) {
        this.errstr = 'SCRIPT_ERR_WITNESS_MALLEATED';
        return false;
      }
      if (!this.verifyWitnessProgram(witnessValues.version, witnessValues.program, witness, satoshis, this.flags, /* isP2SH */ false)) {
        return false;
      }
    }
  }

  // Additional validation for spend-to-script-hash transactions:
  if ((flags & Interpreter.SCRIPT_VERIFY_P2SH) && scriptPubkey.isScriptHashOut()) {
    // scriptSig must be literals-only or validation fails
    if (!scriptSig.isPushOnly()) {
      this.errstr = 'SCRIPT_ERR_SIG_PUSHONLY';
      return false;
    }

    // stackCopy cannot be empty here, because if it was the
    // P2SH  HASH <> EQUAL  scriptPubKey would be evaluated with
    // an empty stack and the EvalScript above would return false.
    if (stackCopy.length === 0) {
      throw new Error('internal error - stack copy empty');
    }

    var redeemScriptSerialized = stackCopy[stackCopy.length - 1];
    var redeemScript = Script.fromBuffer(redeemScriptSerialized);
    stackCopy.pop();

    this.initialize();
    this.set({
      script: redeemScript,
      stack: stackCopy,
      tx: tx,
      nin: nin,
      flags: flags
    });

    // evaluate redeemScript
    if (!this.evaluate()) {
      return false;
    }

    if (stackCopy.length === 0) {
      this.errstr = 'SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK';
      return false;
    }

    if (!Interpreter.castToBool(stackCopy[stackCopy.length - 1])) {
      this.errstr = 'SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK';
      return false;
    }
    if ((flags & Interpreter.SCRIPT_VERIFY_WITNESS)) {
      var p2shWitnessValues = {};
      if (redeemScript.isWitnessProgram(p2shWitnessValues)) {
        hadWitness = true;
        var redeemScriptPush = new Script();
        redeemScriptPush.add(redeemScript.toBuffer());
        if (scriptSig.toHex() !== redeemScriptPush.toHex()) {
          this.errstr = 'SCRIPT_ERR_WITNESS_MALLEATED_P2SH';
          return false;
        }

        if (!this.verifyWitnessProgram(p2shWitnessValues.version, p2shWitnessValues.program, witness, satoshis, this.flags, /* isP2SH */ true)) {
          return false;
        }
        // Bypass the cleanstack check at the end. The actual stack is obviously not clean
        // for witness programs.
        stack = [stack[0]];
      }
    }
  }

  // The CLEANSTACK check is only performed after potential P2SH evaluation,
  // as the non-P2SH evaluation of a P2SH script will obviously not result in
  // a clean stack (the P2SH inputs remain). The same holds for witness
  // evaluation.
  if ((this.flags & Interpreter.SCRIPT_VERIFY_CLEANSTACK) != 0) {
      // Disallow CLEANSTACK without P2SH, as otherwise a switch
      // CLEANSTACK->P2SH+CLEANSTACK would be possible, which is not a
      // softfork (and P2SH should be one).
      if (
        (this.flags & Interpreter.SCRIPT_VERIFY_P2SH)    == 0 ||
        (this.flags & Interpreter.SCRIPT_VERIFY_WITNESS) == 0
      ) {
        throw 'flags & SCRIPT_VERIFY_P2SH';
      }

      if (stackCopy.length != 1) {
        this.errstr = 'SCRIPT_ERR_CLEANSTACK';
        return false;
      }
  }

  if ((this.flags & Interpreter.SCRIPT_VERIFY_WITNESS)) {
    if (!hadWitness && witness.length > 0) {
      this.errstr = 'SCRIPT_ERR_WITNESS_UNEXPECTED';
      return false;
    }
  }

  return true;
};

module.exports = Interpreter;

Interpreter.prototype.initialize = function(obj) {
  this.stack = [];
  this.altstack = [];
  this.pc = 0;
  this.satoshis = 0;
  this.sigversion = Signature.Version.BASE;
  this.pbegincodehash = 0;
  this.nOpCount = 0;
  this.vfExec = [];
  this.errstr = '';
  this.flags = 0;
  this.execdata = {};
};

Interpreter.prototype.set = function(obj) {
  this.script = obj.script || this.script;
  this.tx = obj.tx || this.tx;
  this.nin = typeof obj.nin === 'undefined' ? this.nin : parseInt(obj.nin);
  this.stack = obj.stack || this.stack;
  this.altstack = obj.altstack || this.altstack;
  this.pc = typeof obj.pc === 'undefined' ? this.pc : obj.pc;
  this.pbegincodehash = typeof obj.pbegincodehash === 'undefined' ? this.pbegincodehash : obj.pbegincodehash;
  this.sigversion = typeof obj.sigversion === 'undefined' ? this.sigversion : obj.sigversion;
  this.satoshis = typeof obj.satoshis === 'undefined' ? this.satoshis : obj.satoshis;
  this.nOpCount = typeof obj.nOpCount === 'undefined' ? this.nOpCount : obj.nOpCount;
  this.vfExec = obj.vfExec || this.vfExec;
  this.errstr = obj.errstr || this.errstr;
  this.flags = typeof obj.flags === 'undefined' ? this.flags : obj.flags;
  this.execdata = typeof obj.execdata === 'undefined' ? this.execdata : (obj.execdata || {});
};

Interpreter.true = Buffer.from([1]);
Interpreter.false = Buffer.from([]);

Interpreter.MAX_SCRIPT_SIZE = 10000;
Interpreter.MAX_STACK_SIZE = 1000;
Interpreter.MAX_SCRIPT_ELEMENT_SIZE = 520;

Interpreter.LOCKTIME_THRESHOLD = 500000000;
Interpreter.LOCKTIME_THRESHOLD_BN = new BN(Interpreter.LOCKTIME_THRESHOLD);

// flags taken from bitcoind
// bitcoind commit: b5d1b1092998bc95313856d535c632ea5a8f9104
Interpreter.SCRIPT_VERIFY_NONE = 0;

// Evaluate P2SH subscripts (softfork safe, BIP16).
Interpreter.SCRIPT_VERIFY_P2SH = (1 << 0);

// Passing a non-strict-DER signature or one with undefined hashtype to a checksig operation causes script failure.
// Passing a pubkey that is not (0x04 + 64 bytes) or (0x02 or 0x03 + 32 bytes) to checksig causes that pubkey to be
// skipped (not softfork safe: this flag can widen the validity of OP_CHECKSIG OP_NOT).
Interpreter.SCRIPT_VERIFY_STRICTENC = (1 << 1);

// Passing a non-strict-DER signature to a checksig operation causes script failure (softfork safe, BIP62 rule 1)
Interpreter.SCRIPT_VERIFY_DERSIG = (1 << 2);

// Passing a non-strict-DER signature or one with S > order/2 to a checksig operation causes script failure
// (softfork safe, BIP62 rule 5).
Interpreter.SCRIPT_VERIFY_LOW_S = (1 << 3);

// verify dummy stack item consumed by CHECKMULTISIG is of zero-length (softfork safe, BIP62 rule 7).
Interpreter.SCRIPT_VERIFY_NULLDUMMY = (1 << 4);

// Using a non-push operator in the scriptSig causes script failure (softfork safe, BIP62 rule 2).
Interpreter.SCRIPT_VERIFY_SIGPUSHONLY = (1 << 5);

// Require minimal encodings for all push operations (OP_0... OP_16, OP_1NEGATE where possible, direct
// pushes up to 75 bytes, OP_PUSHDATA up to 255 bytes, OP_PUSHDATA2 for anything larger). Evaluating
// any other push causes the script to fail (BIP62 rule 3).
// In addition, whenever a stack element is interpreted as a number, it must be of minimal length (BIP62 rule 4).
// (softfork safe)
Interpreter.SCRIPT_VERIFY_MINIMALDATA = (1 << 6);

// Discourage use of NOPs reserved for upgrades (NOP1-10)
//
// Provided so that nodes can avoid accepting or mining transactions
// containing executed NOP's whose meaning may change after a soft-fork,
// thus rendering the script invalid; with this flag set executing
// discouraged NOPs fails the script. This verification flag will never be
// a mandatory flag applied to scripts in a block. NOPs that are not
// executed, e.g.  within an unexecuted IF ENDIF block, are *not* rejected.
Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = (1 << 7);


// Require that only a single stack element remains after evaluation. This
// changes the success criterion from "At least one stack element must
// remain, and when interpreted as a boolean, it must be true" to "Exactly
// one stack element must remain, and when interpreted as a boolean, it must
// be true".
// (softfork safe, BIP62 rule 6)
// Note: CLEANSTACK should never be used without P2SH or WITNESS.
Interpreter.SCRIPT_VERIFY_CLEANSTACK = (1 << 8),

// Verify CHECKLOCKTIMEVERIFY
//
// See BIP65 for details.
Interpreter.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = (1 << 9);

// support CHECKSEQUENCEVERIFY opcode
//
// See BIP112 for details
Interpreter.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY = (1 << 10);

// Support segregated witness
//
Interpreter.SCRIPT_VERIFY_WITNESS = (1 << 11);

// Making v1-v16 witness program non-standard
//
Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM = (1 << 12);


//
// Segwit script only: Require the argument of OP_IF/NOTIF to be exactly
// 0x01 or empty vector
//
Interpreter.SCRIPT_VERIFY_MINIMALIF = (1 << 13);


// Signature(s) must be empty vector if an CHECK(MULTI)SIG operation failed
//
Interpreter.SCRIPT_VERIFY_NULLFAIL = (1 << 14);

// Public keys in scripts must be compressed
//
Interpreter.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE = (1 << 15);

// Do we accept signature using SIGHASH_FORKID
//
Interpreter.SCRIPT_ENABLE_SIGHASH_FORKID = (1 << 16);

// Do we accept activate replay protection using a different fork id.
//
Interpreter.SCRIPT_ENABLE_REPLAY_PROTECTION = (1 << 17);

// Making OP_CODESEPARATOR and FindAndDelete fail any non-segwit scripts
//
Interpreter.SCRIPT_VERIFY_CONST_SCRIPTCODE = (1 << 16);

// Verify taproot script
//
Interpreter.SCRIPT_VERIFY_TAPROOT = (1 << 17);

// Making unknown Taproot leaf versions non-standard
//
Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_TAPROOT_VERSION = (1 << 18);

// Making unknown OP_SUCCESS non-standard
Interpreter.SCRIPT_VERIFY_DISCOURAGE_OP_SUCCESS = (1 << 19);

// Making unknown public key versions (in BIP 342 scripts) non-standard
Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_PUBKEYTYPE = (1 << 20);



/* Below flags apply in the context of BIP 68*/
/**
 * If this flag set, CTxIn::nSequence is NOT interpreted as a relative
 * lock-time.
 */
Interpreter.SEQUENCE_LOCKTIME_DISABLE_FLAG = (1 << 31);

/**
 * If CTxIn::nSequence encodes a relative lock-time and this flag is set,
 * the relative lock-time has units of 512 seconds, otherwise it specifies
 * blocks with a granularity of 1.
 */
Interpreter.SEQUENCE_LOCKTIME_TYPE_FLAG = (1 << 22);

/**
 * If CTxIn::nSequence encodes a relative lock-time, this mask is applied to
 * extract that lock-time from the sequence field.
 */
Interpreter.SEQUENCE_LOCKTIME_MASK = 0x0000ffff;

/** Signature hash sizes */
Interpreter.WITNESS_V0_SCRIPTHASH_SIZE = 32;
Interpreter.WITNESS_V0_KEYHASH_SIZE = 20;
Interpreter.WITNESS_V1_TAPROOT_SIZE = 32;

Interpreter.TAPROOT_LEAF_MASK = 0xfe;
Interpreter.TAPROOT_LEAF_TAPSCRIPT = 0xc0;
Interpreter.TAPROOT_CONTROL_BASE_SIZE = 33;
Interpreter.TAPROOT_CONTROL_NODE_SIZE = 32;
Interpreter.TAPROOT_CONTROL_MAX_NODE_COUNT = 128;
Interpreter.TAPROOT_CONTROL_MAX_SIZE = Interpreter.TAPROOT_CONTROL_BASE_SIZE + Interpreter.TAPROOT_CONTROL_NODE_SIZE * Interpreter.TAPROOT_CONTROL_MAX_NODE_COUNT;

// Conceptually, this doesn't really belong with the Interpreter, but I haven't found a better place for it.
Interpreter.PROTOCOL_VERSION = 70016;

Interpreter.castToBool = function(buf) {
  for (var i = 0; i < buf.length; i++) {
    if (buf[i] !== 0) {
      // can be negative zero
      if (i === buf.length - 1 && buf[i] === 0x80) {
        return false;
      }
      return true;
    }
  }
  return false;
};

/**
 * Translated from bitcoind's CheckSignatureEncoding
 */
Interpreter.prototype.checkSignatureEncoding = function(buf) {
  var sig;

    // Empty signature. Not strictly DER encoded, but allowed to provide a
    // compact way to provide an invalid signature for use with CHECK(MULTI)SIG
    if (buf.length == 0) {
        return true;
    }

  if ((this.flags & (Interpreter.SCRIPT_VERIFY_DERSIG | Interpreter.SCRIPT_VERIFY_LOW_S | Interpreter.SCRIPT_VERIFY_STRICTENC)) !== 0 && !Signature.isTxDER(buf)) {
    this.errstr = 'SCRIPT_ERR_SIG_DER_INVALID_FORMAT';
    return false;
  } else if ((this.flags & Interpreter.SCRIPT_VERIFY_LOW_S) !== 0) {
    sig = Signature.fromTxFormat(buf);
    if (!sig.hasLowS()) {
      this.errstr = 'SCRIPT_ERR_SIG_DER_HIGH_S';
      return false;
    }
  } else if ((this.flags & Interpreter.SCRIPT_VERIFY_STRICTENC) !== 0) {
    sig = Signature.fromTxFormat(buf);
    if (!sig.hasDefinedHashtype()) {
      this.errstr = 'SCRIPT_ERR_SIG_HASHTYPE';
      return false;
    }
  }

  return true;
};

/**
 * Translated from bitcoind's CheckPubKeyEncoding
 */
Interpreter.prototype.checkPubkeyEncoding = function(buf) {
  if ((this.flags & Interpreter.SCRIPT_VERIFY_STRICTENC) !== 0 && !PublicKey.isValid(buf)) {
    this.errstr = 'SCRIPT_ERR_PUBKEYTYPE';
    return false;
  }

  // Only compressed keys are accepted in segwit
  if ((this.flags & Interpreter.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE) != 0 && this.sigversion == Signature.Version.WITNESS_V0 && !PublicKey.fromBuffer(buf).compressed) {
    this.errstr = 'SCRIPT_ERR_WITNESS_PUBKEYTYPE';
    return false;
  }

  return true;
};


/**
 * Verifies ECDSA signature
 * @param {Signature} sig
 * @param {PublicKey} pubkey
 * @param {Number} nin
 * @param {Script} subscript
 * @param {Number} satoshis
 * @returns {Boolean}
 */
Interpreter.prototype.checkEcdsaSignature = function(sig, pubkey, nin, subscript, satoshis) {
  var subscriptBuffer = subscript.toBuffer();
  var scriptCodeWriter = new BufferWriter();
  scriptCodeWriter.writeVarintNum(subscriptBuffer.length);
  scriptCodeWriter.write(subscriptBuffer);

  $.checkState(JSUtil.isNaturalNumber(satoshis));
  var satoshisBuffer = new BufferWriter().writeUInt64LEBN(new BN(satoshis)).toBuffer();

  var verified = SighashWitness.verify(
    this,
    sig,
    pubkey,
    nin,
    scriptCodeWriter.toBuffer(),
    satoshisBuffer
  );
  return verified;
};


/**
 * Verifies Schnorr signature
 * @param {Signature|Buffer} sig
 * @param {PublicKey|Buffer} pubkey
 * @param {Number} sigversion
 * @param {Object} execdata
 * @returns {Boolean}
 */
Interpreter.prototype.checkSchnorrSignature = function(sig, pubkey, sigversion, execdata) {
  $.checkArgument(sig && Buffer.isBuffer(sig), 'Missing sig');
  $.checkArgument(pubkey && Buffer.isBuffer(pubkey), 'Missing pubkey');
  $.checkArgument(sigversion, 'Missing sigversion');
  $.checkArgument(execdata, 'Missing execdata');

  $.checkArgument(pubkey.length === 32, 'Schnorr signatures have 32-byte public keys. The caller is responsible for enforcing this.');
  // Note that in Tapscript evaluation, empty signatures are treated specially (invalid signature that does not
  // abort script execution). This is implemented in EvalChecksigTapscript, which won't invoke
  // CheckSchnorrSignature in that case. In other contexts, they are invalid like every other signature with
  // size different from 64 or 65.
  if (!(sig.length === 64 || sig.length === 65)) {
    this.errstr = 'SCRIPT_ERR_SCHNORR_SIG_SIZE';
    return false;
  }

  if (sig.length === 65 && sig[sig.length - 1] === Signature.SIGHASH_DEFAULT) {
    this.errstr = 'SCRIPT_ERR_SCHNORR_SIG_HASHTYPE';
    return false;
  }
  sig = Signature.fromSchnorr(sig);
  const verified = SighashSchnorr.verify(
    this.tx,
    sig,
    pubkey,
    sigversion,
    this.nin,
    execdata
  );
  return verified;
};


/**
 * Based on bitcoind's EvalChecksigPreTapscript function
 * bitcoind commit: a0988140b71485ad12c3c3a4a9573f7c21b1eff8
 */
Interpreter.prototype._evalChecksigPreTapscript = function(bufSig, bufPubkey) {
  $.checkArgument(
    this.sigversion === Signature.Version.BASE || this.sigversion === Signature.Version.WITNESS_V0,
    'sigversion must be base or witness_v0'
  );

  // Success signifies if the signature is valid.
  // Result signifies the result of this funciton, which also takes flags into account.
  const retVal = { success: false, result: false };

  const subscript = new Script().set({
    chunks: this.script.chunks.slice(this.pbegincodehash)
  });

  // Drop the signature in pre-segwit scripts but not segwit scripts
  if (this.sigversion === Signature.Version.BASE) {
    // Drop the signature, since there's no way for a signature to sign itself
    const tmpScript = new Script().add(bufSig);
    let found = subscript.chunks.length;
    subscript.findAndDelete(tmpScript);

    found = found == subscript.chunks.length + 1; // found if a chunk was removed
    if (found && (this.flags & Interpreter.SCRIPT_VERIFY_CONST_SCRIPTCODE)) {
      this.errstr = 'SCRIPT_ERR_SIG_FINDANDDELETE';
      return retVal;
    }
  }

  if (!this.checkSignatureEncoding(bufSig) || !this.checkPubkeyEncoding(bufPubkey)) {
    return retVal;
  }

  try {
    const sig = Signature.fromTxFormat(bufSig);
    const pubkey = PublicKey.fromBuffer(bufPubkey, false);
    retVal.success = this.tx.verifySignature(sig, pubkey, this.nin, subscript, this.sigversion, this.satoshis);
  } catch (e) {
    //invalid sig or pubkey
    retVal.success = false;
  }

  if (!retVal.success && (this.flags & Interpreter.SCRIPT_VERIFY_NULLFAIL) && bufSig.length) {
    this.errstr = 'SCRIPT_ERR_SIG_NULLFAIL';
    return retVal;
  }

  // If it reaches here, then true
  retVal.result = true;
  return retVal;
};


/**
 * Based on bitcoind's EvalChecksigTapscript function
 * bitcoind commit: a0988140b71485ad12c3c3a4a9573f7c21b1eff8
 */
Interpreter.prototype._evalChecksigTapscript = function(bufSig, bufPubkey) {
  $.checkArgument(this.sigversion == Signature.Version.TAPSCRIPT, 'this.sigversion must by TAPSCRIPT');

  /*
    *  The following validation sequence is consensus critical. Please note how --
    *    upgradable public key versions precede other rules;
    *    the script execution fails when using empty signature with invalid public key;
    *    the script execution fails when using non-empty invalid signature.
    */

  // Success signifies if the signature is valid.
  // Result signifies the result of this funciton, which also takes flags into account.
  const retVal = {
    success: bufSig.length > 0,
    result: false
  }
  if (retVal.success) {
    // Implement the sigops/witnesssize ratio test.
    // Passing with an upgradable public key version is also counted.
    $.checkState(this.execdata.validationWeightLeftInit, 'validationWeightLeftInit is false');
    this.execdata.validationWeightLeft -= Script.VALIDATION_WEIGHT_PER_SIGOP_PASSED;
    if (this.execdata.validationWeightLeft < 0) {
      this.errstr = 'SCRIPT_ERR_TAPSCRIPT_VALIDATION_WEIGHT';
      return retVal;
    }
  }
  if (bufPubkey.length === 0) {
    this.errstr = 'SCRIPT_ERR_PUBKEYTYPE';
    return retVal;
  } else if (bufPubkey.length == 32) {
    if (retVal.success && !this.tx.checkSchnorrSignature(bufSig, bufPubkey, this.nin, this.sigversion, this.execdata)) {
      this.errstr = 'SCRIPT_ERR_SCHNORR_SIG';
      return retVal;
    }
  } else {
    /*
      *  New public key version softforks should be defined before this `else` block.
      *  Generally, the new code should not do anything but failing the script execution. To avoid
      *  consensus bugs, it should not modify any existing values (including `success`).
      */
    if ((this.flags & Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_PUBKEYTYPE) != 0) {
      this.errstr = 'SCRIPT_ERR_DISCOURAGE_UPGRADABLE_PUBKEYTYPE';
      return retVal;
    }
  }

  // If it reaches here, then true
  retVal.result = true;
  return retVal;
}

/**
 * Based on bitcoind's EvalChecksig function
 * bitcoind commit: a0988140b71485ad12c3c3a4a9573f7c21b1eff8
 * @returns {{ success: Boolean, verified: Boolean }}
 */
Interpreter.prototype._evalCheckSig = function(bufSig, bufPubkey) {
  switch(this.sigversion) {
    case Signature.Version.BASE:
    case Signature.Version.WITNESS_V0:
      // const verified = this._evalChecksigPreTapscript(bufSig, bufPubkey);
      // return { success: verified, verified }; // This is to keep the same return format as _evalCheckSigTapscript
      return this._evalChecksigPreTapscript(bufSig, bufPubkey);
    case Signature.Version.TAPSCRIPT:
      return this._evalChecksigTapscript(bufSig, bufPubkey);
    case Signature.Version.TAPROOT:
      // Key path spending in Taproot has no script, so this is unreachable.
      throw new Error('Called evalCheckSig with a TAPROOT sigversion. Check your implementation');
  }
};

/**
 * Based on bitcoind's EvalScript function, with the inner loop moved to
 * Interpreter.prototype.step()
 * bitcoind commit: b5d1b1092998bc95313856d535c632ea5a8f9104
 */
Interpreter.prototype.evaluate = function() {
  // sigversion cannot be TAPROOT here, as it admits no script execution.
  $.checkArgument(this.sigversion == Signature.Version.BASE || this.sigversion == Signature.Version.WITNESS_V0 || this.sigversion == Signature.Version.TAPSCRIPT, 'invalid sigversion');

  if (
    (this.sigversion == Signature.Version.BASE || this.sigversion == Signature.Version.WITNESS_V0) &&
    this.script.toBuffer().length > Interpreter.MAX_SCRIPT_SIZE
  ) {
    this.errstr = 'SCRIPT_ERR_SCRIPT_SIZE';
    return false;
  }

  try {
    while (this.pc < this.script.chunks.length) {
      var fSuccess = this.step();
      if (!fSuccess) {
        return false;
      }
    }
  } catch (e) {
    this.errstr = 'SCRIPT_ERR_UNKNOWN_ERROR: ' + e;
    return false;
  }

  if (this.vfExec.length > 0) {
    this.errstr = 'SCRIPT_ERR_UNBALANCED_CONDITIONAL';
    return false;
  }

  return true;
};

/**
 * Checks a locktime parameter with the transaction's locktime.
 * There are two times of nLockTime: lock-by-blockheight and lock-by-blocktime,
 * distinguished by whether nLockTime < LOCKTIME_THRESHOLD = 500000000
 *
 * See the corresponding code on bitcoin core:
 * https://github.com/bitcoin/bitcoin/blob/ffd75adce01a78b3461b3ff05bcc2b530a9ce994/src/script/interpreter.cpp#L1129
 *
 * @param {BN} nLockTime the locktime read from the script
 * @return {boolean} true if the transaction's locktime is less than or equal to
 *                   the transaction's locktime
 */
Interpreter.prototype.checkLockTime = function(nLockTime) {

  // We want to compare apples to apples, so fail the script
  // unless the type of nLockTime being tested is the same as
  // the nLockTime in the transaction.
  if (!(
    (this.tx.nLockTime <  Interpreter.LOCKTIME_THRESHOLD && nLockTime.lt(Interpreter.LOCKTIME_THRESHOLD_BN)) ||
    (this.tx.nLockTime >= Interpreter.LOCKTIME_THRESHOLD && nLockTime.gte(Interpreter.LOCKTIME_THRESHOLD_BN))
  )) {
    return false;
  }

  // Now that we know we're comparing apples-to-apples, the
  // comparison is a simple numeric one.
  if (nLockTime.gt(new BN(this.tx.nLockTime))) {
    return false;
  }

  // Finally the nLockTime feature can be disabled and thus
  // CHECKLOCKTIMEVERIFY bypassed if every txin has been
  // finalized by setting nSequence to maxint. The
  // transaction would be allowed into the blockchain, making
  // the opcode ineffective.
  //
  // Testing if this vin is not final is sufficient to
  // prevent this condition. Alternatively we could test all
  // inputs, but testing just this input minimizes the data
  // required to prove correct CHECKLOCKTIMEVERIFY execution.
  if (!this.tx.inputs[this.nin].isFinal()) {
    return false;
  }

  return true;
}


/**
 * Checks a sequence parameter with the transaction's sequence.
 * @param {BN} nSequence the sequence read from the script
 * @return {boolean} true if the transaction's sequence is less than or equal to
 *                   the transaction's sequence
 */
Interpreter.prototype.checkSequence = function(nSequence) {

  // Relative lock times are supported by comparing the passed in operand to
  // the sequence number of the input.
  var txToSequence = this.tx.inputs[this.nin].sequenceNumber;

  // Fail if the transaction's version number is not set high enough to
  // trigger BIP 68 rules.
  if (this.tx.version < 2) {
    return false;
  }

  // Sequence numbers with their most significant bit set are not consensus
  // constrained. Testing that the transaction's sequence number do not have
  // this bit set prevents using this property to get around a
  // CHECKSEQUENCEVERIFY check.
  if (txToSequence & Interpreter.SEQUENCE_LOCKTIME_DISABLE_FLAG) {
    return false;
  }

  // Mask off any bits that do not have consensus-enforced meaning before
  // doing the integer comparisons
  var nLockTimeMask =
      Interpreter.SEQUENCE_LOCKTIME_TYPE_FLAG | Interpreter.SEQUENCE_LOCKTIME_MASK;
  var txToSequenceMasked = new BN(txToSequence & nLockTimeMask);
  var nSequenceMasked = nSequence.and(new BN(nLockTimeMask));

  // There are two kinds of nSequence: lock-by-blockheight and
  // lock-by-blocktime, distinguished by whether nSequenceMasked <
  // CTxIn::SEQUENCE_LOCKTIME_TYPE_FLAG.
  //
  // We want to compare apples to apples, so fail the script unless the type
  // of nSequenceMasked being tested is the same as the nSequenceMasked in the
  // transaction.
  var SEQUENCE_LOCKTIME_TYPE_FLAG_BN = new BN(Interpreter.SEQUENCE_LOCKTIME_TYPE_FLAG);

  if (!((txToSequenceMasked.lt(SEQUENCE_LOCKTIME_TYPE_FLAG_BN)  &&
          nSequenceMasked.lt(SEQUENCE_LOCKTIME_TYPE_FLAG_BN)) ||
        (txToSequenceMasked.gte(SEQUENCE_LOCKTIME_TYPE_FLAG_BN) &&
          nSequenceMasked.gte(SEQUENCE_LOCKTIME_TYPE_FLAG_BN)))) {
    return false;
  }

  // Now that we know we're comparing apples-to-apples, the comparison is a
  // simple numeric one.
  return nSequenceMasked.lte(txToSequenceMasked)
}


Interpreter.computeTapleafHash = function(leafVersion, scriptBuf) {
  const tagWriter = TaggedHash.TAPLEAF;
  tagWriter.writeUInt8(leafVersion);
  tagWriter.writeVarintNum(scriptBuf.length);
  tagWriter.write(scriptBuf);
  return tagWriter.finalize();
};


Interpreter.computeTaprootMerkleRoot = function(control, tapleafHash) {
  const pathLen = (control.length - Interpreter.TAPROOT_CONTROL_BASE_SIZE) / Interpreter.TAPROOT_CONTROL_NODE_SIZE;
  let k = tapleafHash;
  for (let i = 0; i < pathLen; ++i) {
    const tagWriter = TaggedHash.TAPBRANCH;
    const start = Interpreter.TAPROOT_CONTROL_BASE_SIZE + Interpreter.TAPROOT_CONTROL_NODE_SIZE * i;
    const node = control.slice(start, start + Interpreter.TAPROOT_CONTROL_NODE_SIZE);
    if (Buffer.compare(k, node) === -1) {
      tagWriter.write(k);
      tagWriter.write(node);
    } else {
      tagWriter.write(node);
      tagWriter.write(k);
    }
    k = tagWriter.finalize();
  }
  return k;
};


Interpreter.verifyTaprootCommitment = function(control, program, tapleafHash) {
  $.checkArgument(control.length >= Interpreter.TAPROOT_CONTROL_BASE_SIZE, 'control too short');
  $.checkArgument(program.length >= 32, 'program is too short');

  try {
    //! The internal pubkey (x-only, so no Y coordinate parity).
    const p = PublicKey.fromX(false, control.slice(1, Interpreter.TAPROOT_CONTROL_BASE_SIZE));
    //! The output pubkey (taken from the scriptPubKey).
    const q = PublicKey.fromX(false, program);
    // Compute the Merkle root from the leaf and the provided path.
    const merkleRoot = Interpreter.computeTaprootMerkleRoot(control, tapleafHash);
    // Verify that the output pubkey matches the tweaked internal pubkey, after correcting for parity.
    return q.checkTapTweak(p, merkleRoot, control);
  } catch (err) {
    return false;
  }
};


/**
 * Based on the inner loop of bitcoind's EvalScript function
 * bitcoind commit: b5d1b1092998bc95313856d535c632ea5a8f9104
 */
Interpreter.prototype.step = function() {
  var fRequireMinimal = (this.flags & Interpreter.SCRIPT_VERIFY_MINIMALDATA) !== 0;

  //bool fExec = !count(vfExec.begin(), vfExec.end(), false);
  var fExec = (this.vfExec.indexOf(false) === -1);
  var buf, buf1, buf2, spliced, n, x1, x2, bn, bn1, bn2, bufSig, bufPubkey, subscript;
  var sig, pubkey;
  var fValue, fSuccess;
  this.execdata = this.execdata || {};
  if (!this.execdata.codeseparatorPosInit) {
    this.execdata.codeseparatorPos = new BN(0xFFFFFFFF);
    this.execdata.codeseparatorPosInit = true;
  }

  // Read instruction
  var chunk = this.script.chunks[this.pc];
  this.pc++;
  var opcodenum = chunk.opcodenum;
  if (_.isUndefined(opcodenum)) {
    this.errstr = 'SCRIPT_ERR_UNDEFINED_OPCODE';
    return false;
  }
  if (chunk.buf && chunk.buf.length > Interpreter.MAX_SCRIPT_ELEMENT_SIZE) {
    this.errstr = 'SCRIPT_ERR_PUSH_SIZE';
    return false;
  }

  if (this.sigversion === Signature.Version.BASE || this.sigversion === Signature.Version.WITNESS_V0) {
    // Note how Opcode.OP_RESERVED does not count towards the opcode limit.
    if (opcodenum > Opcode.OP_16 && ++(this.nOpCount) > 201) {
      this.errstr = 'SCRIPT_ERR_OP_COUNT';
      return false;
    }
  }


  if (opcodenum === Opcode.OP_CAT ||
    opcodenum === Opcode.OP_SUBSTR ||
    opcodenum === Opcode.OP_LEFT ||
    opcodenum === Opcode.OP_RIGHT ||
    opcodenum === Opcode.OP_INVERT ||
    opcodenum === Opcode.OP_AND ||
    opcodenum === Opcode.OP_OR ||
    opcodenum === Opcode.OP_XOR ||
    opcodenum === Opcode.OP_2MUL ||
    opcodenum === Opcode.OP_2DIV ||
    opcodenum === Opcode.OP_MUL ||
    opcodenum === Opcode.OP_DIV ||
    opcodenum === Opcode.OP_MOD ||
    opcodenum === Opcode.OP_LSHIFT ||
    opcodenum === Opcode.OP_RSHIFT) {
    this.errstr = 'SCRIPT_ERR_DISABLED_OPCODE';
    return false;
  }

  // With SCRIPT_VERIFY_CONST_SCRIPTCODE, OP_CODESEPARATOR in non-segwit script is rejected even in an unexecuted branch
  if (opcodenum == Opcode.OP_CODESEPARATOR && this.sigversion === Signature.Version.BASE && (this.flags & Interpreter.SCRIPT_VERIFY_CONST_SCRIPTCODE)) {
    this.errstr = 'SCRIPT_ERR_OP_CODESEPARATOR';
    return false;
  }

  if (fExec && 0 <= opcodenum && opcodenum <= Opcode.OP_PUSHDATA4) {
    if (fRequireMinimal && !this.script.checkMinimalPush(this.pc - 1)) {
      this.errstr = 'SCRIPT_ERR_MINIMALDATA';
      return false;
    }
    if (!chunk.buf) {
      this.stack.push(Interpreter.false);
    } else if (chunk.len !== chunk.buf.length) {
      throw new Error('Length of push value not equal to length of data');
    } else {
      this.stack.push(chunk.buf);
    }
  } else if (fExec || (Opcode.OP_IF <= opcodenum && opcodenum <= Opcode.OP_ENDIF)) {
    switch (opcodenum) {
      // Push value
      case Opcode.OP_1NEGATE:
      case Opcode.OP_1:
      case Opcode.OP_2:
      case Opcode.OP_3:
      case Opcode.OP_4:
      case Opcode.OP_5:
      case Opcode.OP_6:
      case Opcode.OP_7:
      case Opcode.OP_8:
      case Opcode.OP_9:
      case Opcode.OP_10:
      case Opcode.OP_11:
      case Opcode.OP_12:
      case Opcode.OP_13:
      case Opcode.OP_14:
      case Opcode.OP_15:
      case Opcode.OP_16:
        {
          // ( -- value)
          // ScriptNum bn((int)opcode - (int)(Opcode.OP_1 - 1));
          n = opcodenum - (Opcode.OP_1 - 1);
          buf = new BN(n).toScriptNumBuffer();
          this.stack.push(buf);
          // The result of these opcodes should always be the minimal way to push the data
          // they push, so no need for a CheckMinimalPush here.
        }
        break;


        //
        // Control
        //
      case Opcode.OP_NOP:
        break;

      case Opcode.OP_NOP2:
      case Opcode.OP_CHECKLOCKTIMEVERIFY:

        if (!(this.flags & Interpreter.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY)) {
          // not enabled; treat as a NOP2
          if (this.flags & Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) {
            this.errstr = 'SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS';
            return false;
          }
          break;
        }

        if (this.stack.length < 1) {
          this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
          return false;
        }

        // Note that elsewhere numeric opcodes are limited to
        // operands in the range -2**31+1 to 2**31-1, however it is
        // legal for opcodes to produce results exceeding that
        // range. This limitation is implemented by CScriptNum's
        // default 4-byte limit.
        //
        // If we kept to that limit we'd have a year 2038 problem,
        // even though the nLockTime field in transactions
        // themselves is uint32 which only becomes meaningless
        // after the year 2106.
        //
        // Thus as a special case we tell CScriptNum to accept up
        // to 5-byte bignums, which are good until 2**39-1, well
        // beyond the 2**32-1 limit of the nLockTime field itself.
        var nLockTime = BN.fromScriptNumBuffer(this.stack[this.stack.length - 1], fRequireMinimal, 5);

        // In the rare event that the argument may be < 0 due to
        // some arithmetic being done first, you can always use
        // 0 MAX CHECKLOCKTIMEVERIFY.
        if (nLockTime.lt(new BN(0))) {
          this.errstr = 'SCRIPT_ERR_NEGATIVE_LOCKTIME';
          return false;
        }

        // Actually compare the specified lock time with the transaction.
        if (!this.checkLockTime(nLockTime)) {
          this.errstr = 'SCRIPT_ERR_UNSATISFIED_LOCKTIME';
          return false;
        }
        break;

      case Opcode.OP_NOP3:
      case Opcode.OP_CHECKSEQUENCEVERIFY:

        if (!(this.flags & Interpreter.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY)) {
          // not enabled; treat as a NOP3
          if (this.flags & Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) {
            this.errstr = 'SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS';
            return false;
          }
          break;
        }

        if (this.stack.length < 1) {
          this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
          return false;
        }


        // nSequence, like nLockTime, is a 32-bit unsigned
        // integer field. See the comment in CHECKLOCKTIMEVERIFY
        // regarding 5-byte numeric operands.

        var nSequence = BN.fromScriptNumBuffer(this.stack[this.stack.length - 1], fRequireMinimal, 5);


        // In the rare event that the argument may be < 0 due to
        // some arithmetic being done first, you can always use
        // 0 MAX CHECKSEQUENCEVERIFY.
        if (nSequence.lt(new BN(0))) {
          this.errstr = 'SCRIPT_ERR_NEGATIVE_LOCKTIME';
          return false;
        }

        // To provide for future soft-fork extensibility, if the
        // operand has the disabled lock-time flag set,
        // CHECKSEQUENCEVERIFY behaves as a NOP.
        if ((nSequence &
          Interpreter.SEQUENCE_LOCKTIME_DISABLE_FLAG) != 0) {
          break;
        }

        // Actually compare the specified lock time with the transaction.
        if (!this.checkSequence(nSequence)) {
          this.errstr = 'SCRIPT_ERR_UNSATISFIED_LOCKTIME';
          return false;
        }
        break;



      case Opcode.OP_NOP1:
      case Opcode.OP_NOP4:
      case Opcode.OP_NOP5:
      case Opcode.OP_NOP6:
      case Opcode.OP_NOP7:
      case Opcode.OP_NOP8:
      case Opcode.OP_NOP9:
      case Opcode.OP_NOP10:
        {
          if (this.flags & Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS) {
            this.errstr = 'SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS';
            return false;
          }
        }
        break;

      case Opcode.OP_IF:
      case Opcode.OP_NOTIF:
        {
          // <expression> if [statements] [else [statements]] endif
          // bool fValue = false;
          fValue = false;
          if (fExec) {
            if (this.stack.length < 1) {
              this.errstr = 'SCRIPT_ERR_UNBALANCED_CONDITIONAL';
              return false;
            }

            buf = this.stack[this.stack.length - 1];

            // Tapscript requires minimal IF/NOTIF inputs as a consensus rule.
            if (this.sigversion === Signature.Version.TAPSCRIPT) {
              // The input argument to the OP_IF and OP_NOTIF opcodes must be either
              // exactly 0 (the empty vector) or exactly 1 (the one-byte vector with value 1).
              if (buf.length > 1 || (buf.length === 1 && buf[0] !== 1)) {
                this.errstr = 'SCRIPT_ERR_TAPSCRIPT_MINIMALIF';
                return false;
              }
            }
            // Under witness v0 rules it is only a policy rule, enabled through SCRIPT_VERIFY_MINIMALIF.
            if (this.sigversion === Signature.Version.WITNESS_V0 && (this.flags & Interpreter.SCRIPT_VERIFY_MINIMALIF)) {
              buf = this.stack[this.stack.length - 1];
              if (buf.length > 1) {
                this.errstr = 'SCRIPT_ERR_MINIMALIF';
                return false;
              }
              if (buf.length == 1 && buf[0]!=1) {
                this.errstr = 'SCRIPT_ERR_MINIMALIF';
                return false;
              }
            }
            fValue = Interpreter.castToBool(buf);
            if (opcodenum === Opcode.OP_NOTIF) {
              fValue = !fValue;
            }
            this.stack.pop();
          }
          this.vfExec.push(fValue);
        }
        break;

      case Opcode.OP_ELSE:
        {
          if (this.vfExec.length === 0) {
            this.errstr = 'SCRIPT_ERR_UNBALANCED_CONDITIONAL';
            return false;
          }
          this.vfExec[this.vfExec.length - 1] = !this.vfExec[this.vfExec.length - 1];
        }
        break;

      case Opcode.OP_ENDIF:
        {
          if (this.vfExec.length === 0) {
            this.errstr = 'SCRIPT_ERR_UNBALANCED_CONDITIONAL';
            return false;
          }
          this.vfExec.pop();
        }
        break;

      case Opcode.OP_VERIFY:
        {
          // (true -- ) or
          // (false -- false) and return
          if (this.stack.length < 1) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          buf = this.stack[this.stack.length - 1];
          fValue = Interpreter.castToBool(buf);
          if (fValue) {
            this.stack.pop();
          } else {
            this.errstr = 'SCRIPT_ERR_VERIFY';
            return false;
          }
        }
        break;

      case Opcode.OP_RETURN:
        {
          this.errstr = 'SCRIPT_ERR_OP_RETURN';
          return false;
        }
        break;


        //
        // Stack ops
        //
      case Opcode.OP_TOALTSTACK:
        {
          if (this.stack.length < 1) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          this.altstack.push(this.stack.pop());
        }
        break;

      case Opcode.OP_FROMALTSTACK:
        {
          if (this.altstack.length < 1) {
            this.errstr = 'SCRIPT_ERR_INVALID_ALTSTACK_OPERATION';
            return false;
          }
          this.stack.push(this.altstack.pop());
        }
        break;

      case Opcode.OP_2DROP:
        {
          // (x1 x2 -- )
          if (this.stack.length < 2) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          this.stack.pop();
          this.stack.pop();
        }
        break;

      case Opcode.OP_2DUP:
        {
          // (x1 x2 -- x1 x2 x1 x2)
          if (this.stack.length < 2) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          buf1 = this.stack[this.stack.length - 2];
          buf2 = this.stack[this.stack.length - 1];
          this.stack.push(buf1);
          this.stack.push(buf2);
        }
        break;

      case Opcode.OP_3DUP:
        {
          // (x1 x2 x3 -- x1 x2 x3 x1 x2 x3)
          if (this.stack.length < 3) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          buf1 = this.stack[this.stack.length - 3];
          buf2 = this.stack[this.stack.length - 2];
          var buf3 = this.stack[this.stack.length - 1];
          this.stack.push(buf1);
          this.stack.push(buf2);
          this.stack.push(buf3);
        }
        break;

      case Opcode.OP_2OVER:
        {
          // (x1 x2 x3 x4 -- x1 x2 x3 x4 x1 x2)
          if (this.stack.length < 4) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          buf1 = this.stack[this.stack.length - 4];
          buf2 = this.stack[this.stack.length - 3];
          this.stack.push(buf1);
          this.stack.push(buf2);
        }
        break;

      case Opcode.OP_2ROT:
        {
          // (x1 x2 x3 x4 x5 x6 -- x3 x4 x5 x6 x1 x2)
          if (this.stack.length < 6) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          spliced = this.stack.splice(this.stack.length - 6, 2);
          this.stack.push(spliced[0]);
          this.stack.push(spliced[1]);
        }
        break;

      case Opcode.OP_2SWAP:
        {
          // (x1 x2 x3 x4 -- x3 x4 x1 x2)
          if (this.stack.length < 4) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          spliced = this.stack.splice(this.stack.length - 4, 2);
          this.stack.push(spliced[0]);
          this.stack.push(spliced[1]);
        }
        break;

      case Opcode.OP_IFDUP:
        {
          // (x - 0 | x x)
          if (this.stack.length < 1) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          buf = this.stack[this.stack.length - 1];
          fValue = Interpreter.castToBool(buf);
          if (fValue) {
            this.stack.push(buf);
          }
        }
        break;

      case Opcode.OP_DEPTH:
        {
          // -- stacksize
          buf = new BN(this.stack.length).toScriptNumBuffer();
          this.stack.push(buf);
        }
        break;

      case Opcode.OP_DROP:
        {
          // (x -- )
          if (this.stack.length < 1) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          this.stack.pop();
        }
        break;

      case Opcode.OP_DUP:
        {
          // (x -- x x)
          if (this.stack.length < 1) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          this.stack.push(this.stack[this.stack.length - 1]);
        }
        break;

      case Opcode.OP_NIP:
        {
          // (x1 x2 -- x2)
          if (this.stack.length < 2) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          this.stack.splice(this.stack.length - 2, 1);
        }
        break;

      case Opcode.OP_OVER:
        {
          // (x1 x2 -- x1 x2 x1)
          if (this.stack.length < 2) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          this.stack.push(this.stack[this.stack.length - 2]);
        }
        break;

      case Opcode.OP_PICK:
      case Opcode.OP_ROLL:
        {
          // (xn ... x2 x1 x0 n - xn ... x2 x1 x0 xn)
          // (xn ... x2 x1 x0 n - ... x2 x1 x0 xn)
          if (this.stack.length < 2) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          buf = this.stack[this.stack.length - 1];
          bn = BN.fromScriptNumBuffer(buf, fRequireMinimal);
          n = bn.toNumber();
          this.stack.pop();
          if (n < 0 || n >= this.stack.length) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          buf = this.stack[this.stack.length - n - 1];
          if (opcodenum === Opcode.OP_ROLL) {
            this.stack.splice(this.stack.length - n - 1, 1);
          }
          this.stack.push(buf);
        }
        break;

      case Opcode.OP_ROT:
        {
          // (x1 x2 x3 -- x2 x3 x1)
          //  x2 x1 x3  after first swap
          //  x2 x3 x1  after second swap
          if (this.stack.length < 3) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          x1 = this.stack[this.stack.length - 3];
          x2 = this.stack[this.stack.length - 2];
          var x3 = this.stack[this.stack.length - 1];
          this.stack[this.stack.length - 3] = x2;
          this.stack[this.stack.length - 2] = x3;
          this.stack[this.stack.length - 1] = x1;
        }
        break;

      case Opcode.OP_SWAP:
        {
          // (x1 x2 -- x2 x1)
          if (this.stack.length < 2) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          x1 = this.stack[this.stack.length - 2];
          x2 = this.stack[this.stack.length - 1];
          this.stack[this.stack.length - 2] = x2;
          this.stack[this.stack.length - 1] = x1;
        }
        break;

      case Opcode.OP_TUCK:
        {
          // (x1 x2 -- x2 x1 x2)
          if (this.stack.length < 2) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          this.stack.splice(this.stack.length - 2, 0, this.stack[this.stack.length - 1]);
        }
        break;


      case Opcode.OP_SIZE:
        {
          // (in -- in size)
          if (this.stack.length < 1) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          bn = new BN(this.stack[this.stack.length - 1].length);
          this.stack.push(bn.toScriptNumBuffer());
        }
        break;


        //
        // Bitwise logic
        //
      case Opcode.OP_EQUAL:
      case Opcode.OP_EQUALVERIFY:
        //case Opcode.OP_NOTEQUAL: // use Opcode.OP_NUMNOTEQUAL
        {
          // (x1 x2 - bool)
          if (this.stack.length < 2) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          buf1 = this.stack[this.stack.length - 2];
          buf2 = this.stack[this.stack.length - 1];
          var fEqual = buf1.toString('hex') === buf2.toString('hex');
          this.stack.pop();
          this.stack.pop();
          this.stack.push(fEqual ? Interpreter.true : Interpreter.false);
          if (opcodenum === Opcode.OP_EQUALVERIFY) {
            if (fEqual) {
              this.stack.pop();
            } else {
              this.errstr = 'SCRIPT_ERR_EQUALVERIFY';
              return false;
            }
          }
        }
        break;


        //
        // Numeric
        //
      case Opcode.OP_1ADD:
      case Opcode.OP_1SUB:
      case Opcode.OP_NEGATE:
      case Opcode.OP_ABS:
      case Opcode.OP_NOT:
      case Opcode.OP_0NOTEQUAL:
        {
          // (in -- out)
          if (this.stack.length < 1) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          buf = this.stack[this.stack.length - 1];
          bn = BN.fromScriptNumBuffer(buf, fRequireMinimal);
          switch (opcodenum) {
            case Opcode.OP_1ADD:
              bn = bn.add(BN.One);
              break;
            case Opcode.OP_1SUB:
              bn = bn.sub(BN.One);
              break;
            case Opcode.OP_NEGATE:
              bn = bn.neg();
              break;
            case Opcode.OP_ABS:
              if (bn.cmp(BN.Zero) < 0) {
                bn = bn.neg();
              }
              break;
            case Opcode.OP_NOT:
              bn = new BN((bn.cmp(BN.Zero) === 0) + 0);
              break;
            case Opcode.OP_0NOTEQUAL:
              bn = new BN((bn.cmp(BN.Zero) !== 0) + 0);
              break;
              //default:      assert(!'invalid opcode'); break; // TODO: does this ever occur?
          }
          this.stack.pop();
          this.stack.push(bn.toScriptNumBuffer());
        }
        break;

      case Opcode.OP_ADD:
      case Opcode.OP_SUB:
      case Opcode.OP_BOOLAND:
      case Opcode.OP_BOOLOR:
      case Opcode.OP_NUMEQUAL:
      case Opcode.OP_NUMEQUALVERIFY:
      case Opcode.OP_NUMNOTEQUAL:
      case Opcode.OP_LESSTHAN:
      case Opcode.OP_GREATERTHAN:
      case Opcode.OP_LESSTHANOREQUAL:
      case Opcode.OP_GREATERTHANOREQUAL:
      case Opcode.OP_MIN:
      case Opcode.OP_MAX:
        {
          // (x1 x2 -- out)
          if (this.stack.length < 2) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          bn1 = BN.fromScriptNumBuffer(this.stack[this.stack.length - 2], fRequireMinimal);
          bn2 = BN.fromScriptNumBuffer(this.stack[this.stack.length - 1], fRequireMinimal);
          bn = new BN(0);

          switch (opcodenum) {
            case Opcode.OP_ADD:
              bn = bn1.add(bn2);
              break;

            case Opcode.OP_SUB:
              bn = bn1.sub(bn2);
              break;

              // case Opcode.OP_BOOLAND:       bn = (bn1 != bnZero && bn2 != bnZero); break;
            case Opcode.OP_BOOLAND:
              bn = new BN(((bn1.cmp(BN.Zero) !== 0) && (bn2.cmp(BN.Zero) !== 0)) + 0);
              break;
              // case Opcode.OP_BOOLOR:        bn = (bn1 != bnZero || bn2 != bnZero); break;
            case Opcode.OP_BOOLOR:
              bn = new BN(((bn1.cmp(BN.Zero) !== 0) || (bn2.cmp(BN.Zero) !== 0)) + 0);
              break;
              // case Opcode.OP_NUMEQUAL:      bn = (bn1 == bn2); break;
            case Opcode.OP_NUMEQUAL:
              bn = new BN((bn1.cmp(bn2) === 0) + 0);
              break;
              // case Opcode.OP_NUMEQUALVERIFY:    bn = (bn1 == bn2); break;
            case Opcode.OP_NUMEQUALVERIFY:
              bn = new BN((bn1.cmp(bn2) === 0) + 0);
              break;
              // case Opcode.OP_NUMNOTEQUAL:     bn = (bn1 != bn2); break;
            case Opcode.OP_NUMNOTEQUAL:
              bn = new BN((bn1.cmp(bn2) !== 0) + 0);
              break;
              // case Opcode.OP_LESSTHAN:      bn = (bn1 < bn2); break;
            case Opcode.OP_LESSTHAN:
              bn = new BN((bn1.cmp(bn2) < 0) + 0);
              break;
              // case Opcode.OP_GREATERTHAN:     bn = (bn1 > bn2); break;
            case Opcode.OP_GREATERTHAN:
              bn = new BN((bn1.cmp(bn2) > 0) + 0);
              break;
              // case Opcode.OP_LESSTHANOREQUAL:   bn = (bn1 <= bn2); break;
            case Opcode.OP_LESSTHANOREQUAL:
              bn = new BN((bn1.cmp(bn2) <= 0) + 0);
              break;
              // case Opcode.OP_GREATERTHANOREQUAL:  bn = (bn1 >= bn2); break;
            case Opcode.OP_GREATERTHANOREQUAL:
              bn = new BN((bn1.cmp(bn2) >= 0) + 0);
              break;
            case Opcode.OP_MIN:
              bn = (bn1.cmp(bn2) < 0 ? bn1 : bn2);
              break;
            case Opcode.OP_MAX:
              bn = (bn1.cmp(bn2) > 0 ? bn1 : bn2);
              break;
              // default:           assert(!'invalid opcode'); break; //TODO: does this ever occur?
          }
          this.stack.pop();
          this.stack.pop();
          this.stack.push(bn.toScriptNumBuffer());

          if (opcodenum === Opcode.OP_NUMEQUALVERIFY) {
            // if (CastToBool(stacktop(-1)))
            if (Interpreter.castToBool(this.stack[this.stack.length - 1])) {
              this.stack.pop();
            } else {
              this.errstr = 'SCRIPT_ERR_NUMEQUALVERIFY';
              return false;
            }
          }
        }
        break;

      case Opcode.OP_WITHIN:
        {
          // (x min max -- out)
          if (this.stack.length < 3) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          bn1 = BN.fromScriptNumBuffer(this.stack[this.stack.length - 3], fRequireMinimal);
          bn2 = BN.fromScriptNumBuffer(this.stack[this.stack.length - 2], fRequireMinimal);
          var bn3 = BN.fromScriptNumBuffer(this.stack[this.stack.length - 1], fRequireMinimal);
          //bool fValue = (bn2 <= bn1 && bn1 < bn3);
          fValue = (bn2.cmp(bn1) <= 0) && (bn1.cmp(bn3) < 0);
          this.stack.pop();
          this.stack.pop();
          this.stack.pop();
          this.stack.push(fValue ? Interpreter.true : Interpreter.false);
        }
        break;


        //
        // Crypto
        //
      case Opcode.OP_RIPEMD160:
      case Opcode.OP_SHA1:
      case Opcode.OP_SHA256:
      case Opcode.OP_HASH160:
      case Opcode.OP_HASH256:
        {
          // (in -- hash)
          if (this.stack.length < 1) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          buf = this.stack[this.stack.length - 1];
          //valtype vchHash((opcode == Opcode.OP_RIPEMD160 ||
          //                 opcode == Opcode.OP_SHA1 || opcode == Opcode.OP_HASH160) ? 20 : 32);
          var bufHash;
          if (opcodenum === Opcode.OP_RIPEMD160) {
            bufHash = Hash.ripemd160(buf);
          } else if (opcodenum === Opcode.OP_SHA1) {
            bufHash = Hash.sha1(buf);
          } else if (opcodenum === Opcode.OP_SHA256) {
            bufHash = Hash.sha256(buf);
          } else if (opcodenum === Opcode.OP_HASH160) {
            bufHash = Hash.sha256ripemd160(buf);
          } else if (opcodenum === Opcode.OP_HASH256) {
            bufHash = Hash.sha256sha256(buf);
          }
          this.stack.pop();
          this.stack.push(bufHash);
        }
        break;

      case Opcode.OP_CODESEPARATOR:
        {
          // Hash starts after the code separator
          this.pbegincodehash = this.pc;
          this.execdata.codeseparatorPos = this.pc - 1;
        }
        break;

      case Opcode.OP_CHECKSIG:
      case Opcode.OP_CHECKSIGVERIFY:
        {
          // (sig pubkey -- bool)
          if (this.stack.length < 2) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }

          bufSig = this.stack[this.stack.length - 2];
          bufPubkey = this.stack[this.stack.length - 1];

          const { success: fSuccess, result } = this._evalCheckSig(bufSig, bufPubkey);
          if (!result) {
            return false;
          }

          this.stack.pop();
          this.stack.pop();

          // stack.push_back(fSuccess ? vchTrue : vchFalse);
          this.stack.push(fSuccess ? Interpreter.true : Interpreter.false);
          if (opcodenum === Opcode.OP_CHECKSIGVERIFY) {
            if (fSuccess) {
              this.stack.pop();
            } else {
              this.errstr = 'SCRIPT_ERR_CHECKSIGVERIFY';
              return false;
            }
          }
        }
        break;
      case Opcode.OP_CHECKSIGADD:
        {
          // OP_CHECKSIGADD is only available in Tapscript
          if (this.sigversion == Signature.Version.BASE || this.sigversion == Signature.Version.WITNESS_V0) {
            this.errstr = 'SCRIPT_ERR_BAD_OPCODE';
            return false;
          }

          // (sig num pubkey -- num)
          if (this.stack.length < 3) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }

          let sig = this.stack[this.stack.length - 3];
          let num = this.stack[this.stack.length - 2];
          let pubkey = this.stack[this.stack.length - 1];

          num = BN.fromScriptNumBuffer(num, fRequireMinimal);

          const { success, result } = this._evalCheckSig(sig, pubkey);
          if (!result) {
            return false;
          }

          this.stack.pop();
          this.stack.pop();
          this.stack.pop();
          this.stack.push(num.addn(success ? 1 : 0).toScriptNumBuffer());
        }
        break;
      case Opcode.OP_CHECKMULTISIG:
      case Opcode.OP_CHECKMULTISIGVERIFY:
        {
          // ([sig ...] num_of_signatures [pubkey ...] num_of_pubkeys -- bool)

          var i = 1;
          if (this.stack.length < i) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }

          var nKeysCount = BN.fromScriptNumBuffer(this.stack[this.stack.length - i], fRequireMinimal).toNumber();
          if (nKeysCount < 0 || nKeysCount > 20) {
            this.errstr = 'SCRIPT_ERR_PUBKEY_COUNT';
            return false;
          }
          this.nOpCount += nKeysCount;
          if (this.nOpCount > 201) {
            this.errstr = 'SCRIPT_ERR_OP_COUNT';
            return false;
          }
          // int ikey = ++i;
          var ikey = ++i;
          i += nKeysCount;

          // ikey2 is the position of last non-signature item in
          // the stack. Top stack item = 1. With
          // SCRIPT_VERIFY_NULLFAIL, this is used for cleanup if
          // operation fails.
          var ikey2 = nKeysCount + 2;

          if (this.stack.length < i) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }

          var nSigsCount = BN.fromScriptNumBuffer(this.stack[this.stack.length - i], fRequireMinimal).toNumber();
          if (nSigsCount < 0 || nSigsCount > nKeysCount) {
            this.errstr = 'SCRIPT_ERR_SIG_COUNT';
            return false;
          }
          // int isig = ++i;
          var isig = ++i;
          i += nSigsCount;
          if (this.stack.length < i) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }

          // Subset of script starting at the most recent codeseparator
          subscript = new Script().set({
            chunks: this.script.chunks.slice(this.pbegincodehash)
          });

          // Drop the signatures, since there's no way for a signature to sign itself
          for (var k = 0; k < nSigsCount; k++) {
            bufSig = this.stack[this.stack.length - isig - k];
            subscript.findAndDelete(new Script().add(bufSig));
          }

          fSuccess = true;
          while (fSuccess && nSigsCount > 0) {
            // valtype& vchSig  = stacktop(-isig);
            bufSig = this.stack[this.stack.length - isig];
            // valtype& vchPubKey = stacktop(-ikey);
            bufPubkey = this.stack[this.stack.length - ikey];

            if (!this.checkSignatureEncoding(bufSig) || !this.checkPubkeyEncoding(bufPubkey)) {
              return false;
            }

            var fOk;
            try {
              sig = Signature.fromTxFormat(bufSig);
              pubkey = PublicKey.fromBuffer(bufPubkey, false);
              fOk = this.tx.verifySignature(sig, pubkey, this.nin, subscript, this.sigversion, this.satoshis, this.execdata);
            } catch (e) {
              //invalid sig or pubkey
              fOk = false;
            }

            if (fOk) {
              isig++;
              nSigsCount--;
            }
            ikey++;
            nKeysCount--;

            // If there are more signatures left than keys left,
            // then too many signatures have failed
            if (nSigsCount > nKeysCount) {
              fSuccess = false;
            }
          }


          // Clean up stack of actual arguments
          while (i-- > 1) {
            if (!fSuccess && (this.flags & Interpreter.SCRIPT_VERIFY_NULLFAIL) &&
              !ikey2 && this.stack[this.stack.length - 1].length) {

              this.errstr = 'SCRIPT_ERR_NULLFAIL';
              return false;
            }

            if (ikey2 > 0) {
              ikey2--;
            }

            this.stack.pop();
          }

          // A bug causes CHECKMULTISIG to consume one extra argument
          // whose contents were not checked in any way.
          //
          // Unfortunately this is a potential source of mutability,
          // so optionally verify it is exactly equal to zero prior
          // to removing it from the stack.
          if (this.stack.length < 1) {
            this.errstr = 'SCRIPT_ERR_INVALID_STACK_OPERATION';
            return false;
          }
          if ((this.flags & Interpreter.SCRIPT_VERIFY_NULLDUMMY) && this.stack[this.stack.length - 1].length) {
            this.errstr = 'SCRIPT_ERR_SIG_NULLDUMMY';
            return false;
          }
          this.stack.pop();

          this.stack.push(fSuccess ? Interpreter.true : Interpreter.false);

          if (opcodenum === Opcode.OP_CHECKMULTISIGVERIFY) {
            if (fSuccess) {
              this.stack.pop();
            } else {
              this.errstr = 'SCRIPT_ERR_CHECKMULTISIGVERIFY';
              return false;
            }
          }
        }
        break;

      default:
        this.errstr = 'SCRIPT_ERR_BAD_OPCODE';
        return false;
    }
  }

  // Size limits
  if (this.stack.length + this.altstack.length > Interpreter.MAX_STACK_SIZE) {
    this.errstr = 'SCRIPT_ERR_STACK_SIZE';
    return false;
  }

  return true;
};



/***/ }),

/***/ 69912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var BlockHeader = __webpack_require__(36135);
var BufferUtil = __webpack_require__(56142);
var BufferReader = __webpack_require__(69118);
var BufferWriter = __webpack_require__(54878);
var Hash = __webpack_require__(44499);
var JSUtil = __webpack_require__(44371);
var Transaction = __webpack_require__(48758);
var errors = __webpack_require__(66617);
var $ = __webpack_require__(6213);

/**
 * Instantiate a MerkleBlock from a Buffer, JSON object, or Object with
 * the properties of the Block
 *
 * @param {*} - A Buffer, JSON string, or Object representing a MerkleBlock
 * @returns {MerkleBlock}
 * @constructor
 */
function MerkleBlock(arg) {
  /* jshint maxstatements: 18 */

  if (!(this instanceof MerkleBlock)) {
    return new MerkleBlock(arg);
  }

  var info = {};
  if (BufferUtil.isBuffer(arg)) {
    info = MerkleBlock._fromBufferReader(BufferReader(arg));
  } else if (_.isObject(arg)) {
    var header;
    if(arg.header instanceof BlockHeader) {
      header = arg.header;
    } else {
      header = BlockHeader.fromObject(arg.header);
    }
    info = {
      /**
       * @name MerkleBlock#header
       * @type {BlockHeader}
       */
      header: header,
      /**
       * @name MerkleBlock#numTransactions
       * @type {Number}
       */
      numTransactions: arg.numTransactions,
      /**
       * @name MerkleBlock#hashes
       * @type {String[]}
       */
      hashes: arg.hashes,
      /**
       * @name MerkleBlock#flags
       * @type {Number[]}
       */
      flags: arg.flags
    };
  } else {
    throw new TypeError('Unrecognized argument for MerkleBlock');
  }
  _.extend(this,info);
  this._flagBitsUsed = 0;
  this._hashesUsed = 0;

  return this;
}

/**
 * @param {Buffer} - MerkleBlock data in a Buffer object
 * @returns {MerkleBlock} - A MerkleBlock object
 */
MerkleBlock.fromBuffer = function fromBuffer(buf) {
  return MerkleBlock.fromBufferReader(BufferReader(buf));
};

/**
 * @param {BufferReader} - MerkleBlock data in a BufferReader object
 * @returns {MerkleBlock} - A MerkleBlock object
 */
MerkleBlock.fromBufferReader = function fromBufferReader(br) {
  return new MerkleBlock(MerkleBlock._fromBufferReader(br));
};

/**
 * @returns {Buffer} - A buffer of the block
 */
MerkleBlock.prototype.toBuffer = function toBuffer() {
  return this.toBufferWriter().concat();
};

/**
 * @param {BufferWriter} - An existing instance of BufferWriter
 * @returns {BufferWriter} - An instance of BufferWriter representation of the MerkleBlock
 */
MerkleBlock.prototype.toBufferWriter = function toBufferWriter(bw) {
  if (!bw) {
    bw = new BufferWriter();
  }
  bw.write(this.header.toBuffer());
  bw.writeUInt32LE(this.numTransactions);
  bw.writeVarintNum(this.hashes.length);
  for (var i = 0; i < this.hashes.length; i++) {
    bw.write(Buffer.from(this.hashes[i], 'hex'));
  }
  bw.writeVarintNum(this.flags.length);
  for (i = 0; i < this.flags.length; i++) {
    bw.writeUInt8(this.flags[i]);
  }
  return bw;
};

/**
 * @returns {Object} - A plain object with the MerkleBlock properties
 */
MerkleBlock.prototype.toObject = MerkleBlock.prototype.toJSON = function toObject() {
  return {
    header: this.header.toObject(),
    numTransactions: this.numTransactions,
    hashes: this.hashes,
    flags: this.flags
  };
};

/**
 * Verify that the MerkleBlock is valid
 * @returns {Boolean} - True/False whether this MerkleBlock is Valid
 */
MerkleBlock.prototype.validMerkleTree = function validMerkleTree() {
  $.checkState(_.isArray(this.flags), 'MerkleBlock flags is not an array');
  $.checkState(_.isArray(this.hashes), 'MerkleBlock hashes is not an array');

  // Can't have more hashes than numTransactions
  if(this.hashes.length > this.numTransactions) {
    return false;
  }

  // Can't have more flag bits than num hashes
  if(this.flags.length * 8 < this.hashes.length) {
    return false;
  }

  var height = this._calcTreeHeight();
  var opts = { hashesUsed: 0, flagBitsUsed: 0 };
  var root = this._traverseMerkleTree(height, 0, opts);
  if(opts.hashesUsed !== this.hashes.length) {
    return false;
  }
  return BufferUtil.equals(root, this.header.merkleRoot);
};

/**
 * Return a list of all the txs hash that match the filter
 * @returns {Array} - txs hash that match the filter
 */
MerkleBlock.prototype.filterdTxsHash = function filterdTxsHash() {
  $.checkState(_.isArray(this.flags), 'MerkleBlock flags is not an array');
  $.checkState(_.isArray(this.hashes), 'MerkleBlock hashes is not an array');

  // Can't have more hashes than numTransactions
  if(this.hashes.length > this.numTransactions) {
    throw new errors.MerkleBlock.InvalidMerkleTree();
  }

  // Can't have more flag bits than num hashes
  if(this.flags.length * 8 < this.hashes.length) {
    throw new errors.MerkleBlock.InvalidMerkleTree();
  }

  // If there is only one hash the filter do not match any txs in the block
  if(this.hashes.length === 1) {
    return [];
  };

  var height = this._calcTreeHeight();
  var opts = { hashesUsed: 0, flagBitsUsed: 0 };
  var txs = this._traverseMerkleTree(height, 0, opts, true);
  if(opts.hashesUsed !== this.hashes.length) {
    throw new errors.MerkleBlock.InvalidMerkleTree();
  }
  return txs;
};

/**
 * Traverse a the tree in this MerkleBlock, validating it along the way
 * Modeled after Bitcoin Core merkleblock.cpp TraverseAndExtract()
 * @param {Number} - depth - Current height
 * @param {Number} - pos - Current position in the tree
 * @param {Object} - opts - Object with values that need to be mutated throughout the traversal
 * @param {Boolean} - checkForTxs - if true return opts.txs else return the Merkle Hash
 * @param {Number} - opts.flagBitsUsed - Number of flag bits used, should start at 0
 * @param {Number} - opts.hashesUsed - Number of hashes used, should start at 0
 * @param {Array} - opts.txs - Will finish populated by transactions found during traversal that match the filter
 * @returns {Buffer|null} - Buffer containing the Merkle Hash for that height
 * @returns {Array} - transactions found during traversal that match the filter
 * @private
 */
MerkleBlock.prototype._traverseMerkleTree = function traverseMerkleTree(depth, pos, opts, checkForTxs) {
  /* jshint maxcomplexity:  12*/
  /* jshint maxstatements: 20 */

  opts = opts || {};
  opts.txs = opts.txs || [];
  opts.flagBitsUsed = opts.flagBitsUsed || 0;
  opts.hashesUsed = opts.hashesUsed || 0;
  var checkForTxs = checkForTxs || false;

  if(opts.flagBitsUsed > this.flags.length * 8) {
    return null;
  }
  var isParentOfMatch = (this.flags[opts.flagBitsUsed >> 3] >>> (opts.flagBitsUsed++ & 7)) & 1;
  if(depth === 0 || !isParentOfMatch) {
    if(opts.hashesUsed >= this.hashes.length) {
      return null;
    }
    var hash = this.hashes[opts.hashesUsed++];
    if(depth === 0 && isParentOfMatch) {
      opts.txs.push(hash);
    }
    return Buffer.from(hash, 'hex');
  } else {
    var left = this._traverseMerkleTree(depth-1, pos*2, opts);
    var right = left;
    if(pos*2+1 < this._calcTreeWidth(depth-1)) {
      right = this._traverseMerkleTree(depth-1, pos*2+1, opts);
    }
    if (checkForTxs){
      return opts.txs;
    } else {
      return Hash.sha256sha256(new Buffer.concat([left, right]));
    };
  }
};

/** Calculates the width of a merkle tree at a given height.
 *  Modeled after Bitcoin Core merkleblock.h CalcTreeWidth()
 * @param {Number} - Height at which we want the tree width
 * @returns {Number} - Width of the tree at a given height
 * @private
 */
MerkleBlock.prototype._calcTreeWidth = function calcTreeWidth(height) {
  return (this.numTransactions + (1 << height) - 1) >> height;
};

/** Calculates the height of the merkle tree in this MerkleBlock
 * @param {Number} - Height at which we want the tree width
 * @returns {Number} - Height of the merkle tree in this MerkleBlock
 * @private
 */
MerkleBlock.prototype._calcTreeHeight = function calcTreeHeight() {
  var height = 0;
  while (this._calcTreeWidth(height) > 1) {
    height++;
  }
  return height;
};

/**
 * @param {Transaction|String} - Transaction or Transaction ID Hash
 * @returns {Boolean} - return true/false if this MerkleBlock has the TX or not
 * @private
 */
MerkleBlock.prototype.hasTransaction = function hasTransaction(tx) {
  $.checkArgument(!_.isUndefined(tx), 'tx cannot be undefined');
  $.checkArgument(tx instanceof Transaction || typeof tx === 'string',
      'Invalid tx given, tx must be a "string" or "Transaction"');

  var hash = tx;
  if(tx instanceof Transaction) {
    // We need to reverse the id hash for the lookup
    hash = BufferUtil.reverse(Buffer.from(tx.id, 'hex')).toString('hex');
  }

  var txs = [];
  var height = this._calcTreeHeight();
  this._traverseMerkleTree(height, 0, { txs: txs });
  return txs.indexOf(hash) !== -1;
};

/**
 * @param {Buffer} - MerkleBlock data
 * @returns {Object} - An Object representing merkleblock data
 * @private
 */
MerkleBlock._fromBufferReader = function _fromBufferReader(br) {
  $.checkState(!br.finished(), 'No merkleblock data received');
  var info = {};
  info.header = BlockHeader.fromBufferReader(br);
  info.numTransactions = br.readUInt32LE();
  var numHashes = br.readVarintNum();
  info.hashes = [];
  for (var i = 0; i < numHashes; i++) {
    info.hashes.push(br.read(32).toString('hex'));
  }
  var numFlags = br.readVarintNum();
  info.flags = [];
  for (i = 0; i < numFlags; i++) {
    info.flags.push(br.readUInt8());
  }
  return info;
};

/**
 * @param {Object} - A plain JavaScript object
 * @returns {Block} - An instance of block
 */
MerkleBlock.fromObject = function fromObject(obj) {
  return new MerkleBlock(obj);
};

module.exports = MerkleBlock;


/***/ }),

/***/ 70221:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var bitcore = module.exports;

// module information
bitcore.version = 'v' + (__webpack_require__(52978)/* .version */ .rE);
bitcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of bitcore-lib found. ' +
      'Please make sure to require bitcore-lib and check that submodules do' +
      ' not also include their own bitcore-lib dependency.';
    throw new Error(message);
  }
};
bitcore.versionGuard(__webpack_require__.g._bitcore);
__webpack_require__.g._bitcore = bitcore.version;

// crypto
bitcore.crypto = {};
bitcore.crypto.BN = __webpack_require__(62731);
bitcore.crypto.ECDSA = __webpack_require__(65115);
bitcore.crypto.Schnorr = __webpack_require__(29521);
bitcore.crypto.Hash = __webpack_require__(44499);
bitcore.crypto.Random = __webpack_require__(3272);
bitcore.crypto.Point = __webpack_require__(49845);
bitcore.crypto.Signature = __webpack_require__(23825);
bitcore.crypto.TaggedHash = __webpack_require__(56743);

// encoding
bitcore.encoding = {};
bitcore.encoding.Base58 = __webpack_require__(49559);
bitcore.encoding.Base58Check = __webpack_require__(26303);
bitcore.encoding.BufferReader = __webpack_require__(69118);
bitcore.encoding.BufferWriter = __webpack_require__(54878);
bitcore.encoding.Varint = __webpack_require__(14093);

// utilities
bitcore.util = {};
bitcore.util.buffer = __webpack_require__(56142);
bitcore.util.js = __webpack_require__(44371);
bitcore.util.preconditions = __webpack_require__(6213);

// errors thrown by the library
bitcore.errors = __webpack_require__(66617);

// main bitcoin library
bitcore.Address = __webpack_require__(87089);
bitcore.Block = __webpack_require__(64111);
bitcore.MerkleBlock = __webpack_require__(69912);
bitcore.BlockHeader = __webpack_require__(36135);
bitcore.HDPrivateKey = __webpack_require__(92959);
bitcore.HDPublicKey = __webpack_require__(85549);
bitcore.Message = __webpack_require__(85302);
bitcore.Networks = __webpack_require__(33158);
bitcore.Opcode = __webpack_require__(93519);
bitcore.PrivateKey = __webpack_require__(10555);
bitcore.PublicKey = __webpack_require__(969);
bitcore.Script = __webpack_require__(91093);
bitcore.Transaction = __webpack_require__(48758);
bitcore.URI = __webpack_require__(94367);
bitcore.Unit = __webpack_require__(78495);

// dependencies, subject to change
bitcore.deps = {};
bitcore.deps.bnjs = __webpack_require__(15092);
bitcore.deps.bs58 = __webpack_require__(16763);
bitcore.deps.Buffer = Buffer;
bitcore.deps.elliptic = __webpack_require__(86729);
bitcore.deps._ = __webpack_require__(2543);

// Internal usage, exposed for testing/advanced tweaking
bitcore.Transaction.sighash = __webpack_require__(99039);


/***/ }),

/***/ 70566:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var Address = __webpack_require__(87089);
var BufferReader = __webpack_require__(69118);
var BufferWriter = __webpack_require__(54878);
var Hash = __webpack_require__(44499);
var Opcode = __webpack_require__(93519);
var PublicKey = __webpack_require__(969);
var Signature = __webpack_require__(23825);
var Networks = __webpack_require__(33158);
var $ = __webpack_require__(6213);
var _ = __webpack_require__(2543);
var errors = __webpack_require__(66617);
var BufferUtil = __webpack_require__(56142);
var JSUtil = __webpack_require__(44371);
const TaggedHash = __webpack_require__(56743);

/**
 * A bitcoin transaction script. Each transaction's inputs and outputs
 * has a script that is evaluated to validate it's spending.
 *
 * See https://en.bitcoin.it/wiki/Script
 *
 * @constructor
 * @param {Object|string|Buffer=} from optional data to populate script
 */
var Script = function Script(from) {
  if (!(this instanceof Script)) {
    return new Script(from);
  }
  this.chunks = [];

  if (BufferUtil.isBuffer(from)) {
    return Script.fromBuffer(from);
  } else if (from instanceof Address) {
    return Script.fromAddress(from);
  } else if (from instanceof Script) {
    return Script.fromBuffer(from.toBuffer());
  } else if (typeof from === 'string') {
    return Script.fromString(from);
  } else if (_.isObject(from) && Array.isArray(from.chunks)) {
    this.set(from);
  }
};


Script.prototype.set = function(obj) {
  $.checkArgument(_.isObject(obj));
  $.checkArgument(Array.isArray(obj.chunks));
  this.chunks = obj.chunks;
  return this;
};

Script.fromBuffer = function(buffer) {
  var script = new Script();
  script.chunks = [];

  var br = new BufferReader(buffer);
  while (!br.finished()) {
    try {
      var opcodenum = br.readUInt8();

      var len, buf;
      if (opcodenum > 0 && opcodenum < Opcode.OP_PUSHDATA1) {
        len = opcodenum;
        script.chunks.push({
          buf: br.read(len),
          len: len,
          opcodenum: opcodenum
        });
      } else if (opcodenum === Opcode.OP_PUSHDATA1) {
        len = br.readUInt8();
        buf = br.read(len);
        script.chunks.push({
          buf: buf,
          len: len,
          opcodenum: opcodenum
        });
      } else if (opcodenum === Opcode.OP_PUSHDATA2) {
        len = br.readUInt16LE();
        buf = br.read(len);
        script.chunks.push({
          buf: buf,
          len: len,
          opcodenum: opcodenum
        });
      } else if (opcodenum === Opcode.OP_PUSHDATA4) {
        len = br.readUInt32LE();
        buf = br.read(len);
        script.chunks.push({
          buf: buf,
          len: len,
          opcodenum: opcodenum
        });
      } else if (Opcode.isOpSuccess(opcodenum)) {
        // OP_SUCCESSx processing overrides everything, including stack element size limits
        buf = br.readAll();
        len = buf.length;
        script.chunks.push({
          buf: buf,
          len: len,
          opcodenum: opcodenum
        });
      } else {
        script.chunks.push({
          opcodenum: opcodenum
        });
      }
    } catch (e) {
      if (e instanceof RangeError) {
        throw new errors.Script.InvalidBuffer(buffer.toString('hex'));
      }
      throw e;
    }
  }

  return script;
};

Script.prototype.toBuffer = function() {
  var bw = new BufferWriter();

  for (var i = 0; i < this.chunks.length; i++) {
    var chunk = this.chunks[i];
    var opcodenum = chunk.opcodenum;
    bw.writeUInt8(chunk.opcodenum);
    if (chunk.buf) {
      if (opcodenum < Opcode.OP_PUSHDATA1) {
        bw.write(chunk.buf);
      } else if (opcodenum === Opcode.OP_PUSHDATA1) {
        bw.writeUInt8(chunk.len);
        bw.write(chunk.buf);
      } else if (opcodenum === Opcode.OP_PUSHDATA2) {
        bw.writeUInt16LE(chunk.len);
        bw.write(chunk.buf);
      } else if (opcodenum === Opcode.OP_PUSHDATA4) {
        bw.writeUInt32LE(chunk.len);
        bw.write(chunk.buf);
      } else {
        // Could reach here if opcodenum is OP_SUCCESSx (see comment in .fromBuffer)
        bw.write(chunk.buf);
      }
    }
  }

  return bw.concat();
};

Script.fromASM = function(str) {
  var script = new Script();
  script.chunks = [];

  var tokens = str.split(' ');
  var i = 0;
  while (i < tokens.length) {
    var token = tokens[i];
    var opcode = Opcode(token);
    var opcodenum = opcode.toNumber();

    if (opcodenum == null) {
      var buf = Buffer.from(tokens[i], 'hex');
      script.chunks.push({
        buf: buf,
        len: buf.length,
        opcodenum: buf.length
      });
      i = i + 1;
    } else if (opcodenum === Opcode.OP_PUSHDATA1 ||
      opcodenum === Opcode.OP_PUSHDATA2 ||
      opcodenum === Opcode.OP_PUSHDATA4) {
      script.chunks.push({
        buf: Buffer.from(tokens[i + 2], 'hex'),
        len: parseInt(tokens[i + 1]),
        opcodenum: opcodenum
      });
      i = i + 3;
    } else {
      script.chunks.push({
        opcodenum: opcodenum
      });
      i = i + 1;
    }
  }
  return script;
};

Script.fromHex = function(str) {
  return new Script(Buffer.from(str, 'hex'));
};

Script.fromString = function(str) {
  if (JSUtil.isHexa(str) || str.length === 0) {
    return new Script(Buffer.from(str, 'hex'));
  }
  var script = new Script();
  script.chunks = [];

  var tokens = str.split(' ');
  var i = 0;
  while (i < tokens.length) {
    var token = tokens[i];
    var opcode = Opcode(token);
    var opcodenum = opcode.toNumber();

    if (opcodenum == null) {
      opcodenum = parseInt(token);
      if (opcodenum > 0 && opcodenum < Opcode.OP_PUSHDATA1) {
        script.chunks.push({
          buf: Buffer.from(tokens[i + 1].slice(2), 'hex'),
          len: opcodenum,
          opcodenum: opcodenum
        });
        i = i + 2;
      } else {
        throw new Error('Invalid script: ' + JSON.stringify(str));
      }
    } else if (opcodenum === Opcode.OP_PUSHDATA1 ||
      opcodenum === Opcode.OP_PUSHDATA2 ||
      opcodenum === Opcode.OP_PUSHDATA4) {
      if (tokens[i + 2].slice(0, 2) !== '0x') {
        throw new Error('Pushdata data must start with 0x');
      }
      script.chunks.push({
        buf: Buffer.from(tokens[i + 2].slice(2), 'hex'),
        len: parseInt(tokens[i + 1]),
        opcodenum: opcodenum
      });
      i = i + 3;
    } else {
      script.chunks.push({
        opcodenum: opcodenum
      });
      i = i + 1;
    }
  }
  return script;
};

Script.prototype._chunkToString = function(chunk, type) {
  var opcodenum = chunk.opcodenum;
  var asm = (type === 'asm');
  var str = '';
  if (!chunk.buf) {
    // no data chunk
    if (typeof Opcode.reverseMap[opcodenum] !== 'undefined') {
      if (asm) {
        // A few cases where the opcode name differs from reverseMap
        // aside from 1 to 16 data pushes.
        if (opcodenum === 0) {
          // OP_0 -> 0
          str = str + ' 0';
        } else if(opcodenum === 79) {
          // OP_1NEGATE -> 1
          str = str + ' -1';
        } else {
          str = str + ' ' + Opcode(opcodenum).toString();
        }
      } else {
        str = str + ' ' + Opcode(opcodenum).toString();
      }
    } else {
      var numstr = opcodenum.toString(16);
      if (numstr.length % 2 !== 0) {
        numstr = '0' + numstr;
      }
      if (asm) {
        str = str + ' ' + numstr;
      } else {
        str = str + ' ' + '0x' + numstr;
      }
    }
  } else {
    // data chunk
    if (!asm && opcodenum === Opcode.OP_PUSHDATA1 ||
      opcodenum === Opcode.OP_PUSHDATA2 ||
      opcodenum === Opcode.OP_PUSHDATA4) {
      str = str + ' ' + Opcode(opcodenum).toString();
    }
    if (chunk.len > 0) {
      if (asm) {
        str = str + ' ' + chunk.buf.toString('hex');
      } else {
        str = str + ' ' + chunk.len + ' ' + '0x' + chunk.buf.toString('hex');
      }
    }
  }
  return str;
};

Script.prototype.toASM = function() {
  var str = '';
  for (var i = 0; i < this.chunks.length; i++) {
    var chunk = this.chunks[i];
    str += this._chunkToString(chunk, 'asm');
  }

  return str.substr(1);
};

Script.prototype.toString = function() {
  var str = '';
  for (var i = 0; i < this.chunks.length; i++) {
    var chunk = this.chunks[i];
    str += this._chunkToString(chunk);
  }

  return str.substr(1);
};

Script.prototype.toHex = function() {
  return this.toBuffer().toString('hex');
};

Script.prototype.inspect = function() {
  return '<Script: ' + this.toString() + '>';
};

// script classification methods

/**
 * @returns {boolean} if this is a pay to pubkey hash output script
 */
Script.prototype.isPublicKeyHashOut = function() {
  return !!(this.chunks.length === 5 &&
    this.chunks[0].opcodenum === Opcode.OP_DUP &&
    this.chunks[1].opcodenum === Opcode.OP_HASH160 &&
    this.chunks[2].buf &&
    this.chunks[2].buf.length === 20 &&
    this.chunks[3].opcodenum === Opcode.OP_EQUALVERIFY &&
    this.chunks[4].opcodenum === Opcode.OP_CHECKSIG);
};

/**
 * @returns {boolean} if this is a pay to public key hash input script
 */
Script.prototype.isPublicKeyHashIn = function() {
  if (this.chunks.length === 2) {
    var signatureBuf = this.chunks[0].buf;
    var pubkeyBuf = this.chunks[1].buf;
    if (signatureBuf &&
        signatureBuf.length &&
        signatureBuf[0] === 0x30 &&
        pubkeyBuf &&
        pubkeyBuf.length
       ) {
      var version = pubkeyBuf[0];
      if ((version === 0x04 ||
           version === 0x06 ||
           version === 0x07) && pubkeyBuf.length === 65) {
        return true;
      } else if ((version === 0x03 || version === 0x02) && pubkeyBuf.length === 33) {
        return true;
      }
    }
  }
  return false;
};

Script.prototype.getPublicKey = function() {
  $.checkState(this.isPublicKeyOut(), 'Can\'t retrieve PublicKey from a non-PK output');
  return this.chunks[0].buf;
};

Script.prototype.getPublicKeyHash = function() {
  if (this.isPublicKeyHashOut()) {
    return this.chunks[2].buf;
  } else if (this.isWitnessPublicKeyHashOut()) {
    return this.chunks[1].buf;
  } else if (this.isTaproot()) {
    return this.chunks[1].buf;
  } else {
    throw new Error('Can\'t retrieve PublicKeyHash from a non-PKH output');
  }
};

/**
 * @returns {boolean} if this is a public key output script
 */
Script.prototype.isPublicKeyOut = function() {
  if (this.chunks.length === 2 &&
      this.chunks[0].buf &&
      this.chunks[0].buf.length &&
      this.chunks[1].opcodenum === Opcode.OP_CHECKSIG) {
    var pubkeyBuf = this.chunks[0].buf;
    var version = pubkeyBuf[0];
    var isVersion = false;
    if ((version === 0x04 ||
         version === 0x06 ||
         version === 0x07) && pubkeyBuf.length === 65) {
      isVersion = true;
    } else if ((version === 0x03 || version === 0x02) && pubkeyBuf.length === 33) {
      isVersion = true;
    }
    if (isVersion) {
      return PublicKey.isValid(pubkeyBuf);
    }
  }
  return false;
};

/**
 * @returns {boolean} if this is a pay to public key input script
 */
Script.prototype.isPublicKeyIn = function() {
  if (this.chunks.length === 1) {
    var signatureBuf = this.chunks[0].buf;
    if (signatureBuf &&
        signatureBuf.length &&
        signatureBuf[0] === 0x30) {
      return true;
    }
  }
  return false;
};

/**
 * @returns {boolean} if this is a p2sh output script
 */
Script.prototype.isScriptHashOut = function() {
  var buf = this.toBuffer();
  return (buf.length === 23 &&
    buf[0] === Opcode.OP_HASH160 &&
    buf[1] === 0x14 &&
    buf[buf.length - 1] === Opcode.OP_EQUAL);
};

/**
 * @returns {boolean} if this is a p2wsh output script
 */
Script.prototype.isWitnessScriptHashOut = function() {
  var buf = this.toBuffer();
  return (buf.length === 34 && buf[0] === Opcode.OP_0 && buf[1] === 32);
};

/**
 * @returns {boolean} if this is a p2wpkh output script
 */
Script.prototype.isWitnessPublicKeyHashOut = function() {
  var buf = this.toBuffer();
  return (buf.length === 22 && buf[0] === Opcode.OP_0 && buf[1] === 20);
};

/**
 * @returns {boolean} if this is a p2tr output script
 */
Script.prototype.isTaproot = function() {
  var buf = this.toBuffer();
  return (buf.length === 34 && buf[0] === Opcode.OP_1 && buf[1] === 32);
}

/**
 * @param {Object=} values - The return values
 * @param {Number} values.version - Set with the witness version
 * @param {Buffer} values.program - Set with the witness program
 * @returns {boolean} if this is a p2wpkh output script
 */
Script.prototype.isWitnessProgram = function(values) {
  if (!values) {
    values = {};
  }
  var buf = this.toBuffer();
  if (buf.length < 4 || buf.length > 42) {
    return false;
  }
  if (buf[0] !== Opcode.OP_0 && !(buf[0] >= Opcode.OP_1 && buf[0] <= Opcode.OP_16)) {
    return false;
  }

  if (buf.length === buf[1] + 2) {
    values.version = Opcode.decodeOpN(buf[0]);
    values.program = buf.slice(2, buf.length);
    return true;
  }

  return false;
};

/**
 * @returns {boolean} if this is a p2sh input script
 * Note that these are frequently indistinguishable from pubkeyhashin
 */
Script.prototype.isScriptHashIn = function() {
  if (this.chunks.length <= 1) {
    return false;
  }
  var redeemChunk = this.chunks[this.chunks.length - 1];
  var redeemBuf = redeemChunk.buf;
  if (!redeemBuf) {
    return false;
  }

  var redeemScript;
  try {
    redeemScript = Script.fromBuffer(redeemBuf);
  } catch (e) {
    if (e instanceof errors.Script.InvalidBuffer) {
      return false;
    }
    throw e;
  }
  var type = redeemScript.classify();
  return type !== Script.types.UNKNOWN;
};

/**
 * @returns {boolean} if this is a mutlsig output script
 */
Script.prototype.isMultisigOut = function() {
  return (this.chunks.length > 3 &&
    Opcode.isSmallIntOp(this.chunks[0].opcodenum) &&
    this.chunks.slice(1, this.chunks.length - 2).every(function(obj) {
      return obj.buf && BufferUtil.isBuffer(obj.buf);
    }) &&
    Opcode.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) &&
    this.chunks[this.chunks.length - 1].opcodenum === Opcode.OP_CHECKMULTISIG);
};


/**
 * @returns {boolean} if this is a multisig input script
 */
Script.prototype.isMultisigIn = function() {
  return this.chunks.length >= 2 &&
    this.chunks[0].opcodenum === 0 &&
    this.chunks.slice(1, this.chunks.length).every(function(obj) {
      return obj.buf &&
        BufferUtil.isBuffer(obj.buf) &&
        Signature.isTxDER(obj.buf);
    });
};

/**
 * @returns {boolean} true if this is a valid standard OP_RETURN output
 */
Script.prototype.isDataOut = function() {
  return this.chunks.length >= 1 &&
    this.chunks[0].opcodenum === Opcode.OP_RETURN &&
    (this.chunks.length === 1 ||
      (this.chunks.length === 2 &&
        this.chunks[1].buf &&
        this.chunks[1].buf.length <= Script.OP_RETURN_STANDARD_SIZE &&
        this.chunks[1].length === this.chunks.len));
};

/**
 * Retrieve the associated data for this script.
 * In the case of a pay to public key hash, P2SH, P2WSH, or P2WPKH, return the hash.
 * In the case of a standard OP_RETURN, return the data
 * @returns {Buffer}
 */
Script.prototype.getData = function() {
  if (this.isDataOut() || this.isScriptHashOut() || this.isWitnessScriptHashOut() || this.isWitnessPublicKeyHashOut() || this.isTaproot()) {
    if (this.chunks[1] == null) {
      return Buffer.alloc(0);
    } else {
      return Buffer.from(this.chunks[1].buf);
    }
  }
  if (this.isPublicKeyHashOut()) {
    return Buffer.from(this.chunks[2].buf);
  }
  throw new Error('Unrecognized script type to get data from');
};

/**
 * @returns {boolean} if the script is only composed of data pushing
 * opcodes or small int opcodes (OP_0, OP_1, ..., OP_16)
 */
Script.prototype.isPushOnly = function() {
  return this.chunks.every(function(chunk) {
    return chunk.opcodenum <= Opcode.OP_16;
  });
};


Script.types = {};
Script.types.UNKNOWN = 'Unknown';
Script.types.PUBKEY_OUT = 'Pay to public key';
Script.types.PUBKEY_IN = 'Spend from public key';
Script.types.PUBKEYHASH_OUT = 'Pay to public key hash';
Script.types.PUBKEYHASH_IN = 'Spend from public key hash';
Script.types.SCRIPTHASH_OUT = 'Pay to script hash';
Script.types.SCRIPTHASH_IN = 'Spend from script hash';
Script.types.MULTISIG_OUT = 'Pay to multisig';
Script.types.MULTISIG_IN = 'Spend from multisig';
Script.types.DATA_OUT = 'Data push';

Script.OP_RETURN_STANDARD_SIZE = 80;

// Tag for input annex. If there are at least two witness elements for a transaction input,
// and the first byte of the last element is 0x50, this last element is called annex, and
// has meanings independent of the script
Script.ANNEX_TAG = 0x50;

// Validation weight per passing signature (Tapscript only, see BIP 342).
Script.VALIDATION_WEIGHT_PER_SIGOP_PASSED = 50;

// How much weight budget is added to the witness size (Tapscript only, see BIP 342).
Script.VALIDATION_WEIGHT_OFFSET = 50;


/**
 * @returns {object} The Script type if it is a known form,
 * or Script.UNKNOWN if it isn't
 */
Script.prototype.classify = function() {
  if (this._isInput) {
    return this.classifyInput();
  } else if (this._isOutput) {
    return this.classifyOutput();
  } else {
    var outputType = this.classifyOutput();
    return outputType != Script.types.UNKNOWN ? outputType : this.classifyInput();
  }
};

Script.outputIdentifiers = {};
Script.outputIdentifiers.PUBKEY_OUT = Script.prototype.isPublicKeyOut;
Script.outputIdentifiers.PUBKEYHASH_OUT = Script.prototype.isPublicKeyHashOut;
Script.outputIdentifiers.MULTISIG_OUT = Script.prototype.isMultisigOut;
Script.outputIdentifiers.SCRIPTHASH_OUT = Script.prototype.isScriptHashOut;
Script.outputIdentifiers.DATA_OUT = Script.prototype.isDataOut;

/**
 * @returns {object} The Script type if it is a known form,
 * or Script.UNKNOWN if it isn't
 */
Script.prototype.classifyOutput = function() {
  for (var type in Script.outputIdentifiers) {
    if (Script.outputIdentifiers[type].bind(this)()) {
      return Script.types[type];
    }
  }
  return Script.types.UNKNOWN;
};

Script.inputIdentifiers = {};
Script.inputIdentifiers.PUBKEY_IN = Script.prototype.isPublicKeyIn;
Script.inputIdentifiers.PUBKEYHASH_IN = Script.prototype.isPublicKeyHashIn;
Script.inputIdentifiers.MULTISIG_IN = Script.prototype.isMultisigIn;
Script.inputIdentifiers.SCRIPTHASH_IN = Script.prototype.isScriptHashIn;

/**
 * @returns {object} The Script type if it is a known form,
 * or Script.UNKNOWN if it isn't
 */
Script.prototype.classifyInput = function() {
  for (var type in Script.inputIdentifiers) {
    if (Script.inputIdentifiers[type].bind(this)()) {
      return Script.types[type];
    }
  }
  return Script.types.UNKNOWN;
};


/**
 * @returns {boolean} if script is one of the known types
 */
Script.prototype.isStandard = function() {
  // TODO: Add BIP62 compliance
  return this.classify() !== Script.types.UNKNOWN;
};


// Script construction methods

/**
 * Adds a script element at the start of the script.
 * @param {*} obj a string, number, Opcode, Buffer, or object to add
 * @returns {Script} this script instance
 */
Script.prototype.prepend = function(obj) {
  this._addByType(obj, true);
  return this;
};

/**
 * Compares a script with another script
 */
Script.prototype.equals = function(script) {
  $.checkState(script instanceof Script, 'Must provide another script');
  if (this.chunks.length !== script.chunks.length) {
    return false;
  }
  var i;
  for (i = 0; i < this.chunks.length; i++) {
    if (BufferUtil.isBuffer(this.chunks[i].buf) && !BufferUtil.isBuffer(script.chunks[i].buf)) {
      return false;
    }
    if (BufferUtil.isBuffer(this.chunks[i].buf) && !BufferUtil.equals(this.chunks[i].buf, script.chunks[i].buf)) {
      return false;
    } else if (this.chunks[i].opcodenum !== script.chunks[i].opcodenum) {
      return false;
    }
  }
  return true;
};

/**
 * Adds a script element to the end of the script.
 *
 * @param {*} obj a string, number, Opcode, Buffer, or object to add
 * @returns {Script} this script instance
 *
 */
Script.prototype.add = function(obj) {
  this._addByType(obj, false);
  return this;
};

Script.prototype._addByType = function(obj, prepend) {
  if (typeof obj === 'string') {
    this._addOpcode(obj, prepend);
  } else if (typeof obj === 'number') {
    this._addOpcode(obj, prepend);
  } else if (obj instanceof Opcode) {
    this._addOpcode(obj, prepend);
  } else if (BufferUtil.isBuffer(obj)) {
    this._addBuffer(obj, prepend);
  } else if (obj instanceof Script) {
    this.chunks = this.chunks.concat(obj.chunks);
  } else if (typeof obj === 'object') {
    this._insertAtPosition(obj, prepend);
  } else {
    throw new Error('Invalid script chunk');
  }
};

Script.prototype._insertAtPosition = function(op, prepend) {
  if (prepend) {
    this.chunks.unshift(op);
  } else {
    this.chunks.push(op);
  }
};

Script.prototype._addOpcode = function(opcode, prepend) {
  var op;
  if (typeof opcode === 'number') {
    op = opcode;
  } else if (opcode instanceof Opcode) {
    op = opcode.toNumber();
  } else {
    op = Opcode(opcode).toNumber();
  }
  this._insertAtPosition({
    opcodenum: op
  }, prepend);
  return this;
};

Script.prototype._addBuffer = function(buf, prepend) {
  var opcodenum;
  var len = buf.length;
  if (len >= 0 && len < Opcode.OP_PUSHDATA1) {
    opcodenum = len;
  } else if (len < Math.pow(2, 8)) {
    opcodenum = Opcode.OP_PUSHDATA1;
  } else if (len < Math.pow(2, 16)) {
    opcodenum = Opcode.OP_PUSHDATA2;
  } else if (len < Math.pow(2, 32)) {
    opcodenum = Opcode.OP_PUSHDATA4;
  } else {
    throw new Error('You can\'t push that much data');
  }
  this._insertAtPosition({
    buf: buf,
    len: len,
    opcodenum: opcodenum
  }, prepend);
  return this;
};

Script.prototype.hasCodeseparators = function() {
  for (var i = 0; i < this.chunks.length; i++) {
    if (this.chunks[i].opcodenum === Opcode.OP_CODESEPARATOR) {
      return true;
    }
  }
  return false;
};

Script.prototype.removeCodeseparators = function() {
  var chunks = [];
  for (var i = 0; i < this.chunks.length; i++) {
    if (this.chunks[i].opcodenum !== Opcode.OP_CODESEPARATOR) {
      chunks.push(this.chunks[i]);
    }
  }
  this.chunks = chunks;
  return this;
};

// high level script builder methods

/**
 * @returns {Script} a new Multisig output script for given public keys,
 * requiring m of those public keys to spend
 * @param {PublicKey[]} publicKeys - list of all public keys controlling the output
 * @param {number} threshold - amount of required signatures to spend the output
 * @param {Object=} opts - Several options:
 *        - noSorting: defaults to false, if true, don't sort the given
 *                      public keys before creating the script
 */
Script.buildMultisigOut = function(publicKeys, threshold, opts) {
  $.checkArgument(threshold <= publicKeys.length,
    'Number of required signatures must be less than or equal to the number of public keys');
  opts = opts || {};
  var script = new Script();
  script.add(Opcode.smallInt(threshold));
  publicKeys = publicKeys.map(PublicKey);
  var sorted = publicKeys;
  if (!opts.noSorting) {
    sorted = _.sortBy(publicKeys, function(publicKey) {
      return publicKey.toString('hex');
    });
  }
  for (var i = 0; i < sorted.length; i++) {
    var publicKey = sorted[i];
    script.add(publicKey.toBuffer());
  }
  script.add(Opcode.smallInt(publicKeys.length));
  script.add(Opcode.OP_CHECKMULTISIG);
  return script;
};

Script.buildWitnessMultisigOutFromScript = function(script) {
  if (script instanceof Script) {
    var s = new Script();
    s.add(Opcode.OP_0);
    s.add(Hash.sha256(script.toBuffer()));
    return s;
  } else {
    throw new TypeError('First argument is expected to be a p2sh script');
  }
};

/**
 * A new Multisig input script for the given public keys, requiring m of those public keys to spend
 *
 * @param {PublicKey[]} pubkeys list of all public keys controlling the output
 * @param {number} threshold amount of required signatures to spend the output
 * @param {Array} signatures and array of signature buffers to append to the script
 * @param {Object=} opts
 * @param {boolean=} opts.noSorting don't sort the given public keys before creating the script (false by default)
 * @param {Script=} opts.cachedMultisig don't recalculate the redeemScript
 *
 * @returns {Script}
 */
Script.buildMultisigIn = function(pubkeys, threshold, signatures, opts) {
  $.checkArgument(Array.isArray(pubkeys));
  $.checkArgument(!isNaN(threshold));
  $.checkArgument(Array.isArray(signatures));
  opts = opts || {};
  var s = new Script();
  s.add(Opcode.OP_0);
  for (const signature of signatures) {
    $.checkArgument(BufferUtil.isBuffer(signature), 'Signatures must be an array of Buffers');
    // TODO: allow signatures to be an array of Signature objects
    s.add(signature);
  }
  return s;
};

/**
 * A new P2SH Multisig input script for the given public keys, requiring m of those public keys to spend
 *
 * @param {PublicKey[]} pubkeys list of all public keys controlling the output
 * @param {number} threshold amount of required signatures to spend the output
 * @param {Array} signatures and array of signature buffers to append to the script
 * @param {Object=} opts
 * @param {boolean=} opts.noSorting don't sort the given public keys before creating the script (false by default)
 * @param {Script=} opts.cachedMultisig don't recalculate the redeemScript
 *
 * @returns {Script}
 */
Script.buildP2SHMultisigIn = function(pubkeys, threshold, signatures, opts) {
  $.checkArgument(Array.isArray(pubkeys));
  $.checkArgument(!isNaN(threshold));
  $.checkArgument(Array.isArray(signatures));
  opts = opts || {};
  var s = new Script();
  s.add(Opcode.OP_0);
  for (const signature of signatures) {
    $.checkArgument(BufferUtil.isBuffer(signature), 'Signatures must be an array of Buffers');
    // TODO: allow signatures to be an array of Signature objects
    s.add(signature);
  }
  s.add((opts.cachedMultisig || Script.buildMultisigOut(pubkeys, threshold, opts)).toBuffer());
  return s;
};

/**
 * @returns {Script} a new pay to public key hash output for the given
 * address or public key
 * @param {(Address|PublicKey)} to - destination address or public key
 */
Script.buildPublicKeyHashOut = function(to) {
  $.checkArgument(to != null);
  $.checkArgument(to instanceof PublicKey || to instanceof Address || typeof to === 'string');
  if (to instanceof PublicKey) {
    to = to.toAddress();
  } else if (typeof to === 'string') {
    to = new Address(to);
  }
  var s = new Script();
  s.add(Opcode.OP_DUP)
    .add(Opcode.OP_HASH160)
    .add(to.hashBuffer)
    .add(Opcode.OP_EQUALVERIFY)
    .add(Opcode.OP_CHECKSIG);
  s._network = to.network;
  return s;
};

/**
 * @returns {Script} a new pay to witness v0 output for the given
 * address
 * @param {(Address|PublicKey)} to - destination address
 */
Script.buildWitnessV0Out = function(to) {
  $.checkArgument(to != null);
  $.checkArgument(to instanceof PublicKey || to instanceof Address || typeof to === 'string');
  if (to instanceof PublicKey) {
    to = to.toAddress(null, Address.PayToWitnessPublicKeyHash);
  } else if (typeof to === 'string') {
    to = new Address(to);
  }
  var s = new Script();
  s.add(Opcode.OP_0)
    .add(to.hashBuffer);
  s._network = to.network;
  return s;
};


/**
 * Build Taproot script output
 * @param {PublicKey|Address} to recipient's pubKey or address
 * @param {Array|Object} scriptTree single leaf object OR array of leaves. leaf: { script: String, leafVersion: Integer }
 * @returns {Script}
 */
Script.buildWitnessV1Out = function(to, scriptTree) {
  $.checkArgument(to instanceof PublicKey || to instanceof Address || typeof to === 'string');
  $.checkArgument(!scriptTree || Array.isArray(scriptTree) || !!scriptTree.script);

  if (typeof to === 'string') {
    try {
      to = PublicKey.fromTaproot(to);
    } catch {
      to = Address.fromString(to);
    }
  }
  
  function buildTree(tree) {
    if (Array.isArray(tree)) {
      const [left, leftH] = buildTree(tree[0]);
      const [right, rightH] = buildTree(tree[1]);
      const ret = [[[left[0], left[1]], rightH], [[right[0], right[1]], leftH]];
      const hWriter = TaggedHash.TAPBRANCH;
      if (leftH.compare(rightH) === 1) {
        hWriter.write(rightH);
        hWriter.write(leftH);
      } else {
        hWriter.write(leftH);
        hWriter.write(rightH);
      }
      return [ret, hWriter.finalize()];
    } else {
      const { leafVersion, script } = tree;
      const scriptBuf = new Script(script).toBuffer();
      const leafWriter = TaggedHash.TAPLEAF;
      leafWriter.writeUInt8(leafVersion);
      leafWriter.writeUInt8(scriptBuf.length);
      leafWriter.write(scriptBuf);
      const h = leafWriter.finalize();
      return [[Buffer.from([leafVersion]), scriptBuf], h];
    }
  }

  let taggedHash = null;
  if (scriptTree) { 
    const [_, h] = buildTree(scriptTree);
    taggedHash = h;
  }
  
  let tweakedPubKey;
  if (to instanceof PublicKey) {
    tweakedPubKey = to.createTapTweak(taggedHash).tweakedPubKey;
  } else { // Address
    tweakedPubKey = to.hashBuffer;
  }
  const s = new Script();
  s.add(Opcode.OP_1);
  s.add(tweakedPubKey);
  return s;
};


/**
 * @returns {Script} a new pay to public key output for the given
 *  public key
 */
Script.buildPublicKeyOut = function(pubkey) {
  $.checkArgument(pubkey instanceof PublicKey);
  var s = new Script();
  s.add(pubkey.toBuffer())
    .add(Opcode.OP_CHECKSIG);
  return s;
};

/**
 * @returns {Script} a new OP_RETURN script with data
 * @param {(string|Buffer)} data - the data to embed in the output
 * @param {(string)} encoding - the type of encoding of the string
 */
Script.buildDataOut = function(data, encoding) {
  $.checkArgument(data == null || typeof data === 'string' || BufferUtil.isBuffer(data));
  if (typeof data === 'string') {
    data = Buffer.from(data, encoding);
  }
  var s = new Script();
  s.add(Opcode.OP_RETURN);
  if (data != null) {
    s.add(data);
  }
  return s;
};

/**
 * @param {Script|Address} script - the redeemScript for the new p2sh output.
 *    It can also be a p2sh address
 * @returns {Script} new pay to script hash script for given script
 */
Script.buildScriptHashOut = function(script) {
  $.checkArgument(script instanceof Script ||
    (script instanceof Address && script.isPayToScriptHash()));
  var s = new Script();
  s.add(Opcode.OP_HASH160)
    .add(script instanceof Address ? script.hashBuffer : Hash.sha256ripemd160(script.toBuffer()))
    .add(Opcode.OP_EQUAL);

  s._network = script._network || script.network;
  return s;
};

/**
 * Builds a scriptSig (a script for an input) that signs a public key output script.
 *
 * @param {Signature|Buffer} signature - a Signature object, or the signature in DER canonical encoding
 * @param {number=} sigtype - the type of the signature (defaults to SIGHASH_ALL)
 */
Script.buildPublicKeyIn = function(signature, sigtype) {
  $.checkArgument(signature instanceof Signature || BufferUtil.isBuffer(signature));
  $.checkArgument(sigtype == null || !isNaN(sigtype));
  if (signature instanceof Signature) {
    signature = signature.toBuffer();
  }
  var script = new Script();
  script.add(BufferUtil.concat([
    signature,
    BufferUtil.integerAsSingleByteBuffer(sigtype || Signature.SIGHASH_ALL)
  ]));
  return script;
};

/**
 * Builds a scriptSig (a script for an input) that signs a public key hash
 * output script.
 *
 * @param {Buffer|string|PublicKey} publicKey
 * @param {Signature|Buffer} signature - a Signature object, or the signature in DER canonical encoding
 * @param {number=} sigtype - the type of the signature (defaults to SIGHASH_ALL)
 */
Script.buildPublicKeyHashIn = function(publicKey, signature, sigtype) {
  $.checkArgument(signature instanceof Signature || BufferUtil.isBuffer(signature));
  $.checkArgument(sigtype == null || !isNaN(sigtype));
  if (signature instanceof Signature) {
    signature = signature.toBuffer();
  }
  var script = new Script()
    .add(BufferUtil.concat([
      signature,
      BufferUtil.integerAsSingleByteBuffer(sigtype || Signature.SIGHASH_ALL)
    ]))
    .add(new PublicKey(publicKey).toBuffer());
  return script;
};

/**
 * @returns {Script} an empty script
 */
Script.empty = function() {
  return new Script();
};

/**
 * @returns {Script} a new pay to script hash script that pays to this script
 */
Script.prototype.toScriptHashOut = function() {
  return Script.buildScriptHashOut(this);
};

/**
 * @return {Script} an output script built from the address
 */
Script.fromAddress = function(address) {
  address = Address(address);
  if (address.isPayToScriptHash()) {
    return Script.buildScriptHashOut(address);
  } else if (address.isPayToPublicKeyHash()) {
    return Script.buildPublicKeyHashOut(address);
  } else if (address.isPayToWitnessPublicKeyHash()) {
    return Script.buildWitnessV0Out(address);
  } else if (address.isPayToWitnessScriptHash()) {
    return Script.buildWitnessV0Out(address);
  } else if (address.isPayToTaproot()) {
    return Script.buildWitnessV1Out(address);
  }
  throw new errors.Script.UnrecognizedAddress(address);
};

/**
 * Will return the associated address information object
 * @return {Address|boolean}
 */
Script.prototype.getAddressInfo = function(opts) {
  if (this._isInput) {
    return this._getInputAddressInfo();
  } else if (this._isOutput) {
    return this._getOutputAddressInfo();
  } else {
    var info = this._getOutputAddressInfo();
    if (!info) {
      return this._getInputAddressInfo();
    }
    return info;
  }
};

/**
 * Will return the associated output scriptPubKey address information object
 * @return {Address|boolean}
 * @private
 */
Script.prototype._getOutputAddressInfo = function() {
  var info = {};
  if (this.isScriptHashOut()) {
    info.hashBuffer = this.getData();
    info.type = Address.PayToScriptHash;
  } else if (this.isPublicKeyHashOut()) {
    info.hashBuffer = this.getData();
    info.type = Address.PayToPublicKeyHash;
  } else if (this.isWitnessScriptHashOut()) {
    info.hashBuffer = this.getData();
    info.type = Address.PayToWitnessScriptHash;
  } else if (this.isWitnessPublicKeyHashOut()) {
    info.hashBuffer = this.getData();
    info.type = Address.PayToWitnessPublicKeyHash;
  } else if (this.isTaproot()) {
    info.hashBuffer = this.getData();
    info.type = Address.PayToTaproot;
  } else {
    return false;
  }
  return info;
};

/**
 * Will return the associated input scriptSig address information object
 * @return {Address|boolean}
 * @private
 */
Script.prototype._getInputAddressInfo = function() {
  var info = {};
  if (this.isPublicKeyHashIn()) {
    // hash the publickey found in the scriptSig
    info.hashBuffer = Hash.sha256ripemd160(this.chunks[1].buf);
    info.type = Address.PayToPublicKeyHash;
  } else if (this.isScriptHashIn()) {
    // hash the redeemscript found at the end of the scriptSig
    info.hashBuffer = Hash.sha256ripemd160(this.chunks[this.chunks.length - 1].buf);
    info.type = Address.PayToScriptHash;
  } else {
    return false;
  }
  return info;
};

/**
 * @param {Network=} network
 * @return {Address|boolean} the associated address for this script if possible, or false
 */
Script.prototype.toAddress = function(network) {
  var info = this.getAddressInfo();
  if (!info) {
    return false;
  }
  info.network = Networks.get(network) || this._network || Networks.defaultNetwork;
  return new Address(info);
};

/**
 * Analogous to bitcoind's FindAndDelete. Find and delete equivalent chunks,
 * typically used with push data chunks.  Note that this will find and delete
 * not just the same data, but the same data with the same push data op as
 * produced by default. i.e., if a pushdata in a tx does not use the minimal
 * pushdata op, then when you try to remove the data it is pushing, it will not
 * be removed, because they do not use the same pushdata op.
 */
Script.prototype.findAndDelete = function(script) {
  var buf = script.toBuffer();
  var hex = buf.toString('hex');
  for (var i = 0; i < this.chunks.length; i++) {
    var script2 = Script({
      chunks: [this.chunks[i]]
    });
    var buf2 = script2.toBuffer();
    var hex2 = buf2.toString('hex');
    if (hex === hex2) {
      this.chunks.splice(i, 1);
    }
  }
  return this;
};

/**
 * Comes from bitcoind's script interpreter CheckMinimalPush function
 * @returns {boolean} if the chunk {i} is the smallest way to push that particular data.
 */
Script.prototype.checkMinimalPush = function(i) {
  var chunk = this.chunks[i];
  var buf = chunk.buf;
  var opcodenum = chunk.opcodenum;
  if (!buf) {
    return true;
  }
  if (buf.length === 0) {
    // Could have used OP_0.
    return opcodenum === Opcode.OP_0;
  } else if (buf.length === 1 && buf[0] >= 1 && buf[0] <= 16) {
    // Could have used OP_1 .. OP_16.
    return opcodenum === Opcode.OP_1 + (buf[0] - 1);
  } else if (buf.length === 1 && buf[0] === 0x81) {
    // Could have used OP_1NEGATE
    return opcodenum === Opcode.OP_1NEGATE;
  } else if (buf.length <= 75) {
    // Could have used a direct push (opcode indicating number of bytes pushed + those bytes).
    return opcodenum === buf.length;
  } else if (buf.length <= 255) {
    // Could have used OP_PUSHDATA.
    return opcodenum === Opcode.OP_PUSHDATA1;
  } else if (buf.length <= 65535) {
    // Could have used OP_PUSHDATA2.
    return opcodenum === Opcode.OP_PUSHDATA2;
  }
  return true;
};


/**
 * Comes from bitcoind's script GetSigOpCount(boolean) function
 * @param {boolean} use current (true) or pre-version-0.6 (false) logic
 * @returns {number} number of signature operations required by this script
 */
Script.prototype.getSignatureOperationsCount = function(accurate) {
  accurate = (accurate == null ? true : accurate);
  var n = 0;
  var lastOpcode = Opcode.OP_INVALIDOPCODE;
  for (const chunk of this.chunks) {
    var opcode = chunk.opcodenum;
    if (opcode == Opcode.OP_CHECKSIG || opcode == Opcode.OP_CHECKSIGVERIFY) {
      n++;
    } else if (opcode == Opcode.OP_CHECKMULTISIG || opcode == Opcode.OP_CHECKMULTISIGVERIFY) {
      if (accurate && lastOpcode >= Opcode.OP_1 && lastOpcode <= Opcode.OP_16) {
        n += Opcode.decodeOpN(lastOpcode);
      } else {
        n += 20;
      }
    }
    lastOpcode = opcode;
  }
  return n;
};

module.exports = Script;


/***/ }),

/***/ 78495:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2543);

var errors = __webpack_require__(66617);
var $ = __webpack_require__(6213);

var UNITS = {
  'BTC'      : [1e8, 8],
  'mBTC'     : [1e5, 5],
  'uBTC'     : [1e2, 2],
  'bits'     : [1e2, 2],
  'satoshis' : [1, 0]
};

/**
 * Utility for handling and converting bitcoins units. The supported units are
 * BTC, mBTC, bits (also named uBTC) and satoshis. A unit instance can be created with an
 * amount and a unit code, or alternatively using static methods like {fromBTC}.
 * It also allows to be created from a fiat amount and the exchange rate, or
 * alternatively using the {fromFiat} static method.
 * You can consult for different representation of a unit instance using it's
 * {to} method, the fixed unit methods like {toSatoshis} or alternatively using
 * the unit accessors. It also can be converted to a fiat amount by providing the
 * corresponding BTC/fiat exchange rate.
 *
 * @example
 * ```javascript
 * var sats = Unit.fromBTC(1.3).toSatoshis();
 * var mili = Unit.fromBits(1.3).to(Unit.mBTC);
 * var bits = Unit.fromFiat(1.3, 350).bits;
 * var btc = new Unit(1.3, Unit.bits).BTC;
 * ```
 *
 * @param {Number} amount - The amount to be represented
 * @param {String|Number} code - The unit of the amount or the exchange rate
 * @returns {Unit} A new instance of an Unit
 * @constructor
 */
function Unit(amount, code) {
  if (!(this instanceof Unit)) {
    return new Unit(amount, code);
  }

  // convert fiat to BTC
  if (_.isNumber(code)) {
    if (code <= 0) {
      throw new errors.Unit.InvalidRate(code);
    }
    amount = amount / code;
    code = Unit.BTC;
  }

  this._value = this._from(amount, code);

  var self = this;
  var defineAccesor = function(key) {
    Object.defineProperty(self, key, {
      get: function() { return self.to(key); },
      enumerable: true,
    });
  };

  Object.keys(UNITS).forEach(defineAccesor);
}

Object.keys(UNITS).forEach(function(key) {
  Unit[key] = key;
});

/**
 * Returns a Unit instance created from JSON string or object
 *
 * @param {String|Object} json - JSON with keys: amount and code
 * @returns {Unit} A Unit instance
 */
Unit.fromObject = function fromObject(data){
  $.checkArgument(_.isObject(data), 'Argument is expected to be an object');
  return new Unit(data.amount, data.code);
};

/**
 * Returns a Unit instance created from an amount in BTC
 *
 * @param {Number} amount - The amount in BTC
 * @returns {Unit} A Unit instance
 */
Unit.fromBTC = function(amount) {
  return new Unit(amount, Unit.BTC);
};

/**
 * Returns a Unit instance created from an amount in mBTC
 *
 * @param {Number} amount - The amount in mBTC
 * @returns {Unit} A Unit instance
 */
Unit.fromMillis = Unit.fromMilis = function(amount) {
  return new Unit(amount, Unit.mBTC);
};

/**
 * Returns a Unit instance created from an amount in bits
 *
 * @param {Number} amount - The amount in bits
 * @returns {Unit} A Unit instance
 */
Unit.fromMicros = Unit.fromBits = function(amount) {
  return new Unit(amount, Unit.bits);
};

/**
 * Returns a Unit instance created from an amount in satoshis
 *
 * @param {Number} amount - The amount in satoshis
 * @returns {Unit} A Unit instance
 */
Unit.fromSatoshis = function(amount) {
  return new Unit(amount, Unit.satoshis);
};

/**
 * Returns a Unit instance created from a fiat amount and exchange rate.
 *
 * @param {Number} amount - The amount in fiat
 * @param {Number} rate - The exchange rate BTC/fiat
 * @returns {Unit} A Unit instance
 */
Unit.fromFiat = function(amount, rate) {
  return new Unit(amount, rate);
};

Unit.prototype._from = function(amount, code) {
  if (!UNITS[code]) {
    throw new errors.Unit.UnknownCode(code);
  }
  return parseInt((amount * UNITS[code][0]).toFixed());
};

/**
 * Returns the value represented in the specified unit
 *
 * @param {String|Number} code - The unit code or exchange rate
 * @returns {Number} The converted value
 */
Unit.prototype.to = function(code) {
  if (_.isNumber(code)) {
    if (code <= 0) {
      throw new errors.Unit.InvalidRate(code);
    }
    return parseFloat((this.BTC * code).toFixed(2));
  }

  if (!UNITS[code]) {
    throw new errors.Unit.UnknownCode(code);
  }

  var value = this._value / UNITS[code][0];
  return parseFloat(value.toFixed(UNITS[code][1]));
};

/**
 * Returns the value represented in BTC
 *
 * @returns {Number} The value converted to BTC
 */
Unit.prototype.toBTC = function() {
  return this.to(Unit.BTC);
};

/**
 * Returns the value represented in mBTC
 *
 * @returns {Number} The value converted to mBTC
 */
Unit.prototype.toMillis = Unit.prototype.toMilis = function() {
  return this.to(Unit.mBTC);
};

/**
 * Returns the value represented in bits
 *
 * @returns {Number} The value converted to bits
 */
Unit.prototype.toMicros = Unit.prototype.toBits = function() {
  return this.to(Unit.bits);
};

/**
 * Returns the value represented in satoshis
 *
 * @returns {Number} The value converted to satoshis
 */
Unit.prototype.toSatoshis = function() {
  return this.to(Unit.satoshis);
};

/**
 * Returns the value represented in fiat
 *
 * @param {string} rate - The exchange rate between BTC/currency
 * @returns {Number} The value converted to satoshis
 */
Unit.prototype.atRate = function(rate) {
  return this.to(rate);
};

/**
 * Returns a the string representation of the value in satoshis
 *
 * @returns {string} the value in satoshis
 */
Unit.prototype.toString = function() {
  return this.satoshis + ' satoshis';
};

/**
 * Returns a plain object representation of the Unit
 *
 * @returns {Object} An object with the keys: amount and code
 */
Unit.prototype.toObject = Unit.prototype.toJSON = function toObject() {
  return {
    amount: this.BTC,
    code: Unit.BTC
  };
};

/**
 * Returns a string formatted for the console
 *
 * @returns {string} the value in satoshis
 */
Unit.prototype.inspect = function() {
  return '<Unit: ' + this.toString() + '>';
};

module.exports = Unit;


/***/ }),

/***/ 78743:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2543);
var inherits = __webpack_require__(28322);
var Transaction = __webpack_require__(92202);
var Input = __webpack_require__(68237);
var Output = __webpack_require__(42109);
var $ = __webpack_require__(6213);

var Script = __webpack_require__(91093);
var Signature = __webpack_require__(23825);
var Sighash = __webpack_require__(99039);
var PublicKey = __webpack_require__(969);
var BufferUtil = __webpack_require__(56142);
var TransactionSignature = __webpack_require__(3544);

/**
 * @constructor
 */
function MultiSigInput(input, pubkeys, threshold, signatures, opts) {
  opts = opts || {};
  Input.apply(this, arguments);
  var self = this;
  pubkeys = pubkeys || input.publicKeys;
  threshold = threshold || input.threshold;
  signatures = signatures || input.signatures;
  if (opts.noSorting) {
    this.publicKeys = pubkeys
  } else  {
    this.publicKeys = _.sortBy(pubkeys, function(publicKey) { return publicKey.toString('hex'); });
  }
  $.checkState(Script.buildMultisigOut(this.publicKeys, threshold).equals(this.output.script),
    'Provided public keys don\'t match to the provided output script');
  this.publicKeyIndex = {};
  _.each(this.publicKeys, function(publicKey, index) {
    self.publicKeyIndex[publicKey.toString()] = index;
  });
  this.threshold = threshold;
  // Empty array of signatures
  this.signatures = signatures ? this._deserializeSignatures(signatures) : new Array(this.publicKeys.length);
}
inherits(MultiSigInput, Input);

MultiSigInput.prototype.toObject = function() {
  var obj = Input.prototype.toObject.apply(this, arguments);
  obj.threshold = this.threshold;
  obj.publicKeys = _.map(this.publicKeys, function(publicKey) { return publicKey.toString(); });
  obj.signatures = this._serializeSignatures();
  return obj;
};

MultiSigInput.prototype._deserializeSignatures = function(signatures) {
  return _.map(signatures, function(signature) {
    if (!signature) {
      return undefined;
    }
    return new TransactionSignature(signature);
  });
};

MultiSigInput.prototype._serializeSignatures = function() {
  return _.map(this.signatures, function(signature) {
    if (!signature) {
      return undefined;
    }
    return signature.toObject();
  });
};

/**
 * Get signatures for this input
 * @param {Transaction} transaction - the transaction to be signed
 * @param {PrivateKey} privateKey - the private key with which to sign the transaction
 * @param {number} index - the index of the input in the transaction input vector
 * @param {number} sigtype - the type of signature, defaults to Signature.SIGHASH_ALL
 * @param {Buffer} hashData - unused for this input type
 * @param {String} signingMethod DEPRECATED - method used to sign - 'ecdsa' or 'schnorr'
 * @param {Buffer} merkleRoot - unused for this input type
 * @return {Array<TransactionSignature>}
 */
MultiSigInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype, hashData, signingMethod, merkleRoot) {
  $.checkState(this.output instanceof Output);
  sigtype = sigtype || Signature.SIGHASH_ALL;
  signingMethod = signingMethod || 'ecdsa'; // unused. Keeping for consistency with other libs

  const results = [];
  for (const publicKey of this.publicKeys || []) {
    if (publicKey.toString() === privateKey.publicKey.toString()) {
      results.push(new TransactionSignature({
        publicKey: privateKey.publicKey,
        prevTxId: this.prevTxId,
        outputIndex: this.outputIndex,
        inputIndex: index,
        signature: Sighash.sign(transaction, privateKey, sigtype, index, this.output.script),
        sigtype: sigtype
      }));
    }
  }

  return results;
};

MultiSigInput.prototype.addSignature = function(transaction, signature, signingMethod) {
  $.checkState(!this.isFullySigned(), 'All needed signatures have already been added');
  $.checkArgument(!_.isUndefined(this.publicKeyIndex[signature.publicKey.toString()], "Signature Undefined"),
    'Signature has no matching public key');
  $.checkState(this.isValidSignature(transaction, signature, signingMethod), "Invalid Signature");
  this.signatures[this.publicKeyIndex[signature.publicKey.toString()]] = signature;
  this._updateScript();
  return this;
};

MultiSigInput.prototype._updateScript = function() {
  this.setScript(Script.buildMultisigIn(
    this.publicKeys,
    this.threshold,
    this._createSignatures()
  ));
  return this;
};

MultiSigInput.prototype._createSignatures = function() {
  return _.map(
    _.filter(this.signatures, function(signature) { return !_.isUndefined(signature); }),
    // Future signature types may need refactor of toDER
    function(signature) {
      return BufferUtil.concat([
        signature.signature.toDER(),
        BufferUtil.integerAsSingleByteBuffer(signature.sigtype)
      ]);
    }
  );
};

MultiSigInput.prototype.clearSignatures = function() {
  this.signatures = new Array(this.publicKeys.length);
  this._updateScript();
};

MultiSigInput.prototype.isFullySigned = function() {
  return this.countSignatures() === this.threshold;
};

MultiSigInput.prototype.countMissingSignatures = function() {
  return this.threshold - this.countSignatures();
};

MultiSigInput.prototype.countSignatures = function() {
  return _.reduce(this.signatures, function(sum, signature) {
    return sum + (!!signature);
  }, 0);
};

MultiSigInput.prototype.publicKeysWithoutSignature = function() {
  var self = this;
  return _.filter(this.publicKeys, function(publicKey) {
    return !(self.signatures[self.publicKeyIndex[publicKey.toString()]]);
  });
};

MultiSigInput.prototype.isValidSignature = function(transaction, signature, signingMethod) {
  signingMethod = signingMethod || 'ecdsa'; // unused. Keeping for consistency with other libs
  // FIXME: Refactor signature so this is not necessary
  signature.signature.nhashtype = signature.sigtype;
  return Sighash.verify(
    transaction,
    signature.signature,
    signature.publicKey,
    signature.inputIndex,
    this.output.script
  );
};

/**
 *
 * @param {Buffer[]} signatures
 * @param {PublicKey[]} publicKeys
 * @param {Transaction} transaction
 * @param {Integer} inputIndex
 * @param {Input} input
 * @param {String} signingMethod DEPRECATED - method used to sign - 'ecdsa' or 'schnorr' (future signing method)
 * @returns {TransactionSignature[]}
 */
MultiSigInput.normalizeSignatures = function(transaction, input, inputIndex, signatures, publicKeys, signingMethod) {
  signingMethod = signingMethod || 'ecdsa'; // unused. Keeping for consistency with other libs

  return publicKeys.map(function (pubKey) {
    var signatureMatch = null;
    signatures = signatures.filter(function (signatureBuffer) {
      if (signatureMatch) {
        return true;
      }

      var signature = new TransactionSignature({
        signature: Signature.fromTxFormat(signatureBuffer),
        publicKey: pubKey,
        prevTxId: input.prevTxId,
        outputIndex: input.outputIndex,
        inputIndex: inputIndex,
        sigtype: Signature.SIGHASH_ALL
      });

      signature.signature.nhashtype = signature.sigtype;
      var isMatch = Sighash.verify(
          transaction,
          signature.signature,
          signature.publicKey,
          signature.inputIndex,
          input.output.script
      );

      if (isMatch) {
        signatureMatch = signature;
        return false;
      }

      return true;
    });

    return signatureMatch ? signatureMatch : null;
  });
};

MultiSigInput.OPCODES_SIZE = 1; // 0
MultiSigInput.SIGNATURE_SIZE = 73; // size (1) + DER (<=72)

MultiSigInput.prototype._estimateSize = function() {
  return this._getBaseSize() + MultiSigInput.OPCODES_SIZE +
    this.threshold * MultiSigInput.SIGNATURE_SIZE;
};

module.exports = MultiSigInput;


/***/ }),

/***/ 85302:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var PrivateKey = __webpack_require__(10555);
var PublicKey = __webpack_require__(969);
var Address = __webpack_require__(87089);
var BufferWriter = __webpack_require__(54878);
var ECDSA = __webpack_require__(65115);
var Signature = __webpack_require__(23825);
var sha256sha256 = (__webpack_require__(44499).sha256sha256);
var JSUtil = __webpack_require__(44371);
var $ = __webpack_require__(6213);

function Message(message) {
  if (!(this instanceof Message)) {
    return new Message(message);
  }
  $.checkArgument(_.isString(message), 'First argument should be a string');
  this.message = message;

  return this;
}

Message.MAGIC_BYTES = Buffer.from('Bitcoin Signed Message:\n');

Message.prototype.magicHash = function magicHash() {
  var prefix1 = BufferWriter.varintBufNum(Message.MAGIC_BYTES.length);
  var messageBuffer = Buffer.from(this.message);
  var prefix2 = BufferWriter.varintBufNum(messageBuffer.length);
  var buf = Buffer.concat([prefix1, Message.MAGIC_BYTES, prefix2, messageBuffer]);
  var hash = sha256sha256(buf);
  return hash;
};

Message.prototype._sign = function _sign(privateKey) {
  $.checkArgument(privateKey instanceof PrivateKey, 'First argument should be an instance of PrivateKey');
  const hash = this.magicHash();
  const sig = ECDSA.sign(hash, privateKey, { randomK: true });
  ECDSA.calci(hash, sig, privateKey.toPublicKey());
  return sig;
};

/**
 * Will sign a message with a given bitcoin private key.
 *
 * @param {PrivateKey} privateKey - An instance of PrivateKey
 * @returns {String} A base64 encoded compact signature
 */
Message.prototype.sign = function sign(privateKey) {
  var signature = this._sign(privateKey);
  return signature.toCompact().toString('base64');
};

Message.prototype._verify = function _verify(publicKey, signature) {
  $.checkArgument(publicKey instanceof PublicKey, 'First argument should be an instance of PublicKey');
  $.checkArgument(signature instanceof Signature, 'Second argument should be an instance of Signature');
  var hash = this.magicHash();
  var verified = ECDSA.verify(hash, signature, publicKey);
  if (!verified) {
    this.error = 'The signature was invalid';
  }
  return verified;
};

/**
 * Will return a boolean of the signature is valid for a given bitcoin address.
 * If it isn't the specific reason is accessible via the "error" member.
 *
 * @param {Address|String} bitcoinAddress - A bitcoin address
 * @param {String} signatureString - A base64 encoded compact signature
 * @returns {Boolean}
 */
Message.prototype.verify = function verify(bitcoinAddress, signatureString) {
  $.checkArgument(bitcoinAddress);
  $.checkArgument(signatureString && _.isString(signatureString));

  if (_.isString(bitcoinAddress)) {
    bitcoinAddress = Address.fromString(bitcoinAddress);
  }
  var signature = Signature.fromCompact(Buffer.from(signatureString, 'base64'));

  // recover the public key
  const hashbuf = this.magicHash();
  var publicKey = ECDSA.recoverPublicKey(hashbuf, signature);

  var signatureAddress = Address.fromPublicKey(publicKey, bitcoinAddress.network);

  // check that the recovered address and specified address match
  if (bitcoinAddress.toString() !== signatureAddress.toString()) {
    this.error = 'The signature did not match the message digest';
    return false;
  }

  return this._verify(publicKey, signature);
};

/**
 * Will return a public key string if the provided signature and the message digest is correct
 * If it isn't the specific reason is accessible via the "error" member.
 *
 * @param {Address|String} bitcoinAddress - A bitcoin address
 * @param {String} signatureString - A base64 encoded compact signature
 * @returns {String}
 */
Message.prototype.recoverPublicKey = function recoverPublicKey(bitcoinAddress, signatureString) {
  $.checkArgument(bitcoinAddress);
  $.checkArgument(signatureString && _.isString(signatureString));

  if (_.isString(bitcoinAddress)) {
    bitcoinAddress = Address.fromString(bitcoinAddress);
  }
  var signature = Signature.fromCompact(Buffer.from(signatureString, 'base64'));

  // recover the public key
  const hashbuf = this.magicHash();
  var publicKey = ECDSA.recoverPublicKey(hashbuf, signature);

  var signatureAddress = Address.fromPublicKey(publicKey, bitcoinAddress.network);

  // check that the recovered address and specified address match
  if (bitcoinAddress.toString() !== signatureAddress.toString()) {
    this.error = 'The signature did not match the message digest';
  }

  return publicKey.toString();
};

/**
 * Instantiate a message from a message string
 *
 * @param {String} str - A string of the message
 * @returns {Message} A new instance of a Message
 */
Message.fromString = function(str) {
  return new Message(str);
};

/**
 * Instantiate a message from JSON
 *
 * @param {String} json - An JSON string or Object with keys: message
 * @returns {Message} A new instance of a Message
 */
Message.fromJSON = function fromJSON(json) {
  if (JSUtil.isValidJSON(json)) {
    json = JSON.parse(json);
  }
  return new Message(json.message);
};

/**
 * @returns {Object} A plain object with the message information
 */
Message.prototype.toObject = function toObject() {
  return {
    message: this.message
  };
};

/**
 * @returns {String} A JSON representation of the message information
 */
Message.prototype.toJSON = function toJSON() {
  return JSON.stringify(this.toObject());
};

/**
 * Will return a the string representation of the message
 *
 * @returns {String} Message
 */
Message.prototype.toString = function() {
  return this.message;
};

/**
 * Will return a string formatted for the console
 *
 * @returns {String} Message
 */
Message.prototype.inspect = function() {
  return '<Message: ' + this.toString() + '>';
};

module.exports = Message;

var Script = __webpack_require__(91093);


/***/ }),

/***/ 85549:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var $ = __webpack_require__(6213);

var BN = __webpack_require__(62731);
var Base58 = __webpack_require__(49559);
var Base58Check = __webpack_require__(26303);
var Hash = __webpack_require__(44499);
var HDPrivateKey = __webpack_require__(92959);
var Network = __webpack_require__(33158);
var Point = __webpack_require__(49845);
var PublicKey = __webpack_require__(969);

var bitcoreErrors = __webpack_require__(66617);
var errors = bitcoreErrors;
var hdErrors = bitcoreErrors.HDPublicKey;
var assert = __webpack_require__(94148);

var JSUtil = __webpack_require__(44371);
var BufferUtil = __webpack_require__(56142);

/**
 * The representation of an hierarchically derived public key.
 *
 * See https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
 *
 * @constructor
 * @param {Object|string|Buffer} arg
 */
function HDPublicKey(arg) {
  /* jshint maxcomplexity: 12 */
  /* jshint maxstatements: 20 */
  if (arg instanceof HDPublicKey) {
    return arg;
  }
  if (!(this instanceof HDPublicKey)) {
    return new HDPublicKey(arg);
  }
  if (arg) {
    if (_.isString(arg) || BufferUtil.isBuffer(arg)) {
      var error = HDPublicKey.getSerializedError(arg);
      if (!error) {
        return this._buildFromSerialized(arg);
      } else if (BufferUtil.isBuffer(arg) && !HDPublicKey.getSerializedError(arg.toString())) {
        return this._buildFromSerialized(arg.toString());
      } else {
        if (error instanceof hdErrors.ArgumentIsPrivateExtended) {
          return new HDPrivateKey(arg).hdPublicKey;
        }
        throw error;
      }
    } else {
      if (_.isObject(arg)) {
        if (arg instanceof HDPrivateKey) {
          return this._buildFromPrivate(arg);
        } else {
          return this._buildFromObject(arg);
        }
      } else {
        throw new hdErrors.UnrecognizedArgument(arg);
      }
    }
  } else {
    throw new hdErrors.MustSupplyArgument();
  }
}

/**
 * Verifies that a given path is valid.
 *
 * @param {string|number} arg
 * @return {boolean}
 */
HDPublicKey.isValidPath = function(arg) {
  if (_.isString(arg)) {
    var indexes = HDPrivateKey._getDerivationIndexes(arg);
    return indexes !== null && _.every(indexes, HDPublicKey.isValidPath);
  }

  if (_.isNumber(arg)) {
    return arg >= 0 && arg < HDPublicKey.Hardened;
  }

  return false;
};

/**
 * WARNING: This method is deprecated. Use deriveChild instead.
 *
 *
 * Get a derivated child based on a string or number.
 *
 * If the first argument is a string, it's parsed as the full path of
 * derivation. Valid values for this argument include "m" (which returns the
 * same public key), "m/0/1/40/2/1000".
 *
 * Note that hardened keys can't be derived from a public extended key.
 *
 * If the first argument is a number, the child with that index will be
 * derived. See the example usage for clarification.
 *
 * @example
 * ```javascript
 * var parent = new HDPublicKey('xpub...');
 * var child_0_1_2 = parent.derive(0).derive(1).derive(2);
 * var copy_of_child_0_1_2 = parent.derive("m/0/1/2");
 * assert(child_0_1_2.xprivkey === copy_of_child_0_1_2);
 * ```
 *
 * @param {string|number} arg
 */
HDPublicKey.prototype.derive = function(arg, hardened) {
  return this.deriveChild(arg, hardened);
};

/**
 * WARNING: This method will not be officially supported until v1.0.0.
 *
 *
 * Get a derivated child based on a string or number.
 *
 * If the first argument is a string, it's parsed as the full path of
 * derivation. Valid values for this argument include "m" (which returns the
 * same public key), "m/0/1/40/2/1000".
 *
 * Note that hardened keys can't be derived from a public extended key.
 *
 * If the first argument is a number, the child with that index will be
 * derived. See the example usage for clarification.
 *
 * @example
 * ```javascript
 * var parent = new HDPublicKey('xpub...');
 * var child_0_1_2 = parent.deriveChild(0).deriveChild(1).deriveChild(2);
 * var copy_of_child_0_1_2 = parent.deriveChild("m/0/1/2");
 * assert(child_0_1_2.xprivkey === copy_of_child_0_1_2);
 * ```
 *
 * @param {string|number} arg
 */
HDPublicKey.prototype.deriveChild = function(arg, hardened) {
  if (_.isNumber(arg)) {
    return this._deriveWithNumber(arg, hardened);
  } else if (_.isString(arg)) {
    return this._deriveFromString(arg);
  } else {
    throw new hdErrors.InvalidDerivationArgument(arg);
  }
};

HDPublicKey.prototype._deriveWithNumber = function(index, hardened) {
  if (index >= HDPublicKey.Hardened || hardened) {
    throw new hdErrors.InvalidIndexCantDeriveHardened();
  }
  if (index < 0) {
    throw new hdErrors.InvalidPath(index);
  }

  var indexBuffer = BufferUtil.integerAsBuffer(index);
  var data = BufferUtil.concat([this.publicKey.toBuffer(), indexBuffer]);
  var hash = Hash.sha512hmac(data, this._buffers.chainCode);
  var leftPart = BN.fromBuffer(hash.slice(0, 32), {size: 32});
  var chainCode = hash.slice(32, 64);

  var publicKey;
  try {
    publicKey = PublicKey.fromPoint(Point.getG().mul(leftPart).add(this.publicKey.point));
  } catch (e) {
    return this._deriveWithNumber(index + 1);
  }

  var derived = new HDPublicKey({
    network: this.network,
    depth: this.depth + 1,
    parentFingerPrint: this.fingerPrint,
    childIndex: index,
    chainCode: chainCode,
    publicKey: publicKey
  });

  return derived;
};

HDPublicKey.prototype._deriveFromString = function(path) {
  /* jshint maxcomplexity: 8 */
  if (_.includes(path, "'")) {
    throw new hdErrors.InvalidIndexCantDeriveHardened();
  } else if (!HDPublicKey.isValidPath(path)) {
    throw new hdErrors.InvalidPath(path);
  }

  var indexes = HDPrivateKey._getDerivationIndexes(path);
  var derived = indexes.reduce(function(prev, index) {
    return prev._deriveWithNumber(index);
  }, this);

  return derived;
};

/**
 * Verifies that a given serialized public key in base58 with checksum format
 * is valid.
 *
 * @param {string|Buffer} data - the serialized public key
 * @param {string|Network=} network - optional, if present, checks that the
 *     network provided matches the network serialized.
 * @return {boolean}
 */
HDPublicKey.isValidSerialized = function(data, network) {
  return _.isNull(HDPublicKey.getSerializedError(data, network));
};

/**
 * Checks what's the error that causes the validation of a serialized public key
 * in base58 with checksum to fail.
 *
 * @param {string|Buffer} data - the serialized public key
 * @param {string|Network=} network - optional, if present, checks that the
 *     network provided matches the network serialized.
 * @return {errors|null}
 */
HDPublicKey.getSerializedError = function(data, network) {
  /* jshint maxcomplexity: 10 */
  /* jshint maxstatements: 20 */
  if (!(_.isString(data) || BufferUtil.isBuffer(data))) {
    return new hdErrors.UnrecognizedArgument('expected buffer or string');
  }
  if (!Base58.validCharacters(data)) {
    return new errors.InvalidB58Char('(unknown)', data);
  }
  try {
    data = Base58Check.decode(data);
  } catch (e) {
    return new errors.InvalidB58Checksum(data);
  }
  if (data.length !== HDPublicKey.DataSize) {
    return new hdErrors.InvalidLength(data);
  }
  if (!_.isUndefined(network)) {
    var error = HDPublicKey._validateNetwork(data, network);
    if (error) {
      return error;
    }
  }
  var version = BufferUtil.integerFromBuffer(data.slice(0, 4));
  if (version === Network.livenet.xprivkey || version === Network.testnet.xprivkey ) {
    return new hdErrors.ArgumentIsPrivateExtended();
  }
  return null;
};

HDPublicKey._validateNetwork = function(data, networkArg) {
  var network = Network.get(networkArg);
  if (!network) {
    return new errors.InvalidNetworkArgument(networkArg);
  }
  var version = data.slice(HDPublicKey.VersionStart, HDPublicKey.VersionEnd);
  if (BufferUtil.integerFromBuffer(version) !== network.xpubkey) {
    return new errors.InvalidNetwork(version);
  }
  return null;
};

HDPublicKey.prototype._buildFromPrivate = function (arg) {
  var args = _.clone(arg._buffers);
  var point = Point.getG().mul(BN.fromBuffer(args.privateKey));
  args.publicKey = Point.pointToCompressed(point);
  args.version = BufferUtil.integerAsBuffer(Network.get(BufferUtil.integerFromBuffer(args.version)).xpubkey);
  args.privateKey = undefined;
  args.checksum = undefined;
  args.xprivkey = undefined;
  return this._buildFromBuffers(args);
};

HDPublicKey.prototype._buildFromObject = function(arg) {
  /* jshint maxcomplexity: 10 */
  // TODO: Type validation
  var buffers = {
    version: arg.network ? BufferUtil.integerAsBuffer(Network.get(arg.network).xpubkey) : arg.version,
    depth: _.isNumber(arg.depth) ? BufferUtil.integerAsSingleByteBuffer(arg.depth) : arg.depth,
    parentFingerPrint: _.isNumber(arg.parentFingerPrint) ? BufferUtil.integerAsBuffer(arg.parentFingerPrint) : arg.parentFingerPrint,
    childIndex: _.isNumber(arg.childIndex) ? BufferUtil.integerAsBuffer(arg.childIndex) : arg.childIndex,
    chainCode: _.isString(arg.chainCode) ? Buffer.from(arg.chainCode,'hex') : arg.chainCode,
    publicKey: _.isString(arg.publicKey) ? Buffer.from(arg.publicKey,'hex') :
      BufferUtil.isBuffer(arg.publicKey) ? arg.publicKey : arg.publicKey.toBuffer(),
    checksum: _.isNumber(arg.checksum) ? BufferUtil.integerAsBuffer(arg.checksum) : arg.checksum
  };
  return this._buildFromBuffers(buffers);
};

HDPublicKey.prototype._buildFromSerialized = function(arg) {
  var decoded = Base58Check.decode(arg);
  var buffers = {
    version: decoded.slice(HDPublicKey.VersionStart, HDPublicKey.VersionEnd),
    depth: decoded.slice(HDPublicKey.DepthStart, HDPublicKey.DepthEnd),
    parentFingerPrint: decoded.slice(HDPublicKey.ParentFingerPrintStart,
                                     HDPublicKey.ParentFingerPrintEnd),
    childIndex: decoded.slice(HDPublicKey.ChildIndexStart, HDPublicKey.ChildIndexEnd),
    chainCode: decoded.slice(HDPublicKey.ChainCodeStart, HDPublicKey.ChainCodeEnd),
    publicKey: decoded.slice(HDPublicKey.PublicKeyStart, HDPublicKey.PublicKeyEnd),
    checksum: decoded.slice(HDPublicKey.ChecksumStart, HDPublicKey.ChecksumEnd),
    xpubkey: arg
  };
  return this._buildFromBuffers(buffers);
};

/**
 * Receives a object with buffers in all the properties and populates the
 * internal structure
 *
 * @param {Object} arg
 * @param {buffer.Buffer} arg.version
 * @param {buffer.Buffer} arg.depth
 * @param {buffer.Buffer} arg.parentFingerPrint
 * @param {buffer.Buffer} arg.childIndex
 * @param {buffer.Buffer} arg.chainCode
 * @param {buffer.Buffer} arg.publicKey
 * @param {buffer.Buffer} arg.checksum
 * @param {string=} arg.xpubkey - if set, don't recalculate the base58
 *      representation
 * @return {HDPublicKey} this
 */
HDPublicKey.prototype._buildFromBuffers = function(arg) {
  /* jshint maxcomplexity: 8 */
  /* jshint maxstatements: 20 */

  HDPublicKey._validateBufferArguments(arg);

  JSUtil.defineImmutable(this, {
    _buffers: arg
  });

  var sequence = [
    arg.version, arg.depth, arg.parentFingerPrint, arg.childIndex, arg.chainCode,
    arg.publicKey
  ];
  var concat = BufferUtil.concat(sequence);
  var checksum = Base58Check.checksum(concat);
  if (!arg.checksum || !arg.checksum.length) {
    arg.checksum = checksum;
  } else {
    if (arg.checksum.toString('hex') !== checksum.toString('hex')) {
      throw new errors.InvalidB58Checksum(concat, checksum);
    }
  }
  var network = Network.get(BufferUtil.integerFromBuffer(arg.version));

  var xpubkey;
  xpubkey = Base58Check.encode(BufferUtil.concat(sequence));
  arg.xpubkey = Buffer.from(xpubkey);

  var publicKey = new PublicKey(arg.publicKey, {network: network});
  var size = HDPublicKey.ParentFingerPrintSize;
  var fingerPrint = Hash.sha256ripemd160(publicKey.toBuffer()).slice(0, size);

  JSUtil.defineImmutable(this, {
    xpubkey: xpubkey,
    network: network,
    depth: BufferUtil.integerFromSingleByteBuffer(arg.depth),
    publicKey: publicKey,
    fingerPrint: fingerPrint
  });

  return this;
};

HDPublicKey._validateBufferArguments = function(arg) {
  var checkBuffer = function(name, size) {
    var buff = arg[name];
    assert(BufferUtil.isBuffer(buff), name + ' argument is not a buffer, it\'s ' + typeof buff);
    assert(
      buff.length === size,
      name + ' has not the expected size: found ' + buff.length + ', expected ' + size
    );
  };
  checkBuffer('version', HDPublicKey.VersionSize);
  checkBuffer('depth', HDPublicKey.DepthSize);
  checkBuffer('parentFingerPrint', HDPublicKey.ParentFingerPrintSize);
  checkBuffer('childIndex', HDPublicKey.ChildIndexSize);
  checkBuffer('chainCode', HDPublicKey.ChainCodeSize);
  checkBuffer('publicKey', HDPublicKey.PublicKeySize);
  if (arg.checksum && arg.checksum.length) {
    checkBuffer('checksum', HDPublicKey.CheckSumSize);
  }
};

HDPublicKey.fromString = function(arg) {
  $.checkArgument(_.isString(arg), 'No valid string was provided');
  return new HDPublicKey(arg);
};

HDPublicKey.fromObject = function(arg) {
  $.checkArgument(_.isObject(arg), 'No valid argument was provided');
  return new HDPublicKey(arg);
};

/**
 * Returns the base58 checked representation of the public key
 * @return {string} a string starting with "xpub..." in livenet
 */
HDPublicKey.prototype.toString = function() {
  return this.xpubkey;
};

/**
 * Returns the console representation of this extended public key.
 * @return string
 */
HDPublicKey.prototype.inspect = function() {
  return '<HDPublicKey: ' + this.xpubkey + '>';
};

/**
 * Returns a plain JavaScript object with information to reconstruct a key.
 *
 * Fields are: <ul>
 *  <li> network: 'livenet' or 'testnet'
 *  <li> depth: a number from 0 to 255, the depth to the master extended key
 *  <li> fingerPrint: a number of 32 bits taken from the hash of the public key
 *  <li> fingerPrint: a number of 32 bits taken from the hash of this key's
 *  <li>     parent's public key
 *  <li> childIndex: index with which this key was derived
 *  <li> chainCode: string in hexa encoding used for derivation
 *  <li> publicKey: string, hexa encoded, in compressed key format
 *  <li> checksum: BufferUtil.integerFromBuffer(this._buffers.checksum),
 *  <li> xpubkey: the string with the base58 representation of this extended key
 *  <li> checksum: the base58 checksum of xpubkey
 * </ul>
 */
HDPublicKey.prototype.toObject = HDPublicKey.prototype.toJSON = function toObject() {
  return {
    network: Network.get(BufferUtil.integerFromBuffer(this._buffers.version)).name,
    depth: BufferUtil.integerFromSingleByteBuffer(this._buffers.depth),
    fingerPrint: BufferUtil.integerFromBuffer(this.fingerPrint),
    parentFingerPrint: BufferUtil.integerFromBuffer(this._buffers.parentFingerPrint),
    childIndex: BufferUtil.integerFromBuffer(this._buffers.childIndex),
    chainCode: BufferUtil.bufferToHex(this._buffers.chainCode),
    publicKey: this.publicKey.toString(),
    checksum: BufferUtil.integerFromBuffer(this._buffers.checksum),
    xpubkey: this.xpubkey
  };
};

/**
 * Create a HDPublicKey from a buffer argument
 *
 * @param {Buffer} arg
 * @return {HDPublicKey}
 */
HDPublicKey.fromBuffer = function(arg) {
  return new HDPublicKey(arg);
};

/**
 * Return a buffer representation of the xpubkey
 *
 * @return {Buffer}
 */
HDPublicKey.prototype.toBuffer = function() {
  return BufferUtil.copy(this._buffers.xpubkey);
};

HDPublicKey.Hardened = 0x80000000;
HDPublicKey.RootElementAlias = ['m', 'M'];

HDPublicKey.VersionSize = 4;
HDPublicKey.DepthSize = 1;
HDPublicKey.ParentFingerPrintSize = 4;
HDPublicKey.ChildIndexSize = 4;
HDPublicKey.ChainCodeSize = 32;
HDPublicKey.PublicKeySize = 33;
HDPublicKey.CheckSumSize = 4;

HDPublicKey.DataSize = 78;
HDPublicKey.SerializedByteSize = 82;

HDPublicKey.VersionStart           = 0;
HDPublicKey.VersionEnd             = HDPublicKey.VersionStart + HDPublicKey.VersionSize;
HDPublicKey.DepthStart             = HDPublicKey.VersionEnd;
HDPublicKey.DepthEnd               = HDPublicKey.DepthStart + HDPublicKey.DepthSize;
HDPublicKey.ParentFingerPrintStart = HDPublicKey.DepthEnd;
HDPublicKey.ParentFingerPrintEnd   = HDPublicKey.ParentFingerPrintStart + HDPublicKey.ParentFingerPrintSize;
HDPublicKey.ChildIndexStart        = HDPublicKey.ParentFingerPrintEnd;
HDPublicKey.ChildIndexEnd          = HDPublicKey.ChildIndexStart + HDPublicKey.ChildIndexSize;
HDPublicKey.ChainCodeStart         = HDPublicKey.ChildIndexEnd;
HDPublicKey.ChainCodeEnd           = HDPublicKey.ChainCodeStart + HDPublicKey.ChainCodeSize;
HDPublicKey.PublicKeyStart         = HDPublicKey.ChainCodeEnd;
HDPublicKey.PublicKeyEnd           = HDPublicKey.PublicKeyStart + HDPublicKey.PublicKeySize;
HDPublicKey.ChecksumStart          = HDPublicKey.PublicKeyEnd;
HDPublicKey.ChecksumEnd            = HDPublicKey.ChecksumStart + HDPublicKey.CheckSumSize;

assert(HDPublicKey.PublicKeyEnd === HDPublicKey.DataSize);
assert(HDPublicKey.ChecksumEnd === HDPublicKey.SerializedByteSize);

module.exports = HDPublicKey;


/***/ }),

/***/ 86850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


/* jshint maxparams:5 */

const Signature = __webpack_require__(23825);
const BufferWriter = __webpack_require__(54878);
const Hash = __webpack_require__(44499);
const Schnorr = __webpack_require__(29521);
const $ = __webpack_require__(6213);
const TaggedHash = __webpack_require__(56743);
const PrivateKey = __webpack_require__(10555);

/**
 * Returns a buffer of length 32 bytes with the hash that needs to be signed
 * for witness v1 programs as defined by:
 * https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
 *
 * @name Signing.sighash
 * @param {Transaction} transaction the transaction to sign
 * @param {Number} sighashType the type of the hash
 * @param {Number} inputNumber the input index for the signature
 * @param {Number} sigversion Taproot or Tapscript version number
 * @param {Object} execdata Object with directives and data for creating the signature hash
 */
function _signatureHash(transaction, sighashType, inputNumber, sigversion, execdata) {
  let extFlag, keyVersion;

  switch (sigversion) {
    case Signature.Version.TAPROOT:
      extFlag = 0;
      // keyVersion is not used and left uninitialized.
      break;
    case Signature.Version.TAPSCRIPT:
      extFlag = 1;
      // keyVersion must be 0 for now, representing the current version of
      // 32-byte public keys in the tapscript signature opcode execution.
      // An upgradable public key version (with a size not 32-byte) may
      // request a different keyVersion with a new sigversion.
      keyVersion = 0;
      break;
    default:
      return false;
  }
  $.checkArgument(inputNumber < transaction.inputs.length, 'inputNumber is greater than number of inputs');

  const ss = TaggedHash.TAPSIGHASH;

  // Epoch
  ss.writeUInt8(0);

  // Hash type
  const outputType = (sighashType == Signature.SIGHASH_DEFAULT) ? Signature.SIGHASH_ALL : (sighashType & Signature.SIGHASH_OUTPUT_MASK); // Default (no sighash byte) is equivalent to SIGHASH_ALL
  const inputType = sighashType & Signature.SIGHASH_INPUT_MASK;
  if (!(sighashType <= 0x03 || (sighashType >= 0x81 && sighashType <= 0x83))) { // Check valid sighashtype (Signature.SIGHASH_*)
    return false;
  }
  ss.writeUInt8(sighashType);

  // Transaction level data
  ss.writeInt32LE(transaction.version);
  ss.writeUInt32LE(transaction.nLockTime);
  if (inputType !== Signature.SIGHASH_ANYONECANPAY) {
    const prevoutsBW = new BufferWriter();
    const spentAmountsBW = new BufferWriter();
    const spentScriptsBW = new BufferWriter();
    const sequencesBW = new BufferWriter();

    for(let vin of transaction.inputs) {
      prevoutsBW.writeReverse(vin.prevTxId);
      prevoutsBW.writeInt32LE(vin.outputIndex);

      spentAmountsBW.writeUInt64LEBN(vin.output._satoshisBN);

      const scriptBuf = vin.output.script.toBuffer();
      spentScriptsBW.writeUInt8(scriptBuf.length);
      spentScriptsBW.write(scriptBuf);

      sequencesBW.writeUInt32LE(vin.sequenceNumber);
    }

    // ss << cache.m_prevouts_single_hash;
    const prevoutsSingleHash = Hash.sha256(prevoutsBW.toBuffer());
    ss.write(prevoutsSingleHash);

    // ss << cache.m_spent_amounts_single_hash;
    const spentAmountsSingleHash = Hash.sha256(spentAmountsBW.toBuffer());
    ss.write(spentAmountsSingleHash);

    // ss << cache.m_spent_scripts_single_hash;
    const spentScriptsSingleHash = Hash.sha256(spentScriptsBW.toBuffer());
    ss.write(spentScriptsSingleHash);

    // ss << cache.m_sequences_single_hash;
    const sequencesSingleHash = Hash.sha256(sequencesBW.toBuffer());
    ss.write(sequencesSingleHash);
  }
  if (outputType === Signature.SIGHASH_ALL) {
    const outputsBW = new BufferWriter();
    for (let vout of transaction.outputs) {
      outputsBW.write(vout.toBufferWriter().toBuffer());
    }
    // ss << cache.m_outputs_single_hash;
    const outputsSingleHash = Hash.sha256(outputsBW.toBuffer());
    ss.write(outputsSingleHash);
  }

  // Data about the input/prevout being spent
  $.checkArgument(execdata.annexInit, 'missing or invalid annexInit');
  const spendType = (extFlag << 1) + (execdata.annexPresent ? 1 : 0); // The low bit indicates whether an annex is present.
  ss.writeUInt8(spendType);
  if (inputType === Signature.SIGHASH_ANYONECANPAY) {
    // ss << tx_to.vin[in_pos].prevout;
    const buf = new BufferWriter();
    buf.writeReverse(transaction.inputs[inputNumber].prevTxId);
    buf.writeInt32LE(transaction.inputs[inputNumber].outputIndex);
    ss.write(buf.toBuffer());
    // ss << cache.m_spent_outputs[inputNumber];
    ss.write(transaction.inputs[inputNumber].output.toBufferWriter().toBuffer());
    ss.writeUInt32LE(transaction.inputs[inputNumber].sequenceNumber);
  } else {
    ss.writeUInt32LE(inputNumber);
  }
  if (execdata.annexPresent) {
    ss.write(execdata.annexHash);
  }

  // Data about the output (if only one).
  if (outputType === Signature.SIGHASH_SINGLE) {
    if (inputNumber >= transaction.outputs.length) {
      return false;
    }
    const bw = new BufferWriter();
    bw.writeUInt64LEBN(transaction.outputs[inputNumber]._satoshisBN);
    const buf = transaction.outputs[inputNumber].script.toBuffer();
    bw.writeVarintNum(buf.length);
    bw.write(buf);
    ss.write(Hash.sha256(bw.toBuffer()));
  }

  // Additional data for BIP 342 signatures
  if (sigversion == Signature.Version.TAPSCRIPT) {
    $.checkArgument(execdata.tapleafHashInit, 'missing or invalid tapleafHashInit');
    ss.write(execdata.tapleafHash);
    ss.writeUInt8(keyVersion);
    $.checkArgument(execdata.codeseparatorPosInit, 'missing or invalid codeseparatorPosInit');
    ss.writeUInt32LE(execdata.codeseparatorPos);
  }

  // Return the SHA256 hash
  return ss.finalize();
};


function _getExecData(sigversion, leafHash) {
  const execdata = { annexInit: true, annexPresent: false };
  if (sigversion === Signature.Version.TAPSCRIPT) {
    execdata.codeseparatorPosInit = true;
    execdata.codeseparatorPos = 0xFFFFFFFF; // Only support non-OP_CODESEPARATOR BIP342 signing for now.
    if (!leafHash) return false; // BIP342 signing needs leaf hash.
    execdata.tapleafHashInit = true;
    execdata.tapleafHash = leafHash;
  }
  return execdata;
}


/**
 * Create a Schnorr signature
 *
 * @name Signing.sign
 * @param {Transaction} transaction
 * @param {Buffer|BN|PrivateKey} privateKey
 * @param {number} sighash
 * @param {number} inputIndex
 * @param {number} sigversion
 * @param {Buffer} leafHash
 * @return {Signature}
 */
function sign(transaction, privateKey, sighashType, inputIndex, sigversion, leafHash) {
  $.checkArgument(sigversion === Signature.Version.TAPROOT || sigversion === Signature.Version.TAPSCRIPT, 'Invalid sigversion');
  
  const execdata = _getExecData(sigversion, leafHash);
  const hashbuf = _signatureHash(transaction, sighashType, inputIndex, sigversion, execdata);
  if (!hashbuf) {
    return false;
  }
  const sig = Schnorr.sign(privateKey, hashbuf);
  if (sighashType !== Signature.SIGHASH_DEFAULT) {
    return Buffer.concat([sig, Buffer.from([sighashType])]); // 65 bytes
  }
  return sig; // 64 bytes
};


/**
 * Verify a Schnorr signature
 *
 * @name Signing.verify
 * @param {Transaction} transaction
 * @param {Signature} signature
 * @param {PublicKey} publicKey
 * @param {Number} inputIndex
 * @param {object|Buffer|null} execdata If given, can be full execdata object or just the leafHash buffer
 * @return {Boolean}
 */
function verify(transaction, signature, publicKey, sigversion, inputIndex, execdata) {
  $.checkArgument(transaction != null, 'Transaction Undefined');

  if (!execdata || Buffer.isBuffer(execdata)) {
    const leafHash = execdata;
    execdata = _getExecData(sigversion, leafHash);
  }

  $.checkArgument(execdata.annexInit, 'invalid execdata');

  const hashbuf = _signatureHash(transaction, signature.nhashtype, inputIndex, sigversion, execdata);
  if (!hashbuf) {
    return false;
  }
  const verified = Schnorr.verify(publicKey, hashbuf, signature);
  return verified;
};

/**
 * @namespace Signing
 */
module.exports = {
  sign: sign,
  verify: verify
};


/***/ }),

/***/ 87089:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var $ = __webpack_require__(6213);
var errors = __webpack_require__(66617);
var Base58Check = __webpack_require__(26303);
var Bech32 = __webpack_require__(2832);
var Networks = __webpack_require__(33158);
var Hash = __webpack_require__(44499);
var JSUtil = __webpack_require__(44371);
var PublicKey = __webpack_require__(969);

/**
 * Instantiate an address from an address String or Buffer, a public key or script hash Buffer,
 * or an instance of {@link PublicKey} or {@link Script}.
 *
 * This is an immutable class, and if the first parameter provided to this constructor is an
 * `Address` instance, the same argument will be returned.
 *
 * An address has two key properties: `network` and `type`. The type is one of
 * `Address.PayToPublicKeyHash` (value is the `'pubkeyhash'` string),
 * `Address.PayToScriptHash` (the string `'scripthash'`),
 * `Address.PayToWitnessPublicKeyHash` (the string `'witnesspubkeyhash'`),
 * or `Address.PayToWitnessScriptHash` (the string `'witnessscripthash'`).
 * The network is an instance of {@link Network}.
 * You can quickly check whether an address is of a given kind by using the methods
 * `isPayToPublicKeyHash`, `isPayToScriptHash`, `isPayToWitnessPublicKeyHash`,
 * and `isPayToWitnessScriptHash`.
 *
 * @example
 * ```javascript
 * // validate that an input field is valid
 * var error = Address.getValidationError(input, 'testnet');
 * if (!error) {
 *   var address = Address(input, 'testnet');
 * } else {
 *   // invalid network or checksum (typo?)
 *   var message = error.messsage;
 * }
 *
 * // get an address from a public key
 * var address = Address(publicKey, 'testnet').toString();
 * ```
 *
 * @param {*} data - The encoded data in various formats
 * @param {Network|String|number=} network - The network: 'livenet' or 'testnet'
 * @param {string=} type - The type of address: 'scripthash', 'pubkeyhash', witnessscripthash, 'witnesspubkeyhash', or 'taproot'
 * @param {string=} multisigType - The type of multisig: 'scripthash' or 'witnessscripthash'
 * @returns {Address} A new valid and frozen instance of an Address
 * @constructor
 */
function Address(data, network, type, multisigType) {
  /* jshint maxcomplexity: 12 */
  /* jshint maxstatements: 20 */

  if (!(this instanceof Address)) {
    return new Address(data, network, type);
  }

  if (_.isArray(data) && _.isNumber(network)) {
    return Address.createMultisig(data, network, type, false, multisigType);
  }

  if (data instanceof Address) {
    // Immutable instance
    return data;
  }

  $.checkArgument(data, 'First argument is required, please include address data.', 'guide/address.html');

  if (network && !Networks.get(network)) {
    throw new TypeError('Second argument must be "livenet" or "testnet".');
  }

  if (type && (
    type !== Address.PayToPublicKeyHash
    && type !== Address.PayToScriptHash
    && type !== Address.PayToWitnessPublicKeyHash
    && type !== Address.PayToWitnessScriptHash
    && type !== Address.PayToTaproot)) {
    throw new TypeError('Third argument must be "pubkeyhash", "scripthash", "witnesspubkeyhash", "witnessscripthash", or "taproot".');
  }

  var info = this._classifyArguments(data, network, type);

  // set defaults if not set
  info.network = info.network || Networks.get(network) || Networks.defaultNetwork;
  info.type = info.type || type || Address.PayToPublicKeyHash;

  JSUtil.defineImmutable(this, {
    hashBuffer: info.hashBuffer,
    network: info.network,
    type: info.type
  });

  return this;
}

/**
 * Internal function used to split different kinds of arguments of the constructor
 * @param {*} data - The encoded data in various formats
 * @param {Network|String|number=} network - The network: 'livenet' or 'testnet'
 * @param {string=} type - The type of address: 'script' or 'pubkey'
 * @returns {Object} An "info" object with "type", "network", and "hashBuffer"
 */
Address.prototype._classifyArguments = function(data, network, type) {
  /* jshint maxcomplexity: 10 */
  // transform and validate input data
  if ((data instanceof Buffer || data instanceof Uint8Array) && (data.length === 20 || data.length === 32)) {
    return Address._transformHash(data, network, type);
  } else if ((data instanceof Buffer || data instanceof Uint8Array) && data.length >= 21) {
    return Address._transformBuffer(data, network, type);
  } else if (data instanceof PublicKey) {
    return Address._transformPublicKey(data, network, type);
  } else if (data instanceof Script) {
    return Address._transformScript(data, network);
  } else if (typeof(data) === 'string') {
    return Address._transformString(data, network, type);
  } else if (_.isObject(data)) {
    return Address._transformObject(data);
  } else {
    throw new TypeError('First argument is an unrecognized data format.');
  }
};

/** @static */
Address.PayToPublicKeyHash = 'pubkeyhash';
/** @static */
Address.PayToScriptHash = 'scripthash';
/** @static */
Address.PayToWitnessPublicKeyHash = 'witnesspubkeyhash';
/** @static */
Address.PayToWitnessScriptHash = 'witnessscripthash';
/** @static */
Address.PayToTaproot = 'taproot';

/**
 * @param {Buffer} hash - An instance of a hash Buffer
 * @param {string} type - either 'pubkeyhash', 'scripthash', 'witnesspubkeyhash', or 'witnessscripthash'
 * @param {Network=} network - the name of the network associated
 * @returns {Object} An object with keys: hashBuffer
 * @private
 */
Address._transformHash = function(hash, network, type) {
  var info = {};
  if (!(hash instanceof Buffer) && !(hash instanceof Uint8Array)) {
    throw new TypeError('Address supplied is not a buffer.');
  }
  if (hash.length !== 20 && hash.length !== 32) {
    throw new TypeError('Address hashbuffers must be either 20 or 32 bytes.');
  }
  info.hashBuffer = hash;
  info.network = Networks.get(network) || Networks.defaultNetwork;
  info.type = type;
  return info;
};

/**
 * Deserializes an address serialized through `Address#toObject()`
 * @param {Object} data
 * @param {string} data.hash - the hash that this address encodes
 * @param {string} data.type - either 'pubkeyhash', 'scripthash', 'witnesspubkeyhash', or 'witnessscripthash'
 * @param {Network=} data.network - the name of the network associated
 * @return {Address}
 */
Address._transformObject = function(data) {
  $.checkArgument(data.hash || data.hashBuffer, 'Must provide a `hash` or `hashBuffer` property');
  $.checkArgument(data.type, 'Must provide a `type` property');
  return {
    hashBuffer: data.hash ? Buffer.from(data.hash, 'hex') : data.hashBuffer,
    network: Networks.get(data.network) || Networks.defaultNetwork,
    type: data.type
  };
};

/**
 * Internal function to discover the network and type based on the first data byte
 *
 * @param {Buffer} buffer - An instance of a hex encoded address Buffer
 * @returns {Object} An object with keys: network and type
 * @private
 */
Address._classifyFromVersion = function(buffer) {
  var version = {};

  if (buffer.length > 21) {
    var info = Bech32.decode(buffer.toString('utf8'));
    if (info.version !== 0 && info.version !== 1) { // v1 == taproot
      throw new TypeError('Only witness v0 and v1 addresses are supported.');
    }

    if (info.version === 0) {
      if (info.data.length === 20) {
        version.type = Address.PayToWitnessPublicKeyHash;
      } else if (info.data.length === 32) {
        version.type = Address.PayToWitnessScriptHash;
      } else {
        throw new TypeError('Witness data must be either 20 or 32 bytes.')
      }
    } else if (info.version === 1) {
      if (info.data.length === 32) {
        version.type = Address.PayToTaproot;
      } else {
        throw new TypeError('Witness data must be 32 bytes for v1');
      }
    } else {
    }
    version.network = Networks.get(info.prefix, 'bech32prefix');
  } else {

    var pubkeyhashNetwork = Networks.get(buffer[0], 'pubkeyhash');
    var scripthashNetwork = Networks.get(buffer[0], 'scripthash');

    if (pubkeyhashNetwork) {
      version.network = pubkeyhashNetwork;
      version.type = Address.PayToPublicKeyHash;
    } else if (scripthashNetwork) {
      version.network = scripthashNetwork;
      version.type = Address.PayToScriptHash;
    }
  }

  return version;
};

/**
 * Internal function to transform a bitcoin address buffer
 *
 * @param {Buffer} buffer - An instance of a hex encoded address Buffer
 * @param {string=} network - The network: 'livenet' or 'testnet'
 * @param {string=} type - The type: 'pubkeyhash', 'scripthash', 'witnesspubkeyhash', or 'witnessscripthash'
 * @returns {Object} An object with keys: hashBuffer, network and type
 * @private
 */
Address._transformBuffer = function(buffer, network, type) {
  /* jshint maxcomplexity: 9 */
  var info = {};
  if (!(buffer instanceof Buffer) && !(buffer instanceof Uint8Array)) {
    throw new TypeError('Address supplied is not a buffer.');
  }

  if (buffer.length < 21) {
    throw new TypeError('Address buffer is incorrect length.');
  }

  var networkObj = Networks.get(network);
  var bufferVersion = Address._classifyFromVersion(buffer);

  if (network && !networkObj) {
    throw new TypeError('Unknown network');
  }

  if (!bufferVersion.network || (networkObj && networkObj.xpubkey !== bufferVersion.network.xpubkey)) {
    throw new TypeError('Address has mismatched network type.');
  }

  if (!bufferVersion.type || (type && type !== bufferVersion.type)) {
    throw new TypeError('Address has mismatched type.');
  }

  if (buffer.length > 21) {
    info.hashBuffer = Bech32.decode(buffer.toString('utf8')).data;
  } else {
    info.hashBuffer = buffer.slice(1);
  }
  info.network = networkObj || bufferVersion.network;
  info.type = bufferVersion.type;
  return info;
};

/**
 * Internal function to transform a {@link PublicKey}
 *
 * @param {PublicKey} pubkey - An instance of PublicKey
 * @param {string} type - Either 'pubkeyhash', 'witnesspubkeyhash', 'scripthash', or 'taproot'
 * @returns {Object} An object with keys: hashBuffer, type
 * @private
 */
Address._transformPublicKey = function(pubkey, network, type) {
  var info = {};
  if (!(pubkey instanceof PublicKey)) {
    throw new TypeError('Address must be an instance of PublicKey.');
  }
  if (type && type !== Address.PayToScriptHash && type !== Address.PayToWitnessPublicKeyHash && type !== Address.PayToPublicKeyHash && type !== Address.PayToTaproot) {
    throw new TypeError('Type must be either pubkeyhash, witnesspubkeyhash, scripthash, or taproot to transform public key.');
  }
  if (!pubkey.compressed && (type === Address.PayToScriptHash || type === Address.PayToWitnessPublicKeyHash)) {
    throw new TypeError('Witness addresses must use compressed public keys.');
  }
  if (type === Address.PayToScriptHash) {
    info.hashBuffer = Hash.sha256ripemd160(Script.buildWitnessV0Out(pubkey).toBuffer());
  } else if (type === Address.PayToTaproot) {
    info.hashBuffer = pubkey.createTapTweak().tweakedPubKey;
  } else {
    info.hashBuffer = Hash.sha256ripemd160(pubkey.toBuffer());
  }
  info.type = type || Address.PayToPublicKeyHash;
  return info;
};

/**
 * Internal function to transform a {@link Script} into a `info` object.
 *
 * @param {Script} script - An instance of Script
 * @returns {Object} An object with keys: hashBuffer, type
 * @private
 */
Address._transformScript = function(script, network) {
  $.checkArgument(script instanceof Script, 'script must be a Script instance');
  var info = script.getAddressInfo(network);
  if (!info) {
    throw new errors.Script.CantDeriveAddress(script);
  }
  return info;
};

/**
 * Creates a P2SH address from a set of public keys and a threshold.
 *
 * The addresses will be sorted lexicographically, as that is the trend in bitcoin.
 * To create an address from unsorted public keys, use the {@link Script#buildMultisigOut}
 * interface.
 *
 * @param {Array} publicKeys - a set of public keys to create an address
 * @param {number} threshold - the number of signatures needed to release the funds
 * @param {String|Network} network - either a Network instance, 'livenet', or 'testnet'
 * @param {boolean=} nestedWitness - if the address uses a nested p2sh witness
 * @param {string} type - Either 'scripthash' or 'witnessscripthash'. If nestedWitness is set, then this is ignored
 * @return {Address}
 */
Address.createMultisig = function(publicKeys, threshold, network, nestedWitness, type) {
  network = network || publicKeys[0].network || Networks.defaultNetwork;
  if (type && type !== Address.PayToScriptHash && type !== Address.PayToWitnessScriptHash) {
    throw new TypeError('Type must be either scripthash or witnessscripthash to create multisig.');
  }
  if (nestedWitness || type === Address.PayToWitnessScriptHash) {
    publicKeys = _.map(publicKeys, PublicKey);
    for (var i = 0; i < publicKeys.length; i++) {
      if (!publicKeys[i].compressed) {
        throw new TypeError('Witness addresses must use compressed public keys.');
      }
    }
  }
  var redeemScript = Script.buildMultisigOut(publicKeys, threshold);
  if (nestedWitness) {
    return Address.payingTo(Script.buildWitnessMultisigOutFromScript(redeemScript), network);
  }
  return Address.payingTo(redeemScript, network, type);
};

/**
 * Internal function to transform a bitcoin address string
 *
 * @param {string} data
 * @param {String|Network=} network - either a Network instance, 'livenet', or 'testnet'
 * @param {string=} type - The type: 'pubkeyhash', 'scripthash', 'witnesspubkeyhash', or 'witnessscripthash'
 * @returns {Object} An object with keys: hashBuffer, network and type
 * @private
 */
Address._transformString = function(data, network, type) {
  if (typeof(data) !== 'string') {
    throw new TypeError('data parameter supplied is not a string.');
  }

  if(data.length > 100) {
    throw new TypeError('address string is too long');
  }

  if (network && !Networks.get(network)) {
    throw new TypeError('Unknown network');
  }

  data = data.trim();

  try {
    var info = Address._transformBuffer(Buffer.from(data, 'utf8'), network, type);
    return info;
  } catch (e) {
    if (type === Address.PayToWitnessPublicKeyHash || type === Address.PayToWitnessScriptHash || type === Address.PayToTaproot) {
      throw e;
    }
  }

  var addressBuffer = Base58Check.decode(data);
  var info = Address._transformBuffer(addressBuffer, network, type);
  return info;
};

/**
 * Instantiate an address from a PublicKey instance
 *
 * @param {PublicKey} data
 * @param {String|Network} network - either a Network instance, 'livenet', or 'testnet'
 * @param {string} type - Either 'pubkeyhash', 'witnesspubkeyhash', or 'scripthash'
 * @returns {Address} A new valid and frozen instance of an Address
 */
Address.fromPublicKey = function(data, network, type) {
  var info = Address._transformPublicKey(data, network, type);
  network = network || Networks.defaultNetwork;
  return new Address(info.hashBuffer, network, info.type);
};

/**
 * Instantiate an address from a ripemd160 public key hash
 *
 * @param {Buffer} hash - An instance of buffer of the hash
 * @param {String|Network} network - either a Network instance, 'livenet', or 'testnet'
 * @returns {Address} A new valid and frozen instance of an Address
 */
Address.fromPublicKeyHash = function(hash, network) {
  var info = Address._transformHash(hash);
  return new Address(info.hashBuffer, network, Address.PayToPublicKeyHash);
};

/**
 * Instantiate an address from a ripemd160 script hash
 *
 * @param {Buffer} hash - An instance of buffer of the hash
 * @param {String|Network} network - either a Network instance, 'livenet', or 'testnet'
 * @param {string} type - Either 'scripthash' or 'witnessscripthash'
 * @returns {Address} A new valid and frozen instance of an Address
 */
Address.fromScriptHash = function(hash, network, type) {
  $.checkArgument(hash, 'hash parameter is required');
  var info = Address._transformHash(hash);
  if (type === Address.PayToWitnessScriptHash && hash.length !== 32) {
      throw new TypeError('Address hashbuffer must be exactly 32 bytes for v0 witness script hash.');
  }
  var type = type || Address.PayToScriptHash;
  return new Address(info.hashBuffer, network, type);
};

/**
 * Builds a p2sh address paying to script. This will hash the script and
 * use that to create the address.
 * If you want to extract an address associated with a script instead,
 * see {{Address#fromScript}}
 *
 * @param {Script} script - An instance of Script
 * @param {String|Network} network - either a Network instance, 'livenet', or 'testnet'
 * @param {string} type - Either 'scripthash' or 'witnessscripthash'
 * @returns {Address} A new valid and frozen instance of an Address
 */
Address.payingTo = function(script, network, type) {
  $.checkArgument(script, 'script is required');
  $.checkArgument(script instanceof Script, 'script must be instance of Script');
  var hash;
  if (type === Address.PayToWitnessScriptHash) {
    hash = Hash.sha256(script.toBuffer());
  } else {
    hash = Hash.sha256ripemd160(script.toBuffer());
  }
  var type = type || Address.PayToScriptHash;
  return Address.fromScriptHash(hash, network, type);
};

/**
 * Extract address from a Script. The script must be of one
 * of the following types: p2pkh input, p2pkh output, p2sh input
 * or p2sh output.
 * This will analyze the script and extract address information from it.
 * If you want to transform any script to a p2sh Address paying
 * to that script's hash instead, use {{Address#payingTo}}
 *
 * @param {Script} script - An instance of Script
 * @param {String|Network} network - either a Network instance, 'livenet', or 'testnet'
 * @returns {Address} A new valid and frozen instance of an Address
 */
Address.fromScript = function(script, network) {
  $.checkArgument(script instanceof Script, 'script must be a Script instance');
  var info = Address._transformScript(script, network);
  return new Address(info.hashBuffer, network, info.type);
};

/**
 * Instantiate an address from a buffer of the address
 *
 * @param {Buffer} buffer - An instance of buffer of the address
 * @param {String|Network=} network - either a Network instance, 'livenet', or 'testnet'
 * @param {string=} type - The type of address: 'script' or 'pubkey'
 * @returns {Address} A new valid and frozen instance of an Address
 */
Address.fromBuffer = function(buffer, network, type) {
  var info = Address._transformBuffer(buffer, network, type);
  return new Address(info.hashBuffer, info.network, info.type);
};

/**
 * Instantiate an address from an address string
 *
 * @param {string} str - An string of the bitcoin address
 * @param {String|Network=} network - either a Network instance, 'livenet', or 'testnet'
 * @param {string=} type - The type of address: 'script' or 'pubkey'
 * @returns {Address} A new valid and frozen instance of an Address
 */
Address.fromString = function(str, network, type) {
  var info = Address._transformString(str, network, type);
  return new Address(info.hashBuffer, info.network, info.type);
};

/**
 * Instantiate an address from an Object
 *
 * @param {string} json - An JSON string or Object with keys: hash, network and type
 * @returns {Address} A new valid instance of an Address
 */
Address.fromObject = function fromObject(obj) {
  $.checkState(
    JSUtil.isHexa(obj.hash),
    'Unexpected hash property, "' + obj.hash + '", expected to be hex.'
  );
  var hashBuffer = Buffer.from(obj.hash, 'hex');
  return new Address(hashBuffer, obj.network, obj.type);
};

/**
 * Will return a validation error if exists
 *
 * @example
 * ```javascript
 * // a network mismatch error
 * var error = Address.getValidationError('15vkcKf7gB23wLAnZLmbVuMiiVDc1Nm4a2', 'testnet');
 * ```
 *
 * @param {string} data - The encoded data
 * @param {String|Network} network - either a Network instance, 'livenet', or 'testnet'
 * @param {string} type - The type of address: 'script' or 'pubkey'
 * @returns {null|Error} The corresponding error message
 */
Address.getValidationError = function(data, network, type) {
  var error;
  try {
    /* jshint nonew: false */
    new Address(data, network, type);
  } catch (e) {
    error = e;
  }
  return error;
};

/**
 * Will return a boolean if an address is valid
 *
 * @example
 * ```javascript
 * assert(Address.isValid('15vkcKf7gB23wLAnZLmbVuMiiVDc1Nm4a2', 'livenet'));
 * ```
 *
 * @param {string} data - The encoded data
 * @param {String|Network} network - either a Network instance, 'livenet', or 'testnet'
 * @param {string} type - The type of address: 'script' or 'pubkey'
 * @returns {boolean} The corresponding error message
 */
Address.isValid = function(data, network, type) {
  return !Address.getValidationError(data, network, type);
};

/**
 * Returns true if an address is of pay to public key hash type
 * @return boolean
 */
Address.prototype.isPayToPublicKeyHash = function() {
  return this.type === Address.PayToPublicKeyHash;
};

/**
 * Returns true if an address is of pay to script hash type
 * @return boolean
 */
Address.prototype.isPayToScriptHash = function() {
  return this.type === Address.PayToScriptHash;
};

/**
 * Returns true if an address is of pay to witness public key hash type
 * @return boolean
 */
Address.prototype.isPayToWitnessPublicKeyHash = function() {
  return this.type === Address.PayToWitnessPublicKeyHash;
};

/**
 * Returns true if an address is of pay to witness script hash type
 * @return boolean
 */
Address.prototype.isPayToWitnessScriptHash = function() {
  return this.type === Address.PayToWitnessScriptHash;
};

/**
 * Returns true if an address is of pay to Taproot script hash type
 * @returns {boolean}
 */
Address.prototype.isPayToTaproot = function() {
  return this.type === Address.PayToTaproot;
}

/**
 * Will return a buffer representation of the address
 *
 * @returns {Buffer} Bitcoin address buffer
 */
Address.prototype.toBuffer = function() {
  if (this.isPayToWitnessPublicKeyHash() || this.isPayToWitnessScriptHash()) {
    return Buffer.from(this.toString(), 'utf8')
  }
  var version = Buffer.from([this.network[this.type]]);
  return Buffer.concat([version, this.hashBuffer]);
};

/**
 * @returns {Object} A plain object with the address information
 */
Address.prototype.toObject = Address.prototype.toJSON = function toObject() {
  return {
    hash: this.hashBuffer.toString('hex'),
    type: this.type,
    network: this.network.toString()
  };
};

/**
 * Will return a the string representation of the address
 *
 * @returns {string} Bitcoin address
 */
Address.prototype.toString = function() {
  if (this.isPayToWitnessPublicKeyHash() || this.isPayToWitnessScriptHash() || this.isPayToTaproot()) {
    let prefix = this.network.bech32prefix;
    let version = 0;
    let encoding = Bech32.encodings.BECH32;
    if (this.isPayToTaproot()) {
      version = 1;
      encoding = Bech32.encodings.BECH32M;
    }
    return Bech32.encode(prefix, version, this.hashBuffer, encoding);
  }
  return Base58Check.encode(this.toBuffer());
};

/**
 * Will return a string formatted for the console
 *
 * @returns {string} Bitcoin address
 */
Address.prototype.inspect = function() {
  return '<Address: ' + this.toString() + ', type: ' + this.type + ', network: ' + this.network + '>';
};

module.exports = Address;

var Script = __webpack_require__(91093);


/***/ }),

/***/ 91093:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(70566);

module.exports.Interpreter = __webpack_require__(69807);


/***/ }),

/***/ 91182:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2543);
var $ = __webpack_require__(6213);
var JSUtil = __webpack_require__(44371);

var Script = __webpack_require__(91093);
var Address = __webpack_require__(87089);
var Unit = __webpack_require__(78495);

/**
 * Represents an unspent output information: its script, associated amount and address,
 * transaction id and output index.
 *
 * @constructor
 * @param {object} data
 * @param {string} data.txid the previous transaction id
 * @param {string=} data.txId alias for `txid`
 * @param {number} data.vout the index in the transaction
 * @param {number=} data.outputIndex alias for `vout`
 * @param {string|Script} data.scriptPubKey the script that must be resolved to release the funds
 * @param {string|Script=} data.script alias for `scriptPubKey`
 * @param {number} data.amount amount of bitcoins associated
 * @param {number=} data.satoshis alias for `amount`, but expressed in satoshis (1 BTC = 1e8 satoshis)
 * @param {string|Address=} data.address the associated address to the script, if provided
 */
function UnspentOutput(data) {
  /* jshint maxcomplexity: 20 */
  /* jshint maxstatements: 20 */
  if (!(this instanceof UnspentOutput)) {
    return new UnspentOutput(data);
  }
  $.checkArgument(_.isObject(data), 'Must provide an object from where to extract data');
  var address = data.address ? new Address(data.address) : undefined;
  var txId = data.txid ? data.txid : data.txId;
  if (!txId || !JSUtil.isHexaString(txId) || txId.length > 64) {
    // TODO: Use the errors library
    throw new Error('Invalid TXID in object', data);
  }
  var outputIndex = _.isUndefined(data.vout) ? data.outputIndex : data.vout;
  if (!_.isNumber(outputIndex)) {
    throw new Error('Invalid outputIndex, received ' + outputIndex);
  }
  $.checkArgument(!_.isUndefined(data.scriptPubKey) || !_.isUndefined(data.script),
                  'Must provide the scriptPubKey for that output!');
  var script = new Script(data.scriptPubKey || data.script);
  $.checkArgument(!_.isUndefined(data.amount) || !_.isUndefined(data.satoshis),
                      'Must provide an amount for the output');
  var amount = !_.isUndefined(data.amount) ? new Unit.fromBTC(data.amount).toSatoshis() : data.satoshis;
  $.checkArgument(_.isNumber(amount), 'Amount must be a number');
  JSUtil.defineImmutable(this, {
    address: address,
    txId: txId,
    outputIndex: outputIndex,
    script: script,
    satoshis: amount
  });
}

/**
 * Provide an informative output when displaying this object in the console
 * @returns string
 */
UnspentOutput.prototype.inspect = function() {
  return '<UnspentOutput: ' + this.txId + ':' + this.outputIndex +
         ', satoshis: ' + this.satoshis + ', address: ' + this.address + '>';
};

/**
 * String representation: just "txid:index"
 * @returns string
 */
UnspentOutput.prototype.toString = function() {
  return this.txId + ':' + this.outputIndex;
};

/**
 * Deserialize an UnspentOutput from an object
 * @param {object|string} data
 * @return UnspentOutput
 */
UnspentOutput.fromObject = function(data) {
  return new UnspentOutput(data);
};

/**
 * Returns a plain object (no prototype or methods) with the associated info for this output
 * @return {object}
 */
UnspentOutput.prototype.toObject = UnspentOutput.prototype.toJSON = function toObject() {
  return {
    address: this.address ? this.address.toString() : undefined,
    txid: this.txId,
    vout: this.outputIndex,
    scriptPubKey: this.script.toBuffer().toString('hex'),
    amount: Unit.fromSatoshis(this.satoshis).toBTC()
  };
};

module.exports = UnspentOutput;


/***/ }),

/***/ 92202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var $ = __webpack_require__(6213);
var buffer = __webpack_require__(48287);
var compare = Buffer.compare || __webpack_require__(25113);

var errors = __webpack_require__(66617);
var BufferUtil = __webpack_require__(56142);
var JSUtil = __webpack_require__(44371);
var BufferReader = __webpack_require__(69118);
var BufferWriter = __webpack_require__(54878);
var Hash = __webpack_require__(44499);
var Signature = __webpack_require__(23825);
var Sighash = __webpack_require__(99039);
var SighashWitness = __webpack_require__(39368);
const SighashSchnorr = __webpack_require__(86850);

var Address = __webpack_require__(87089);
var UnspentOutput = __webpack_require__(91182);
var Input = __webpack_require__(96509);
var PublicKeyHashInput = Input.PublicKeyHash;
var PublicKeyInput = Input.PublicKey;
var MultiSigScriptHashInput = Input.MultiSigScriptHash;
var MultiSigInput = Input.MultiSig;
const TaprootInput = Input.Taproot;
var Output = __webpack_require__(42109);
var Script = __webpack_require__(91093);
var PrivateKey = __webpack_require__(10555);
var BN = __webpack_require__(62731);

/**
 * Represents a transaction, a set of inputs and outputs to change ownership of tokens
 *
 * @param {*} serialized
 * @constructor
 */
function Transaction(serialized, opts) {
  if (!(this instanceof Transaction)) {
    return new Transaction(serialized);
  }
  this.inputs = [];
  this.outputs = [];
  this._inputAmount = undefined;
  this._outputAmount = undefined;

  if (serialized) {
    if (serialized instanceof Transaction) {
      return Transaction.shallowCopy(serialized);
    } else if (JSUtil.isHexa(serialized)) {
      this.fromString(serialized);
    } else if (BufferUtil.isBuffer(serialized)) {
      this.fromBuffer(serialized);
    } else if (_.isObject(serialized)) {
      this.fromObject(serialized, opts);
    } else {
      throw new errors.InvalidArgument('Must provide an object or string to deserialize a transaction');
    }
  } else {
    this._newTransaction();
  }
}
var CURRENT_VERSION = 2;
var DEFAULT_NLOCKTIME = 0;
var MAX_BLOCK_SIZE = 1000000;

// Minimum amount for an output for it not to be considered a dust output
Transaction.DUST_AMOUNT = 546;

// Margin of error to allow fees in the vecinity of the expected value but doesn't allow a big difference
Transaction.FEE_SECURITY_MARGIN = 150;

// max amount of satoshis in circulation
Transaction.MAX_MONEY = 21000000 * 1e8;

// nlocktime limit to be considered block height rather than a timestamp
Transaction.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8;

// Max value for an unsigned 32 bit value
Transaction.NLOCKTIME_MAX_VALUE = 4294967295;

// Value used for fee estimation (satoshis per kilobyte)
Transaction.FEE_PER_KB = 100000;

// Safe upper bound for change address script size in bytes
Transaction.CHANGE_OUTPUT_MAX_SIZE = 20 + 4 + 34 + 4;
Transaction.MAXIMUM_EXTRA_SIZE = 4 + 9 + 9 + 4;

/* Constructors and Serialization */

/**
 * Create a 'shallow' copy of the transaction, by serializing and deserializing
 * it dropping any additional information that inputs and outputs may have hold
 *
 * @param {Transaction} transaction
 * @return {Transaction}
 */
Transaction.shallowCopy = function(transaction) {
  var copy = new Transaction(transaction.toBuffer());
  return copy;
};

var hashProperty = {
  configurable: false,
  enumerable: true,
  get: function() {
    this._hash = new BufferReader(this._getHash()).readReverse().toString('hex');
    return this._hash;
  }
};

var witnessHashProperty = {
  configurable: false,
  enumerable: true,
  get: function() {
    return new BufferReader(this._getWitnessHash()).readReverse().toString('hex');
  }
};

Object.defineProperty(Transaction.prototype, 'witnessHash', witnessHashProperty);
Object.defineProperty(Transaction.prototype, 'hash', hashProperty);
Object.defineProperty(Transaction.prototype, 'id', hashProperty);

var ioProperty = {
  configurable: false,
  enumerable: true,
  get: function() {
    return this._getInputAmount();
  }
};
Object.defineProperty(Transaction.prototype, 'inputAmount', ioProperty);
ioProperty.get = function() {
  return this._getOutputAmount();
};
Object.defineProperty(Transaction.prototype, 'outputAmount', ioProperty);

Object.defineProperty(Transaction.prototype, 'size', {
  configurable: false,
  enumerable: false,
  get: function() {
    return this._calculateSize();
  }
});

Object.defineProperty(Transaction.prototype, 'vsize', {
  configurable: false,
  enumerable: false,
  get: function() {
    return this._calculateVSize();
  }
});

Object.defineProperty(Transaction.prototype, 'weight', {
  configurable: false,
  enumerable: false,
  get: function() {
    return this._calculateWeight();
  }
});

/**
 * Retrieve the little endian hash of the transaction (used for serialization)
 * @return {Buffer}
 */
Transaction.prototype._getHash = function() {
  return Hash.sha256sha256(this.toBuffer(true));
};

/**
 * Retrieve the little endian hash of the transaction including witness data
 * @return {Buffer}
 */
Transaction.prototype._getWitnessHash = function() {
  return Hash.sha256sha256(this.toBuffer(false));
};

/**
 * Retrieve a hexa string that can be used with bitcoind's CLI interface
 * (decoderawtransaction, sendrawtransaction)
 *
 * @param {Object|boolean=} unsafe if true, skip all tests. if it's an object,
 *   it's expected to contain a set of flags to skip certain tests:
 * * `disableAll`: disable all checks
 * * `disableSmallFees`: disable checking for fees that are too small
 * * `disableLargeFees`: disable checking for fees that are too large
 * * `disableIsFullySigned`: disable checking if all inputs are fully signed
 * * `disableDustOutputs`: disable checking if there are no outputs that are dust amounts
 * * `disableMoreOutputThanInput`: disable checking if the transaction spends more bitcoins than the sum of the input amounts
 * @return {string}
 */
Transaction.prototype.serialize = function(unsafe) {
  if (true === unsafe || unsafe && unsafe.disableAll) {
    return this.uncheckedSerialize();
  } else {
    return this.checkedSerialize(unsafe);
  }
};

Transaction.prototype.uncheckedSerialize = Transaction.prototype.toString = function() {
  return this.toBuffer().toString('hex');
};

/**
 * Retrieve a hexa string that can be used with bitcoind's CLI interface
 * (decoderawtransaction, sendrawtransaction)
 *
 * @param {Object} opts allows to skip certain tests. {@see Transaction#serialize}
 * @return {string}
 */
Transaction.prototype.checkedSerialize = function(opts) {
  var serializationError = this.getSerializationError(opts);
  if (serializationError) {
    serializationError.message += ' - For more information please see: ' +
      'https://github.com/bitpay/bitcore/blob/master/packages/bitcore-lib/docs/transaction.md#serialization-checks';
    throw serializationError;
  }
  return this.uncheckedSerialize();
};

Transaction.prototype.invalidSatoshis = function() {
  var invalid = false;
  for (var i = 0; i < this.outputs.length; i++) {
    if (this.outputs[i].invalidSatoshis()) {
      invalid = true;
    }
  }
  return invalid;
};

/**
 * Retrieve a possible error that could appear when trying to serialize and
 * broadcast this transaction.
 *
 * @param {Object} opts allows to skip certain tests. {@see Transaction#serialize}
 * @return {bitcore.Error}
 */
Transaction.prototype.getSerializationError = function(opts) {
  opts = opts || {};

  if (this.invalidSatoshis()) {
    return new errors.Transaction.InvalidSatoshis();
  }

  var unspent = this._getUnspentValue();
  var unspentError;
  if (unspent < 0) {
    if (!opts.disableMoreOutputThanInput) {
      unspentError = new errors.Transaction.InvalidOutputAmountSum();
    }
  } else {
    unspentError = this._hasFeeError(opts, unspent);
  }

  return unspentError ||
    this._hasDustOutputs(opts) ||
    this._isMissingSignatures(opts);
};

Transaction.prototype._hasFeeError = function(opts, unspent) {

  if (this._fee != null && this._fee !== unspent) {
    return new errors.Transaction.FeeError.Different(
      'Unspent value is ' + unspent + ' but specified fee is ' + this._fee
    );
  }

  if (!opts.disableLargeFees) {
    var maximumFee = Math.floor(Transaction.FEE_SECURITY_MARGIN * this._estimateFee());
    if (unspent > maximumFee) {
      if (this._missingChange()) {
        return new errors.Transaction.ChangeAddressMissing(
          'Fee is too large and no change address was provided'
        );
      }
      return new errors.Transaction.FeeError.TooLarge(
        'expected less than ' + maximumFee + ' but got ' + unspent
      );
    }
  }

  if (!opts.disableSmallFees) {
    var minimumFee = Math.ceil(this._estimateFee() / Transaction.FEE_SECURITY_MARGIN);
    if (unspent < minimumFee) {
      return new errors.Transaction.FeeError.TooSmall(
        'expected more than ' + minimumFee + ' but got ' + unspent
      );
    }
  }
};

Transaction.prototype._missingChange = function() {
  return !this._changeScript;
};

Transaction.prototype._hasDustOutputs = function(opts) {
  if (opts.disableDustOutputs) {
    return;
  }
  var index, output;
  for (index in this.outputs) {
    output = this.outputs[index];
    if (output.satoshis < Transaction.DUST_AMOUNT && !output.script.isDataOut()) {
      return new errors.Transaction.DustOutputs();
    }
  }
};

Transaction.prototype._isMissingSignatures = function(opts) {
  if (opts.disableIsFullySigned) {
    return;
  }
  if (!this.isFullySigned()) {
    return new errors.Transaction.MissingSignatures();
  }
};

Transaction.prototype.inspect = function() {
  return '<Transaction: ' + this.uncheckedSerialize() + '>';
};

Transaction.prototype.toBuffer = function(noWitness) {
  var writer = new BufferWriter();
  return this.toBufferWriter(writer, noWitness).toBuffer();
};

Transaction.prototype.hasWitnesses = function() {
  for (var i = 0; i < this.inputs.length; i++) {
    if (this.inputs[i].hasWitnesses()) {
      return true;
    }
  }
  return false;
};

Transaction.prototype.toBufferWriter = function(writer, noWitness) {
  writer.writeInt32LE(this.version);

  const hasWitnesses = this.hasWitnesses();

  if (hasWitnesses && !noWitness) {
    writer.write(Buffer.from('0001', 'hex'));
  }

  writer.writeVarintNum(this.inputs ? this.inputs.length : 0);
  for (const input of this.inputs || []) {
    input.toBufferWriter(writer);
  }

  writer.writeVarintNum(this.outputs ? this.outputs.length : 0);
  for (const output of this.outputs || []) {
    output.toBufferWriter(writer);
  }

  if (hasWitnesses && !noWitness) {
    for (const input of this.inputs) {
      const witnesses = input.getWitnesses();
      writer.writeVarintNum(witnesses.length);
      for (let j = 0; j < witnesses.length; j++) {
        writer.writeVarintNum(witnesses[j].length);
        writer.write(witnesses[j]);
      }
    }
  }

  writer.writeUInt32LE(this.nLockTime);
  return writer;
};

Transaction.prototype.fromBuffer = function(buffer) {
  var reader = new BufferReader(buffer);
  return this.fromBufferReader(reader);
};

Transaction.prototype.fromBufferReader = function(reader) {
  $.checkArgument(!reader.finished(), 'No transaction data received');

  this.version = reader.readInt32LE();
  var sizeTxIns = reader.readVarintNum();

  // check for segwit
  var hasWitnesses = false;
  if (sizeTxIns === 0 && reader.buf[reader.pos] !== 0) {
    reader.pos += 1;
    hasWitnesses = true;
    sizeTxIns = reader.readVarintNum();
  }

  for (var i = 0; i < sizeTxIns; i++) {
    var input = Input.fromBufferReader(reader);
    this.inputs.push(input);
  }

  var sizeTxOuts = reader.readVarintNum();
  for (var j = 0; j < sizeTxOuts; j++) {
    this.outputs.push(Output.fromBufferReader(reader));
  }

  if (hasWitnesses) {
    for (var k = 0; k < sizeTxIns; k++) {
      var itemCount = reader.readVarintNum();
      var witnesses = [];
      for (var l = 0; l < itemCount; l++) {
        var size = reader.readVarintNum();
        var item = reader.read(size);
        witnesses.push(item);
      }
      this.inputs[k].setWitnesses(witnesses);
    }
  }

  this.nLockTime = reader.readUInt32LE();
  return this;
};


Transaction.prototype.toObject = Transaction.prototype.toJSON = function toObject() {
  var inputs = [];
  this.inputs.forEach(function(input) {
    inputs.push(input.toObject());
  });
  var outputs = [];
  this.outputs.forEach(function(output) {
    outputs.push(output.toObject());
  });
  var obj = {
    hash: this.hash,
    version: this.version,
    inputs: inputs,
    outputs: outputs,
    nLockTime: this.nLockTime
  };
  if (this._changeScript) {
    obj.changeScript = this._changeScript.toString();
  }
  if (this._changeIndex != null) {
    obj.changeIndex = this._changeIndex;
  }
  if (this._fee != null) {
    obj.fee = this._fee;
  }
  return obj;
};

Transaction.prototype.fromObject = function fromObject(arg, opts) {
  /* jshint maxstatements: 20 */
  $.checkArgument(_.isObject(arg) || arg instanceof Transaction);
  var transaction;
  if (arg instanceof Transaction) {
    transaction = arg.toObject();
  } else {
    transaction = arg;
  }
  for (const input of transaction.inputs || []) {
    if (!input.output || !input.output.script) {
      this.uncheckedAddInput(new Input(input));
      continue;
    }
    var script = new Script(input.output.script);
    var txin;
    if ((script.isScriptHashOut() || script.isWitnessScriptHashOut()) && input.publicKeys && input.threshold) {
      txin = new Input.MultiSigScriptHash(
        input, input.publicKeys, input.threshold, input.signatures, opts
      );
    } else if (script.isPublicKeyHashOut() || script.isWitnessPublicKeyHashOut() || script.isScriptHashOut()) {
      txin = new Input.PublicKeyHash(input);
    } else if (script.isPublicKeyOut()) {
      txin = new Input.PublicKey(input);
    } else {
      throw new errors.Transaction.Input.UnsupportedScript(input.output.script);
    }
    this.addInput(txin);
  }
  for (const output of transaction.outputs || []) {
    this.addOutput(new Output(output));
  }
  if (transaction.changeIndex) {
    this._changeIndex = transaction.changeIndex;
  }
  if (transaction.changeScript) {
    this._changeScript = new Script(transaction.changeScript);
  }
  if (transaction.fee) {
    this._fee = transaction.fee;
  }
  this.nLockTime = transaction.nLockTime;
  this.version = transaction.version;
  this._checkConsistency(arg);
  return this;
};

Transaction.prototype._checkConsistency = function(arg) {
  if (this._changeIndex != null) {
    $.checkState(this._changeScript, 'Change script is expected.');
    $.checkState(this.outputs[this._changeIndex], 'Change index points to undefined output.');
    $.checkState(this.outputs[this._changeIndex].script.toString() ===
      this._changeScript.toString(), 'Change output has an unexpected script.');
  }
  if (arg && arg.hash) {
    $.checkState(arg.hash === this.hash, 'Hash in object does not match transaction hash.');
  }
};

/**
 * Sets nLockTime so that transaction is not valid until the desired date(a
 * timestamp in seconds since UNIX epoch is also accepted)
 *
 * @param {Date | Number} time
 * @return {Transaction} this
 */
Transaction.prototype.lockUntilDate = function(time) {
  $.checkArgument(time);
  if (!isNaN(time) && time < Transaction.NLOCKTIME_BLOCKHEIGHT_LIMIT) {
    throw new errors.Transaction.LockTimeTooEarly();
  }
  if (_.isDate(time)) {
    time = time.getTime() / 1000;
  }

  for (var i = 0; i < this.inputs.length; i++) {
    if (this.inputs[i].sequenceNumber === Input.DEFAULT_SEQNUMBER){
      this.inputs[i].sequenceNumber = Input.DEFAULT_LOCKTIME_SEQNUMBER;
    }
  }

  this.nLockTime = time;
  return this;
};

/**
 * Sets nLockTime so that transaction is not valid until the desired block
 * height.
 *
 * @param {Number} height
 * @return {Transaction} this
 */
Transaction.prototype.lockUntilBlockHeight = function(height) {
  $.checkArgument(!isNaN(height));
  if (height >= Transaction.NLOCKTIME_BLOCKHEIGHT_LIMIT) {
    throw new errors.Transaction.BlockHeightTooHigh();
  }
  if (height < 0) {
    throw new errors.Transaction.NLockTimeOutOfRange();
  }

  for (var i = 0; i < this.inputs.length; i++) {
    if (this.inputs[i].sequenceNumber === Input.DEFAULT_SEQNUMBER){
      this.inputs[i].sequenceNumber = Input.DEFAULT_LOCKTIME_SEQNUMBER;
    }
  }


  this.nLockTime = height;
  return this;
};

/**
 *  Returns a semantic version of the transaction's nLockTime.
 *  @return {Number|Date}
 *  If nLockTime is 0, it returns null,
 *  if it is < 500000000, it returns a block height (number)
 *  else it returns a Date object.
 */
Transaction.prototype.getLockTime = function() {
  if (!this.nLockTime) {
    return null;
  }
  if (this.nLockTime < Transaction.NLOCKTIME_BLOCKHEIGHT_LIMIT) {
    return this.nLockTime;
  }
  return new Date(1000 * this.nLockTime);
};

Transaction.prototype.fromString = function(string) {
  this.fromBuffer(buffer.Buffer.from(string, 'hex'));
};

Transaction.prototype._newTransaction = function() {
  this.version = CURRENT_VERSION;
  this.nLockTime = DEFAULT_NLOCKTIME;
};

/* Transaction creation interface */

/**
 * @typedef {Object} Transaction~fromObject
 * @property {string} prevTxId
 * @property {number} outputIndex
 * @property {(Buffer|string|Script)} script
 * @property {number} satoshis
 */

/**
 * Add an input to this transaction. This is a high level interface
 * to add an input, for more control, use @{link Transaction#addInput}.
 *
 * Can receive, as output information, the output of bitcoind's `listunspent` command,
 * and a slightly fancier format recognized by bitcore:
 *
 * ```
 * {
 *  address: 'mszYqVnqKoQx4jcTdJXxwKAissE3Jbrrc1',
 *  txId: 'a477af6b2667c29670467e4e0728b685ee07b240235771862318e29ddbe58458',
 *  outputIndex: 0,
 *  script: Script.empty(),
 *  satoshis: 1020000
 * }
 * ```
 * Where `address` can be either a string or a bitcore Address object. The
 * same is true for `script`, which can be a string or a bitcore Script.
 *
 * Beware that this resets all the signatures for inputs (in further versions,
 * SIGHASH_SINGLE or SIGHASH_NONE signatures will not be reset).
 *
 * @example
 * ```javascript
 * var transaction = new Transaction();
 *
 * // From a pay to public key hash output from bitcoind's listunspent
 * transaction.from({'txid': '0000...', vout: 0, amount: 0.1, scriptPubKey: 'OP_DUP ...'});
 *
 * // From a pay to public key hash output
 * transaction.from({'txId': '0000...', outputIndex: 0, satoshis: 1000, script: 'OP_DUP ...'});
 *
 * // From a multisig P2SH output
 * transaction.from({'txId': '0000...', inputIndex: 0, satoshis: 1000, script: '... OP_HASH'},
 *                  ['03000...', '02000...'], 2);
 * ```
 *
 * @param {(Array.<Transaction~fromObject>|Transaction~fromObject)} utxo
 * @param {Array=} pubkeys
 * @param {number=} threshold
 * @param {Object=} opts - Several options:
 *        - noSorting: defaults to false, if true and is multisig, don't
 *                      sort the given public keys before creating the script
 */
Transaction.prototype.from = function(utxo, pubkeys, threshold, opts) {
  if (Array.isArray(utxo)) {
    for(const u of utxo) {
      this.from(u, pubkeys, threshold, opts);
    };
    return this;
  }
  const exists = this.inputs.some(function(input) {
    // TODO: Maybe prevTxId should be a string? Or defined as read only property?
    return input.prevTxId.toString('hex') === utxo.txId && input.outputIndex === utxo.outputIndex;
  });
  if (exists) {
    return this;
  }
  if (pubkeys && threshold) {
    this._fromMultisigUtxo(utxo, pubkeys, threshold, opts);
  } else {
    this._fromNonP2SH(utxo, opts);
  }
  return this;
};

/**
 * associateInputs - Update inputs with utxos, allowing you to specify value, and pubkey.
 * Populating these inputs allows for them to be signed with .sign(privKeys)
 *
 * @param {Array<Object>} utxos
 * @param {Array<string | PublicKey>} pubkeys
 * @param {number} threshold
 * @param {Object} opts
 * @returns {Array<number>}
 */
Transaction.prototype.associateInputs = function(utxos, pubkeys, threshold, opts = {}) {
  let indexes = [];
  for(let utxo of utxos) {
    const index = this.inputs.findIndex(i => i.prevTxId.toString('hex') === utxo.txId && i.outputIndex === utxo.outputIndex);
    indexes.push(index);
    if(index >= 0) {
      const sequenceNumber = this.inputs[index].sequenceNumber; // preserve the set sequence number
      this.inputs[index] = this._getInputFrom(utxo, pubkeys, threshold, opts);
      this.inputs[index].sequenceNumber = sequenceNumber;
    }
  }
  return indexes;
}


Transaction.prototype._selectInputType = function(utxo, pubkeys, threshold) {
  var clazz;
  utxo = new UnspentOutput(utxo);
  if(pubkeys && threshold) {
    if (utxo.script.isMultisigOut()) {
      clazz = MultiSigInput;
    } else if (utxo.script.isScriptHashOut() || utxo.script.isWitnessScriptHashOut()) {
      clazz = MultiSigScriptHashInput;
    }
  } else if (utxo.script.isPublicKeyHashOut() || utxo.script.isWitnessPublicKeyHashOut() || utxo.script.isScriptHashOut()) {
    clazz = PublicKeyHashInput;
  } else if (utxo.script.isTaproot()) {
    clazz = TaprootInput;
  } else if (utxo.script.isPublicKeyOut()) {
    clazz = PublicKeyInput;
  } else {
    clazz = Input;
  }
  return clazz;
}


Transaction.prototype._getInputFrom = function(utxo, pubkeys, threshold, opts = {}) {
  utxo = new UnspentOutput(utxo);
  const InputClass = this._selectInputType(utxo, pubkeys, threshold);
  const input = {
    output: new Output({
      script: utxo.script,
      satoshis: utxo.satoshis
    }),
    prevTxId: utxo.txId,
    outputIndex: utxo.outputIndex,
    sequenceNumber: opts.sequenceNumber,
    script: Script.empty()
  };
  let args = pubkeys && threshold ? [pubkeys, threshold, false, opts] : []
  return new InputClass(input, ...args);
}

Transaction.prototype._fromNonP2SH = function(utxo, opts) {
  const input = this._getInputFrom(utxo, null, null, opts);
  this.addInput(input);
};

Transaction.prototype._fromMultisigUtxo = function(utxo, pubkeys, threshold, opts) {
  $.checkArgument(threshold <= pubkeys.length,
    'Number of required signatures must be greater than the number of public keys');
  const input = this._getInputFrom(utxo, pubkeys, threshold, opts);
  this.addInput(input);
};

/**
 * Add an input to this transaction. The input must be an instance of the `Input` class.
 * It should have information about the Output that it's spending, but if it's not already
 * set, two additional parameters, `outputScript` and `satoshis` can be provided.
 *
 * @param {Input} input
 * @param {String|Script} outputScript
 * @param {number} satoshis
 * @return Transaction this, for chaining
 */
Transaction.prototype.addInput = function(input, outputScript, satoshis) {
  $.checkArgumentType(input, Input, 'input');
  if (!input.output && (outputScript == null || satoshis == null)) {
    throw new errors.Transaction.NeedMoreInfo('Need information about the UTXO script and satoshis');
  }
  if (!input.output && outputScript && satoshis != null) {
    outputScript = outputScript instanceof Script ? outputScript : new Script(outputScript);
    $.checkArgumentType(satoshis, 'number', 'satoshis');
    input.output = new Output({
      script: outputScript,
      satoshis: satoshis
    });
  }
  return this.uncheckedAddInput(input);
};

/**
 * Add an input to this transaction, without checking that the input has information about
 * the output that it's spending.
 *
 * @param {Input} input
 * @return Transaction this, for chaining
 */
Transaction.prototype.uncheckedAddInput = function(input) {
  $.checkArgumentType(input, Input, 'input');
  this.inputs.push(input);
  this._inputAmount = undefined;
  this._updateChangeOutput();
  return this;
};

/**
 * Returns true if the transaction has enough info on all inputs to be correctly validated
 *
 * @return {boolean}
 */
Transaction.prototype.hasAllUtxoInfo = function() {
  return this.inputs.every(function(input) {
    return !!input.output;
  });
};

/**
 * Manually set the fee for this transaction. Beware that this resets all the signatures
 * for inputs (in further versions, SIGHASH_SINGLE or SIGHASH_NONE signatures will not
 * be reset).
 *
 * @param {number} amount satoshis to be sent
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.fee = function(amount) {
  $.checkArgument(!isNaN(amount), 'amount must be a number');
  this._fee = amount;
  this._updateChangeOutput();
  return this;
};

/**
 * Manually set the fee per KB for this transaction. Beware that this resets all the signatures
 * for inputs (in further versions, SIGHASH_SINGLE or SIGHASH_NONE signatures will not
 * be reset).
 *
 * @param {number} amount satoshis per KB to be sent
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.feePerKb = function(amount) {
  $.checkArgument(!isNaN(amount), 'amount must be a number');
  this._feePerKb = amount;
  this._updateChangeOutput();
  return this;
};

/**
 * Manually set the fee per Byte for this transaction. Beware that this resets all the signatures
 * for inputs (in further versions, SIGHASH_SINGLE or SIGHASH_NONE signatures will not
 * be reset).
 * fee per Byte will be ignored if fee per KB is set
 *
 * @param {number} amount satoshis per Byte to be sent
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.feePerByte = function (amount) {
  $.checkArgument(!isNaN(amount), 'amount must be a number');
  this._feePerByte = amount;
  this._updateChangeOutput();
  return this;
};

/* Output management */

/**
 * Set the change address for this transaction
 *
 * Beware that this resets all the signatures for inputs (in further versions,
 * SIGHASH_SINGLE or SIGHASH_NONE signatures will not be reset).
 *
 * @param {Address} address An address for change to be sent to.
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.change = function(address) {
  $.checkArgument(address, 'address is required');
  this._changeScript = Script.fromAddress(address);
  this._updateChangeOutput();
  return this;
};


/**
 * @return {Output} change output, if it exists
 */
Transaction.prototype.getChangeOutput = function() {
  if (this._changeIndex != null) {
    return this.outputs[this._changeIndex];
  }
  return null;
};

/**
 * @typedef {Object} Transaction~toObject
 * @property {(string|Address)} address
 * @property {number} satoshis
 */

/**
 * Add an output to the transaction.
 *
 * Beware that this resets all the signatures for inputs (in further versions,
 * SIGHASH_SINGLE or SIGHASH_NONE signatures will not be reset).
 *
 * @param {(string|Address|Array.<Transaction~toObject>)} address
 * @param {number} amount in satoshis
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.to = function(address, amount) {
  if (Array.isArray(address)) {
    for (const to of address) {
      this.to(to.address, to.satoshis);
    }
    return this;
  }

  $.checkArgument(
    JSUtil.isNaturalNumber(amount),
    'Amount is expected to be a positive integer'
  );
  this.addOutput(new Output({
    script: Script(new Address(address)),
    satoshis: amount
  }));
  return this;
};

/**
 * Add an OP_RETURN output to the transaction.
 *
 * Beware that this resets all the signatures for inputs (in further versions,
 * SIGHASH_SINGLE or SIGHASH_NONE signatures will not be reset).
 *
 * @param {Buffer|string} value the data to be stored in the OP_RETURN output.
 *    In case of a string, the UTF-8 representation will be stored
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.addData = function(value) {
  this.addOutput(new Output({
    script: Script.buildDataOut(value),
    satoshis: 0
  }));
  return this;
};


/**
 * Add an output to the transaction.
 *
 * @param {Output} output the output to add.
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.addOutput = function(output) {
  $.checkArgumentType(output, Output, 'output');
  this._addOutput(output);
  this._updateChangeOutput();
  return this;
};


/**
 * Remove all outputs from the transaction.
 *
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.clearOutputs = function() {
  this.outputs = [];
  this._clearSignatures();
  this._outputAmount = undefined;
  this._changeIndex = undefined;
  this._updateChangeOutput();
  return this;
};


Transaction.prototype._addOutput = function(output) {
  this.outputs.push(output);
  this._outputAmount = undefined;
};


/**
 * Calculates or gets the total output amount in satoshis
 *
 * @return {Number} the transaction total output amount
 */
Transaction.prototype._getOutputAmount = function() {
  if (this._outputAmount == null) {
    var self = this;
    this._outputAmount = 0;
    for (const output of this.outputs || []) {
      self._outputAmount += output.satoshis;
    }
  }
  return this._outputAmount;
};


/**
 * Calculates or gets the total input amount in satoshis
 *
 * @return {Number} the transaction total input amount
 */
Transaction.prototype._getInputAmount = function() {
  if (this._inputAmount == null) {
    this._inputAmount = _.sumBy(this.inputs, function(input) {
      if (input.output == null) {
        throw new errors.Transaction.Input.MissingPreviousOutput();
      }
      return input.output.satoshis;
    });
  }
  return this._inputAmount;
};

Transaction.prototype._updateChangeOutput = function(noClearSigs) {
  if (!this._changeScript) {
    return;
  }
  if (!noClearSigs) {
    this._clearSignatures();
  }
  if (this._changeIndex != null) {
    this._removeOutput(this._changeIndex);
  }
  var available = this._getUnspentValue();
  var fee = this.getFee();
  var changeAmount = available - fee;
  if (changeAmount > Transaction.DUST_AMOUNT) {
    this._changeIndex = this.outputs.length;
    this._addOutput(new Output({
      script: this._changeScript,
      satoshis: changeAmount
    }));
  } else {
    this._changeIndex = undefined;
  }
};
/**
 * Calculates the fee of the transaction.
 *
 * If there's a fixed fee set, return that.
 *
 * If there is no change output set, the fee is the
 * total value of the outputs minus inputs. Note that
 * a serialized transaction only specifies the value
 * of its outputs. (The value of inputs are recorded
 * in the previous transaction outputs being spent.)
 * This method therefore raises a "MissingPreviousOutput"
 * error when called on a serialized transaction.
 *
 * If there's no fee set and no change address,
 * estimate the fee based on size.
 *
 * @return {Number} fee of this transaction in satoshis
 */
Transaction.prototype.getFee = function() {
  if (this.isCoinbase()) {
    return 0;
  }
  if (this._fee != null) {
    return this._fee;
  }
  // if no change output is set, fees should equal all the unspent amount
  if (!this._changeScript) {
    return this._getUnspentValue();
  }
  return this._estimateFee();
};

/**
 * Estimates fee from serialized transaction size in bytes.
 */
Transaction.prototype._estimateFee = function () {
  const estimatedSize = this._estimateSize();
  const available = this._getUnspentValue();
  const feeRate = this._feePerByte || (this._feePerKb || Transaction.FEE_PER_KB) / 1000;
  function getFee(size) {
    return size * feeRate;
  }
  const fee = Math.ceil(getFee(estimatedSize));
  const feeWithChange = Math.ceil(getFee(estimatedSize) + getFee(this._estimateSizeOfChangeOutput()));
  if (!this._changeScript || available <= feeWithChange) {
    return fee;
  }
  return feeWithChange;
};

Transaction.prototype._estimateSizeOfChangeOutput = function () {
  if (!this._changeScript) {
    return 0;
  }
  const scriptLen = this._changeScript.toBuffer().length;
  // 8 bytes for satoshis + script size + actual script size
  return 8 + BufferWriter.varintBufNum(scriptLen).length + scriptLen;
};

Transaction.prototype._getUnspentValue = function() {
  return this._getInputAmount() - this._getOutputAmount();
};

Transaction.prototype._clearSignatures = function() {
  for (const input of this.inputs || []) {
    input.clearSignatures();
  }
};

/**
 * Estimate the tx size before input signatures are added.
 */
Transaction.prototype._estimateSize = function() {
  let result = 4; // version

  if (this.hasWitnesses()) {
    result += .5;
  }

  result += BufferWriter.varintBufNum(this.inputs.length).length;
  for (const input of this.inputs || []) {
    result += input._estimateSize();
  }

  result += BufferWriter.varintBufNum(this.outputs.length).length;
  for (const output of this.outputs || []) {
    result += output.calculateSize();
  }

  result += 4; // nLockTime
  return Math.ceil(result);
};

Transaction.prototype._calculateSize = function() {
  return this.toBuffer().length;
};

Transaction.prototype._calculateVSize = function(noRound) {
  const vsize = this._calculateWeight() / 4;
  return noRound ? vsize : Math.ceil(vsize);
};

Transaction.prototype._calculateWeight = function() {
  return (this.toBuffer(true).length * 3) + this.toBuffer(false).length;
};

Transaction.prototype._removeOutput = function(index) {
  var output = this.outputs[index];
  this.outputs = _.without(this.outputs, output);
  this._outputAmount = undefined;
};

Transaction.prototype.removeOutput = function(index) {
  this._removeOutput(index);
  this._updateChangeOutput();
};

/**
 * Sort a transaction's inputs and outputs according to BIP69
 *
 * @see {https://github.com/bitcoin/bips/blob/master/bip-0069.mediawiki}
 * @return {Transaction} this
 */
Transaction.prototype.sort = function() {
  this.sortInputs(function(inputs) {
    var copy = Array.prototype.concat.apply([], inputs);
    let i = 0;
    copy.forEach((x) => { x.i = i++});
    copy.sort(function(first, second) {
     return compare(first.prevTxId, second.prevTxId)
        || first.outputIndex - second.outputIndex
        || first.i - second.i;  // to ensure stable sort
    });
    return copy;
  });
  this.sortOutputs(function(outputs) {
    var copy = Array.prototype.concat.apply([], outputs);
    let i = 0;
    copy.forEach((x) => { x.i = i++});
    copy.sort(function(first, second) {
      return first.satoshis - second.satoshis
        || compare(first.script.toBuffer(), second.script.toBuffer())
        || first.i - second.i;  // to ensure stable sort
    });
    return copy;
  });
  return this;
};

/**
 * Randomize this transaction's outputs ordering. The shuffling algorithm is a
 * version of the Fisher-Yates shuffle, provided by lodash's _.shuffle().
 *
 * @return {Transaction} this
 */
Transaction.prototype.shuffleOutputs = function() {
  return this.sortOutputs(_.shuffle);
};

/**
 * Sort this transaction's outputs, according to a given sorting function that
 * takes an array as argument and returns a new array, with the same elements
 * but with a different order. The argument function MUST NOT modify the order
 * of the original array
 *
 * @param {Function} sortingFunction
 * @return {Transaction} this
 */
Transaction.prototype.sortOutputs = function(sortingFunction) {
  var outs = sortingFunction(this.outputs);
  return this._newOutputOrder(outs);
};

/**
 * Sort this transaction's inputs, according to a given sorting function that
 * takes an array as argument and returns a new array, with the same elements
 * but with a different order.
 *
 * @param {Function} sortingFunction
 * @return {Transaction} this
 */
Transaction.prototype.sortInputs = function(sortingFunction) {
  this.inputs = sortingFunction(this.inputs);
  this._clearSignatures();
  return this;
};

Transaction.prototype._newOutputOrder = function(newOutputs) {
  var isInvalidSorting = (this.outputs.length !== newOutputs.length ||
                          _.difference(this.outputs, newOutputs).length !== 0);
  if (isInvalidSorting) {
    throw new errors.Transaction.InvalidSorting();
  }

  if (this._changeIndex != null) {
    var changeOutput = this.outputs[this._changeIndex];
    this._changeIndex = newOutputs.indexOf(changeOutput);
  }

  this.outputs = newOutputs;
  return this;
};

Transaction.prototype.removeInput = function(txId, outputIndex) {
  var index;
  if (!outputIndex && !isNaN(txId)) {
    index = txId;
  } else {
    index = this.inputs.findIndex(function(input) {
      return input.prevTxId.toString('hex') === txId && input.outputIndex === outputIndex;
    });
  }
  if (index < 0 || index >= this.inputs.length) {
    throw new errors.Transaction.InvalidIndex(index, this.inputs.length);
  }
  var input = this.inputs[index];
  this.inputs = _.without(this.inputs, input);
  this._inputAmount = undefined;
  this._updateChangeOutput();
};

/* Signature handling */

/**
 * Sign the transaction using one or more private keys.
 *
 * It tries to sign each input, verifying that the signature will be valid
 * (matches a public key).
 *
 * @param {Array|String|PrivateKey} privateKey
 * @param {number} sigtype
 * @param {String} signingMethod - method used to sign - 'ecdsa' or 'schnorr'
 * @param {Buffer|String} merkleRoot - merkle root for taproot signing
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.sign = function(privateKey, sigtype, signingMethod, merkleRoot) {
  $.checkState(this.hasAllUtxoInfo(), 'Not all utxo information is available to sign the transaction.');
  if (Array.isArray(privateKey)) {
    for (const pk of privateKey) {
      this.sign(pk, sigtype, signingMethod, merkleRoot);
    }
    return this;
  }
  for (const signature of this.getSignatures(privateKey, sigtype, signingMethod, merkleRoot)) {
    this.applySignature(signature, signingMethod);
  }
  return this;
};

Transaction.prototype.getSignatures = function(privKey, sigtype, signingMethod, merkleRoot) {
  if (typeof merkleRoot === 'string') {
    merkleRoot = Buffer.from(merkleRoot, 'hex');
  }
  privKey = new PrivateKey(privKey);
  const results = [];
  const hashData = Hash.sha256ripemd160(privKey.publicKey.toBuffer());
  for (let i = 0; i < this.inputs.length; i++) {
    const input = this.inputs[i];
    for (const signature of input.getSignatures(this, privKey, i, sigtype, hashData, signingMethod, merkleRoot)) {
      results.push(signature);
    }
  }
  return results;
};

/**
 * Add a signature to the transaction
 *
 * @param {Object} signature
 * @param {number} signature.inputIndex
 * @param {number} signature.sigtype
 * @param {PublicKey} signature.publicKey
 * @param {Signature} signature.signature
 * @param {String} signingMethod - 'ecdsa' to sign transaction
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.applySignature = function(signature, signingMethod) {
  this.inputs[signature.inputIndex].addSignature(this, signature, signingMethod);
  return this;
};

Transaction.prototype.isFullySigned = function() {
  for (const input of this.inputs || []) {
    if (input.isFullySigned === Input.prototype.isFullySigned) {
      throw new errors.Transaction.UnableToVerifySignature(
        'Unrecognized script kind, or not enough information to execute script.' +
        'This usually happens when creating a transaction from a serialized transaction'
      );
    }
  }
  return this.inputs.every(function(input) {
    return input.isFullySigned();
  });
};

Transaction.prototype.isValidSignature = function(signature, signingMethod) {
  if (this.inputs[signature.inputIndex].isValidSignature === Input.prototype.isValidSignature) {
    throw new errors.Transaction.UnableToVerifySignature(
      'Unrecognized script kind, or not enough information to execute script.' +
      'This usually happens when creating a transaction from a serialized transaction'
    );
  }
  return this.inputs[signature.inputIndex].isValidSignature(this, signature, signingMethod);
};


/**
 * Verify ECDSA signature
 * @param {Signature} sig 
 * @param {PublicKey} pubkey 
 * @param {Number} nin 
 * @param {Script} subscript 
 * @param {Number} satoshis 
 * @returns {Boolean}
 */
Transaction.prototype.checkEcdsaSignature = function(sig, pubkey, nin, subscript, satoshis) {
  var subscriptBuffer = subscript.toBuffer();
  var scriptCodeWriter = new BufferWriter();
  scriptCodeWriter.writeVarintNum(subscriptBuffer.length);
  scriptCodeWriter.write(subscriptBuffer);

  var satoshisBuffer;
  if (satoshis) {
    $.checkState(JSUtil.isNaturalNumber(satoshis), 'satoshis needs to be a natural number');
    satoshisBuffer = new BufferWriter().writeUInt64LEBN(new BN(satoshis)).toBuffer();
  } else {
    satoshisBuffer = this.inputs[nin].getSatoshisBuffer();
  }
  var verified = SighashWitness.verify(
    this,
    sig,
    pubkey,
    nin,
    scriptCodeWriter.toBuffer(),
    satoshisBuffer
  );
  return verified;
};


/**
 * Verify Schnorr signature
 * @param {Signature|Buffer} sig 
 * @param {PublicKey|Buffer} pubkey 
 * @param {Number} nin 
 * @param {Number} sigversion 
 * @param {Object} execdata 
 * @returns {Boolean}
 */
Transaction.prototype.checkSchnorrSignature = function(sig, pubkey, nin, sigversion, execdata) {
  if ($.isType(pubkey, 'PublicKey')) {
    pubkey = pubkey.point.x.toBuffer();
  }
  $.checkArgument(pubkey && pubkey.length === 32, 'Schnorr signatures have 32-byte public keys. The caller is responsible for enforcing this.');

  if (Buffer.isBuffer(sig)) {
    if (sig.length !== 64 && sig.length !== 65) {
      return false;
    }
    sig = Signature.fromSchnorr(sig);
  }
  // Note that in Tapscript evaluation, empty signatures are treated specially (invalid signature that does not
  // abort script execution). This is implemented in Interpreter.evalChecksigTapscript, which won't invoke
  // CheckSchnorrSignature in that case. In other contexts, they are invalid like every other signature with
  // size different from 64 or 65.
  $.checkArgument(sig.isSchnorr, 'Signature must be schnorr');

  if (!SighashSchnorr.verify(this, sig, pubkey, sigversion, nin, execdata)) {
    return false;
  }
  return true;
};

/**
 * This is here largely for legacy reasons. However, if the sig type
 * is already known (via sigversion), then it would be better to call
 * checkEcdsaSignature or checkSchnorrSignature directly.
 * @param {Signature|Buffer} sig Signature to verify
 * @param {PublicKey|Buffer} pubkey Public key used to verify sig
 * @param {Number} nin Tx input index to verify signature against
 * @param {Script} subscript ECDSA only
 * @param {Number} sigversion See Signature.Version for valid versions (default: 0 or Signature.Version.BASE)
 * @param {Number} satoshis ECDSA only
 * @param {Object} execdata Schnorr only
 * @returns {Boolean} whether the signature is valid for this transaction input
 */
Transaction.prototype.verifySignature = function(sig, pubkey, nin, subscript, sigversion, satoshis, execdata) {
  if (sigversion == null) {
    sigversion = Signature.Version.BASE;
  }

  switch(sigversion) {
    case Signature.Version.WITNESS_V0:
      return this.checkEcdsaSignature(sig, pubkey, nin, subscript, satoshis);
    case Signature.Version.TAPROOT:
    case Signature.Version.TAPSCRIPT:
      return this.checkSchnorrSignature(sig, pubkey, nin, sigversion, execdata);
    case Signature.Version.BASE:
    default:
      return Sighash.verify(this, sig, pubkey, nin, subscript);
  }
};

/**
 * Check that a transaction passes basic sanity tests. If not, return a string
 * describing the error. This function contains the same logic as
 * CheckTransaction in bitcoin core.
 */
Transaction.prototype.verify = function() {
  // Basic checks that don't depend on any context
  if (this.inputs.length === 0) {
    return 'transaction txins empty';
  }

  if (this.outputs.length === 0) {
    return 'transaction txouts empty';
  }

  // Check for negative or overflow output values
  var valueoutbn = new BN(0);
  for (var i = 0; i < this.outputs.length; i++) {
    var txout = this.outputs[i];

    if (txout.invalidSatoshis()) {
      return 'transaction txout ' + i + ' satoshis is invalid';
    }
    if (txout._satoshisBN.gt(new BN(Transaction.MAX_MONEY, 10))) {
      return 'transaction txout ' + i + ' greater than MAX_MONEY';
    }
    valueoutbn = valueoutbn.add(txout._satoshisBN);
    if (valueoutbn.gt(new BN(Transaction.MAX_MONEY))) {
      return 'transaction txout ' + i + ' total output greater than MAX_MONEY';
    }
  }

  // Size limits
  if (this.toBuffer().length > MAX_BLOCK_SIZE) {
    return 'transaction over the maximum block size';
  }

  // Check for duplicate inputs
  var txinmap = {};
  for (i = 0; i < this.inputs.length; i++) {
    var txin = this.inputs[i];

    var inputid = txin.prevTxId + ':' + txin.outputIndex;
    if (txinmap[inputid] != null) {
      return 'transaction input ' + i + ' duplicate input';
    }
    txinmap[inputid] = true;
  }

  var isCoinbase = this.isCoinbase();
  if (isCoinbase) {
    var buf = this.inputs[0]._scriptBuffer;
    if (buf.length < 2 || buf.length > 100) {
      return 'coinbase transaction script size invalid';
    }
  } else {
    for (i = 0; i < this.inputs.length; i++) {
      if (this.inputs[i].isNull()) {
        return 'transaction input ' + i + ' has null input';
      }
    }
  }
  return true;
};

/**
 * Analogous to bitcoind's IsCoinBase function in transaction.h
 */
Transaction.prototype.isCoinbase = function() {
  return (this.inputs.length === 1 && this.inputs[0].isNull());
};

/**
 * Determines if this transaction can be replaced in the mempool with another
 * transaction that provides a sufficiently higher fee (RBF).
 */
Transaction.prototype.isRBF = function() {
  for (var i = 0; i < this.inputs.length; i++) {
    var input = this.inputs[i];
    if (input.sequenceNumber < Input.MAXINT - 1) {
      return true;
    }
  }
  return false;
};

/**
 * Enable this transaction to be replaced in the mempool (RBF) if a transaction
 * includes a sufficiently higher fee. It will set the sequenceNumber to
 * DEFAULT_RBF_SEQNUMBER for all inputs if the sequence number does not
 * already enable RBF.
 */
Transaction.prototype.enableRBF = function() {
  for (var i = 0; i < this.inputs.length; i++) {
    var input = this.inputs[i];
    if (input.sequenceNumber >= Input.MAXINT - 1) {
      input.sequenceNumber = Input.DEFAULT_RBF_SEQNUMBER;
    }
  }
  return this;
};

Transaction.prototype.setVersion = function(version) {
  $.checkArgument(
    JSUtil.isNaturalNumber(version) && version <= CURRENT_VERSION,
    'Wrong version number');
  this.version = version;
  return this;
};



module.exports = Transaction;


/***/ }),

/***/ 92959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];



var assert = __webpack_require__(94148);
var buffer = __webpack_require__(48287);
var _ = __webpack_require__(2543);
var $ = __webpack_require__(6213);

var BN = __webpack_require__(62731);
var Base58 = __webpack_require__(49559);
var Base58Check = __webpack_require__(26303);
var Hash = __webpack_require__(44499);
var Network = __webpack_require__(33158);
var Point = __webpack_require__(49845);
var PrivateKey = __webpack_require__(10555);
var Random = __webpack_require__(3272);

var errors = __webpack_require__(66617);
var hdErrors = errors.HDPrivateKey;
var BufferUtil = __webpack_require__(56142);
var JSUtil = __webpack_require__(44371);

var MINIMUM_ENTROPY_BITS = 128;
var BITS_TO_BYTES = 1 / 8;
var MAXIMUM_ENTROPY_BITS = 512;


/**
 * Represents an instance of an hierarchically derived private key.
 *
 * More info on https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
 *
 * @constructor
 * @param {string|Buffer|Object} arg
 */
function HDPrivateKey(arg) {
  /* jshint maxcomplexity: 10 */
  if (arg instanceof HDPrivateKey) {
    return arg;
  }
  if (!(this instanceof HDPrivateKey)) {
    return new HDPrivateKey(arg);
  }
  if (!arg) {
    return this._generateRandomly();
  }

  if (Network.get(arg)) {
    return this._generateRandomly(arg);
  } else if (_.isString(arg) || BufferUtil.isBuffer(arg)) {
    if (HDPrivateKey.isValidSerialized(arg)) {
      this._buildFromSerialized(arg);
    } else if (JSUtil.isValidJSON(arg)) {
      this._buildFromJSON(arg);
    } else if (BufferUtil.isBuffer(arg) && HDPrivateKey.isValidSerialized(arg.toString())) {
      this._buildFromSerialized(arg.toString());
    } else {
      throw HDPrivateKey.getSerializedError(arg);
    }
  } else if (_.isObject(arg)) {
    this._buildFromObject(arg);
  } else {
    throw new hdErrors.UnrecognizedArgument(arg);
  }
}

/**
 * Verifies that a given path is valid.
 *
 * @param {string|number} arg
 * @param {boolean?} hardened
 * @return {boolean}
 */
HDPrivateKey.isValidPath = function(arg, hardened) {
  if (_.isString(arg)) {
    var indexes = HDPrivateKey._getDerivationIndexes(arg);
    return indexes !== null && _.every(indexes, HDPrivateKey.isValidPath);
  }

  if (_.isNumber(arg)) {
    if (arg < HDPrivateKey.Hardened && hardened === true) {
      arg += HDPrivateKey.Hardened;
    }
    return arg >= 0 && arg < HDPrivateKey.MaxIndex;
  }

  return false;
};

/**
 * Internal function that splits a string path into a derivation index array.
 * It will return null if the string path is malformed.
 * It does not validate if indexes are in bounds.
 *
 * @param {string} path
 * @return {Array}
 */
HDPrivateKey._getDerivationIndexes = function(path) {
  var steps = path.split('/');

  // Special cases:
  if (_.includes(HDPrivateKey.RootElementAlias, path)) {
    return [];
  }

  if (!_.includes(HDPrivateKey.RootElementAlias, steps[0])) {
    return null;
  }

  var indexes = steps.slice(1).map(function(step) {
    var isHardened = step.slice(-1) === '\'';
    if (isHardened) {
      step = step.slice(0, -1);
    }
    if (!step || step[0] === '-') {
      return NaN;
    }
    var index = +step; // cast to number
    if (isHardened) {
      index += HDPrivateKey.Hardened;
    }

    return index;
  });

  return _.some(indexes, isNaN) ? null : indexes;
};

/**
 * WARNING: This method is deprecated. Use deriveChild or deriveNonCompliantChild instead. This is not BIP32 compliant
 *
 *
 * Get a derived child based on a string or number.
 *
 * If the first argument is a string, it's parsed as the full path of
 * derivation. Valid values for this argument include "m" (which returns the
 * same private key), "m/0/1/40/2'/1000", where the ' quote means a hardened
 * derivation.
 *
 * If the first argument is a number, the child with that index will be
 * derived. If the second argument is truthy, the hardened version will be
 * derived. See the example usage for clarification.
 *
 * @example
 * ```javascript
 * var parent = new HDPrivateKey('xprv...');
 * var child_0_1_2h = parent.derive(0).derive(1).derive(2, true);
 * var copy_of_child_0_1_2h = parent.derive("m/0/1/2'");
 * assert(child_0_1_2h.xprivkey === copy_of_child_0_1_2h);
 * ```
 *
 * @param {string|number} arg
 * @param {boolean?} hardened
 */
HDPrivateKey.prototype.derive = function(arg, hardened) {
  return this.deriveNonCompliantChild(arg, hardened);
};

/**
 * WARNING: This method will not be officially supported until v1.0.0.
 *
 *
 * Get a derived child based on a string or number.
 *
 * If the first argument is a string, it's parsed as the full path of
 * derivation. Valid values for this argument include "m" (which returns the
 * same private key), "m/0/1/40/2'/1000", where the ' quote means a hardened
 * derivation.
 *
 * If the first argument is a number, the child with that index will be
 * derived. If the second argument is truthy, the hardened version will be
 * derived. See the example usage for clarification.
 *
 * WARNING: The `nonCompliant` option should NOT be used, except for older implementation
 * that used a derivation strategy that used a non-zero padded private key.
 *
 * @example
 * ```javascript
 * var parent = new HDPrivateKey('xprv...');
 * var child_0_1_2h = parent.deriveChild(0).deriveChild(1).deriveChild(2, true);
 * var copy_of_child_0_1_2h = parent.deriveChild("m/0/1/2'");
 * assert(child_0_1_2h.xprivkey === copy_of_child_0_1_2h);
 * ```
 *
 * @param {string|number} arg
 * @param {boolean?} hardened
 */
HDPrivateKey.prototype.deriveChild = function(arg, hardened) {
  if (_.isNumber(arg)) {
    return this._deriveWithNumber(arg, hardened);
  } else if (_.isString(arg)) {
    return this._deriveFromString(arg);
  } else {
    throw new hdErrors.InvalidDerivationArgument(arg);
  }
};

/**
 * WARNING: This method will not be officially supported until v1.0.0
 *
 *
 * WARNING: If this is a new implementation you should NOT use this method, you should be using
 * `derive` instead.
 *
 * This method is explicitly for use and compatibility with an implementation that
 * was not compliant with BIP32 regarding the derivation algorithm. The private key
 * must be 32 bytes hashing, and this implementation will use the non-zero padded
 * serialization of a private key, such that it's still possible to derive the privateKey
 * to recover those funds.
 *
 * @param {string|number} arg
 * @param {boolean?} hardened
 */
HDPrivateKey.prototype.deriveNonCompliantChild = function(arg, hardened) {
  if (_.isNumber(arg)) {
    return this._deriveWithNumber(arg, hardened, true);
  } else if (_.isString(arg)) {
    return this._deriveFromString(arg, true);
  } else {
    throw new hdErrors.InvalidDerivationArgument(arg);
  }
};

HDPrivateKey.prototype._deriveWithNumber = function(index, hardened, nonCompliant) {
  /* jshint maxstatements: 20 */
  /* jshint maxcomplexity: 10 */
  if (!HDPrivateKey.isValidPath(index, hardened)) {
    throw new hdErrors.InvalidPath(index);
  }

  hardened = index >= HDPrivateKey.Hardened ? true : hardened;
  if (index < HDPrivateKey.Hardened && hardened === true) {
    index += HDPrivateKey.Hardened;
  }

  var indexBuffer = BufferUtil.integerAsBuffer(index);
  var data;
  if (hardened && nonCompliant) {
    // The private key serialization in this case will not be exactly 32 bytes and can be
    // any value less, and the value is not zero-padded.
    var nonZeroPadded = this.privateKey.bn.toBuffer();
    data = BufferUtil.concat([Buffer.from([0]), nonZeroPadded, indexBuffer]);
  } else if (hardened) {
    // This will use a 32 byte zero padded serialization of the private key
    var privateKeyBuffer = this.privateKey.bn.toBuffer({size: 32});
    assert(privateKeyBuffer.length === 32, 'length of private key buffer is expected to be 32 bytes');
    data = BufferUtil.concat([Buffer.from([0]), privateKeyBuffer, indexBuffer]);
  } else {
    data = BufferUtil.concat([this.publicKey.toBuffer(), indexBuffer]);
  }
  var hash = Hash.sha512hmac(data, this._buffers.chainCode);
  var leftPart = BN.fromBuffer(hash.slice(0, 32), {
    size: 32
  });
  var chainCode = hash.slice(32, 64);

  var privateKey = leftPart.add(this.privateKey.toBigNumber()).umod(Point.getN()).toBuffer({
    size: 32
  });

  if (!PrivateKey.isValid(privateKey)) {
    // Index at this point is already hardened, we can pass null as the hardened arg
    return this._deriveWithNumber(index + 1, null, nonCompliant);
  }

  var derived = new HDPrivateKey({
    network: this.network,
    depth: this.depth + 1,
    parentFingerPrint: this.fingerPrint,
    childIndex: index,
    chainCode: chainCode,
    privateKey: privateKey
  });

  return derived;
};

HDPrivateKey.prototype._deriveFromString = function(path, nonCompliant) {
  if (!HDPrivateKey.isValidPath(path)) {
    throw new hdErrors.InvalidPath(path);
  }

  var indexes = HDPrivateKey._getDerivationIndexes(path);
  var derived = indexes.reduce(function(prev, index) {
    return prev._deriveWithNumber(index, null, nonCompliant);
  }, this);

  return derived;
};

/**
 * Verifies that a given serialized private key in base58 with checksum format
 * is valid.
 *
 * @param {string|Buffer} data - the serialized private key
 * @param {string|Network=} network - optional, if present, checks that the
 *     network provided matches the network serialized.
 * @return {boolean}
 */
HDPrivateKey.isValidSerialized = function(data, network) {
  return !HDPrivateKey.getSerializedError(data, network);
};

/**
 * Checks what's the error that causes the validation of a serialized private key
 * in base58 with checksum to fail.
 *
 * @param {string|Buffer} data - the serialized private key
 * @param {string|Network=} network - optional, if present, checks that the
 *     network provided matches the network serialized.
 * @return {errors.InvalidArgument|null}
 */
HDPrivateKey.getSerializedError = function(data, network) {
  /* jshint maxcomplexity: 10 */
  if (!(_.isString(data) || BufferUtil.isBuffer(data))) {
    return new hdErrors.UnrecognizedArgument('Expected string or buffer');
  }
  if (!Base58.validCharacters(data)) {
    return new errors.InvalidB58Char('(unknown)', data);
  }
  try {
    data = Base58Check.decode(data);
  } catch (e) {
    return new errors.InvalidB58Checksum(data);
  }
  if (data.length !== HDPrivateKey.DataLength) {
    return new hdErrors.InvalidLength(data);
  }
  if (!_.isUndefined(network)) {
    var error = HDPrivateKey._validateNetwork(data, network);
    if (error) {
      return error;
    }
  }
  return null;
};

HDPrivateKey._validateNetwork = function(data, networkArg) {
  var network = Network.get(networkArg);
  if (!network) {
    return new errors.InvalidNetworkArgument(networkArg);
  }
  var version = data.slice(0, 4);
  if (BufferUtil.integerFromBuffer(version) !== network.xprivkey) {
    return new errors.InvalidNetwork(version);
  }
  return null;
};

HDPrivateKey.fromString = function(arg) {
  $.checkArgument(_.isString(arg), 'No valid string was provided');
  return new HDPrivateKey(arg);
};

HDPrivateKey.fromObject = function(arg) {
  $.checkArgument(_.isObject(arg), 'No valid argument was provided');
  return new HDPrivateKey(arg);
};

HDPrivateKey.prototype._buildFromJSON = function(arg) {
  return this._buildFromObject(JSON.parse(arg));
};

HDPrivateKey.prototype._buildFromObject = function(arg) {
  /* jshint maxcomplexity: 12 */
  // TODO: Type validation
  var buffers = {
    version: arg.network ? BufferUtil.integerAsBuffer(Network.get(arg.network).xprivkey) : arg.version,
    depth: _.isNumber(arg.depth) ? BufferUtil.integerAsSingleByteBuffer(arg.depth) : arg.depth,
    parentFingerPrint: _.isNumber(arg.parentFingerPrint) ? BufferUtil.integerAsBuffer(arg.parentFingerPrint) : arg.parentFingerPrint,
    childIndex: _.isNumber(arg.childIndex) ? BufferUtil.integerAsBuffer(arg.childIndex) : arg.childIndex,
    chainCode: _.isString(arg.chainCode) ? Buffer.from(arg.chainCode,'hex') : arg.chainCode,
    privateKey: (_.isString(arg.privateKey) && JSUtil.isHexa(arg.privateKey)) ? Buffer.from(arg.privateKey,'hex') : arg.privateKey,
    checksum: arg.checksum ? (arg.checksum.length ? arg.checksum : BufferUtil.integerAsBuffer(arg.checksum)) : undefined
  };
  return this._buildFromBuffers(buffers);
};

HDPrivateKey.prototype._buildFromSerialized = function(arg) {
  var decoded = Base58Check.decode(arg);
  var buffers = {
    version: decoded.slice(HDPrivateKey.VersionStart, HDPrivateKey.VersionEnd),
    depth: decoded.slice(HDPrivateKey.DepthStart, HDPrivateKey.DepthEnd),
    parentFingerPrint: decoded.slice(HDPrivateKey.ParentFingerPrintStart,
      HDPrivateKey.ParentFingerPrintEnd),
    childIndex: decoded.slice(HDPrivateKey.ChildIndexStart, HDPrivateKey.ChildIndexEnd),
    chainCode: decoded.slice(HDPrivateKey.ChainCodeStart, HDPrivateKey.ChainCodeEnd),
    privateKey: decoded.slice(HDPrivateKey.PrivateKeyStart, HDPrivateKey.PrivateKeyEnd),
    checksum: decoded.slice(HDPrivateKey.ChecksumStart, HDPrivateKey.ChecksumEnd),
    xprivkey: arg
  };
  return this._buildFromBuffers(buffers);
};

HDPrivateKey.prototype._generateRandomly = function(network) {
  return HDPrivateKey.fromSeed(Random.getRandomBuffer(64), network);
};

/**
 * Generate a private key from a seed, as described in BIP32
 *
 * @param {string|Buffer} hexa
 * @param {*} network
 * @return HDPrivateKey
 */
HDPrivateKey.fromSeed = function(hexa, network) {
  /* jshint maxcomplexity: 8 */
  if (JSUtil.isHexaString(hexa)) {
    hexa = Buffer.from(hexa, 'hex');
  }
  if (!Buffer.isBuffer(hexa)) {
    throw new hdErrors.InvalidEntropyArgument(hexa);
  }
  if (hexa.length < MINIMUM_ENTROPY_BITS * BITS_TO_BYTES) {
    throw new hdErrors.InvalidEntropyArgument.NotEnoughEntropy(hexa);
  }
  if (hexa.length > MAXIMUM_ENTROPY_BITS * BITS_TO_BYTES) {
    throw new hdErrors.InvalidEntropyArgument.TooMuchEntropy(hexa);
  }
  var hash = Hash.sha512hmac(hexa, Buffer.from('Bitcoin seed'));

  return new HDPrivateKey({
    network: Network.get(network) || Network.defaultNetwork,
    depth: 0,
    parentFingerPrint: 0,
    childIndex: 0,
    privateKey: hash.slice(0, 32),
    chainCode: hash.slice(32, 64)
  });
};



HDPrivateKey.prototype._calcHDPublicKey = function() {
  if (!this._hdPublicKey) {
    var HDPublicKey = __webpack_require__(85549);
    this._hdPublicKey = new HDPublicKey(this);
  }
};

/**
 * Receives a object with buffers in all the properties and populates the
 * internal structure
 *
 * @param {Object} arg
 * @param {buffer.Buffer} arg.version
 * @param {buffer.Buffer} arg.depth
 * @param {buffer.Buffer} arg.parentFingerPrint
 * @param {buffer.Buffer} arg.childIndex
 * @param {buffer.Buffer} arg.chainCode
 * @param {buffer.Buffer} arg.privateKey
 * @param {buffer.Buffer} arg.checksum
 * @param {string=} arg.xprivkey - if set, don't recalculate the base58
 *      representation
 * @return {HDPrivateKey} this
 */
HDPrivateKey.prototype._buildFromBuffers = function(arg) {
  /* jshint maxcomplexity: 8 */
  /* jshint maxstatements: 20 */

  HDPrivateKey._validateBufferArguments(arg);

  JSUtil.defineImmutable(this, {
    _buffers: arg
  });

  var sequence = [
    arg.version, arg.depth, arg.parentFingerPrint, arg.childIndex, arg.chainCode,
    BufferUtil.emptyBuffer(1), arg.privateKey
  ];
  var concat = buffer.Buffer.concat(sequence);
  if (!arg.checksum || !arg.checksum.length) {
    arg.checksum = Base58Check.checksum(concat);
  } else {
    if (arg.checksum.toString() !== Base58Check.checksum(concat).toString()) {
      throw new errors.InvalidB58Checksum(concat);
    }
  }

  var network = Network.get(BufferUtil.integerFromBuffer(arg.version));
  var xprivkey;
  xprivkey = Base58Check.encode(buffer.Buffer.concat(sequence));
  arg.xprivkey = Buffer.from(xprivkey);

  var privateKey = new PrivateKey(BN.fromBuffer(arg.privateKey), network);
  var publicKey = privateKey.toPublicKey();
  var size = HDPrivateKey.ParentFingerPrintSize;
  var fingerPrint = Hash.sha256ripemd160(publicKey.toBuffer()).slice(0, size);

  JSUtil.defineImmutable(this, {
    xprivkey: xprivkey,
    network: network,
    depth: BufferUtil.integerFromSingleByteBuffer(arg.depth),
    privateKey: privateKey,
    publicKey: publicKey,
    fingerPrint: fingerPrint
  });

  this._hdPublicKey = null;

  Object.defineProperty(this, 'hdPublicKey', {
    configurable: false,
    enumerable: true,
    get: function() {
      this._calcHDPublicKey();
      return this._hdPublicKey;
    }
  });
  Object.defineProperty(this, 'xpubkey', {
    configurable: false,
    enumerable: true,
    get: function() {
      this._calcHDPublicKey();
      return this._hdPublicKey.xpubkey;
    }
  });
  return this;
};

HDPrivateKey._validateBufferArguments = function(arg) {
  var checkBuffer = function(name, size) {
    var buff = arg[name];
    assert(BufferUtil.isBuffer(buff), name + ' argument is not a buffer');
    assert(
      buff.length === size,
      name + ' has not the expected size: found ' + buff.length + ', expected ' + size
    );
  };
  checkBuffer('version', HDPrivateKey.VersionSize);
  checkBuffer('depth', HDPrivateKey.DepthSize);
  checkBuffer('parentFingerPrint', HDPrivateKey.ParentFingerPrintSize);
  checkBuffer('childIndex', HDPrivateKey.ChildIndexSize);
  checkBuffer('chainCode', HDPrivateKey.ChainCodeSize);
  checkBuffer('privateKey', HDPrivateKey.PrivateKeySize);
  if (arg.checksum && arg.checksum.length) {
    checkBuffer('checksum', HDPrivateKey.CheckSumSize);
  }
};

/**
 * Returns the string representation of this private key (a string starting
 * with "xprv..."
 *
 * @return string
 */
HDPrivateKey.prototype.toString = function() {
  return this.xprivkey;
};

/**
 * Returns the console representation of this extended private key.
 * @return string
 */
HDPrivateKey.prototype.inspect = function() {
  return '<HDPrivateKey: ' + this.xprivkey + '>';
};

/**
 * Returns a plain object with a representation of this private key.
 *
 * Fields include:<ul>
 * <li> network: either 'livenet' or 'testnet'
 * <li> depth: a number ranging from 0 to 255
 * <li> fingerPrint: a number ranging from 0 to 2^32-1, taken from the hash of the
 * <li>     associated public key
 * <li> parentFingerPrint: a number ranging from 0 to 2^32-1, taken from the hash
 * <li>     of this parent's associated public key or zero.
 * <li> childIndex: the index from which this child was derived (or zero)
 * <li> chainCode: an hexa string representing a number used in the derivation
 * <li> privateKey: the private key associated, in hexa representation
 * <li> xprivkey: the representation of this extended private key in checksum
 * <li>     base58 format
 * <li> checksum: the base58 checksum of xprivkey
 * </ul>
 *  @return {Object}
 */
HDPrivateKey.prototype.toObject = HDPrivateKey.prototype.toJSON = function toObject() {
  return {
    network: Network.get(BufferUtil.integerFromBuffer(this._buffers.version), 'xprivkey').name,
    depth: BufferUtil.integerFromSingleByteBuffer(this._buffers.depth),
    fingerPrint: BufferUtil.integerFromBuffer(this.fingerPrint),
    parentFingerPrint: BufferUtil.integerFromBuffer(this._buffers.parentFingerPrint),
    childIndex: BufferUtil.integerFromBuffer(this._buffers.childIndex),
    chainCode: BufferUtil.bufferToHex(this._buffers.chainCode),
    privateKey: this.privateKey.toBuffer().toString('hex'),
    checksum: BufferUtil.integerFromBuffer(this._buffers.checksum),
    xprivkey: this.xprivkey
  };
};

/**
 * Build a HDPrivateKey from a buffer
 *
 * @param {Buffer} arg
 * @return {HDPrivateKey}
 */
HDPrivateKey.fromBuffer = function(arg) {
  return new HDPrivateKey(arg.toString());
};

/**
 * Returns a buffer representation of the HDPrivateKey
 *
 * @return {string}
 */
HDPrivateKey.prototype.toBuffer = function() {
  return BufferUtil.copy(this._buffers.xprivkey);
};

HDPrivateKey.DefaultDepth = 0;
HDPrivateKey.DefaultFingerprint = 0;
HDPrivateKey.DefaultChildIndex = 0;
HDPrivateKey.Hardened = 0x80000000;
HDPrivateKey.MaxIndex = 2 * HDPrivateKey.Hardened;

HDPrivateKey.RootElementAlias = ['m', 'M', 'm\'', 'M\''];

HDPrivateKey.VersionSize = 4;
HDPrivateKey.DepthSize = 1;
HDPrivateKey.ParentFingerPrintSize = 4;
HDPrivateKey.ChildIndexSize = 4;
HDPrivateKey.ChainCodeSize = 32;
HDPrivateKey.PrivateKeySize = 32;
HDPrivateKey.CheckSumSize = 4;

HDPrivateKey.DataLength = 78;
HDPrivateKey.SerializedByteSize = 82;

HDPrivateKey.VersionStart = 0;
HDPrivateKey.VersionEnd = HDPrivateKey.VersionStart + HDPrivateKey.VersionSize;
HDPrivateKey.DepthStart = HDPrivateKey.VersionEnd;
HDPrivateKey.DepthEnd = HDPrivateKey.DepthStart + HDPrivateKey.DepthSize;
HDPrivateKey.ParentFingerPrintStart = HDPrivateKey.DepthEnd;
HDPrivateKey.ParentFingerPrintEnd = HDPrivateKey.ParentFingerPrintStart + HDPrivateKey.ParentFingerPrintSize;
HDPrivateKey.ChildIndexStart = HDPrivateKey.ParentFingerPrintEnd;
HDPrivateKey.ChildIndexEnd = HDPrivateKey.ChildIndexStart + HDPrivateKey.ChildIndexSize;
HDPrivateKey.ChainCodeStart = HDPrivateKey.ChildIndexEnd;
HDPrivateKey.ChainCodeEnd = HDPrivateKey.ChainCodeStart + HDPrivateKey.ChainCodeSize;
HDPrivateKey.PrivateKeyStart = HDPrivateKey.ChainCodeEnd + 1;
HDPrivateKey.PrivateKeyEnd = HDPrivateKey.PrivateKeyStart + HDPrivateKey.PrivateKeySize;
HDPrivateKey.ChecksumStart = HDPrivateKey.PrivateKeyEnd;
HDPrivateKey.ChecksumEnd = HDPrivateKey.ChecksumStart + HDPrivateKey.CheckSumSize;

assert(HDPrivateKey.ChecksumEnd === HDPrivateKey.SerializedByteSize);

module.exports = HDPrivateKey;


/***/ }),

/***/ 93519:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var _ = __webpack_require__(2543);
var $ = __webpack_require__(6213);
var BufferUtil = __webpack_require__(56142);
var JSUtil = __webpack_require__(44371);

function Opcode(num) {
  if (!(this instanceof Opcode)) {
    return new Opcode(num);
  }

  var value;

  if (_.isNumber(num)) {
    value = num;
  } else if (_.isString(num)) {
    value = Opcode.map[num];
  } else {
    throw new TypeError('Unrecognized num type: "' + typeof(num) + '" for Opcode');
  }

  JSUtil.defineImmutable(this, {
    num: value
  });

  return this;
}

Opcode.fromBuffer = function(buf) {
  $.checkArgument(BufferUtil.isBuffer(buf));
  return new Opcode(Number('0x' + buf.toString('hex')));
};

Opcode.fromNumber = function(num) {
  $.checkArgument(_.isNumber(num));
  return new Opcode(num);
};

Opcode.fromString = function(str) {
  $.checkArgument(_.isString(str));
  var value = Opcode.map[str];
  if (typeof value === 'undefined') {
    throw new TypeError('Invalid opcodestr');
  }
  return new Opcode(value);
};

Opcode.prototype.toHex = function() {
  return this.num.toString(16);
};

Opcode.prototype.toBuffer = function() {
  return Buffer.from(this.toHex(), 'hex');
};

Opcode.prototype.toNumber = function() {
  return this.num;
};

Opcode.prototype.toString = function() {
  var str = Opcode.reverseMap[this.num];
  if (typeof str === 'undefined') {
    throw new Error('Opcode does not have a string representation');
  }
  return str;
};

Opcode.smallInt = function(n) {
  $.checkArgument(_.isNumber(n), 'Invalid Argument: n should be number');
  $.checkArgument(n >= 0 && n <= 16, 'Invalid Argument: n must be between 0 and 16');
  if (n === 0) {
    return Opcode('OP_0');
  }
  return new Opcode(Opcode.map.OP_1 + n - 1);
};

/**
 * Converts OP_0 - OP_16 to an int
 * @param {Number} opcode Opcode
 * @returns {Number}
 */
Opcode.decodeOpN = function(opcode) {
  if (opcode === Opcode.OP_0) {
    return 0;
  }
  $.checkArgument(opcode >= Opcode.OP_1 && opcode <= Opcode.OP_16, new Error('Invalid opcode: ' + JSON.stringify(opcode)));
  return opcode - (Opcode.OP_1 - 1);
};

/**
 * Returns true if given opcode is classified as a "success".
 * This was taken from commit https://github.com/bitcoin/bitcoin/commit/72422ce396b8eba7b1a72c171c2f07dae691d1b5
 * @param {Number|String} opcode 
 * @returns {Boolean}
 */
Opcode.isOpSuccess = function(opcode) {
  if (typeof opcode === 'string' && !parseInt(opcode)) {
    opcode = Opcode[opcode];
  }
  return opcode == 80 || opcode == 98 || (opcode >= 126 && opcode <= 129) ||
        (opcode >= 131 && opcode <= 134) || (opcode >= 137 && opcode <= 138) ||
        (opcode >= 141 && opcode <= 142) || (opcode >= 149 && opcode <= 153) ||
        (opcode >= 187 && opcode <= 254);
};


Opcode.map = {
  // push value
  OP_FALSE: 0,
  OP_0: 0,
  OP_PUSHDATA1: 76,
  OP_PUSHDATA2: 77,
  OP_PUSHDATA4: 78,
  OP_1NEGATE: 79,
  OP_RESERVED: 80,
  OP_TRUE: 81,
  OP_1: 81,
  OP_2: 82,
  OP_3: 83,
  OP_4: 84,
  OP_5: 85,
  OP_6: 86,
  OP_7: 87,
  OP_8: 88,
  OP_9: 89,
  OP_10: 90,
  OP_11: 91,
  OP_12: 92,
  OP_13: 93,
  OP_14: 94,
  OP_15: 95,
  OP_16: 96,

  // control
  OP_NOP: 97,
  OP_VER: 98,
  OP_IF: 99,
  OP_NOTIF: 100,
  OP_VERIF: 101,
  OP_VERNOTIF: 102,
  OP_ELSE: 103,
  OP_ENDIF: 104,
  OP_VERIFY: 105,
  OP_RETURN: 106,

  // stack ops
  OP_TOALTSTACK: 107,
  OP_FROMALTSTACK: 108,
  OP_2DROP: 109,
  OP_2DUP: 110,
  OP_3DUP: 111,
  OP_2OVER: 112,
  OP_2ROT: 113,
  OP_2SWAP: 114,
  OP_IFDUP: 115,
  OP_DEPTH: 116,
  OP_DROP: 117,
  OP_DUP: 118,
  OP_NIP: 119,
  OP_OVER: 120,
  OP_PICK: 121,
  OP_ROLL: 122,
  OP_ROT: 123,
  OP_SWAP: 124,
  OP_TUCK: 125,

  // splice ops
  OP_CAT: 126,
  OP_SUBSTR: 127,
  OP_LEFT: 128,
  OP_RIGHT: 129,
  OP_SIZE: 130,

  // bit logic
  OP_INVERT: 131,
  OP_AND: 132,
  OP_OR: 133,
  OP_XOR: 134,
  OP_EQUAL: 135,
  OP_EQUALVERIFY: 136,
  OP_RESERVED1: 137,
  OP_RESERVED2: 138,

  // numeric
  OP_1ADD: 139,
  OP_1SUB: 140,
  OP_2MUL: 141,
  OP_2DIV: 142,
  OP_NEGATE: 143,
  OP_ABS: 144,
  OP_NOT: 145,
  OP_0NOTEQUAL: 146,

  OP_ADD: 147,
  OP_SUB: 148,
  OP_MUL: 149,
  OP_DIV: 150,
  OP_MOD: 151,
  OP_LSHIFT: 152,
  OP_RSHIFT: 153,

  OP_BOOLAND: 154,
  OP_BOOLOR: 155,
  OP_NUMEQUAL: 156,
  OP_NUMEQUALVERIFY: 157,
  OP_NUMNOTEQUAL: 158,
  OP_LESSTHAN: 159,
  OP_GREATERTHAN: 160,
  OP_LESSTHANOREQUAL: 161,
  OP_GREATERTHANOREQUAL: 162,
  OP_MIN: 163,
  OP_MAX: 164,

  OP_WITHIN: 165,

  // crypto
  OP_RIPEMD160: 166,
  OP_SHA1: 167,
  OP_SHA256: 168,
  OP_HASH160: 169,
  OP_HASH256: 170,
  OP_CODESEPARATOR: 171,
  OP_CHECKSIG: 172,
  OP_CHECKSIGVERIFY: 173,
  OP_CHECKMULTISIG: 174,
  OP_CHECKMULTISIGVERIFY: 175,

  OP_CHECKLOCKTIMEVERIFY: 177,
  OP_CHECKSEQUENCEVERIFY: 178,

  // expansion
  OP_NOP1: 176,
  OP_NOP2: 177,
  OP_NOP3: 178,
  OP_NOP4: 179,
  OP_NOP5: 180,
  OP_NOP6: 181,
  OP_NOP7: 182,
  OP_NOP8: 183,
  OP_NOP9: 184,
  OP_NOP10: 185,

  // Opcode added by BIP 342 (Tapscript)
  OP_CHECKSIGADD: 186, // 0xba

  // template matching params
  OP_PUBKEYHASH: 253,
  OP_PUBKEY: 254,
  OP_INVALIDOPCODE: 255
};

Opcode.reverseMap = [];

for (var k in Opcode.map) {
  Opcode.reverseMap[Opcode.map[k]] = k;
}

// Easier access to opcodes
_.extend(Opcode, Opcode.map);

/**
 * @returns true if opcode is one of OP_0, OP_1, ..., OP_16
 */
Opcode.isSmallIntOp = function(opcode) {
  if (opcode instanceof Opcode) {
    opcode = opcode.toNumber();
  }
  return ((opcode === Opcode.map.OP_0) ||
    ((opcode >= Opcode.map.OP_1) && (opcode <= Opcode.map.OP_16)));
};

/**
 * Will return a string formatted for the console
 *
 * @returns {string} Script opcode
 */
Opcode.prototype.inspect = function() {
  return '<Opcode: ' + this.toString() + ', hex: '+this.toHex()+', decimal: '+this.num+'>';
};

module.exports = Opcode;


/***/ }),

/***/ 94367:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(2543);
var URL = __webpack_require__(88835);

var Address = __webpack_require__(87089);
var Unit = __webpack_require__(78495);

/**
 * Bitcore URI
 *
 * Instantiate an URI from a bitcoin URI String or an Object. An URI instance
 * can be created with a bitcoin uri string or an object. All instances of
 * URI are valid, the static method isValid allows checking before instantiation.
 *
 * All standard parameters can be found as members of the class, the address
 * is represented using an {Address} instance and the amount is represented in
 * satoshis. Any other non-standard parameters can be found under the extra member.
 *
 * @example
 * ```javascript
 *
 * var uri = new URI('bitcoin:12A1MyfXbW6RhdRAZEqofac5jCQQjwEPBu?amount=1.2');
 * console.log(uri.address, uri.amount);
 * ```
 *
 * @param {string|Object} data - A bitcoin URI string or an Object
 * @param {Array.<string>=} knownParams - Required non-standard params
 * @throws {TypeError} Invalid bitcoin address
 * @throws {TypeError} Invalid amount
 * @throws {Error} Unknown required argument
 * @returns {URI} A new valid and frozen instance of URI
 * @constructor
 */
var URI = function(data, knownParams) {
  if (!(this instanceof URI)) {
    return new URI(data, knownParams);
  }

  this.extras = {};
  this.knownParams = knownParams || [];
  this.address = this.network = this.amount = this.message = null;

  if (typeof(data) === 'string') {
    var params = URI.parse(data);
    if (params.amount) {
      params.amount = this._parseAmount(params.amount);
    }
    this._fromObject(params);
  } else if (typeof(data) === 'object') {
    this._fromObject(data);
  } else {
    throw new TypeError('Unrecognized data format.');
  }
};

/**
 * Instantiate a URI from a String
 *
 * @param {string} str - JSON string or object of the URI
 * @returns {URI} A new instance of a URI
 */
URI.fromString = function fromString(str) {
  if (typeof(str) !== 'string') {
    throw new TypeError('Expected a string');
  }
  return new URI(str);
};

/**
 * Instantiate a URI from an Object
 *
 * @param {Object} data - object of the URI
 * @returns {URI} A new instance of a URI
 */
URI.fromObject = function fromObject(json) {
  return new URI(json);
};

/**
 * Check if an bitcoin URI string is valid
 *
 * @example
 * ```javascript
 *
 * var valid = URI.isValid('bitcoin:12A1MyfXbW6RhdRAZEqofac5jCQQjwEPBu');
 * // true
 * ```
 *
 * @param {string|Object} data - A bitcoin URI string or an Object
 * @param {Array.<string>=} knownParams - Required non-standard params
 * @returns {boolean} Result of uri validation
 */
URI.isValid = function(arg, knownParams) {
  try {
    new URI(arg, knownParams);
  } catch (err) {
    return false;
  }
  return true;
};

/**
 * Convert a bitcoin URI string into a simple object.
 *
 * @param {string} uri - A bitcoin URI string
 * @throws {TypeError} Invalid bitcoin URI
 * @returns {Object} An object with the parsed params
 */
URI.parse = function(uri) {
  var info = URL.parse(uri, true);

  if (info.protocol !== 'bitcoin:') {
    throw new TypeError('Invalid bitcoin URI');
  }

  // workaround to host insensitiveness
  var group = /[^:]*:\/?\/?([^?]*)/.exec(uri);
  info.query.address = group && group[1] || undefined;

  return info.query;
};

URI.Members = ['address', 'amount', 'message', 'label', 'r'];

/**
 * Internal function to load the URI instance with an object.
 *
 * @param {Object} obj - Object with the information
 * @throws {TypeError} Invalid bitcoin address
 * @throws {TypeError} Invalid amount
 * @throws {Error} Unknown required argument
 */
URI.prototype._fromObject = function(obj) {
  /* jshint maxcomplexity: 10 */

  if (!Address.isValid(obj.address)) {
    throw new TypeError('Invalid bitcoin address');
  }

  this.address = new Address(obj.address);
  this.network = this.address.network;
  this.amount = obj.amount;

  for (var key in obj) {
    if (key === 'address' || key === 'amount') {
      continue;
    }

    if (/^req-/.exec(key) && this.knownParams.indexOf(key) === -1) {
      throw Error('Unknown required argument ' + key);
    }

    var destination = URI.Members.indexOf(key) > -1 ? this : this.extras;
    destination[key] = obj[key];
  }
};

/**
 * Internal function to transform a BTC string amount into satoshis
 *
 * @param {string} amount - Amount BTC string
 * @throws {TypeError} Invalid amount
 * @returns {Object} Amount represented in satoshis
 */
URI.prototype._parseAmount = function(amount) {
  amount = Number(amount);
  if (isNaN(amount)) {
    throw new TypeError('Invalid amount');
  }
  return Unit.fromBTC(amount).toSatoshis();
};

URI.prototype.toObject = URI.prototype.toJSON = function toObject() {
  var json = {};
  for (var i = 0; i < URI.Members.length; i++) {
    var m = URI.Members[i];
    if (this.hasOwnProperty(m) && typeof(this[m]) !== 'undefined') {
      json[m] = this[m].toString();
    }
  }
  _.extend(json, this.extras);
  return json;
};

/**
 * Will return a the string representation of the URI
 *
 * @returns {string} Bitcoin URI string
 */
URI.prototype.toString = function() {
  var query = {};
  if (this.amount) {
    query.amount = Unit.fromSatoshis(this.amount).toBTC();
  }
  if (this.message) {
    query.message = this.message;
  }
  if (this.label) {
    query.label = this.label;
  }
  if (this.r) {
    query.r = this.r;
  }
  _.extend(query, this.extras);

  return URL.format({
    protocol: 'bitcoin:',
    host: this.address,
    query: query
  });
};

/**
 * Will return a string formatted for the console
 *
 * @returns {string} Bitcoin URI
 */
URI.prototype.inspect = function() {
  return '<URI: ' + this.toString() + '>';
};

module.exports = URI;


/***/ }),

/***/ 96509:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(68237);

module.exports.PublicKey = __webpack_require__(61889);
module.exports.PublicKeyHash = __webpack_require__(13981);
module.exports.MultiSig = __webpack_require__(78743);
module.exports.MultiSigScriptHash = __webpack_require__(38072);
module.exports.Taproot = __webpack_require__(24192);


/***/ }),

/***/ 99039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


var Signature = __webpack_require__(23825);
var Script = __webpack_require__(91093);
var Output = __webpack_require__(42109);
var BufferReader = __webpack_require__(69118);
var BufferWriter = __webpack_require__(54878);
var BN = __webpack_require__(62731);
var Hash = __webpack_require__(44499);
var ECDSA = __webpack_require__(65115);
var $ = __webpack_require__(6213);
var _ = __webpack_require__(2543);

var SIGHASH_SINGLE_BUG = '0000000000000000000000000000000000000000000000000000000000000001';
var BITS_64_ON = 'ffffffffffffffff';

/**
 * Returns a buffer of length 32 bytes with the hash that needs to be signed
 * for OP_CHECKSIG.
 *
 * @name Signing.sighash
 * @param {Transaction} transaction the transaction to sign
 * @param {number} sighashType the type of the hash
 * @param {number} inputNumber the input index for the signature
 * @param {Script} subscript the script that will be signed
 */
var sighash = function sighash(transaction, sighashType, inputNumber, subscript) {
  var Transaction = __webpack_require__(92202);
  var Input = __webpack_require__(96509);

  // Convert a string to a number
  inputNumber = parseInt(inputNumber);

  var i;
  // Copy transaction
  var txcopy = Transaction.shallowCopy(transaction);

  // Copy script
  subscript = new Script(subscript);
  subscript.removeCodeseparators();

  for (i = 0; i < txcopy.inputs.length; i++) {
    // Blank signatures for other inputs
    txcopy.inputs[i] = new Input(txcopy.inputs[i]).setScript(Script.empty());
  }

  txcopy.inputs[inputNumber] = new Input(txcopy.inputs[inputNumber]).setScript(subscript);

  if ((sighashType & 31) === Signature.SIGHASH_NONE ||
    (sighashType & 31) === Signature.SIGHASH_SINGLE) {

    // clear all sequenceNumbers
    for (i = 0; i < txcopy.inputs.length; i++) {
      if (i !== inputNumber) {
        txcopy.inputs[i].sequenceNumber = 0;
      }
    }
  }

  if ((sighashType & 31) === Signature.SIGHASH_NONE) {
    txcopy.outputs = [];

  } else if ((sighashType & 31) === Signature.SIGHASH_SINGLE) {
    // The SIGHASH_SINGLE bug.
    // https://bitcointalk.org/index.php?topic=260595.0
    if (inputNumber >= txcopy.outputs.length) {
      return Buffer.from(SIGHASH_SINGLE_BUG, 'hex');
    }

    txcopy.outputs.length = inputNumber + 1;

    for (i = 0; i < inputNumber; i++) {
      txcopy.outputs[i] = new Output({
        satoshis: BN.fromBuffer(Buffer.from(BITS_64_ON, 'hex')),
        script: Script.empty()
      });
    }
  }

  if (sighashType & Signature.SIGHASH_ANYONECANPAY) {
    txcopy.inputs = [txcopy.inputs[inputNumber]];
  }

  var buf = new BufferWriter()
    .write(txcopy.toBuffer())
    .writeInt32LE(sighashType)
    .toBuffer();
  var ret = Hash.sha256sha256(buf);
  ret = new BufferReader(ret).readReverse();
  return ret;
};

/**
 * Create a signature
 *
 * @name Signing.sign
 * @param {Transaction} transaction
 * @param {PrivateKey} privateKey
 * @param {number} sighash
 * @param {number} inputIndex
 * @param {Script} subscript
 * @return {Signature}
 */
function sign(transaction, privateKey, sighashType, inputIndex, subscript) {
  let hashbuf = sighash(transaction, sighashType, inputIndex, subscript);
  const sig = ECDSA.sign(hashbuf, privateKey, { endian: 'little' });
  sig.nhashtype = sighashType;
  return sig;
};

/**
 * Verify a signature
 *
 * @name Signing.verify
 * @param {Transaction} transaction
 * @param {Signature} signature
 * @param {PublicKey} publicKey
 * @param {number} inputIndex
 * @param {Script} subscript
 * @return {boolean}
 */
function verify(transaction, signature, publicKey, inputIndex, subscript) {
  $.checkArgument(!_.isUndefined(transaction), "Transaction Undefined");
  $.checkArgument(!_.isUndefined(signature) && !_.isUndefined(signature.nhashtype), "Signature Undefined");

  let hashbuf = sighash(transaction, signature.nhashtype, inputIndex, subscript);
  return ECDSA.verify(hashbuf, signature, publicKey, { endian: 'little' });
};

/**
 * @namespace Signing
 */
module.exports = {
  sighash: sighash,
  sign: sign,
  verify: verify
};


/***/ })

}]);