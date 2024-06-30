//6/30/2024, 1:54:27 PM
//Modify:https://github.com/lck7/decode
const $ = new Env("🌸Sakura Checkbox"),
  ckName = "youzan_data";
let userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
$.cache = ($.isNode() ? JSON.parse(process.env.youzan_cache) : $.getjson("youzan_cache")) || {};
const Notify = 1,
  notify = $.isNode() ? require("./sendNotify") : "";
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.notifyMsg = [];
const checkList = [];
let checkCount = 0,
  checkTrueList = [],
  checkFalseList = [];
!(async () => {
  console.log("\n☆　　╱╲*╱╲　☆\n ╱╳+▲╱　　╲　☆\n╱╱ ◢◣+　　╳╲ \n╱ +◢█◣　／　　╲☆\n☆　◢██◣   Sakura \n _▂▂█▂▂   Checkbox·1.0.0 \n送给双十一仍然孤单的你～别让天气影响到心情哟!:|\n");
  if (typeof $request != "undefined" || typeof $response != "undefined") {
    await getCookie();
    return;
  }
  if (!(await checkEnv())) {
    throw new Error("❌未检测到ck，请添加环境变量");
  }
  if (checkList.length > 0) {
    await main();
  }
})().catch(_0x9e6b3c => $.notifyMsg.push(_0x9e6b3c.message || _0x9e6b3c)).finally(async () => {
  await SendMsg($.notifyMsg.join("\n"));
  $.done();
});
async function main() {
  DoubleLog("🥳签到日志已送达 by Sliverkiss!\n如果对你有帮助,给个⭐️Star吧!\n");
  for (let _0x312db7 of checkList) {
    if ($.cache["" + _0x312db7.checkinId]) {
      debug($.cache, "读取店铺缓存信息");
      _0x312db7.shopName = $.cache["" + _0x312db7.checkinId];
    } else {
      await getHomepage(_0x312db7);
    }
    let _0x72dd4d = await signin(_0x312db7);
    if (_0x72dd4d) {
      await point(_0x72dd4d, _0x312db7);
    }
  }
  $.setjson($.cache, "youzan_cache");
}
async function signin(_0x2597ab) {
  try {
    const _0xbb763f = {
      url: "https://h5.youzan.com/wscump/checkin/checkinV2.json?checkinId=" + _0x2597ab.checkinId,
      headers: {}
    };
    _0xbb763f.headers["Extra-Data"] = "{ \"is_weapp\": 1}";
    _0xbb763f.headers.Cookie = _0x2597ab.token;
    _0xbb763f.headers["User-Agent"] = " Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002524) NetType/WIFI Language/zh_CN miniProgram/wx6b30ed1839d47d45";
    _0xbb763f.headers.Host = "h5.youzan.com";
    return new Promise(_0x45067b => {
      $.get(_0xbb763f, async (_0x289d2a, _0x158534, _0x2314a5) => {
        try {
          let _0x4493af = JSON.parse(_0x2314a5);
          debug(_0x4493af, "签到");
          let _0x627566 = "";
          if (_0x4493af?.["code"] == 0) {
            _0x627566 = "签到成功！获得" + _0x4493af?.["data"]?.["list"][0]?.["infos"]?.["title"];
            checkTrueList.push(_0x627566);
          } else {
            if (_0x4493af?.["code"] == "1000030071") {
              _0x627566 = "今日已签到";
              checkTrueList.push(_0x627566);
            } else {
              DoubleLog("【" + _0x2597ab.shopName + "】任务编号 " + _0x2597ab.checkinId + " >> ❌Check ck error!");
              checkFalseList.push(_0x627566);
            }
          }
          _0x45067b(_0x627566);
        } catch (_0x40dfd5) {
          $.log("❌出现错误！原因为:" + _0x40dfd5);
          _0x45067b();
        }
      });
    });
  } catch (_0x61a4c3) {
    $.log("❌出现错误！原因为:" + _0x61a4c3);
  }
}
async function point(_0x2e4276, _0x5929be) {
  try {
    const _0x15ae52 = {
      "Extra-Data": "{ \"is_weapp\": 1}",
      Cookie: _0x5929be.token,
      "User-Agent": " Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002524) NetType/WIFI Language/zh_CN miniProgram/wx6b30ed1839d47d45",
      Host: "h5.youzan.com"
    };
    const _0x2b7be5 = {
      url: "https://h5.youzan.com/wscump/pointstore/getCustomerPoints.json",
      headers: _0x15ae52
    };
    return new Promise(_0xf96cda => {
      $.get(_0x2b7be5, async (_0x28f6f9, _0x1c66c4, _0x5830a6) => {
        try {
          let _0x31dd2a = JSON.parse(_0x5830a6);
          DoubleLog("【" + _0x5929be.shopName + "】任务编号 " + _0x5929be.checkinId + " :" + _0x2e4276 + ",积分：" + _0x31dd2a?.["data"]?.["currentAmount"]);
        } catch (_0x503951) {
          $.log("❌出现错误！原因为:" + _0x503951);
        } finally {
          _0xf96cda();
        }
      });
    });
  } catch (_0x198cfc) {
    console.log(_0x198cfc);
  }
}
async function getHomepage(_0x5b2113) {
  try {
    const _0x29e1c0 = {
      "Extra-Data": "{ \"is_weapp\": 1}",
      Cookie: _0x5b2113.token,
      "User-Agent": " Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002524) NetType/WIFI Language/zh_CN miniProgram/wx6b30ed1839d47d45",
      Host: "h5.youzan.com"
    };
    const _0x2933c0 = {
      url: "https://h5.youzan.com/wscdeco/homepage-detail.json",
      headers: _0x29e1c0
    };
    return new Promise(_0x571a58 => {
      $.get(_0x2933c0, async (_0x4a3d8b, _0x38fed9, _0x190afc) => {
        try {
          let _0x5f1e0f = $.toObj(_0x190afc) || _0x190afc;
          if (_0x5f1e0f?.["data"]?.["shopMetaInfo"]) {
            _0x5b2113.shopName = _0x5f1e0f?.["data"]?.["shopMetaInfo"]?.["shopName"];
            $.cache["" + _0x5b2113.checkinId] = _0x5b2113.shopName;
            debug(_0x5f1e0f?.["data"]?.["shopMetaInfo"], "获取店铺信息");
          } else {
            console.log("❌获取店铺信息失败！");
          }
          _0x571a58(_0x5f1e0f?.["accountList"]);
        } catch (_0x26d6d6) {
          $.log(_0x26d6d6);
          _0x571a58();
        }
      });
    });
  } catch (_0x2a44e6) {
    throw new Error("❌运行错误，原因为：" + _0x2a44e6);
  }
}
async function getCookie() {
  if ($request && $request.method != "OPTIONS") {
    let _0x58fe4c = $request.url;
    var _0x2bf29b = /checkinId=([0-9]+)/g;
    const _0x2703b4 = _0x2bf29b.exec(_0x58fe4c)[1];
    let _0x311b94 = $response.headers["Set-Cookie"] || $response.headers["set-cookie"];
    const _0x34cbe2 = _0x311b94.match(/KDTWEAPPSESSIONID=.+?;/g);
    userCookie = $.toObj(userCookie);
    if (!userCookie) {
      userCookie = {};
    }
    if (_0x2703b4 && _0x34cbe2[0]) {
      userCookie["" + _0x2703b4] = _0x34cbe2[0];
      $.setjson(userCookie, ckName);
      $.msg($.name, "", "🎉任务编号" + _0x2703b4 + " 更新cookie成功！");
    } else {
      $.msg($.name, "", "❌" + $name + " 获取cookie失败！请检查配置是否正确");
    }
  }
}
9;
function DoubleLog(_0x5718dd) {
  if ($.isNode()) {
    _0x5718dd && (console.log("" + _0x5718dd), $.notifyMsg.push("" + _0x5718dd));
  } else {
    console.log("" + _0x5718dd);
    $.notifyMsg.push("" + _0x5718dd);
  }
}
function debug(_0x566e42, _0x4219b5 = "debug") {
  if ($.is_debug === "true") {
    if (typeof _0x566e42 == "string") {
      console.log("\n-----------" + _0x4219b5 + "------------\n");
      console.log(_0x566e42);
      console.log("\n-----------" + _0x4219b5 + "------------\n");
    } else {
      typeof _0x566e42 == "object" && (console.log("\n-----------" + _0x4219b5 + "------------\n"), console.log($.toStr(_0x566e42)), console.log("\n-----------" + _0x4219b5 + "------------\n"));
    }
  }
}
async function SendMsg(_0x1bf54d) {
  if (!_0x1bf54d) {
    return;
  }
  if ($.isNode()) {
    await notify.sendNotify($.name, _0x1bf54d);
  } else {
    $.msg($.name, "共" + checkCount + "个签到任务 ✅成功" + checkTrueList.length + "个 ❌失败" + checkFalseList.length + "个", _0x1bf54d);
  }
}
async function checkEnv() {
  userCookie = JSON.parse(userCookie);
  if (userCookie) {
    Object.keys(userCookie).forEach(_0x5fdac5 => {
      const _0x1df5a6 = {
        checkinId: _0x5fdac5,
        token: userCookie["" + _0x5fdac5]
      };
      checkList.push(_0x1df5a6);
    });
    checkCount = checkList.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + checkCount + "个签到任务");
  return true;
}
function httpRequest(_0x1610f3, _0x4534fa) {
  typeof _0x4534fa === "undefined" ? "body" in _0x1610f3 ? _0x4534fa = "post" : _0x4534fa = "get" : _0x4534fa = _0x4534fa;
  return new Promise(_0x5c2347 => {
    $[_0x4534fa](_0x1610f3, (_0x5ee466, _0x5f4aa9, _0xc4bb64) => {
      try {
        if (_0x5ee466) {
          console.log(_0x4534fa + "请求失败");
          $.logErr(_0x5ee466);
        } else {
          if (_0xc4bb64) {
            typeof JSON.parse(_0xc4bb64) == "object" ? _0xc4bb64 = JSON.parse(_0xc4bb64) : _0xc4bb64 = _0xc4bb64;
            _0x5c2347(_0xc4bb64);
          } else {
            console.log("请求api返回数据为空，请检查自身原因");
          }
        }
      } catch (_0x554676) {
        $.logErr(_0x554676, _0x5f4aa9);
      } finally {
        _0x5c2347();
      }
    });
  });
}
async function BarkNotify(_0xa855ee, _0x223384, _0x37f193, _0x40c406) {
  for (let _0x409a6b = 0; _0x409a6b < 3; _0x409a6b++) {
    console.log("🔷Bark notify >> Start push (" + (_0x409a6b + 1) + ")");
    const _0x3794bf = await new Promise(_0x576b3e => {
      const _0x1438f4 = {
        title: _0x37f193,
        body: _0x40c406,
        device_key: _0x223384,
        ext_params: {}
      };
      _0x1438f4.ext_params.group = _0x37f193;
      _0xa855ee.post({
        url: "https://api.day.app/push",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_0x1438f4)
      }, (_0x41a63d, _0x18e274, _0x3c4111) => _0x18e274 && _0x18e274.status == 200 ? _0x576b3e(1) : _0x576b3e(_0x3c4111 || _0x41a63d));
    });
    if (_0x3794bf === 1) {
      console.log("✅Push success!");
      break;
    } else {
      console.log("❌Push failed! >> " + (_0x3794bf.message || _0x3794bf));
    }
  }
}
function Env(_0x100d90, _0x13c3f7) {
  class _0x45910f {
    constructor(_0x465600) {
      this.env = _0x465600;
    }
    send(_0x3a5770, _0x24566f = "GET") {
      _0x3a5770 = "string" == typeof _0x3a5770 ? {
        url: _0x3a5770
      } : _0x3a5770;
      let _0x504850 = this.get;
      "POST" === _0x24566f && (_0x504850 = this.post);
      return new Promise((_0x2ecd72, _0x5a7327) => {
        _0x504850.call(this, _0x3a5770, (_0x96c254, _0x1b479, _0x2cdba5) => {
          _0x96c254 ? _0x5a7327(_0x96c254) : _0x2ecd72(_0x1b479);
        });
      });
    }
    get(_0x44f211) {
      return this.send.call(this.env, _0x44f211);
    }
    post(_0x593a72) {
      return this.send.call(this.env, _0x593a72, "POST");
    }
  }
  return new class {
    constructor(_0x588dc1, _0x4532c6) {
      this.name = _0x588dc1;
      this.http = new _0x45910f(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4532c6);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
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
    toObj(_0x4bfcb3, _0x27d7c8 = null) {
      try {
        return JSON.parse(_0x4bfcb3);
      } catch {
        return _0x27d7c8;
      }
    }
    toStr(_0x4181eb, _0x1348bd = null) {
      try {
        return JSON.stringify(_0x4181eb);
      } catch {
        return _0x1348bd;
      }
    }
    getjson(_0x403b41, _0x2d4658) {
      let _0x2fb524 = _0x2d4658;
      const _0x813281 = this.getdata(_0x403b41);
      if (_0x813281) {
        try {
          _0x2fb524 = JSON.parse(this.getdata(_0x403b41));
        } catch {}
      }
      return _0x2fb524;
    }
    setjson(_0x48d91d, _0x451b21) {
      try {
        return this.setdata(JSON.stringify(_0x48d91d), _0x451b21);
      } catch {
        return !1;
      }
    }
    getScript(_0x566275) {
      return new Promise(_0x5cf0df => {
        const _0x13b9a0 = {
          url: _0x566275
        };
        this.get(_0x13b9a0, (_0x5793b8, _0x2b1eff, _0x552804) => _0x5cf0df(_0x552804));
      });
    }
    runScript(_0x1cbfbc, _0x526529) {
      return new Promise(_0x67f016 => {
        let _0x2cd031 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x2cd031 = _0x2cd031 ? _0x2cd031.replace(/\n/g, "").trim() : _0x2cd031;
        let _0x59db04 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x59db04 = _0x59db04 ? 1 * _0x59db04 : 20;
        _0x59db04 = _0x526529 && _0x526529.timeout ? _0x526529.timeout : _0x59db04;
        const _0xe9232b = {
          script_text: _0x1cbfbc,
          mock_type: "cron",
          timeout: _0x59db04
        };
        const [_0x1ea038, _0x11cca5] = _0x2cd031.split("@"),
          _0x5c3d43 = {
            url: "http://" + _0x11cca5 + "/v1/scripting/evaluate",
            body: _0xe9232b,
            headers: {
              "X-Key": _0x1ea038,
              Accept: "*/*"
            },
            timeout: _0x59db04
          };
        this.post(_0x5c3d43, (_0x486eb1, _0x1e1967, _0x37a27d) => _0x67f016(_0x37a27d));
      }).catch(_0x4edf66 => this.logErr(_0x4edf66));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x2595be = this.path.resolve(this.dataFile),
          _0x18aacb = this.path.resolve(process.cwd(), this.dataFile),
          _0x44a3cc = this.fs.existsSync(_0x2595be),
          _0xa01581 = !_0x44a3cc && this.fs.existsSync(_0x18aacb);
        if (!_0x44a3cc && !_0xa01581) {
          return {};
        }
        {
          const _0x5d7914 = _0x44a3cc ? _0x2595be : _0x18aacb;
          try {
            return JSON.parse(this.fs.readFileSync(_0x5d7914));
          } catch (_0x14b04a) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x331b10 = this.path.resolve(this.dataFile),
          _0x44948 = this.path.resolve(process.cwd(), this.dataFile),
          _0x48bccd = this.fs.existsSync(_0x331b10),
          _0x17e4b4 = !_0x48bccd && this.fs.existsSync(_0x44948),
          _0xeafc5d = JSON.stringify(this.data);
        _0x48bccd ? this.fs.writeFileSync(_0x331b10, _0xeafc5d) : _0x17e4b4 ? this.fs.writeFileSync(_0x44948, _0xeafc5d) : this.fs.writeFileSync(_0x331b10, _0xeafc5d);
      }
    }
    lodash_get(_0x42790f, _0x15f84c, _0x2508df) {
      const _0x1c6ba3 = _0x15f84c.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x287c34 = _0x42790f;
      for (const _0x77e9bb of _0x1c6ba3) if (_0x287c34 = Object(_0x287c34)[_0x77e9bb], void 0 === _0x287c34) {
        return _0x2508df;
      }
      return _0x287c34;
    }
    lodash_set(_0x47eeab, _0x53e3d5, _0x348e45) {
      return Object(_0x47eeab) !== _0x47eeab ? _0x47eeab : (Array.isArray(_0x53e3d5) || (_0x53e3d5 = _0x53e3d5.toString().match(/[^.[\]]+/g) || []), _0x53e3d5.slice(0, -1).reduce((_0x375a1f, _0x2a4565, _0x5492ac) => Object(_0x375a1f[_0x2a4565]) === _0x375a1f[_0x2a4565] ? _0x375a1f[_0x2a4565] : _0x375a1f[_0x2a4565] = Math.abs(_0x53e3d5[_0x5492ac + 1]) >> 0 == +_0x53e3d5[_0x5492ac + 1] ? [] : {}, _0x47eeab)[_0x53e3d5[_0x53e3d5.length - 1]] = _0x348e45, _0x47eeab);
    }
    getdata(_0x1898f4) {
      let _0x9f6cd2 = this.getval(_0x1898f4);
      if (/^@/.test(_0x1898f4)) {
        const [, _0x2a97a6, _0x40086a] = /^@(.*?)\.(.*?)$/.exec(_0x1898f4),
          _0x3df896 = _0x2a97a6 ? this.getval(_0x2a97a6) : "";
        if (_0x3df896) {
          try {
            const _0x1e97e7 = JSON.parse(_0x3df896);
            _0x9f6cd2 = _0x1e97e7 ? this.lodash_get(_0x1e97e7, _0x40086a, "") : _0x9f6cd2;
          } catch (_0x492d7e) {
            _0x9f6cd2 = "";
          }
        }
      }
      return _0x9f6cd2;
    }
    setdata(_0x3bc94e, _0x565c07) {
      let _0x3c10ae = !1;
      if (/^@/.test(_0x565c07)) {
        const [, _0x37775d, _0x285809] = /^@(.*?)\.(.*?)$/.exec(_0x565c07),
          _0x5870e3 = this.getval(_0x37775d),
          _0x4056e2 = _0x37775d ? "null" === _0x5870e3 ? null : _0x5870e3 || "{}" : "{}";
        try {
          const _0x5a104e = JSON.parse(_0x4056e2);
          this.lodash_set(_0x5a104e, _0x285809, _0x3bc94e);
          _0x3c10ae = this.setval(JSON.stringify(_0x5a104e), _0x37775d);
        } catch (_0x44cc73) {
          const _0x41803e = {};
          this.lodash_set(_0x41803e, _0x285809, _0x3bc94e);
          _0x3c10ae = this.setval(JSON.stringify(_0x41803e), _0x37775d);
        }
      } else {
        _0x3c10ae = this.setval(_0x3bc94e, _0x565c07);
      }
      return _0x3c10ae;
    }
    getval(_0x3cb0c8) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x3cb0c8);
        case "Quantumult X":
          return $prefs.valueForKey(_0x3cb0c8);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x3cb0c8];
        default:
          return this.data && this.data[_0x3cb0c8] || null;
      }
    }
    setval(_0x539d23, _0x3c1b56) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x539d23, _0x3c1b56);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x539d23, _0x3c1b56);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x3c1b56] = _0x539d23;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[_0x3c1b56] || null;
      }
    }
    initGotEnv(_0x285d3b) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x285d3b && (_0x285d3b.headers = _0x285d3b.headers ? _0x285d3b.headers : {}, void 0 === _0x285d3b.headers.Cookie && void 0 === _0x285d3b.cookieJar && (_0x285d3b.cookieJar = this.ckjar));
    }
    get(_0x313672, _0x219822 = () => {}) {
      switch (_0x313672.headers && (delete _0x313672.headers["Content-Type"], delete _0x313672.headers["Content-Length"], delete _0x313672.headers["content-type"], delete _0x313672.headers["content-length"]), _0x313672.params && (_0x313672.url += "?" + this.queryStr(_0x313672.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const _0x378137 = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (_0x313672.headers = _0x313672.headers || {}, Object.assign(_0x313672.headers, _0x378137));
          $httpClient.get(_0x313672, (_0x2f10d5, _0x29d6e2, _0x2c2e4b) => {
            !_0x2f10d5 && _0x29d6e2 && (_0x29d6e2.body = _0x2c2e4b, _0x29d6e2.statusCode = _0x29d6e2.status ? _0x29d6e2.status : _0x29d6e2.statusCode, _0x29d6e2.status = _0x29d6e2.statusCode);
            _0x219822(_0x2f10d5, _0x29d6e2, _0x2c2e4b);
          });
          break;
        case "Quantumult X":
          const _0x2c9f20 = {
            hints: !1
          };
          this.isNeedRewrite && (_0x313672.opts = _0x313672.opts || {}, Object.assign(_0x313672.opts, _0x2c9f20));
          $task.fetch(_0x313672).then(_0x51af0b => {
            const {
                statusCode: _0x423456,
                statusCode: _0x3f2480,
                headers: _0x204cb9,
                body: _0x268fdd,
                bodyBytes: _0x4caf6c
              } = _0x51af0b,
              _0x288b8c = {
                status: _0x423456,
                statusCode: _0x3f2480,
                headers: _0x204cb9,
                body: _0x268fdd,
                bodyBytes: _0x4caf6c
              };
            _0x219822(null, _0x288b8c, _0x268fdd, _0x4caf6c);
          }, _0x4a36c3 => _0x219822(_0x4a36c3 && _0x4a36c3.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x22b29f = require("iconv-lite");
          this.initGotEnv(_0x313672);
          this.got(_0x313672).on("redirect", (_0xc1fc9c, _0x303ef0) => {
            try {
              if (_0xc1fc9c.headers["set-cookie"]) {
                const _0x2fb40b = _0xc1fc9c.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x2fb40b && this.ckjar.setCookieSync(_0x2fb40b, null);
                _0x303ef0.cookieJar = this.ckjar;
              }
            } catch (_0x262dba) {
              this.logErr(_0x262dba);
            }
          }).then(_0x678a5b => {
            const {
                statusCode: _0x3a8014,
                statusCode: _0x5e1408,
                headers: _0x1312fc,
                rawBody: _0x464827
              } = _0x678a5b,
              _0x436b54 = _0x22b29f.decode(_0x464827, this.encoding),
              _0x5d1ae6 = {
                status: _0x3a8014,
                statusCode: _0x5e1408,
                headers: _0x1312fc,
                rawBody: _0x464827,
                body: _0x436b54
              };
            _0x219822(null, _0x5d1ae6, _0x436b54);
          }, _0x118713 => {
            const {
              message: _0x16a028,
              response: _0xb75941
            } = _0x118713;
            _0x219822(_0x16a028, _0xb75941, _0xb75941 && _0x22b29f.decode(_0xb75941.rawBody, this.encoding));
          });
      }
    }
    post(_0xaa5c2b, _0x484c3c = () => {}) {
      const _0x1a4f1a = _0xaa5c2b.method ? _0xaa5c2b.method.toLocaleLowerCase() : "post";
      switch (_0xaa5c2b.body && _0xaa5c2b.headers && !_0xaa5c2b.headers["Content-Type"] && !_0xaa5c2b.headers["content-type"] && (_0xaa5c2b.headers["content-type"] = "application/x-www-form-urlencoded"), _0xaa5c2b.headers && (delete _0xaa5c2b.headers["Content-Length"], delete _0xaa5c2b.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const _0x369539 = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (_0xaa5c2b.headers = _0xaa5c2b.headers || {}, Object.assign(_0xaa5c2b.headers, _0x369539));
          $httpClient[_0x1a4f1a](_0xaa5c2b, (_0x97008c, _0xda25a9, _0x18700c) => {
            !_0x97008c && _0xda25a9 && (_0xda25a9.body = _0x18700c, _0xda25a9.statusCode = _0xda25a9.status ? _0xda25a9.status : _0xda25a9.statusCode, _0xda25a9.status = _0xda25a9.statusCode);
            _0x484c3c(_0x97008c, _0xda25a9, _0x18700c);
          });
          break;
        case "Quantumult X":
          const _0x4a848e = {
            hints: !1
          };
          _0xaa5c2b.method = _0x1a4f1a;
          this.isNeedRewrite && (_0xaa5c2b.opts = _0xaa5c2b.opts || {}, Object.assign(_0xaa5c2b.opts, _0x4a848e));
          $task.fetch(_0xaa5c2b).then(_0x15e42b => {
            const {
                statusCode: _0x4d0055,
                statusCode: _0x108ae2,
                headers: _0x33d10a,
                body: _0x4995a8,
                bodyBytes: _0x5741d2
              } = _0x15e42b,
              _0x4c2a38 = {
                status: _0x4d0055,
                statusCode: _0x108ae2,
                headers: _0x33d10a,
                body: _0x4995a8,
                bodyBytes: _0x5741d2
              };
            _0x484c3c(null, _0x4c2a38, _0x4995a8, _0x5741d2);
          }, _0x72d3b0 => _0x484c3c(_0x72d3b0 && _0x72d3b0.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x34f4c5 = require("iconv-lite");
          this.initGotEnv(_0xaa5c2b);
          const {
            url: _0x2653c1,
            ..._0x4a0e6e
          } = _0xaa5c2b;
          this.got[_0x1a4f1a](_0x2653c1, _0x4a0e6e).then(_0x5680bc => {
            const {
                statusCode: _0x3318db,
                statusCode: _0x1d39b4,
                headers: _0x53fda1,
                rawBody: _0x2389d1
              } = _0x5680bc,
              _0x1be072 = _0x34f4c5.decode(_0x2389d1, this.encoding),
              _0x90c121 = {
                status: _0x3318db,
                statusCode: _0x1d39b4,
                headers: _0x53fda1,
                rawBody: _0x2389d1,
                body: _0x1be072
              };
            _0x484c3c(null, _0x90c121, _0x1be072);
          }, _0x3cf13d => {
            const {
              message: _0x11cba5,
              response: _0x9ab145
            } = _0x3cf13d;
            _0x484c3c(_0x11cba5, _0x9ab145, _0x9ab145 && _0x34f4c5.decode(_0x9ab145.rawBody, this.encoding));
          });
      }
    }
    time(_0x2f2794, _0x31e7be = null) {
      const _0x10b27b = _0x31e7be ? new Date(_0x31e7be) : new Date();
      let _0xf3ea7a = {
        "M+": _0x10b27b.getMonth() + 1,
        "d+": _0x10b27b.getDate(),
        "H+": _0x10b27b.getHours(),
        "m+": _0x10b27b.getMinutes(),
        "s+": _0x10b27b.getSeconds(),
        "q+": Math.floor((_0x10b27b.getMonth() + 3) / 3),
        S: _0x10b27b.getMilliseconds()
      };
      /(y+)/.test(_0x2f2794) && (_0x2f2794 = _0x2f2794.replace(RegExp.$1, (_0x10b27b.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x58375b in _0xf3ea7a) new RegExp("(" + _0x58375b + ")").test(_0x2f2794) && (_0x2f2794 = _0x2f2794.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xf3ea7a[_0x58375b] : ("00" + _0xf3ea7a[_0x58375b]).substr(("" + _0xf3ea7a[_0x58375b]).length)));
      return _0x2f2794;
    }
    queryStr(_0x25dec0) {
      let _0x3c30ce = "";
      for (const _0x3cf62f in _0x25dec0) {
        let _0x1af693 = _0x25dec0[_0x3cf62f];
        null != _0x1af693 && "" !== _0x1af693 && ("object" == typeof _0x1af693 && (_0x1af693 = JSON.stringify(_0x1af693)), _0x3c30ce += _0x3cf62f + "=" + _0x1af693 + "&");
      }
      _0x3c30ce = _0x3c30ce.substring(0, _0x3c30ce.length - 1);
      return _0x3c30ce;
    }
    msg(_0x1815b4 = _0x100d90, _0x1d3b3c = "", _0x1339ee = "", _0x5524e7) {
      const _0x5516a4 = _0xc608 => {
        switch (typeof _0xc608) {
          case void 0:
            return _0xc608;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const _0x2a35f5 = {
                  url: _0xc608
                };
                return _0x2a35f5;
              case "Loon":
              case "Shadowrocket":
                return _0xc608;
              case "Quantumult X":
                const _0x2b190a = {
                  "open-url": _0xc608
                };
                return _0x2b190a;
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let _0x71e9d = _0xc608.url || _0xc608.openUrl || _0xc608["open-url"];
                  const _0x5ab16b = {
                    url: _0x71e9d
                  };
                  return _0x5ab16b;
                }
              case "Loon":
                {
                  let _0x5d15de = _0xc608.openUrl || _0xc608.url || _0xc608["open-url"],
                    _0x18490e = _0xc608.mediaUrl || _0xc608["media-url"];
                  const _0xd80413 = {
                    openUrl: _0x5d15de,
                    mediaUrl: _0x18490e
                  };
                  return _0xd80413;
                }
              case "Quantumult X":
                {
                  let _0x382a1d = _0xc608["open-url"] || _0xc608.url || _0xc608.openUrl,
                    _0x4a8cf7 = _0xc608["media-url"] || _0xc608.mediaUrl,
                    _0x378cb2 = _0xc608["update-pasteboard"] || _0xc608.updatePasteboard;
                  const _0x5731f8 = {
                    "open-url": _0x382a1d,
                    "media-url": _0x4a8cf7,
                    "update-pasteboard": _0x378cb2
                  };
                  return _0x5731f8;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(_0x1815b4, _0x1d3b3c, _0x1339ee, _0x5516a4(_0x5524e7));
            break;
          case "Quantumult X":
            $notify(_0x1815b4, _0x1d3b3c, _0x1339ee, _0x5516a4(_0x5524e7));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let _0x424128 = ["", "==============📣系统通知📣=============="];
        _0x424128.push(_0x1815b4);
        _0x1d3b3c && _0x424128.push(_0x1d3b3c);
        _0x1339ee && _0x424128.push(_0x1339ee);
        console.log(_0x424128.join("\n"));
        this.logs = this.logs.concat(_0x424128);
      }
    }
    log(..._0xa22ff5) {
      _0xa22ff5.length > 0 && (this.logs = [...this.logs, ..._0xa22ff5]);
      console.log(_0xa22ff5.join(this.logSeparator));
    }
    logErr(_0x572e48, _0x5e6bf3) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x572e48);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x572e48.stack);
      }
    }
    wait(_0x51be2a) {
      return new Promise(_0xde25bf => setTimeout(_0xde25bf, _0x51be2a));
    }
    done(_0x1de1ed = {}) {
      const _0x433eb5 = new Date().getTime(),
        _0x16fed1 = (_0x433eb5 - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x16fed1 + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x1de1ed);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x100d90, _0x13c3f7);
}