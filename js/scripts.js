var dateElement = document.getElementById("example-date-input");
dateElement.value = new Date().toISOString().slice(0, 10);

var timeElement = document.getElementById("example-time-input");
timeElement.value = new Date().toISOString().slice(11, 19);

$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    $("#showLoginModal").click(function(){
        $('#loginModal').modal('toggle');
    });
    $("#showReservationModal").click(function(){
        $('#reservationModal').modal('toggle');
    });
    $("#closeLoginModal").click(function(){
        $('#loginModal').modal('toggle');
    });
    $("#cancelLoginModal").click(function(){
        $('#loginModal').modal('toggle');
    });
    $("#closeReservationModal").click(function(){
        $('#reservationModal').modal('toggle');
    });
    $("#cancelReservationModal").click(function(){
        $('#reservationModal').modal('toggle');
    });

});