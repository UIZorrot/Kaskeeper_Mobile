(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[4368],{

/***/ 94248:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// (public) Constructor
function BigInteger(a, b, c) {
  if (!(this instanceof BigInteger))
    return new BigInteger(a, b, c)

  if (a != null) {
    if ("number" == typeof a) this.fromNumber(a, b, c)
    else if (b == null && "string" != typeof a) this.fromString(a, 256)
    else this.fromString(a, b)
  }
}

var proto = BigInteger.prototype

// duck-typed isBigInteger
proto.__bigi = (__webpack_require__(35712)/* .version */ .WU)
BigInteger.isBigInteger = function (obj, check_ver) {
  return obj && obj.__bigi && (!check_ver || obj.__bigi === proto.__bigi)
}

// Bits per digit
var dbits

// am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.

// am1: use a single mult and divide to get the high bits,
// max digit bits should be 26 because
// max internal value = 2*dvalue^2-2*dvalue (< 2^53)
function am1(i, x, w, j, c, n) {
  while (--n >= 0) {
    var v = x * this[i++] + w[j] + c
    c = Math.floor(v / 0x4000000)
    w[j++] = v & 0x3ffffff
  }
  return c
}
// am2 avoids a big mult-and-extract completely.
// Max digit bits should be <= 30 because we do bitwise ops
// on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
function am2(i, x, w, j, c, n) {
  var xl = x & 0x7fff,
    xh = x >> 15
  while (--n >= 0) {
    var l = this[i] & 0x7fff
    var h = this[i++] >> 15
    var m = xh * l + h * xl
    l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff)
    c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30)
    w[j++] = l & 0x3fffffff
  }
  return c
}
// Alternately, set max digit bits to 28 since some
// browsers slow down when dealing with 32-bit numbers.
function am3(i, x, w, j, c, n) {
  var xl = x & 0x3fff,
    xh = x >> 14
  while (--n >= 0) {
    var l = this[i] & 0x3fff
    var h = this[i++] >> 14
    var m = xh * l + h * xl
    l = xl * l + ((m & 0x3fff) << 14) + w[j] + c
    c = (l >> 28) + (m >> 14) + xh * h
    w[j++] = l & 0xfffffff
  }
  return c
}

// wtf?
BigInteger.prototype.am = am1
dbits = 26

BigInteger.prototype.DB = dbits
BigInteger.prototype.DM = ((1 << dbits) - 1)
var DV = BigInteger.prototype.DV = (1 << dbits)

var BI_FP = 52
BigInteger.prototype.FV = Math.pow(2, BI_FP)
BigInteger.prototype.F1 = BI_FP - dbits
BigInteger.prototype.F2 = 2 * dbits - BI_FP

// Digit conversions
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz"
var BI_RC = new Array()
var rr, vv
rr = "0".charCodeAt(0)
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv
rr = "a".charCodeAt(0)
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv
rr = "A".charCodeAt(0)
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv

function int2char(n) {
  return BI_RM.charAt(n)
}

function intAt(s, i) {
  var c = BI_RC[s.charCodeAt(i)]
  return (c == null) ? -1 : c
}

// (protected) copy this to r
function bnpCopyTo(r) {
  for (var i = this.t - 1; i >= 0; --i) r[i] = this[i]
  r.t = this.t
  r.s = this.s
}

// (protected) set from integer value x, -DV <= x < DV
function bnpFromInt(x) {
  this.t = 1
  this.s = (x < 0) ? -1 : 0
  if (x > 0) this[0] = x
  else if (x < -1) this[0] = x + DV
  else this.t = 0
}

// return bigint initialized to value
function nbv(i) {
  var r = new BigInteger()
  r.fromInt(i)
  return r
}

// (protected) set from string and radix
function bnpFromString(s, b) {
  var self = this

  var k
  if (b == 16) k = 4
  else if (b == 8) k = 3
  else if (b == 256) k = 8; // byte array
  else if (b == 2) k = 1
  else if (b == 32) k = 5
  else if (b == 4) k = 2
  else {
    self.fromRadix(s, b)
    return
  }
  self.t = 0
  self.s = 0
  var i = s.length,
    mi = false,
    sh = 0
  while (--i >= 0) {
    var x = (k == 8) ? s[i] & 0xff : intAt(s, i)
    if (x < 0) {
      if (s.charAt(i) == "-") mi = true
      continue
    }
    mi = false
    if (sh == 0)
      self[self.t++] = x
    else if (sh + k > self.DB) {
      self[self.t - 1] |= (x & ((1 << (self.DB - sh)) - 1)) << sh
      self[self.t++] = (x >> (self.DB - sh))
    } else
      self[self.t - 1] |= x << sh
    sh += k
    if (sh >= self.DB) sh -= self.DB
  }
  if (k == 8 && (s[0] & 0x80) != 0) {
    self.s = -1
    if (sh > 0) self[self.t - 1] |= ((1 << (self.DB - sh)) - 1) << sh
  }
  self.clamp()
  if (mi) BigInteger.ZERO.subTo(self, self)
}

// (protected) clamp off excess high words
function bnpClamp() {
  var c = this.s & this.DM
  while (this.t > 0 && this[this.t - 1] == c)--this.t
}

// (public) return string representation in given radix
function bnToString(b) {
  var self = this
  if (self.s < 0) return "-" + self.negate()
    .toString(b)
  var k
  if (b == 16) k = 4
  else if (b == 8) k = 3
  else if (b == 2) k = 1
  else if (b == 32) k = 5
  else if (b == 4) k = 2
  else return self.toRadix(b)
  var km = (1 << k) - 1,
    d, m = false,
    r = "",
    i = self.t
  var p = self.DB - (i * self.DB) % k
  if (i-- > 0) {
    if (p < self.DB && (d = self[i] >> p) > 0) {
      m = true
      r = int2char(d)
    }
    while (i >= 0) {
      if (p < k) {
        d = (self[i] & ((1 << p) - 1)) << (k - p)
        d |= self[--i] >> (p += self.DB - k)
      } else {
        d = (self[i] >> (p -= k)) & km
        if (p <= 0) {
          p += self.DB
          --i
        }
      }
      if (d > 0) m = true
      if (m) r += int2char(d)
    }
  }
  return m ? r : "0"
}

// (public) -this
function bnNegate() {
  var r = new BigInteger()
  BigInteger.ZERO.subTo(this, r)
  return r
}

// (public) |this|
function bnAbs() {
  return (this.s < 0) ? this.negate() : this
}

// (public) return + if this > a, - if this < a, 0 if equal
function bnCompareTo(a) {
  var r = this.s - a.s
  if (r != 0) return r
  var i = this.t
  r = i - a.t
  if (r != 0) return (this.s < 0) ? -r : r
  while (--i >= 0)
    if ((r = this[i] - a[i]) != 0) return r
  return 0
}

// returns bit length of the integer x
function nbits(x) {
  var r = 1,
    t
  if ((t = x >>> 16) != 0) {
    x = t
    r += 16
  }
  if ((t = x >> 8) != 0) {
    x = t
    r += 8
  }
  if ((t = x >> 4) != 0) {
    x = t
    r += 4
  }
  if ((t = x >> 2) != 0) {
    x = t
    r += 2
  }
  if ((t = x >> 1) != 0) {
    x = t
    r += 1
  }
  return r
}

// (public) return the number of bits in "this"
function bnBitLength() {
  if (this.t <= 0) return 0
  return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM))
}

// (public) return the number of bytes in "this"
function bnByteLength() {
  return this.bitLength() >> 3
}

// (protected) r = this << n*DB
function bnpDLShiftTo(n, r) {
  var i
  for (i = this.t - 1; i >= 0; --i) r[i + n] = this[i]
  for (i = n - 1; i >= 0; --i) r[i] = 0
  r.t = this.t + n
  r.s = this.s
}

// (protected) r = this >> n*DB
function bnpDRShiftTo(n, r) {
  for (var i = n; i < this.t; ++i) r[i - n] = this[i]
  r.t = Math.max(this.t - n, 0)
  r.s = this.s
}

// (protected) r = this << n
function bnpLShiftTo(n, r) {
  var self = this
  var bs = n % self.DB
  var cbs = self.DB - bs
  var bm = (1 << cbs) - 1
  var ds = Math.floor(n / self.DB),
    c = (self.s << bs) & self.DM,
    i
  for (i = self.t - 1; i >= 0; --i) {
    r[i + ds + 1] = (self[i] >> cbs) | c
    c = (self[i] & bm) << bs
  }
  for (i = ds - 1; i >= 0; --i) r[i] = 0
  r[ds] = c
  r.t = self.t + ds + 1
  r.s = self.s
  r.clamp()
}

// (protected) r = this >> n
function bnpRShiftTo(n, r) {
  var self = this
  r.s = self.s
  var ds = Math.floor(n / self.DB)
  if (ds >= self.t) {
    r.t = 0
    return
  }
  var bs = n % self.DB
  var cbs = self.DB - bs
  var bm = (1 << bs) - 1
  r[0] = self[ds] >> bs
  for (var i = ds + 1; i < self.t; ++i) {
    r[i - ds - 1] |= (self[i] & bm) << cbs
    r[i - ds] = self[i] >> bs
  }
  if (bs > 0) r[self.t - ds - 1] |= (self.s & bm) << cbs
  r.t = self.t - ds
  r.clamp()
}

// (protected) r = this - a
function bnpSubTo(a, r) {
  var self = this
  var i = 0,
    c = 0,
    m = Math.min(a.t, self.t)
  while (i < m) {
    c += self[i] - a[i]
    r[i++] = c & self.DM
    c >>= self.DB
  }
  if (a.t < self.t) {
    c -= a.s
    while (i < self.t) {
      c += self[i]
      r[i++] = c & self.DM
      c >>= self.DB
    }
    c += self.s
  } else {
    c += self.s
    while (i < a.t) {
      c -= a[i]
      r[i++] = c & self.DM
      c >>= self.DB
    }
    c -= a.s
  }
  r.s = (c < 0) ? -1 : 0
  if (c < -1) r[i++] = self.DV + c
  else if (c > 0) r[i++] = c
  r.t = i
  r.clamp()
}

// (protected) r = this * a, r != this,a (HAC 14.12)
// "this" should be the larger one if appropriate.
function bnpMultiplyTo(a, r) {
  var x = this.abs(),
    y = a.abs()
  var i = x.t
  r.t = i + y.t
  while (--i >= 0) r[i] = 0
  for (i = 0; i < y.t; ++i) r[i + x.t] = x.am(0, y[i], r, i, 0, x.t)
  r.s = 0
  r.clamp()
  if (this.s != a.s) BigInteger.ZERO.subTo(r, r)
}

// (protected) r = this^2, r != this (HAC 14.16)
function bnpSquareTo(r) {
  var x = this.abs()
  var i = r.t = 2 * x.t
  while (--i >= 0) r[i] = 0
  for (i = 0; i < x.t - 1; ++i) {
    var c = x.am(i, x[i], r, 2 * i, 0, 1)
    if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
      r[i + x.t] -= x.DV
      r[i + x.t + 1] = 1
    }
  }
  if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1)
  r.s = 0
  r.clamp()
}

// (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
// r != q, this != m.  q or r may be null.
function bnpDivRemTo(m, q, r) {
  var self = this
  var pm = m.abs()
  if (pm.t <= 0) return
  var pt = self.abs()
  if (pt.t < pm.t) {
    if (q != null) q.fromInt(0)
    if (r != null) self.copyTo(r)
    return
  }
  if (r == null) r = new BigInteger()
  var y = new BigInteger(),
    ts = self.s,
    ms = m.s
  var nsh = self.DB - nbits(pm[pm.t - 1]); // normalize modulus
  if (nsh > 0) {
    pm.lShiftTo(nsh, y)
    pt.lShiftTo(nsh, r)
  } else {
    pm.copyTo(y)
    pt.copyTo(r)
  }
  var ys = y.t
  var y0 = y[ys - 1]
  if (y0 == 0) return
  var yt = y0 * (1 << self.F1) + ((ys > 1) ? y[ys - 2] >> self.F2 : 0)
  var d1 = self.FV / yt,
    d2 = (1 << self.F1) / yt,
    e = 1 << self.F2
  var i = r.t,
    j = i - ys,
    t = (q == null) ? new BigInteger() : q
  y.dlShiftTo(j, t)
  if (r.compareTo(t) >= 0) {
    r[r.t++] = 1
    r.subTo(t, r)
  }
  BigInteger.ONE.dlShiftTo(ys, t)
  t.subTo(y, y); // "negative" y so we can replace sub with am later
  while (y.t < ys) y[y.t++] = 0
  while (--j >= 0) {
    // Estimate quotient digit
    var qd = (r[--i] == y0) ? self.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2)
    if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) { // Try it out
      y.dlShiftTo(j, t)
      r.subTo(t, r)
      while (r[i] < --qd) r.subTo(t, r)
    }
  }
  if (q != null) {
    r.drShiftTo(ys, q)
    if (ts != ms) BigInteger.ZERO.subTo(q, q)
  }
  r.t = ys
  r.clamp()
  if (nsh > 0) r.rShiftTo(nsh, r); // Denormalize remainder
  if (ts < 0) BigInteger.ZERO.subTo(r, r)
}

// (public) this mod a
function bnMod(a) {
  var r = new BigInteger()
  this.abs()
    .divRemTo(a, null, r)
  if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r)
  return r
}

// Modular reduction using "classic" algorithm
function Classic(m) {
  this.m = m
}

function cConvert(x) {
  if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m)
  else return x
}

function cRevert(x) {
  return x
}

function cReduce(x) {
  x.divRemTo(this.m, null, x)
}

function cMulTo(x, y, r) {
  x.multiplyTo(y, r)
  this.reduce(r)
}

function cSqrTo(x, r) {
  x.squareTo(r)
  this.reduce(r)
}

Classic.prototype.convert = cConvert
Classic.prototype.revert = cRevert
Classic.prototype.reduce = cReduce
Classic.prototype.mulTo = cMulTo
Classic.prototype.sqrTo = cSqrTo

// (protected) return "-1/this % 2^DB"; useful for Mont. reduction
// justification:
//         xy == 1 (mod m)
//         xy =  1+km
//   xy(2-xy) = (1+km)(1-km)
// x[y(2-xy)] = 1-k^2m^2
// x[y(2-xy)] == 1 (mod m^2)
// if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
// should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
// JS multiply "overflows" differently from C/C++, so care is needed here.
function bnpInvDigit() {
  if (this.t < 1) return 0
  var x = this[0]
  if ((x & 1) == 0) return 0
  var y = x & 3; // y == 1/x mod 2^2
  y = (y * (2 - (x & 0xf) * y)) & 0xf; // y == 1/x mod 2^4
  y = (y * (2 - (x & 0xff) * y)) & 0xff; // y == 1/x mod 2^8
  y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff; // y == 1/x mod 2^16
  // last step - calculate inverse mod DV directly
  // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
  y = (y * (2 - x * y % this.DV)) % this.DV; // y == 1/x mod 2^dbits
  // we really want the negative inverse, and -DV < y < DV
  return (y > 0) ? this.DV - y : -y
}

// Montgomery reduction
function Montgomery(m) {
  this.m = m
  this.mp = m.invDigit()
  this.mpl = this.mp & 0x7fff
  this.mph = this.mp >> 15
  this.um = (1 << (m.DB - 15)) - 1
  this.mt2 = 2 * m.t
}

// xR mod m
function montConvert(x) {
  var r = new BigInteger()
  x.abs()
    .dlShiftTo(this.m.t, r)
  r.divRemTo(this.m, null, r)
  if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r)
  return r
}

// x/R mod m
function montRevert(x) {
  var r = new BigInteger()
  x.copyTo(r)
  this.reduce(r)
  return r
}

// x = x/R mod m (HAC 14.32)
function montReduce(x) {
  while (x.t <= this.mt2) // pad x so am has enough room later
    x[x.t++] = 0
  for (var i = 0; i < this.m.t; ++i) {
    // faster way of calculating u0 = x[i]*mp mod DV
    var j = x[i] & 0x7fff
    var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM
    // use am to combine the multiply-shift-add into one call
    j = i + this.m.t
    x[j] += this.m.am(0, u0, x, i, 0, this.m.t)
    // propagate carry
    while (x[j] >= x.DV) {
      x[j] -= x.DV
      x[++j]++
    }
  }
  x.clamp()
  x.drShiftTo(this.m.t, x)
  if (x.compareTo(this.m) >= 0) x.subTo(this.m, x)
}

// r = "x^2/R mod m"; x != r
function montSqrTo(x, r) {
  x.squareTo(r)
  this.reduce(r)
}

// r = "xy/R mod m"; x,y != r
function montMulTo(x, y, r) {
  x.multiplyTo(y, r)
  this.reduce(r)
}

Montgomery.prototype.convert = montConvert
Montgomery.prototype.revert = montRevert
Montgomery.prototype.reduce = montReduce
Montgomery.prototype.mulTo = montMulTo
Montgomery.prototype.sqrTo = montSqrTo

// (protected) true iff this is even
function bnpIsEven() {
  return ((this.t > 0) ? (this[0] & 1) : this.s) == 0
}

// (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
function bnpExp(e, z) {
  if (e > 0xffffffff || e < 1) return BigInteger.ONE
  var r = new BigInteger(),
    r2 = new BigInteger(),
    g = z.convert(this),
    i = nbits(e) - 1
  g.copyTo(r)
  while (--i >= 0) {
    z.sqrTo(r, r2)
    if ((e & (1 << i)) > 0) z.mulTo(r2, g, r)
    else {
      var t = r
      r = r2
      r2 = t
    }
  }
  return z.revert(r)
}

// (public) this^e % m, 0 <= e < 2^32
function bnModPowInt(e, m) {
  var z
  if (e < 256 || m.isEven()) z = new Classic(m)
  else z = new Montgomery(m)
  return this.exp(e, z)
}

