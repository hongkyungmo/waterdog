
$(function(){
	request.onsuccess = function(event){
		console.log("onsuccess : DB loaded successfully");
		db = event.target.result;
	}
});

function addBlock(){
	var transaction = db.transaction(["blockTestTable"], "readwrite");
	var objectStore = transaction.objectStore("blockTestTable");
	var transInfo=(location.href.substr(location.href.lastIndexOf('=') + 1)).split("?");
	var transSec=transInfo[0];
	var transNote=transInfo[1];
	if(transSec!=null && transSec!=undefined && transSec!=""
		&& transNote!=null && transNote!=undefined && transNote!=""){
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
	var transaction = db.transaction(["blockTestTable"], "readonly");
	var objectStore = transaction.objectStore("blockTestTable");
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