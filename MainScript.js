var FirstName="Mariana";
var LastName= "Vilarim";
var FullName= FirstName + " " + LastName;
var x = 2;
var y = 3;
var w = x + y;
const button = document.getElementById("Buttoncickable");
console.log (FullName);
console.log ("Five ="+ " " + w)
function something(a){ var a="hey";
button.innerHTML=a;}
w++;
console.log(w);
const buttonProject1 = document.getElementById("Render1");
const imageRender1 = document.getElementById("imageRender1");
if (buttonProject1) { 
buttonProject1.addEventListener('click', function() {
    imageRender1.src ="C:/Users/Mariana Vilarim/Documents/Humber/Web dev/Images/Render2.jpg";
    console.log("Button Render 1 pressed");
});
}
const buttonProject2 = document.getElementById("Render2");
if (buttonProject2) { 
buttonProject2.addEventListener('click', function() {
    imageRender1.src ="C:/Users/Mariana Vilarim/Documents/Humber/Web dev/Images/9.jpg";
    console.log("Button Render 2 pressed");
});
}

const buttonProject3 = document.getElementById("Render3");
if (buttonProject3) { 
buttonProject3.addEventListener('click', function() {
    imageRender1.src ="C:/Users/Mariana Vilarim/Documents/Humber/Web dev/Images/13.jpg";
    console.log("Button Render 3 pressed");
});
}
const buttonProject4 = document.getElementById("Render4");
if (buttonProject4) { 
buttonProject4.addEventListener('click', function() {
    imageRender1.src ="C:/Users/Mariana Vilarim/Documents/Humber/Web dev/Images/7.jpg";
    console.log("Button Render 4 pressed");
});
}

//This project it is a quick introduction about my self
