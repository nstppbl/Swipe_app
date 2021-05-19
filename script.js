//Slider effect
new Splide( '.splide' ).mount();

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' ).mount();
} );

var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0, len = elms.length; i < len; i++ ) {
	new Splide( elms[ i ] ).mount();
}


//Settitng clock
var span = document.getElementById('clock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);



// Text submit

function f() {
  // Save text from input into var
  var inputText = document.getElementById("input").value;

  // Create new element
  var node = document.createElement("p");

  // Add class to created element (not used in this application)
  node.classList.add('text');

  // Append input into div
  var textnode = document.createTextNode(`${inputText}`);
  node.appendChild(textnode);
  document.getElementById("content").appendChild(node);
  

}   

// Clear all inputted text by click Clear button
function clearcontent() {
  document.getElementById('content').innerHTML = "";
}

