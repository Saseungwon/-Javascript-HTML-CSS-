# 🤾‍♀️ 화면구현 

## 📚 1일차
#### 👏 기본 개념 
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
#### 👏 설정하기
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


#### 👏 기본 개념
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

## 📚2일차


#### 👏 사용자 입력태그
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

#### 👏 테이블

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


#### 👏 화면나눠보기


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


#### 👏 div


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

#### 👏 css 기본선택자

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


#### 👏 스크립트 시작


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

## 📚 3일차
#### 👏 데이터타입

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

#### 👏 데이터타입2
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

#### 👏 데이터타입3
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

#### 👏 배열
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

#### 👏 XML이란?
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
## 📚 3일차
#### 👏 연산자
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
#### 👏 반복문1

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

#### 👏 반복문2
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

#### 👏 조건문
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


#### 👏 과제
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
## 📚 4일차

#### 함수1
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>
//function(함수) -> 자바스크립트에서 가장 중요하다.
//함수를 사용하는 이유 -> 기본적으로 같은 코드 반복을 없애고 가독성을 높임

//함수 선언법
function f_add(p_a,p_b){ //함수 선언할 때 f_ 임의로 쓴다.
alert(p_a);
return"안녕"; // 이걸 잘 이해해야 함, 초보자들의 문제. 맨 밑줄에 생략되어 있다고 생각
}

//함수는 불러줘야 실행됨(call), 내가 호출하지 않으면 사용되지 않는다.
var v_any=f_add("사승원");
alert(v_any);

/*
### 함수(Function)선언법

선언법 1
function 함수명(매개변수1, 매개변수2....){
실행코드
return "되돌려주고싶은 값";
}

선언법 2
var 함수명 = function(매개변수1, 매개변수2....){
실행코드
return "되돌려주고싶은 값";
}
return은 함수를 종료시킨다.
return을 잘 쓰면 if/else에서 else를 없앨 수 있다.

*/

var f_add = function(p_a,p_b){
return p_a + p_b;
}
alert(f_add(3,-5)); //-2

//세 개 계산

var f_add1 = function(p_a,p_b){
return p_a + p_b;
}
alert(f_add1(f_add1(3,-5),6)); // 4

function f_check(){
alert("함수가 종료됨");
return "리턴을 만나면"; //return을 만나면 함수가 종료돼서 아래에 있는 것은 실행되지 않는다.
alert("함수가 종료됨"); //return은 함수 안에서만 사용 가능
}
f_check();//함수 콜을 해야 값이 출력됨

var v_i = 100;
function f_check1(){
if(v_i>100){
alert("최대값");
return;
}
alert("최소값");
}
f_check1(); // 함수 콜
</script>

```

#### 함수2
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>
//함수안의 코드를보고 매개변수 타입을 짐작해야 함
//함수의 매개변수 타입으로 숫자, 문자열, 배열, JSON, 함수
//함수의 return 타입도 숫자, 문자열, 배열, JSON, 함수 뭐든 와도 됨
//함수 안에 함수가 와도 된다.
//제약사항이 거의 없다.
function f_check3(p_arr){
p_arr();
}

f_check3(f_slp);
var f_slp = function(){
alert("졸리다");
}
var f_ngm = function(){
alert ("졸립니다.");
return v_j;
}

function f_check2(p_arr){
alert("이름 : " + p_arr.name + "별명 : " + p_arr.alias);
}

var v_json = {
"name" : "사승원",
"alias" : "원승사"
}
f_check2(v_json);

// function f_check(p_arr){
// for(var i = 0 ; i < p_arr.length; i++){
// alert(i + " 번째 같은 " + p_arr[i] + "입니다");
// }
// }

// f_check(["사승1", "사승2", "사승3"]);
// f_check("문자열도 length라는 속성이 있다")

function f_check4(){
return[1,3,"사승원",{"attr":["1번","2번"]}];
}
var v_rslt = f_check4();
alert(v_rslt[3].attr[1]); // 2번을 띄우고 싶다.




</script>

```

#### 함수3
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>
// 1
function f_check(){
return[1,3,"사승원",{"attr":["1번","2번"]}];
}
var v_rslt = f_check();
alert(v_rslt[3].attr[1]); // 2번을 띄우고 싶을 때

// 2
function f_check1(){
return{
"name":"사승원",
"alias":"4win1"
}
}
var v_rslt = f_check1();
alert(v_rslt.alias);

// 데이터 타입이 뭔지, 돌려받은 게 뭔지 확인
function f_check2(){
return function(){
alert("함수임");
}
}
var v_rslt = f_check2();
v_rslt(); // 함수 실행 '함수이름(괄호);'
</script>

```

#### 함수4
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>

function f_cal(p_op){ //사칙연산별 초간단 함수 리턴
function f_add(p_a,p_b){
return p_a + p_b;
}

function f_sub(p_a,p_b){
return p_a - p_b;
}

function f_mul(p_a,p_b){
return p_a * p_b;
}

function f_div(p_a,p_b){
return p_a / p_b;
}

//함수 안에 함수가 와도 된다. 하지만 밖에서 직접 부를 수는 없다.
//위 함수 안에서만 사용 가능
if(p_op == "+"){
return f_add;
}

if(p_op == "-"){
return f_sub;
}

if(p_op == "*"){
return f_mul;
}

if(p_op == "/"){
return f_div;
}

}

alert(f_cal("+")(100,200)); //300
alert(f_cal("-")(100,200)); //-100
alert(f_cal("*")(100,200)); //20000
alert(f_cal("/")(100,200)); //0.5

</script>

```

#### Call By Value VS Call By Reference
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>
//call by value, call by reference(값의 복사, 값의 참조)
//복사와 참조를 결정 짓는 건 데이터 타입
//원시타입(숫자형, 문자열형)은 복사, 객체 타입은 참조(배열, JSON) (중요)

var v_value = "난 값이야";
function f_chg(p_arg){ //복사 방식으로 동작, 원본에 손상을 못 줌
p_arg = "하하하";
alert(p_arg);
}
f_chg(v_value);
alert(v_value);

</script>

```

```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>

var v_arr = ["사승원","사승투","사승3"];
function f_chg(p_arg){ //참조방식으로 동작
p_arg[1] = "tktmddnjs";
}
f_chg(v_arr);
alert(v_arr);

</script>

```

#### 버튼
```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>버튼</title>

<style>
/* div에 스타일 주고싶을 때 / id는 #으로 */
#id_disp{
width: 300px;
height: 300px;
border: 10px solid black;
}
</style>

</head>
<body>

<!-- 꼭 기억 : 태그사이의 값에 접근하는 속성 innerHTML -->
<div id="id_disp">
사승원 사승?
<img id="id_img" src="./img/다운로드 (1).png" width="100" height="100">
</div>

<input type="button" value="눌러주세요" onclick="f_click()">
<!-- onclick일 때 f_click이라는 함수 실행하겠다는 것-->
<script>
function f_click(){
//자바스크립트에서 id값을 이용해서 태그 객체 접근
//document는 html문서 객체를 가리킴(키워드)
var v_disp = document.getElementById("id_disp");
var v_img = document.getElementById("id_img");

//접근만 하고 나면 쉽게 다시 접근할 수 있다.
v_img.width=500;
v_img.height=500;
v_img.src = "./img/html.jpg";

console.log(v_img);
console.log(v_disp.innerHTML); //콘솔로그로 눈으로 확인 / 값 읽기

v_disp.innerHTML = v_disp.innerHTML + "<h1>버튼 누르면 원래 값에 추가</h1>"
}

</script>
</body>
</html>

```

#### 오늘의 과제
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>과제</title>
<style>
img{
border : 5px solid black;
}
</style>
</head>
<body>
<img id="img_id" src="./img/1.png" width=300 height=300> <br>
<input type= button value="다음이미지" onclick="f_next()">

<script>

var v_imgs = ["1", "2", "3", "4", "5"]
var i = 0;

function f_next(){
var v_img = document.getElementById("img_id");
i++;
if(i > v_imgs.length -1 ){ i = 0 }
v_img.src = "./img/" + v_imgs[i] + ".png";
}

//사진 순서대로 넘어가는 거

</script>

</body>
</html>
```
## 📚 5일차 
#### 👏 버튼 누르면 사진 넘기기
```html
<!DOCTYPE html>

<script>
// alert("스크립트 태그는 어디에 넣어도 상관없다.")

</script>

<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>과제</title>
<style>
img{
border : 5px solid black;
}
</style>

<script>
//alert("스크립트 태그는 어디에 넣어도 된다. 위에서부터 실행됨") //하지만 이렇게 쓰지는 않는다. 권장되는 위치는 바디태그 위

</script>

</head>

<body>
<script>
// alert(document.getElementById("id_img"))
// html 태그들이 다 해석되어야 접근할 수 있기 때문에 스크립트 태그를 위에 쓰면 접근하기 전이기 때문에 null이 나온다.
// 그래서 body 태그 밑에다 쓴다.
// script 태그는 몇번이 와도 상관없으나, 관례적으로 바디태그 밑에다 쓰자
</script>

<img id="img_id" src="./img/1.png" width=300 height=300> <br>
<input type= "button" value="<" onclick="f_pre()">
<input type= button value=">" onclick="f_next()">

<script> //script 태그는 일반적으로 /body태그 위에 넣음(관례)

var v_imgs = ["1", "2", "3", "4", "5"]
var v_index = 0 ;
var v_img = document.getElementById("img_id"); //함수 안에 넣지말고 밖으로 빼기
var i = 0;

function f_next(){
// var v_img = document.getElementById("img_id");
i++;
if(i > v_imgs.length -1 ){ i = 0 }
v_img.src = "./img/" + v_imgs[i] + ".png";
}

function f_pre(){
i--;
if(i < 0 ){
i = v_imgs.length -1 ;
}
v_img.src = "./img/" + v_imgs[i] + ".png";
}

//사진 순서대로 넘어가는 거

</script>
</body>
</html>

```

