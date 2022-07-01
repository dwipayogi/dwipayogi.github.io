function navbar() {
    var x = document.getElementById("topNav");
    if (x.className === "navbar") {
      x.className += " responsivenav";
    } else {
      x.className = "navbar";
    }
  }