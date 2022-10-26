function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    background("pink");
}

function preload() {
    img = loadImage("desk img.webp");
}

function draw() {
    image(img,0,0,600,500);

    noFill();
    stroke("red");
    text("A DESK", 100,150);
    rect(100 ,150,400,300);
    
}

