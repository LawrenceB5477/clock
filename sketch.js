var hrs;
var mins;
var secs;

var secring;
var minring;
var hourring;

secringsize = 500;
minringsize = 470;
hourringsize = 440;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  background(141,229,181);
  translate(300,300);
  rotate(-90);
  hrs = hour();
  mins = minute();
  secs = second();

  secring = map(secs, 0, 60, 0, 360);
  minring = map(mins, 0, 60, 0, 360);
  hourring = map(hrs % 12, 0, 12, 0, 360);

  push();
  rotate(secring);
  stroke(201,51,51);
  line(0, 0, 150, 0);
  pop()

  push();
  rotate(minring);
  stroke(67,197,155);
  line(0, 0, 120, 0);
  pop()

  push();
  rotate(hourring);
  stroke(249,143,107);
  line(0, 0, 90, 0);
  pop()

  stroke(0);
  point(0,0);

  noFill();
  strokeWeight(4);
  stroke(255);
  arc(0, 0, secringsize, secringsize, 0, 360);
  strokeWeight(10);
  stroke(255, 100, 150);
  arc(0, 0, secringsize, secringsize, 0, secring);

  strokeWeight(4);
  stroke(255);
  arc(0, 0, minringsize, minringsize, 0, 360);
  strokeWeight(10);
  stroke(163,45,216);
  arc(0, 0, minringsize, minringsize, 0, minring);

  strokeWeight(4);
  stroke(255);
  arc(0, 0, hourringsize, hourringsize, 0, 360);
  strokeWeight(10);
  stroke(59,150,253);
  arc(0, 0, hourringsize, hourringsize, 0, hourring);
}


//mousePressed - when clicking
//mouseX, mouseY, height, width
//map function used to map values
//map(incoming, range start, range end, new range s, new range end)
