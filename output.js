const YZ_0x4185e2 = new YZ_0x1d5d88("酷我音乐"),
  YZ_0x4a7e4c = new YZ_0x42289f(),
  YZ_0x369dd2 = "/mobi.s?f=kwxs",
  YZ_0x1900f5 = "/music.pay?newver=3",
  YZ_0x4dbdc3 = RegExp(/(a\.p|v2\/api\/(user\/personal\/)?user\/info)/),
  YZ_0x47e583 = "/vip/enc",
  YZ_0xb6ace6 = RegExp(/(vip\/)?v2\/(api(\/pay)?\/user\/info|user\/vip)/),
  YZ_0x4c552b = "/vip/v2/theme?op=gd",
  YZ_0xec17b9 = "/v2/api/advert/myPage",
  YZ_0x551bc7 = RegExp(/(v2\/api\/advert\/(iListen|album)|openapi\/v1\/album\/adBar|(\/EcomResource|\/(Mobile)?Ad)Serv(er|ice))/),
  YZ_0x56bde8 = "/vip/v2/sysinfo?op=getRePayAndDoPayBoxNew",
  YZ_0x291f45 = "/v2/api/pay/payInfo/kwplayer/payMiniBar",
  YZ_0x4eac69 = "/kuwopay/vip-tab/setting",
  YZ_0x2c2c4b = "/openapi/v1/album/myRec/vipMusic",
  YZ_0x4a3702 = YZ_0x4185e2.toObj(YZ_0x4185e2.getval("KuWo")) || {},
  YZ_0xa927df = "4.6.28";
var YZ_0x253ade = "undefined" !== typeof $request ? $request.url : "",
  YZ_0x1fbaca = "undefined" !== typeof $response ? $response.body : null,
  YZ_0x592d76 = YZ_0x4185e2.toObj(YZ_0x1fbaca);
