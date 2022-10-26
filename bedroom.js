function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    background("pink");
}

function preload() {
    img = loadImage("bed image.jpg");
}

function draw() {
    image(img,0,0,600,500);
}

function draw() {
    image(img,0,0,600,500);

    noFill();
    stroke("red");
    text("A BED", 100,150);
    rect(100 ,150,350,300);
    
}

