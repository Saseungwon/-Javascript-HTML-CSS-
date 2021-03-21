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

#### delete
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<script src="../js/jsp.js"></script>
<script>
    var v_gulID = request.getParameter("g_id");
    var v_tblName="uglyGesi"

    var v_gulDatas = JSON.parse(localStorage.getItem(v_tblName));
    for(var i=0; j<v_gulDatas.length; i++){
        if(v_gulDatas[i].ggg == v_gulID){
            v_gulDatas.splice(i,1); //해당 글 삭제
            break
        }
    }
    localStorage.setItem(v_tblName,JSON.stringify(v_gulDatas));
    location.href="list.html";
</script>
```