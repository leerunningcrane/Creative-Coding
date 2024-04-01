function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(134, 150, 58);
    textSize(22)
    text("Lee Terrance Running Crane", 10,80);
	//head 
        strokeWeight(1);
		 stroke(0,0,0);
		 fill(224,156,126,255);
		 circle(270,240,189);
	//hair
         strokeWeight(1);
		 stroke(0,0,0);
		 fill(135,31,20,255);
		 beginShape();
		 vertex(180,240);
		 vertex(150,180);
		 vertex(180,180);
		 vertex(210,150);
		 vertex(270,120);
		 vertex(330,150);
		 vertex(360,150);
		 vertex(390,240);
		 vertex(360,270);
		 vertex(330,210);
		 vertex(300,240);
		 vertex(270,180);
		 vertex(270,210);
		 vertex(240,180);
		 vertex(240,210);
		 vertex(240,240);
		 vertex(210,210);
		 vertex(180,240);
		 endShape();
	//eyes and nose	
         strokeWeight(1);
		 stroke(0,0,0);
		 fill(0,0,0);
		 circle(240,270,10);
		 strokeWeight(1);
		 stroke(0,0,0);
		 fill(0,0,0);
		 circle(300,300,10);
		 strokeWeight(1);
		 stroke(0,0,0);
		 fill(0,0,0);
		 circle(270,300,10);
		 stroke(0,0,0);
		 strokeWeight(1);
		 line(240,300,270,330);}