let link = document.querySelector(".header-top__button");
  
  let popup = document.querySelector(".popup");
  let close = popup.querySelector(".popup__close");
  
   
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
