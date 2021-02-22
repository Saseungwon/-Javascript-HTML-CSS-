# 🤾‍♀️ 화면구현 


### 📚 기본 개념 
- 프로토콜 → 통신규약
http = 웹서버

1. 웹서버 종류
   1. Apache : 모든 기능 다 가지고 있는 것
   2. NG2NX(엔진엑스) : Apache에 있는 기능 중 필요한 기능만 가져온 것
   3. Tomcat : 웹서버 + 자바
   4. IIS(Internet Information Server) : 윈도우 전용

2. proxy(대리) 서버
(1) forward proxy 서버	
```html
							        	a
									b
외부 실제 인터넷 	←         forward proxy 서버		  ←	c
									d
								 	e
```
- 장점
  -   사용자가 이용한 기록이  forward proxy에 캐쉬로 다 기록되어서 감시 가능
  - a가 사용한 것을 b가 이후에 사용할 때 캐쉬가 남아서 성능 높아짐

(2) backward proxy 서버
- 사용자 요청에 어느 서버로 가야하는지 알려주는 서버
```html
a							 이미지 서버
b							 검색 서버
c	 	→        backward proxy 서버      →   	 파일 서버
d						 	 …서버
e
```
### 📚 설정하기
터미널에서
sudo service apache2 start  : 실행
http://127.0.0.1/ = http://localhost/
ps -ef | grep -i apache :  apache 가 실행중인지
sudo service apache2 stop : 중지 
sudo service apache2 restrart : 재시작
root / var / www/ html / index.html 에서  관리자 권한으로 텍스트편집기
- Apache2 Ubuntu default Page에서  default를 변경 가능
```html
 </style>
  </head>
  <body>
    <div class="main_page">
      <div class="page_header floating_element">
        <img src="/icons/ubuntu-logo.png" alt="Ubuntu Logo" class="floating_element"/>
        <span class="floating_element">
          Apache2 Ubuntu Saseungwon Page
```
 
- DNS 설정
  - etc/hosts/ hosts / 관리자권한으로 텍스트편집기
```html
127.0.0.1	localhost
192.168.20.87 kjh.net			// 설정 가능
127.0.1.1	pc42pc-B150M-DS3H

# The following lines are desirable for IPv6 capable hosts
::1     ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
```
- 사용하기 편하게 설정하기
  -   파일시스템 / etc /apache2 / sites-available / 000-default (사본).org /
```html
<VirtualHost *:80>
	# The ServerName directive sets the request scheme, hostname and port that
	# the server uses to identify itself. This is used when creating
	# redirection URLs. In the context of virtual hosts, the ServerName
	# specifies what hostname must appear in the request's Host: header to
	# match this virtual host. For the default virtual host (this file) this
	# value is not decisive as it is used as a last resort host regardless.
	# However, you must set it for any further virtual host explicitly.
	#ServerName www.example.com

	ServerAdmin webmaster@localhost
	DocumentRoot /var/www/html

	Alias /jsstudy /home/pc42-pc/jsstudy	// 설정 변경
```
  -   파일시스템 / etc /apache2 / apache2.conf /
```html
# Sets the default security model of the Apache2 HTTPD server. It does
# not allow access to the root filesystem outside of /usr/share and /var/www.
# The former is used by web applications packaged in Debian,
# the latter may be used for local directories served by the web server. If
# your system is serving content from a sub-directory in /srv you must allow
# access here, or in any related virtual host.
<Directory />
	Options Indexes FollowSymLinks	//권한설정
	AllowOverride ALL
	Require all granted
</Directory>

<Directory /usr/share>
	Options Indexes FollowSymLinks
	AllowOverride ALL
	Require all granted
</Directory>

<Directory /var/www/>
	Options Indexes FollowSymLinks
	AllowOverride ALL
	Require all granted
</Directory>

#<Directory /srv/>
#	Options Indexes FollowSymLinks
#	AllowOverride None
#	Require all granted
#</Directory>
```
- sudo service apache2 restart


### 📚 기본 개념
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>

<H1 style="color :yellow ;background-color: blue;"> 최고의 프로그래머"</H1>
<!-- 색 설정, 출력 -->
<input type=button value="누르시오"
style="width: 500px; height: 500px; font-size: 100px;"
onclick="f_click()">
<!-- 버튼 기능, 크기, 폰트크기 -->
<script>
function f_click(){
alert("눌렀습니다.")
}
</script>
<!-- 눌렀을 때 알람 -->
</body>
</html>