#### 👏 라디오
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
#id_disp{/* #으로 id 접근 */
height: 200px;
border: 3px groove;
}
</style>
</head>
<body>
<!-- radio
앞에 속성의 이름을 쓴다
name : name에 값을 주면 그룹으로 묶여 그룹 중 오직 하나만 선택이 가능
checked : 처음부터 체크되어있음(디폴트값 설정) UX(User eXprience)를 위해 필요
-->
<div id = "id_disp"></div>
남<input type="radio" name="nm_sb" value="male">
여<input type="radio" name="nm_sb" value="female">

<!-- hr : 가로줄 -->
<hr>

내국인<input type="radio" name="nm_na" value="korean">
외국인<input type="radio" name="nm_na" value="foreign"><br>
<input type="button" value="눌러보세요" onclick="f_click()">

<script>
var v_disp = document.getElementById("id_disp");
var v_sb = document.getElementsByName("nm_sb"); // 배열을 리턴해준다고 생각하면 됨
var v_na = document.getElementsByName("nm_na"); // 배열을 리턴해준다고 생각하면 됨
//console.log(v_sb[1]) //잘 모르면 찍자
var f_click = function(){
var v_msg = "당신은 ";
for(var i = 0; i < v_sb.length; i++){
//체크된 것 확인 checked된 속성이 true
if(v_sb[i].checked){
//alert("당신의 선택은 " + v_sb[i].value + " 입니다")
if(v_sb[i].value=="male"){
v_msg += " 남자입니다.";
}else{
v_msg += " 여자입니다.";
}
break; // 계속 돌기 때문에 성능에 손해 그래서 break 꼭 필요함
}
}

for(var i = 0; i < v_na.length; i++){
//체크된 것 확인 checked된 속성이 true
if(v_na[i].checked){
//alert("당신의 선택은 " + v_sb[i].value + " 입니다")
if(v_na[i].value=="kor"){
v_msg += " 내국인입니다.";
}else{
v_msg += " 외국인입니다.";
}
break; // 계속 돌기 때문에 성능에 손해 그래서 break 꼭 필요함
}

}
v_disp.innerHTML = "<h1>" + v_msg + "</h1>";
}
</script>
</body>
</html>

```

#### 👏 체크박스1
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
<!-- 체크박스는 사용자에게 여러 개 선택을 요구할 때 취미, 관심분야 등 -->
당신의 보유 스킬을 선택해주세요(다중선택가능, 3개만 선택가능) <br>
자바<input type="checkbox" name = "nm_skill" value="java">
HTML<input type="checkbox" name = "nm_skill" value="HTML">
CSS<input type="checkbox" name = "nm_skill" value="CSS">
js<input type="checkbox" name = "nm_skill" value="javascript">
SQL<input type="checkbox" name = "nm_skill" value="SQL"> <br>
<input type="button" value="체크된 값 확인" onclick="f_ckbox()">

<script>
var v_skills = document.getElementsByName("nm_skill");
//console.log(v_skills[3]); 확인
function f_ckbox(){
var v_cnt = 0 ;
var v_rslt = []; //결과를 담을 빈 배열
for(var i=0; i < v_skills.length; i++){
if(v_skills[i].checked){
v_cnt++;
// v_rslt += v_skills[i].value+ " "; // 안 좋은 소스
v_rslt[v_rslt.length] = v_skills[i].value;
//체크된 value 값만 v_rslt배열에 담아보세요
//alert("체크한 값은 " + v_skills[i].value);
}
}
//세 개 넘게 선택되면 알림
if(v_cnt > 3){
alert("4개 이상 선택했습니다.")
}
alert("당신이 체크하신 값은 " + v_rslt + " 입니다.");
}

</script>

</body>
</html>

```


#### 👏 체크박스2
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
당신의 보유 스킬을 선택해주세요(다중선택가능, 3개만 선택가능) <br>
<!-- 4개 이상 선택 시 체크박스 선택 못한다고 알려주고 선택을 자동으로 풀어주는 기능
f_ckbox(0) 을 매개변수로 function f_ckbox(p_num) p_num을 활용
-->
자바<input type="checkbox" name = "nm_skill" value="java" onclick="f_ckbox(0)">
HTML<input type="checkbox" name = "nm_skill" value="HTML" onclick="f_ckbox(1)">
CSS<input type="checkbox" name = "nm_skill" value="CSS" onclick="f_ckbox(2)">
js<input type="checkbox" name = "nm_skill" value="javascript" onclick="f_ckbox(3)">
SQL<input type="checkbox" name = "nm_skill" value="SQL" onclick="f_ckbox(4)" > <br>
<input type="button" value="체크된 값 확인" onclick="f_ckbox()">

<script>
//동작은 잘 되지만 그리 좋은 소스는 아님
var v_skills = document.getElementsByName("nm_skill");
//console.log(v_skills[3]); 확인
function f_ckbox(p_num){
var v_cnt = 0 ; //4까지 돌고 다시 0으로 초기화됨
var v_rslt = []; //결과를 담을 빈 배열
for(var i=0; i < v_skills.length; i++){
if(v_skills[i].checked){
v_cnt++;
// v_rslt += v_skills[i].value+ " "; // 안 좋은 소스
v_rslt[v_rslt.length] = v_skills[i].value;
//체크된 value 값만 v_rslt배열에 담아보세요
//alert("체크한 값은 " + v_skills[i].value);
}
}
//세 개 넘게 선택되면 알림
if(v_cnt > 3){
alert("4개 이상 선택했습니다.");
v_skills[p_num].checked = false; // 체크박스 강제 해제
}
}

</script>

</body>
</html>
 
```


#### 👏 innerHTML1
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
#id_disp{
width: 400px;
height: 400px;
border: 2px solid black;
}
</style>

</head>
<body>
<div id="id_disp"></div>
<h1 id="id_h1"></h1>
<input type="button" value="누르시오" onclick="f_wrt()">
<script>
// innerHTML 태그 중요!!
var v_disp = document.getElementById("id_disp");
var v_h1 = document.getElementById("id_h1")
function f_wrt(){
v_disp.innerHTML = v_disp.innerHTML + "<h1>안녕!</h1>";
v_h1.innerHTML = v_h1.innerHTML + "<h1>하이!</h1>";
}

</script>
</body>
</html>

```


#### 👏 innerHTML2
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
#id_disp{
width: 400px;
height: 400px;
border: 2px solid black;
}
</style>

</head>
<body>


<div id="id_disp"></div>
<!-- value에 쓰면 텍스트박스 초기값 / placeholder에 쓰면 텍스트박스에 글씨 쓰면 초기값이 자동으로 없어짐 -->
<!--
## readonly vs disabled
readonly는 value값을 서버로 보낼 수 있으나, disabled는 서버로 보낼 수 없음
물론 프로그램적으로 조작하면 보낼 수 있다.
-->
<!--
<input id = "id_txt" type="text" value="readonly로 설정하면 안 지워짐" size=10 placeholder="여기에 원하는 단을 쓰세요" readonly><br>
<input type="text" value="readonly로 설정하면 비활성됨" size=10 placeholder="여기에 원하는 단을 쓰세요" disabled><br>
-->

<input id = "id_txt" type="text" value="1" size=10 placeholder="여기에 원하는 단을 쓰세요" readonly><br>
<input type="button" value="누르시오" onclick="f_wrt()">
<script>
// innerHTML 태그 중요!!
var v_disp = document.getElementById("id_disp");
var v_txt = document.getElementById("id_txt")

// var v_num = 1; /* 1 ~ 9 */
function f_wrt(){
alert(v_txt.value); // 사용자 입력값 읽어오기
//v_txt.value = "999"; // 텍스트 박스에 값 쓰기
//id_disp에 구구단 2단 출력
var v_str = "<table border=2>"; //빈 문자열
for(var i=1; i <= 9; i++){
//tr td로 구구단을 테이블로 만들기
v_str += "<tr><td>" + v_dan + " X " + i + " = " + (v_dan* i) + "</td></tr>";
//alert(v_str); //어렵다 싶으면 눈으로 확인하자
}
v_str += "</table>";
//alert(v_str); // 항상 눈으로 확인하기
v_disp.innerHTML = v_str; //입출력 횟수가 많은 프로그램은 성능이 떨어짐!, 되도록 횟수를 줄여서
}

