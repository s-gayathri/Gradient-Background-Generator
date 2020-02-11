var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2"); //. because it is a class selector
var body = document.getElementById("gradient");
var button = document.querySelector(".randombtn");
setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function getColor() {
    var hex = "0123456789ABCDEF";
    var color = '#';
    for(var i=0; i<6; i++) {
        color = color+hex[Math.floor(Math.random()*16)];
    }
    return color;
}

function generateRandom() {
    color1.value = getColor();
    color2.value = getColor();
    setGradient();
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

button.addEventListener("click",generateRandom);