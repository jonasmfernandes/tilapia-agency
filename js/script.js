$(document).ready(function() {
    // Toggle do menu
    $(".menu-custom").on("click", function() {
      $("#rotative-menu").toggleClass("active");
    });

    // Carousel
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

    // Clique na dot
    $('.dot').on('click', function() {
      currentIndex = $(this).data('slide');
      updateCarousel();
    });

    // Atualiza o carousel automaticamente
    setInterval(function() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }, 5000); 

    // Abrir o modal ao clicar no overlay ou na imagem
    $('#overlay').on('click', function() {
      $('#videoModal').modal('show'); // Exibe o modal
      var video = $('#myVideoModal')[0];  // Obtém o elemento de vídeo
      video.play();  // Inicia a reprodução do vídeo
    });

    // Também funciona ao clicar na imagem
    $('#thumbnail').on('click', function() {
      $('#overlay').click();  // Simula o clique no overlay
    });

    // Parar o vídeo quando o modal for fechado
    $('#videoModal').on('hidden.bs.modal', function () {
      var video = $('#myVideoModal')[0];
      video.pause();  // Pausa o vídeo
      video.currentTime = 0;  // Reseta a posição do vídeo
    });
  });