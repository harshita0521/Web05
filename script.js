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

// Solar Calculator

const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click",function(){
    const energy = document.getElementById("energyInput").value;
    const savings = energy*0.30;
    document.getElementById("result").innerHTML="Estimated monthly solar saving:"+savings.toFixed(1)+"kWh";
});