</script>
</body>
</html>

```


#### 👏 구구단테이블 만들기 문제
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>

<style>
#id_disp{
width: 400px;
height: 400px;
border: 2px solid black;
display: inline-block;
}
</style>

</head>
<body>
<div id="id_disp"></div>
<!-- value에 쓰면 텍스트박스 초기값 / placeholder에 쓰면 텍스트박스에 글씨 쓰면 초기값이 자동으로 없어짐 -->
<!--
## readonly vs disabled
readonly는 value값을 서버로 보낼 수 있으나, disabled는 서버로 보낼 수 없음
물론 프로그램적으로 조작하면 보낼 수 있다.
-->
<!--
<input id = "id_txt" type="text" value="readonly로 설정하면 안 지워짐" size=10 placeholder="여기에 원하는 단을 쓰세요" readonly><br>
<input type="text" value="readonly로 설정하면 비활성됨" size=10 placeholder="여기에 원하는 단을 쓰세요" disabled><br>
-->

<script>
var v_disp = document.getElementById("id_disp");
for(var i=1; i <= 9; i++){
var v_str = "<table border=2> <tr>"
for(var j = 1; j<= 9; j++){
v_str += "<td>" + i + " X " + j + " = " + (i* j) + "</td>" + "</tr>";
//alert(v_str)
}
v_str += "</table>";
v_disp.innerHTML += v_str;
}



</script>
</body>
</html>
 
```
## 📚 6일차

#### 구구단 테이블 만들기
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>

<style>
#id_disp{
width: 2000px;
height: 400px;
border: 1px solid red;
}
</style>
</head>
<body>
<div id="id_disp"></div>
<input type="button" value="누르세요" onclick="f_gugu()">

<script>
var v_disp = document.getElementById("id_disp");

function f_gugu(){
var v_tblStr = "<table border>";
for(var i=2; i<=9; i++){
v_tblStr += "<td>" + f_dan(i) + "</td>"
}
v_tblStr += "</tr></table>";
v_disp.innerHTML = v_tblStr; // 출력
}

function f_dan(p_dan){
var v_tblStr = "<table border=1>";
for(var i=1; i<=9; i++){
v_tblStr += "<tr><td>" + p_dan + " X " + i + " = " + (p_dan*i) + "</td></tr>"
}
v_tblStr += "</table>";
return v_tblStr;
}


// function f_gugu(){
// var v_tblStr = "<table border=1>";
// v_tblStr += "<tr>";

// for(var i =1; i <=9; i++){
// v_tblStr += "<tr>";
// for(var v_dan = 2; v_dan<=9; v_dan++){
// v_tblStr +="<td>" + v_dan + " X " + 1 + " = " + (v_dna*1) + "</td>";
// }
// v_tblStr += "</tr>";
// }
// v_tblStr += "</table>";
// v_disp.innerHTML = v_tblStr;
// }

</script>
</body>
</html>

```

#### 변수Scope
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>
//자바스크립트에서 변수스코프(범위)
//전역변수, 지역변수(function 기준)
//function 안에 선언되었으면 지역변수, ()랑은 관계없음
//es5 버전 기준

var v_global = "전역변수";
function f_scope(){
var v_global = "지역변수"; // function 안에 선언된 건 function 안에서만 사용가능
}
f_scope();
alert(v_global);
</script>

```

#### SELECT
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>선택박스(콤보박스)</title>
</head>
<body>
<!-- select : 세로로 내려오는 선택창
selected : 디폴트값
<select onchange="f_chg()"> : 맨날 쓰는 거, 사용자가 선택을 변경하면 값을 바꿔라
-->

<!-- 모바일에서 select를 체크박스 대용으로 사용되고 있음
multiple : 여러 개 선택 가능하게 해줌
size : 펼쳐진 사이즈 값
-->
<select id= "id_sel" multiple size=3 onchange="f_chg()">
<option value="0">선택하세요</option>
<option value="win" selected>4win1</option>
<option value="tk">tktmddnjs</option>
<option value="sa">saseungwon</option>
<option value="ssw">사승원</option>

</select>

<script>
var v_sel = document.getElementById("id_sel")
function f_chg(){
// alert("선택하신 값은 " + v_sel.value + " 입니다.");
// 밑에 있는 쿼리를 v_sel.value 하나로 쓸 수 있다. 데스크탑에서 사용

//alert(v_sel.options[1].selected)//options는 배열이다.
//var v_opts = v_sel.options; // 줄여 쓸 수 있는 것은 오직 객체만

//multiple은 모바일에서 사용
var v_selVal = [];
for(i = 0; i< v_opts.length; i++){
if(v_opts[i].selected){
v_selVal[v_selVal.length] = v_opts[i].value;
}
}
alert("선택하신 값은 " + v_selVal + " 입니다." )
}

</script>

</body>
</html>

```

#### TEXTAREA
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
<!-- textarea : 여러 줄 입력 가능 -->
<textarea id="id_ta" cols="30" rows="10">
이건 여러 줄 입력하는 것

</textarea><br>
<input type="button" value="누르시오" onclick="f_ck()">

<script>
function f_ck(){
alert(document.getElementById("id_ta").value);

}

</script>
</body>
</html>

```

#### Math.Random
```html
<!DOCTYPE html>
<meta charset="utf-8">
<script>
//원래 지원되는 (bullt-in) Math 객체
//random
/*
for(var i = 1; i<=10; i++){
alert(Math.random()); //값 0 <= X < 1 // 0.??????????????????
}
*/

alert(Math.ceil(0.1)); // ceil : 올림 = 1
alert(Math.floor(0.9)); // floor : 내림 = 0
alert(Math.round(0.5)); // round : 반올림 = 1

//1~100사이의 랜덤한 숫자를 발생시키려면
alert(Math.ceil(Math.random()*100));
//55~100사이의 랜덤한 숫자를 발생시키려면
alert(Math.ceil(Math.random()*45)+55);

//자동 계산
function f_ran(p_start, p_end){
return Math.round(Math.random()*(p_end-p_start))+ p_start;
}
for(var i=0; i<=10; i++){
console.log(f_ran(54,111));
}
</script>

```

#### setTimeout : 비동기함수
```html
<!DOCTYPE html>
<meta charset="utf-8">
<!-- setTimeout : 비동기함수-->
<script>
//자바스크립트 대표적 비동기 함수 setTimeout

function f_ck(){
alert("안녕하세요");
}
setTimeout(f_ck,1000); /* 1000ms 뒤에 f_ck 함수를 불러오라는 의미*/
alert("setTimeout(f_ck,1000); 1000ms 뒤에 f_ck 함수를 불러오라는 의미 "); //이게 f_ck보다 먼저 뜸
</script>

```


#### 오늘의 과제(수정필요)
```html
## 수정해야됨
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>오늘의 과제</title>
</head>
<body>
<table border="1">
<tr>
<td>아이디</td>
<td><input id= "id_id" type="text" value=""></td>
</tr>

<tr>
<td>암호</td>
<td><input id= "id_pass" type="password" value=""></td>
</tr>

<tr>
<td>성별</td>
<td>
남<input type="radio" name="sb" value="m">
여<input type="radio" name="sb" value="f">
</td>
</tr>

<tr>
<td>취미</td>
<td>
자바<input type="checkbox" name="skill" value="java">
자바스크립트<input type="checkbox" name="skill" value="js">
SQL<input type="checkbox" name="skill" value="sql">
</td>
</tr>

<tr>
<td colspan="2"><textarea id="id_txt"cols=45 rows=20></textarea></td>
</tr>

<tr>
<td colspan="2"><input type="button" value="확인" onclick="f_wr()"></td>
</tr>
</table>

<script>
var v_id = document.getElementById("id_id").value ;
var v_pass = document.getElementById("id_pass").value;
var v_sb="";
for(var i = 0; i< )
= document.getElementsByName("sb").value;
var v_skills = document.getElementsByName("skill").value;
var txt = document.getElementById("id_txt").value;

function f_wr(){
document.getElementById(id_txt).value = v_id ;

}

</script>
</body>
</html>


```

