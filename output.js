//6/30/2024, 2:41:28 PM
//Modify:https://github.com/lck7/decode
const $ = new Env("阿里云社区"),
  ckName = "aliyunWeb_data",
  controlTime = ($.isNode() ? process.env.aliyunWeb_time : $.getdata("aliyunWeb_time")) || "12",
  controlScene = ($.isNode() ? process.env.aliyunWeb_scene : $.getdata("aliyunWeb_scene")) || "false",
  controlStock = ($.isNode() ? process.env.aliyunWeb_stock : $.getdata("aliyunWeb_stock")) || "false",
  Notify = 1,
  notify = $.isNode() ? require("./sendNotify") : "";
let envSplitor = ["@"];
var userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
let userList = [],
  userIdx = 0,
  userCount = 0;
const taskGroup = [{
  code: "",
  name: "我的社区"
}, {
  code: "ecs",
  name: "弹性计算"
}, {
  code: "computenest",
  name: "计算巢"
}, {
  code: "yitian",
  name: "倚天"
}, {
  code: "cloudnative",
  name: "云原生"
}, {
  code: "storage",
  name: "云存储"
}, {
  code: "luoshen",
  name: "飞天洛神云网络"
}, {
  code: "database",
  name: "数据库"
}, {
  code: "polardb",
  name: "PolarDB开源"
}, {
  code: "bigdata",
  name: "大数据与机器学习"
}, {
  code: "modelscope",
  name: "ModelScope模型即服务"
}, {
  code: "viapi",
  name: "视觉智能"
}, {
  code: "iot",
  name: "物联网"
}, {
  code: "devops",
  name: "云效DevOps"
}, {
  code: "aliyun_linux",
  name: "龙蜥操作系统"
}, {
  code: "modelstudio",
  name: "百炼大模型"
}, {
  code: "tongyi",
  name: "通义大模型"
}];
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.notifyList = [];
$.notifyMsg = [];
let pendingScore = 0,
  userScore = 0,
  sceneId = "",
  resourceFrom = "",
  sectionId = "",
  ip = "";
