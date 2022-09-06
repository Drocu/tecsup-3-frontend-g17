const header = () => {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
  
    const documentScroll = () => {
      header.classList.toggle('header--scroll', scrollY > 0);
      nav.classList.toggle('nav--scroll', scrollY > 0);
    };
  
    document.addEventListener('scroll', documentScroll);
  };
  
  export default header;