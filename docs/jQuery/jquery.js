/* -------- Home Page -------- */

/* Function that displays a tooltip with content of "content:" 
below the text wrapped by <span> of id hmsp */
$(document).ready(function(){
  
  $( "#hmsp" ).tooltip({
    items: "span#hmsp",
    content: "The binomial name Homo sapiens was coined by Carl Linnaeus (1758).[3] The Latin noun homō (genitive hominis) means \"human being\", while the participle sapiēns means \"discerning, wise, sensible\".",
    track: true
  });
});

/* -------- Energy 1 -------- */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function DropdownLevels() {
  document.getElementById("dropdown-levels").classList.toggle("show");
}

function DropdownChallenges() {
  document.getElementById("dropdown-challenges").classList.toggle("show");
}

/* Close the dropdown if the user clicks outside of it */
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("dropdown-levels");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("dropdown-challenges");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

/* Sidebar */

function openNav() {
  document.getElementById("side-content").style.width = "250px";
  document.getElementById("main-text").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("side-content").style.width = "0";
  document.getElementById("main-text").style.marginLeft= "0";
}