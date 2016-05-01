/*indexedDB for Compose Music*/

//variables for IndexedDB
var request = window.indexedDB.open("musicBlockDB", 1);
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
		
		getAllBlocks();
	}
	
	request.onerror = function(event){
		console.log("onerror");
	}
	
	request.onready = function(event){
		console.log("onready");
	}
});



function getAllBlocks(){
	var transaction = db.transaction(["blockTestTable"], "readwrite");
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


function deleteBlockById(id){
	var transaction = db.transaction(["blockTestTable"], "readwrite");
	var objectStore = transaction.objectStore("blockTestTable");
	var request = objectStore.delete(id);
	request.onsuccess = function(event){
		console.log("id가 " + id + "인 블럭을 IndexedDB로부터 삭제했습니다.");
	}
}