## 🎨 게시판 만들기

#### read
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../js/jsp.js"></script>
    <title>Document</title>
</head>
<body>
<h1>볼품 없는 게시판 글 읽기</h1>
<hr>
<form action="update_action.html" method="get">
    <table border=1>
        <tr>
            <td>제목</td>
            <td><input type=text id="id_title" name="nm_title" value="" autofocus>
                <input type="hidden" id="id_ggg" name="nm_ggg" value="">
            </td>
        </tr>
        <tr>
            <td>글쓰니</td>
            <td><input type=text id="id_writer" name="nm_writer" value="" readonly></td>
        </tr>
        <tr>
            <td>보유기술</td>
            <td>
                FE<input type=checkbox name="nm_skills" value="fe">
                BE<input type=checkbox name="nm_skills" value="be">
                DB<input type=checkbox name="nm_skills" value="db" checked>
            </td>
        </tr>
        <tr>
            <td colspan="2"><textarea id="id_content" name="nm_content" cols="40" rows="10" required></textarea></td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="수정">
                <a href="#" id="id_del">삭제</a> 
                <a href="list.html">리스트</a>
            </td>
        </tr> 
    </table>
</form>
<script>
    var v_ggg = request.getParameter("g_id");
    document.getElementById("id_del").href = "delete.html?g_id"+v_ggg;
    document.getElementById("id_ggg").value = v_ggg;

    var v_tblName = "uglyGesi";
    var v_gulDatas = JSON.parse(localStorage.getItem(v_tblName));
    var v_gul;
    for(var i=0; i<v_gulDatas.length; i++){
        if(v_gulDatas[i].ggg == v_ggg){
            v_gul = v_gulDatas[i];
            break;
        }
    }
    document.getElementById("id_title").value = v_gul.title;
    document.getElementById("id_writer").value = v_gul.writer;
    document.getElementById("id_content").value = v_gul.content;

    // alert(v_gul.skills) 눈으로 확인
    // 체크박스 가져오깅 name으로(group)
    var v_ckBoxes = document.getElementsByName("nm_skills");
    for(var i=0; i< v_gul.skills.length; i++){
        for(var j=0; j< v_ckBoxes.length; j++){
            if(v_ckBoxes[j].value == v_gul.skills[i]){
                v_ckBoxes[j].checked = true;  // 강제 체크
                break;                        // 안쪽 for문 종료
            }
        }
    }
</script>
</body>
</html>



            <!-- required : 아무것도 안 썻을 때 알림 -->
            <!-- autofocus : 페이지 키면 자동으로 커서 가게 -->
```

#### write
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>볼품 없는 게시판 글 쓰기</h1>
<hr>
<!-- 제목/글쓴이/내용 -->
<form action="write_action.html" method="GET">
    <table border="1">
        <tr>
            <td>제목</td>
            <td><input type="text" name="nm_title" value="" required autofocus></td> 
            <!-- required : 아무것도 안 썻을 때 알림 -->
            <!-- autofocus : 페이지 키면 자동으로 커서 가게 -->
        </tr>
        <tr>
            <td>글쓴이</td>
            <td><input type="text" name="nm_writer" value=""  required></td>
        </tr>

        <tr>
            <td>보유기술</td>
            <td>
                FE<input type=checkbox name="nm_skills" value="fe">
                BE<input type=checkbox name="nm_skills" value="be">
                DB<input type=checkbox name="nm_skills" value="db" checked >
            </td>

        </tr>

        <tr>
            <td colspan="2"><textarea cols="40" rows="10" required></textarea></td>
        </tr>
        <tr>   
            <td><input type="submit" value="글저장"></td>
            <td><input type="reset" value="다시쓰기"></td>
        </tr>
    </table>

</form>
</body>
</html>
```

#### write-action
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<script src="../../js/jsp.js"></script>

<script>
// 사용자 값 받아오기
var v_title = request.getParameter("nm_title");
var v_writer = request.getParameter("nm_writer");
var v_skills = request.getParameterValues("nm_skills");
var v_content = request.getParameter("nm_content");
// 테이블명 지정
var v_tblName = "uglyGesi"; // 고정 키값 -> 관계형 DB의 table명에 해당
// 글 객체를 담을 빈 배열
var v_tblData = [];
var v_ggg = 1;

if(localStorage.getItem(v_tblName)) {
v_tblData = JSON.parse(localStorage.getItem(v_tblName));
v_ggg = v_tblData[v_tblData.length-1].ggg +1;
}


// 넘어온 값들을 객체 1개로 묶어줌
var v_gul = {};
v_gul.ggg = v_ggg; // 중복되는 값만 가지는 속성이 하나 필요: Primary키 검색 효율 향상
v_gul.title = v_title;
v_gul.writer = v_writer;
v_gul.skills = v_skills; // 배열
v_gul.content = v_content;
v_gul.date = (new Date()).toLocaleDateString();

