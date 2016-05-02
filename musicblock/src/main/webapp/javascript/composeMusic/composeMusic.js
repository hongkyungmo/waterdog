var parent = null;
var placeHoler = null;
var wrapper = null;
var i = null;
var comparedNoDrop = "simple_with_no_drop";
var comparedWrapper = "swiper-wrapper";
var sortedData = null;
var draggedBlockDataId = null;
var draggedBlock = null;
var draggedBlockSelector = null;

//'.layer-selector' 보류
var swiperMelodyLayer = new Swiper('.layer-melody-block', {
    scrollbar: '.swiper-scrollbar'
    , scrollbarHide: true
    , slidesPerView: 'auto'
    , spaceBetween: 0
    , grabCursor: false
    , freeMode: true
});

var group = $("ol.simple_with_drop").sortable({
    group: 'no-drop'
    , onDragStart: function ($item, container, _super, event) {
        // Duplicate items of the no drop area
        parent = $item.parent();
        parent = parent[0].className;
        parent = parent.split(" ");

        if (!container.options.drop)
            $item.clone().insertAfter($item);
        _super($item, container);
        //        $(".highlight").draggable().css("left", "0").css("top","0");


        // $item의 data-id와 일치한 container의 li를 찾아내도록 작성하시오.
        draggedBlockDataId = $item[0].attributes[2].nodeValue;
        draggedBlock = null;
        for (var j = 0; j < container.el[0].children.length; j++) {
            if (container.el[0].children[j].attributes[2].nodeValue == draggedBlockDataId) {
                draggedBlock = container.el[0].children[j].className;
                draggedBlockSelector = draggedBlock.split(" ");
                draggedBlockSelector = "." + draggedBlockSelector[draggedBlockSelector.length - 1];
                $(container.el[0].children[j]).undelegate().draggable().css("left", "0").css("top", "0");
            }
        }


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


        // JSON과 Touch-Punch가 충돌 되므로 직접 구현
        var data = group.sortable("serialize").get();
        sortedData = "";

        sortedData = "[\n";
        for (var k = 0; k < data[0].length; k++) {
            sortedData += "\t{name:" + "\"" + data[0][k].name + "\",id:\"" + data[0][k].id + "\"}";
            k != data[0].length - 1 ? sortedData += "," : sortedData += "";
            sortedData += "\n";
        }
        sortedData += "]";
        //        console.log(sortedData);

    }

});

$("ol.simple_with_no_drop").sortable({
    group: 'no-drop'
    , drop: false
});

// Allowed to Drag and Drop in Mobile Device
//$(".highlight").delegate();
//draggable();

$('.highlight').delegate(
    $('.highlight').longpress(
        function (e) {
            // 길게 입력할 때
            $('#block-dialog').modal('show');
        }
        , function (e) {
            // 짧게 입력할 때
            console.log('짧게 누름ㅋㅋ');
        }
    )
);

$('.highlight').draggable();





$(function () {
    
    // Move to blockMaking.html for edit
    $("#dialog-edit").bind("click", function () {
        // need to keep sorted blocks layer
        $(location).attr('href', "blockMaking.html");
    });
    
    // Move to blockMaking.html for edit
    $("#dialog-delete").bind("click", function () {
        // need to keep sorted blocks layer
        console.log("블록 지움");
        $('#block-dialog').modal('hide');
    });
    
    // Move to blockMaking.html
    $("#btn-create").bind("click", function () {
        // need to keep sorted blocks layer
        $(location).attr('href', "blockMaking.html");
    });

    // Move to template.html
    $("#btn-community").bind("click", function () {
        // need to keep sorted blocks layer
        $(location).attr('href', "community.html");
    });

    // Move to mainpage.html
    $("#btn-load").bind("click", function () {
        // need to keep sorted blocks layer
        $(location).attr('href', "mainpage.html");
    });


    // Move to emotion.html
    $("#btn-save").bind("click", function () {
        // passing information about music to that page.
        $(location).attr('href', "emotion.html");
        //        $("#work-layer").stop()
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