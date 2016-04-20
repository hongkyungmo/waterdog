/**
 * 공통모듈 : 페이지 로딩시 자동으로 불러내는 메뉴바 추가
 */

$("body").append("<div id='menu-container'><span class = 'glyphicon glyphicon-chevron-left fa-2x' aria-hidden = 'true' id='back'></span><span class='glyphicon glyphicon-menu-hamburger' aria-hidden='true' id='menu'></span></div>");

//menu
$(function () {
    $("#menu").bind("mousedown", function () {
        if ($(".menu-on").length > 0) {
            $(".menu-on").addClass("menu-off");
            $(".menu-on").removeClass("menu-on");
        } else {
            $(".menu-off").addClass("menu-on");
            $(".menu-off").removeClass("menu-off");
            /*$("body").append('<div style="height:92%;width:80%;background-color:gray;position:absolute;left:0%;top:8%;z-index:1000;opacity:0.7">zzzz</div>');*/
        }
    });
});