// 묶어준 객체를 배열에 저장
v_tblData.push(v_gul);

// 배열을 localStorage에 저장
localStorage.setItem(v_tblName, JSON.stringify(v_tblData));

alert("글이 잘 저장되었습니다.");
// 일반적으로 글이 써졌으면 리스트(목록) 페이지로 넘어감

location.href = "list.html";

</script>
```



#### update-action
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<script src="../../js/jsp.js"></script>

<script>
// 사용자 값 받아오기
var v_ggg = request.getParameter("nm_ggg"); // 글의 고유 키값
var v_title = request.getParameter("nm_title");
var v_skills = request.getParameterValues("nm_skills");
var v_content = request.getParameter("nm_content");
// 테이블명 지정
var v_tblName = "uglyGesi"; // 고정 키값 -> 관계형 DB의 table명에 해당
v_tblData = JSON.parse(localStorage.getItem(v_tblName));

// 수정해야 할 글만 찾아서 업데이트
for(var i = 0; i < v_tblData.length; i++) {
if(v_tblData[i].ggg == v_ggg) {
v_tblData[i].title = v_title;
v_tblData[i].skills = v_skills;
v_tblData[i].content = v_content;
v_tblData[i].date = (new Date().toLocaleDateString());
break;
}
}
// 업데이트된 배열로 localStorage 다시 쓰기
localStorage.setItem(v_tblName, JSON.stringify(v_tblData));

alert("글이 잘 수정되었습니다.");

location.href = "list.html";

</script>
```



#### list
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>볼품없는 게시판 리스트</h1>
<hr>
<div id="id_disp"></div>
<script>
    var v_disp = document.getElementById("id_disp");
    var v_tblName="uglyGesi"; 
    var v_gulDatas = JSON.parse(localStorage.getItem(v_tblName));
    var v_tblStr = "<table border=1 width=500>"; 
        v_tblStr += "<tr><td>넘버</td><td>글제목</td><td>글쓴이</td><td>글쓴이</td></tr>"
   
    for(var i=0; i< v_gulDatas.length; i++){
        v_tblStr += "<tr>";
        v_tblStr += "<td>" + (i+1) + "</td>";
        v_tblStr += "<td><a href=read.html?g_id="+v_gulDatas[i].ggg + ">" + v_gulDatas[i].title + "</a></td>";
        v_tblStr += "<td>" + v_gulDatas[i].writer + "</td>";
        v_tblStr += "<td>" + v_gulDatas[i].date + "</td>";
        v_tblStr += "</tr>";
    } 
    v_tblStr += "</table>";
    v_tblStr += "<a href=write.html>글쓰기</a>"; 
    v_disp.innerHTML = v_tblStr; // 화면 출력 
</script>
</body>
</html>
```

#### 더미데이터
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<script>
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

    v_korFamilyNames = v_korFamilyNames.split(",");
    v_korNames = v_korNames.split(",");

    function fmlyName(){
        return v_korFamilyNames[ Math.floor(Math.random()*v_korFamilyNames.length)];
    }
    function names(p_i){
        if(p_i % 30 == 0){
            return v_korNames[Math.floor(Math.random()*v_korNames.length)];         
        }
        return v_korNames[Math.floor(Math.random()*v_korNames.length)] + 
               v_korNames[Math.floor(Math.random()*v_korNames.length)];
    }
    function f_ranName(p_i){
        return fmlyName() + names(p_i);
    }

    //localStorage에 더미 데이터 생성
     var v_tblName = "uglyGesi";
     var v_datas = []; // 전체 json을 담을 빈 배열 생성
     var v_dataLength = 108; // 108번뇌
     var v_skillData = ["fe","be","db"];
     for(var i=1; i<=v_dataLength; i++){
         var v_gul = {};       // 글 1개를 나타내는 객체
         v_gul.ggg = i;
         v_gul.title = "챔피언 타이틀 " + i;
         v_gul.writer = f_ranName(i);  // 랜덤한 이름 만들어서 넣습니다, 30번에 한번 이름이 외자인 사람이 나옵니다
         v_gul.skills  = [];  // ? 여기에 랜덤하게 1~3개의 값을 넣으시옹, v_skillData중에
         for(var j=1; j<= Math.ceil(Math.random()*3); j++){
             v_gul.skills.push(v_skillData[j-1]);
         }
         v_gul.content = "내용 " + i;
         v_gul.date = (new Date()).toDateString();
         v_datas.push(v_gul);   // 글 객체를 배열에 담아 줌
     }
     localStorage.setItem(v_tblName, JSON.stringify(v_datas));

</script>
```

