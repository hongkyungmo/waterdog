var parent = null;
var placeHoler = null;
var wrapper = null;
var i = null;
var j = null;
var comparedNoDrop = "simple_with_no_drop";
var comparedWrapper = "swiper-wrapper";
var sortedData = null;
var draggedBlockDataId = null;
var draggedBlock = null;
var draggedBlockSelector = null;
var duration = 500;
var downTime;
var timeout;
var dropFlag;

//'.layer-selector' 보류
var swiperMelodyLayer = new Swiper('.layer-melody-block', {
    scrollbar: '.swiper-scrollbar'
    , scrollbarHide: false
    , scrollbarSnapOnRelease : true
    , slidesPerView: 'auto'
    , spaceBetween: 0
    , grabCursor: false
    , freeMode: true
});

function upEvent(timeoutParam, durationTimeParam, downTimeParam){
	// duration 변수는 composeMusic.js에 정의되어 있음
   var pressTime = new Date().getTime() - downTimeParam;
   if (pressTime < durationTimeParam) {
       // cancel the timeout
       clearTimeout(timeoutParam);
   }
}

var group = $("ol.simple_with_drop").sortable({
    group: 'no-drop'
    , delay:100
    , onMousedown: function ($item, _super, event) {
    	downTime = new Date().getTime();
    	timeout = setTimeout(function() {
    		$('#block-dialog').modal('show');
    		}, duration);
    	return true;    		
    }
    , onDragStart: function ($item, container, _super, event) {
    	clearTimeout(timeout);
    	dropFlag = true;
    	containerParam = container;
    	swiperMelodyLayer.params.allowSwipeToNext = false;
    	swiperMelodyLayer.params.allowSwipeToPrev = false;    	
    	
        // Duplicate items of the no drop area
        parent = $item.parent();
        parent = parent[0].className;
        parent = parent.split(" ");
        if (!container.options.drop)
            $item.clone().insertAfter($item);
        _super($item, container);


        if (parent[0] == comparedNoDrop) {
            draggedBlockDataId = $item[0].attributes[2].nodeValue;
            draggedBlock = null;
            for (j = 0; j < container.el[0].children.length; j++) {
                if (container.el[0].children[j].attributes[2].nodeValue == draggedBlockDataId) {
                    break;
                }
            }
            
            j++;
            draggedBlock = container.el[0].children[j].className;
            draggedBlockSelector = draggedBlock.split(" ");
            draggedBlockSelector = "." + draggedBlockSelector[draggedBlockSelector.length - 1];
            
            // #my-blocks에 새로 생성된 블럭의 데이터를 대입
            $(container.el[0].children[j]).data("key", $($item).data("key"));
            $(container.el[0].children[j]).data("sec", $($item).data("sec"));
            $(container.el[0].children[j]).data("notes", $($item).data("notes"));
            
            // 버튼을 뗄때
            $(container.el[0].children[j]).css("left", "0").css("top", "0").draggable().bind('mouseup touchend', function(){
        		// duration 변수는 composeMusic.js에 정의되어 있음
     		   var pressTime = new Date().getTime() - downTime;
     		   if (pressTime < duration) {
     		       // cancel the timeout
     		       clearTimeout(timeout);
     		   }
            });
        }
    }
    ,onDrag: function ($item, position, _super, event) {    	
    	$item.css(position);  
    	if($('#block-dialog')[0].className.indexOf('in') != -1){
    		dropFlag=false;
    	}
    }
    , onDrop: function ($item, container, _super, event) {
    	
    	swiperMelodyLayer.params.allowSwipeToNext = true;
    	swiperMelodyLayer.params.allowSwipeToPrev = true;    	

        $item.removeClass(container.group.options.draggedClass).removeAttr("style");
        $("body").removeClass(container.group.options.bodyClass);
        if(!dropFlag && parent[0] == comparedNoDrop){
        	$($item).remove();
        }
        
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
	        
	        // 레이어에 있는 블록의 정보를 순서대로 표현하기 위한 부분       
	        // JSON과 Touch-Punch가 충돌 되므로 직접 구현
	        var data = group.sortable("serialize").get();
	        var JSONBlock;
	        sortedData = ""; 
	        for (var k = 0; k < data[0].length; k++) {
	            sortedData += "{\"key\":\"" + data[0][k].key + "\",\"sec\":\"" + data[0][k].sec+ "\",\"notes\":\"" +data[0][k].notes+ "\"}";
	            k != data[0].length-1 ? sortedData += "&" : sortedData += "";	
	        }
	        console.log(sortedData);
    }
});

$("ol.simple_with_no_drop").sortable({
    group: 'no-drop'
    , drop: false
});


$(function () {		
	
	$(".col-xs-10:eq(1)").append(addedMenuBar);
	
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
    	if(sortedData==null){
    		// modal을 띄워서 경고창을 만드세요
    	}else{
    		$(location).attr('href', "MusicEmotion.html?"+sortedData);    		
    	}
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
            , duration: $('#work-layer').data("sec")*1000
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
    });


});

var addedMenuBar = 
    "<div class='row COMPOSE-MENUBAR-ROW'>" + 
        "<div class='col-xs-4 COMMON-MENUBAR-GRID-4' style='padding-left:0px;'>" + 
            "<div class='row COMMON-MENUBAR-ROW'>" + 
                "<div class='col-xs-4 COMMON-MENUBAR-GRID-4'>" + 
                    "<button class='btn COMPOSE-MENUBAR-BTN fa fa-music fa-2x' id='btn-create' aria-hidden='true'>" + 
                    "<i class='fa fa-plus-circle' aria-hidden='true'></i>" + 
                    "</button>" + 
                "</div>" + 
                "<div class='col-xs-4 COMMON-MENUBAR-GRID-4'>" + 
                    "<button class='btn COMPOSE-MENUBAR-BTN fa fa-group fa-2x' id='btn-community'>" +
                    "</button>" + 
                "</div>" + 
            "</div>" + 
        "</div>" + 
        "<div class='col-xs-4 COMMON-MENUBAR-GRID-4'>" + 
            "<div class='row COMMON-MENUBAR-ROW'>" + 
                "<div class='col-xs-4 COMMON-MENUBAR-GRID-4'>" + 
                    "<button class='btn COMPOSE-MENUBAR-BTN fa fa-step-backward fa-2x' data-action='prev' id='btn-prev'>" + 
                    "</button>" + 
                "</div>" + 
                "<div class='col-xs-4 COMMON-MENUBAR-GRID-4'>" + 
                    "<button class='btn COMPOSE-MENUBAR-BTN fa fa-play fa-2x' data-action='play' id='btn-play'>" + 
                    "</button>" + 
                "</div>" + 
            "</div>" + 
        "</div>" + 
        "<div class='col-xs-4 COMMON-MENUBAR-GRID-4' style='padding-right:0px;'>" +
            "<div class='row COMMON-MENUBAR-ROW'>" +  
                "<div class='col-xs-4 COMMON-MENUBAR-GRID-4' style='float:right'>" + 
                    "<button class='btn COMPOSE-MENUBAR-BTN fa fa-save fa-2x' id='btn-save'>" + 
                    "<span></span>" + 
                    "</button>" + 
                "</div>" + 
                "<div class='col-xs-4 COMMON-MENUBAR-GRID-4' style='float:right'>" + 
                    "<button class='btn COMPOSE-MENUBAR-BTN fa fa-folder-open-o fa-2x' id='btn-load'>" + 
                    "<span></span>" + 
                    "</button>" + 
                "</div>" + 
            "</div>" +  
        "</div>" + 
    "</div>";