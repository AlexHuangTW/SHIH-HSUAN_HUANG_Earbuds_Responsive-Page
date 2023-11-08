document.addEventListener("DOMContentLoaded", function() {
    initBurgerMenu();

});

function initBurgerMenu() {
    const burgerBtn = document.querySelector("#burger_button");
    const burgerCon = document.querySelector("#burger-con");

    burgerBtn.addEventListener("click", function() {
        if (burgerCon.style.display === "block") {
            burgerCon.style.display = "none";
        } else {
            burgerCon.style.display = "block";
            burgerCon.classList.add("slide-toggle");
        }
        burgerBtn.classList.toggle("open");
    });
}