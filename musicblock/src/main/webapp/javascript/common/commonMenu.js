/**
 * 공통모듈 : 페이지 로딩시 자동으로 불러내는 메뉴바 추가
 */
// 해당 URI를 가져와서 공통 Module에 넣을 Element를 동적으로 추가
var path = $(location).attr('pathname');



var element = "<div class='row COMMON-MENUBAR-ROW' id='COMMON-MENUBAR'><div class='col-xs-1 COMMON-MENUBAR-GRID-1'>";

if(path != "/mainpage.html"){
    element += "<button type='btn' class='btn COMMON-MENUBAR-BTN' id='back'><span class='glyphicon glyphicon-chevron-left' aria-hidden='true' ></span> </button>";
}

element += "</div><div class='col-xs-10 COMMON-MENUBAR-GRID-10'>";


var addedComposeMusic = "<div class='row COMPOSE-MENUBAR-ROW'><div class='col-xs-4 COMMON-MENUBAR-GRID-4'></div><div class='col-xs-4 COMMON-MENUBAR-GRID-4'><div class='row COMMON-MENUBAR-ROW'><div class='col-xs-4 COMMON-MENUBAR-GRID-4'><button class='btn COMPOSE-MENUBAR-BTN' data-action='prev' id='btn-prev'><span></span></button></div><div class='col-xs-4 COMMON-MENUBAR-GRID-4'><button class='btn COMPOSE-MENUBAR-BTN' data-action='play' id='btn-play'><span></span></button></div><div class='col-xs-4 COMMON-MENUBAR-GRID-4'><button class='btn COMPOSE-MENUBAR-BTN' data-action='next' id='btn-next'><span></span></button></div></div></div><div class='col-xs-4 COMMON-MENUBAR-GRID-4'></div></div>";


if (path.indexOf("/composeMusic.html") != -1) {
    element += addedComposeMusic;
} else {

}

element += "</div><div class='col-xs-1 COMMON-MENUBAR-GRID-1'><button type='button' class='btn COMMON-MENUBAR-BTN' id='menu'><span class='glyphicon glyphicon-menu-hamburger' aria-hidden='true'></span></button></div></div>";


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
