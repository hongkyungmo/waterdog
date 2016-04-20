// play버튼 눌러서 블럭 연주
$(function () {
    $("#play").bind("mousedown", function () {

    });

    // 블럭연주 - 음
    $("#play").bind("mousedown", function () {
        var count = 0;
        if (clickSequence != 0) {
            playNote(noteCodeToFreq(13));
            playNote(noteCodeToFreq(15));
            playNote(noteCodeToFreq(17));
            playNote(noteCodeToFreq(18));
            playNote(noteCodeToFreq(20));
            playNote(noteCodeToFreq(22));
            playNote(noteCodeToFreq(24));
            playNote(noteCodeToFreq(25));
        }
    });

    $("#play").bind("mouseup", function () {

    });
});
