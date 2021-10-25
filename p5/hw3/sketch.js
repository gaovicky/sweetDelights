var nightSky;

function preload() {
  nightSky = loadImage("nightsky.jpeg");
}

function setup() {
  createCanvas(500,500);
}

function draw() {
      // moon
      translate(width/2-50, height/2);
      arc(50, 50, 100, 50, 0, PI);
}
