var hr, mn, sc;
var scAngle, mnAngle, hrAngle;




function setup() {
  createCanvas(800,400);

  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360); 
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  
  


  

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);

    push();
    rotate(scAngle);
    //translate(0, 0);
    stroke(255, 0, 0);
    strokeWeight(7);
    line(400, 400, 400, 800);
    pop();

    push();
    rotate(mnAngle);
    //translate(0, mnAngle);
    stroke(0, 255, 0);
    strokeWeight(7);
    line(400, 400, 400, 800);
    pop();

    push();
    rotate(hrAngle);
    //translate(0, 0);
    stroke(0, 0, 255);
    strokeWeight(7);
    line(400, 400, 400, 800);
    pop();


  drawSprites();


}