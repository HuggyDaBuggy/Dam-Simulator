var points = 0;
var dam = 1;
var random = 0;
var cost = 5;

function point() {
  document.getElementById("dam").setAttribute("src", "../Images/Dams/dam" + dam + ".png")
  var random = Math.floor(Math.random() * (dam * 10)) + 1;
  if (random == 1) {
    alert("Your dam broke lmao")
    death()
  }
  if (random != 1) {
    points = points + (dam * 1);
    document.getElementById("points").innerHTML = "Dam Points: " + points;
  }
}

function load() {
  document.getElementById("dam").setAttribute("src", "../Images/Dams/dam" + dam + ".png")
  document.getElementById("points").innerHTML = "Dam Points: " + points;
  document.getElementById("dam-text").innerHTML = "Level " + dam + " Dam";
}

function buy() {
  if (points == cost || points > cost) {
    dam = dam + 1;
    points = points - cost;
    cost = cost * dam;
    document.getElementById("points").innerHTML = "Dam Points: " + points;
    document.getElementById("dam-text").innerHTML = "Level " + dam + " Dam"; 
    document.getElementById("dam").setAttribute("src", "../Images/Dams/dam" + dam + ".png")
    document.getElementById("buy-dam").setAttribute("src", "Upgrade Dam(" + cost + " Dam points)")
  } else {
    alert("Your too poor lmao")
  }
}

function death() {
  points = 0;
  dam = 1;
  random = 0;
  cost = 5;
  window.location.replace("home.html")
}