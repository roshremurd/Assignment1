function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  
  background(220);
  
  //first drawing-Circle and square
  strokeWeight(0);
  fill('rgb(38,230,0)');
  rect(10,50,180,95);
  fill('rgb(0,0,0');
  strokeWeight(1);
  stroke('black');
  circle(55,100,75);
  fill('rgb(0,0,0');
  stroke('black');
  square(105,60,75);
  strokeWeight(0);

  //second drawing-Triple circles 
  noStroke();
  square(10,200,180);

  fill(230,108,132,170);
  circle(97,260,95);
  fill(125,230,99,170);
  circle(127,320,95);
  fill(99,134,230,170);
  circle(67,320,95);
  

  //third drawing- Pacman
  fill('black');
  rect(200,50,180,95);
  fill('yellow');
  arc(245,100,80,80,PI+ QUARTER_PI, 3*QUARTER_PI); 
  fill('red');
  arc(330,110,80,100,PI,0);
  noStroke();
  rect(290,110,80,28);
  fill('white');
  circle(310,100,24);
  circle(350,100,24);
  fill('blue');
  circle(310,100,14);
  circle(350,100,14);

  //fourth drawing-Heineken looking thing
  fill('rgb(26,0,153)');
  square(200,200,180);
  fill('white');
  circle(290,285,95);
  fill('green');
  circle(290,285,90);
  beginShape();
  strokeWeight(2)
  stroke('white');   //this is causing the very first shape i drew to be outlined with these stroke & stroke weight parameters and idk why.. 
  fill('red');
  vertex(290,235);  //tip top
  vertex(280,270);  //interior
  vertex(240,270);   //left  tip 
  vertex(272,290);   //interor
  vertex(260,325);   //botom left tip 
  vertex(290,305);//interior
  vertex(320,325);  //bottom right
  vertex(308,290);//interior 
  vertex(340,270);//right tip 
  vertex(300,270); //interor 
  endShape(CLOSE);

 









  

}

