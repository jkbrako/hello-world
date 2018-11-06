function sayC() {
  console.log("Hello, console")
}

 function sayP() {
   alert("Hello, Pop-Up")
 }

 function sayBrowser() {
  var p = document.getElementById("Hello");
 	p.innerHTML = "Hello, World";
 }

function sayStranger() {
  var person = prompt("Please enter your name");
  if (person != null) {
    alert("Hello " + person + "!");
  }
}
