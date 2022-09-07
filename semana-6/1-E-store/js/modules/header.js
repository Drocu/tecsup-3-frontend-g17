const header = () => {
    const navThemeButton = document.getElementById('navThemeButton');
    
    const toggleTheme = () => {
      const body = document.querySelector('.body');
      body.classList.toggle('body--light');
      navThemeButton.classList.toggle('nav__action--theme-active');
    };
  
    navThemeButton.addEventListener('click', toggleTheme);
  };
  
  export default header;