// protected
proto.copyTo = bnpCopyTo
proto.fromInt = bnpFromInt
proto.fromString = bnpFromString
proto.clamp = bnpClamp
proto.dlShiftTo = bnpDLShiftTo
proto.drShiftTo = bnpDRShiftTo
proto.lShiftTo = bnpLShiftTo
proto.rShiftTo = bnpRShiftTo
proto.subTo = bnpSubTo
proto.multiplyTo = bnpMultiplyTo
proto.squareTo = bnpSquareTo
proto.divRemTo = bnpDivRemTo
proto.invDigit = bnpInvDigit
proto.isEven = bnpIsEven
proto.exp = bnpExp

// public
proto.toString = bnToString
proto.negate = bnNegate
proto.abs = bnAbs
proto.compareTo = bnCompareTo
proto.bitLength = bnBitLength
proto.byteLength = bnByteLength
proto.mod = bnMod
proto.modPowInt = bnModPowInt

// (public)
function bnClone() {
  var r = new BigInteger()
  this.copyTo(r)
  return r
}

// (public) return value as integer
function bnIntValue() {
  if (this.s < 0) {
    if (this.t == 1) return this[0] - this.DV
    else if (this.t == 0) return -1
  } else if (this.t == 1) return this[0]
  else if (this.t == 0) return 0
  // assumes 16 < DB < 32
  return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0]
}

// (public) return value as byte
function bnByteValue() {
  return (this.t == 0) ? this.s : (this[0] << 24) >> 24
}

// (public) return value as short (assumes DB>=16)
function bnShortValue() {
  return (this.t == 0) ? this.s : (this[0] << 16) >> 16
}

// (protected) return x s.t. r^x < DV
function bnpChunkSize(r) {
  return Math.floor(Math.LN2 * this.DB / Math.log(r))
}

// (public) 0 if this == 0, 1 if this > 0
function bnSigNum() {
  if (this.s < 0) return -1
  else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0
  else return 1
}

// (protected) convert to radix string
function bnpToRadix(b) {
  if (b == null) b = 10
  if (this.signum() == 0 || b < 2 || b > 36) return "0"
  var cs = this.chunkSize(b)
  var a = Math.pow(b, cs)
  var d = nbv(a),
    y = new BigInteger(),
    z = new BigInteger(),
    r = ""
  this.divRemTo(d, y, z)
  while (y.signum() > 0) {
    r = (a + z.intValue())
      .toString(b)
      .substr(1) + r
    y.divRemTo(d, y, z)
  }
  return z.intValue()
    .toString(b) + r
}

// (protected) convert from radix string
function bnpFromRadix(s, b) {
  var self = this
  self.fromInt(0)
  if (b == null) b = 10
  var cs = self.chunkSize(b)
  var d = Math.pow(b, cs),
    mi = false,
    j = 0,
    w = 0
  for (var i = 0; i < s.length; ++i) {
    var x = intAt(s, i)
    if (x < 0) {
      if (s.charAt(i) == "-" && self.signum() == 0) mi = true
      continue
    }
    w = b * w + x
    if (++j >= cs) {
      self.dMultiply(d)
      self.dAddOffset(w, 0)
      j = 0
      w = 0
    }
  }
  if (j > 0) {
    self.dMultiply(Math.pow(b, j))
    self.dAddOffset(w, 0)
  }
  if (mi) BigInteger.ZERO.subTo(self, self)
}

// (protected) alternate constructor
function bnpFromNumber(a, b, c) {
  var self = this
  if ("number" == typeof b) {
    // new BigInteger(int,int,RNG)
    if (a < 2) self.fromInt(1)
    else {
      self.fromNumber(a, c)
      if (!self.testBit(a - 1)) // force MSB set
        self.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, self)
      if (self.isEven()) self.dAddOffset(1, 0); // force odd
      while (!self.isProbablePrime(b)) {
        self.dAddOffset(2, 0)
        if (self.bitLength() > a) self.subTo(BigInteger.ONE.shiftLeft(a - 1), self)
      }
    }
  } else {
    // new BigInteger(int,RNG)
    var x = new Array(),
      t = a & 7
    x.length = (a >> 3) + 1
    b.nextBytes(x)
    if (t > 0) x[0] &= ((1 << t) - 1)
    else x[0] = 0
    self.fromString(x, 256)
  }
}

// (public) convert to bigendian byte array
function bnToByteArray() {
  var self = this
  var i = self.t,
    r = new Array()
  r[0] = self.s
  var p = self.DB - (i * self.DB) % 8,
    d, k = 0
  if (i-- > 0) {
    if (p < self.DB && (d = self[i] >> p) != (self.s & self.DM) >> p)
      r[k++] = d | (self.s << (self.DB - p))
    while (i >= 0) {
      if (p < 8) {
        d = (self[i] & ((1 << p) - 1)) << (8 - p)
        d |= self[--i] >> (p += self.DB - 8)
      } else {
        d = (self[i] >> (p -= 8)) & 0xff
        if (p <= 0) {
          p += self.DB
          --i
        }
      }
      if ((d & 0x80) != 0) d |= -256
      if (k === 0 && (self.s & 0x80) != (d & 0x80))++k
      if (k > 0 || d != self.s) r[k++] = d
    }
  }
  return r
}

function bnEquals(a) {
  return (this.compareTo(a) == 0)
}

function bnMin(a) {
  return (this.compareTo(a) < 0) ? this : a
}

function bnMax(a) {
  return (this.compareTo(a) > 0) ? this : a
}

// (protected) r = this op a (bitwise)
function bnpBitwiseTo(a, op, r) {
  var self = this
  var i, f, m = Math.min(a.t, self.t)
  for (i = 0; i < m; ++i) r[i] = op(self[i], a[i])
  if (a.t < self.t) {
    f = a.s & self.DM
    for (i = m; i < self.t; ++i) r[i] = op(self[i], f)
    r.t = self.t
  } else {
    f = self.s & self.DM
    for (i = m; i < a.t; ++i) r[i] = op(f, a[i])
    r.t = a.t
  }
  r.s = op(self.s, a.s)
  r.clamp()
}

// (public) this & a
function op_and(x, y) {
  return x & y
}

function bnAnd(a) {
  var r = new BigInteger()
  this.bitwiseTo(a, op_and, r)
  return r
}

// (public) this | a
function op_or(x, y) {
  return x | y
}

function bnOr(a) {
  var r = new BigInteger()
  this.bitwiseTo(a, op_or, r)
  return r
}

// (public) this ^ a
function op_xor(x, y) {
  return x ^ y
}

function bnXor(a) {
  var r = new BigInteger()
  this.bitwiseTo(a, op_xor, r)
  return r
}

// (public) this & ~a
function op_andnot(x, y) {
  return x & ~y
}

function bnAndNot(a) {
  var r = new BigInteger()
  this.bitwiseTo(a, op_andnot, r)
  return r
}

// (public) ~this
function bnNot() {
  var r = new BigInteger()
  for (var i = 0; i < this.t; ++i) r[i] = this.DM & ~this[i]
  r.t = this.t
  r.s = ~this.s
  return r
}

// (public) this << n
function bnShiftLeft(n) {
  var r = new BigInteger()
  if (n < 0) this.rShiftTo(-n, r)
  else this.lShiftTo(n, r)
  return r
}

// (public) this >> n
function bnShiftRight(n) {
  var r = new BigInteger()
  if (n < 0) this.lShiftTo(-n, r)
  else this.rShiftTo(n, r)
  return r
}

// return index of lowest 1-bit in x, x < 2^31
function lbit(x) {
  if (x == 0) return -1
  var r = 0
  if ((x & 0xffff) == 0) {
    x >>= 16
    r += 16
  }
  if ((x & 0xff) == 0) {
    x >>= 8
    r += 8
  }
  if ((x & 0xf) == 0) {
    x >>= 4
    r += 4
  }
  if ((x & 3) == 0) {
    x >>= 2
    r += 2
  }
  if ((x & 1) == 0)++r
  return r
}

// (public) returns index of lowest 1-bit (or -1 if none)
function bnGetLowestSetBit() {
  for (var i = 0; i < this.t; ++i)
    if (this[i] != 0) return i * this.DB + lbit(this[i])
  if (this.s < 0) return this.t * this.DB
  return -1
}

// return number of 1 bits in x
function cbit(x) {
  var r = 0
  while (x != 0) {
    x &= x - 1
    ++r
  }
  return r
}

// (public) return number of set bits
function bnBitCount() {
  var r = 0,
    x = this.s & this.DM
  for (var i = 0; i < this.t; ++i) r += cbit(this[i] ^ x)
  return r
}

// (public) true iff nth bit is set
function bnTestBit(n) {
  var j = Math.floor(n / this.DB)
  if (j >= this.t) return (this.s != 0)
  return ((this[j] & (1 << (n % this.DB))) != 0)
}

// (protected) this op (1<<n)
function bnpChangeBit(n, op) {
  var r = BigInteger.ONE.shiftLeft(n)
  this.bitwiseTo(r, op, r)
  return r
}

// (public) this | (1<<n)
function bnSetBit(n) {
  return this.changeBit(n, op_or)
}

// (public) this & ~(1<<n)
function bnClearBit(n) {
  return this.changeBit(n, op_andnot)
}

// (public) this ^ (1<<n)
function bnFlipBit(n) {
  return this.changeBit(n, op_xor)
}

// (protected) r = this + a
function bnpAddTo(a, r) {
  var self = this

  var i = 0,
    c = 0,
    m = Math.min(a.t, self.t)
  while (i < m) {
    c += self[i] + a[i]
    r[i++] = c & self.DM
    c >>= self.DB
  }
  if (a.t < self.t) {
    c += a.s
    while (i < self.t) {
      c += self[i]
      r[i++] = c & self.DM
      c >>= self.DB
    }
    c += self.s
  } else {
    c += self.s
    while (i < a.t) {
      c += a[i]
      r[i++] = c & self.DM
      c >>= self.DB
    }
    c += a.s
  }
  r.s = (c < 0) ? -1 : 0
  if (c > 0) r[i++] = c
  else if (c < -1) r[i++] = self.DV + c
  r.t = i
  r.clamp()
}

// (public) this + a
function bnAdd(a) {
  var r = new BigInteger()
  this.addTo(a, r)
  return r
}

// (public) this - a
function bnSubtract(a) {
  var r = new BigInteger()
  this.subTo(a, r)
  return r
}

// (public) this * a
function bnMultiply(a) {
  var r = new BigInteger()
  this.multiplyTo(a, r)
  return r
}

// (public) this^2
function bnSquare() {
  var r = new BigInteger()
  this.squareTo(r)
  return r
}

// (public) this / a
function bnDivide(a) {
  var r = new BigInteger()
  this.divRemTo(a, r, null)
  return r
}

// (public) this % a
function bnRemainder(a) {
  var r = new BigInteger()
  this.divRemTo(a, null, r)
  return r
}

// (public) [this/a,this%a]
function bnDivideAndRemainder(a) {
  var q = new BigInteger(),
    r = new BigInteger()
  this.divRemTo(a, q, r)
  return new Array(q, r)
}

// (protected) this *= n, this >= 0, 1 < n < DV
function bnpDMultiply(n) {
  this[this.t] = this.am(0, n - 1, this, 0, 0, this.t)
  ++this.t
  this.clamp()
}

// (protected) this += n << w words, this >= 0
function bnpDAddOffset(n, w) {
  if (n == 0) return
  while (this.t <= w) this[this.t++] = 0
  this[w] += n
  while (this[w] >= this.DV) {
    this[w] -= this.DV
    if (++w >= this.t) this[this.t++] = 0
    ++this[w]
  }
}

// A "null" reducer
function NullExp() {}

function nNop(x) {
  return x
}

function nMulTo(x, y, r) {
  x.multiplyTo(y, r)
}

function nSqrTo(x, r) {
  x.squareTo(r)
}

NullExp.prototype.convert = nNop
NullExp.prototype.revert = nNop
NullExp.prototype.mulTo = nMulTo
NullExp.prototype.sqrTo = nSqrTo

// (public) this^e
function bnPow(e) {
  return this.exp(e, new NullExp())
}

// (protected) r = lower n words of "this * a", a.t <= n
// "this" should be the larger one if appropriate.
function bnpMultiplyLowerTo(a, n, r) {
  var i = Math.min(this.t + a.t, n)
  r.s = 0; // assumes a,this >= 0
  r.t = i
  while (i > 0) r[--i] = 0
  var j
  for (j = r.t - this.t; i < j; ++i) r[i + this.t] = this.am(0, a[i], r, i, 0, this.t)
  for (j = Math.min(a.t, n); i < j; ++i) this.am(0, a[i], r, i, 0, n - i)
  r.clamp()
}

// (protected) r = "this * a" without lower n words, n > 0
// "this" should be the larger one if appropriate.
function bnpMultiplyUpperTo(a, n, r) {
  --n
  var i = r.t = this.t + a.t - n
  r.s = 0; // assumes a,this >= 0
  while (--i >= 0) r[i] = 0
  for (i = Math.max(n - this.t, 0); i < a.t; ++i)
    r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n)
  r.clamp()
  r.drShiftTo(1, r)
}

// Barrett modular reduction
function Barrett(m) {
  // setup Barrett
  this.r2 = new BigInteger()
  this.q3 = new BigInteger()
  BigInteger.ONE.dlShiftTo(2 * m.t, this.r2)
  this.mu = this.r2.divide(m)
  this.m = m
}

function barrettConvert(x) {
  if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m)
  else if (x.compareTo(this.m) < 0) return x
  else {
    var r = new BigInteger()
    x.copyTo(r)
    this.reduce(r)
    return r
  }
}

function barrettRevert(x) {
  return x
}

// x = x mod m (HAC 14.42)
function barrettReduce(x) {
  var self = this
  x.drShiftTo(self.m.t - 1, self.r2)
  if (x.t > self.m.t + 1) {
    x.t = self.m.t + 1
    x.clamp()
  }
  self.mu.multiplyUpperTo(self.r2, self.m.t + 1, self.q3)
  self.m.multiplyLowerTo(self.q3, self.m.t + 1, self.r2)
  while (x.compareTo(self.r2) < 0) x.dAddOffset(1, self.m.t + 1)
  x.subTo(self.r2, x)
  while (x.compareTo(self.m) >= 0) x.subTo(self.m, x)
}

// r = x^2 mod m; x != r
function barrettSqrTo(x, r) {
  x.squareTo(r)
  this.reduce(r)
}

// r = x*y mod m; x,y != r
function barrettMulTo(x, y, r) {
  x.multiplyTo(y, r)
  this.reduce(r)
}

Barrett.prototype.convert = barrettConvert
Barrett.prototype.revert = barrettRevert
Barrett.prototype.reduce = barrettReduce
Barrett.prototype.mulTo = barrettMulTo
Barrett.prototype.sqrTo = barrettSqrTo

// (public) this^e % m (HAC 14.85)
function bnModPow(e, m) {
  var i = e.bitLength(),
    k, r = nbv(1),
    z
  if (i <= 0) return r
  else if (i < 18) k = 1
  else if (i < 48) k = 3
  else if (i < 144) k = 4
  else if (i < 768) k = 5
  else k = 6
  if (i < 8)
    z = new Classic(m)
  else if (m.isEven())
    z = new Barrett(m)
  else
    z = new Montgomery(m)

  // precomputation
  var g = new Array(),
    n = 3,
    k1 = k - 1,
    km = (1 << k) - 1
  g[1] = z.convert(this)
  if (k > 1) {
    var g2 = new BigInteger()
    z.sqrTo(g[1], g2)
    while (n <= km) {
      g[n] = new BigInteger()
      z.mulTo(g2, g[n - 2], g[n])
      n += 2
    }
  }

  var j = e.t - 1,
    w, is1 = true,
    r2 = new BigInteger(),
    t
  i = nbits(e[j]) - 1
  while (j >= 0) {
    if (i >= k1) w = (e[j] >> (i - k1)) & km
    else {
      w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i)
      if (j > 0) w |= e[j - 1] >> (this.DB + i - k1)
    }

    n = k
    while ((w & 1) == 0) {
      w >>= 1
      --n
    }
    if ((i -= n) < 0) {
      i += this.DB
      --j
    }
    if (is1) { // ret == 1, don't bother squaring or multiplying it
      g[w].copyTo(r)
      is1 = false
    } else {
      while (n > 1) {
        z.sqrTo(r, r2)
        z.sqrTo(r2, r)
        n -= 2
      }
      if (n > 0) z.sqrTo(r, r2)
      else {
        t = r
        r = r2
        r2 = t
      }
      z.mulTo(r2, g[w], r)
    }

    while (j >= 0 && (e[j] & (1 << i)) == 0) {
      z.sqrTo(r, r2)
      t = r
      r = r2
      r2 = t
      if (--i < 0) {
        i = this.DB - 1
        --j
      }
    }
  }
  return z.revert(r)
}

// (public) gcd(this,a) (HAC 14.54)
function bnGCD(a) {
  var x = (this.s < 0) ? this.negate() : this.clone()
  var y = (a.s < 0) ? a.negate() : a.clone()
  if (x.compareTo(y) < 0) {
    var t = x
    x = y
    y = t
  }
  var i = x.getLowestSetBit(),
    g = y.getLowestSetBit()
  if (g < 0) return x
  if (i < g) g = i
  if (g > 0) {
    x.rShiftTo(g, x)
    y.rShiftTo(g, y)
  }
  while (x.signum() > 0) {
    if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x)
    if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y)
    if (x.compareTo(y) >= 0) {
      x.subTo(y, x)
      x.rShiftTo(1, x)
    } else {
      y.subTo(x, y)
      y.rShiftTo(1, y)
    }
  }
  if (g > 0) y.lShiftTo(g, y)
  return y
}

// (protected) this % n, n < 2^26
function bnpModInt(n) {
  if (n <= 0) return 0
  var d = this.DV % n,
    r = (this.s < 0) ? n - 1 : 0
  if (this.t > 0)
    if (d == 0) r = this[0] % n
    else
      for (var i = this.t - 1; i >= 0; --i) r = (d * r + this[i]) % n
  return r
}

