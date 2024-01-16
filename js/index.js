function openNav() {
    document.getElementById("mySidenavs").style.width = "320px";
}

function closeNav() {
    document.getElementById("mySidenavs").style.width = "0";
}


var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});





  
    /***************************
  
    preloader
  
    ***************************/
    $(document).ready(function() {
      $(".knsl-preloader").animate({
        opacity: 1
      }, {
        duration: 400,
      });
      setTimeout(function() {
        $('.knsl-preloader-number').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 800,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
          });
        });
        $(".knsl-preloader-bar").animate({
          width: '100%'
        }, {
          duration: 800,
          complete: function() {
            $(".knsl-preloader-frame").addClass('knsl-hidden')
          }
        });
      }, 1000);
    });
    /***************************/