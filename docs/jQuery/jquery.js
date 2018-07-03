$(document).ready(function(){
  
  $( "#hmsp" ).tooltip({
    items: "span#hmsp",
    content: "The binomial name Homo sapiens was coined by Carl Linnaeus (1758).[3] The Latin noun homō (genitive hominis) means \"human being\", while the participle sapiēns means \"discerning, wise, sensible\".",
    track: true
  });
});

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* First version on open/close function, which is obsolesced by openNav and openTool below
// Side nav open and close button functions
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("push").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("push").style.marginLeft = "0";
}

// Side Tool open and close button functions
function openNav2() {
    document.getElementById("sidetool").style.width = "100px";
    document.getElementById("push").style.marginRight = "100px";
}

function closeNav2() {
    document.getElementById("sidetool").style.width = "0";
    document.getElementById("push").style.marginRight = "0";
}
*/

function openNav() {
  var x = document.getElementById("sidenav").style.width;
  if (x != "250px") {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("push").style.marginLeft = "250px";
  }
  else {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("push").style.marginLeft = "0";
  }
}

function openTool() {
  var x = document.getElementById("sidetool").style.width;
  if (x != "60px") {
    document.getElementById("sidetool").style.width = "60px";
    document.getElementById("push").style.marginRight = "60px";
  }
  else {
    document.getElementById("sidetool").style.width = "0";
    document.getElementById("push").style.marginRight = "0";
  }
}

