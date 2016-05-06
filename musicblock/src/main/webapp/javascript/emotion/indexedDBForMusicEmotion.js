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
