// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
  const brown = color(150, 128, 96);
  const white = color(255, 255, 255);
}

function draw(){
  background(160, 192, 255);
}

function draw(){
  ellipse(windowWidth/2, windowHeight/2, 500, 585);

  ellipse(windowWidth/2, windowHeight/2, 200, 100);

  ellipse(windowWidth/2 - 50, windowHeight/2, 50, 70);

  ellipse(windowWidth/2 + 50, windowHeight/2, 50, 70);

  ellipse(windowWidth/2 - 100, windowHeight/2 - 100, 80, 100);

  ellipse(windowWidth/2 + 100, windowHeight/2 - 100, 80, 100);
  
  ellipse(windowWidth/2 - 150, windowHeight/2 + 100, 80, 100);
  
  ellipse(windowWidth/2 + 150, windowHeight/2 + 100, 80, 100);
  
  ellipse(windowWidth/2 - 180, windowHeight/2 - 250, 80, 100);
  
  ellipse(windowWidth/2 + 180, windowHeight/2 - 250, 80, 100);
  
  ellipse(windowWidth/2 - 150, windowHeight/2 + 290, 100, 80);
  
  ellipse(windowWidth/2 + 150, windowHeight/2 + 290, 100, 80);

  line(windowWidth/2 - 200,windowHeight/2 - 20, windowWidth/2 - 200,windowHeight/2 + 20);

  line(windowWidth/2 - 180,windowHeight/2 - 20, windowWidth/2 - 180,windowHeight/2 + 20);

  line(windowWidth/2 + 180,windowHeight/2 - 20, windowWidth/2 + 180,windowHeight/2 + 20);

  line(windowWidth/2 + 200,windowHeight/2 - 20, windowWidth/2 + 200,windowHeight/2 + 20);

  if(keyIsPressed){
    fill('brown');
  }else{
    fill('white');
  }

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
