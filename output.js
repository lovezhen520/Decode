//8/2/2024, 11:51:29 PM
//Author:https://github.com/lck7
const $ = new Env("霸王茶姬"),
  axios = require("axios"),
  {
    sendNotify
  } = require("./sendNotify");
let notifyStr = "",
  appid = atob("d3hhZmVjNmY4NDIyY2IzNTdi");
(async () => {
  const _0x33d108 = process.env.bwcj_ck;
  if (!_0x33d108) {
    logAndNotify("bwcj_ck不存在");
    return;
  }
  let _0x2a4c06 = _0x33d108.replaceAll("&", "\n").split("\n");
  for (let _0x4c5b6d = 0; _0x4c5b6d < _0x2a4c06.length; _0x4c5b6d++) {
    const _0x551514 = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x2a4c06[_0x4c5b6d]);
    if (!_0x551514.data.status) {
      logAndNotify("账号【" + (_0x4c5b6d + 1) + "】 登录失败");
      continue;
    }
    const _0x521972 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userSignStatistics", _0x2a4c06[_0x4c5b6d], {
      activityId: "947079313798000641",
      appid: appid
    });
    _0x521972.data.status && _0x521972.data.data.signStatus == 1 && logAndNotify("账号【" + (_0x4c5b6d + 1) + "】 签到成功 连续签到" + _0x521972.data.data.signDays + "天");
    const _0x566fba = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x2a4c06[_0x4c5b6d]);
    _0x566fba.data.status && logAndNotify("账号【" + (_0x4c5b6d + 1) + "】 积分：【" + _0x566fba.data.data.customerAssertInfo.integral + "】");
    const _0x2d0301 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userReward", _0x2a4c06[_0x4c5b6d], {
      activityId: "947079313798000641",
      appid: appid,
      pageNo: 1,
      pageSize: 30
    });
    if (_0x2d0301.data.status) {
      const _0xd0314e = _0x2d0301.data.data.list;
      for (let _0x29c254 = 0; _0x29c254 < _0xd0314e.length; _0x29c254++) {
        _0xd0314e[_0x29c254].rewardType === 1 && logAndNotify("账号【" + (_0x4c5b6d + 1) + "】 奖品领取时间【" + _0xd0314e[_0x29c254].date + "】【" + _0xd0314e[_0x29c254].rewardName + "】");
      }
    }
  }
})().catch(_0x349316 => {
  logAndNotify(_0x349316);
}).finally(() => {
  sendNotify("霸王茶姬", notifyStr);
  $.done();
});
function sendPostRequest(_0x1c7663, _0x518550, _0x528e8a) {
  const _0xe02ad1 = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-User-Token": "Rh04KAYDEaKbwudXc4e07Hkxm-dTiq9E8c42AXW4e-VXV7Vw9FPYkL9hHzo3MlD2",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x19d36d = {
      ..._0xe02ad1,
      ...{
        "Qm-User-Token": _0x518550
      }
    },
    _0x4cb330 = axios.create({
      headers: _0x19d36d
    });
  return _0x4cb330.post(_0x1c7663, _0x528e8a);
}
function sendGetRequest(_0x4d335a, _0x6b0d76) {
  const _0x5d1726 = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-User-Token": "Rh04KAYDEaKbwudXc4e07Hkxm-dTiq9E8c42AXW4e-VXV7Vw9FPYkL9hHzo3MlD2",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x33b32d = {
      ..._0x5d1726,
      ...{
        "Qm-User-Token": _0x6b0d76
      }
    },
    _0x34424b = axios.create({
      headers: _0x33b32d
    });
  return _0x34424b.get(_0x4d335a);
}
function logAndNotify(_0x1c24a1) {
  1;
  $.log(_0x1c24a1);
  notifyStr += _0x1c24a1;
  notifyStr += "\n";
}
function Env(_0x1ee8c5, _0x2b9921) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x51f04d {
    constructor(_0x20d331) {
      this.env = _0x20d331;
    }
    send(_0x1f0782, _0x38d733 = "GET") {
      _0x1f0782 = "string" == typeof _0x1f0782 ? {
        url: _0x1f0782
      } : _0x1f0782;
      let _0x1db679 = this.get;
      "POST" === _0x38d733 && (_0x1db679 = this.post);
      return new Promise((_0x5c8f71, _0xafeedc) => {
        _0x1db679.call(this, _0x1f0782, (_0x57507b, _0x22dd43, _0x477ce1) => {
          _0x57507b ? _0xafeedc(_0x57507b) : _0x5c8f71(_0x22dd43);
        });
      });
    }
    get(_0x83cbc9) {
      return this.send.call(this.env, _0x83cbc9);
    }
    post(_0x137f0c) {
      return this.send.call(this.env, _0x137f0c, "POST");
    }
  }
  return new class {
    constructor(_0x5d7296, _0x156b8d) {
      this.name = _0x5d7296;
      this.http = new _0x51f04d(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x156b8d);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x3bb310, _0xe8ed52 = null) {
      try {
        return JSON.parse(_0x3bb310);
      } catch {
        return _0xe8ed52;
      }
    }
    toStr(_0x117af7, _0x21b004 = null) {
      try {
        return JSON.stringify(_0x117af7);
      } catch {
        return _0x21b004;
      }
    }
    getjson(_0x213dd9, _0x32b73f) {
      let _0x573f78 = _0x32b73f;
      const _0x5343fc = this.getdata(_0x213dd9);
      if (_0x5343fc) {
        try {
          _0x573f78 = JSON.parse(this.getdata(_0x213dd9));
        } catch {}
      }
      return _0x573f78;
    }
    setjson(_0x4da5b4, _0x3f1524) {
      try {
        return this.setdata(JSON.stringify(_0x4da5b4), _0x3f1524);
      } catch {
        return !1;
      }
    }
    getScript(_0x33a116) {
      return new Promise(_0x51ce42 => {
        this.get({
          url: _0x33a116
        }, (_0x28048d, _0xab552f, _0x428d58) => _0x51ce42(_0x428d58));
      });
    }
    runScript(_0x1a0b53, _0x7e9cf8) {
      return new Promise(_0x189242 => {
        let _0x4c3054 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4c3054 = _0x4c3054 ? _0x4c3054.replace(/\n/g, "").trim() : _0x4c3054;
        let _0x3d3a47 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x3d3a47 = _0x3d3a47 ? 1 * _0x3d3a47 : 20;
        _0x3d3a47 = _0x7e9cf8 && _0x7e9cf8.timeout ? _0x7e9cf8.timeout : _0x3d3a47;
        const [_0x40a568, _0x4bd7df] = _0x4c3054.split("@"),
          _0x21c3ff = {
            url: "http://" + _0x4bd7df + "/v1/scripting/evaluate",
            body: {
              script_text: _0x1a0b53,
              mock_type: "cron",
              timeout: _0x3d3a47
            },
            headers: {
              "X-Key": _0x40a568,
              Accept: "*/*"
            }
          };
        this.post(_0x21c3ff, (_0x1dd3c3, _0x19cf2e, _0x211c95) => _0x189242(_0x211c95));
      }).catch(_0x20b7ea => this.logErr(_0x20b7ea));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3221eb = this.path.resolve(this.dataFile),
          _0x527119 = this.path.resolve(process.cwd(), this.dataFile),
          _0x3d167b = this.fs.existsSync(_0x3221eb),
          _0x1152de = !_0x3d167b && this.fs.existsSync(_0x527119);
        if (!_0x3d167b && !_0x1152de) {
          return {};
        }
        {
          const _0x4ecbd6 = _0x3d167b ? _0x3221eb : _0x527119;
          try {
            return JSON.parse(this.fs.readFileSync(_0x4ecbd6));
          } catch (_0x52740b) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1f548c = this.path.resolve(this.dataFile),
          _0xd06c0b = this.path.resolve(process.cwd(), this.dataFile),
          _0x393d24 = this.fs.existsSync(_0x1f548c),
          _0x585b84 = !_0x393d24 && this.fs.existsSync(_0xd06c0b),
          _0x4212f8 = JSON.stringify(this.data);
        _0x393d24 ? this.fs.writeFileSync(_0x1f548c, _0x4212f8) : _0x585b84 ? this.fs.writeFileSync(_0xd06c0b, _0x4212f8) : this.fs.writeFileSync(_0x1f548c, _0x4212f8);
      }
    }
    lodash_get(_0x57c84f, _0x3f0668, _0x5d1321) {
      const _0x4d937a = _0x3f0668.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x157e60 = _0x57c84f;
      for (const _0x6d6022 of _0x4d937a) if (_0x157e60 = Object(_0x157e60)[_0x6d6022], void 0 === _0x157e60) {
        return _0x5d1321;
      }
      return _0x157e60;
    }
    lodash_set(_0xb4c8c6, _0x5aab4c, _0x2a5a94) {
      return Object(_0xb4c8c6) !== _0xb4c8c6 ? _0xb4c8c6 : (Array.isArray(_0x5aab4c) || (_0x5aab4c = _0x5aab4c.toString().match(/[^.[\]]+/g) || []), _0x5aab4c.slice(0, -1).reduce((_0x45ffc4, _0x169669, _0x40adda) => Object(_0x45ffc4[_0x169669]) === _0x45ffc4[_0x169669] ? _0x45ffc4[_0x169669] : _0x45ffc4[_0x169669] = Math.abs(_0x5aab4c[_0x40adda + 1]) >> 0 == +_0x5aab4c[_0x40adda + 1] ? [] : {}, _0xb4c8c6)[_0x5aab4c[_0x5aab4c.length - 1]] = _0x2a5a94, _0xb4c8c6);
    }
    getdata(_0x1a15e0) {
      let _0x574352 = this.getval(_0x1a15e0);
      if (/^@/.test(_0x1a15e0)) {
        const [, _0x522dfa, _0x1bb0c4] = /^@(.*?)\.(.*?)$/.exec(_0x1a15e0),
          _0x3946bb = _0x522dfa ? this.getval(_0x522dfa) : "";
        if (_0x3946bb) {
          try {
            const _0x3fed38 = JSON.parse(_0x3946bb);
            _0x574352 = _0x3fed38 ? this.lodash_get(_0x3fed38, _0x1bb0c4, "") : _0x574352;
          } catch (_0x6fe2e5) {
            _0x574352 = "";
          }
        }
      }
      return _0x574352;
    }
    setdata(_0x2aba50, _0x289cb2) {
      let _0x31b637 = !1;
      if (/^@/.test(_0x289cb2)) {
        const [, _0x1a4658, _0x18e8f9] = /^@(.*?)\.(.*?)$/.exec(_0x289cb2),
          _0x3cb8de = this.getval(_0x1a4658),
          _0x5c456f = _0x1a4658 ? "null" === _0x3cb8de ? null : _0x3cb8de || "{}" : "{}";
        try {
          const _0x1c2fef = JSON.parse(_0x5c456f);
          this.lodash_set(_0x1c2fef, _0x18e8f9, _0x2aba50);
          _0x31b637 = this.setval(JSON.stringify(_0x1c2fef), _0x1a4658);
        } catch (_0x2fb4f3) {
          const _0x454a2f = {};
          this.lodash_set(_0x454a2f, _0x18e8f9, _0x2aba50);
          _0x31b637 = this.setval(JSON.stringify(_0x454a2f), _0x1a4658);
        }
      } else {
        _0x31b637 = this.setval(_0x2aba50, _0x289cb2);
      }
      return _0x31b637;
    }
    getval(_0x18b584) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x18b584) : this.isQuanX() ? $prefs.valueForKey(_0x18b584) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x18b584]) : this.data && this.data[_0x18b584] || null;
    }
    setval(_0x1b5361, _0x205db3) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x1b5361, _0x205db3) : this.isQuanX() ? $prefs.setValueForKey(_0x1b5361, _0x205db3) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x205db3] = _0x1b5361, this.writedata(), !0) : this.data && this.data[_0x205db3] || null;
    }
    initGotEnv(_0x48d7bc) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x48d7bc && (_0x48d7bc.headers = _0x48d7bc.headers ? _0x48d7bc.headers : {}, void 0 === _0x48d7bc.headers.Cookie && void 0 === _0x48d7bc.cookieJar && (_0x48d7bc.cookieJar = this.ckjar));
    }
    get(_0x30518a, _0x19b0e3 = () => {}) {
      _0x30518a.headers && (delete _0x30518a.headers["Content-Type"], delete _0x30518a.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x30518a.headers = _0x30518a.headers || {}, Object.assign(_0x30518a.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x30518a, (_0x24b6d6, _0x3f5d3a, _0x2c61b1) => {
        !_0x24b6d6 && _0x3f5d3a && (_0x3f5d3a.body = _0x2c61b1, _0x3f5d3a.statusCode = _0x3f5d3a.status);
        _0x19b0e3(_0x24b6d6, _0x3f5d3a, _0x2c61b1);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x30518a.opts = _0x30518a.opts || {}, Object.assign(_0x30518a.opts, {
        hints: !1
      })), $task.fetch(_0x30518a).then(_0xd5c2c8 => {
        const {
          statusCode: _0x602884,
          statusCode: _0x361e68,
          headers: _0xf37eba,
          body: _0x52c611
        } = _0xd5c2c8;
        _0x19b0e3(null, {
          status: _0x602884,
          statusCode: _0x361e68,
          headers: _0xf37eba,
          body: _0x52c611
        }, _0x52c611);
      }, _0x145174 => _0x19b0e3(_0x145174))) : this.isNode() && (this.initGotEnv(_0x30518a), this.got(_0x30518a).on("redirect", (_0x267c3f, _0x4889de) => {
        try {
          if (_0x267c3f.headers["set-cookie"]) {
            const _0xb4b211 = _0x267c3f.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0xb4b211 && this.ckjar.setCookieSync(_0xb4b211, null);
            _0x4889de.cookieJar = this.ckjar;
          }
        } catch (_0x3def6e) {
          this.logErr(_0x3def6e);
        }
      }).then(_0x821aa9 => {
        const {
          statusCode: _0x552539,
          statusCode: _0x5a9835,
          headers: _0x4f5da4,
          body: _0x2e77ab
        } = _0x821aa9;
        _0x19b0e3(null, {
          status: _0x552539,
          statusCode: _0x5a9835,
          headers: _0x4f5da4,
          body: _0x2e77ab
        }, _0x2e77ab);
      }, _0x5a747f => {
        const {
          message: _0x394367,
          response: _0x4a1017
        } = _0x5a747f;
        _0x19b0e3(_0x394367, _0x4a1017, _0x4a1017 && _0x4a1017.body);
      }));
    }
    post(_0x285ef4, _0x4ca2b3 = () => {}) {
      if (_0x285ef4.body && _0x285ef4.headers && !_0x285ef4.headers["Content-Type"] && (_0x285ef4.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x285ef4.headers && delete _0x285ef4.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x285ef4.headers = _0x285ef4.headers || {}, Object.assign(_0x285ef4.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x285ef4, (_0x2c6ca2, _0x295f0c, _0x4b707a) => {
          !_0x2c6ca2 && _0x295f0c && (_0x295f0c.body = _0x4b707a, _0x295f0c.statusCode = _0x295f0c.status);
          _0x4ca2b3(_0x2c6ca2, _0x295f0c, _0x4b707a);
        });
      } else {
        if (this.isQuanX()) {
          _0x285ef4.method = "POST";
          this.isNeedRewrite && (_0x285ef4.opts = _0x285ef4.opts || {}, Object.assign(_0x285ef4.opts, {
            hints: !1
          }));
          $task.fetch(_0x285ef4).then(_0x352ba7 => {
            const {
              statusCode: _0xe5b035,
              statusCode: _0x177994,
              headers: _0xeefa3e,
              body: _0x1cc0a4
            } = _0x352ba7;
            _0x4ca2b3(null, {
              status: _0xe5b035,
              statusCode: _0x177994,
              headers: _0xeefa3e,
              body: _0x1cc0a4
            }, _0x1cc0a4);
          }, _0x560528 => _0x4ca2b3(_0x560528));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x285ef4);
            const {
              url: _0x4f7003,
              ..._0x98d409
            } = _0x285ef4;
            this.got.post(_0x4f7003, _0x98d409).then(_0x3035fc => {
              const {
                statusCode: _0x52fee7,
                statusCode: _0x584aff,
                headers: _0x5b8e2b,
                body: _0x5ed440
              } = _0x3035fc;
              _0x4ca2b3(null, {
                status: _0x52fee7,
                statusCode: _0x584aff,
                headers: _0x5b8e2b,
                body: _0x5ed440
              }, _0x5ed440);
            }, _0xa74fd1 => {
              const {
                message: _0x29ef75,
                response: _0x306d43
              } = _0xa74fd1;
              _0x4ca2b3(_0x29ef75, _0x306d43, _0x306d43 && _0x306d43.body);
            });
          }
        }
      }
    }
    time(_0x411693, _0x1a0c8f = null) {
      const _0x1baa5b = _0x1a0c8f ? new Date(_0x1a0c8f) : new Date();
      let _0x187cf8 = {
        "M+": _0x1baa5b.getMonth() + 1,
        "d+": _0x1baa5b.getDate(),
        "H+": _0x1baa5b.getHours(),
        "m+": _0x1baa5b.getMinutes(),
        "s+": _0x1baa5b.getSeconds(),
        "q+": Math.floor((_0x1baa5b.getMonth() + 3) / 3),
        S: _0x1baa5b.getMilliseconds()
      };
      /(y+)/.test(_0x411693) && (_0x411693 = _0x411693.replace(RegExp.$1, (_0x1baa5b.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3d3804 in _0x187cf8) new RegExp("(" + _0x3d3804 + ")").test(_0x411693) && (_0x411693 = _0x411693.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x187cf8[_0x3d3804] : ("00" + _0x187cf8[_0x3d3804]).substr(("" + _0x187cf8[_0x3d3804]).length)));
      return _0x411693;
    }
    msg(_0x4d8701 = _0x1ee8c5, _0xb16a2e = "", _0x5a0740 = "", _0x5e0952) {
      const _0x5e6623 = _0x12f136 => {
        if (!_0x12f136) {
          return _0x12f136;
        }
        if ("string" == typeof _0x12f136) {
          return this.isLoon() ? _0x12f136 : this.isQuanX() ? {
            "open-url": _0x12f136
          } : this.isSurge() ? {
            url: _0x12f136
          } : void 0;
        }
        if ("object" == typeof _0x12f136) {
          if (this.isLoon()) {
            let _0xcf77eb = _0x12f136.openUrl || _0x12f136.url || _0x12f136["open-url"],
              _0x3886e4 = _0x12f136.mediaUrl || _0x12f136["media-url"];
            return {
              openUrl: _0xcf77eb,
              mediaUrl: _0x3886e4
            };
          }
          if (this.isQuanX()) {
            let _0x12da8c = _0x12f136["open-url"] || _0x12f136.url || _0x12f136.openUrl,
              _0x3a021c = _0x12f136["media-url"] || _0x12f136.mediaUrl;
            return {
              "open-url": _0x12da8c,
              "media-url": _0x3a021c
            };
          }
          if (this.isSurge()) {
            let _0x195096 = _0x12f136.url || _0x12f136.openUrl || _0x12f136["open-url"];
            return {
              url: _0x195096
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4d8701, _0xb16a2e, _0x5a0740, _0x5e6623(_0x5e0952)) : this.isQuanX() && $notify(_0x4d8701, _0xb16a2e, _0x5a0740, _0x5e6623(_0x5e0952))), !this.isMuteLog) {
        let _0x364b42 = ["", "==============📣系统通知📣=============="];
        _0x364b42.push(_0x4d8701);
        _0xb16a2e && _0x364b42.push(_0xb16a2e);
        _0x5a0740 && _0x364b42.push(_0x5a0740);
        console.log(_0x364b42.join("\n"));
        this.logs = this.logs.concat(_0x364b42);
      }
    }
    log(..._0x33e2c5) {
      _0x33e2c5.length > 0 && (this.logs = [...this.logs, ..._0x33e2c5]);
      console.log(_0x33e2c5.join(this.logSeparator));
    }
    logErr(_0x4015dd, _0x505237) {
      const _0x2d8637 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x2d8637 ? this.log("", "❗️" + this.name + ", 错误!", _0x4015dd.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x4015dd);
    }
    wait(_0x1d3bb9) {
      return new Promise(_0xc73030 => setTimeout(_0xc73030, _0x1d3bb9));
    }
    done(_0xa767e2 = {}) {
      const _0xc246cb = new Date().getTime(),
        _0x5d3f8b = (_0xc246cb - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x5d3f8b + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0xa767e2);
    }
  }(_0x1ee8c5, _0x2b9921);
}