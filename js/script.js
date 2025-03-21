$(document).ready(function() {

    $(".menu-custom").on("click", function() {
      $("#rotative-menu").toggleClass("active");
    });

    var currentIndex = 0;
    var totalItems = $('.serviceContent').length;

    function updateCarousel() {
      var itemWidth = $('.serviceContent').outerWidth(); 
      var offset = -(currentIndex * itemWidth); 
      if ($(window).width() <= 576) {
        offset = -(currentIndex * 1155); 
        $('.serviceWrapper').css('transform', 'translateX(' + offset + 'px)');
      } else {
        offset = -(currentIndex * 20); 
        $('.serviceWrapper').css('transform', 'translateX(' + offset + '%)');
      }

      $('.dot').removeClass('active');
      $('.dot').eq(currentIndex).addClass('active');
    }

    $('.dot').on('click', function() {
      currentIndex = $(this).data('slide');
      updateCarousel();
    });

    setInterval(function() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }, 5000); 

    $('#overlay').on('click', function() {
      $('#videoModal').modal('show'); 
      var video = $('#myVideoModal')[0];  
      video.play();  
    });

    $('#thumbnail').on('click', function() {
      $('#overlay').click();  
    });

    $('#videoModal').on('hidden.bs.modal', function () {
      var video = $('#myVideoModal')[0];
      video.pause(); 
      video.currentTime = 0;
    });
  });