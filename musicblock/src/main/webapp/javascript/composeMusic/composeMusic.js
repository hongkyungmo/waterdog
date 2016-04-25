var swiperRepository = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination'
    , paginationClickable: true
    , spaceBetween: 30
    , loop: true
    , grabCursor: false
});

var swiperMelodyLayer = new Swiper('.layer-melody-block', {
    scrollbar: '.swiper-scrollbar'
    , scrollbarHide: true
    , slidesPerView: 'auto'
    , spaceBetween: 0
    , grabCursor: false
    , freeMode: true
    , autoplay : 200
});

var parent = null;
var placeHoler = null;
var wrapper = null;
var i = null;
var comparedNoDrop = "simple_with_no_drop";
var comparedWrapper = "swiper-wrapper";

$("ol.simple_with_drop")
    .sortable({
        group: 'no-drop'
        , handle: 'i.icon-move'
        , onDragStart: function ($item, container, _super) {
            // Duplicate items of the no drop area
            parent = $item.parent();
            parent = parent[0].className;
            parent = parent.split(" ");
            if (!container.options.drop)
                $item.clone().insertAfter($item);
            _super($item, container);
        }
        , onDrop: function ($item, container) {
            $item.removeClass(
                    container.group.options.draggedClass)
                .removeAttr("style");
            $("body").removeClass(
                container.group.options.bodyClass);
            // Index 파악
            wrapper = swiperMelodyLayer.wrapper[0].children;
            for (i = 0; i < wrapper.length; i++) {
                var classNames = wrapper[i].className
                    .split(" ");
                placeHoler = wrapper[i - 1];
                if (classNames[0] == "no_drop") {
                    break;
                }
            }
            $item.removeClass("no_drop");

            if (parent[0] == comparedNoDrop) {
                // 해당 Index에 추가
                if (i <= 0) {
                    $(placeHoler).before($item[0]);
                } else {
                    $(placeHoler.className).after($item[0]);
                }
                swiperMelodyLayer.params.loop && swiperMelodyLayer.createLoop()
                    , swiperMelodyLayer.params.observer && swiperMelodyLayer.support.observer || swiperMelodyLayer.update(!0)
            }
        }

    });

$("ol.simple_with_no_drop").sortable({
    group: 'no-drop'
    , drop: false
});

var swiperMelodyLayer = new Swiper('.layer-selector', {
    scrollbar: '.swiper-scrollbar'
    , scrollbarHide: true
    , slidesPerView: 'auto'
    , spaceBetween: 0
    , grabCursor: false
    , freeMode: true
});

$(function () {
    //    var pointer = $(".progress-bar-pointer").offset().left;

    $("#btn-prev").bind("click", function () {
        $(".progress-bar-pointer").css("left", "0");
    });

    $("#btn-play").bind("click", function () {
        // 포인터의 위치
//        $("#work-layer").stop().animate({
//            'textIndent': '320'
//        }, {
//            step: function (now, fx) {
//                now = -500;
//                $(this).css({
//                    "transform": "translate3d(" + now + "px,  0px, 0px)"
//                });
//            }
//            , duration: 5000
//            , easing: 'linear'
//            , queue: false
//            , complete: function () {
//                console.log('Animation is done');
//            }
//        }, 'linear');
//
//        $("#btn-play").animate({
//            textIndent: 100
//        }, {
//            duration: 10000
//            , easing: 'linear'
//            , queue: false
//        });
        
        
        
        console.log(swiperMelodyLayer.autoplaying);
        
        
        
    });

    // 매개면수 e 는 Event형태의 eventObject이다.
    // this는 선택자의 요소다
    //    $(".progress-bar-pointer").bind("click", function (e) {
    //        console.log("포인터 클릭")
    //        $(".progress-bar-pointer").css("left", e.pageX - 20);
    //        $(".progress-bar-played").css("width", e.pageX - 10);
    //    });

    $(".progress-bar-wrapper").bind("click", function (e) {
        console.log("래퍼 클릭");
        $(".progress-bar-pointer").css("left", e.pageX - 20);
        //        $(".progress-bar-played").css("width", e.pageX - 10);
    });



});