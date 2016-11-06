var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/hermes.jpg') {
      myImage.setAttribute ('src','images/artist.jpg');
	} else {
	  myImage.setAttribute ('src','images/hermes.jpg');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Who are you?');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Hermes World (Ed. 1 of 3) for you,  ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hermes World (Ed. 1 of 3) for you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
