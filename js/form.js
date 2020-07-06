
// поле ввода сообщение увеличивается

let textareas = document.querySelectorAll('.txta'),
    hiddenDiv = document.createElement('div'),
    content = null;

for (let j of textareas) {
  j.classList.add('txtstuff');
}

hiddenDiv.classList.add('txta');

hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';


for(let i of textareas) {
  (function(i) {
    
    i.addEventListener('input', function() {
      
      i.parentNode.appendChild(hiddenDiv);
      
      i.style.resize = 'none';
      
      i.style.overflow = 'hidden';

       content = i.value;

      content = content.replace(/\n/g, '<br>');
      
       hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

      hiddenDiv.style.visibility = 'hidden';
      hiddenDiv.style.display = 'block';
      i.style.height = hiddenDiv.offsetHeight + 'px';

      hiddenDiv.style.visibility = 'visible';
      hiddenDiv.style.display = 'none';
    });
  })(i);
} 


// поля ввода сообщения и имени

let inputs = document.querySelectorAll('.feedback-form__input');
let labels = document.querySelectorAll('.feedback-form__label');

inputs.forEach((item, i) => {
  
  item.addEventListener("keydown", function () {
    inputs[i].classList.add("border");
    labels[i].classList.add("valid");
  })
});

// ошибка
let textTel = document.querySelectorAll('.feedback-form__input--tel');var itemTel = document.querySelectorAll('.feedback-form__item--tel');


(function() {
    
  
  let elem = document.createElement('div');
          elem.id = 'notify';
          elem.style.display = 'none';

          itemTel[0].appendChild(elem);

  textTel[0].addEventListener('invalid', function(event){
      event.preventDefault();
      if ( ! event.target.validity.valid ) {
          textTel[0].classList.add('invalid');
          elem.textContent   = 'Непраельный формат';
          elem.className     = 'error';
          elem.style.display = 'block';
      }
  });

  textTel[0].addEventListener('textTel', function(event){
      if ( 'block' === elem.style.display ) {
          textTel[0].className = '';
          elem.style.display = 'none';
      }
  });

})();

(function() {
    
  
  let elem = document.createElement('div');
          elem.id = 'notify';
          elem.style.display = 'none';

          itemTel[1].appendChild(elem);

  textTel[1].addEventListener('invalid', function(event){
      event.preventDefault();
      if ( ! event.target.validity.valid ) {
          textTel[1].classList.add('invalid');
          elem.textContent   = 'Непраельный формат';
          elem.className     = 'error';
          elem.style.display = 'block';
      }
  });

  textTel[1].addEventListener('textTel', function(event){
      if ( 'block' === elem.style.display ) {
          textTel[1].className = '';
          elem.style.display = 'none';
      }
  });

})();


// Сообщение после отправки


    const form = document.querySelectorAll('form');
    const desc = document.querySelectorAll('.feedback__desc');
    const massage = document.querySelectorAll('.feedback__desc--submit');

      form.forEach((item, i) => {
  
        item.addEventListener("submit", function (evt) {
          evt.preventDefault();
          massage[i].style.display = 'block';
          desc[i].style.display = 'none';
          form[i].style.display = 'none';
        })
      });
 