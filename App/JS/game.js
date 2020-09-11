var points = 0;
var dam = 0;
var random = 0;
var cost = 5;

function point() {
  document.getElementById("dam").setAttribute("src", "../Images/Dams/dam" + dam + ".png")
  var random = Math.floor(Math.random() * 10) + 1;
  if (random == 1) {
    alert("Your dam broke lmao")
    window.location.replace("home.html")
  }
  if (random != 1) {
    points = points + 1;
    document.getElementById("points").innerHTML = "Dam Points: " + points;
  }
}

function load() {
  document.getElementById("dam").setAttribute("src", "../Images/Dams/dam" + dam + ".png")
  document.getElementById("points").innerHTML = "Dam Points: " + points;
}

function buy() {
  if (points == cost || points > cost) {
    dam = dam + 1;
    points = points - cost;
    document.getElementById("points").innerHTML = points;
  }
  else {
    alert("Your too poor lmao")
  }
}