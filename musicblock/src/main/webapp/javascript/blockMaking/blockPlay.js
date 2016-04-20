//음 코드(1~48)를 넣으면 1초간 음을 연주해주는 함수
var playBlockNote = function (noteVal) {
    oscillator.frequency.value = noteVal;
    
    gain.gain.value = 2;
    setTimeout(function () {
        /*oscillator.connect(gain);
        oscillator.disconnect(gain);*/
        //gain.gain.value=0;
    }, 1000);
    //테스트코드
    console.log(noteVal);
}


// play버튼 눌러서 블럭 연주
$(function () {
    // 블럭연주 - 음
    $("#play").bind("mousedown", function () {
        var count = 0;
        if (clickSequence != 0) {
            countForPlaying = clickSequence;
            console.log(noteCodeToFreq(noteArr[clickSequence-countForPlaying]));
            playBlockNote(noteCodeToFreq(noteArr[clickSequence-countForPlaying]));
            timerIdForPlaying = setInterval(function(){
                //playNote(noteCodeToFreq(13));
                countForPlaying--;
                console.log(countForPlaying);
                playBlockNote(noteCodeToFreq(noteArr[clickSequence-countForPlaying]));
                if(countForPlaying == 0){
                    alert("end!!");
                    clearInterval(timerIdForPlaying);
                    mainVolume = 0;
                    gain.gain.value = mainVolume;
                }
            }, blockAnimateTime/clickSequence);
        }
    });

    $("#play").bind("mouseup", function () {

    });
});
