var countbubble = 0;
var streching;

function stopbubble() {
        countbubble += 1;
        
        if (document.getElementById('navbarid').style.width == '100%' && countbubble >= 5 && document.getElementById('navbarid-ul').style.opacity==1) {
                $(".flexiblenavbar").clearQueue();
                $(".navbarul").clearQueue();
                $(".flexiblenavbar").delay(100);
                $(".navbarul").animate({opacity:"0"},100);
                $(".flexiblenavbar").animate({width: "100px"}, 500);
                streching = false;
        }
         
        if (document.getElementById('navbarid-ul').style.opacity==0 && streching==false) {
                document.getElementById('navbarid-ul').style.display = 'none';
        }
}

$(document).ready(function() {
        document.getElementById('navbarid-ul').style.opacity = 1;
        document.getElementById('navbarid').style.width = '100%';
        
        // Maximize navbar with navbar title
        $(".flexiblenavbar ").mouseover(function() {
                clearInterval(intervalId);
                streching = true;
                countbubble = 0;
                if (document.getElementById('navbarid').style.width == '100px') {
                $(".flexiblenavbar").clearQueue();
                $(".navbarul").clearQueue(); 
                $(".navbarul").delay(500);                
                $(".navbarul").animate({opacity:"1"},100)
                $(".flexiblenavbar").animate({width: "100%"}, 500)
                document.getElementById('navbarid-ul').style.display = 'block';
                }
        });

        $(".flexiblenavbar ").mouseout(function() {
                intervalId = setInterval('stopbubble()',100);
        });

        var distance = $("#navbarid").offset().top;
        var $window = $(window);

        $window.scroll(function() {
                if ($window.scrollTop() >= distance) {
                        $("#navbarid").css("position", "fixed");
                        $("#navbarid").css("top", "0px");
                }

        })
});
