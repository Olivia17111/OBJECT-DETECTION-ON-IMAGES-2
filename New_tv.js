status = "" ;

function preload() {
    img = loadImage("tv.jpg");
    }
    
function setup()
{
    Objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Not Detecting Objects"; 
    canvas = createCanvas(600,500);
    canvas.center();
    background("pink");

}

function modelLoaded() {
    status = "true";
    Objectdetector.detect(img, gotResults);
    console.log("model loaded");
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
}
function gotResults(error,results)
{
    if (error) {
        console.log(error);
      }
      else {
      console.log(results);
      objects = results;}
}

function draw() {
image(img,0,0,600,500);
    noFill();
    stroke("red");
    text("A TV",100,130);
    rect(100,130,370,160);
    

}

