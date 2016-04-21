/**
 * 공통모듈 : 페이지 로딩시 자동으로 불러내는 메뉴바 추가
 */
// 해당 URI를 가져와서 공통 Module에 넣을 Element를 동적으로 추가
var path = $(location).attr('pathname');

var element = "<div class='row' id='menu-container'><div class='col-xs-1'><button type='btn' class='btn'><span class='glyphicon glyphicon-chevron-left' aria-hidden='true' id='back'></span> </button></div><div class='col-xs-10'><div class='row'><div class='col-xs-4'></div><div class='col-xs-4'>";



var addedComposeMusic = "<div class='row'><div class='col-xs-4'><button class='btn' data-action='prev' id='btn-prev'><span></span></button></div><div class='col-xs-4'><button class='btn' data-action='play' id='btn-play'><span></span></button></div><div class='col-xs-4'><button class='btn' data-action='next' id='btn-next'><span></span></button></div></div>";

if (path == "/composeMusic.html") {
    element += addedComposeMusic;
} else {

}

element += "</div><div class='col-xs-4'></div></div></div><div class='col-xs-1'><button type='button' class='btn'><span class='glyphicon glyphicon-menu-hamburger' aria-hidden='true' id='back'></span></button></div></div>";


$("body").append(element);

$(function () {

    // Menu 버튼으로 Navigation 활성
    $("#menu").bind("mousedown", function () {
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
