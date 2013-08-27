var countbubble=0;
var increase;
function stopbubble(){
countbubble+=1;

if(document.getElementById('navbarid').style.width=='100%'&&countbubble>=5&&document.getElementById('navbarid-ul').style.opacity==1){

$(".flexiblenavbar").clearQueue();
$(".navbarul").clearQueue();
$(".flexiblenavbar").delay(100);
$(".navbarul").animate({opacity:"0"},100)
$(".flexiblenavbar").animate({width: "5%"}, 500)
streching=false;
/*
if(document.getElementById('navbarid'.style.width=='100%')){

document.getElementById('navbarid-ul').style.display='block';
}
else {
document.getElementById('navbarid-ul').style.display='none';

}
//return false;*/

}

if(document.getElementById('navbarid-ul').style.opacity==0&&streching==false){

document.getElementById('navbarid-ul').style.display='none';
}


}

$(document).ready(function(){
document.getElementById('navbarid-ul').style.opacity=1;
document.getElementById('navbarid').style.width='100%';

$(".flexiblenavbar ").mouseover(function(){
clearInterval(intervalId);
streching=true;
countbubble=0;
if(document.getElementById('navbarid').style.width=='5%'){
//document.getElementById('navbarid').style.zIndex=10;
//document.getElementById('logoimage').style.zIndex=20;
$(".flexiblenavbar").clearQueue();
$(".navbarul").clearQueue();

$(".navbarul").delay(500);

$(".navbarul").animate({opacity:"1"},100)
$(".flexiblenavbar").animate({width: "100%"}, 500)
document.getElementById('navbarid-ul').style.display='block';

//return false;
}
});

$("#logoimage").mouseover(function(){
clearInterval(intervalId);
countbubble=0;
streching=true;
if(document.getElementById('navbarid').style.width=='5%'){
//document.getElementById('navbarid').style.zIndex=10;
//document.getElementById('logoimage').style.zIndex=20;
$(".flexiblenavbar").clearQueue();
$(".navbarul").clearQueue();

$(".navbarul").delay(500);

$(".navbarul").animate({opacity:"1"},100)
$(".flexiblenavbar").animate({width: "100%"}, 500)
document.getElementById('navbarid-ul').style.display='block';
//return false;
}
});


$(".flexiblenavbar ").mouseout(function(){
intervalId=setInterval('stopbubble()',100);
});

$("#logoimage ").mouseout(function(){
intervalId=setInterval('stopbubble()',100);
});
});
