var background = document.getElementById("body")
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var p = document.getElementById("pColor");
var h1 = document.getElementById("h1Color");
var h2 = document.getElementById("h2Color");
var custom = document.querySelector("#custom");
var color;


function start(){
    background.style.backgroundColor=localStorage.getItem("color");
}

function changeBackground1(){
    background.style.backgroundColor="#4ebcff";
    h1.style.color="#001d4f";
}

function changeBackground2(){
    background.style.backgroundColor="#EEB6D5";
    h1.style.color="#4D7C2F";
    p.style.color="black"
}

function customBackground(){
    h1.style.color="#000000";
    p.style.color="#000000";
    background.style.backgroundColor = custom.value;
    var newVal = custom.value;
    console.log(newVal);
    localStorage.setItem("color",newVal);
}


window.onload = start
btn1.addEventListener("click", changeBackground1);
btn2.addEventListener("click", changeBackground2);
custom.addEventListener("input",customBackground);
