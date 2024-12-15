var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;

var initials ='aw'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('images/footstep.jpg');
  img2 = loadImage('images/test.png');
  img3 = loadImage('images/test2.png');
  img4 = loadImage('images/test3.png');
  img5 = loadImage('images/lock.png');
  img6 = loadImage('images/soul.png');
  img7 = loadImage('images/larva.png');
  img8 = loadImage('images/parasite.png');
  img9 = loadImage('images/sin.png');
  img10 = loadImage('images/postmortem.jpg');
  img11 = loadImage('images/melanoma.jpg');
  img12 = loadImage('images/multimelanoma.jpg');
  img13 = loadImage('images/theology.jpg');
  img14 = loadImage('images/uncooked.png');
  
}

function setup() {
createCanvas(1000, 1000);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool

    stroke(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool

    stroke(300, 100, 0, 80);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 20, 20);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {

    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {

    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'q' || toolChoice == 'Q') { // q places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
   } else if (toolChoice == 'w' || toolChoice == 'W') { // w places the image we pre-loaded
    image(img2, mouseX, mouseY, 50, 50); 
    
       } else if (toolChoice == 'e' || toolChoice == 'E') { // e places the image we pre-loaded
    image(img3, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 'r' || toolChoice == 'R') { // r places the image we pre-loaded
    image(img4, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 't' || toolChoice == 'T') { // t places the image we pre-loaded
    image(img5, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 'y' || toolChoice == 'Y') { // y places the image we pre-loaded
    image(img6, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 'u' || toolChoice == 'U') { // u places the image we pre-loaded
    image(img7, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 'i' || toolChoice == 'I') { // i places the image we pre-loaded
    image(img8, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 'o' || toolChoice == 'O') { // o places the image we pre-loaded
    image(img9, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 'p' || toolChoice == 'P') { // p places the image we pre-loaded
    image(img10, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 'a' || toolChoice == 'A') { // a places the image we pre-loaded
    image(img11, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 's' || toolChoice == 'S') { // s places the image we pre-loaded
    image(img12, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 'd' || toolChoice == 'D') { // d places the image we pre-loaded
    image(img13, mouseX, mouseY, 50, 50); 
    
      } else if (toolChoice == 'f' || toolChoice == 'F') { // f places the image we pre-loaded
    image(img14, mouseX, mouseY, 50, 50); 
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
