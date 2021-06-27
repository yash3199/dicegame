var n1=Math.random();
n1=(n1*6);
n1=Math.floor(n1) + 1;
var imagesource1=("images/dice" + n1 + ".png")
var n2=Math.random();
n2=(n2*6);
n2=Math.floor(n2) + 1;
var imagesource2=("images/dice" + n2 + ".png")
document.querySelectorAll("img")[0].setAttribute("src",imagesource1);
document.querySelectorAll("img")[1].setAttribute("src",imagesource2);
if(n1>n2)
document.querySelector("h1").innerHTML="PLAYER 1 WIN";
else if(n2>n1)
document.querySelector("h1").innerHTML="PLAYER 2 WIN";
else 
document.querySelector("h1").innerHTML="TIE!";