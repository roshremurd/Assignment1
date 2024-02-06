
let backGroundDrawn=false;
let currentColor='none';


function setup() {
  createCanvas(1000, 500);

}

function draw() {

  if(!backGroundDrawn){{
    background(220);
    backGroundDrawn=true;
  }}
  trueBrown=color(101, 55, 0);
  strokeWeight(0);
  fill('red');
  square(0,0,30);
  fill('orange');
  square(0,30,30);
  fill('yellow');
  square(0,60,30);
  fill('lime');
  square(0,90,30);
  fill('cyan');
  square(0,120,30);
  fill('blue');
  square(0,150,30);
  fill('magenta')
  square(0,180,30);
  fill('brown');
  square(0,210,30);
  fill('white');
  square(0,240,30);
  fill('black');
  square(0,270,30);

 

  if(mouseIsPressed ){
   
      strokeWeight(10);
      stroke(currentColor);
      line(pmouseX,pmouseY,mouseX,mouseY);
    
   }

   



}
function mouseClicked(){
  if(dist(mouseX,mouseY,15,15)<15){
    currentColor='red';
  }
  else if(dist(mouseX,mouseY,15,30)<30){
    currentColor='orange';
}
else if (dist(mouseX,mouseY,15,45)<45){
  currentColor='yellow';
}
else if( dist(mouseX,mouseY,15,60)<60){
  currentColor='lime';
}
else if( dist(mouseX,mouseY,15,75)<75){
  currentColor='cyan';
}
else if( dist(mouseX,mouseY,15,90)<90){
  currentColor='blue';
}
else if( dist(mouseX,mouseY,15,105)<105){
  currentColor='magenta';
}
else if( dist(mouseX,mouseY,15,120)<120){
  currentColor='brown';
}
else if( dist(mouseX,mouseY,15,135)<135){
  currentColor='white';
}
else if( dist(mouseX,mouseY,15,150)<150){
    currentColor='black';

}
}