```

```html
<!-- 주석처리 컨트롤 슬러시(ctrl + /) -->
<!DOCTYPE html>
<!-- 기본 템플릿 : html : 5 -->
<!-- html 문서는 version5의 규칙을 따른다는 의미 -->
<html lang="en">
<!-- 검색엔진을 위해서 세팅해줌 "kr"로 쓰면 검색엔진이 한국인들에게 잘 보이게 됨 상황에 따라 세팅한다.-->
<head>
<!-- head : 메타(meta) 정보 -->
<meta charset="UTF-8">
<!-- 한글이 깨지면 'UTF-8' 을 빼먹어서 그럼 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 기기 사이즈 화면에 비율을 맞춰줌 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="html.jpg" type="image/x-icon">
<!-- link : favicon - 파비콘 설정 -->
<title>제목을 남기세요</title>
<!-- 타이틀 이름 설정 -->
</head>
<body>
<!-- body 태그 안에 내용이 실제적으로 사용자에게 보이는 내용 -->
<h1>문자셋 UTF8 테스트</h1>
</body>
</html>
```

```html
<h1>이것만 써도 되나요?</h1>
<!-- h1 폰트가 가장 큼 -->
<meta charset="UTF-8">
<!-- <meta charset="UTF-8"> 만 써도 기본적으로 들어가야할 것들은 알아서 넣어줌 -->
<h2>써도된다.</h2>
<h3>써도된다.</h3>
<h4>써도된다.</h4>
<h5>써도된다.</h5>
<h6>써도된다.</h6>
<!-- h태그(header)는 6까지밖에 없다. -->
<h7>써도된다.</h7>
<h8>써도된다.</h8>
<!--
html은 엄격하지 않음. 이상한 게 있어도 알아서 처리해줌
기본적인 것이 빠지면 알아서 넣어준다.
-->

```
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<!-- html이 나온 이유를 설명하는 태그 a
Hyper Text Markup(표시) Lauguage
-->
<!-- a태그 : 하이퍼텍스트 -->
<a href="http://daum.net">다음</a>
<!-- p태그 : 글이 단락으로 나눠짐. 개발자에겐 그닥 중요하진 않다. -->
<p>
그냥 글 단락(paragraph)을 표시하는 태그 p
</p>
<p>
p태그를 쓰면 글이 단락으로 나눠진다.
</p>

<!-- html에서는 엔터로 띄어지지 않는다. -->
안녕하세요.
프리태그입니다.

<!-- br 태그 : 엔터 기능-->
<br>안녕하세요.<br> br태그입니다.

<!-- &nbsp 태그 : 엔터 기능-->
<br>안녕하세요 &nbsp;&nbsp;&nbsp;&nbsp; nbsp태그입니다.

<!-- 특수키 : &lt; &gt; &copy; - 엔터(br)와 스페이스(nbsp) 빼고 다른 특수키들은 외우지 않아도 된다. -->
안녕하세요 &lt; &gt; &copy; 특수키 입니다.

<!-- pre 태그 : 쓴 대로 출력 -->
<pre>
여긴 그냥 쓴 대로 나온다.

쓴대로 보인다는 얘기다.
</pre>

<!-- ol 태그 : ordered list -->
<!-- li 태그 : list item : 앞에 숫자로 순차대로 정렬 -->
<ol>
<li>ssw</li>
<li>사승원</li>
<li>saseungwon</li>
</ol>

<!-- img 태그 : img ./ 파일에 있는 사진 삽입, alt: 대체문자열(요즘엔 거의 사용X) -->
<!--
src, width, height 등 태그 안에 정의하는 것을 속성(attribute)이라고 함
속성은 단위를 안 써도 되지만, style에는 꼭 단위를 써야됨
객체 하나는 element라고 부름
인스턴스와 오브젝트의 차이?
사람 인간(의미는 같은데 느낌이 다름)
미국사람 미국인간
-->
<img src="./img/images (2).jpeg" alt="">
<br>
<img src="./img/다운로드 (1).png" style="width: 300px; height: 400px;">
<br>
<img src="./img/다운로드 (1).png" alt="" width = 300 height = 400>
<br>
<img src="./img/html.jpg" alt="이미지가 안 나올 때 글자가 나오도록 설정하는 alt">

</body>
</html>

```


