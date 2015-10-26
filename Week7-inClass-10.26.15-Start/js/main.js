//global variables
var globalColor;

//Bubble Constructor
function Bubble(){
    //creat x & y propertites (variable)
    this.x = random(width);
    this.y = random(height);
    this.r = 20; // r is for radius wich is 1/2 the width fo the circle
    this.bubbleSize = this.r*2;//width and height are twice the radius

    //method: draw a bubble <---------------this line define the method which bubble looks like
    this.drawBubble = function(){
        globalColor = color (random(255),random(255),random(255));
        fill(globalColor);
    ellipse(this.x,this.y,this.bubbleSize,this.bubbleSize);
    }
}//end Bubble


function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("windows");

    var myArray = [];//creat blank array
    //add stuff to the array with a loop
    for (var i=0; i<20; i++){
        //add Bubbles to the array
        myArray[i] = new Bubble();
        myArray[i].drawBubble();// <----------this line really act "draw bubble"
    }

    //log out the array
    console.log(myArray);

    // Loop to go through every item in the array
    for(var i=0; i < myArray.length; i++){
//        myArray[i]+=100;
        console.log(myArray[i]);
    }
    console.log(myArray);
}//end setup