#### 오늘의 과제(답)
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<table border=1>
<tr>
<td>아이디</td>
<td><input id="id_id" type=text value=""></td>
</tr>
<tr>
<td>암호</td>
<!--password는 보안상 입력글자가 *로 보이는 text-->
<td><input id="id_pw" type=password value=""></td>
</tr>
<tr>
<td>성별</td>
<td>
남<input type=radio name="nm_sb" value="m">
여<input type=radio name="nm_sb" value="f">
</td>
</tr>
<tr>
<td>취미</td>
<td>
자바<input type=checkbox name="nm_hobby" value="java">
자바스크립트<input type=checkbox name="nm_hobby" value="js">
오라클<input type=checkbox name="nm_hobby" value="sql">
</td>
</tr>
<tr>
<td colspan=2><textarea id="id_ta" cols=45 rows=10 readonly></textarea></td>
</tr>
<tr>
<td colspan=2><input type=button value="확인" onclick="f_ok()"></td>
</tr>
</table>
<script>
var v_rsb = document.getElementsByName("nm_sb");
var v_ckhobby = document.getElementsByName("nm_hobby");
function f_ok(){
//아이디 가져오깅
var v_id = document.getElementById("id_id").value;
//암호 가져오깅
var v_pw = document.getElementById("id_pw").value;
//성별 가져오깅
var v_sb="";
for(var i=0; i < v_rsb.length; i++){
if(v_rsb[i].checked){
v_sb = v_rsb[i].value;
break;
}
}
if(v_sb=="m") v_sb="남자";
else v_sb = "여자";
//취미 가져오깅
var v_hobbis = [];
for(var i=0; i< v_ckhobby.length; i++){
if(v_ckhobby[i].checked){
v_hobbis[v_hobbis.length] = v_ckhobby[i].value;
}
}
//최종 메세지 맹글깅
// textarea에서 엔터키는 escape sequence 문자 \n
var v_finalMsg = "당신의 아이디는 " + v_id + " 이고\n\n";
v_finalMsg += "암호는 " + v_pw + " 이며\n\n";
v_finalMsg += "성별은 " + v_sb + " 이며\n\n";
v_finalMsg += "취미는 " + v_hobbis + " 이네용 맞나용?";

//최종 메세지 textarea에 출력
document.getElementById("id_ta").value=v_finalMsg;
}
</script>
</body>
</html>

```
## 📚 7일차

#### setTimeout2
```html
<!DOCTYPE html>
<meta charset="utf-8">
<!-- setTimeout : 비동기함수-->
<script>
//자바스크립트 대표적 비동기 함수 setTimeout

function f_ck(p_client){
alert(p_client + p_sec + "안녕하세요");
}
setTimeout(f_ck, 3000, "사승원", "4win1"); /* 1000ms 뒤에 f_ck 함수를 불러오라는 의미*/
alert("setTimeout(f_ck,1000); 1000ms 뒤에 f_ck 함수를 불러오라는 의미 "); //이게 f_ck보다 먼저 뜸
</script>

```


#### 재귀호출
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>재귀호출</title>
<style>
#id_disp{
height: 50px;
border : 1px solid black;
}
</style>

</head>
<body>
<div id="id_disp"></div>
<input type="button" value="누르세요" onclick="f_ck()">
<script>
//1~특정숫자까지 합을 구하는 함수
var v_disp = document.getElementById("id_disp"); // 참조방식(가능)
//var v_disp = document.getElementById("id_disp").innerHTML; // 복사방식 (불가능)

/*
function f_sum(p_num){
var v_sum = 0;
for(var i=1; i<=p_num; i++){
v_sum += i;
}
return "1부터 " + p_num + "까지 합은 " + v_sum + " 입니다";
}
*/

function f_sum(p_num){
if(p_num ==1){
return 1;
}
return p_num * f_sum(p_num-1); //자신속에서 자신을 호출(재귀호출), 무한루핑 구조라서 종료조건을 먼저 생각하고 써야됨
}
/*
f_sum(4) --> 4 + f_sum(3)
--> 3 + f_sum(2)
--> 2 + f_sum(1)
+ 1
*/
var v_i = 1;
function f_ngm(){
alert(i + "번째" + "사승원");
v_i++;
setTimeout(f_ngm, 500);
}

function f_ck(){
setTimeout(f_ngm,500); //재귀호출로 많이 사용됨
//v_disp.innerHTML = "팩토리아 5! = " + f_sum(5);
}
</script>
</body>
</html>

```


#### Position
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>

<style>
div{
width: 200px;
height: 200px;
border : 1px solid black /* 레이아웃 잡을 땐 항상 이게 있으면 도움됨 */
}
#ssw {
/* position: static; 기본값은 브라우져가 알아서 하라고 해서 밑에 값을 써도 움직이지 않음*/
/* position: relative; static으로 자리잡은 그 지점에서 설정한 값만큼 움직임*/
position: absolute;/* 브라우저 화면 왼쪽 상단 모서리 기준으로 움직임(사실 레이어가 붕 뜸) */
left: 300px;
top: 100px;
}
</style>
</head>
<body>
<div>안녕1</div>
<div id="ssw">안녕2</div>
<div>안녕3</div>
</body>
</html>

```


#### Posision2
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
div{
position: relative;
width: 150px;
height: 150px;
border: 2px solid black;
}
.ssw {
/*
부모가 relative이고 자식이 absolute일 때 자식의 좌표기준점이
부모의 왼쪽 상단 모서리로 바뀜
레이아웃 잡을 때 기본은 일단 static으로 대략 모양을 만든 다음에 relative나 absolute를 사용하는 것임
처음부터 relative나 absolute를 사용하면 뒷감당이 안됨
*/
position: absolute;
height: 30px;
border: 2px solid palevioletred;
}
.special{
top: 30px;
left: 50px;
}

</style>
</head>
<body>
<div>포지션1</div>
<!-- 태그 안에 태그를 표현할 때 바깥태그 부모(parent), 안쪽태그 자식(child)
자식의 자식 자손
-->
<div>
<div class="ssw">포지션2.1</div>
<div class="ssw special">포지션2.2</div>
<div class="ssw">포지션2.3</div>
<div class="ssw">포지션2.4</div>
</div>
<div>포지션3</div>
</body>
</html>

```


#### 벽에 튕기는 공
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
#ssw{
position: absolute; /* 움직이려면 relative나 absolute가 있어야 됨 */
width: 100px;
height: 100px;
background-color: chartreuse;
top: 150px;
left: 100px;/* inline style 값이 내부 style값보다 우선순위가 높음 */

/* 알아두면 쓸만한 css */
border-radius: 50px; /* width or height 값의 절반값을 주면 원형됨, 모서리를 둥글게 */
background-image: url("./img/공.jpeg");/*이미지 삽입*/
background-size: 120px 120px;
/* background-size: 100px 100px; */
}
.cl_bar{
position:absolute;
width:100px;
left: 600px;
height: 100vh;/* 높이 : 100퍼센트 */
background-color: crimson;
}

.cl_bar2{
position:absolute;
width:100vw;/* 넓이 : 100퍼센트 */
height: 100px;
top: 450px;
background-color: crimson;
}

</style>
</head>
<body>
<div class= "cl_bar">기둥</div>
<div class= "cl_bar2">기둥2</div>
<div id="ssw"></div>
<input type="button" value="오른쪽으로 가기" onclick="f_cont()">
<input type="button" value="그만가" onclick="f_stop()">
<script>
var v_bar = document.getElementsByClassName("cl_bar")
var v_ssw = document.getElementById("ssw");
var v_mvR = 10; /* 움직이는 폭 */
var v_mvT = 10; /* 움직이는 상하 */
var v_timer; /*지역변수를 전역변수로 만들어서 밖에서 부를 수 있게 해줌*/
//버튼 누르면 속도 빨라지는 거 안 되게 한 번만 실행할 수 있게 해주기
//직접 가는 걸 중간에 한 번 거쳐서 조건을 줘서 제어가능(proxy 패턴)
var v_run = false;
function f_cont(){
if(!v_run){
f_move();
v_run = true;

}
}

//멈추기
function f_stop(){
//clearTimeout(만든 타이머를 없애준다.) <--> setTimeout
clearTimeout(v_timer);
v_run =false;
}

//움직이기
function f_move(){
if(!v_ssw.style.left){/* 원래 빈공백인데 !로 '만약 정의되지 않았다면?'*/
v_ssw.style.left = "100px"; /* 초기값을 100px로 정의할 수 있음 단위값(px)를 꼭 줘야함*/
v_ssw.style.top = "150px";
}
//parseInt(v_ssw.style.left);
v_ssw.style.left = parseInt(v_ssw.style.left) + v_mvR + "px";
v_ssw.style.top = parseInt(v_ssw.style.top) + v_mvT + "px";

var v_left = parseInt(v_ssw.style.left);
var v_right = parseInt(v_ssw.style.left)+ 100;
var v_top = parseInt(v_ssw.style.top) ;
var v_bottom = v_top + 100;

if(v_right >= 700 || v_left <=0){// 좌우충돌
v_mvR = -v_mvR;
}

if(v_bottom >= 450 || v_top <=0){//방향 바꾸기
v_mvT = -v_mvT;
}
v_timer = setTimeout(f_move,50);//0.05초마다 버튼 누르면 자동으로 오른쪽으로 움직임
}

</script>
</body>
</html>

