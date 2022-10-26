function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    background("pink");
}


function preload() {
    img = loadImage("ac img.webp");
}

function draw() {
    image(img,0,0,600,500);

    noFill();
    stroke("red");
    text("AN AC", 100,50);
    rect(100 ,50,450,200);
    
}
