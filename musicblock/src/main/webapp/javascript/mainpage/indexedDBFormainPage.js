
var numOfGotMusics = 0;
var numOfMusics = 0;

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
	
	numOfMusics = localStorage.getItem("numOfMusics");
	
	request.onsuccess = function(event){
		var cursor = event.target.result;
		if(cursor){
			console.log(cursor);
			console.log("key : " + cursor.key);
			console.log("sec : " + cursor.value.musicInfo);
			
			displayOneMusic(cursor.value.musicInfo);
			numOfGotMusics++;
			if(numOfGotMusics==numOfMusics){
				var swiper = new Swiper('.swiper-container', {
					
					slidesPerView : 4,
					paginationClickable : true,
					spaceBetween : 0,
					freeMode : true
				});
			}
			cursor.continue();
			
		}
	}
}

function displayOneMusic(musicInfo){
	console.log(musicInfo);
	var item = "<div class='swiper-slide'>"
		+"<div class='ui blue button music'>"
			+"<div class='noteVisualContainer'>"
				+"<i class='fa fa-music fa-3x' id='playing' style='color:#cc4488;'></i>"
			+"</div>"
			+"<div class='music-name'>"+musicInfo+"</div>"
		+"</div>"
	+"</div>";
	$(".swiper-wrapper").append(item);
}