// (public) 1/this % m (HAC 14.61)
function bnModInverse(m) {
  var ac = m.isEven()
  if (this.signum() === 0) throw new Error('division by zero')
  if ((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO
  var u = m.clone(),
    v = this.clone()
  var a = nbv(1),
    b = nbv(0),
    c = nbv(0),
    d = nbv(1)
  while (u.signum() != 0) {
    while (u.isEven()) {
      u.rShiftTo(1, u)
      if (ac) {
        if (!a.isEven() || !b.isEven()) {
          a.addTo(this, a)
          b.subTo(m, b)
        }
        a.rShiftTo(1, a)
      } else if (!b.isEven()) b.subTo(m, b)
      b.rShiftTo(1, b)
    }
    while (v.isEven()) {
      v.rShiftTo(1, v)
      if (ac) {
        if (!c.isEven() || !d.isEven()) {
          c.addTo(this, c)
          d.subTo(m, d)
        }
        c.rShiftTo(1, c)
      } else if (!d.isEven()) d.subTo(m, d)
      d.rShiftTo(1, d)
    }
    if (u.compareTo(v) >= 0) {
      u.subTo(v, u)
      if (ac) a.subTo(c, a)
      b.subTo(d, b)
    } else {
      v.subTo(u, v)
      if (ac) c.subTo(a, c)
      d.subTo(b, d)
    }
  }
  if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO
  while (d.compareTo(m) >= 0) d.subTo(m, d)
  while (d.signum() < 0) d.addTo(m, d)
  return d
}

var lowprimes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
  331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
  421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
  509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
  613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
  709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
  821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
  919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
]

var lplim = (1 << 26) / lowprimes[lowprimes.length - 1]

// (public) test primality with certainty >= 1-.5^t
function bnIsProbablePrime(t) {
  var i, x = this.abs()
  if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
    for (i = 0; i < lowprimes.length; ++i)
      if (x[0] == lowprimes[i]) return true
    return false
  }
  if (x.isEven()) return false
  i = 1
  while (i < lowprimes.length) {
    var m = lowprimes[i],
      j = i + 1
    while (j < lowprimes.length && m < lplim) m *= lowprimes[j++]
    m = x.modInt(m)
    while (i < j) if (m % lowprimes[i++] == 0) return false
  }
  return x.millerRabin(t)
}

// (protected) true if probably prime (HAC 4.24, Miller-Rabin)
function bnpMillerRabin(t) {
  var n1 = this.subtract(BigInteger.ONE)
  var k = n1.getLowestSetBit()
  if (k <= 0) return false
  var r = n1.shiftRight(k)
  t = (t + 1) >> 1
  if (t > lowprimes.length) t = lowprimes.length
  var a = new BigInteger(null)
  var j, bases = []
  for (var i = 0; i < t; ++i) {
    for (;;) {
      j = lowprimes[Math.floor(Math.random() * lowprimes.length)]
      if (bases.indexOf(j) == -1) break
    }
    bases.push(j)
    a.fromInt(j)
    var y = a.modPow(r, this)
    if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
      var j = 1
      while (j++ < k && y.compareTo(n1) != 0) {
        y = y.modPowInt(2, this)
        if (y.compareTo(BigInteger.ONE) == 0) return false
      }
      if (y.compareTo(n1) != 0) return false
    }
  }
  return true
}

// protected
proto.chunkSize = bnpChunkSize
proto.toRadix = bnpToRadix
proto.fromRadix = bnpFromRadix
proto.fromNumber = bnpFromNumber
proto.bitwiseTo = bnpBitwiseTo
proto.changeBit = bnpChangeBit
proto.addTo = bnpAddTo
proto.dMultiply = bnpDMultiply
proto.dAddOffset = bnpDAddOffset
proto.multiplyLowerTo = bnpMultiplyLowerTo
proto.multiplyUpperTo = bnpMultiplyUpperTo
proto.modInt = bnpModInt
proto.millerRabin = bnpMillerRabin

// public
proto.clone = bnClone
proto.intValue = bnIntValue
proto.byteValue = bnByteValue
proto.shortValue = bnShortValue
proto.signum = bnSigNum
proto.toByteArray = bnToByteArray
proto.equals = bnEquals
proto.min = bnMin
proto.max = bnMax
proto.and = bnAnd
proto.or = bnOr
proto.xor = bnXor
proto.andNot = bnAndNot
proto.not = bnNot
proto.shiftLeft = bnShiftLeft
proto.shiftRight = bnShiftRight
proto.getLowestSetBit = bnGetLowestSetBit
proto.bitCount = bnBitCount
proto.testBit = bnTestBit
proto.setBit = bnSetBit
proto.clearBit = bnClearBit
proto.flipBit = bnFlipBit
proto.add = bnAdd
proto.subtract = bnSubtract
proto.multiply = bnMultiply
proto.divide = bnDivide
proto.remainder = bnRemainder
proto.divideAndRemainder = bnDivideAndRemainder
proto.modPow = bnModPow
proto.modInverse = bnModInverse
proto.pow = bnPow
proto.gcd = bnGCD
proto.isProbablePrime = bnIsProbablePrime

// JSBN-specific extension
proto.square = bnSquare

// constants
BigInteger.ZERO = nbv(0)
BigInteger.ONE = nbv(1)
BigInteger.valueOf = nbv

module.exports = BigInteger


/***/ }),

/***/ 66044:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];
// FIXME: Kind of a weird way to throw exceptions, consider removing
var assert = __webpack_require__(97344)
var BigInteger = __webpack_require__(94248)

/**
 * Turns a byte array into a big integer.
 *
 * This function will interpret a byte array as a big integer in big
 * endian notation.
 */
BigInteger.fromByteArrayUnsigned = function(byteArray) {
  // BigInteger expects a DER integer conformant byte array
  if (byteArray[0] & 0x80) {
    return new BigInteger([0].concat(byteArray))
  }

  return new BigInteger(byteArray)
}

/**
 * Returns a byte array representation of the big integer.
 *
 * This returns the absolute of the contained value in big endian
 * form. A value of zero results in an empty array.
 */
BigInteger.prototype.toByteArrayUnsigned = function() {
  var byteArray = this.toByteArray()
  return byteArray[0] === 0 ? byteArray.slice(1) : byteArray
}

BigInteger.fromDERInteger = function(byteArray) {
  return new BigInteger(byteArray)
}

/*
 * Converts BigInteger to a DER integer representation.
 *
 * The format for this value uses the most significant bit as a sign
 * bit.  If the most significant bit is already set and the integer is
 * positive, a 0x00 is prepended.
 *
 * Examples:
 *
 *      0 =>     0x00
 *      1 =>     0x01
 *     -1 =>     0xff
 *    127 =>     0x7f
 *   -127 =>     0x81
 *    128 =>   0x0080
 *   -128 =>     0x80
 *    255 =>   0x00ff
 *   -255 =>   0xff01
 *  16300 =>   0x3fac
 * -16300 =>   0xc054
 *  62300 => 0x00f35c
 * -62300 => 0xff0ca4
*/
BigInteger.prototype.toDERInteger = BigInteger.prototype.toByteArray

BigInteger.fromBuffer = function(buffer) {
  // BigInteger expects a DER integer conformant byte array
  if (buffer[0] & 0x80) {
    var byteArray = Array.prototype.slice.call(buffer)

    return new BigInteger([0].concat(byteArray))
  }

  return new BigInteger(buffer)
}

BigInteger.fromHex = function(hex) {
  if (hex === '') return BigInteger.ZERO

  assert.equal(hex, hex.match(/^[A-Fa-f0-9]+/), 'Invalid hex string')
  assert.equal(hex.length % 2, 0, 'Incomplete hex')
  return new BigInteger(hex, 16)
}

BigInteger.prototype.toBuffer = function(size) {
  var byteArray = this.toByteArrayUnsigned()
  var zeros = []

  var padding = size - byteArray.length
  while (zeros.length < padding) zeros.push(0)

  return new Buffer(zeros.concat(byteArray))
}

BigInteger.prototype.toHex = function(size) {
  return this.toBuffer(size).toString('hex')
}


/***/ }),

/***/ 34784:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BigInteger = __webpack_require__(94248)

//addons
__webpack_require__(66044)

module.exports = BigInteger

/***/ }),

/***/ 52124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const BigInteger = __webpack_require__(34784);
const Buffer = (__webpack_require__(79664).Buffer);
const ecurve = __webpack_require__(24780);
const curve = ecurve.getCurveByName('secp256k1');

const one = BigInteger.ONE;
const n = curve.n;
const p = curve.p;

function checkBuffer(name, buf, len, idx) {
  const idxStr = (idx !== undefined ? '[' + idx + ']' : '');
  if (!Buffer.isBuffer(buf)) {
    throw new Error(name + idxStr + ' must be a Buffer');
  }
  if (buf.length !== len) {
    throw new Error(name + idxStr + ' must be ' + len + ' bytes long');
  }
}

function checkArray(name, arr) {
  if (!arr || !arr.length) {
    throw new Error(name + ' must be an array with one or more elements');
  }
}

function checkPubKeyArr(pubKeys) {
  checkArray('pubKeys', pubKeys);
  for (let i = 0; i < pubKeys.length; i++) {
    checkBuffer('pubKey', pubKeys[i], 32, i);
  }
}

function checkMessageArr(messages) {
  checkArray('messages', messages);
  for (let i = 0; i < messages.length; i++) {
    checkBuffer('message', messages[i], 32, i);
  }
}

function checkSignatureArr(signatures) {
  checkArray('signatures', signatures);
  for (let i = 0; i < signatures.length; i++) {
    checkBuffer('signature', signatures[i], 64, i);
  }
}

function checkNonceArr(nonces) {
  checkArray('nonces', nonces);
  for (let i = 0; i < nonces.length; i++) {
    checkBuffer('nonce', nonces[i], 32, i);
  }
}

function checkPrivateKey(privateKey, idx) {
  const idxStr = (idx !== undefined ? '[' + idx + ']' : '');
  if (!BigInteger.isBigInteger(privateKey) && !(typeof privateKey == 'string')) {
    throw new Error('privateKey' + idxStr + ' must be a BigInteger or valid hex string');
  }

  if (typeof(privateKey) == 'string') {
    if (privateKey.match(/[^a-f^A-F^0-9]+/)) {
      throw new Error('privateKey must be a BigInteger or valid hex string');
    }

    checkRange('privateKey', BigInteger.fromHex(privateKey));
    return
  }

  checkRange('privateKey', privateKey);
}

function checkSignParams(privateKey, message) {
  checkPrivateKey(privateKey);
  checkBuffer('message', message, 32);
}

function checkVerifyParams(pubKey, message, signature) {
  checkBuffer('pubKey', pubKey, 32);
  checkBuffer('message', message, 32);
  checkBuffer('signature', signature, 64);
}

function checkBatchVerifyParams(pubKeys, messages, signatures) {
  checkPubKeyArr(pubKeys);
  checkMessageArr(messages);
  checkSignatureArr(signatures);
  if (pubKeys.length !== messages.length || messages.length !== signatures.length) {
    throw new Error('all parameters must be an array with the same length')
  }
}

function checkSessionParams(sessionId, privateKey, message, pubKeyCombined, ell) {
  checkSignParams(privateKey, message);
  checkBuffer('sessionId', sessionId, 32);
  checkBuffer('pubKeyCombined', pubKeyCombined, 32);
  checkBuffer('ell', ell, 32);
}

function checkRange(name, scalar) {
  if (scalar.compareTo(one) < 0 || scalar.compareTo(n.subtract(one)) > 0) {
    throw new Error(name + ' must be an integer in the range 1..n-1')
  }
}

function checkSignatureInput(r, s) {
  if (r.compareTo(p) >= 0) {
    throw new Error('r is larger than or equal to field size');
  }
  if (s.compareTo(n) >= 0) {
    throw new Error('s is larger than or equal to curve order');
  }
}

function checkPointExists(pubKeyEven, P) {
  if (P.curve.isInfinity(P)) {
    throw new Error('point is at infinity');
  }
  const pEven = P.affineY.isEven();
  if (pubKeyEven !== pEven) {
    throw new Error('point does not exist');
  }
}

function checkAux(aux) {
  if (aux.length !== 32) {
    throw new Error('aux must be 32 bytes');
  }
}

module.exports = {
  checkSessionParams,
  checkSignParams,
  checkVerifyParams,
  checkBatchVerifyParams,
  checkRange,
  checkSignatureInput,
  checkPointExists,
  checkPubKeyArr,
  checkArray,
  checkNonceArr,
  checkAux,
};


/***/ }),

/***/ 50325:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const BigInteger = __webpack_require__(34784);
const Buffer = (__webpack_require__(79664).Buffer);
const sha256 = __webpack_require__(67328);

function bufferToInt(buffer) {
  return BigInteger.fromBuffer(buffer);
}

function intToBuffer(bigInteger) {
  return bigInteger.toBuffer(32);
}

function hash(buffer) {
  return Buffer.from(sha256.create().update(buffer).array());
}

module.exports = {
  bufferToInt,
  intToBuffer,
  hash,
};


/***/ }),

/***/ 64140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const schnorr = __webpack_require__(46408);
schnorr.check = __webpack_require__(52124);
schnorr.convert = __webpack_require__(50325);
schnorr.math = __webpack_require__(33032);
schnorr.muSig = __webpack_require__(2336);
schnorr.taproot = __webpack_require__(49784);

module.exports = schnorr;


/***/ }),

/***/ 33032:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const BigInteger = __webpack_require__(34784);
const Buffer = (__webpack_require__(79664).Buffer);
const ecurve = __webpack_require__(24780);
const randomBytes = __webpack_require__(42864);
const curve = ecurve.getCurveByName('secp256k1');
const check = __webpack_require__(52124);
const convert = __webpack_require__(50325);

const concat = Buffer.concat;
const G = curve.G;
const p = curve.p;
const n = curve.n;
const zero = BigInteger.ZERO;
const one = BigInteger.ONE;
const two = BigInteger.valueOf(2);
const three = BigInteger.valueOf(3);
const four = BigInteger.valueOf(4);
const seven = BigInteger.valueOf(7);

function deterministicGetK0(privateKey, publicKey, message) {
  check.checkSignParams(privateKey, message);

  const h = taggedHash('BIP0340/nonce', concat([convert.intToBuffer(privateKey), publicKey, message]));
  const i = convert.bufferToInt(h);
  return i.mod(n);
}

function isEven(pubKey) {
  return pubKey.affineY.mod(two).equals(zero);
}

function getEvenKey(pubKey, privateKey) {
  if (isEven(pubKey)) {
    return privateKey.clone();
  }

  return n.subtract(privateKey);
}

function getE(Rx, Px, m) {
  const hash = taggedHash('BIP0340/challenge', concat([Rx, Px, m]));
  return convert.bufferToInt(hash).mod(n);
}

function getR(s, e, P) {
  const sG = G.multiply(s);
  const eP = P.multiply(e);
  return sG.add(eP.negate());
}

function taggedHash(tag, msg) {
  const tagHash = convert.hash(tag);
  return convert.hash(concat([tagHash, tagHash, Buffer.from(msg)]));
}

function liftX(Px) {
  const x = convert.bufferToInt(Px);

  const c = x.pow(three).add(seven).mod(p);
  const y = c.modPow(p.add(one).divide(four), p);
  if (c.compareTo(y.modPow(two, p)) !== 0) {
    throw new Error('c is not equal to y^2');
  }
  let P = ecurve.Point.fromAffine(curve, x, y);
  if (!isEven(P)) {
    P = ecurve.Point.fromAffine(curve, x, p.subtract(y));
  }

  check.checkPointExists(true, P);
  return P;
}

function randomA() {
  let a = null;
  for (; ;) {
    a = convert.bufferToInt(Buffer.from(randomBytes(32)));
    try {
      check.checkRange('a', a);
      return a;
    } catch (e) {
      // out of range, generate another one
    }
  }
}

module.exports = {
  deterministicGetK0,
  isEven,
  getEvenKey,
  getE,
  getR,
  taggedHash,
  liftX,
  randomA,
};


/***/ }),

/***/ 2336:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Buffer = (__webpack_require__(79664).Buffer);
const ecurve = __webpack_require__(24780);
const curve = ecurve.getCurveByName('secp256k1');
const math = __webpack_require__(33032);
const check = __webpack_require__(52124);
const convert = __webpack_require__(50325);

const concat = Buffer.concat;
const G = curve.G;
const n = curve.n;
const MUSIG_TAG = convert.hash(Buffer.from('MuSig coefficient'));

// Computes ell = SHA256(pubKeys[0], ..., pubKeys[pubKeys.length-1]) with
// pubKeys serialized in compressed form.
function computeEll(pubKeys) {
  check.checkPubKeyArr(pubKeys);
  return convert.hash(concat(pubKeys))
}

function computeCoefficient(ell, idx) {
  const idxBuf = Buffer.alloc(4);
  idxBuf.writeUInt32LE(idx);
  const data = concat([MUSIG_TAG, MUSIG_TAG, ell, idxBuf]);
  return convert.bufferToInt(convert.hash(data)).mod(n);
}

function pubKeyCombine(pubKeys, pubKeyHash) {
  const ell = pubKeyHash || computeEll(pubKeys);
  let X = null;
  for (let i = 0; i < pubKeys.length; i++) {
    const Xi = math.liftX(pubKeys[i]);
    const coefficient = computeCoefficient(ell, i);
    const summand = Xi.multiply(coefficient);
    if (X === null) {
      X = summand;
    } else {
      X = X.add(summand);
    }
  }
  return X;
}

