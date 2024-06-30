//6/30/2024, 1:29:57 PM
//Modify:https://github.com/lck7/decode
const $ = new Env("阿里云社区"),
  ckName = "aliyunWeb_data",
  controlTime = ($.isNode() ? process.env.aliyunWeb_time : $.getdata("aliyunWeb_time")) || "12";
$.appid = "";
const Notify = 1,
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
}];
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.notifyList = [];
$.notifyMsg = [];
$.codeServer = ($.isNode() ? process.env.codeServer_address : $.getdata("@codeServer.address")) || "";
$.codeOpen = ($.isNode() ? process.env.codeServer_open : $.getdata("@codeServer.open")) || "false";
$.wxCode = $.codeOpen != "false" && $.codeServer && $.appid;
let pendingScore = 0,
  userScore = 0;
async function main() {
  try {
    $.log("\n================== 任务 ==================\n");
    for (let _0x2057cb of userList) {
      console.log("🔷账号" + _0x2057cb.index + " >> Start work");
      console.log("随机延迟" + _0x2057cb.getRandomTime() + "秒");
      const _0x542d0e = Date.now();
      userScore = (await _0x2057cb.interactData()) ?? {};
      if (_0x2057cb.ckStatus) {
        if (_0x542d0e < new Date(new Date().setHours(Math.floor(controlTime), 0, 0, 0)).getTime()) {
          for (let _0x2dc088 of taskGroup) {
            const _0x33366d = await _0x2057cb.getUserSpaceSignInDetail(_0x2dc088.code),
              _0x3cc90e = await _0x2057cb.getTasks(_0x33366d);
            await _0x2057cb.signin(_0x3cc90e, _0x2dc088.name);
            await $.wait(_0x2057cb.getRandomTime());
            const _0x1dd0aa = await _0x2057cb.assessSignInBonusQualification(_0x33366d, _0x2dc088.name);
            await $.wait(_0x2057cb.getRandomTime());
            _0x1dd0aa && (await _0x2057cb.receiveSignInBonus(_0x33366d, _0x2dc088.name), await $.wait(_0x2057cb.getRandomTime()));
          }
          const _0x491b3e = await _0x2057cb.getEbooks();
          await $.wait(_0x2057cb.getRandomTime());
          const _0x3e215f = await _0x2057cb.getCsrfToken(_0x491b3e, "ebook");
          await $.wait(_0x2057cb.getRandomTime());
          await _0x2057cb.addBookComment(_0x491b3e, _0x3e215f);
          await $.wait(_0x2057cb.getRandomTime());
          for (let _0x4bf787 = 0; _0x4bf787 < 5; _0x4bf787++) {
            const _0x1e5997 = await _0x2057cb.getArticles();
            await $.wait(_0x2057cb.getRandomTime());
            await _0x2057cb.likeOrNotLike(_0x1e5997, "aliyun-public-like", 0);
            await $.wait(_0x2057cb.getRandomTime());
            await _0x2057cb.likeOrNotLike(_0x1e5997, "aliyun-public-favorite", 0);
            await $.wait(_0x2057cb.getRandomTime());
            _0x4bf787 === 0 && (await _0x2057cb.addComment(_0x1e5997), await $.wait(_0x2057cb.getRandomTime()));
            const _0x40eb10 = await _0x2057cb.getAsks();
            await $.wait(_0x2057cb.getRandomTime());
            if (_0x40eb10 && _0x40eb10?.["id"]) {
              const _0x5e2bee = await _0x2057cb.getCsrfToken(_0x40eb10.id, "ask");
              await $.wait(_0x2057cb.getRandomTime());
              const _0x17ff83 = await _0x2057cb.getAskDetail(_0x40eb10);
              await $.wait(_0x2057cb.getRandomTime());
              _0x17ff83 && (await _0x2057cb.voteAnswer(_0x40eb10.id, _0x17ff83, _0x5e2bee, 1), await $.wait(_0x2057cb.getRandomTime()));
            }
          }
          pendingScore = await _0x2057cb.getUserTotalPendingScore();
          $.title = "获得待领取积分: " + pendingScore;
          DoubleLog("🎉 当前积分: " + userScore + ", 待领取积分: " + pendingScore);
        } else {
          for (let _0x4d4656 of taskGroup) {
            const _0x4bcb34 = await _0x2057cb.getUserSpaceSignInDetail(_0x4d4656.code),
              _0x219904 = await _0x2057cb.assessSignInBonusQualification(_0x4bcb34, _0x4d4656.name);
            await $.wait(_0x2057cb.getRandomTime());
            _0x219904 && (await _0x2057cb.receiveSignInBonus(_0x4bcb34, _0x4d4656.name), await $.wait(_0x2057cb.getRandomTime()));
          }
          pendingScore = await _0x2057cb.getUserTotalPendingScore();
          await $.wait(_0x2057cb.getRandomTime());
          await _0x2057cb.collect();
          await $.wait(_0x2057cb.getRandomTime());
          await $.wait(_0x2057cb.getRandomTime());
          const _0x5259db = (await _0x2057cb.getFavors()) ?? [];
          await $.wait(_0x2057cb.getRandomTime());
          if (_0x5259db.length) {
            for (let _0x1d0d39 of _0x5259db) {
              await _0x2057cb.likeOrNotLike(_0x1d0d39.objectId, "aliyun-public-like", 1);
              await $.wait(_0x2057cb.getRandomTime());
              await _0x2057cb.likeOrNotLike(_0x1d0d39.objectId, "aliyun-public-favorite", 1);
              await $.wait(_0x2057cb.getRandomTime());
            }
          }
          let _0x465244 = (await _0x2057cb.interactData()) ?? {};
          $.title = "本次运行共获得" + (pendingScore || 0) + "积分";
          DoubleLog("🎉 领取积分: " + pendingScore + ", 当前积分: " + _0x465244);
        }
      } else {
        $.notifyMsg.push("❌账号" + (_0x2057cb.userName || _0x2057cb.index) + " >> Check ck error!");
      }
      $.notifyList.push({
        id: _0x2057cb.index,
        avatar: _0x2057cb.avatar,
        message: $.notifyMsg
      });
      $.notifyMsg = [];
    }
  } catch (_0x2856c5) {
    $.log("⛔️ main run error => " + _0x2856c5);
    throw new Error("⛔️ main run error => " + _0x2856c5);
  }
}
class UserInfo {
  constructor(_0x509b90) {
    this.index = ++userIdx;
    this.token = _0x509b90.token || _0x509b90;
    this.userId = _0x509b90.userId;
    this.userName = _0x509b90.userName;
    this.avatar = _0x509b90.avatar;
    this.ckStatus = true;
    this.baseUrl = "";
    this.host = "https://developer.aliyun.com/developer/api";
    this.headers = {
      Cookie: this.token,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Referer: "https://developer.aliyun.com/"
    };
    this.getRandomTime = () => randomInt(1, 5);
    this.fetch = async _0x3f0fd3 => {
      try {
        if (typeof _0x3f0fd3 === "string") {
          _0x3f0fd3 = {
            url: _0x3f0fd3
          };
        }
        if (_0x3f0fd3?.["url"]?.["startsWith"]("/")) {
          _0x3f0fd3.url = this.host + _0x3f0fd3.url;
        }
        const _0x2c256a = await Request({
          ..._0x3f0fd3,
          headers: _0x3f0fd3.headers || this.headers,
          url: _0x3f0fd3.url || this.baseUrl
        });
        debug(_0x2c256a, _0x3f0fd3?.["url"]?.["replace"](/\/+$/, "")["substring"](_0x3f0fd3?.["url"]?.["lastIndexOf"]("/") + 1));
        if (_0x2c256a?.["code"] == 40001) {
          throw new Error(_0x2c256a?.["message"] || "用户需要去登录");
        }
        return _0x2c256a;
      } catch (_0x511e27) {
        this.ckStatus = false;
        $.log("⛔️ 请求发起失败！" + _0x511e27);
      }
    };
  }
  async getUser() {
    try {
      const _0x1e3b21 = {
        url: "/my/user/getUser",
        type: "get"
      };
      await this.fetch(_0x1e3b21);
    } catch (_0x3f7b2d) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x3f7b2d);
    }
  }
  async assessSignInBonusQualification(_0x4ffa2a, _0x6e2823) {
    try {
      const _0xaf6e11 = {
        url: "/sign/assessSignInBonusQualification",
        type: "get",
        params: {
          taskGroupId: _0x4ffa2a
        }
      };
      let _0x9ea257 = await this.fetch(_0xaf6e11);
      return _0x9ea257?.["data"];
    } catch (_0xbc23ec) {
      this.ckStatus = false;
      $.log("⛔️ 查询领奖条件失败! " + _0xbc23ec);
    }
  }
  async receiveSignInBonus(_0x2ea5a6, _0x8778a3) {
    try {
      const _0x245ae5 = {
        url: "/sign/receiveSignInBonus",
        type: "post",
        dataType: "form",
        body: {
          taskGroupId: _0x2ea5a6
        }
      };
      let _0x557fd3 = await this.fetch(_0x245ae5);
      if (_0x557fd3?.["code"] == "200") {
        const _0x5f223c = _0x557fd3?.["data"] || 0;
        $.log("✅ 抽奖 - " + (_0x8778a3 || "default") + ": 获得 " + _0x5f223c + " 积分");
      } else {
        $.log("⛔️ 抽奖 - " + (_0x8778a3 || "default") + ": " + _0x557fd3?.["message"]);
      }
    } catch (_0xbecb87) {
      this.ckStatus = false;
      $.log("⛔️ 抽奖失败! " + _0xbecb87);
    }
  }
  async getUserSpaceSignInDetail(_0x49593b) {
    try {
      const _0x4edab1 = {
        url: "/sign/getUserSpaceSignInDetail",
        type: "get",
        params: {
          excode: _0x49593b
        }
      };
      let _0xcee507 = await this.fetch(_0x4edab1);
      const _0x5e9f03 = _0xcee507?.["data"]?.["taskGroupId"];
      return _0x5e9f03;
    } catch (_0x2e5a31) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x2e5a31);
    }
  }
  async getTasks(_0x420ecc) {
    try {
      const _0xc66fa1 = {
        url: "/task/getTaskGroup?groupId=" + _0x420ecc,
        type: "get"
      };
      let _0x45aa05 = await this.fetch(_0xc66fa1);
      const _0x5821c1 = _0x45aa05?.["data"]?.["taskList"];
      let _0x5b19c9 = {};
      if (_0x5821c1.length) {
        const _0x282e2f = new Date().getTime();
        for (let _0x2ed967 of _0x5821c1) {
          if (_0x282e2f >= _0x2ed967.gmtEnableStart && _0x282e2f <= _0x2ed967.gmtEnableEnd) {
            const _0x403029 = JSON.parse(_0x2ed967.finishRule.replace(/&quot;/g, "\""));
            _0x5b19c9.actionCode = _0x403029.actions[0].actionCode;
            _0x5b19c9.activityCode = _0x403029.actions[0].actionCode;
            _0x5b19c9.objectId = _0x403029.actions[0].objectId;
          }
        }
      }
      return _0x5b19c9;
    } catch (_0x4a40cf) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x4a40cf);
    }
  }
  async signin(_0x388c0c, _0x126ae8) {
    try {
      const _0x4099b8 = {
        url: "/task/actionLog",
        type: "post",
        dataType: "form",
        body: _0x388c0c
      };
      let _0x24a809 = await this.fetch(_0x4099b8);
      $.log("✅ 签到 - " + (_0x126ae8 || "default") + ": " + _0x24a809?.["message"]);
    } catch (_0x295606) {
      this.ckStatus = false;
      $.log("⛔️ 签到失败! " + _0x295606);
    }
  }
  async getArticles() {
    try {
      const _0x7f2e9 = Math.floor(Math.random() * 31) + 1,
        _0x4d5a55 = {
          url: "https://developer.aliyun.com/group/aliware/article_hot?pageNum=" + _0x7f2e9,
          type: "get"
        };
      let _0x47d444 = await this.fetch(_0x4d5a55);
      const _0x10ca74 = $.Cheerio.load(_0x47d444),
        _0x3db9bf = _0x10ca74(".community-detail-content"),
        _0x42315e = _0x3db9bf.find(".community-list").map((_0x9196a5, _0x425772) => {
          return {
            id: _0x10ca74(_0x425772).find(".feed-item").attr("data-id"),
            name: _0x10ca74(_0x425772).find(".feed-item-content-title h3").text()
          };
        }).get(),
        _0xc8a501 = _0x42315e[Math.floor(Math.random() * _0x42315e.length)],
        {
          id: _0x5aa108,
          name: _0x388ce0
        } = _0xc8a501;
      $.log("✅ 随机获取文章id： " + _0x5aa108 + ", 标题：" + _0x388ce0);
      return _0x5aa108;
    } catch (_0x104315) {
      this.ckStatus = false;
      $.log("⛔️ 获取文章列表失败! " + _0x104315);
    }
  }
  async getEbooks() {
    try {
      const _0x2e5b6a = Math.floor(Math.random() * 501) + 1,
        _0x10a23b = {
          url: "https://developer.aliyun.com/ebook/index/__0_0_0_" + _0x2e5b6a,
          type: "get"
        };
      let _0x4d3a0a = await this.fetch(_0x10a23b);
      const _0xe5f697 = $.Cheerio.load(_0x4d3a0a),
        _0x2625f3 = _0xe5f697(".ebook-home-list"),
        _0x314f9e = _0x2625f3.find(".ebook-home-item").map((_0x1923bf, _0x4c95b3) => {
          return {
            id: _0xe5f697(_0x4c95b3).attr("href").replace("/ebook/", ""),
            name: _0xe5f697(_0x4c95b3).find(".ebook-home-title").text()
          };
        }).get(),
        _0x4c55a2 = _0x314f9e[Math.floor(Math.random() * _0x314f9e.length)],
        {
          id: _0x328bb2,
          name: _0x33e923
        } = _0x4c55a2;
      $.log("✅ 随机电子书id： " + _0x328bb2 + ", 标题：" + _0x33e923);
      return _0x328bb2;
    } catch (_0x50147c) {
      this.ckStatus = false;
      $.log("⛔️ 获取电子书列表失败! " + _0x50147c);
    }
  }
  async getAsks() {
    try {
      const _0x211306 = Math.floor(Math.random() * 31) + 1,
        _0x5b9ee0 = {
          url: "https://developer.aliyun.com/ask?pageNum=" + _0x211306,
          type: "get"
        };
      let _0x208ed7 = await this.fetch(_0x5b9ee0);
      const _0xb937cc = $.Cheerio.load(_0x208ed7),
        _0xbcfb4b = _0xb937cc(".askProduct-list"),
        _0x2472c0 = _0xbcfb4b.find(".askProduct-item").map((_0x12833f, _0x3ee31e) => {
          return {
            id: _0xb937cc(_0x3ee31e).attr("data-id") || "",
            name: _0xb937cc(_0x3ee31e).find(".askProduct-item-title-text h3").text() || "",
            answer: parseInt(_0xb937cc(_0x3ee31e).find(".askProduct-item-info-answer").text()) || ""
          };
        }).filter((_0x2d891c, _0x461091) => _0x461091.answer > 0).get(),
        _0x5c7887 = _0x2472c0[Math.floor(Math.random() * _0x2472c0.length)];
      if (_0x5c7887?.["id"] && _0x5c7887?.["name"]) {
        const {
          id: _0x1c5d0f,
          name: _0x50e1fc
        } = _0x5c7887;
        $.log("✅ 随机获取问答id： " + _0x1c5d0f + ", 标题：" + _0x50e1fc);
        return _0x5c7887;
      }
      return null;
    } catch (_0x15dc59) {
      this.ckStatus = false;
      $.log("⛔️ 获取问答列表失败! " + _0x15dc59);
    }
  }
  async getAskDetail(_0x386aaa) {
    try {
      const _0x2d6a40 = {
        url: "https://developer.aliyun.com/ask/" + _0x386aaa.id,
        type: "get"
      };
      let _0x117224 = await this.fetch(_0x2d6a40);
      const _0x1fa9ee = $.Cheerio.load(_0x117224),
        _0x37f100 = _0x1fa9ee(".answer-list"),
        _0x3b81bf = _0x37f100.find(".answer-item").map((_0xc7b88b, _0x2ea08f) => {
          return {
            id: _0x1fa9ee(_0x2ea08f).attr("data-id") || ""
          };
        }).get(),
        _0x2cbfdf = _0x3b81bf[Math.floor(Math.random() * _0x386aaa.answer)];
      if (_0x2cbfdf) {
        const {
          id: _0x3989a9
        } = _0x2cbfdf;
        $.log("✅ 随机获取问题问答id： " + _0x3989a9);
        return _0x3989a9;
      }
      return null;
    } catch (_0x464278) {
      this.ckStatus = false;
      $.log("⛔️ 随机获取问题问答失败! " + _0x464278);
    }
  }
  async likeOrNotLike(_0x28c83e, _0x27a55e, _0xfa7fc5) {
    try {
      const _0x442b4c = {
        url: "https://ucc.aliyun.com/uccPagingComponent/likeOrNotLike",
        type: "get",
        params: {
          bizCategory: "yq-article",
          actionCode: _0x27a55e,
          objectId: _0x28c83e,
          status: _0xfa7fc5,
          uccCsrfToken: await this.getUccCsrfToken(),
          callback: getCallback()
        }
      };
      await this.fetch(_0x442b4c);
      $.log("✅ " + (_0x27a55e === "aliyun-public-like" ? "文章" + (_0xfa7fc5 === 1 ? "取消" : "") + "点赞" : "文章" + (_0xfa7fc5 === 1 ? "取消" : "") + "收藏") + "： " + _0x28c83e);
    } catch (_0x49f301) {
      this.ckStatus = false;
      $.log("⛔️ " + (_0x27a55e === "aliyun-public-like" ? "文章" + (_0xfa7fc5 === 1 ? "取消" : "") + "点赞" : "文章" + (_0xfa7fc5 === 1 ? "取消" : "") + "收藏") + "失败! " + _0x49f301);
    }
  }
  async getCsrfToken(_0x142031, _0x392789) {
    try {
      const _0x56c1a2 = {
          url: "https://developer.aliyun.com/csrfToken",
          type: "get",
          headers: {
            Cookie: this.token,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
            Referer: "https://developer.aliyun.com/" + _0x392789 + "/" + _0x142031
          }
        },
        _0x803f4a = await this.fetch(_0x56c1a2);
      return _0x803f4a?.["token"];
    } catch (_0x23bd33) {
      this.ckStatus = false;
      $.log("⛔️ 获取 csrf 失败! " + _0x23bd33);
    }
  }
  async voteAnswer(_0x38456e, _0x4fd8af, _0x320ec4, _0x5f3975) {
    try {
      const _0xa205de = {
        url: "https://developer.aliyun.com/developer/api/my/ask/voteAnswer",
        type: "post",
        dataType: "form",
        headers: {
          Cookie: this.token,
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
          Referer: "https://developer.aliyun.com/ask/" + _0x38456e
        },
        params: {
          p_csrf: _0x320ec4
        },
        body: {
          id: _0x4fd8af,
          votes: _0x5f3975
        }
      };
      await this.fetch(_0xa205de);
      $.log("✅ 回答点赞： " + _0x38456e + "-" + _0x4fd8af);
    } catch (_0x2f1cee) {
      this.ckStatus = false;
      $.log("⛔️ 回答点赞失败! " + _0x2f1cee);
    }
  }
  async addBookComment(_0x47af4f, _0x4ca875) {
    try {
      const _0x1af66e = {
          url: "https://developer.aliyun.com/developer/api/ebook/mark/add",
          type: "post",
          dataType: "json",
          headers: {
            Cookie: this.token,
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK",
            Referer: "https://developer.aliyun.com/ebook/" + _0x47af4f
          },
          params: {
            p_csrf: _0x4ca875
          },
          body: {
            eBookId: _0x47af4f,
            score: 10,
            content: "很棒的一本书"
          }
        },
        _0x255b65 = await this.fetch(_0x1af66e);
      _0x255b65?.["code"] == "200" ? $.log("✅ 评价电子书： " + _0x47af4f) : $.log("⛔️ 评价电子书失败! " + _0x255b65?.["message"]);
    } catch (_0x117472) {
      this.ckStatus = false;
      $.log("⛔️ 评价电子书失败! " + _0x117472);
    }
  }
  async getFavors() {
    try {
      const _0x543aec = {
          url: "https://developer.aliyun.com/developer/api/my/subscribe/listUserFavor",
          type: "get",
          params: {
            pageNum: 1,
            pageSize: 10,
            type: 1
          }
        },
        _0x17178b = await this.fetch(_0x543aec),
        {
          list: _0x3f6552
        } = _0x17178b?.["data"];
      if (_0x3f6552.length) {
        $.log("✅ 开始取消文章的点赞与收藏记录");
        return _0x3f6552;
      }
      return [];
    } catch (_0x2a45e4) {
      this.ckStatus = false;
      $.log("⛔️ " + (type === "aliyun-public-like" ? "文章点赞" : "文章收藏") + "失败! " + _0x2a45e4);
    }
  }
  async addComment(_0x47b125) {
    try {
      const _0x2c3f9b = {
        url: "https://ucc.aliyun.com/uccPagingComponent/addComment",
        type: "get",
        params: {
          content: encodeURIComponent("感谢博主的分享"),
          objectId: _0x47b125,
          bizCategory: "yq-comment-type-article",
          commentType: 0,
          sourceAppCode: "developer-ecology",
          sourceBizCategory: "developer-ecology-group",
          uccCsrfToken: await this.getUccCsrfToken(),
          callback: getCallback()
        }
      };
      await this.fetch(_0x2c3f9b);
      $.log("✅ 文章评论： " + _0x47b125);
    } catch (_0xd247e1) {
      this.ckStatus = false;
      $.log("⛔️ 文章点赞失败! " + _0xd247e1);
    }
  }
  async interactData() {
    try {
      const _0x1e1f24 = {
        url: "/my/score/getUserScore?appCode=developer",
        type: "get"
      };
      let _0x15b5f6 = await this.fetch(_0x1e1f24);
      return _0x15b5f6?.["data"];
    } catch (_0x2c7ea2) {
      $.log("⛔️ 查询待收获积分列表失败! " + _0x2c7ea2);
    }
  }
  async getUserTotalPendingScore() {
    try {
      const _0x4c94cb = {
        url: "/score/pending/getUserTotalPendingScore?appCode=developer",
        type: "get"
      };
      let _0x152627 = await this.fetch(_0x4c94cb);
      $.log("✅ 待领取积分：" + _0x152627?.["data"]);
      return _0x152627?.["data"];
    } catch (_0x5481af) {
      $.log("⛔️ 查询待领取积分失败! " + _0x5481af);
    }
  }
  async collect() {
    try {
      const _0x257aee = {
        url: "/score/pending/receiveAllPendingScore?appCode=developer",
        type: "get"
      };
      let _0x5b726e = await this.fetch(_0x257aee);
      $.log("✅ 收取积分：" + _0x5b726e?.["data"]);
      return _0x5b726e?.["data"];
    } catch (_0x5969a8) {
      $.log("⛔️ 收取积分失败! " + _0x5969a8);
    }
  }
  async getUccCsrfToken() {
    try {
      const _0x1e6fc3 = {
        url: "https://ucc.aliyun.com/uccPagingComponent/getUser",
        type: "get",
        params: {
          uccCsrfToken: "",
          callback: getCallback()
        }
      };
      let _0xcb60c9 = await this.fetch(_0x1e6fc3);
      const _0xb1e4bf = _0xcb60c9.indexOf("{"),
        _0x4c5460 = _0xcb60c9.lastIndexOf("}"),
        _0x53c976 = _0xcb60c9.substring(_0xb1e4bf, _0x4c5460 + 1),
        _0x328cd4 = JSON.parse(_0x53c976);
      return _0x328cd4.data.uccCsrfToken;
    } catch (_0x50ef07) {
      $.log("⛔️ 获取UccCsrfToken失败! " + _0x50ef07);
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
  const _0x2eb30a = ObjectKeys2LowerCase($request.headers),
    _0x230475 = _0x2eb30a.cookie,
    _0x2a4a9d = $.toObj($response.body);
  if (!_0x2a4a9d?.["data"]) {
    $.msg($.name, "❌获取Cookie失败!", "");
    return;
  }
  const {
      nickname: _0x36c605,
      avatar: _0x5402b3
    } = _0x2a4a9d?.["data"],
    _0x1fc868 = {
      userId: _0x36c605,
      avatar: _0x5402b3,
      token: _0x230475,
      userName: _0x36c605
    };
  userCookie = userCookie ? JSON.parse(userCookie) : [];
  const _0x227b02 = userCookie.findIndex(_0xc9a627 => _0xc9a627.userId == _0x1fc868.userId);
  userCookie[_0x227b02] ? userCookie[_0x227b02] = _0x1fc868 : userCookie.push(_0x1fc868);
  $.setjson(userCookie, ckName);
  $.msg($.name, "🎉" + _0x1fc868.userName + "更新token成功!", "");
}
async function loadModule() {
  try {
    $.Cheerio = await loadCheerio();
    return $.Cheerio ? true : false;
  } catch (_0x2d42d7) {
    throw new Error("❌loadModule run error => " + _0x2d42d7);
  }
}
async function getWxToken(_0x50de1c) {
  try {
    const _0x42e6fa = {
      url: "https://ulp.michelin.com.cn/bff/wechat/login/" + _0x50de1c,
      dataType: "json",
      headers: {
        Host: "ulp.michelin.com.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f37) NetType/WIFI Language/zh_CN",
        Referer: "https://servicewechat.com/wx14413dafd16b9540/130/page-frame.html"
      }
    };
    let _0x1eac35 = await Request(_0x42e6fa),
      _0x4b2b73 = "Bearer " + _0x1eac35?.["data"]?.["token"]?.["access_token"];
    return _0x4b2b73;
  } catch (_0x3e0108) {
    $.log("❌getWxToken run error => " + _0x3e0108);
  }
}
async function checkCodeServer() {
  try {
    $.codeFuc = ($.isNode() ? process.env.codeServer_fun : $.getdata("@codeServer.fun")) || "";
    let _0x166537 = $.codeFuc ? (eval($.codeFuc), await WxCode($.appid)) : (await Request({
      url: $.codeServer + "/?wxappid=" + $.appid
    }))?.["split"]("|") || [];
    _0x166537 = _0x166537.filter(_0x406546 => _0x406546.toString().length === 32);
    debug(_0x166537);
    !_0x166537.length ? $.log("❌获取code授权失败！请检查服务器运行是否正常 => 尝试读取数据持久化 ") : $.log("✅获取code授权成功！当前code数量为" + _0x166537.length);
    let _0x126682 = await Promise.all(_0x166537.map(async _0x356fac => {
      const _0x4b39f8 = await getWxToken(_0x356fac);
      return {
        token: _0x4b39f8
      };
    }));
    _0x126682 = _0x126682.filter(_0x47b158 => Object.keys(_0x47b158).length !== 0);
    return _0x126682;
  } catch (_0x4b1eb5) {
    $.log("❌checkCodeServer run error => " + _0x4b1eb5);
  }
}
async function checkEnv() {
  try {
    let _0x1b98f9 = [];
    if ($.wxCode) {
      _0x1b98f9 = (await checkCodeServer()) || [];
    } else {
      if (!userCookie || !userCookie.length) {
        console.log("未找到CK");
        return;
      }
    }
    if (!_0x1b98f9.length) {
      const _0x3ebbbd = envSplitor.find(_0x550c18 => userCookie.includes(_0x550c18)) || envSplitor[0];
      userCookie = $.toObj(userCookie) || userCookie.split(_0x3ebbbd);
      _0x1b98f9 = userCookie;
    }
    userList.push(..._0x1b98f9.map(_0x5b9a07 => new UserInfo(_0x5b9a07)).filter(Boolean));
    userCount = userList.length;
    console.log("共找到" + userCount + "个账号");
    return true;
  } catch (_0xdf15e5) {
    throw new Error("❌checkEnv run error => " + _0xdf15e5);
  }
}
async function Request(_0x47e308) {
  if (typeof _0x47e308 === "string") {
    _0x47e308 = {
      url: _0x47e308
    };
  }
  try {
    if (!_0x47e308?.["url"]) {
      throw new Error("[发送请求] 缺少 url 参数");
    }
    let {
      url: _0x4a91a9,
      type: _0x453017,
      headers = {},
      body: _0x5db53b,
      params: _0x3df17a,
      dataType = "form",
      resultType = "data"
    } = _0x47e308;
    const _0x29b2cf = _0x453017 ? _0x453017?.["toLowerCase"]() : "body" in _0x47e308 ? "post" : "get",
      _0x229ae2 = _0x4a91a9.concat(_0x29b2cf === "post" ? "?" + $.queryStr(_0x3df17a) : ""),
      _0x3f7964 = _0x47e308.timeout ? $.isSurge() ? _0x47e308.timeout / 1000 : _0x47e308.timeout : 10000;
    if (dataType === "json") {
      headers["Content-Type"] = "application/json;charset=UTF-8";
    }
    const _0x52257d = _0x5db53b && dataType == "form" ? $.queryStr(_0x5db53b) : $.toStr(_0x5db53b),
      _0x1cd312 = {
        ..._0x47e308,
        ...(_0x47e308?.["opts"] ? _0x47e308.opts : {}),
        url: _0x229ae2,
        headers: headers,
        ...(_0x29b2cf === "post" && {
          body: _0x52257d
        }),
        ...(_0x29b2cf === "get" && _0x3df17a && {
          params: _0x3df17a
        }),
        timeout: _0x3f7964
      },
      _0x59db2d = $.http[_0x29b2cf.toLowerCase()](_0x1cd312).then(_0x4de2e6 => resultType == "data" ? $.toObj(_0x4de2e6.body) || _0x4de2e6.body : $.toObj(_0x4de2e6) || _0x4de2e6).catch(_0x470f47 => $.log("❌请求发起失败！原因为：" + _0x470f47));
    return Promise.race([new Promise((_0x4effd5, _0x9fb3da) => setTimeout(() => _0x9fb3da("当前请求已超时"), _0x3f7964)), _0x59db2d]);
  } catch (_0xb2994c) {
    console.log("❌请求发起失败！原因为：" + _0xb2994c);
  }
}
function randomInt(_0xf9076f, _0x983382) {
  return Math.round(Math.random() * (_0x983382 - _0xf9076f) + _0xf9076f);
}
function DoubleLog(_0x10aa27) {
  if (_0x10aa27 && $.isNode()) {
    console.log("" + _0x10aa27);
    $.notifyMsg.push("" + _0x10aa27);
  } else {
    _0x10aa27 && (console.log("" + _0x10aa27), $.notifyMsg.push("" + _0x10aa27));
  }
}
function debug(_0x2bb183, _0x28e88c = "debug") {
  $.is_debug === "true" && ($.log("\n-----------" + _0x28e88c + "------------\n"), $.log(typeof _0x2bb183 == "string" ? _0x2bb183 : $.toStr(_0x2bb183) || "debug error => t=" + _0x2bb183), $.log("\n-----------" + _0x28e88c + "------------\n"));
}
async function SendMsgList(_0x254898) {
  await Promise.allSettled(_0x254898?.["map"](_0x5a5fc2 => SendMsg(_0x5a5fc2.message.join("\n"), _0x5a5fc2.avatar)));
}
async function SendMsg(_0x409630, _0x121cc6) {
  _0x409630 && (0 < Notify ? $.isNode() ? await notify.sendNotify($.name, _0x409630) : $.msg($.name, $.title || "", _0x409630, {
    "media-url": _0x121cc6
  }) : console.log(_0x409630));
}
function ObjectKeys2LowerCase(_0x125125) {
  _0x125125 = Object.fromEntries(Object.entries(_0x125125).map(([_0x420c4b, _0x34e53c]) => [_0x420c4b.toLowerCase(), _0x34e53c]));
  return new Proxy(_0x125125, {
    get: function (_0x300124, _0x533391, _0x15eb41) {
      return Reflect.get(_0x300124, _0x533391.toLowerCase(), _0x15eb41);
    },
    set: function (_0x25220e, _0x4ceb4b, _0x4512f8, _0x254427) {
      return Reflect.set(_0x25220e, _0x4ceb4b.toLowerCase(), _0x4512f8, _0x254427);
    }
  });
}
async function loadCheerio() {
  let _0x392988 = ($.isNode() ? process.env.Cheerio_code : $.getdata("Cheerio_code")) || "";
  if (_0x392988 && Object.keys(_0x392988).length) {
    console.log("✅" + $.name + ":缓存中存在Cheerio模块,跳过下载");
    eval(_0x392988);
    return createCheerio();
  }
  console.log("🚀" + $.name + ":开始下载Cheerio模块");
  return new Promise(async _0x4415e6 => {
    $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/Yuheng0101/X/main/Utils/cheerio.js").then(_0x376bbc => {
      $.setdata(_0x376bbc, "Cheerio_code");
      eval(_0x376bbc);
      const _0x22da9c = createCheerio();
      console.log("✅Cheerio模块加载成功,请继续");
      _0x4415e6(_0x22da9c);
    });
  });
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
  } else {
    if (!(await loadModule())) {
      throw new Error("❌加载模块失败，请检查模块路径是否正常");
    }
    if (!(await checkEnv())) {
      throw new Error("❌未检测到ck，请添加环境变量");
    }
    if (userList.length > 0) {
      await main();
    }
  }
})().catch(_0x18887a => $.notifyMsg.push(_0x18887a.message || _0x18887a)).finally(async () => {
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