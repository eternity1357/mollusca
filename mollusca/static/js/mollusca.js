// Tag Switcher
var textarray = new Array(3);

$(document).ready(function() {
    $.ajax({url: "/static/data/tabs.xml",
        dataType:"text",
        success: function(response){
            xml = $.parseXML(response);
            textarray[0] = $(xml).find("front").text();
            textarray[1] = $(xml).find("back").text();	
            textarray[2] = $(xml).find("design").text();	
            $("#card-content").html("<p>" + textarray[0] + "</p>");
            },
    });
	 	
    $("#tag-1").mouseover(function(){
        $("#card-content").html("<p>" + textarray[0] + "</p>");
        document.getElementById("card-content").className = "card-1";

        document.getElementById("tag-1").style.zIndex = 1;
        document.getElementById("tag-2").style.zIndex = 0;
        document.getElementById("tag-3").style.zIndex = 0;

        $("#tag-1").css("box-shadow","3px 3px 1px #444, inset 0px 0px 0px #444");
        $("#tag-2").css("box-shadow","3px 3px 1px #444, inset 0px 3px 1px #444");
        $("#tag-3").css("box-shadow","3px 3px 1px #444, inset 0px 3px 1px #444");
    });

    $("#tag-2").mouseover(function(){
        $("#card-content").html("<p>" + textarray[1] + "</p>");
        document.getElementById("card-content").className = "card-2";

        document.getElementById("tag-1").style.zIndex = 0;
        document.getElementById("tag-2").style.zIndex = 1;
        document.getElementById("tag-3").style.zIndex = 0;

        $("#tag-1").css("box-shadow","3px 3px 1px #444, inset 0px 3px 1px #444");
        $("#tag-2").css("box-shadow","3px 3px 1px #444, inset 0px 0px 0px #444");
        $("#tag-3").css("box-shadow","3px 3px 1px #444, inset 0px 3px 1px #444");
        });

    $("#tag-3").mouseover(function(){
        $("#card-content").html("<p>" + textarray[2] + "</p>");
        document.getElementById("card-content").className = "card-3";

        document.getElementById("tag-1").style.zIndex = 0;
        document.getElementById("tag-2").style.zIndex = 0;
        document.getElementById("tag-3").style.zIndex = 1;

        $("#tag-1").css("box-shadow","3px 3px 1px #444, inset 0px 3px 1px #444");
        $("#tag-2").css("box-shadow","3px 3px 1px #444, inset 0px 3px 1px #444");
        $("#tag-3").css("box-shadow","3px 3px 1px #444, inset 0px 0px 0px #444");
    });
});

// Main Part of Navbar Behavior //
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

// Ajax Contact Form
$(document).ready(function() {
    $('[data-toggle="modal"]').click(function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        if (url.indexOf('#') == 0) {
            $(url).modal('show');
        } else {
            $.get(url, function(data) {
                $('<div class="modal fade" id="contact" tabindex="30" role="dialog">' + data + '</div>').modal('show');
            }).success(function() { $('input:text:visible:first').focus(); });
        }
    });
});
