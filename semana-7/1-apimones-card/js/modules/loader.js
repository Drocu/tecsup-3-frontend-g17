const loader = () => {
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      loader.classList.add('loader--hide');
  
      setTimeout(() => {
        loader.classList.add('loader--remove');
      }, 1000);
    });
  };
  
  export default loader;