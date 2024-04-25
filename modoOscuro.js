const cambiarModoOscuro = () => {
    document.body.classList.toggle('modo-oscuro');
  };

  
  const darkModeToggle = document.querySelector('#cambiar-tema');
  darkModeToggle.addEventListener('click', cambiarModoOscuro);