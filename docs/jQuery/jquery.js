$(document).ready(function(){
  
  $( "#hmsp" ).tooltip({
    items: "span#hmsp",
    content: "The binomial name Homo sapiens was coined by Carl Linnaeus (1758).[3] The Latin noun homō (genitive hominis) means \"human being\", while the participle sapiēns means \"discerning, wise, sensible\".",
    track: true
  });
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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