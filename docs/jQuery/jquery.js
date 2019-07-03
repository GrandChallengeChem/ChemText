/* -------- Home Page -------- */

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 

/* Click-on Definition Script */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function DropdownText() {
  document.getElementById("homo-sapiens").classList.toggle("show");
}

function DropdownTextExtra() {
  document.getElementById("homo-sapiens-extra").classList.toggle("show");
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

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-text-extra')) {
    var dropdowns = document.getElementsByClassName("dropdown-def-extra");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Function that displays a tooltip with content of "content:" 
below the text wrapped by <span> of id hmsp 
$(document).ready(function(){
  
  $( "#hmsp" ).tooltip({
    items: "span#hmsp",
    content: "The binomial name Homo sapiens was coined by Carl Linnaeus (1758).[3] The Latin noun homō (genitive hominis) means \"human being\", while the participle sapiēns means \"discerning, wise, sensible\".",
    track: true
  });
}); */

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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("sidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

/* Submenu Sidebar Script */

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content
- This allows the user to have multiple dropdowns without any conflict */
var sidebar_dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < sidebar_dropdown.length; i++) {
  sidebar_dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var sub_menu = this.nextElementSibling;
    if (sub_menu.style.display === "block") {
      sub_menu.style.display = "none";
    } else {
      sub_menu.style.display = "block";
    }
  });
}

/* SideTool Script */

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openTool() {
  document.getElementById("sidetool").style.width = "80px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeTool() {
  document.getElementById("sidetool").style.width = "0";
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