function sessionInitialize(sessionId, privateKey, message, pubKeyCombined, pkParity, ell, idx) {
  check.checkSessionParams(sessionId, privateKey, message, pubKeyCombined, ell);

  const session = {
    sessionId,
    message,
    pubKeyCombined,
    pkParity,
    ell,
    idx,
  };

  const coefficient = computeCoefficient(ell, idx);
  session.secretKey = privateKey.multiply(coefficient).mod(n);
  session.ownKeyParity = math.isEven(G.multiply(privateKey));
  if (session.pkParity !== session.ownKeyParity) {
    session.secretKey = n.subtract(session.secretKey);
  }

  const nonceData = concat([sessionId, message, session.pubKeyCombined, convert.intToBuffer(privateKey)]);
  session.secretNonce = convert.bufferToInt(convert.hash(nonceData));
  check.checkRange('secretNonce', session.secretNonce);
  const R = G.multiply(session.secretNonce);
  session.nonce = convert.intToBuffer(R.affineX);
  session.nonceParity = math.isEven(R);
  session.commitment = convert.hash(session.nonce);
  return session;
}

function sessionNonceCombine(session, nonces) {
  check.checkNonceArr(nonces);
  let R = math.liftX(nonces[0]);
  for (let i = 1; i < nonces.length; i++) {
    R = R.add(math.liftX(nonces[i]));
  }
  session.combinedNonceParity = math.isEven(R);
  return convert.intToBuffer(R.affineX);
}

function partialSign(session, message, nonceCombined, pubKeyCombined) {
  const e = math.getE(nonceCombined, pubKeyCombined, message);
  const sk = session.secretKey;
  let k = session.secretNonce;
  if (session.nonceParity !== session.combinedNonceParity) {
    k = n.subtract(k);
  }
  return sk.multiply(e).add(k).mod(n);
}

function partialSigVerify(session, partialSig, nonceCombined, idx, pubKey, nonce) {
  let e = math.getE(nonceCombined, session.pubKeyCombined, session.message);
  const coefficient = computeCoefficient(session.ell, idx);
  const Pj = math.liftX(pubKey);
  const Ri = math.liftX(nonce);

  if (!session.pkParity) {
    e = n.subtract(e);
  }

  let RP = math.getR(partialSig, e.multiply(coefficient).mod(n), Pj);
  if (session.combinedNonceParity) {
    RP = RP.negate();
  }
  const sum = RP.add(Ri);
  if (!sum.curve.isInfinity(sum)) {
    throw new Error('partial signature verification failed');
  }
}

function partialSigCombine(nonceCombined, partialSigs) {
  const R = math.liftX(nonceCombined);
  check.checkArray('partialSigs', partialSigs);
  const Rx = convert.intToBuffer(R.affineX);
  let s = partialSigs[0];
  for (let i = 1; i < partialSigs.length; i++) {
    s = s.add(partialSigs[i]).mod(n);
  }
  return concat([Rx, convert.intToBuffer(s)]);
}

module.exports = {
  computeEll,
  computeCoefficient,
  pubKeyCombine,
  sessionInitialize,
  sessionNonceCombine,
  partialSign,
  partialSigVerify,
  partialSigCombine,
};


/***/ }),

/***/ 46408:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const BigInteger = __webpack_require__(34784);
const Buffer = (__webpack_require__(79664).Buffer);
const ecurve = __webpack_require__(24780);
const curve = ecurve.getCurveByName('secp256k1');
const math = __webpack_require__(33032);
const check = __webpack_require__(52124);
const convert = __webpack_require__(50325);

const concat = Buffer.concat;
const G = curve.G;
const p = curve.p;
const n = curve.n;
const zero = BigInteger.ZERO;

function sign(privateKey, message, aux) {
  // https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki#signing
  check.checkSignParams(privateKey, message);
  privateKey = typeof (privateKey) == 'string' ? BigInteger.fromHex(privateKey) : privateKey;

  const P = G.multiply(privateKey);
  const Px = convert.intToBuffer(P.affineX);

  const d = math.getEvenKey(P, privateKey);
  let kPrime
  if (aux) {
    check.checkAux(aux);

    const t = convert.intToBuffer(d.xor(convert.bufferToInt(math.taggedHash('BIP0340/aux', aux))));
    const rand = math.taggedHash('BIP0340/nonce', concat([t, Px, message]))
    kPrime = convert.bufferToInt(rand).mod(n);
  } else {
    kPrime = math.deterministicGetK0(d, Px, message);
  }

  if (kPrime.signum() === 0) {
    throw new Error('kPrime is zero');
  }

  const R = G.multiply(kPrime);
  const k = math.getEvenKey(R, kPrime);
  const Rx = convert.intToBuffer(R.affineX);
  const e = math.getE(Rx, Px, message);
  return concat([Rx, convert.intToBuffer(k.add(e.multiply(d)).mod(n))]);
}

function verify(pubKey, message, signature) {
  check.checkVerifyParams(pubKey, message, signature);

  // https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki#verification
  const P = math.liftX(pubKey);
  const Px = convert.intToBuffer(P.affineX);
  const r = convert.bufferToInt(signature.slice(0, 32));
  const s = convert.bufferToInt(signature.slice(32, 64));
  check.checkSignatureInput(r, s);
  const e = math.getE(convert.intToBuffer(r), Px, message);
  const R = math.getR(s, e, P);
  if (R.curve.isInfinity(R) || !math.isEven(R) || !R.affineX.equals(r)) {
    throw new Error('signature verification failed');
  }
}

function batchVerify(pubKeys, messages, signatures) {
  check.checkBatchVerifyParams(pubKeys, messages, signatures);

  // https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki#Batch_Verification
  let leftSide = zero;
  let rightSide = null;
  for (let i = 0; i < pubKeys.length; i++) {
    const P = math.liftX(pubKeys[i]);
    const Px = convert.intToBuffer(P.affineX);
    const r = convert.bufferToInt(signatures[i].slice(0, 32));
    const s = convert.bufferToInt(signatures[i].slice(32, 64));
    check.checkSignatureInput(r, s);
    const e = math.getE(convert.intToBuffer(r), Px, messages[i]);
    const R = math.liftX(signatures[i].slice(0, 32));

    if (i === 0) {
      leftSide = leftSide.add(s);
      rightSide = R;
      rightSide = rightSide.add(P.multiply(e));
    } else {
      const a = math.randomA();
      leftSide = leftSide.add(a.multiply(s));
      rightSide = rightSide.add(R.multiply(a));
      rightSide = rightSide.add(P.multiply(a.multiply(e)));
    }
  }

  if (!G.multiply(leftSide).equals(rightSide)) {
    throw new Error('signature verification failed');
  }
}

module.exports = {
  sign,
  verify,
  batchVerify,
};


/***/ }),

/***/ 49784:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Buffer = (__webpack_require__(79664).Buffer);
const ecurve = __webpack_require__(24780);
const curve = ecurve.getCurveByName('secp256k1');
const math = __webpack_require__(33032);
const convert = __webpack_require__(50325);

const concat = Buffer.concat;
const G = curve.G;

function taprootConstruct(pubKey, scripts) {
  // If the spending conditions do not require a script path, the output key should commit to an unspendable script path
  // instead of having no script path. This can be achieved by computing the output key point as
  // Q = P + int(hashTapTweak(bytes(P)))G.
  // https://en.bitcoin.it/wiki/BIP_0341#cite_note-22
  if (!scripts) {
    scripts = [];
  }
  const h = taprootTree(scripts);
  const Px = convert.intToBuffer(pubKey.affineX);
  const P = math.liftX(Px);
  const tweak = convert.bufferToInt(math.taggedHash('TapTweak', concat([Px, h])));
  const Q = P.add(G.multiply(tweak));
  return convert.intToBuffer(Q.affineX);
}

function taprootTree(scripts) {
  let h = Buffer.alloc(32, 0);
  if (!scripts || scripts.length === 0) {
    return new Buffer(0);
  }

  // TODO(guggero): Implement script part.
  return h;
}

module.exports = {
  taprootConstruct,
};


/***/ }),

/***/ 64368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var bitcore = module.exports;

// module information
bitcore.version = 'v' + (__webpack_require__(44400)/* .version */ .WU);
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
bitcore.crypto.BN = __webpack_require__(57907);
bitcore.crypto.ECDSA = __webpack_require__(78596);
bitcore.crypto.Hash = __webpack_require__(70456);
bitcore.crypto.Random = __webpack_require__(5524);
bitcore.crypto.Point = __webpack_require__(98373);
bitcore.crypto.Signature = __webpack_require__(70767);

// encoding
bitcore.encoding = {};
bitcore.encoding.Base58 = __webpack_require__(22372);
bitcore.encoding.Base58Check = __webpack_require__(71492);
bitcore.encoding.BufferReader = __webpack_require__(38224);
bitcore.encoding.BufferWriter = __webpack_require__(36088);
bitcore.encoding.Varint = __webpack_require__(42392);

// utilities
bitcore.util = {};
bitcore.util.buffer = __webpack_require__(42988);
bitcore.util.js = __webpack_require__(33832);
bitcore.util.preconditions = __webpack_require__(15464);

// errors thrown by the library
bitcore.errors = __webpack_require__(71712);

// main bitcoin library
bitcore.Address = __webpack_require__(15124);
bitcore.Block = __webpack_require__(77628);
bitcore.MerkleBlock = __webpack_require__(17916);
bitcore.BlockHeader = __webpack_require__(3205);
bitcore.HDPrivateKey = __webpack_require__(9216);
bitcore.HDPublicKey = __webpack_require__(97256);
bitcore.Message = __webpack_require__(79584);
bitcore.Networks = __webpack_require__(98400);
bitcore.Opcode = __webpack_require__(84016);
bitcore.PrivateKey = __webpack_require__(34788);
bitcore.PublicKey = __webpack_require__(68707);
bitcore.Script = __webpack_require__(81140);
bitcore.Transaction = __webpack_require__(53212);
bitcore.URI = __webpack_require__(78384);
bitcore.Unit = __webpack_require__(68272);

// dependencies, subject to change
bitcore.deps = {};
bitcore.deps.bnjs = __webpack_require__(65904);
bitcore.deps.bs58 = __webpack_require__(63000);
bitcore.deps.Buffer = Buffer;
bitcore.deps.elliptic = __webpack_require__(92392);
bitcore.deps._ = __webpack_require__(92469);

// Internal usage, exposed for testing/advanced tweaking
bitcore.Transaction.sighash = __webpack_require__(6532);


/***/ }),

/***/ 15124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);
var errors = __webpack_require__(71712);
var Base58Check = __webpack_require__(71492);
var Bech32 = __webpack_require__(94572);
var Networks = __webpack_require__(98400);
var Hash = __webpack_require__(70456);
var JSUtil = __webpack_require__(33832);
var PublicKey = __webpack_require__(68707);

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
  info.network = bufferVersion.network;
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
    info.hashBuffer = Hash.sha256ripemd160(Script.buildWitnessV1Out(pubkey).toBuffer());
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

var Script = __webpack_require__(81140);


/***/ }),

/***/ 10755:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var BlockHeader = __webpack_require__(3205);
var BN = __webpack_require__(57907);
var BufferUtil = __webpack_require__(42988);
var BufferReader = __webpack_require__(38224);
var BufferWriter = __webpack_require__(36088);
var Hash = __webpack_require__(70456);
var Transaction = __webpack_require__(53212);
var $ = __webpack_require__(15464);

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

/***/ 3205:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var BN = __webpack_require__(57907);
var BufferUtil = __webpack_require__(42988);
var BufferReader = __webpack_require__(38224);
var BufferWriter = __webpack_require__(36088);
var Hash = __webpack_require__(70456);
var JSUtil = __webpack_require__(33832);
var $ = __webpack_require__(15464);

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

/***/ 77628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(10755);

module.exports.BlockHeader = __webpack_require__(3205);
module.exports.MerkleBlock = __webpack_require__(17916);


/***/ }),

/***/ 17916:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var BlockHeader = __webpack_require__(3205);
var BufferUtil = __webpack_require__(42988);
var BufferReader = __webpack_require__(38224);
var BufferWriter = __webpack_require__(36088);
var Hash = __webpack_require__(70456);
var JSUtil = __webpack_require__(33832);
var Transaction = __webpack_require__(53212);
var errors = __webpack_require__(71712);
var $ = __webpack_require__(15464);

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

/***/ 57907:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var BN = __webpack_require__(65904);
var $ = __webpack_require__(15464);
var _ = __webpack_require__(92469);

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

/***/ 78596:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var BN = __webpack_require__(57907);
var Point = __webpack_require__(98373);
var Signature = __webpack_require__(70767);
var PublicKey = __webpack_require__(68707);
var Random = __webpack_require__(5524);
var Hash = __webpack_require__(70456);
var BufferUtil = __webpack_require__(42988);
var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);

var ECDSA = function ECDSA(obj) {
  if (!(this instanceof ECDSA)) {
    return new ECDSA(obj);
  }
  if (obj) {
    this.set(obj);
  }
};

/* jshint maxcomplexity: 9 */
ECDSA.prototype.set = function(obj) {
  this.hashbuf = obj.hashbuf || this.hashbuf;
  this.endian = obj.endian || this.endian; //the endianness of hashbuf
  this.privkey = obj.privkey || this.privkey;
  this.pubkey = obj.pubkey || (this.privkey ? this.privkey.publicKey : this.pubkey);
  this.sig = obj.sig || this.sig;
  this.k = obj.k || this.k;
  this.verified = obj.verified || this.verified;
  return this;
};

ECDSA.prototype.privkey2pubkey = function() {
  this.pubkey = this.privkey.toPublicKey();
};

ECDSA.prototype.calci = function() {
  for (var i = 0; i < 4; i++) {
    this.sig.i = i;
    var Qprime;
    try {
      Qprime = this.toPublicKey();
    } catch (e) {
      console.error(e);
      continue;
    }

    if (Qprime.point.eq(this.pubkey.point)) {
      this.sig.compressed = this.pubkey.compressed;
      return this;
    }
  }

  this.sig.i = undefined;
  throw new Error('Unable to find valid recovery factor');
};

ECDSA.fromString = function(str) {
  var obj = JSON.parse(str);
  return new ECDSA(obj);
};

ECDSA.prototype.randomK = function() {
  var N = Point.getN();
  var k;
  do {
    k = BN.fromBuffer(Random.getRandomBuffer(32));
  } while (!(k.lt(N) && k.gt(BN.Zero)));
  this.k = k;
  return this;
};


// https://tools.ietf.org/html/rfc6979#section-3.2
ECDSA.prototype.deterministicK = function(badrs) {
  /* jshint maxstatements: 25 */
  // if r or s were invalid when this function was used in signing,
  // we do not want to actually compute r, s here for efficiency, so,
  // we can increment badrs. explained at end of RFC 6979 section 3.2
  if (_.isUndefined(badrs)) {
    badrs = 0;
  }
  var v = Buffer.alloc(32);
  v.fill(0x01);
  var k = Buffer.alloc(32);
  k.fill(0x00);
  var x = this.privkey.bn.toBuffer({
    size: 32
  });
  var hashbuf = this.endian === 'little' ? BufferUtil.reverse(this.hashbuf) : this.hashbuf
  k = Hash.sha256hmac(Buffer.concat([v, Buffer.from([0x00]), x, hashbuf]), k);
  v = Hash.sha256hmac(v, k);
  k = Hash.sha256hmac(Buffer.concat([v, Buffer.from([0x01]), x, hashbuf]), k);
  v = Hash.sha256hmac(v, k);
  v = Hash.sha256hmac(v, k);
  var T = BN.fromBuffer(v);
  var N = Point.getN();

  // also explained in 3.2, we must ensure T is in the proper range (0, N)
  for (var i = 0; i < badrs || !(T.lt(N) && T.gt(BN.Zero)); i++) {
    k = Hash.sha256hmac(Buffer.concat([v, Buffer.from([0x00])]), k);
    v = Hash.sha256hmac(v, k);
    v = Hash.sha256hmac(v, k);
    T = BN.fromBuffer(v);
  }

  this.k = T;
  return this;
};

// Information about public key recovery:
// https://bitcointalk.org/index.php?topic=6430.0
// http://stackoverflow.com/questions/19665491/how-do-i-get-an-ecdsa-public-key-from-just-a-bitcoin-signature-sec1-4-1-6-k
ECDSA.prototype.toPublicKey = function() {
  /* jshint maxstatements: 25 */
  var i = this.sig.i;
  $.checkArgument(i === 0 || i === 1 || i === 2 || i === 3, new Error('i must be equal to 0, 1, 2, or 3'));

  var e = BN.fromBuffer(this.hashbuf);
  var r = this.sig.r;
  var s = this.sig.s;

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

  var pubkey = PublicKey.fromPoint(Q, this.sig.compressed);

  return pubkey;
};

ECDSA.prototype.sigError = function() {
  /* jshint maxstatements: 25 */
  if (!BufferUtil.isBuffer(this.hashbuf) || this.hashbuf.length !== 32) {
    return 'hashbuf must be a 32 byte buffer';
  }

  var r = this.sig.r;
  var s = this.sig.s;
  if (!(r.gt(BN.Zero) && r.lt(Point.getN())) || !(s.gt(BN.Zero) && s.lt(Point.getN()))) {
    return 'r and s not in range';
  }

  var e = BN.fromBuffer(this.hashbuf, this.endian ? {
    endian: this.endian
  } : undefined);
  var n = Point.getN();
  var sinv = s.invm(n);
  var u1 = sinv.mul(e).umod(n);
  var u2 = sinv.mul(r).umod(n);

  var p = Point.getG().mulAdd(u1, this.pubkey.point, u2);
  if (p.isInfinity()) {
    return 'p is infinity';
  }

  if (p.getX().umod(n).cmp(r) !== 0) {
    return 'Invalid signature';
  } else {
    return false;
  }
};

ECDSA.toLowS = function(s) {
  //enforce low s
  //see BIP 62, "low S values in signatures"
  if (s.gt(BN.fromBuffer(Buffer.from('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0', 'hex')))) {
    s = Point.getN().sub(s);
  }
  return s;
};

