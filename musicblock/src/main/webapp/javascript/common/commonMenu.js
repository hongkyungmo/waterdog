/**
 * 공통모듈 : 페이지 로딩시 자동으로 불러내는 메뉴바 추가
 */
// 해당 URI를 가져와서 공통 Module에 넣을 Element를 동적으로 추가
var path = $(location).attr('pathname');



var element = "<div class='row COMMON-MENUBAR-ROW' id='COMMON-MENUBAR'><div class='col-xs-1 COMMON-MENUBAR-GRID-1'>";

if(path != "/mainpage.html"){
    element += "<button type='btn' class='btn COMMON-MENUBAR-BTN fa fa-chevron-left fa-2x' id='back'></button>";
}

element += "</div><div class='col-xs-10 COMMON-MENUBAR-GRID-10'>";

// composeMusic.html에만 적용되는 MenuBar 버튼 추가
var addedComposeMusic = 
    "<div class='row COMPOSE-MENUBAR-ROW'>" + 
        "<div class='col-xs-4 COMMON-MENUBAR-GRID-4' style='padding-left:0px;'>" + 
            "<div class='row COMMON-MENUBAR-ROW'>" + 
                "<div class='col-xs-4 COMMON-MENUBAR-GRID-4'>" + 
                    "<button class='btn COMPOSE-MENUBAR-BTN fa fa-music fa-2x' id='btn-create' aria-hidden='true'>" + 
                    "<i class='fa fa-plus-circle' aria-hidden='true'></i>" + 
                    "</button>" + 
                "</div>" + 
                "<div class='col-xs-4 COMMON-MENUBAR-GRID-4'>" + 
                    "<button class='btn COMPOSE-MENUBAR-BTN fa fa-group fa-2x'' id='btn-community'>" +
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
                    "<button class='btn COMPOSE-MENUBAR-BTN fa fa-save fa-2x' id='btn-community'>" + 
                    "<span></span>" + 
                    "</button>" + 
                "</div>" + 
                "<div class='col-xs-4 COMMON-MENUBAR-GRID-4' style='float:right'>" + 
                    "<button class='btn COMPOSE-MENUBAR-BTN fa fa-folder-open-o fa-2x' id='btn-community'>" + 
                    "<span></span>" + 
                    "</button>" + 
                "</div>" + 
            "</div>" +  
        "</div>" + 
    "</div>";


if (path.indexOf("/composeMusic.html") != -1) {
    element += addedComposeMusic;
} else {

}

element += "</div><div class='col-xs-1 COMMON-MENUBAR-GRID-1'><button type='button' class='btn COMMON-MENUBAR-BTN fa fa-navicon fa-2x' id='menu'></button></div></div>";


$("body").append(element);

$(function () {

    $("#back").bind("click", function () {
    	console.log("뒤로가기 누름ㅋㅋ");
    });
    
    // Menu 버튼으로 Navigation 활성
    $("#menu").bind("click", function () {
    	console.log("메뉴버튼 누름ㅋㅋ");
    	if ($(".menu-on").length > 0) {
    		$(".menu-on").addClass("menu-off");
    		$(".menu-on").removeClass("menu-on");
    	} else {
    		$(".menu-off").addClass("menu-on");
    		$(".menu-off").removeClass("menu-off");
    		/*
    		 * $("body").append('<div
    		 * style="height:92%;width:80%;background-color:gray;position:absolute;left:0%;top:8%;z-index:1000;opacity:0.7">zzzz</div>');
    		 */
    	}
    });
});
