(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function(key, value, options) {
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }
            return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        var result = key ? undefined : {},
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;
        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');
            if (key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        $.cookie(key, '', $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key);
    };
}));

! function(a) {
    function s(s) {
        a(s.target).each(function() {
            if (s.stars > 1 && "" == s.range && 1 == s.count) {
                for (var e = 1; e <= s.stars; e++) e > s.disable && s.stars > s.disable && s.disable > 0 ? a(this).append("<span class='" + s.star + " " + s.disable_class + "' data-value='" + e + "'></span>") : s.stars > s.disable && 0 == s.disable ? a(this).append("<span class='" + s.star + " " + s.disable_class + "' data-value='" + e + "'></span>") : a(this).append("<span class='" + s.star + "' data-value='" + e + "'></span>");
                a(this).append("<input type='hidden' class='" + s.input_class + "' value=''>")
            } else if (s.stars > 1 && "" == s.range && s.count > 1) {
                l = e = 1;
                for (e; e <= s.stars; e++) e > s.disable && s.stars > s.disable && s.disable > 0 ? (a(this).append("<span class='" + s.star + " " + s.disable_class + "' data-value='" + l + "'></span>"), l += s.count) : s.stars > s.disable && 0 == s.disable ? (a(this).append("<span class='" + s.star + " " + s.disable_class + "' data-value='" + l + "'></span>"), l += s.count) : (a(this).append("<span class='" + s.star + "' data-value='" + l + "'></span>"), l += s.count);
                a(this).append("<input type='hidden' class='" + s.input_class + "' value=''>")
            }
            if (s.range && 2 == s.range.length && 1 == s.count) {
                for (var t = 0, n = s.range[0]; n < s.range[1]; n++) n > s.disable && s.range[1] > s.disable && s.disable > 0 && s.disable <= t ? a(this).append("<span class='" + s.star + " " + s.disable_class + "' data-value='" + n + "'></span>") : 0 == s.disable ? a(this).append("<span class='" + s.star + " " + s.disable_class + "' data-value='" + n + "'></span>") : a(this).append("<span class='" + s.star + "' data-value='" + n + "'></span>"), t++;
                a(this).append("<input type='hidden' class='" + s.input_class + "' value=''>")
            } else if (s.range && 2 == s.range.length && s.count > 1) {
                var l = n = s.range[0],
                    t = 0;
                for (n; n < s.range[1]; n++) n >= s.disable && s.range[1] > s.disable && s.disable > 0 && s.disable <= t ? (a(this).append("<span class='" + s.star + " " + s.disable_class + "' data-value='" + l + "'></span>"), l += s.count) : 0 == s.disable ? (a(this).append("<span class='" + s.star + " " + s.disable_class + "' data-value='" + l + "'></span>"), l += s.count) : (a(this).append("<span class='" + s.star + "' data-value='" + l + "'></span>"), l += s.count), t++;
                a(this).append("<input type='hidden' class='" + s.input_class + "' value=''>")
            }
        })
    }

    function e(s) {
        if (s.stars) {
            var e;
            return a(s.target + " ." + s.star).each(function(t, n) {
                a(this).hover(function() {
                    a(this).prevAll().andSelf().addClass("over")
                }, function() {
                    a(this).prevAll().andSelf().removeClass("over")
                }), a(this).on("click", function() {
                    e = a(this).attr("data-value"), a(this).siblings("input." + s.input_class).val(e), a(this).prevAll().andSelf().addClass(s.checked_class), a(this).nextAll().removeClass(s.checked_class), s.on_select && "function" == typeof s.on_select && s.on_select(e)
                })
            }), a(s.target).each(function(e, t) {
                if (s.default_stars > 0 && e <= s.default_stars && s.stars >= s.default_stars) {
                    a(s.target).find("input." + s.input_class).attr("default-stars", s.default_stars);
                    var n, l = a(s.target).find("input." + s.input_class).attr("default-stars");
                    if (s.disable > 0 && s.default_stars < s.disable) {
                        for (r = 0; r < l; r++) a(this).find(".rate_star").eq(r).addClass(s.checked_class);
                        n = a(s.target).find("span.checked:last").attr("data-value"), a(this).find("input." + s.input_class).val(n)
                    } else if (s.disable <= 0) {
                        for (var r = 0; r < l; r++) a(this).find(".rate_star").eq(r).addClass(s.checked_class);
                        n = a(s.target).find("span.checked:last").attr("data-value"), a(this).find("input." + s.input_class).val(n)
                    }
                }
                s.stars <= s.default_stars && console.warn("The number of stars in a row should be bigger than the number of default stars."), s.default_stars < 0 && console.warn("The number of default stars should be bigger than 0."), s.key >= s.default_stars && console.warn("The number of Rows should be less than the number of default stars."), s.disable > 0 && s.default_stars > 0 && s.default_stars >= s.disable && console.warn("The number of disabled stars should not overlap with the number of default stars."), s.disable > 0 && s.disable >= s.range[1] - s.range[0] && console.warn("The number of disabled stars should be less than the last number defined in range.")
            }), e
        }
    }
    a.fn.starwarsjs = function(t) {
        var n = a.extend({
                target: this.selector,
                stars: 1,
                range: [],
                count: 1,
                disable: -1,
                default_stars: 0,
                on_select: null
            }, t),
            l = {
                target: n.target,
                star: "rate_star",
                stars: n.stars,
                range: n.range,
                count: n.count,
                disable: n.disable,
                checked_class: "checked",
                disable_class: "disable",
                input_class: "get_rate",
                default_stars: n.default_stars,
                on_select: n.on_select
            };
        return s(l), e(l), this
    }
}(jQuery);
$votepointstar = rv, $defaultpointrating = rv, $postid =rid,$ddrate = "/vote", 
$(document).ready(function() {
    $.cookie("vote_" + $postid) ? $(".rate_row").starwarsjs({
        stars: 5,
        count: 1,
        default_stars: $votepointstar,
        disable: 0
    }) : $(".rate_row").starwarsjs({
        stars: 5,
        count: 1,
        default_stars: $votepointstar,
        on_select: function(t) {
            $(".rate_row_result").starwarsjs({
                stars: 5,
                count: 1,
                default_stars: t,
                disable: 0
            }), document.getElementById("rate_row").style.display = "none", document.getElementById("rate_row_cmd").innerHTML = "Cảm ơn bạn đã đánh giá!";
            var e = new Date;
            e.setTime(e.getTime() + 108e5), $.cookie("vote_" + $postid, "voted", {
                expires: e,
                path: "/"
            }), $.ajax({
                type: "POST",
                data: {
                    rate: t,
                    id: $postid
                },
                url: $ddrate
            })
        }
    });
    $('.rate_row > span').hover(function() {
        star_id = $(this).attr('data-value');
        $(this).parent().siblings('#valore').html('<b>' + star_id + '</b> vote');
    }, function() {
        $(this).parent().siblings('#valore').html('')
    });
});