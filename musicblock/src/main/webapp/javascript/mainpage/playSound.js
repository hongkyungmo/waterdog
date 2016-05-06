/*//볼륨조절 전역변수
var mainVolume = 0;
var volumeSaver = 2;
//블록 플레이를 위한 변수
var timerIdForPlaying = 0;
var countForPlaying = 0;
var blockWalker = 0;
var noteWalker = 0;
var arr = new Array();
var blockArr = new Array();
var secAndNotesArr=0;
var noteArr=0;
var isPlaying = false;



window.AudioContext = window.AudioContext || window.webkitAudioContext;

//오디오컨텍스트 생성
var audioContext = new AudioContext();

//오실레이터, 게인 생성
var oscillator = audioContext.createOscillator();
var gain = audioContext.createGain();

//오실레이터 설정
oscillator.type = 'sine'; //파형의 형태 sine, square, sawtooth, triangle, custom 등
oscillator.frequency.value = 300; //주파수
oscillator.connect(gain); //게인과 연결

//게인 설정
gain.gain.value = mainVolume; //볼륨
gain.connect(audioContext.destination); //데스티네이션(스피커)와 연결

//오실레이터 시작
oscillator.start();
//gain.disconnect(audioContext.destination);
//oscillator.disconnect(gain);



//notecode(1~48)을 주파수로 변환해주는 함수
var noteCodeToFreq = function (noteVal) {
    return 130.8128 * Math.pow(1.0594630943592952645618252949463, noteVal - 1);
}

//음 코드(1~48)를 넣으면 음을 연주해주는 함수
var playNote = function (noteVal) {
    oscillator.frequency.value = noteVal;
    
    gain.gain.value = mainVolume;
    setTimeout(function () {
        oscillator.connect(gain);
        oscillator.disconnect(gain);
        //gain.gain.value=0;
    }, 1000);
    //테스트코드
    console.log(noteVal);
}

//play버튼 눌러서 블럭 연주
$(function () {
	//indexedDB로부터 값 가져오기 및 소리 재생
	var numOfBlocks=0;
	

	//쪼개기 전의 raw String
	//musicString = "4&1,2,3/6&8,42,36/8&22,7,19,6/8&44,2,7,6/10&22,24,17,26/8&9,6,9,8/2&4,2,3,3/4&2,2,2/6&9,2,8,13/6&3,2,46,23";
	musicString = "1&1,2,3/1&11,12,13";
	
	//블럭 단위로 쪼갬
	blockArr = musicString.split('/');
	
	// 블럭연주 - 음
	$(".noteVisualContainer").click(function() {//플레이
		var currentClickedIndex = $(".noteVisualContainer").index(this);
		console.log(currentClickedIndex);
		if(isPlaying == false){
			isPlaying = true;
		}else{//정지
			isPlaying = false;
			//인터벌 타이머 종료
			clearInterval(timerIdForPlaying);
			//볼륨 초기화
			mainVolume = 0;
			gain.gain.value = mainVolume;
			//블럭, 노트순회자 초기화
			blockWalker = 0;
			noteWalker = 0;
			return;
		}
		
		blockWalker = 0;
		
		//블럭을 초와 노트집합(음집합)로 쪼갬
		secAndNotesArr = blockArr[0].split('&');

		//0번인덱스 : 초
		//1번인덱스 : 음집합
		//노트집합을 1개의 개별 음으로 쪼갬
		noteArr = secAndNotesArr[1].split(',');
		
		//테스트코드
		for(var i=0;i<blockArr.length;i++){
			secAndNotesArr = blockArr[i].split('&');

			console.log("***"+i+"번블럭***");
			console.log(" 초 : " + secAndNotesArr[0]);
			console.log(" 음집합 : " + secAndNotesArr[1]+"\n\n");
		}
		
		
		playOneBlock();
	});
});

//var playAllBlocks = 

var playOneBlock = function () {
	//blockWalker:블럭순회자 //블럭의 갯수만큼 재귀적 반복 시행
	if (blockWalker != blockArr.length) {
		secAndNotesArr = blockArr[blockWalker].split('&');
		var count = 0;
		var blockSec = 0;
		//my-blocks -> work-layer로 변경해야 함(현재는 data가 my-blocks에 들어있는 상태)
		//notes 저장
		
		블럭 단위 반복 시작
		arr = secAndNotesArr[1].split(",");
		blockSec =secAndNotesArr[0];
		mainVolume = 2;
		playNote(noteCodeToFreq(arr[noteWalker]));
		
		countForPlaying = arr.length;
		timerIdForPlaying = setInterval(function(){
			noteWalker++;
			if(noteWalker == countForPlaying){
				clearInterval(timerIdForPlaying);
				mainVolume = 0;
				gain.gain.value = mainVolume;
				noteWalker = 0;
				blockWalker++;
				playOneBlock();
			}
			playNote(noteCodeToFreq(arr[noteWalker]));
			
		}, (blockSec*1000)/countForPlaying);
		블럭 단위 반복 종료
	}else{
		$(".noteVisualContainer").trigger("click");
	}
}*/




