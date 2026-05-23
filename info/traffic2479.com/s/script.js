!(function () {
    var e = {};
    !(function () {
        'use strict';
        var t = e;
        (t.detectIncognito = void 0),
            (t.detectIncognito = function () {
                return new Promise(function (e, t) {
                    var o,
                        n,
                        r = 'Unknown';
                    function i(t) {
                        e({
                            isPrivate: t,
                            browserName: r,
                        });
                    }
                    function a(e) {
                        return e === eval.toString().length;
                    }
                    void 0 !== (n = navigator.vendor) && 0 === n.indexOf('Apple') && a(37)
                        ? ((r = 'Safari'),
                          void 0 !== navigator.maxTouchPoints
                              ? (function () {
                                    var e = String(Math.random());
                                    try {
                                        window.indexedDB.open(e, 1).onupgradeneeded = function (t) {
                                            var o,
                                                n,
                                                r = null === (o = t.target) || void 0 === o ? void 0 : o.result;
                                            try {
                                                r
                                                    .createObjectStore('test', {
                                                        autoIncrement: !0,
                                                    })
                                                    .put(new Blob()),
                                                    i(!1);
                                            } catch (e) {
                                                var a = e;
                                                return (
                                                    e instanceof Error && (a = null !== (n = e.message) && void 0 !== n ? n : e),
                                                    i('string' == typeof a && /BlobURLs are not yet supported/.test(a))
                                                );
                                            } finally {
                                                r.close(), window.indexedDB.deleteDatabase(e);
                                            }
                                        };
                                    } catch (e) {
                                        return i(!1);
                                    }
                                })()
                              : (function () {
                                    var e = window.openDatabase,
                                        t = window.localStorage;
                                    try {
                                        e(null, null, null, null);
                                    } catch (e) {
                                        return i(!0);
                                    }
                                    try {
                                        t.setItem('test', '1'), t.removeItem('test');
                                    } catch (e) {
                                        return i(!0);
                                    }
                                    i(!1);
                                })())
                        : (function () {
                              var e = navigator.vendor;
                              return void 0 !== e && 0 === e.indexOf('Google') && a(33);
                          })()
                        ? ((o = navigator.userAgent),
                          (r = o.match(/Chrome/)
                              ? void 0 !== navigator.brave
                                  ? 'Brave'
                                  : o.match(/Edg/)
                                  ? 'Edge'
                                  : o.match(/OPR/)
                                  ? 'Opera'
                                  : 'Chrome'
                              : 'Chromium'),
                          void 0 !== self.Promise && void 0 !== self.Promise.allSettled
                              ? navigator.webkitTemporaryStorage.queryUsageAndQuota(
                                    function (e, t) {
                                        var o;
                                        i(
                                            Math.round(t / 1048576) <
                                                2 *
                                                    Math.round(
                                                        (void 0 !== (o = window).performance &&
                                                        void 0 !== o.performance.memory &&
                                                        void 0 !== o.performance.memory.jsHeapSizeLimit
                                                            ? performance.memory.jsHeapSizeLimit
                                                            : 1073741824) / 1048576
                                                    )
                                        );
                                    },
                                    function (e) {
                                        t(new Error('detectIncognito somehow failed to query storage quota: ' + e.message));
                                    }
                                )
                              : (0, window.webkitRequestFileSystem)(
                                    0,
                                    1,
                                    function () {
                                        i(!1);
                                    },
                                    function () {
                                        i(!0);
                                    }
                                ))
                        : void 0 !== document.documentElement && void 0 !== document.documentElement.style.MozAppearance && a(37)
                        ? ((r = 'Firefox'), i(void 0 === navigator.serviceWorker))
                        : void 0 !== navigator.msSaveBlob && a(39)
                        ? ((r = 'Internet Explorer'), i(void 0 === window.indexedDB))
                        : t(new Error('detectIncognito cannot determine the browser'));
                });
            });
    })(),
        (detectIncognito = e.detectIncognito);
})();

document.addEventListener('DOMContentLoaded', function () {
    if (
        'https://www.google.com/' == document.referrer ||
        'https://www.google.com.vn/' == document.referrer ||
        document.referrer.includes('https://www.google.com')
    ) {
        var buttonGetCode = document.getElementById('get-code-website');
        if (buttonGetCode) buttonGetCode.style.backgroundColor = 'orange';
    }
});
async function startCountdown(seconds) {
    detectIncognito()
        .then(function (result) {
            if (result.isPrivate) {
                alert('Vui lòng tắt chế độ ẩn danh (riêng tư) của trình duyệt');
                return;
            } else {
                // Display initial message
                updateCountdownDisplay(seconds);

                // Start the countdown timer
                const countdownInterval = setInterval(function () {
                    seconds--;

                    // Display the updated countdown
                    updateCountdownDisplay(seconds);

                    // Check if the countdown is complete
                    if (seconds <= 0) {
                        clearInterval(countdownInterval); // Stop the countdown
                        var currentUrl = window.location.href;
                        var type = 'direct';

                        if (
                            'https://www.google.com/' == document.referrer ||
                            'https://www.google.com.vn/' == document.referrer ||
                            document.referrer.includes('https://www.google.com')
                        ) {
                            type = 'search';
                        }
                        var userAgent = navigator.userAgent;
                        fetch('https://traffic2479.com/s/link/get-code-website', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                url: currentUrl,
                                type: type,
                                agent: userAgent,
                            }),
                        })
                            .then((response) => response.json())
                            .then((response) => {
                                if (response.data.length == 6) {
                                    document.getElementById('get-code-website').innerText = response.data;
                                } else {
                                    localStorage.setItem('keyCodeAccess', 'keyCodeAccess');
                                    document.getElementById('get-code-website').innerText = response.data;
                                }
                            });
                    }
                }, 1000); // Update every 1000ms (1 second)
            }
        })
        .catch(function (error) {
            console.error('Đã xảy ra lỗi trong quá trình kiểm tra:', error);
        });
}
//console.log(document.referrer);
function updateCountdownDisplay(seconds) {
    document.getElementById('get-code-website').innerText = 'Đợi lấy mã: ' + seconds + 's';
}

document.addEventListener('DOMContentLoaded', function () {
    var key = localStorage.getItem('keyCodeAccess');
    var currentUrl = window.location.href;
    var type = 'direct';

    if (
        'https://www.google.com/' == document.referrer ||
        'https://www.google.com.vn/' == document.referrer ||
        document.referrer.includes('https://www.google.com')
    ) {
        type = 'search';
    }
    var userAgent = navigator.userAgent;
    fetch('https://traffic2479.com/s/link/get-code-website', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            url: currentUrl,
            type: type,
            agent: userAgent,
        }),
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.data.length == 6 && key) {
                document.getElementById('get-code-website').style.pointerEvents = 'none';
                document.getElementById('get-code-website').innerText = response.data;
            }
        });

    document.getElementById('get-code-website').addEventListener('click', function () {
        this.style.pointerEvents = 'none';
        document.getElementById('get-code-website').addEventListener('click', function () {});
        startCountdown(Math.floor(Math.random() * (80 - 60 + 1)) + 60);
    });
});
