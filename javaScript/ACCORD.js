window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const accord = () => {
        const btns = document.querySelectorAll(".f1");

        const blocks = document.querySelectorAll(".acc-content");

        blocks.forEach((block) => {
            block.classList.add("animate__animated", "animate__bounceInUp");
        });
        
        btns.forEach((btn) => {
            btn.addEventListener("click", function () {
                if (!this.classList.contains("actacchead")) {
                    btns.forEach((btn) => {
                        btn.classList.remove("actacchead", "active-st");
                    });
                    this.classList.add("actacchead", "active-st");
                } else
                    btns.forEach((btn) => {
                        btn.classList.remove("actacchead", "active-st");
                    });
            });
        });
    };
    accord();

});