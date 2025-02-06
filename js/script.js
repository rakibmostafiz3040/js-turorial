//show text
function showTex(){
    document.getElementById('st').innerHTML = "Hello there";
}
//mouse enter
function showText(){
    document.getElementById('me').innerHTML = "Hello there";
}
//on mouse over
function showTe(){
    document.getElementById('mo').innerHTML = "Hello there";
}
//show date
function showDate(){
    document.getElementById('sd').innerHTML = Date();
}
//text change
function changeText(){
    document.getElementById('tc').innerHTML = Date();
}
//bulb on/off
function bulbOn(){
    document.getElementById('img').src="images/on.gif"
}
function bulbOff(){
    document.getElementById('img').src="images/off.gif"
}
//bulb on/off
function bulbOn(){
    document.getElementById('img').src="images/on.gif"
}
function bulbOff(){
    document.getElementById('img').src="images/off.gif"
}
//change images
function bookOne(){
    document.getElementById('book').src="images/book4.png"
}
function bookTwp(){
    document.getElementById('book').src="images/book.png"
}
//swap images
function bookOn(){
    document.getElementById('boo').src="images/pf3.png"
}
function bookTw(){
    document.getElementById('boo').src="images/pf4.png"
}
//text change
function changeCss(){
    document.getElementById('cc').style.color = "red";
}
//show/hide
function cShow(){
    document.getElementById('sh').style.display="block";
}
    function cHide(){
        document.getElementById('sh').style.display="none";
    }
    // on mouse down event
    function mouseDown() {
        document.getElementById("omd").style.color = "red";
      }
      
      function mouseUp() {
        document.getElementById("omd").style.color = "blue";
      }
    //    <!-- on mousemove event -->
    function myFunction(e) {
        let x = e.clientX;
        let y = e.clientY;
        let coor = "Coordinates: (" + x + "," + y + ")";
        document.getElementById("omm").innerHTML = coor;
      }
      
      function clearCoor() {
        document.getElementById("omm").innerHTML = "";
      }
    //   JavaScript Statements
 let x,y,z;  // Statement 1
x = 5;        // Statement 2
y = 46;        // Statement 3
z = x + y;    // Statement 4

document.getElementById("jst").innerHTML =
"The value of z is " + z + "."; 
// Multiple statements on one line
let a, b, c;
a = 5; b = 36; c = a + b;
document.getElementById("ms").innerHTML = c;
// JavaScript Operators
document.getElementById("jo").innerHTML = (5 + 56) * 10;
// Expression
document.getElementById("demo").innerHTML = 5 * 10;
// JavaScript Variables
x = 25;
y = 6;
z = x + y;
document.getElementById("jv").innerHTML =
"The value of z is: " + z;
const m = 15;
const n = 16;
const o = m + n;
document.getElementById("jvc").innerHTML =
"The value of z is: " + o;

// <!-- Arithmetic Operations -->
let l = 3;
let s = (100 + 5) * l;
document.getElementById("jva").innerHTML = s;
// conditional operators

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
document.getElementById("co").innerHTML = "Is A less than B? " + result;

//Object creating

// Create an Object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display Data from the Object:
document.getElementById("oc").innerHTML =
"The car type is " + car.type;
// object methods

const person = {
    firstName: "Rakib",
    lastName: "Mostafiz",
    id: 3040,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  document.getElementById("om").innerHTML = person.fullName();
//   strings

let carName1 = "Hino 1j"; // Double quotes
let carName2 = 'Hino 1j'; // Single quotes

document.getElementById("stg").innerHTML =
carName1 + " " + carName2;
// string length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZA";
document.getElementById("stgl").innerHTML = text.length;
// Iteger and BigIntn

let p = 999999991654621676216;
let q = BigInt("999999991654621676216");
document.getElementById("ib").innerHTML = p + "<br>" + q;
// Arrays

const cars = ["Hino", "Scania", "Tata"];
document.getElementById("arr").innerHTML = cars;
// Arrays length poperty

const fruits = ["Banana", "Orange", "Apple", "Mango","Pulm"];
let size = fruits.length;
document.getElementById("arrlp").innerHTML = size;


// bracket notation

const fruit = ["Banana", "Orange", "Apple", "Mango"];
let fruity = fruit[2];

document.getElementById("alp").innerHTML = fruity ;
// The sort method of array

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruitss;

fruitss.sort();
document.getElementById("demo2").innerHTML = fruitss;
// javascript booleans
document.getElementById("bol").innerHTML = 18 > 81;
            
