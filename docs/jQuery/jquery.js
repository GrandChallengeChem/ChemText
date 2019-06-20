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

/* -------- Book Content -------- */

/* Sidenav Style */

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

/* Submenu Sidebar Style */

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
} 

/* SideTool Style */

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openTool() {
  document.getElementById("sidetool").style.width = "80px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeTool() {
  document.getElementById("sidetool").style.width = "0";
}

/** Function displaying the tooltip when cursor is hovered over the icon **/
$(document).ready(function(){
  
  $( "#prdtbl" ).tooltip({
    items: "span#prdtbl",
    content: "Periodic Table",
    track: true
  });
});

/** Function that sets the periodic table image to 'block' **/
function modalfunc() {
  document.getElementById('modal01').style.display='block';
}