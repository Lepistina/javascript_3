//this is a single comment in javascript 

/*
Block comment - good for whole sections being turned off
*/

// VARIABLES 

//string type of data******************* 

var  usertName = "iuliia"; //setting a variable

userName = "bob"; //using a var

//the = is the assignment operator

var firstName = "Iuliia"; 
var lastName = "Zemliana";


//Bad variable names, no numbers, no symbols
//var @00hi there = "something"
var time = "12:30" //because it is reserved key words, or var var, var function, var true (reserved key word), you should be specific about name of your var  (var variable 122229 - at least if you've been told to use it.), very long var names
//var this-is-my-variable //bad name for var

//using single and double quotes 
var myComment = "who said this :";
var myQuote = '"all the world\'s a stage"'; //single quote print literal characters 
var myQuote = "all the world &copy; s a stage"; //&copy; - special character 

console.log(myComment); //Shows the value of myComment to the console, when we reload
//console.log(myQuote);
 

var message =firstName + " " + lastName; //joining two variables
console.log(message);

//target and replace elements on the page ...

var string1 = document.getElementById("string1");
string1.innerHTML = message;


var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
//console.log(imagePath);
message = message.toUpperCase();
//console.log(message);

//NUMBER************************* (don't use quotes for numbers)
var level = 1;
var lives = 3;
var ssNumber = 34569696; //this is integer (not a float and not a negative)
var cost = 1.50; //this is a float type number. if it is a decimal

var cost1 = "50";
var cost2 = 50;
var total = Number(cost1) * cost2; //perform math by adding;
//console.log(total);

//console.log(level);

//**** ARRAY DATA TYPE *****
//it is a var which can hold a lot of things. it is a list
//create an array. Zero index - mean the first start from 0.
var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";

//imageList.push("images/oil/thumbs/artwork_8.jpg");
var imagePlaceholder = document.getElementById('placeholder');
imagePlaceholder.setAttribute("src" , imageList[4]); ///udate the src attribute of the image

//console.log(imageList.length);

//WHy do we care about validation of data? 

//**** Boolean DATA TYPE *****
//it is a variable 
//truth or false, yes or no, 1 or 0 
var oldEnough = false;

var hasContent  = true;




//****if/then statements (branching logic, aplication logic, business logic )****************

var age = 20;
//check the age...
if(age >= 20 && age != 5){ // less then or equal 
    //too young
    oldEnough = false;

} else {

    oldEnough = true;
}

if (oldEnough == true){
//more code here. It is a code block
    //==means is equal to
    //=means gets set to 
    console.log("you may go on the roler coaster");
}else{
console.log("you may NOT go on the roler coaster");
}


//****Functions****************
//---are reusable chunks of code that can be called at ny time
//***Function's methods and objects****
//What is a method? They are functions but they belong to objects
//What are objects? Objects are the collecation of property and methods. 

function dynamicGreeting(){
//create the build-in date object
    var now = new Date();
    var time = now.getHours();//extract the hours
    
    if(time < 12){
    alert("Good Morning");
    }
    if(time ==12){
    alert("time to eat lunch");
    }
    if(time > 12){
        alert("Good evening, the time is  ..." + now.toLocaleString());
    }
}

dynamicGreeting();//Loops help to do repeptitive work very easy




//********Loops****************
//Loops help to do repeptitive work very easy
















