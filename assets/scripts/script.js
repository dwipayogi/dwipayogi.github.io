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
 alert("kaga bisa banh");
}

// Set the date we're counting down to
var penghitungWaktu = new Date("Aug 1, 2022 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var timer = penghitungWaktu - now;

  // Time calculations for days, hours, minutes and seconds
  var hari = Math.floor(timer / (1000 * 60 * 60 * 24));
  var jam = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var menit = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  var detik = Math.floor((timer % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("timer").innerHTML = hari + "d " + jam + "h "
  + menit + "m " + detik + "s ";

  // If the count down is finished, write some text
  if (timer < 0) {
    clearInterval(x);
    document.getElementsById("timer").innerHTML = "EXPIRED";
  }
}, 1000);