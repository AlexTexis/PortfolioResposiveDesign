const nav = document.getElementById('nav');
const iconMenu = document.getElementById('iconMenu');
const windowResize = window.matchMedia('screen and (max-width:767px)');
windowResize.addListener(EventTouch);

function EventTouch(event)
{
  if(event.matches)
  {
    iconMenu.addEventListener('touchstart',toggleMenu);
  }
  else
  {
    iconMenu.removeEventListener('touchstart',toggleMenu);

  }
}

function toggleMenu()
{
  nav.classList.toggle('show');
}