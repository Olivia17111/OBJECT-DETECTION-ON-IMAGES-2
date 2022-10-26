function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    background("pink");
}

function preload() {
    img = loadImage("tv.jpg");
}

function draw() {
    image(img,0,0,600,500);
        noFill();
        stroke("red");
        text("A TV",100,130);
        rect(100,130,370,160);
        
   
}


