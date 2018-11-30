<!--离开状态-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         
         document.title = '我改名字了嘻嘻嘻';
         clearTimeout(titleTime);
     }
     else {
        
         document.title = '改回来啦' ;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });