function openSlide(evt, slideName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(slideName).style.display = "block";
  evt.currentTarget.className += " active";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwOiGieKD091JlVyg4B3dUcqVbvEjG5YG234fRiyz48c0OIciysVweJCIZU_7f-jeIB/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function openmenu() {
  document.getElementById("nav-links").classList.add("open");
  document.getElementById("menu-icon").style.display = "block"; // Hide menu icon when open
}

function closemenu() {
  document.getElementById("nav-links").classList.remove("open");
  document.getElementById("menu-icon").style.display = "block"; // Show menu icon when closed
}
function popupFn() {
  document.getElementById(
      "overlay"
  ).style.display = "block";
  document.getElementById(
      "popupDialog"
  ).style.display = "block";
}
function closeFn() {
  document.getElementById(
      "overlay"
  ).style.display = "none";
  document.getElementById(
      "popupDialog"
  ).style.display = "none";
}
