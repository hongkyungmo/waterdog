/*indexedDB for Compose Music*/

var blockNum = 0;

var repo = $(".people");
/*<a href="javascript:fncValidate();" id="save">Save</a>*/


// functions related to IndexedDB
function fnc() {
	alert("fnc함수불러옴");
    request.onsuccess = function (event) {
    	alert();
    	console.log("indexedDB onsuccess : DB loaded successfully");
        db = event.target.result;	//DB로드 성공하면 키를 반환
       // getAllBlocks();
        addBlock();
    }
};

//1.다운버튼을 클릭하면 
//2.서버로부터 받아온 정보들을 IndexedDB로 저장.

function addBlock(){
	alert("addBlock");
	var transaction = db.transaction(["blockTable"], "readwrite");
	var objectStore = transaction.objectStore("blockTable");
	var transSec = 4;
	var transNote = 15;
	if(transSec!=null && 
	transSec!=undefined && 
	transSec!="" && 
	transNote!=null && 
	transNote!=undefined && 
	transNote!=""){
		request = objectStore.add({sec:transSec,notes:transNote});
		request.onsuccess = function(event){
			console.log("IndexedDB에 블럭 성공적으로 저장했습니다.");
			getAllBlocks();
		};
	}
	else{
		console.log("값 받아오기 실패");
	}
}

function getAllBlocks(){
	var transaction = db.transaction(["blockTable"], "readonly");
	var objectStore = transaction.objectStore("blockTable");
	var request = objectStore.openCursor();	//인덱스를 통해 데이터를 검색하기위해 openCursor()사용.  데이터를 순서대로 검색하고, 해당하는 데이터에 대해 참조, 갱신, 제거 등의 처리를 수행
	request.onsuccess = function(event){	//데이터 검색이 성공하면 success이벤트가 트리거
		var cursor = event.target.result;
		if(cursor){
			console.log(cursor);
			console.log("key : " + cursor.key);
			console.log("sec : " + cursor.value.sec);
			console.log("notes : " + cursor.value.notes);
			cursor.continue();			//다음 데이터를 검색하고, 데이터 검색이 성공할 때 또 success이벤트가 트리거.
		}
	}
}


function deleteBlockById(id) {
    var transaction = db.transaction(["blockTable"], "readwrite");
    var objectStore = transaction.objectStore("blockTable");
    var request = objectStore.delete(id);
    request.onsuccess = function (event) {
        console.log("id가 " + id + "인 블럭을 IndexedDB로부터 삭제했습니다.");
    }
}