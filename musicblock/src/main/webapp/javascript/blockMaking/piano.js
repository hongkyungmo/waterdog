


$(function() {
	$(".key").bind(keyDown, function() {
		if ($("#display-bar").length == 0) {
			var index_of_key = $(".key").index(this);

			var noteCodeForPlayNote = index_of_key + 12 * (octave-1) + 1;
			switch (index_of_key) {
			case 0:
				playNote(noteCodeToFreq(noteCodeForPlayNote));
				break;
			case 1:
				playNote(noteCodeToFreq(noteCodeForPlayNote));
				break;
			case 2:
				playNote(noteCodeToFreq(noteCodeForPlayNote));
				break;
			case 3:
				playNote(noteCodeToFreq(noteCodeForPlayNote));
				break;
			case 4:
				playNote(noteCodeToFreq(noteCodeForPlayNote));
				break;
			case 5:
				playNote(noteCodeToFreq(noteCodeForPlayNote));
				break;
			case 6:
				playNote(noteCodeToFreq(noteCodeForPlayNote));
				break;
			case 7:
				playNote(noteCodeToFreq(noteCodeForPlayNote));
				break;
			case 8:
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
		}
	});
});

$(function() {
	$(".key").bind(keyUp, function() {
		//oscillator.stop();
        //oscillator.disconnect(gain);
		//if ($("#display-bar").length == 0) {
        	gain.gain.value = 0;
		//}
	});
});

/*function play(freq, octave_for_play) {
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
};*/
