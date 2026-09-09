// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn .addEventListener("click",function(){
    navLinks.classList.toggle("show");
});

const links = document.querySelectorAll(".navlinks a");

links.forEach(function (link){
    link.addEventListener("click",function(){
        navLinks.classList.remove("show");
    });
});