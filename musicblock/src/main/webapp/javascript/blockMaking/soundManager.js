//볼륨조절 전역변수
var mainVolume = 0;
var volumeSaver = 2;
//블록 플레이를 위한 변수
var timerIdForPlaying = 0;
var countForPlaying = 0; //clickSequence의 복제품


window.AudioContext = window.AudioContext || window.webkitAudioContext;

//오디오컨텍스트 생성
var audioContext = new AudioContext();

//오실레이터, 게인 생성
//var oscillator = audioContext.createOscillator();
var gain = audioContext.createGain();

var oscArr = new Array();
for(var i=0;i<48;i++){
	oscArr[i] = audioContext.createOscillator();
	oscArr[i].start(0);
}

//오실레이터 설정
/*oscillator.type = 'sine'; //파형의 형태 sine, square, sawtooth, triangle, custom 등
oscillator.frequency.value = 100; //주파수
oscillator.connect(gain); //게인과 연결

//게인 설정
gain.gain.value = mainVolume; //볼륨
gain.connect(audioContext.destination); //데스티네이션(스피커)와 연결

//오실레이터 시작
//oscillator.start();
//gain.disconnect(audioContext.destination);
//oscillator.disconnect(gain);
*/


//건반 클릭
$(function () {
    /*$(".key").mousedown(function () {*/
	$(".key").bind(keyDown, function () {
        var barLevel = 94 - (((octave - 1) * 12 + $(".key").index(this)) * 2);
        noteArr[clickSequence-1] = (octave - 1) * 12 + $(".key").index(this)+1;
    });
});


//notecode(1~48)을 주파수로 변환해주는 함수
var noteCodeToFreq = function (noteVal) {
    return 130.8128 * Math.pow(1.0594630943592952645618252949463, noteVal - 1);
}

//음 코드(1~48)를 넣으면 1초간 음을 연주해주는 함수
var playNote = function (noteVal) {
	oscArr[noteVal].frequency.value = noteCodeToFreq(noteVal);
	
    gain.gain.value = volumeSaver;
    oscArr[noteVal].connect(gain);
    gain.connect(audioContext.destination);
    
    //테스트코드
    console.log(noteVal);
}

var stopNote = function (noteVal){
	if(noteVal != -1.1){
		oscArr[noteVal].disconnect(gain);
	}
}
