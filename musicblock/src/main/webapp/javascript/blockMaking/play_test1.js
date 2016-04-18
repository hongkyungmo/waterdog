var c = new webkitAudioContext();

var o;
var g;

//notecode(1~48)을 주파수로 변환해주는 함수
var noteCodeToFreq = function(noteVal){
    return 130.8128 * Math.pow(1.0594630943592952645618252949463, noteVal-1);
}

// play버튼 눌러서 블럭 연주
$(function() {
	$("#play").bind("mousedown", function() {
		
	});

	// 블럭연주 - 음
	$("#play").bind(
			"mousedown",
			function() {
				var count = 0;
				if (clickSequence != 0) {
					console.log(noteCodeToFreq(3));
					console.log(noteCodeToFreq(4));
					console.log(noteCodeToFreq(23));
					console.log(noteCodeToFreq(12));
					console.log(noteCodeToFreq(32));
					console.log(noteCodeToFreq(14));
					console.log(noteCodeToFreq(18));
					console.log(noteCodeToFreq(29));
				}
			});

	$("#play").bind("mouseup", function() {
		
	});
});