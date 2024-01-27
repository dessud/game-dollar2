// The Dollar Game - game #2
// https://youtu.be/U33dsEcKgeQ

pauseIt = false;

function setup() {
  
  createCanvas(700, 700);
  frameRate(20);
  count = 0;
  a = 1;
  b = 2;
  c = -2;
  d = 0;
  e = -2;
  f = 3;

  vertices_array = [a, b, c, d, e, f];
  
  // Create the 'Reset' button
  let resetButton = createButton('Reset');
  resetButton.position(width - 150, height - 50);
  resetButton.size(140, 40); // Adjust the size of the button
  resetButton.mousePressed(resetGame);
  
  // Create the 'Open Tide' button
  let openTideButton = createButton('Open Tide');
  openTideButton.position(width - 300, height - 50);
  openTideButton.size(140, 40);
  openTideButton.mousePressed(openTide);

}

function resetGame() {
  count = 0;
  a =  1;
  b =  2;
  c = -2;
  d =  0;
  e = -2;
  f =  3;
  vertices_array = [a, b, c, d, e, f];
  loop(); // Start the loop again
}

function draw() {
  background(220);
  
  textSize(30);
  textAlign(LEFT);
  stroke("black");
  strokeWeight(2);
  text("The Dollar Game 2", 250, 35);

  textSize(20);
  textAlign(LEFT);
  stroke("black");
  strokeWeight(0);
  text("attempts: " + count, 15, 25);
 
  textSize(50);
  textAlign(CENTER);
  strokeWeight(4);
  stroke("black");

  // Edge A-B
  line(115, 185, 350, 185);
  // Edge A-D
  line(115, 185, 230, 370);
  // Edge B-C
  line(350, 185, 585, 185);
  // Edge B-D
  line(350, 185, 230, 370);
  // Edge D-E
  line(230, 370, 465, 370);
  // Edge D-F
  line(230, 370, 230, 585);



  strokeWeight(6);

  // Vertice A - #0 in array
  if (vertices_array[0] > -1) {
    stroke("green");
  } else {
    stroke("red");
  }
  ellipse(115, 185, 100, 100);
  text(vertices_array[0], 115, 200);

  // Vertice B - #1 in array
  if (vertices_array[1] > -1) {
    stroke("green");
  } else {
    stroke("red");
  }
  ellipse(350, 185, 100, 100);
  text(vertices_array[1], 350, 200);
  
  // Vertice C - #2 in array
  if (vertices_array[2] > -1) {
    stroke("green");
  } else {
    stroke("red");
  }
  ellipse(585, 185, 100, 100);
  text(vertices_array[2], 585, 200);
  
  // Vertice D - #3 in array
  if (vertices_array[3] > -1) {
    stroke("green");
  } else {
    stroke("red");
  }
  ellipse(230, 370, 100, 100);
  text(vertices_array[3], 230, 385);

  // Vertice E - #4 in array
  if (vertices_array[4] > -1) {
    stroke("green");
  } else {
    stroke("red");
  }
  ellipse(465, 370, 100, 100);
  text(vertices_array[4], 465, 385);
  
  // Vertice F - #5 in array
  if (vertices_array[5] > -1) {
    stroke("green");
  } else {
    stroke("red");
  }
  ellipse(230, 585, 100, 100);
  text(vertices_array[5], 230, 600);
  
  

  if (min(vertices_array) > -1){
    //rect(0,0,700,700);
    textSize(44);
    textAlign(CENTER);
    stroke("black");
    strokeWeight(0);
    if (count < 6) {
      text("great job!",500,600);
    } else {
      text("you did it!",500,600);
    }
    
    text(count, 500,500);
    text("attempts",500,550);
    noLoop();
  }
}


function mousePressed() {
  if (pauseIt == false) {
    count += 1;
    let x = mouseX;
    let y = mouseY;

    // Vertice A
    if (dist(x, y, 115, 185) < 100) {
      vertices_array[0] -= 2; // A minus 1
      vertices_array[1] += 1; // B minus 1
      vertices_array[3] += 1; // D plus 1
    }
    
    // Vertice B
    if (dist(x, y, 350, 185) < 100) {
      vertices_array[1] -= 2; // B minus 1
      vertices_array[2] += 1; // C plus 1
      vertices_array[3] += 1; // D plus 1
    }

    // Vertice C
    if (dist(x, y, 585, 185) < 100) {
      vertices_array[2] -= 2; // C minus 2
      vertices_array[1] += 1; // B plus 1
    }

    // Vertice D
    if (dist(x, y, 230, 370) < 100) {
      vertices_array[3] -= 4; // D minus 4
      vertices_array[0] += 1; // A plus 1
      vertices_array[1] += 1; // B plus 1
      vertices_array[4] += 1; // E plus 1
      vertices_array[5] += 1; // F plus 1
    }

    // Vertice E
    if (dist(x, y, 465, 370) < 100) {
      vertices_array[4] -= 1; // E minus 2
      vertices_array[3] += 1; // D plus 1
    }
    
    // Vertice F
    if (dist(x, y, 230, 585) < 100) {
      vertices_array[5] -= 1; // E minus 2
      vertices_array[3] += 1; // D plus 1
    }

    noLoop();
    pauseIt = true;
    
  } else {
    loop();
    pauseIt = false;
  }
}

function openTide() {
  window.open("https://www.tide.com", "_self");
}
