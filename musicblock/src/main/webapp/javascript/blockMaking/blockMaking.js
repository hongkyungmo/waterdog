/**
 * 블록 생성
 */

//block이 플레이되는 시간
var blockAnimateTime = 2000;

$(function () {
    $("body").append("<div id='menu-container'><span class = 'glyphicon glyphicon-chevron-left fa-2x' aria - hidden = 'true' id='back'></span><span class='glyphicon glyphicon-menu-hamburger' aria-hidden='true' id='menu'></span></div>");
});


//variables
var clickSequence = 0; //입력한 음의 갯수
var octave = 2; //1,2,3,4(low to high)
//음과 박자를 저장하는 2차원 배열 구조체(?)
var arr = new Array(64);
for (var i = 0; i < 64; i++) {
    arr[i] = new Array(2); //{음정, 박자}
}
//menu
$(function () {
    $("#menu").bind("mousedown", function () {
        if ($(".menu-on").length > 0) {
            $(".menu-on").addClass("menu-off");
            $(".menu-on").removeClass("menu-on");
        } else {
            $(".menu-off").addClass("menu-on");
            $(".menu-off").removeClass("menu-off");
            /*$("body").append('<div style="height:92%;width:80%;background-color:gray;position:absolute;left:0%;top:8%;z-index:1000;opacity:0.7">zzzz</div>');*/
        }
    });
});
//bind functions(control bar)
$(function () {
    //play
    $("#play").bind("mousedown", function () {
        if ($("#display-bar").length > 0) {
            $("#display-bar").stop();
            $("#play").css("background-color", 'greenyellow');
            $("#display-bar").remove();
            $(".glyphicon-stop").addClass("glyphicon glyphicon-play");
            $(".glyphicon-stop").removeClass("glyphicon-stop");
        } else if ($("#display-bar").length < 1) {
            $("#play").css("background-color", 'red');
            $(".glyphicon-play").addClass("glyphicon glyphicon-stop");
            $(".glyphicon-play").removeClass("glyphicon-play");
            $("#syllable-container").append("<div id='display-bar' style='background-color:red;width:1.5%;height:16.7%;position:absolute;float:left;left:5.9%;z-index:1;top:13.5%;opacity:0.3'></div>");
            $("#display-bar").animate({
                left: "51.3%"
            }, blockAnimateTime, function () {
                while ($("#display-bar").length > 0) {
                    $("#display-bar").remove();
                    $(".glyphicon-stop").addClass("glyphicon glyphicon-play");
                    $(".glyphicon-stop").removeClass("glyphicon-stop");
                }
                $("#play").css("background-color", 'greenyellow');
                //animation 완료 후 음 정지
                //o.stop();
            });
        }
    });
    //cancel
    $("#cancel").bind("mousedown", function () {
        if ($("#display-bar").length == 0) {
            $("#cancel").css("background-color", '#EEFFA9');
            if (clickSequence > 0) {
                $(".syllable").last().remove();
                $(".divider").last().remove();
                for (var j = 0; j < clickSequence; j++) {
                    var k = (102 - (clickSequence)) / (clickSequence - 1);
                    $(".syllable:eq(" + j + ")").width(k + '%');
                }
                displayObj = '<div class="divider"></div><div class="syllable" style="width:' + k + '%"></div>';
                clickSequence--;
            }
        }
    });
    $("#cancel").bind("mouseup", function () {
        $("#cancel").css("background-color", 'greenyellow');
    });
    //clear
    $("#clear").bind("mousedown", function () {
        if ($("#display-bar").length == 0) {
            $("#clear").css("background-color", '#EEFFA9');
            $("#syllable-container").empty();
            clickSequence = 0;
        }
    });
    $("#clear").bind("mouseup", function () {
        $("#clear").css("background-color", 'greenyellow');
    });
    //next
    $("#next").bind("mousedown", function () {
        location.href = "/emotion.html";
        $("#next").css("background-color", '#EEFFA9');
    });
    $("#next").bind("mouseup", function () {
        $("#next").css("background-color", 'greenyellow');
    });
});
//공백건반 클릭
$(function () {
    var spaceKey = $("#space-key");
    spaceKey.bind("mousedown", function () {
        if ($("#display-bar").length == 0) {
            $(this).css("background-color", '#33dd33');
            //디스플레이 창에 엘리먼트 추가
            var displayObj;
            if (clickSequence == 0) {
                displayObj = '<div class="syllable" style="width:100%"></div>';
            } else {
                for (var j = 0; j < clickSequence; j++) {
                    var k = (100 - (clickSequence)) / (clickSequence + 1);
                    $(".syllable:eq(" + j + ")").width(k + '%');
                }
                displayObj = '<div class="divider"></div><div class="syllable" style="width:' + k + '%"></div>';
            }
            //음정 조절
            $("#syllable-container").append(displayObj);
            //친 음 갯수 추가
            clickSequence++;
        }
    });
    spaceKey.bind("mouseup", function () {
        $(this).css("background-color", '#65f712');
    });
});

