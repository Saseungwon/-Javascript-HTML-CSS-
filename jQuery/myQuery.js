//jQuery의 이해
//함수 호출법 --> 함수이름(), new 함수이름() --> new 가 붙으면 function 키워드가 자바의 class처럼 동작
//new가 붙었을 경우의 함수를 constructor(생성자)라고 부름


(function (){ //mydom을 지역변수로 만들기 위해 function으로 묶기

    var $= function(p_sel){ // 계속 new 쓰기 귀찮아서 new를 없애는 함수 만들기
    return new mydom(p_sel);
    }
    
    var mydom = function(p_sel){
    //실제 jQuery는 Query
    var v_elems = document.querySelectorAll(p_sel);
    this.preSel = p_sel;
    this.length = v_elems.length;
    for(var i=0; i < v_elems.length; i++){
    this[i] = v_elems[i]; // this는 새로 생성되는 객체를 가리킴
    }
    return this ; // 이것이 있는 거나 마찬가지, 명시적으로 적었음
    }
    //var sib = $("선택자"); // 위에 new 제외 함수 덕분에 (new mydom을 안 쓰고 $ 만 써도 됨)
    window.$ = $; //지역함수 $를 밖에서 접근할 수 있게 전역 변수$로 참조
    $.fn = mydom.prototype; //mydom에 메소드 추가로 밖에서 할 수 있도록 전역변수 $.fn으로 참조
    })(); // ()해주면 즉각 실행 함수가 됨
    
    
    //ajax
    $.ajax = function(p_setting){
    var v_ajax = new XMLHttpRequest();
    v_ajax.open(p_setting.type,p_setting.url,true);
    v_ajax.onreadystatechange= function(){
    if(v_ajax.readyState == 4 && v_ajax.status == 200){
    alert(v_ajax.responseText);
    }
    }
    v_ajax.send();
    }
    
    
    
    //메소드 추가(플러그인 추가)
    
    $.fn.on = function(p_evt,p_cb){
    for(var i=0; i<this.length; i++){
    this[i].addEventListener(p_evt,p_cb.bind(this[i]));
    //call이나 apply를 쓰면 함수가 실행되어버려서 안 됨 bind 사용
    }
    return this;
    }
    
    
    //attr 속성을 다루는 메소드
    $.fn.attr = function(p_attr, p_arg){
    if(typeof(p_attr) == "string" && !p_arg){ // p_attr은 오고 p_arg함수는 안 넘어왔을 때
    return this[0].getAttribute(p_attr); //읽기
    }
    
    if(typeof(p_attr) == "string" && typeof(p_arg) == "string"){
    console.log(this);
    for(var i =0 ; i< this.length; i++){
    this[i].setAttribute(p_attr, p_arg);
    }
    return this; // 이것은 메소드 체이닝을 위한 것
    }
    
    if(typeof(p_attr) == "object"){
    for(var i =0 ; i< this.length; i++){
    //json의 key값을 뽑으려면 for in 문 사용
    for(var v_attr in p_attr){
    this[i].setAttribute(v_attr, p_attr[v_attr]);
    }
    }
    return this;
    }
    
    
    
    if(typeof(p_attr) == "string" && typeof(p_arg) == "function"){
    for(var i =0 ; i< this.length; i++){
    this[i].setAttribute(p_attr, p_arg(i, this[i].getAttribute(p_attr)));
    }
    return this; // 이것은 메소드 체이닝을 위한 것
    }
    return null;
    
    
    
    
    
    for(var i=0; i<this.length; i++){
    this[i].setAttribute(p_attr, p_cb(i,this[i].getAttribute(p_attr)));
    }
    p_cb(i,p_attr);
    /*
    for(var i=0; i< this.length; i++){
    this[i].setAttribute(p_attr, p_val);
    }
    return this; //이것은 메소드 체인징을 위한 것
    */
    }
    
    
    
    //최초 선택된 객채들로 돌아가는 end 메소드
    $.fn.end = function(){
    return $(this.preSel);
    }
    //eq, index 번호로 선택
    $.fn.eq = function(p_inx){
    this["0"] = this[p_inx];
    for(var i=1; i<this.length; i++){
    delete this[i]; //index 번호랑 다른 것 지워버림
    }
    this.length = 1;
    return this;
    }
    
    // html
    $.fn.html = function(p_arg){
    if(!p_arg){ //읽기
    return this[0].innerHTML;
    }else if(typeof(p_arg) == "string"){ //쓰기
    for(var i =0; i < this.length; i++){
    this[i].innerHTML=p_arg;
    }
    return this; //mydom으로 리턴해주려고 this로 리턴
    }else if(typeof(p_arg) == "function"){ //특별한 제어
    for(var i=0; i< this.length; i++){
    this[i].innerHTML = p_arg(i,this[i].innerHTML);
    }
    return this;
    }else {
    alert("저리 강 나도 몰랑 화가 나넹, 문서 좀 보고 왕");
    }
    }
    
    //value를 편하게 제어하는 메서드
    $.fn.val= function(p_arg){
    if(!p_arg){
    return this[0].value;
    }
    if(typeof(p_arg)== "string"){
    for(var i=0; i< this.length ; i++){
    this[i].value = p_arg
    }
    return this;
    }
    if(typeof(p_arg) == "function"){
    for(var i=0; i< this.length; i++){
    this[i].value = p_arg(i, this[i].value);
    }
    return this;
    }
    return null;
    }
    
    //style 편하게 제어하는 메서드
    $.fn.css = function(p_arg1, p_arg2){
    if(typeof(p_arg1) == "string" && !p_arg2){
    //return this[0].style[p_arg1];
    
    //잘 안 쓰는 메서드라서 앞에 window 붙여서 가독성 좋게
    return window.getComputedStyle(this[0])[p_arg1];
    }
    
    if(typeof(p_arg1) == "object" && !p_arg2){
    for(var i=0; i<this.length; i++){
    for(var v_style in p_arg1){
    this[i].style[v_style] = p_arg1[v_style];
    }
    }
    return this;
    }
    
    if(typeof(p_arg1) == "string" && typeof(p_arg2) == "string"){
    for(var i=0; i<this.length; i++){
    this[i].style[p_arg1] = p_arg2;
    }
    }
    
    if(typeof(p_arg1) == "string" && typeof(p_arg2) == "function"){
    for(var i=0; i<this.length; i++){
    this[i].style[p_arg1] = p_arg2(i,this[i].style[p_arg1]);
    }
    return this; //메소드 체이닝
    }
    
    
    }