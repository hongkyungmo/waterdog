
$(function(){
	request.onsuccess = function(event){
		console.log("onsuccess : DB loaded successfully");
		db = event.target.result;
		
		getAllBlocks();
	}
});

function getAllBlocks(){
	var transaction = db.transaction(["musicTable"], "readonly");
	var objectStore = transaction.objectStore("musicTable");
	var request = objectStore.openCursor();
	request.onsuccess = function(event){
		var cursor = event.target.result;
		if(cursor){
			console.log(cursor);
			console.log("key : " + cursor.key);
			console.log("sec : " + cursor.value.musicInfo);
			cursor.continue();
		}
	}
}