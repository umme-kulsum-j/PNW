// alert("it's working")

// function go() {
//   var go = document.getElementById("wheretogo")
//
// }
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