if (YZ_0x253ade.indexOf(YZ_0x369dd2) != -1) {
  let YZ_0x3350d4 = YZ_0x4a3702.user,
    YZ_0x57ddb7 = YZ_0x4a3702.PlayID,
    YZ_0x1f29ee = YZ_0x4a3702.key,
    YZ_0x221886 = YZ_0x4a3702.Song,
    YZ_0x296c54 = YZ_0x4a3702.ver,
    YZ_0x243794 = YZ_0x592d76.data.rid || null;
  !(async () => {
    await YZ_0x2883a9(YZ_0x3350d4, "kuwo");
    await YZ_0x5395f4();
    if (YZ_0x4a3702.isVip && new Date().getTime() < YZ_0x4a3702.endTime && YZ_0x243794 != YZ_0x57ddb7 && YZ_0xa927df == YZ_0x296c54) {
      const _0x4b104c = {
        br: 4000,
        url: "4000kflac"
      };
      const _0x4d0197 = {
        br: 2000,
        url: "2000kflac"
      };
      const _0x417c3b = {
        br: 320,
        url: "320kmp3"
      };
      let _0x3a7b6c = [_0x4b104c, _0x4d0197, _0x417c3b],
        _0x1ff792 = 0;
      if ("book" == YZ_0x221886) {
        _0x1ff792 = 2;
      }
      while (_0x3a7b6c[_0x1ff792]) {
        const _0x38499a = {
          url: "http://mobi.kuwo.cn/mobi.s?f=web&source=" + YZ_0x4a7e4c.ntoc(YZ_0x1f29ee) + "&type=convert_url_with_sign&br=" + _0x3a7b6c[_0x1ff792].url + "&rid=" + YZ_0x57ddb7
        };
        await YZ_0x4185e2.http.get(_0x38499a).then(_0x574b7c => {
          YZ_0x1fbaca = _0x574b7c.body;
          YZ_0x592d76 = YZ_0x4185e2.toObj(YZ_0x1fbaca);
        });
        if (YZ_0x592d76.data.bitrate == _0x3a7b6c[_0x1ff792].br) {
          break;
        }
        _0x1ff792 += 1;
      }
    }
    YZ_0x4a3702.PlayID = "";
    YZ_0x4185e2.setval(YZ_0x4185e2.toStr(YZ_0x4a3702), "KuWo");
    const _0x11f74b = {
      body: YZ_0x1fbaca
    };
    YZ_0x4185e2.done(_0x11f74b);
  })();
}
if (YZ_0x253ade.endsWith(YZ_0x1900f5)) {
  if ("number" == typeof YZ_0x592d76.songs[0].id) {
    id = YZ_0x592d76.songs[0].id;
    if ("number" !== typeof id) {
      id = YZ_0x1fbaca.replace(/.*?\"id\":(\d+).*/, "$1");
    }
    YZ_0x4a3702.PlayID = id;
    YZ_0x4a3702.Song = "music";
    YZ_0x4185e2.setval(YZ_0x4185e2.toStr(YZ_0x4a3702), "KuWo");
  }
  if (YZ_0x592d76.hasOwnProperty("songs")) {
    YZ_0x592d76.songs[0].audio.forEach(_0x10e3c4 => _0x10e3c4.st = 0);
  }
  let YZ_0x49c322 = YZ_0x592d76.songs[0].audio[0].policy;
  YZ_0x592d76.user[0] = {
    pid: YZ_0x592d76.songs[0].audio[0].pid,
    type: YZ_0x49c322,
    name: YZ_0x49c322 + "_1",
    categray: YZ_0x49c322 + "_1",
    id: YZ_0x592d76.songs[0].id,
    order: 375787919,
    final: [],
    buy: 1657425321,
    begin: 1657425321,
    end: 4077187200,
    CurEnd: 0,
    playCnt: 0,
    playUpper: 300,
    downCnt: 0,
    downUpper: 300,
    playVideoCnt: 0,
    playVideoUpper: 3000,
    downVideoCnt: 0,
    downVideoUpper: 3000,
    price: YZ_0x592d76.songs[0].audio[0].price,
    period: 1000,
    feetype: 0,
    info: YZ_0x592d76.songs[0]
  };
  YZ_0x1fbaca = YZ_0x4185e2.toStr(YZ_0x592d76);
  const YZ_0x246e2 = {
    body: YZ_0x1fbaca
  };
  YZ_0x4185e2.done(YZ_0x246e2);
}
if (YZ_0x253ade.match(YZ_0x4dbdc3)) {
  if (YZ_0x592d76.hasOwnProperty("songs")) {
    for (let YZ_0x56fe47 in YZ_0x592d76.songs) {
      id = YZ_0x592d76.songs[YZ_0x56fe47].id;
      if ("number" !== typeof id) {
        id = YZ_0x1fbaca.replace(/.*?\"id\":(\d+).*/, "$1");
      }
      if ("number" == typeof id) {
        YZ_0x4a3702.PlayID = id;
        YZ_0x4a3702.Song = "book";
        YZ_0x4185e2.setval(YZ_0x4185e2.toStr(YZ_0x4a3702), "KuWo");
        break;
      }
    }
  }
  YZ_0x1fbaca = YZ_0x1fbaca.replace(/(policy|policytype)\":\d/g, "$1\":0").replace(/(playright|downright|type|bought_vip|limitfree|vipType)\":\d/g, "$1\":1").replace(/(end|endtime|vipExpires)\":\d+/g, "$1\":4077187200");
  const YZ_0x14013f = {
    body: YZ_0x1fbaca
  };
  YZ_0x4185e2.done(YZ_0x14013f);
}
YZ_0x253ade.indexOf(YZ_0x47e583) != -1 && !(async () => {
  let _0x150b6c = new URL(YZ_0x253ade).searchParams,
    _0x1a071 = _0x150b6c.get("uid");
  if ("number" !== typeof _0x1a071) {
    _0x1a071 = YZ_0x253ade.replace(/.*?uid=(\d+).*/, "$1");
  }
  await YZ_0x2883a9(_0x1a071, "kuwo");
  let _0x25707a = await YZ_0x4185e2.http.get(YZ_0x253ade.replace(/uid=\d+/g, "uid=238581279")).then(_0x4f8f3d => _0x4f8f3d.body);
  const _0x1b75ce = {
    body: _0x25707a
  };
  YZ_0x4185e2.done(_0x1b75ce);
})();
if (YZ_0x253ade.match(YZ_0xb6ace6)) {
  YZ_0x592d76.data.vipIcon = "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png";
  delete YZ_0x592d76.data.iconJumpUrl;
  delete YZ_0x592d76.data.adActUrl;
  YZ_0x592d76.data.growthValue = "9999";
  YZ_0x592d76.data.vipTag = "VIP7";
  YZ_0x592d76.data.vipmIcon = "https://image.kuwo.cn/fe/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png";
  YZ_0x592d76.data.svipIcon = "https://image.kuwo.cn/fe/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png";
  YZ_0x592d76.data.openBtnText = "永久会员";
  YZ_0x592d76.data.vipExpire = "4077187200315";
  YZ_0x592d76.data.vipExpires = 4077187200315;
  YZ_0x592d76.data.luxuryIcon = "https://image.kuwo.cn/fe/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png";
  YZ_0x592d76.data.vipmExpire = "4077187200315";
  YZ_0x592d76.data.vipLuxuryExpire = "4077187200315";
  YZ_0x592d76.data.svipExpire = "4077187200315";
  YZ_0x592d76.data.isYearUser = "2";
  YZ_0x592d76.data.biedSong = "1";
  YZ_0x592d76.data.svipAutoPayUser = "1";
  YZ_0x1fbaca = YZ_0x4185e2.toStr(YZ_0x592d76);
  const YZ_0x16b55c = {
    body: YZ_0x1fbaca
  };
  YZ_0x4185e2.done(YZ_0x16b55c);
}
if (YZ_0x253ade.indexOf(YZ_0x4c552b) != -1) {
  YZ_0x592d76.data.vipTheme.type = "free";
  delete YZ_0x592d76.data.needBieds;
  YZ_0x1fbaca = YZ_0x4185e2.toStr(YZ_0x592d76);
  const YZ_0x539dea = {
    body: YZ_0x1fbaca
  };
  YZ_0x4185e2.done(YZ_0x539dea);
}
if (YZ_0x253ade.indexOf(YZ_0xec17b9) != -1) {
  YZ_0x592d76.data.scheme = null;
  YZ_0x592d76.data.title = "酷我畅听";
  YZ_0x592d76.data.url = null;
  YZ_0x592d76.data.subTitle = "畅听服务由影子提供";
  YZ_0x1fbaca = YZ_0x4185e2.toStr(YZ_0x592d76);
  const YZ_0x1a5a68 = {
    body: YZ_0x1fbaca
  };
  YZ_0x4185e2.done(YZ_0x1a5a68);
}
if (YZ_0x253ade.match(YZ_0x551bc7)) {
  YZ_0x1fbaca = "YingZi";
  const YZ_0x518ca2 = {
    body: YZ_0x1fbaca
  };
  YZ_0x4185e2.done(YZ_0x518ca2);
}
if (YZ_0x253ade.indexOf(YZ_0x56bde8) != -1) {
  delete YZ_0x592d76.data.songListTopContext;
  YZ_0x1fbaca = YZ_0x4185e2.toStr(YZ_0x592d76);
  const YZ_0x262c5c = {
    body: YZ_0x1fbaca
  };
  YZ_0x4185e2.done(YZ_0x262c5c);
}
if (YZ_0x253ade.indexOf(YZ_0x291f45) != -1) {
  delete YZ_0x592d76.data;
  delete YZ_0x592d76.dataV2;
  YZ_0x1fbaca = YZ_0x4185e2.toStr(YZ_0x592d76);
  const YZ_0x3428a0 = {
    body: YZ_0x1fbaca
  };
  YZ_0x4185e2.done(YZ_0x3428a0);
}
if (YZ_0x253ade.indexOf(YZ_0x4eac69) != -1) {
  if ("undefined" !== typeof YZ_0x592d76.data.tab.vipTypes[0]) {
    let YZ_0x5323ab = 1;
    while (YZ_0x592d76.data.tab.vipTypes[0].topics[YZ_0x5323ab]) {
      delete YZ_0x592d76.data.tab.vipTypes[0].topics[YZ_0x5323ab];
      YZ_0x5323ab += 1;
    }
  }
  YZ_0x1fbaca = YZ_0x4185e2.toStr(YZ_0x592d76);
  const YZ_0x375039 = {
    body: YZ_0x1fbaca
  };
  YZ_0x4185e2.done(YZ_0x375039);
}
if (YZ_0x253ade.indexOf(YZ_0x2c2c4b) != -1) {
  delete YZ_0x592d76.data.listenSomething;
  YZ_0x1fbaca = YZ_0x4185e2.toStr(YZ_0x592d76);
  const YZ_0x34ef36 = {
    body: YZ_0x1fbaca
  };
  YZ_0x4185e2.done(YZ_0x34ef36);
}
async function YZ_0x5395f4() {
  YZ_0x253ade = "https://sharechain.qq.com/cfa48d8b4551a20d5e6c016bdf3823ff";
  info = await YZ_0x4185e2.http.get(YZ_0x253ade).then(_0x292894 => _0x292894.body);
  info = info.match(/<article class=\"note-body\">([\s\S]*?)<\/article>/);
  res = info[1].replace(/(\s|<.*?>)/g, "");
  YZ_0x592d76 = YZ_0x4185e2.toObj(res);
  if (YZ_0xa927df != YZ_0x592d76.kuwo) {
    YZ_0x4185e2.msg("需要更新 -> 请更新你的脚本！");
  }
  YZ_0x4a3702.ver = YZ_0x592d76.kuwo;
  YZ_0x4185e2.setval(YZ_0x4185e2.toStr(YZ_0x4a3702), "KuWo");
}
async function YZ_0x2883a9(_0x2535b5, _0x5bc4f2) {
  let _0x38746e = "type=" + _0x5bc4f2 + "&user=" + _0x2535b5;
  if (!YZ_0x4a3702.user || _0x2535b5 != YZ_0x4a3702.user || !YZ_0x4a3702.endTime || new Date().getTime() > YZ_0x4a3702.endTime || !YZ_0x4a3702.key) {
    YZ_0x4185e2.log("正在获取 " + _0x2535b5 + " 的授权信息…");
    const _0x1a5748 = {
      url: "https://napi.ltd/getInfo",
      body: _0x38746e
    };
    let _0x1009b1 = YZ_0x4185e2.toObj(await YZ_0x4185e2.http.post(_0x1a5748).then(_0x2dc5c9 => _0x2dc5c9.body));
    for (let _0xd38362 in _0x1009b1) {
      _0x1009b1.hasOwnProperty(_0xd38362) && (YZ_0x4a3702[_0xd38362] = _0x1009b1[_0xd38362]);
    }
    YZ_0x4185e2.setval(YZ_0x4185e2.toStr(YZ_0x4a3702), "KuWo");
    YZ_0x4185e2.log("数据获取完成...");
    if (_0x1009b1.isVip) {
      let _0x4564f5 = new Date(YZ_0x4a3702.endTime),
        _0x102bb8 = _0x4564f5.getFullYear() + "-" + (_0x4564f5.getMonth() < 10 ? "0" + (_0x4564f5.getMonth() + 1) : _0x4564f5.getMonth() + 1) + "-" + (_0x4564f5.getDate() < 10 ? "0" + _0x4564f5.getDate() : _0x4564f5.getDate());
      YZ_0x4185e2.log("当前账户 " + _0x2535b5 + " 已授权\n授权有效期至：" + _0x102bb8);
      YZ_0x4185e2.msg("当前账户 " + _0x2535b5 + " 已授权", "", "授权有效期至：" + _0x102bb8);
    } else {
      YZ_0x4185e2.log("未能获取到当前账户 " + _0x2535b5 + " 的授权信息\n即将再次获取你的授权信息");
      YZ_0x4185e2.msg("未获取到授权信息", "", "请重启应用或点击本条通知获取授权码", {
        "open-url": "https://napi.ltd/authPay?action=kuwo",
        "media-url": "https://file.napi.ltd/Static/Image/KuWo.png"
      });
    }
  } else {
    YZ_0x4185e2.log("当前账户 " + _0x2535b5 + " 已授权\n祝使用愉快！");
  }
}
function YZ_0x42289f() {
  let _0x1be611 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    _0xfa3ad7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  this.encode = function (_0x30e656) {
    var _0x459379 = "";
    var _0x597836, _0x14712a, _0x450c7e, _0x33c25c, _0x18d58c, _0xa1002, _0x142503;
    var _0x463a7b = 0;
    _0x30e656 = _utf8_encode(_0x30e656);
    while (_0x463a7b < _0x30e656.length) {
      _0x597836 = _0x30e656.charCodeAt(_0x463a7b++);
      _0x14712a = _0x30e656.charCodeAt(_0x463a7b++);
      _0x450c7e = _0x30e656.charCodeAt(_0x463a7b++);
      _0x33c25c = _0x597836 >> 2;
      _0x18d58c = (_0x597836 & 3) << 4 | _0x14712a >> 4;
      _0xa1002 = (_0x14712a & 15) << 2 | _0x450c7e >> 6;
      _0x142503 = _0x450c7e & 63;
      if (isNaN(_0x14712a)) {
        _0xa1002 = _0x142503 = 64;
      } else {
        isNaN(_0x450c7e) && (_0x142503 = 64);
      }
      _0x459379 = _0x459379 + _0x1be611.charAt(_0x33c25c) + _0x1be611.charAt(_0x18d58c) + _0x1be611.charAt(_0xa1002) + _0x1be611.charAt(_0x142503);
    }
    return _0x459379;
  };
  this.decode = function (_0xe45085) {
    var _0x2b62e6 = "",
      _0x49c012,
      _0x21cb0a,
      _0x3d7e77,
      _0x4e63ee,
      _0x53bc28,
      _0x3975c4,
      _0x31e6e2,
      _0x22890e = 0;
    _0xe45085 = _0xe45085.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x22890e < _0xe45085.length) {
      _0x4e63ee = _0x1be611.indexOf(_0xe45085.charAt(_0x22890e++));
      _0x53bc28 = _0x1be611.indexOf(_0xe45085.charAt(_0x22890e++));
      _0x3975c4 = _0x1be611.indexOf(_0xe45085.charAt(_0x22890e++));
      _0x31e6e2 = _0x1be611.indexOf(_0xe45085.charAt(_0x22890e++));
      _0x49c012 = _0x4e63ee << 2 | _0x53bc28 >> 4;
      _0x21cb0a = (_0x53bc28 & 15) << 4 | _0x3975c4 >> 2;
      _0x3d7e77 = (_0x3975c4 & 3) << 6 | _0x31e6e2;
      _0x2b62e6 = _0x2b62e6 + String.fromCharCode(_0x49c012);
      _0x3975c4 != 64 && (_0x2b62e6 = _0x2b62e6 + String.fromCharCode(_0x21cb0a));
      if (_0x31e6e2 != 64) {
        _0x2b62e6 = _0x2b62e6 + String.fromCharCode(_0x3d7e77);
      }
    }
    _0x2b62e6 = _utf8_decode(_0x2b62e6);
    return _0x2b62e6;
  };
  this.ntoc = function (_0x1acb15) {
    radix = _0xfa3ad7.length;
    qutient = +_0x1acb15;
    arr = [];
    do {
      mod = qutient % radix;
      qutient = (qutient - mod) / radix;
      arr.unshift(_0x1be611[mod]);
    } while (qutient);
    return arr.join("");
  };
  this.cton = function (_0x2c12ca) {
    radix = _0xfa3ad7.length;
    _0x2c12ca = String(_0x2c12ca);
    len = _0x2c12ca.length;
    i = 0;
    origin_number = 0;
    while (i < len) {
      origin_number += Math.pow(radix, i++) * _0x1be611.indexOf(_0x2c12ca.charAt(len - i) || 0);
    }
    return origin_number;
  };
  this.randStr = function (_0x4c5c1b) {
    let _0x178a0c = "";
    for (let _0x1f7d6a = 0; _0x1f7d6a < _0x4c5c1b; _0x1f7d6a++) {
      let _0xd65972 = Math.floor(Math.random() * _0xfa3ad7.length);
      _0x178a0c += _0xfa3ad7[_0xd65972];
    }
    return _0x178a0c;
  };
  _utf8_encode = function (_0x34c35e) {
    _0x34c35e = _0x34c35e.replace(/\r\n/g, "\n");
    var _0x217eb4 = "";
    for (var _0x1b6087 = 0; _0x1b6087 < _0x34c35e.length; _0x1b6087++) {
      var _0x2bb208 = _0x34c35e.charCodeAt(_0x1b6087);
      if (_0x2bb208 < 128) {
        _0x217eb4 += String.fromCharCode(_0x2bb208);
      } else {
        _0x2bb208 > 127 && _0x2bb208 < 2048 ? (_0x217eb4 += String.fromCharCode(_0x2bb208 >> 6 | 192), _0x217eb4 += String.fromCharCode(_0x2bb208 & 63 | 128)) : (_0x217eb4 += String.fromCharCode(_0x2bb208 >> 12 | 224), _0x217eb4 += String.fromCharCode(_0x2bb208 >> 6 & 63 | 128), _0x217eb4 += String.fromCharCode(_0x2bb208 & 63 | 128));
      }
    }
    return _0x217eb4;
  };
  _utf8_decode = function (_0x548df9) {
    c1 = c2 = 0;
    var _0x403fe8 = "",
      _0x30bc61 = 0,
      _0x32b7f2 = c1;
    while (_0x30bc61 < _0x548df9.length) {
      _0x32b7f2 = _0x548df9.charCodeAt(_0x30bc61);
      if (_0x32b7f2 < 128) {
        _0x403fe8 += String.fromCharCode(_0x32b7f2);
        _0x30bc61++;
      } else {
        _0x32b7f2 > 191 && _0x32b7f2 < 224 ? (c2 = _0x548df9.charCodeAt(_0x30bc61 + 1), _0x403fe8 += String.fromCharCode((_0x32b7f2 & 31) << 6 | c2 & 63), _0x30bc61 += 2) : (c2 = _0x548df9.charCodeAt(_0x30bc61 + 1), c3 = _0x548df9.charCodeAt(_0x30bc61 + 2), _0x403fe8 += String.fromCharCode((_0x32b7f2 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x30bc61 += 3);
      }
    }
    return _0x403fe8;
  };
}
function YZ_0x1d5d88(_0x68c3ab, _0x40917e) {
  class _0xf44919 {
    constructor(_0x3cda0c) {
      this.env = _0x3cda0c;
    }
    send(_0x474b70, _0x43707c = "GET") {
      _0x474b70 = typeof _0x474b70 === "string" ? {
        url: _0x474b70
      } : _0x474b70;
      let _0xccbe1a = this.get;
      if (_0x43707c === "POST") {
        _0xccbe1a = this.post;
      }
      const _0x5149c7 = (_0x4ab522, _0x1124cd = 1000) => {
          return Promise.race([_0x4ab522, new Promise((_0xf0906b, _0x5dfa32) => {
            setTimeout(() => {
              _0x5dfa32(new Error("请求超时"));
            }, _0x1124cd);
          })]);
        },
        _0x557fd2 = new Promise((_0x12b661, _0xc80f9) => {
          _0xccbe1a.call(this, _0x474b70, (_0x54bbdf, _0x263365, _0x434c1c) => {
            if (_0x54bbdf) {
              _0xc80f9(_0x54bbdf);
            } else {
              _0x12b661(_0x263365);
            }
          });
        });
      return _0x474b70.timeout ? _0x5149c7(_0x557fd2, _0x474b70.timeout) : _0x557fd2;
    }
    get(_0x593c43) {
      return this.send.call(this.env, _0x593c43);
    }
    post(_0x252c0b) {
      return this.send.call(this.env, _0x252c0b, "POST");
    }
  }
  return new class {
    constructor(_0x436eb7, _0x4771fa) {
      const _0x37dfdf = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevels = _0x37dfdf;
      const _0x5bb943 = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevelPrefixs = _0x5bb943;
      this.logLevel = "info";
      this.name = _0x436eb7;
      this.http = new _0xf44919(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4771fa);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    getEnv() {
      if ("undefined" !== typeof $environment && $environment["surge-version"]) {
        return "Surge";
      }
      if ("undefined" !== typeof $environment && $environment["stash-version"]) {
        return "Stash";
      }
      if ("undefined" !== typeof module && !!module.exports) {
        return "Node.js";
      }
      if ("undefined" !== typeof $task) {
        return "Quantumult X";
      }
      if ("undefined" !== typeof $loon) {
        return "Loon";
      }
      if ("undefined" !== typeof $rocket) {
        return "Shadowrocket";
      }
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(_0x2bad6e, _0x2b590d = null) {
      try {
        return JSON.parse(_0x2bad6e);
      } catch {
        return _0x2b590d;
      }
    }
    toStr(_0xf2e8d3, _0x497898 = null, ..._0x5151d2) {
      try {
        return JSON.stringify(_0xf2e8d3, ..._0x5151d2);
      } catch {
        return _0x497898;
      }
    }
    getjson(_0xb75afe, _0x2ec1c5) {
      let _0x2d4061 = _0x2ec1c5;
      const _0xce032c = this.getdata(_0xb75afe);
      if (_0xce032c) {
        try {
          _0x2d4061 = JSON.parse(this.getdata(_0xb75afe));
        } catch {}
      }
      return _0x2d4061;
    }
    setjson(_0x572594, _0x471c6a) {
      try {
        return this.setdata(JSON.stringify(_0x572594), _0x471c6a);
      } catch {
        return false;
      }
    }
    getScript(_0x1b15f0) {
      return new Promise(_0x196885 => {
        const _0xd0a177 = {
          url: _0x1b15f0
        };
        this.get(_0xd0a177, (_0x33cbf7, _0x11abce, _0x278ae5) => _0x196885(_0x278ae5));
      });
    }
    runScript(_0x10d463, _0x235361) {
      return new Promise(_0x40afec => {
        let _0x364991 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x364991 = _0x364991 ? _0x364991.replace(/\n/g, "").trim() : _0x364991;
        let _0x37003b = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x37003b = _0x37003b ? _0x37003b * 1 : 20;
        _0x37003b = _0x235361 && _0x235361.timeout ? _0x235361.timeout : _0x37003b;
        const [_0x3f6d61, _0x3aa34c] = _0x364991.split("@"),
          _0xa27101 = {
            script_text: _0x10d463,
            mock_type: "cron",
            timeout: _0x37003b
          };
        const _0x337a5e = {
          "X-Key": _0x3f6d61,
          Accept: "*/*"
        };
        const _0x2d5e73 = {
          url: "http://" + _0x3aa34c + "/v1/scripting/evaluate",
          body: _0xa27101,
          headers: _0x337a5e,
          policy: "DIRECT",
          timeout: _0x37003b
        };
        this.post(_0x2d5e73, (_0x220182, _0x30e257, _0x57bcf8) => _0x40afec(_0x57bcf8));
      }).catch(_0x1f9811 => this.logErr(_0x1f9811));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x355b81 = this.path.resolve(this.dataFile),
          _0x49a2cd = this.path.resolve(process.cwd(), this.dataFile),
          _0x1b70b6 = this.fs.existsSync(_0x355b81),
          _0x44ba36 = !_0x1b70b6 && this.fs.existsSync(_0x49a2cd);
        if (_0x1b70b6 || _0x44ba36) {
          const _0x441bfa = _0x1b70b6 ? _0x355b81 : _0x49a2cd;
          try {
            return JSON.parse(this.fs.readFileSync(_0x441bfa));
          } catch (_0x1bf74e) {
            return {};
          }
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4fd320 = this.path.resolve(this.dataFile),
          _0x550246 = this.path.resolve(process.cwd(), this.dataFile),
          _0x3f7da7 = this.fs.existsSync(_0x4fd320),
          _0x1f9c12 = !_0x3f7da7 && this.fs.existsSync(_0x550246),
          _0x5750d3 = JSON.stringify(this.data);
        if (_0x3f7da7) {
          this.fs.writeFileSync(_0x4fd320, _0x5750d3);
        } else {
          _0x1f9c12 ? this.fs.writeFileSync(_0x550246, _0x5750d3) : this.fs.writeFileSync(_0x4fd320, _0x5750d3);
        }
      }
    }
    lodash_get(_0x59e912, _0x375931, _0x1ffab8 = undefined) {
      const _0x3bcd8a = _0x375931.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x4aa400 = _0x59e912;
      for (const _0x5b3aa4 of _0x3bcd8a) {
        _0x4aa400 = Object(_0x4aa400)[_0x5b3aa4];
        if (_0x4aa400 === undefined) {
          return _0x1ffab8;
        }
      }
      return _0x4aa400;
    }
    lodash_set(_0x438383, _0x631de6, _0xd4b2e2) {
      if (Object(_0x438383) !== _0x438383) {
        return _0x438383;
      }
      if (!Array.isArray(_0x631de6)) {
        _0x631de6 = _0x631de6.toString().match(/[^.[\]]+/g) || [];
      }
      _0x631de6.slice(0, -1).reduce((_0x4ca786, _0x4a8a58, _0x53d20f) => Object(_0x4ca786[_0x4a8a58]) === _0x4ca786[_0x4a8a58] ? _0x4ca786[_0x4a8a58] : _0x4ca786[_0x4a8a58] = Math.abs(_0x631de6[_0x53d20f + 1]) >> 0 === +_0x631de6[_0x53d20f + 1] ? [] : {}, _0x438383)[_0x631de6[_0x631de6.length - 1]] = _0xd4b2e2;
      return _0x438383;
    }
    getdata(_0x2aa98e) {
      let _0x31e250 = this.getval(_0x2aa98e);
      if (/^@/.test(_0x2aa98e)) {
        const [, _0x4712b1, _0x52d9ec] = /^@(.*?)\.(.*?)$/.exec(_0x2aa98e),
          _0x1ecfe8 = _0x4712b1 ? this.getval(_0x4712b1) : "";
        if (_0x1ecfe8) {
          try {
            const _0x3fca15 = JSON.parse(_0x1ecfe8);
            _0x31e250 = _0x3fca15 ? this.lodash_get(_0x3fca15, _0x52d9ec, "") : _0x31e250;
          } catch (_0x25af90) {
            _0x31e250 = "";
          }
        }
      }
      return _0x31e250;
    }
    setdata(_0x2494b2, _0x4ebd8b) {
      let _0x2d7f99 = false;
      if (/^@/.test(_0x4ebd8b)) {
        const [, _0x1e47ca, _0x5b8969] = /^@(.*?)\.(.*?)$/.exec(_0x4ebd8b),
          _0x560ab7 = this.getval(_0x1e47ca),
          _0x1f8281 = _0x1e47ca ? _0x560ab7 === "null" ? null : _0x560ab7 || "{}" : "{}";
        try {
          const _0x303b61 = JSON.parse(_0x1f8281);
          this.lodash_set(_0x303b61, _0x5b8969, _0x2494b2);
          _0x2d7f99 = this.setval(JSON.stringify(_0x303b61), _0x1e47ca);
        } catch (_0x7113f1) {
          const _0x4f8907 = {};
          this.lodash_set(_0x4f8907, _0x5b8969, _0x2494b2);
          _0x2d7f99 = this.setval(JSON.stringify(_0x4f8907), _0x1e47ca);
        }
      } else {
        _0x2d7f99 = this.setval(_0x2494b2, _0x4ebd8b);
      }
      return _0x2d7f99;
    }
    getval(_0x11fdd8) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x11fdd8);
        case "Quantumult X":
          return $prefs.valueForKey(_0x11fdd8);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x11fdd8];
        default:
          return this.data && this.data[_0x11fdd8] || null;
      }
    }
    setval(_0x43ca02, _0x448743) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x43ca02, _0x448743);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x43ca02, _0x448743);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x448743] = _0x43ca02;
          this.writedata();
          return true;
        default:
          return this.data && this.data[_0x448743] || null;
      }
    }
    initGotEnv(_0x477190) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x477190 && (_0x477190.headers = _0x477190.headers ? _0x477190.headers : {}, _0x477190 && (_0x477190.headers = _0x477190.headers ? _0x477190.headers : {}, undefined === _0x477190.headers.cookie && undefined === _0x477190.headers.Cookie && undefined === _0x477190.cookieJar && (_0x477190.cookieJar = this.ckjar)));
    }
    get(_0x222e35, _0x4fd855 = () => {}) {
      if (_0x222e35.headers) {
        delete _0x222e35.headers["Content-Type"];
        delete _0x222e35.headers["Content-Length"];
        delete _0x222e35.headers["content-type"];
        delete _0x222e35.headers["content-length"];
      }
      _0x222e35.params && (_0x222e35.url += "?" + this.queryStr(_0x222e35.params));
      if (typeof _0x222e35.followRedirect !== "undefined" && !_0x222e35.followRedirect) {
        if (this.isSurge() || this.isLoon()) {
          _0x222e35["auto-redirect"] = false;
        }
        const _0x2e52e4 = {
          redirection: false
        };
        if (this.isQuanX()) {
          _0x222e35.opts ? _0x222e35.opts.redirection = false : _0x222e35.opts = _0x2e52e4;
        }
      }
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          if (this.isSurge() && this.isNeedRewrite) {
            _0x222e35.headers = _0x222e35.headers || {};
            const _0x59f20a = {
              "X-Surge-Skip-Scripting": false
            };
            Object.assign(_0x222e35.headers, _0x59f20a);
          }
          $httpClient.get(_0x222e35, (_0x115b5d, _0x395949, _0x15a587) => {
            !_0x115b5d && _0x395949 && (_0x395949.body = _0x15a587, _0x395949.statusCode = _0x395949.status ? _0x395949.status : _0x395949.statusCode, _0x395949.status = _0x395949.statusCode);
            _0x4fd855(_0x115b5d, _0x395949, _0x15a587);
          });
          break;
        case "Quantumult X":
          if (this.isNeedRewrite) {
            _0x222e35.opts = _0x222e35.opts || {};
            const _0x1ae0d3 = {
              hints: false
            };
            Object.assign(_0x222e35.opts, _0x1ae0d3);
          }
          $task.fetch(_0x222e35).then(_0x548cf6 => {
            const {
                statusCode: _0xb28b4c,
                statusCode: _0x40fc30,
                headers: _0x4d98c9,
                body: _0x53082e,
                bodyBytes: _0x52d0e5
              } = _0x548cf6,
              _0x429d26 = {
                status: _0xb28b4c,
                statusCode: _0x40fc30,
                headers: _0x4d98c9,
                body: _0x53082e,
                bodyBytes: _0x52d0e5
              };
            _0x4fd855(null, _0x429d26, _0x53082e, _0x52d0e5);
          }, _0x10a82e => _0x4fd855(_0x10a82e && _0x10a82e.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x56560e = require("iconv-lite");
          this.initGotEnv(_0x222e35);
          this.got(_0x222e35).on("redirect", (_0x4fa330, _0x50cf0e) => {
            try {
              if (_0x4fa330.headers["set-cookie"]) {
                const _0x22059d = _0x4fa330.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x22059d && this.ckjar.setCookieSync(_0x22059d, null);
                _0x50cf0e.cookieJar = this.ckjar;
              }
            } catch (_0x545215) {
              this.logErr(_0x545215);
            }
          }).then(_0x364aa2 => {
            const {
                statusCode: _0x3e1cbb,
                statusCode: _0x45b8da,
                headers: _0x22dd44,
                rawBody: _0x5446df
              } = _0x364aa2,
              _0x292810 = _0x56560e.decode(_0x5446df, this.encoding),
              _0x527797 = {
                status: _0x3e1cbb,
                statusCode: _0x45b8da,
                headers: _0x22dd44,
                rawBody: _0x5446df,
                body: _0x292810
              };
            _0x4fd855(null, _0x527797, _0x292810);
          }, _0x5d300e => {
            const {
              message: _0x598f4e,
              response: _0x2c73f4
            } = _0x5d300e;
            _0x4fd855(_0x598f4e, _0x2c73f4, _0x2c73f4 && _0x56560e.decode(_0x2c73f4.rawBody, this.encoding));
          });
          break;
      }
    }
    post(_0x13487a, _0x3bee46 = () => {}) {
      const _0x11274c = _0x13487a.method ? _0x13487a.method.toLocaleLowerCase() : "post";
      _0x13487a.body && _0x13487a.headers && !_0x13487a.headers["Content-Type"] && !_0x13487a.headers["content-type"] && (_0x13487a.headers["content-type"] = "application/x-www-form-urlencoded");
      _0x13487a.headers && (delete _0x13487a.headers["Content-Length"], delete _0x13487a.headers["content-length"]);
      if (typeof _0x13487a.followRedirect !== "undefined" && !_0x13487a.followRedirect) {
        if (this.isSurge() || this.isLoon()) {
          _0x13487a["auto-redirect"] = false;
        }
        const _0x3b14de = {
          redirection: false
        };
        if (this.isQuanX()) {
          _0x13487a.opts ? _0x13487a.opts.redirection = false : _0x13487a.opts = _0x3b14de;
        }
      }
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          if (this.isSurge() && this.isNeedRewrite) {
            _0x13487a.headers = _0x13487a.headers || {};
            const _0x4b2364 = {
              "X-Surge-Skip-Scripting": false
            };
            Object.assign(_0x13487a.headers, _0x4b2364);
          }
          $httpClient[_0x11274c](_0x13487a, (_0x4c65a6, _0xd28646, _0x3117e7) => {
            !_0x4c65a6 && _0xd28646 && (_0xd28646.body = _0x3117e7, _0xd28646.statusCode = _0xd28646.status ? _0xd28646.status : _0xd28646.statusCode, _0xd28646.status = _0xd28646.statusCode);
            _0x3bee46(_0x4c65a6, _0xd28646, _0x3117e7);
          });
          break;
        case "Quantumult X":
          _0x13487a.method = _0x11274c;
          if (this.isNeedRewrite) {
            _0x13487a.opts = _0x13487a.opts || {};
            const _0x71182f = {
              hints: false
            };
            Object.assign(_0x13487a.opts, _0x71182f);
          }
          $task.fetch(_0x13487a).then(_0x35dd42 => {
            const {
                statusCode: _0x3d8240,
                statusCode: _0x3f569b,
                headers: _0x16eb4c,
                body: _0x50d341,
                bodyBytes: _0x5c844a
              } = _0x35dd42,
              _0x4d150f = {
                status: _0x3d8240,
                statusCode: _0x3f569b,
                headers: _0x16eb4c,
                body: _0x50d341,
                bodyBytes: _0x5c844a
              };
            _0x3bee46(null, _0x4d150f, _0x50d341, _0x5c844a);
          }, _0xd9222c => _0x3bee46(_0xd9222c && _0xd9222c.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x48583c = require("iconv-lite");
          this.initGotEnv(_0x13487a);
          const {
            url: _0x46e23d,
            ..._0x46427c
          } = _0x13487a;
          this.got[_0x11274c](_0x46e23d, _0x46427c).then(_0x300b49 => {
            const {
                statusCode: _0x157fad,
                statusCode: _0x2e8b83,
                headers: _0x3513fb,
                rawBody: _0x1f5052
              } = _0x300b49,
              _0x476fac = _0x48583c.decode(_0x1f5052, this.encoding),
              _0x4152c5 = {
                status: _0x157fad,
                statusCode: _0x2e8b83,
                headers: _0x3513fb,
                rawBody: _0x1f5052,
                body: _0x476fac
              };
            _0x3bee46(null, _0x4152c5, _0x476fac);
          }, _0xcbd4c3 => {
            const {
              message: _0x4d3544,
              response: _0xfd83fb
            } = _0xcbd4c3;
            _0x3bee46(_0x4d3544, _0xfd83fb, _0xfd83fb && _0x48583c.decode(_0xfd83fb.rawBody, this.encoding));
          });
          break;
      }
    }
    time(_0x35f909, _0x355f5c = null) {
      const _0x85ed52 = _0x355f5c ? new Date(_0x355f5c) : new Date(),
        _0x3547c7 = {
          "M+": _0x85ed52.getMonth() + 1,
          "d+": _0x85ed52.getDate(),
          "H+": _0x85ed52.getHours(),
          "m+": _0x85ed52.getMinutes(),
          "s+": _0x85ed52.getSeconds(),
          "q+": Math.floor((_0x85ed52.getMonth() + 3) / 3),
          S: _0x85ed52.getMilliseconds()
        };
      if (/(y+)/.test(_0x35f909)) {
        _0x35f909 = _0x35f909.replace(RegExp.$1, (_0x85ed52.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x2ba482 in _0x3547c7) if (new RegExp("(" + _0x2ba482 + ")").test(_0x35f909)) {
        _0x35f909 = _0x35f909.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x3547c7[_0x2ba482] : ("00" + _0x3547c7[_0x2ba482]).substr(("" + _0x3547c7[_0x2ba482]).length));
      }
      return _0x35f909;
    }
    queryStr(_0xa73ae) {
      let _0x564945 = "";
      for (const _0x4ac5e8 in _0xa73ae) {
        let _0x3054c4 = _0xa73ae[_0x4ac5e8];
        _0x3054c4 != null && _0x3054c4 !== "" && (typeof _0x3054c4 === "object" && (_0x3054c4 = JSON.stringify(_0x3054c4)), _0x564945 += _0x4ac5e8 + "=" + _0x3054c4 + "&");
      }
      _0x564945 = _0x564945.substring(0, _0x564945.length - 1);
      return _0x564945;
    }
    msg(_0x137228 = _0x68c3ab, _0x5a91c5 = "", _0x776441 = "", _0x4a0ba3 = {}) {
      const _0x5a1038 = _0x4007f9 => {
        const {
          $open: _0x469941,
          $copy: _0x14cb9a,
          $media: _0x1a46dd,
          $mediaMime: _0x45c771
        } = _0x4007f9;
        switch (typeof _0x4007f9) {
          case undefined:
            return _0x4007f9;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const _0x4cfbfd = {
                  url: _0x4007f9
                };
                return _0x4cfbfd;
              case "Loon":
              case "Shadowrocket":
                return _0x4007f9;
              case "Quantumult X":
                const _0x2c7150 = {
                  "open-url": _0x4007f9
                };
                return _0x2c7150;
              case "Node.js":
                return undefined;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const _0x2db238 = {};
                  let _0x50606a = _0x4007f9.openUrl || _0x4007f9.url || _0x4007f9["open-url"] || _0x469941;
                  if (_0x50606a) {
                    Object.assign(_0x2db238, {
                      action: "open-url",
                      url: _0x50606a
                    });
                  }
                  let _0x3abb4c = _0x4007f9["update-pasteboard"] || _0x4007f9.updatePasteboard || _0x14cb9a;
                  if (_0x3abb4c) {
                    const _0x2a736e = {
                      action: "clipboard",
                      text: _0x3abb4c
                    };
                    Object.assign(_0x2db238, _0x2a736e);
                  }
                  if (_0x1a46dd) {
                    let _0x521393 = undefined,
                      _0x1b5fdf = undefined,
                      _0x247514 = undefined;
                    if (_0x1a46dd.startsWith("http")) {
                      _0x521393 = _0x1a46dd;
                    } else {
                      if (_0x1a46dd.startsWith("data:")) {
                        const [_0x89b291] = _0x1a46dd.split(";"),
                          [, _0x5ca8b2] = _0x1a46dd.split(",");
                        _0x1b5fdf = _0x5ca8b2;
                        _0x247514 = _0x89b291.replace("data:", "");
                      } else {
                        const _0x47c0fe = _0x5d29eb => {
                          const _0x1473f0 = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var _0x182dc4 in _0x1473f0) {
                            if (_0x5d29eb.indexOf(_0x182dc4) === 0) {
                              return _0x1473f0[_0x182dc4];
                            }
                          }
                          return null;
                        };
                        _0x1b5fdf = _0x1a46dd;
                        _0x247514 = _0x47c0fe(_0x1a46dd);
                      }
                    }
                    const _0x3f7931 = {
                      "media-url": _0x521393,
                      "media-base64": _0x1b5fdf,
                      "media-base64-mime": _0x45c771 ?? _0x247514
                    };
                    Object.assign(_0x2db238, _0x3f7931);
                  }
                  const _0x2a5c96 = {
                    "auto-dismiss": _0x4007f9["auto-dismiss"],
                    sound: _0x4007f9.sound
                  };
                  Object.assign(_0x2db238, _0x2a5c96);
                  return _0x2db238;
                }
              case "Loon":
                {
                  const _0x2c39ff = {};
                  let _0x4643d0 = _0x4007f9.openUrl || _0x4007f9.url || _0x4007f9["open-url"] || _0x469941;
                  if (_0x4643d0) {
                    Object.assign(_0x2c39ff, {
                      openUrl: _0x4643d0
                    });
                  }
                  let _0x5edccf = _0x4007f9.mediaUrl || _0x4007f9["media-url"];
                  if (_0x1a46dd?.["startsWith"]("http")) {
                    _0x5edccf = _0x1a46dd;
                  }
                  if (_0x5edccf) {
                    Object.assign(_0x2c39ff, {
                      mediaUrl: _0x5edccf
                    });
                  }
                  console.log(JSON.stringify(_0x2c39ff));
                  return _0x2c39ff;
                }
              case "Quantumult X":
                {
                  const _0x37971c = {};
                  let _0x55ea54 = _0x4007f9["open-url"] || _0x4007f9.url || _0x4007f9.openUrl || _0x469941;
                  if (_0x55ea54) {
                    Object.assign(_0x37971c, {
                      "open-url": _0x55ea54
                    });
                  }
                  let _0x3c0077 = _0x4007f9["media-url"] || _0x4007f9.mediaUrl;
                  if (_0x1a46dd?.["startsWith"]("http")) {
                    _0x3c0077 = _0x1a46dd;
                  }
                  if (_0x3c0077) {
                    Object.assign(_0x37971c, {
                      "media-url": _0x3c0077
                    });
                  }
                  let _0x12a0cf = _0x4007f9["update-pasteboard"] || _0x4007f9.updatePasteboard || _0x14cb9a;
                  if (_0x12a0cf) {
                    Object.assign(_0x37971c, {
                      "update-pasteboard": _0x12a0cf
                    });
                  }
                  console.log(JSON.stringify(_0x37971c));
                  return _0x37971c;
                }
              case "Node.js":
                return undefined;
            }
          default:
            return undefined;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(_0x137228, _0x5a91c5, _0x776441, _0x5a1038(_0x4a0ba3));
            break;
          case "Quantumult X":
            $notify(_0x137228, _0x5a91c5, _0x776441, _0x5a1038(_0x4a0ba3));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let _0x1c35ce = ["", "==============📣系统通知📣=============="];
        _0x1c35ce.push(_0x137228);
        _0x5a91c5 ? _0x1c35ce.push(_0x5a91c5) : "";
        _0x776441 ? _0x1c35ce.push(_0x776441) : "";
        console.log(_0x1c35ce.join("\n"));
        this.logs = this.logs.concat(_0x1c35ce);
      }
    }
    debug(..._0x53bc68) {
      if (this.logLevels[this.logLevel] <= this.logLevels.debug) {
        _0x53bc68.length > 0 && (this.logs = [...this.logs, ..._0x53bc68]);
        console.log("" + this.logLevelPrefixs.debug + _0x53bc68.map(_0x1d68f6 => _0x1d68f6 ?? String(_0x1d68f6)).join(this.logSeparator));
      }
    }
    info(..._0x155d8a) {
      if (this.logLevels[this.logLevel] <= this.logLevels.info) {
        if (_0x155d8a.length > 0) {
          this.logs = [...this.logs, ..._0x155d8a];
        }
        console.log("" + this.logLevelPrefixs.info + _0x155d8a.map(_0x2c6250 => _0x2c6250 ?? String(_0x2c6250)).join(this.logSeparator));
      }
    }
    warn(..._0x118622) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (_0x118622.length > 0 && (this.logs = [...this.logs, ..._0x118622]), console.log("" + this.logLevelPrefixs.warn + _0x118622.map(_0x4855ef => _0x4855ef ?? String(_0x4855ef)).join(this.logSeparator)));
    }
    error(..._0x5b9d3d) {
      if (this.logLevels[this.logLevel] <= this.logLevels.error) {
        _0x5b9d3d.length > 0 && (this.logs = [...this.logs, ..._0x5b9d3d]);
        console.log("" + this.logLevelPrefixs.error + _0x5b9d3d.map(_0x1516ba => _0x1516ba ?? String(_0x1516ba)).join(this.logSeparator));
      }
    }
    log(..._0x36cef4) {
      _0x36cef4.length > 0 && (this.logs = [...this.logs, ..._0x36cef4]);
      console.log(_0x36cef4.map(_0x21cf23 => _0x21cf23 ?? String(_0x21cf23)).join(this.logSeparator));
    }
    logErr(_0x3242d7, _0xa92cbe) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0xa92cbe, _0x3242d7);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0xa92cbe, typeof _0x3242d7.message !== "undefined" ? _0x3242d7.message : _0x3242d7, _0x3242d7.stack);
          break;
      }
    }
    wait(_0x230fbd) {
      return new Promise(_0x40e984 => setTimeout(_0x40e984, _0x230fbd));
    }
    done(_0x542563 = {}) {
      const _0x12a876 = new Date().getTime(),
        _0x52fd5f = (_0x12a876 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x52fd5f + " 秒");
      this.log();
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x542563);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x68c3ab, _0x40917e);
}