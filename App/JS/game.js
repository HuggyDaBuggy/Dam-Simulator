var points = 0;
var dam = 0;
var random = 0;
var alive = "true";

function point() {
  if (dam == 0) {
    document.getElementById("dam").setAttribute("src", "../Images/Dams/dam0.jfif")
    var random = Math.floor(Math.random() * 10) + 1;
    if (random == 1) {
      alert("Your dam broke lmao")
      window.location.replace("home.html")
    }
    if (random != 1) {
      points = points + 1;
      document.getElementById("points").innerHTML = points;
    }
  }
}

function load() {
  document.getElementById("dam").setAttribute("src", "../Images/Dams/dam0.jfif")
  document.getElementById("points").innerHTML = "0";
}