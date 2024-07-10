//7/10/2024, 1:55:44 PM
//Author:https://github.com/lck7
const isQuanX = typeof $task !== "undefined";
if (!isQuanX) {
  $done({});
} else {
  var obj = JSON.parse($response.body);
  if ($request.url.indexOf("api/getsyscfg") != -1) {
    const propertiesToDelete = ["switch_config_area", "splash_advertise_fetch_config_area", "bdnc_commerce_video_ad_area_pad", "thrid_ad_funads_service", "my_person_service", "thrid_ad_buads_service", "splash_advertise_type_area", "business_ad_config_area", "new_user_card"];
    for (const prop of propertiesToDelete) {
      obj[prop] && (obj[prop].cfg_list = []);
    }
    $done({
      body: JSON.stringify(obj)
    });
  } else {
    if ($request.url.indexOf("membership/user") != -1) {
      if (obj.product_infos) {
        const _0x22e83d = {
          product_id: "5210897752128663390",
          end_time: 4102415999,
          buy_time: "1384234467",
          cluster: "offlinedl",
          status: "0",
          start_time: 1384234467,
          function_num: 2,
          buy_description: "离线下载套餐(永久)",
          product_description: "离线下载套餐(永久)",
          detail_cluster: "offlinedl",
          product_name: "offlinedl_permanent"
        };
        const _0x51b33e = {
          cur_svip_type: "month",
          product_name: "svip2_nd",
          product_description: "",
          function_num: 0,
          start_time: 1688356160,
          buy_description: "",
          buy_time: 0,
          product_id: "",
          auto_upgrade_to_svip: 0,
          end_time: 4102415999,
          cluster: "vip",
          detail_cluster: "svip",
          status: 0
        };
        const _0x2f008e = {
          product_name: "contentvip_nd",
          product_description: "",
          function_num: 0,
          start_time: 1688356160,
          buy_description: "",
          buy_time: 0,
          product_id: "",
          auto_upgrade_to_svip: 0,
          end_time: 4102415999,
          cluster: "contentvip",
          detail_cluster: "contentvip",
          status: 0
        };
        const _0x4ee759 = {
          action_type: 0,
          action_url: "https://pan.baidu.com/buy/center?tag=8"
        };
        const _0x1e750f = {
          product_id: "12187135090581539740",
          detail_cluster: "svip",
          cluster: "vip",
          product_type: "vip2_1y_auto"
        };
        const _0x3b18ff = {
          history_value: 3470,
          current_level: 1,
          last_manual_collection_time: 0,
          current_value: 970,
          history_level: 3,
          v10_id: ""
        };
        const _0x5f3dc2 = {
          product_id: "12187135090581539740",
          detail_cluster: "svip",
          cluster: "vip",
          product_type: "vip2_1y_auto"
        };
        const _0x1bd3b2 = {
          title: "已拥有超级会员",
          notice: "5T大空间、极速下载等特权已拥有~"
        };
        const _0x10b9ec = {
          url: "https://yun.baidu.com/buy/center?tag=8&from=reminderpush1",
          title: "您的超级会员将于2099-12-31到期",
          notice: "5T大空间、极速下载等特权已拥有~"
        };
        const _0xeb9567 = {
          leftseconds: 390692,
          nextState: "normal"
        };
        const _0x2d39d1 = {
          reminderWithContent: _0x1bd3b2,
          advertiseContent: _0x10b9ec,
          svip: _0xeb9567
        };
        const _0x3b83cd = {
          product_infos: [_0x22e83d, _0x51b33e, _0x2f008e],
          center_skip_config: _0x4ee759,
          last_privilege_card_v2: {},
          current_privilege_card: [],
          current_product_v2: _0x1e750f,
          request_id: 269895149694452300,
          current_privilege_card_v2: {},
          up_product_infos: [],
          last_privilege_card: [],
          level_info: _0x3b18ff,
          user_tag: "{\\\"has_buy_record\\\":1,\\\"has_buy_vip_svip_record\\\":1,\\\"last_buy_record_creat_time\\\":1688356106,\\\"is_vip\\\":0,\\\"is_svip\\\":1,\\\"last_vip_type\\\":1,\\\"last_vip_svip_end_time\\\":4102415999,\\\"is_svip_sign\\\":0,\\\"notice_user_type\\\":2,\\\"notice_user_status\\\":3,\\\"is_first_act\\\":0,\\\"is_first_charge\\\":0}",
          currenttime: 1690687707,
          previous_product: [],
          current_mvip_v2: {},
          current_product: _0x5f3dc2,
          reminder: _0x2d39d1,
          current_mvip: [],
          previous_product_v2: {}
        };
        obj = _0x3b83cd;
      } else {
        if (obj.identity_icon) {
          const _0x3064e0 = {
            first: "",
            daily: ["一起走过的每一天，我给了陪伴，而你给了我成长。"]
          };
          const _0x1edc66 = {
            emotional_tips_back: _0x3064e0,
            emotional_tip_front: "陪你走过的每一天",
            guide_tip: ["墨鱼提醒：已享会员权限！"],
            expired_tip: "不再享有视频备份、在线解压等特权",
            expire_remind_tip: "将不再享有视频备份、在线解压等特权",
            status: 0
          };
          const _0x2ab5ef = {
            status: 1
          };
          const _0x4f16e6 = {
            vip: "https://internal-amis-res.cdn.bcebos.com/images/2019-8/1566452237582/78b88bf113b7.png",
            common: "https://internal-amis-res.cdn.bcebos.com/images/2019-8/1566452539056/bf72cf66fae1.png",
            svip: "https://internal-amis-res.cdn.bcebos.com/images/2019-8/1566452115696/38c1d743bfe9.png",
            contentvip: ""
          };
          const _0x1f14e8 = {
            first: "很高兴你在x年x月x日成为超级会员，愿美好时光与你相伴。",
            daily: ["据说超级会员，法力无边"]
          };
          const _0x5aec69 = {
            emotional_tips_back: _0x1f14e8,
            expire_remind_tip: "将不再享有极速下载、5T空间等特权",
            emotional_tip_front: "陪你走过的每一天",
            identity_icon_list: ["https://internal-amis-res.cdn.bcebos.com/images/2019-8/1566452115696/38c1d743bfe9.png", ""],
            status: 2,
            expired_tip: "不再享有极速下载、5T空间等特权",
            guide_tip: ["超级会员尊享5T空间和极速下载特权"],
            is_sign_user: false
          };
          const _0x1df122 = {
            vip: _0x1edc66,
            vipv2: _0x2ab5ef,
            identity_icon: _0x4f16e6,
            request_id: 270055727479044860,
            svip: _0x5aec69,
            error_code: 0
          };
          obj = _0x1df122;
        } else {
          if (obj.tips_data_list) {
            const _0x4483d9 = {
              text: "等级提升",
              action_url: "https://t.me/ddgksf2021"
            };
            const _0x5029f4 = {
              action_url: "",
              title: "超级会员SVIP",
              title_action_url: "",
              content: "已拥有极速下载+视频倍速等54项特权",
              button: _0x4483d9
            };
            const _0x35590f = {
              last_manual_collection_time: 0,
              current_max_points: 500,
              current_value: 1490,
              history_level: 3,
              accumulated_uncollected_points: 0,
              v10_id: "",
              daily_value: 0,
              accumulated_day: 0,
              history_value: 3470,
              current_level: 2,
              accumulated_lost_points: 0,
              default_daily_value: 5
            };
            const _0x474ea7 = {
              text: "立即加速",
              action_url: "https://t.me/ddgksf2021"
            };
            const _0x14c3d1 = {
              get_next_value_gap: true,
              tips: "升级还需要1510成长值，可享更多权益",
              button: _0x474ea7,
              ab_test: false
            };
            const _0x33b2b7 = {
              text: "等级提升",
              action_url: "https://t.me/ddgksf2021"
            };
            const _0x28aa42 = {
              content: "已解锁倍速超清权益",
              icon_url: "https://staticsns.cdn.bcebos.com/amis/2022-3/1646383463592/%E5%8A%A0%E9%80%9F%E5%8D%87%E7%BA%A7.png",
              action_url: "https://t.me/ddgksf2021"
            };
            const _0x25b80d = {
              action_url: "",
              title: "SVIP V2",
              title_action_url: "",
              button: _0x33b2b7,
              sub_card_list: [_0x28aa42]
            };
            const _0x40ff51 = {
              tips_data_list: [],
              status_data: "超级会员至：2099-12-31",
              guide_data: _0x5029f4,
              user_status: 2,
              tips_data: {},
              user_type: "svip",
              request_id: 270614190566302800,
              level_info: _0x35590f,
              v10_guide: _0x14c3d1,
              status_data_arr: ["超级会员至：2099-12-31"],
              new_guide_data: _0x25b80d
            };
            obj = _0x40ff51;
          }
        }
      }
      $done({
        body: JSON.stringify(obj)
      });
    } else {
      $done({});
    }
  }
}