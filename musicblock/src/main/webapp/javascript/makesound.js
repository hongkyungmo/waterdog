var c = new webkitAudioContext();

var o;
var g;

$(function () {
    $(".key").bind("mousedown", function () {
        var index_of_key = $(".key").index(this);
        //octave = 1;
        var octave_for_play = octave;
        octave_for_play = octave_for_play - 2;
        switch (index_of_key) {
        case 0:
            play(261.6256, octave_for_play);
            break;
        case 1:
            play(293.6648, octave_for_play);
            break;
        case 2:
            play(329.6276, octave_for_play);
            break;
        case 3:
            play(349.2282, octave_for_play);
            break;
        case 4:
            play(391.9954, octave_for_play);
            break;
        case 5:
            play(440, octave_for_play);
            break;
        case 6:
            play(493.8833, octave_for_play);
            break;
        case 7:
            play(277.1826, octave_for_play);
            break;
        case 8:
            play(311.1270, octave_for_play);
            break;
        case 9:
            play(369.9944, octave_for_play);
            break;
        case 10:
            play(415.3047, octave_for_play);
            break;
        case 11:
            play(466.1638, octave_for_play);
            break;

        }
    });
});

//play버튼 눌러서 블럭 연주
$(function () {
    $("#play").bind("mousedown", function () {
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

    //블럭연주 - 음
    $("#play").bind("mousedown", function () {
        var count = 0;
        if (clickSequence != 0) {
            setInterval(function () {
                var temp = 100 - $(".syllable-bar:eq("+count+")").offset().top;
                freq = 130.8128 + -1.5999999999999943 + 1.90937499999999988125 * temp;
                o.frequency.value = o.frequency.value + 10 * count;
                count = count+1;
                g.gain.value = 2.5;
            }, 2000 / clickSequence);
        }
    });

    $("#play").bind("mouseup", function () {
        //o.stop();
    });
});

$(function () {
    $(".key").bind("mouseup", function () {
        o.stop();
    });
});

function play(freq, octave_for_play) {
    freq = freq * Math.pow(1.0594630943592952645618252949463, 12 * octave_for_play);
    o = c.createOscillator();
    g = c.createGain();
    o.type = 'saw';

    g.connect(c.destination);
    o.connect(g);


    o.frequency.value = freq;
    g.gain.value = 2.5;

    o.start();
};