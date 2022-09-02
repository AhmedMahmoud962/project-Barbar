// navbar icon 
const manubtn = document.getElementById('manubtn');
const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');

navbar.style.right = "-250px";
manubtn.addEventListener("click", (eo) => {
    if (navbar.style.right == "-250px") {
        navbar.style.right = 0;
        menu.src = "image/close.png";
    } else {
        navbar.style.right = "-250px";
        menu.src = "image/menu.png";

    }
})

// manubtn.addEventListener("click", (eo) => {

//     menu.style.display = "none";
//     navbar.style.display = "block";
// })