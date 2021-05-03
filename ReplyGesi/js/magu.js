//한국 성씨(복성포함), 나무위키 참조
var v_korFamilyNames = "김,이,박,최,정,강,조,윤,장,임,한,오,서,신,권,황,안,송,전,홍,류,고,문,량,손," +
                       "배,조,백,허,유,남,심,로,정,하,곽,성,차,주,우,구,신,임,전,민,유,류,나,진,지," + 
                       "엄,채,원,천,방,공,강,현,함,변,염,양,변,여,추,노,도,소,신,석,선,설,마,길,주," + 
                       "연,방,위,표,명,기,반,라,왕,금,옥,육,인,맹,제,모,장,탁,국,여,진,어,은,편," + 
                       "남궁,독고,황보,제갈,사공,선우,서문,어금,망절,무본,황목,등정,장곡,강전";

//이름에 자주 쓰이는 글자들 인터넷 참조
var v_korNames = "성,영,상,재,종,정,동,용,승,경," +
                 "호,수,석,철,훈,현,진,영,환,식," +
                 "미,은,선,혜,지,덕,방,원,우,다," +
                 "희,숙,자,순,주,솔,별,국,민,일," +
                 "바,휴,왕,웅,범,대,익,중,낙,택," +
                 "권,황,율,률,술,걸,탁,백,룡,건," +
                 "애,난,소,분,아,매,말,녀,름,자," +
                 "란,임,라,충,슬,준,옥,찬,림,례," +
                 "필,규,한,예";

v_korFamilyNames = v_korFamilyNames.split(","); // 문자열 배열로 변환
v_korNames = v_korNames.split(",");

var v_forOneNameCnt = 15;    // 15번에 한번씩 이름이 외자 출현
var v_nameCnt = 0;           // 이름 생성 카운트

//랜덤하게 성 가져오깅
function getRanFamName(){
        return v_korFamilyNames[ Math.floor(Math.random()*v_korFamilyNames.length)];
}

//랜덤하게 이름 맹글기 ?번에 한번씩 외자 그외는 두자
function getRanName(){
    if(v_nameCnt == v_forOneNameCnt){
        v_nameCnt = 0;
        return v_korNames[ Math.floor(Math.random()*v_korNames.length)];  // 외자 이름
    }
    return v_korNames[ Math.floor(Math.random()*v_korNames.length)]  + 
           v_korNames[ Math.floor(Math.random()*v_korNames.length)];      // 두자 이름
    
}

// 성 + 이름 가져오깅
function getRanFullName(){
    v_nameCnt++;
    return getRanFamName()+getRanName();
}