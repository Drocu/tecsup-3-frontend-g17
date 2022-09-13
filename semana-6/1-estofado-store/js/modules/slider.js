const slider = () => {
    const swiper = new Swiper('#heroSlider', {
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



      const mostSelledSlider = new Swiper('#mostSelledSlider', {
        loop: true,
        speed: 500,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 16
          }
        }
      });

};



export default slider;