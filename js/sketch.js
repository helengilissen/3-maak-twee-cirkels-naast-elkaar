// 3: maak 2 cirkels naast elkaar

var ellipseWidth = 40;
var ellipseHeight = 40;
//var ellipseX = 50;
//var ellipseY = 50;

function setup() {
  createCanvas(100, 200);
  strokeWeight(1); //dikte van lijnen en punten
  point(20,5);
  point(5,20);
}

function draw() {
  ellipse(25, 50, ellipseWidth, ellipseHeight);
  ellipse(75, 50, ellipseWidth, ellipseHeight);
}
