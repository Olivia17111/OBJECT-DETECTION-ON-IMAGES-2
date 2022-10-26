function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    background("pink");
}

function preload() {
    img = loadImage("plants img.png");
}

function draw() {
    image(img,0,0,600,500);

    noFill();
    stroke("red");
    text("A PLANT", 80,75);
    rect(80,75,430,230);
    
}