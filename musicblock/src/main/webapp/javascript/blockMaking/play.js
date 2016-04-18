var c = new webkitAudioContext();

var o;
var g;

// play버튼 눌러서 블럭 연주
$(function() {
	$("#play").bind("mousedown", function() {
		freq = 100;
		freq = freq * Math.pow(1.0594630943592952645618252949463, 12 * 3);
		o = c.createOscillator();
		g = c.createGain();
		o.type = 'saw';

		g.connect(c.destination);
		o.connect(g);

		o.frequency.value = 100;
		g.gain.value = 2.5;

		o.start();
	});

	// 블럭연주 - 음
	$("#play").bind(
			"mousedown",
			function() {
				var count = 0;
				if (clickSequence != 0) {
					setInterval(function() {
						alert("a");
						var temp = 100 - $(".syllable-bar:eq(" + count + ")")
								.offset().top;
						freq = 130.8128 + -1.5999999999999943
								+ 1.90937499999999988125 * temp;
						o.frequency.value = o.frequency.value + 10 * count;
						count = count + 1;
						g.gain.value = 2.5;
					}, 2000 / clickSequence);
				}
			});

	$("#play").bind("mouseup", function() {
		// o.stop();
	});
});

function play(freq, octave_for_play) {
	freq = freq
			* Math.pow(1.0594630943592952645618252949463, 12 * octave_for_play);
	o = c.createOscillator();
	g = c.createGain();
	o.type = 'saw';

	g.connect(c.destination);
	o.connect(g);

	o.frequency.value = freq;
	g.gain.value = 2.5;

	o.start();
};