//건반 클릭
$(function () {
    $(".key").bind("mousedown", function () {
        var barLevel = 94 - (((octave - 1) * 12 + $(".key").index(this)) * 2);

        //var barLevel = 92 - (((octave - 1) * 12 + $(this).index()) * 1.95); //디스플레이에 표시될 음정bar
        //음정 표시
        if (clickSequence == 0) {
            displayObj = '<div class="syllable" style="width:100%"><div class="syllable-bar" style="top:' + barLevel + '%;"></div></div>';
        } else {
            for (var j = 0; j < clickSequence; j++) {
                //박자 결정
                var beat = (100 - (clickSequence)) / (clickSequence + 1);
                $(".syllable:eq(" + j + ")").width(beat + '%');
            }
            displayObj = '<div class="divider"></div><div class="syllable" style="width:' + beat + '%"><div class="syllable-bar" style="top:' + barLevel + '%;"></div></div>';
        }
        //음 디스플레이에 표시
        $("#syllable-container").append(displayObj);
        //음정 조절
        $(".syllable-bar").last().draggable({
            containment: "parent"
            , axis: "y"
        });
        clickSequence++;
    });
});



//흰건반 클릭
/*$(function () {
	for (var i = 0; i < 7; i++) {
		var whiteKey = $(".white-key:eq(" + i + ")");
		whiteKey.bind("mousedown", function () {
			if ($("#display-bar").length == 0) {
				$(this).css("background-color", '#33669a');
				var displayObj;
				var keyCode = 0;
				//음정 결정
				switch ($(this).index()) {
				case 0:
					keyCode = 1;
					break;
				case 2:
					keyCode = 3;
					break;
				case 4:
					keyCode = 5;
					break;
				default:
					keyCode = $(this).index();
				}
				var barLevel = 92 - (((octave - 1) * 12 + $(this).index()) * 1.95); //디스플레이에 표시될 음정bar
				//음정 표시
				if (clickSequence == 0) {
					displayObj = '<div class="syllable" style="width:100%"><div class="syllable-bar" style="top:' + barLevel + '%;"></div></div>';
				} else {
					for (var j = 0; j < clickSequence; j++) {
						//박자 결정
						var beat = (100 - (clickSequence)) / (clickSequence + 1);
						$(".syllable:eq(" + j + ")").width(beat + '%');
					}
					displayObj = '<div class="divider"></div><div class="syllable" style="width:' + beat + '%"><div class="syllable-bar" style="top:' + barLevel + '%;"></div></div>';
				}
				$("#syllable-container").append(displayObj);
				//음정 조절
				$(".syllable-bar").last().draggable({
					containment: "parent"
						, axis: "y"
				});
				//친 음 갯수 추가
				clickSequence++;
				//음 추가 애니메이션
				$("#key-clickable-container").append('<div id="ani" style="position:absolute;width:20.1%;height:97%;background-color:pink;opacity:0.5"></div>');
                        $("#ani").animate({
                            left: -10 + (100 / clickSequence) * 0.3 + "%"
                            , top: (100 + barLevel) / 4 - 65 + "%"
                            , width: 100 / clickSequence * 0.43 + "%"
                            , height: "0.5%"
                        }, 1000, function () {
                            while ($("#ani").length > 0) {
                                $("#ani").remove();
                            }
                            $("#play").css("background-color", 'greenyellow');
                        });
			}
		});
		whiteKey.bind("mouseup", function () {
			$(this).css("background-color", 'white');
		});
	}
});
$(function () {
	//검은건반 클릭
	for (var i = 0; i < 5; i++) {
		var blackKey = $(".black-key:eq(" + i + ")");
		blackKey.bind("mousedown", function () {
			if ($("#display-bar").length == 0) {
				$(this).css("background-color", '#22aaba');
				var displayObj;
				var keyCode = 0;
				//음정 결정
				switch ($(this).index()) {
				case 0:
					keyCode = 2;
					break;
				case 1:
					keyCode = 4;
					break;
				case 2:
					keyCode = 7;
					break;
				case 3:
					keyCode = 9;
					break;
				case 4:
					keyCode = 11;
					break;
				}
				var barLevel = 92 - (((octave - 1) * 12 + $(this).index()) * 1.95); //디스플레이에 표시될 음정bar
				//음정 표시
				if (clickSequence == 0) {
					displayObj = '<div class="syllable" style="width:100%"><div class="syllable-bar" style="top:' + barLevel + '%;"></div></div>';
				} else {
					for (var j = 0; j < clickSequence; j++) {
						//박자 결정
						var beat = (100 - (clickSequence)) / (clickSequence + 1);
						$(".syllable:eq(" + j + ")").width(beat + '%');
					}
					displayObj = '<div class="divider"></div><div class="syllable" style="width:' + beat + '%"><div class="syllable-bar" style="top:' + barLevel + '%;"></div></div>';
				}
				$("#syllable-container").append(displayObj);
				$(".syllable-bar").last().draggable({
					containment: "parent"
						, axis: "y"
				});
				clickSequence++;
			}
		});
		blackKey.bind("mouseup", function () {
			$(this).css("background-color", 'black');
		});
	}
});*/
$(function () {
    //옥타브 변환
    for (var i = 0; i < 4; i++) {
        var octaveDisplay = $(".octave-display:eq(" + i + ")");
        octaveDisplay.bind("mousedown", function () {
            /*$(this).css("background-color", 'white');*/
            //$(this).attr("id", "octave-display-on");
            $("#octave-display-on").empty();
            $("#octave-display-on").addClass("octave-display");
            $("#octave-display-on").attr("id", '');
            $(this).removeClass("octave-display");
            $(this).attr("id", "octave-display-on");
            $(this).append('<span class="glyphicon glyphicon-music"></span>');
            //옥타브 등록
            octave = 4 - $(this).index();
        });
        octaveDisplay.bind("mouseup", function () {
            /*$(this).css("background-color", 'greenyellow');*/
        });
    }
});
$(function () {
    $("#draggable").draggable();
});