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

</body>
</html>

```
