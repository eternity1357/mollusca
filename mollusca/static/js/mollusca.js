var countBubble = 0
var streching

function stopBubble() {
        countBubble += 1
        
        if (document.getElementById("navbarid").style.width == "100%" && countBubble >= 5 && document.getElementById("navbarid-ul").style.opacity == 1) {
                $(".flexiblenavbar").clearQueue()
                $(".navbarul").clearQueue()
                $(".flexiblenavbar").delay(100)
                $(".navbarul").animate({opacity:"0"},100)
                $(".flexiblenavbar").animate({width: "100px"}, 500)
                streching = false
        }
         
        if (document.getElementById("navbarid-ul").style.opacity == 0 && streching == false) {
                document.getElementById("navbarid-ul").style.display = "none"
        }
}

function maximizeNavbar() {
        clearInterval(intervalId)
        streching = true
        countBubble = 0
        $(".flexiblenavbar").clearQueue()
        $(".navbarul").clearQueue();
        $(".navbarul").delay(500)
        $(".navbarul").animate({opacity:"1"},100)
        $(".flexiblenavbar").animate({width: "100%"}, 500)
        document.getElementById("navbarid-ul").style.display = "block"
}

// Main Part of Navbar Behavior //
$(document).ready(function() {
        var distance = $("#navbarid").offset().top
        var $window = $(window)
        var docked
        var homeHeight = 405

        $window.scroll(function() {
                if (!docked && $window.scrollTop() >= distance) {
                        $("#navbarid").css({"position": "fixed", "top": "0px", "opacity": "0.8"})
                        docked = true
                        intervalId = setInterval("stopBubble()", 1)
                }

                if (docked && $window.scrollTop() <= homeHeight) {
                        $("#navbarid").css({"position": "relative", "opacity": "1"})
                        docked = false
                        maximizeNavbar()
                }
        })

        $(".navbar-brand").mouseover(function() {
                maximizeNavbar()

                if (docked == true || $window.scrollTop() >= homeHeight) {
                        intervalId = setInterval("stopBubble()", 500)
                }
        })
})

// Members' Description Switcher //
$(document).ready(function() {
        $(".description").hide(0)
        $("#description").show(0)

        $(".avatar-img").mouseover(function() {
                var currentId = $(this).attr("id")
                $(".description").hide(0)
                $("#description_"+currentId).show(0)
        })
})