```


#### 오늘의 과제
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
/* *은 모든을 의미함 */
*{
margin:0;
}
#container{
margin:0 auto; /* 박스 선 수평 중앙 정렬방법 */
width: 500px;
height: 95vh;
border :1px solid black;
text-align: center; /* 박스 내부 수평 가운데 정렬 */
}
</style>
</head>
<body>
<!--
일반적으로 레이아웃 잡을 때 화면전체를 잡는 div 태그를 주고
그것의 id나 class를 container라는 이름으로 많이 줌
-->
<div id="container">
<script>
for(var i=1; i<=6; i++){
document.write("<h"+i+">난 사승원입니다!</h"+i+">");
if(i==6){
i--;
}else if(i==1){
break;
}
}
// for(var i=5; i>=1; i--){
// document.write("<h"+ i +">난 사승원입니다!</h"+ i+ ">" );
// }

// 오늘의 과제 위 for문 2개를 for 한 번만 사용해서 같은 결과가 나오도록 합니다.
// 추가적인 조건문 등의 사용은 상관없다.
</script>
</div>
</body>
</html>

```

## 📚 8일차
#### 오버플로우(overflow)
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
#id_parent{
position: relative;
left: 300px;
top: 100px;
border: 5px solid black;
width: 150px;
height: 150px;
overflow: hidden; /*overflow: hidden; 부모 영역을 벗어난 자식 감추기 */
/* overflow: scroll; 스크롤바 생김 */
/* overflow: auto; 부모 영역을 벗어나면 자동으로 스크롤바 생김*/
}
.cl_child{
display: inline-block;
width: 150px;
height: 150px;
}
#id_row1, #id_row2 {
position: absolute; /* static은 움직이지 않음 */
width: 620px;
height: 150px;
border :1px solid pink;
}
#id_row2{
left: 620px;
}

</style>
</head>
<body>
<div id="id_parent">
<div id="id_row1">
<div class="cl_child">
<img src="./img/1.png" width="150" height="150">
</div>

<div class="cl_child">
<img src="./img/2.png" width="150" height="150">
</div>

<div class="cl_child">
<img src="./img/3.png" width="150" height="150">
</div>

<div class="cl_child">
<img src="./img/4.png" width="150" height="150">
</div>
</div>

<div id="id_row2">
<div class="cl_child">
<img src="./img/5.png" width="150" height="150">
</div>

<div class="cl_child">
<img src="./img/6.png" width="150" height="150">
</div>

<div class="cl_child">
<img src="./img/7.png" width="150" height="150">
</div>

<div class="cl_child">
<img src="./img/8.png" width="150" height="150">
</div>
</div>
</div>

<input type="button" value="움직여" onclick="f_move()">
<script>
var v_row1 = document.getElementById("id_row1");
var v_row2 = document.getElementById("id_row2");
function f_move(){
if(!v_row1.style.left){//문자열 공백이 false임을 이용해서 초기화
v_row1.style.left = "0px"; //움직여야 해서 빼기
v_row2.style.left = "620px";
}
v_row1.style.left = parseInt(v_row1.style.left) - 10 + "px";
if(parseInt(v_row1.style.left)<= -620){
v_row1.style.left = "620px";
}
v_row2.style.left = parseInt(v_row2.style.left) - 10 + "px";
if(parseInt(v_row2.style.left)<= -620){
v_row2.style.left = "620px";
}
//px를 제외한 숫자를 -10 해야되니까 parseInt로 연산 후 "px" 붙여야됨
setTimeout(f_move, 10);

}


</script>
</body>
</html>

```

#### none과 visible
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>
#id_disp{

/*display:block 공간도 차지하지 않고 눈에도 보이지 않음(none, block) */
/*visibility:visible; 내용이 보이진 않으나 공간은 차지(hidden, visible) */
}
</style>
</head>
<body>
<div id = "id_disp">
<h1>사승원123</h1>
</div>
<input id="id_btn" type="button" value="안 보이게" onclick="f_showhidden1()">
<script>
//Toggle은 기본이니 잘하자
var v_disp = document.getElementById("id_disp");
var v_btn = document.getElementById("id_btn")
var v_visi = true; /* 현재 보이는 상태를 true라고 지정, 초기값 */

// 이런 코드는 좋지 않음. 코드가 버튼의 value값(문자열)에 의존성을 가짐
function f_showhidden1(){
if(v_btn.value == "안 보이기"){
v_disp.style.visibility = "hidden";
v_btn.value = "보이기";
}else{
v_disp.style.visibility = "visible";
v_btn.value = "안 보이기";
}
}

function f_showhidden(){
if(v_visi){
//v_disp.style.display = "none"; // 안 보이게 style 설정
v_disp.style.visibility = "hidden";
v_btn.value = "보이기";
v_visi = false;
return; //function 종료 기능 else 필요 없어짐
}
//v_disp.style.display = "block"; // 안 보이게 style 설정
v_disp.style.visibility = "visible";
v_btn.value = "안 보이기";
v_visi = true;
}
//setTimeout(f_showhidden,500); 누르면 깜빡이는 기능

</script>
</body>
</html>

```

#### z-index
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<style>
div{
position: absolute;
width: 150px;
height: 150px;
border:3px solid black;
}
#id_ssw1{
/*background-color:rgb(255, 0, 200);/* #ffffff */
background-color: #ff0000; /* #f00으로 써도됨. 16진수 표기법 */
z-index: 272;

}
#id_ssw2{
background-color: rgba(255,0,0,0.5) ;/* 1이면 불투명, 0이면 완전 투명, 0.5면 반투명 */
left: 75px;
top: 75px;
z-index: 337;
}
#id_ssw3{
color: royalblue;
background-color: red;
left: 100px;
top: 100px;
z-index: 1000;
}
#id_ssw4{
left: 150px;
top: 150px;
background-color: rebeccapurple;
z-index: 9999999;
}
input{
position: absolute;
top: 400px;
}
</style>
<body>
<div id="id_ssw1">사승원1</div>
<div id="id_ssw2">사승원2</div>
<div id="id_ssw3">사승원3</div>
<div id="id_ssw4">사승원4</div>
<input type="button" value="레이어 순서" onclick="f_zindex()">
<script>
var v_ssw1 = document.getElementById
function f_zindex(){
//스크립트에서 -(하이픈)은 산술연산 빼기로 인식하기 때문에
//-을 빼고 다음 글자를 대문자로 쓴다
document.getElementById("id_ssw1").style.zIndex="999999";
v_ssw1.style.zIndex

}
</script>
</body>
</html>

```

#### 오늘의 문제(수정필요)
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<input type="button" value="바탕화면색 랜덤하게 0.3초마다 바뀌기" onclick="f_ranColor">
<script>
var v_hexa =[];
for(var i=0; i<=9; i++){
v_hexa[hexa.length] = ""+i;
}
v_hexa[v_hexa.length] = 'a';
v_hexa[v_hexa.length] = 'b';
v_hexa[v_hexa.length] = 'c';
v_hexa[v_hexa.length] = 'd';
v_hexa[v_hexa.length] = 'e';
v_hexa[v_hexa.length] = 'f';

function f_16RanColor(){
//16진수 랜덤한 color값 리턴하도록 작성
var v_ranSu = "#";
for(var i=1; i <6;)
var v_ranSu = v_hexa[Math.floor(Math.random()*v_hexa.length)];
}
return v_ranSu;
//return "#000055";
}

function f_rgbRanColor(){
//16진수 랜덤한 color값 리턴하도록 작성
return "rgb(255,255,0)";
}

function f_ranColor(){
//body 태그는 문서에 오직 한 번만 나와야 하기 때문에 굳이 id를 주지 않아도
//아래처럼 접근할 수 있음
document.body.style.backgroundColor = f_16RanColor();
setTimeout(f_ranColor,300); //0.3초마다 재귀호출
}

</script>
</body>
</html>

```



## 📚 10일차 

#### 레이어 돌리기
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #wrapper{
            position: relative;
            top: 50px;
            margin: 0px auto; /* 수평 가운데 정렬 */
            width: 600px;
            height: 100vh;
            border: 1px solid black;
        }
        img{    /* img태그를 활용해서 모든 이미지 크기 조정 */
            width: 275px;
            height: 275px;
        }
        .cl_layer{
            position: absolute;
        }
        #id_son{
            z-index: 1000;
            /* 아이디 값으로 하는 것 말고도 여러 방법으로 특정 사진을 맨위로 올라오게 할 수 있다.  */
            /* #id_son */
            /* style="z-index: 1000;" */
            /* .class="cl_son" */
        }

    </style>
