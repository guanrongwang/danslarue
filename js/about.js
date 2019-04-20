var i = 0;
var txt = 'Albert Camus said, the value of travel is fear; for me, the valuable thing about travel is my growth after experiencing fear.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

$(document).ready(function() {
  typeWriter();
});

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type_head").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
