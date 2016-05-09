/* indexedDB for emotion */
//functions related to IndexedDB
var i=0;
var kind=new Array('yellow','red','violet','orange','blue');
var blockInformation;

function addMusic(){
	var transaction = db.transaction(["musicTable"], "readwrite");
	var objectStore = transaction.objectStore("musicTable");
	//var musicStr=(location.href.substr(location.href.lastIndexOf('=') + 1)).split("?");
	var musicStr="1&42,33,34/1&41,27,46";
	if(musicStr!=null && musicStr!=undefined && musicStr!=""){
		request = objectStore.add({musicInfo:musicStr});
		request.onsuccess = function(event){
			console.log("IndexedDB에 음악을 성공적으로 저장했습니다.");
			getAllMusics();
		};
	}else{
		console.log("musicStr이 입력되지 않아서 IndexedDB에 저장되지 않았습니다.");
	}
}


function dummyAddMusic(){
	var transaction = db.transaction(["musicTable"], "readwrite");
	var objectStore = transaction.objectStore("musicTable");
	
	var musicArr = new Array();
	musicArr[0]="1&42,33,34/1&41,27,46";
	musicArr[1]="1&2,3,4/1&4,2,4";
	musicArr[2]="1&2,23,14/1&4,7,6";
	musicArr[3]="1&11,31,14/1&4,27,24";
	musicArr[4]="1&22,42,24/1&41,27,46";
	musicArr[5]="1&33,33,3/1&1,27,16";
	musicArr[6]="1&44,24,44/1&11,28,26";
	musicArr[7]="1&13,21,1/1&43,33,36";
	musicArr[8]="1&22,12,24/1&11,2,46";
	musicArr[9]="1&31,13,3/1&21,7,6";
	
	var musicTitleArr = new Array();
	musicTitleArr[0] = "외로워서그래(Feat.넉살)";
	musicTitleArr[1] = "CHEER UP";
	musicTitleArr[2] = "RE-BYE";
	musicTitleArr[3] = "우아해";
	musicTitleArr[4] = "하늘바라기(Feat.하림)";
	musicTitleArr[5] = "내입술 따뜻한 커피처럼";
	musicTitleArr[6] = "사람들이 움직이는 게";
	musicTitleArr[7] = "Toy";
	musicTitleArr[8] = "이 사랑";
	musicTitleArr[9] = "You Are My Everything";
	
	for(var i=0;i<10;i++){
		request = objectStore.add({musicInfo:musicArr[i], musicTitle:musicTitleArr[i]});
		request.onsuccess = function(event){
			console.log("IndexedDB에 음악을 성공적으로 저장했습니다.");
			getAllMusics();
		};
		
		//localStorage에 저장한 갯수 저장
		if(localStorage.getItem("numOfMusics") == null){
			localStorage.setItem("numOfMusics", "0");
		}
		var numOfMusics = localStorage.getItem("numOfMusics");
		numOfMusics++;
		localStorage.setItem("numOfMusics", numOfMusics);
	}
}


function getAllMusics(){
	var transaction = db.transaction(["musicTable"], "readonly");
	var objectStore = transaction.objectStore("musicTable");
	var request = objectStore.openCursor();
	request.onsuccess = function(event){
		var cursor = event.target.result;
		if(cursor){
			console.log(cursor);
			cursor.continue();
		}
	}
}




