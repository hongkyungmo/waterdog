//블럭 길이 조절
$(function () {
	var blockLengthController = '<div id="block-time-length-container"><div id="block-time-length-controlbar"></div></div>';

	$(".COMMON-MENUBAR-ROW").append(blockLengthController);

	$("#block-time-length-controlbar").draggable({
		containment: "parent"
			, axis: "x"
	});

	$("#block-time-length-controlbar").bind("dragstop", function (event) {
		var clickedX = event.pageX; //클릭한 곳의 x좌표
		var timeControlContainerWidth = $("#block-time-length-container").width();

		var timeDragbarXStart = $("#block-time-length-controlbar").position().left; //현재 클릭한 엘리먼트(볼륨조절 컨테이너)가 시작하는 곳의 x좌표
		var timeDragbarXEnd = $("#block-time-length-controlbar").position().left + $("#block-time-length-controlbar").width(); //현재 클릭한 엘리먼트(볼륨조절 컨테이너)가 끝나는 곳의 x좌표
		var timeDragbarCenter = (timeDragbarXEnd - timeDragbarXStart)/2;

		var timeDragbarCenterPositionX = timeDragbarXStart + timeDragbarCenter;

		if(timeDragbarCenterPositionX >= 0 && timeDragbarCenterPositionX < timeControlContainerWidth/4){
			$("#block-time-length-controlbar").css("left", (timeControlContainerWidth/4)*0);
		}else if(timeDragbarCenterPositionX >= timeControlContainerWidth/4 && timeDragbarCenterPositionX < (timeControlContainerWidth/4)*2){
			$("#block-time-length-controlbar").css("left", (timeControlContainerWidth/4)*1);
		}else if(timeDragbarCenterPositionX >= (timeControlContainerWidth/4)*2 && timeDragbarCenterPositionX < (timeControlContainerWidth/4)*3){
			$("#block-time-length-controlbar").css("left", (timeControlContainerWidth/4)*2);
		}else if(timeDragbarCenterPositionX >= (timeControlContainerWidth/4)*3 && timeDragbarCenterPositionX < (timeControlContainerWidth/4)*4){
			$("#block-time-length-controlbar").css("left", (timeControlContainerWidth/4)*3);
		}
	});
});