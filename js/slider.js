
      let position = 0;
    let slidesToShow = 2.3;
     
        if (document.documentElement.clientWidth < 960) { // Если медиа запрос совпадает
            slidesToShow = 1.6;
        } 
        if (document.documentElement.clientWidth < 360) { // Если медиа запрос совпадает
            slidesToShow = 1;
        } 
      
       const slidesToScroll = 1;

       const container = document.querySelector('.clients-slider');
       const track = document.querySelector('.clients-slider__list');
       const btnPrev = document.querySelector('.slider__prev-clients');
       const btnNext = document.querySelector('.slider__next-clients');


       const items = document.querySelectorAll('.clients-slider__item');
       const itemsCount = items.length;

       const itemWidth = container.clientWidth / slidesToShow;
       const movePosition = slidesToScroll * itemWidth;

      items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
      });

        btnNext.addEventListener('click', () => {
            const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

            position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;  

            setPosition();
            checkBtns();
        }); 
        
        btnPrev.addEventListener('click', () => {
            const itemsLeft = Math.abs(position) / itemWidth;

            position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;   

            setPosition();
            checkBtns();
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 13 || evt.keyCode === 39) {
              evt.preventDefault();
              if (btnNext.addEventListener) {
                const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

            position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;  

            setPosition();
            checkBtns();
              }
            }
          });

          window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 13 || evt.keyCode === 37) {
              evt.preventDefault();
              if (btnPrev.addEventListener) {
                const itemsLeft = Math.abs(position) / itemWidth;

            position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;   

            setPosition();
            checkBtns();
              }
            }
          });

        const setPosition = () => {
            track.style.transform = `translateX(${position}px)`;
            
        };

        const checkBtns = () => {
            btnPrev.disabled = position === 0;
            btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth; 
       };

       checkBtns();

// Слайдер "Наш опыт интеграции"
       
      let position2 = 0;
       let slidesToShow2 = 2.5;

       if (document.documentElement.clientWidth < 768) {
        slidesToShow2 = 1.6;
    } 
    if (document.documentElement.clientWidth < 550) {
        slidesToShow2 = 1;
    } 
       const slidesToScroll2 = 1;

       const container2 = document.querySelector('.experience-slider');
       const track2 = document.querySelector('.experience-slider__list');
       const btnPrev2 = document.querySelector('.slider__prev-experience');
       const btnNext2 = document.querySelector('.slider__next-experience');


       const items2 = document.querySelectorAll('.experience-slider__item');
       const itemsCount2 = items2.length;

       const itemWidth2 = container2.clientWidth / slidesToShow2;
       const movePosition2 = slidesToScroll2 * itemWidth2;

      items2.forEach((item) => {
        item.style.minWidth = `${itemWidth2}px`;
      });

        btnNext2.addEventListener('click', () => {
            const itemsLeft2 = itemsCount2 - (Math.abs(position2) + slidesToShow2 * itemWidth2) / itemWidth2;

            position2 -= itemsLeft2 >= slidesToScroll2 ? movePosition2 : itemsLeft2 * itemWidth2;  

            setPosition2();
            checkBtns2();
        }); 
        
        btnPrev2.addEventListener('click', () => {
            const itemsLeft2 = Math.abs(position2) / itemWidth2;

            position2 += itemsLeft2 >= slidesToScroll2 ? movePosition2 : itemsLeft2 * itemWidth2;   

            setPosition2();
            checkBtns2();
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 13 || evt.keyCode === 39) {
              evt.preventDefault();
              if (btnNext2.addEventListener) {
                const itemsLeft2 = itemsCount2 - (Math.abs(position2) + slidesToShow2 * itemWidth2) / itemWidth2;

            position2 -= itemsLeft2 >= slidesToScroll2 ? movePosition2 : itemsLeft2 * itemWidth2;  

            setPosition2();
            checkBtns2();
              }
            }
          });

          window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 13 || evt.keyCode === 37) {
              evt.preventDefault();
              if (btnPrev2.addEventListener) {
                const itemsLeft2 = Math.abs(position2) / itemWidth2;

            position2 += itemsLeft2 >= slidesToScroll2 ? movePosition2 : itemsLeft2 * itemWidth2;   

            setPosition2();
            checkBtns2();
              }
            }
          });

        const setPosition2 = () => {
            track2.style.transform = `translateX(${position2}px)`;
            
        };

        const checkBtns2 = () => {
            btnPrev2.disabled = position2 === 0;
            btnNext2.disabled = position2 <= -(itemsCount2 - slidesToShow2) * itemWidth2; 
       };
       
       checkBtns2();