async function main() {
  try {
    $.log("\n================== 任务 ==================\n");
    for (let _0x507572 of userList) {
      console.log("🔷账号" + _0x507572.index + " >> Start work");
      console.log("随机延迟" + _0x507572.getRandomTime() + "秒");
      const _0x59d553 = Date.now();
      userScore = (await _0x507572.interactData()) ?? {};
      if (_0x507572.ckStatus) {
        if (_0x59d553 < new Date(new Date().setHours(Math.floor(controlTime), 0, 0, 0)).getTime()) {
          for (let _0x3dbb0d of taskGroup) {
            const _0x249ac6 = await _0x507572.getUserSpaceSignInDetail(_0x3dbb0d.code),
              _0x4e1e6e = await _0x507572.getTasks(_0x249ac6);
            await _0x507572.signin(_0x4e1e6e, _0x3dbb0d.name);
            await $.wait(_0x507572.getRandomTime());
            const _0x3ef06e = await _0x507572.assessSignInBonusQualification(_0x249ac6, _0x3dbb0d.name);
            await $.wait(_0x507572.getRandomTime());
            _0x3ef06e && (await _0x507572.receiveSignInBonus(_0x249ac6, _0x3dbb0d.name), await $.wait(_0x507572.getRandomTime()));
          }
          const _0x47aea7 = await _0x507572.getEbooks();
          await $.wait(_0x507572.getRandomTime());
          const _0x550854 = await _0x507572.getCsrfToken(_0x47aea7, "ebook");
          await $.wait(_0x507572.getRandomTime());
          await _0x507572.addBookComment(_0x47aea7, _0x550854);
          await $.wait(_0x507572.getRandomTime());
          for (let _0x1117a5 = 0; _0x1117a5 < 5; _0x1117a5++) {
            const _0xca4046 = await _0x507572.getArticles();
            await $.wait(_0x507572.getRandomTime());
            await _0x507572.likeOrNotLike(_0xca4046, "aliyun-public-like", 0);
            await $.wait(_0x507572.getRandomTime());
            await _0x507572.likeOrNotLike(_0xca4046, "aliyun-public-favorite", 0);
            await $.wait(_0x507572.getRandomTime());
            _0x1117a5 === 0 && (await _0x507572.addComment(_0xca4046), await $.wait(_0x507572.getRandomTime()), await _0x507572.likeOrNotLike(_0xca4046, "aliyun-public-share", 0), await $.wait(_0x507572.getRandomTime()));
            const _0x43c221 = await _0x507572.getAsks();
            await $.wait(_0x507572.getRandomTime());
            if (_0x43c221 && _0x43c221?.["id"]) {
              const _0x27ad5f = await _0x507572.getCsrfToken(_0x43c221.id, "ask");
              await $.wait(_0x507572.getRandomTime());
              const _0x49ce4b = await _0x507572.getAskDetail(_0x43c221);
              await $.wait(_0x507572.getRandomTime());
              _0x49ce4b && (await _0x507572.voteAnswer(_0x43c221.id, _0x49ce4b, _0x27ad5f, 1), await $.wait(_0x507572.getRandomTime()));
            }
          }
          JSON.parse(controlScene) && (await _0x507572.doScene(), await $.wait(_0x507572.getRandomTime()));
          JSON.parse(controlStock) && (await _0x507572.getGroupItems());
          pendingScore = await _0x507572.getUserTotalPendingScore();
          $.title = "获得待领取积分: " + pendingScore;
          DoubleLog("🎉 当前积分: " + userScore + ", 待领取积分: " + pendingScore);
        } else {
          for (let _0x32e5b1 of taskGroup) {
            const _0x3a661c = await _0x507572.getUserSpaceSignInDetail(_0x32e5b1.code),
              _0x264f48 = await _0x507572.assessSignInBonusQualification(_0x3a661c, _0x32e5b1.name);
            await $.wait(_0x507572.getRandomTime());
            _0x264f48 && (await _0x507572.receiveSignInBonus(_0x3a661c, _0x32e5b1.name), await $.wait(_0x507572.getRandomTime()));
          }
          pendingScore = await _0x507572.getUserTotalPendingScore();
          await $.wait(_0x507572.getRandomTime());
          await _0x507572.collect();
          await $.wait(_0x507572.getRandomTime());
          await $.wait(_0x507572.getRandomTime());
          const _0x403cec = (await _0x507572.getFavors()) ?? [];
          await $.wait(_0x507572.getRandomTime());
          if (_0x403cec.length) {
            for (let _0x1bbcf3 of _0x403cec) {
              await _0x507572.likeOrNotLike(_0x1bbcf3.objectId, "aliyun-public-like", 1);
              await $.wait(_0x507572.getRandomTime());
              await _0x507572.likeOrNotLike(_0x1bbcf3.objectId, "aliyun-public-favorite", 1);
              await $.wait(_0x507572.getRandomTime());
            }
          }
          JSON.parse(controlStock) && (await _0x507572.getGroupItems());
          let _0x5ad5df = (await _0x507572.interactData()) ?? {};
          $.title = "本次运行共获得" + (pendingScore || 0) + "积分";
          DoubleLog("🎉 领取积分: " + pendingScore + ", 当前积分: " + _0x5ad5df);
        }
      } else {
        $.notifyMsg.push("⛔️ 账号" + (_0x507572.userName || _0x507572.index) + " >> Check ck error!");
      }
      $.notifyList.push({
        id: _0x507572.index,
        avatar: _0x507572.avatar,
        message: $.notifyMsg
      });
      $.notifyMsg = [];
    }
  } catch (_0x330532) {
    $.log("⛔️ main run error => " + _0x330532);
    throw new Error("⛔️ main run error => " + _0x330532);
  }
}
class UserInfo {
  constructor(_0x5de883) {
    this.index = ++userIdx;
    this.token = _0x5de883.token || _0x5de883;
    this.userId = _0x5de883.userId;
    this.userName = _0x5de883.userName;
    this.avatar = _0x5de883.avatar;
    this.ckStatus = true;
    this.baseUrl = "";
    this.host = "https://developer.aliyun.com/developer/api";
    this.headers = {
      Cookie: this.token,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Referer: "https://developer.aliyun.com/"
    };
    this.getRandomTime = () => randomInt(1, 2);
    this.fetch = async _0x2ad788 => {
      try {
        if (typeof _0x2ad788 === "string") {
          _0x2ad788 = {
            url: _0x2ad788
          };
        }
        if (_0x2ad788?.["url"]?.["startsWith"]("/")) {
          _0x2ad788.url = this.host + _0x2ad788.url;
        }
        const _0x48e326 = await Request({
          ..._0x2ad788,
          headers: _0x2ad788.headers || this.headers,
          url: _0x2ad788.url || this.baseUrl
        });
        debug(_0x48e326, _0x2ad788?.["url"]?.["replace"](/\/+$/, "")["substring"](_0x2ad788?.["url"]?.["lastIndexOf"]("/") + 1));
        if (_0x48e326?.["code"] == 40001) {
          throw new Error(_0x48e326?.["message"] || "用户需要去登录");
        }
        return _0x48e326;
      } catch (_0xcf8343) {
        this.ckStatus = false;
        $.log("⛔️ 请求发起失败！" + _0xcf8343);
      }
    };
  }
  async getUser() {
    try {
      const _0x49e89f = {
        url: "/my/user/getUser",
        type: "get"
      };
      await this.fetch(_0x49e89f);
    } catch (_0x415ea5) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x415ea5);
    }
  }
  async assessSignInBonusQualification(_0x4b5d20, _0x539ea4) {
    try {
      const _0x21093f = {
        url: "/sign/assessSignInBonusQualification",
        type: "get",
        params: {
          taskGroupId: _0x4b5d20
        }
      };
      let _0x56bfd0 = await this.fetch(_0x21093f);
      return _0x56bfd0?.["data"];
    } catch (_0x52e0b6) {
      this.ckStatus = false;
      $.log("⛔️ 查询领奖条件失败! " + _0x52e0b6);
    }
  }
  async receiveSignInBonus(_0x591aa9, _0x1df1cc) {
    try {
      const _0x45bded = {
        url: "/sign/receiveSignInBonus",
        type: "post",
        dataType: "form",
        body: {
          taskGroupId: _0x591aa9
        }
      };
      let _0x19dc23 = await this.fetch(_0x45bded);
      if (_0x19dc23?.["code"] == "200") {
        const _0x358ca5 = _0x19dc23?.["data"] || 0;
        $.log("✅ 抽奖 - " + (_0x1df1cc || "default") + ": 获得 " + _0x358ca5 + " 积分");
      } else {
        $.log("⛔️ 抽奖 - " + (_0x1df1cc || "default") + ": " + _0x19dc23?.["message"]);
      }
    } catch (_0x386830) {
      this.ckStatus = false;
      $.log("⛔️ 抽奖失败! " + _0x386830);
    }
  }
  async getUserSpaceSignInDetail(_0x37525b) {
    try {
      const _0x44af4c = {
        url: "/sign/getUserSpaceSignInDetail",
        type: "get",
        params: {
          excode: _0x37525b
        }
      };
      let _0x3cedae = await this.fetch(_0x44af4c);
      const _0x34838f = _0x3cedae?.["data"]?.["taskGroupId"];
      return _0x34838f;
    } catch (_0x498cce) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x498cce);
    }
  }
  async getTasks(_0x3689f1) {
    try {
      const _0xae862 = {
        url: "/task/getTaskGroup?groupId=" + _0x3689f1,
        type: "get"
      };
      let _0x4805c1 = await this.fetch(_0xae862);
      const _0x3c58bb = _0x4805c1?.["data"]?.["taskList"];
      let _0x168c6a = {};
      if (_0x3c58bb.length) {
        const _0x4295e6 = new Date().getTime();
        for (let _0x13cc19 of _0x3c58bb) {
          if (_0x4295e6 >= _0x13cc19.gmtEnableStart && _0x4295e6 <= _0x13cc19.gmtEnableEnd) {
            const _0x8a2a2b = JSON.parse(_0x13cc19.finishRule.replace(/&quot;/g, "\""));
            _0x168c6a.actionCode = _0x8a2a2b.actions[0].actionCode;
            _0x168c6a.activityCode = _0x8a2a2b.actions[0].actionCode;
            _0x168c6a.objectId = _0x8a2a2b.actions[0].objectId;
          }
        }
      }
      return _0x168c6a;
    } catch (_0x1336f2) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x1336f2);
    }
  }
  async signin(_0x2fdb87, _0x8abe80) {
    try {
      const _0x424be1 = {
        url: "/task/actionLog",
        type: "post",
        dataType: "form",
        body: _0x2fdb87
      };
      let _0x5b26c0 = await this.fetch(_0x424be1);
      $.log("✅ 签到 - " + (_0x8abe80 || "default") + ": " + _0x5b26c0?.["message"]);
    } catch (_0x349eb6) {
      this.ckStatus = false;
      $.log("⛔️ 签到失败! " + _0x349eb6);
    }
  }
  async getArticles() {
    try {
      const _0x224c13 = Math.floor(Math.random() * 31) + 1,
        _0x1b4b4d = {
          url: "https://developer.aliyun.com/group/aliware/article_hot?pageNum=" + _0x224c13,
          type: "get"
        };
      let _0x5e3193 = await this.fetch(_0x1b4b4d);
      const _0x47b516 = $.Cheerio.load(_0x5e3193),
        _0x258ee0 = _0x47b516(".community-detail-content"),
        _0x1f7dfc = _0x258ee0.find(".community-list").map((_0x2e5cfc, _0x18bba0) => {
          return {
            id: _0x47b516(_0x18bba0).find(".feed-item").attr("data-id"),
            name: _0x47b516(_0x18bba0).find(".feed-item-content-title h3").text()
          };
        }).get(),
        _0x28ef88 = _0x1f7dfc[Math.floor(Math.random() * _0x1f7dfc.length)],
        {
          id: _0x4c8d7,
          name: _0xf84abd
        } = _0x28ef88;
      $.log("✅ 随机获取文章id: " + _0x4c8d7 + ", 标题: " + _0xf84abd);
      return _0x4c8d7;
    } catch (_0x3f3c85) {
      this.ckStatus = false;
      $.log("⛔️ 获取文章列表失败! " + _0x3f3c85);
    }
  }
  async getEbooks() {
    try {
      const _0x5b55ff = Math.floor(Math.random() * 501) + 1,
        _0x51cf20 = {
          url: "https://developer.aliyun.com/ebook/index/__0_0_0_" + _0x5b55ff,
          type: "get"
        };
      let _0x9a3b20 = await this.fetch(_0x51cf20);
      const _0x241b36 = $.Cheerio.load(_0x9a3b20),
        _0x5a8586 = _0x241b36(".ebook-home-list"),
        _0x57ef63 = _0x5a8586.find(".ebook-home-item").map((_0x164602, _0x3fe102) => {
          return {
            id: _0x241b36(_0x3fe102).attr("href").replace("/ebook/", ""),
            name: _0x241b36(_0x3fe102).find(".ebook-home-title").text()
          };
        }).get(),
        _0x4ee321 = _0x57ef63[Math.floor(Math.random() * _0x57ef63.length)],
        {
          id: _0x228f4b,
          name: _0x40a173
        } = _0x4ee321;
      $.log("✅ 随机电子书id: " + _0x228f4b + ", 标题: " + _0x40a173);
      return _0x228f4b;
    } catch (_0x44902c) {
      this.ckStatus = false;
      $.log("⛔️ 获取电子书列表失败! " + _0x44902c);
    }
  }
  async getAsks() {
    try {
      const _0x338b9d = Math.floor(Math.random() * 31) + 1,
        _0x4162be = {
          url: "https://developer.aliyun.com/ask?pageNum=" + _0x338b9d,
          type: "get"
        };
      let _0x305a50 = await this.fetch(_0x4162be);
      const _0x10e430 = $.Cheerio.load(_0x305a50),
        _0x530775 = _0x10e430(".askProduct-list"),
        _0x4d7a98 = _0x530775.find(".askProduct-item").map((_0x4b8a25, _0xff1555) => {
          return {
            id: _0x10e430(_0xff1555).attr("data-id") || "",
            name: _0x10e430(_0xff1555).find(".askProduct-item-title-text h3").text() || "",
            answer: parseInt(_0x10e430(_0xff1555).find(".askProduct-item-info-answer").text()) || ""
          };
        }).filter((_0x1a28d3, _0x184f8e) => _0x184f8e.answer > 0).get(),
        _0x585148 = _0x4d7a98[Math.floor(Math.random() * _0x4d7a98.length)];
      if (_0x585148?.["id"] && _0x585148?.["name"]) {
        const {
          id: _0x491c4e,
          name: _0x2ca718
        } = _0x585148;
        $.log("✅ 随机获取问答id: " + _0x491c4e + ", 标题: " + _0x2ca718);
        return _0x585148;
      }
      return null;
    } catch (_0x5d787f) {
      this.ckStatus = false;
      $.log("⛔️ 获取问答列表失败! " + _0x5d787f);
    }
  }
  async getAskDetail(_0x1c4220) {
    try {
      const _0x41b520 = {
        url: "https://developer.aliyun.com/ask/" + _0x1c4220.id,
        type: "get"
      };
      let _0x17565b = await this.fetch(_0x41b520);
      const _0x6c1b4e = $.Cheerio.load(_0x17565b),
        _0x39e211 = _0x6c1b4e(".answer-list"),
        _0x148ac6 = _0x39e211.find(".answer-item").map((_0x17278a, _0xff9f6c) => {
          return {
            id: _0x6c1b4e(_0xff9f6c).attr("data-id") || ""
          };
        }).get(),
        _0x59bdc3 = _0x148ac6[Math.floor(Math.random() * _0x1c4220.answer)];
      if (_0x59bdc3) {
        const {
          id: _0xdc624a
        } = _0x59bdc3;
        $.log("✅ 随机获取问题问答id: " + _0xdc624a);
        return _0xdc624a;
      }
      return null;
    } catch (_0x1e4d6e) {
      this.ckStatus = false;
      $.log("⛔️ 随机获取问题问答失败! " + _0x1e4d6e);
    }
  }
  async likeOrNotLike(_0x22538f, _0x2cd9da, _0x353ae3) {
    try {
      const _0x238ee8 = {
        url: "https://ucc.aliyun.com/uccPagingComponent/likeOrNotLike",
        type: "get",
        params: {
          bizCategory: "yq-article",
          actionCode: _0x2cd9da,
          objectId: _0x22538f,
          status: _0x353ae3,
          uccCsrfToken: await this.getUccCsrfToken(),
          callback: getCallback()
        }
      };
      await this.fetch(_0x238ee8);
      let _0x2d813f = "文章" + (_0x353ae3 === 1 ? "取消" : "");
      if (_0x2cd9da === "aliyun-public-like") {
        _0x2d813f += "点赞";
      } else {
        if (_0x2cd9da === "aliyun-public-favorite") {
          _0x2d813f += "收藏";
        } else {
          _0x2cd9da === "aliyun-public-share" && (_0x2d813f += "分享");
        }
      }
      $.log("✅ " + _0x2d813f + "成功: " + _0x22538f);
    } catch (_0x4b0b24) {
      this.ckStatus = false;
      $.log("⛔️ " + taskType + "失败! " + _0x4b0b24);
    }
  }
  async getCsrfToken(_0x11aa6a, _0x3ed69c) {
    try {
      const _0x33b573 = {
          url: "https://developer.aliyun.com/csrfToken",
          type: "get",
          headers: {
            Cookie: this.token,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
            Referer: "https://developer.aliyun.com/" + _0x3ed69c + "/" + _0x11aa6a
          }
        },
        _0x2e3712 = await this.fetch(_0x33b573);
      return _0x2e3712?.["token"];
    } catch (_0x121a82) {
      this.ckStatus = false;
      $.log("⛔️ 获取 csrf 失败! " + _0x121a82);
    }
  }
  async voteAnswer(_0x4f8585, _0x5029e0, _0x24aa3c, _0x2f0caf) {
    try {
      const _0x56ba1a = {
        url: "https://developer.aliyun.com/developer/api/my/ask/voteAnswer",
        type: "post",
        dataType: "form",
        headers: {
          Cookie: this.token,
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
          Referer: "https://developer.aliyun.com/ask/" + _0x4f8585
        },
        params: {
          p_csrf: _0x24aa3c
        },
        body: {
          id: _0x5029e0,
          votes: _0x2f0caf
        }
      };
      await this.fetch(_0x56ba1a);
      $.log("✅ 回答点赞: " + _0x4f8585 + "-" + _0x5029e0);
    } catch (_0x2fe217) {
      this.ckStatus = false;
      $.log("⛔️ 回答点赞失败! " + _0x2fe217);
    }
  }
  async addBookComment(_0x25d808, _0x27f437) {
    try {
      const _0x429ce4 = {
          url: "https://developer.aliyun.com/developer/api/ebook/mark/add",
          type: "post",
          dataType: "json",
          headers: {
            Cookie: this.token,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
            Referer: "https://developer.aliyun.com/ebook/" + _0x25d808
          },
          params: {
            p_csrf: _0x27f437
          },
          body: {
            eBookId: _0x25d808,
            score: 10,
            content: "很棒的一本书"
          }
        },
        _0x2f8890 = await this.fetch(_0x429ce4);
      _0x2f8890?.["code"] == "200" ? $.log("✅ 评价电子书: " + _0x25d808) : $.log("⛔️ 评价电子书失败! " + _0x2f8890?.["message"]);
    } catch (_0x46d0ac) {
      this.ckStatus = false;
      $.log("⛔️ 评价电子书失败! " + _0x46d0ac);
    }
  }
  async getFavors() {
    try {
      const _0x48e37e = {
          url: "https://developer.aliyun.com/developer/api/my/subscribe/listUserFavor",
          type: "get",
          params: {
            pageNum: 1,
            pageSize: 10,
            type: 1
          }
        },
        _0x30344c = await this.fetch(_0x48e37e),
        {
          list: _0x4462b3
        } = _0x30344c?.["data"];
      if (_0x4462b3.length) {
        $.log("✅ 开始取消文章的点赞与收藏记录");
        return _0x4462b3;
      }
      return [];
    } catch (_0x34191a) {
      this.ckStatus = false;
      $.log("⛔️ " + (type === "aliyun-public-like" ? "文章点赞" : "文章收藏") + "失败! " + _0x34191a);
    }
  }
  async addComment(_0x5990e2) {
    try {
      const _0x3cf579 = {
        url: "https://ucc.aliyun.com/uccPagingComponent/addComment",
        type: "get",
        params: {
          content: encodeURIComponent("感谢博主的分享"),
          objectId: _0x5990e2,
          bizCategory: "yq-comment-type-article",
          commentType: 0,
          sourceAppCode: "developer-ecology",
          sourceBizCategory: "developer-ecology-group",
          uccCsrfToken: await this.getUccCsrfToken(),
          callback: getCallback()
        }
      };
      await this.fetch(_0x3cf579);
      $.log("✅ 文章评论: " + _0x5990e2);
    } catch (_0x2958b7) {
      this.ckStatus = false;
      $.log("⛔️ 文章点赞失败! " + _0x2958b7);
    }
  }
  async doScene() {
    const _0x2e28a1 = this.token.match(new RegExp("c_csrf=([^;]*)"))[1];
    await this.getSceneList();
    await $.wait(this.getRandomTime());
    const _0xdfd11b = await this.getSceneDetailPageInfoById();
    await $.wait(this.getRandomTime());
    if (_0xdfd11b) {
      await this.getSceneStartPageInfoById();
      await $.wait(this.getRandomTime());
      await this.startSceneById(_0x2e28a1);
      await $.wait(this.getRandomTime());
      resourceFrom === "1" && sectionId && (await this.createResourceById(_0x2e28a1), await $.wait(this.getRandomTime()), await this.getResourceCardInfoById(), await $.wait(this.getRandomTime()));
      await this.closeSceneById(_0x2e28a1);
      await $.wait(this.getRandomTime());
    } else {
      await this.doScene();
    }
  }
  async getSceneList() {
    try {
      const _0x34c74e = Math.floor(Math.random() * 27) + 1,
        _0xe9f3ee = 21,
        _0x2b6242 = {
          url: "https://developer.aliyun.com/adc/api/getSceneList",
          type: "get",
          params: {
            tags: encodeURIComponent(","),
            difficulty: "",
            orderBy: "useCountTotal",
            pageNum: _0x34c74e,
            pageSize: _0xe9f3ee
          },
          headers: {
            Cookie: this.headers.Cookie,
            Referer: "https://developer.aliyun.com/adc/labs/",
            "User-Agent": this.headers["User-Agent"]
          }
        },
        _0xae6903 = await this.fetch(_0x2b6242),
        _0x4c9afc = _0xae6903?.["data"]?.["list"];
      if (_0x4c9afc.length) {
        const _0x265125 = _0x4c9afc[Math.floor(Math.random() * _0x4c9afc.length)];
        sceneId = _0x265125?.["id"];
        $.log("✅ 获取场景: " + _0x265125.name + "[" + sceneId + "]");
      } else {
        $.log("⛔️ 获取场景失败! " + e);
      }
    } catch (_0x394584) {
      this.ckStatus = false;
      $.log("⛔️ 获取场景失败! " + _0x394584);
    }
  }
  async getSceneDetailPageInfoById() {
    try {
      const _0xc2c464 = {
          url: "https://developer.aliyun.com/adc/api/getSceneDetailPageInfoById",
          type: "get",
          params: {
            id: sceneId
          },
          headers: {
            cookie: this.headers.Cookie,
            referer: "https://developer.aliyun.com/adc/scenario/" + sceneId,
            "user-agent": this.headers["User-Agent"]
          }
        },
        _0x5bf127 = await this.fetch(_0xc2c464),
        {
          buttonCode: _0x16d8da
        } = _0x5bf127?.["data"]?.["developerAdcExperienceStatusVO"];
      return _0x16d8da === "1" ? ($.log("✅ 确认场景状态: " + _0x5bf127?.["data"]?.["id"]), _0x5bf127?.["data"]?.["id"]) : ($.log("⛔️ 确认场景状态: " + _0x5bf127?.["data"]?.["id"] + " 已完成，将重新获取场景"), null);
    } catch (_0x271288) {
      this.ckStatus = false;
      $.log("⛔️ 确认场景状态失败! " + _0x271288);
    }
  }
  async getSceneStartPageInfoById() {
    try {
      const _0x453827 = {
          url: "https://developer.aliyun.com/adc/api/getSceneStartPageInfoById",
          type: "get",
          params: {
            id: sceneId
          },
          headers: {
            cookie: this.headers.Cookie,
            referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId,
            "user-agent": this.headers["User-Agent"]
          }
        },
        _0x68cb9d = await this.fetch(_0x453827);
      ip = _0x68cb9d?.["data"]?.["ip"];
      _0x68cb9d?.["data"]?.["resourceFrom"]["indexOf"]("1") > -1 ? resourceFrom = "1" : resourceFrom = "2";
      _0x68cb9d?.["data"]?.["resourceCardInfoDTOList"]["length"] && (sectionId = _0x68cb9d?.["data"]?.["resourceCardInfoDTOList"][0]?.["id"]);
      $.log("✅ 获取场景初始化信息: " + sceneId);
    } catch (_0x47d6a9) {
      this.ckStatus = false;
      $.log("⛔️ 获取场景初始化信息失败! " + _0x47d6a9);
    }
  }
  async startSceneById(_0x46d2ff) {
    try {
      const _0xfffea8 = {
          url: "https://developer.aliyun.com/adc/api/startSceneById",
          type: "post",
          dataType: "form",
          headers: {
            Host: "developer.aliyun.com",
            H_csrf: _0x46d2ff,
            "X-XSRF-TOKEN": _0x46d2ff,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          },
          params: {
            p_csrf: _0x46d2ff
          },
          body: {
            id: sceneId,
            resourceFrom: resourceFrom
          }
        },
        _0x4be5da = await this.fetch(_0xfffea8),
        {
          code: _0x2f9b4e,
          message: _0x133dba
        } = _0x4be5da;
      console.log((_0x2f9b4e === "200" ? "✅" : "⛔️") + " 开始场景: " + sceneId + ", " + _0x133dba);
    } catch (_0x2a80aa) {
      this.ckStatus = false;
      $.log("⛔️ 开始场景失败! " + _0x2a80aa);
    }
  }
  async closeSceneById(_0x1d019d) {
    try {
      const _0x3912d3 = {
          url: "https://developer.aliyun.com/adc/api/closeSceneById",
          type: "post",
          dataType: "form",
          body: {
            sceneId: sceneId,
            forceClose: "true"
          },
          params: {
            p_csrf: _0x1d019d
          },
          headers: {
            Host: "developer.aliyun.com",
            H_csrf: _0x1d019d,
            "X-XSRF-TOKEN": _0x1d019d,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          }
        },
        _0x34fc20 = await this.fetch(_0x3912d3),
        {
          code: _0x5d0133,
          message: _0x3603d5
        } = _0x34fc20;
      console.log((_0x5d0133 === "200" ? "✅" : "⛔️") + " 结束场景: " + sceneId + ", " + _0x3603d5);
    } catch (_0x4aa561) {
      this.ckStatus = false;
      $.log("⛔️ 结束场景失败! " + _0x4aa561);
    }
  }
  async createResourceById(_0xf69f45) {
    try {
      const _0x38aef7 = {
          url: "https://developer.aliyun.com/adc/api/createResourceById",
          type: "post",
          dataType: "form",
          body: {
            id: sceneId,
            sectionId: sectionId,
            ip: ip
          },
          params: {
            p_csrf: _0xf69f45
          },
          headers: {
            Host: "developer.aliyun.com",
            H_csrf: _0xf69f45,
            "X-XSRF-TOKEN": _0xf69f45,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          }
        },
        _0x5b7444 = await this.fetch(_0x38aef7);
      _0x5b7444?.["data"] && console.log("✅ 开始创建场景资源: " + sceneId);
    } catch (_0x235907) {
      this.ckStatus = false;
      $.log("⛔️ 创建场景资源失败! " + _0x235907);
    }
  }
  async getResourceCardInfoById() {
    try {
      const _0x1897a4 = {
          url: "https://developer.aliyun.com/adc/api/getResourceCardInfoById",
          type: "get",
          params: {
            sceneId: sceneId,
            sectionId: sectionId
          },
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            Cookie: this.token,
            Referer: "https://developer.aliyun.com/adc/scenario/exp/" + sceneId
          }
        },
        _0x2e5e8e = await this.fetch(_0x1897a4),
        {
          code: _0x71d827,
          data: _0x5d08fb
        } = _0x2e5e8e;
      if (_0x71d827 === "200" && _0x5d08fb) {
        if (_0x5d08fb?.["status"] !== "RUNNING") {
          await $.wait(this.getRandomTime());
          await this.getResourceCardInfoById();
        } else {
          console.log("✅ 创建场景资源完毕: " + sceneId);
          return true;
        }
      }
    } catch (_0x119cde) {
      this.ckStatus = false;
      $.log("⛔️ 创建场景资源失败! " + _0x119cde);
    }
  }
  async getGroupItems() {
    try {
      const _0x1b0bc4 = {
          url: "/lm/getGroupItems?pageNum=1&pageSize=50",
          type: "get"
        },
        _0x9802cd = await this.fetch(_0x1b0bc4),
        {
          list: _0x5da097
        } = _0x9802cd?.["data"];
      if (_0x5da097.length) {
        $.log("✅ 开始查询库存:");
        for (let _0x5c0aa1 of _0x5da097) {
          $.log("🎁 " + _0x5c0aa1.itemTitle.replace(/【.*?】/g, "") + ": " + _0x5c0aa1.points + " 分【" + (_0x5c0aa1.status === 0 ? "可兑换" : "积分不足") + "】");
        }
      }
    } catch (_0x3a97ed) {
      $.log("⛔️ 查询待收获积分列表失败! " + _0x3a97ed);
    }
  }
  async interactData() {
    try {
      const _0x13aaee = {
        url: "/my/score/getUserScore?appCode=developer",
        type: "get"
      };
      let _0x5e2e46 = await this.fetch(_0x13aaee);
      return _0x5e2e46?.["data"];
    } catch (_0x3c01de) {
      $.log("⛔️ 查询待收获积分列表失败! " + _0x3c01de);
    }
  }
  async getUserTotalPendingScore() {
    try {
      const _0x3e96b7 = {
        url: "/score/pending/getUserTotalPendingScore?appCode=developer",
        type: "get"
      };
      let _0x4299e1 = await this.fetch(_0x3e96b7);
      $.log("✅ 待领取积分: " + _0x4299e1?.["data"]);
      return _0x4299e1?.["data"];
    } catch (_0xf10696) {
      $.log("⛔️ 查询待领取积分失败! " + _0xf10696);
    }
  }
  async collect() {
    try {
      const _0x1d8df2 = {
        url: "/score/pending/receiveAllPendingScore?appCode=developer",
        type: "get"
      };
      let _0x40e009 = await this.fetch(_0x1d8df2);
      $.log("✅ 收取积分: " + _0x40e009?.["data"]);
      return _0x40e009?.["data"];
    } catch (_0x15c4df) {
      $.log("⛔️ 收取积分失败! " + _0x15c4df);
    }
  }
  async getUccCsrfToken() {
    try {
      const _0x4cd86d = {
        url: "https://ucc.aliyun.com/uccPagingComponent/getUser",
        type: "get",
        params: {
          uccCsrfToken: "",
          callback: getCallback()
        }
      };
      let _0x3716ff = await this.fetch(_0x4cd86d);
      const _0x31dd18 = _0x3716ff.indexOf("{"),
        _0x512ee8 = _0x3716ff.lastIndexOf("}"),
        _0x29e84c = _0x3716ff.substring(_0x31dd18, _0x512ee8 + 1),
        _0x4d7a2a = JSON.parse(_0x29e84c);
      return _0x4d7a2a.data.uccCsrfToken;
    } catch (_0x36f197) {
      $.log("⛔️ 获取UccCsrfToken失败! " + _0x36f197);
    }
  }
}
function getCallback() {
  return "jsonp_" + Date.now() + "_" + Math.ceil(100000 * Math.random());
}
async function getCookie() {
  if ($request && $request.method === "OPTIONS") {
    return;
  }
  const _0x2e6ac8 = ObjectKeys2LowerCase($request.headers),
    _0x140b74 = _0x2e6ac8.cookie,
    _0x432569 = $.toObj($response.body);
  if (!_0x432569?.["data"]) {
    $.msg($.name, "⛔️ 获取Cookie失败!", "");
    return;
  }
  const {
      nickname: _0x479fc0,
      avatar: _0x49b30a
    } = _0x432569?.["data"],
    _0x3fb204 = {
      userId: _0x479fc0,
      avatar: _0x49b30a,
      token: _0x140b74,
      userName: _0x479fc0
    };
  userCookie = userCookie ? JSON.parse(userCookie) : [];
  const _0x244ce1 = userCookie.findIndex(_0x299ae7 => _0x299ae7.userId == _0x3fb204.userId);
  userCookie[_0x244ce1] ? userCookie[_0x244ce1] = _0x3fb204 : userCookie.push(_0x3fb204);
  $.setjson(userCookie, ckName);
  $.msg($.name, "🎉" + _0x3fb204.userName + "更新token成功!", "");
}
async function loadModule() {
  try {
    $.Cheerio = await loadCheerio();
    return $.Cheerio ? true : false;
  } catch (_0x1d6e80) {
    throw new Error("⛔️ loadModule run error => " + _0x1d6e80);
  }
}
async function checkEnv() {
  try {
    const _0x2cbc15 = envSplitor.find(_0x337256 => userCookie.includes(_0x337256)) || envSplitor[0];
    userCookie = $.toObj(userCookie) || userCookie.split(_0x2cbc15);
    userList.push(...userCookie.map(_0x36f7fc => new UserInfo(_0x36f7fc)).filter(Boolean));
    userCount = userList.length;
    console.log("共找到" + userCount + "个账号");
    return true;
  } catch (_0x16f23c) {
    throw new Error("⛔️ checkEnv run error => " + _0x16f23c);
  }
}
async function Request(_0x32b181) {
  if (typeof _0x32b181 === "string") {
    _0x32b181 = {
      url: _0x32b181
    };
  }
  try {
    if (!_0x32b181?.["url"]) {
      throw new Error("[发送请求] 缺少 url 参数");
    }
    let {
      url: _0x3d9a60,
      type: _0x21f178,
      headers = {},
      body: _0x49401b,
      params: _0xe1ffb,
      dataType = "form",
      resultType = "data"
    } = _0x32b181;
    const _0x51d0b4 = _0x21f178 ? _0x21f178?.["toLowerCase"]() : "body" in _0x32b181 ? "post" : "get",
      _0x19d053 = _0x3d9a60.concat(_0x51d0b4 === "post" ? "?" + $.queryStr(_0xe1ffb) : ""),
      _0x4304ac = _0x32b181.timeout ? $.isSurge() ? _0x32b181.timeout / 1000 : _0x32b181.timeout : 10000;
    if (dataType === "json") {
      headers["Content-Type"] = "application/json;charset=UTF-8";
    }
    const _0xa15ff = _0x49401b && dataType == "form" ? $.queryStr(_0x49401b) : $.toStr(_0x49401b),
      _0x4225fd = {
        ..._0x32b181,
        ...(_0x32b181?.["opts"] ? _0x32b181.opts : {}),
        url: _0x19d053,
        headers: headers,
        ...(_0x51d0b4 === "post" && {
          body: _0xa15ff
        }),
        ...(_0x51d0b4 === "get" && _0xe1ffb && {
          params: _0xe1ffb
        }),
        timeout: _0x4304ac
      },
      _0x1885c2 = $.http[_0x51d0b4.toLowerCase()](_0x4225fd).then(_0x34a3e2 => resultType == "data" ? $.toObj(_0x34a3e2.body) || _0x34a3e2.body : $.toObj(_0x34a3e2) || _0x34a3e2).catch(_0x3ee28b => $.log("⛔️ 请求发起失败！原因为: " + _0x3ee28b));
    return Promise.race([new Promise((_0x18768a, _0x966bd1) => setTimeout(() => _0x966bd1("当前请求已超时"), _0x4304ac)), _0x1885c2]);
  } catch (_0x48200f) {
    console.log("⛔️ 请求发起失败！原因为: " + _0x48200f);
  }
}
function randomInt(_0x16306b, _0x3db90a) {
  return Math.round(Math.random() * (_0x3db90a - _0x16306b) + _0x16306b);
}
function DoubleLog(_0x2f5b29) {
  if (_0x2f5b29 && $.isNode()) {
    console.log("" + _0x2f5b29);
    $.notifyMsg.push("" + _0x2f5b29);
  } else {
    _0x2f5b29 && (console.log("" + _0x2f5b29), $.notifyMsg.push("" + _0x2f5b29));
  }
}
function debug(_0x43541b, _0x1f1bd2 = "debug") {
  $.is_debug === "true" && ($.log("\n-----------" + _0x1f1bd2 + "------------\n"), $.log(typeof _0x43541b == "string" ? _0x43541b : $.toStr(_0x43541b) || "debug error => t=" + _0x43541b), $.log("\n-----------" + _0x1f1bd2 + "------------\n"));
}
async function SendMsgList(_0x35e29d) {
  await Promise.allSettled(_0x35e29d?.["map"](_0x3c8a10 => SendMsg(_0x3c8a10.message.join("\n"), _0x3c8a10.avatar)));
}
async function SendMsg(_0xfe4b91, _0xdf9580) {
  _0xfe4b91 && (0 < Notify ? $.isNode() ? await notify.sendNotify($.name, _0xfe4b91) : $.msg($.name, $.title || "", _0xfe4b91, {
    "media-url": _0xdf9580
  }) : console.log(_0xfe4b91));
}
function ObjectKeys2LowerCase(_0xce8177) {
  _0xce8177 = Object.fromEntries(Object.entries(_0xce8177).map(([_0x8dd026, _0x272365]) => [_0x8dd026.toLowerCase(), _0x272365]));
  return new Proxy(_0xce8177, {
    get: function (_0x40c897, _0x5771c9, _0x1bda8f) {
      return Reflect.get(_0x40c897, _0x5771c9.toLowerCase(), _0x1bda8f);
    },
    set: function (_0x3a1557, _0x8e8230, _0x4a8139, _0x112c2b) {
      return Reflect.set(_0x3a1557, _0x8e8230.toLowerCase(), _0x4a8139, _0x112c2b);
    }
  });
}
async function loadCheerio() {
  let _0x435d94 = ($.isNode() ? process.env.Cheerio_code : $.getdata("Cheerio_code")) || "";
  if (_0x435d94 && Object.keys(_0x435d94).length) {
    console.log("✅" + $.name + ":缓存中存在Cheerio模块,跳过下载");
    eval(_0x435d94);
    return createCheerio();
  }
  console.log("🚀" + $.name + ":开始下载Cheerio模块");
  return new Promise(async _0x3b1f7f => {
    $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/Yuheng0101/X/main/Utils/cheerio.js").then(_0x2ee392 => {
      $.setdata(_0x2ee392, "Cheerio_code");
      eval(_0x2ee392);
      const _0x549267 = createCheerio();
      console.log("✅Cheerio模块加载成功,请继续");
      _0x3b1f7f(_0x549267);
    });
  });
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
  } else {
    if (!(await loadModule())) {
      throw new Error("⛔️ 加载模块失败，请检查模块路径是否正常");
    }
    if (!(await checkEnv())) {
      throw new Error("⛔️ 未检测到ck，请添加环境变量");
    }
    if (userList.length > 0) {
      await main();
    }
  }
})().catch(_0x2db63f => $.notifyMsg.push(_0x2db63f.message || _0x2db63f)).finally(async () => {
  await SendMsgList($.notifyList);
  $.done({
    ok: 1
  });
});
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
      return new Promise((e, r) => {
        s.call(this, t, (t, s, a) => {
          t ? r(t) : e(s);
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
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
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
        }, (t, s, r) => e(r));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        r = r ? r.replace(/\n/g, "").trim() : r;
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        a = a ? 1 * a : 20;
        a = e && e.timeout ? e.timeout : a;
        const [i, o] = r.split("@"),
          n = {
            url: `http://${o}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: a
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: a
          };
        this.post(n, (t, e, r) => s(r));
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
          r = !s && this.fs.existsSync(e);
        if (!s && !r) {
          return {};
        }
        {
          const r = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(r));
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
          r = !s && this.fs.existsSync(e),
          a = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, a) : r ? this.fs.writeFileSync(e, a) : this.fs.writeFileSync(t, a);
      }
    }
    lodash_get(t, e, s = void 0) {
      const r = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let a = t;
      for (const t of r) if (a = Object(a)[t], void 0 === a) {
        return s;
      }
      return a;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, r) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[r + 1]) >> 0 == +e[r + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, r] = /^@(.*?)\.(.*?)$/.exec(t),
          a = s ? this.getval(s) : "";
        if (a) {
          try {
            const t = JSON.parse(a);
            e = t ? this.lodash_get(t, r, "") : e;
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
        const [, r, a] = /^@(.*?)\.(.*?)$/.exec(e),
          i = this.getval(r),
          o = r ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, a, t);
          s = this.setval(JSON.stringify(e), r);
        } catch (e) {
          const i = {};
          this.lodash_set(i, a, t);
          s = this.setval(JSON.stringify(i), r);
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
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
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
          $httpClient.get(t, (t, s, r) => {
            !t && s && (s.body = r, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, r);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            }, i, o);
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
                statusCode: r,
                statusCode: a,
                headers: i,
                rawBody: o
              } = t,
              n = s.decode(o, this.encoding);
            e(null, {
              status: r,
              statusCode: a,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: r,
              response: a
            } = t;
            e(r, a, a && s.decode(a.rawBody, this.encoding));
          });
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
          $httpClient[s](t, (t, s, r) => {
            !t && s && (s.body = r, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, r);
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
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let r = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: a,
            ...i
          } = t;
          this.got[s](a, i).then(t => {
            const {
                statusCode: s,
                statusCode: a,
                headers: i,
                rawBody: o
              } = t,
              n = r.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: a,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: a
            } = t;
            e(s, a, a && r.decode(a.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let r = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in r) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[e] : ("00" + r[e]).substr(("" + r[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let r = t[s];
        null != r && "" !== r && ("object" == typeof r && (r = JSON.stringify(r)), e += `${s}=${r}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", r = "", a) {
      const i = t => {
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
                return {
                  url: t.url || t.openUrl || t["open-url"]
                };
              case "Loon":
                return {
                  openUrl: t.openUrl || t.url || t["open-url"],
                  mediaUrl: t.mediaUrl || t["media-url"]
                };
              case "Quantumult X":
                return {
                  "open-url": t["open-url"] || t.url || t.openUrl,
                  "media-url": t["media-url"] || t.mediaUrl,
                  "update-pasteboard": t["update-pasteboard"] || t.updatePasteboard
                };
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
            $notification.post(e, s, r, i(a));
            break;
          case "Quantumult X":
            $notify(e, s, r, i(a));
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        r && t.push(r);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
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