ECDSA.prototype._findSignature = function(d, e) {
  var N = Point.getN();
  var G = Point.getG();
  // try different values of k until r, s are valid
  var badrs = 0;
  var k, Q, r, s;
  do {
    if (!this.k || badrs > 0) {
      this.deterministicK(badrs);
    }
    badrs++;
    k = this.k;
    Q = G.mul(k);
    r = Q.x.umod(N);
    s = k.invm(N).mul(e.add(d.mul(r))).umod(N);
  } while (r.cmp(BN.Zero) <= 0 || s.cmp(BN.Zero) <= 0);

  s = ECDSA.toLowS(s);
  return {
    s: s,
    r: r
  };

};

ECDSA.prototype.sign = function() {
  var hashbuf = this.hashbuf;
  var privkey = this.privkey;
  var d = privkey.bn;

  $.checkState(hashbuf && privkey && d, new Error('invalid parameters'));
  $.checkState(BufferUtil.isBuffer(hashbuf) && hashbuf.length === 32, new Error('hashbuf must be a 32 byte buffer'));

  var e = BN.fromBuffer(hashbuf, this.endian ? {
    endian: this.endian
  } : undefined);

  var obj = this._findSignature(d, e);
  obj.compressed = this.pubkey.compressed;

  this.sig = new Signature(obj);
  return this;
};

ECDSA.prototype.signRandomK = function() {
  this.randomK();
  return this.sign();
};

ECDSA.prototype.toString = function() {
  var obj = {};
  if (this.hashbuf) {
    obj.hashbuf = this.hashbuf.toString('hex');
  }
  if (this.privkey) {
    obj.privkey = this.privkey.toString();
  }
  if (this.pubkey) {
    obj.pubkey = this.pubkey.toString();
  }
  if (this.sig) {
    obj.sig = this.sig.toString();
  }
  if (this.k) {
    obj.k = this.k.toString();
  }
  return JSON.stringify(obj);
};

ECDSA.prototype.verify = function() {
  if (!this.sigError()) {
    this.verified = true;
  } else {
    this.verified = false;
  }
  return this;
};

ECDSA.sign = function(hashbuf, privkey, endian) {
  return ECDSA().set({
    hashbuf: hashbuf,
    endian: endian,
    privkey: privkey
  }).sign().sig;
};

ECDSA.verify = function(hashbuf, sig, pubkey, endian) {
  return ECDSA().set({
    hashbuf: hashbuf,
    endian: endian,
    sig: sig,
    pubkey: pubkey
  }).verify().verified;
};

module.exports = ECDSA;


/***/ }),

/***/ 70456:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var crypto = __webpack_require__(35800);
var BufferUtil = __webpack_require__(42988);
var $ = __webpack_require__(15464);

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

/***/ 98373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var BN = __webpack_require__(57907);
var BufferUtil = __webpack_require__(42988);

var EC = (__webpack_require__(92392).ec);
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
 *
 * @link https://en.bitcoin.it/wiki/Private_key#Range_of_valid_ECDSA_private_keys
 * @returns {BN} A BN instance of the number of points on the curve
 */
Point.getN = function getN() {
  return new BN(ec.curve.n.toArray());
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

module.exports = Point;


/***/ }),

/***/ 5524:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(33988);
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


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
  var crypto = __webpack_require__(35800);
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

/***/ 70767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var BN = __webpack_require__(57907);
var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);
var BufferUtil = __webpack_require__(42988);
var JSUtil = __webpack_require__(33832);

var Signature = function Signature(r, s) {
  if (!(this instanceof Signature)) {
    return new Signature(r, s);
  }
  if (r instanceof BN) {
    this.set({
      r: r,
      s: s
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

  this.i = typeof obj.i !== 'undefined' ? obj.i : this.i; //public key recovery parameter in range [0, 3]
  this.compressed = typeof obj.compressed !== 'undefined' ?
    obj.compressed : this.compressed; //whether the recovered pubkey is compressed
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
  var obj = Signature.parseDER(buf, strict);
  var sig = new Signature();

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

Signature.prototype.toBuffer = Signature.prototype.toDER = function() {
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

Signature.SIGHASH_ALL = 0x01;
Signature.SIGHASH_NONE = 0x02;
Signature.SIGHASH_SINGLE = 0x03;
Signature.SIGHASH_ANYONECANPAY = 0x80;

module.exports = Signature;


/***/ }),

/***/ 22372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var bs58 = __webpack_require__(63000);
var buffer = __webpack_require__(87597);

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

/***/ 71492:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var Base58 = __webpack_require__(22372);
var buffer = __webpack_require__(87597);
var sha256sha256 = (__webpack_require__(70456).sha256sha256);

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

/***/ 94572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var bech32 = __webpack_require__(82964);

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

/***/ 38224:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);
var BufferUtil = __webpack_require__(42988);
var BN = __webpack_require__(57907);

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

/***/ 36088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var bufferUtil = __webpack_require__(42988);
var assert = __webpack_require__(97344);

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
  var buf = Buffer.alloc(1);
  buf.writeUInt8(n, 0);
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeUInt16BE = function(n) {
  var buf = Buffer.alloc(2);
  buf.writeUInt16BE(n, 0);
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeUInt16LE = function(n) {
  var buf = Buffer.alloc(2);
  buf.writeUInt16LE(n, 0);
  this.write(buf);
  return this;
};

BufferWriter.prototype.writeUInt32BE = function(n) {
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

/***/ 42392:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var BufferWriter = __webpack_require__(36088);
var BufferReader = __webpack_require__(38224);
var BN = __webpack_require__(57907);

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

/***/ 71712:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(92469);

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


var data = __webpack_require__(79308);
traverseRoot(bitcore.Error, data);

module.exports = bitcore.Error;

module.exports.extend = function(spec) {
  return traverseNode(bitcore.Error, spec);
};


/***/ }),

/***/ 79308:
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

/***/ 9216:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];



var assert = __webpack_require__(97344);
var buffer = __webpack_require__(87597);
var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);

var BN = __webpack_require__(57907);
var Base58 = __webpack_require__(22372);
var Base58Check = __webpack_require__(71492);
var Hash = __webpack_require__(70456);
var Network = __webpack_require__(98400);
var Point = __webpack_require__(98373);
var PrivateKey = __webpack_require__(34788);
var Random = __webpack_require__(5524);

var errors = __webpack_require__(71712);
var hdErrors = errors.HDPrivateKey;
var BufferUtil = __webpack_require__(42988);
var JSUtil = __webpack_require__(33832);

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
    var HDPublicKey = __webpack_require__(97256);
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

/***/ 97256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);

var BN = __webpack_require__(57907);
var Base58 = __webpack_require__(22372);
var Base58Check = __webpack_require__(71492);
var Hash = __webpack_require__(70456);
var HDPrivateKey = __webpack_require__(9216);
var Network = __webpack_require__(98400);
var Point = __webpack_require__(98373);
var PublicKey = __webpack_require__(68707);

var bitcoreErrors = __webpack_require__(71712);
var errors = bitcoreErrors;
var hdErrors = bitcoreErrors.HDPublicKey;
var assert = __webpack_require__(97344);

var JSUtil = __webpack_require__(33832);
var BufferUtil = __webpack_require__(42988);

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

/***/ 79584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var PrivateKey = __webpack_require__(34788);
var PublicKey = __webpack_require__(68707);
var Address = __webpack_require__(15124);
var BufferWriter = __webpack_require__(36088);
var ECDSA = __webpack_require__(78596);
var Signature = __webpack_require__(70767);
var sha256sha256 = (__webpack_require__(70456).sha256sha256);
var JSUtil = __webpack_require__(33832);
var $ = __webpack_require__(15464);

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
  var hash = this.magicHash();
  var ecdsa = new ECDSA();
  ecdsa.hashbuf = hash;
  ecdsa.privkey = privateKey;
  ecdsa.pubkey = privateKey.toPublicKey();
  ecdsa.signRandomK();
  ecdsa.calci();
  return ecdsa.sig;
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
  var ecdsa = new ECDSA();
  ecdsa.hashbuf = this.magicHash();
  ecdsa.sig = signature;
  var publicKey = ecdsa.toPublicKey();

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
  var ecdsa = new ECDSA();
  ecdsa.hashbuf = this.magicHash();
  ecdsa.sig = signature;
  var publicKey = ecdsa.toPublicKey();

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

var Script = __webpack_require__(81140);


/***/ }),

/***/ 98400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var _ = __webpack_require__(92469);

var BufferUtil = __webpack_require__(42988);
var JSUtil = __webpack_require__(33832);
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
    if (!_.isArray(keys)) {
      keys = [keys];
    }
    var containsArg = function(key) {
      return networks[index][key] === arg;
    };
    for (var index in networks) {
      if (_.some(keys, containsArg)) {
        return networks[index];
      }
    }
    return undefined;
  }
  if(networkMaps[arg] && networkMaps[arg].length >= 1) {
    return networkMaps[arg][0];
  } else {
    return networkMaps[arg];
  }
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
 * @param {Number} data.networkMagic - The network magic number
 * @param {Number} data.port - The network port
 * @param {Array}  data.dnsSeeds - An array of dns seeds
 * @return Network
 */
function addNetwork(data) {

  var network = new Network();

  JSUtil.defineImmutable(network, {
    name: data.name,
    alias: data.alias,
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
  _.each(network, function(value) {
    if (!_.isUndefined(value) && !_.isObject(value)) {
      if(!networkMaps[value]) {
        networkMaps[value] = [];
      }
      networkMaps[value].push(network);
    }
  });

  networks.push(network);

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
  alias: 'test',
  pubkeyhash: 0x6f,
  privatekey: 0xef,
  scripthash: 0xc4,
  bech32prefix: 'tb',
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  networkMagic: 0x0b110907,
  port: 18333,
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me',
    'testnet-seed.alexykot.me',
    'testnet-seed.bitcoin.schildbach.de'
  ]
});

/**
 * @instance
 * @member Networks#testnet
 */
var testnet = get('testnet');

addNetwork({
  name: 'regtest',
  alias: 'dev',
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
 * @member Networks#testnet
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
  regtest: regtest,
  get: get,
  enableRegtest: enableRegtest,
  disableRegtest: disableRegtest
};


/***/ }),

/***/ 84016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);
var BufferUtil = __webpack_require__(42988);
var JSUtil = __webpack_require__(33832);

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

/***/ 34788:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var Address = __webpack_require__(15124);
var Base58Check = __webpack_require__(71492);
var BN = __webpack_require__(57907);
var JSUtil = __webpack_require__(33832);
var Networks = __webpack_require__(98400);
var Point = __webpack_require__(98373);
var PublicKey = __webpack_require__(68707);
var Random = __webpack_require__(5524);
var $ = __webpack_require__(15464);

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
      info.bn = new BN(Buffer.from(data, 'hex'));
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

/***/ 68707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var BN = __webpack_require__(57907);
var Point = __webpack_require__(98373);
var Hash = __webpack_require__(70456);
var JSUtil = __webpack_require__(33832);
var Network = __webpack_require__(98400);
var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);

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
  var PrivateKey = __webpack_require__(34788);
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
 * @param {Buffer} buf - A DER hex buffer
 * @param {bool=} strict - if set to false, will loosen some conditions
 * @returns {PublicKey} A new valid instance of PublicKey
 */
PublicKey.fromDER = PublicKey.fromBuffer = function(buf, strict) {
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
  var Address = __webpack_require__(15124);
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

/***/ 81140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(54088);

module.exports.Interpreter = __webpack_require__(6288);


/***/ }),

/***/ 6288:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);

var Script = __webpack_require__(54088);
var Opcode = __webpack_require__(84016);
var BN = __webpack_require__(57907);
var Hash = __webpack_require__(70456);
var Signature = __webpack_require__(70767);
var PublicKey = __webpack_require__(68707);

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

Interpreter.SIGVERSION_BASE = 0;
Interpreter.SIGVERSION_WITNESS_V0 = 1;
Interpreter.SIGVERSION_TAPROOT = 2;
Interpreter.SIGVERSION_TAPSCRIPT = 3;

