
const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("show");
}); 
// Закриваємо мобільне меню після переходу за посиланням
const navLinks = nav.querySelectorAll("a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("show");
    });
});



