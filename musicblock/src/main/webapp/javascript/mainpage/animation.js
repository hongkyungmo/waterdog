var currentPlayingIndex = -1.1; //현재 재생되고 있는 음악의 인덱스(초기값은 -1임. -1인 경우 재생 중인 음악이 없는 것)
var tempElement = null;
//음악 재생 애니메이션
$(function() {
	//재생 시각적 효과
	$(".noteVisualContainer").click(function() {
		//애니메이션 속도
		var barCycleLength = 200;
		//현재 클릭한 엘리먼트의 인덱스
		var currentClickedIndex = $(".noteVisualContainer").index(this);

		//현재 플레이 중인 엘리먼트를 재클릭 : stop명령으로 간주
		if(currentClickedIndex == currentPlayingIndex){
			$(".noteVisualContainer:eq("+currentClickedIndex+") > i").css("visibility", "visible");
			$(".noteVisualContainer:eq("+currentClickedIndex+") > .noteVisualBar").remove();
			currentPlayingIndex = -1.1;
			return;
		}

		//클릭한 엘리먼트의 이미지 숨기기
		$(".noteVisualContainer:eq("+currentClickedIndex+") > i").css("visibility", "hidden");

		//<기존 플레이 되던 엘리먼트 stop>
		/*$(".noteVisualContainer:eq(" + currentPlayingIndex + ")").empty().append(tempElement);*/
		$(".noteVisualContainer:eq("+currentPlayingIndex+") > i").css("visibility", "visible");
		$(".noteVisualContainer:eq("+currentPlayingIndex+") > .noteVisualBar").remove();

		//<현재 클릭한 엘리먼트 play>
		//play animating div 생성
		currentPlayingIndex = $(".noteVisualContainer").index(this);
		$(".noteVisualContainer:eq("+ currentPlayingIndex + ")").append('<div class="noteVisualBar noteVisualOne"></div><div class="noteVisualBar noteVisualTwo"></div><div class="noteVisualBar noteVisualThree"></div><div class="noteVisualBar noteVisualFour"></div><div class="noteVisualBar noteVisualFive"></div><div class="noteVisualBar noteVisualSix"></div><div class="noteVisualBar noteVisualSeven"></div><div class="noteVisualBar noteVisualEight"></div><div class="noteVisualBar noteVisualNine"></div><div class="noteVisualBar noteVisualTen"></div>');

		setInterval(function() {
			var i = 0;

			for (var i = 1; i < 11; i++) {
				var rand = Math.floor((Math.random() * 100) + 1);
				$(".noteVisualContainer:eq("+ currentPlayingIndex+ ")").children(":eq(" + i + ")").animate({
					//실질적인 애니메이션이 들어가는 곳
					//여기서 하고 싶은 것을 하면 됨
					height : rand + "%"
				}, barCycleLength, function() {
					//매 주기가 끝나는 시점에 하고 싶은 것이 있으면 이곳에 기술하면 됨
				});
			}
		}, barCycleLength);
	});




	//indexedDB로부터 값 가져오기 및 소리 재생
	var numOfBlocks=0;
	var blockArr = new Array();

	//쪼개기 전의 raw String
	musicString = "4&1,2,3/6&8,42,36/8&22,7,19,6/8&44,2,7,6/10&22,24,17,26/8&9,6,9,8/2&4,2,3,3/4&2,2,2/6&9,2,8,13/6&3,2,46,23";

	//블럭 단위로 쪼갬
	var blockArr = musicString.split('/');

	//블럭을 초와 노트집합(음집합)로 쪼갬
	var secAndNotesArr = blockArr[0].split('&');

	//0번인덱스 : 초
	//1번인덱스 : 음집합
	//노트집합을 1개의 개별 음으로 쪼갬
	var noteArr = secAndNotesArr[1].split(',');

	for(var i=0;i<blockArr.length;i++){
		secAndNotesArr = blockArr[i].split('&');

		console.log("***"+i+"번블럭***");
		console.log(" 초 : " + secAndNotesArr[0]);
		console.log(" 음집합 : " + secAndNotesArr[1]+"\n\n");
	}





});

$(function() {
	var newMusicBtn = $("#new-music");
	newMusicBtn.click(function() {
		location.href = "composeMusic.html";
	});
});