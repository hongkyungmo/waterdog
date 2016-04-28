var parent = null;
var placeHoler = null;
var wrapper = null;
var i = null;
var comparedNoDrop = "simple_with_no_drop";
var comparedWrapper = "swiper-wrapper";


//'.layer-selector' 보류
var swiperMelodyLayer = new Swiper('.layer-melody-block', {
    scrollbar: '.swiper-scrollbar'
    , scrollbarHide: true
    , slidesPerView: 'auto'
    , spaceBetween: 0
    , grabCursor: false
    , freeMode: true
});

//var swiperReository = new Swiper('.layer-selector', {
//    scrollbar: '.swiper-scrollbar'
//    , scrollbarHide: true
//    , slidesPerView: 'auto'
//    , spaceBetween: 0
//    , grabCursor: false
//    , freeMode: true
//});
//$("ol.simple_with_drop").draggable()

$("ol.simple_with_drop").sortable({
    group: 'no-drop'
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
        $item.removeClass(container.group.options.draggedClass).removeAttr("style");
        $("body").removeClass(container.group.options.bodyClass);
        // Index 파악
        wrapper = swiperMelodyLayer.wrapper[0].children;
        for (i = 0; i < wrapper.length; i++) {
            var classNames = wrapper[i].className.split(" ");
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


$(function () {
    
       
    $( ".highlight" ).draggable();
          
       
        
    // Move to blockMaking.html
    $("#btn-create").bind("click", function(){
        // need to keep sorted blocks layer
        $(location).attr('href',"blockMaking.html");
    });
        
    // Move to template.html
    $("#btn-community").bind("click", function(){
        // need to keep sorted blocks layer
        $(location).attr('href',"template.html");
    });
    
    // Move to mainpage.html
    $("#btn-load").bind("click", function(){
        // need to keep sorted blocks layer
        $(location).attr('href',"mainpage.html");
    });

    
    // Move to emotion.html
    $("#btn-save").bind("click", function(){
        // passing information about music to that page.
//        $(location).attr('href',"emotion.html");
        $("#work-layer").stop()
    });
    

    
    $("#btn-prev").bind("click", function () {
        $(".work-layer").css("transform", "translate3d(0px,  0px, 0px)");
    });

    $("#btn-play").bind("click", function () {

        $("#work-layer").stop().animate({
            'left': '-509'
        }, {
            step: function (now, fx) {
                $(".swiper-scrollbar-drag").css({
                    "transform": "translate3d(" + now + "px,  0px, 0px)"
                });
            }
            , duration: 5000
            , easing: 'linear'
            , queue: false
            , complete: function () {
                $("#work-layer").css("left", "0");
                $("#work-layer").css("transform", "translate3d(-509px,  0px, 0px)");
            }
        }, 'linear');


    });

    $(".progress-bar-wrapper").bind("click", function (e) {
        console.log("래퍼 클릭");
        $(".progress-bar-pointer").css("left", e.pageX - 20);
        //        $(".progress-bar-played").css("width", e.pageX - 10);
    });


});