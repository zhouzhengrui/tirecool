// fix:active
document.body.addEventListener('touchstart', function() {});

// swiper slideshow
var swiperSlideshow = new Swiper('#swiperSlideshow', {
    pagination: '.swiper-pagination',
    autoHeight: true,
    autoplay: 5000,
    loop: true
});

// swiper tab
var swiperTab = new Swiper('#swiperTab', {
    autoHeight: true,
    onSlideChangeStart: function() {
        $(".swiperTab .active").removeClass('active')
        $(".swiperTab a").eq(swiperTab.activeIndex).addClass('active')
    }
});

// switchery
var elems = Array.prototype.slice.call(document.querySelectorAll('.iSwitchery'));
elems.forEach(function(html) {
    var switchery = new Switchery(html, {
        className: 'iSwitchery',
        color: '#fac800'
    });
});

// jQuery plugin
jQuery(document).ready(function($) {

    // fancy box
    $(".fancyBox").fancybox({
        padding: 0,
        margin: 25,
        minWidth: 300,
        maxWidth: 1000,
        minHeight: 0,
        closeBtn: false,
        helpers: {
            overlay: {
                closeClick: false
            }
        }
    });

    // swiper tab
    $(".swiperTab a").on('touchstart mousedown', function(e) {
        e.preventDefault()
        $(".swiperTab .active").removeClass('active')
        $(this).addClass('active')
        swiperTab.slideTo($(this).index())
    });
    $(".swiperTab a").click(function(e) {
        e.preventDefault()
    });

    // selection
    $(".selection .group").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // iCheck
    $('.iCheckInput').iCheck({
        checkboxClass: 'iCheck',
        radioClass: 'iRadio',
    });
    // 判断选中状态
    // $("#submit").click(function() {
    //
    //     直接获取选中radio的值
    //     alert($("input[name='radio-1']:checked").val());
    //
    //     循环判断是否选中
    //     $("input[name='radio-1']:radio").each(function() {
    //         if (true == $(this).is(':checked')) {
    //             alert($(this).val());
    //         }
    //     });
    //
    // });

    // raty
    $('.raty').raty({
        starType: 'a',
        space: false
    });
    $('.ratyReadOnly').raty({
        starType: 'a',
        space: false,
        readOnly: true,
        score: function() {
            return $(this).attr('data-score');
        }
    });

    // nav
    $("#sideNav").mmenu({
        "navbar": {
            "add": 'false',
            "title": '筛选',
        },
        extensions: [
            "pagedim-black"
        ],
        offCanvas: {
            "position": "right"
        }
    });

    // accordion
    $('#accordion [data-accordion]').accordion();

});
