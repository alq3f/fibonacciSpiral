/*
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
I am providing the source code in good faith!

ATTENTION: IF YOU REFERENCE THIS CODE, PLEASE PROVIDE CREDIT TO alq3f.neocities.org/lib/fibonacciSpiral/index.html
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
*/

var spiral = [0.1,0,0,0,0,0,0,0];
var i = 0;
var sw = 5; //stroke weight

function setup() {
  createCanvas(500 + 500/1.618, 500);
  frameRate(15);
}

function draw() {
  const phi = 1.618033;

  //Setting up the Fibonacci spiral graphic
  background(0);
  stroke(255);
  makeSquare(1, 0, 0, PI, spiral[0], 0, 0, 9);
  makeSquare(1/phi, 500, 0, PI + HALF_PI, spiral[1], 500/phi/phi,0, 7);
  makeSquare(1/phi/phi, 1000/phi,500/phi, 0, spiral[2], 500/phi + (500/phi/phi/phi), 500/phi/phi/phi, 6);
  makeSquare(1/phi/phi/phi, 500, (500/phi)+(500/phi/phi/phi/phi), HALF_PI, spiral[3], 500,(500/phi/phi)+(500/phi/phi/phi/phi), 5);
  makeSquare(1/phi/phi/phi/phi, 500, (500/phi), PI, spiral[4], 500,500/phi, 4);
  makeSquare(1/phi/phi/phi/phi/phi, (1000/phi)-(500/phi/phi/phi/phi/phi), 500/phi, PI + HALF_PI, spiral[5], 500 + (500/phi/phi/phi/phi/phi/phi),500/phi, 3);
  makeSquare(1/phi/phi/phi/phi/phi/phi, 500 + (500/phi/phi/phi/phi) + (500/phi/phi/phi/phi/phi/phi/phi), (500/phi)+(500/phi/phi/phi/phi/phi), 0, spiral[6], 500 + (500/phi/phi/phi/phi/phi) + (500/phi/phi/phi/phi/phi/phi/phi),500/phi + (500/phi/phi/phi/phi/phi/phi/phi), 2);
  makeSquare(1/phi/phi/phi/phi/phi/phi/phi, 500 + (500/phi/phi/phi/phi) + (500/phi/phi/phi/phi/phi/phi/phi/phi/phi/phi/phi/phi/phi/phi), (500/phi)+(500/phi/phi/phi/phi/phi)+(500/phi/phi/phi/phi/phi/phi/phi/phi), HALF_PI, spiral[7], 500 + (500/phi/phi/phi/phi),(500/phi) + (500/phi/phi/phi/phi/phi/phi)+(500/phi/phi/phi/phi/phi/phi/phi/phi), 1);

  //This is where the magic happens!
    if (spiral[i] < HALF_PI){
      spiral[i] = spiral[i] + 0.1;
    }
    else if (spiral[i] >= HALF_PI){
      i++;
    }
    if (i >= 8){
      i=0;
      spiral[0]=0.1;
      spiral[1]=0;
      spiral[2]=0;
      spiral[3]=0;
      spiral[4]=0;
      spiral[5]=0;
      spiral[6]=0;
      spiral[7]=0;
    }

}

function makeSquare(x, y, z, a, b, c, d, sw) {
  noFill();
  strokeWeight(1);
  square(0 +y,0 +z,500*x);
  strokeWeight(sw);
  strokeCap(SQUARE);
  arc(500*x +c, 500*x +d, 1000*x, 1000*x, a, a + b);
}
