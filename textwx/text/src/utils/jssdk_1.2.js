import $ from "jquery";
import jQuery from "jquery";
import wx from "wx";
! function(a, b) { "function" == typeof define && (define.amd || define.cmd) ? define(function() { return b(a) }) : b(a, !0) }(this, function(a, b) {
    function c(b, c, d) { a.WeixinJSBridge ? WeixinJSBridge.invoke(b, e(c), function(a) { i(b, a, d) }) : l(b, d) }

    function d(b, c, d) { a.WeixinJSBridge ? WeixinJSBridge.on(b, function(a) { d && d.trigger && d.trigger(a), i(b, a, c) }) : d ? l(b, d) : l(b, c) }

    function e(a) { return a = a || {}, a.appId = B.appId, a.verifyAppId = B.appId, a.verifySignType = "sha1", a.verifyTimestamp = B.timestamp + "", a.verifyNonceStr = B.nonceStr, a.verifySignature = B.signature, a }

    function f(a, b) { return { scope: b, signType: "sha1", timeStamp: a.timestamp + "", nonceStr: a.nonceStr, addrSign: a.addrSign } }

    function g(a) { return { timeStamp: a.timestamp + "", nonceStr: a.nonceStr, "package": a.package, paySign: a.paySign, signType: "SHA1" } }

    function i(a, b, c) {
        var d, e, f;
        switch (delete b.err_code, delete b.err_desc, delete b.err_detail, d = b.errMsg, d || (d = b.err_msg, delete b.err_msg, d = j(a, d, c), b.errMsg = d), c = c || {}, c._complete && (c._complete(b), delete c._complete), d = b.errMsg || "", B.debug && !c.isInnerInvoke && alert(JSON.stringify(b)), e = d.indexOf(":"), f = d.substring(e + 1)) {
            case "ok":
                c.success && c.success(b);
                break;
            case "cancel":
                c.cancel && c.cancel(b);
                break;
            default:
                c.fail && c.fail(b)
        }
        c.complete && c.complete(b)
    }

    function j(a, b) {
        var d, e, f, g;
        if (b) {
            switch (d = b.indexOf(":"), a) {
                case q.config:
                    e = "config";
                    break;
                case q.openProductSpecificView:
                    e = "openProductSpecificView";
                    break;
                default:
                    e = b.substring(0, d), e = e.replace(/_/g, " "), e = e.replace(/\b\w+\b/g, function(a) { return a.substring(0, 1).toUpperCase() + a.substring(1) }), e = e.substring(0, 1).toLowerCase() + e.substring(1), e = e.replace(/ /g, ""), -1 != e.indexOf("Wcpay") && (e = e.replace("Wcpay", "WCPay")), f = r[e], f && (e = f)
            }
            g = b.substring(d + 1), "confirm" == g && (g = "ok"), -1 != g.indexOf("failed_") && (g = g.substring(7)), -1 != g.indexOf("fail_") && (g = g.substring(5)), g = g.replace(/_/g, " "), g = g.toLowerCase(), ("access denied" == g || "no permission to execute" == g) && (g = "permission denied"), "config" == e && "function not exist" == g && (g = "ok"), b = e + ":" + g
        }
        return b
    }

    function k(a) { var b, c, d, e; if (a) { for (b = 0, c = a.length; c > b; ++b) d = a[b], e = q[d], e && (a[b] = e); return a } }

    function l(a, b) {
        if (B.debug && !b.isInnerInvoke) {
            var c = r[a];
            c && (a = c), b && b._complete && delete b._complete, console.log('"' + a + '",', b || "")
        }
    }

    function m() {
        if (!("6.0.2" > y)) {
            var b = new Image;
            A.appId = B.appId, A.initTime = z.initEndTime - z.initStartTime, A.preVerifyTime = z.preVerifyEndTime - z.preVerifyStartTime, E.getNetworkType({
                isInnerInvoke: !0,
                success: function(a) {
                    A.networkType = a.networkType;
                    var c = "https://open.weixin.qq.com/sdk/report?v=" + A.version + "&o=" + A.isPreVerifyOk + "&s=" + A.systemType + "&c=" + A.clientVersion + "&a=" + A.appId + "&n=" + A.networkType + "&i=" + A.initTime + "&p=" + A.preVerifyTime + "&u=" + A.url;
                    b.src = c
                }
            })
        }
    }

    function n() { return (new Date).getTime() }

    function o(b) { v && (a.WeixinJSBridge ? b() : s.addEventListener && s.addEventListener("WeixinJSBridgeReady", b, !1)) }

    function p() { E.invoke || (E.invoke = function(b, c, d) { a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d) }, E.on = function(b, c) { a.WeixinJSBridge && WeixinJSBridge.on(b, c) }) }
    var q, r, s, t, u, v, w, x, y, z, A, B, C, D, E;
    if (!a.jWeixin) return q = { config: "preVerifyJSAPI", onMenuShareTimeline: "menu:share:timeline", onMenuShareAppMessage: "menu:share:appmessage", onMenuShareQQ: "menu:share:qq", onMenuShareWeibo: "menu:share:weiboApp", previewImage: "imagePreview", getLocation: "geoLocation", openProductSpecificView: "openProductViewWithPid", addCard: "batchAddCard", openCard: "batchViewCard", chooseWXPay: "getBrandWCPayRequest" }, r = function() { var b, a = {}; for (b in q) a[q[b]] = b; return a }(), s = a.document, t = s.title, u = navigator.userAgent.toLowerCase(), v = -1 != u.indexOf("micromessenger"), w = -1 != u.indexOf("android"), x = -1 != u.indexOf("iphone") || -1 != u.indexOf("ipad"), y = function() { var a = u.match(/micromessenger\/(\d+\.\d+\.\d+)/) || u.match(/micromessenger\/(\d+\.\d+)/); return a ? a[1] : "" }(), z = { initStartTime: n(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0 }, A = { version: 1, appId: "", initTime: 0, preVerifyTime: 0, networkType: "", isPreVerifyOk: 1, systemType: x ? 1 : w ? 2 : -1, clientVersion: y, url: encodeURIComponent(location.href) }, B = {}, C = { _completes: [] }, D = { state: 0, res: {} }, o(function() { z.initEndTime = n() }), E = {
        config: function(a) {
            B = a, l("config", a), o(function() {
                c(q.config, { verifyJsApiList: k(B.jsApiList) }, function() {
                    C._complete = function(a) { z.preVerifyEndTime = n(), D.state = 1, D.res = a }, C.success = function() { A.isPreVerifyOk = 0 }, C.fail = function(a) { C._fail ? C._fail(a) : D.state = -1 };
                    var a = C._completes;
                    return a.push(function() { B.debug || m() }), C.complete = function(b) {
                        for (var c = 0, d = a.length; d > c; ++c) a[c](b);
                        C._completes = []
                    }, C
                }()), z.preVerifyStartTime = n()
            }), B.beta && p()
        },
        ready: function(a) { 0 != D.state ? a() : (C._completes.push(a), !v && B.debug && a()) },
        error: function(a) { "6.0.2" > y || (-1 == D.state ? a(D.res) : C._fail = a) },
        checkJsApi: function(a) {
            var b = function(a) { var c, d, b = a.checkResult; for (c in b) d = r[c], d && (b[d] = b[c], delete b[c]); return a };
            c("checkJsApi", { jsApiList: k(a.jsApiList) }, function() {
                return a._complete = function(a) {
                    if (w) {
                        var c = a.checkResult;
                        c && (a.checkResult = JSON.parse(c))
                    }
                    a = b(a)
                }, a
            }())
        },
        onMenuShareTimeline: function(a) { d(q.onMenuShareTimeline, { complete: function() { c("shareTimeline", { title: a.title || t, desc: a.title || t, img_url: a.imgUrl, link: a.link || location.href }, a) } }, a) },
        onMenuShareAppMessage: function(a) { d(q.onMenuShareAppMessage, { complete: function() { c("sendAppMessage", { title: a.title || t, desc: a.desc || "", link: a.link || location.href, img_url: a.imgUrl, type: a.type || "link", data_url: a.dataUrl || "" }, a) } }, a) },
        onMenuShareQQ: function(a) { d(q.onMenuShareQQ, { complete: function() { c("shareQQ", { title: a.title || t, desc: a.desc || "", img_url: a.imgUrl, link: a.link || location.href }, a) } }, a) },
        onMenuShareWeibo: function(a) { d(q.onMenuShareWeibo, { complete: function() { c("shareWeiboApp", { title: a.title || t, desc: a.desc || "", img_url: a.imgUrl, link: a.link || location.href }, a) } }, a) },
        startRecord: function(a) { c("startRecord", {}, a) },
        stopRecord: function(a) { c("stopRecord", {}, a) },
        onVoiceRecordEnd: function(a) { d("onVoiceRecordEnd", a) },
        playVoice: function(a) { c("playVoice", { localId: a.localId }, a) },
        pauseVoice: function(a) { c("pauseVoice", { localId: a.localId }, a) },
        stopVoice: function(a) { c("stopVoice", { localId: a.localId }, a) },
        onVoicePlayEnd: function(a) { d("onVoicePlayEnd", a) },
        uploadVoice: function(a) { c("uploadVoice", { localId: a.localId, isShowProgressTips: a.isShowProgressTips || 1 }, a) },
        downloadVoice: function(a) { c("downloadVoice", { serverId: a.serverId, isShowProgressTips: a.isShowProgressTips || 1 }, a) },
        translateVoice: function(a) { c("translateVoice", { localId: a.localId, isShowProgressTips: a.isShowProgressTips || 1 }, a) },
        chooseImage: function(a) {
            c("chooseImage", { scene: "1|2" }, function() {
                return a._complete = function(a) {
                    if (w) {
                        var b = a.localIds;
                        b && (a.localIds = JSON.parse(b))
                    }
                }, a
            }())
        },
        previewImage: function(a) { c(q.previewImage, { current: a.current, urls: a.urls }, a) },
        uploadImage: function(a) { c("uploadImage", { localId: a.localId, isShowProgressTips: a.isShowProgressTips || 1 }, a) },
        downloadImage: function(a) { c("downloadImage", { serverId: a.serverId, isShowProgressTips: a.isShowProgressTips || 1 }, a) },
        getNetworkType: function(a) {
            var b = function(a) {
                var c, d, e, b = a.errMsg;
                if (a.errMsg = "getNetworkType:ok", c = a.subtype, delete a.subtype, c) a.networkType = c;
                else switch (d = b.indexOf(":"), e = b.substring(d + 1)) {
                    case "fail":
                    case "permission denied":
                    case "localparameters":
                        a.errMsg = "getNetworkType:fail";
                        break;
                    default:
                        a.networkType = e
                }
                return a
            };
            c("getNetworkType", {}, function() { return a._complete = function(a) { a = b(a) }, a }())
        },
        openLocation: function(a) { c("openLocation", { latitude: a.latitude, longitude: a.longitude, name: a.name || "", address: a.address || "", scale: a.scale || 28, infoUrl: a.infoUrl || "" }, a) },
        getLocation: function(a) { c(q.getLocation, f(a, "jsapi_location"), a) },
        hideOptionMenu: function(a) { c("hideOptionMenu", {}, a) },
        showOptionMenu: function(a) { c("showOptionMenu", {}, a) },
        closeWindow: function(a) { c("closeWindow", { immediate_close: a && a.immediateClose || 0 }, a) },
        hideMenuItems: function(a) { c("hideMenuItems", { menuList: a.menuList }, a) },
        showMenuItems: function(a) { c("showMenuItems", { menuList: a.menuList }, a) },
        hideAllNonBaseMenuItem: function(a) { c("hideAllNonBaseMenuItem", {}, a) },
        showAllNonBaseMenuItem: function(a) { c("showAllNonBaseMenuItem", {}, a) },
        scanQRCode: function(a) { c("scanQRCode", { desc: a.desc, needResult: a.needResult || 0, scanType: a.scanType || ["qrCode", "barCode"] }, a) },
        openProductSpecificView: function(a) { c(q.openProductSpecificView, { pid: a.productId, view_type: a.viewType || 0 }, a) },
        addCard: function(a) {
            var e, f, g, h, b = a.cardList,
                d = [];
            for (e = 0, f = b.length; f > e; ++e) g = b[e], h = { card_id: g.cardId, card_ext: g.cardExt }, d.push(h);
            c(q.addCard, { card_list: d }, function() {
                return a._complete = function(a) {
                    var c, d, e, b = a.card_list;
                    if (b) {
                        for (b = JSON.parse(b), c = 0, d = b.length; d > c; ++c) e = b[c], e.cardId = e.card_id, e.cardExt = e.card_ext, e.isSuccess = e.is_succ ? !0 : !1, delete e.card_id, delete e.card_ext, delete e.is_succ;
                        a.cardList = b, delete a.card_list
                    }
                }, a
            }())
        },
        chooseCard: function(a) { c("chooseCard", { app_id: B.appId, location_id: a.shopId || "", sign_type: "SHA1", card_id: a.cardId || "", card_type: a.cardType || "", card_sign: a.cardSign, time_stamp: a.timestamp + "", nonce_str: a.nonceStr }, function() { return a._complete = function(a) { a.cardList = a.choose_card_info, delete a.choose_card_info }, a }()) },
        openCard: function(a) {
            var e, f, g, h, b = a.cardList,
                d = [];
            for (e = 0, f = b.length; f > e; ++e) g = b[e], h = { card_id: g.cardId, code: g.code }, d.push(h);
            c(q.openCard, { card_list: d }, a)
        },
        chooseWXPay: function(a) { c(q.chooseWXPay, g(a), a) }
    }, b && (a.wx = a.jWeixin = E), E
});
(function($) {
    var rotateLeft = function(lValue, iShiftBits) { return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits)) };
    var lsbHex = function(value) {
        var string = "";
        var i;
        var vh;
        var vl;
        for (i = 0; i <= 6; i += 2) {
            vh = (value >>> (i * 4 + 4)) & 0x0f;
            vl = (value >>> (i * 4)) & 0x0f;
            string += vh.toString(16) + vl.toString(16)
        }
        return string
    };
    var cvtHex = function(value) {
        var string = "";
        var i;
        var v;
        for (i = 7; i >= 0; i--) {
            v = (value >>> (i * 4)) & 0x0f;
            string += v.toString(16)
        }
        return string
    };
    var uTF8Encode = function(string) {
        string = string.replace(/\x0d\x0a/g, "\x0a");
        var output = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) { output += String.fromCharCode(c) } else if ((c > 127) && (c < 2048)) {
                output += String.fromCharCode((c >> 6) | 192);
                output += String.fromCharCode((c & 63) | 128)
            } else {
                output += String.fromCharCode((c >> 12) | 224);
                output += String.fromCharCode(((c >> 6) & 63) | 128);
                output += String.fromCharCode((c & 63) | 128)
            }
        }
        return output
    };
    $.extend({
        sha1: function(string) {
            var blockstart;
            var i, j;
            var W = new Array(80);
            var H0 = 0x67452301;
            var H1 = 0xEFCDAB89;
            var H2 = 0x98BADCFE;
            var H3 = 0x10325476;
            var H4 = 0xC3D2E1F0;
            var A, B, C, D, E;
            var tempValue;
            string = uTF8Encode(string);
            var stringLength = string.length;
            var wordArray = new Array();
            for (i = 0; i < stringLength - 3; i += 4) {
                j = string.charCodeAt(i) << 24 | string.charCodeAt(i + 1) << 16 | string.charCodeAt(i + 2) << 8 | string.charCodeAt(i + 3);
                wordArray.push(j)
            }
            switch (stringLength % 4) {
                case 0:
                    i = 0x080000000;
                    break;
                case 1:
                    i = string.charCodeAt(stringLength - 1) << 24 | 0x0800000;
                    break;
                case 2:
                    i = string.charCodeAt(stringLength - 2) << 24 | string.charCodeAt(stringLength - 1) << 16 | 0x08000;
                    break;
                case 3:
                    i = string.charCodeAt(stringLength - 3) << 24 | string.charCodeAt(stringLength - 2) << 16 | string.charCodeAt(stringLength - 1) << 8 | 0x80;
                    break
            }
            wordArray.push(i);
            while ((wordArray.length % 16) != 14) wordArray.push(0);
            wordArray.push(stringLength >>> 29);
            wordArray.push((stringLength << 3) & 0x0ffffffff);
            for (blockstart = 0; blockstart < wordArray.length; blockstart += 16) {
                for (i = 0; i < 16; i++) W[i] = wordArray[blockstart + i];
                for (i = 16; i <= 79; i++) W[i] = rotateLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
                A = H0;
                B = H1;
                C = H2;
                D = H3;
                E = H4;
                for (i = 0; i <= 19; i++) {
                    tempValue = (rotateLeft(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotateLeft(B, 30);
                    B = A;
                    A = tempValue
                }
                for (i = 20; i <= 39; i++) {
                    tempValue = (rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotateLeft(B, 30);
                    B = A;
                    A = tempValue
                }
                for (i = 40; i <= 59; i++) {
                    tempValue = (rotateLeft(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotateLeft(B, 30);
                    B = A;
                    A = tempValue
                }
                for (i = 60; i <= 79; i++) {
                    tempValue = (rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
                    E = D;
                    D = C;
                    C = rotateLeft(B, 30);
                    B = A;
                    A = tempValue
                }
                H0 = (H0 + A) & 0x0ffffffff;
                H1 = (H1 + B) & 0x0ffffffff;
                H2 = (H2 + C) & 0x0ffffffff;
                H3 = (H3 + D) & 0x0ffffffff;
                H4 = (H4 + E) & 0x0ffffffff
            }
            var tempValue = cvtHex(H0) + cvtHex(H1) + cvtHex(H2) + cvtHex(H3) + cvtHex(H4);
            return tempValue.toLowerCase()
        }
    })
})(jQuery);

export const construct = (app_id, component_appid, req_url, jsApiList, initfun) => {
    var share_timeline_data = arguments[4] ? arguments[4] : {};
    var share_app_data = arguments[5] ? arguments[5] : {};
    var hide_menu_list = arguments[6] ? arguments[6] : [];
    var debug = false;
    var timestamp = parseInt(new Date().getTime() / 1000);
    var nonceStr = 'verystar';
    var ticket = '';
    var signature = '';
    $.ajax({
        type: "GET",
        async: false,
        cache: false,
        url: "//ou.verystar.cn/jssdk_service/get_wx_jsapi_ticket?app_id=" + app_id + "&component_appid=" + component_appid + "&call_back_func=getJsApiTicket",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "getJsApiTicket",
        success: function(ret) {
            if (ret.retcode == 200) {
                ticket = ret.ticket;
                signature = $.sha1('jsapi_ticket=' + ticket + '&noncestr=' + nonceStr + '&timestamp=' + timestamp + '&url=' + req_url);
                wx.config({ debug: debug, appId: app_id, timestamp: timestamp, nonceStr: nonceStr, signature: signature, jsApiList: jsApiList });
                wx.ready(function() {
                    initfun && initfun();
                    jsApiList.forEach(function(func_name) {
                        if (func_name == "onMenuShareTimeline" || func_name == "menu:share:timeline") {
                            wx.onMenuShareTimeline({ title: share_timeline_data.title, link: share_timeline_data.link, imgUrl: share_timeline_data.img_url, success: function() { share_timeline_data.callbackfunc() } })
                        } else if (func_name == "onMenuShareAppMessage" || func_name == "menu:share:appmessage") {
                            wx.onMenuShareAppMessage({ title: share_app_data.title, desc: share_app_data.desc, link: share_app_data.link, imgUrl: share_app_data.img_url, success: function() { share_app_data.callbackfunc() } })
                        } else if (func_name == "hideMenuItems") {
                            wx.hideMenuItems({ menuList: hide_menu_list })
                        } else if (func_name == "hideOptionMenu") {
                            wx.hideOptionMenu()
                        } else if (func_name == "showOptionMenu") {
                            wx.showOptionMenu()
                        }
                    })
                })
            }
        }
    })
}

export const addCard = (app_id, component_appid, code, card_id, outer_id, callbackfunc) => {
        $.ajax({
            type: "GET",
            async: false,
            cache: false,
            url: "//ou.verystar.cn/jssdk_service/get_wx_api_ticket?app_id=" + app_id + "&component_appid=" + component_appid + "&call_back_func=getApiTicket",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "getApiTicket",
            success: function(ret) {
                if (ret.retcode == 200) {
                    var ticket = ret.ticket;
                    var timestamp = Date.parse(new Date()) / 1000 + "";
                    var nonce_str = 'verystar';
                    var signature_list = [code, card_id, ticket, timestamp, nonce_str];
                    signature_list.sort();
                    var signature_str = signature_list.join('');
                    var signature = $.sha1(signature_str);
                    var card_list = [{ cardId: card_id, cardExt: { code: code, timestamp: timestamp, nonce_str: nonce_str, outer_id: outer_id, signature: signature } }];
                    wx.ready(function() { wx.addCard({ cardList: card_list, success: callbackfunc(res) }) })
                } else { return false }
            }
        })
    }
    // export const construct = (app_id, component_appid, req_url, jsApiList) => {
    //     construct(app_id, component_appid, req_url, jsApiList)
    // }
    // export const addCard = (app_id, component_appid, code, card_id, outer_id, callbackfunc) => {
    //     addCard(app_id, component_appid, code, card_id, outer_id, callbackfunc)
    // }