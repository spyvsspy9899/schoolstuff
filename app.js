function f1() {
  alert("the popup alert");
}

f1()
//recalls input
window.onload = function() {
  document.getElementById("Save").onclock = function popup() {
    alert("what it do?");
    f1();
  }
}

//conditional statements

var a = 21
var b = 33
var c = 1

if (a > b) {
  console.log('a < b')
} else if (c > a) {
  console.log('this is false')
} else {
  console.log('c is not greater than a');
}

var a = 1
var b = 2
var c = 3

function printHellofriends() {}
if (a < c) {} else if (b > a) {} else if (c > a) {
  console.log('Hello friends');
}

printHellofriends()

var a = 2
var b = 3
var c = 27

function greetings() {
  if (b > c) {
    Greeeting = "hola";
  } else if (a < c) {
    Greeting = "f off";
  }
  console.log(Greeting);
}

greetings()

function printDogs() {
  var dogBreeds = ['Doberman', 'GreatDane', 'Husky']
  for (var z = 0; z < dogBreeds.length; z++) {
    console.log(dogBreeds[z])
  }
}

printDogs()

function printTupacsshooter() {
  var tupacShooters = ['sugknight', 'biggie', 'tupac'];
  var tupacsshooter = 33;
  for (var tupac = 0; tupac < tupacShooters.length; tupac++) {
    console.log(tupacShooters[tupac]);
  }
}

for (var guccimane = 0; guccimane <= 20; guccimane++) {
  console.log("I'm the real guccimane, gucci!")
}
