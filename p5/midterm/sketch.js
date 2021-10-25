var oven = { //inspo: https://image.shutterstock.com/image-vector/kawaii-cooking-kitchen-oven-icon-260nw-1789139135.jpg
  w: 400,
  h: 420,
  display: function() {
    translate(300,290);
    stroke(151, 121, 204); // purple
    strokeWeight(3); // https://p5js.org/reference/#/p5/stroke
    rectMode(CENTER);
    fill(162, 108, 255); // dark purple
    rect(-120, 225, 30, 40, 3); //left leg
    rect(120, 225, 30, 40, 3); //right leg
    fill(188, 163, 251); //larger purple randomRectangles
    rect(0, 0, this.w, this.h, 20); //rectangle has a radius of 20
    fill(200, 184, 228); // dusty light purple
    rect(0, 50, 270, 190); //oven window
    fill(162, 108, 255); // dark purple
    rect(0, -50, 290, 20); // oven door
    ellipse(-120,-150, 30, 30); //knobs
    ellipse(120,-150, 30, 30); //knobs
    ellipse(-60,-150, 30, 30); //knobs
    ellipse(60,-150, 30, 30); //knobs
    line(-200, -100, 200, -100);
    line(-200, 180, 200, 180);
  }
}
var button; //button will "bake" a cupcake
var cupcake = {
  w: 60,
  h: 60,
  display: function() {
    translate(300, 350); //middle of display windowWidth
    strokeWeight(3);
    stroke(243, 124, 239); //dark pink
    fill(248, 179, 246); // pink
    ellipse(0, 0, this.w, this.h);
    stroke(225, 180, 125); //brown
    fill(242, 222, 198); //tan
    quad(-32, 0, -23, 40, 23, 40, 32, 0); //trapezoid: https://p5js.org/reference/#/p5/quad
  }
};
var bakeryText = {
  message: "Sweet Delights",
  display: function(x,y) {
    fill(255, 162, 162); //pastel red
    textSize(70);
    textStyle(BOLD);
    text(this.message, x, y);
  }
}
function preload(){
  // cupcake = loadImage("cupcake0.jpeg");
  // // for (var i = 0; i < 6; i++) {
  // //   cupcake[i] = loadImage('cupcake' + i + '.jpeg');
  // // }
}

function setup() {
  createCanvas(600,600);
  textFont('Garamond'); //change the font to Georgia
  button = createButton("Bake");
  button.position(278,130); // position of button
  button.mousePressed(bakeCupcake); //////!!!!not working!!!!
}

function draw() {
  background(251, 241, 201); // pastel yellow

  push();
  bakeryText.display(180,50);
  bakeryText.display(10,590);
  pop(); //!!!why does it repeat when I press the button?!!!

  push();
  oven.display();
  pop();

}

function bakeCupcake() {
  cupcake.display();
  // imageMode(CENTER); //center image
  // image(cupcake, 0, 50, 120, 170);
}

//<===References===>
//// 7.8 Object and Images by The Coding Train on youtube
// /// https://youtu.be/FVYGyaxG4To
// function Bubble(x, y, img) {
//   this.x = x;
//   this.y = y;
//   this.img = img;
//
//   this.display = function(){
//     imageMode(CENTER);
//     image(this.img, this.x, this.y);
//   }
//
//   this.update = function() {
//     this.x = this.x + random(-1,1);
//     this.y = this.y + random(-1,1);
//   }
// }
// var bubbles = [];
// var img;
// // var flowers = [];
// var cupcake = [];
//
// function preload() {
//   for (var i = 0; i < 6; i++) {
//     // flowers[i] = loadImage('image/flower' + i + '.jpg');
//     cupcake[i] = loadImage('cupcake' + i + '.jpeg');
//   }
// }
// function setup(){
//   createCanvas(600,400);
// }
// function mousePressed() {
//   // var r = floor(random(0, flowers.length));
//   // var b = new Bubble(mouseX, mouseY, flowers[r]);
//   var r = floor(random(0, cupcake.length));
//   var b = new Bubble(mouseX, mouseY, cupcake[r]);
//   bubbles.push(b);
// }
