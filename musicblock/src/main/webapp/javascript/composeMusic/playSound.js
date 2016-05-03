//볼륨조절 전역변수
var mainVolume = 0;
/*var volumeSaver = 2;*/
//블록 플레이를 위한 변수
var timerIdForPlaying = 0;
var countForPlaying = 0;
var blockWalker = 0;
var noteWalker = 0;
var arr = Array();


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



//건반 클릭
$(function () {
    $(".key").mousedown(function () {
        var barLevel = 94 - (((octave - 1) * 12 + $(".key").index(this)) * 2);
        noteArr[clickSequence-1] = (octave - 1) * 12 + $(".key").index(this)+1;
    });
});


//notecode(1~48)을 주파수로 변환해주는 함수
var noteCodeToFreq = function (noteVal) {
    return 130.8128 * Math.pow(1.0594630943592952645618252949463, noteVal - 1);
}

//음 코드(1~48)를 넣으면 음을 연주해주는 함수
var playNote = function (noteVal) {
    oscillator.frequency.value = noteVal;
    
    gain.gain.value = mainVolume;
    /*setTimeout(function () {
        oscillator.connect(gain);
        oscillator.disconnect(gain);
        //gain.gain.value=0;
    }, 1000);*/
    //테스트코드
    console.log(noteVal);
}

//play버튼 눌러서 블럭 연주
$(function () {
	// 블럭연주 - 음
	$("#btn-play").click(playAllBlocks);
	$("#btn-play").bind("click", function () {

	});
});

var playAllBlocks = function() {
	blockWalker = 0;
	playOneBlock();
}

var playOneBlock = function () {
	if (true) {
		var count = 0;
		var blockSec = 0;
		//my-blocks -> work-layer로 변경해야 함(현재는 data가 my-blocks에 들어있는 상태)
		//notes 저장
		
		/*블럭 단위 반복 시작*/
		arr = $("#my-blocks > li:eq("+blockWalker+")").data("notes").split(",");
		blockSec =$("#my-blocks > li:eq("+blockWalker+")").data("sec");
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
		/*블럭 단위 반복 종료*/
	}
}