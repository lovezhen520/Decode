const $ = new Env("胖乖生活"),
  ckName = "pgsh_data";
const userCookie = $.toObj($.isNode() ? process.env[ckName] : $.getdata(ckName)) || [];
$.userIdx = 0;
$.userList = [];
$.notifyMsg = [];
$.succCount = 0;
const notify = $.isNode() ? require("./sendNotify") : "";
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
async function main() {
  for (let _0x393d20 of $.userList) {
    try {
      await _0x393d20.login();
      const {
        integral: _0x4acc7a
      } = (await _0x393d20.getBalance()) ?? {};
      await _0x393d20.signin();
      if (_0x393d20.ckStatus) {
        let _0x285a69 = await _0x393d20.getTaskList();
        _0x285a69 = _0x285a69.filter(_0x2202f9 => _0x2202f9.completedStatus == 0);
        for (let _0x1e8d62 of _0x285a69) {
          for (let _0x2f4857 = 0; _0x2f4857 < _0x1e8d62?.["dailyTaskLimit"]; _0x2f4857++) {
            $.log("[" + (_0x393d20.userName || _0x393d20.index) + "][INFO] 执行" + _0x1e8d62.title + "任务...");
            $.log("[" + (_0x393d20.userName || _0x393d20.index) + "][INFO] 等待3秒...");
            await $.wait(3000);
            let _0xa120de = await _0x393d20.completed(_0x1e8d62?.["taskCode"]);
            if (!_0xa120de) {
              break;
            }
          }
        }
        for (let _0x54d692 = 1; _0x54d692 <= 8; _0x54d692++) {
          $.log("[" + (_0x393d20.userName || _0x393d20.index) + "][INFO] 执行隐藏广告任务...");
          $.log("[" + (_0x393d20.userName || _0x393d20.index) + "][INFO] 等待3秒...");
          await $.wait(3000);
          let _0x3675d2 = await _0x393d20.completed("15eb1357-b2d9-442f-a19f-dbd9cdc996cb");
          if (!_0x3675d2) {
            break;
          }
        }
        let _0x39fa80 = ["xxWOKgkT5o0GQ79yhJX", "J2wXQrquMbOKQvKguy", "DyzXPW5UPpyymgjDS5", "oJgPBY0cBJn0aPopCR", "Qj8X4QVtwRMdovmzHKn"];
        for (let _0x292fcb of _0x39fa80) {
          let _0x7dc347 = await _0x393d20.rewardIntegral(_0x292fcb);
          if (!_0x7dc347) {
            break;
          }
        }
        let _0x46135d = (await _0x393d20.ladderTaskForDay()) ?? [];
        for (let _0x3978a7 of _0x46135d) {
          await _0x393d20.applyLadderReward(_0x3978a7.rewardCode);
        }
        let {
          taskCode: _0x1173bd,
          taskName: _0x45e1f6
        } = await _0x393d20.queryMarkTaskByStartTime();
        await _0x393d20.doMarkTask(_0x1173bd);
        await _0x393d20.markTaskReward(_0x1173bd);
        await _0x393d20.doApplyTask(_0x1173bd);
        const {
          integral: _0x209533,
          integralAmount: _0x56fca1
        } = (await _0x393d20.getBalance()) ?? {};
        DoubleLog("[" + (_0x393d20.userName || _0x393d20.index) + "] 本次获得" + (_0x209533 - 0 - _0x4acc7a) + "积分, 余额 ¥" + _0x56fca1);
        $.succCount++;
      } else {
        DoubleLog("⛔️ 「" + (_0x393d20.userName ?? "账号" + index) + "」签到失败, 用户需要去登录");
      }
    } catch (_0x5896ea) {
      throw _0x5896ea;
    }
  }
  $.title = "共" + $.userList.length + "个账号,成功" + $.succCount + "个,失败" + ($.userList.length - 0 - $.succCount) + "个";
  await sendMsg($.notifyMsg.join("\n"), {
    $media: $.avatar
  });
}
class UserInfo {
  constructor(_0x2ef0d1) {
    this.index = ++$.userIdx;
    this.token = "892b3156a5ffe5f0c60df3d5738a7661" || _0x2ef0d1.token || _0x2ef0d1;
    this.userId = "" || _0x2ef0d1.userId;
    this.userName = _0x2ef0d1.userName;
    this.avatar = _0x2ef0d1.avatar;
    this.ckStatus = true;
    this.baseUrl = "https://mmembership.lenovo.com.cn";
    this.headers = {
      "User-Agent": "okhttp/3.14.9",
      Accept: "application/json, text/plain, */*",
      Version: "1.52.0",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: this.token,
      channel: "android_app"
    };
    this.fetch = async _0x5d95d => {
      try {
        if (typeof _0x5d95d === "string") {
          _0x5d95d = {
            url: _0x5d95d
          };
        }
        let {
          sign: _0x23a14c,
          timestamp: _0x4e4376
        } = getSign(_0x5d95d.url, this.token);
        this.headers.sign = _0x23a14c;
        this.headers.timestamp = _0x4e4376;
        if (_0x5d95d?.["url"]?.["startsWith"]("/") || _0x5d95d?.["url"]?.["startsWith"](":")) {
          _0x5d95d.url = this.baseUrl + _0x5d95d.url;
        }
        const _0x382fd3 = {
          ..._0x5d95d,
          headers: _0x5d95d.headers || this.headers,
          url: _0x5d95d.url
        };
        const _0x5554e8 = await Request(_0x382fd3);
        debug(_0x5554e8, _0x5d95d?.["url"]?.["replace"](/\/+$/, "")["substring"](_0x5d95d?.["url"]?.["lastIndexOf"]("/") + 1));
        return _0x5554e8;
      } catch (_0x2ca059) {
        this.ckStatus = false;
        $.log("[" + (this.userName || this.index) + "][ERROR] 请求发起失败!" + _0x2ca059 + "\n");
      }
    };
  }
  async login() {
    try {
      const _0x13de71 = {
        unionId: this.userId
      };
      const _0x885873 = {
        url: "https://userapi.qiekj.com/wechat/unionId/login",
        type: "post",
        body: _0x13de71
      };
      let _0x5ad709 = await this.fetch(_0x885873);
      $.log("[" + (this.userName || this.index) + "][INFO] 用户登录: " + _0x5ad709?.["msg"] + "\n");
      this.token = _0x5ad709?.["data"]?.["token"];
    } catch (_0x27d4f2) {
      console.log("❌任务失败！原因为:" + _0x27d4f2);
    }
  }
  async getBalance() {
    try {
      const _0x53ee58 = {
        token: this.token
      };
      const _0x5a331e = {
        url: "https://userapi.qiekj.com/user/balance",
        type: "post",
        body: _0x53ee58
      };
      let _0x2190e7 = await this.fetch(_0x5a331e);
      return _0x2190e7?.["data"];
    } catch (_0x1c96a5) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x1c96a5 + "\n");
    }
  }
  async signin() {
    try {
      const _0x570157 = {
        url: "https://userapi.qiekj.com/signin/doUserSignIn",
        type: "post",
        body: {}
      };
      _0x570157.body.activityId = "600001";
      _0x570157.body.token = this.token;
      const _0x1d91cb = _0x570157;
      let _0x52efad = await this.fetch(_0x1d91cb);
      if (_0x52efad?.["code"] != 0 && _0x52efad?.["code"] != 33001) {
        throw new Error(_0x52efad?.["msg"] || "用户签到失败!原因未知");
      }
      $.log("[" + (this.userName || this.index) + "][INFO] " + _0x52efad?.["msg"] + "\n");
    } catch (_0x40bc40) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x40bc40 + "\n");
    }
  }
  async getTaskList() {
    try {
      const _0x2c8805 = {
        token: this.token
      };
      const _0x4280fe = {
        url: "https://userapi.qiekj.com/task/list",
        body: _0x2c8805
      };
      let _0x42838e = await this.fetch(_0x4280fe);
      return _0x42838e?.["data"]?.["items"];
    } catch (_0x1bf427) {
      console.log("❌任务失败！原因为:" + _0x1bf427);
    }
  }
  async completed(_0x419c36) {
    try {
      const _0x53619f = {
        taskCode: _0x419c36,
        token: this.token
      };
      const _0x2e436e = {
        url: "https://userapi.qiekj.com/task/completed",
        body: _0x53619f
      };
      let _0x525080 = await this.fetch(_0x2e436e);
      $.log("[" + (this.userName || this.index) + "][INFO] 结果: " + _0x525080?.["msg"]);
      return _0x525080?.["data"];
    } catch (_0x3804b2) {
      console.log("❌任务失败！原因为:" + _0x3804b2);
    }
  }
  async ladderTaskForDay() {
    try {
      const _0x39ee70 = {
        token: this.token
      };
      const _0x5266de = {
        url: "https://userapi.qiekj.com/ladderTask/ladderTaskForDay",
        params: _0x39ee70
      };
      let _0xf40219 = await this.fetch(_0x5266de);
      return _0xf40219?.["data"]?.["ladderRewardList"]?.["filter"](_0x2bc5c4 => _0x2bc5c4.isApplyReward == 1);
    } catch (_0x24ae13) {
      console.log("❌任务失败！原因为:" + _0x24ae13);
    }
  }
  async applyLadderReward(_0x5327af) {
    try {
      const _0x538e0b = {
        rewardCode: _0x5327af,
        token: this.token
      };
      const _0x363d95 = {
        url: "https://userapi.qiekj.com/ladderTask/applyLadderReward",
        body: _0x538e0b
      };
      let _0x1eb501 = await this.fetch(_0x363d95);
      $.log("[" + (this.userName || this.index) + "][INFO] 领取阶梯奖励: " + _0x1eb501?.["msg"]);
    } catch (_0x5a3bf1) {
      console.log("❌任务失败！原因为:" + _0x5a3bf1);
    }
  }
  async rewardIntegral(_0x3c6e26) {
    try {
      const _0x40230b = {
        url: "https://userapi.qiekj.com/integralUmp/rewardIntegral",
        body: "itemCode=" + _0x3c6e26 + "&token=" + this.token
      };
      let _0x456438 = await this.fetch(_0x40230b);
      $.log("[" + (this.userName || this.index) + "][INFO] 浏览商品: 积分+" + (_0x456438?.["data"]?.["rewardIntegral"] || 0));
      return _0x456438?.["data"]?.["rewardIntegral"];
    } catch (_0x1868b7) {
      console.log("❌任务失败！原因为:" + _0x1868b7);
    }
  }
  async queryMarkTaskByStartTime() {
    try {
      const _0x524c1c = new Date().toISOString().slice(0, 19).replace("T", " "),
        _0x230952 = {
          startTime: _0x524c1c,
          token: this.token
        };
      const _0x5af60e = {
        url: "https://userapi.qiekj.com/markActivity/queryMarkTaskByStartTime",
        body: _0x230952,
        type: "post"
      };
      let _0x11c025 = await this.fetch(_0x5af60e);
      $.log("[" + (this.userName || this.index) + "][INFO] 执行" + _0x11c025?.["data"]?.["taskName"]);
      return _0x11c025?.["data"];
    } catch (_0x36bcb2) {
      console.log("❌任务失败！原因为:" + _0x36bcb2);
    }
  }
  async doApplyTask(_0x43574a) {
    try {
      const _0x4893ec = {
        taskCode: _0x43574a,
        token: this.token
      };
      const _0x5678f4 = {
        url: "https://userapi.qiekj.com/markActivity/doApplyTask",
        body: _0x4893ec,
        type: "post"
      };
      let _0x9a091f = await this.fetch(_0x5678f4);
      $.log("[" + (this.userName || this.index) + "][INFO] 打卡报名: " + _0x9a091f.msg);
    } catch (_0x5556e5) {
      console.log("❌任务失败！原因为:" + _0x5556e5);
    }
  }
  async doMarkTask(_0x54ffed) {
    try {
      const _0x219f82 = {
        taskCode: _0x54ffed,
        token: this.token
      };
      const _0x1e3d58 = {
        url: "https://userapi.qiekj.com/markActivity/doMarkTask",
        body: _0x219f82,
        type: "post"
      };
      let _0x1fcc3c = await this.fetch(_0x1e3d58);
      $.log("[" + (this.userName || this.index) + "][INFO] 瓜分积分: " + _0x1fcc3c.msg);
      return _0x1fcc3c?.["data"];
    } catch (_0x348373) {
      console.log("❌任务失败！原因为:" + _0x348373);
    }
  }
  async markTaskReward(_0x283b88) {
    try {
      const _0x1a6b4d = {
        taskCode: _0x283b88,
        token: this.token
      };
      const _0x573088 = {
        url: "https://userapi.qiekj.com/markActivity/markTaskReward",
        body: _0x1a6b4d,
        type: "post"
      };
      let _0xcc75d1 = await this.fetch(_0x573088);
      $.log("[" + (this.userName || this.index) + "][INFO] 瓜分奖励: " + (_0xcc75d1?.["data"] || _0xcc75d1.msg));
      return _0xcc75d1?.["data"];
    } catch (_0x173582) {
      console.log("❌任务失败！原因为:" + _0x173582);
    }
  }
}
async function getCookie() {
  try {
    if ($request && $request.method === "OPTIONS") {
      return;
    }
    const _0x2e0ef1 = $request.body ? $request.body.split("&").reduce((_0x244776, _0x45d05) => {
      var [_0x48cf7e, _0x45d05] = _0x45d05.split("=");
      _0x244776[_0x48cf7e] = _0x45d05;
      return _0x244776;
    }, {}) : {};
    if (!_0x2e0ef1) {
      throw new Error("获取token失败, 参数缺失");
    }
    const _0x12f461 = {
        userId: _0x2e0ef1?.["unionId"],
        userName: _0x2e0ef1?.["nickname"]
      },
      _0x5d1a37 = userCookie.findIndex(_0x25c098 => _0x25c098.userId == _0x12f461.userId);
    userCookie[_0x5d1a37] ? userCookie[_0x5d1a37] = _0x12f461 : userCookie.push(_0x12f461);
    $.setjson(userCookie, ckName);
    $.msg($.name, "🎉账号[" + _0x12f461.userName + "]更新token成功!", "");
  } catch (_0x404e3f) {
    throw _0x404e3f;
  }
}
function getSign(_0x980db8, _0x22148e) {
  const _0x1b1e6a = String(Date.now());
  _0x980db8 = _0x3d01d9(_0x980db8);
  const _0x341b40 = "android_app",
    _0x364ccd = "xl8v4s/5qpBLvN+8CzFx7vVjy31NgXXcedU7G0QpOMM=",
    _0x18e496 = "1.52.0",
    _0x4f8ec3 = "appSecret=" + _0x364ccd + "&channel=" + _0x341b40 + "&timestamp=" + _0x1b1e6a + "&token=" + _0x22148e + "&version=" + _0x18e496 + "&" + _0x980db8,
    _0x2e68fd = $.CryptoJS.SHA256(_0x4f8ec3).toString($.CryptoJS.enc.Hex),
    _0x462aee = {
      sign: _0x2e68fd,
      timestamp: _0x1b1e6a
    };
  return _0x462aee;
  function _0x3d01d9(_0x29f0d0) {
    const _0x23c855 = _0x29f0d0.indexOf("https://") + "https://".length;
    const _0x583988 = _0x29f0d0.indexOf("/", _0x23c855);
    return _0x29f0d0.substring(_0x583988);
  }
}
async function loadCryptoJS() {
  let _0x556350 = ($.isNode() ? require("crypto-js") : $.getdata("CryptoJS_code")) || "";
  if ($.isNode()) {
    return _0x556350;
  }
  if (_0x556350 && Object.keys(_0x556350).length) {
    console.log("✅ " + $.name + ": 缓存中存在CryptoJS代码, 跳过下载");
    eval(_0x556350);
    return createCryptoJS();
  }
  console.log("🚀 " + $.name + ": 开始下载CryptoJS代码");
  return new Promise(async _0x11c29 => {
    $.getScript("https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/CryptoJS.min.js").then(_0x4f0fb0 => {
      $.setdata(_0x4f0fb0, "CryptoJS_code");
      eval(_0x4f0fb0);
      const _0x30fb45 = createCryptoJS();
      console.log("✅ CryptoJS加载成功, 请继续");
      _0x11c29(_0x30fb45);
    });
  });
}
!(async () => {
  try {
    typeof $request != "undefined" ? await getCookie() : ($.CryptoJS = await loadCryptoJS(), await checkEnv(), await main());
  } catch (_0x5bdedb) {
    throw _0x5bdedb;
  }
})().catch(_0x1a680a => {
  $.logErr(_0x1a680a);
  $.msg($.name, "⛔️ script run error!", _0x1a680a.message || _0x1a680a);
}).finally(async () => {
  const _0x29ed3e = {
    ok: 1
  };
  $.done(_0x29ed3e);
});
async function sendMsg(a, e) {
  a && ($.isNode() ? await notify.sendNotify($.name, a) : $.msg($.name, $.title || "", a, e));
}
function DoubleLog(o) {
  o && ($.log(`${o}`), $.notifyMsg.push(`${o}`));
}
async function checkEnv() {
  try {
    if (!userCookie?.length) {
      throw new Error("no available accounts found");
    }
    $.log(`\n[INFO] 检测到 ${userCookie?.length ?? 0} 个账号\n`);
    $.userList.push(...userCookie.map(o => new UserInfo(o)).filter(Boolean));
  } catch (o) {
    throw o;
  }
}
function debug(g, e = "debug") {
  "true" === $.is_debug && ($.log(`\n-----------${e}------------\n`), $.log("string" == typeof g ? g : $.toStr(g) || `debug error => t=${g}`), $.log(`\n-----------${e}------------\n`));
}
function ObjectKeys2LowerCase(obj) {
  return !obj ? {} : Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v]));
}
async function Request(t) {
  "string" == typeof t && (t = {
    url: t
  });
  try {
    if (!t?.url) {
      throw new Error("[URL][ERROR] 缺少 url 参数");
    }
    let {
      url: o,
      type: e,
      headers: r = {},
      body: s,
      params: a,
      dataType: n = "form",
      resultType: u = "data"
    } = t;
    const p = e ? e?.toLowerCase() : "body" in t ? "post" : "get",
      c = o.concat("post" === p ? "?" + $.queryStr(a) : ""),
      i = t.timeout ? $.isSurge() ? t.timeout / 1000 : t.timeout : 10000;
    "json" === n && (r["Content-Type"] = "application/json;charset=UTF-8");
    const y = "string" == typeof s ? s : s && "form" == n ? $.queryStr(s) : $.toStr(s),
      l = {
        ...t,
        ...(t?.opts ? t.opts : {}),
        url: c,
        headers: r,
        ...("post" === p && {
          body: y
        }),
        ...("get" === p && a && {
          params: a
        }),
        timeout: i
      },
      m = $.http[p.toLowerCase()](l).then(t => "data" == u ? $.toObj(t.body) || t.body : $.toObj(t) || t).catch(t => $.log(`[${p.toUpperCase()}][ERROR] ${t}\n`));
    return Promise.race([new Promise((t, o) => setTimeout(() => o("当前请求已超时"), i)), m]);
  } catch (t) {
    console.log(`[${p.toUpperCase()}][ERROR] ${t}\n`);
  }
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
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
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
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
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
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
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}