#### 사용자 입력태그
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>사용자 입력태그</title>
</head>
<body>
<input type="button" value="난 버튼이야"><br>
<input type="text" value="난 텍스트 박스야">
<input type="hidden" value="난 눈에 안 보이는 텍스트 박스야">
<!--
radio : 동그란 모양의 체크
name : 하나의 그룹으로 묶어 오직 하나만 체크가 가능하게 된다.
checked : 만약 여성 회원만 가입할 수 있는 페이지면 check로 미리 체크해놓을 수 있음
-->
남<input type="radio" name="sb" value="male" >
여<input type="radio" name="sb" value="female" checked> <br>

<!-- checkbox 버튼도 name으로 그룹을 묶을 수 있으며 다중 선택이 가능 -->
보유한 스킬을 체크하세요(여러 개 사용가능) <br>
자바<input type="checkbox" name="skill" value="java">
SQL<input type="checkbox" name="skill" value="sql">
HTML<input type="checkbox" name="skill" value="html">
CSS<input type="checkbox" name="skill" value="css"> <br>

<select>
<!-- option : 누르면 선택할 수 있는 줄(?)이 나온다. -->
<option value="who"> 누구 좋아하세요? </option>
<option value="jv"> java </option>
<option value="HT"> HTML </option>
<option value="SQ"> SQL </option>
<option value="CS"> CSS </option>
<!-- selected로 디폴트 값을 설정해놓을 수 있음 -->
<option value="SQ" selected> SQL </option>
</select> <br>
<!-- textarea : 여러 줄의 텍스트를 입력할 때. 사용 사이즈 조절 가능 -->
<textarea rows=20 cols=30 > 여러 줄 입력할 때 사용한다.</textarea> <br>

<!--
기능이 괜찮아도 브라우져마다 보이는 모습이 다른 컴포넌트는 잘 사용되지 않음
특히 상업적인 사이트에는 더욱 더
-->
<!-- 색 선택 -->
<input type="color" value=""> <br>
<!-- 날짜 선택 -->
<input type="date" value=""> <br>
<!-- 범위 선택 -->
<input type="range" value=""> <br>
<!-- 숫자 선택 -->
<input type="number" value="4"><br>
<!-- file : 파일 업로드 가능한 버튼 -->
<input type="file" value=""><br>

</body>
</html>

```

#### 테이블

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>테이블은 개발자가 많이 사용한다</title>
</head>
<body>
<!--
tr : table row
td : table data
값은 꼭 td 태그 안에 넣어야 함(중요)
-->
<table>
<tr><td>이름</td><td>별명</td></tr>
<tr><td>사승원</td><td>4win1</td></tr>
<tr><td>승원</td><td>win1</td></tr>

<!-- border : 테이블에 태두리 그려줌 -->
<table border=2 width = 500 >
<tr><td>이름</td><td>별명</td></tr>
<tr><td>사승원</td><td>4win1</td></tr>
<tr><td>승원</td><td>win1</td></tr>
<tr><td><img src="./img/images.jpeg" width=300 height= 300></td></tr>
<!-- colspan : 테이블 셀 합치기 -->
<tr><td colspan="2"><img src="./img/images.jpeg" width=500 height= 300></td></tr>
<!-- rowspan : 아래 셀에 있는 값 차지하고 싶을 때 -->
<tr><td rowspan="2">사승원</td><td>4win1</td></tr>
<tr><td>win1</td></tr>
<!-- 모든 셀 차지하고 싶을 때 -->
<tr><td rowspan="2" colspan="2">사승원</td></tr>
<tr></tr>

</table>

<!-- 문제 -->
<table border="3">

<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
<tr><td>2</td><td rowspan="2" colspan="3"><img src="./img/images.jpeg" ></td><td rowspan="2" colspan="3"><img src="./img/images.jpeg" ></td><td>2</td></tr>
<tr><td>3</td><td>3</td></tr>
<tr><td>4</td><td colspan="6">HTML</td><td>4</td></tr>
<tr><td>5</td><td rowspan="2" colspan="6"><img src="./img/images (2).jpeg" ></td><td>E</td></tr>
<tr><td>6</td><td>F</td></tr>
<tr><td>7</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>

</table>

<!-- 브라우저 호완성 체크 해야됨 : https://caniuse.com/background-clip-text
연습 : https://www.w3schools.com/html/default.asp
-->
</body>
</html>

```


#### 화면나눠보기


