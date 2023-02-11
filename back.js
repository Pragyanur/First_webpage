"use strict";

const E = 2.718
alert(NaN ** 0)
console.log("E = " + E)
let B = E
console.log("E + A = " + B)

console.log('backend running')
document.getElementById("portfolio").innerHTML = "Nothing here" + "<br>" + "clicked?";

document.getElementById("btn").addEventListener("mouseover", colorChange);

function colorChange(){
    
}

Element.addEventListener("click", myFunction);
function myFunction(){
    document.getElementById("portfolio").innerHTML = "Nothing here" + "<br>" + "button clicked";
}
//alert("backend here")
