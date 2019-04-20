function myFunction() {
  var x = document.getElementById("right_nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}