</head>
<body>
    <input type="button" value="<" onclick="f_pre()">
    <input id="id_num" type="text" size="6" value="">
    <input type="button" value=">" onclick="f_next()">
    <div id="wrapper">
        <div id="id_son" class="cl_layer" > 
            <table border="2">
                <tr>
                    <!-- 사진에 링크 : <a> 태그로 묶어주기 -->
                    <td><a href="http://naver.com"><img src="./img/son1.jpeg"></a></td>
                    <td><img src="./img/son2.jpeg"></td>
                </tr>

                <tr>
                    <td><img src="./img/son3.jpeg"></td>
                    <td><img src="./img/son4.jpeg"></td>
                </tr>

                <tr>
                    <td><img src="./img/son5.jpeg"></td>
                    <td><img src="./img/son6.jpeg"></td>
                </tr>

            </table>
        </div>

        <div class="cl_layer">
            <table border="2">
                <tr>
                    <td><img src="./img/dog1.jpeg"></td>
                    <td><img src="./img/dog2.jpeg"></td>
                </tr>

                <tr>
                    <td><img src="./img/dog3.jpeg"></td>
                    <td><img src="./img/dog4.jpeg"></td>
                </tr>

                <tr>
                    <td><img src="./img/dog5.jpeg"></td>
                    <td><img src="./img/dog6.jpeg"></td>
                </tr>

            </table>
        </div>

        <div class="cl_layer">
            <table border="2">
                <tr>
                    <td><img src="./img/river1.jpeg"></td>
                    <td><img src="./img/river2.jpeg"></td>
                </tr>

                <tr>
                    <td><img src="./img/river3.jpeg"></td>
                    <td><img src="./img/river4.jpeg"></td>
                </tr>

                <tr>
                    <td><img src="./img/river5.jpeg"></td>
                    <td><img src="./img/river6.jpeg"></td>
                </tr>

            </table>
        </div>

        <div class="cl_layer">
            <table border="2">
                <tr>
                    <td><img src="./img/pool1.jpeg"></td>
                    <td><img src="./img/pool2.jpeg"></td>
                </tr>

                <tr>
                    <td><img src="./img/pool3.jpeg"></td>
                    <td><img src="./img/pool4.jpeg"></td>
                </tr>

                <tr>
                    <td><img src="./img/pool5.jpeg"></td>
                    <td><img src="./img/pool6.jpeg"></td>
                </tr>

            </table>
        </div>

    </div>
    <script>
        var v_layers = document.getElementsByClassName("cl_layer");
        var v_num = document.getElementById("id_num");
        var v_index = 0; // 레이어 초기값,  첫 번째 레이어를 맨 위로 올려놓은 상태 
        var v_currentTop = 0; // 현재 맨위의 레이어의 index 값을 저장하는 변수 

        v_num.value = (v_index+1)+ "/" + v_layers.length; //나누기 연산이 되면 안 돼서 /를 문자열 "/"로
        
        // 레이어 수가 많으면 init 말고 v_currentTop으로 해야 효율적
        // function f_init(){
        //     for(var i=0; i < v_layers.length; i++){
        //         v_layers[i].style.zIndex = 1; //모든 레이어 zIndex값을 1로 초기화 
        //     }
        //}

        function f_next(){
            //f_init();
            v_index++;
            if(v_index > (v_layers.length -1)){
                v_index = 0;
            }
            v_num.value = (v_index+1)+ "/" + v_layers.length;
            v_layers[v_currentTop].style.zIndex = 1;
            v_layers[v_index].style.zIndex = "1000";
            v_currentTop = v_index; 
        }

        function f_pre(){
            //f_init();
            v_index--;
            if(v_index < 0){
                v_index = v_layers.length -1; //배열의 마지막 index로 
            }
            v_num.value = (v_index+1)+ "/" + v_layers.length;
            v_layers[v_currentTop].style.zIndex = 1;
            v_layers[v_index].style.zIndex = "1000";
            v_currentTop = v_index; 
        }

    </script>
</body>
</html>
```
#### 공튀기기 skew 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #ssw{
            position: absolute; /* 움직이려면 relative나 absolute가 있어야 됨 */
            width: 100px;
            height: 100px;
            background-color: chartreuse;
            top: 150px;
            left: 100px;/* inline style 값이 내부 style값보다 우선순위가 높음 */

            /* 알아두면 쓸만한 css */
            border-radius: 50px; /* width or height 값의 절반값을 주면 원형됨, 모서리를 둥글게 */
            background-image: url("./img/공.jpeg");/*이미지 삽입*/
            background-size: 120px 120px;
            /* background-size: 100px 100px; */
        }
        .cl_bar{
            position:absolute;
            width:100px;
            left: 600px;
            height: 100vh;/* 높이 : 100퍼센트 */
            background-color: crimson;
        }

        .cl_bar2{
            position:absolute;
            width:100vw;/* 넓이 : 100퍼센트 */
            height: 100px;
            top: 450px;
            background-color: crimson;
        }

    </style>
</head>
<body>
    <div class= "cl_bar">기둥</div>
    <div class= "cl_bar2">기둥2</div>
    <div id="ssw"></div>
    <input type="button" value="오른쪽으로 가기" onclick="f_cont()">
    <input type="button" value="그만가" onclick="f_stop()">
    <script>
        var v_bar = document.getElementsByClassName("cl_bar")
        var v_ssw = document.getElementById("ssw");
        var v_mvR = 10; /* 움직이는 폭 */ 
        var v_mvT = 10; /* 움직이는 상하 */
        var v_timer; /*지역변수를 전역변수로 만들어서 밖에서 부를 수 있게 해줌*/
        
        //버튼 누르면 속도 빨라지는 거 안 되게 한 번만 실행할 수 있게 해주기
        //직접 가는 걸 중간에 한 번 거쳐서 조건을 줘서 제어가능(proxy 패턴)
        var v_run = false;
        function f_cont(){
            if(!v_run){
                f_move();
                v_run = true;

            }
        }

        //멈추기 
        function f_stop(){
            //clearTimeout(만든 타이머를 없애준다.) <--> setTimeout
            clearTimeout(v_timer);
            v_run =false;
        }

        //움직이기
        function f_move(){
            if(!v_ssw.style.left){/* 원래 빈공백인데 !로 '만약 정의되지 않았다면?'*/
                v_ssw.style.left = "100px"; /* 초기값을 100px로 정의할 수 있음 단위값(px)를 꼭 줘야함*/
                v_ssw.style.top = "150px";
            }
            v_ssw.style.transform = "skewX(0deg) skewY(0deg)"
            //parseInt(v_ssw.style.left);
            v_ssw.style.left = parseInt(v_ssw.style.left) + v_mvR + "px";
            v_ssw.style.top = parseInt(v_ssw.style.top) + v_mvT + "px";

            var v_left = parseInt(v_ssw.style.left);
            var v_right = parseInt(v_ssw.style.left)+ 100;
            var v_top = parseInt(v_ssw.style.top) ;
            var v_bottom = v_top + 100; 

            if(v_right >= 700 || v_left <=0){// 좌우충돌
                v_ssw.style.transform = "skewY(45deg)"
                v_mvR = -v_mvR;
                }

            if(v_bottom >= 450 || v_top <=0){//방향 바꾸기 
                v_ssw.style.transform = "skewX(45deg)"
                v_mvT = -v_mvT;
            }
            
                v_timer = setTimeout(f_move,50);//0.05초마다 버튼 누르면 자동으로 오른쪽으로 움직임
        }
    </script>
</body>
</html>
```
#### Transform
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #id_img{
            width: 200px;
            height: 200px;
            background-image: url("./img/son1.jpeg");
            background-size: 200px 200px;
            /* border-radius: 100px; */
            /* transform: rotateX(55deg); */
            /* transform: rotate X,Y,Z(??deg) 기본값은 Z */
            transform-origin: center bottom; /* 움직임의 기준점 : transform-origin: 돌리고싶은 기준에 따라 right bottom top 등..*/
            /* transform:translateX(200px)translateY(200px); 사진 위치 설정*/
            transform: skewX(45deg); /*X축 기준으로 45도 비틀기*/
            border: 10px solid black;
            
        }

    </style>
</head>
<body>
    <div id="id_img"></div>
    <input type="button" value="누르세요" onclick="f_rot()">
    <script>
        var v_gak = 0;  //초기 각도 값 10
        var v_gakInc = 10; // 증가값 10
        var v_img = document.getElementById("id_img");

        function f_rot(){
            v_gak = (v_gak + v_gakInc) % 360; // 360이 넘어가는 값  
            v_img.style.transform= "rotate(" + v_gak + "deg)";
            setTimeout(f_rot,200);
        }
    </script>
</body>
</html>
```
#### 문자열 
```html
<!DOCTYPE html>
    <meta charset="UTF-8">
<script>
    /*
    자바 스크립트에서는 문자열 변수에 .을 찍어서 속성이나 메소드를 사용하는 순간 
    원시타입 문자열이 문자열 객체로 자동 변환됨 
    */
    var v_str = " Hello String";
    // alert(v_str.length); 
    // alert(v_str.charAt(1));
    // alert(v_str[11]); 
    // v_str[2] = 'K';  //원시 타입 데이터는 일부분을 가져올 수 있는데 일부분만 수정할 수는 없음 
    // alert(v_str);
    
    v_str.indexOf("ing"); //v_str안에 ing 문자열이 있는지 찾아라 
    alert(v_str.indexOf("ing"));
    //alert(v_str.indexOf("egg"));
    //-1은 true라는 것 잊지 말기 


    v_str.replace("Hello", "Hi^-^"); //replace는 원본을 바꾸지 않는다. 
    alert("원본 " + v_str); //Hello String

    v_str = v_str.replace("Hello", "Hi^-^"); //원래 문자열을 새로운 문자열에 넣어서 바꿔야됨 
    alert("바뀐 문자열 " + v_str); //원본 Hi^-^ String

    var v_arr = v_str.split("ll"); //return 값이 배열 
    for(var i=0; i < v_arr.length; i++){
        alert(v_arr[i]); 
        //He
        //o String
    }

    //substr : 부분추출 
    alert(v_str.substr(1,3)); // 부분추출(ell)

    //trim : 공백제거 
    alert("체크" + v_str + "체크") // 공백 확인(체크 Hello String체크)
    alert("체크" + v_str.trim() + "체크") // 공백 확인(체크Hello String체크)


