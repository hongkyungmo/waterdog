/* indexedDB for emotion */
//variables for IndexedDB
// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

if (!window.indexedDB) {
	window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
}

var request = window.indexedDB.open("musicBlockDB", 2);
var db;

//functions related to IndexedDB
$(function(){
	request.onupgradeneeded = function(event){
		console.log("onupgradeneeded : DB initialized / created");
		db = event.target.result;
		//오브젝트 스토어가 테이블 개념, keyPath가 시퀀스 개념
		store = db.createObjectStore("blockTestTable", {keyPath:"id", autoIncrement: true});
	}

	request.onsuccess = function(event){
		console.log("onsuccess : DB loaded successfully");
		db = event.target.result;
	}

	request.onerror = function(event){
		alert("onerror : " + event.target.error);
	}

	request.onready = function(event){
		console.log("onready");
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
/* end of functions related to IndexedDB */