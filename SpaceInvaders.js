var character;
var charX = 300;
var charY = 450;
var charLoc = 50;
var speed = 5;
var projectileX;
var projectileY;
var testA= 0;
var testB= 0;

var enemyX = 300;
var enemyY = 50;
var enemyC = 65;


var projTemp;
function setup() {
  createCanvas(600,600);
  
  noCursor();
  smooth();
  //stroke(0,255,0);
  // strokeWeight(10);

}

function draw() {
  // var mouseDist = dist(mouseX,mouseY,pmouseX,pmouseY);
  background(0,0,0);
  ellipse(charX,charY,50,50);

  var mdist = dist(projectileX, enemyX,projectileY,enemyY);
  println("distance is: ", mdist);
  println(mdist);
  ellipse(enemyX, enemyY,enemyC,enemyC);

  enemyX = enemyX + 1;
  if(enemyX > 400){
    enemyX = 200;
  }
if(mdist < 280)
{
  testB = 1;
  enemyC = enemyC + 10;
  testB = 0;
}
  //Controls
  if(keyIsDown){

    if(key == "w"){
      println("up");
      charY -= speed;
      if(testB == 0){
        testA = 1;
        projectileX=charX;
        projectileY=charY;
        ellipse(projectileX, projectileY,10);
      }



      }
    if(key == "s"){
      println("down");
      charY+=speed;

      if(testB == 0){
        testA = 1;
        projectileX=charX;
        projectileY=charY;
        ellipse(projectileX, projectileY,10);
      }

      }
    if(key == "a"){
      println("left");
      charX-= speed;
      if(testB == 0){
        testA = 1;
        projectileX=charX;
        projectileY=charY;
        ellipse(projectileX, projectileY,10);
      }

          }
    if(key == "d"){
      println("right");
      charX+= speed;
      if(testB == 0){
        testA = 1;
        projectileX=charX;
        projectileY=charY;
        ellipse(projectileX, projectileY,10);
      }

          }
    if(key == 'q'){
      println("ultimate");
      projectileX=charX;
      projectileY=charY;
      ellipse(projectileX, projectileY,10);

    }
    else{
      if(testB == 0){
        testA = 1;
        projectileX=charX;
        projectileY=charY;
        ellipse(projectileX, projectileY,10);
      }
    }



    //
    // if(keyTyped == "l") {
    //   ellipse(projectileX,projectileY,10);
    //   projectileY = projectileY - 10;
    //   println("projectile");
    //   }

      if (key === 'l'){
        testB = 1;
        ellipse(projectileX, projectileY,10);
        projectileY = projectileY - 10;
        println("projectile");

        var hPX = projectileX;
        var hPY = projectileY;
        var hPC;
        for(var hiddenProj = 0; hPC < 100;hPC++)
        {
          ellipse(hPX,hPY,50);
          hPY = hPY - 10;
        }

      } else if (key === 'k'){
        testB = 0;
        println("no");
      }





}

}
