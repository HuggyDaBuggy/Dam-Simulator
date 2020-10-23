if (points == "") {
  setCookie("points", 0, 365);
  setCookie("dam", 1, 365);
  setCookie("cost", 1, 365);
}
var points = Number(getCookie("points"));
var dam = Number(getCookie("dam"));
var cost = Number(getCookie("dam"));

function point() {
  document
    .getElementById("dam")
    .setAttribute("src", "../Images/Dams/dam" + dam + ".png");
  var random = Math.floor(Math.random() * (dam * 10)) + 1;
  if (random == 1) {
    alert("Your dam broke lmao");
    death();
  }
  if (random != 1) {
    points = points + dam / 2;
    setCookie("points", points, 365);
    document.getElementById("points").innerHTML = "Dam Points: " + points;
  }
}

function load() {
  document
    .getElementById("dam")
    .setAttribute("src", "../Images/Dams/dam" + dam + ".png");
  document.getElementById("dam-break").innerHTML =
    "1/" + dam * 10 + " chance to break";
  document.getElementById("points").innerHTML = "Dam Points: " + points;
  document.getElementById("dam-text").innerHTML = "Level " + dam + " Dam";
  document.getElementById("buy-dam").innerText =
    "Upgrade Dam(" + cost + " Dam points)";
}

function buy() {
  if (points == cost || points > cost) {
    dam = dam + 1;
    points = points - cost;
    cost = dam * dam * dam;
    setCookie("dam", dam, 365);
    setCookie("cost", cost, 365);
    setCookie("points", points, 365);
    document.getElementById("points").innerHTML = "Dam Points: " + points;
    document.getElementById("dam-text").innerHTML = "Level " + dam + " Dam";
    document.getElementById("dam-break").innerHTML =
      "1/" + dam * 10 + " chance to break";
    document.getElementById("buy-dam").innerText =
      "Upgrade Dam(" + cost + " Dam points)";
    document
      .getElementById("dam")
      .setAttribute("src", "../Images/Dams/dam" + dam + ".png");
  } else {
    alert("You are too poor lmao");
  }
}

function death() {
  setCookie("points", 0, 365);
  setCookie("dam", 1, 365);
  setCookie("cost", 1, 365);
  window.location.replace("home.html");
}
