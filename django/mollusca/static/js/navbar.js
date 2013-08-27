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
        
        var distance = $("#navbarid").offset().top;
        var $window = $(window);
        var docked;

        $window.scroll(function() {
                if (!docked && $window.scrollTop() >= distance) {
                        $("#navbarid").css("position", "fixed");
                        $("#navbarid").css("top", "0px");
                        $("#navbarid").css("z-index", "20");
                        docked = true

                        intervalId = setInterval('stopbubble()', 0)
                }
                if (docked && $window.scrollTop() <= 409) {
                        $("#navbarid").css("position", "static");
                        docked = false

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
                }
        })

        $(".navbar-brand").mouseover(function() {
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
                if (docked == true || $window.scrollTop() >= 409) {
                        intervalId = setInterval('stopbubble()', 500)
                }
        });
});
