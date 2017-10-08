function setup() {
  createCanvas(400,400);
}
var ypos = 200;
var xpos = 200;
console.log(this);
function draw() {
  fill(2550,0,0);
  background(0);
  ellipse(mouseX,mouseY,50,50);
  xpos++;
  ypos++;
}
