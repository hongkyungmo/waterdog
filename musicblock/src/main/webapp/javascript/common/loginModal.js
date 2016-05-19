/**
 * 공통모듈 : 페이지 로딩시 자동으로 불러내는 메뉴바 추가
 */

var element = 
	"<div><div class='modal fade' id='loginModal' tabindex='-1' role='dialog' aria-labelledby='loginLabel' aria-hidden='true'>"
	+"	<div class='modal-dialog'>	<div class='modal-content'> <div class='modal-header'>"
	+"				<button type='button' class='close' data-dismiss='modal' aria-label='Close'>"
	+"					<span aria-hidden='true'>&times;</span>	</button>"
	+"				<h4 class='modal-title' id='loginLabel'>Login</h4></div>"
	+"			<div class='modal-body'><form><div class='form-group'><input type='text' class='form-control' id='user_login'"
	+"							placeholder='Email or Nickname'></div>"
	+"					<div class='form-group'><input type='password' class='form-control' id='user_pass'"
	+"							placeholder='Password'>	</div>"
	+"					<div><input type='checkbox' class='checkbox' id='remember_me'>"
	+"						<label for='remember_me' style='display: block;'>Remember me</label>"
	+"					</div>	</form>	</div>	<div class='modal-footer'>"
	+"				<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"
	+"				<button type='button' id='actions' class='btn btn-primary'>Send	message</button>"
	+"			</div></div></div></div></div> ";

$("body").append(element);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////
////////////여기서 부터 function                                   ////////////////////
////////////////////////////////