Interpreter.prototype.verifyWitnessProgram = function(version, program, witness, satoshis, flags) {

  var scriptPubKey = new Script();
  var stack = [];

  if (version === 0) {
    if (program.length === 32) {
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
    } else if (program.length === 20) {
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

    } else {
      this.errstr = 'SCRIPT_ERR_WITNESS_PROGRAM_WRONG_LENGTH';
      return false;
    }
  } else if ((flags & Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM)) {
    this.errstr = 'SCRIPT_ERR_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM';
    return false;
  } else {
    return true;
  }

  this.initialize();

  this.set({
    script: scriptPubKey,
    stack: stack,
    sigversion: Interpreter.SIGVERSION_WITNESS_V0,
    satoshis: satoshis,
    flags: flags,
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

  var Transaction = __webpack_require__(53212);
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
    sigversion: Interpreter.SIGVERSION_BASE,
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
        return false;
      }
      if (!this.verifyWitnessProgram(witnessValues.version, witnessValues.program, witness, satoshis, this.flags)) {
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

        if (!this.verifyWitnessProgram(p2shWitnessValues.version, p2shWitnessValues.program, witness, satoshis, this.flags)) {
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
      if ((this.flags & Interpreter.SCRIPT_VERIFY_P2SH) == 0)
        throw 'flags & SCRIPT_VERIFY_P2SH';

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
  this.sigversion = Interpreter.SIGVERSION_BASE;
  this.pbegincodehash = 0;
  this.nOpCount = 0;
  this.vfExec = [];
  this.errstr = '';
  this.flags = 0;
};

Interpreter.prototype.set = function(obj) {
  this.script = obj.script || this.script;
  this.tx = obj.tx || this.tx;
  this.nin = typeof obj.nin !== 'undefined' ? obj.nin : this.nin;
  this.stack = obj.stack || this.stack;
  this.altstack = obj.altack || this.altstack;
  this.pc = typeof obj.pc !== 'undefined' ? obj.pc : this.pc;
  this.pbegincodehash = typeof obj.pbegincodehash !== 'undefined' ? obj.pbegincodehash : this.pbegincodehash;
  this.sigversion = typeof obj.sigversion !== 'undefined' ? obj.sigversion : this.sigversion;
  this.satoshis = typeof obj.satoshis !== 'undefined' ? obj.satoshis : this.satoshis;
  this.nOpCount = typeof obj.nOpCount !== 'undefined' ? obj.nOpCount : this.nOpCount;
  this.vfExec = obj.vfExec || this.vfExec;
  this.errstr = obj.errstr || this.errstr;
  this.flags = typeof obj.flags !== 'undefined' ? obj.flags : this.flags;
};

Interpreter.true = Buffer.from([1]);
Interpreter.false = Buffer.from([]);

Interpreter.MAX_SCRIPT_ELEMENT_SIZE = 520;

Interpreter.LOCKTIME_THRESHOLD = 500000000;
Interpreter.LOCKTIME_THRESHOLD_BN = new BN(Interpreter.LOCKTIME_THRESHOLD);

// flags taken from bitcoind
// bitcoind commit: b5d1b1092998bc95313856d535c632ea5a8f9104
Interpreter.SCRIPT_VERIFY_NONE = 0;

// Making v1-v16 witness program non-standard
Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM = (1 << 12);

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

// CLTV See BIP65 for details.
Interpreter.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = (1 << 9);
Interpreter.SCRIPT_VERIFY_WITNESS = (1 << 10);
Interpreter.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = (1 << 11);

// support CHECKSEQUENCEVERIFY opcode
//
// See BIP112 for details
Interpreter.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY = (1 << 10);

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

// Enable new opcodes.
//
Interpreter.SCRIPT_ENABLE_MONOLITH_OPCODES = (1 << 18);



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
  if ((this.flags & Interpreter.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE) != 0 && this.sigversion == Interpreter.SIGVERSION_WITNESS_V0 && !PublicKey.fromBuffer(buf).compressed) {
    this.errstr = 'SCRIPT_ERR_WITNESS_PUBKEYTYPE';
    return false;
  }

  return true;
};

/**
 * Based on bitcoind's EvalScript function, with the inner loop moved to
 * Interpreter.prototype.step()
 * bitcoind commit: b5d1b1092998bc95313856d535c632ea5a8f9104
 */
Interpreter.prototype.evaluate = function() {
  if (this.script.toBuffer().length > 10000) {
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

    // Size limits
    if (this.stack.length + this.altstack.length > 1000) {
      this.errstr = 'SCRIPT_ERR_STACK_SIZE';
      return false;
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
    if (txToSequence & SEQUENCE_LOCKTIME_DISABLE_FLAG) {
        return false;
    }

    // Mask off any bits that do not have consensus-enforced meaning before
    // doing the integer comparisons
    var nLockTimeMask =
        Interpreter.SEQUENCE_LOCKTIME_TYPE_FLAG | Interpreter.SEQUENCE_LOCKTIME_MASK;
    var txToSequenceMasked = new BN(txToSequence & nLockTimeMask);
    var nSequenceMasked = nSequence.and(nLockTimeMask);

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
    if (nSequenceMasked.gt(txToSequenceMasked)) {
        return false;
    }
    return true;
  }

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

  // Note how Opcode.OP_RESERVED does not count towards the opcode limit.
  if (opcodenum > Opcode.OP_16 && ++(this.nOpCount) > 201) {
    this.errstr = 'SCRIPT_ERR_OP_COUNT';
    return false;
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

            if (this.flags & Interpreter.SCRIPT_VERIFY_MINIMALIF) {
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
          if (!this.checkSignatureEncoding(bufSig) || !this.checkPubkeyEncoding(bufPubkey)) {
            return false;
          }

          // Subset of script starting at the most recent codeseparator
          // CScript scriptCode(pbegincodehash, pend);
          subscript = new Script().set({
            chunks: this.script.chunks.slice(this.pbegincodehash)
          });

          // Drop the signature, since there's no way for a signature to sign itself
          var tmpScript = new Script().add(bufSig);
          subscript.findAndDelete(tmpScript);

          try {
            sig = Signature.fromTxFormat(bufSig);
            pubkey = PublicKey.fromBuffer(bufPubkey, false);
            fSuccess = this.tx.verifySignature(sig, pubkey, this.nin, subscript, this.sigversion, this.satoshis);
          } catch (e) {
            //invalid sig or pubkey
            fSuccess = false;
          }

          if (!fSuccess && (this.flags & Interpreter.SCRIPT_VERIFY_NULLFAIL) &&
            bufSig.length) {
            this.errstr = 'SCRIPT_ERR_NULLFAIL';
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
              fOk = this.tx.verifySignature(sig, pubkey, this.nin, subscript, this.sigversion, this.satoshis);
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

  return true;
};



/***/ }),

/***/ 54088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var Address = __webpack_require__(15124);
var BufferReader = __webpack_require__(38224);
var BufferWriter = __webpack_require__(36088);
var Hash = __webpack_require__(70456);
var Opcode = __webpack_require__(84016);
var PublicKey = __webpack_require__(68707);
var Signature = __webpack_require__(70767);
var Networks = __webpack_require__(98400);
var $ = __webpack_require__(15464);
var _ = __webpack_require__(92469);
var errors = __webpack_require__(71712);
var buffer = __webpack_require__(87597);
var BufferUtil = __webpack_require__(42988);
var JSUtil = __webpack_require__(33832);

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
  } else if (_.isString(from)) {
    return Script.fromString(from);
  } else if (_.isObject(from) && _.isArray(from.chunks)) {
    this.set(from);
  }
};

Script.VERIFY_TAPROOT = (1 << 17);


Script.prototype.set = function(obj) {
  $.checkArgument(_.isObject(obj));
  $.checkArgument(_.isArray(obj.chunks));
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

    if (_.isUndefined(opcodenum)) {
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

    if (_.isUndefined(opcodenum)) {
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
    values.version = buf[0];
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
    if (_.isUndefined(this.chunks[1])) {
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
  return _.every(this.chunks, function(chunk) {
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
  publicKeys = _.map(publicKeys, PublicKey);
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
  $.checkArgument(_.isArray(pubkeys));
  $.checkArgument(_.isNumber(threshold));
  $.checkArgument(_.isArray(signatures));
  opts = opts || {};
  var s = new Script();
  s.add(Opcode.OP_0);
  _.each(signatures, function(signature) {
    $.checkArgument(BufferUtil.isBuffer(signature), 'Signatures must be an array of Buffers');
    // TODO: allow signatures to be an array of Signature objects
    s.add(signature);
  });
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
  $.checkArgument(_.isArray(pubkeys));
  $.checkArgument(_.isNumber(threshold));
  $.checkArgument(_.isArray(signatures));
  opts = opts || {};
  var s = new Script();
  s.add(Opcode.OP_0);
  _.each(signatures, function(signature) {
    $.checkArgument(BufferUtil.isBuffer(signature), 'Signatures must be an array of Buffers');
    // TODO: allow signatures to be an array of Signature objects
    s.add(signature);
  });
  s.add((opts.cachedMultisig || Script.buildMultisigOut(pubkeys, threshold, opts)).toBuffer());
  return s;
};

/**
 * @returns {Script} a new pay to public key hash output for the given
 * address or public key
 * @param {(Address|PublicKey)} to - destination address or public key
 */
Script.buildPublicKeyHashOut = function(to) {
  $.checkArgument(!_.isUndefined(to));
  $.checkArgument(to instanceof PublicKey || to instanceof Address || _.isString(to));
  if (to instanceof PublicKey) {
    to = to.toAddress();
  } else if (_.isString(to)) {
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
  $.checkArgument(!_.isUndefined(to));
  $.checkArgument(to instanceof PublicKey || to instanceof Address || _.isString(to));
  if (to instanceof PublicKey) {
    to = to.toAddress(null, Address.PayToWitnessPublicKeyHash);
  } else if (_.isString(to)) {
    to = new Address(to);
  }
  var s = new Script();
  s.add(Opcode.OP_0)
    .add(to.hashBuffer);
  s._network = to.network;
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
  $.checkArgument(_.isUndefined(data) || _.isString(data) || BufferUtil.isBuffer(data));
  if (_.isString(data)) {
    data = Buffer.from(data, encoding);
  }
  var s = new Script();
  s.add(Opcode.OP_RETURN);
  if (!_.isUndefined(data)) {
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
  $.checkArgument(_.isUndefined(sigtype) || _.isNumber(sigtype));
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
  $.checkArgument(_.isUndefined(sigtype) || _.isNumber(sigtype));
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
 * Comes from bitcoind's script DecodeOP_N function
 * @param {number} opcode
 * @returns {number} numeric value in range of 0 to 16
 */
Script.prototype._decodeOP_N = function(opcode) {
  if (opcode === Opcode.OP_0) {
    return 0;
  } else if (opcode >= Opcode.OP_1 && opcode <= Opcode.OP_16) {
    return opcode - (Opcode.OP_1 - 1);
  } else {
    throw new Error('Invalid opcode: ' + JSON.stringify(opcode));
  }
};

/**
 * Comes from bitcoind's script GetSigOpCount(boolean) function
 * @param {boolean} use current (true) or pre-version-0.6 (false) logic
 * @returns {number} number of signature operations required by this script
 */
Script.prototype.getSignatureOperationsCount = function(accurate) {
  accurate = (_.isUndefined(accurate) ? true : accurate);
  var self = this;
  var n = 0;
  var lastOpcode = Opcode.OP_INVALIDOPCODE;
  _.each(self.chunks, function getChunk(chunk) {
    var opcode = chunk.opcodenum;
    if (opcode == Opcode.OP_CHECKSIG || opcode == Opcode.OP_CHECKSIGVERIFY) {
      n++;
    } else if (opcode == Opcode.OP_CHECKMULTISIG || opcode == Opcode.OP_CHECKMULTISIGVERIFY) {
      if (accurate && lastOpcode >= Opcode.OP_1 && lastOpcode <= Opcode.OP_16) {
        n += self._decodeOP_N(lastOpcode);
      } else {
        n += 20;
      }
    }
    lastOpcode = opcode;
  });
  return n;
};

module.exports = Script;


/***/ }),

/***/ 53212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2532);

module.exports.Input = __webpack_require__(45496);
module.exports.Output = __webpack_require__(17256);
module.exports.UnspentOutput = __webpack_require__(132);
module.exports.Signature = __webpack_require__(38576);
module.exports.Sighash = __webpack_require__(6532);
module.exports.SighashWitness = __webpack_require__(17752);


/***/ }),

/***/ 45496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(19636);

module.exports.PublicKey = __webpack_require__(57728);
module.exports.PublicKeyHash = __webpack_require__(62508);
module.exports.MultiSig = __webpack_require__(80376);
module.exports.MultiSigScriptHash = __webpack_require__(97776);


/***/ }),

/***/ 19636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);
const errors = __webpack_require__(71712);
var BufferWriter = __webpack_require__(36088);
var buffer = __webpack_require__(87597);
var BufferUtil = __webpack_require__(42988);
var JSUtil = __webpack_require__(33832);
var Script = __webpack_require__(81140);
var Sighash = __webpack_require__(6532);
var Output = __webpack_require__(17256);

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
  if (_.isString(params.prevTxId) && JSUtil.isHexa(params.prevTxId)) {
    prevTxId = Buffer.from(params.prevTxId, 'hex');
  } else {
    prevTxId = params.prevTxId;
  }
  this.witnesses = [];
  this.output = params.output ?
    (params.output instanceof Output ? params.output : new Output(params.output)) : undefined;
  this.prevTxId = prevTxId || params.txidbuf;
  this.outputIndex = _.isUndefined(params.outputIndex) ? params.txoutnum : params.outputIndex;
  this.sequenceNumber = _.isUndefined(params.sequenceNumber) ?
    (_.isUndefined(params.seqnum) ? DEFAULT_SEQNUMBER : params.seqnum) : params.sequenceNumber;
  if (_.isUndefined(params.script) && _.isUndefined(params.scriptBuffer)) {
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
  // FIXME: Refactor signature so this is not necessary
  signingMethod = signingMethod || 'ecdsa';
  signature.signature.nhashtype = signature.sigtype;
  return Sighash.verify(
    transaction,
    signature.signature,
    signature.publicKey,
    signature.inputIndex,
    this.output.script,
    signingMethod
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

/***/ 80376:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(92469);
var inherits = __webpack_require__(77420);
var Transaction = __webpack_require__(2532);
var Input = __webpack_require__(19636);
var Output = __webpack_require__(17256);
var $ = __webpack_require__(15464);

var Script = __webpack_require__(81140);
var Signature = __webpack_require__(70767);
var Sighash = __webpack_require__(6532);
var PublicKey = __webpack_require__(68707);
var BufferUtil = __webpack_require__(42988);
var TransactionSignature = __webpack_require__(38576);

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

MultiSigInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype, hashData, signingMethod) {
  $.checkState(this.output instanceof Output);
  sigtype = sigtype || Signature.SIGHASH_ALL;
  signingMethod = signingMethod || 'ecdsa';

  var self = this;
  var results = [];
  _.each(this.publicKeys, function(publicKey) {
    if (publicKey.toString() === privateKey.publicKey.toString()) {
      results.push(new TransactionSignature({
        publicKey: privateKey.publicKey,
        prevTxId: self.prevTxId,
        outputIndex: self.outputIndex,
        inputIndex: index,
        signature: Sighash.sign(transaction, privateKey, sigtype, index, self.output.script, signingMethod),
        sigtype: sigtype
      }));
    }
  });

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
  // FIXME: Refactor signature so this is not necessary
  signature.signature.nhashtype = signature.sigtype;
  return Sighash.verify(
    transaction,
    signature.signature,
    signature.publicKey,
    signature.inputIndex,
    this.output.script,
    signingMethod
  );
};

/**
 *
 * @param {Buffer[]} signatures
 * @param {PublicKey[]} publicKeys
 * @param {Transaction} transaction
 * @param {Integer} inputIndex
 * @param {Input} input
 * @param {String} signingMethod - method used to sign - 'ecdsa' or 'schnorr' (future signing method)
 * @returns {TransactionSignature[]}
 */
MultiSigInput.normalizeSignatures = function(transaction, input, inputIndex, signatures, publicKeys, signingMethod) {
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
          input.output.script,
          signingMethod
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
  return MultiSigInput.OPCODES_SIZE +
    this.threshold * MultiSigInput.SIGNATURE_SIZE;
};

module.exports = MultiSigInput;


/***/ }),

/***/ 97776:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


/* jshint maxparams:5 */

var _ = __webpack_require__(92469);
var inherits = __webpack_require__(77420);
var Input = __webpack_require__(19636);
var Output = __webpack_require__(17256);
var $ = __webpack_require__(15464);

var Address = __webpack_require__(15124);
var Script = __webpack_require__(81140);
var Signature = __webpack_require__(70767);
var Sighash = __webpack_require__(6532);
var SighashWitness = __webpack_require__(17752);
var BufferWriter = __webpack_require__(36088);
var BufferUtil = __webpack_require__(42988);
var TransactionSignature = __webpack_require__(38576);

/**
 * @constructor
 */
function MultiSigScriptHashInput(input, pubkeys, threshold, signatures, opts) {
  /* jshint maxstatements:20 */
  opts = opts || {};
  Input.apply(this, arguments);
  var self = this;
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
  _.each(this.publicKeys, function(publicKey, index) {
    self.publicKeyIndex[publicKey.toString()] = index;
  });
  this.threshold = threshold;
  // Empty array of signatures
  this.signatures = signatures ? this._deserializeSignatures(signatures) : new Array(this.publicKeys.length);
}
inherits(MultiSigScriptHashInput, Input);

MultiSigScriptHashInput.prototype.toObject = function() {
  var obj = Input.prototype.toObject.apply(this, arguments);
  obj.threshold = this.threshold;
  obj.publicKeys = _.map(this.publicKeys, function(publicKey) { return publicKey.toString(); });
  obj.signatures = this._serializeSignatures();
  return obj;
};

MultiSigScriptHashInput.prototype._deserializeSignatures = function(signatures) {
  return _.map(signatures, function(signature) {
    if (!signature) {
      return undefined;
    }
    return new TransactionSignature(signature);
  });
};

MultiSigScriptHashInput.prototype._serializeSignatures = function() {
  return _.map(this.signatures, function(signature) {
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
  var self = this;
  var hash;
  if (self.nestedWitness || self.type === Address.PayToWitnessScriptHash) {
    var scriptCode = self.getScriptCode();
    var satoshisBuffer = self.getSatoshisBuffer();
    hash = SighashWitness.sighash(transaction, sigtype, index, scriptCode, satoshisBuffer);
  } else  {
    hash = Sighash.sighash(transaction, sigtype, index, self.redeemScript);
  }
  return hash;
};

MultiSigScriptHashInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype, hashData, signingMethod) {
  $.checkState(this.output instanceof Output);
  sigtype = sigtype || Signature.SIGHASH_ALL;
  signingMethod = signingMethod || 'ecdsa';

  var self = this;
  var results = [];
  _.each(this.publicKeys, function(publicKey) {
    if (publicKey.toString() === privateKey.publicKey.toString()) {
      var signature;
      if (self.nestedWitness || self.type === Address.PayToWitnessScriptHash) {
        var scriptCode = self.getScriptCode();
        var satoshisBuffer = self.getSatoshisBuffer();
        signature = SighashWitness.sign(transaction, privateKey, sigtype, index, scriptCode, satoshisBuffer, signingMethod);
      } else  {
        signature = Sighash.sign(transaction, privateKey, sigtype, index, self.redeemScript, signingMethod);
      }
      results.push(new TransactionSignature({
        publicKey: privateKey.publicKey,
        prevTxId: self.prevTxId,
        outputIndex: self.outputIndex,
        inputIndex: index,
        signature: signature,
        sigtype: sigtype
      }));
    }
  });
  return results;
};

MultiSigScriptHashInput.prototype.addSignature = function(transaction, signature, signingMethod) {
  $.checkState(!this.isFullySigned(), 'All needed signatures have already been added');
  $.checkArgument(!_.isUndefined(this.publicKeyIndex[signature.publicKey.toString()]),
                  'Signature has no matching public key');
  $.checkState(this.isValidSignature(transaction, signature, signingMethod), "Invalid Signature!");
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
  return _.map(
    _.filter(this.signatures, function(signature) { return !_.isUndefined(signature); }),
    function(signature) {
      return BufferUtil.concat([
        signature.signature.toDER(),
        BufferUtil.integerAsSingleByteBuffer(signature.sigtype)
      ]);
    }
  );
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
  return _.reduce(this.signatures, function(sum, signature) {
    return sum + (!!signature);
  }, 0);
};

MultiSigScriptHashInput.prototype.publicKeysWithoutSignature = function() {
  var self = this;
  return _.filter(this.publicKeys, function(publicKey) {
    return !(self.signatures[self.publicKeyIndex[publicKey.toString()]]);
  });
};

MultiSigScriptHashInput.prototype.isValidSignature = function(transaction, signature, signingMethod) {
  signingMethod = signingMethod || 'ecdsa';
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
      satoshisBuffer,
      signingMethod
    );
  } else {
    // FIXME: Refactor signature so this is not necessary
    signature.signature.nhashtype = signature.sigtype;
    return Sighash.verify(
      transaction,
      signature.signature,
      signature.publicKey,
      signature.inputIndex,
      this.redeemScript, 
      signingMethod
    );
  }
};

MultiSigScriptHashInput.OPCODES_SIZE = 7; // serialized size (<=3) + 0 .. N .. M OP_CHECKMULTISIG
MultiSigScriptHashInput.SIGNATURE_SIZE = 74; // size (1) + DER (<=72) + sighash (1)
MultiSigScriptHashInput.PUBKEY_SIZE = 34; // size (1) + DER (<=33)
MultiSigScriptHashInput.REDEEM_SCRIPT_SIZE = 34; // OP_0 (1) + scriptHash (1 + 32)

MultiSigScriptHashInput.prototype._estimateSize = function() {
  var WITNESS_DISCOUNT = 4;
  var witnessSize = MultiSigScriptHashInput.OPCODES_SIZE +
    this.threshold * MultiSigScriptHashInput.SIGNATURE_SIZE +
    this.publicKeys.length * MultiSigScriptHashInput.PUBKEY_SIZE;
  if (this.type === Address.PayToWitnessScriptHash) {
    return witnessSize / WITNESS_DISCOUNT;
  } else if (this.nestedWitness) {
    return witnessSize / WITNESS_DISCOUNT + MultiSigScriptHashInput.REDEEM_SCRIPT_SIZE;
  } else {
    return witnessSize;
  }
};

module.exports = MultiSigScriptHashInput;


/***/ }),

/***/ 57728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var inherits = __webpack_require__(77420);

var $ = __webpack_require__(15464);
var BufferUtil = __webpack_require__(42988);

var Input = __webpack_require__(19636);
var Output = __webpack_require__(17256);
var Sighash = __webpack_require__(6532);
var Script = __webpack_require__(81140);
var Signature = __webpack_require__(70767);
var TransactionSignature = __webpack_require__(38576);

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
 * @param {number=} sigtype - the type of signature, defaults to Signature.SIGHASH_ALL
 * @param {String} signingMethod - method used to sign input - 'ecdsa' or 'schnorr' (future signing method)
 * @return {Array} of objects that can be
 */
PublicKeyInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype, hashData, signingMethod) {
  $.checkState(this.output instanceof Output);
  sigtype = sigtype || Signature.SIGHASH_ALL;
  var publicKey = privateKey.toPublicKey();
  if (publicKey.toString() === this.output.script.getPublicKey().toString('hex')) {
    return [new TransactionSignature({
      publicKey: publicKey,
      prevTxId: this.prevTxId,
      outputIndex: this.outputIndex,
      inputIndex: index,
      signature: Sighash.sign(transaction, privateKey, sigtype, index, this.output.script, signingMethod),
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
  return PublicKeyInput.SCRIPT_MAX_SIZE;
};

module.exports = PublicKeyInput;


/***/ }),

/***/ 62508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var inherits = __webpack_require__(77420);

var $ = __webpack_require__(15464);
var BufferUtil = __webpack_require__(42988);

var Address = __webpack_require__(15124);
var Hash = __webpack_require__(70456);
var Input = __webpack_require__(19636);
var Output = __webpack_require__(17256);
var Sighash = __webpack_require__(6532);
var SighashWitness = __webpack_require__(17752);
var BufferWriter = __webpack_require__(36088);
var BufferUtil = __webpack_require__(42988);
var Script = __webpack_require__(81140);
var Signature = __webpack_require__(70767);
var TransactionSignature = __webpack_require__(38576);

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

/* jshint maxparams: 5 */
/**
 * @param {Transaction} transaction - the transaction to be signed
 * @param {PrivateKey} privateKey - the private key with which to sign the transaction
 * @param {number} index - the index of the input in the transaction input vector
 * @param {number=} sigtype - the type of signature, defaults to Signature.SIGHASH_ALL
 * @param {Buffer=} hashData - the precalculated hash of the public key associated with the privateKey provided
 * @param {String} signingMethod - method used to sign - 'ecdsa' or 'schnorr' (future signing method)
 * @return {Array} of objects that can be
 */
PublicKeyHashInput.prototype.getSignatures = function(transaction, privateKey, index, sigtype, hashData, signingMethod) {
  $.checkState(this.output instanceof Output);
  hashData = hashData || Hash.sha256ripemd160(privateKey.publicKey.toBuffer());
  sigtype = sigtype || Signature.SIGHASH_ALL;
  signingMethod = signingMethod || 'ecdsa';

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
      signature = SighashWitness.sign(transaction, privateKey, sigtype, index, scriptCode, satoshisBuffer, signingMethod);
    } else {
      signature = Sighash.sign(transaction, privateKey, sigtype, index, this.output.script, signingMethod);
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
      satoshisBuffer,
      signingMethod
    );
  } else {
    return Sighash.verify(
      transaction,
      signature.signature,
      signature.publicKey,
      signature.inputIndex,
      this.output.script,
      signingMethod
    );
  }
};


PublicKeyHashInput.SCRIPT_MAX_SIZE = 73 + 34; // sigsize (1 + 72) + pubkey (1 + 33)
PublicKeyHashInput.REDEEM_SCRIPT_SIZE = 22; // OP_0 (1) pubkeyhash (1 + 20)

PublicKeyHashInput.prototype._estimateSize = function() {
  var WITNESS_DISCOUNT = 4;
  const witnessSize = PublicKeyHashInput.SCRIPT_MAX_SIZE / WITNESS_DISCOUNT;
  if (this.output.script.isWitnessPublicKeyHashOut()) {
    return witnessSize;
  } else if (this.output.script.isScriptHashOut()) {
    return witnessSize + PublicKeyHashInput.REDEEM_SCRIPT_SIZE;
  } else {
    return PublicKeyHashInput.SCRIPT_MAX_SIZE;
  }
};

module.exports = PublicKeyHashInput;


/***/ }),

/***/ 17256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var BN = __webpack_require__(57907);
var buffer = __webpack_require__(87597);
var bufferUtil = __webpack_require__(42988);
var JSUtil = __webpack_require__(33832);
var BufferWriter = __webpack_require__(36088);
var Script = __webpack_require__(81140);
var $ = __webpack_require__(15464);
var errors = __webpack_require__(71712);

var MAX_SAFE_INTEGER = 0x1fffffffffffff;

