var i=0;
var kind=new Array('yellow','red','violet','orange','blue');

function addBlock(){
	var transaction = db.transaction(["blockTable"], "readwrite");
	var objectStore = transaction.objectStore("blockTable");
	var transInfo=(location.href.substr(location.href.lastIndexOf('=') + 1)).split("?");
	var transSec=transInfo[0];
	var transNote=transInfo[1];
	if(transSec!=null && 
			transSec!=undefined && 
			transSec!="" && 
			transNote!=null && 
			transNote!=undefined && 
			transNote!=""){
		request = objectStore.add({sec:transSec,notes:transNote});
		request.onsuccess = function(event){
			console.log("IndexedDB에 음악블럭 성공적으로 저장했습니다.");
			getAllBlocks();
		};
	}else{
		console.log("초 또는 음이 입력되지 않아서 IndexedDB에 저장되지 않았습니다.");
	}
}

function getAllBlocks(){
	var transaction = db.transaction(["blockTable"], "readonly");
	var objectStore = transaction.objectStore("blockTable");
	var request = objectStore.openCursor();
	request.onsuccess = function(event){
		var cursor = event.target.result;
		if(cursor){
			console.log(cursor);
			console.log("key : " + cursor.key);
			console.log("sec : " + cursor.value.sec);
			console.log("notes : " + cursor.value.notes);
			cursor.continue();
		}
	}
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
		
		//localStorage -> IndexedDB로 변경(이유 테이블 및 시퀀스 존재 유무 때문)
		//IndexedDB
		addBlock();
	}
};//end of validation check


//Save to Server&Local
function sendServer(transfEmotion){
	var transInfo=(location.href.substr(location.href.lastIndexOf('=') + 1)).split("?");
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


$(function(){
	request.onsuccess = function(event){
		console.log("onsuccess : DB loaded successfully");
		db = event.target.result;
	}
	
	//emotion check function
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

