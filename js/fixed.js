let logoColor = document.querySelector('.header-top__logo--color');
let logoAnimate = document.querySelector('.header-top__logo--light');
let logoLight = document.querySelector('.header-top__logo--light1');

window.onscroll = function showHeader() {  

    if(window.pageYOffset > 130) {
        logoLight.style.display = "block";
        logoLight.classList.add('light');
        logoAnimate.style.display = "none";
    }  else{
        logoLight.style.display = "none";
        logoLight.classList.remove('light');
       logoAnimate.style.display = "block";
    }

    if(window.pageYOffset > 1450) {
      logoLight.style.display = "none";
      logoColor.classList.add('light');
      logoColor.style.display = "block";
  }  else{
    logoColor.style.display = "none";
  }
  
}