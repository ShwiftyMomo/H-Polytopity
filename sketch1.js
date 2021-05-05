let poly;
function setup() {
    createCanvas(1425, 580);

    poly = new Polygon(5,100);
}

function draw(){
    background(200);

    poly.over();
    poly.update();
    poly.show();
}

function mousePressed() {
    poly.pressed();
}

function mouseReleased() {
    poly.released();
}