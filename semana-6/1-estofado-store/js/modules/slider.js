const slider = () => {
    const swiper = new Swiper('#hero-slider', {
        effect: 'coverflow',
        speed: 1500,
        loop: true,
        pagination: {
          clickable:true,
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        autoplay: {
          delay: 5000,
        },
      });



      const mostSelled = new Swiper('#mostSelled', {
        loop: true,
        allowSlideNext: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
          }
        }
      });

};



export default slider;