$(document).ready(function() {
    var sync1 = $("#gallery-full");
    var sync2 = $("#gallery-thumbnail");
    var slidesPerPage = 5;
    var syncedSecondary = true;
    sync1.owlCarousel({
        items: 3,
        slideSpeed: 2000,
        nav: true,
        autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
            1400: {
                items: 3,
            }
        }
    }).on('changed.owl.carousel', syncPosition);
    sync2.on('initialized.owl.carousel', function() {
        sync2.find(".owl-item").eq(0).addClass("current");
    }).owlCarousel({
        items: slidesPerPage,
        dots: false,
        nav: true,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage,
        responsiveRefreshRate: 100,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
         responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 5,
            },
            1400: {
                items: 6,
            }
        }
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();
        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }
    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});

$(function() {
    $('a.link-scroll[href*="#"]:not([href="#"])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                //$('html, body').animate({
                //    scrollTop: (target.offset().top -60)
                //}, 1200, "easeInOutExpo");
                $('html, body').animate({
                    scrollTop: target.offset().top - 90 }, 1000);
                return false;
            }
        }
    });

});
 //===== Section Menu Active

//var scrollLink = $('.project__menu a');
//$(window).scroll(function () {
//    var scrollbarLocation = $(this).scrollTop();
//    scrollLink.each(function () {
//        if($(this.hash).length)
//        {
//            var sectionOffset = $(this.hash).offset().top - 75;
//            if (sectionOffset <= scrollbarLocation) {
//                $(this).parent().addClass('active');
//                $(this).parent().siblings().removeClass('active');
//            }
//        }
            
//    });
//});
$(function() {
    var stickWidth = 767;
    var win = $(window);
    var menu = $(".lockfixed");
    var options = {
        offset_top: 90
    };
    if (win.width() > stickWidth) {
        menu.stick_in_parent(options);
            $('.lockfixed').on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        })
    }
    win.resize(function () {
        if (win.width() > stickWidth) {
            menu.stick_in_parent(options);
        } else {
            menu.trigger("sticky_kit:detach");
        }
    });
});

 $(document).ready(function () {
    $(".form-send").submit(function(e) {
        e.preventDefault();
        var loader = $(this).children('.loader');
        var alert = $(this).children('.form-alert');
        var noti = $(this).children('.noti');
        loader.show();
        var form = $(this);
        $.ajax({
            type: "POST",
            url: "/send",
            data: form.serialize(),
            success: function(data)
            {
                loader.hide();
                noti.hide();
                if(data.result)
                {
                    alert.html('<p class="success">✔ Cảm ơn bạn đã đăng ký nhận thông tin. Chúng tôi sẽ liên hệ tư vấn lại sớm nhất.</p>');
                }
                else
                {
                    alert.html('<p class="error">✘ Có lỗi khi gửi thông tin.</p>');
                }
                alert.show();
            },
            error: function (data) {
                loader.hide();
                noti.hide();
                alert.html('<p class="error">✘ Có lỗi khi gửi thông tin.</p>');
                alert.show();
            }
        });
        this.reset();
    });
 });
