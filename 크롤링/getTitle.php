<?php
   $ygyCont = file_get_contents("https://www.youtube.com/watch?v=".$_GET["ygyCode"]);
   $stIndex = strpos($ygyCont, "<title>");  // js의 indexOf함수
   $endIndex = strpos($ygyCont, "</title>"); // 코드값에 맞는 타이틀을 찾고 싶은 것
   echo substr($ygyCont, $stIndex+7,$endIndex-($stIndex+17));
?>