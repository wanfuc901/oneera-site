(function () {
    var e, t, n = n || {},
    i = "https://traffic.com.vn",
    o = !1,
    a = "hidden",
    l = 0,
    d = 0,
    r = (e = document.createElement("div"), (t = document.currentScript).parentNode.insertBefore(e, t.nextSibling), e),
    s = function() {
        var e = document.currentScript,t = e.src;
        return new URL(t).searchParams.get("id") || ""
    }(),
    ip = '',
    device = '',
    c = '';
    currentDomain = window.location.origin,
    currentPath = window.location.pathname,
    u = `id=${s}&website=${currentDomain}&path=${currentPath}`,
    g = (window.navigator.userLanguage || window.navigator.language || "").toLowerCase(),
    m = g.includes("vi") || g.includes("vn");
    if(document.referrer.match(/^https?:\/\/([^\/]+\.)?google\.com(\/|\.|$)/i) || document.referrer.match(/^https?:\/\/([^\/]+\.)?coccoc\.com(\/|\.|$)/i) || document.referrer.match(/^https?:\/\/([^\/]+\.)?bing\.com(\/|\.|$)/i)) {
        e.setAttribute('style', 'background: rgb(237, 28, 36); border: 1px solid rgb(255, 255, 255); color: rgb(255, 255, 255); font-weight: 700; font-size: 17px; border-radius: 7px; padding: 7px 20px; min-width: 170px; line-height: 20px; vertical-align: middle; text-align: center; margin: 0 auto; display: inline-block;cursor: pointer;');
        e.innerHTML = '<img src="'+i+'/wp-content/plugins/iauto-traffic-user-manage/img/logo-traffic.png" alt="logo icon" height="" style="vertical-align:middle;width:auto;height:20px;display:inline-block !important;margin-right:5px;">Lấy mã';
        fetch(i+'/wp-json/iatum/v1/get-ip').then(response => response.json()).then(data => {
            e.setAttribute('data-ip', data.ip);
        }).catch(error => console.error('Error fetching IP address:', error));
        e.setAttribute('data-device', /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'mobile' : 'desktop');
        (v = new XMLHttpRequest, v.onreadystatechange = function() {
            if (v.readyState == XMLHttpRequest.DONE && 200 == v.status && v.responseText) {
                var result = JSON.parse(v.responseText);
                var btntext     = result.btntext       ? result.btntext       : 'Lấy mã',
                colorbtn        = result.colorbtn      ? result.colorbtn      : 'rgb(237, 28, 36)',
                colorbtntext    = result.colorbtntext  ? result.colorbtntext  : 'rgb(255, 255, 255)',
                btnbrandimg     = result.btnbrandimg   ? result.btnbrandimg   : i+'/wp-content/plugins/iauto-traffic-user-manage/img/logo-traffic.png',
                btnhidebrand    = result.btnhidebrand  ? 'none !important'    : 'inline-block !important',
                btnstyle = 'background: '+colorbtn+'; border: 1px solid '+colorbtntext+'; color: '+colorbtntext+'; font-weight: 700; font-size: 17px; border-radius: 7px; padding: 7px 20px; min-width: 170px; line-height: 20px; vertical-align: middle; text-align: center; margin: 0 auto; display: inline-block;cursor: pointer;',
                btnhtml = '<img src="'+btnbrandimg+'" alt="logo icon" height="" style="vertical-align:middle;width:auto;height:20px;display:'+btnhidebrand+';margin-right:5px;">'+btntext;
                e.setAttribute('style', btnstyle);
                e.innerHTML = btnhtml;
            }
        }, v.open("POST", i + "/wp-json/iatum/v1/get-btn"), v.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), v.send(u));

        r.addEventListener("click", (function(event) {
            if(!h(r, 'completed')) {
                return f().then((e => {
                    ip = r.dataset.ip;
                    device = r.dataset.device;
                    e.isPrivate ? alert("Vui lòng tắt chế độ ẩn danh") : function() {
                        r.classList.add('completed');
                        r.innerText = 'Loading...';
                        (v = new XMLHttpRequest, v.onreadystatechange = function() {
                            if (v.readyState == XMLHttpRequest.DONE && 200 == v.status) {
                                var result = JSON.parse(v.responseText);
                                if(result.success) {
                                    var current = 60, end = 0;
                                    var timer = setInterval(function() {
                                        current += -1;
                                        r.innerHTML = 'Tiếp tục sau: '+current+' giây';
                                        if (current == end) {
                                            clearInterval(timer);
                                            r.style.removeProperty('cursor');
                                            (v = new XMLHttpRequest, v.onreadystatechange = function() {
                                                r.innerHTML = JSON.parse(v.responseText).c;
                                            }, v.open("POST", i + "/wp-json/iatum/v1/process-site"), v.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), v.send(u+'&ip='+ip+'&device='+device));
                                        }
                                    }, 1000);
                                } else {
                                    alert(result.data.msg);
                                }
                            }
                        }, v.open("POST", i + "/wp-json/iatum/v1/check-site"), v.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), v.send(u+'&ip='+ip));
                    }();
                }));
            }
        }));
        var f = function() {
            return new Promise((function(e, t) {
                var n, i, o = "Unknown";

                function a(t) {
                    e({
                        isPrivate: t,
                        browserName: o
                    })
                }

                function l(e) {
                    return e === eval.toString().length
                }

                function d() {
                    void 0 !== navigator.maxTouchPoints ? function() {
                        var e = String(Math.random());
                        try {
                            window.indexedDB.open(e, 1).onupgradeneeded = function(t) {
                                var n, i, o = null === (n = t.target) || void 0 === n ? void 0 : n.result;
                                try {
                                    o.createObjectStore("test", {
                                        autoIncrement: !0
                                    }).put(new Blob), a(!1)
                                } catch (e) {
                                    var l = e;
                                    return e instanceof Error && (l = null !== (i = e.message) && void 0 !== i ? i : e), a("string" == typeof l && /BlobURLs are not yet supported/.test(l))
                                } finally {
                                    o.close(), window.indexedDB.deleteDatabase(e)
                                }
                            }
                        } catch (e) {
                            return a(!1)
                        }
                    }() : function() {
                        var e = window.openDatabase,
                            t = window.localStorage;
                        try {
                            e(null, null, null, null)
                        } catch (e) {
                            return a(!0)
                        }
                        try {
                            t.setItem("test", "1"), t.removeItem("test")
                        } catch (e) {
                            return a(!0)
                        }
                        a(!1)
                    }()
                }

                function r() {
                    navigator.webkitTemporaryStorage.queryUsageAndQuota((function(e, t) {
                        var n;
                        a(Math.round(t / 1048576) < 2 * Math.round((void 0 !== (n = window).performance && void 0 !== n.performance.memory && void 0 !== n.performance.memory.jsHeapSizeLimit ? performance.memory.jsHeapSizeLimit : 1073741824) / 1048576))
                    }), (function(e) {
                        t(new Error("detectIncognito somehow failed to query storage quota: " + e.message))
                    }))
                }

                function s() {
                    void 0 !== self.Promise && void 0 !== self.Promise.allSettled ? r() : (0, window.webkitRequestFileSystem)(0, 1, (function() {
                        a(!1)
                    }), (function() {
                        a(!0)
                    }))
                }
                void 0 !== (i = navigator.vendor) && 0 === i.indexOf("Apple") && l(37) ? (o = "Safari", d()) : function() {
                    var e = navigator.vendor;
                    return void 0 !== e && 0 === e.indexOf("Google") && l(33)
                }() ? (n = navigator.userAgent, o = n.match(/Chrome/) ? void 0 !== navigator.brave ? "Brave" : n.match(/Edg/) ? "Edge" : n.match(/OPR/) ? "Opera" : "Chrome" : "Chromium", s()) : void 0 !== document.documentElement && void 0 !== document.documentElement.style.MozAppearance && l(37) ? (o = "Firefox", a(void 0 === navigator.serviceWorker)) : void 0 !== navigator.msSaveBlob && l(39) ? (o = "Internet Explorer", a(void 0 === window.indexedDB)) : t(new Error("detectIncognito cannot determine the browser"))
            }))
        }
        var h = function(e, cls) {
            return (' ' + e.className + ' ').indexOf(' ' + cls + ' ') > -1;
        }
    }
})();