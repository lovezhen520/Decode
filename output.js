//7/10/2024, 3:31:44 PM
//Author:https://github.com/lck7
(() => {
  (function (i) {
    function e() {}
    function t() {}
    var r = String.fromCharCode,
      n = {}.toString,
      s = n.call(i.SharedArrayBuffer),
      o = n(),
      a = i.Uint8Array,
      f = a || Array,
      l = a ? ArrayBuffer : f,
      h = l.isView || function (b) {
        return b && "length" in b;
      },
      y = n.call(l.prototype);
    l = t.prototype;
    var p = i.TextEncoder,
      c = new (a ? Uint16Array : f)(32);
    e.prototype.decode = function (b) {
      if (!h(b)) {
        var A = n.call(b);
        if (A !== y && A !== s && A !== o) {
          throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
        }
        a ? b = new f(b) : b = b || [];
      }
      for (var N = A = "", d = 0, I = b.length | 0, G = I - 32 | 0, B, x, E = 0, J = 0, V, U = 0, D = -1; d < I;) {
        for (d <= G ? B = 32 : B = I - d | 0; U < B; d = d + 1 | 0, U = U + 1 | 0) {
          switch (x = b[d] & 255, x >> 4) {
            case 15:
              {
                if (V = b[d = d + 1 | 0] & 255, V >> 6 !== 2 || 247 < x) {
                  d = d - 1 | 0;
                  break;
                }
                E = (x & 7) << 6 | V & 63;
                J = 5;
                x = 256;
              }
            case 14:
              {
                V = b[d = d + 1 | 0] & 255;
                E <<= 6;
                E |= (x & 15) << 6 | V & 63;
                V >> 6 === 2 ? J = J + 4 | 0 : J = 24;
                x = x + 256 & 768;
              }
            case 13:
              {}
            case 12:
              {
                V = b[d = d + 1 | 0] & 255;
                E <<= 6;
                E |= (x & 31) << 6 | V & 63;
                J = J + 7 | 0;
                d < I && V >> 6 === 2 && E >> J && 1114112 > E ? (x = E, E = E - 65536 | 0, 0 <= E && (D = (E >> 10) + 55296 | 0, x = (E & 1023) + 56320 | 0, 31 > U ? (c[U] = D, U = U + 1 | 0, D = -1) : (V = D, D = x, x = V))) : (x >>= 8, d = d - x - 1 | 0, x = 65533);
                E = J = 0;
                d <= G ? B = 32 : B = I - d | 0;
              }
            default:
              {
                c[U] = x;
                continue;
              }
            case 11:
              {}
            case 10:
              {}
            case 9:
              {}
            case 8:
              {}
          }
          c[U] = 65533;
        }
        N += r(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15], c[16], c[17], c[18], c[19], c[20], c[21], c[22], c[23], c[24], c[25], c[26], c[27], c[28], c[29], c[30], c[31]);
        32 > U && (N = N.slice(0, U - 32 | 0));
        if (d < I) {
          c[0] = D;
          U = ~D >>> 31;
          D = -1;
          if (N.length < A.length) {
            continue;
          }
        } else {
          if (D !== -1) {
            N += r(D);
          }
        }
        A += N;
        N = "";
      }
      return A;
    };
    l.encode = function (b) {
      b === 0 ? b = "" : b = "" + b;
      var A = b.length | 0,
        N = new f((A << 1) + 8 | 0),
        d,
        I = 0,
        G = !a;
      for (d = 0; d < A; d = d + 1 | 0, I = I + 1 | 0) {
        var B = b.charCodeAt(d) | 0;
        if (127 >= B) {
          N[I] = B;
        } else {
          if (2047 >= B) {
            N[I] = 192 | B >> 6;
          } else {
            e: {
              if (55296 <= B) {
                if (56319 >= B) {
                  var x = b.charCodeAt(d = d + 1 | 0) | 0;
                  if (56320 <= x && 57343 >= x) {
                    B = (B << 10) + x - 56613888 | 0;
                    if (65535 < B) {
                      N[I] = 240 | B >> 18;
                      N[I = I + 1 | 0] = 128 | B >> 12 & 63;
                      N[I = I + 1 | 0] = 128 | B >> 6 & 63;
                      N[I = I + 1 | 0] = 128 | B & 63;
                      continue;
                    }
                    break e;
                  }
                  B = 65533;
                } else {
                  if (57343 >= B) {
                    B = 65533;
                  }
                }
              }
              if (!G && d << 1 < I && d << 1 < (I - 7 | 0)) {
                G = !0;
                x = new f(3 * A);
                x.set(N);
                N = x;
              }
            }
            N[I] = 224 | B >> 12;
            N[I = I + 1 | 0] = 128 | B >> 6 & 63;
          }
          N[I = I + 1 | 0] = 128 | B & 63;
        }
      }
      return a ? N.subarray(0, I) : N.slice(0, I);
    };
    p || (i.TextDecoder = e, i.TextEncoder = t);
  })(globalThis);
  function Z(i) {
    let e = typeof i;
    if (e == "object") {
      if (Array.isArray(i)) {
        return "array";
      }
      if (i === null) {
        return "null";
      }
    }
    return e;
  }
  function Be(i) {
    return i !== null && typeof i == "object" && !Array.isArray(i);
  }
  var L = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
    z = [];
  for (let i = 0; i < L.length; i++) z[L[i].charCodeAt(0)] = i;
  z["-".charCodeAt(0)] = L.indexOf("+");
  z["_".charCodeAt(0)] = L.indexOf("/");
  function Oe(i) {
    let e = i.length * 3 / 4;
    i[i.length - 2] == "=" ? e -= 2 : i[i.length - 1] == "=" && (e -= 1);
    let t = new Uint8Array(e),
      r = 0,
      n = 0,
      s,
      o = 0;
    for (let a = 0; a < i.length; a++) {
      s = z[i.charCodeAt(a)];
      if (s === 0) {
        switch (i[a]) {
          case "=":
            {
              n = 0;
            }
          case `
`:
            {}
          case "\r":
            {}
          case "	":
            {}
          case " ":
            {
              continue;
            }
          default:
            {
              throw Error("invalid base64 string.");
            }
        }
      }
      switch (n) {
        case 0:
          {
            o = s;
            n = 1;
            break;
          }
        case 1:
          {
            t[r++] = o << 2 | (s & 48) >> 4;
            o = s;
            n = 2;
            break;
          }
        case 2:
          {
            t[r++] = (o & 15) << 4 | (s & 60) >> 2;
            o = s;
            n = 3;
            break;
          }
        case 3:
          {
            t[r++] = (o & 3) << 6 | s;
            n = 0;
            break;
          }
      }
    }
    if (n == 1) {
      throw Error("invalid base64 string.");
    }
    return t.subarray(0, r);
  }
  function Fe(i) {
    let e = "",
      t = 0,
      r,
      n = 0;
    for (let s = 0; s < i.length; s++) switch (r = i[s], t) {
      case 0:
        {
          e += L[r >> 2];
          n = (r & 3) << 4;
          t = 1;
          break;
        }
      case 1:
        {
          e += L[n | r >> 4];
          n = (r & 15) << 2;
          t = 2;
          break;
        }
      case 2:
        {
          e += L[n | r >> 6];
          e += L[r & 63];
          t = 0;
          break;
        }
    }
    t && (e += L[n], e += "=", t == 1 && (e += "="));
    return e;
  }
  var O;
  (function (i) {
    i.symbol = Symbol.for("protobuf-ts/unknown");
    i.onRead = (t, r, n, s, o) => {
      (e(r) ? r[i.symbol] : r[i.symbol] = []).push({
        no: n,
        wireType: s,
        data: o
      });
    };
    i.onWrite = (t, r, n) => {
      for (let {
        no: s,
        wireType: o,
        data: a
      } of i.list(r)) n.tag(s, o).raw(a);
    };
    i.list = (t, r) => {
      if (e(t)) {
        let n = t[i.symbol];
        return r ? n.filter(s => s.no == r) : n;
      }
      return [];
    };
    i.last = (t, r) => i.list(t, r).slice(-1)[0];
    let e = t => t && Array.isArray(t[i.symbol]);
  })(O || (O = {}));
  var g;
  (function (i) {
    i[i.Varint = 0] = "Varint";
    i[i.Bit64 = 1] = "Bit64";
    i[i.LengthDelimited = 2] = "LengthDelimited";
    i[i.StartGroup = 3] = "StartGroup";
    i[i.EndGroup = 4] = "EndGroup";
    i[i.Bit32 = 5] = "Bit32";
  })(g || (g = {}));
  function Ee() {
    let i = 0,
      e = 0;
    for (let r = 0; r < 28; r += 7) {
      let n = this.buf[this.pos++];
      i |= (n & 127) << r;
      if (!(n & 128)) {
        this.assertBounds();
        return [i, e];
      }
    }
    let t = this.buf[this.pos++];
    i |= (t & 15) << 28;
    e = (t & 112) >> 4;
    if (!(t & 128)) {
      this.assertBounds();
      return [i, e];
    }
    for (let r = 3; r <= 31; r += 7) {
      let n = this.buf[this.pos++];
      e |= (n & 127) << r;
      if (!(n & 128)) {
        this.assertBounds();
        return [i, e];
      }
    }
    throw new Error("invalid varint");
  }
  function H(i, e, t) {
    for (let s = 0; s < 28; s = s + 7) {
      let o = i >>> s,
        a = !(!(o >>> 7) && e == 0),
        f = (a ? o | 128 : o) & 255;
      t.push(f);
      if (!a) {
        return;
      }
    }
    let r = i >>> 28 & 15 | (e & 7) << 4,
      n = !!(e >> 3);
    t.push((n ? r | 128 : r) & 255);
    if (!!n) {
      for (let s = 3; s < 31; s = s + 7) {
        let o = e >>> s,
          a = !!(o >>> 7),
          f = (a ? o | 128 : o) & 255;
        t.push(f);
        if (!a) {
          return;
        }
      }
      t.push(e >>> 31 & 1);
    }
  }
  var Q = (1 << 16) * (1 << 16);
  function de(i) {
    let e = i[0] == "-";
    if (e) {
      i = i.slice(1);
    }
    let t = 1e6,
      r = 0,
      n = 0;
    function s(o, a) {
      let f = Number(i.slice(o, a));
      n *= t;
      r = r * t + f;
      r >= Q && (n = n + (r / Q | 0), r = r % Q);
    }
    s(-24, -18);
    s(-18, -12);
    s(-12, -6);
    s(-6);
    return [e, r, n];
  }
  function ee(i, e) {
    if (e <= 2097151) {
      return "" + (Q * e + (i >>> 0));
    }
    let t = i & 16777215,
      r = (i >>> 24 | e << 8) >>> 0 & 16777215,
      n = e >> 16 & 65535,
      s = t + r * 6777216 + n * 6710656,
      o = r + n * 8147497,
      a = n * 2,
      f = 1e7;
    s >= f && (o += Math.floor(s / f), s %= f);
    o >= f && (a += Math.floor(o / f), o %= f);
    function l(h, y) {
      let p = h ? String(h) : "";
      return y ? "0000000".slice(p.length) + p : p;
    }
    return l(a, 0) + l(o, a) + l(s, 1);
  }
  function me(i, e) {
    if (i >= 0) {
      for (; i > 127;) {
        e.push(i & 127 | 128);
        i = i >>> 7;
      }
      e.push(i);
    } else {
      for (let t = 0; t < 9; t++) {
        e.push(i & 127 | 128);
        i = i >> 7;
      }
      e.push(1);
    }
  }
  function Re() {
    let i = this.buf[this.pos++],
      e = i & 127;
    if (!(i & 128)) {
      this.assertBounds();
      return e;
    }
    i = this.buf[this.pos++];
    e |= (i & 127) << 7;
    if (!(i & 128)) {
      this.assertBounds();
      return e;
    }
    i = this.buf[this.pos++];
    e |= (i & 127) << 14;
    if (!(i & 128)) {
      this.assertBounds();
      return e;
    }
    i = this.buf[this.pos++];
    e |= (i & 127) << 21;
    if (!(i & 128)) {
      this.assertBounds();
      return e;
    }
    i = this.buf[this.pos++];
    e |= (i & 15) << 28;
    for (let t = 5; i & 128 && t < 10; t++) i = this.buf[this.pos++];
    if (i & 128) {
      throw new Error("invalid varint");
    }
    this.assertBounds();
    return e >>> 0;
  }
  function _e() {
    let i = new DataView(new ArrayBuffer(8));
    return globalThis.BigInt !== 0 && typeof i.getBigInt64 == "function" && typeof i.getBigUint64 == "function" && typeof i.setBigInt64 == "function" && typeof i.setBigUint64 == "function" ? {
      MIN: BigInt("-9223372036854775808"),
      MAX: BigInt("9223372036854775807"),
      UMIN: BigInt("0"),
      UMAX: BigInt("18446744073709551615"),
      C: BigInt,
      V: i
    } : 0;
  }
  var k = _e();
  function Ae(i) {
    if (!i) {
      throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support");
    }
  }
  var Se = /^-?[0-9]+$/,
    te = (1 << 16) * (1 << 16),
    re = class {
      constructor(e, t) {
        this.lo = e | 0;
        this.hi = t | 0;
      }
      isZero() {
        return this.lo == 0 && this.hi == 0;
      }
      toNumber() {
        let e = this.hi * te + (this.lo >>> 0);
        if (!Number.isSafeInteger(e)) {
          throw new Error("cannot convert to safe number");
        }
        return e;
      }
    },
    T = class extends re {
      static from(e) {
        if (k) {
          switch (typeof e) {
            case "string":
              {
                if (e == "0") {
                  return this.ZERO;
                }
                if (e == "") {
                  throw new Error("string is no integer");
                }
                e = k.C(e);
              }
            case "number":
              {
                if (e === 0) {
                  return this.ZERO;
                }
                e = k.C(e);
              }
            case "bigint":
              {
                if (!e) {
                  return this.ZERO;
                }
                if (e < k.UMIN) {
                  throw new Error("signed value for ulong");
                }
                if (e > k.UMAX) {
                  throw new Error("ulong too large");
                }
                k.V.setBigUint64(0, e, !0);
                return new T(k.V.getInt32(0, !0), k.V.getInt32(4, !0));
              }
          }
        } else {
          switch (typeof e) {
            case "string":
              {
                if (e == "0") {
                  return this.ZERO;
                }
                if (e = e.trim(), !Se.test(e)) {
                  throw new Error("string is no integer");
                }
                let [t, r, n] = de(e);
                if (t) {
                  throw new Error("signed value");
                }
                return new T(r, n);
              }
            case "number":
              {
                if (e == 0) {
                  return this.ZERO;
                }
                if (!Number.isSafeInteger(e)) {
                  throw new Error("number is no integer");
                }
                if (e < 0) {
                  throw new Error("signed value for ulong");
                }
                return new T(e, e / te);
              }
          }
        }
        throw new Error("unknown value " + typeof e);
      }
      toString() {
        return k ? this.toBigInt().toString() : ee(this.lo, this.hi);
      }
      toBigInt() {
        Ae(k);
        k.V.setInt32(0, this.lo, !0);
        k.V.setInt32(4, this.hi, !0);
        return k.V.getBigUint64(0, !0);
      }
    };
  T.ZERO = new T(0, 0);
  var w = class extends re {
    static from(e) {
      if (k) {
        switch (typeof e) {
          case "string":
            {
              if (e == "0") {
                return this.ZERO;
              }
              if (e == "") {
                throw new Error("string is no integer");
              }
              e = k.C(e);
            }
          case "number":
            {
              if (e === 0) {
                return this.ZERO;
              }
              e = k.C(e);
            }
          case "bigint":
            {
              if (!e) {
                return this.ZERO;
              }
              if (e < k.MIN) {
                throw new Error("ulong too small");
              }
              if (e > k.MAX) {
                throw new Error("ulong too large");
              }
              k.V.setBigInt64(0, e, !0);
              return new w(k.V.getInt32(0, !0), k.V.getInt32(4, !0));
            }
        }
      } else {
        switch (typeof e) {
          case "string":
            {
              if (e == "0") {
                return this.ZERO;
              }
              if (e = e.trim(), !Se.test(e)) {
                throw new Error("string is no integer");
              }
              let [t, r, n] = de(e),
                s = new w(r, n);
              return t ? s.negate() : s;
            }
          case "number":
            {
              if (e == 0) {
                return this.ZERO;
              }
              if (!Number.isSafeInteger(e)) {
                throw new Error("number is no integer");
              }
              return e > 0 ? new w(e, e / te) : new w(-e, -e / te).negate();
            }
        }
      }
      throw new Error("unknown value " + typeof e);
    }
    isNegative() {
      return (this.hi & 2147483648) !== 0;
    }
    negate() {
      let e = ~this.hi,
        t = this.lo;
      t ? t = ~t + 1 : e += 1;
      return new w(t, e);
    }
    toString() {
      if (k) {
        return this.toBigInt().toString();
      }
      if (this.isNegative()) {
        let e = this.negate();
        return "-" + ee(e.lo, e.hi);
      }
      return ee(this.lo, this.hi);
    }
    toBigInt() {
      Ae(k);
      k.V.setInt32(0, this.lo, !0);
      k.V.setInt32(4, this.hi, !0);
      return k.V.getBigInt64(0, !0);
    }
  };
  w.ZERO = new w(0, 0);
  var Ue = {
    readUnknownField: !0,
    readerFactory: i => new pe(i)
  };
  function Ve(i) {
    return i ? Object.assign(Object.assign({}, Ue), i) : Ue;
  }
  var pe = class {
    constructor(e, t) {
      this.varint64 = Ee;
      this.uint32 = Re;
      this.buf = e;
      this.len = e.length;
      this.pos = 0;
      this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
      this.textDecoder = t ?? new TextDecoder("utf-8", {
        fatal: !0,
        ignoreBOM: !0
      });
    }
    tag() {
      let e = this.uint32(),
        t = e >>> 3,
        r = e & 7;
      if (t <= 0 || r < 0 || r > 5) {
        throw new Error("illegal tag: field no " + t + " wire type " + r);
      }
      return [t, r];
    }
    skip(e) {
      let t = this.pos;
      switch (e) {
        case g.Varint:
          {
            for (; this.buf[this.pos++] & 128;);
            break;
          }
        case g.Bit64:
          {
            this.pos += 4;
          }
        case g.Bit32:
          {
            this.pos += 4;
            break;
          }
        case g.LengthDelimited:
          {
            let r = this.uint32();
            this.pos += r;
            break;
          }
        case g.StartGroup:
          {
            let n;
            for (; (n = this.tag()[1]) !== g.EndGroup;) this.skip(n);
            break;
          }
        default:
          {
            throw new Error("cant skip wire type " + e);
          }
      }
      this.assertBounds();
      return this.buf.subarray(t, this.pos);
    }
    assertBounds() {
      if (this.pos > this.len) {
        throw new RangeError("premature EOF");
      }
    }
    int32() {
      return this.uint32() | 0;
    }
    sint32() {
      let e = this.uint32();
      return e >>> 1 ^ -(e & 1);
    }
    int64() {
      return new w(...this.varint64());
    }
    uint64() {
      return new T(...this.varint64());
    }
    sint64() {
      let [e, t] = this.varint64(),
        r = -(e & 1);
      e = (e >>> 1 | (t & 1) << 31) ^ r;
      t = t >>> 1 ^ r;
      return new w(e, t);
    }
    bool() {
      let [e, t] = this.varint64();
      return e !== 0 || t !== 0;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
      return new T(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return new w(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
      let e = this.uint32(),
        t = this.pos;
      this.pos += e;
      this.assertBounds();
      return this.buf.subarray(t, t + e);
    }
    string() {
      return this.textDecoder.decode(this.bytes());
    }
  };
  function m(i, e) {
    if (!i) {
      throw new Error(e);
    }
  }
  var Ye = 34028234663852886e22,
    Ze = -34028234663852886e22,
    ze = 4294967295,
    Qe = 2147483647,
    He = -2147483648;
  function M(i) {
    if (typeof i != "number") {
      throw new Error("invalid int 32: " + typeof i);
    }
    if (!Number.isInteger(i) || i > Qe || i < He) {
      throw new Error("invalid int 32: " + i);
    }
  }
  function W(i) {
    if (typeof i != "number") {
      throw new Error("invalid uint 32: " + typeof i);
    }
    if (!Number.isInteger(i) || i > ze || i < 0) {
      throw new Error("invalid uint 32: " + i);
    }
  }
  function j(i) {
    if (typeof i != "number") {
      throw new Error("invalid float 32: " + typeof i);
    }
    if (Number.isFinite(i) && (i > Ye || i < Ze)) {
      throw new Error("invalid float 32: " + i);
    }
  }
  var De = {
    writeUnknownFields: !0,
    writerFactory: () => new ge()
  };
  function Ce(i) {
    return i ? Object.assign(Object.assign({}, De), i) : De;
  }
  var ge = class {
    constructor(e) {
      this.stack = [];
      this.textEncoder = e ?? new TextEncoder();
      this.chunks = [];
      this.buf = [];
    }
    finish() {
      this.chunks.push(new Uint8Array(this.buf));
      let e = 0;
      for (let n = 0; n < this.chunks.length; n++) e += this.chunks[n].length;
      let t = new Uint8Array(e),
        r = 0;
      for (let n = 0; n < this.chunks.length; n++) {
        t.set(this.chunks[n], r);
        r += this.chunks[n].length;
      }
      this.chunks = [];
      return t;
    }
    fork() {
      this.stack.push({
        chunks: this.chunks,
        buf: this.buf
      });
      this.chunks = [];
      this.buf = [];
      return this;
    }
    join() {
      let e = this.finish(),
        t = this.stack.pop();
      if (!t) {
        throw new Error("invalid state, fork stack empty");
      }
      this.chunks = t.chunks;
      this.buf = t.buf;
      this.uint32(e.byteLength);
      return this.raw(e);
    }
    tag(e, t) {
      return this.uint32((e << 3 | t) >>> 0);
    }
    raw(e) {
      this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
      this.chunks.push(e);
      return this;
    }
    uint32(e) {
      for (W(e); e > 127;) {
        this.buf.push(e & 127 | 128);
        e = e >>> 7;
      }
      this.buf.push(e);
      return this;
    }
    int32(e) {
      M(e);
      me(e, this.buf);
      return this;
    }
    bool(e) {
      this.buf.push(e ? 1 : 0);
      return this;
    }
    bytes(e) {
      this.uint32(e.byteLength);
      return this.raw(e);
    }
    string(e) {
      let t = this.textEncoder.encode(e);
      this.uint32(t.byteLength);
      return this.raw(t);
    }
    float(e) {
      j(e);
      let t = new Uint8Array(4);
      new DataView(t.buffer).setFloat32(0, e, !0);
      return this.raw(t);
    }
    double(e) {
      let t = new Uint8Array(8);
      new DataView(t.buffer).setFloat64(0, e, !0);
      return this.raw(t);
    }
    fixed32(e) {
      W(e);
      let t = new Uint8Array(4);
      new DataView(t.buffer).setUint32(0, e, !0);
      return this.raw(t);
    }
    sfixed32(e) {
      M(e);
      let t = new Uint8Array(4);
      new DataView(t.buffer).setInt32(0, e, !0);
      return this.raw(t);
    }
    sint32(e) {
      M(e);
      e = (e << 1 ^ e >> 31) >>> 0;
      me(e, this.buf);
      return this;
    }
    sfixed64(e) {
      let t = new Uint8Array(8),
        r = new DataView(t.buffer),
        n = w.from(e);
      r.setInt32(0, n.lo, !0);
      r.setInt32(4, n.hi, !0);
      return this.raw(t);
    }
    fixed64(e) {
      let t = new Uint8Array(8),
        r = new DataView(t.buffer),
        n = T.from(e);
      r.setInt32(0, n.lo, !0);
      r.setInt32(4, n.hi, !0);
      return this.raw(t);
    }
    int64(e) {
      let t = w.from(e);
      H(t.lo, t.hi, this.buf);
      return this;
    }
    sint64(e) {
      let t = w.from(e),
        r = t.hi >> 31,
        n = t.lo << 1 ^ r,
        s = (t.hi << 1 | t.lo >>> 31) ^ r;
      H(n, s, this.buf);
      return this;
    }
    uint64(e) {
      let t = T.from(e);
      H(t.lo, t.hi, this.buf);
      return this;
    }
  };
  var Le = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0
    },
    Pe = {
      ignoreUnknownFields: !1
    };
  function $e(i) {
    return i ? Object.assign(Object.assign({}, Pe), i) : Pe;
  }
  function Me(i) {
    return i ? Object.assign(Object.assign({}, Le), i) : Le;
  }
  var K = Symbol.for("protobuf-ts/message-type");
  function be(i) {
    let e = !1,
      t = [];
    for (let r = 0; r < i.length; r++) {
      let n = i.charAt(r);
      n == "_" ? e = !0 : /\d/.test(n) ? (t.push(n), e = !0) : e ? (t.push(n.toUpperCase()), e = !1) : r == 0 ? t.push(n.toLowerCase()) : t.push(n);
    }
    return t.join("");
  }
  var u;
  (function (i) {
    i[i.DOUBLE = 1] = "DOUBLE";
    i[i.FLOAT = 2] = "FLOAT";
    i[i.INT64 = 3] = "INT64";
    i[i.UINT64 = 4] = "UINT64";
    i[i.INT32 = 5] = "INT32";
    i[i.FIXED64 = 6] = "FIXED64";
    i[i.FIXED32 = 7] = "FIXED32";
    i[i.BOOL = 8] = "BOOL";
    i[i.STRING = 9] = "STRING";
    i[i.BYTES = 12] = "BYTES";
    i[i.UINT32 = 13] = "UINT32";
    i[i.SFIXED32 = 15] = "SFIXED32";
    i[i.SFIXED64 = 16] = "SFIXED64";
    i[i.SINT32 = 17] = "SINT32";
    i[i.SINT64 = 18] = "SINT64";
  })(u || (u = {}));
  var F;
  (function (i) {
    i[i.BIGINT = 0] = "BIGINT";
    i[i.STRING = 1] = "STRING";
    i[i.NUMBER = 2] = "NUMBER";
  })(F || (F = {}));
  var v;
  (function (i) {
    i[i.NO = 0] = "NO";
    i[i.PACKED = 1] = "PACKED";
    i[i.UNPACKED = 2] = "UNPACKED";
  })(v || (v = {}));
  function Ke(i) {
    var e, t, r, n;
    (e = i.localName) !== null && e !== 0 ? i.localName = e : i.localName = be(i.name);
    (t = i.jsonName) !== null && t !== 0 ? i.jsonName = t : i.jsonName = be(i.name);
    (r = i.repeat) !== null && r !== 0 ? i.repeat = r : i.repeat = v.NO;
    (n = i.opt) !== null && n !== 0 ? i.opt = n : i.repeat || i.oneof ? i.opt = !1 : i.opt = i.kind == "message";
    return i;
  }
  function qe(i) {
    if (typeof i != "object" || i === null || !i.hasOwnProperty("oneofKind")) {
      return !1;
    }
    switch (typeof i.oneofKind) {
      case "string":
        {
          return i[i.oneofKind] === 0 ? !1 : Object.keys(i).length == 2;
        }
      case "undefined":
        {
          return Object.keys(i).length == 1;
        }
      default:
        {
          return !1;
        }
    }
  }
  var ne = class {
    constructor(e) {
      var t;
      (t = e.fields) !== null && t !== 0 ? this.fields = t : this.fields = [];
    }
    prepare() {
      if (this.data) {
        return;
      }
      let e = [],
        t = [],
        r = [];
      for (let n of this.fields) if (n.oneof) {
        r.includes(n.oneof) || (r.push(n.oneof), e.push(n.oneof), t.push(n.oneof));
      } else {
        switch (t.push(n.localName), n.kind) {
          case "scalar":
            {}
          case "enum":
            {
              if (!n.opt || n.repeat) {
                e.push(n.localName);
              }
              break;
            }
          case "message":
            {
              if (n.repeat) {
                e.push(n.localName);
              }
              break;
            }
          case "map":
            {
              e.push(n.localName);
              break;
            }
        }
      }
      this.data = {
        req: e,
        known: t,
        oneofs: Object.values(r)
      };
    }
    is(e, t, r = !1) {
      if (t < 0) {
        return !0;
      }
      if (e == null || typeof e != "object") {
        return !1;
      }
      this.prepare();
      let n = Object.keys(e),
        s = this.data;
      if (n.length < s.req.length || s.req.some(o => !n.includes(o)) || !r && n.some(o => !s.known.includes(o))) {
        return !1;
      }
      if (t < 1) {
        return !0;
      }
      for (let o of s.oneofs) {
        let a = e[o];
        if (!qe(a)) {
          return !1;
        }
        if (a.oneofKind === 0) {
          continue;
        }
        let f = this.fields.find(l => l.localName === a.oneofKind);
        if (!f || !this.field(a[a.oneofKind], f, r, t)) {
          return !1;
        }
      }
      for (let o of this.fields) if (o.oneof === 0 && !this.field(e[o.localName], o, r, t)) {
        return !1;
      }
      return !0;
    }
    field(e, t, r, n) {
      let s = t.repeat;
      switch (t.kind) {
        case "scalar":
          {
            return e === 0 ? t.opt : s ? this.scalars(e, t.T, n, t.L) : this.scalar(e, t.T, t.L);
          }
        case "enum":
          {
            return e === 0 ? t.opt : s ? this.scalars(e, u.INT32, n) : this.scalar(e, u.INT32);
          }
        case "message":
          {
            return e === 0 ? !0 : s ? this.messages(e, t.T(), r, n) : this.message(e, t.T(), r, n);
          }
        case "map":
          {
            if (typeof e != "object" || e === null) {
              return !1;
            }
            if (n < 2) {
              return !0;
            }
            if (!this.mapKeys(e, t.K, n)) {
              return !1;
            }
            switch (t.V.kind) {
              case "scalar":
                {
                  return this.scalars(Object.values(e), t.V.T, n, t.V.L);
                }
              case "enum":
                {
                  return this.scalars(Object.values(e), u.INT32, n);
                }
              case "message":
                {
                  return this.messages(Object.values(e), t.V.T(), r, n);
                }
            }
            break;
          }
      }
      return !0;
    }
    message(e, t, r, n) {
      return r ? t.isAssignable(e, n) : t.is(e, n);
    }
    messages(e, t, r, n) {
      if (!Array.isArray(e)) {
        return !1;
      }
      if (n < 2) {
        return !0;
      }
      if (r) {
        for (let s = 0; s < e.length && s < n; s++) if (!t.isAssignable(e[s], n - 1)) {
          return !1;
        }
      } else {
        for (let s = 0; s < e.length && s < n; s++) if (!t.is(e[s], n - 1)) {
          return !1;
        }
      }
      return !0;
    }
    scalar(e, t, r) {
      let n = typeof e;
      switch (t) {
        case u.UINT64:
          {}
        case u.FIXED64:
          {}
        case u.INT64:
          {}
        case u.SFIXED64:
          {}
        case u.SINT64:
          {
            switch (r) {
              case F.BIGINT:
                {
                  return n == "bigint";
                }
              case F.NUMBER:
                {
                  return n == "number" && !isNaN(e);
                }
              default:
                {
                  return n == "string";
                }
            }
          }
        case u.BOOL:
          {
            return n == "boolean";
          }
        case u.STRING:
          {
            return n == "string";
          }
        case u.BYTES:
          {
            return e instanceof Uint8Array;
          }
        case u.DOUBLE:
          {}
        case u.FLOAT:
          {
            return n == "number" && !isNaN(e);
          }
        default:
          {
            return n == "number" && Number.isInteger(e);
          }
      }
    }
    scalars(e, t, r, n) {
      if (!Array.isArray(e)) {
        return !1;
      }
      if (r < 2) {
        return !0;
      }
      if (Array.isArray(e)) {
        for (let s = 0; s < e.length && s < r; s++) if (!this.scalar(e[s], t, n)) {
          return !1;
        }
      }
      return !0;
    }
    mapKeys(e, t, r) {
      let n = Object.keys(e);
      switch (t) {
        case u.INT32:
          {}
        case u.FIXED32:
          {}
        case u.SFIXED32:
          {}
        case u.SINT32:
          {}
        case u.UINT32:
          {
            return this.scalars(n.slice(0, r).map(s => parseInt(s)), t, r);
          }
        case u.BOOL:
          {
            return this.scalars(n.slice(0, r).map(s => s == "true" ? !0 : s == "false" ? !1 : s), t, r);
          }
        default:
          {
            return this.scalars(n, t, r, F.STRING);
          }
      }
    }
  };
  function R(i, e) {
    switch (e) {
      case F.BIGINT:
        {
          return i.toBigInt();
        }
      case F.NUMBER:
        {
          return i.toNumber();
        }
      default:
        {
          return i.toString();
        }
    }
  }
  var ie = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      var e;
      if (this.fMap === 0) {
        this.fMap = {};
        let t = (e = this.info.fields) !== null && e !== 0 ? e : [];
        for (let r of t) {
          this.fMap[r.name] = r;
          this.fMap[r.jsonName] = r;
          this.fMap[r.localName] = r;
        }
      }
    }
    assert(e, t, r) {
      if (!e) {
        let n = Z(r);
        throw (n == "number" || n == "boolean") && (n = r.toString()), new Error(`Cannot parse JSON ${n} for ${this.info.typeName}#${t}`);
      }
    }
    read(e, t, r) {
      this.prepare();
      let n = [];
      for (let [s, o] of Object.entries(e)) {
        let a = this.fMap[s];
        if (!a) {
          if (!r.ignoreUnknownFields) {
            throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${s}`);
          }
          continue;
        }
        let f = a.localName,
          l;
        if (a.oneof) {
          if (n.includes(a.oneof)) {
            throw new Error(`Multiple members of the oneof group "${a.oneof}" of ${this.info.typeName} are present in JSON.`);
          }
          n.push(a.oneof);
          l = t[a.oneof] = {
            oneofKind: f
          };
        } else {
          l = t;
        }
        if (a.kind == "map") {
          if (o === null) {
            continue;
          }
          this.assert(Be(o), a.name, o);
          let h = l[f];
          for (let [y, p] of Object.entries(o)) {
            this.assert(p !== null, a.name + " map value", null);
            let c;
            switch (a.V.kind) {
              case "message":
                {
                  c = a.V.T().internalJsonRead(p, r);
                  break;
                }
              case "enum":
                {
                  if (c = this.enum(a.V.T(), p, a.name, r.ignoreUnknownFields), c === !1) {
                    continue;
                  }
                  break;
                }
              case "scalar":
                {
                  c = this.scalar(p, a.V.T, a.V.L, a.name);
                  break;
                }
            }
            this.assert(c !== 0, a.name + " map value", p);
            let b = y;
            a.K == u.BOOL && (b == "true" ? b = !0 : b == "false" ? b = !1 : b = b);
            b = this.scalar(b, a.K, F.STRING, a.name).toString();
            h[b] = c;
          }
        } else {
          if (a.repeat) {
            if (o === null) {
              continue;
            }
            this.assert(Array.isArray(o), a.name, o);
            let h = l[f];
            for (let y of o) {
              this.assert(y !== null, a.name, null);
              let p;
              switch (a.kind) {
                case "message":
                  {
                    p = a.T().internalJsonRead(y, r);
                    break;
                  }
                case "enum":
                  {
                    if (p = this.enum(a.T(), y, a.name, r.ignoreUnknownFields), p === !1) {
                      continue;
                    }
                    break;
                  }
                case "scalar":
                  {
                    p = this.scalar(y, a.T, a.L, a.name);
                    break;
                  }
              }
              this.assert(p !== 0, a.name, o);
              h.push(p);
            }
          } else {
            switch (a.kind) {
              case "message":
                {
                  if (o === null && a.T().typeName != "google.protobuf.Value") {
                    this.assert(a.oneof === 0, a.name + " (oneof member)", null);
                    continue;
                  }
                  l[f] = a.T().internalJsonRead(o, r, l[f]);
                  break;
                }
              case "enum":
                {
                  let h = this.enum(a.T(), o, a.name, r.ignoreUnknownFields);
                  if (h === !1) {
                    continue;
                  }
                  l[f] = h;
                  break;
                }
              case "scalar":
                {
                  l[f] = this.scalar(o, a.T, a.L, a.name);
                  break;
                }
            }
          }
        }
      }
    }
    enum(e, t, r, n) {
      e[0] == "google.protobuf.NullValue" && m(t === null, `Unable to parse field ${this.info.typeName}#${r}, enum ${e[0]} only accepts null.`);
      if (t === null) {
        return 0;
      }
      switch (typeof t) {
        case "number":
          {
            m(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${r}, enum can only be integral number, got ${t}.`);
            return t;
          }
        case "string":
          {
            let s = t;
            if (e[2] && t.substring(0, e[2].length) === e[2]) {
              s = t.substring(e[2].length);
            }
            let o = e[1][s];
            return typeof o > "u" && n ? !1 : (m(typeof o == "number", `Unable to parse field ${this.info.typeName}#${r}, enum ${e[0]} has no value for "${t}".`), o);
          }
      }
      m(!1, `Unable to parse field ${this.info.typeName}#${r}, cannot parse enum value from ${typeof t}".`);
    }
    scalar(e, t, r, n) {
      let s;
      try {
        switch (t) {
          case u.DOUBLE:
            {}
          case u.FLOAT:
            {
              if (e === null) {
                return 0;
              }
              if (e === "NaN") {
                return Number.NaN;
              }
              if (e === "Infinity") {
                return Number.POSITIVE_INFINITY;
              }
              if (e === "-Infinity") {
                return Number.NEGATIVE_INFINITY;
              }
              if (e === "") {
                s = "empty string";
                break;
              }
              if (typeof e == "string" && e.trim().length !== e.length) {
                s = "extra whitespace";
                break;
              }
              if (typeof e != "string" && typeof e != "number") {
                break;
              }
              let o = Number(e);
              if (Number.isNaN(o)) {
                s = "not a number";
                break;
              }
              if (!Number.isFinite(o)) {
                s = "too large or small";
                break;
              }
              t == u.FLOAT && j(o);
              return o;
            }
          case u.INT32:
            {}
          case u.FIXED32:
            {}
          case u.SFIXED32:
            {}
          case u.SINT32:
            {}
          case u.UINT32:
            {
              if (e === null) {
                return 0;
              }
              let a;
              if (typeof e == "number" ? a = e : e === "" ? s = "empty string" : typeof e == "string" && (e.trim().length !== e.length ? s = "extra whitespace" : a = Number(e)), a === 0) {
                break;
              }
              t == u.UINT32 ? W(a) : M(a);
              return a;
            }
          case u.INT64:
            {}
          case u.SFIXED64:
            {}
          case u.SINT64:
            {
              if (e === null) {
                return R(w.ZERO, r);
              }
              if (typeof e != "number" && typeof e != "string") {
                break;
              }
              return R(w.from(e), r);
            }
          case u.FIXED64:
            {}
          case u.UINT64:
            {
              if (e === null) {
                return R(T.ZERO, r);
              }
              if (typeof e != "number" && typeof e != "string") {
                break;
              }
              return R(T.from(e), r);
            }
          case u.BOOL:
            {
              if (e === null) {
                return !1;
              }
              if (typeof e != "boolean") {
                break;
              }
              return e;
            }
          case u.STRING:
            {
              if (e === null) {
                return "";
              }
              if (typeof e != "string") {
                s = "extra whitespace";
                break;
              }
              try {
                encodeURIComponent(e);
              } catch (f) {
                f = "invalid UTF8";
                break;
              }
              return e;
            }
          case u.BYTES:
            {
              if (e === null || e === "") {
                return new Uint8Array(0);
              }
              if (typeof e != "string") {
                break;
              }
              return Oe(e);
            }
        }
      } catch (o) {
        s = o.message;
      }
      this.assert(!1, n + (s ? " - " + s : ""), e);
    }
  };
  var se = class {
    constructor(e) {
      var t;
      (t = e.fields) !== null && t !== 0 ? this.fields = t : this.fields = [];
    }
    write(e, t) {
      let r = {},
        n = e;
      for (let s of this.fields) {
        if (!s.oneof) {
          let l = this.field(s, n[s.localName], t);
          if (l !== 0) {
            r[t.useProtoFieldName ? s.name : s.jsonName] = l;
          }
          continue;
        }
        let o = n[s.oneof];
        if (o.oneofKind !== s.localName) {
          continue;
        }
        let a = s.kind == "scalar" || s.kind == "enum" ? Object.assign(Object.assign({}, t), {
            emitDefaultValues: !0
          }) : t,
          f = this.field(s, o[s.localName], a);
        m(f !== 0);
        r[t.useProtoFieldName ? s.name : s.jsonName] = f;
      }
      return r;
    }
    field(e, t, r) {
      let n;
      if (e.kind == "map") {
        m(typeof t == "object" && t !== null);
        let s = {};
        switch (e.V.kind) {
          case "scalar":
            {
              for (let [f, l] of Object.entries(t)) {
                let h = this.scalar(e.V.T, l, e.name, !1, !0);
                m(h !== 0);
                s[f.toString()] = h;
              }
              break;
            }
          case "message":
            {
              let o = e.V.T();
              for (let [f, l] of Object.entries(t)) {
                let h = this.message(o, l, e.name, r);
                m(h !== 0);
                s[f.toString()] = h;
              }
              break;
            }
          case "enum":
            {
              let a = e.V.T();
              for (let [f, l] of Object.entries(t)) {
                m(l === 0 || typeof l == "number");
                let h = this.enum(a, l, e.name, !1, !0, r.enumAsInteger);
                m(h !== 0);
                s[f.toString()] = h;
              }
              break;
            }
        }
        if (r.emitDefaultValues || Object.keys(s).length > 0) {
          n = s;
        }
      } else {
        if (e.repeat) {
          m(Array.isArray(t));
          let s = [];
          switch (e.kind) {
            case "scalar":
              {
                for (let f = 0; f < t.length; f++) {
                  let l = this.scalar(e.T, t[f], e.name, e.opt, !0);
                  m(l !== 0);
                  s.push(l);
                }
                break;
              }
            case "enum":
              {
                let o = e.T();
                for (let f = 0; f < t.length; f++) {
                  m(t[f] === 0 || typeof t[f] == "number");
                  let l = this.enum(o, t[f], e.name, e.opt, !0, r.enumAsInteger);
                  m(l !== 0);
                  s.push(l);
                }
                break;
              }
            case "message":
              {
                let a = e.T();
                for (let f = 0; f < t.length; f++) {
                  let l = this.message(a, t[f], e.name, r);
                  m(l !== 0);
                  s.push(l);
                }
                break;
              }
          }
          if (r.emitDefaultValues || s.length > 0 || r.emitDefaultValues) {
            n = s;
          }
        } else {
          switch (e.kind) {
            case "scalar":
              {
                n = this.scalar(e.T, t, e.name, e.opt, r.emitDefaultValues);
                break;
              }
            case "enum":
              {
                n = this.enum(e.T(), t, e.name, e.opt, r.emitDefaultValues, r.enumAsInteger);
                break;
              }
            case "message":
              {
                n = this.message(e.T(), t, e.name, r);
                break;
              }
          }
        }
      }
      return n;
    }
    enum(e, t, r, n, s, o) {
      if (e[0] == "google.protobuf.NullValue") {
        return null;
      }
      if (t === 0) {
        m(n);
        return;
      }
      if (!(t === 0 && !s && !n)) {
        m(typeof t == "number");
        m(Number.isInteger(t));
        return o || !e[1].hasOwnProperty(t) ? t : e[2] ? e[2] + e[1][t] : e[1][t];
      }
    }
    message(e, t, r, n) {
      return t === 0 ? n.emitDefaultValues ? null : 0 : e.internalJsonWrite(t, n);
    }
    scalar(e, t, r, n, s) {
      if (t === 0) {
        m(n);
        return;
      }
      let o = s || n;
      switch (e) {
        case u.INT32:
          {}
        case u.SFIXED32:
          {}
        case u.SINT32:
          {
            return t === 0 ? o ? 0 : 0 : (M(t), t);
          }
        case u.FIXED32:
          {}
        case u.UINT32:
          {
            return t === 0 ? o ? 0 : 0 : (W(t), t);
          }
        case u.FLOAT:
          {
            j(t);
          }
        case u.DOUBLE:
          {
            return t === 0 ? o ? 0 : 0 : (m(typeof t == "number"), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t);
          }
        case u.STRING:
          {
            return t === "" ? o ? "" : 0 : (m(typeof t == "string"), t);
          }
        case u.BOOL:
          {
            return t === !1 ? o ? !1 : 0 : (m(typeof t == "boolean"), t);
          }
        case u.UINT64:
          {}
        case u.FIXED64:
          {
            m(typeof t == "number" || typeof t == "string" || typeof t == "bigint");
            let a = T.from(t);
            return a.isZero() && !o ? 0 : a.toString();
          }
        case u.INT64:
          {}
        case u.SFIXED64:
          {}
        case u.SINT64:
          {
            m(typeof t == "number" || typeof t == "string" || typeof t == "bigint");
            let f = w.from(t);
            return f.isZero() && !o ? 0 : f.toString();
          }
        case u.BYTES:
          {
            m(t instanceof Uint8Array);
            return t.byteLength ? Fe(t) : o ? "" : 0;
          }
      }
    }
  };
  function _(i, e = F.STRING) {
    switch (i) {
      case u.BOOL:
        {
          return !1;
        }
      case u.UINT64:
        {}
      case u.FIXED64:
        {
          return R(T.ZERO, e);
        }
      case u.INT64:
        {}
      case u.SFIXED64:
        {}
      case u.SINT64:
        {
          return R(w.ZERO, e);
        }
      case u.DOUBLE:
        {}
      case u.FLOAT:
        {
          return 0;
        }
      case u.BYTES:
        {
          return new Uint8Array(0);
        }
      case u.STRING:
        {
          return "";
        }
      default:
        {
          return 0;
        }
    }
  }
  var oe = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      var e;
      if (!this.fieldNoToField) {
        let t = (e = this.info.fields) !== null && e !== 0 ? e : [];
        this.fieldNoToField = new Map(t.map(r => [r.no, r]));
      }
    }
    read(e, t, r, n) {
      this.prepare();
      let s = n === 0 ? e.len : e.pos + n;
      for (; e.pos < s;) {
        let [o, a] = e.tag(),
          f = this.fieldNoToField.get(o);
        if (!f) {
          let p = r.readUnknownField;
          if (p == "throw") {
            throw new Error(`Unknown field ${o} (wire type ${a}) for ${this.info.typeName}`);
          }
          let c = e.skip(a);
          if (p !== !1) {
            (p === !0 ? O.onRead : p)(this.info.typeName, t, o, a, c);
          }
          continue;
        }
        let l = t,
          h = f.repeat,
          y = f.localName;
        switch (f.oneof && (l = l[f.oneof], l.oneofKind !== y && (l = t[f.oneof] = {
          oneofKind: y
        })), f.kind) {
          case "scalar":
            {}
          case "enum":
            {
              let p = f.kind == "enum" ? u.INT32 : f.T,
                c = f.kind == "scalar" ? f.L : 0;
              if (h) {
                let N = l[y];
                if (a == g.LengthDelimited && p != u.STRING && p != u.BYTES) {
                  let d = e.uint32() + e.pos;
                  for (; e.pos < d;) N.push(this.scalar(e, p, c));
                } else {
                  N.push(this.scalar(e, p, c));
                }
              } else {
                l[y] = this.scalar(e, p, c);
              }
              break;
            }
          case "message":
            {
              if (h) {
                let N = l[y],
                  d = f.T().internalBinaryRead(e, e.uint32(), r);
                N.push(d);
              } else {
                l[y] = f.T().internalBinaryRead(e, e.uint32(), r, l[y]);
              }
              break;
            }
          case "map":
            {
              let [b, A] = this.mapEntry(f, e, r);
              l[y][b] = A;
              break;
            }
        }
      }
    }
    mapEntry(e, t, r) {
      let n = t.uint32(),
        s = t.pos + n,
        o,
        a;
      for (; t.pos < s;) {
        let [f, l] = t.tag();
        switch (f) {
          case 1:
            {
              e.K == u.BOOL ? o = t.bool().toString() : o = this.scalar(t, e.K, F.STRING);
              break;
            }
          case 2:
            {
              switch (e.V.kind) {
                case "scalar":
                  {
                    a = this.scalar(t, e.V.T, e.V.L);
                    break;
                  }
                case "enum":
                  {
                    a = t.int32();
                    break;
                  }
                case "message":
                  {
                    a = e.V.T().internalBinaryRead(t, t.uint32(), r);
                    break;
                  }
              }
              break;
            }
          default:
            {
              throw new Error(`Unknown field ${f} (wire type ${l}) in map entry for ${this.info.typeName}#${e.name}`);
            }
        }
      }
      if (o === 0) {
        let f = _(e.K);
        e.K == u.BOOL ? o = f.toString() : o = f;
      }
      if (a === 0) {
        switch (e.V.kind) {
          case "scalar":
            {
              a = _(e.V.T, e.V.L);
              break;
            }
          case "enum":
            {
              a = 0;
              break;
            }
          case "message":
            {
              a = e.V.T().create();
              break;
            }
        }
      }
      return [o, a];
    }
    scalar(e, t, r) {
      switch (t) {
        case u.INT32:
          {
            return e.int32();
          }
        case u.STRING:
          {
            return e.string();
          }
        case u.BOOL:
          {
            return e.bool();
          }
        case u.DOUBLE:
          {
            return e.double();
          }
        case u.FLOAT:
          {
            return e.float();
          }
        case u.INT64:
          {
            return R(e.int64(), r);
          }
        case u.UINT64:
          {
            return R(e.uint64(), r);
          }
        case u.FIXED64:
          {
            return R(e.fixed64(), r);
          }
        case u.FIXED32:
          {
            return e.fixed32();
          }
        case u.BYTES:
          {
            return e.bytes();
          }
        case u.UINT32:
          {
            return e.uint32();
          }
        case u.SFIXED32:
          {
            return e.sfixed32();
          }
        case u.SFIXED64:
          {
            return R(e.sfixed64(), r);
          }
        case u.SINT32:
          {
            return e.sint32();
          }
        case u.SINT64:
          {
            return R(e.sint64(), r);
          }
      }
    }
  };
  var ae = class {
    constructor(e) {
      this.info = e;
    }
    prepare() {
      if (!this.fields) {
        let e = this.info.fields ? this.info.fields.concat() : [];
        this.fields = e.sort((t, r) => t.no - r.no);
      }
    }
    write(e, t, r) {
      this.prepare();
      for (let s of this.fields) {
        let o,
          a,
          f = s.repeat,
          l = s.localName;
        if (s.oneof) {
          let h = e[s.oneof];
          if (h.oneofKind !== l) {
            continue;
          }
          o = h[l];
          a = !0;
        } else {
          o = e[l];
          a = !1;
        }
        switch (s.kind) {
          case "scalar":
            {}
          case "enum":
            {
              let h = s.kind == "enum" ? u.INT32 : s.T;
              if (f) {
                m(Array.isArray(o));
                if (f == v.PACKED) {
                  this.packed(t, h, s.no, o);
                } else {
                  for (let y of o) this.scalar(t, h, s.no, y, !0);
                }
              } else {
                o === 0 ? m(s.opt) : this.scalar(t, h, s.no, o, a || s.opt);
              }
              break;
            }
          case "message":
            {
              if (f) {
                m(Array.isArray(o));
                for (let y of o) this.message(t, r, s.T(), s.no, y);
              } else {
                this.message(t, r, s.T(), s.no, o);
              }
              break;
            }
          case "map":
            {
              m(typeof o == "object" && o !== null);
              for (let [y, p] of Object.entries(o)) this.mapEntry(t, r, s, y, p);
              break;
            }
        }
      }
      let n = r.writeUnknownFields;
      if (n !== !1) {
        (n === !0 ? O.onWrite : n)(this.info.typeName, e, t);
      }
    }
    mapEntry(e, t, r, n, s) {
      e.tag(r.no, g.LengthDelimited);
      e.fork();
      let o = n;
      switch (r.K) {
        case u.INT32:
          {}
        case u.FIXED32:
          {}
        case u.UINT32:
          {}
        case u.SFIXED32:
          {}
        case u.SINT32:
          {
            o = Number.parseInt(n);
            break;
          }
        case u.BOOL:
          {
            m(n == "true" || n == "false");
            o = n == "true";
            break;
          }
      }
      switch (this.scalar(e, r.K, 1, o, !0), r.V.kind) {
        case "scalar":
          {
            this.scalar(e, r.V.T, 2, s, !0);
            break;
          }
        case "enum":
          {
            this.scalar(e, u.INT32, 2, s, !0);
            break;
          }
        case "message":
          {
            this.message(e, t, r.V.T(), 2, s);
            break;
          }
      }
      e.join();
    }
    message(e, t, r, n, s) {
      if (s !== 0) {
        r.internalBinaryWrite(s, e.tag(n, g.LengthDelimited).fork(), t);
        e.join();
      }
    }
    scalar(e, t, r, n, s) {
      let [o, a, f] = this.scalarInfo(t, n);
      if (!f || s) {
        e.tag(r, o);
        e[a](n);
      }
    }
    packed(e, t, r, n) {
      if (!n.length) {
        return;
      }
      m(t !== u.BYTES && t !== u.STRING);
      e.tag(r, g.LengthDelimited);
      e.fork();
      let [, s] = this.scalarInfo(t);
      for (let o = 0; o < n.length; o++) e[s](n[o]);
      e.join();
    }
    scalarInfo(e, t) {
      let r = g.Varint,
        n,
        s = t === 0,
        o = t === 0;
      switch (e) {
        case u.INT32:
          {
            n = "int32";
            break;
          }
        case u.STRING:
          {
            o = s || !t.length;
            r = g.LengthDelimited;
            n = "string";
            break;
          }
        case u.BOOL:
          {
            o = t === !1;
            n = "bool";
            break;
          }
        case u.UINT32:
          {
            n = "uint32";
            break;
          }
        case u.DOUBLE:
          {
            r = g.Bit64;
            n = "double";
            break;
          }
        case u.FLOAT:
          {
            r = g.Bit32;
            n = "float";
            break;
          }
        case u.INT64:
          {
            o = s || w.from(t).isZero();
            n = "int64";
            break;
          }
        case u.UINT64:
          {
            o = s || T.from(t).isZero();
            n = "uint64";
            break;
          }
        case u.FIXED64:
          {
            o = s || T.from(t).isZero();
            r = g.Bit64;
            n = "fixed64";
            break;
          }
        case u.BYTES:
          {
            o = s || !t.byteLength;
            r = g.LengthDelimited;
            n = "bytes";
            break;
          }
        case u.FIXED32:
          {
            r = g.Bit32;
            n = "fixed32";
            break;
          }
        case u.SFIXED32:
          {
            r = g.Bit32;
            n = "sfixed32";
            break;
          }
        case u.SFIXED64:
          {
            o = s || w.from(t).isZero();
            r = g.Bit64;
            n = "sfixed64";
            break;
          }
        case u.SINT32:
          {
            n = "sint32";
            break;
          }
        case u.SINT64:
          {
            o = s || w.from(t).isZero();
            n = "sint64";
            break;
          }
      }
      return [r, n, s || o];
    }
  };
  function Je(i) {
    let e = {};
    Object.defineProperty(e, K, {
      enumerable: !1,
      value: i
    });
    for (let t of i.fields) {
      let r = t.localName;
      if (!t.opt) {
        if (t.oneof) {
          e[t.oneof] = {
            oneofKind: 0
          };
        } else {
          if (t.repeat) {
            e[r] = [];
          } else {
            switch (t.kind) {
              case "scalar":
                {
                  e[r] = _(t.T, t.L);
                  break;
                }
              case "enum":
                {
                  e[r] = 0;
                  break;
                }
              case "map":
                {
                  e[r] = {};
                  break;
                }
            }
          }
        }
      }
    }
    return e;
  }
  function C(i, e, t) {
    let r,
      n = t,
      s;
    for (let o of i.fields) {
      let a = o.localName;
      if (o.oneof) {
        let f = n[o.oneof];
        if (f?.oneofKind == null) {
          continue;
        }
        r = f[a];
        s = e[o.oneof];
        s.oneofKind = f.oneofKind;
        if (r == null) {
          delete s[a];
          continue;
        }
      } else {
        r = n[a];
        s = e;
        if (r == null) {
          continue;
        }
      }
      switch (o.repeat && (s[a].length = r.length), o.kind) {
        case "scalar":
          {}
        case "enum":
          {
            if (o.repeat) {
              for (let l = 0; l < r.length; l++) s[a][l] = r[l];
            } else {
              s[a] = r;
            }
            break;
          }
        case "message":
          {
            let f = o.T();
            if (o.repeat) {
              for (let l = 0; l < r.length; l++) s[a][l] = f.create(r[l]);
            } else {
              s[a] === 0 ? s[a] = f.create(r) : f.mergePartial(s[a], r);
            }
            break;
          }
        case "map":
          {
            switch (o.V.kind) {
              case "scalar":
                {}
              case "enum":
                {
                  Object.assign(s[a], r);
                  break;
                }
              case "message":
                {
                  let l = o.V.T();
                  for (let h of Object.keys(r)) s[a][h] = l.create(r[h]);
                  break;
                }
            }
            break;
          }
      }
    }
  }
  function Xe(i, e, t) {
    if (e === t) {
      return !0;
    }
    if (!e || !t) {
      return !1;
    }
    for (let r of i.fields) {
      let n = r.localName,
        s = r.oneof ? e[r.oneof][n] : e[n],
        o = r.oneof ? t[r.oneof][n] : t[n];
      switch (r.kind) {
        case "enum":
          {}
        case "scalar":
          {
            let a = r.kind == "enum" ? u.INT32 : r.T;
            if (!(r.repeat ? We(a, s, o) : Ge(a, s, o))) {
              return !1;
            }
            break;
          }
        case "map":
          {
            if (!(r.V.kind == "message" ? je(r.V.T(), fe(s), fe(o)) : We(r.V.kind == "enum" ? u.INT32 : r.V.T, fe(s), fe(o)))) {
              return !1;
            }
            break;
          }
        case "message":
          {
            let f = r.T();
            if (!(r.repeat ? je(f, s, o) : f.equals(s, o))) {
              return !1;
            }
            break;
          }
      }
    }
    return !0;
  }
  var fe = Object.values;
  function Ge(i, e, t) {
    if (e === t) {
      return !0;
    }
    if (i !== u.BYTES) {
      return !1;
    }
    let r = e,
      n = t;
    if (r.length !== n.length) {
      return !1;
    }
    for (let s = 0; s < r.length; s++) if (r[s] != n[s]) {
      return !1;
    }
    return !0;
  }
  function We(i, e, t) {
    if (e.length !== t.length) {
      return !1;
    }
    for (let r = 0; r < e.length; r++) if (!Ge(i, e[r], t[r])) {
      return !1;
    }
    return !0;
  }
  function je(i, e, t) {
    if (e.length !== t.length) {
      return !1;
    }
    for (let r = 0; r < e.length; r++) if (!i.equals(e[r], t[r])) {
      return !1;
    }
    return !0;
  }
  var q = class {
    constructor(e, t, r) {
      this.defaultCheckDepth = 16;
      this.typeName = e;
      this.fields = t.map(Ke);
      this.options = r ?? {};
      this.refTypeCheck = new ne(this);
      this.refJsonReader = new ie(this);
      this.refJsonWriter = new se(this);
      this.refBinReader = new oe(this);
      this.refBinWriter = new ae(this);
    }
    create(e) {
      let t = Je(this);
      e !== 0 && C(this, t, e);
      return t;
    }
    clone(e) {
      let t = this.create();
      C(this, t, e);
      return t;
    }
    equals(e, t) {
      return Xe(this, e, t);
    }
    is(e, t = this.defaultCheckDepth) {
      return this.refTypeCheck.is(e, t, !1);
    }
    isAssignable(e, t = this.defaultCheckDepth) {
      return this.refTypeCheck.is(e, t, !0);
    }
    mergePartial(e, t) {
      C(this, e, t);
    }
    fromBinary(e, t) {
      let r = Ve(t);
      return this.internalBinaryRead(r.readerFactory(e), e.byteLength, r);
    }
    fromJson(e, t) {
      return this.internalJsonRead(e, $e(t));
    }
    fromJsonString(e, t) {
      let r = JSON.parse(e);
      return this.fromJson(r, t);
    }
    toJson(e, t) {
      return this.internalJsonWrite(e, Me(t));
    }
    toJsonString(e, t) {
      var r;
      let n = this.toJson(e, t);
      return JSON.stringify(n, null, (r = t?.prettySpaces) !== null && r !== 0 ? r : 0);
    }
    toBinary(e, t) {
      let r = Ce(t);
      return this.internalBinaryWrite(e, r.writerFactory(), r).finish();
    }
    internalJsonRead(e, t, r) {
      if (e !== null && typeof e == "object" && !Array.isArray(e)) {
        let n = r ?? this.create();
        this.refJsonReader.read(e, n, t);
        return n;
      }
      throw new Error(`Unable to parse message ${this.typeName} from JSON ${Z(e)}.`);
    }
    internalJsonWrite(e, t) {
      return this.refJsonWriter.write(e, t);
    }
    internalBinaryWrite(e, t, r) {
      this.refBinWriter.write(e, t, r);
      return t;
    }
    internalBinaryRead(e, t, r, n) {
      let s = n ?? this.create();
      this.refBinReader.read(e, s, r, t);
      return s;
    }
  };
  var Ne = class extends q {
      constructor() {
        super("Request", [{
          no: 1,
          name: "context",
          kind: "message",
          T: () => ye
        }, {
          no: 2,
          name: "browseId",
          kind: "scalar",
          T: 9
        }]);
      }
      create(e) {
        let t = {
          browseId: ""
        };
        globalThis.Object.defineProperty(t, K, {
          enumerable: !1,
          value: this
        });
        e !== 0 && C(this, t, e);
        return t;
      }
      internalBinaryRead(e, t, r, n) {
        let s = n ?? this.create(),
          o = e.pos + t;
        for (; e.pos < o;) {
          let [a, f] = e.tag();
          switch (a) {
            case 1:
              {
                s.context = ye.internalBinaryRead(e, e.uint32(), r, s.context);
                break;
              }
            case 2:
              {
                s.browseId = e.string();
                break;
              }
            default:
              {
                let l = r.readUnknownField;
                if (l === "throw") {
                  throw new globalThis.Error(`Unknown field ${a} (wire type ${f}) for ${this.typeName}`);
                }
                let h = e.skip(f);
                if (l !== !1) {
                  (l === !0 ? O.onRead : l)(this.typeName, s, a, f, h);
                }
              }
          }
        }
        return s;
      }
      internalBinaryWrite(e, t, r) {
        e.context && ye.internalBinaryWrite(e.context, t.tag(1, g.LengthDelimited).fork(), r).join();
        e.browseId !== "" && t.tag(2, g.LengthDelimited).string(e.browseId);
        let n = r.writeUnknownFields;
        n !== !1 && (n == !0 ? O.onWrite : n)(this.typeName, e, t);
        return t;
      }
    },
    ve = new Ne(),
    ke = class extends q {
      constructor() {
        super("Context", [{
          no: 9,
          name: "adSignalsInfo",
          kind: "message",
          T: () => we
        }]);
      }
      create(e) {
        let t = {};
        globalThis.Object.defineProperty(t, K, {
          enumerable: !1,
          value: this
        });
        e !== 0 && C(this, t, e);
        return t;
      }
      internalBinaryRead(e, t, r, n) {
        let s = n ?? this.create(),
          o = e.pos + t;
        for (; e.pos < o;) {
          let [a, f] = e.tag();
          switch (a) {
            case 9:
              {
                s.adSignalsInfo = we.internalBinaryRead(e, e.uint32(), r, s.adSignalsInfo);
                break;
              }
            default:
              {
                let l = r.readUnknownField;
                if (l === "throw") {
                  throw new globalThis.Error(`Unknown field ${a} (wire type ${f}) for ${this.typeName}`);
                }
                let h = e.skip(f);
                if (l !== !1) {
                  (l === !0 ? O.onRead : l)(this.typeName, s, a, f, h);
                }
              }
          }
        }
        return s;
      }
      internalBinaryWrite(e, t, r) {
        if (e.adSignalsInfo) {
          we.internalBinaryWrite(e.adSignalsInfo, t.tag(9, g.LengthDelimited).fork(), r).join();
        }
        let n = r.writeUnknownFields;
        n !== !1 && (n == !0 ? O.onWrite : n)(this.typeName, e, t);
        return t;
      }
    },
    ye = new ke(),
    xe = class extends q {
      constructor() {
        super("AdSignalsInfo", [{
          no: 1,
          name: "params",
          kind: "message",
          repeat: 1,
          T: () => Ie
        }]);
      }
      create(e) {
        let t = {
          params: []
        };
        globalThis.Object.defineProperty(t, K, {
          enumerable: !1,
          value: this
        });
        e !== 0 && C(this, t, e);
        return t;
      }
      internalBinaryRead(e, t, r, n) {
        let s = n ?? this.create(),
          o = e.pos + t;
        for (; e.pos < o;) {
          let [a, f] = e.tag();
          switch (a) {
            case 1:
              {
                s.params.push(Ie.internalBinaryRead(e, e.uint32(), r));
                break;
              }
            default:
              {
                let l = r.readUnknownField;
                if (l === "throw") {
                  throw new globalThis.Error(`Unknown field ${a} (wire type ${f}) for ${this.typeName}`);
                }
                let h = e.skip(f);
                if (l !== !1) {
                  (l === !0 ? O.onRead : l)(this.typeName, s, a, f, h);
                }
              }
          }
        }
        return s;
      }
      internalBinaryWrite(e, t, r) {
        for (let s = 0; s < e.params.length; s++) Ie.internalBinaryWrite(e.params[s], t.tag(1, g.LengthDelimited).fork(), r).join();
        let n = r.writeUnknownFields;
        n !== !1 && (n == !0 ? O.onWrite : n)(this.typeName, e, t);
        return t;
      }
    },
    we = new xe(),
    Te = class extends q {
      constructor() {
        super("Params", [{
          no: 1,
          name: "key",
          kind: "scalar",
          T: 9
        }, {
          no: 2,
          name: "value",
          kind: "scalar",
          T: 9
        }]);
      }
      create(e) {
        let t = {
          key: "",
          value: ""
        };
        globalThis.Object.defineProperty(t, K, {
          enumerable: !1,
          value: this
        });
        e !== 0 && C(this, t, e);
        return t;
      }
      internalBinaryRead(e, t, r, n) {
        let s = n ?? this.create(),
          o = e.pos + t;
        for (; e.pos < o;) {
          let [a, f] = e.tag();
          switch (a) {
            case 1:
              {
                s.key = e.string();
                break;
              }
            case 2:
              {
                s.value = e.string();
                break;
              }
            default:
              {
                let l = r.readUnknownField;
                if (l === "throw") {
                  throw new globalThis.Error(`Unknown field ${a} (wire type ${f}) for ${this.typeName}`);
                }
                let h = e.skip(f);
                if (l !== !1) {
                  (l === !0 ? O.onRead : l)(this.typeName, s, a, f, h);
                }
              }
          }
        }
        return s;
      }
      internalBinaryWrite(e, t, r) {
        e.key !== "" && t.tag(1, g.LengthDelimited).string(e.key);
        e.value !== "" && t.tag(2, g.LengthDelimited).string(e.value);
        let n = r.writeUnknownFields;
        n !== !1 && (n == !0 ? O.onWrite : n)(this.typeName, e, t);
        return t;
      }
    },
    Ie = new Te();
  var X = class {
      constructor(e, t, r) {
        this._times = new Map();
        this.name = e ?? "";
        this.debug = r?.debug ?? !1;
        e && this.log(`${e} Start`);
        this.className = t ?? "";
        this.init();
      }
      static getInstance(e, t) {
        let r = typeof $task < "u" ? "QuanX" : "Surge";
        X.instances[r] || (X.instances[r] = X.classNames[r](e, r, t));
        return X.instances[r];
      }
      createProxy(e) {
        return new Proxy(e, {
          get: this.getFn,
          set: this.setFn
        });
      }
      getFn(e, t, r) {
        return e[t];
      }
      setFn(e, t, r, n) {
        e[t] = r;
        return !0;
      }
      getJSON(e, t = {}) {
        let r = this.getVal(e);
        return r ? JSON.parse(r) : t;
      }
      setJSON(e, t) {
        this.setVal(JSON.stringify(e), t);
      }
      msg(e = this.name, t = "", r = "", n) {}
      log(e) {
        if (this.debug) {
          typeof e == "object" && (e = JSON.stringify(e));
          console.log(e);
        }
      }
      timeStart(e) {
        this._times = this._times || {};
        this._times[e] = Date.now();
      }
      timeEnd(e) {
        if (this._times?.has(e)) {
          let t = Date.now() - this._times[e];
          this.log(`${e}: ${t}ms`);
          this._times.delete(e);
        } else {
          this.log(`Timer with label ${e} does not exist.`);
        }
      }
      exit() {
        $done({});
      }
      reject() {
        $done();
      }
    },
    $ = X;
  $.instances = {};
  $.classNames = {
    QuanX: (e, t, r) => new le(e, t, r),
    Surge: (e, t, r) => new ue(e, t, r)
  };
  var ce = class extends $ {
      getFn(e, t, r) {
        let n = ce.clientAdapter[t] || t;
        return super.getFn(e, n, r);
      }
      setFn(e, t, r, n) {
        let s = ce.clientAdapter[t] || t;
        return super.setFn(e, s, r, n);
      }
      init() {
        try {
          this.request = this.createProxy($request);
          this.response = this.createProxy($response);
        } catch (e) {
          this.log(e.toString());
        }
      }
      getVal(e) {
        return $persistentStore.read(e);
      }
      setVal(e, t) {
        $persistentStore.write(e, t);
      }
      msg(e = this.name, t = "", r = "", n) {
        $notification.post(e, t, r, {
          url: n ?? ""
        });
      }
      async fetch(e) {
        return await new Promise((t, r) => {
          let {
              method: n,
              body: s,
              bodyBytes: o,
              ...a
            } = e,
            f = o ?? s,
            l = f instanceof Uint8Array;
          $httpClient[n.toLowerCase()]({
            ...a,
            body: f,
            "binary-mode": l
          }, (h, y, p) => {
            if (h) {
              r(h);
            }
            let c = l ? "bodyBytes" : "body";
            t({
              status: y.status || y.statusCode,
              headers: y.headers,
              [c]: p
            });
          });
        });
      }
      done(e) {
        let t = e.response ?? e,
          r,
          n;
        t.bodyBytes ? (r = t.bodyBytes, delete t.bodyBytes, n = {
          ...e
        }, n.response ? n.response.body = r : n.body = r) : n = e;
        $done(n);
      }
    },
    ue = ce;
  ue.clientAdapter = {
    bodyBytes: "body"
  };
  var P = class extends $ {
      static transferBodyBytes(e, t) {
        return e instanceof ArrayBuffer ? t === "Uint8Array" ? new Uint8Array(e) : e : e instanceof Uint8Array && t === "ArrayBuffer" ? e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset) : e;
      }
      init() {
        try {
          this.request = this.createProxy($request);
          this.response = this.createProxy($response);
        } catch (e) {
          this.log(e.toString());
        }
      }
      getFn(e, t, r) {
        let n = P.clientAdapter[t] || t,
          s = super.getFn(e, n, r);
        t === "bodyBytes" && (s = P.transferBodyBytes(s, "Uint8Array"));
        return s;
      }
      setFn(e, t, r, n) {
        let s = P.clientAdapter[t] || t,
          o = r;
        t === "bodyBytes" && (o = P.transferBodyBytes(o, "Uint8Array"));
        return super.setFn(e, s, o, n);
      }
      getVal(e) {
        return $prefs.valueForKey(e)?.replace(/\0/g, "");
      }
      setVal(e, t) {
        $prefs.setValueForKey(e, t);
      }
      msg(e = this.name, t = "", r = "", n) {
        $notify(e, t, r, {
          "open-url": n ?? ""
        });
      }
      async fetch(e) {
        return await new Promise(t => {
          let r = {
            url: "",
            method: "GET"
          };
          for (let [n, s] of Object.entries(e)) n === "id" ? r.sessionIndex = s : n === "bodyBytes" ? r.bodyBytes = P.transferBodyBytes(s, "ArrayBuffer") : r[n] = s;
          e.bodyBytes && delete r.body;
          $task.fetch(r).then(n => {
            let s = {
              status: 200,
              headers: {}
            };
            for (let [o, a] of Object.entries(n)) o === "sessionIndex" ? s.id = a : o === "bodyBytes" ? s.bodyBytes = P.transferBodyBytes(a, "Uint8Array") : o === "statusCode" ? s.status = a : s[o] = a;
            t(s);
          });
        });
      }
      done(e) {
        let t = e.response ?? e,
          r = {};
        for (let [n, s] of Object.entries(t)) n === "status" ? r.status = `HTTP/1.1 ${s}` : n === "bodyBytes" ? r.bodyBytes = P.transferBodyBytes(s, "ArrayBuffer") : r[n] = s;
        $done(r);
      }
    },
    le = P;
  le.clientAdapter = {
    id: "sessionIndex",
    status: "statusCode"
  };
  var S = $.getInstance("YouTube", {
    debug: !1
  });
  var he = class {
    constructor(e, t) {
      this.decoder = new TextDecoder("utf-8", {
        fatal: !1,
        ignoreBOM: !0
      });
      S.log(t);
      this.msgType = e;
      Object.assign(this, S.getJSON("YouTubeAdvertiseInfo", {
        whiteNo: [],
        blackNo: [],
        whiteEml: [],
        blackEml: ["cell_divider.eml"]
      }));
    }
    fromBinary(e) {
      this.message = this.msgType.fromBinary(e);
      return this;
    }
    toBinary() {
      return this.msgType.toBinary(this.message);
    }
    save() {
      if (this.needSave) {
        S.log("Update Config");
        let e = {
          whiteNo: this.whiteNo,
          blackNo: this.blackNo,
          whiteEml: this.whiteEml,
          blackEml: this.blackEml
        };
        S.setJSON(e, "YouTubeAdvertiseInfo");
      }
    }
    done(e) {
      this.save();
      let t = e.bodyBytes;
      this.needProcess && (t = this.toBinary());
      e.headers["Content-Encoding"] = "identity";
      e.headers["Content-Length"] = (t?.length ?? 0)?.toString();
      S.done({
        response: {
          ...e,
          bodyBytes: t
        }
      });
    }
    doneResponse() {
      this.save();
      this.needProcess && S.done({
        bodyBytes: this.toBinary()
      });
      S.exit();
    }
    iterate(e = {}, t, r, n) {
      let s = [];
      for (s.push(e); s.length;) {
        let o = s.pop(),
          a = Object.keys(o);
        for (; a.length;) {
          let f = a.pop();
          f === t ? r(o, s) : typeof o[f] == "object" && (s.push(o[f]), typeof n == "function" && n(o, s));
        }
      }
    }
    isAdvertise(e) {
      let t = O.list(e)[0],
        r = t ? this.handleFieldNo(t) : this.handleFieldEml(e);
      r && (this.needProcess = !0);
      return r;
    }
    handleFieldNo(e) {
      let t = e.no;
      if (this.whiteNo.includes(t)) {
        return !1;
      }
      if (this.blackNo.includes(t)) {
        return !0;
      }
      let n = this.decoder.decode(e.data).includes("pagead");
      n ? this.blackNo.push(t) : this.whiteNo.push(t);
      this.needSave = !0;
      return n;
    }
    handleFieldEml(e) {
      let t = !1,
        r = !0,
        n = "";
      this.iterate(e, "type", (s, o) => {
        n = s.type.split("|")[0];
        this.whiteEml.includes(n) ? t = !1 : this.blackEml.includes(n) || /shorts(?!_pivot_item)/.test(n) ? t = !0 : r = !1;
        r && (o.length = 0);
      });
      r || (this.iterate(e, "type", () => {}, (s, o) => {
        let a = O.list(s);
        for (let f of a) if (f.data.length > 1e3 && (t = this.decoder.decode(f.data).includes("pagead"), t)) {
          o.length = 0;
          break;
        }
      }), t ? this.blackEml.push(n) : this.whiteEml.push(n), this.needSave = !0);
      return t;
    }
  };
  var Y = class extends he {
    constructor(e = ve, t = "Request") {
      super(e, t);
    }
    pure() {
      this.message.context.adSignalsInfo.params.length = 0;
      this.needProcess = !0;
      return this;
    }
  };
  var et = new Y();
  try {
    let i = et.fromBinary(S.request.bodyBytes).pure().toBinary();
    S.done({
      bodyBytes: i
    });
  } catch (i) {
    S.log(i.toString());
    S.exit();
  }
})();