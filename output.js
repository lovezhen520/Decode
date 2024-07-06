//7/6/2024, 10:48:29 AM
//Author:https://github.com/lck7
const $ = new Env("阿里云社区"),
  ckName = "aliyunWeb_data";
$.appid = "";
const Notify = 1,
  notify = $.isNode() ? require("./sendNotify") : "";
let envSplitor = ["@"];
var userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
let userList = [],
  userIdx = 0,
  userCount = 0;
const _0x57e1a9 = {
  code: "",
  name: "我的社区"
};
const _0x301c59 = {
  code: "ecs",
  name: "弹性计算"
};
const _0x4f725c = {
  code: "computenest",
  name: "计算巢"
};
const _0x37788c = {
  code: "yitian",
  name: "倚天"
};
const _0x167d37 = {
  code: "cloudnative",
  name: "云原生"
};
const _0x4d6e7a = {
  code: "storage",
  name: "云存储"
};
const _0x1286f8 = {
  code: "luoshen",
  name: "飞天洛神云网络"
};
const _0x1753fa = {
  code: "database",
  name: "数据库"
};
const _0x2e94af = {
  code: "polardb",
  name: "PolarDB开源"
};
const _0x3942c7 = {
  code: "bigdata",
  name: "大数据与机器学习"
};
const _0x5e023a = {
  code: "modelscope",
  name: "ModelScope模型即服务"
};
const _0x1033e8 = {
  code: "viapi",
  name: "视觉智能"
};
const _0x373239 = {
  code: "iot",
  name: "物联网"
};
const _0x26433a = {
  code: "devops",
  name: "云效DevOps"
};
const _0x849aea = {
  code: "aliyun_linux",
  name: "龙蜥操作系统"
};
const taskGroup = [_0x57e1a9, _0x301c59, _0x4f725c, _0x37788c, _0x167d37, _0x4d6e7a, _0x1286f8, _0x1753fa, _0x2e94af, _0x3942c7, _0x5e023a, _0x1033e8, _0x373239, _0x26433a, _0x849aea];
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.notifyList = [];
$.notifyMsg = [];
$.codeServer = ($.isNode() ? process.env.codeServer_address : $.getdata("@codeServer.address")) || "";
$.codeOpen = ($.isNode() ? process.env.codeServer_open : $.getdata("@codeServer.open")) || "false";
$.wxCode = $.codeOpen != "false" && $.codeServer && $.appid;
async function main() {
  try {
    $.log("\n================== 任务 ==================\n");
    for (let _0x372d20 of userList) {
      console.log("🔷账号" + _0x372d20.index + " >> Start work");
      console.log("随机延迟" + _0x372d20.getRandomTime() + "ms");
      const _0x34b723 = Date.now();
      let _0x15c980 = (await _0x372d20.interactData()) ?? {};
      if (_0x372d20.ckStatus) {
        if (_0x34b723 < new Date(new Date().setHours(12, 0, 0, 0)).getTime()) {
          for (let _0x4d68fd of taskGroup) {
            const _0x247107 = await _0x372d20.getUserSpaceSignInDetail(_0x4d68fd.code),
              _0x5bb26f = await _0x372d20.getTasks(_0x247107);
            await _0x372d20.signin(_0x5bb26f, _0x4d68fd.name);
          }
          await $.wait(_0x372d20.getRandomTime());
          const _0x1c245a = await _0x372d20.getEbooks();
          await $.wait(_0x372d20.getRandomTime());
          const _0x55cd78 = await _0x372d20.getCsrfToken(_0x1c245a, "ebook");
          await $.wait(_0x372d20.getRandomTime());
          await _0x372d20.addBookComment(_0x1c245a, _0x55cd78);
          await $.wait(_0x372d20.getRandomTime());
          for (let _0x3637f8 = 0; _0x3637f8 < 5; _0x3637f8++) {
            const _0x316c31 = await _0x372d20.getArticles();
            await $.wait(_0x372d20.getRandomTime());
            await _0x372d20.likeOrNotLike(_0x316c31, "aliyun-public-like", 0);
            await $.wait(_0x372d20.getRandomTime());
            await _0x372d20.likeOrNotLike(_0x316c31, "aliyun-public-favorite", 0);
            await $.wait(_0x372d20.getRandomTime());
            _0x3637f8 === 0 && (await _0x372d20.addComment(_0x316c31), await $.wait(_0x372d20.getRandomTime()));
            const _0x189a2a = await _0x372d20.getAsks();
            await $.wait(_0x372d20.getRandomTime());
            const _0x4c2fb7 = await _0x372d20.getCsrfToken(_0x189a2a.id, "ask");
            await $.wait(_0x372d20.getRandomTime());
            const _0x278dfd = await _0x372d20.getAskDetail(_0x189a2a);
            await $.wait(_0x372d20.getRandomTime());
            await _0x372d20.voteAnswer(_0x189a2a.id, _0x278dfd, _0x4c2fb7, 1);
            await $.wait(_0x372d20.getRandomTime());
          }
        } else {
          await _0x372d20.getUserTotalPendingScore();
          await $.wait(_0x372d20.getRandomTime());
          await _0x372d20.collect();
          await $.wait(_0x372d20.getRandomTime());
          await $.wait(_0x372d20.getRandomTime());
          const _0x72a5fd = (await _0x372d20.getFavors()) ?? [];
          await $.wait(_0x372d20.getRandomTime());
          if (_0x72a5fd.length) {
            for (let _0x38124c of _0x72a5fd) {
              await _0x372d20.likeOrNotLike(_0x38124c.objectId, "aliyun-public-like", 1);
              await $.wait(_0x372d20.getRandomTime());
              await _0x372d20.likeOrNotLike(_0x38124c.objectId, "aliyun-public-favorite", 1);
              await $.wait(_0x372d20.getRandomTime());
            }
          }
        }
        let _0x5ea105 = (await _0x372d20.interactData()) ?? {};
        $.title = "本次运行共获得" + (_0x5ea105 - _0x15c980 || 0) + "积分";
        DoubleLog("「" + _0x372d20.userName + "」当前余额为" + _0x5ea105 + "积分");
      } else {
        $.notifyMsg.push("❌账号" + (_0x372d20.userName || _0x372d20.index) + " >> Check ck error!");
      }
      $.notifyList.push({
        id: _0x372d20.index,
        avatar: _0x372d20.avatar,
        message: $.notifyMsg
      });
      $.notifyMsg = [];
    }
  } catch (_0x595d21) {
    $.log("⛔️ main run error => " + _0x595d21);
    throw new Error("⛔️ main run error => " + _0x595d21);
  }
}
class UserInfo {
  constructor(_0x89976b) {
    this.index = ++userIdx;
    this.token = _0x89976b.token || _0x89976b;
    this.userId = _0x89976b.userId;
    this.userName = _0x89976b.userName;
    this.avatar = _0x89976b.avatar;
    this.ckStatus = true;
    const _0x4f8894 = {
      "01": "✅",
      "02": "⛔️"
    };
    this.doFlag = _0x4f8894;
    this.baseUrl = "";
    this.host = "https://developer.aliyun.com/developer/api";
    this.headers = {
      Cookie: this.token,
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      Referer: "https://developer.aliyun.com/?spm=a2c6h.27063436.J_6978680750.1.30124f46CBQ0BA"
    };
    this.getRandomTime = () => randomInt(1000, 3000);
    this.fetch = async _0x168948 => {
      try {
        if (typeof _0x168948 === "string") {
          _0x168948 = {
            url: _0x168948
          };
        }
        if (_0x168948?.["url"]?.["startsWith"]("/")) {
          _0x168948.url = this.host + _0x168948.url;
        }
        const _0x43eb23 = {
          ..._0x168948,
          headers: _0x168948.headers || this.headers,
          url: _0x168948.url || this.baseUrl
        };
        const _0x1e3d78 = await Request(_0x43eb23);
        debug(_0x1e3d78, _0x168948?.["url"]?.["replace"](/\/+$/, "")["substring"](_0x168948?.["url"]?.["lastIndexOf"]("/") + 1));
        if (_0x1e3d78?.["code"] == 40001) {
          throw new Error(_0x1e3d78?.["message"] || "用户需要去登录");
        }
        return _0x1e3d78;
      } catch (_0x555467) {
        this.ckStatus = false;
        $.log("⛔️ 请求发起失败！" + _0x555467);
      }
    };
  }
  async getUser() {
    try {
      const _0x2ea269 = {
        url: "/my/user/getUser",
        type: "get"
      };
      await this.fetch(_0x2ea269);
    } catch (_0x39b68c) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x39b68c);
    }
  }
  async getUserSpaceSignInDetail(_0x5043c1) {
    try {
      const _0x5f28c4 = {
        excode: _0x5043c1
      };
      const _0x2b7cd7 = {
        url: "/sign/getUserSpaceSignInDetail",
        type: "get",
        params: _0x5f28c4
      };
      let _0xd5fc5b = await this.fetch(_0x2b7cd7);
      const _0x4bf247 = _0xd5fc5b?.["data"]?.["taskGroupId"];
      return _0x4bf247;
    } catch (_0xa56a38) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0xa56a38);
    }
  }
  async getTasks(_0x44071f) {
    try {
      const _0x46fa7a = {
        url: "/task/getTaskGroup?groupId=" + _0x44071f,
        type: "get"
      };
      let _0x26ba84 = await this.fetch(_0x46fa7a);
      const _0x378e45 = _0x26ba84?.["data"]?.["taskList"];
      let _0x5bb8e6 = {};
      if (_0x378e45.length) {
        const _0x56f153 = new Date().getTime();
        for (let _0x1c9a20 of _0x378e45) {
          if (_0x56f153 >= _0x1c9a20.gmtEnableStart && _0x56f153 <= _0x1c9a20.gmtEnableEnd) {
            const _0x4bd430 = JSON.parse(_0x1c9a20.finishRule.replace(/&quot;/g, "\""));
            _0x5bb8e6.actionCode = _0x4bd430.actions[0].actionCode;
            _0x5bb8e6.activityCode = _0x4bd430.actions[0].actionCode;
            _0x5bb8e6.objectId = _0x4bd430.actions[0].objectId;
          }
        }
      }
      return _0x5bb8e6;
    } catch (_0x3c8770) {
      this.ckStatus = false;
      $.log("⛔️ 获取签到任务列表失败! " + _0x3c8770);
    }
  }
  async signin(_0x5e9fad, _0x230feb) {
    try {
      const _0x2f221d = {
        url: "/task/actionLog",
        type: "post",
        dataType: "form",
        body: _0x5e9fad
      };
      let _0x2f93b1 = await this.fetch(_0x2f221d);
      $.log("✅ 签到 - " + (_0x230feb || "default") + "： " + _0x2f93b1?.["message"]);
    } catch (_0x583793) {
      this.ckStatus = false;
      $.log("⛔️ 签到失败! " + _0x583793);
    }
  }
  async getArticles() {
    try {
      const _0x2429e1 = Math.floor(Math.random() * 31) + 1,
        _0x1308c5 = {
          url: "https://developer.aliyun.com/group/aliware/article_hot?pageNum=" + _0x2429e1,
          type: "get"
        };
      let _0x29eb66 = await this.fetch(_0x1308c5);
      const _0x3a6bc5 = $.Cheerio.load(_0x29eb66),
        _0x1d0882 = _0x3a6bc5(".community-detail-content"),
        _0x1cf4c6 = _0x1d0882.find(".community-list").map((_0x3f61e8, _0x1938c4) => {
          return {
            id: _0x3a6bc5(_0x1938c4).find(".feed-item").attr("data-id"),
            name: _0x3a6bc5(_0x1938c4).find(".feed-item-content-title h3").text()
          };
        }).get(),
        _0x22ac82 = _0x1cf4c6[Math.floor(Math.random() * _0x1cf4c6.length)],
        {
          id: _0x34ffe0,
          name: _0x595292
        } = _0x22ac82;
      $.log("✅ 随机获取文章id： " + _0x34ffe0 + ", 标题：" + _0x595292);
      return _0x34ffe0;
    } catch (_0x5736f3) {
      this.ckStatus = false;
      $.log("⛔️ 获取文章列表失败! " + _0x5736f3);
    }
  }
  async getEbooks() {
    try {
      const _0x1ba87d = Math.floor(Math.random() * 501) + 1,
        _0x1af614 = {
          url: "https://developer.aliyun.com/ebook?pageNum=" + _0x1ba87d,
          type: "get"
        };
      let _0x191e83 = await this.fetch(_0x1af614);
      const _0x57e886 = $.Cheerio.load(_0x191e83),
        _0x397379 = _0x57e886(".ebook-home-list"),
        _0x3356b0 = _0x397379.find(".ebook-home-item").map((_0x4bdc41, _0x165b7f) => {
          return {
            id: _0x57e886(_0x165b7f).attr("href").replace("/ebook/", ""),
            name: _0x57e886(_0x165b7f).find(".ebook-home-title").text()
          };
        }).get(),
        _0x581637 = _0x3356b0[Math.floor(Math.random() * _0x3356b0.length)],
        {
          id: _0x13af1c,
          name: _0x29aab9
        } = _0x581637;
      $.log("✅ 随机电子书id： " + _0x13af1c + ", 标题：" + _0x29aab9);
      return _0x13af1c;
    } catch (_0x1328bf) {
      this.ckStatus = false;
      $.log("⛔️ 获取电子书列表失败! " + _0x1328bf);
    }
  }
  async getAsks() {
    try {
      const _0x2aa086 = Math.floor(Math.random() * 31) + 1,
        _0x2a5805 = {
          url: "https://developer.aliyun.com/ask?pageNum=" + _0x2aa086,
          type: "get"
        };
      let _0x3dae2e = await this.fetch(_0x2a5805);
      const _0x113f33 = $.Cheerio.load(_0x3dae2e),
        _0x3d9b35 = _0x113f33(".askProduct-list"),
        _0xd30366 = _0x3d9b35.find(".askProduct-item").map((_0x5de0f4, _0x4454c2) => {
          return {
            id: _0x113f33(_0x4454c2).attr("data-id"),
            name: _0x113f33(_0x4454c2).find(".askProduct-item-title-text h3").text(),
            answer: parseInt(_0x113f33(_0x4454c2).find(".askProduct-item-info-answer").text())
          };
        }).filter((_0x1ef4cf, _0x93469e) => _0x93469e.answer > 0).get(),
        _0x400da5 = _0xd30366[Math.floor(Math.random() * _0xd30366.length)],
        {
          id: _0x3ea8d2,
          name: _0x2e53b0
        } = _0x400da5;
      $.log("✅ 随机获取问答id： " + _0x3ea8d2 + ", 标题：" + _0x2e53b0);
      return _0x400da5;
    } catch (_0x341e39) {
      this.ckStatus = false;
      $.log("⛔️ 获取问答列表失败! " + _0x341e39);
    }
  }
  async getAskDetail(_0x4421d8) {
    try {
      const _0x6bcb1b = {
        url: "https://developer.aliyun.com/ask/" + _0x4421d8.id,
        type: "get"
      };
      let _0x5db388 = await this.fetch(_0x6bcb1b);
      const _0x42e98c = $.Cheerio.load(_0x5db388),
        _0x583a8b = _0x42e98c(".answer-list"),
        _0x63119e = _0x583a8b.find(".answer-item").map((_0x4c6561, _0x5a8681) => {
          return {
            id: _0x42e98c(_0x5a8681).attr("data-id")
          };
        }).get(),
        _0x54ec11 = _0x63119e[Math.floor(Math.random() * _0x4421d8.answer)],
        {
          id: _0x4fd63d
        } = _0x54ec11;
      $.log("✅ 随机获取问题问答id： " + _0x4fd63d);
      return _0x4fd63d;
    } catch (_0x4b0c96) {
      this.ckStatus = false;
      $.log("⛔️ 随机获取问题问答失败! " + _0x4b0c96);
    }
  }
  async likeOrNotLike(_0x35add6, _0x1e4c55, _0x3477ae) {
    try {
      const _0x53a3de = {
        url: "https://ucc.aliyun.com/uccPagingComponent/likeOrNotLike",
        type: "get",
        params: {
          bizCategory: "yq-article",
          actionCode: _0x1e4c55,
          objectId: _0x35add6,
          status: _0x3477ae,
          uccCsrfToken: await this.getUccCsrfToken(),
          callback: getCallback()
        }
      };
      await this.fetch(_0x53a3de);
      $.log("✅ " + (_0x1e4c55 === "aliyun-public-like" ? "文章" + (_0x3477ae === 1 ? "取消" : "") + "点赞" : "文章" + (_0x3477ae === 1 ? "取消" : "") + "收藏") + "： " + _0x35add6);
    } catch (_0x25bf4b) {
      this.ckStatus = false;
      $.log("⛔️ " + (_0x1e4c55 === "aliyun-public-like" ? "文章" + (_0x3477ae === 1 ? "取消" : "") + "点赞" : "文章" + (_0x3477ae === 1 ? "取消" : "") + "收藏") + "失败! " + _0x25bf4b);
    }
  }
  async getCsrfToken(_0x7ba456, _0x3ceff9) {
    try {
      const _0x4168fd = {
        url: "https://developer.aliyun.com/csrfToken",
        type: "get",
        headers: {}
      };
      _0x4168fd.headers.Cookie = this.token;
      _0x4168fd.headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK";
      _0x4168fd.headers.Referer = "https://developer.aliyun.com/" + _0x3ceff9 + "/" + _0x7ba456;
      const _0x10f5d7 = await this.fetch(_0x4168fd);
      return _0x10f5d7?.["token"];
    } catch (_0x2c774e) {
      this.ckStatus = false;
      $.log("⛔️ 获取 csrf 失败! " + _0x2c774e);
    }
  }
  async voteAnswer(_0x341031, _0x2d8ad0, _0x18ae10, _0x358eba) {
    try {
      const _0x5effda = {
        p_csrf: _0x18ae10
      };
      const _0x19c7b0 = {
        id: _0x2d8ad0,
        votes: _0x358eba
      };
      const _0x3d9cfd = {
        url: "https://developer.aliyun.com/developer/api/my/ask/voteAnswer",
        type: "post",
        dataType: "form",
        headers: {},
        params: _0x5effda,
        body: _0x19c7b0
      };
      _0x3d9cfd.headers.Cookie = this.token;
      _0x3d9cfd.headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK";
      _0x3d9cfd.headers.Referer = "https://developer.aliyun.com/ask/" + _0x341031;
      await this.fetch(_0x3d9cfd);
      $.log("✅ 回答点赞： " + _0x341031 + "-" + _0x2d8ad0);
    } catch (_0x5f36c7) {
      this.ckStatus = false;
      $.log("⛔️ 回答点赞失败! " + _0x5f36c7);
    }
  }
  async addBookComment(_0x2e34eb, _0x55367e) {
    try {
      const _0x25da8f = {
        p_csrf: _0x55367e
      };
      const _0x4db917 = {
        url: "https://developer.aliyun.com/developer/api/ebook/mark/add",
        type: "post",
        dataType: "json",
        headers: {},
        params: _0x25da8f,
        body: {}
      };
      _0x4db917.headers.Cookie = this.token;
      _0x4db917.headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(Aliyun/6.7.1) WindVane/8.7.2 1170x2532 WK";
      _0x4db917.headers.Referer = "https://developer.aliyun.com/ebook/" + _0x2e34eb;
      _0x4db917.body.eBookId = _0x2e34eb;
      _0x4db917.body.score = 10;
      _0x4db917.body.content = "很棒的一本书";
      const _0x2415c8 = await this.fetch(_0x4db917);
      _0x2415c8?.["code"] == "200" ? $.log("✅ 评价电子书： " + _0x2e34eb) : $.log("⛔️ 评价电子书失败! " + _0x2415c8?.["message"]);
    } catch (_0x1c632d) {
      this.ckStatus = false;
      $.log("⛔️ 评价电子书失败! " + _0x1c632d);
    }
  }
  async getFavors() {
    try {
      const _0x6875d4 = {
        pageNum: 1,
        pageSize: 10,
        type: 1
      };
      const _0x30651d = {
        url: "https://developer.aliyun.com/developer/api/my/subscribe/listUserFavor",
        type: "get",
        params: _0x6875d4
      };
      const _0x2c78d3 = await this.fetch(_0x30651d),
        {
          list: _0x1e0077
        } = _0x2c78d3?.["data"];
      if (_0x1e0077.length) {
        $.log("✅ 开始取消文章的点赞与收藏记录");
        return _0x1e0077;
      }
      return [];
    } catch (_0x228353) {
      this.ckStatus = false;
      $.log("⛔️ " + (type === "aliyun-public-like" ? "文章点赞" : "文章收藏") + "失败! " + _0x228353);
    }
  }
  async addComment(_0x13ae88) {
    try {
      const _0x4fc09b = {
        url: "https://ucc.aliyun.com/uccPagingComponent/addComment",
        type: "get",
        params: {
          content: encodeURIComponent("感谢博主的分享"),
          objectId: _0x13ae88,
          bizCategory: "yq-comment-type-article",
          commentType: 0,
          sourceAppCode: "developer-ecology",
          sourceBizCategory: "developer-ecology-group",
          uccCsrfToken: await this.getUccCsrfToken(),
          callback: getCallback()
        }
      };
      await this.fetch(_0x4fc09b);
      $.log("✅ 文章评论： " + _0x13ae88);
    } catch (_0x109b32) {
      this.ckStatus = false;
      $.log("⛔️ 文章点赞失败! " + _0x109b32);
    }
  }
  async interactData() {
    try {
      const _0x54b71b = {
        url: "/my/score/getUserScore?appCode=developer",
        type: "get"
      };
      let _0x4e21f0 = await this.fetch(_0x54b71b);
      return _0x4e21f0?.["data"];
    } catch (_0x1f0eae) {
      $.log("⛔️ 查询待收获积分列表失败! " + _0x1f0eae);
    }
  }
  async getUserTotalPendingScore() {
    try {
      const _0x8c0051 = {
        url: "/score/pending/getUserTotalPendingScore?appCode=developer",
        type: "get"
      };
      let _0x57b0ae = await this.fetch(_0x8c0051);
      $.log("✅ 待领取积分：" + _0x57b0ae?.["data"]);
      return _0x57b0ae?.["data"];
    } catch (_0x443548) {
      $.log("⛔️ 查询待领取积分失败! " + _0x443548);
    }
  }
  async collect() {
    try {
      const _0x47c08f = {
        url: "/score/pending/receiveAllPendingScore?appCode=developer",
        type: "get"
      };
      let _0x13a401 = await this.fetch(_0x47c08f);
      $.log("✅ 收取积分：" + _0x13a401?.["data"]);
      return _0x13a401?.["data"];
    } catch (_0x49e876) {
      $.log("⛔️ 收取积分失败! " + _0x49e876);
    }
  }
  async getUccCsrfToken() {
    try {
      const _0x14e696 = {
        url: "https://ucc.aliyun.com/uccPagingComponent/getUser",
        type: "get",
        params: {
          uccCsrfToken: "",
          callback: getCallback()
        }
      };
      let _0x1c729c = await this.fetch(_0x14e696);
      const _0x4a4e7c = _0x1c729c.indexOf("{"),
        _0x26d5d7 = _0x1c729c.lastIndexOf("}"),
        _0x1610f6 = _0x1c729c.substring(_0x4a4e7c, _0x26d5d7 + 1),
        _0x5d0972 = JSON.parse(_0x1610f6);
      return _0x5d0972.data.uccCsrfToken;
    } catch (_0x194ee6) {
      $.log("⛔️ 获取UccCsrfToken失败! " + _0x194ee6);
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
  const _0x35ae12 = ObjectKeys2LowerCase($request.headers),
    _0x27a74b = _0x35ae12.cookie;
  const _0x1ad264 = $.toObj($response.body);
  if (!_0x1ad264?.["data"]) {
    $.msg($.name, "❌获取Cookie失败!", "");
    return;
  }
  const {
      nickname: _0x3c31c9,
      avatar: _0x301e80
    } = _0x1ad264?.["data"],
    _0x386c44 = {
      userId: _0x3c31c9,
      avatar: _0x301e80,
      token: _0x27a74b,
      userName: _0x3c31c9
    };
  userCookie = userCookie ? JSON.parse(userCookie) : [];
  const _0x5f1b08 = userCookie.findIndex(_0x1f0cd8 => _0x1f0cd8.userId == _0x386c44.userId);
  userCookie[_0x5f1b08] ? userCookie[_0x5f1b08] = _0x386c44 : userCookie.push(_0x386c44);
  $.setjson(userCookie, ckName);
  $.msg($.name, "🎉" + _0x386c44.userName + "更新token成功!", "");
}
async function loadModule() {
  try {
    $.Cheerio = await loadCheerio();
    return $.Cheerio ? true : false;
  } catch (_0x33aee1) {
    throw new Error("❌loadModule run error => " + _0x33aee1);
  }
}
async function getWxToken(_0x32debd) {
  try {
    const _0x31db1f = {
      url: "https://ulp.michelin.com.cn/bff/wechat/login/" + _0x32debd,
      dataType: "json",
      headers: {}
    };
    _0x31db1f.headers.Host = "ulp.michelin.com.cn";
    _0x31db1f.headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f37) NetType/WIFI Language/zh_CN";
    _0x31db1f.headers.Referer = "https://servicewechat.com/wx14413dafd16b9540/130/page-frame.html";
    let _0x5304fd = await Request(_0x31db1f),
      _0x3bef4b = "Bearer " + _0x5304fd?.["data"]?.["token"]?.["access_token"];
    return _0x3bef4b;
  } catch (_0x23a218) {
    $.log("❌getWxToken run error => " + _0x23a218);
  }
}
async function checkCodeServer() {
  try {
    $.codeFuc = ($.isNode() ? process.env.codeServer_fun : $.getdata("@codeServer.fun")) || "";
    let _0x4ab0fa = $.codeFuc ? (eval($.codeFuc), await WxCode($.appid)) : (await Request({
      url: $.codeServer + "/?wxappid=" + $.appid
    }))?.["split"]("|") || [];
    _0x4ab0fa = _0x4ab0fa.filter(_0x1c97cc => _0x1c97cc.toString().length === 32);
    debug(_0x4ab0fa);
    !_0x4ab0fa.length ? $.log("❌获取code授权失败！请检查服务器运行是否正常 => 尝试读取数据持久化 ") : $.log("✅获取code授权成功！当前code数量为" + _0x4ab0fa.length);
    let _0x4cbd55 = await Promise.all(_0x4ab0fa.map(async _0x136181 => {
      const _0x3118cd = await getWxToken(_0x136181),
        _0x165571 = {
          token: _0x3118cd
        };
      return _0x165571;
    }));
    _0x4cbd55 = _0x4cbd55.filter(_0x4cbde3 => Object.keys(_0x4cbde3).length !== 0);
    return _0x4cbd55;
  } catch (_0x4ea524) {
    $.log("❌checkCodeServer run error => " + _0x4ea524);
  }
}
async function checkEnv() {
  try {
    let _0x2be1be = [];
    if ($.wxCode) {
      _0x2be1be = (await checkCodeServer()) || [];
    } else {
      if (!userCookie || !userCookie.length) {
        console.log("未找到CK");
        return;
      }
    }
    if (!_0x2be1be.length) {
      const _0x395c32 = envSplitor.find(_0x594a0c => userCookie.includes(_0x594a0c)) || envSplitor[0];
      userCookie = $.toObj(userCookie) || userCookie.split(_0x395c32);
      _0x2be1be = userCookie;
    }
    userList.push(..._0x2be1be.map(_0x2cc6e0 => new UserInfo(_0x2cc6e0)).filter(Boolean));
    userCount = userList.length;
    console.log("共找到" + userCount + "个账号");
    return true;
  } catch (_0x4c2dbb) {
    throw new Error("❌checkEnv run error => " + _0x4c2dbb);
  }
}
async function Request(_0x1bd668) {
  if (typeof _0x1bd668 === "string") {
    _0x1bd668 = {
      url: _0x1bd668
    };
  }
  try {
    if (!_0x1bd668?.["url"]) {
      throw new Error("[发送请求] 缺少 url 参数");
    }
    let {
      url: _0x292622,
      type: _0x2e6eac,
      headers = {},
      body: _0x45fe6e,
      params: _0x58a28b,
      dataType = "form",
      resultType = "data"
    } = _0x1bd668;
    const _0x24043e = _0x2e6eac ? _0x2e6eac?.["toLowerCase"]() : "body" in _0x1bd668 ? "post" : "get",
      _0x4618e8 = _0x292622.concat(_0x24043e === "post" ? "?" + $.queryStr(_0x58a28b) : ""),
      _0x11753f = _0x1bd668.timeout ? $.isSurge() ? _0x1bd668.timeout / 1000 : _0x1bd668.timeout : 10000;
    if (dataType === "json") {
      headers["Content-Type"] = "application/json;charset=UTF-8";
    }
    const _0x14da06 = _0x45fe6e && dataType == "form" ? $.queryStr(_0x45fe6e) : $.toStr(_0x45fe6e),
      _0x3fa942 = {
        body: _0x14da06
      };
    const _0x10f878 = {
        ..._0x1bd668,
        ...(_0x1bd668?.["opts"] ? _0x1bd668.opts : {}),
        url: _0x4618e8,
        headers: headers,
        ...(_0x24043e === "post" && _0x3fa942),
        ...(_0x24043e === "get" && _0x58a28b && {
          params: _0x58a28b
        }),
        timeout: _0x11753f
      },
      _0x2199d5 = $.http[_0x24043e.toLowerCase()](_0x10f878).then(_0x3b15cc => resultType == "data" ? $.toObj(_0x3b15cc.body) || _0x3b15cc.body : $.toObj(_0x3b15cc) || _0x3b15cc).catch(_0x24b8a4 => $.log("❌请求发起失败！原因为：" + _0x24b8a4));
    return Promise.race([new Promise((_0x46ad2e, _0x269fd8) => setTimeout(() => _0x269fd8("当前请求已超时"), _0x11753f)), _0x2199d5]);
  } catch (_0x22f916) {
    console.log("❌请求发起失败！原因为：" + _0x22f916);
  }
}
function randomInt(_0x7c740d, _0x5b0f3a) {
  return Math.round(Math.random() * (_0x5b0f3a - _0x7c740d) + _0x7c740d);
}
function DoubleLog(_0x116040) {
  if (_0x116040 && $.isNode()) {
    console.log("" + _0x116040);
    $.notifyMsg.push("" + _0x116040);
  } else {
    _0x116040 && (console.log("" + _0x116040), $.notifyMsg.push("" + _0x116040));
  }
}
function debug(_0x5b931b, _0x3db301 = "debug") {
  $.is_debug === "true" && ($.log("\n-----------" + _0x3db301 + "------------\n"), $.log(typeof _0x5b931b == "string" ? _0x5b931b : $.toStr(_0x5b931b) || "debug error => t=" + _0x5b931b), $.log("\n-----------" + _0x3db301 + "------------\n"));
}
function getQueries(_0x3edeac) {
  const [, _0x44ec8c] = _0x3edeac.split("?");
  return _0x44ec8c ? _0x44ec8c.split("&").reduce((_0x27c3f6, _0x276fbb) => {
    var [_0x121f98, _0x276fbb] = _0x276fbb.split("=");
    _0x27c3f6[_0x121f98] = _0x276fbb;
    return _0x27c3f6;
  }, {}) : {};
}
async function getNotice() {
  const _0x238031 = ["https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/notice.json", "https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/tip.json"];
  try {
    const _0x3bdb8d = await Promise.all(_0x238031.map(_0x45ab30 => Request(_0x45ab30)));
    _0x3bdb8d.map(_0x359834 => console.log(_0x359834?.["notice"] || "获取通知失败"));
  } catch (_0x1b6711) {
    console.log("❌获取通知时发生错误：" + _0x1b6711);
  }
}
async function SendMsgList(_0x52e619) {
  await Promise.allSettled(_0x52e619?.["map"](_0x8ba4be => SendMsg(_0x8ba4be.message.join("\n"), _0x8ba4be.avatar)));
}
async function SendMsg(_0x5d748c, _0x4b9f32) {
  const _0x378ebe = {
    "media-url": _0x4b9f32
  };
  _0x5d748c && (0 < Notify ? $.isNode() ? await notify.sendNotify($.name, _0x5d748c) : $.msg($.name, $.title || "", _0x5d748c, _0x378ebe) : console.log(_0x5d748c));
}
function ObjectKeys2LowerCase(_0x471e4d) {
  _0x471e4d = Object.fromEntries(Object.entries(_0x471e4d).map(([_0x27e36d, _0x544cea]) => [_0x27e36d.toLowerCase(), _0x544cea]));
  return new Proxy(_0x471e4d, {
    get: function (_0x29a6b5, _0x34f0ac, _0x880515) {
      return Reflect.get(_0x29a6b5, _0x34f0ac.toLowerCase(), _0x880515);
    },
    set: function (_0x36bad3, _0x63e52e, _0x5ee1b2, _0xc83a09) {
      return Reflect.set(_0x36bad3, _0x63e52e.toLowerCase(), _0x5ee1b2, _0xc83a09);
    }
  });
}
async function loadSakuraUtils() {
  let _0x365494 = ($.isNode() ? process.env.SakuraUtil_code : $.getdata("SakuraUtil_code")) || "";
  if (_0x365494 && Object.keys(_0x365494).length) {
    console.log("✅" + $.name + ":缓存中存在SakuraUtil代码,跳过下载");
    eval(_0x365494);
    return creatUtils();
  }
  console.log("🚀" + $.name + ":开始下载SakuraUtil代码");
  return new Promise(async _0x41cbc2 => {
    $.getScript("https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/SakuraUtil.js").then(_0x4c66ef => {
      $.setdata(_0x4c66ef, "SakuraUtil_code");
      eval(_0x4c66ef);
      const _0x31a553 = creatUtils();
      console.log("✅SakuraUtil加载成功,请继续");
      _0x41cbc2(_0x31a553);
    });
  });
}
async function loadCheerio() {
  let _0xa9f9f4 = ($.isNode() ? process.env.Cheerio_code : $.getdata("Cheerio_code")) || "";
  if (_0xa9f9f4 && Object.keys(_0xa9f9f4).length) {
    console.log("✅" + $.name + ":缓存中存在Cheerio模块,跳过下载");
    eval(_0xa9f9f4);
    return createCheerio();
  }
  console.log("🚀" + $.name + ":开始下载Cheerio模块");
  return new Promise(async _0xd5ba4f => {
    $.getScript("https://cdn.jsdelivr.net/gh/Yuheng0101/X@main/Utils/cheerio.js").then(_0x202e79 => {
      $.setdata(_0x202e79, "Cheerio_code");
      eval(_0x202e79);
      const _0x50e4ac = createCheerio();
      console.log("✅Cheerio模块加载成功,请继续");
      _0xd5ba4f(_0x50e4ac);
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
})().catch(_0x375d9e => $.notifyMsg.push(_0x375d9e.message || _0x375d9e)).finally(async () => {
  await SendMsgList($.notifyList);
  const _0x1ccc09 = {
    ok: 1
  };
  $.done(_0x1ccc09);
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