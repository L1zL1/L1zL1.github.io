window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //ФИЛЬТРАЦИЯ
    let allTab = document.querySelector('.all'),
        upTab = document.querySelector('.up'),
        downTab = document.querySelector('.down'),
        warmTab = document.querySelector('.warm'),
        tabCard = document.querySelectorAll('.cardinline'),
        allTabCard = Array.from(tabCard);



        upTab.addEventListener('click', showUp)
    function showUp() {
        allTabCard.forEach(filt => {
            filt.classList.remove("remove", "show");

            allTab.classList.remove("filtr-act");
            upTab.classList.add("filtr-act");
            downTab.classList.remove("filtr-act");
            warmTab.classList.remove("filtr-act");

            if (!filt.classList.contains("show")) {
                if (filt.classList.contains("up")) {
                    filt.classList.add("show");
                } else
                    filt.classList.add("remove");
            } else
                filt.classList.remove("show");
        })
    }

    downTab.addEventListener('click', showDown)
    function showDown() {
        allTabCard.forEach(filt => {
            filt.classList.remove("remove", "show");

            allTab.classList.remove("filtr-act");
            upTab.classList.remove("filtr-act");
            downTab.classList.add("filtr-act");
            warmTab.classList.remove("filtr-act");

            if (!filt.classList.contains("show")) {
                if (filt.classList.contains("down")) {
                    filt.classList.add("show");
                } else
                    filt.classList.add("remove");
            } else
                filt.classList.remove("show");
        })
    }

    warmTab.addEventListener('click', showWarm)
    function showWarm() {
        allTabCard.forEach(filt => {
            filt.classList.remove("remove", "show");

            allTab.classList.remove("filtr-act");
            upTab.classList.remove("filtr-act");
            downTab.classList.remove("filtr-act");
            warmTab.classList.add("filtr-act");

            if (!filt.classList.contains("show")) {
                if (filt.classList.contains("warm")) {
                    filt.classList.add("show");
                } else
                    filt.classList.add("remove");
            } else
                filt.classList.remove("show");
        })
    }

    
    allTab.addEventListener('click', showall)
    function showall() {
        allTabCard.forEach(filt => {

            allTab.classList.add("filtr-act");
            upTab.classList.remove("filtr-act");
            downTab.classList.remove("filtr-act");
            warmTab.classList.remove("filtr-act");

            filt.classList.remove("remove", "show");
        })
    }

});
