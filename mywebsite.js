/* add <script src="aboutme.js"></script> to <head> of PortfolioPt1.html */
alert("Welcome to my page!");
imgID = 1;

function bigImg(x) {
    x.style.height = "400px";
    x.style.width = "500px";
}

function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "300px";
}

function showHideSection(section){
  var x = document.getElementById(section);
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("show/hide").innerHTML = "Hide About Me"
  } else {
    x.style.display = "none";
    document.getElementById("show/hide").innerHTML = "Show About Me"
  }

