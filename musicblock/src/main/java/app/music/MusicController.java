package app.music;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import service.domain.Music;
import service.domain.MusicEmotion;
import service.domain.MusicHash;
import service.music.MusicService;

@Controller
@RequestMapping("/music/*")
public class MusicController {
	@Autowired
	@Qualifier("musicServiceImpl")
	private MusicService musicService;

	public MusicController() {
		System.out.println(this.getClass());
	}
	
	@RequestMapping(value = "musicSave", method = RequestMethod.POST)
	public Music addJsonMusicPOST(@RequestBody Map map) throws Exception {

		System.out.println("(/music/musicSave)RequestBody로 전달받은 String(JSON) : "+map);
		
		// Client로 부터 받은 emotion 정보를 담는다.
		List<Object> emotionArray = new ArrayList<Object>();
		emotionArray=(ArrayList)map.get("emotion");
		
		// 감정목록 생성		
		List<MusicEmotion> emotionList = new ArrayList<MusicEmotion>();
		for(int i=0;i<emotionArray.size();i++){
//			if(emotionArray.get(i).equals("that")){
//				BlockEmotion emotion = new BlockEmotion();
//				emotion.setEmotion(i);
//				emotionList.add(emotion);
//			}
				MusicEmotion emotion = new MusicEmotion();
				emotion.setEmotion(Integer.parseInt((String)emotionArray.get(i)));
				emotionList.add(emotion);
		}

		// hash 정보 담기
		List<MusicHash> hashList = new ArrayList<MusicHash>();

		// #단위로 해시태그 분리
		// 왜 그런지 아직은 모르겠는데 0번 배열에서 null string이 있음.
		String hashArray[] = ((String)map.get("tag")).split("#");
		
		// 해시태그 목록 생성(해시브라운 먹고 싶다.)
		for(int i=1;i<hashArray.length;i++){
			MusicHash hash = new MusicHash();
			hash.setTag(hashArray[i].trim());
			hashList.add(hash);
		}
		
		
		Music music = new Music();
		music.setTitle((String)map.get("title"));
		music.setCmpt((String)map.get("cmpt"));
		music.setuCode(Integer.parseInt((String)map.get("ucode")));//유저코드를 왜래키로 가지고 있어야 함 (수정)
		music.setMusicHashList(hashList);
		music.setMusicEmotionList(emotionList);

		System.out.println("완성된 형태의 블록 : " + music);

		musicService.addMusic(music);
		return music;
	}
	
	@RequestMapping(value = "getJsonMusic/{musicId}", method = RequestMethod.GET)
	public void getJsonMusicGET(@PathVariable String musicId, Model model) 
			throws Exception {
		
		System.out.println("/getJsonMusic/getMusic: model로 전달받은 String(JSON) : "+model);
		//Business Logic
		System.out.println("musicId: "+musicId);
		System.out.println("model: "+model);
		
			Music music = musicService.getMusic(musicId);
			////블록값이 있을경우에만 담아온다.
			if( music != null)
			{
				System.out.println("보내쪙");
				model.addAttribute("music", music); 
			}
			else
			{	System.out.println("보내지마");
				model.addAttribute("music", null);
			}
		}
	
	

}