</script>
```
#### 오늘의 문제 
```html
<!DOCTYPE html>
    <meta charset="UTF-8">
    <script>
    // 문제 : 모든 악마가 천사로 바뀌게 해보세요
    var v_str2 = "박태환 악마 박대환 악마 박태환 앙마 악마 악마";

        for(;v_str2.indexOf("악마") != -1;){
            v_str2 = v_str2.replace("악마", "천사")
        }
        alert(v_str2);
    /*
    v_str2 = v_str2.replace("악마", "천사");
    v_str2.indexOf("악마")
    alert(v_str2.indexOf("악마"))   //11

    v_str2 = v_str2.replace("악마", "천사");
    v_str2.indexOf("악마")
    alert(v_str2.indexOf("악마"))   //21

    v_str2 = v_str2.replace("악마", "천사");
    v_str2.indexOf("악마")
    alert(v_str2.indexOf("악마"))   //24

    v_str2 = v_str2.replace("악마", "천사");
    v_str2.indexOf("악마")
    alert(v_str2.indexOf("악마"))   //-1
    //-1은 true라는 것 잊지 말기 
    */

        // 이렇게 함수로 만들어 놓으면 편함 
        function replaceAll(p_str,p_won, p_rep){
        for(;p_str.indexOf("악마") != -1;){
            p_str = p_str.replace(p_won, p_rep);
        }
        return p_str;    
    }
    alert(replaceAll("안농 안넝 안농 안넝 히히히", "넝", "농"));
</script>
```

#### 오늘의 문제2(수정 필요)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #id_curtain{
            width: 300px;
            border: 20px groove gold;
        }
    </style>
</head>
<body>
    <div id="id_curtain"></div>
    <script>
        var v_curtain = document.getElementById("id_curtain");
        function f_large(){
            if(!v_curtain.style.height){
                v_curtain.style.height = "0px";
            }
            v_curtain.style.height = parseInt(v_curtain.style.height) + 10 + "px";
            setTimeout(f_large,100);
        }
        f_large(); //함수 실행 
    </script>
</body>
</html>
```

## 📚 11일차 

#### 어제의 문제 정답 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #id_curtain{
            width: 300px;
            border: 20px groove gold;
        }
        #id_ssw{
            display: none;
            height: 400px;
        }
    </style>
</head>
<body>
    <div id="id_curtain">
        <div id="id_ssw">
            <h1>오늘의 문제</h1>
        </div>
    </div>
    <script>
        var v_curtain = document.getElementById("id_curtain");
        var v_heighLimit = 400;
        function f_large(){
            if(!v_curtain.style.height){
                v_curtain.style.height = "0px";
            }
            v_curtain.style.height = parseInt(v_curtain.style.height) + 10 + "px";
            if(parseInt(v_curtain.style.height) >= v_heighLimit) {
                document.getElementById("id_ssw").style.display ="block";
                return; // 함수 종료(리턴 잘쓰자)
            }
            setTimeout(f_large,100);
        }
        f_large(); //함수 실행 
    </script>
</body>
</html>
```
#### 시험 문제 내기
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .cl_dap{
            display: none;
        }
    </style>
</head>
<body>
    <h1>시험</h1>
    <input type="hidden" id="id_randap" value="">
<script>
    var v_munjesu = 5; // 전체 문제수 
    var v_cnt=4; //몇지선다형인지 쉽게 바꿀 수 있다.
    var v_jungdap = []; // 정답 배열 


    //화면 모양 만들기 
    for(var i=0; i< v_munjesu; i++){
        v_jungdap[v_jungdap.length] = Math.ceil(Math.random()*4);
    }
    document.getElementById("id_randap").value = v_jungdap; // 잠시 세이브 

    for(var j=1; j <= v_munjesu; j++){
        document.write("문제"+ j +"<hr>");
        for(var i=1; i<=v_cnt; i++){
            document.write(i+"<input type=radio name=munje"+j+ " value="+ i + ">");
        }
        document.write("<input type=text class=cl_dap name=nm_dap value='정답: ' size=5>")
        document.write("<br><br>");
    }


    //텍스트 박스에 정답 담아두기 
    var v_txtDaps =document.getElementsByName("nm_dap");
    for(var i=0; i< v_txtDaps.length; i++){
        v_txtDaps[i].value = v_txtDaps[i].value + v_jungdap[i];
        
    }
</script>
점수<input type="text" id="id_disp" value="" size="5">
<input type="button" value="채점" onclick="f_test()">
<script>
    var v_disp = document.getElementById("id_disp");
    function f_test(){
        var v_userDap= []; // 사용자 답을 담을 빈 배열 
        var v_mun1 = document.getElementsByName("munje1"); //라디오버튼 4개
        for(var i=0; i<v_munjesu; i++){
            var v_rdoGrp = document.getElementsByName("munje"+(i+1));
            for(var j=0; j<v_rdoGrp.length; j++){
                if (v_rdoGrp[j].checked){
                    v_userDap[v_userDap.length] = v_rdoGrp[j].value;
                    break;
                }
            }
        }
        if(v_userDap.length != v_munjesu){
            alert("모든 문제를 풀어주세요");
            return; // 강제 종료
        }

        //사용자 답이 정답인지 체크해서, 정답이면 카운트 
        var v_jungCnt = 0; 
        for(var i=0; i< v_munjesu; i++){
            v_txtDaps[i].style.display = "inline-block"; 
            if(v_userDap[i] == v_jungdap[i]){
                v_txtDaps[i].style.backgroundColor = "rgb(95, 173, 121)";
                v_txtDaps[i].style.color = "white";
                v_jungCnt++; // 맞혔으면 카운트 증가 
            }else{
                v_txtDaps[i].style.backgroundColor = "red";
                v_txtDaps[i].style.color = "white";
            }
        }
        //점수 출력
        v_disp.value = (v_jungCnt / v_munjesu) * 100;

        //텍스트박스에 점수가 나오도록 하기
    }
</script>
    <!-- <hr>
    1<input type="radio" name="exam1" value="1">
    2<input type="radio" name="exam1" value="1">
    3<input type="radio" name="exam1" value="1">
    4<input type="radio" name="exam1" value="1"> -->
</body>
</html>
```

#### document.write
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>난 최고의 프로그래머</h1>
    <input type="button" value="누르세요" onclick="f_check()">
    <script>
        document.write("<h2>이건 잘 나와</h2>")
    </script>
    <script>
        function f_check(){
            document.write("무슨 일이 일어날까요?");// 문서를 새로 씀 -> 원래 있던 거 없어짐
            // document.write 사용에 주의, 문서가 닫히고 나서, 문서를 쓰면 새로 써짐 
            // 그래서 잘 쓰는 사람 아니면 권장하지 않음
        }

    </script>
</body>
</html>
```

#### window
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        //자주 쓰는 onload, onsize 기억 
        //브라우저가 밑에 까지 해석이 끝나면 onload가 뜬다. 
        window.onload = function(){
            alert(document.getElementById("id_btn"));
        }
        //윈도우 사이즈가 변경되었을 때 발생하는 이벤트 
        window.onresize = function(){
            console.log("window넓이 : " + window.innerWidth);
            console.log("window높이 : " + window.innerHeight);
        }
    </script>
</head>
<body>

    <input id="id_btn" type="button" value="윈도우 사이즈 확인" onclick="f_check()">

    <script>
        var v_btn = document.getElementById("id_btn");
        v_btn.onclick = function(){
            alert("window.onload를 보니 영감이 떠올랐다.")
        }

        v_btn.onclick = f_check; 

        alert("보이는 화면 넓이 " + window.innerWidth);
        v_btn.onclick = f_check; // ()를 붙이면 함수가 그냥 실행되어 버려서 주의 
        alert("보이는 화면 넓이 " + window.innerHeight);
        return;


        function f_check(){
        //window에서 자주 쓰는 속성
        alert("보이는 화면 넓이" + window.innerWidth);
        alert("보이는 화면 높이" + window.innerHeight); 
        }

        // 엄청 많이 쓰는 이벤트
            //브라우저가 밑에 까지 해석이 끝나면 onload가 뜬다. 
            //위에서 정의한 onload가 밑에서 다시 정의되면 덮어써진다.
        window.onload = function(){
            alert("문서 로딩이 끝났습니다. 더 할 게 있으신가요?");
        }
    </script>
    
</body>
</html>
```