```html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>화면을 수직 3분할</title>

<style>
div{
border: 1px solid black;
/* height: 33vh;(class로 해서 필요없어짐) 수직으로 할 땐 vh, 수평으로 할 땐 vw*/
}
/* 태그의 class 속성을 통한 스타일 주기 */
.cl_d{
height: 10vh;
}
.cl_b{
height: 80vh;
}
.cl_f{
height: 10vh;
}
.cl_ssw{
display: inline-block;
width: 32%;
height: 100%;
}
</style>
</head>
<body>
<div class="cl_d">머릿글</div>
<div class="cl_b">
<div class="cl_ssw">왼쪽</div>
<div class="cl_ssw">가운데</div>
<div class="cl_ssw">오른쪽</div>
</div>
<div class="cl_f">바닥글</div>

</body>
</html>

```


#### div


```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
/* 내부 스타일 style sheet 주석 */
/* 특징 태그에 스타일 주기 */
div {
/*border-width: 10px; /보더 두께*/
/*border-style: groove; 보더 스타일*/
/*border-color: violet; 보더 색깔*/
display: inline-block; /* 옆에 누가 오는 걸 허용하지 않음 */
width: 50px; /* vw : % , px : px */
border : 10px groove violet; /* 축약기법 */

}
img{
/* display: block; (이미지는 자동으로 inline-block), 사진 하나씩 엔터하고 싶으면 block으로*/
width: 100px;
height: 100px;
}

</style>
</head>
<body>
<img src="./img/images.jpeg" >
<img src="./img/images.jpeg" >
<img src="./img/images.jpeg" >
<img src="./img/images.jpeg" >
<img src="./img/images.jpeg" >
<img src="./img/images.jpeg" >
<img src="./img/images.jpeg" >
<img src="./img/images.jpeg" >
<img src="./img/images.jpeg" >
<img src="./img/images.jpeg" >
<img src="./img/images.jpeg" >

<!--
html 문서를 도배할 정도로 많이 쓰이는 div 태그
레이아웃을 구성할 때 많이 사용하지만 css와 잘 조합하면 기본태그 기능도
커버하기 때문에 거의 만능태그로 불린다.
-->

<!-- div(divide) : 화면 나누는 것 -->
<!-- <div style="border:5px solid blue; margin: 100px; padding: 50px;">사승원 원승사</div> -->

<!-- display 속성으로 옆에 누가 올 수 있는 것을 제어할 수 있다. -->
<div>4win1</div>
<div>>SaSW</div>
<div>saseungwon</div>

</body>
</html>

```

#### css 기본선택자

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>css기본선택자</title>

<style>
/* 많이 쓰이는 선택자 일단 몇개만 */
div,img,input{
display: inline-block;
background-color: pink;
color: black; /* 글자색 */
width: 100px;
height: 100px;
}
/* 클래스 접근 = . (주로 디자이너가 사용) */
.cl_aa {
color: blue;
font-size: 30px;
}

/* 아이디 접근 = # (주로 개발자가 사용, 페이지 내에서 아이디는 유일하기를 권장)*/
#id_bb{
color: brown;
background-color: chartreuse;
}
</style>

</head>
<body>
<div class="cl_aa">난 div1</div>
<div id="id_bb">난 div2</div>
<div>난 div3</div>
<img src="./img/images.jpeg" >
<input type="button" value="눌러보세요">
</body>
</html>

```


#### 스크립트 시작


```html
<!DOCTYPE html>
<meta charset="utf-8">
<!--
script 태그가 나타나면 브라우져 안의 스크립트 엔진이 동작
우리가 배우는 버젼은 브라우져 호완성을 위해서 ES5버전 기준
-->
<script>
// 프로그램 배울 때 가장 먼저 배워야 할 것은?. 출력문.
console.log("콘솔.로그 : 출력문은 어디에 나올까");// 세미콜론 필수
document.write("<h1>도큐먼트.라이트 : 이건 화면에 나온다.<h1>"); //h1 태그로 크기 조절 가능
alert("이걸 가장 많이 사용한다.");// 메세지 창, 반복문 같은 경우에 메세지 창이 계속 나오기 때문에 console.log가 권장됨

