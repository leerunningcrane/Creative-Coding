
let t = 0; 

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(153, 153, 225);
}

function draw() {
  background(20, 20); 
  for (let x = 0; x <= width; x = x + 50) {
    for (let y = 0; y <= height; y = y + 10) {
 
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
     
      const angle = xAngle * (x / width) + yAngle * (y / height);

      const myX = x + 60 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 5);
    }
  }

  t = t + 0.01;
}
