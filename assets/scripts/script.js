function navbar() {
    var x = document.getElementById("topNav");
    if (x.className === "navbar") {
      x.className += " responsivenav";
    } else {
      x.className = "navbar";
    }
}


document.getElementById("submit").addEventListener("click", SubmitFunction);

function SubmitFunction() {
 alert("Tidak berfungsi");
}