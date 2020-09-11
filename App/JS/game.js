function game() {
  var points = 0;
  var dam = 0;
  var random = 0;
  var alive = "true";
  while (alive === "true") {
    if (dam === 0) {
      document.getElementById("dam").setAttribute("src", "../Images/Dams/dam0.png")
      var random = Math.floor(Math.random() * 10) + 1;
      if (random === 1) {
        var alive = "false"
      }
    }
  }
  alert("Your dam broke lmao")
  window.location.replace("home.html")
}
