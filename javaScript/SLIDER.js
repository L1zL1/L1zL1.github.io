window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    // Текущий слайд
    let slideIndex = 1,
        slides = document.querySelectorAll(".formblock"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".formdots"),
        dots = document.querySelectorAll(".dot");

    showSlides(slideIndex);
    // Принимала аргумент номер слайда, который нужно показать
    function showSlides(n) {
        // дополнительно делаем проверку чтобы индекс не вышел за пределы
        if (n > slides.length) {
            // Возвращаемся к первому слайду
            slideIndex = 1;
        }
        if (n < 1) {
            // Возвращаемся к последнему слайду
            slideIndex = slides.length;
        }

        slides.forEach((item) => (item.style.display = "none"));
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        dots.forEach((item) => item.classList.remove("formdot-active"));

        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].classList.add("formdot-active");
    }
    function plusSlides(n) {
        showSlides((slideIndex += n));
    }
    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    prev.addEventListener("click", function () {
        plusSlides(-1);
    });

    next.addEventListener("click", function () {
        plusSlides(1);
    });
    //Создаем событие клика на родителя, используя делегирование событий
    dotsWrap.addEventListener("click", function (event) {
        // перебираем все dot и узнаем на какую именно кликнули
        for (let i = 0; i < dots.length + 1; i++) {
            // проверяем элемент на соответствие и узнаем номер точки
            if (
                event.target.classList.contains("dot") &&
                event.target == dots[i - 1]
            ) {
                currentSlide(i);
            }
        }
    });

});