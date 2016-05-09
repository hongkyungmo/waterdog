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

+"<center>"
+"<button id='test' class='customButton'>Login</button>"
+"<br>"
+"<button id='test3' class='customButton'>BlockList</button>"
+"<button id='test4' class='customButton'>MusicList</button>"
+"<button id='test5' class='customButton'>Community</button>"
+"<br>"
+"<button id='test6' class='customButton'>사용설명서</button>"
+"<button id='test7' class='customButton'>설정</button>"
+"<button id='test8' class='customButton'>기타</button>"
+"</center>"

+"	<div class='ui modal'>"
+"	<i class='close icon'></i>"
+"	<div class='header'>Profile Picture</div>"
+"	<div class='image content'>"

+"			<div class='description'>"
+"			<input type='text' class='input' id='user_login'"
+"				autocomplete='off' placeholder='Email or Nickname'> <br>"
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

/*var addCommunity=
		"<div class='row COMMON-MENUBAR-ROW' id='COMMON-MENUBAR'>" +
    		"<div class='col-xs-1 COMMON-MENUBAR-GRID-1' style='float:right'>" + 
    		 "<button class='btn COMPOSE-MENUBAR-BTN fa fa-search fa-2x' id='btn-search'>" + 
                "<button class='btn COMPOSE-MENUBAR-BTN fa fa-search fa-2x' id='btn-search'>" + 
                "<span></span>" + 
                "</button>" + 
            "</div>" + 
           "</div>";
           */

if (path.indexOf("/composeMusic.html") != -1) {
//    element += addedComposeMusic;
}else if(path.indexOf("/community.html") != -1) {
	//element += addCommunity;
}

element += "</div><div class='col-xs-1 COMMON-MENUBAR-GRID-1'><button type='button' class='btn COMMON-MENUBAR-BTN fa fa-navicon fa-2x' id='menu'></button></div></div>";


$("body").append(element);

$(function() {

	$("#back").bind("click", function() {
		history.back();
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

$(function() {

	$(".actions").bind("click", function() {
		console.log("login 확인ㅋㅋ");
		serverLogin();
	});
});

function serverLogin() {

	console.log('serverLogin() ');

	var dummyUser = 'email1@naver.com';
	var dummyPass = '1234';
	var dummyRmember = (document.getElementById("remember_me")).checked;

	var transUser = (document.getElementById("user_login")).value;
	var transPass = (document.getElementById("user_pass")).value;
	var transRmemember = (document.getElementById("remember_me")).checked;

	$
			.ajax({ //$.post(), $.get(), $.getJSON 등도 있음
				url : 'user/userLogin',
				type : 'POST', //Request하는 방식.
				data : JSON.stringify({ //JSON.stringify를 해줘야 제대로 된 형태의 JSON이 날아감
					user : transUser,
					pass : transPass,
					remember : transRmemember
				}),
				dataType : "json", //Response로 오는 방식. Request 타입을 지정하는 것으로 착각하기 쉬우므로 주의.
				contentType : 'application/json;charset=UTF-8', //POST방식일 때 사용. 인코딩 안해주면 한글 깨져서 전송됨
				success : function(data, status) {
					console.log(status);
					console.log("JSONData : " + JSON.stringify(data));
					if (data['message'] != null) {

						console.log()
						$("#loginPage")
								.append(
										"<div id='save-popup'><center>"+data['message']+"</center></div>");
					} else {

						console.log(data['message']);
						$("#loginPage")
						.append(
								"<div id='save-popup'><center>"+data['message']+"</center></div>");
			
					}
				},
				error : function(status) {
					console.log(status);
				}
			});
};