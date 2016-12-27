$(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 0){
        //animated fadeInDown
       $('.navbar').removeClass('navbar-static-top').addClass('animated fadeInDown')
       .addClass('navbar-fixed-top');
    } else {
       $('.navbar').removeClass('navbar-fixed-top').removeClass('animated fadeInDown').addClass('navbar-static-top');
    }
});

