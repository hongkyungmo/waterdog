/* indexedDB for emotion */
//functions related to IndexedDB
$(function(){
	request.onsuccess = function(event){
		console.log("onsuccess : DB loaded successfully");
		db = event.target.result;
	}
});

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
