/* -------- Home Page -------- */

/* Navbar Script */

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// } 

/* Click-on Definition Script */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function DropdownText() {
  document.getElementById("homo-sapiens").classList.toggle("show");
}

function DropdownText2() {
  document.getElementById("coal").classList.toggle("show");
}

/* Close the dropdown menu if the user clicks outside of it */
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-text')) {
    var dropdowns = document.getElementsByClassName("dropdown-def");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

/* -------- Book Content -------- */

/* Navbar Dropdown Script */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function DropdownLevels() {
  document.getElementById("dropdown-levels").classList.toggle("show");
}

function DropdownChallenges() {
  document.getElementById("dropdown-challenges").classList.toggle("show");
}

/* Sidenav Script */

/* Setting media query */
var x = window.matchMedia("(min-width: 768px)")

/* Set the width of the side navigation to 300px and the left margin of the page content to 300px */
function openNav() {
  document.getElementById("sidenav").style.width = "300px";
  if (x.matches) { // If media query matches, desktop version
    document.getElementById("main-text").style.marginLeft = "300px";
    document.getElementById("navbar").style.marginLeft = "300px";
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main-text").style.marginLeft = "auto";
  document.getElementById("navbar").style.marginLeft = "auto";
}

/* Submenu Sidebar Script */

function OpenCH0() {
  var x = document.getElementById("ch0");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function OpenCH1() {
  var x = document.getElementById("ch1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function OpenCH2() {
  var x = document.getElementById("ch2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function OpenCH3() {
  var x = document.getElementById("ch3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/* SideTool Script */

/* Set the width of the side tool to 80px and the right margin of the page content to 80px */
function openTool() {
  document.getElementById("sidetool").style.width = "80px";
  if (x.matches) { // If media query matches, desktop version
    document.getElementById("main-text").style.marginRight = "80px";
    document.getElementById("navbar").style.marginRight = "80px";
  }
}

/* Set the width of the side tool to 0 and the right margin of the page content to 0 */
function closeTool() {
  document.getElementById("sidetool").style.width = "0";
  document.getElementById("main-text").style.marginRight = "auto";
  document.getElementById("navbar").style.marginRight = "auto";
}

/* Function displaying the tooltip when cursor is hovered over the icon */
$(document).ready(function(){
  
  $( "#prdtbl" ).tooltip({
    items: "span#prdtbl",
    content: "Periodic Table",
    track: true
  });
});

/* Function that sets the periodic table image to 'block' */
function modalfunc() {
  document.getElementById('modal01').style.display='block';
}

/* Second Click-on Definition Script */
function ShowMore() {
  var x = document.getElementById("coal-info");
  if (x.innerHTML === "Information about coal.. ") {
    x.innerHTML = "Extra Information..";
  } else {
    x.innerHTML = "Information about coal.. ";
  }
} 

/* Exercises Tab Script */

/* Function that structures the tabs */
function ExerciseNumber(evt, Qnum) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(Qnum).style.display = "block";
  evt.currentTarget.className += " active";
} 

/* Function that shows solution */
function Ans1() {
  var x = document.getElementById("Q1-ans");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Ans2() {
  var x = document.getElementById("Q2-ans");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