//자바 스크립트 언어의 특징
//변수선언에 var를 붙이는 것이 코드 가독성에 유리 (안 붙여도 상관없음)
//자바스크립트는 자바만큼 엄격하지 않아서 일부는 에러없이 실행이 되지 않음
//자바스크립트는 동적언어 이퀄(=) 오른쪽의 값에 따라 자동으로 데이터 타입이 결정됨
"use strict" // 변수 사용에 엄격모드 적용, 아주 권장됨 맨 윗줄에 기술해야됨
var ssw = "사승원" ; // 변수 ssw에 사승원이라는 문자열을 담아라
alert(ssw);
var ssw = 3; //선언부를 먼저 해석해서 미리 준비해두는 것은 hoisting 이라고 부른다.
alert(ssw);
</script>

```
#### 데이터타입

```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>
//javascript 데이터 타입
"use strict" //맨 첫 줄에 써주면 좋다
var v_num //숫자(Number)형
//alert(typeof(v_num));
var v_str = '사승원' // 문자열(String)형 // 문자열 안에 따옴표 넣고싶을 때 '사"승"원', "사'승'원"
//alert(v_str);
var v_bool = true; //불린(boolean), true, false
var v_null = null; //null. 아직 초기화하지 않았다는 표시
var v_array = ["사승원", "오승원", "육승원", true, 222, ["배열안에", "배열삽입", "가능"]];
//배열(자바스크립트는 자바와 달리 제약사항이 없다. 편하다.)
alert(v_array[5][0]);
var v_json = {
"name":"사승원",
"age":"26",
"friend":["원승사", "승사원", {"aa":"원", "bb": "치"}]}
//자바의 Map과 유사(속성, 값)
//JSON(JavaScript Object Notation)
alert("내가 제일 좋아하는 " + v_json.friend[2].bb);
alert(v_json.name);
alert(v_json["name"]); //위와 동일
alert(v_json.age);
alert(v_json["age"]); //위와 동일

</script>
```

#### 데이터타입2
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<script>

var v_check = "a772"
v_check = v_check - 0 ;
alert(v_check) ; //NaN -> Not a Number : 숫자로 바뀌지 않는 문자열은 NaN이 뜸

var v_num1 = 111;
var v_num2 = 222;
alert(v_num1, v_num2) //v_num1이 내부적으로 자동으로 타입을 문자열로 바뀜
// + 는 문자열 더하기와 숫자더하기 2가지 존재, 문자열 더하기 우선
alert(v_num1/v_num2); // -,*, / 연산은 숫자형에만 존재

//질문 1 숫자형을 문자형으로 바꾸려면
var v_num3 = 333;
alert(typeof(v_num3));
v_num3 = v.num3 + ""; //숫자에 문자열(빈공백)을 더하면 문자형으로 형변환됨
alert(typeof(v_num3));
//더하기는 숫자형보다 문자형으로 우선적으로 변환

//질문 2 문자열형을 숫자로 바꾸려면
var v_str = "666";
alert(typeof(v_str));
v_str = v_str - 0; //문자열에서 - 숫자를 하면 숫자형으로 형변환됨
alert(typeof(v_str))

</script>
```

#### 데이터타입3
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>

//boolean(true/false)
//var v_bool = true;
//var v_bool = 0 //숫자는 0만 false 나머지는 모두 true
//var v_bool = ""; //문자열은 빈공백만 false 나머지는 모두 true
//var v_bool = []; // true - 빈 객체 선언
//var v_bool = {}; // true -
//모든 객체는 true;
//v_bool = null; // null = false
//v_bool = undefined; // undefined = false
if(v_bool){
alert("이 창은 뜨나요?"); //true
}else {
alert("난 엘스"); //false
}
</script>
```

#### 배열
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>

//배열 아주 중요, 자바의 Collection(List, Set, Map) - Set : 중복제거
//var v_arr = ["사승일", "사승이", "사승삼"]; //선언 : 빈배열
//alert(v_arr.length); // 배열에서 가장 중요한 속성 // 3
//alert(v_arr[2]); // 사승삼
//alert(v_arr[v_arr.length-1]); // 인덱스는 0부터 시작이라 (length -1) // 사승삼

/*
var v_arr = [] ;
v_arr[0] = "사승일";
v_arr[1] = "사승이";
v_arr[2] = "사승삼";
v_arr[3] = ["사승사", "사승오", "사승육", "사승칠"];
alert(v_arr[v_arr.length-1]) //마지막 값
*/

//위보다 더 좋은 방법 - length 속성 중요!
var v_arr = [] ;
v_arr[v_arr.length] = "사승일";
v_arr[v_arr.length] = "사승이";
v_arr[v_arr.length] = "사승삼";
v_arr[v_arr.length] = "사승사";
alert(v_arr[v_arr.length-1])


</script>
```

