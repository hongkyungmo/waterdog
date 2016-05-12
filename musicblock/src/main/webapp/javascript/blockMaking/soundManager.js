//블록 플레이를 위한 변수
var timerIdForPlaying = 0;
var countForPlaying = 0; //clickSequence의 복제품

//음 길이
var length = 5;

//오디오 및 사운드 보조파트 생성
var audio = new Audio();
var context = new AudioContext();
var analyser = context.createAnalyser();
var source = context.createMediaElementSource(audio);
var gain = context.createGain();

//건반 클릭
$(function () {
	$(".key").bind(keyDown, function () {
        var barLevel = 94 - (((octave - 1) * 12 + $(".key").index(this)) * 2);
        noteArr[clickSequence-1] = (octave - 1) * 12 + $(".key").index(this)+1;
    });
});

//공백 건반 클릭
$(function () {
	$("#space-key").bind(keyDown, function () {
        noteArr[clickSequence-1] = 0;
    });
});

//음 코드(1~48)를 넣으면 1초간 음을 연주해주는 함수
var playNote = function (noteVal) {
	if(noteVal==0){
		return;
	}
	//음 연주
	audio.src = 'notes/'+noteVal+'.mp3';
	audio.controls = true;
	audio.autoplay = true;
	gain.gain.value = 2;
	
	source.connect(analyser);
	analyser.connect(gain);
	gain.connect(context.destination);
	console.log(noteVal);
}

var stopNote = function (noteVal){
}
