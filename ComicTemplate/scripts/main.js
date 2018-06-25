/*eslint-env browser*/
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myButton = document.querySelector('button');

if(!localStorage.getItem('name')) {
    setUserName();    
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello ' + myName;
}