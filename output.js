//7/13/2024, 1:23:55 AM
//Author:https://github.com/lck7
/***********************************
name = YouTube翻译c
author = lck
date = 2024-07-10 15:48
脚本引用https://raw.githubusercontent.com/DualSubs/YouTube/main/js/YouTube.request.js
***********************************/

class e {
  constructor() {
    this.name = "Lodash", this.version = "1.2.0", console.log(`\n${this.name} v${this.version}\n`);
  }
  get(e = {}, a = "", t = void 0) {
    Array.isArray(a) || (a = this.toPath(a));
    const s = a.reduce((e, a) => Object(e)[a], e);
    return void 0 === s ? t : s;
  }
  set(e = {}, a = "", t) {
    return Array.isArray(a) || (a = this.toPath(a)), a.slice(0, -1).reduce((e, t, s) => Object(e[t]) === e[t] ? e[t] : e[t] = /^\d+$/.test(a[s + 1]) ? [] : {}, e)[a[a.length - 1]] = t, e;
  }
  unset(e = {}, a = "") {
    return Array.isArray(a) || (a = this.toPath(a)), a.reduce((e, t, s) => s === a.length - 1 ? (delete e[t], !0) : Object(e)[t], e);
  }
  toPath(e) {
    return e.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  }
  escape(e) {
    const a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    };
    return e.replace(/[&<>"']/g, e => a[e]);
  }
  unescape(e) {
    const a = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": "\"",
      "&#39;": "'"
    };
    return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g, e => a[e]);
  }
}
var a = {
    Switch: !0,
    Type: "Translate",
    Types: ["Official", "Translate"],
    Languages: ["EN", "ZH"],
    CacheSize: 50
  },
  t = {
    breakLine: {
      "text/xml": "&#x000A;",
      "application/xml": "&#x000A;",
      "text/vtt": "\n",
      "application/vtt": "\n",
      "text/json": "\n",
      "application/json": "\n"
    }
  },
  s = {
    Settings: a,
    Configs: t
  },
  n = {
    Switch: !0,
    Types: ["Official", "Translate"],
    Languages: ["AUTO", "ZH"]
  },
  l = {
    Languages: {
      AUTO: ["en", "en-US", "eng", "en-GB", "en-UK", "en-CA", "en-US SDH", "ja", "ja-JP", "jpn", "ko", "ko-KR", "kor", "pt", "pt-PT", "pt-BR", "por"],
      AR: ["ar", "ar-001"],
      BG: ["bg", "bg-BG", "bul"],
      CS: ["cs", "cs-CZ", "ces"],
      DA: ["da", "da-DK", "dan"],
      DE: ["de", "de-DE", "deu"],
      EL: ["el", "el-GR", "ell"],
      EN: ["en", "en-US", "eng", "en-GB", "en-UK", "en-CA", "en-US SDH"],
      "EN-CA": ["en-CA", "en", "eng"],
      "EN-GB": ["en-UK", "en", "eng"],
      "EN-US": ["en-US", "en", "eng"],
      "EN-US SDH": ["en-US SDH", "en-US", "en", "eng"],
      ES: ["es", "es-419", "es-ES", "spa", "es-419 SDH"],
      "ES-419": ["es-419", "es", "spa"],
      "ES-419 SDH": ["es-419 SDH", "es-419", "es", "spa"],
      "ES-ES": ["es-ES", "es", "spa"],
      ET: ["et", "et-EE", "est"],
      FI: ["fi", "fi-FI", "fin"],
      FR: ["fr", "fr-CA", "fr-FR", "fra"],
      "FR-CA": ["fr-CA", "fr", "fra"],
      "FR-DR": ["fr-FR", "fr", "fra"],
      HU: ["hu", "hu-HU", "hun"],
      ID: ["id", "id-id"],
      IT: ["it", "it-IT", "ita"],
      JA: ["ja", "ja-JP", "jpn"],
      KO: ["ko", "ko-KR", "kor"],
      LT: ["lt", "lt-LT", "lit"],
      LV: ["lv", "lv-LV", "lav"],
      NL: ["nl", "nl-NL", "nld"],
      NO: ["no", "nb-NO", "nor"],
      PL: ["pl", "pl-PL"],
      PT: ["pt", "pt-PT", "pt-BR", "por"],
      "PT-PT": ["pt-PT", "pt", "por"],
      "PT-BR": ["pt-BR", "pt", "por"],
      RO: ["ro", "ro-RO", "ron"],
      RU: ["ru", "ru-RU", "rus"],
      SK: ["sk", "sk-SK", "slk"],
      SL: ["sl", "sl-SI", "slv"],
      SV: ["sv", "sv-SE", "swe"],
      IS: ["is", "is-IS", "isl"],
      ZH: ["zh", "cmn", "zho", "zh-CN", "zh-Hans", "cmn-Hans", "zh-TW", "zh-Hant", "cmn-Hant", "zh-HK", "yue-Hant", "yue"],
      "ZH-CN": ["zh-CN", "zh-Hans", "cmn-Hans", "zho"],
      "ZH-HANS": ["zh-Hans", "cmn-Hans", "zh-CN", "zho"],
      "ZH-HK": ["zh-HK", "yue-Hant", "yue", "zho"],
      "ZH-TW": ["zh-TW", "zh-Hant", "cmn-Hant", "zho"],
      "ZH-HANT": ["zh-Hant", "cmn-Hant", "zh-TW", "zho"],
      YUE: ["yue", "yue-Hant", "zh-HK", "zho"],
      "YUE-HK": ["yue-Hant", "yue", "zh-HK", "zho"]
    }
  },
  g = {
    Settings: n,
    Configs: l
  },
  o = {
    Switch: !0,
    Type: "Official",
    Types: ["Translate", "External"],
    Languages: ["AUTO", "ZH"],
    AutoCC: !0,
    ShowOnly: !1
  },
  i = {
    Languages: {
      BG: "bg-BG",
      CS: "cs",
      DA: "da-DK",
      DE: "de",
      EL: "el",
      EN: "en",
      "EN-GB": "en-GB",
      "EN-US": "en-US",
      "EN-US SDH": "en-US SDH",
      ES: "es",
      "ES-419": "es-419",
      "ES-ES": "es-ES",
      ET: "et-EE",
      FI: "fi",
      FR: "fr",
      HU: "hu-HU",
      ID: "id",
      IS: "is-IS",
      IT: "it",
      JA: "ja",
      KO: "ko",
      LT: "lt-LT",
      LV: "lv-LV",
      NL: "nl-NL",
      NO: "nb-NO",
      PL: "pl-PL",
      PT: "pt",
      "PT-PT": "pt-PT",
      "PT-BR": "pt-BR",
      RO: "ro-RO",
      RU: "ru-RU",
      SK: "sk-SK",
      SL: "sl-SI",
      SV: "sv-SE",
      YUE: "yue",
      "YUE-HK": "yue-HK",
      ZH: "zh",
      "ZH-HANS": "zh-Hans",
      "ZH-HK": "zh-Hant-HK",
      "ZH-HANT": "zh-Hant",
      "ZH-TW": "zh-TW"
    },
    translationLanguages: {
      DESKTOP: [{
        languageCode: "sq",
        languageName: {
          simpleText: "Shqip - \u963F\u5C14\u5DF4\u5C3C\u4E9A\u8BED"
        }
      }, {
        languageCode: "ak",
        languageName: {
          simpleText: "\xC1k\xE1n - \u963F\u80AF\u8BED"
        }
      }, {
        languageCode: "ar",
        languageName: {
          simpleText: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 - \u963F\u62C9\u4F2F\u8BED"
        }
      }, {
        languageCode: "am",
        languageName: {
          simpleText: "\u12A0\u121B\u122D\u129B - \u963F\u59C6\u54C8\u62C9\u8BED"
        }
      }, {
        languageCode: "as",
        languageName: {
          simpleText: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE - \u963F\u8428\u59C6\u8BED"
        }
      }, {
        languageCode: "az",
        languageName: {
          simpleText: "\u0622\u0630\u0631\u0628\u0627\u064A\u062C\u0627\u0646 \u062F\u064A\u0644\u06CC - \u963F\u585E\u62DC\u7586\u8BED"
        }
      }, {
        languageCode: "ee",
        languageName: {
          simpleText: "\xC8\u028Begbe - \u57C3\u7EF4\u8BED"
        }
      }, {
        languageCode: "ay",
        languageName: {
          simpleText: "Aymar aru - \u827E\u9A6C\u62C9\u8BED"
        }
      }, {
        languageCode: "ga",
        languageName: {
          simpleText: "Gaeilge - \u7231\u5C14\u5170\u8BED"
        }
      }, {
        languageCode: "et",
        languageName: {
          simpleText: "Eesti - \u7231\u6C99\u5C3C\u4E9A\u8BED"
        }
      }, {
        languageCode: "or",
        languageName: {
          simpleText: "\u0B13\u0B21\u0B3C\u0B3F\u0B06 - \u5965\u91CC\u4E9A\u8BED"
        }
      }, {
        languageCode: "om",
        languageName: {
          simpleText: "Afaan Oromoo - \u5965\u7F57\u83AB\u8BED"
        }
      }, {
        languageCode: "eu",
        languageName: {
          simpleText: "Euskara - \u5DF4\u65AF\u514B\u8BED"
        }
      }, {
        languageCode: "be",
        languageName: {
          simpleText: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F - \u767D\u4FC4\u7F57\u65AF\u8BED"
        }
      }, {
        languageCode: "bg",
        languageName: {
          simpleText: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 - \u4FDD\u52A0\u5229\u4E9A\u8BED"
        }
      }, {
        languageCode: "nso",
        languageName: {
          simpleText: "Sesotho sa Leboa - \u5317\u7D22\u6258\u8BED"
        }
      }, {
        languageCode: "is",
        languageName: {
          simpleText: "\xCDslenska - \u51B0\u5C9B\u8BED"
        }
      }, {
        languageCode: "pl",
        languageName: {
          simpleText: "Polski - \u6CE2\u5170\u8BED"
        }
      }, {
        languageCode: "bs",
        languageName: {
          simpleText: "Bosanski - \u6CE2\u65AF\u5C3C\u4E9A\u8BED"
        }
      }, {
        languageCode: "fa",
        languageName: {
          simpleText: "\u0641\u0627\u0631\u0633\u06CC - \u6CE2\u65AF\u8BED"
        }
      }, {
        languageCode: "bho",
        languageName: {
          simpleText: "\u092D\u094B\u091C\u092A\u0941\u0930\u0940 - \u535A\u6770\u666E\u5C14\u8BED"
        }
      }, {
        languageCode: "ts",
        languageName: {
          simpleText: "Xitsonga - \u806A\u52A0\u8BED"
        }
      }, {
        languageCode: "tt",
        languageName: {
          simpleText: "\u0422\u0430\u0442\u0430\u0440\u0447\u0430 - \u9791\u977C\u8BED"
        }
      }, {
        languageCode: "da",
        languageName: {
          simpleText: "Dansk - \u4E39\u9EA6\u8BED"
        }
      }, {
        languageCode: "de",
        languageName: {
          simpleText: "Deutsch - \u5FB7\u8BED"
        }
      }, {
        languageCode: "dv",
        languageName: {
          simpleText: "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0 - \u8FEA\u7EF4\u5E0C\u8BED"
        }
      }, {
        languageCode: "ru",
        languageName: {
          simpleText: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 - \u4FC4\u8BED"
        }
      }, {
        languageCode: "fr",
        languageName: {
          simpleText: "fran\xE7ais - \u6CD5\u8BED"
        }
      }, {
        languageCode: "sa",
        languageName: {
          simpleText: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D - \u68B5\u8BED"
        }
      }, {
        languageCode: "fil",
        languageName: {
          simpleText: "Filipino - \u83F2\u5F8B\u5BBE\u8BED"
        }
      }, {
        languageCode: "fi",
        languageName: {
          simpleText: "suomi - \u82AC\u5170\u8BED"
        }
      }, {
        languageCode: "km",
        languageName: {
          simpleText: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A - \u9AD8\u68C9\u8BED"
        }
      }, {
        languageCode: "ka",
        languageName: {
          simpleText: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 - \u683C\u9C81\u5409\u4E9A\u8BED"
        }
      }, {
        languageCode: "gu",
        languageName: {
          simpleText: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0 - \u53E4\u5409\u62C9\u7279\u8BED"
        }
      }, {
        languageCode: "gn",
        languageName: {
          simpleText: "Ava\xF1e'\u1EBD - \u74DC\u62C9\u5C3C\u8BED"
        }
      }, {
        languageCode: "kk",
        languageName: {
          simpleText: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456 - \u54C8\u8428\u514B\u8BED"
        }
      }, {
        languageCode: "ht",
        languageName: {
          simpleText: "Krey\xF2l ayisyen - \u6D77\u5730\u514B\u91CC\u5965\u5C14\u8BED"
        }
      }, {
        languageCode: "ko",
        languageName: {
          simpleText: "\uD55C\uAD6D\uC5B4 - \u97E9\u8BED"
        }
      }, {
        languageCode: "ha",
        languageName: {
          simpleText: "\u0647\u064E\u0648\u064F\u0633\u064E - \u8C6A\u8428\u8BED"
        }
      }, {
        languageCode: "nl",
        languageName: {
          simpleText: "Nederlands - \u8377\u5170\u8BED"
        }
      }, {
        languageCode: "gl",
        languageName: {
          simpleText: "Galego - \u52A0\u5229\u897F\u4E9A\u8BED"
        }
      }, {
        languageCode: "ca",
        languageName: {
          simpleText: "catal\xE0 - \u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED"
        }
      }, {
        languageCode: "cs",
        languageName: {
          simpleText: "\u010De\u0161tina - \u6377\u514B\u8BED"
        }
      }, {
        languageCode: "kn",
        languageName: {
          simpleText: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1 - \u5361\u7EB3\u8FBE\u8BED"
        }
      }, {
        languageCode: "ky",
        languageName: {
          simpleText: "\u043A\u044B\u0440\u0433\u044B\u0437 \u0442\u0438\u043B\u0438 - \u5409\u5C14\u5409\u65AF\u8BED"
        }
      }, {
        languageCode: "xh",
        languageName: {
          simpleText: "isiXhosa - \u79D1\u8428\u8BED"
        }
      }, {
        languageCode: "co",
        languageName: {
          simpleText: "corsu - \u79D1\u897F\u5609\u8BED"
        }
      }, {
        languageCode: "hr",
        languageName: {
          simpleText: "hrvatski - \u514B\u7F57\u5730\u4E9A\u8BED"
        }
      }, {
        languageCode: "qu",
        languageName: {
          simpleText: "Runa Simi - \u514B\u4E18\u4E9A\u8BED"
        }
      }, {
        languageCode: "ku",
        languageName: {
          simpleText: "Kurd\xEE - \u5E93\u5C14\u5FB7\u8BED"
        }
      }, {
        languageCode: "la",
        languageName: {
          simpleText: "lingua lat\u012Bna - \u62C9\u4E01\u8BED"
        }
      }, {
        languageCode: "lv",
        languageName: {
          simpleText: "latvie\u0161u valoda - \u62C9\u8131\u7EF4\u4E9A\u8BED"
        }
      }, {
        languageCode: "lo",
        languageName: {
          simpleText: "\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7 - \u8001\u631D\u8BED"
        }
      }, {
        languageCode: "lt",
        languageName: {
          simpleText: "lietuvi\u0173 kalba - \u7ACB\u9676\u5B9B\u8BED"
        }
      }, {
        languageCode: "ln",
        languageName: {
          simpleText: "ling\xE1la - \u6797\u52A0\u62C9\u8BED"
        }
      }, {
        languageCode: "lg",
        languageName: {
          simpleText: "Luganda - \u5362\u5E72\u8FBE\u8BED"
        }
      }, {
        languageCode: "lb",
        languageName: {
          simpleText: "L\xEBtzebuergesch - \u5362\u68EE\u5821\u8BED"
        }
      }, {
        languageCode: "rw",
        languageName: {
          simpleText: "Kinyarwanda - \u5362\u65FA\u8FBE\u8BED"
        }
      }, {
        languageCode: "ro",
        languageName: {
          simpleText: "Rom\xE2n\u0103 - \u7F57\u9A6C\u5C3C\u4E9A\u8BED"
        }
      }, {
        languageCode: "mt",
        languageName: {
          simpleText: "Malti - \u9A6C\u8033\u4ED6\u8BED"
        }
      }, {
        languageCode: "mr",
        languageName: {
          simpleText: "\u092E\u0930\u093E\u0920\u0940 - \u9A6C\u62C9\u5730\u8BED"
        }
      }, {
        languageCode: "mg",
        languageName: {
          simpleText: "Malagasy - \u9A6C\u62C9\u52A0\u65AF\u8BED"
        }
      }, {
        languageCode: "ml",
        languageName: {
          simpleText: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02 - \u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED"
        }
      }, {
        languageCode: "ms",
        languageName: {
          simpleText: "bahasa Melayu - \u9A6C\u6765\u8BED"
        }
      }, {
        languageCode: "mk",
        languageName: {
          simpleText: "\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 \u0458\u0430\u0437\u0438\u043A - \u9A6C\u5176\u987F\u8BED"
        }
      }, {
        languageCode: "mi",
        languageName: {
          simpleText: "te reo M\u0101ori - \u6BDB\u5229\u8BED"
        }
      }, {
        languageCode: "mn",
        languageName: {
          simpleText: "\u041C\u043E\u043D\u0433\u043E\u043B \u0445\u044D\u043B - \u8499\u53E4\u8BED"
        }
      }, {
        languageCode: "bn",
        languageName: {
          simpleText: "\u09AC\u09BE\u0982\u09B2\u09BE - \u5B5F\u52A0\u62C9\u8BED"
        }
      }, {
        languageCode: "my",
        languageName: {
          simpleText: "\u1017\u1019\u102C\u1005\u102C - \u7F05\u7538\u8BED"
        }
      }, {
        languageCode: "hmn",
        languageName: {
          simpleText: "Hmoob - \u82D7\u8BED"
        }
      }, {
        languageCode: "af",
        languageName: {
          simpleText: "Afrikaans - \u5357\u975E\u8377\u5170\u8BED"
        }
      }, {
        languageCode: "st",
        languageName: {
          simpleText: "Sesotho - \u5357\u7D22\u6258\u8BED"
        }
      }, {
        languageCode: "ne",
        languageName: {
          simpleText: "\u0928\u0947\u092A\u093E\u0932\u0940 - \u5C3C\u6CCA\u5C14\u8BED"
        }
      }, {
        languageCode: "no",
        languageName: {
          simpleText: "Norsk - \u632A\u5A01\u8BED"
        }
      }, {
        languageCode: "pa",
        languageName: {
          simpleText: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 - \u65C1\u906E\u666E\u8BED"
        }
      }, {
        languageCode: "pt",
        languageName: {
          simpleText: "Portugu\xEAs - \u8461\u8404\u7259\u8BED"
        }
      }, {
        languageCode: "ps",
        languageName: {
          simpleText: "\u067E\u069A\u062A\u0648 - \u666E\u4EC0\u56FE\u8BED"
        }
      }, {
        languageCode: "ny",
        languageName: {
          simpleText: "chiChe\u0175a - \u9F50\u5207\u74E6\u8BED"
        }
      }, {
        languageCode: "ja",
        languageName: {
          simpleText: "\u65E5\u672C\u8A9E - \u65E5\u8BED"
        }
      }, {
        languageCode: "sv",
        languageName: {
          simpleText: "Svenska - \u745E\u5178\u8BED"
        }
      }, {
        languageCode: "sm",
        languageName: {
          simpleText: "Gagana fa'a Samoa - \u8428\u6469\u4E9A\u8BED"
        }
      }, {
        languageCode: "sr",
        languageName: {
          simpleText: "\u0421\u0440\u043F\u0441\u043A\u0438 \u0458\u0435\u0437\u0438\u043A - \u585E\u5C14\u7EF4\u4E9A\u8BED"
        }
      }, {
        languageCode: "si",
        languageName: {
          simpleText: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD - \u50E7\u4F3D\u7F57\u8BED"
        }
      }, {
        languageCode: "sn",
        languageName: {
          simpleText: "ChiShona - \u7ECD\u7EB3\u8BED"
        }
      }, {
        languageCode: "eo",
        languageName: {
          simpleText: "Esperanto - \u4E16\u754C\u8BED"
        }
      }, {
        languageCode: "sk",
        languageName: {
          simpleText: "sloven\u010Dina - \u65AF\u6D1B\u4F10\u514B\u8BED"
        }
      }, {
        languageCode: "sl",
        languageName: {
          simpleText: "sloven\u0161\u010Dina - \u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED"
        }
      }, {
        languageCode: "sw",
        languageName: {
          simpleText: "Kiswahili - \u65AF\u74E6\u5E0C\u91CC\u8BED"
        }
      }, {
        languageCode: "gd",
        languageName: {
          simpleText: "G\xE0idhlig - \u82CF\u683C\u5170\u76D6\u5C14\u8BED"
        }
      }, {
        languageCode: "ceb",
        languageName: {
          simpleText: "Binisaya - \u5BBF\u52A1\u8BED"
        }
      }, {
        languageCode: "so",
        languageName: {
          simpleText: "Soomaaliga - \u7D22\u9A6C\u91CC\u8BED"
        }
      }, {
        languageCode: "tg",
        languageName: {
          simpleText: "\u0442\u043E\u04B7\u0438\u043A\u04E3 - \u5854\u5409\u514B\u8BED"
        }
      }, {
        languageCode: "te",
        languageName: {
          simpleText: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 - \u6CF0\u5362\u56FA\u8BED"
        }
      }, {
        languageCode: "ta",
        languageName: {
          simpleText: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD - \u6CF0\u7C73\u5C14\u8BED"
        }
      }, {
        languageCode: "th",
        languageName: {
          simpleText: "\u0E44\u0E17\u0E22 - \u6CF0\u8BED"
        }
      }, {
        languageCode: "ti",
        languageName: {
          simpleText: "\u1275\u130D\u122D\u129B - \u63D0\u683C\u5229\u5C3C\u4E9A\u8BED"
        }
      }, {
        languageCode: "tr",
        languageName: {
          simpleText: "T\xFCrk\xE7e - \u571F\u8033\u5176\u8BED"
        }
      }, {
        languageCode: "tk",
        languageName: {
          simpleText: "T\xFCrkmen - \u571F\u5E93\u66FC\u8BED"
        }
      }, {
        languageCode: "cy",
        languageName: {
          simpleText: "Cymraeg - \u5A01\u5C14\u58EB\u8BED"
        }
      }, {
        languageCode: "ug",
        languageName: {
          simpleText: "\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5 - \u7EF4\u543E\u5C14\u8BED"
        }
      }, {
        languageCode: "und",
        languageName: {
          simpleText: "Unknown - \u672A\u77E5\u8BED\u8A00"
        }
      }, {
        languageCode: "ur",
        languageName: {
          simpleText: "\u0627\u0631\u062F\u0648 - \u4E4C\u5C14\u90FD\u8BED"
        }
      }, {
        languageCode: "uk",
        languageName: {
          simpleText: "\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 - \u4E4C\u514B\u5170\u8BED"
        }
      }, {
        languageCode: "uz",
        languageName: {
          simpleText: "O'zbek - \u4E4C\u5179\u522B\u514B\u8BED"
        }
      }, {
        languageCode: "es",
        languageName: {
          simpleText: "Espa\xF1ol - \u897F\u73ED\u7259\u8BED"
        }
      }, {
        languageCode: "fy",
        languageName: {
          simpleText: "Frysk - \u897F\u5F17\u91CC\u897F\u4E9A\u8BED"
        }
      }, {
        languageCode: "iw",
        languageName: {
          simpleText: "\u05E2\u05D1\u05E8\u05D9\u05EA - \u5E0C\u4F2F\u6765\u8BED"
        }
      }, {
        languageCode: "el",
        languageName: {
          simpleText: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC - \u5E0C\u814A\u8BED"
        }
      }, {
        languageCode: "haw",
        languageName: {
          simpleText: "\u02BB\u014Clelo Hawai\u02BBi - \u590F\u5A01\u5937\u8BED"
        }
      }, {
        languageCode: "sd",
        languageName: {
          simpleText: "\u0633\u0646\u068C\u064A - \u4FE1\u5FB7\u8BED"
        }
      }, {
        languageCode: "hu",
        languageName: {
          simpleText: "magyar - \u5308\u7259\u5229\u8BED"
        }
      }, {
        languageCode: "su",
        languageName: {
          simpleText: "Basa Sunda - \u5DFD\u4ED6\u8BED"
        }
      }, {
        languageCode: "hy",
        languageName: {
          simpleText: "\u0570\u0561\u0575\u0565\u0580\u0565\u0576 - \u4E9A\u7F8E\u5C3C\u4E9A\u8BED"
        }
      }, {
        languageCode: "ig",
        languageName: {
          simpleText: "Igbo - \u4F0A\u535A\u8BED"
        }
      }, {
        languageCode: "it",
        languageName: {
          simpleText: "Italiano - \u610F\u5927\u5229\u8BED"
        }
      }, {
        languageCode: "yi",
        languageName: {
          simpleText: "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9 - \u610F\u7B2C\u7EEA\u8BED"
        }
      }, {
        languageCode: "hi",
        languageName: {
          simpleText: "\u0939\u093F\u0928\u094D\u0926\u0940 - \u5370\u5730\u8BED"
        }
      }, {
        languageCode: "id",
        languageName: {
          simpleText: "Bahasa Indonesia - \u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED"
        }
      }, {
        languageCode: "en",
        languageName: {
          simpleText: "English - \u82F1\u8BED"
        }
      }, {
        languageCode: "yo",
        languageName: {
          simpleText: "Yor\xF9b\xE1 - \u7EA6\u9C81\u5DF4\u8BED"
        }
      }, {
        languageCode: "vi",
        languageName: {
          simpleText: "Ti\u1EBFng Vi\u1EC7t - \u8D8A\u5357\u8BED"
        }
      }, {
        languageCode: "jv",
        languageName: {
          simpleText: "Basa Jawa - \u722A\u54C7\u8BED"
        }
      }, {
        languageCode: "zh-Hant",
        languageName: {
          simpleText: "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09- \u4E2D\u6587\uFF08\u7E41\u4F53\uFF09"
        }
      }, {
        languageCode: "zh-Hans",
        languageName: {
          simpleText: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09"
        }
      }, {
        languageCode: "zu",
        languageName: {
          simpleText: "isiZulu - \u7956\u9C81\u8BED"
        }
      }, {
        languageCode: "kri",
        languageName: {
          simpleText: "Kr\xEC\xEC - \u514B\u91CC\u8BED"
        }
      }],
      MOBILE: [{
        languageCode: "sq",
        languageName: {
          runs: [{
            text: "Shqip - \u963F\u5C14\u5DF4\u5C3C\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "ak",
        languageName: {
          runs: [{
            text: "\xC1k\xE1n - \u963F\u80AF\u8BED"
          }]
        }
      }, {
        languageCode: "ar",
        languageName: {
          runs: [{
            text: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629 - \u963F\u62C9\u4F2F\u8BED"
          }]
        }
      }, {
        languageCode: "am",
        languageName: {
          runs: [{
            text: "\u12A0\u121B\u122D\u129B - \u963F\u59C6\u54C8\u62C9\u8BED"
          }]
        }
      }, {
        languageCode: "as",
        languageName: {
          runs: [{
            text: "\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE - \u963F\u8428\u59C6\u8BED"
          }]
        }
      }, {
        languageCode: "az",
        languageName: {
          runs: [{
            text: "Az\u0259rbaycanca - \u963F\u585E\u62DC\u7586\u8BED"
          }]
        }
      }, {
        languageCode: "ee",
        languageName: {
          runs: [{
            text: "E\u028Begbe - \u57C3\u7EF4\u8BED"
          }]
        }
      }, {
        languageCode: "ay",
        languageName: {
          runs: [{
            text: "Aymar - \u827E\u9A6C\u62C9\u8BED"
          }]
        }
      }, {
        languageCode: "ga",
        languageName: {
          runs: [{
            text: "Gaeilge - \u7231\u5C14\u5170\u8BED"
          }]
        }
      }, {
        languageCode: "et",
        languageName: {
          runs: [{
            text: "Eesti - \u7231\u6C99\u5C3C\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "or",
        languageName: {
          runs: [{
            text: "\u0B13\u0B21\u0B3C\u0B3F\u0B06 - \u5965\u91CC\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "om",
        languageName: {
          runs: [{
            text: "Oromoo - \u5965\u7F57\u83AB\u8BED"
          }]
        }
      }, {
        languageCode: "eu",
        languageName: {
          runs: [{
            text: "Euskara - \u5DF4\u65AF\u514B\u8BED"
          }]
        }
      }, {
        languageCode: "be",
        languageName: {
          runs: [{
            text: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F - \u767D\u4FC4\u7F57\u65AF\u8BED"
          }]
        }
      }, {
        languageCode: "bg",
        languageName: {
          runs: [{
            text: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 - \u4FDD\u52A0\u5229\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "nso",
        languageName: {
          runs: [{
            text: "Sesotho sa Leboa - \u5317\u7D22\u6258\u8BED"
          }]
        }
      }, {
        languageCode: "is",
        languageName: {
          runs: [{
            text: "\xCDslenska - \u51B0\u5C9B\u8BED"
          }]
        }
      }, {
        languageCode: "pl",
        languageName: {
          runs: [{
            text: "Polski - \u6CE2\u5170\u8BED"
          }]
        }
      }, {
        languageCode: "bs",
        languageName: {
          runs: [{
            text: "Bosanski - \u6CE2\u65AF\u5C3C\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "fa",
        languageName: {
          runs: [{
            text: "\u0641\u0627\u0631\u0633\u06CC - \u6CE2\u65AF\u8BED"
          }]
        }
      }, {
        languageCode: "bho",
        languageName: {
          runs: [{
            text: "\u092D\u094B\u091C\u092A\u0941\u0930\u0940 - \u535A\u6770\u666E\u5C14\u8BED"
          }]
        }
      }, {
        languageCode: "ts",
        languageName: {
          runs: [{
            text: "Xitsonga - \u806A\u52A0\u8BED"
          }]
        }
      }, {
        languageCode: "tt",
        languageName: {
          runs: [{
            text: "\u0422\u0430\u0442\u0430\u0440\u0447\u0430 - \u9791\u977C\u8BED"
          }]
        }
      }, {
        languageCode: "da",
        languageName: {
          runs: [{
            text: "Dansk - \u4E39\u9EA6\u8BED"
          }]
        }
      }, {
        languageCode: "de",
        languageName: {
          runs: [{
            text: "Deutsch - \u5FB7\u8BED"
          }]
        }
      }, {
        languageCode: "dv",
        languageName: {
          runs: [{
            text: "\u078B\u07A8\u0788\u07AC\u0780\u07A8\u0784\u07A6\u0790\u07B0 - \u8FEA\u7EF4\u5E0C\u8BED"
          }]
        }
      }, {
        languageCode: "ru",
        languageName: {
          runs: [{
            text: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 - \u4FC4\u8BED"
          }]
        }
      }, {
        languageCode: "fr",
        languageName: {
          runs: [{
            text: "Fran\xE7ais - \u6CD5\u8BED"
          }]
        }
      }, {
        languageCode: "sa",
        languageName: {
          runs: [{
            text: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D - \u68B5\u8BED"
          }]
        }
      }, {
        languageCode: "fil",
        languageName: {
          runs: [{
            text: "Filipino - \u83F2\u5F8B\u5BBE\u8BED"
          }]
        }
      }, {
        languageCode: "fi",
        languageName: {
          runs: [{
            text: "Suomi - \u82AC\u5170\u8BED"
          }]
        }
      }, {
        languageCode: "km",
        languageName: {
          runs: [{
            text: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A - \u9AD8\u68C9\u8BED"
          }]
        }
      }, {
        languageCode: "ka",
        languageName: {
          runs: [{
            text: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 - \u683C\u9C81\u5409\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "gu",
        languageName: {
          runs: [{
            text: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0 - \u53E4\u5409\u62C9\u7279\u8BED"
          }]
        }
      }, {
        languageCode: "gn",
        languageName: {
          runs: [{
            text: "Ava\xF1e'\u1EBD - \u74DC\u62C9\u5C3C\u8BED"
          }]
        }
      }, {
        languageCode: "kk",
        languageName: {
          runs: [{
            text: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456 - \u54C8\u8428\u514B\u8BED"
          }]
        }
      }, {
        languageCode: "ht",
        languageName: {
          runs: [{
            text: "\u6D77\u5730\u514B\u91CC\u5965\u5C14\u8BED"
          }]
        }
      }, {
        languageCode: "ko",
        languageName: {
          runs: [{
            text: "\uD55C\uAD6D\uB9D0 - \u97E9\u8BED"
          }]
        }
      }, {
        languageCode: "ha",
        languageName: {
          runs: [{
            text: "\u0647\u064E\u0648\u064F\u0633\u064E - \u8C6A\u8428\u8BED"
          }]
        }
      }, {
        languageCode: "nl",
        languageName: {
          runs: [{
            text: "Nederlands - \u8377\u5170\u8BED"
          }]
        }
      }, {
        languageCode: "gl",
        languageName: {
          runs: [{
            text: "Galego - \u52A0\u5229\u897F\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "ca",
        languageName: {
          runs: [{
            text: "Catal\xE0 - \u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "cs",
        languageName: {
          runs: [{
            text: "\u010Ce\u0161tina - \u6377\u514B\u8BED"
          }]
        }
      }, {
        languageCode: "kn",
        languageName: {
          runs: [{
            text: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1 - \u5361\u7EB3\u8FBE\u8BED"
          }]
        }
      }, {
        languageCode: "ky",
        languageName: {
          runs: [{
            text: "\u041A\u044B\u0440\u0433\u044B\u0437\u0447\u0430 - \u5409\u5C14\u5409\u65AF\u8BED"
          }]
        }
      }, {
        languageCode: "xh",
        languageName: {
          runs: [{
            text: "isiXhosa - \u79D1\u8428\u8BED"
          }]
        }
      }, {
        languageCode: "co",
        languageName: {
          runs: [{
            text: "Corsu - \u79D1\u897F\u5609\u8BED"
          }]
        }
      }, {
        languageCode: "hr",
        languageName: {
          runs: [{
            text: "Hrvatski - \u514B\u7F57\u5730\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "qu",
        languageName: {
          runs: [{
            text: "Runa Simi - \u514B\u4E18\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "ku",
        languageName: {
          runs: [{
            text: "Kurd\xEE - \u5E93\u5C14\u5FB7\u8BED"
          }]
        }
      }, {
        languageCode: "la",
        languageName: {
          runs: [{
            text: "lingua lat\u012Bna - \u62C9\u4E01\u8BED"
          }]
        }
      }, {
        languageCode: "lv",
        languageName: {
          runs: [{
            text: "Latvie\u0161u - \u62C9\u8131\u7EF4\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "lo",
        languageName: {
          runs: [{
            text: "\u0EA5\u0EB2\u0EA7 - \u8001\u631D\u8BED"
          }]
        }
      }, {
        languageCode: "lt",
        languageName: {
          runs: [{
            text: "Lietuvi\u0173 - \u7ACB\u9676\u5B9B\u8BED"
          }]
        }
      }, {
        languageCode: "ln",
        languageName: {
          runs: [{
            text: "Ling\xE1la - \u6797\u52A0\u62C9\u8BED"
          }]
        }
      }, {
        languageCode: "lg",
        languageName: {
          runs: [{
            text: "Luganda - \u5362\u5E72\u8FBE\u8BED"
          }]
        }
      }, {
        languageCode: "lb",
        languageName: {
          runs: [{
            text: "L\xEBtzebuergesch - \u5362\u68EE\u5821\u8BED"
          }]
        }
      }, {
        languageCode: "rw",
        languageName: {
          runs: [{
            text: "Kinyarwanda - \u5362\u65FA\u8FBE\u8BED"
          }]
        }
      }, {
        languageCode: "ro",
        languageName: {
          runs: [{
            text: "Rom\xE2n\u0103 - \u7F57\u9A6C\u5C3C\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "mt",
        languageName: {
          runs: [{
            text: "Malti - \u9A6C\u8033\u4ED6\u8BED"
          }]
        }
      }, {
        languageCode: "mr",
        languageName: {
          runs: [{
            text: "\u092E\u0930\u093E\u0920\u0940 - \u9A6C\u62C9\u5730\u8BED"
          }]
        }
      }, {
        languageCode: "mg",
        languageName: {
          runs: [{
            text: "Malagasy - \u9A6C\u62C9\u52A0\u65AF\u8BED"
          }]
        }
      }, {
        languageCode: "ml",
        languageName: {
          runs: [{
            text: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02 - \u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED"
          }]
        }
      }, {
        languageCode: "ms",
        languageName: {
          runs: [{
            text: "Bahasa Melayu - \u9A6C\u6765\u8BED"
          }]
        }
      }, {
        languageCode: "mk",
        languageName: {
          runs: [{
            text: "\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 - \u9A6C\u5176\u987F\u8BED"
          }]
        }
      }, {
        languageCode: "mi",
        languageName: {
          runs: [{
            text: "M\u0101ori - \u6BDB\u5229\u8BED"
          }]
        }
      }, {
        languageCode: "mn",
        languageName: {
          runs: [{
            text: "\u041C\u043E\u043D\u0433\u043E\u043B - \u8499\u53E4\u8BED"
          }]
        }
      }, {
        languageCode: "bn",
        languageName: {
          runs: [{
            text: "\u09AC\u09BE\u0982\u09B2\u09BE - \u5B5F\u52A0\u62C9\u8BED"
          }]
        }
      }, {
        languageCode: "my",
        languageName: {
          runs: [{
            text: "\u1017\u1019\u102C\u1005\u102C - \u7F05\u7538\u8BED"
          }]
        }
      }, {
        languageCode: "hmn",
        languageName: {
          runs: [{
            text: "Hmoob - \u82D7\u8BED"
          }]
        }
      }, {
        languageCode: "af",
        languageName: {
          runs: [{
            text: "Afrikaans - \u5357\u975E\u8377\u5170\u8BED"
          }]
        }
      }, {
        languageCode: "st",
        languageName: {
          runs: [{
            text: "Sesotho - \u5357\u7D22\u6258\u8BED"
          }]
        }
      }, {
        languageCode: "ne",
        languageName: {
          runs: [{
            text: "\u0928\u0947\u092A\u093E\u0932\u0940 - \u5C3C\u6CCA\u5C14\u8BED"
          }]
        }
      }, {
        languageCode: "no",
        languageName: {
          runs: [{
            text: "Norsk - \u632A\u5A01\u8BED"
          }]
        }
      }, {
        languageCode: "pa",
        languageName: {
          runs: [{
            text: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40 - \u65C1\u906E\u666E\u8BED"
          }]
        }
      }, {
        languageCode: "pt",
        languageName: {
          runs: [{
            text: "Portugu\xEAs - \u8461\u8404\u7259\u8BED"
          }]
        }
      }, {
        languageCode: "ps",
        languageName: {
          runs: [{
            text: "\u067E\u069A\u062A\u0648 - \u666E\u4EC0\u56FE\u8BED"
          }]
        }
      }, {
        languageCode: "ny",
        languageName: {
          runs: [{
            text: "chiChe\u0175a - \u9F50\u5207\u74E6\u8BED"
          }]
        }
      }, {
        languageCode: "ja",
        languageName: {
          runs: [{
            text: "\u65E5\u672C\u8A9E - \u65E5\u8BED"
          }]
        }
      }, {
        languageCode: "sv",
        languageName: {
          runs: [{
            text: "Svenska - \u745E\u5178\u8BED"
          }]
        }
      }, {
        languageCode: "sm",
        languageName: {
          runs: [{
            text: "Gagana Samoa - \u8428\u6469\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "sr",
        languageName: {
          runs: [{
            text: "\u0421\u0440\u043F\u0441\u043A\u0438 \u0458\u0435\u0437\u0438\u043A - \u585E\u5C14\u7EF4\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "si",
        languageName: {
          runs: [{
            text: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD - \u50E7\u4F3D\u7F57\u8BED"
          }]
        }
      }, {
        languageCode: "sn",
        languageName: {
          runs: [{
            text: "ChiShona - \u7ECD\u7EB3\u8BED"
          }]
        }
      }, {
        languageCode: "eo",
        languageName: {
          runs: [{
            text: "Esperanto - \u4E16\u754C\u8BED"
          }]
        }
      }, {
        languageCode: "sk",
        languageName: {
          runs: [{
            text: "Sloven\u010Dina - \u65AF\u6D1B\u4F10\u514B\u8BED"
          }]
        }
      }, {
        languageCode: "sl",
        languageName: {
          runs: [{
            text: "Sloven\u0161\u010Dina - \u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "sw",
        languageName: {
          runs: [{
            text: "Kiswahili - \u65AF\u74E6\u5E0C\u91CC\u8BED"
          }]
        }
      }, {
        languageCode: "gd",
        languageName: {
          runs: [{
            text: "G\xE0idhlig - \u82CF\u683C\u5170\u76D6\u5C14\u8BED"
          }]
        }
      }, {
        languageCode: "ceb",
        languageName: {
          runs: [{
            text: "Cebuano - \u5BBF\u52A1\u8BED"
          }]
        }
      }, {
        languageCode: "so",
        languageName: {
          runs: [{
            text: "Soomaaliga - \u7D22\u9A6C\u91CC\u8BED"
          }]
        }
      }, {
        languageCode: "tg",
        languageName: {
          runs: [{
            text: "\u0442\u043E\u04B7\u0438\u043A\u04E3 - \u5854\u5409\u514B\u8BED"
          }]
        }
      }, {
        languageCode: "te",
        languageName: {
          runs: [{
            text: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41 - \u6CF0\u5362\u56FA\u8BED"
          }]
        }
      }, {
        languageCode: "ta",
        languageName: {
          runs: [{
            text: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD - \u6CF0\u7C73\u5C14\u8BED"
          }]
        }
      }, {
        languageCode: "th",
        languageName: {
          runs: [{
            text: "\u0E44\u0E17\u0E22 - \u6CF0\u8BED"
          }]
        }
      }, {
        languageCode: "ti",
        languageName: {
          runs: [{
            text: "\u1275\u130D\u122D\u129B - \u63D0\u683C\u5229\u5C3C\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "tr",
        languageName: {
          runs: [{
            text: "T\xFCrk\xE7e - \u571F\u8033\u5176\u8BED"
          }]
        }
      }, {
        languageCode: "tk",
        languageName: {
          runs: [{
            text: "T\xFCrkmen - \u571F\u5E93\u66FC\u8BED"
          }]
        }
      }, {
        languageCode: "cy",
        languageName: {
          runs: [{
            text: "Cymraeg - \u5A01\u5C14\u58EB\u8BED"
          }]
        }
      }, {
        languageCode: "ug",
        languageName: {
          runs: [{
            text: "\u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5 - \u7EF4\u543E\u5C14\u8BED"
          }]
        }
      }, {
        languageCode: "und",
        languageName: {
          runs: [{
            text: "Unknown - \u672A\u77E5\u8BED\u8A00"
          }]
        }
      }, {
        languageCode: "ur",
        languageName: {
          runs: [{
            text: "\u0627\u0631\u062F\u0648 - \u4E4C\u5C14\u90FD\u8BED"
          }]
        }
      }, {
        languageCode: "uk",
        languageName: {
          runs: [{
            text: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 - \u4E4C\u514B\u5170\u8BED"
          }]
        }
      }, {
        languageCode: "uz",
        languageName: {
          runs: [{
            text: "O\u2018zbek - \u4E4C\u5179\u522B\u514B\u8BED"
          }]
        }
      }, {
        languageCode: "es",
        languageName: {
          runs: [{
            text: "Espa\xF1ol - \u897F\u73ED\u7259\u8BED"
          }]
        }
      }, {
        languageCode: "fy",
        languageName: {
          runs: [{
            text: "Frysk - \u897F\u5F17\u91CC\u897F\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "iw",
        languageName: {
          runs: [{
            text: "\u05E2\u05D1\u05E8\u05D9\u05EA - \u5E0C\u4F2F\u6765\u8BED"
          }]
        }
      }, {
        languageCode: "el",
        languageName: {
          runs: [{
            text: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC - \u5E0C\u814A\u8BED"
          }]
        }
      }, {
        languageCode: "haw",
        languageName: {
          runs: [{
            text: "\u02BB\u014Clelo Hawai\u02BBi - \u590F\u5A01\u5937\u8BED"
          }]
        }
      }, {
        languageCode: "sd",
        languageName: {
          runs: [{
            text: "\u0633\u0646\u068C\u064A - \u4FE1\u5FB7\u8BED"
          }]
        }
      }, {
        languageCode: "hu",
        languageName: {
          runs: [{
            text: "Magyar - \u5308\u7259\u5229\u8BED"
          }]
        }
      }, {
        languageCode: "su",
        languageName: {
          runs: [{
            text: "Basa Sunda - \u5DFD\u4ED6\u8BED"
          }]
        }
      }, {
        languageCode: "hy",
        languageName: {
          runs: [{
            text: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576 - \u4E9A\u7F8E\u5C3C\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "ig",
        languageName: {
          runs: [{
            text: "Igbo - \u4F0A\u535A\u8BED"
          }]
        }
      }, {
        languageCode: "it",
        languageName: {
          runs: [{
            text: "Italiano - \u610F\u5927\u5229\u8BED"
          }]
        }
      }, {
        languageCode: "yi",
        languageName: {
          runs: [{
            text: "\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9 - \u610F\u7B2C\u7EEA\u8BED"
          }]
        }
      }, {
        languageCode: "hi",
        languageName: {
          runs: [{
            text: "\u0939\u093F\u0928\u094D\u0926\u0940 - \u5370\u5730\u8BED"
          }]
        }
      }, {
        languageCode: "id",
        languageName: {
          runs: [{
            text: "Bahasa Indonesia - \u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED"
          }]
        }
      }, {
        languageCode: "en",
        languageName: {
          runs: [{
            text: "English - \u82F1\u8BED"
          }]
        }
      }, {
        languageCode: "yo",
        languageName: {
          runs: [{
            text: "Yor\xF9b\xE1 - \u7EA6\u9C81\u5DF4\u8BED"
          }]
        }
      }, {
        languageCode: "vi",
        languageName: {
          runs: [{
            text: "Ti\u1EBFng Vi\u1EC7t - \u8D8A\u5357\u8BED"
          }]
        }
      }, {
        languageCode: "jv",
        languageName: {
          runs: [{
            text: "Basa Jawa - \u722A\u54C7\u8BED"
          }]
        }
      }, {
        languageCode: "zh-Hant",
        languageName: {
          runs: [{
            text: "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09 - \u4E2D\u6587\uFF08\u7E41\u4F53\uFF09"
          }]
        }
      }, {
        languageCode: "zh-Hans",
        languageName: {
          runs: [{
            text: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09"
          }]
        }
      }, {
        languageCode: "zu",
        languageName: {
          runs: [{
            text: "isiZulu - \u7956\u9C81\u8BED"
          }]
        }
      }, {
        languageCode: "kri",
        languageName: {
          runs: [{
            text: "Kr\xEC\xEC - \u514B\u91CC\u8BED"
          }]
        }
      }]
    }
  },
  u = {
    Settings: o,
    Configs: i
  },
  r = {
    Switch: !0,
    Type: "Translate",
    Languages: ["AUTO", "ZH"]
  },
  d = {
    Languages: {
      AR: "ar",
      CS: "cs",
      DA: "da",
      DE: "de",
      EN: "en",
      "EN-GB": "en-GB",
      "EN-US": "en-US",
      "EN-US SDH": "en-US SDH",
      ES: "es",
      "ES-419": "es-419",
      "ES-ES": "es-ES",
      FI: "fi",
      FR: "fr",
      HE: "he",
      HR: "hr",
      HU: "hu",
      ID: "id",
      IT: "it",
      JA: "ja",
      KO: "ko",
      MS: "ms",
      NB: "nb",
      NL: "nl",
      PL: "pl",
      PT: "pt",
      "PT-PT": "pt-PT",
      "PT-BR": "pt-BR",
      RO: "ro",
      RU: "ru",
      SV: "sv",
      TH: "th",
      TR: "tr",
      UK: "uk",
      VI: "vi",
      IS: "is",
      ZH: "zh",
      "ZH-HANS": "zh-Hans",
      "ZH-HK": "zh-HK",
      "ZH-HANT": "zh-Hant"
    }
  },
  c = {
    Settings: r,
    Configs: d
  },
  m = {
    Switch: !0,
    Types: ["Translate", "External"],
    Languages: ["AUTO", "ZH"]
  },
  h = {
    Settings: m
  },
  p = {
    CacheSize: 20,
    ShowOnly: !1,
    Position: "Reverse",
    Offset: 0,
    Tolerance: 1000
  },
  C = {
    Settings: p
  },
  f = {
    Vendor: "Google",
    ShowOnly: !1,
    Position: "Forward",
    CacheSize: 10,
    Method: "Part",
    Times: 3,
    Interval: 500,
    Exponential: !0
  },
  y = {
    Settings: f
  },
  x = {
    SubVendor: "URL",
    LrcVendor: "NeteaseMusic",
    CacheSize: 50
  },
  b = {
    Settings: x
  },
  N = {
    GoogleCloud: {
      Version: "v2",
      Mode: "Key",
      Auth: ""
    },
    Microsoft: {
      Version: "Azure",
      Mode: "Token",
      Region: "",
      Auth: ""
    },
    DeepL: {
      Version: "Free",
      Auth: ""
    },
    DeepLX: {
      Endpoint: "",
      Auth: ""
    },
    URL: "",
    NeteaseMusic: {
      PhoneNumber: "",
      Password: ""
    }
  },
  S = {
    Settings: N
  },
  T = Database = {
    Default: Object.freeze({
      __proto__: null,
      Configs: t,
      Settings: a,
      default: s
    }),
    Universal: Object.freeze({
      __proto__: null,
      Configs: l,
      Settings: n,
      default: g
    }),
    YouTube: Object.freeze({
      __proto__: null,
      Configs: i,
      Settings: o,
      default: u
    }),
    Netflix: Object.freeze({
      __proto__: null,
      Configs: d,
      Settings: r,
      default: c
    }),
    Spotify: Object.freeze({
      __proto__: null,
      Settings: m,
      default: h
    }),
    Composite: Object.freeze({
      __proto__: null,
      Settings: p,
      default: C
    }),
    Translate: Object.freeze({
      __proto__: null,
      Settings: f,
      default: y
    }),
    External: Object.freeze({
      __proto__: null,
      Settings: x,
      default: b
    }),
    API: Object.freeze({
      __proto__: null,
      Settings: N,
      default: S
    })
  };
class k {
  constructor(e = {}) {
    this.Name = "Composite", this.Version = "1.0.0", this.Offset = 0, this.Tolerance = 0, this.Position = "Forward", Object.assign(this, e), console.log(`\n🟧 ${this.Name} v${this.Version}\n`);
  }
  JSON(e = {}, a = {}, t = "captions", s = this.Offset, n = this.Tolerance, l = this.Position) {
    console.log(`☑️ Composite JSON Subtitles\nOffset:${s}, Tolerance:${n}, Position:${l}`, "");
    let g = e,
      o = 0,
      i = 0,
      u = 0;
    const r = e?.events?.length,
      d = a?.events?.length;
    for ("asr" === t && (console.log("\u2611\uFE0F DualSub\u662F\u81EA\u52A8\u751F\u6210\u5B57\u5E55", ""), o = 1, i = 1, u = 1, e.events = e.events.map(e => (e?.segs && Array.isArray(e?.segs) && (e.segs = [{
      utf8: e.segs.map(e => e.utf8).join("")
    }]), delete e.wWinId, e)), a.events = a.events.map(e => (e?.segs && Array.isArray(e?.segs) && (e.segs = [{
      utf8: e.segs.map(e => e.utf8).join("")
    }]), delete e.wWinId, e))); i < r && u < d;) {
      const t = e.events[i].tStartMs,
        s = a.events[u].tStartMs,
        r = e.events[i + 1]?.tStartMs ?? t,
        d = a.events[u + 1]?.tStartMs ?? s;
      if (Math.abs(t - s) <= n) {
        o = i;
        const t = e.events[i]?.segs?.[0].utf8 ?? "",
          s = a.events[u]?.segs?.[0].utf8 ?? "";
        g.events[o].segs = [{
          utf8: "Reverse" === l ? `${s}\n${t}` : `${t}\n${s}`
        }];
      }
      Math.abs(r - d) <= n ? (i++, u++) : s > t ? i++ : (t > s || i++, u++);
    }
    return console.log("\u2705 Composite JSON Subtitles", ""), g;
  }
  timedText(e = {}, a = {}, t = "captions", s = this.Offset, n = this.Tolerance, l = this.Position) {
    console.log(`☑️ Composite timedText Subtitles\nOffset:${s}, Tolerance:${n}, Position:${l}`, "");
    let g = e,
      o = 0,
      i = 0,
      u = 0;
    const r = e?.timedtext?.body?.p?.length,
      d = a?.timedtext?.body?.p?.length;
    for ("asr" === t && (console.log("\u2611\uFE0F DualSub\u662F\u81EA\u52A8\u751F\u6210\u5B57\u5E55", ""), g.timedtext.head.wp[1]["@rc"] = "1", e.timedtext.body.p = e.timedtext.body.p.map(e => (e?.s && (Array.isArray(e?.s) ? e["#"] = e?.s.map(e => e["#"]).join("") : e["#"] = e.s?.["#"] ?? "", delete e.s), e)), a.timedtext.body.p = a.timedtext.body.p.map(e => (e?.s && (Array.isArray(e?.s) ? e["#"] = e?.s.map(e => e["#"]).join("") : e["#"] = e.s?.["#"] ?? "", delete e.s), e))); i < r && u < d;) {
      const t = parseInt(e.timedtext.body.p[i]["@t"], 10),
        s = parseInt(a.timedtext.body.p[u]["@t"], 10),
        r = parseInt(e.timedtext.body.p[i + 1]?.["@t"] ?? t, 10),
        d = parseInt(a.timedtext.body.p[u + 1]?.["@t"] ?? s, 10);
      if (Math.abs(t - s) <= n) {
        o = i;
        const t = e.timedtext.body.p[i]?.["#"] ?? "",
          s = a.timedtext.body.p[u]?.["#"] ?? "";
        g.timedtext.body.p[o]["#"] = "Reverse" === l ? `${s}&#x000A;${t}` : `${t}&#x000A;${s}`;
      }
      Math.abs(r - d) <= n ? (i++, u++) : s > t ? i++ : (t > s || i++, u++);
    }
    return console.log("\u2705 Composite timedText Subtitles", ""), g;
  }
  webVTT(e = {}, a = {}, t = this.Offset, s = this.Tolerance, n = this.Position) {
    console.log(`☑️ Composite webVTT Subtitles\nOffset:${t}, Tolerance:${s}, Position:${n}`, "");
    let l = e,
      g = 0,
      o = 0,
      i = 0;
    const u = e?.body?.length,
      r = a?.body?.length;
    for (; o < u && i < r;) {
      const t = e.body[o].timeStamp,
        u = a.body[i].timeStamp,
        r = e.body[o + 1]?.timeStamp ?? t,
        d = a.body[i + 1]?.timeStamp ?? u,
        c = e.body[o]?.text ?? "",
        m = a.body[i]?.text ?? "";
      Math.abs(t - u) <= s && (g = o, l.body[g].text = "Reverse" === n ? `${m}\n${c}` : `${c}\n${m}`), Math.abs(r - d) <= s ? (o++, i++) : u > t ? o++ : (t > u || o++, i++);
    }
    return console.log("\u2705 Composite webVTT Subtitles", ""), l;
  }
  spotifyLyric(e = [], a = [], t = this.Offset, s = this.Tolerance, n = this.Position) {
    console.log(`☑️ Composite Spotify Lyrics\nOffset:${t}, Tolerance:${s}, Position:${n}`, "");
    let l = e,
      g = 0,
      o = 0,
      i = 0;
    const u = e?.length,
      r = a?.length;
    for (; o < u && i < r;) {
      const u = e[o].startTimeMs,
        r = a[i].startTimeMs + t,
        d = e[o + 1]?.startTimeMs ?? u,
        c = a[i + 1]?.startTimeMs + this.Offset ?? r,
        m = e[o]?.words ?? "",
        h = a[i]?.words ?? "";
      Math.abs(u - r) <= s && (g = o, l[g].words = "Reverse" === n ? `${h}\n${m}` : `${m}\n${h}`, l[g].owords = m, l[g].twords = h), Math.abs(d - c) <= s ? (o++, i++) : r > u ? o++ : (u > r || o++, i++);
    }
    return console.log("\u2705 Composite Spotify Lyrics", ""), l;
  }
}
const $ = new class {
    constructor(a, t) {
      this.name = a, this.version = "1.5.11", this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = new Date().getTime(), Object.assign(this, t), this.log("", "\uD83D\uDEA9 \u5F00\u59CB!", `ENV v${this.version}`, ""), this.lodash = new e(this.name), this.log("", this.name, "");
    }
    platform() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : "undefined" != typeof Egern ? "Egern" : void 0;
    }
    isNode() {
      return "Node.js" === this.platform();
    }
    isQuanX() {
      return "Quantumult X" === this.platform();
    }
    isSurge() {
      return "Surge" === this.platform();
    }
    isLoon() {
      return "Loon" === this.platform();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.platform();
    }
    isStash() {
      return "Stash" === this.platform();
    }
    isEgern() {
      return "Egern" === this.platform();
    }
    toObj(e, a = null) {
      try {
        return JSON.parse(e);
      } catch {
        return a;
      }
    }
    toStr(e, a = null) {
      try {
        return JSON.stringify(e);
      } catch {
        return a;
      }
    }
    getjson(e, a) {
      let t = a;
      if (this.getdata(e)) try {
        t = JSON.parse(this.getdata(e));
      } catch {}
      return t;
    }
    setjson(e, a) {
      try {
        return this.setdata(JSON.stringify(e), a);
      } catch {
        return !1;
      }
    }
    getScript(e) {
      return new Promise(a => {
        this.get({
          url: e
        }, (e, t, s) => a(s));
      });
    }
    runScript(e, a) {
      return new Promise(t => {
        let s = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        s = s ? s.replace(/\n/g, "").trim() : s;
        let n = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        n = n ? 1 * n : 20, n = a && a.timeout ? a.timeout : n;
        const [l, g] = s.split("@"),
          o = {
            url: `http://${g}/v1/scripting/evaluate`,
            body: {
              script_text: e,
              mock_type: "cron",
              timeout: n
            },
            headers: {
              "X-Key": l,
              Accept: "*/*"
            },
            timeout: n
          };
        this.post(o, (e, a, s) => t(s));
      }).catch(e => this.logErr(e));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const e = this.path.resolve(this.dataFile),
          a = this.path.resolve(process.cwd(), this.dataFile),
          t = this.fs.existsSync(e),
          s = !t && this.fs.existsSync(a);
        if (!t && !s) return {};
        {
          const s = t ? e : a;
          try {
            return JSON.parse(this.fs.readFileSync(s));
          } catch (e) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const e = this.path.resolve(this.dataFile),
          a = this.path.resolve(process.cwd(), this.dataFile),
          t = this.fs.existsSync(e),
          s = !t && this.fs.existsSync(a),
          n = JSON.stringify(this.data);
        t ? this.fs.writeFileSync(e, n) : s ? this.fs.writeFileSync(a, n) : this.fs.writeFileSync(e, n);
      }
    }
    getdata(e) {
      let a = this.getval(e);
      if (/^@/.test(e)) {
        const [, t, s] = /^@(.*?)\.(.*?)$/.exec(e),
          n = t ? this.getval(t) : "";
        if (n) try {
          const e = JSON.parse(n);
          a = e ? this.lodash.get(e, s, "") : a;
        } catch (e) {
          a = "";
        }
      }
      return a;
    }
    setdata(e, a) {
      let t = !1;
      if (/^@/.test(a)) {
        const [, s, n] = /^@(.*?)\.(.*?)$/.exec(a),
          l = this.getval(s),
          g = s ? "null" === l ? null : l || "{}" : "{}";
        try {
          const a = JSON.parse(g);
          this.lodash.set(a, n, e), t = this.setval(JSON.stringify(a), s);
        } catch (a) {
          const l = {};
          this.lodash.set(l, n, e), t = this.setval(JSON.stringify(l), s);
        }
      } else t = this.setval(e, a);
      return t;
    }
    getval(e) {
      switch (this.platform()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
          return $persistentStore.read(e);
        case "Quantumult X":
          return $prefs.valueForKey(e);
        case "Node.js":
          return this.data = this.loaddata(), this.data[e];
        default:
          return this.data && this.data[e] || null;
      }
    }
    setval(e, a) {
      switch (this.platform()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
          return $persistentStore.write(e, a);
        case "Quantumult X":
          return $prefs.setValueForKey(e, a);
        case "Node.js":
          return this.data = this.loaddata(), this.data[a] = e, this.writedata(), !0;
        default:
          return this.data && this.data[a] || null;
      }
    }
    initGotEnv(e) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), e && (e.headers = e.headers ? e.headers : {}, void 0 === e.headers.Cookie && void 0 === e.cookieJar && (e.cookieJar = this.ckjar));
    }
    async fetch(e = {} || "", a = {}) {
      switch (e.constructor) {
        case Object:
          e = {
            ...e,
            ...a
          };
          break;
        case String:
          e = {
            url: e,
            ...a
          };
      }
      e.method || (e.method = "GET", (e.body ?? e.bodyBytes) && (e.method = "POST")), delete e.headers?.["Content-Length"], delete e.headers?.["content-length"];
      const t = e.method.toLocaleLowerCase();
      switch (this.platform()) {
        case "Loon":
        case "Surge":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
        default:
          return delete e.id, e.policy && (this.isLoon() && (e.node = e.policy), this.isStash() && this.lodash.set(e, "headers.X-Stash-Selected-Proxy", encodeURI(e.policy))), ArrayBuffer.isView(e.body) && (e["binary-mode"] = !0), await new Promise((a, s) => {
            $httpClient[t](e, (t, n, l) => {
              t ? s(t) : (n.ok = /^2\d\d$/.test(n.status), n.statusCode = n.status, l && (n.body = l, 1 == e["binary-mode"] && (n.bodyBytes = l)), a(n));
            });
          });
        case "Quantumult X":
          switch (delete e.charset, delete e.path, delete e.scheme, delete e.sessionIndex, delete e.statusCode, e.policy && this.lodash.set(e, "opts.policy", e.policy), (e?.headers?.["Content-Type"] ?? e?.headers?.["content-type"])?.split(";")?.[0]) {
            default:
              delete e.bodyBytes;
              break;
            case "application/protobuf":
            case "application/x-protobuf":
            case "application/vnd.google.protobuf":
            case "application/grpc":
            case "application/grpc+proto":
            case "application/octet-stream":
              delete e.body, ArrayBuffer.isView(e.bodyBytes) && (e.bodyBytes = e.bodyBytes.buffer.slice(e.bodyBytes.byteOffset, e.bodyBytes.byteLength + e.bodyBytes.byteOffset));
            case void 0:
          }
          return await $task.fetch(e).then(e => (e.ok = /^2\d\d$/.test(e.statusCode), e.status = e.statusCode, e), e => Promise.reject(e.error));
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(e);
          const {
            url: s,
            ...n
          } = e;
          return await this.got[t](s, n).on("redirect", (e, a) => {
            try {
              if (e.headers["set-cookie"]) {
                const t = e.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                t && this.ckjar.setCookieSync(t, null), a.cookieJar = this.ckjar;
              }
            } catch (e) {
              this.logErr(e);
            }
          }).then(e => (e.statusCode = e.status, e.body = a.decode(e.rawBody, this.encoding), e.bodyBytes = e.rawBody, e), e => Promise.reject(e.message));
      }
    }
    time(e, a = null) {
      const t = a ? new Date(a) : new Date();
      let s = {
        "M+": t.getMonth() + 1,
        "d+": t.getDate(),
        "H+": t.getHours(),
        "m+": t.getMinutes(),
        "s+": t.getSeconds(),
        "q+": Math.floor((t.getMonth() + 3) / 3),
        S: t.getMilliseconds()
      };
      /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let a in s) new RegExp("(" + a + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? s[a] : ("00" + s[a]).substr(("" + s[a]).length)));
      return e;
    }
    msg(e = name, a = "", t = "", s) {
      const n = e => {
        switch (typeof e) {
          case void 0:
            return e;
          case "string":
            switch (this.platform()) {
              case "Surge":
              case "Stash":
              case "Egern":
              default:
                return {
                  url: e
                };
              case "Loon":
              case "Shadowrocket":
                return e;
              case "Quantumult X":
                return {
                  "open-url": e
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.platform()) {
              case "Surge":
              case "Stash":
              case "Egern":
              case "Shadowrocket":
              default:
                return {
                  url: e.url || e.openUrl || e["open-url"]
                };
              case "Loon":
                return {
                  openUrl: e.openUrl || e.url || e["open-url"],
                  mediaUrl: e.mediaUrl || e["media-url"]
                };
              case "Quantumult X":
                return {
                  "open-url": e["open-url"] || e.url || e.openUrl,
                  "media-url": e["media-url"] || e.mediaUrl,
                  "update-pasteboard": e["update-pasteboard"] || e.updatePasteboard
                };
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.platform()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
        default:
          $notification.post(e, a, t, n(s));
          break;
        case "Quantumult X":
          $notify(e, a, t, n(s));
        case "Node.js":
      }
      if (!this.isMuteLog) {
        let s = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        s.push(e), a && s.push(a), t && s.push(t), console.log(s.join("\n")), this.logs = this.logs.concat(s);
      }
    }
    log(...e) {
      e.length > 0 && (this.logs = [...this.logs, ...e]), console.log(e.join(this.logSeparator));
    }
    logErr(e) {
      switch (this.platform()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️ ${this.name}, 错误!`, e);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e.stack);
      }
    }
    wait(e) {
      return new Promise(a => setTimeout(a, e));
    }
    done(e = {}) {
      const a = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🚩 ${this.name}, 结束! 🕛 ${a} 秒`, ""), this.platform()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Egern":
        case "Shadowrocket":
        default:
          $done(e);
          break;
        case "Quantumult X":
          delete e.charset, delete e.host, delete e.method, delete e.path, delete e.scheme, delete e.sessionIndex, delete e.statusCode, e.body instanceof ArrayBuffer ? (e.bodyBytes = e.body, delete e.body) : ArrayBuffer.isView(e.body) ? (e.bodyBytes = e.body.buffer.slice(e.body.byteOffset, e.body.byteLength + e.body.byteOffset), delete e.body) : e.body && delete e.bodyBytes, $done(e);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
    getENV(e, a, t) {
      let s = this.getjson(e, t),
        n = {};
      if ("undefined" != typeof $argument && Boolean($argument)) {
        let e = Object.fromEntries($argument.split("&").map(e => e.split("=").map(e => e.replace(/\"/g, ""))));
        for (let a in e) this.lodash.set(n, a, e[a]);
      }
      const l = {
        Settings: t?.Default?.Settings || {},
        Configs: t?.Default?.Configs || {},
        Caches: {}
      };
      Array.isArray(a) || (a = [a]);
      for (let e of a) l.Settings = {
        ...l.Settings,
        ...t?.[e]?.Settings,
        ...n,
        ...s?.[e]?.Settings
      }, l.Configs = {
        ...l.Configs,
        ...t?.[e]?.Configs
      }, s?.[e]?.Caches && "string" == typeof s?.[e]?.Caches && (s[e].Caches = JSON.parse(s?.[e]?.Caches)), l.Caches = {
        ...l.Caches,
        ...s?.[e]?.Caches
      };
      return this.traverseObject(l.Settings, (e, a) => ("true" === a || "false" === a ? a = JSON.parse(a) : "string" == typeof a && (a = a.includes(",") ? a.split(",").map(e => this.string2number(e)) : this.string2number(a)), a)), l;
    }
    traverseObject(e, a) {
      for (var t in e) {
        var s = e[t];
        e[t] = "object" == typeof s && null !== s ? this.traverseObject(s, a) : a(t, s);
      }
      return e;
    }
    string2number(e) {
      return e && !isNaN(e) && (e = parseInt(e, 10)), e;
    }
  }("\uD83C\uDF7F\uFE0F DualSubs: \uD83C\uDFA6 Universal v0.9.7(5) Composite.Subtitles.response"),
  v = new class {
    constructor(e = []) {
      this.name = "URI v1.2.6", this.opts = e, this.json = {
        scheme: "",
        host: "",
        path: "",
        query: {}
      };
    }
    parse(e) {
      let a = e.match(/(?:(?<scheme>.+):\/\/(?<host>[^/]+))?\/?(?<path>[^?]+)?\??(?<query>[^?]+)?/)?.groups ?? null;
      if (a?.path ? a.paths = a.path.split("/") : a.path = "", a?.paths) {
        const e = a.paths[a.paths.length - 1];
        if (e?.includes(".")) {
          const t = e.split(".");
          a.format = t[t.length - 1];
        }
      }
      return a?.query && (a.query = Object.fromEntries(a.query.split("&").map(e => e.split("=")))), a;
    }
    stringify(e = this.json) {
      let a = "";
      return e?.scheme && e?.host && (a += e.scheme + "://" + e.host), e?.path && (a += e?.host ? "/" + e.path : e.path), e?.query && (a += "?" + Object.entries(e.query).map(e => e.join("=")).join("&")), a;
    }
  }(),
  w = new class {
    #e = "@";
    #a = "#";
    #t = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&apos;": "'",
      "&quot;": "\""
    };
    #s = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&apos;",
      "\"": "&quot;"
    };
    constructor(e) {
      this.name = "XML v0.4.0-2", this.opts = e, BigInt.prototype.toJSON = () => this.toString();
    }
    parse(e = new String(), a = "") {
      const t = this.#t,
        s = this.#e,
        n = this.#a;
      let l = function e(a, t) {
        let l;
        switch (typeof a) {
          case "string":
          case "undefined":
            l = a;
            break;
          case "object":
            const u = a.raw,
              r = a.name,
              d = a.tag,
              c = a.children;
            l = u || (d ? function (e, a) {
              if (!e) return;
              const t = e.split(/([^\s='"]+(?:\s*=\s*(?:'[\S\s]*?'|"[\S\s]*?"|[^\s'"]*))?)/),
                n = t.length;
              let l, g;
              for (let e = 0; e < n; e++) {
                let n = u(t[e]);
                if (!n) continue;
                l || (l = {});
                const r = n.indexOf("=");
                if (r < 0) n = s + n, g = null;else {
                  g = n.substr(r + 1).replace(/^\s+/, ""), n = s + n.substr(0, r).replace(/\s+$/, "");
                  const e = g[0];
                  e !== g[g.length - 1] || "'" !== e && "\"" !== e || (g = g.substr(1, g.length - 2)), g = o(g);
                }
                a && (g = a(n, g)), i(l, n, g);
              }
              return l;
              function u(e) {
                return e?.trim?.();
              }
            }(d, t) : c ? {} : {
              [r]: void 0
            }), "plist" === r ? l = Object.assign(l, g(c[0], t)) : c?.forEach?.((a, s) => {
              "string" == typeof a ? i(l, n, e(a, t), void 0) : a.tag || a.children || a.raw ? i(l, a.name, e(a, t), void 0) : i(l, a.name, e(a, t), c?.[s - 1]?.name);
            }), c && 0 === c.length && i(l, n, null, void 0), t && (l = t(r || "", l));
        }
        return l;
        function i(e, a, t, s = a) {
          if (void 0 !== t) {
            const n = e[s];
            Array.isArray(n) ? n.push(t) : n ? e[s] = [n, t] : e[a] = t;
          }
        }
      }(function (e) {
        const a = e.replace(/^[ \t]+/gm, "").split(/<([^!<>?](?:'[\S\s]*?'|"[\S\s]*?"|[^'"<>])*|!(?:--[\S\s]*?--|\[[^\[\]'"<>]+\[[\S\s]*?]]|DOCTYPE[^\[<>]*?\[[\S\s]*?]|(?:ENTITY[^"<>]*?"[\S\s]*?")?[\S\s]*?)|\?[\S\s]*?\?)>/),
          t = a.length,
          s = {
            children: []
          };
        let n = s;
        const l = [];
        for (let e = 0; e < t;) {
          const t = a[e++];
          t && i(t);
          const s = a[e++];
          s && g(s);
        }
        return s;
        function g(e) {
          const a = e.split(" "),
            t = a.shift(),
            s = a.length;
          let g = {};
          switch (t[0]) {
            case "/":
              const o = e.replace(/^\/|[\s\/].*$/g, "").toLowerCase();
              for (; l.length;) {
                const e = n?.name?.toLowerCase?.();
                if (n = l.pop(), e === o) break;
              }
              break;
            case "?":
              g.name = t, g.raw = a.join(" "), u(g);
              break;
            case "!":
              /!\[CDATA\[(.+)\]\]/.test(e) ? (g.name = "!CDATA", g.raw = e.match(/!\[CDATA\[(.+)\]\]/)) : (g.name = t, g.raw = a.join(" ")), u(g);
              break;
            default:
              if (g = function (e) {
                const a = {
                  children: []
                };
                e = e.replace(/\s*\/?$/, "");
                const t = e.search(/[\s='"\/]/);
                t < 0 ? a.name = e : (a.name = e.substr(0, t), a.tag = e.substr(t));
                return a;
              }(e), u(g), "/" === (a?.[s - 1] ?? t).slice(-1)) delete g.children;else if ("link" === t) delete g.children;else l.push(n), n = g;
          }
        }
        function i(e) {
          (e = function (e) {
            return e?.replace?.(/^(\r\n|\r|\n|\t)+|(\r\n|\r|\n|\t)+$/g, "");
          }(e)) && u(o(e));
        }
        function u(e) {
          n.children.push(e);
        }
      }(e), a);
      return l;
      function g(e, a) {
        let t;
        switch (typeof e) {
          case "string":
          case "undefined":
            t = e;
            break;
          case "object":
            const s = e.name,
              n = e.children;
            switch (t = {}, s) {
              case "plist":
                let e = g(n[0], a);
                t = Object.assign(t, e);
                break;
              case "dict":
                let l = n.map(e => g(e, a));
                l = function (e, a) {
                  var t = 0,
                    s = [];
                  for (; t < e.length;) s.push(e.slice(t, t += a));
                  return s;
                }(l, 2), t = Object.fromEntries(l);
                break;
              case "array":
                Array.isArray(t) || (t = []), t = n.map(e => g(e, a));
                break;
              case "key":
                t = n[0];
                break;
              case "true":
              case "false":
                const o = s;
                t = JSON.parse(o);
                break;
              case "integer":
                const i = n[0];
                t = BigInt(i);
                break;
              case "real":
                const u = n[0];
                t = parseFloat(u);
                break;
              case "string":
                t = n[0];
            }
            a && (t = a(s || "", t));
        }
        return t;
      }
      function o(e) {
        return e.replace(/(&(?:lt|gt|amp|apos|quot|#(?:\d{1,6}|x[0-9a-fA-F]{1,5}));)/g, function (e) {
          if ("#" === e[1]) {
            const a = "x" === e[2] ? parseInt(e.substr(3), 16) : parseInt(e.substr(2), 10);
            if (a > -1) return String.fromCharCode(a);
          }
          return t[e] || e;
        });
      }
    }
    stringify(e = new Object(), a = "") {
      this.#s;
      const t = this.#e,
        s = this.#a;
      let n = "";
      for (let a in e) n += l(e[a], a, "");
      return n = a ? n.replace(/\t/g, a) : n.replace(/\t|\n/g, ""), n;
      function l(e, a, n) {
        let o = "";
        switch (typeof e) {
          case "object":
            if (Array.isArray(e)) o = e.reduce((e, t) => e + `${n}${l(t, a, `${n}\t`)}\n`, "");else {
              let i = "",
                u = !1;
              for (let s in e) s[0] === t ? (i += ` ${s.substring(1)}="${e[s].toString()}"`, delete e[s]) : void 0 === e[s] ? a = s : u = !0;
              if (o += `${n}<${a}${i}${u || "link" === a ? "" : "/"}>`, u) {
                if ("plist" === a) o += g(e, a, `${n}\t`);else for (let a in e) if (a === s) o += e[a] ?? "";else o += l(e[a], a, `${n}\t`);
                o += ("\n" === o.slice(-1) ? n : "") + `</${a}>`;
              }
            }
            break;
          case "string":
            switch (a) {
              case "?xml":
                o += `${n}<${a} ${e.toString()}>`;
                break;
              case "?":
                o += `${n}<${a}${e.toString()}${a}>`;
                break;
              case "!":
                o += `${n}\x3c!--${e.toString()}--\x3e`;
                break;
              case "!DOCTYPE":
                o += `${n}<${a} ${e.toString()}>`;
                break;
              case "!CDATA":
                o += `${n}<![CDATA[${e.toString()}]]>`;
                break;
              case s:
                o += e;
                break;
              default:
                o += `${n}<${a}>${e.toString()}</${a}>`;
            }
            break;
          case "undefined":
            o += n + `<${a.toString()}/>`;
        }
        return o;
      }
      function g(e, a, t) {
        let s = "";
        switch (typeof e) {
          case "boolean":
            s = `${t}<${e.toString()}/>`;
            break;
          case "number":
            s = `${t}<real>${e.toString()}</real>`;
            break;
          case "bigint":
            s = `${t}<integer>${e.toString()}</integer>`;
            break;
          case "string":
            s = `${t}<string>${e.toString()}</string>`;
            break;
          case "object":
            let o = "";
            if (Array.isArray(e)) {
              for (var n = 0, l = e.length; n < l; n++) o += `${t}${g(e[n], a, `${t}\t`)}`;
              s = `${t}<array>${o}${t}</array>`;
            } else {
              let a = "";
              Object.entries(e).forEach(([e, s]) => {
                a += `${t}<key>${e}</key>`, a += g(s, e, t);
              }), s = `${t}<dict>${a}${t}</dict>`;
            }
        }
        return s;
      }
    }
  }(),
  E = new class {
    constructor(e = ["milliseconds", "timeStamp", "singleLine", "\n"]) {
      this.name = "WebVTT v2.1.4", this.opts = e, this.lineBreak = this.opts.includes("\n") ? "\n" : this.opts.includes("\r") ? "\r" : this.opts.includes("\r\n") ? "\r\n" : "\n", this.vtt = new String(), this.json = {
        headers: {},
        comments: [],
        style: "",
        body: []
      };
    }
    parse(e = this.vtt) {
      const a = this.opts.includes("milliseconds") ? /^((?<index>\d+)(\r\n|\r|\n))?(?<timing>(?<startTime>[0-9:.,]+) --> (?<endTime>[0-9:.,]+)) ?(?<settings>.+)?[^](?<text>[\s\S]*)?$/ : /^((?<index>\d+)(\r\n|\r|\n))?(?<timing>(?<startTime>[0-9:]+)[0-9.,]+ --> (?<endTime>[0-9:]+)[0-9.,]+) ?(?<settings>.+)?[^](?<text>[\s\S]*)?$/,
        t = e.split(/\r\n\r\n|\r\r|\n\n/),
        s = {
          headers: {},
          comments: [],
          style: "",
          body: []
        };
      return t.forEach(e => {
        switch ((e = e.trim()).substring(0, 5).trim()) {
          case "WEBVT":
            {
              let a = e.split(/\r\n|\r|\n/);
              s.headers.type = a.shift(), s.headers.options = a;
              break;
            }
          case "NOTE":
            s.comments.push(e);
            break;
          case "STYLE":
            {
              let a = e.split(/\r\n|\r|\n/);
              a.shift(), s.style = a.join(this.lineBreak);
              break;
            }
          default:
            let t = e.match(a)?.groups;
            if (t) {
              if ("WEBVTT" !== s.headers?.type && (t.timing = t?.timing?.replace?.(",", "."), t.startTime = t?.startTime?.replace?.(",", "."), t.endTime = t?.endTime?.replace?.(",", ".")), this.opts.includes("timeStamp")) {
                let e = t?.startTime?.replace?.(/(.*)/, "1970-01-01T$1Z");
                t.timeStamp = this.opts.includes("milliseconds") ? Date.parse(e) : Date.parse(e) / 1000;
              }
              t.text = t?.text?.trimEnd?.(), this.opts.includes("singleLine") ? t.text = t?.text?.replace?.(/\r\n|\r|\n/, " ") : this.opts.includes("multiLine") && (t.text = t?.text?.split?.(/\r\n|\r|\n/)), s.body.push(t);
            }
        }
      }), s;
    }
    stringify(e = this.json) {
      return [e.headers = [e.headers?.type || "", e.headers?.options || ""].flat(Infinity).join(this.lineBreak), e.comments = e?.comments?.join?.(this.lineBreak), e.style = e?.style?.length > 0 ? ["STYLE", e.style].join(this.lineBreak) : "", e.body = e.body.map(e => (Array.isArray(e.text) && (e.text = e.text.join(this.lineBreak)), e = `${e.index ? e.index + this.lineBreak : ""}${e.timing} ${e?.settings ?? ""}${this.lineBreak}${e.text}`)).join(this.lineBreak + this.lineBreak)].join(this.lineBreak + this.lineBreak).trim() + this.lineBreak + this.lineBreak;
    }
  }(["milliseconds", "timeStamp", "singleLine", "\n"]),
  A = v.parse($request.url);
$.log(`⚠ URL: ${JSON.stringify(A)}`, "");
const O = $request.method;
A.host, A.path;
const P = A.paths;
$.log(`⚠ METHOD: ${O}`, "");
let L = ($response.headers?.["Content-Type"] ?? $response.headers?.["content-type"])?.split(";")?.[0];
"application/octet-stream" !== L && "text/plain" !== L || (L = function (e, a, t = void 0) {
  switch (console.log(`☑️ detectFormat, format: ${e.format ?? e.query?.fmt ?? e.query?.format}`, ""), e.format ?? e.query?.fmt ?? e.query?.format) {
    case "txt":
      t = "text/plain";
      break;
    case "xml":
    case "srv3":
    case "ttml":
    case "ttml2":
    case "imsc":
      t = "text/xml";
      break;
    case "vtt":
    case "webvtt":
      t = "text/vtt";
      break;
    case "json":
    case "json3":
      t = "application/json";
      break;
    case "m3u":
    case "m3u8":
      t = "application/x-mpegurl";
      break;
    case "plist":
      t = "application/plist";
      break;
    case void 0:
      const e = a?.substring?.(0, 6).trim?.();
      switch (e) {
        case "<?xml":
          t = "text/xml";
          break;
        case "WEBVTT":
          t = "text/vtt";
          break;
        default:
          switch (e?.substring?.(0, 1)) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              t = "text/vtt";
              break;
            case "{":
              t = "application/json";
          }
          break;
        case void 0:
          t = void 0;
      }
  }
  return console.log(`✅ detectFormat, format: ${t}`, ""), t;
}(A, $response?.body, L)), $.log(`⚠ FORMAT: ${L}`, ""), (async () => {
  const e = function (e) {
    console.log("\u2611\uFE0F Detect Platform", "");
    let a = /\.(netflix\.com|nflxvideo\.net)/i.test(e) ? "Netflix" : /(\.youtube|youtubei\.googleapis)\.com/i.test(e) ? "YouTube" : /\.spotify(cdn)?\.com/i.test(e) ? "Spotify" : /\.apple\.com/i.test(e) ? "Apple" : /\.(dssott|starott)\.com/i.test(e) ? "Disney+" : /(\.(pv-cdn|aiv-cdn|akamaihd|cloudfront)\.net)|s3\.amazonaws\.com\/aiv-prod-timedtext\//i.test(e) ? "PrimeVideo" : /prd\.media\.h264\.io/i.test(e) ? "Max" : /\.(api\.hbo|hbomaxcdn)\.com/i.test(e) ? "HBOMax" : /\.hulu(stream|im)?\.com/i.test(e) ? "Hulu" : /\.cbs(aavideo|cbsivideo)?\.com/i.test(e) ? "Paramount+" : /\.uplynk\.com/i.test(e) ? "Discovery+" : /dplus-ph-/i.test(e) ? "Discovery+Ph" : /\.peacocktv\.com/i.test(e) ? "PeacockTV" : /\.fubo\.tv/i.test(e) ? "FuboTV" : /\.viki\.io/i.test(e) ? "Viki" : /epix(hls\.akamaized\.net|\.services\.io)/i.test(e) ? "MGM+" : /\.nebula\.app/i.test(e) ? "Nebula" : /\.pluto(\.tv|tv\.net)/i.test(e) ? "PlutoTV" : /\.mubicdn\.net/i.test(e) ? "MUBI" : "Universal";
    return console.log(`✅ Detect Platform, Platform: ${a}`, ""), a;
  }($request.url);
  $.log(`⚠ PLATFORM: ${e}`, "");
  const {
    Settings: a,
    Caches: t,
    Configs: s
  } = function (e, a, t, s) {
    console.log("\u2611\uFE0F Set Environment Variables", "");
    let {
      Settings: n,
      Caches: l,
      Configs: g
    } = e.getENV(a, t, s);
    if (Array.isArray(n?.Types) || (n.Types = n.Types ? [n.Types] : []), e.isLoon() && t.includes("YouTube")) {
      switch (n.AutoCC = $persistentStore.read("\u81EA\u52A8\u663E\u793A\u7FFB\u8BD1\u5B57\u5E55") ?? n.AutoCC, n.AutoCC) {
        case "\u662F":
          n.AutoCC = !0;
          break;
        case "\u5426":
          n.AutoCC = !1;
      }
      switch (n.ShowOnly = $persistentStore.read("\u4EC5\u8F93\u51FA\u5B57\u5E55\u8BD1\u6587") ?? n.ShowOnly, n.ShowOnly) {
        case "\u662F":
          n.ShowOnly = !0;
          break;
        case "\u5426":
          n.ShowOnly = !1;
      }
      switch (n.Position = $persistentStore.read("\u5B57\u5E55\u8BD1\u6587\u7684\u4F4D\u7F6E") ?? n.Position, n.Position) {
        case "\u8BD1\u6587\u4F4D\u4E8E\u539F\u6587\u4E4B\u4E0A":
          n.Position = "Forward";
          break;
        case "\u8BD1\u6587\u4F4D\u4E8E\u539F\u6587\u4E4B\u4E0B":
          n.Position = "Reverse";
      }
    }
    return console.log(`✅ Set Environment Variables, Settings: ${typeof n}, Settings内容: ${JSON.stringify(n)}`, ""), ("object" != typeof l?.Playlists || Array.isArray(l?.Playlists)) && (l.Playlists = {}), l.Playlists.Master = new Map(JSON.parse(l?.Playlists?.Master || "[]")), l.Playlists.Subtitle = new Map(JSON.parse(l?.Playlists?.Subtitle || "[]")), "object" != typeof l?.Subtitles && (l.Subtitles = new Map(JSON.parse(l?.Subtitles || "[]"))), ("object" != typeof l?.Metadatas || Array.isArray(l?.Metadatas)) && (l.Metadatas = {}), "object" != typeof l?.Metadatas?.Tracks && (l.Metadatas.Tracks = new Map(JSON.parse(l?.Metadatas?.Tracks || "[]"))), {
      Settings: n,
      Caches: l,
      Configs: g
    };
  }($, "DualSubs", [["YouTube", "Netflix", "BiliBili", "Spotify"].includes(e) ? e : "Universal", "Composite", "API"], T);
  switch ($.log(`⚠ Settings.Switch: ${a?.Switch}`, ""), a.Switch) {
    case !0:
    default:
      const s = A.query?.subtype ?? a.Type,
        n = [A.query?.lang?.toUpperCase?.() ?? a.Languages[0], (A.query?.tlang ?? t?.tlang)?.toUpperCase?.() ?? a.Languages[1]];
      $.log(`⚠ Type: ${s}, Languages: ${n}`, "");
      let l = [];
      switch (s) {
        case "Official":
          switch ($.log("\u26A0 \u5B98\u65B9\u5B57\u5E55", ""), e) {
            default:
              const {
                  subtitlesPlaylistURL: s
                } = function (e, a, t) {
                  $.log("\u2611\uFE0F getSubtitlesCache", "");
                  let s = "",
                    n = [],
                    l = 0;
                  return a?.forEach((a, t) => {
                    if (Array.isArray(a)) {
                      let g = a;
                      g?.some((a, t) => !!e.includes(a || null) && (l = t, $.log("\uD83D\uDEA7 getSubtitlesCache", `subtitlesIndex: ${l}`, ""), !0)) && (s = t, n = a);
                    }
                  }), $.log(`✅ getSubtitlesCache, subtitlesPlaylistURL: ${s}`, ""), {
                    subtitlesPlaylistURL: s,
                    subtitles: n,
                    subtitlesIndex: l
                  };
                }($request.url, t.Playlists.Subtitle),
                {
                  masterPlaylistURL: g,
                  subtitlesPlaylistIndex: o
                } = function (e, a, t) {
                  $.log("\u2611\uFE0F getPlaylistCache", "");
                  let s = "",
                    n = {},
                    l = 0;
                  return a?.forEach((a, g) => {
                    t?.forEach(t => {
                      if (Array.isArray(a?.[t])) {
                        let o = a?.[t];
                        o?.some((a, t) => !!e.includes(a?.URI || a?.OPTION?.URI || null) && (l = t, $.log("\uD83D\uDEA7 getPlaylistCache", `subtitlesPlaylistIndex: ${l}`, ""), !0)) && (s = g, n = a);
                      }
                    });
                  }), $.log("\u2705 getPlaylistCache", `masterPlaylistURL: ${JSON.stringify(s)}`, ""), {
                    masterPlaylistURL: s,
                    subtitlesPlaylist: n,
                    subtitlesPlaylistIndex: l
                  };
                }(s, t.Playlists.Master, n),
                {
                  subtitlesURIArray0: i,
                  subtitlesURIArray1: u
                } = function (e, a, t, s, n) {
                  $.log("\u2611\uFE0F getSubtitlesArray", "");
                  const l = t?.get(e) || {};
                  let g = l?.[n[0]]?.[a]?.URL || l?.[n[0]]?.[0]?.URL,
                    o = l?.[n[1]]?.[a]?.URL || l?.[n[1]]?.[0]?.URL;
                  $.log("\uD83D\uDEA7 getSubtitlesArray", `subtitlesPlaylistURL0: ${g}, subtitlesPlaylistURL1: ${o}`, "");
                  let i = s.get(g) || [],
                    u = s.get(o) || [];
                  return $.log("\u2705 getSubtitlesArray", ""), {
                    subtitlesURIArray0: i,
                    subtitlesURIArray1: u
                  };
                }(g, o, t.Playlists.Master, t.Playlists.Subtitle, n);
              if (u.length) {
                $.log(`🚧 subtitlesURIArray1.length: ${u.length}`, "");
                let a = P?.[P?.length - 1] ?? function (e, a) {
                  $.log("\u2611\uFE0F Get Subtitles FileName", `url: ${e}`, "");
                  let t;
                  switch (a) {
                    case "Apple":
                      t = request.url.match(/.+_(subtitles(_V\d)?-\d+\.webvtt)\?(.*)subtype=/)[1];
                      break;
                    case "Disney+":
                      t = request.url.match(/([^\/]+\.vtt)\?(.*)subtype=/)[1];
                      break;
                    case "Hulu":
                      t = request.url.match(/.+_(SEGMENT\d+_.+\.vtt)\?(.*)subtype=/)[1];
                      break;
                    default:
                      t = null;
                  }
                  return $.log("\u2705 Get Subtitles FileName", `fileName: ${t}`, ""), t;
                }($request.url, e);
                $.log(`🚧 fileName: ${a}`, ""), l = function (e, a, t = [], s = []) {
                  console.log(`☑️ Construct Subtitles Queue, fileName: ${a}`, "");
                  let n = [];
                  console.log(`🚧 Construct Subtitles Queue, VTTs1.length: ${t.length}, VTTs2.length: ${s.length}`, "");
                  const l = t.findIndex(e => e?.includes(a));
                  switch (console.log(`🚧 Construct Subtitles Queue, Index1: ${l}`, ""), s.length) {
                    case 0:
                      console.log("\u26A0 Construct Subtitles Queue, \u957F\u5EA6\u4E3A 0", "");
                      break;
                    case 1:
                      {
                        console.log("\u26A0 Construct Subtitles Queue, \u957F\u5EA6\u4E3A 1", "");
                        let a = {
                          url: s[0],
                          headers: e.headers
                        };
                        n.push(a);
                        break;
                      }
                    case t.length:
                      {
                        console.log("\u26A0 Construct Subtitles Queue, \u957F\u5EA6\u76F8\u7B49", "");
                        let a = {
                          url: s[l],
                          headers: e.headers
                        };
                        n.push(a);
                        break;
                      }
                    default:
                      {
                        console.log("\u26A0 Construct Subtitles Queue, \u957F\u5EA6\u4E0D\u7B49\uFF0C\u9700\u8981\u8BA1\u7B97", "");
                        const a = (l + 1) / t.length;
                        console.log(`🚧 Construct Subtitles Queue, Position1: ${a}, Index2: ${l}/${t.length}`, "");
                        const g = Math.round(a * s.length - 1);
                        console.log(`🚧 Construct Subtitles Queue, Position2: ${a}, Index2: ${g}/${s.length}`, "");
                        const o = Math.abs(s.length - t.length),
                          i = Math.min(l, g),
                          u = Math.max(l, g);
                        console.log(`🚧 Construct Subtitles Queue, diffLength: ${o}, BeginIndex: ${i}, EndIndex: ${u}`, "");
                        const r = s.slice(Math.max(0, i - o), Math.max(u, u + o) + 1);
                        console.log(`🚧 Construct Subtitles Queue, nearlyVTTs: ${JSON.stringify(r)}`, ""), r.forEach(a => {
                          let t = {
                            url: a,
                            headers: e.headers
                          };
                          n.push(t);
                        });
                        break;
                      }
                  }
                  return console.log("\u2705 Construct Subtitles Queue", ""), n;
                }($request, a, i, u);
              }
              break;
            case "YouTube":
              if ($.log("\u26A0 YouTube", ""), void 0 === A.query?.tlang) $.log("\u26A0 \u672A\u9009\u62E9\u7FFB\u8BD1\u8BED\u8A00\uFF0C\u8DF3\u8FC7", "");else if ($.log("\u26A0 \u5DF2\u9009\u62E9\u7FFB\u8BD1\u8BED\u8A00", ""), a.Tolerance = 100, a.Position = "Reverse" === a.Position ? "Forward" : "Reverse", !0 === a.ShowOnly) $.log("\u26A0 \u4EC5\u663E\u793A\u7FFB\u8BD1\u540E\u5B57\u5E55\uFF0C\u8DF3\u8FC7", "");else {
                $.log("\u26A0 \u751F\u6210\u53CC\u8BED\u5B57\u5E55", ""), A.query.lang = t.Playlists.Subtitle.get(A.query?.v) ?? A.query.lang, delete A.query?.tlang;
                let e = {
                  url: v.stringify(A),
                  headers: $request.headers
                };
                l.push(e);
              }
              break;
            case "Netflix":
              $.log("\u26A0 Netflix", "");
              break;
            case "Bilibili":
              $.log("\u26A0 Bilibili", "");
          }
          break;
        case "Translate":
        default:
          $.log("\u26A0 \u7FFB\u8BD1\u5B57\u5E55", "");
          break;
        case "External":
          if ($.log("\u26A0 \u5916\u6302\u5B57\u5E55", ""), "URL" === a.SubVendor) {
            let e = {
              url: a.URL,
              headers: {
                Accept: "*/*",
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1"
              }
            };
            l.push(e);
          }
      }
      switch (L) {
        case void 0:
        case "application/x-www-form-urlencoded":
        case "text/plain":
        case "text/html":
        default:
        case "application/x-mpegURL":
        case "application/x-mpegurl":
        case "application/vnd.apple.mpegurl":
        case "audio/mpegurl":
          break;
        case "text/xml":
        case "text/plist":
        case "application/xml":
        case "application/plist":
        case "application/x-plist":
          body = w.parse($response.body), await Promise.all(l.map(async e => {
            let t = await $.fetch(e).then(e => w.parse(e.body));
            body = new k(a).timedText(body, t, A.query?.kind);
          })), $response.body = w.stringify(body);
          break;
        case "text/vtt":
        case "application/vtt":
          body = E.parse($response.body), await Promise.all(l.map(async e => {
            let t = await $.fetch(e).then(e => E.parse(e.body));
            body = new k(a).webVTT(body, t);
          })), $response.body = E.stringify(body);
          break;
        case "text/json":
        case "application/json":
          body = JSON.parse($response.body ?? "{}"), await Promise.all(l.map(async e => {
            let t = await $.fetch(e).then(e => JSON.parse(e.body));
            body = new k(a).JSON(body, t, A.query?.kind);
          })), $response.body = JSON.stringify(body);
        case "application/protobuf":
        case "application/x-protobuf":
        case "application/vnd.google.protobuf":
        case "application/grpc":
        case "application/grpc+proto":
        case "application/octet-stream":
      }
    case !1:
  }
})().catch(e => $.logErr(e)).finally(() => $.done($response));