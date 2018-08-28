/** Function that displays a tooltip with content of "content:" below the text wrapped by <span> of id hmsp
**/
$(document).ready(function(){
  
  $( "#hmsp" ).tooltip({
    items: "span#hmsp",
    content: "The binomial name Homo sapiens was coined by Carl Linnaeus (1758).[3] The Latin noun homō (genitive hominis) means \"human being\", while the participle sapiēns means \"discerning, wise, sensible\".",
    track: true
  });
});


/**
*Function displaying the tooltip when cursor is hovered over the icon
**/
$(document).ready(function(){
  
  $( "#prdtbl" ).tooltip({
    items: "span#prdtbl",
    content: "Periodic Table",
    track: true
  });
});

/**
*Function that sets the periodic table image to 'block'
**/
function modalfunc() {
  document.getElementById('modal01').style.display='block';
}

/** KEYBOARD SHORTCUTS**/

/**
*Keyboard shortcut for 'p' to display or remove periodic table
**/
$(document).ready(function(){
    $(document).keydown(function(event){ 
        if(event.which == 80){
          if(document.getElementById('modal01').style.display == "none"){
            modalfunc();
          } else {
            document.getElementById('modal01').style.display="none";
          }
        }
    });
});

/**
*Keyboard shortcut for LeftArrowKey to trigger previous page button
**/
$(document).ready(function(){
    $(document).keydown(function(event){ 
        if(event.which == 37){
          var a = document.getElementById('previous').href;
          document.location.href = a;
        }
    });
});

/**
*Keyboard shortcut for RightArrowKey to trigger next page button
**/
$(document).ready(function(){
    $(document).keydown(function(event){ 
        if(event.which == 39){
          var a = document.getElementById('next').href;
          document.location.href = a;
        }
    });
});

$(document).ready(function () {
    
    $("#sidenav li").on('click', function(e){
       $(this).siblings('ul').toggle('show');
    });
  
});

function dropfunc() {
    document.getElementById("content1").classList.toggle("show");
}

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

