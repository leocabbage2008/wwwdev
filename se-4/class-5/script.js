var aud;
var count = 0;
window.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  var audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
  aud = audio;
});
function tog() {
  if (count % 2 == 1) {
    aud.pause();
    document.getElementById("dynam").classList = "bi bi-play";
  } else {
    aud.play();
    document.getElementById("dynam").classList = "bi bi-pause";
  }
  console.log(document.getElementById("dynam").classList);
  count++;
}
