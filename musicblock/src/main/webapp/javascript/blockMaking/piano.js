//음 코드(1~48)를 넣으면 1초간 음을 연주해주는 함수
var playNote = function (noteVal) {
    oscillator.frequency.value = noteVal;
    oscillator.connect(gain);
    /*setTimeout(function () {
        oscillator.connect(gain);
        oscillator.disconnect(gain);
    }, 1000);*/
    //테스트코드
    console.log(noteVal);
}


$(function() {
	$(".key").bind("mousedown", function() {
		var index_of_key = $(".key").index(this);
        
        var noteCodeForPlayNote = index_of_key + 12 * (octave-1);
		switch (index_of_key) {
		case 0:
			//play(261.6256, octave_for_play);
			playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 1:
			//play(293.6648, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 2:
			//play(329.6276, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 3:
			//play(349.2282, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 4:
			//play(391.9954, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 5:
			//play(440, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 6:
			//play(493.8833, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 7:
			//play(277.1826, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 8:
			//play(311.1270, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 9:
			//play(369.9944, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 10:
			//play(415.3047, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		case 11:
			//play(466.1638, octave_for_play);
            playNote(noteCodeToFreq(noteCodeForPlayNote));
			break;
		}
	});
});

$(function() {
	$(".key").bind("mouseup", function() {
		//oscillator.stop();
        oscillator.disconnect(gain);
	});
});

function play(freq, octave_for_play) {
	freq = freq
			* Math.pow(1.0594630943592952645618252949463, 12 * octave_for_play);
	oscillator = audioContext.createOscillator();
	gain = audioContext.createGain();
	oscillator.type = 'sine';

	gain.connect(audioContext.destination);
	oscillator.connect(gain);

	oscillator.frequency.value = freq;
	gain.gain.value = mainVolume;

	oscillator.start();
};
