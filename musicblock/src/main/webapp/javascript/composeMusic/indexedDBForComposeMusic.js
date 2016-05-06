/*indexedDB for Compose Music*/

var blockNum = 0;

var repo = $("#my-blocks");


//functions related to IndexedDB
$(function () {
    request.onsuccess = function (event) {
//        console.log("indexedDB onsuccess : DB loaded successfully");
        db = event.target.result;

        getAllBlocks();

    }
});



function getAllBlocks() {
    var transaction = db.transaction(["blockTestTable"], "readwrite");
    var objectStore = transaction.objectStore("blockTestTable");
    var request = objectStore.openCursor();

    request.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
//            console.log(cursor);
//            console.log("key : " + cursor.key);
//            console.log("sec : " + cursor.value.sec);
//            console.log("notes : " + cursor.value.notes);

            var dynamicLoadedBlock = "<li class='no_drop swiper-slide highlight' data-name='Item " + blockNum + "' data-id='" + blockNum + "'>IndexedDB-" + blockNum + "</li>";
            blockNum++;
            repo.append(dynamicLoadedBlock);
            $("#my-blocks > li:last").data("key", cursor.key);
            $("#my-blocks > li:last").data("sec", cursor.value.sec);
            $("#my-blocks > li:last").data("notes", cursor.value.notes);

            //<element에 박힌 데이터를 확인하기 위한 코드>
            //1) 전체를 한꺼번에 확인 가능(하지만 이 경우 object로 찍힘)
            //alert("블럭이 가지는 정보 : " + $("#my-blocks > li:last").data());
            //2) 개별적으로도 확인 가능
//            console.log("<indexedDB로부터 가져온 블럭 정보>" + "\nkey : " +
//                $("#my-blocks > li:last").data("key") + "\nsec : " +
//                $("#my-blocks > li:last").data("sec") + "\nnotes : " +
//                $("#my-blocks > li:last").data("notes") + "\n");

            
            cursor.continue();
//            console.log("디비");
            //            $('.highlight:last-of-type').bind('touchstart', function () {
            //                console.log("ㅋㅋㅋ");
            //            });
            

            var blockFromDB = $('.highlight:last-of-type');
            var placeholder = $('.dragged');
            var longClick = {touchFlag:false, setTimeoutId:null, top:null, left:null};

//            blockFromDB.draggable();
//            blockFromDB.on('mousedown',function(){
//            	
//            });
//            

//            blockFromDB.on('mouseup',function () {
//				touchFlag = false;
//				clearTimeout(longClick.setTimeoutId);
//			});
            
            
            
//            blockFromDB.longpress(
//                function (e) {
//                    // 길게 입력할 때
////                    $('#block-dialog').modal('show');
//                }
//                , function (e) {
//                    // 짧게 입력할 때
//                    console.log('짧게 누름ㅋㅋ');
//                }
//            );

            
        }

    }
}


function deleteBlockById(id) {
    var transaction = db.transaction(["blockTestTable"], "readwrite");
    var objectStore = transaction.objectStore("blockTestTable");
    var request = objectStore.delete(id);
    request.onsuccess = function (event) {
        console.log("id가 " + id + "인 블럭을 IndexedDB로부터 삭제했습니다.");
    }
}