//7/4/2024, 7:13:06 PM
//Author:https://github.com/lck7
const $ = new Env("夸克网盘"),
  ckName = "quark_data",
  userCookie = $.toObj($.isNode() ? process.env[ckName] : $.getdata(ckName)) || [];
$.userIdx = 0;
$.userList = [];
$.notifyMsg = [];
const notify = $.isNode() ? require("./sendNotify") : "";
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.quark_user = ($.isNode() ? process.env.quark_user : $.getdata("quark_user")) || "";
async function main() {
  for (let _0x3c705e of $.userList) {
    $.notifyMsg = [];
    $.title = "";
    try {
      await _0x3c705e.signin();
      if (_0x3c705e.ckStatus) {
        await _0x3c705e.getUserInfo();
        await _0x3c705e.getSignInfo();
        if (_0x3c705e.sleepTrigger) {
          $.log("[" + (_0x3c705e.userName || _0x3c705e.index) + "][INFO] 开始执行睡眠/睡醒打卡任务...\n");
          if (_0x3c705e.sleepTrigger.sleep) {
            await _0x3c705e.sleepSign("sleep");
          }
          if (_0x3c705e.sleepTrigger.wake) {
            let _0x289d33 = await _0x3c705e.sleepSign("wake");
            $.notifyMsg.push("睡觉打卡: " + (_0x289d33 || "不在指定时间范围内"));
          }
        } else {
          $.log("[" + (_0x3c705e.userName || _0x3c705e.index) + "][ERROR] 睡眠打卡: 未获取任务数据，跳过任务\n");
          $.notifyMsg.push("睡眠打卡: 未获取任务数据，跳过任务");
        }
        if (_0x3c705e.taskTrigger) {
          $.log("[" + (_0x3c705e.userName || _0x3c705e.index) + "][INFO] 开始执行福利空间日常任务...\n");
          for (let _0x2be0fe in _0x3c705e.taskTrigger) {
            $.log("[" + (_0x3c705e.userName || _0x3c705e.index) + "][INFO] 正在执行" + _0x3c705e.taskTrigger[_0x2be0fe].name + "\n");
            await _0x3c705e.triggerTask(_0x3c705e.taskTrigger[_0x2be0fe]);
          }
          $.notifyMsg.push("日常任务: 完成任务(" + _0x3c705e.taskDone + "/" + Object.keys(_0x3c705e.taskTrigger).length + ")");
        } else {
          $.log("[" + (_0x3c705e.userName || _0x3c705e.index) + "][ERROR] 日常任务:未获取任务数据，跳过任务\n");
          $.notifyMsg.push("日常任务: 未获取任务数据，跳过任务");
        }
        if (_0x3c705e.welfare) {
          let _0x469c9d = await _0x3c705e.welfareSignin(),
            _0x329ed8 = await _0x3c705e.getCoin();
          $.notifyMsg.push("福利空间: " + _0x469c9d + "｜" + _0x329ed8 + "金币");
        } else {
          $.log("[" + (_0x3c705e.userName || _0x3c705e.index) + "][ERROR] 未获取福利空间签到数据, 跳过任务\n");
          $.notifyMsg.push("福利空间: 未获取签到数据, 跳过任务");
        }
        if (_0x3c705e.carbon) {
          let _0x3fd02b = await _0x3c705e.carbonSignin(),
            _0x5b989d = (await _0x3c705e.getReceiveEngeryList()) ?? [];
          for (let _0x11d41b of _0x5b989d) {
            await _0x3c705e.receiveEngery(_0x11d41b.recordId);
          }
          let _0x52bee1 = await _0x3c705e.carbonCoin();
          $.notifyMsg.push("低碳空间: " + _0x3fd02b + "｜" + (_0x52bee1 - 0) / 100 + "g");
          await _0x3c705e.carbonTravelQuery();
          await _0x3c705e.carbonTravel();
        } else {
          $.log("[" + (_0x3c705e.userName || _0x3c705e.index) + "][ERROR] 未获取低碳空间签到数据, 跳过任务\n");
          $.notifyMsg.push("低碳空间: 未获取签到数据, 跳过任务");
        }
      } else {
        DoubleLog("⛔️ 「" + (_0x3c705e.userName ?? "账号" + index) + "」check ck error!");
      }
      $.name = "夸克网盘任务(" + _0x3c705e.index + "/" + userCookie.length + ")";
      const _0x40ce70 = {
        $media: _0x3c705e.avatar
      };
      await sendMsg($.notifyMsg.join("\n"), _0x40ce70);
    } catch (_0x299cbc) {
      throw _0x299cbc;
    }
  }
}
class UserInfo {
  constructor(_0x1815b9) {
    this.index = ++$.userIdx;
    this.kps = _0x1815b9.kps;
    this.welfare = _0x1815b9.welfare;
    this.carbon = "" || _0x1815b9.carbon;
    this.taskTrigger = _0x1815b9.taskTrigger;
    this.sleepTrigger = _0x1815b9.sleepTrigger;
    this.token = "" || _0x1815b9.token || _0x1815b9;
    this.userId = "" || _0x1815b9.userId;
    this.userName = _0x1815b9.userName;
    this.avatar = _0x1815b9.avatar;
    this.taskDone = 0;
    this.ckStatus = true;
    this.baseUrl = "https://drive-m.quark.cn";
    this.headers = {
      Cookie: this.token,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0"
    };
    this.fetch = async _0x5d6ce4 => {
      try {
        if (typeof _0x5d6ce4 === "string") {
          _0x5d6ce4 = {
            url: _0x5d6ce4
          };
        }
        if (_0x5d6ce4?.["url"]?.["startsWith"]("/") || _0x5d6ce4?.["url"]?.["startsWith"](":")) {
          _0x5d6ce4.url = this.baseUrl + _0x5d6ce4.url;
        }
        const _0x4a9b1c = {
          ..._0x5d6ce4,
          headers: _0x5d6ce4.headers || this.headers,
          url: _0x5d6ce4.url
        };
        const _0x2bd27a = await Request(_0x4a9b1c);
        debug(_0x2bd27a, _0x5d6ce4?.["url"]?.["replace"](/\/+$/, "")["substring"](_0x5d6ce4?.["url"]?.["lastIndexOf"]("/") + 1));
        if (_0x2bd27a?.["code"] == 401) {
          throw new Error(_0x2bd27a?.["message"] || "用户需要去登录");
        }
        return _0x2bd27a;
      } catch (_0x30bc4a) {
        this.ckStatus = false;
        $.log("[" + (this.userName || this.index) + "][ERROR] 请求发起失败!" + _0x30bc4a + "\n");
      }
    };
  }
  async getUserInfo() {
    try {
      let _0x10dbcd = await this.fetch("https://pan.quark.cn/account/info?fr=h5&platform=others");
      this.userName = _0x10dbcd?.["data"]?.["nickname"];
      $.notifyMsg.push("当前用户: " + (this.userName ?? "账号" + this.index));
    } catch (_0x4f19bc) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 查询用户信息失败: " + _0x4f19bc + "\n");
    }
  }
  async getSignInfo() {
    try {
      const _0x572f41 = {
        url: "https://drive-m.quark.cn/1/clouddrive/capacity/growth/info",
        params: {}
      };
      _0x572f41.params.pr = "ucpro";
      _0x572f41.params.fr = "pc";
      _0x572f41.params.uc_param_str = "";
      let _0x15aac1 = await this.fetch(_0x572f41),
        {
          sign_daily: _0x1dfddd,
          sign_daily_reward: _0x5ac1b1
        } = _0x15aac1?.["data"]?.["cap_sign"] ?? {},
        _0x48c68d = _0x1dfddd ? "今日获得" + _0x5ac1b1 / 1048576 + "MB" : _0x15aac1?.["message"] || "今日未签到";
      $.log("[" + (this.userName || this.index) + "][INFO] " + _0x48c68d + "\n");
      $.notifyMsg.push("签到任务: " + _0x48c68d);
    } catch (_0x3dab21) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 查询积分余额: " + _0x3dab21 + "\n");
    }
  }
  async signin() {
    try {
      const _0x123253 = {
        sign_cyclic: true
      };
      const _0x1ad671 = {
        url: "https://drive-m.quark.cn/1/clouddrive/capacity/growth/sign",
        params: {},
        type: "post",
        dataType: "json",
        body: _0x123253
      };
      _0x1ad671.params.pr = "ucpro";
      _0x1ad671.params.fr = "pc";
      _0x1ad671.params.uc_param_str = "";
      let _0x25dc4b = await this.fetch(_0x1ad671),
        _0x4a90f2 = _0x25dc4b?.["data"]?.["sign_daily_reward"] ? "签到成功!" : "" + _0x25dc4b?.["message"];
      $.log("[" + (this.userName || this.index) + "][INFO] 空间签到: " + _0x4a90f2 + "\n");
    } catch (_0x3ece3b) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 空间签到: " + _0x3ece3b + "\n");
    }
  }
  async welfareSignin() {
    try {
      const _0x584121 = {
        url: "https://coral2.quark.cn/quark/welfare/v2/signIn?" + this.welfare.params
      };
      let _0x20a8e4 = await this.fetch(_0x584121),
        _0x1b1f17 = _0x20a8e4?.["msg"] || "获得" + _0x20a8e4?.["data"]?.["prizes"]?.[0]?.["rewardItem"]?.["name"];
      $.log("[" + (this.userName || this.index) + "][INFO] 福利空间: " + _0x1b1f17 + "\n");
      return _0x1b1f17;
    } catch (_0x4ac1f9) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 福利空间签到: " + _0x4ac1f9 + "\n");
    }
  }
  async triggerTask(_0x4f5505) {
    try {
      const _0x54151a = {
        url: "https://coral2.quark.cn/task/trigger?" + _0x4f5505.params
      };
      let _0x2e4581 = await this.fetch(_0x54151a);
      if (_0x2e4581?.["msg"]["match"](/重复请求/) || !_0x2e4581?.["msg"]) {
        this.taskDone++;
      }
      if (!_0x2e4581?.["success"]) {
        throw new Error(_0x2e4581?.["msg"]);
      }
      $.log("[" + (this.userName || this.index) + "][INFO] 任务完成,获得" + _0x2e4581?.["data"]?.["prizes"]?.[0]?.["rewardItem"]?.["amount"] + "金币\n");
    } catch (_0x3ba661) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x3ba661 + "\n");
    }
  }
  async sleepSign(_0x16fbb3) {
    let _0x2f0d77 = _0x16fbb3 == "sleep" ? "睡眠" : "睡醒";
    try {
      const _0x131837 = {
        Accept: "*/*",
        Origin: "https://b.quark.cn",
        Connection: "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: "https://b.quark.cn/",
        Host: "coral2.quark.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X; zh-cn) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/19E258 Quark/6.11.2.2085 Mobile",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
      };
      const _0xc0fd60 = {
        url: "https://coral2.quark.cn/quark/welfare/v2/sleep/trigger?" + this.sleepTrigger[_0x16fbb3].params,
        type: "post",
        headers: _0x131837,
        body: this.sleepTrigger[_0x16fbb3].body
      };
      let _0x585fdb = await this.fetch(_0xc0fd60);
      if (!_0x585fdb?.["success"]) {
        throw new Error(_0x585fdb?.["msg"]);
      }
      $.log("[" + (this.userName || this.index) + "][INFO] " + _0x2f0d77 + "打卡成功！\n");
      let _0x5ab546 = "升级还需" + _0x585fdb?.["data"]?.["nextConfig"]?.["headCount"] + "次打卡｜" + _0x585fdb?.["data"]?.["headTitle"];
      $.log("[" + (this.userName || this.index) + "][INFO] " + _0x2f0d77 + "打卡成功！\n");
      return _0x5ab546;
    } catch (_0x1ba08d) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x2f0d77 + "打卡: " + _0x1ba08d + "\n");
    }
  }
  async getCoin() {
    try {
      const _0x55ca99 = {
        url: "https://coral2.quark.cn/quark/welfare/v2/queryCoinRecordList",
        params: {}
      };
      _0x55ca99.params.pr = "ucpro";
      _0x55ca99.params.fr = "pc";
      _0x55ca99.params.uc_param_str = "";
      _0x55ca99.params.appId = "quark_welfare_center_task";
      _0x55ca99.params.actId = "quark_welfare_center";
      _0x55ca99.params.page = 1;
      _0x55ca99.params.size = 10;
      _0x55ca99.params.kps = this.kps;
      let _0x1927de = await this.fetch(_0x55ca99);
      $.log("[" + (this.userName || this.index) + "][INFO] 福利空间金币信息查询成功！\n");
      let _0x551c89 = _0x1927de?.["data"]?.["extra"]?.["incomeAmount"] - 0 - _0x1927de?.["data"]?.["extra"]?.["payoutAmount"];
      $.log("[" + (this.userName || this.index) + "][INFO] 当前余额: " + _0x551c89 + "金币\n");
      return _0x551c89;
    } catch (_0x59ea42) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 福利空间查询金币信息: " + _0x59ea42 + "\n");
    }
  }
  async carbonSignin() {
    try {
      const _0x37838b = {
        url: "https://coral2.quark.cn/quark/carbon/v1/signIn?" + this.carbon.params,
        type: "post",
        body: this.carbon.body
      };
      let _0x7dd2f4 = await this.fetch(_0x37838b),
        _0x2754eb = _0x7dd2f4?.["msg"] || _0x7dd2f4?.["data"]?.["prizes"]?.[0]?.["rewardItem"]?.["name"];
      $.log("[" + (this.userName || this.index) + "][INFO] 低碳签到: " + _0x2754eb + "\n");
      return _0x2754eb;
    } catch (_0x37ff70) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 低碳签到: " + _0x37ff70 + "\n");
    }
  }
  async carbonCoin() {
    try {
      const _0x4cdaa7 = {
        url: "https://coral2.quark.cn/quark/carbon/v1/home",
        params: {}
      };
      _0x4cdaa7.params.appId = "quark_carbon_account_task";
      _0x4cdaa7.params.kps = this.kps;
      let _0x1d0aa7 = await this.fetch(_0x4cdaa7);
      return _0x1d0aa7?.["data"]?.["userEnergyData"]["amount"];
    } catch (_0x2cf0c6) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 低碳签到: " + _0x2cf0c6 + "\n");
    }
  }
  async carbonTravelQuery() {
    try {
      const _0x1b3c44 = {
        url: "https://coral2.quark.cn/quark/carbon/v1/travel/query",
        params: {}
      };
      _0x1b3c44.params.pr = "ucpro";
      _0x1b3c44.params.fr = "pc";
      _0x1b3c44.params.uc_param_str = "";
      _0x1b3c44.params.appId = "quark_carbon_account_travel";
      _0x1b3c44.params.kps = this.kps;
      let _0x2395ea = await this.fetch(_0x1b3c44),
        _0x3f51f1 = _0x2395ea?.["data"]?.["categoryList"],
        _0x3edbab = [];
      if (_0x3f51f1?.["length"]) {
        _0x3edbab = _0x3f51f1.map(_0x2b599e => {
          const _0xe23566 = {
            name: _0x2b599e.name,
            category: _0x2b599e.category,
            value: _0x2b599e.vitality
          };
          return _0xe23566;
        }).sort((_0x50bfe6, _0x1998fe) => _0x1998fe.value - _0x50bfe6.value);
        $.log("[" + (this.userName || this.index) + "][INFO] 查询出行地点成功!\n");
      }
      return _0x3edbab;
    } catch (_0x45b142) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 低碳出行: " + _0x45b142 + "\n");
    }
  }
  async carbonTravel(_0x4a95aa = "") {
    try {
      let _0xdad94a = {
          url: "https://coral2.quark.cn/quark/carbon/v1/travel/travel",
          params: {
            pr: "ucpro",
            fr: "pc",
            uc_param_str: ""
          },
          type: "post",
          body: {
            appId: "quark_carbon_account_travel",
            kps: this.kps,
            category: _0x4a95aa || "wetlandprotection"
          }
        },
        _0x559d63 = await this.fetch(_0xdad94a);
      if (_0x559d63?.["msg"] && _0x559d63?.["msg"]["match"](/余额不足/)) {
        _0x559d63.msg = "余额不足";
      }
      let _0x5048c1 = "低碳出行: " + (_0x559d63?.["msg"] || _0x559d63?.["data"]?.["destination"]?.["destinationShowName"] || "出行成功");
      $.log("[" + (this.userName || this.index) + "][INFO] " + _0x5048c1 + "\n");
      $.notifyMsg.push(_0x5048c1);
    } catch (_0x2eb2f5) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 低碳出行: " + _0x2eb2f5 + "\n");
    }
  }
  async getReceiveEngeryList() {
    try {
      const _0x32998d = {
        url: "https://coral2.quark.cn/quark/carbon/v1/home",
        params: {}
      };
      _0x32998d.params.pr = "ucpro";
      _0x32998d.params.fr = "pc";
      _0x32998d.params.uc_param_str = "";
      _0x32998d.params.appId = "quark_carbon_account_task";
      _0x32998d.params.kps = this.kps;
      let _0x155e1b = await this.fetch(_0x32998d);
      return _0x155e1b?.["data"]?.["receiveEnergyList"];
    } catch (_0x3b6b48) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 低碳出行查询能量列表: " + _0x3b6b48 + "\n");
    }
  }
  async receiveEngery(_0x57ed5b) {
    try {
      const _0x456584 = {
        url: "https://coral2.quark.cn/quark/carbon/v1/receiveEnergy",
        params: {},
        type: "post",
        body: {}
      };
      _0x456584.params.pr = "ucpro";
      _0x456584.params.fr = "pc";
      _0x456584.params.uc_param_str = "";
      _0x456584.body.appId = "quark_carbon_account_task";
      _0x456584.body.kps = this.kps;
      _0x456584.body.recordIds = _0x57ed5b;
      let _0x2c573b = await this.fetch(_0x456584);
      $.log("[" + (this.userName || this.index) + "][INFO] 收集能量成功!获得" + _0x2c573b?.["data"][0]?.["amount"] / 100 + "g\n");
    } catch (_0x2abf51) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] 低碳空间收集能量: " + _0x2abf51 + "\n");
    }
  }
}
async function getCookie() {
  try {
    if ($request && $request.method === "OPTIONS") {
      return;
    }
    if (!$request.headers) {
      throw new Error("错误的运行方式，请切换到cron环境");
    }
    if ($request.url.match(/clouddrive\/file\/sort/)) {
      await _0x4fbed5();
    } else {
      if ($request.url.match(/task\/trigger/)) {
        _0x3b84bb();
      } else {
        $request.url.match(/sleep\/trigger/) ? _0x473d85() : _0x580ed1();
      }
    }
    $.setjson(userCookie, ckName);
    async function _0x4fbed5() {
      try {
        const _0x38c9e8 = ObjectKeys2LowerCase($request.headers) ?? "";
        let _0x5a79f3 = _0x38c9e8.cookie,
          _0x42d583 = await getUserInfo(_0x5a79f3);
        if (!_0x42d583 || !_0x5a79f3) {
          throw new Error("获取用户信息失败,数据缺失");
        }
        const _0x1bcfba = userCookie.findIndex(_0x497365 => _0x497365.userName == _0x42d583),
          _0x3143d9 = {
            userId: _0x42d583,
            userName: _0x42d583,
            token: _0x5a79f3
          };
        userCookie[_0x1bcfba] ? userCookie[_0x1bcfba] = {
          ...userCookie[_0x1bcfba],
          userId: _0x3143d9.userId,
          userName: _0x3143d9.userName,
          token: _0x3143d9.token
        } : userCookie.push(_0x3143d9);
        $.setdata(_0x42d583, "quark_user");
        $.msg($.name, "🎉" + _0x3143d9.userName + "更新token成功!", "当前获取ck信息对象:" + ($.quark_user || "未选择") + " => " + _0x3143d9.userName);
      } catch (_0x5bbd21) {
        throw _0x5bbd21;
      }
    }
    function _0x580ed1() {
      try {
        const _0x31f41b = userCookie.findIndex(_0x16a27e => _0x16a27e.userName == $.quark_user);
        if (!$.quark_user || _0x31f41b == -1) {
          throw new Error("未查询到当前用户，请先扫码登录获取token");
        }
        const _0x5a068f = $request.url.match(/welfare/),
          {
            kps: _0x1c5a81
          } = _0x5a068f ? getQueries($request.url) : UrlToJson($request.body);
        if (!_0x1c5a81) {
          throw new Error("获取用户信息失败,kps不存在");
        }
        const _0x547b90 = _0x5a068f ? "welfare" : "carbon";
        userCookie[_0x31f41b].kps = _0x1c5a81;
        userCookie[_0x31f41b][_0x547b90] = {
          params: $request.url.split("?")[1],
          body: $request.body
        };
        $.msg($.name, "🎉" + $.quark_user + "收录" + _0x547b90 + "任务成功!", "");
      } catch (_0xf34cc6) {
        throw _0xf34cc6;
      }
    }
    function _0x3b84bb() {
      try {
        const _0x509888 = userCookie.findIndex(_0x591f3d => _0x591f3d.userName == $.quark_user);
        if (!$.quark_user || _0x509888 == -1) {
          throw new Error("未查询到当前用户，请先扫码登录获取token");
        }
        const {
          tid: _0x117d3c
        } = getQueries($request.url) ?? {};
        let _0x5efa9a = $.toObj($response.body),
          _0x461b95 = _0x5efa9a?.["data"]?.["curTask"]?.["name"];
        if (_0x117d3c == "1776281") {
          return $.msg($.name, "⛔️ " + $.quark_user + "收录任务信息失败!", "任务名称:" + _0x461b95 + "\n失败原因:不支持" + _0x461b95 + ",请获取其它任务");
        }
        const [, _0xc82265] = $request.url.split("?");
        if (!userCookie[_0x509888].taskTrigger) {
          userCookie[_0x509888].taskTrigger = {};
        }
        const _0x48096c = {
          name: _0x461b95,
          params: _0xc82265
        };
        userCookie[_0x509888].taskTrigger[_0x117d3c] = _0x48096c;
        $.msg($.name, "🎉" + $.quark_user + "收录福利空间日常任务成功!", "任务名称: " + _0x461b95 + "\n任务编号: " + _0x117d3c);
      } catch (_0xb4e636) {
        throw _0xb4e636;
      }
    }
    function _0x473d85() {
      try {
        const _0x1a0812 = userCookie.findIndex(_0x1dd491 => _0x1dd491.userName == $.quark_user);
        if (!$.quark_user || _0x1a0812 == -1) {
          throw new Error("未查询到当前用户，请先扫码登录获取token");
        }
        const {
          state: _0x2cea49
        } = UrlToJson($request.body);
        if (!userCookie[_0x1a0812].sleepTrigger) {
          userCookie[_0x1a0812].sleepTrigger = {};
        }
        userCookie[_0x1a0812].sleepTrigger[_0x2cea49] = {
          params: $request.url.split("?")[1],
          body: $request.body
        };
        $.msg($.name, "🎉" + $.quark_user + "收录" + _0x2cea49 + "任务成功!", "");
      } catch (_0x105de9) {
        throw _0x105de9;
      }
    }
  } catch (_0x39d2e4) {
    throw _0x39d2e4;
  }
}
async function getUserInfo(_0x396a2e) {
  try {
    const _0x86e76b = {
      url: "https://pan.quark.cn/account/info?fr=h5&platform=others",
      headers: {}
    };
    _0x86e76b.headers.Cookie = _0x396a2e;
    _0x86e76b.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0";
    let _0x3334a4 = await Request(_0x86e76b);
    return _0x3334a4?.["data"]?.["nickname"];
  } catch (_0x5f39bf) {
    this.ckStatus = false;
    $.log("[" + (this.userName || this.index) + "][ERROR] 查询用户信息失败:" + _0x5f39bf + "\n");
  }
}
function getQueries(_0x39d22) {
  const [, _0x5b6647] = _0x39d22.split("?");
  return _0x5b6647 ? _0x5b6647.split("&").reduce((_0x12b5e4, _0x3f7814) => {
    var [_0x1474df, _0x3f7814] = _0x3f7814.split("=");
    _0x12b5e4[_0x1474df] = _0x3f7814;
    return _0x12b5e4;
  }, {}) : {};
}
function UrlToJson(_0x2e0263) {
  let _0x30974d = _0x2e0263.split("&"),
    _0x2a4511 = {};
  for (let _0x559793 of _0x30974d) {
    let _0x101885 = _0x559793.split("="),
      _0x256111 = _0x101885[0],
      _0x351837 = decodeURIComponent(_0x101885[1]);
    _0x2a4511["" + _0x256111] = _0x351837;
  }
  return _0x2a4511;
}
!(async () => {
  try {
    typeof $request != "undefined" ? await getCookie() : (await checkEnv(), await main());
  } catch (_0x336307) {
    throw _0x336307;
  }
})().catch(_0x15c001 => {
  $.logErr(_0x15c001);
  $.msg($.name, "⛔️ script run error!", _0x15c001.message || _0x15c001);
}).finally(async () => {
  const _0x759a76 = {
    ok: 1
  };
  $.done(_0x759a76);
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
    $.log(`\n[INFO]检测到 ${userCookie?.length ?? 0} 个账号\n`);
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
      throw new Error("[URL][ERROR]缺少 url 参数");
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
      m = $.http[p.toLowerCase()](l).then(t => "data" == u ? $.toObj(t.body) || t.body : $.toObj(t) || t).catch(t => $.log(`[${p.toUpperCase()}][ERROR]${t}\n`));
    return Promise.race([new Promise((t, o) => setTimeout(() => o("当前请求已超时"), i)), m]);
  } catch (t) {
    console.log(`[${p.toUpperCase()}][ERROR]${t}\n`);
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