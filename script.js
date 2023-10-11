const tabcontent = document.getElementsByClassName("tab-contents");
const tablinks = document.getElementsByClassName("tab-links");

function slideTab(evt, links) {
  var i, tabcontent, tablinks;

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-link", "");
  }
  document.getElementById(links).style.display = "block";
  evt.currentTarget.className += " active-link";
}
