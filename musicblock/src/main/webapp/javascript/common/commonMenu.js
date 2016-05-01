/**
 * 공통모듈 : 페이지 로딩시 자동으로 불러내는 메뉴바 추가
 */
// 해당 URI를 가져와서 공통 Module에 넣을 Element를 동적으로 추가
var path = $(location).attr('pathname');



var element = 
	
	"<div id='menuPage' >"
+"<div class='row COMMON-MENUBAR-ROW' id='COMMON-MENUBAR'>"
+"	<div class='col-xs-1 COMMON-MENUBAR-GRID-1'></div>"
+"<div class='col-xs-10 COMMON-MENUBAR-GRID-10'></div>"
+"<div class='col-xs-1 COMMON-MENUBAR-GRID-1'>"
+"	<button type='button'"
+"		class='btn COMMON-MENUBAR-BTN fa fa-remove fa-2x' id='exit'></button>"
+"</div>"
+"</div>"

+"<div id='loginPage'>"

+"<button id='test'>Login</button>"

+"	<div class='ui modal'>"
+"	<i class='close icon'></i>"
+"	<div class='header'>Profile Picture</div>"
+"	<div class='image content'>"

+"			<div class='description'>"
+"			<input type='text' class='input' id='user_login'"
+"				autocomplete='off' placeholder='Email or Username'> <br>"
+"			<input type='password' class='input' id='user_pass'"
+"				autocomplete='off' placeholder='Password'> <br> <input"
+"				type='checkbox' class='checkbox' id='remember_me'> <label"
+"				for='remember_me'>Remember me</label>"
+"		</div>"
+"	</div>"
+"	<div class='actions'>"
+"		<div class='ui black deny button'>login</div>"
+"	</div>"
+"</div>"
+"</div>"
+"</div>"
	
	
	
	
	
	+"<div class='row COMMON-MENUBAR-ROW' id='COMMON-MENUBAR'><div class='col-xs-1 COMMON-MENUBAR-GRID-1'>";

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


if (path.indexOf("/composeMusic.html") != -1) {
    element += addedComposeMusic;
} else {

}

element += "</div><div class='col-xs-1 COMMON-MENUBAR-GRID-1'><button type='button' class='btn COMMON-MENUBAR-BTN fa fa-navicon fa-2x' id='menu'></button></div></div>";


$("body").append(element);

$(function() {

	$("#back").bind("click", function() {
		console.log("뒤로가기 누름ㅋㅋ");
	});

	$("#menu").bind("click", function() {
		console.log("메뉴버튼 누름ㅋㅋ");
		wrapWindowBymenuPage();

	});
	
	$("#exit").bind("click",function(){
		console.log("exit 누름ㅋㅋ");
		$("#menuPage").hide();
	});
	
	$('#test').bind("click",function() {
		console.log("login 누름ㅋㅋ")
		$('.ui.modal').modal('show');
	});
});

function wrapWindowBymenuPage() {
	//화면의 높이와 너비를 구한다.
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	//마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
	$('#menuPage').css({
		'width' : maskWidth,
		'height' : maskHeight,
		'z-index' : 150
	});
	//마스크의 투명도 처리

	$('#menuPage').fadeTo("slow", 1);
}

$(document).ready(function() {
	//wrapWindowBymenuPage();
	//불투명 배경 띄우기
	$('.openmenuPage').click(function(e) {
		e.preventDefault();
		wrapWindowBymenuPage();
	});
});

