// play버튼 눌러서 블럭 연주
$(function () {
	// 블럭연주 - 음
	$("#play").bind(keyDown, function () {
		if ($("#display-bar").length == 1) {
			var count = 0;
			if (clickSequence != 0) {
				countForPlaying = clickSequence;
				console.log(noteCodeToFreq(noteArr[clickSequence - countForPlaying]));
				playNote(noteCodeToFreq(noteArr[clickSequence - countForPlaying]));
				timerIdForPlaying = setInterval(function () {
					//playNote(noteCodeToFreq(13));
					countForPlaying--;
					console.log(countForPlaying);
					if (noteArr[clickSequence - countForPlaying] != undefined) {
						playNote(noteCodeToFreq(noteArr[clickSequence - countForPlaying]));
					}
					if (countForPlaying == 0) {
						//alert("end!!");
						clearInterval(timerIdForPlaying);
						mainVolume = 0;
						gain.gain.value = mainVolume;
					}
				}, blockAnimateTime / clickSequence);
			}
		}
	});

	$("#play").bind(keyUp, function () {

	});
});


$(function () {
	$("#play").bind(keyDown, function () {
		if ($("#display-bar").length == 0) {
			/*alert($("#display-bar").length);
			alert("timerId : " + timerIdForPlaying);*/
			clearInterval(timerIdForPlaying);
			mainVolume = 0;
			gain.gain.value = mainVolume;
		}
	});
});