$(document).ready(function () {
    // Tìm các ảnh cần tạo hiệu ứng zoom
    $(".entry-content img.ckupload, .entry-content figure.ckupload img, img.zoom").each(function () {
        var $this = $(this);
        var altText = $this.attr('alt') || '';

        // KIỂM TRA: Nếu có data-src (đang dùng lazy) thì lấy data-src, ngược lại lấy src
        var largeImage = $this.attr('data-src') || $this.attr('src');

        // Bọc thẻ <a> quanh img
        // Lưu ý: Sử dụng .wrap() sẽ an toàn hơn .replaceWith() để giữ lại các sự kiện hoặc cấu trúc DOM
        $this.wrap('<a class="fancybox" href="' + largeImage + '" data-caption="' + altText + '"></a>');

    }).promise().done(function () {
        // Khởi tạo fancybox sau khi đã bọc xong các thẻ a
        if ($.isFunction($.fn.fancybox)) {
            $('.fancybox').fancybox();
        }
    });
});
(function () {
        if (!document.referrer.toLowerCase().includes("google.")) return;

         const box = document.getElementById("getcode-box");
         const btn = document.getElementById("getcode-btn");
         const content = document.getElementById("getcode-content");

         if (!box || !btn || !content) return;

         // Hiển thị box chứa nút
         box.style.display = "block";

         // Sử dụng localStorage để lưu trạng thái bước hiện tại (1 hoặc 2)
         const STORAGE_KEY = "step_getcode";
         let currentStep = localStorage.getItem(STORAGE_KEY) || "1";
         let timerInterval;

        if (currentStep === "2") {
            btn.textContent = "LẤY MÃ";
        }
         btn.addEventListener("click", function () {
           
             // Vô hiệu hóa nút để tránh click nhiều lần
             btn.style.pointerEvents = "none";
             btn.style.opacity = "0.8";

             if (currentStep === "1") {
                 // ==========================================
                 // GIAI ĐOẠN 1: Đếm ngược 60s
                 // ==========================================
                 // Random trong khoảng từ 55 đến 65 giây
                 let countdown = Math.floor(Math.random() * (65 - 55 + 1)) + 55;
                 btn.textContent = `Vui lòng chờ ${countdown}s (1/2)`;

                 timerInterval = setInterval(function () {
                     // Chỉ đếm ngược khi người dùng đang mở tab (không ẩn)
                     if (!document.hidden) {
                         countdown--;
                         if (countdown > 0) {
                             btn.textContent = `Vui lòng chờ ${countdown}s (1/2)`;
                         } else {
                             clearInterval(timerInterval);
                             // Lưu trạng thái hoàn thành bước 1 vào localStorage
                             localStorage.setItem(STORAGE_KEY, "2");

                             // Hiển thị thông báo yêu cầu chuyển trang hoặc F5
                             content.innerHTML = `
                            <span style="background: rgb(236, 29, 37); border: 1px solid rgb(254, 254, 254); color: rgb(255, 255, 255); font-weight: 500; font-size: 13px; border-radius: 6px; padding: 4px 12px; margin: 5px; display: inline-block; min-height: auto; min-width: 132px; line-height: 20px; vertical-align: middle; width: auto; z-index: 10; position: relative;">
                                Vui lòng click vào link bất kỳ và kéo xuống vị trí này để lấy MÃ
                            </span>`;
                         }
                     }
                 }, 1000);

             } else if (currentStep === "2") {
                 // Cuộn lên đầu trang (giữ nguyên logic cũ của bạn)
                 window.scrollTo({ top: 0, behavior: "smooth" });
                 // ==========================================
                 // GIAI ĐOẠN 2: Đếm ngược 20s + Gọi API
                 // ==========================================
                 let countdown = 15;
                 btn.textContent = `Lấy mã sau ${countdown}s (2/2)`;

                 const encodedUrl = encodeURIComponent(window.location.origin + window.location.pathname);

                 // Gọi API ngay từ đầu, lấy dữ liệu về chờ sẵn
                 fetch(`https://traffic3t.net/get?url=${encodedUrl}`)
                     .then(res => res.json())
                     .then(data => {
                         const messageInfo = (data.type === "error") ? "Bạn đã lấy mã rồi!" : data.message;

                         timerInterval = setInterval(function () {
                             if (!document.hidden) {
                                 countdown--;
                                 if (countdown > 0) {
                                     btn.textContent = `Lấy mã sau ${countdown}s (2/2)`;
                                 } else {
                                     clearInterval(timerInterval);
                                     // Xóa localStorage để reset lại quy trình cho lần sau
                                     localStorage.removeItem(STORAGE_KEY);

                                     // Hiển thị mã cho người dùng
                                     content.innerHTML = `<span style="background: rgb(236, 29, 37); border: 1px solid rgb(254, 254, 254); color: rgb(255, 255, 255); font-weight: 600; font-size: 14px; border-radius: 6px; padding: 4px 12px; margin: 5px; display: inline-block; min-height: auto; min-width: 132px; line-height: 20px; vertical-align: middle; width: auto; z-index: 10; position: relative;">Mã KM: ${messageInfo}</span>`;
                                 }
                             }
                         }, 1000);
                     })
                     .catch(() => {
                         // Xử lý khi lỗi mạng
                         btn.style.pointerEvents = "auto";
                         btn.style.opacity = "1";
                         btn.textContent = "Lỗi kết nối, thử lại";
                         content.innerHTML = '<span style="color:red;">Có lỗi, vui lòng thử lại.</span>';
                     });
             }
         });
     })();