function Output(args) {
  if (!(this instanceof Output)) {
    return new Output(args);
  }
  if (_.isObject(args)) {
    this.satoshis = args.satoshis;
    if (bufferUtil.isBuffer(args.script)) {
      this._scriptBuffer = args.script;
    } else {
      var script;
      if (_.isString(args.script) && JSUtil.isHexa(args.script)) {
        script = Buffer.from(args.script, 'hex');
      } else {
        script = args.script;
      }
      this.setScript(script);
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

module.exports = Output;


/***/ }),

/***/ 6532:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var Signature = __webpack_require__(70767);
var Script = __webpack_require__(81140);
var Output = __webpack_require__(17256);
var BufferReader = __webpack_require__(38224);
var BufferWriter = __webpack_require__(36088);
var BN = __webpack_require__(57907);
var Hash = __webpack_require__(70456);
var ECDSA = __webpack_require__(78596);
var $ = __webpack_require__(15464);
var _ = __webpack_require__(92469);
const schnorr = __webpack_require__(64140);

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
  var Transaction = __webpack_require__(2532);
  var Input = __webpack_require__(45496);

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
 * @param {String} signingMethod - method used to sign - 'ecdsa' or 'schnorr' (future signing method)
 * @return {Signature}
 */
function sign(transaction, privateKey, sighashType, inputIndex, subscript, signingMethod) {
  signingMethod = signingMethod || 'ecdsa';

  let hashbuf = sighash(transaction, sighashType, inputIndex, subscript);
  let sig; 
  switch (signingMethod) {
    case 'ecdsa':
      sig = ECDSA.sign(hashbuf, privateKey, 'little').set({ nhashtype: sighashType });
      break;
    case 'schnorr':
      sig = schnorr.sign(privateKey.toString(), hashbuf);
      break;
    default: 
      throw new Error("signingMethod not supported ", signingMethod);
  }
  return sig;
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
 * @param {String} signingMethod - method used to sign - 'ecdsa' or 'schnorr'
 * @return {boolean}
 */
function verify(transaction, signature, publicKey, inputIndex, subscript, signingMethod) {
  $.checkArgument(!_.isUndefined(transaction), "Transaction Undefined");
  $.checkArgument(!_.isUndefined(signature) && !_.isUndefined(signature.nhashtype), "Signature Undefined");

  signingMethod = signingMethod || 'ecdsa';
  let hashbuf = sighash(transaction, signature.nhashtype, inputIndex, subscript);
  let verified = false;

  switch (signingMethod) {
    case 'ecdsa':
      verified = ECDSA.verify(hashbuf, signature, publicKey, 'little');
      break;
    case 'schnorr':
      verified = schnorr.verify(publicKey, hashbuf, signature);
      break;
    default:
      throw new Error("signingMethod not supported ", signingMethod);
  }
  return verified;
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

/***/ 17752:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


/* jshint maxparams:5 */

var Signature = __webpack_require__(70767);
var Script = __webpack_require__(81140);
var Output = __webpack_require__(17256);
var BufferReader = __webpack_require__(38224);
var BufferWriter = __webpack_require__(36088);
var BN = __webpack_require__(57907);
var Hash = __webpack_require__(70456);
var ECDSA = __webpack_require__(78596);
var $ = __webpack_require__(15464);
var _ = __webpack_require__(92469);

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

  var hashPrevouts;
  var hashSequence;
  var hashOutputs;

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
 * @param {String} signingMethod - method used to sign - 'ecdsa' or 'schnorr'
 * @return {Signature}
 */
function sign(transaction, privateKey, sighashType, inputIndex, scriptCode, satoshisBuffer, signingMethod) {
  signingMethod = signingMethod || 'ecdsa';
  var sig;

  if (signingMethod === 'ecdsa') {
    let hashbuf = sighash(transaction, sighashType, inputIndex, scriptCode, satoshisBuffer);
    sig = ECDSA.sign(hashbuf, privateKey).set({
      nhashtype: sighashType
    });
    return sig;
  }
  throw new Error("signingMethod not supported ", signingMethod);
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
 * @param {String} signingMethod - method used to sign - 'ecdsa' or 'schnorr' (future signing method)
 * @return {boolean}
 */
function verify(transaction, signature, publicKey, inputIndex, scriptCode, satoshisBuffer, signingMethod) {
  $.checkArgument(!_.isUndefined(transaction));
  $.checkArgument(!_.isUndefined(signature) && !_.isUndefined(signature.nhashtype));
  signingMethod = signingMethod || 'ecdsa';

  if (signingMethod === 'ecdsa') {
    let hashbuf = sighash(transaction, signature.nhashtype, inputIndex, scriptCode, satoshisBuffer);
    return ECDSA.verify(hashbuf, signature, publicKey);
  }
  throw new Error("signingMethod not supported ", signingMethod);
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

/***/ 38576:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);
var inherits = __webpack_require__(77420);
var BufferUtil = __webpack_require__(42988);
var JSUtil = __webpack_require__(33832);

var PublicKey = __webpack_require__(68707);
var errors = __webpack_require__(71712);
var Signature = __webpack_require__(70767);

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
  if (_.isObject(arg)) {
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
  $.checkArgument(PublicKey(arg.publicKey), 'publicKey');
  $.checkArgument(!_.isUndefined(arg.inputIndex), 'inputIndex');
  $.checkArgument(!_.isUndefined(arg.outputIndex), 'outputIndex');
  $.checkState(_.isNumber(arg.inputIndex), 'inputIndex must be a number');
  $.checkState(_.isNumber(arg.outputIndex), 'outputIndex must be a number');
  $.checkArgument(arg.signature, 'signature');
  $.checkArgument(arg.prevTxId, 'prevTxId');
  $.checkState(arg.signature instanceof Signature ||
               BufferUtil.isBuffer(arg.signature) ||
               JSUtil.isHexa(arg.signature), 'signature must be a buffer or hexa value');
  $.checkState(BufferUtil.isBuffer(arg.prevTxId) ||
               JSUtil.isHexa(arg.prevTxId), 'prevTxId must be a buffer or hexa value');
  $.checkArgument(arg.sigtype, 'sigtype');
  $.checkState(_.isNumber(arg.sigtype), 'sigtype must be a number');
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

/***/ 2532:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);
var buffer = __webpack_require__(87597);
var compare = Buffer.compare || __webpack_require__(48904);

var errors = __webpack_require__(71712);
var BufferUtil = __webpack_require__(42988);
var JSUtil = __webpack_require__(33832);
var BufferReader = __webpack_require__(38224);
var BufferWriter = __webpack_require__(36088);
var Hash = __webpack_require__(70456);
var Signature = __webpack_require__(70767);
var Sighash = __webpack_require__(6532);
var SighashWitness = __webpack_require__(17752);

var Address = __webpack_require__(15124);
var UnspentOutput = __webpack_require__(132);
var Input = __webpack_require__(45496);
var PublicKeyHashInput = Input.PublicKeyHash;
var PublicKeyInput = Input.PublicKey;
var MultiSigScriptHashInput = Input.MultiSigScriptHash;
var MultiSigInput = Input.MultiSig;
var Output = __webpack_require__(17256);
var Script = __webpack_require__(81140);
var PrivateKey = __webpack_require__(34788);
var BN = __webpack_require__(57907);

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

  if (!_.isUndefined(this._fee) && this._fee !== unspent) {
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

  var hasWitnesses = this.hasWitnesses();

  if (hasWitnesses && !noWitness) {
    writer.write(Buffer.from('0001', 'hex'));
  }

  writer.writeVarintNum(this.inputs.length);

  _.each(this.inputs, function(input) {
    input.toBufferWriter(writer);
  });

  writer.writeVarintNum(this.outputs.length);
  _.each(this.outputs, function(output) {
    output.toBufferWriter(writer);
  });

  if (hasWitnesses && !noWitness) {
    _.each(this.inputs, function(input) {
      var witnesses = input.getWitnesses();
      writer.writeVarintNum(witnesses.length);
      for (var j = 0; j < witnesses.length; j++) {
        writer.writeVarintNum(witnesses[j].length);
        writer.write(witnesses[j]);
      }
    });
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
  if (!_.isUndefined(this._changeIndex)) {
    obj.changeIndex = this._changeIndex;
  }
  if (!_.isUndefined(this._fee)) {
    obj.fee = this._fee;
  }
  return obj;
};

Transaction.prototype.fromObject = function fromObject(arg, opts) {
  /* jshint maxstatements: 20 */
  $.checkArgument(_.isObject(arg) || arg instanceof Transaction);
  var self = this;
  var transaction;
  if (arg instanceof Transaction) {
    transaction = transaction.toObject();
  } else {
    transaction = arg;
  }
  _.each(transaction.inputs, function(input) {
    if (!input.output || !input.output.script) {
      self.uncheckedAddInput(new Input(input));
      return;
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
    self.addInput(txin);
  });
  _.each(transaction.outputs, function(output) {
    self.addOutput(new Output(output));
  });
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
  if (!_.isUndefined(this._changeIndex)) {
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
  if (_.isNumber(time) && time < Transaction.NLOCKTIME_BLOCKHEIGHT_LIMIT) {
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
  $.checkArgument(_.isNumber(height));
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
  if (_.isArray(utxo)) {
    var self = this;
    _.each(utxo, function(utxo) {
      self.from(utxo, pubkeys, threshold, opts);
    });
    return this;
  }
  var exists = _.some(this.inputs, function(input) {
    // TODO: Maybe prevTxId should be a string? Or defined as read only property?
    return input.prevTxId.toString('hex') === utxo.txId && input.outputIndex === utxo.outputIndex;
  });
  if (exists) {
    return this;
  }
  if (pubkeys && threshold) {
    this._fromMultisigUtxo(utxo, pubkeys, threshold, opts);
  } else {
    this._fromNonP2SH(utxo);
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
Transaction.prototype.associateInputs = function(utxos, pubkeys, threshold, opts) {
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
  } else if (utxo.script.isPublicKeyOut()) {
    clazz = PublicKeyInput;
  } else {
    clazz = Input;
  }
  return clazz;
}


Transaction.prototype._getInputFrom = function(utxo, pubkeys, threshold, opts) {
  utxo = new UnspentOutput(utxo);
  const InputClass = this._selectInputType(utxo, pubkeys, threshold);
  const input = {
    output: new Output({
      script: utxo.script,
      satoshis: utxo.satoshis
    }),
    prevTxId: utxo.txId,
    outputIndex: utxo.outputIndex,
    sequenceNumber: utxo.sequenceNumber,
    script: Script.empty()
  };
  let args = pubkeys && threshold ? [pubkeys, threshold, false, opts] : []
  return new InputClass(input, ...args);
}

Transaction.prototype._fromNonP2SH = function(utxo) {
  const input = this._getInputFrom(utxo);
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
  if (!input.output && (_.isUndefined(outputScript) || _.isUndefined(satoshis))) {
    throw new errors.Transaction.NeedMoreInfo('Need information about the UTXO script and satoshis');
  }
  if (!input.output && outputScript && !_.isUndefined(satoshis)) {
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
  return _.every(this.inputs.map(function(input) {
    return !!input.output;
  }));
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
  $.checkArgument(_.isNumber(amount), 'amount must be a number');
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
  $.checkArgument(_.isNumber(amount), 'amount must be a number');
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
  $.checkArgument(_.isNumber(amount), 'amount must be a number');
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
  if (!_.isUndefined(this._changeIndex)) {
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
  if (_.isArray(address)) {
    var self = this;
    _.each(address, function(to) {
      self.to(to.address, to.satoshis);
    });
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
  if (_.isUndefined(this._outputAmount)) {
    var self = this;
    this._outputAmount = 0;
    _.each(this.outputs, function(output) {
      self._outputAmount += output.satoshis;
    });
  }
  return this._outputAmount;
};


/**
 * Calculates or gets the total input amount in satoshis
 *
 * @return {Number} the transaction total input amount
 */
Transaction.prototype._getInputAmount = function() {
  if (_.isUndefined(this._inputAmount)) {
    this._inputAmount = _.sumBy(this.inputs, function(input) {
      if (_.isUndefined(input.output)) {
        throw new errors.Transaction.Input.MissingPreviousOutput();
      }
      return input.output.satoshis;
    });
  }
  return this._inputAmount;
};

Transaction.prototype._updateChangeOutput = function() {
  if (!this._changeScript) {
    return;
  }
  this._clearSignatures();
  if (!_.isUndefined(this._changeIndex)) {
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
  if (!_.isUndefined(this._fee)) {
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
  var estimatedSize = this._estimateSize();
  var available = this._getUnspentValue();
  var feeRate = this._feePerByte || (this._feePerKb || Transaction.FEE_PER_KB) / 1000;
  function getFee(size) {
    return size * feeRate;
  }
  var fee = Math.ceil(getFee(estimatedSize));
  var feeWithChange = Math.ceil(getFee(estimatedSize) + getFee(Transaction.CHANGE_OUTPUT_MAX_SIZE));
  if (!this._changeScript || available <= feeWithChange) {
    return fee;
  }
  return feeWithChange;
};

Transaction.prototype._getUnspentValue = function() {
  return this._getInputAmount() - this._getOutputAmount();
};

Transaction.prototype._clearSignatures = function() {
  _.each(this.inputs, function(input) {
    input.clearSignatures();
  });
};

Transaction.prototype._estimateSize = function() {
  var result = Transaction.MAXIMUM_EXTRA_SIZE;
  _.each(this.inputs, function(input) {
    result += 32 + 4;  // prevout size:w
    result += input._estimateSize();
  });
  _.each(this.outputs, function(output) {
    result += output.script.toBuffer().length + 9;
  });
  return Math.ceil(result);
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

  if (!_.isUndefined(this._changeIndex)) {
    var changeOutput = this.outputs[this._changeIndex];
    this._changeIndex = _.findIndex(newOutputs, changeOutput);
  }

  this.outputs = newOutputs;
  return this;
};

Transaction.prototype.removeInput = function(txId, outputIndex) {
  var index;
  if (!outputIndex && _.isNumber(txId)) {
    index = txId;
  } else {
    index = _.findIndex(this.inputs, function(input) {
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
 * @return {Transaction} this, for chaining
 */
Transaction.prototype.sign = function(privateKey, sigtype, signingMethod) {
  $.checkState(this.hasAllUtxoInfo(), 'Not all utxo information is available to sign the transaction.');
  var self = this;
  if (_.isArray(privateKey)) {
    _.each(privateKey, function(privateKey) {
      self.sign(privateKey, sigtype, signingMethod);
    });
    return this;
  }
  _.each(this.getSignatures(privateKey, sigtype, signingMethod), function(signature) {
    self.applySignature(signature, signingMethod);
  });
  return this;
};

Transaction.prototype.getSignatures = function(privKey, sigtype, signingMethod) {
  privKey = new PrivateKey(privKey);
  sigtype = sigtype || Signature.SIGHASH_ALL;
  var transaction = this;
  var results = [];
  var hashData = Hash.sha256ripemd160(privKey.publicKey.toBuffer());
  _.each(this.inputs, function forEachInput(input, index) {
    _.each(input.getSignatures(transaction, privKey, index, sigtype, hashData, signingMethod), function(signature) {
      results.push(signature);
    });
  });
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
  _.each(this.inputs, function(input) {
    if (input.isFullySigned === Input.prototype.isFullySigned) {
      throw new errors.Transaction.UnableToVerifySignature(
        'Unrecognized script kind, or not enough information to execute script.' +
        'This usually happens when creating a transaction from a serialized transaction'
      );
    }
  });
  return _.every(_.map(this.inputs, function(input) {
    return input.isFullySigned();
  }));
};

Transaction.prototype.isValidSignature = function(signature, signingMethod) {
  var self = this;
  if (this.inputs[signature.inputIndex].isValidSignature === Input.prototype.isValidSignature) {
    throw new errors.Transaction.UnableToVerifySignature(
      'Unrecognized script kind, or not enough information to execute script.' +
      'This usually happens when creating a transaction from a serialized transaction'
    );
  }
  return this.inputs[signature.inputIndex].isValidSignature(self, signature, signingMethod);
};

/**
 * @param {String} signingMethod method used to sign - 'ecdsa' or 'schnorr' (future signing method)
 * @returns {bool} whether the signature is valid for this transaction input
 */
Transaction.prototype.verifySignature = function(sig, pubkey, nin, subscript, sigversion, satoshis, signingMethod) {

  if (_.isUndefined(sigversion)) {
    sigversion = 0;
  }

  if (sigversion === 1) {
    var subscriptBuffer = subscript.toBuffer();
    var scriptCodeWriter = new BufferWriter();
    scriptCodeWriter.writeVarintNum(subscriptBuffer.length);
    scriptCodeWriter.write(subscriptBuffer);

    var satoshisBuffer;
    if (satoshis) {
      $.checkState(JSUtil.isNaturalNumber(satoshis));
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
      satoshisBuffer,
      signingMethod
    );
    return verified;
  }

  return Sighash.verify(this, sig, pubkey, nin, subscript, signingMethod);
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
    if (!_.isUndefined(txinmap[inputid])) {
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

/***/ 132:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(92469);
var $ = __webpack_require__(15464);
var JSUtil = __webpack_require__(33832);

var Script = __webpack_require__(81140);
var Address = __webpack_require__(15124);
var Unit = __webpack_require__(68272);

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

/***/ 68272:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(92469);

var errors = __webpack_require__(71712);
var $ = __webpack_require__(15464);

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

/***/ 78384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(92469);
var URL = __webpack_require__(44624);

var Address = __webpack_require__(15124);
var Unit = __webpack_require__(68272);

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

/***/ 42988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(87597)["Buffer"];


var buffer = __webpack_require__(87597);
var assert = __webpack_require__(97344);

var js = __webpack_require__(33832);
var $ = __webpack_require__(15464);

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

/***/ 33832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _ = __webpack_require__(92469);

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

/***/ 15464:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var errors = __webpack_require__(71712);
var _ = __webpack_require__(92469);

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
        var buffer = __webpack_require__(87597); // './buffer' fails on cordova & RN
        if (!buffer.Buffer.isBuffer(argument)) {
          throw new errors.InvalidArgumentType(argument, type, argumentName);
        }
      } else if (typeof argument !== type) {
        throw new errors.InvalidArgumentType(argument, type, argumentName);
      }
    } else {
      if (!(argument instanceof type)) {
        throw new errors.InvalidArgumentType(argument, type.name, argumentName);
      }
    }
  }
};


/***/ }),

/***/ 43028:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assert = __webpack_require__(97344)
var BigInteger = __webpack_require__(34784)

var Point = __webpack_require__(68700)

function Curve (p, a, b, Gx, Gy, n, h) {
  this.p = p
  this.a = a
  this.b = b
  this.G = Point.fromAffine(this, Gx, Gy)
  this.n = n
  this.h = h

  this.infinity = new Point(this, null, null, BigInteger.ZERO)

  // result caching
  this.pOverFour = p.add(BigInteger.ONE).shiftRight(2)

  // determine size of p in bytes
  this.pLength = Math.floor((this.p.bitLength() + 7) / 8)
}

Curve.prototype.pointFromX = function (isOdd, x) {
  var alpha = x.pow(3).add(this.a.multiply(x)).add(this.b).mod(this.p)
  var beta = alpha.modPow(this.pOverFour, this.p) // XXX: not compatible with all curves

  var y = beta
  if (beta.isEven() ^ !isOdd) {
    y = this.p.subtract(y) // -y % p
  }

  return Point.fromAffine(this, x, y)
}

Curve.prototype.isInfinity = function (Q) {
  if (Q === this.infinity) return true

  return Q.z.signum() === 0 && Q.y.signum() !== 0
}

Curve.prototype.isOnCurve = function (Q) {
  if (this.isInfinity(Q)) return true

  var x = Q.affineX
  var y = Q.affineY
  var a = this.a
  var b = this.b
  var p = this.p

  // Check that xQ and yQ are integers in the interval [0, p - 1]
  if (x.signum() < 0 || x.compareTo(p) >= 0) return false
  if (y.signum() < 0 || y.compareTo(p) >= 0) return false

  // and check that y^2 = x^3 + ax + b (mod p)
  var lhs = y.square().mod(p)
  var rhs = x.pow(3).add(a.multiply(x)).add(b).mod(p)
  return lhs.equals(rhs)
}

/**
 * Validate an elliptic curve point.
 *
 * See SEC 1, section 3.2.2.1: Elliptic Curve Public Key Validation Primitive
 */
Curve.prototype.validate = function (Q) {
  // Check Q != O
  assert(!this.isInfinity(Q), 'Point is at infinity')
  assert(this.isOnCurve(Q), 'Point is not on the curve')

  // Check nQ = O (where Q is a scalar multiple of G)
  var nQ = Q.multiply(this.n)
  assert(this.isInfinity(nQ), 'Point is not a scalar multiple of G')

  return true
}

module.exports = Curve


/***/ }),

/***/ 24780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Point = __webpack_require__(68700)
var Curve = __webpack_require__(43028)

var getCurveByName = __webpack_require__(83468)

module.exports = {
  Curve: Curve,
  Point: Point,
  getCurveByName: getCurveByName
}


/***/ }),

/***/ 83468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BigInteger = __webpack_require__(34784)

var curves = __webpack_require__(65552)
var Curve = __webpack_require__(43028)

function getCurveByName (name) {
  var curve = curves[name]
  if (!curve) return null

  var p = new BigInteger(curve.p, 16)
  var a = new BigInteger(curve.a, 16)
  var b = new BigInteger(curve.b, 16)
  var n = new BigInteger(curve.n, 16)
  var h = new BigInteger(curve.h, 16)
  var Gx = new BigInteger(curve.Gx, 16)
  var Gy = new BigInteger(curve.Gy, 16)

  return new Curve(p, a, b, Gx, Gy, n, h)
}

module.exports = getCurveByName


/***/ }),

/***/ 68700:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assert = __webpack_require__(97344)
var Buffer = (__webpack_require__(79664).Buffer)
var BigInteger = __webpack_require__(34784)

var THREE = BigInteger.valueOf(3)

function Point (curve, x, y, z) {
  assert.notStrictEqual(z, undefined, 'Missing Z coordinate')

  this.curve = curve
  this.x = x
  this.y = y
  this.z = z
  this._zInv = null

  this.compressed = true
}

Object.defineProperty(Point.prototype, 'zInv', {
  get: function () {
    if (this._zInv === null) {
      this._zInv = this.z.modInverse(this.curve.p)
    }

    return this._zInv
  }
})

Object.defineProperty(Point.prototype, 'affineX', {
  get: function () {
    return this.x.multiply(this.zInv).mod(this.curve.p)
  }
})

Object.defineProperty(Point.prototype, 'affineY', {
  get: function () {
    return this.y.multiply(this.zInv).mod(this.curve.p)
  }
})

Point.fromAffine = function (curve, x, y) {
  return new Point(curve, x, y, BigInteger.ONE)
}

Point.prototype.equals = function (other) {
  if (other === this) return true
  if (this.curve.isInfinity(this)) return this.curve.isInfinity(other)
  if (this.curve.isInfinity(other)) return this.curve.isInfinity(this)

  // u = Y2 * Z1 - Y1 * Z2
  var u = other.y.multiply(this.z).subtract(this.y.multiply(other.z)).mod(this.curve.p)

  if (u.signum() !== 0) return false

  // v = X2 * Z1 - X1 * Z2
  var v = other.x.multiply(this.z).subtract(this.x.multiply(other.z)).mod(this.curve.p)

  return v.signum() === 0
}

Point.prototype.negate = function () {
  var y = this.curve.p.subtract(this.y)

  return new Point(this.curve, this.x, y, this.z)
}

Point.prototype.add = function (b) {
  if (this.curve.isInfinity(this)) return b
  if (this.curve.isInfinity(b)) return this

  var x1 = this.x
  var y1 = this.y
  var x2 = b.x
  var y2 = b.y

  // u = Y2 * Z1 - Y1 * Z2
  var u = y2.multiply(this.z).subtract(y1.multiply(b.z)).mod(this.curve.p)
  // v = X2 * Z1 - X1 * Z2
  var v = x2.multiply(this.z).subtract(x1.multiply(b.z)).mod(this.curve.p)

  if (v.signum() === 0) {
    if (u.signum() === 0) {
      return this.twice() // this == b, so double
    }

    return this.curve.infinity // this = -b, so infinity
  }

  var v2 = v.square()
  var v3 = v2.multiply(v)
  var x1v2 = x1.multiply(v2)
  var zu2 = u.square().multiply(this.z)

  // x3 = v * (z2 * (z1 * u^2 - 2 * x1 * v^2) - v^3)
  var x3 = zu2.subtract(x1v2.shiftLeft(1)).multiply(b.z).subtract(v3).multiply(v).mod(this.curve.p)
  // y3 = z2 * (3 * x1 * u * v^2 - y1 * v^3 - z1 * u^3) + u * v^3
  var y3 = x1v2.multiply(THREE).multiply(u).subtract(y1.multiply(v3)).subtract(zu2.multiply(u)).multiply(b.z).add(u.multiply(v3)).mod(this.curve.p)
  // z3 = v^3 * z1 * z2
  var z3 = v3.multiply(this.z).multiply(b.z).mod(this.curve.p)

  return new Point(this.curve, x3, y3, z3)
}

Point.prototype.twice = function () {
  if (this.curve.isInfinity(this)) return this
  if (this.y.signum() === 0) return this.curve.infinity

  var x1 = this.x
  var y1 = this.y

  var y1z1 = y1.multiply(this.z).mod(this.curve.p)
  var y1sqz1 = y1z1.multiply(y1).mod(this.curve.p)
  var a = this.curve.a

  // w = 3 * x1^2 + a * z1^2
  var w = x1.square().multiply(THREE)

  if (a.signum() !== 0) {
    w = w.add(this.z.square().multiply(a))
  }

  w = w.mod(this.curve.p)
  // x3 = 2 * y1 * z1 * (w^2 - 8 * x1 * y1^2 * z1)
  var x3 = w.square().subtract(x1.shiftLeft(3).multiply(y1sqz1)).shiftLeft(1).multiply(y1z1).mod(this.curve.p)
  // y3 = 4 * y1^2 * z1 * (3 * w * x1 - 2 * y1^2 * z1) - w^3
  var y3 = w.multiply(THREE).multiply(x1).subtract(y1sqz1.shiftLeft(1)).shiftLeft(2).multiply(y1sqz1).subtract(w.pow(3)).mod(this.curve.p)
  // z3 = 8 * (y1 * z1)^3
  var z3 = y1z1.pow(3).shiftLeft(3).mod(this.curve.p)

  return new Point(this.curve, x3, y3, z3)
}

// Simple NAF (Non-Adjacent Form) multiplication algorithm
// TODO: modularize the multiplication algorithm
Point.prototype.multiply = function (k) {
  if (this.curve.isInfinity(this)) return this
  if (k.signum() === 0) return this.curve.infinity

  var e = k
  var h = e.multiply(THREE)

  var neg = this.negate()
  var R = this

  for (var i = h.bitLength() - 2; i > 0; --i) {
    var hBit = h.testBit(i)
    var eBit = e.testBit(i)

    R = R.twice()

    if (hBit !== eBit) {
      R = R.add(hBit ? this : neg)
    }
  }

  return R
}

// Compute this*j + x*k (simultaneous multiplication)
Point.prototype.multiplyTwo = function (j, x, k) {
  var i = Math.max(j.bitLength(), k.bitLength()) - 1
  var R = this.curve.infinity
  var both = this.add(x)

  while (i >= 0) {
    var jBit = j.testBit(i)
    var kBit = k.testBit(i)

    R = R.twice()

    if (jBit) {
      if (kBit) {
        R = R.add(both)
      } else {
        R = R.add(this)
      }
    } else if (kBit) {
      R = R.add(x)
    }
    --i
  }

  return R
}

Point.prototype.getEncoded = function (compressed) {
  if (compressed == null) compressed = this.compressed
  if (this.curve.isInfinity(this)) return Buffer.alloc(1, 0) // Infinity point encoded is simply '00'

  var x = this.affineX
  var y = this.affineY
  var byteLength = this.curve.pLength
  var buffer

  // 0x02/0x03 | X
  if (compressed) {
    buffer = Buffer.allocUnsafe(1 + byteLength)
    buffer.writeUInt8(y.isEven() ? 0x02 : 0x03, 0)

  // 0x04 | X | Y
  } else {
    buffer = Buffer.allocUnsafe(1 + byteLength + byteLength)
    buffer.writeUInt8(0x04, 0)

    y.toBuffer(byteLength).copy(buffer, 1 + byteLength)
  }

  x.toBuffer(byteLength).copy(buffer, 1)

  return buffer
}

Point.decodeFrom = function (curve, buffer) {
  var type = buffer.readUInt8(0)
  var compressed = (type !== 4)

  var byteLength = Math.floor((curve.p.bitLength() + 7) / 8)
  var x = BigInteger.fromBuffer(buffer.slice(1, 1 + byteLength))

  var Q
  if (compressed) {
    assert.equal(buffer.length, byteLength + 1, 'Invalid sequence length')
    assert(type === 0x02 || type === 0x03, 'Invalid sequence tag')

    var isOdd = (type === 0x03)
    Q = curve.pointFromX(isOdd, x)
  } else {
    assert.equal(buffer.length, 1 + byteLength + byteLength, 'Invalid sequence length')

    var y = BigInteger.fromBuffer(buffer.slice(1 + byteLength))
    Q = Point.fromAffine(curve, x, y)
  }

  Q.compressed = compressed
  return Q
}

Point.prototype.toString = function () {
  if (this.curve.isInfinity(this)) return '(INFINITY)'

  return '(' + this.affineX.toString() + ',' + this.affineY.toString() + ')'
}

module.exports = Point


/***/ }),

/***/ 67328:
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(33988);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = __webpack_require__.g;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" === 'object' && module.exports;
  var AMD =  true && __webpack_require__.amdO;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var algorithm = is224 ? 'sha224' : 'sha256';
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
      HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
      HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
      HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
      HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
      HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
      HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
      HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
      HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
      HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
      HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
      HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
      HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
      HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
      HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
      HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >> 28) & 0x0F] + HEX_CHARS[(h5 >> 24) & 0x0F] +
      HEX_CHARS[(h5 >> 20) & 0x0F] + HEX_CHARS[(h5 >> 16) & 0x0F] +
      HEX_CHARS[(h5 >> 12) & 0x0F] + HEX_CHARS[(h5 >> 8) & 0x0F] +
      HEX_CHARS[(h5 >> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >> 28) & 0x0F] + HEX_CHARS[(h6 >> 24) & 0x0F] +
      HEX_CHARS[(h6 >> 20) & 0x0F] + HEX_CHARS[(h6 >> 16) & 0x0F] +
      HEX_CHARS[(h6 >> 12) & 0x0F] + HEX_CHARS[(h6 >> 8) & 0x0F] +
      HEX_CHARS[(h6 >> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >> 28) & 0x0F] + HEX_CHARS[(h7 >> 24) & 0x0F] +
        HEX_CHARS[(h7 >> 20) & 0x0F] + HEX_CHARS[(h7 >> 16) & 0x0F] +
        HEX_CHARS[(h7 >> 12) & 0x0F] + HEX_CHARS[(h7 >> 8) & 0x0F] +
        HEX_CHARS[(h7 >> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF,
      (h5 >> 24) & 0xFF, (h5 >> 16) & 0xFF, (h5 >> 8) & 0xFF, h5 & 0xFF,
      (h6 >> 24) & 0xFF, (h6 >> 16) & 0xFF, (h6 >> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >> 24) & 0xFF, (h7 >> 16) & 0xFF, (h7 >> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >> 12));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >> 18));
          bytes[index++] = (0x80 | ((code >> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();


/***/ }),

/***/ 35712:
/***/ ((module) => {

"use strict";
module.exports = {"WU":"1.4.2"};

/***/ }),

/***/ 44400:
/***/ ((module) => {

"use strict";
module.exports = {"WU":"10.0.23"};

/***/ }),

/***/ 65552:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}');

/***/ })

}]);