//global variables
var globalColor;    var myArray = [];//creat blank array

//Bubble Constructor
function Bubble(){
    //creat x & y propertites (variable)
    this.x = random(width);
    this.y = random(height);
    this.r = 20; // r is for radius wich is 1/2 the width fo the circle
    this.bubbleSize = this.r*2;//width and height are twice the radius

    //method: draw a bubble <---------------this line define the method which bubble looks like
    this.drawBubble = function(){
    ellipse(this.x,this.y,this.bubbleSize,this.bubbleSize);
    }

    this.changeColor = function(){
        a = random(255);
        b = random(255);
        c = random(255);
        fill(a,b,c);
        this.drawBubble();
    }
}//end Bubble


function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(windowWidth,windowHeight);
    cnv.parent("windows");


    //add stuff to the array with a loop
    for (var i=0; i<200; i++){
        //add Bubbles to the array
        myArray[i] = new Bubble();
        myArray[i].drawBubble();
    }

}//end setup


//listen for mouse presses with the buit-in p5mousePressed method
function mousePressed(){
    //check tha this is working
    console.log("mouse Pressed");

    //loop through myArray and check if mouse is in each Bubble
    var d;
    for(var i=0; i< myArray.length; i++){
//        myArray[i].x myArray[i].r
        //click if mouse is inside of the circle
        var d = dist(mouseX,mouseY, myArray[i].x,myArray[i].y);
        console.log("distance",d);


        //check to see if the distance is less than the radius
        //ie is the mouse in the bubble
        if (d < myArray[i].r) {
            console.log("mouse in bubble")
            myArray[i].changeColor(); //call the color vhange function
        }


    }
}//end mousePressed