#### 세 가지 창
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //document --> html문서 객체 
        //window 키워드 --> 브라우저 객체를 가리킴 
        window.alert("원래는 window. 하고 써야되는데 생략한 것")
        window.document.window("<h1>document의 부모는 window다</h1>")

        //자바스크립트는 세 가지 창을 지원한다. 
        //안 예뻐서 잘 쓰진 않지만 회사 프로그램에서는 자주 씀 

        //1.
        alert("메세지 창 : 안 예뻐서 디버깅에만 많이 사용함")

        //2.
        var v_userInput = prompt("사용자 입력창", "초기값");
        //확인 아니고 취소 버튼 누르면 null값이 들어오는 것에 주의
        alert("입력한 값은 " + v_userInput + " 입니다");

        //3. 
        var v_userCheck = confirm("말 그대로 yes or no"); 
        alert(v_userCheck); //확인 누르면 true, 취소 누르면 false
        
        

    </script>
    
</body>
</html>
```

#### 오늘의 과제
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        #id_ssw{
            position: relative; /* position의 디폴트는 static이라서 안 움직임*/
            width: 200px;
            height: 200px;
            background-image: url(./img/son3.jpeg);
            background-size: 200px 200px;
            
        }
    </style>
</head>
<body>
    <div id="id_ssw" ></div>
    <script>
        //onload, onresize, innerWidth, innerHeight를 이용해서 이미지가 항상 가운데에 있도록 해보기
        //브라우져 사이즈를 변경해도 가운데 있게 하기 

        var v_imgW = 200; //이미지 넓이 설정한 값
        var v_imgH = 200; //이미지 높이 설정한 값
        
        var v_wdt = window.innerWidth
        var v_hgt = window.innerHeight

        var v_img = document.getElementById("id_ssw");
        window.onload = function(){
            v_img.style.top = (v_wdt + v_imgW)/2
            v_img.style.left = (v_hgt + v_imgH)/2
        }
        window.onresize = function(){
            console.log("window넓이 : " + window.innerWidth);
            console.log("window높이 : " + window.innerHeight);
        }
        
    
    </script>
</body>
</html>
```

## 📚 12일차 

#### frameset1
```html
<meta charset="UTF-8">
<!-- 엄청 악용되어서 범용사이트에는 거의 사용되지 않는 태그 -->
<frameset rows="50%,*">
    <frame src="./newWin1.html">
    <frameset cols="33%,33%,*">
        <frame src="./newWin.html">
        <frame src="./newWin.html">
        <frame src="./newWin.html">
    </frameset>
</frameset>
```

#### newWin
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    #id_disp {
        border:1px solid gold;
    }
</style>
</head>
<body>
    <div id="id_disp"></div>
    메세징 <input id="id_txt1" type=text value=""><br>
    <input id="id_btn" type=button value="전달">
    <input type="button" value="창 닫기" onclick="f_wClose()">
<script>

    function f_wClose(){
        //opener.v_newWin = null;
        //window.close();
        opener.f_wClose();
    }

    var v_btn = document.getElementById("id_btn");
    var v_txt1 = document.getElementById("id_txt1");
    function f_clk(){
        // 열린 윈도우는 넘겨받은 값이 없어서 누가 열어주었는지 개발자는 알수 없어용
        // 그래서 준비된 키워드 ? opener
        opener.document.getElementById("id_txt2").value = v_txt1.value;
        opener.document.getElementById("id_disp").innerHTML +=
                              v_txt1.value + "<br>";
    }
    v_btn.onclick = f_clk;
</script>    
</body>
</html>
```

#### newWin1
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    #id_disp {
        border:1px solid gold;
    }
</style>
</head>
<body>
    메세징 <input id="id_txt1" type=text value=""><br>
    <input id="id_btn" type=button value="전달">
    <input type="button" value="새창" onclick="f_new()">
<script>
    function f_new(){
        window.open("newWin2.html","aaa","width=200, height=200,left=100"); 
    }

    var v_btn = document.getElementById("id_btn");
    var v_txt1 = document.getElementById("id_txt1");
    function f_clk(){
        //부모 키워드 
        parent.frames[2].document.getElementById("id_txt1").value = 
         v_txt1.value; 
    }
    v_btn.onclick = f_clk;
</script>    
</body>
</html>
```
#### newWin2
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    #id_disp {
        border:1px solid gold;
    }
</style>
</head>
<body>
    메세징 <input id="id_txt1" type=text value=""><br>
    <input id="id_btn" type=button value="전달">
<script>
    var v_btn = document.getElementById("id_btn");
    var v_txt1 = document.getElementById("id_txt1");
    function f_clk(){
        opener.parent.frames[3].document.getElementById("id_txt1").value = v_txt1.value;
    }
    v_btn.onclick = f_clk;
</script>    
</body>
</html>
```

#### WindowOpen
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #id_disp {
            border:1px solid gold;
        }
    </style>
</head>
<body>
    <div id="id_disp"></div>
    <input id="id_btn" type=button value="새 창 열기"><br>
    메세지<input id="id_txt2" type=text value=""><br>
    <input id="id_btn1" type=button value="전달">
    <input type="button" value="창 닫기" onclick="f_wClose()">
<script>
    function f_wClose(){
        v_newWin.close();//안 닫힌다. 스크립트로 연 창만 기본적으로 닫힌다.
    }

    var v_btn1 = document.getElementById("id_btn1");
    var v_txt2 = document.getElementById("id_txt2");

    v_btn1.onclick= function(){
        if(!v_newWin){ //null이면?
            alert("새 창을 열고 전달해주세요!");
            return;
        }
        v_newWin.document.getElementById("id_txt1").value = v_txt2.value;
        v_newWin.document.getElementById("id_disp").innerHTML +=
                              v_txt2.value + "<br>";
    }

    var v_btn = document.getElementById("id_btn");
    var v_newWin =null;
    v_btn.onclick = function(){
            //window.open은 세 가지의 매개변수를 가진다

            //두 번째 자리에 있는 매개변수는 window의 name 파라미터로 지정해주면 
            //이미 그 이름으로 열린 윈도우가 있으면 그 윈도우로 감(더 이상 새로운 창이 열리지 않는다는 뜻)

            //세 번째 자리에 있는 매개변수는 위치, 크기를 설정할 수 있다. 
            //많이 악용되었던 메소드로, 점점 제약사항이 많아지고 있다. 
        v_newWin=window.open("newWin.html","ngm","width=200,height=200,left=100,top=100");
    }
</script>    
</body>
</html>
```

#### 디자이너 관점에서 본 Class
- emmet 축약기법
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .fgYellow{
            color: yellow;
        }
        .fgBlue{
            color: blue;
        }
        .bgRed{
            background-color: red;
        }
        .bgGold{
            background-color: gold;
        }
        .bgMagenta{
            background-color: magenta;
        }
    </style>
</head>
<body>
    <!-- table>tr*8>td*4 emmet 축약기법-->
    <table>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>

    <div class="fgBlue bgMagenta">사승원1</div>
    <div class="fgGreen bgRed">사승원2</div>
    <div class="bgMagenta">사승원3</div>
    <div class="fgYellow">사승원4</div>
</body>
</html>
```

#### overflow : hidden을 이용해 도형 자르기

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #id_what{
            overflow: hidden;/* 부모 벗어난 자식 잘라내버리기 */
            position: relative;
            left: 100px;
            top : 100px;
            width: 200px;
            height: 200px;
            /* border:1px solid black; */
            transform: rotate(45deg);
        }
        .cl_common{
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 100px;
            background-color: red;
        }
        .cl_one{
            left: 100px;
        }
        .cl_two{
            top: 100px;
        }
    </style>
</head>
<body>
    <div id="id_what">
        <div class="cl_one cl_common"></div>
        <div class="cl_two cl_common"></div>

    </div>
</body>
</html>
```

#### 오늘의 과제(수정필요)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        #id_ssw{
            position: relative; /* position의 디폴트는 static이라서 안 움직임*/
            width: 200px;
            height: 200px;
            background-image: url(./img/son3.jpeg);
            background-size: 200px 200px;
            
        }
    </style>
</head>
<body>
    <div id="id_ssw" ></div>
    <script>
        //onload, onresize, innerWidth, innerHeight를 이용해서 이미지가 항상 가운데에 있도록 해보기
        //브라우져 사이즈를 변경해도 가운데 있게 하기 

        var v_imgW = 200; //이미지 넓이 설정한 값
        var v_imgH = 200; //이미지 높이 설정한 값
        
        var v_wdt = window.innerWidth
        var v_hgt = window.innerHeight

        var v_img = document.getElementById("id_ssw");
        window.onload = function(){
            v_img.style.top = (v_wdt + v_imgW)/2
            v_img.style.left = (v_hgt + v_imgH)/2
        }
        window.onresize = function(){
            console.log("window넓이 : " + window.innerWidth);
            console.log("window높이 : " + window.innerHeight);
        }
        
    
    </script>
</body>
</html>
```