#### XML이란?
```xml
<?xml version="1.0" encoding="utf-8"?>

<!--
문서교환 포맷으로 나와서 내 마음대로 태그를 정할 수 있음.
당사자끼리만 룰을 알면 되니까.
설명 파일에 많이 사용됨
-->
<친구들>
<친구>
<이름>사승원</이름>
<나이>26</나이>
<별명>4win1</별명>
</친구>
<친구>
<이름>사승이</이름>
<나이>22</나이>
<별명>2win2</별명>
</친구>
</친구들>
```

#### 연산자
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<script>

//연산자
//산술 연산자 : + - * / %
//조건 연산자 : &&(and), ||(or)
//AA && BB : && 연산자는 두 개 다 true여야 true라서 false인 것을 앞에 놓으면 성능 좋아짐
//AA || BB : || 연산자는 둘 중 하나만 true여도 true라서 true를 앞에 놓으면 성능 좋아짐
//증감 연산자 : ++, --, +=,-=
var i = 3 ;
var v_aa = i++; //후치연산
/*
var v_aa = i;
i = i + 1 ;
*/

i = 3;
var v_bb = ++i;
/*
i = i + 1 ;
var v_bb = i
*/

// 연산자 우선순위는 외우지 않고 ()를 활용한다

</script>

```
#### 반복문1

```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>
//반복문
//for(초기치;조건;증감식) // 초기치와 증감식은 생략가능, 조건은 필수
var i = 1 ;
for(;"사승원";){ // 이렇게 사용하면 while문과 정확히 똑같음
alert("무한루프"); // 무한루핑 구현할 땐 항상 빠져나가는 조건을 설정한다.
//빠져나갈 조건
i++;
if(i>10){
alert("break가 실행됩니다.")
break;
}
}

</script>
```

#### 반복문2
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>

//일반적 사용법
//반복문은 주로 배열에서 많이 사용
//배열 반복문에서는 length 중요
//배열 반복문에서는 =(이퀄) 사용 X

// 1. for문
var v_arr = ["사승일", "사승이", "사승삼", "사승사"];
for(var i = 0 ; i < v_arr.length ; i++){
alert("안녕하세요1 " + v_arr[i] + "님");
}

// 2. while문
var i = 0;
while(i < v_arr.length){
alert("안녕하세요2 " + v_arr[i] + "님");
i++;
}

var i = 0;
while(i < v_arr.length){
if(i==2){
i++; // i++없으면 무한루핑
continue; // 아래 block 스킵, for-> 증감식, while -> 조건으로
}
alert("안녕하세요3 " + v_arr[i] + "님");
i++;
}

</script>


```

####  조건문
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>
//조건문 -> 논리의 시작

// 1. if문
// switch 보다 if 사용 권장
// !를 자주 쓰도록 하자
if(!"사승원사승원"){ // 원래 true인걸 !를 붙여서 false로 만들면 alert 실행 안 됨
alert("옳지 않아!");
}
/*
if(조건){
}else if(조건){
}else {
}
*/
// 2. switch문
//hardware에서 사용
switch(조건) {
case "스위치스위치":
break;
default:
}

// 3. 삼항연산자 ?
// if else 문을 짧게 사용한 것
// 필수는 아니지만 적당히 잘 사용하자
var i = 3 ;
var v_arr = (i < 4)? "삼":"항";
alert(v_arr);

</script>

```


#### 과제
```html
<!DOCTYPE html>
<script>
var v_aa = 33;
var v_bb = 77;
//두 변수 값 스왑

v_aa = v_aa+v_bb;
v_bb = v_aa-v_bb;
v_aa = v_aa-v_bb ;

alert("v_aa : " + v_aa + "v_bb : " + v_bb);

/*

과제 : 추가 변수(v_temp) 선언 없이 산술 연산만을 이용해 두 변수 값을 바꾸시오
var v_temp;
v_temp = v_aa;
v_aa = v_bb;
v_bb = v_temp;

*/

// for(var i = 0 ; i < v_arr.length ; i++){
// if(v_arr[i]%11 == 3){
// v_arr[i] = 77;
// }else if(v_arr[i]%11 == 7){
// v_arr[i] = 33;
// }
// }
// alert("v_aa : " + v_arr[0] + "v_bb : " + v_arr[1]);


</script>
```
