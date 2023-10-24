let x=0;
let y=0;


let right = false;
let left = false;
let up = false;
let down = false;
function setup() {
  createCanvas(800, 500);
  noStroke();
}
function draw() {
  background(225);
  fill(0);
  for(let i=0;i<800;i+=50)rect(i-x,-y,20,500);
  fill('pink');
  rect(375,225,50,50);
  
  
  if(right) x+=5;
  if(left) x-=5;
  if(down) y+=5;
  if(up) y-=5;
}
function keyPressed(){
  if (key=='d')right=true;
  if (key=='a')left=true;
  if (key=='s')down=true;
  if (key=='w')up=true;
}
function keyReleased(){
  if (key=='d')right=false;
  if (key=='a')left=false; 
  if (key=='s')down=false;
  if (key=='w')up=false;
}