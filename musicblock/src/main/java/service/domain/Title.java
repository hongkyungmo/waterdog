package service.domain;


public class Title {

	private String[] title= new String[30];
	private String randomTitle;
	
	public Title(){
		title[0]="경모님 하이";
		title[1]="경모님 안녕";
		title[2]="경모님 바이";
		title[3]="경모님 좋은하루";
		title[4]="경모님 즐거운밤";
		title[5]="경모님은 개발자";
		title[6]="경모님은 바보";
		title[7]="경모님은 멍충";
		title[8]="경모님은 상큼";
		title[9]="경모님은 귀욤";
		title[10]="경모님은 간지";
		title[11]="경모님은 팀장님";
		title[12]="경모님은 멋있다";
		title[13]="경모님이 알면화낼까";
		title[14]="경모님이 누군지 궁금하지?";
		title[15]="경모님이 코딩중";
		title[16]="경모님이 제목지음";
		title[17]="경모님을 위한";
		title[18]="경모님을 위해";
		title[19]="경모님을 따라서";
		title[20]="경모님을 타도하라";
		title[21]="경모님을 따르라";
		title[22]="경모님을 괴롭히자";
		title[23]="경모님 기모찌";
		title[24]="경모님 카와이";
		title[25]="경모님 스고이";
		title[26]="경모님이 쿵짝쿵짝";
		title[27]="경모님이 춤을춘다";
		title[28]="경모님이 노래불러";
		title[29]="경모님이 랩을한다";
	}
	
	private void setTitle(){	}
	
	public String getTitle(){
		int random= (int)(Math.random()*29);
		randomTitle=title[random];
		return randomTitle;
	}

	@Override
	public String toString() {
		return "Title [randomTitle=" + randomTitle + "]";
	}
	
	

}