#### del_ck
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<script src="../js/jsp.js"></script>
<script>

    var v_delGGG = request.getParameterValues("nm_del");
    var v_tblName = "uglyGesi"; 
    var v_datas = JSON.parse(localStorage.getItem(v_tblName));
    for(var i=0; i<v_delGGG.length; i++){
        for(var j=0; j<v_datas.length; j++){
            if(v_datas[j].ggg == v_delGGG[i]){
            v_datas.splice(i,1);
            break; // 빼먹지 말기
            }
        }
    }
    localStorage.setItem(v_tblName, JSON.stringify(v_datas));
    location.href="list.html"; // 페이지 돌리기
    //alert(request.getParameterValues("nm_del"));
</script>
```

#### delete
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<script src="../js/jsp.js"></script>
<script>
    var v_gulID = request.getParameter("nm_ggg");
    var v_tblName="uglyGesi";

    var v_gulDatas = JSON.parse(localStorage.getItem(v_tblName));
    for(var i=0; i<v_gulDatas.length; i++){
        if(v_gulDatas[i].ggg == v_gulID){
            v_gulDatas.splice(i,1);   // 해당 글 삭제
            break;
        }
    }
    //저장
    localStorage.setItem(v_tblName, JSON.stringify(v_gulDatas));
   // location.href="list.html";
   opener.location.replace("list.html");
   window.close();  // 창닫기
   //location - replace, href 두 가지만 기억.
        //href는 캐쉬 생길 수 있어서 replace로
</script>
```


#### check
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

        /* pseudo class(수도클래스), hover --> mouse over*/
        a:hover{ /* a 태그에 지원되는 링크스타일 */
            color: hotpink;
            font-size: 25px;
            cursor: move; /* 마우스 커서 바꾸기 */
        }
        #id_sib{
            width: 80%;
            min-width: 500px;   /* 최소 사이즈 */
            max-width: 800px;   /* 최대 사이즈 */
            height: 100px;
            border: 1px solid black;
        }

    </style>
</head>
<body>
    <div id="id_sib"></div>
    <!-- 많이 사용되진 않음. 텍스트박스에 마우스 올리면 마우스 포인터에 말풍선 뜸 -->
    <input type="text" value="" title="볼품없는 말풍선"><br>
    <!-- label : 체크박스를 정확히 체크하지 않아도 라벨에만 닿아도 체크박스 체크가 됨
                사용자의 체크 범위를 넓혀줌, 데스크탑에서는 많이 쓰이진 않지만
                모바일에서 많이 사용됨
     -->
    <label for="id_ck">체크박스</label> 
    <input id="id_ck" type="checkbox" value="">
    <a href="http://daum.net" target="_self">다음</a> <br>
    <form action="list.html">
    <!-- button 태그 사용시 주의  button 태그는 default type=submit 임-->
        <button name="nm_btn" type="button">난 버튼1</button><br>
        <button name="nm_btn" type="button">난 버튼2</button><br>
        <button name="nm_btn" type="button">난 버튼3</button><br>
        <button name="nm_btn" type="button">난 버튼4</button><br>
        <button name="nm_btn" type="button">난 버튼5</button><br>
        <button name="nm_btn" type="button">난 버튼6</button><br>
        <button name="nm_btn" type="button">난 버튼7</button><br>

        <!-- 잘 쓰진 않지만 버튼에 이미지 넣을 수 있다. -->
        <input type="image" src="../img/son2.jpeg" width=100 height=100>
    </form> 
    <button>전송</button>
    <!-- submit 버튼은 form 밖에 있으면 실행되지 않는다. -->  
<script>
    var v_btns = document.getElementsByName("nm_btn");
    for(var i=0; i< v_btns.length; i++){
        v_btns[i].onclick=function(e){ // 자동으로 e = event
            alert(e.target.innerHTML + "밥 먹었어?");
            console.log(e.target);      // 이벤트를 발생시킨 객체를 가리킴
 //           console.log(event);       // target을 잘 쓰면 굳이 this가 필요없는 경우가 많음
        }
    }
</script> 
</body>
</html>
```

#### position:fixed
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>팁</title>
<style>
    #id_bar {
        position:fixed;
        /* fixed : 메뉴 네이게이션에 사용. 스크롤 내려도 사용자 화면에 고정되어있음 */
        left:0px;
        top:50px;
        width:100%;
        height:30px;
        background-color: hotpink;
    }
</style>
</head>
<body>
    <div id="id_bar">난 안 움직여</div> 
    
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>
    <h1>난 최고의 프로그래머당</h1>

</body>
</html>
```