//Save to Server&Local
function sendServer(transfEmotion){
	
	var transInfo=(location.href.substr(location.href.lastIndexOf('=') + 1)).split("?");
	
	var dummyNote ="도1,레2,레2";
	//"미2,레#2,솔1,파#4,라3";
	var dummyTag = "김은혜시코드,KimEunHyeshCode,김은혜씨코드,KimEunHashCode";
	var dummyEmotion = "3";
	var dummyTitle="경모쨔응";
	
	var transSec=transInfo[0];
	var transNote=transInfo[1];
	var transTag= (document.getElementById("tag")).value;
	var transTitle=(document.getElementById("title")).value;

	$.ajax({ //$.post(), $.get(), $.getJSON 등도 있음
		url : 'block/blockSave',
		type : 'POST', //Request하는 방식.
		data : JSON.stringify({ //JSON.stringify를 해줘야 제대로 된 형태의 JSON이 날아감
			emotion : transfEmotion,
			note : transNote,
			sec : transSec,
			tag : transTag,
			title : transTitle
		}),
		dataType : "json", //Response로 오는 방식. Request 타입을 지정하는 것으로 착각하기 쉬우므로 주의.
		contentType : 'application/json;charset=UTF-8', //POST방식일 때 사용. 인코딩 안해주면 한글 깨져서 전송됨
		success : function(data, status) {
			console.log(status);
			console.log("JSONData : "
					+ JSON.stringify(data));
			/*$("body").append("<div id='save-popup'><div id='popup-btn1'>1</div><div id='popup-btn2'>2</div><div style='top:40%;position:relative;'><font size='1px' color='red'>"+JSON.stringify(data)+"</font></div></div>");*/
			$("body")
					.append(
							"<div id='save-popup'><center><br>성공적으로 전송되었습니다</center><div id='popup-btn1'><center>블럭 추가</center></div><div id='popup-btn2'><center>작곡 화면<br>(3초 후 자동 이동)</center></div></div>");
			$("#popup-btn1").click(function() {
				$("#save-popup").remove();
				location.href = "blockMaking.html";
			});
			$("#popup-btn2").click(function() {
				$("#save-popup").remove();
				location.href = "composeMusic.html";
			});
			$("#save-popup")
					.delay(3000)
					.fadeOut(
							500,
							function() {
								$("#save-popup")
										.remove();
								location.href = "composeMusic.html";
							});
		},
		error : function(status) {
			console.log(status);
		}
	});
}



//validation check
function fncValidate(){
	
	var eCount=0;
	var upload=document.getElementById("check");
	
	var emotion=new Array;
	
	for(i=0;i<kind.length;i++){
		emotion[i]=$("#icon"+i).attr('src');
	}		
	
	for(i=0;i<kind.length;i++){
		if(emotion[i]=='images/smile_'+kind[i]+'_clicked.png'){
			eCount++;
			emotion[i]='that';
		}
	}
	
	if(eCount==0){
		alert("감정은 필수 사항입니다.");//수정
	}else{
		if(upload.checked){
			sendServer(emotion);
		}
		
		//IndexedDB
		//addMusic();
		dummyAddMusic(); // 실제로 음악을 저장하는 것이 연결되면 위의 addMusic()으로 변경해야 함. 우선은 더미 데이터를 저장.
	}
};//end of validation check



//emotion check function
$(function() {
	request.onsuccess = function(event){
		console.log("onsuccess : DB loaded successfully");
		db = event.target.result;
	}
	
	// uri가 해당 페이지로 넘어 올 때, query string에 있는 double quotation이 encoding되므로 decodeURIComponent를 이용해 복호화 해준다.
	var url = decodeURIComponent(location.href);
	var indexOfQuestionMark = url.indexOf("?");
	
	// Query String의 CSV를 이용하여 블럭의 정보들을 배열로 분해한다.
	var uri = url.substr(indexOfQuestionMark+1,url.length);
	blockInformation = uri.split("&");
	
	// 해당 Query String을 JSON으로 변환한다.
	for(var i = 0 ; i < blockInformation.length ; i ++){
		blockInformation[i] = jQuery.parseJSON(blockInformation[i]);
	}
	
	
	var emotion = $('.icon');
	$(document).on('click', '.icon', function(){
		var checkIcon = $(this).attr('src');
		
		for(i=0;i<kind.length;i++){
			if(checkIcon=='images/smile_'+kind[i]+'.png'){
				$(this).attr('src', 'images/smile_'+kind[i]+'_clicked.png');
			}else if(checkIcon=='images/smile_'+kind[i]+'_clicked.png'){
				$(this).attr('src', 'images/smile_'+kind[i]+'.png');
			}
		}
	});
});
		


// auto complete function
/* $(function() {
	var availableTags = [ "happy"

	, "happiness"

	, "hello" ];
	$("#tag").autocomplete({
		source : availableTags
	});
}); */
//auto complete 수정
