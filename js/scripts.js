// script tooltip
// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();

// });

// paue and play carsoul
// $(document).ready(function(){
//     $('#mycarousel').carousel({interval:2000});
//     $('#pause').click(function(){
//         $('#mycarousel').carousel('pause');
//     });
//     $('#play').click(function() {
//         $('#mycarousel').carousel('cycle');
//     });

// });


$(document).ready(function(){
    // pause and play carsoul in one button

    $('#mycarousel').carousel({interval:2000});

    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');

        }else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }

    });
    // show moadl
    $('#reverse').click(function(){
        $('#reserveModal').modal('show');
    })

    $('#loginModal').click(function(){
        $('#loginmodal').modal('show');
    })

});